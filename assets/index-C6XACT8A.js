(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _l(e){const o=Object.create(null);for(const t of e.split(","))o[t]=1;return t=>t in o}const Te={},go=[],Mt=()=>{},jr=()=>!1,ns=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),is=e=>e.startsWith("onUpdate:"),Ee=Object.assign,xl=(e,o)=>{const t=e.indexOf(o);t>-1&&e.splice(t,1)},Ac=Object.prototype.hasOwnProperty,Ce=(e,o)=>Ac.call(e,o),ge=Array.isArray,oo=e=>ya(e)==="[object Map]",Na=e=>ya(e)==="[object Set]",Kl=e=>ya(e)==="[object Date]",_e=e=>typeof e=="function",ze=e=>typeof e=="string",ut=e=>typeof e=="symbol",Be=e=>e!==null&&typeof e=="object",Gr=e=>(Be(e)||_e(e))&&_e(e.then)&&_e(e.catch),Ur=Object.prototype.toString,ya=e=>Ur.call(e),$c=e=>ya(e).slice(8,-1),Kr=e=>ya(e)==="[object Object]",cs=e=>ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ta=_l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ds=e=>{const o=Object.create(null);return t=>o[t]||(o[t]=e(t))},Sc=/-\w/g,tt=ds(e=>e.replace(Sc,o=>o.slice(1).toUpperCase())),Tc=/\B([A-Z])/g,jt=ds(e=>e.replace(Tc,"-$1").toLowerCase()),us=ds(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ls=ds(e=>e?`on${us(e)}`:""),Ke=(e,o)=>!Object.is(e,o),Da=(e,...o)=>{for(let t=0;t<e.length;t++)e[t](...o)},Wr=(e,o,t,a=!1)=>{Object.defineProperty(e,o,{configurable:!0,enumerable:!1,writable:a,value:t})},kl=e=>{const o=parseFloat(e);return isNaN(o)?e:o},Cc=e=>{const o=ze(e)?Number(e):NaN;return isNaN(o)?e:o};let Wl;const ps=()=>Wl||(Wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function me(e){if(ge(e)){const o={};for(let t=0;t<e.length;t++){const a=e[t],s=ze(a)?Pc(a):me(a);if(s)for(const l in s)o[l]=s[l]}return o}else if(ze(e)||Be(e))return e}const Bc=/;(?![^(]*\))/g,Lc=/:([^]+)/,Mc=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Pc(e){const o={};return e.replace(Mc,t=>t.startsWith("/*")?"":t).split(Bc).forEach(t=>{if(t){const a=t.split(Lc);a.length>1&&(o[a[0].trim()]=a[1].trim())}}),o}function Q(e){let o="";if(ze(e))o=e;else if(ge(e))for(let t=0;t<e.length;t++){const a=Q(e[t]);a&&(o+=a+" ")}else if(Be(e))for(const t in e)e[t]&&(o+=t+" ");return o.trim()}const Ic="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Dc=_l(Ic);function Yr(e){return!!e||e===""}function Vc(e,o,t){if(e.length!==o.length)return!1;let a=!0;for(let s=0;a&&s<e.length;s++)a=ms(e[s],o[s],t);return a}function Yl(e,o,t){if(e.size!==o.size)return!1;const a=Array.from(o),s=new Uint8Array(a.length);for(const l of e){let r=-1;for(let n=0;n<a.length;n++)if(!s[n]&&ms(l,a[n],t)){r=n;break}if(r<0)return!1;s[r]=1}return!0}function zc(e,o,t){let a=oo(e),s=oo(o);if(a||s||(a=Na(e),s=Na(o),a||s))return a&&s?Yl(e,o,t):!1;const l=Object.keys(e).length,r=Object.keys(o).length;if(l!==r)return!1;for(const n in e){const c=e.hasOwnProperty(n),f=o.hasOwnProperty(n);if(c&&!f||!c&&f||!ms(e[n],o[n],t))return!1}return String(e)===String(o)}function Xl(e,o,t,a){t||(t=[new Map,new Map]);const[s,l]=t;if(s.has(e)||l.has(o))return s.get(e)===o&&l.get(o)===e;s.set(e,o),l.set(o,e);const r=a(e,o,t);return s.delete(e),l.delete(o),r}function ms(e,o,t){if(e===o)return!0;let a=Kl(e),s=Kl(o);return a||s?a&&s?e.getTime()===o.getTime():!1:(a=ut(e),s=ut(o),a||s?e===o:(a=ge(e),s=ge(o),a||s?a&&s?Xl(e,o,t,Vc):!1:(a=Be(e),s=Be(o),a||s?!a||!s?!1:Xl(e,o,t,zc):String(e)===String(o))))}const Xr=e=>!!(e&&e.__v_isRef===!0),v=e=>ze(e)?e:e==null?"":ge(e)||Be(e)&&(e.toString===Ur||!_e(e.toString))?Xr(e)?v(e.value):JSON.stringify(e,Zr,2):String(e),Zr=(e,o)=>Xr(o)?Zr(e,o.value):oo(o)?{[`Map(${o.size})`]:[...o.entries()].reduce((t,[a,s],l)=>(t[Ms(a,l)+" =>"]=s,t),{})}:Na(o)?{[`Set(${o.size})`]:[...o.values()].map(t=>Ms(t))}:ut(o)?Ms(o):Be(o)&&!ge(o)&&!Kr(o)?String(o):o,Ms=(e,o="")=>{var t;return ut(e)?`Symbol(${(t=e.description)!=null?t:o})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class Ec{constructor(o=!1){this.detached=o,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!o&&Ge&&(Ge.active?(this.parent=Ge,this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let o,t;if(this.scopes){const a=this.scopes.slice();for(o=0,t=a.length;o<t;o++)a[o].pause()}for(o=0,t=this.effects.length;o<t;o++)this.effects[o].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let o,t;if(this.scopes){const s=this.scopes.slice();for(o=0,t=s.length;o<t;o++)s[o].resume()}const a=this.effects.slice();for(o=0,t=a.length;o<t;o++)a[o].resume()}}run(o){if(this._active){const t=Ge;try{return Ge=this,o()}finally{Ge=t}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){if(this._on>0&&--this._on===0){if(Ge===this)Ge=this.prevScope;else{let o=Ge;for(;o;){if(o.prevScope===this){o.prevScope=this.prevScope;break}o=o.prevScope}}this.prevScope=void 0}}stop(o){if(this._active){this._active=!1;let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(this.effects.length=0,t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,a=s.length;t<a;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!o){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rc(){return Ge}let Ve;const Ps=new WeakSet;class Qr{constructor(o){this.fn=o,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&(Ge.active?Ge.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ps.has(this)&&(Ps.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||en(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zl(this),tn(this);const o=Ve,t=bt;Ve=this,bt=!0;try{return this.fn()}finally{on(this),Ve=o,bt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let o=this.deps;o;o=o.nextDep)$l(o);this.deps=this.depsTail=void 0,Zl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ps.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Us(this)&&this.run()}get dirty(){return Us(this)}}let Jr=0,oa,aa;function en(e,o=!1){if(e.flags|=8,o){e.next=aa,aa=e;return}e.next=oa,oa=e}function wl(){Jr++}function Al(){if(--Jr>0)return;if(aa){let o=aa;for(aa=void 0;o;){const t=o.next;o.next=void 0,o.flags&=-9,o=t}}let e;for(;oa;){let o=oa;for(oa=void 0;o;){const t=o.next;if(o.next=void 0,o.flags&=-9,o.flags&1)try{o.trigger()}catch(a){e||(e=a)}o=t}}if(e)throw e}function tn(e){for(let o=e.deps;o;o=o.nextDep)o.version=-1,o.prevActiveLink=o.dep.activeLink,o.dep.activeLink=o}function on(e){let o,t=e.depsTail,a=t;for(;a;){const s=a.prevDep;a.version===-1?(a===t&&(t=s),$l(a),Fc(a)):o=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=s}e.deps=o,e.depsTail=t}function Us(e){for(let o=e.deps;o;o=o.nextDep)if(o.dep.version!==o.version||o.dep.computed&&(an(o.dep.computed)||o.dep.version!==o.version))return!0;return!!e._dirty}function an(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ca)||(e.globalVersion=ca,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Us(e))))return;e.flags|=2;const o=e.dep,t=Ve,a=bt;Ve=e,bt=!0;try{tn(e);const s=e.fn(e._value);(o.version===0||Ke(s,e._value))&&(e.flags|=128,e._value=s,o.version++)}catch(s){throw o.version++,s}finally{Ve=t,bt=a,on(e),e.flags&=-3}}function $l(e,o=!1){const{dep:t,prevSub:a,nextSub:s}=e;if(a&&(a.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=a,e.nextSub=void 0),t.subs===e&&(t.subs=a,!a&&t.computed)){t.computed.flags&=-5;for(let l=t.computed.deps;l;l=l.nextDep)$l(l,!0)}!o&&!--t.sc&&t.map&&t.map.delete(t.key)}function Fc(e){const{prevDep:o,nextDep:t}=e;o&&(o.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=o,e.nextDep=void 0)}let bt=!0;const sn=[];function Pt(){sn.push(bt),bt=!1}function It(){const e=sn.pop();bt=e===void 0?!0:e}function Zl(e){const{cleanup:o}=e;if(e.cleanup=void 0,o){const t=Ve;Ve=void 0;try{o()}finally{Ve=t}}}let ca=0;class Oc{constructor(o,t){this.sub=o,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fs{constructor(o){this.computed=o,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(o){if(!Ve||!bt||Ve===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ve)t=this.activeLink=new Oc(Ve,this),Ve.deps?(t.prevDep=Ve.depsTail,Ve.depsTail.nextDep=t,Ve.depsTail=t):Ve.deps=Ve.depsTail=t,ln(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const a=t.nextDep;a.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=a),t.prevDep=Ve.depsTail,t.nextDep=void 0,Ve.depsTail.nextDep=t,Ve.depsTail=t,Ve.deps===t&&(Ve.deps=a)}return t}trigger(o){this.version++,ca++,this.notify(o)}notify(o){wl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Al()}}}function ln(e){if(e.dep.sc++,e.sub.flags&4){const o=e.dep.computed;if(o&&!e.dep.subs){o.flags|=20;for(let a=o.deps;a;a=a.nextDep)ln(a)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ja=new WeakMap,bo=Symbol(""),Ks=Symbol(""),da=Symbol("");function Je(e,o,t){if(bt&&Ve){let a=ja.get(e);a||ja.set(e,a=new Map);let s=a.get(t);s||(a.set(t,s=new fs),s.map=a,s.key=t),s.track()}}function Ft(e,o,t,a,s,l){const r=ja.get(e);if(!r){ca++;return}const n=c=>{c&&c.trigger()};if(wl(),o==="clear")r.forEach(n);else{const c=ge(e),f=c&&cs(t);if(c&&t==="length"){const m=Number(a);r.forEach((h,g)=>{(g==="length"||g===da||!ut(g)&&g>=m)&&n(h)})}else switch((t!==void 0||r.has(void 0))&&n(r.get(t)),f&&n(r.get(da)),o){case"add":c?f&&n(r.get("length")):(n(r.get(bo)),oo(e)&&n(r.get(Ks)));break;case"delete":c||(n(r.get(bo)),oo(e)&&n(r.get(Ks)));break;case"set":oo(e)&&n(r.get(bo));break}}Al()}function Hc(e,o){const t=ja.get(e);return t&&t.get(o)}function $o(e){const o=Se(e);return o===e||(Je(o,"iterate",da),dt(e))?o:Dt(e)?ao(e)?o.map(t=>so(ht(t))):o.map(so):o.map(ht)}function hs(e){return Je(e=Se(e),"iterate",da),e}function St(e,o){return Dt(e)?so(ao(e)?ht(o):o):ht(o)}const qc={__proto__:null,[Symbol.iterator](){return Is(this,Symbol.iterator,e=>St(this,e))},concat(...e){return $o(this).concat(...e.map(o=>ge(o)?$o(o):o))},entries(){return Is(this,"entries",e=>(e[1]=St(this,e[1]),e))},every(e,o){return zt(this,"every",e,o,void 0,arguments)},filter(e,o){return zt(this,"filter",e,o,t=>t.map(a=>St(this,a)),arguments)},find(e,o){return zt(this,"find",e,o,t=>St(this,t),arguments)},findIndex(e,o){return zt(this,"findIndex",e,o,void 0,arguments)},findLast(e,o){return zt(this,"findLast",e,o,t=>St(this,t),arguments)},findLastIndex(e,o){return zt(this,"findLastIndex",e,o,void 0,arguments)},forEach(e,o){return zt(this,"forEach",e,o,void 0,arguments)},includes(...e){return Ds(this,"includes",e)},indexOf(...e){return Ds(this,"indexOf",e)},join(e){return $o(this).join(e)},lastIndexOf(...e){return Ds(this,"lastIndexOf",e)},map(e,o){return zt(this,"map",e,o,void 0,arguments)},pop(){return Ho(this,"pop")},push(...e){return Ho(this,"push",e)},reduce(e,...o){return Jl(this,"reduce",e,o)},reduceRight(e,...o){return Jl(this,"reduceRight",e,o)},shift(){return Ho(this,"shift")},some(e,o){return zt(this,"some",e,o,void 0,arguments)},splice(...e){return Ho(this,"splice",e)},toReversed(){return $o(this).toReversed()},toSorted(e){return $o(this).toSorted(e)},toSpliced(...e){return $o(this).toSpliced(...e)},unshift(...e){return Ho(this,"unshift",e)},values(){return Is(this,"values",e=>St(this,e))}};function Is(e,o,t){const a=hs(e),s=a[o],l=s.call(a);if(a!==e&&!dt(e)){if(l[Symbol.toStringTag]==="Array Iterator"){const r=Object.create(Object.getPrototypeOf(l));return r.next=()=>Ql(l.next(),t),s!==rn[o]&&Object.defineProperties(r,{return:{get(){const n=l.return;return typeof n=="function"?n.bind(l):n}},throw:{get(){const n=l.throw;return typeof n=="function"?n.bind(l):n}}}),r}l._next=l.next,l.next=()=>Ql(l._next(),t)}return l}function Ql(e,o){return e.done||(e.value=o(e.value)),e}const rn=Array.prototype;function zt(e,o,t,a,s,l){const r=hs(e),n=r!==e&&!dt(e),c=r[o];if(c!==rn[o]){const h=c.apply(e,l);return n?ht(h):h}let f=t;r!==e&&(n?f=function(h,g){return t.call(this,St(e,h),g,e)}:t.length>2&&(f=function(h,g){return t.call(this,h,g,e)}));const m=c.call(r,f,a);return n&&s?s(m):m}function Jl(e,o,t,a){const s=hs(e),l=s!==e&&!dt(e);let r=t,n=!1;s!==e&&(l?(n=a.length===0,r=function(f,m,h){return n&&(n=!1,f=St(e,f)),t.call(this,f,St(e,m),h,e)}):t.length>3&&(r=function(f,m,h){return t.call(this,f,m,h,e)}));const c=s[o](r,...a);return n?St(e,c):c}function Ds(e,o,t){const a=Se(e);Je(a,"iterate",da);const s=a[o](...t);return(s===-1||s===!1)&&vs(t[0])?(t[0]=Se(t[0]),a[o](...t)):s}function Ho(e,o,t=[]){Pt(),wl();const a=Se(e)[o].apply(e,t);return Al(),It(),a}const Nc=_l("__proto__,__v_isRef,__isVue"),nn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ut));function jc(e){ut(e)||(e=String(e));const o=Se(this);return Je(o,"has",e),o.hasOwnProperty(e)}class cn{constructor(o=!1,t=!1){this._isReadonly=o,this._isShallow=t}get(o,t,a){if(t==="__v_skip")return o.__v_skip;const s=this._isReadonly,l=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return l;if(t==="__v_raw")return a===(s?l?ed:mn:l?pn:un).get(o)||Object.getPrototypeOf(o)===Object.getPrototypeOf(a)?o:void 0;const r=ge(o);if(!s){let c;if(r&&(c=qc[t]))return c;if(t==="hasOwnProperty")return jc}const n=Reflect.get(o,t,Fe(o)?o:a);if((ut(t)?nn.has(t):Nc(t))||(s||Je(o,"get",t),l))return n;if(Fe(n)){const c=r&&cs(t)?n:n.value;return s&&Be(c)?Ys(c):c}return Be(n)?s?Ys(n):wo(n):n}}class dn extends cn{constructor(o=!1){super(!1,o)}set(o,t,a,s){let l=o[t];const r=ge(o)&&cs(t);if(!this._isShallow){const f=Dt(l);if(!dt(a)&&!Dt(a)&&(l=Se(l),a=Se(a)),!r&&Fe(l)&&!Fe(a))return f||(l.value=a),!0}const n=r?Number(t)<o.length:Ce(o,t),c=Reflect.set(o,t,a,Fe(o)?o:s);return o===Se(s)&&c&&(n?Ke(a,l)&&Ft(o,"set",t,a):Ft(o,"add",t,a)),c}deleteProperty(o,t){const a=Ce(o,t);o[t];const s=Reflect.deleteProperty(o,t);return s&&a&&Ft(o,"delete",t,void 0),s}has(o,t){const a=Reflect.has(o,t);return(!ut(t)||!nn.has(t))&&Je(o,"has",t),a}ownKeys(o){return Je(o,"iterate",ge(o)?"length":bo),Reflect.ownKeys(o)}}class Gc extends cn{constructor(o=!1){super(!0,o)}set(o,t){return!0}deleteProperty(o,t){return!0}}const Uc=new dn,Kc=new Gc,Wc=new dn(!0);const Ws=e=>e,Aa=e=>Reflect.getPrototypeOf(e);function Yc(e,o,t){return function(...a){const s=this.__v_raw,l=Se(s),r=oo(l),n=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,f=s[e](...a),m=t?Ws:o?so:ht;return!o&&Je(l,"iterate",c?Ks:bo),Ee(Object.create(f),{next(){const{value:h,done:g}=f.next();return g?{value:h,done:g}:{value:n?[m(h[0]),m(h[1])]:m(h),done:g}}})}}function $a(e){return function(...o){return e==="delete"?!1:e==="clear"?void 0:this}}function Xc(e,o){const t={get(s){const l=this.__v_raw,r=Se(l),n=Se(s);e||(Ke(s,n)&&Je(r,"get",s),Je(r,"get",n));const{has:c}=Aa(r),f=o?Ws:e?so:ht;if(c.call(r,s))return f(l.get(s));if(c.call(r,n))return f(l.get(n));l!==r&&l.get(s)},get size(){const s=this.__v_raw;return!e&&Je(Se(s),"iterate",bo),s.size},has(s){const l=this.__v_raw,r=Se(l),n=Se(s);return e||(Ke(s,n)&&Je(r,"has",s),Je(r,"has",n)),s===n?l.has(s):l.has(s)||l.has(n)},forEach(s,l){const r=this,n=r.__v_raw,c=Se(n),f=o?Ws:e?so:ht;return!e&&Je(c,"iterate",bo),n.forEach((m,h)=>s.call(l,f(m),f(h),r))}};return Ee(t,e?{add:$a("add"),set:$a("set"),delete:$a("delete"),clear:$a("clear")}:{add(s){const l=Se(this),r=Aa(l),n=Se(s),c=!o&&!dt(s)&&!Dt(s)?n:s;return r.has.call(l,c)||Ke(s,c)&&r.has.call(l,s)||Ke(n,c)&&r.has.call(l,n)||(l.add(c),Ft(l,"add",c,c)),this},set(s,l){!o&&!dt(l)&&!Dt(l)&&(l=Se(l));const r=Se(this),{has:n,get:c}=Aa(r);let f=n.call(r,s);f||(s=Se(s),f=n.call(r,s));const m=c.call(r,s);return r.set(s,l),f?Ke(l,m)&&Ft(r,"set",s,l):Ft(r,"add",s,l),this},delete(s){const l=Se(this),{has:r,get:n}=Aa(l);let c=r.call(l,s);c||(s=Se(s),c=r.call(l,s)),n&&n.call(l,s);const f=l.delete(s);return c&&Ft(l,"delete",s,void 0),f},clear(){const s=Se(this),l=s.size!==0,r=s.clear();return l&&Ft(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Yc(s,e,o)}),t}function Sl(e,o){const t=Xc(e,o);return(a,s,l)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?o:s==="__v_raw"?a:Reflect.get(Ce(t,s)&&s in a?t:a,s,l)}const Zc={get:Sl(!1,!1)},Qc={get:Sl(!1,!0)},Jc={get:Sl(!0,!1)};const un=new WeakMap,pn=new WeakMap,mn=new WeakMap,ed=new WeakMap;function td(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wo(e){return Dt(e)?e:Tl(e,!1,Uc,Zc,un)}function od(e){return Tl(e,!1,Wc,Qc,pn)}function Ys(e){return Tl(e,!0,Kc,Jc,mn)}function Tl(e,o,t,a,s){if(!Be(e)||e.__v_raw&&!(o&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=s.get(e);if(l)return l;const r=td($c(e));if(r===0)return e;const n=new Proxy(e,r===2?a:t);return s.set(e,n),n}function ao(e){return Dt(e)?ao(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function dt(e){return!!(e&&e.__v_isShallow)}function vs(e){return e?!!e.__v_raw:!1}function Se(e){const o=e&&e.__v_raw;return o?Se(o):e}function ad(e){return!Ce(e,"__v_skip")&&Object.isExtensible(e)&&Wr(e,"__v_skip",!0),e}const ht=e=>Be(e)?wo(e):e,so=e=>Be(e)?Ys(e):e;function Fe(e){return e?e.__v_isRef===!0:!1}function C(e){return sd(e,!1)}function sd(e,o){return Fe(e)?e:new ld(e,o)}class ld{constructor(o,t){this.dep=new fs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?o:Se(o),this._value=t?o:ht(o),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(o){const t=this._rawValue,a=this.__v_isShallow||dt(o)||Dt(o);o=a?o:Se(o),Ke(o,t)&&(this._rawValue=o,this._value=a?o:ht(o),this.dep.trigger())}}function i(e){return Fe(e)?e.value:e}const rd={get:(e,o,t)=>o==="__v_raw"?e:i(Reflect.get(e,o,t)),set:(e,o,t,a)=>{const s=e[o];return Fe(s)&&!Fe(t)?(s.value=t,!0):Reflect.set(e,o,t,a)}};function fn(e){return ao(e)?e:new Proxy(e,rd)}class nd{constructor(o){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new fs,{get:a,set:s}=o(t.track.bind(t),t.trigger.bind(t));this._get=a,this._set=s}get value(){return this._value=this._get()}set value(o){this._set(o)}}function id(e){return new nd(e)}class cd{constructor(o,t,a){this._object=o,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0,this._key=ut(t)?t:String(t),this._raw=Se(o);let s=!0,l=o;if(!ge(o)||ut(this._key)||!cs(this._key))do s=!vs(l)||dt(l);while(s&&(l=l.__v_raw));this._shallow=s}get value(){let o=this._object[this._key];return this._shallow&&(o=i(o)),this._value=o===void 0?this._defaultValue:o}set value(o){if(this._shallow&&Fe(this._raw[this._key])){const t=this._object[this._key];if(Fe(t)){t.value=o;return}}this._object[this._key]=o}get dep(){return Hc(this._raw,this._key)}}class dd{constructor(o){this._getter=o,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Sa(e,o,t){return Fe(e)?e:_e(e)?new dd(e):Be(e)&&arguments.length>1?ud(e,o,t):C(e)}function ud(e,o,t){return new cd(e,o,t)}class pd{constructor(o,t,a){this.fn=o,this.setter=t,this._value=void 0,this.dep=new fs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return en(this,!0),!0}get value(){const o=this.dep.track();return an(this),o&&(o.version=this.dep.version),this._value}set value(o){this.setter&&this.setter(o)}}function md(e,o,t=!1){let a,s;return _e(e)?a=e:(a=e.get,s=e.set),new pd(a,s,t)}const Ta={},Ga=new WeakMap;let fo;function fd(e,o=!1,t=fo){if(t){let a=Ga.get(t);a||Ga.set(t,a=[]),a.push(e)}}function hd(e,o,t=Te){const{immediate:a,deep:s,once:l,scheduler:r,augmentJob:n,call:c}=t,f=T=>s?T:dt(T)||s===!1||s===0?Ot(T,1):Ot(T);let m,h,g,_,k=!1,x=!1;if(Fe(e)?(h=()=>e.value,k=dt(e)):ao(e)?(h=()=>f(e),k=!0):ge(e)?(x=!0,k=e.some(T=>ao(T)||dt(T)),h=()=>e.map(T=>{if(Fe(T))return T.value;if(ao(T))return f(T);if(_e(T))return c?c(T,2):T()})):_e(e)?o?h=c?()=>c(e,2):e:h=()=>{if(g){Pt();try{g()}finally{It()}}const T=fo;fo=m;try{return c?c(e,3,[_]):e(_)}finally{fo=T}}:h=Mt,o&&s){const T=h,L=s===!0?1/0:s;h=()=>Ot(T(),L)}const b=Rc(),$=()=>{m.stop(),b&&b.active&&xl(b.effects,m)};if(l&&o){const T=o;o=(...L)=>{try{return T(...L)}finally{$()}}}let y=x?new Array(e.length).fill(Ta):Ta;const w=T=>{if(!(!(m.flags&1)||!m.dirty&&!T))if(o){const L=m.run();if(T||s||k||(x?L.some((F,V)=>Ke(F,y[V])):Ke(L,y))){const F=fo;Pt();try{g&&g(),fo=m;const V=[L,y===Ta?void 0:x&&y[0]===Ta?[]:y,_];y=L,c?c(o,3,V):o(...V)}finally{fo=F,It()}}}else m.run()};return n&&n(w),m=new Qr(h),m.scheduler=r?()=>r(w,!1):w,_=T=>fd(T,!1,m),g=m.onStop=()=>{const T=Ga.get(m);if(T){if(c)c(T,4);else for(const L of T)L();Ga.delete(m)}},o?a?w(!0):y=m.run():r?r(w.bind(null,!0),!0):m.run(),$.pause=m.pause.bind(m),$.resume=m.resume.bind(m),$.stop=$,$}function Ot(e,o=1/0,t){if(o<=0||!Be(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=o))return e;if(t.set(e,o),o--,Fe(e))Ot(e.value,o,t);else if(ge(e))for(let a=0;a<e.length;a++)Ot(e[a],o,t);else if(Na(e)||oo(e))e.forEach(a=>{Ot(a,o,t)});else if(Kr(e)){for(const a in e)Ot(e[a],o,t);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Ot(e[a],o,t)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _a(e,o,t,a){try{return a?e(...a):e()}catch(s){gs(s,o,t)}}function vt(e,o,t,a){if(_e(e)){const s=_a(e,o,t,a);return s&&Gr(s)&&s.catch(l=>{gs(l,o,t)}),s}if(ge(e)){const s=[];for(let l=0;l<e.length;l++)s.push(vt(e[l],o,t,a));return s}}function gs(e,o,t,a=!0){const s=o?o.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=o&&o.appContext.config||Te;if(o){let n=o.parent;const c=o.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;n;){const m=n.ec;if(m){for(let h=0;h<m.length;h++)if(m[h](e,c,f)===!1)return}n=n.parent}if(l){Pt(),_a(l,null,10,[e,c,f]),It();return}}vd(e,t,s,a,r)}function vd(e,o,t,a=!0,s=!1){if(s)throw e;console.error(e)}const st=[];let gt=-1;const Tt=[];let Qt=null,So=0;const hn=Promise.resolve();let Ua=null;function Oe(e){const o=Ua||hn;return e?o.then(this?e.bind(this):e):o}function gd(e){let o=gt+1,t=st.length;for(;o<t;){const a=o+t>>>1,s=st[a],l=ua(s);l<e||l===e&&s.flags&2?o=a+1:t=a}return o}function Cl(e){if(!(e.flags&1)){const o=ua(e),t=st[st.length-1];!t||!(e.flags&2)&&o>=ua(t)?st.push(e):st.splice(gd(o),0,e),e.flags|=1,vn()}}function vn(){Ua||(Ua=hn.then(yn))}function bd(e){if(!ge(e))Qt&&e.id===-1?Qt.splice(So+1,0,e):e.flags&1||(Tt.push(e),e.flags|=1);else for(let o=0;o<e.length;o++)Tt.push(e[o]);vn()}function gn(e,o,t,a=gt+1){for(;a<st.length;a++){const s=st[a];if(s&&s.flags&2){if(e&&s.id!==e.uid||o!==void 0&&!(s.id>=o))continue;st.splice(a,1),a=e?a-1:gt,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function bn(e,o,t=0){if(Tt.length){let a=Tt,s=0;if(o){a=[];for(let r=0;r<Tt.length;r++){const n=Tt[r];(n.i!==void 0?!n.i||n.i.uid<t:o.has(n))?Tt[s++]=n:a.push(n)}}const l=[...new Set(a)].sort((r,n)=>ua(r)-ua(n));if(Tt.length=s,Qt){for(let r=0;r<l.length;r++)Qt.push(l[r]);return}for(Qt=l,So=0;So<Qt.length;So++){const r=Qt[So];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Qt=null,So=0}}let Vs=!1;function yd(e,o){if(Vs){e();return}const t=o===void 0?void 0:new Set(Tt);e(),Vs=!0;try{gn(void 0,o),bn(void 0,t,o)}finally{Vs=!1}}const ua=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yn(e){try{for(gt=0;gt<st.length;gt++){const o=st[gt];o&&!(o.flags&8)&&(o.flags&4&&(o.flags&=-2),_a(o,o.i,o.i?15:14),o.flags&4||(o.flags&=-2))}}finally{for(;gt<st.length;gt++){const o=st[gt];o&&(o.flags&=-2)}gt=-1,st.length=0,bn(),Ua=null,(st.length||Tt.length)&&yn()}}let Ye=null,_n=null;function Ka(e){const o=Ye;return Ye=e,_n=e&&e.type.__scopeId||null,o}function I(e,o=Ye,t){if(!o||e._n)return e;const a=(...s)=>{a._d&&Qa(-1);const l=Ka(o),r=qt.length;let n;try{n=e(...s)}finally{for(let c=qt.length;c>r;c--)Dl();Ka(l),a._d&&Qa(1)}return n};return a._n=!0,a._c=!0,a._d=!0,a}function Bl(e,o){if(Ye===null)return e;const t=$s(Ye),a=e.dirs||(e.dirs=[]);for(let s=0;s<o.length;s++){let[l,r,n,c=Te]=o[s];l&&(_e(l)&&(l={mounted:l,updated:l}),l.deep&&Ot(r),a.push({dir:l,instance:t,value:r,oldValue:void 0,arg:n,modifiers:c}))}return e}function uo(e,o,t,a){const s=e.dirs,l=o&&o.dirs;for(let r=0;r<s.length;r++){const n=s[r];l&&(n.oldValue=l[r].value);let c=n.dir[a];c&&(Pt(),vt(c,t,8,[e.el,n,e,o]),It())}}function xo(e,o){if(et){let t=et.provides;const a=et.parent&&et.parent.provides;a===t&&(t=et.provides=Object.create(a)),t[e]=o}}function yo(e,o,t=!1){const a=xa();if(a||Io){let s=Io?Io._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&_e(o)?o.call(a&&a.proxy):o}}const _d=Symbol.for("v-scx"),xd=()=>yo(_d);function xn(e,o){return bs(e,null,o)}function kd(e,o){return bs(e,null,{flush:"sync"})}function be(e,o,t){return bs(e,o,t)}function bs(e,o,t=Te){const{immediate:a,deep:s,flush:l,once:r}=t,n=Ee({},t),c=o&&a||!o&&l!=="post";let f;if(ga){if(l==="sync"){const _=xd();f=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Mt,_.resume=Mt,_.pause=Mt,_}}const m=et;n.call=(_,k,x)=>vt(_,m,k,x);let h=!1;l==="post"?n.scheduler=_=>{_.i=m,at(_,m&&m.suspense)}:l!=="sync"&&(h=!0,n.scheduler=(_,k)=>{k?_():Cl(_)}),n.augmentJob=_=>{o&&(_.flags|=4),h&&(_.flags|=2,m&&(_.id=m.uid,_.i=m))};const g=hd(e,o,n);return ga&&(f?f.push(g):c&&g()),g}function wd(e,o,t){const a=this.proxy,s=ze(e)?e.includes(".")?kn(a,e):()=>a[e]:e.bind(a,a);let l;_e(o)?l=o:(l=o.handler,t=o);const r=ka(this),n=bs(s,l.bind(a),t);return r(),n}function kn(e,o){const t=o.split(".");return()=>{let a=e;for(let s=0;s<t.length&&a;s++)a=a[t[s]];return a}}const Xt=new WeakMap,wn=Symbol("_vte"),ys=e=>e.__isTeleport,ho=e=>e&&(e.disabled||e.disabled===""),Ad=e=>e&&(e.defer||e.defer===""),er=e=>typeof SVGElement<"u"&&e instanceof SVGElement,tr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Xs=(e,o)=>{const t=e&&e.to;return ze(t)?o?o(t):null:t},$d={name:"Teleport",__isTeleport:!0,process(e,o,t,a,s,l,r,n,c,f){const{mc:m,pc:h,pbc:g,o:{insert:_,querySelector:k,createText:x,createComment:b,parentNode:$}}=f,y=ho(o.props);let{dynamicChildren:w}=o;const T=(V,E,D)=>{V.shapeFlag&16&&m(V.children,E,D,s,l,r,n,c)},L=(V=o)=>{const E=ho(V.props),D=V.target=Xs(V.props,k),j=Zs(D,V,x,_);D&&(r!=="svg"&&er(D)?r="svg":r!=="mathml"&&tr(D)&&(r="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(D),E||(T(V,D,j),Ko(V,!1)))},F=V=>{const E=()=>{if(Xt.get(V)===E){if(Xt.delete(V),ho(V.props)){const D=$(V.el)||t;T(V,D,V.anchor),Ko(V,!0)}L(V)}};Xt.set(V,E),at(E,l)};if(e==null){const V=o.el=x(""),E=o.anchor=x("");if(_(V,t,a),_(E,t,a),Ad(o.props)||l&&l.pendingBranch){F(o);return}y&&(T(o,t,E),Ko(o,!0)),L()}else{o.el=e.el;const V=o.anchor=e.anchor,E=Xt.get(e);if(E){E.flags|=8,Xt.delete(e),F(o);return}o.targetStart=e.targetStart;const D=o.target=e.target,j=o.targetAnchor=e.targetAnchor,S=ho(e.props),P=S?t:D,K=S?V:j;if(r==="svg"||er(D)?r="svg":(r==="mathml"||tr(D))&&(r="mathml"),w?(g(e.dynamicChildren,w,P,s,l,r,n),Il(e,o,!0)):c||h(e,o,P,K,s,l,r,n,!1),y)S?o.props&&e.props&&o.props.to!==e.props.to&&(o.props.to=e.props.to):Ca(o,t,V,f,1);else if((o.props&&o.props.to)!==(e.props&&e.props.to)){const U=Xs(o.props,k);U&&(o.target=U,Ca(o,U,null,f,0))}else S&&Ca(o,D,j,f,1);Ko(o,y)}},remove(e,o,t,{um:a,o:{remove:s}},l){const{shapeFlag:r,children:n,anchor:c,targetStart:f,targetAnchor:m,target:h,props:g}=e,_=ho(g),k=l||!_,x=Xt.get(e);if(x&&(x.flags|=8,Xt.delete(e)),h&&(s(f),s(m)),l&&s(c),!x&&(_||h)&&r&16)for(let b=0;b<n.length;b++){const $=n[b];a($,o,t,k,!!$.dynamicChildren)}},move:Ca,hydrate:Sd};function Ca(e,o,t,{o:{insert:a},m:s},l=2){l===0&&(e.targetStart&&a(e.targetStart,o,t),a(e.targetAnchor,o,t),t=e.targetAnchor);const{el:r,anchor:n,shapeFlag:c,children:f,props:m}=e,h=l===2;if(h&&a(r,o,t),!Xt.has(e)&&(!h||ho(m))&&c&16)for(let g=0;g<f.length;g++)s(f[g],o,t,2);h&&a(n,o,t)}function Sd(e,o,t,a,s,l,{o:{nextSibling:r,parentNode:n,querySelector:c,insert:f,createText:m}},h){function g(b,$){let y=$;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")o.targetStart=y;else if(y.data==="teleport anchor"){o.targetAnchor=y,b._lpa=o.targetAnchor&&r(o.targetAnchor);break}}y=r(y)}}function _(b,$){$.anchor=h(r(b),$,n(b),t,a,s,l)}const k=o.target=Xs(o.props,c),x=ho(o.props);if(k){const b=k._lpa||k.firstChild;o.shapeFlag&16&&(x?(_(e,o),g(k,b),o.targetAnchor||Zs(k,o,m,f,n(e)===k?e:null)):(o.anchor=r(e),g(k,b),o.targetAnchor||Zs(k,o,m,f),h(b&&r(b),o,k,t,a,s,l))),Ko(o,x)}else x&&o.shapeFlag&16&&(_(e,o),o.targetStart=e,o.targetAnchor=r(e));return o.anchor&&r(o.anchor)}const Gt=$d;function Ko(e,o){const t=e.ctx;if(t&&t.ut){let a,s;for(o?(a=e.el,s=e.anchor):(a=e.targetStart,s=e.targetAnchor);a&&a!==s;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}function Zs(e,o,t,a,s=null){const l=o.targetStart=t(""),r=o.targetAnchor=t("");return l[wn]=r,e&&(a(l,e,s),a(r,e,s)),r}const ft=Symbol("_leaveCb"),qo=Symbol("_enterCb");function An(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De(()=>{e.isMounted=!0}),Le(()=>{e.isUnmounting=!0}),e}const mt=[Function,Array],$n={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},Td={name:"BaseTransition",props:$n,setup(e,{slots:o}){const t=xa(),a=An();return()=>{const s=o.default&&Ll(o.default(),!0),l=s&&s.length?Sn(s):t.subTree?W():void 0;if(!l)return;const r=Se(e),{mode:n}=r;if(a.isLeaving)return zs(l);const c=Wa(l);if(!c)return zs(l);let f=pa(c,r,a,t,h=>f=h);c.type!==Xe&&lo(c,f);let m=t.subTree&&Wa(t.subTree);if(m&&m.type!==Xe&&!vo(m,c)&&ma(t.subTree)){let h=pa(m,r,a,t);if(lo(m,h),n==="out-in"&&c.type!==Xe)return a.isLeaving=!0,h.afterLeave=()=>{a.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,m=void 0},zs(l);n==="in-out"&&c.type!==Xe?h.delayLeave=(g,_,k)=>{const x=Tn(a,m);x[String(m.key)]=m,g[ft]=()=>{_(),g[ft]=void 0,delete f.delayedLeave,m=void 0},f.delayedLeave=()=>{k(),delete f.delayedLeave,m=void 0}}:m=void 0}else m&&(m=void 0);return l}}};function Sn(e){let o=e[0];if(e.length>1){for(const t of e)if(t.type!==Xe){o=t;break}}return o}const Cd=Td;function Tn(e,o){const{leavingVNodes:t}=e;let a=t.get(o.type);return a||(a=Object.create(null),t.set(o.type,a)),a}function pa(e,o,t,a,s){const{appear:l,mode:r,persisted:n=!1,onBeforeEnter:c,onEnter:f,onAfterEnter:m,onEnterCancelled:h,onBeforeLeave:g,onLeave:_,onAfterLeave:k,onLeaveCancelled:x,onBeforeAppear:b,onAppear:$,onAfterAppear:y,onAppearCancelled:w}=o,T=String(e.key),L=Tn(t,e),F=(D,j)=>{D&&vt(D,a,9,j)},V=(D,j)=>{const S=j[1];F(D,j),ge(D)?D.every(P=>P.length<=1)&&S():D.length<=1&&S()},E={mode:r,persisted:n,beforeEnter(D){let j=c;if(!t.isMounted)if(l)j=b||c;else return;D[ft]&&D[ft](!0);const S=L[T];if(S&&vo(e,S)){let P=S.el[ft];if(!P){const K=ma(S);P=K&&K.el[ft]}P&&P()}F(j,[D])},enter(D){if(L[T]===e)return;let j=f,S=m,P=h;if(!t.isMounted)if(l)j=$||f,S=y||m,P=w||h;else return;let K=!1;D[qo]=oe=>{K||(K=!0,oe?F(P,[D]):F(S,[D]),E.delayedLeave&&E.delayedLeave(),D[qo]=void 0)};const U=D[qo].bind(null,!1);j?V(j,[D,U]):U()},leave(D,j){const S=String(e.key);if(D[qo]&&D[qo](!0),t.isUnmounting)return j();F(g,[D]);let P=!1;D[ft]=U=>{P||(P=!0,j(),U?F(x,[D]):F(k,[D]),D[ft]=void 0,L[S]===e&&delete L[S])};const K=D[ft].bind(null,!1);L[S]=e,_?V(_,[D,K]):K()},clone(D){const j=pa(D,o,t,a,s);return s&&s(j),j}};return E}function zs(e){if(_s(e))return e=ro(e),e.children=null,e}function Wa(e){if(!_s(e))return ys(e.type)&&e.children?Sn(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:o,children:t}=e;if(t){if(o&16)return t[0];if(o&32&&_e(t.default))return t.default()}}function lo(e,o){if(e.shapeFlag&6&&e.component){e.transition=o;const t=e.component.subTree;lo(ys(t.type)&&Wa(t)||t,o)}else if(e.shapeFlag&128)e.ssContent.transition=o.clone(e.ssContent),e.ssFallback.transition=o.clone(e.ssFallback);else if(e.transition=o,e.type===q&&ge(e.children)){const t=qn(e.children,!1);t&&lo(t,o)}}function Ll(e,o=!1,t){let a=[],s=0;for(let l=0;l<e.length;l++){let r=e[l];const n=t==null?r.key:String(t)+String(r.key!=null?r.key:l);r.type===q?(r.patchFlag&128&&s++,a=a.concat(Ll(r.children,o,n))):(o||r.type!==Xe)&&a.push(n!=null?ro(r,{key:n}):r)}if(s>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function ma(e){if(e.component)return ma(e.component.subTree);if(e.type===q){const o=ge(e.children)&&qn(e.children,!1);return o?ma(o):void 0}if(e.type!==Xe)return e}function z(e,o){return _e(e)?Ee({name:e.name},o,{setup:e}):e}function Cn(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function or(e,o){let t;return!!((t=Object.getOwnPropertyDescriptor(e,o))&&!t.configurable)}const Ya=new WeakMap;function sa(e,o,t,a,s=!1){if(ge(e)){e.forEach((x,b)=>sa(x,o&&(ge(o)?o[b]:o),t,a,s));return}if(Po(a)&&!s){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&sa(e,o,t,a.component.subTree);return}const l=a.shapeFlag&4?$s(a.component):a.el,r=s?null:l,{i:n,r:c}=e,f=o&&o.r,m=n.refs===Te?n.refs={}:n.refs,h=n.setupState,g=Se(h),_=h===Te?jr:x=>or(m,x)?!1:Ce(g,x),k=(x,b)=>!(b&&or(m,b));if(f!=null&&f!==c){if(ar(o),ze(f))m[f]=null,_(f)&&(h[f]=null);else if(Fe(f)){const x=o;k(f,x.k)&&(f.value=null),x.k&&(m[x.k]=null)}}if(_e(c))_a(c,n,12,[r,m]);else{const x=ze(c),b=Fe(c);if(x||b){const $=()=>{if(e.f){const y=x?_(c)?h[c]:m[c]:k()||!e.k?c.value:m[e.k];if(s)ge(y)&&xl(y,l);else if(ge(y))y.includes(l)||y.push(l);else if(x)m[c]=[l],_(c)&&(h[c]=m[c]);else{const w=[l];k(c,e.k)&&(c.value=w),e.k&&(m[e.k]=w)}}else x?(m[c]=r,_(c)&&(h[c]=r)):b&&(k(c,e.k)&&(c.value=r),e.k&&(m[e.k]=r))};if(r){const y=()=>{$(),Ya.delete(e)};y.id=-1,Ya.set(e,y),at(y,t)}else ar(e),$()}}}function ar(e){const o=Ya.get(e);o&&(o.flags|=8,Ya.delete(e))}ps().requestIdleCallback;ps().cancelIdleCallback;const Po=e=>!!e.type.__asyncLoader,_s=e=>e.type.__isKeepAlive;function Bd(e,o){Bn(e,"a",o)}function Ld(e,o){Bn(e,"da",o)}function Bn(e,o,t=et){const a=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(xs(o,a,t),t){let s=t.parent;for(;s&&s.parent;)_s(s.parent.vnode)&&Md(a,o,t,s),s=s.parent}}function Md(e,o,t,a){const s=xs(o,e,a,!0);Mn(()=>{xl(a[o],s)},t)}function xs(e,o,t=et,a=!1){if(t){const s=t[e]||(t[e]=[]),l=o.__weh||(o.__weh=(...r)=>{Pt();const n=ka(t),c=vt(o,t,e,r);return n(),It(),c});return a?s.unshift(l):s.push(l),l}}const Ut=e=>(o,t=et)=>{(!ga||e==="sp")&&xs(e,(...a)=>o(...a),t)},Pd=Ut("bm"),De=Ut("m"),Id=Ut("bu"),Ln=Ut("u"),Le=Ut("bum"),Mn=Ut("um"),Dd=Ut("sp"),Vd=Ut("rtg"),zd=Ut("rtc");function Ed(e,o=et){xs("ec",e,o)}const Pn="components";function In(e,o){return Vn(Pn,e,!0,o)||e}const Dn=Symbol.for("v-ndc");function _o(e){return ze(e)?Vn(Pn,e,!1)||e:e||Dn}function Vn(e,o,t=!0,a=!1){const s=Ye||et;if(s){const l=s.type;{const n=yu(l,!1);if(n&&(n===o||n===tt(o)||n===us(tt(o))))return l}const r=sr(s[e]||l[e],o)||sr(s.appContext[e],o);return!r&&a?l:r}}function sr(e,o){return e&&(e[o]||e[tt(o)]||e[us(tt(o))])}function X(e,o,t,a){let s;const l=t,r=ge(e);if(r||ze(e)){const n=r&&ao(e);let c=!1,f=!1;n&&(c=!dt(e),f=Dt(e),e=hs(e)),s=new Array(e.length);for(let m=0,h=e.length;m<h;m++)s[m]=o(c?f?so(ht(e[m])):ht(e[m]):e[m],m,void 0,l)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let n=0;n<e;n++)s[n]=o(n+1,n,void 0,l)}else if(Be(e))if(e[Symbol.iterator])s=Array.from(e,(n,c)=>o(n,c,void 0,l));else{const n=Object.keys(e);s=new Array(n.length);for(let c=0,f=n.length;c<f;c++){const m=n[c];s[c]=o(e[m],m,c,l)}}else s=[];return s}function de(e,o,t,a,s,l){if(t==null&&(t={}),Ye.ce||Ye.parent&&Po(Ye.parent)&&Ye.parent.ce){const f=l!=null&&t.key==null?Ee({},t,{key:l}):t,m=Object.keys(f).length>0;return o!=="default"&&(f.name=o),d(),fe(q,null,[A("slot",f,a&&a())],m?-2:64)}let r=e[o];r&&r._c&&(r._d=!1);const n=qt.length;d();let c;try{const f=r&&zn(r(t)),m=t.key||l||f&&f.key;c=fe(q,{key:(m&&!ut(m)?m:`_${o}`)+(!f&&a?"_fb":"")},f||(a?a():[]),f&&e._===1?64:-2)}catch(f){for(let m=qt.length;m>n;m--)Dl();throw f}finally{r&&r._c&&(r._d=!0)}return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function zn(e){return e.some(o=>Vo(o)?!(o.type===Xe||o.type===q&&!zn(o.children)):!0)?e:null}const Qs=e=>e?ai(e)?$s(e):Qs(e.parent):null,la=Ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qs(e.parent),$root:e=>Qs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Rn(e),$forceUpdate:e=>e.f||(e.f=()=>{Cl(e.update)}),$nextTick:e=>e.n||(e.n=Oe.bind(e.proxy)),$watch:e=>wd.bind(e)}),Es=(e,o)=>e!==Te&&!e.__isScriptSetup&&Ce(e,o),Rd={get({_:e},o){if(o==="__v_skip")return!0;const{ctx:t,setupState:a,data:s,props:l,accessCache:r,type:n,appContext:c}=e;if(o[0]!=="$"){const g=r[o];if(g!==void 0)switch(g){case 1:return a[o];case 2:return s[o];case 4:return t[o];case 3:return l[o]}else{if(Es(a,o))return r[o]=1,a[o];if(s!==Te&&Ce(s,o))return r[o]=2,s[o];if(Ce(l,o))return r[o]=3,l[o];if(t!==Te&&Ce(t,o))return r[o]=4,t[o];Js&&(r[o]=0)}}const f=la[o];let m,h;if(f)return o==="$attrs"&&Je(e.attrs,"get",""),f(e);if((m=n.__cssModules)&&(m=m[o]))return m;if(t!==Te&&Ce(t,o))return r[o]=4,t[o];if(h=c.config.globalProperties,Ce(h,o))return h[o]},set({_:e},o,t){const{data:a,setupState:s,ctx:l}=e;return Es(s,o)?(s[o]=t,!0):a!==Te&&Ce(a,o)?(a[o]=t,!0):Ce(e.props,o)||o[0]==="$"&&o.slice(1)in e?!1:(l[o]=t,!0)},has({_:{data:e,setupState:o,accessCache:t,ctx:a,appContext:s,props:l,type:r}},n){let c;return!!(t[n]||e!==Te&&n[0]!=="$"&&Ce(e,n)||Es(o,n)||Ce(l,n)||Ce(a,n)||Ce(la,n)||Ce(s.config.globalProperties,n)||(c=r.__cssModules)&&c[n])},defineProperty(e,o,t){return t.get!=null?e._.accessCache[o]=0:Ce(t,"value")&&this.set(e,o,t.value,null),Reflect.defineProperty(e,o,t)}};function fa(){return Fd().slots}function Fd(e){const o=xa();return o.setupContext||(o.setupContext=li(o))}function Xa(e){return ge(e)?e.reduce((o,t)=>(o[t]=null,o),{}):e}function ko(e,o){return!e||!o?e||o:ge(e)&&ge(o)?e.concat(o):Ee({},Xa(e),Xa(o))}let Js=!0;function Od(e){const o=Rn(e),t=e.proxy,a=e.ctx;Js=!1,o.beforeCreate&&lr(o.beforeCreate,e,"bc");const{data:s,computed:l,methods:r,watch:n,provide:c,inject:f,created:m,beforeMount:h,mounted:g,beforeUpdate:_,updated:k,activated:x,deactivated:b,beforeDestroy:$,beforeUnmount:y,destroyed:w,unmounted:T,render:L,renderTracked:F,renderTriggered:V,errorCaptured:E,serverPrefetch:D,expose:j,inheritAttrs:S,components:P,directives:K,filters:U}=o;if(f&&Hd(f,a,null),r)for(const N in r){const J=r[N];_e(J)&&(a[N]=J.bind(t))}if(s){const N=s.call(t,t);Be(N)&&(e.data=wo(N))}if(Js=!0,l)for(const N in l){const J=l[N],ue=_e(J)?J.bind(t,t):_e(J.get)?J.get.bind(t,t):Mt,Ae=!_e(J)&&_e(J.set)?J.set.bind(t):Mt,ke=G({get:ue,set:Ae});Object.defineProperty(a,N,{enumerable:!0,configurable:!0,get:()=>ke.value,set:we=>ke.value=we})}if(n)for(const N in n)En(n[N],a,t,N);if(c){const N=_e(c)?c.call(t):c;Reflect.ownKeys(N).forEach(J=>{xo(J,N[J])})}m&&lr(m,e,"c");function O(N,J){ge(J)?J.forEach(ue=>N(ue.bind(t))):J&&N(J.bind(t))}if(O(Pd,h),O(De,g),O(Id,_),O(Ln,k),O(Bd,x),O(Ld,b),O(Ed,E),O(zd,F),O(Vd,V),O(Le,y),O(Mn,T),O(Dd,D),ge(j))if(j.length){const N=e.exposed||(e.exposed={});j.forEach(J=>{Object.defineProperty(N,J,{get:()=>t[J],set:ue=>t[J]=ue,enumerable:!0})})}else e.exposed||(e.exposed={});L&&e.render===Mt&&(e.render=L),S!=null&&(e.inheritAttrs=S),P&&(e.components=P),K&&(e.directives=K),D&&Cn(e)}function Hd(e,o,t=Mt){ge(e)&&(e=el(e));for(const a in e){const s=e[a];let l;Be(s)?"default"in s?l=yo(s.from||a,s.default,!0):l=yo(s.from||a):l=yo(s),Fe(l)?Object.defineProperty(o,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):o[a]=l}}function lr(e,o,t){vt(ge(e)?e.map(a=>a.bind(o.proxy)):e.bind(o.proxy),o,t)}function En(e,o,t,a){let s=a.includes(".")?kn(t,a):()=>t[a];if(ze(e)){const l=o[e];_e(l)&&be(s,l)}else if(_e(e))be(s,e.bind(t));else if(Be(e))if(ge(e))e.forEach(l=>En(l,o,t,a));else{const l=_e(e.handler)?e.handler.bind(t):o[e.handler];_e(l)&&be(s,l,e)}}function Rn(e){const o=e.type,{mixins:t,extends:a}=o,{mixins:s,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,n=l.get(o);let c;return n?c=n:!s.length&&!t&&!a?c=o:(c={},s.length&&s.forEach(f=>Za(c,f,r,!0)),Za(c,o,r)),Be(o)&&l.set(o,c),c}function Za(e,o,t,a=!1){const{mixins:s,extends:l}=o;l&&Za(e,l,t,!0),s&&s.forEach(r=>Za(e,r,t,!0));for(const r in o)if(!(a&&r==="expose")){const n=qd[r]||t&&t[r];e[r]=n?n(e[r],o[r]):o[r]}return e}const qd={data:rr,props:nr,emits:nr,methods:Wo,computed:Wo,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Wo,directives:Wo,watch:jd,provide:rr,inject:Nd};function rr(e,o){return o?e?function(){return Ee(_e(e)?e.call(this,this):e,_e(o)?o.call(this,this):o)}:o:e}function Nd(e,o){return Wo(el(e),el(o))}function el(e){if(ge(e)){const o={};for(let t=0;t<e.length;t++)o[e[t]]=e[t];return o}return e}function ot(e,o){return e?[...new Set([].concat(e,o))]:o}function Wo(e,o){return e?Ee(Object.create(null),e,o):o}function nr(e,o){return e?ge(e)&&ge(o)?[...new Set([...e,...o])]:Ee(Object.create(null),Xa(e),Xa(o??{})):o}function jd(e,o){if(!e)return o;if(!o)return e;const t=Ee(Object.create(null),e);for(const a in o)t[a]=ot(e[a],o[a]);return t}function Fn(){return{app:null,config:{isNativeTag:jr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gd=0;function Ud(e,o){return function(a,s=null){_e(a)||(a=Ee({},a)),s!=null&&!Be(s)&&(s=null);const l=Fn(),r=new WeakSet,n=[];let c=!1;const f=l.app={_uid:Gd++,_component:a,_props:s,_container:null,_context:l,_instance:null,version:xu,get config(){return l.config},set config(m){},use(m,...h){return r.has(m)||(m&&_e(m.install)?(r.add(m),m.install(f,...h)):_e(m)&&(r.add(m),m(f,...h))),f},mixin(m){return l.mixins.includes(m)||l.mixins.push(m),f},component(m,h){return h?(l.components[m]=h,f):l.components[m]},directive(m,h){return h?(l.directives[m]=h,f):l.directives[m]},mount(m,h,g){if(!c){const _=f._ceVNode||A(a,s);return _.appContext=l,g===!0?g="svg":g===!1&&(g=void 0),e(_,m,g),c=!0,f._container=m,m.__vue_app__=f,$s(_.component)}},onUnmount(m){n.push(m)},unmount(){c&&(vt(n,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(m,h){return l.provides[m]=h,f},runWithContext(m){const h=Io;Io=f;try{return m()}finally{Io=h}}};return f}}let Io=null;function ks(e,o,t=Te){const a=xa(),s=tt(o),l=jt(o),r=On(e,s),n=id((c,f)=>{let m,h=Te,g;return kd(()=>{const _=e[s];Ke(m,_)&&(m=_,f())}),{get(){return c(),t.get?t.get(m):m},set(_){const k=t.set?t.set(_):_;if(!Ke(k,m)&&!(h!==Te&&Ke(_,h)))return;const x=a.vnode.props,b=!!(x&&(o in x||s in x||l in x)&&(`onUpdate:${o}`in x||`onUpdate:${s}`in x||`onUpdate:${l}`in x));b||(m=_,f()),a.emit(`update:${o}`,k),Ke(_,h)&&(Ke(_,k)&&!Ke(k,g)||b&&h!==Te&&!Ke(k,m))&&f(),h=_,g=k}}});return n[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?r||Te:n,done:!1}:{done:!0}}}},n}const On=(e,o)=>o==="modelValue"||o==="model-value"?e.modelModifiers:e[`${o}Modifiers`]||e[`${tt(o)}Modifiers`]||e[`${jt(o)}Modifiers`];function Kd(e,o,...t){if(e.isUnmounted)return;const a=e.vnode.props||Te;let s=t;const l=o.startsWith("update:"),r=l&&On(a,o.slice(7));r&&(r.trim&&(s=t.map(m=>ze(m)?m.trim():m)),r.number&&(s=s.map(kl)));let n,c=a[n=Ls(o)]||a[n=Ls(tt(o))];!c&&l&&(c=a[n=Ls(jt(o))]),c&&vt(c,e,6,s);const f=a[n+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[n])return;e.emitted[n]=!0,vt(f,e,6,s)}}const Wd=new WeakMap;function Hn(e,o,t=!1){const a=t?Wd:o.emitsCache,s=a.get(e);if(s!==void 0)return s;const l=e.emits;let r={},n=!1;if(!_e(e)){const c=f=>{const m=Hn(f,o,!0);m&&(n=!0,Ee(r,m))};!t&&o.mixins.length&&o.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!n?(Be(e)&&a.set(e,null),null):(ge(l)?l.forEach(c=>r[c]=null):Ee(r,l),Be(e)&&a.set(e,r),r)}function ws(e,o){return!e||!ns(o)?!1:(o=o.slice(2),o=o==="Once"?o:o.replace(/Once$/,""),Ce(e,o[0].toLowerCase()+o.slice(1))||Ce(e,jt(o))||Ce(e,o))}function ir(e){const{type:o,vnode:t,proxy:a,withProxy:s,propsOptions:[l],slots:r,attrs:n,emit:c,render:f,renderCache:m,props:h,data:g,setupState:_,ctx:k,inheritAttrs:x}=e,b=Ka(e);let $,y;try{if(t.shapeFlag&4){const T=s||a,L=T;$=Ct(f.call(L,T,m,h,_,g,k)),y=n}else{const T=o;$=Ct(T.length>1?T(h,{attrs:n,slots:r,emit:c}):T(h,null)),y=o.props?n:Yd(n)}}catch(T){qt.length=0,gs(T,e,1),$=A(Xe)}let w=$;if(y&&x!==!1){const T=Object.keys(y),{shapeFlag:L}=w;T.length&&L&7&&(l&&T.some(is)&&(y=Xd(y,l)),w=ro(w,y,!1,!0))}if(t.dirs&&(w=ro(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition){const T=ys(w.type)&&Wa(w)||w;lo(T,t.transition)}return $=w,Ka(b),$}function qn(e,o=!0){let t;for(let a=0;a<e.length;a++){const s=e[a];if(Vo(s)){if(s.type!==Xe||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Yd=e=>{let o;for(const t in e)(t==="class"||t==="style"||ns(t))&&((o||(o={}))[t]=e[t]);return o},Xd=(e,o)=>{const t={};for(const a in e)(!is(a)||!(a.slice(9)in o))&&(t[a]=e[a]);return t};function Zd(e,o,t){const{props:a,children:s,component:l}=e,{props:r,children:n,patchFlag:c}=o,f=l.emitsOptions;if(o.dirs||o.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return a?cr(a,r,f):!!r;if(c&8){const m=o.dynamicProps;for(let h=0;h<m.length;h++){const g=m[h];if(Nn(r,a,g)&&!ws(f,g))return!0}}}else return(s||n)&&(!n||!n.$stable)?!0:a===r?!1:a?r?cr(a,r,f):!0:!!r;return!1}function cr(e,o,t){const a=Object.keys(o);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const l=a[s];if(!Ce(e,l)||Nn(o,e,l)&&!ws(t,l))return!0}return!1}function Nn(e,o,t){const a=e[t],s=o[t];return t==="style"&&Be(a)&&Be(s)?!ms(a,s):a!==s}function Qd({vnode:e,parent:o,suspense:t},a){for(;o;){const s=o.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=a,e=s),s===e)(e=o.vnode).el=a,o=o.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=a)}const jn={},Gn=()=>Object.create(jn),Un=e=>Object.getPrototypeOf(e)===jn;function Jd(e,o,t,a=!1){const s={},l=Gn();e.propsDefaults=Object.create(null),Kn(e,o,s,l);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);t?e.props=a?s:od(s):e.type.props?e.props=s:e.props=l,e.attrs=l}function eu(e,o,t,a){const{props:s,attrs:l,vnode:{patchFlag:r}}=e,n=Se(s),[c]=e.propsOptions;let f=!1;if((a||r>0)&&!(r&16)){if(r&8){const m=e.vnode.dynamicProps;for(let h=0;h<m.length;h++){let g=m[h];if(ws(e.emitsOptions,g))continue;const _=o[g];if(c)if(Ce(l,g))_!==l[g]&&(l[g]=_,f=!0);else{const k=tt(g);s[k]=tl(c,n,k,_,e,!1)}else _!==l[g]&&(l[g]=_,f=!0)}}}else{Kn(e,o,s,l)&&(f=!0);let m;for(const h in n)(!o||!Ce(o,h)&&((m=jt(h))===h||!Ce(o,m)))&&(c?t&&(t[h]!==void 0||t[m]!==void 0)&&(s[h]=tl(c,n,h,void 0,e,!0)):delete s[h]);if(l!==n)for(const h in l)(!o||!Ce(o,h))&&(delete l[h],f=!0)}f&&Ft(e.attrs,"set","")}function Kn(e,o,t,a){const[s,l]=e.propsOptions;let r=!1,n;if(o)for(let c in o){if(ta(c))continue;const f=o[c];let m;s&&Ce(s,m=tt(c))?!l||!l.includes(m)?t[m]=f:(n||(n={}))[m]=f:ws(e.emitsOptions,c)||(!(c in a)||f!==a[c])&&(a[c]=f,r=!0)}if(l){const c=Se(t),f=n||Te;for(let m=0;m<l.length;m++){const h=l[m];t[h]=tl(s,c,h,f[h],e,!Ce(f,h))}}return r}function tl(e,o,t,a,s,l){const r=e[t];if(r!=null){const n=Ce(r,"default");if(n&&a===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&_e(c)){const{propsDefaults:f}=s;if(t in f)a=f[t];else{const m=ka(s);a=f[t]=c.call(null,o),m()}}else a=c;s.ce&&s.ce._setProp(t,a)}r[0]&&(l&&!n?a=!1:r[1]&&(a===""||a===jt(t))&&(a=!0))}return a}const tu=new WeakMap;function Wn(e,o,t=!1){const a=t?tu:o.propsCache,s=a.get(e);if(s)return s;const l=e.props,r={},n=[];let c=!1;if(!_e(e)){const m=h=>{c=!0;const[g,_]=Wn(h,o,!0);Ee(r,g),_&&n.push(..._)};!t&&o.mixins.length&&o.mixins.forEach(m),e.extends&&m(e.extends),e.mixins&&e.mixins.forEach(m)}if(!l&&!c)return Be(e)&&a.set(e,go),go;if(ge(l))for(let m=0;m<l.length;m++){const h=tt(l[m]);dr(h)&&(r[h]=Te)}else if(l)for(const m in l){const h=tt(m);if(dr(h)){const g=l[m],_=r[h]=ge(g)||_e(g)?{type:g}:Ee({},g),k=_.type;let x=!1,b=!0;if(ge(k))for(let $=0;$<k.length;++$){const y=k[$],w=_e(y)&&y.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(b=!1)}else x=_e(k)&&k.name==="Boolean";_[0]=x,_[1]=b,(x||Ce(_,"default"))&&n.push(h)}}const f=[r,n];return Be(e)&&a.set(e,f),f}function dr(e){return e[0]!=="$"&&!ta(e)}const Ml=e=>e==="_"||e==="_ctx"||e==="$stable",Pl=e=>ge(e)?e.map(Ct):[Ct(e)],ou=(e,o,t)=>{if(o._n)return o;const a=I((...s)=>Pl(o(...s)),t);return a._c=!1,a},Yn=(e,o,t)=>{const a=e._ctx;for(const s in e){if(Ml(s))continue;const l=e[s];if(_e(l))o[s]=ou(s,l,a);else if(l!=null){const r=Pl(l);o[s]=()=>r}}},Xn=(e,o)=>{const t=Pl(o);e.slots.default=()=>t},Zn=(e,o,t)=>{for(const a in o)(t||!Ml(a))&&(e[a]=o[a])},au=(e,o,t)=>{const a=e.slots=Gn();if(e.vnode.shapeFlag&32){const s=o._;s?(Zn(a,o,t),t&&Wr(a,"_",s,!0)):Yn(o,a)}else o&&Xn(e,o)},su=(e,o,t)=>{const{vnode:a,slots:s}=e;let l=!0,r=Te;if(a.shapeFlag&32){const n=o._;n?t&&n===1?l=!1:Zn(s,o,t):(l=!o.$stable,Yn(o,s)),r=o}else o&&(Xn(e,o),r={default:1});if(l)for(const n in s)!Ml(n)&&r[n]==null&&delete s[n]},at=cu;function lu(e){return ru(e)}function ru(e,o){const t=ps();t.__VUE__=!0;const{insert:a,remove:s,patchProp:l,createElement:r,createText:n,createComment:c,setText:f,setElementText:m,parentNode:h,nextSibling:g,setScopeId:_=Mt,insertStaticContent:k}=e,x=(M,B,H,te=null,ee=null,se=null,re=void 0,ie=null,ne=!!B.dynamicChildren)=>{if(M===B)return;M&&!vo(M,B)&&(te=pt(M),we(M,ee,se,!0),M=null),B.patchFlag===-2&&(ne=!1,B.dynamicChildren=null),B.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(B.dynamicChildren===go&&(B.dynamicChildren=[]),B.dynamicChildren.hasOnce=!0);const{type:ae,ref:he,shapeFlag:ce}=B;switch(ae){case As:b(M,B,H,te);break;case Xe:$(M,B,H,te);break;case Va:M==null&&y(B,H,te,re);break;case q:P(M,B,H,te,ee,se,re,ie,ne);break;default:ce&1?L(M,B,H,te,ee,se,re,ie,ne):ce&6?K(M,B,H,te,ee,se,re,ie,ne):(ce&64||ce&128)&&ae.process(M,B,H,te,ee,se,re,ie,ne,Vt)}he!=null&&ee?sa(he,M&&M.ref,se,B||M,!B):he==null&&M&&M.ref!=null&&sa(M.ref,null,se,M,!0)},b=(M,B,H,te)=>{if(M==null)a(B.el=n(B.children),H,te);else{const ee=B.el=M.el;B.children!==M.children&&f(ee,B.children)}},$=(M,B,H,te)=>{M==null?a(B.el=c(B.children||""),H,te):B.el=M.el},y=(M,B,H,te)=>{[M.el,M.anchor]=k(M.children,B,H,te,M.el,M.anchor)},w=({el:M,anchor:B},H,te)=>{let ee;for(;M&&M!==B;)ee=g(M),a(M,H,te),M=ee;a(B,H,te)},T=({el:M,anchor:B})=>{let H;for(;M&&M!==B;)H=g(M),s(M),M=H;s(B)},L=(M,B,H,te,ee,se,re,ie,ne)=>{if(B.type==="svg"?re="svg":B.type==="math"&&(re="mathml"),M==null)F(B,H,te,ee,se,re,ie,ne);else{const ae=M.el&&M.el._isVueCE?M.el:null;try{ae&&ae._beginPatch(),D(M,B,ee,se,re,ie,ne)}finally{ae&&ae._endPatch()}}},F=(M,B,H,te,ee,se,re,ie)=>{let ne,ae;const{props:he,shapeFlag:ce,transition:ve,dirs:ye}=M;if(ne=M.el=r(M.type,se,he&&he.is,he),ce&8?m(ne,M.children):ce&16&&E(M.children,ne,null,te,ee,Rs(M,se),re,ie),ye&&uo(M,null,te,"created"),V(ne,M,M.scopeId,re,te),he){for(const Ie in he)Ie!=="value"&&!ta(Ie)&&l(ne,Ie,null,he[Ie],se,te);"value"in he&&l(ne,"value",null,he.value,se),(ae=he.onVnodeBeforeMount)&&wt(ae,te,M)}ye&&uo(M,null,te,"beforeMount");const $e=nu(ee,ve);$e&&ve.beforeEnter(ne),a(ne,B,H),((ae=he&&he.onVnodeMounted)||$e||ye)&&at(()=>{try{ae&&wt(ae,te,M),$e&&ve.enter(ne),ye&&uo(M,null,te,"mounted")}finally{}},ee)},V=(M,B,H,te,ee)=>{if(H&&_(M,H),te)for(let se=0;se<te.length;se++)_(M,te[se]);if(ee){let se=ee.subTree;if(B===se||Jn(se.type)&&(se.ssContent===B||se.ssFallback===B)){const re=ee.vnode;V(M,re,re.scopeId,re.slotScopeIds,ee.parent)}}},E=(M,B,H,te,ee,se,re,ie,ne=0)=>{for(let ae=ne;ae<M.length;ae++){const he=M[ae]=ie?Rt(M[ae]):Ct(M[ae]);x(null,he,B,H,te,ee,se,re,ie)}},D=(M,B,H,te,ee,se,re)=>{const ie=B.el=M.el;let{patchFlag:ne,dynamicChildren:ae,dirs:he}=B;ne|=M.patchFlag&16;const ce=M.props||Te,ve=B.props||Te;let ye;if(H&&po(H,!1),(ye=ve.onVnodeBeforeUpdate)&&wt(ye,H,B,M),he&&uo(B,M,H,"beforeUpdate"),H&&po(H,!0),ae&&(!M.dynamicChildren||M.dynamicChildren.length!==ae.length)&&(ne=0,re=!1,ae=null),(ce.innerHTML&&ve.innerHTML==null||ce.textContent&&ve.textContent==null)&&m(ie,""),ae?j(M.dynamicChildren,ae,ie,H,te,Rs(B,ee),se):re||J(M,B,ie,null,H,te,Rs(B,ee),se,!1),ne>0){if(ne&16)S(ie,ce,ve,H,ee);else if(ne&2&&ce.class!==ve.class&&l(ie,"class",null,ve.class,ee),ne&4&&l(ie,"style",ce.style,ve.style,ee),ne&8){const $e=B.dynamicProps;for(let Ie=0;Ie<$e.length;Ie++){const Me=$e[Ie],Re=ce[Me],je=ve[Me];(je!==Re||Me==="value")&&l(ie,Me,Re,je,ee,H)}}ne&1&&M.children!==B.children&&m(ie,B.children)}else!re&&ae==null&&S(ie,ce,ve,H,ee);((ye=ve.onVnodeUpdated)||he)&&at(()=>{ye&&wt(ye,H,B,M),he&&uo(B,M,H,"updated")},te)},j=(M,B,H,te,ee,se,re)=>{for(let ie=0;ie<B.length;ie++){const ne=M[ie],ae=B[ie],he=ne.el||ol(ne),ce=he&&(ne.type===q||!vo(ne,ae)||ne.shapeFlag&198)?h(he):H;x(ne,ae,ce,null,te,ee,se,re,!0)}},S=(M,B,H,te,ee)=>{if(B!==H){if(B!==Te)for(const se in B)!ta(se)&&!(se in H)&&l(M,se,B[se],null,ee,te);for(const se in H){if(ta(se))continue;const re=H[se],ie=B[se];re!==ie&&se!=="value"&&l(M,se,ie,re,ee,te)}"value"in H&&l(M,"value",B.value,H.value,ee)}},P=(M,B,H,te,ee,se,re,ie,ne)=>{const ae=B.el=M?M.el:n(""),he=B.anchor=M?M.anchor:n("");let{patchFlag:ce,dynamicChildren:ve,slotScopeIds:ye}=B;ye&&(ie=ie?ie.concat(ye):ye),M==null?(a(ae,H,te),a(he,H,te),E(B.children||[],H,he,ee,se,re,ie,ne)):ce>0&&ce&64&&ve&&M.dynamicChildren&&M.dynamicChildren.length===ve.length?(j(M.dynamicChildren,ve,H,ee,se,re,ie),(B.key!=null||ee&&B===ee.subTree)&&Il(M,B,!0)):J(M,B,H,he,ee,se,re,ie,ne)},K=(M,B,H,te,ee,se,re,ie,ne)=>{B.slotScopeIds=ie,M==null?B.shapeFlag&512?ee.ctx.activate(B,H,te,re,ne):U(B,H,te,ee,se,re,ne):oe(M,B,ne)},U=(M,B,H,te,ee,se,re)=>{const ie=M.component=hu(M,te,ee);if(_s(M)&&(ie.ctx.renderer=Vt),vu(ie,!1,re),ie.asyncDep){if(ee&&ee.registerDep(ie,O,re,se),!M.el){const ne=ie.subTree=A(Xe);$(null,ne,B,H),M.placeholder=ne.el}}else O(ie,M,B,H,ee,se,re)},oe=(M,B,H)=>{const te=B.component=M.component;if(Zd(M,B,H))if(te.asyncDep&&!te.asyncResolved){B.el=M.el,B.placeholder=M.placeholder,N(te,B,H);return}else te.next=B,te.update();else B.el=M.el,B.placeholder=M.placeholder,te.vnode=B},O=(M,B,H,te,ee,se,re)=>{const ie=()=>{if(M.isMounted){let{next:ce,bu:ve,u:ye,parent:$e,vnode:Ie}=M;{const xt=Qn(M);if(xt){ce&&(ce.el=Ie.el,N(M,ce,re)),xt.asyncDep.then(()=>{at(()=>{M.isUnmounted||ae()},ee)});return}}let Me=ce,Re;po(M,!1),ce?(ce.el=Ie.el,N(M,ce,re)):ce=Ie,ve&&Da(ve),(Re=ce.props&&ce.props.onVnodeBeforeUpdate)&&wt(Re,$e,ce,Ie),po(M,!0);const je=ir(M),_t=M.subTree;M.subTree=je,x(_t,je,h(_t.el),pt(_t),M,ee,se),ce.el=je.el,Me===null&&Qd(M,je.el),ye&&at(ye,ee),(Re=ce.props&&ce.props.onVnodeUpdated)&&at(()=>wt(Re,$e,ce,Ie),ee)}else{let ce;const{el:ve,props:ye}=B,{bm:$e,m:Ie,parent:Me,root:Re,type:je}=M,_t=Po(B);po(M,!1),$e&&Da($e),!_t&&(ce=ye&&ye.onVnodeBeforeMount)&&wt(ce,Me,B),po(M,!0);{Re.ce&&Re.ce._hasShadowRoot()&&Re.ce._injectChildStyle(je,M.parent?M.parent.type:void 0);const xt=M.subTree=ir(M);x(null,xt,H,te,M,ee,se),B.el=xt.el}if(Ie&&at(Ie,ee),!_t&&(ce=ye&&ye.onVnodeMounted)){const xt=B;at(()=>wt(ce,Me,xt),ee)}(B.shapeFlag&256||Me&&Po(Me.vnode)&&Me.vnode.shapeFlag&256)&&M.a&&at(M.a,ee),M.isMounted=!0,B=H=te=null}};M.scope.on();const ne=M.effect=new Qr(ie);M.scope.off();const ae=M.update=ne.run.bind(ne),he=M.job=ne.runIfDirty.bind(ne);he.i=M,he.id=M.uid,ne.scheduler=()=>Cl(he),po(M,!0),ae()},N=(M,B,H)=>{B.component=M;const te=M.vnode.props;M.vnode=B,M.next=null,eu(M,B.props,te,H),su(M,B.children,H),Pt(),gn(M),It()},J=(M,B,H,te,ee,se,re,ie,ne=!1)=>{const ae=M&&M.children,he=M?M.shapeFlag:0,ce=B.children,{patchFlag:ve,shapeFlag:ye}=B;if(ve>0){if(ve&128){Ae(ae,ce,H,te,ee,se,re,ie,ne);return}else if(ve&256){ue(ae,ce,H,te,ee,se,re,ie,ne);return}}ye&8?(he&16&&Ne(ae,ee,se),ce!==ae&&m(H,ce)):he&16?ye&16?Ae(ae,ce,H,te,ee,se,re,ie,ne):Ne(ae,ee,se,!0):(he&8&&m(H,""),ye&16&&E(ce,H,te,ee,se,re,ie,ne))},ue=(M,B,H,te,ee,se,re,ie,ne)=>{M=M||go,B=B||go;const ae=M.length,he=B.length,ce=Math.min(ae,he);let ve;for(ve=0;ve<ce;ve++){const ye=B[ve]=ne?Rt(B[ve]):Ct(B[ve]);x(M[ve],ye,H,null,ee,se,re,ie,ne)}ae>he?Ne(M,ee,se,!0,!1,ce):E(B,H,te,ee,se,re,ie,ne,ce)},Ae=(M,B,H,te,ee,se,re,ie,ne)=>{let ae=0;const he=B.length;let ce=M.length-1,ve=he-1;for(;ae<=ce&&ae<=ve;){const ye=M[ae],$e=B[ae]=ne?Rt(B[ae]):Ct(B[ae]);if(vo(ye,$e))x(ye,$e,H,null,ee,se,re,ie,ne);else break;ae++}for(;ae<=ce&&ae<=ve;){const ye=M[ce],$e=B[ve]=ne?Rt(B[ve]):Ct(B[ve]);if(vo(ye,$e))x(ye,$e,H,null,ee,se,re,ie,ne);else break;ce--,ve--}if(ae>ce){if(ae<=ve){const ye=ve+1,$e=ye<he?B[ye].el:te;for(;ae<=ve;)x(null,B[ae]=ne?Rt(B[ae]):Ct(B[ae]),H,$e,ee,se,re,ie,ne),ae++}}else if(ae>ve)for(;ae<=ce;)we(M[ae],ee,se,!0),ae++;else{const ye=ae,$e=ae,Ie=new Map;for(ae=$e;ae<=ve;ae++){const nt=B[ae]=ne?Rt(B[ae]):Ct(B[ae]);nt.key!=null&&Ie.set(nt.key,ae)}let Me,Re=0;const je=ve-$e+1;let _t=!1,xt=0;const Oo=new Array(je);for(ae=0;ae<je;ae++)Oo[ae]=0;for(ae=ye;ae<=ce;ae++){const nt=M[ae];if(Re>=je){we(nt,ee,se,!0);continue}let kt;if(nt.key!=null)kt=Ie.get(nt.key);else for(Me=$e;Me<=ve;Me++)if(Oo[Me-$e]===0&&vo(nt,B[Me])){kt=Me;break}kt===void 0?we(nt,ee,se,!0):(Oo[kt-$e]=ae+1,kt>=xt?xt=kt:_t=!0,x(nt,B[kt],H,null,ee,se,re,ie,ne),Re++)}const jl=_t?iu(Oo):go;for(Me=jl.length-1,ae=je-1;ae>=0;ae--){const nt=$e+ae,kt=B[nt],Gl=B[nt+1],Ul=nt+1<he?Gl.el||ol(Gl):te;Oo[ae]===0?x(null,kt,H,Ul,ee,se,re,ie,ne):_t&&(Me<0||ae!==jl[Me]?ke(kt,H,Ul,2):Me--)}}},ke=(M,B,H,te,ee=null)=>{const{el:se,type:re,transition:ie,children:ne,shapeFlag:ae}=M;if(ae&6){ke(M.component.subTree,B,H,te);return}if(ae&128){M.suspense.move(B,H,te);return}if(ae&64){re.move(M,B,H,Vt);return}if(re===q){a(se,B,H);for(let ce=0;ce<ne.length;ce++)ke(ne[ce],B,H,te);a(M.anchor,B,H);return}if(re===Va){w(M,B,H);return}if(te!==2&&ae&1&&ie)if(te===0)ie.persisted&&!se[ft]?a(se,B,H):(ie.beforeEnter(se),a(se,B,H),at(()=>ie.enter(se),ee));else{const{leave:ce,delayLeave:ve,afterLeave:ye}=ie,$e=()=>{M.ctx.isUnmounted?s(se):a(se,B,H)},Ie=()=>{const Me=se._isLeaving||!!se[ft];se._isLeaving&&se[ft](!0),ie.persisted&&!Me?$e():ce(se,()=>{$e(),ye&&ye()})};ve?ve(se,$e,Ie):Ie()}else a(se,B,H)},we=(M,B,H,te=!1,ee=!1)=>{const{type:se,props:re,ref:ie,children:ne,dynamicChildren:ae,shapeFlag:he,patchFlag:ce,dirs:ve,cacheIndex:ye,memo:$e}=M;if((ce===-2||ae&&ae.hasOnce)&&(ee=!1),ie!=null&&(Pt(),sa(ie,null,H,M,!0),It()),ye!=null&&(!M.ctx||M.ctx===B)&&(B.renderCache[ye]=void 0),he&256){B.ctx.deactivate(M);return}const Ie=he&1&&ve,Me=!Po(M);let Re;if(Me&&(Re=re&&re.onVnodeBeforeUnmount)&&wt(Re,B,M),he&6)io(M.component,H,te);else{if(he&128){M.suspense.unmount(H,te);return}Ie&&uo(M,null,B,"beforeUnmount"),he&64?M.type.remove(M,B,H,Vt,te):ae&&!ae.hasOnce&&(se!==q||ce>0&&ce&64)?Ne(ae,B,H,!1,!0):(se===q&&ce&384||!ee&&he&16)&&Ne(ne,B,H),te&&no(M)}const je=$e!=null&&ye==null;(Me&&(Re=re&&re.onVnodeUnmounted)||Ie||je)&&at(()=>{Re&&wt(Re,B,M),Ie&&uo(M,null,B,"unmounted"),je&&(M.el=null)},H)},no=M=>{const{type:B,el:H,anchor:te,transition:ee}=M,se=B===q;if(se&&!ee){Wt(H,te);return}if(B===Va){T(M),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave();return}const re=se?ma(M):M,ie=()=>{se?h(H)&&Wt(H,te):s(H),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(re&&re.shapeFlag&1&&ee&&!ee.persisted){const{leave:ne,delayLeave:ae}=ee,he=re.el,ce=()=>ne(he,ie);ae?ae(he,ie,ce):ce()}else ie()},Wt=(M,B)=>{let H;for(;M!==B;)H=g(M),s(M),M=H;s(B)},io=(M,B,H)=>{const{bum:te,scope:ee,job:se,subTree:re,um:ie,m:ne,a:ae}=M;ur(ne),ur(ae),te&&Da(te),ee.stop(),se?(se.flags|=8,we(re,M,B,H)):M.vnode.el&&re&&(re.transition=M.vnode.transition,we(re,M,B,H)),ie&&at(ie,B),at(()=>{M.isUnmounted=!0},B)},Ne=(M,B,H,te=!1,ee=!1,se=0)=>{for(let re=se;re<M.length;re++)we(M[re],B,H,te,ee)},pt=M=>{if(M.shapeFlag&6)return pt(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const B=g(M.anchor||M.el),H=B&&B[wn];return H?g(H):B},rt=(M,B,H)=>{const te=M&&B._vnode?void 0:M&&M.component?M.component.uid:fu();yd(()=>{M==null?B._vnode&&we(B._vnode,null,null,!0):x(B._vnode||null,M,B,null,null,null,H),B._vnode=M},te)},Vt={p:x,um:we,m:ke,r:no,mt:U,mc:E,pc:J,pbc:j,n:pt,o:e};return{render:rt,hydrate:void 0,createApp:Ud(rt)}}function Rs({type:e,props:o},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&o&&o.encoding&&o.encoding.includes("html")?void 0:t}function po({effect:e,job:o},t){t?(e.flags|=32,o.flags|=4):(e.flags&=-33,o.flags&=-5)}function nu(e,o){return(!e||e&&!e.pendingBranch)&&o&&!o.persisted}function Il(e,o,t=!1){const a=e.children,s=o.children;if(ge(a)&&ge(s))for(let l=0;l<a.length;l++){const r=a[l];let n=s[l];n.shapeFlag&1&&!n.dynamicChildren&&((n.patchFlag<=0||n.patchFlag===32)&&(n=s[l]=Rt(s[l]),n.el=r.el),!t&&n.patchFlag!==-2&&Il(r,n)),n.type===As&&(n.patchFlag===-1&&(n=s[l]=Rt(n)),n.el=r.el),n.type===Xe&&!n.el&&(n.el=r.el)}}function iu(e){const o=e.slice(),t=[0];let a,s,l,r,n;const c=e.length;for(a=0;a<c;a++){const f=e[a];if(f!==0){if(s=t[t.length-1],e[s]<f){o[a]=s,t.push(a);continue}for(l=0,r=t.length-1;l<r;)n=l+r>>1,e[t[n]]<f?l=n+1:r=n;f<e[t[l]]&&(l>0&&(o[a]=t[l-1]),t[l]=a)}}for(l=t.length,r=t[l-1];l-- >0;)t[l]=r,r=o[r];return t}function Qn(e){const o=e.subTree.component;if(o)return o.asyncDep&&!o.asyncResolved?o:Qn(o)}function ur(e){if(e)for(let o=0;o<e.length;o++)e[o].flags|=8}function ol(e){if(e.placeholder)return e.placeholder;const o=e.component;return o?ol(o.subTree):null}const Jn=e=>e.__isSuspense;function cu(e,o){o&&o.pendingBranch?ge(e)?o.effects.push(...e):o.effects.push(e):bd(e)}const q=Symbol.for("v-fgt"),As=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Va=Symbol.for("v-stc"),qt=[];let ct=null;function d(e=!1){qt.push(ct=e?null:[])}function Dl(){qt.pop(),ct=qt[qt.length-1]||null}let ha=1;function Qa(e,o=!1){ha+=e,e<0&&ct&&o&&(ct.hasOnce=!0)}function ei(e){return e.dynamicChildren=ha>0?ct||go:null,Dl(),ha>0&&ct&&ct.push(e),e}function p(e,o,t,a,s,l){return ei(u(e,o,t,a,s,l,!0))}function fe(e,o,t,a,s){return ei(A(e,o,t,a,s,!0))}function Vo(e){return e?e.__v_isVNode===!0:!1}function vo(e,o){return e.type===o.type&&e.key===o.key}const ti=({key:e})=>e??null,za=({ref:e,ref_key:o,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ze(e)||Fe(e)||_e(e)?{i:Ye,r:e,k:o,f:!!t}:e:null);function u(e,o=null,t=null,a=0,s=null,l=e===q?0:1,r=!1,n=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:o,key:o&&ti(o),ref:o&&za(o),scopeId:_n,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ye};return n?(Ja(c,t),l&128&&e.normalize(c)):t&&(c.shapeFlag|=ze(t)?8:16),ha>0&&!r&&ct&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&ct.push(c),c}const A=du;function du(e,o=null,t=null,a=0,s=null,l=!1){if((!e||e===Dn)&&(e=Xe),Vo(e)){const n=ro(e,o,!0);return t&&Ja(n,t),ha>0&&!l&&ct&&(n.shapeFlag&6?ct[ct.indexOf(e)]=n:ct.push(n)),n.patchFlag=-2,n}if(_u(e)&&(e=e.__vccOpts),o){o=uu(o);let{class:n,style:c}=o;n&&!ze(n)&&(o.class=Q(n)),Be(c)&&(vs(c)&&!ge(c)&&(c=Ee({},c)),o.style=me(c))}const r=ze(e)?1:Jn(e)?128:ys(e)?64:Be(e)?4:_e(e)?2:0;return u(e,o,t,a,s,r,l,!0)}function uu(e){return e?vs(e)||Un(e)?Ee({},e):e:null}function ro(e,o,t=!1,a=!1){const{props:s,ref:l,patchFlag:r,children:n,transition:c}=e,f=o?pu(s||{},o):s,m={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ti(f),ref:o&&o.ref?t&&l?ge(l)?l.concat(za(o)):[l,za(o)]:za(o):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:o&&e.type!==q?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ro(e.ssContent),ssFallback:e.ssFallback&&ro(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&a&&lo(m,c.clone(m)),m}function R(e=" ",o=0){return A(As,null,e,o)}function Ao(e,o){const t=A(Va,null,e);return t.staticCount=o,t}function W(e="",o=!1){return o?(d(),fe(Xe,null,e)):A(Xe,null,e)}function Ct(e){return e==null||typeof e=="boolean"?A(Xe):ge(e)?A(q,null,e.slice()):Vo(e)?Rt(e):A(As,null,String(e))}function Rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ro(e)}function Ja(e,o){let t=0;const{shapeFlag:a}=e;if(o==null)o=null;else if(ge(o))t=16;else if(typeof o=="object")if(a&65){const s=o.default;s&&(s._c&&(s._d=!1),Ja(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=o._;!s&&!Un(o)?o._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?o._=1:(o._=2,e.patchFlag|=1024))}else if(_e(o)){if(a&65){Ja(e,{default:o});return}o={default:o,_ctx:Ye},t=32}else o=String(o),a&64?(t=16,o=[R(o)]):t=8;e.children=o,e.shapeFlag|=t}function pu(...e){const o={};for(let t=0;t<e.length;t++){const a=e[t];for(const s in a)if(s==="class")o.class!==a.class&&(o.class=Q([o.class,a.class]));else if(s==="style")o.style=me([o.style,a.style]);else if(ns(s)){const l=o[s],r=a[s];r&&l!==r&&!(ge(l)&&l.includes(r))?o[s]=l?[].concat(l,r):r:r==null&&l==null&&!is(s)&&(o[s]=r)}else s!==""&&(o[s]=a[s])}return o}function wt(e,o,t,a=null){vt(e,o,7,[t,a])}const mu=Fn();let oi=0;function fu(){return oi}function hu(e,o,t){const a=e.type,s=(o?o.appContext:e.appContext)||mu,l={uid:oi++,vnode:e,type:a,parent:o,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ec(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:o?o.provides:Object.create(s.provides),ids:o?o.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wn(a,s),emitsOptions:Hn(a,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:a.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=o?o.root:l,l.emit=Kd.bind(null,l),e.ce&&e.ce(l),l}let et=null;const xa=()=>et||Ye;let es,va;{const e=ps(),o=(t,a)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(a),l=>{s.length>1?s.forEach(r=>r(l)):s[0](l)}};es=o("__VUE_INSTANCE_SETTERS__",t=>et=t),va=o("__VUE_SSR_SETTERS__",t=>ga=t)}const ka=e=>{const o=et;return es(e),e.scope.on(),()=>{e.scope.off(),es(o)}},pr=()=>{et&&et.scope.off(),es(null)};function ai(e){return e.vnode.shapeFlag&4}let ga=!1;function vu(e,o=!1,t=!1){o&&va(o);const{props:a,children:s}=e.vnode,l=ai(e);Jd(e,a,l,o),au(e,s,t||o);const r=l?gu(e,o):void 0;return o&&va(!1),r}function gu(e,o){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rd);const{setup:a}=t;if(a){Pt();const s=e.setupContext=a.length>1?li(e):null,l=ka(e),r=_a(a,e,0,[e.props,s]),n=Gr(r);if(It(),l(),(n||e.sp)&&!Po(e)&&Cn(e),n){if(r.then(pr,pr),o)return r.then(c=>{va(!0);try{mr(e,c,o)}finally{va(!1)}}).catch(c=>{gs(c,e,0)});e.asyncDep=r}else mr(e,r)}else si(e)}function mr(e,o,t){_e(o)?e.type.__ssrInlineRender?e.ssrRender=o:e.render=o:Be(o)&&(e.setupState=fn(o)),si(e)}function si(e,o,t){const a=e.type;e.render||(e.render=a.render||Mt);{const s=ka(e);Pt();try{Od(e)}finally{It(),s()}}}const bu={get(e,o){return Je(e,"get",""),e[o]}};function li(e){const o=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,bu),slots:e.slots,emit:e.emit,expose:o}}function $s(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(fn(ad(e.exposed)),{get(o,t){if(t in o)return o[t];if(t in la)return la[t](e)},has(o,t){return t in o||t in la}})):e.proxy}function yu(e,o=!0){return _e(e)?e.displayName||e.name:e.name||o&&e.__name}function _u(e){return _e(e)&&"__vccOpts"in e}const G=(e,o)=>md(e,o,ga);function zo(e,o,t){try{Qa(-1);const a=arguments.length;return a===2?Be(o)&&!ge(o)?Vo(o)?A(e,null,[o]):A(e,o):A(e,null,o):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Vo(t)&&(t=[t]),A(e,o,t))}finally{Qa(1)}}const xu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let al;const fr=typeof window<"u"&&window.trustedTypes;if(fr)try{al=fr.createPolicy("vue",{createHTML:e=>e})}catch{}const ri=al?e=>al.createHTML(e):e=>e,ku="http://www.w3.org/2000/svg",wu="http://www.w3.org/1998/Math/MathML",Et=typeof document<"u"?document:null,hr=Et&&Et.createElement("template"),Au={insert:(e,o,t)=>{o.insertBefore(e,t||null)},remove:e=>{const o=e.parentNode;o&&o.removeChild(e)},createElement:(e,o,t,a)=>{const s=o==="svg"?Et.createElementNS(ku,e):o==="mathml"?Et.createElementNS(wu,e):t?Et.createElement(e,{is:t}):Et.createElement(e);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,o)=>{e.nodeValue=o},setElementText:(e,o)=>{e.textContent=o},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,o){e.setAttribute(o,"")},insertStaticContent(e,o,t,a,s,l){const r=t?t.previousSibling:o.lastChild;if(s&&(s===l||s.nextSibling))for(;o.insertBefore(s.cloneNode(!0),t),!(s===l||!(s=s.nextSibling)););else{hr.innerHTML=ri(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const n=hr.content;if(a==="svg"||a==="mathml"){const c=n.firstChild;for(;c.firstChild;)n.appendChild(c.firstChild);n.removeChild(c)}o.insertBefore(n,t)}return[r?r.nextSibling:o.firstChild,t?t.previousSibling:o.lastChild]}},Yt="transition",No="animation",Eo=Symbol("_vtc"),ni={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ii=Ee({},$n,ni),$u=e=>(e.displayName="Transition",e.props=ii,e),He=$u((e,{slots:o})=>zo(Cd,ci(e),o)),mo=(e,o=[])=>{ge(e)?e.forEach(t=>t(...o)):e&&e(...o)},vr=e=>e?ge(e)?e.some(o=>o.length>1):e.length>1:!1;function ci(e){const o={};for(const P in e)P in ni||(o[P]=e[P]);if(e.css===!1)return o;const{name:t="v",type:a,duration:s,enterFromClass:l=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:n=`${t}-enter-to`,appearFromClass:c=l,appearActiveClass:f=r,appearToClass:m=n,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:_=`${t}-leave-to`}=e,k=Su(s),x=k&&k[0],b=k&&k[1],{onBeforeEnter:$,onEnter:y,onEnterCancelled:w,onLeave:T,onLeaveCancelled:L,onBeforeAppear:F=$,onAppear:V=y,onAppearCancelled:E=w}=o,D=(P,K,U,oe)=>{P._enterCancelled=oe,Zt(P,K?m:n),Zt(P,K?f:r),U&&U()},j=(P,K)=>{P._isLeaving=!1,Zt(P,h),Zt(P,_),Zt(P,g),K&&K()},S=P=>(K,U)=>{const oe=P?V:y,O=()=>D(K,P,U);mo(oe,[K,O]),gr(()=>{Zt(K,P?c:l),At(K,P?m:n),vr(oe)||br(K,a,x,O)})};return Ee(o,{onBeforeEnter(P){mo($,[P]),At(P,l),At(P,r)},onBeforeAppear(P){mo(F,[P]),At(P,c),At(P,f)},onEnter:S(!1),onAppear:S(!0),onLeave(P,K){P._isLeaving=!0;const U=()=>j(P,K);At(P,h),P._enterCancelled?(At(P,g),sl(P)):(sl(P),At(P,g)),gr(()=>{P._isLeaving&&(Zt(P,h),At(P,_),vr(T)||br(P,a,b,U))}),mo(T,[P,U])},onEnterCancelled(P){D(P,!1,void 0,!0),mo(w,[P])},onAppearCancelled(P){D(P,!0,void 0,!0),mo(E,[P])},onLeaveCancelled(P){j(P),mo(L,[P])}})}function Su(e){if(e==null)return null;if(Be(e))return[Fs(e.enter),Fs(e.leave)];{const o=Fs(e);return[o,o]}}function Fs(e){return Cc(e)}function At(e,o){o.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Eo]||(e[Eo]=new Set)).add(o)}function Zt(e,o){o.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const t=e[Eo];t&&(t.delete(o),t.size||(e[Eo]=void 0))}function gr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Tu=0;function br(e,o,t,a){const s=e._endId=++Tu,l=()=>{s===e._endId&&a()};if(t!=null)return setTimeout(l,t);const{type:r,timeout:n,propCount:c}=di(e,o);if(!r)return a();const f=r+"end";let m=0;const h=()=>{e.removeEventListener(f,g),l()},g=_=>{_.target===e&&++m>=c&&h()};setTimeout(()=>{m<c&&h()},n+1),e.addEventListener(f,g)}function di(e,o){const t=window.getComputedStyle(e),a=k=>(t[k]||"").split(", "),s=a(`${Yt}Delay`),l=a(`${Yt}Duration`),r=yr(s,l),n=a(`${No}Delay`),c=a(`${No}Duration`),f=yr(n,c);let m=null,h=0,g=0;o===Yt?r>0&&(m=Yt,h=r,g=l.length):o===No?f>0&&(m=No,h=f,g=c.length):(h=Math.max(r,f),m=h>0?r>f?Yt:No:null,g=m?m===Yt?l.length:c.length:0);const _=m===Yt&&/\b(?:transform|all)(?:,|$)/.test(a(`${Yt}Property`).toString());return{type:m,timeout:h,propCount:g,hasTransform:_}}function yr(e,o){for(;e.length<o.length;)e=e.concat(e);return Math.max(...o.map((t,a)=>_r(t)+_r(e[a])))}function _r(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function sl(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cu(e,o,t){const a=e[Eo];a&&(o=(o?[o,...a]:[...a]).join(" ")),o==null?e.removeAttribute("class"):t?e.setAttribute("class",o):e.className=o}const xr=Symbol("_vod"),ui=Symbol("_vsh"),Bu=Symbol(""),Lu=/(?:^|;)\s*display\s*:/;function Mu(e,o,t){const a=e.style,s=ze(t);let l=!1;if(t&&!s){if(o)if(ze(o))for(const r of o.split(";")){const n=r.slice(0,r.indexOf(":")).trim();t[n]==null&&Yo(a,n,"")}else for(const r in o)t[r]==null&&Yo(a,r,"");for(const r in t){r==="display"&&(l=!0);const n=t[r];n!=null?Iu(e,r,!ze(o)&&o?o[r]:void 0,n)||Yo(a,r,n):Yo(a,r,"")}}else if(s){if(o!==t){const r=a[Bu];r&&(t+=";"+r),a.cssText=t,l=Lu.test(t)}}else o&&e.removeAttribute("style");xr in e&&((!s||o!==t)&&(e[xr]=l?a.display:""),e[ui]&&(a.display="none"))}const Ba=/\s*!important$/;function Yo(e,o,t){if(ge(t))t.forEach(a=>Yo(e,o,a));else if(t==null&&(t=""),o.startsWith("--"))Ba.test(t)?e.setProperty(o,t.replace(Ba,""),"important"):e.setProperty(o,t);else{const a=Pu(e,o);Ba.test(t)?e.setProperty(jt(a),t.replace(Ba,""),"important"):e[a]=t}}const kr=["Webkit","Moz","ms"],Os={};function Pu(e,o){const t=Os[o];if(t)return t;let a=tt(o);if(a!=="filter"&&a in e)return Os[o]=a;a=us(a);for(let s=0;s<kr.length;s++){const l=kr[s]+a;if(l in e)return Os[o]=l}return o}function Iu(e,o,t,a){return e.tagName==="TEXTAREA"&&(o==="width"||o==="height")&&ze(a)&&t===a}const wr="http://www.w3.org/1999/xlink";function Ar(e,o,t,a,s,l=Dc(o)){a&&o.startsWith("xlink:")?t==null?e.removeAttributeNS(wr,o.slice(6,o.length)):e.setAttributeNS(wr,o,t):t==null||l&&!Yr(t)?e.removeAttribute(o):e.setAttribute(o,l?"":ut(t)?String(t):t)}function $r(e,o,t,a,s){if(o==="innerHTML"||o==="textContent"){t!=null&&(e[o]=o==="innerHTML"?ri(t):t);return}const l=e.tagName;if(o==="value"&&l!=="PROGRESS"&&!l.includes("-")){const n=l==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(n!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(o),e._value=t;return}let r=!1;if(t===""||t==null){const n=typeof e[o];n==="boolean"?t=Yr(t):t==null&&n==="string"?(t="",r=!0):n==="number"&&(t=0,r=!0)}try{e[o]=t}catch{}r&&e.removeAttribute(s||o)}function To(e,o,t,a){e.addEventListener(o,t,a)}function Du(e,o,t,a){e.removeEventListener(o,t,a)}const Sr=Symbol("_vei");function Vu(e,o,t,a,s=null){const l=e[Sr]||(e[Sr]={}),r=l[o];if(a&&r)r.value=a;else{const[n,c]=Ru(o);if(a){const f=l[o]=Hu(a,s);To(e,n,f,c)}else r&&(Du(e,n,r,c),l[o]=void 0)}}const zu=/(Once|Passive|Capture)$/,Eu=/^on:?(?:Once|Passive|Capture)$/;function Ru(e){let o,t;for(;(t=e.match(zu))&&!Eu.test(e);)o||(o={}),e=e.slice(0,e.length-t[1].length),o[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):jt(e.slice(2)),o]}let Hs=0;const Fu=Promise.resolve(),Ou=()=>Hs||(Fu.then(()=>Hs=0),Hs=Date.now());function Hu(e,o){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;const s=t.value;if(ge(s)){const l=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{l.call(a),a._stopped=!0};const r=s.slice(),n=[a];for(let c=0;c<r.length&&!a._stopped;c++){const f=r[c];f&&vt(f,o,5,n)}}else vt(s,o,5,[a])};return t.value=e,t.attached=Ou(),t}const Tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qu=(e,o,t,a,s,l)=>{const r=s==="svg";o==="class"?Cu(e,a,r):o==="style"?Mu(e,t,a):ns(o)?is(o)||Vu(e,o,t,a,l):(o[0]==="."?(o=o.slice(1),!0):o[0]==="^"?(o=o.slice(1),!1):Nu(e,o,a,r))?($r(e,o,a),!e.tagName.includes("-")&&(o==="value"||o==="checked"||o==="selected")&&Ar(e,o,a,r,l,o!=="value")):e._isVueCE&&(ju(e,o)||e._def.__asyncLoader&&(/[A-Z]/.test(o)||!ze(a)))?$r(e,tt(o),a,l,o):(o==="true-value"?e._trueValue=a:o==="false-value"&&(e._falseValue=a),Ar(e,o,a,r))};function Nu(e,o,t,a){if(a)return!!(o==="innerHTML"||o==="textContent"||o in e&&Tr(o)&&_e(t));if(o==="spellcheck"||o==="draggable"||o==="translate"||o==="autocorrect"||o==="sandbox"&&e.tagName==="IFRAME"||o==="form"||o==="list"&&e.tagName==="INPUT"||o==="type"&&e.tagName==="TEXTAREA")return!1;if(o==="width"||o==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tr(o)&&ze(t)?!1:o in e}function ju(e,o){const t=e._def.props;if(!t)return!1;const a=tt(o);return Array.isArray(t)?t.some(s=>tt(s)===a):Object.keys(t).some(s=>tt(s)===a)}const pi=new WeakMap,mi=new WeakMap,ts=Symbol("_moveCb"),Cr=Symbol("_enterCb"),ll=new WeakMap,Gu=e=>(delete e.props.mode,e),Uu=Gu({name:"TransitionGroup",props:Ee({},ii,{tag:String,moveClass:String}),setup(e,{slots:o}){const t=xa(),a=An();let s,l,r,n;const c=()=>(n===void 0&&(n=s.length>0&&Ju(s[0].el,t.vnode.el,Br(e))),n);return Ln(()=>{if(ll.delete(t),!c()){s=[],r=void 0;return}const f=Br(e);s.forEach(Ku);const m=r&&Qu(r,t.vnode.el);r=void 0,s.forEach(g=>Wu(g,m));const h=s.filter(Yu);sl(t.vnode.el),h.forEach(g=>{const _=g.el,k=_.style;At(_,f),k.transform=k.webkitTransform=k.transitionDuration="";const x=_[ts]=b=>{b&&b.target!==_||(!b||b.propertyName.endsWith("transform"))&&(_.removeEventListener("transitionend",x),_[ts]=null,Zt(_,f))};_.addEventListener("transitionend",x)}),s=[]}),()=>{const f=Se(e),m=ci(f);let h=f.tag||q;if(s=[],n=void 0,l)for(let g=0;g<l.length;g++){const _=l[g];_.el&&_.el instanceof Element&&!_.el[ui]&&(s.push(_),lo(_,pa(_,m,a,t)),pi.set(_,Ss(_.el)))}l=o.default?Ll(o.default()):[];for(let g=0;g<l.length;g++){const _=l[g];_.key!=null&&lo(_,pa(_,m,a,t))}return s.length&&(r=Xu(t),ll.set(t,c)),A(h,null,l)}}}),os=Uu;function Ku(e){const o=e.el;o[ts]&&o[ts](),o[Cr]&&o[Cr]()}function Br(e){return e.moveClass||`${e.name||"v"}-move`}function Wu(e,o){mi.set(e,Ss(e.el,o))}function Yu(e){const o=pi.get(e),t=mi.get(e),a=o.left-t.left,s=o.top-t.top;if(a||s){const l=e.el,r=l.style,n=l.getBoundingClientRect();let c=1,f=1;return l.offsetWidth&&(c=n.width/l.offsetWidth),l.offsetHeight&&(f=n.height/l.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(f)||f===0)&&(f=1),Math.abs(c-1)<.01&&(c=1),Math.abs(f-1)<.01&&(f=1),r.transform=r.webkitTransform=`translate(${a/c}px,${s/f}px)`,r.transitionDuration="0s",e}}function Ss(e,o){const t=e.getBoundingClientRect();return{left:t.left-(o?o.left:0),top:t.top-(o?o.top:0)}}function Xu(e){let o;for(let t=e.parent;t;t=t.parent){const a=ll.get(t);if(a){const s=Zu(t.vnode.el,e.vnode.el);s&&(o||(o=[])).push(Ee(Ss(s),{item:s,willMove:a}))}}return o}function Zu(e,o){const t=e.nodeType===1?e:e.parentNode;for(;o&&o.parentNode!==t;)o=o.parentNode;if(o&&o.nodeType===1)return o}function Qu(e,o){const t=e.find(a=>a.willMove()&&a.item.contains(o));return t&&Ss(t.item,t)}function Ju(e,o,t){const a=e.cloneNode(),s=e[Eo];s&&s.forEach(n=>{n.split(/\s+/).forEach(c=>c&&a.classList.remove(c))}),t.split(/\s+/).forEach(n=>n&&a.classList.add(n)),a.style.display="none";const l=o.nodeType===1?o:o.parentNode;l.appendChild(a);const{hasTransform:r}=di(a);return l.removeChild(a),r}const Lr=e=>{const o=e.props["onUpdate:modelValue"]||!1;return ge(o)?t=>Da(o,t):o};function ep(e){e.target.composing=!0}function Mr(e){const o=e.target;o.composing&&(o.composing=!1,o.dispatchEvent(new Event("input")))}const La=Symbol("_assign"),Ma=Symbol("_initialValue");function qs(e,o,t){return o&&(e=e.trim()),t&&(e=kl(e)),e}const Vl={created(e,{modifiers:{lazy:o,trim:t,number:a}},s){e.parentNode&&(e.type==="text"?e[Ma]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Ma]=e.defaultValue.replace(/\r\n?/g,`
`))),e[La]=Lr(s);const l=a||s.props&&s.props.type==="number";To(e,o?"change":"input",r=>{r.target.composing||e[La](qs(e.value,t,l))}),(t||l)&&To(e,"change",()=>{e.value=qs(e.value,t,l)}),o||(To(e,"compositionstart",ep),To(e,"compositionend",Mr),To(e,"change",Mr))},mounted(e,{value:o,modifiers:{trim:t,number:a}}){const s=o??"",l=e[Ma];delete e[Ma],l!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==l?e[La](qs(e.value,t,a)):e.value=s},beforeUpdate(e,{value:o,oldValue:t,modifiers:{lazy:a,trim:s,number:l}},r){if(e[La]=Lr(r),e.composing)return;const n=(l||e.type==="number")&&!/^0\d/.test(e.value)?kl(e.value):e.value,c=o??"";if(n===c)return;const f=e.getRootNode();(f instanceof Document||f instanceof ShadowRoot)&&f.activeElement===e&&e.type!=="range"&&(a&&o===t||s&&e.value.trim()===c)||(e.value=c)}},tp=["ctrl","shift","alt","meta"],op={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,o)=>tp.some(t=>e[`${t}Key`]&&!o.includes(t))},Pe=(e,o)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),a=o.join(".");return t[a]||(t[a]=(s,...l)=>{for(let r=0;r<o.length;r++){const n=op[o[r]];if(n&&n(s,o))return}return e(s,...l)})},ap={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Nt=(e,o)=>{const t=e._withKeys||(e._withKeys={}),a=o.join(".");return t[a]||(t[a]=s=>{if(!("key"in s))return;const l=jt(s.key);if(o.some(r=>r===l||ap[r]===l))return e(s)})},sp=Ee({patchProp:qu},Au);let Pr;function lp(){return Pr||(Pr=lu(sp))}const Ts=(...e)=>{const o=lp().createApp(...e),{mount:t}=o;return o.mount=a=>{const s=np(a);if(!s)return;const l=o._component;!_e(l)&&!l.render&&!l.template&&(l.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=t(s,!1,rp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},o};function rp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function np(e){return ze(e)?document.querySelector(e):e}const Ro={common:{close:"关闭",loading:"加载中",now:"现在"},cropper:{upload:"上传图片",enlarge:"放大",shrink:"缩小",rotate90:"转 90°",reset:"重置",export:"裁剪并导出",hint:"拖中间移动 · 拖角放大缩小 · 拖边旋转 · 圆形即头像裁取区",empty:"上传图片后开始裁剪",ready:"尚未上传图片",metaFrame:(e,o)=>`框 ${Math.round(e)}px · 旋转 ${Math.round(o)}°`},code:{copy:"复制",copied:"已复制",expand:"展开代码",collapse:"收起代码"},pagination:{prev:"上一页",next:"下一页",go:"前往",page:"页",confirm:"确定",jumpAria:e=>`跳转到页码（共 ${e} 页）`},upload:{select:"选择文件",dragTitle:"拖拽文件至此",dragSub:e=>`或点击选择（${e}）`,anyType:"任意类型",previewAria:"预览",removeAria:"移除"},empty:{hint:"暂无数据",text:"这里空空如也，什么都没有",search:"没有找到结果",reset:"重置筛选"},select:{placeholder:"请选择"},table:{empty:"暂无数据"},transfer:{source:"来源",target:"目标",toRightAria:"右移",toLeftAria:"左移"},toast:{closeAria:"关闭"},dialog:{label:"对话框"},drawer:{label:"抽屉"},messageBox:{title:"请确认",confirm:"确定",cancel:"取消"},popconfirm:{title:"确定执行此操作？",dangerTitle:"危险操作",confirm:"确定",cancel:"取消"},carousel:{pageAria:e=>`第 ${e} 页`},cascader:{placeholder:"请选择",all:"全部"},datePicker:{placeholder:"选择日期",prevMonth:"上个月",nextMonth:"下个月",prevYear:"上一年",nextYear:"下一年",prevDecade:"前 12 年",nextDecade:"后 12 年",monthName:e=>`${e}月`,weekday:e=>["一","二","三","四","五","六","日"][e],title:(e,o,t)=>e==="day"?`${o} 年 ${t} 月`:`${o} 年`},timePicker:{placeholder:"选择时间"},tour:{skip:"跳过",next:"下一步",done:"完成"},search:{placeholder:"搜索…",empty:"无匹配结果",other:"其他",clearAria:"清除"},themeSwitch:{switchToLight:"切换至亮色",switchToDark:"切换至暗色"},image:{lost:"图片走丢了",retry:"请检查地址或网络后重试"},imageViewer:{zoomOut:"缩小",zoomIn:"放大",rotateLeft:"左旋 90°",rotateRight:"右旋 90°",reset:"复位",prev:"上一张",next:"下一张"},rate:{starAria:e=>`${e} 星`},qrcode:{aria:e=>`二维码：${e}`},otp:{slotAria:e=>`第 ${e} 位`},slideGo:{text:"滑动部署",done:"部署完成",aria:"滑动到最右侧完成"},swipeDeck:{go:"部署",back:"回滚",ok:"健康"},sortList:{handle:"拖我"},tree:{expandAria:e=>`展开 ${e}`,checkAria:e=>`勾选 ${e}`},input:{clearAria:"清空"},inputNumber:{minusAria:"减少",plusAria:"增加"},inputTag:{placeholder:"输入后回车",removeAria:e=>`移除 ${e}`},autocomplete:{placeholder:"输入以搜索"},mention:{placeholder:"输入 @ 提及成员…"},treeSelect:{placeholder:"请选择"},alert:{closeAria:"关闭"},announce:{closeAria:"关闭通知"},anchor:{navAria:"页内导航"},backTop:{aria:"返回顶部"},breadcrumb:{navAria:"面包屑"},notification:{closeAria:"关闭"},pageHeader:{backAria:"返回"},parallaxBox:{hint:"移动鼠标 → 视差跟随 · 点击图形 → 旋转"},bottomSheet:{bgTitle:"部署详情",bgHint:"向上拖动底部把手展开"},actionButtons:{reject:"回滚",accept:"部署"},demo:{"actionButtons.reject":"已回滚","actionButtons.accept":"部署完成","affix.hint":"向下滚动主区，按钮将吸附在顶部菜单下缘 8px 处；展开/收起顶部通知横幅时吸附位自适应跟随，滚回顶部自动解除。","affix.stickyBtn":"吸附中的按钮","affix.placeholder":"滚动占位区（900px 高容器）","alert.infoTitle":"提示","alert.infoBody":"这是一条信息公告。","alert.successTitle":"成功","alert.successBody":"构建完成，无错误无警告。","alert.warnTitle":"注意","alert.warnBody":"Node 20 以上版本为佳。","alert.errorTitle":"出错了","alert.errorBody":"依赖缺失，请重装 node_modules。","anchor.sec1":"第一节","anchor.sec2":"第二节","anchor.sec3":"第三节","anchor.note1":"锚点竖线随此容器滚动高亮切换：每一节标题滚过容器顶部判定线（offset=8px）时，右侧竖线即落到该节。滚动此容器观察。","anchor.note2":"继续滚动，判定线跟随容器基准换算，不再把视口坐标误当容器内偏移。","anchor.note3":"滚到底部：末节较短时顶边可能仍在判定线上方，组件会强制把竖线落到末节；直接点「第三节」跳转后同样即时高亮。","announce.title":"AeroUI Release v1.0.0「平流层」正式发布🎉","announce.longBody":"一个好看、优雅、易套用的 Vue 组件库","announce.shortBody":"一个好看、优雅、易套用的 Vue 组件库","announce.action":"查看发布说明","announce.marqueeLabel":"跑马灯自适应","marquee.disclaimer":"所有产品名称、Logo 与品牌均属于其各自所有者。","announce.longTextLabel":"长文案（演示溢出）","announce.closeBtn":"关闭横幅","announce.reopenBtn":"重新显示横幅","announce.note":"关闭走 max-height 收起过渡，下方内容平滑上移不瞬跳；关闭为会话级，刷新后横幅重新出现。开启「长文案」且视口装不下时自动触发跑马灯；关闭「跑马灯自适应」则溢出直接截断。","announce.bodyTitle":"模拟页面主体（用于观察收起时不跳变）","announce.bodyText":"这是通知横幅下方的正文区域。关闭横幅时，本区域随 max-height 过渡平滑上移，无瞬间跳动。","autocomplete.placeholder":"试试输入 v…","avatar.pallet":"六色配板：","avatar.multiSize":"多尺寸（28-128px）：","backTop.hint":"向下滚动页面，右下角将出现返回顶部按钮。","badge.customLabel":"自定义文本：","badge.defaultText":"自定义文本","badge.dotLabel":"dot 前置圆点：","badge.buildPass":"构建通过","badge.degraded":"降级运行","badge.deployFail":"部署失败","badge.comboLabel":"场景组合（hover 有签名旋转）：","bottomSheet.title":"构建 a4f29c1","bottomSheet.duration":"耗时","bottomSheet.cacheHit":"缓存命中","bottomSheet.artifact":"产物大小","bottomSheet.expanded":"抽屉已展开","breadcrumb.home":"首页","breadcrumb.components":"组件","button.primary":"主要操作","button.secondary":"次要操作","button.ghost":"幽灵按钮","button.danger":"危险操作","button.dark":"深色按钮","button.clickLoad":"点击加载","button.disabled":"禁用","button.withIcon":"带图标","buttonGroup.day":"日","buttonGroup.week":"周","buttonGroup.month":"月","buttonGroup.add":"新增","buttonGroup.edit":"编辑","card.hoverableTitle":"可悬停卡片","card.hoverableBody":"hover 时上浮旋转并投出 7px 硬阴影 —— Aero 签名交互。","card.withHeaderTitle":"带页头","card.body":"卡片正文内容。","card.confirm":"确定","card.cancel":"取消","carousel.zh1":"硬阴影 × 弹性动效组件库","carousel.zh2":"一 token 换整套主题","carousel.zh3":"对标主流库的覆盖面","carousel.customSlide":"自定义幻灯","carousel.anyContent":"这里可以放任意 Vue 模板 / HTML：按钮、图表、表单……","carousel.clickPlus":"点击 +1（当前","carousel.clickPlusEnd":"）","cascader.placeholder":"选择文件路径（三级）","cascader.empty":"尚未选择","checkbox.single":"单个复选","checkbox.selected":"已选：","checkbox.none":"无","chip.removed":"已移除「","chip.removedEnd":"」","chip.selectedChip":"选中的 Chip","chip.uncloseable":"不可关闭","chip.reset":"重置","collapse.q1":"什么是硬阴影签名交互？","collapse.a1":"hover 时元素位移 + 微旋转 + 偏移量实色阴影，构成 Aero 的可识别交互语言。","collapse.q2":"圆角阶如何定义？","collapse.a2":"控件 12px、卡片 18px、胶囊 99px，其余按 xs→2xl 阶梯。","collapse.q3":"弹性曲线用什么？","collapse.a3":"cubic-bezier(.3,1.4,.4,1) —— 回弹感 spring。","colorPicker.current":"当前色：","configProvider.badge":"注入范围内渲染的组件","configProvider.default":"默认（无 Provider 包裹）","configProvider.injected":"Provider 注入（theme=dark · preset=violet）","descriptions.title":"包信息","descriptions.pkgName":"包名","descriptions.version":"版本","descriptions.license":"协议","descriptions.author":"作者","descriptions.build":"构建","descriptions.style":"样式","dialog.openBtn":"打开对话框","dialog.title":"确认删除","dialog.body":"此操作将永久移除该组件的引用，是否继续？","dialog.cancel":"取消","dialog.delete":"删除","divider.topContent":"上段内容","divider.left":"左侧","divider.middle":"中间","divider.right":"右侧","dotField.title":"点阵背景（开启流光后为极光扫光，缓慢漂移）","dotField.flow":"流光","drawer.openBtn":"打开抽屉","drawer.title":"项目设置","drawer.tag1":"标签一","drawer.tag2":"标签二","drawer.body":"抽屉从右侧滑入，Esc 可关闭。","dropdown.copy":"复制链接","dropdown.edit":"编辑","dropdown.editDesc":"打开编辑器","dropdown.share":"分享","dropdown.delete":"删除","dropdown.selected":"选中：","dropdown.moreBtn":"更多操作 ▾","form.required":"此项为必填","form.submit":"提交：","form.projectLabel":"项目名称","form.charHint":"2-30 个字符","form.namePlaceholder":"输入名称","form.descLabel":"描述","form.descPlaceholder":"可选","form.submitBtn":"提交","formItem.nameLabel":"名称","formItem.requiredHint":"必填项","formItem.namePlaceholder":"输入名称","formItem.noteLabel":"备注","formItem.noteError":"不能为空","formItem.notePlaceholder":"选填","grid.card":"卡片","grid.sample":"网格列示例","iconButton.notify":"通知","iconButton.theme":"切换主题","iconButton.search":"搜索","iconButton.menu":"菜单","iconButton.settings":"设置","icon.searchPlaceholder":"搜索图标名…","icon.clickCopy":"点击复制：","icon.copied":"已复制","image.sampleAlt":"示例图","image.failAlt":"失败示例","imageViewer.openBtn":"打开图片查看器","input.required":"必填字段","input.basicPlaceholder":"基础输入","input.prefixPlaceholder":"带前缀","input.errorPlaceholder":"错误态","input.disabledPlaceholder":"禁用","input.disabledValue":"不可编辑","inputTag.placeholder":"输入标签后回车","inputTag.current":"当前：","iridescent.desc":"虹彩丝线（环境氛围背景：6–8 条低透明曲线，brand 色相派生，两层光晕，32s 缓慢循环）","iridescent.hueDrift":"色相漂移","knob.currentQuota":"当前配额","knob.estimatedCost":"预估成本","knob.perHour":"/ 时","knob.vcpu":"vCPU","layout.blockTitle":"区块标题","layout.body":"Section 布局：96px 上下留白（compact 56px），alt 浅底，容器 1180px 居中。","link.internal":"内部链接","link.external":"外部链接","link.disabled":"禁用链接","loading.tip":"加载中…","loading.wrapped":"被包裹内容","loading.wrappedBody":"开启 loading 时出现覆盖层与 spinner。","loading.toggle":"切换 Loading","mention.aeroTeam":"Aero 团队","menu.home":"首页","menu.components":"组件","menu.docs":"文档","menu.groupOverview":"概览","menu.dashboard":"仪表盘","menu.monitor":"实时监控","menu.groupComponents":"组件","menu.form":"表单","menu.data":"数据","menu.groupSettings":"设置","menu.account":"账号","menu.collapse":"折叠","menu.expand":"展开","menu.collapseHint":"collapsed 状态 · 折叠态 hover 浮出菜单名","messageBox.title":"删除组件","messageBox.message":"将永久移除 AeroDemo 的引用，此操作不可撤销。","messageBox.confirmText":"删除","messageBox.deleted":"已删除","messageBox.cancelled":"已取消","messageBox.triggerBtn":"触发确认框","mobileCarousel.zh1":"平流层版本正式上线","mobileCarousel.chip1":"查看更新 →","mobileCarousel.zh2":"全球边缘节点，就近接入","mobileCarousel.chip2":"节点地图 →","mobileCarousel.zh3":"从 git push 到全球可访问","mobileCarousel.chip3":"部署文档 →","mobileStatCard.p95":"P95 延迟","mobileStatCard.online":"在线实例","mobileStatCard.deploy":"本月部署","mobileTabBar.home":"首页","mobileTabBar.deploy":"部署","mobileTabBar.monitor":"监控","mobileTabBar.my":"我的","motionPresets.enableLabel":"启用动画（全局）","notification.success":"成功","notification.successTitle":"部署完成","notification.successBody":"预览链接已生成","notification.error":"错误","notification.errorTitle":"部署失败","notification.errorBody":"请查看构建日志","notification.warn":"警告","notification.warnTitle":"配额告警","notification.warnBody":"本月构建配额剩余 12%","notification.info":"信息","notification.infoTitle":"新版本 0.2.0","notification.infoBody":"含 22 项修复","otp.codeLabel":"验证码：","pageHeader.title":"组件总览","pageHeader.subtitle":"Aero UI 提供的 75+ 组件按六大类组织，均可按需引入。","pageHeader.exportBtn":"导出","pagination.pageOf":"第","pagination.pageSuffix":"页","partyFx.btn":"🎉 点这里放礼花","partyFx.note":"礼花为事件驱动、有限时长；prefers-reduced-motion 下自动静默。","phone.title":"概览","phone.subtitle":"下午好，顾青空 · 一切运行正常","phone.allOk":"一切运行正常","phone.p95":"P95 延迟","phone.online":"在线实例","phone.deploy":"本月部署","phone.home":"首页","phone.deployTab":"部署","phone.monitorTab":"监控","phone.myTab":"我的","popconfirm.publishTitle":"发布 0.2.0 到 npm？","popconfirm.publishBtn":"发布","popconfirm.published":"已发布","popconfirm.deleteTitle":"此操作不可撤销，确认删除？","popconfirm.deleteBtn":"删除","popconfirm.deleted":"已删除","popover.hoverTitle":"悬停 Popover","popover.hoverBtn":"悬停触发","popover.hoverBody":"浮层内容：跟随滚动重定位，支持上下右三方位。","popover.clickTitle":"点击 Popover","popover.clickBtn":"点击触发","popover.clickBody":"右侧弹出的浮层内容。","pullToRefresh.item1":"web-portal 部署成功","pullToRefresh.item1Desc":"华东-1 · 11.6s","pullToRefresh.item2":"PR #482 已合并","pullToRefresh.item2Desc":"feat: 边缘节点健康检查","pullToRefresh.item3":"自动扩容至 18 实例","pullToRefresh.item3Desc":"metric: qps · 阈值触发","pullToRefresh.item4":"billing-svc 已回滚","pullToRefresh.item5":"密钥已自动轮转","pullToRefresh.item5Desc":"db-password · 无感热更","pullToRefresh.done":"刷新完成","qrcode.caption":"输入内容即时重新生成二维码；主题切换时 QR 前景色自动跟随 --ui-ink 重绘","qrcode.contentLabel":"内容","qrcode.inputPlaceholder":"任意文本 / URL","qrcode.sizeLabel":"尺寸","qrcode.fgLabel":"前景色（留空 = 取 --ui-ink 计算值）","qrcode.meta":"当前输入","qrcode.chars":"字符（版本 1-10 自动适配）","radioGroup.optA":"选项 A","radioGroup.optB":"选项 B","radioGroup.optC":"选项 C","rate.current":"当前评分：","rate.decimalToggle":"一位小数","rate.allowReselect":"允许重选","rate.decimalHint":"关闭为整数评级；开启后按 0.1 粒度点击星内位置评分","result.paySuccess":"支付完成","result.paySuccessDesc":"订单将在 2 个工作日内发出。","result.viewOrder":"查看订单","result.payFail":"支付失败","result.payFailDesc":"网络异常，请重试或联系客服。","result.retry":"重试","scrollbar.item":"列表条目","scrollbar.itemNote":"—— 滚动条 hover 会变品牌色","search.placeholder":"模糊搜索组件…","search.selected":"已选：","search.none":"—","search.hint":"输入以筛选，空输入显示全部","search.optButton":"Button 按钮","search.optForm":"Form 表单","search.optTable":"Table 表格","search.optTree":"Tree 树选择","search.optAvatar":"Avatar 头像","search.optImageViewer":"ImageViewer 图片查看器","search.optCarousel":"Carousel 轮播","search.optAffix":"Affix 固钉","search.optAnchor":"Anchor 锚点","search.optCollapse":"Collapse 折叠面板","search.optButtonDesc":"触发操作的按钮，支持类型、尺寸与加载状态","search.optFormDesc":"数据录入表单，内置校验与多种布局","search.optTableDesc":"数据表格，支持排序、选择与固定列","search.optTreeDesc":"树形结构选择器，展示层级数据","search.optAvatarDesc":"用户头像，支持图片与文字回退","search.optImageViewerDesc":"全屏图片预览，支持缩放与旋转","search.optCarouselDesc":"循环轮播，展示多段内容","search.optAffixDesc":"滚动时将元素固定在视口指定位置","search.optAnchorDesc":"页面内锚点导航","search.optCollapseDesc":"可展开收起的折叠面板","search.optGroupForm":"表单","search.optGroupDataDisplay":"数据展示","search.optGroupNavigation":"导航","segmented.listDesc":"列表视图：逐行排列，适合扫描与对比","segmented.gridDesc":"网格视图：平铺展示，适合缩略浏览","segmented.kanbanDesc":"看板视图：按列分组，适合流程跟踪","segmented.monthly":"月付","segmented.yearly":"年付","segmented.billing":"计费：","segmented.viewLabel":"视图：","segmented.list":"列表","segmented.grid":"网格","segmented.kanban":"看板","select.placeholder":"选择框架","select.current":"当前值：","select.none":"无","skeleton.name":"顾青空 · 发布了 v3.0","skeleton.time":"2 分钟前 · 华东-1","skeleton.title":"平流层版本正式上线","skeleton.p1":"新版本把构建、调度、扩缩与可观测折叠进一条命令。","skeleton.p2":"从 git push 到全球可访问，现在只需 11.6 秒。","skeleton.p3":"所有边缘节点已自动完成健康检查与热更新。","skeleton.viewUpdate":"查看更新","skeleton.deployDoc":"部署文档","skeleton.toggle":"切换加载态（骨架 ⇄ 内容）","slideGo.done":"滑动部署完成：my-app 已上线","slideGo.title":"滑动解锁","sortList.meta12":"12 副本","sortList.meta18":"18 副本","sortList.meta4":"4 副本","sortList.meta2":"2 副本","sortList.updated":"列表顺序已更新","sortList.dragTitle":"拖动排序","space.clickPrimary":"可点击 Primary","space.clickOutline":"可点击 Outline","space.clickGhost":"可点击 Ghost","space.to32":"切换到 32px","space.to12":"切换回 12px","space.leftEnd":"左端（justify=between）","space.rightEnd":"右端","space.vertA":"垂直 A","space.vertB":"垂直 B","space.lastClick":"最近点击：","statistic.availability":"可用性","statistic.componentCount":"组件数","steps.create":"创建工程","steps.install":"安装依赖","steps.build":"构建","steps.publish":"发布","steps.prev":"上一步","steps.next":"下一步","steps.current":"当前步骤：","swipeDeck.healthy":"健康","swipeDeck.degraded":"降级","swipeDeck.abnormal":"异常","swipeDeck.regionEast":"华东-1","swipeDeck.regionNorth":"华北-1","swipeDeck.staging":"预发","swipeDeck.regionSouth":"华南-2","swipeDeck.build":"构建","swipeDeck.loopLabel":"循环补位（关=划掉销毁）","swipeDeck.deckCount":"牌组","swipeDeck.deckCountUnit":"张","swipeDeck.deploy":"部署","swipeDeck.rollback":"回滚","swipeDeck.empty":"牌组已清空","swipeDeck.insertBtn":"插入新卡（FLIP 入场）","swipeDeck.removeBtn":"移除顶卡","switch.followSystem":"跟随系统主题","switch.inverted":"反向开关","switch.disabled":"禁用态","table.vueDesc":"Vue 3 组件库","table.buildTool":"构建工具","table.preprocessor":"样式预处理器","tabs.basic":"基础","tabs.style":"样式","tabs.motion":"动效","tabs.basicPanel":"基础面板内容","tabs.stylePanel":"样式面板内容","tabs.motionPanel":"动效面板内容","textarea.multiLine":"多行文本，可垂直缩放","textarea.withCount":"带计数","themeProvider.aeroBlue":"Aero 蓝","themeProvider.hint":"选择预设 — 整站品牌色即时切换；切换其他页面或刷新后保持所选主题色","themeProvider.brandChanged":"品牌色已切换","themeProvider.scopedBadge":"作用域预览 · 全局零改动","themeProvider.scopedHint":"预设按钮只影响下方预览框（CSS 变量仅写容器，不动 :root）；点「应用到全局」才写全局主题并持久化","themeProvider.globalLabel":"当前全局预设","themeProvider.applyBtn":"应用到全局","themeSwitch.hint":"点击切换明暗主题（持久化）","themeSwitch.hintControlled":"受控模式：状态由外部管理，绑定值实时驱动主题","themeSwitch.secBasic":"基础（现行为）","themeSwitch.secControlled":"受控 v-model（实时显示绑定值）","themeSwitch.secSizes":"尺寸 sm · md · lg","themeSwitch.secDisabled":"禁用（由真实开关控制示例开关）","themeSwitch.secChangeLog":"change 事件日志","themeSwitch.logEmpty":"（尚无事件——点上方开关试试）","themeSwitch.logLight":"change → light","themeSwitch.logDark":"change → dark","timeline.item1":"工程骨架搭建","timeline.item1Desc":"tokens 体系与 composables 落成","timeline.item2":"组件转化开发","timeline.item2Desc":"40+ demo 组件还原为 SFC","timeline.item3":"演示页上线","timeline.item3Desc":"Playground 与文档同步发布","toast.success":"成功","toast.successMsg":"构建完成，0 错误 0 警告","toast.error":"错误","toast.errorMsg":"依赖缺失，请重新安装","toast.warn":"警告","toast.warnMsg":"Node 20+ 为佳","toast.info":"信息","toast.infoMsg":"新版本 0.2.0 已发布","tooltip.top":"从顶部弹出的提示","tooltip.topBtn":"上方提示","tooltip.bottom":"从底部弹出的提示","tooltip.bottomBtn":"底部提示","tour.step1Title":"第一步：搜索","tour.step1Desc":"在这里输入关键词过滤组件。","tour.step2Title":"第二步：状态","tour.step2Desc":"徽章显示当前构建状态。","tour.step3Title":"第三步：开始","tour.step3Desc":"点击开始你的 Aero 之旅。","tour.searchPlaceholder":"搜索组件","tour.badge":"构建通过","tour.startBtn":"开始导览","tree.checked":"勾选（","tree.checkedEnd":"）：","tree.hint":"勾选父节点联动全选后代；部分勾选显示半选态","tree.includeParents":"包含父节点","treeSelect.groupBasic":"基础组件","treeSelect.groupForm":"表单组件","treeSelect.groupData":"数据展示组件","treeSelect.groupFeedback":"反馈组件","treeSelect.optButton":"Button 按钮","treeSelect.optIcon":"Icon 图标","treeSelect.optTypography":"Typography 排版","treeSelect.optDivider":"Divider 分割线","treeSelect.optInput":"Input 输入框","treeSelect.optSelect":"Select 选择器","treeSelect.optDatepicker":"DatePicker 日期选择","treeSelect.optUpload":"Upload 上传","treeSelect.optTable":"Table 表格","treeSelect.optTimeline":"Timeline 时间线","treeSelect.optStatistic":"Statistic 统计数值","treeSelect.optToast":"Toast 轻提示","treeSelect.optDialog":"Dialog 对话框","treeSelect.placeholder":"选择组件","treeSelect.current":"当前 key:","treeSelect.none":"—","typography.display":"云原生，本该如此简单","typography.title":"声明式配置，天然贴合 GitOps","typography.body":"AeroBase 把构建、调度、扩缩与可观测折叠进一条命令，让小团队也拥有大厂级的交付基础设施。行高 1.75，段距 14px，保证长文阅读的舒适度。","typography.link":"文字链接","typography.bold":"加粗文本","typography.highlight":"高亮词","typography.cloudWord":"云端","typography.boltWord":"闪电","typography.stickerPre":"贴纸样式","typography.stickerPost":"高亮","typography.replay":"重播动画","typography.trigger":"触发","typography.sendTo":"把应用送上","typography.like":"快得像","typography.sameAs":"一样","watermark.title":"带水印的内容区","watermark.body":"水印平铺于背景，不阻挡交互。"}},ip={common:{close:"Close",loading:"Loading",now:"Now"},cropper:{upload:"Upload image",enlarge:"Enlarge",shrink:"Shrink",rotate90:"Rotate 90°",reset:"Reset",export:"Crop & export",hint:"Drag center to move · Drag corners to scale · Drag edges to rotate · Circle = avatar crop area",empty:"Upload an image to start cropping",ready:"No image uploaded yet",metaFrame:(e,o)=>`Frame ${Math.round(e)}px · Rotated ${Math.round(o)}°`},code:{copy:"Copy",copied:"Copied",expand:"Expand code",collapse:"Collapse code"},pagination:{prev:"Previous page",next:"Next page",go:"Go to",page:"pages",confirm:"Go",jumpAria:e=>`Jump to page (of ${e} pages)`},upload:{select:"Choose file",dragTitle:"Drop files here",dragSub:e=>`or click to browse (${e})`,anyType:"any type",previewAria:"Preview",removeAria:"Remove"},empty:{hint:"No data",text:"Nothing here yet",search:"No results found",reset:"Reset filters"},select:{placeholder:"Please select"},table:{empty:"No data"},transfer:{source:"Source",target:"Target",toRightAria:"Move right",toLeftAria:"Move left"},toast:{closeAria:"Close"},dialog:{label:"Dialog"},drawer:{label:"Drawer"},messageBox:{title:"Are you sure?",confirm:"Confirm",cancel:"Cancel"},popconfirm:{title:"Are you sure you want to proceed?",dangerTitle:"Dangerous operation",confirm:"Confirm",cancel:"Cancel"},carousel:{pageAria:e=>`Page ${e}`},cascader:{placeholder:"Please select",all:"All"},datePicker:{placeholder:"Select date",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",prevDecade:"12 years back",nextDecade:"12 years ahead",monthName:e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e-1],weekday:e=>["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][e],title:(e,o,t)=>e==="day"?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t-1]} ${o}`:`${o}`},timePicker:{placeholder:"Select time"},tour:{skip:"Skip",next:"Next",done:"Done"},search:{placeholder:"Search…",empty:"No matches",other:"Other",clearAria:"Clear"},themeSwitch:{switchToLight:"Switch to light",switchToDark:"Switch to dark"},image:{lost:"Image not found",retry:"Check the URL or network and retry"},imageViewer:{zoomOut:"Zoom out",zoomIn:"Zoom in",rotateLeft:"Rotate 90° left",rotateRight:"Rotate 90° right",reset:"Reset",prev:"Previous",next:"Next"},rate:{starAria:e=>`${e} star${e===1?"":"s"}`},qrcode:{aria:e=>`QR code: ${e}`},otp:{slotAria:e=>`Digit ${e}`},slideGo:{text:"Slide to deploy",done:"Deployment complete",aria:"Slide to the far right to complete"},swipeDeck:{go:"Deploy",back:"Rollback",ok:"Healthy"},sortList:{handle:"Drag me"},tree:{expandAria:e=>`Expand ${e}`,checkAria:e=>`Check ${e}`},input:{clearAria:"Clear"},inputNumber:{minusAria:"Decrease",plusAria:"Increase"},inputTag:{placeholder:"Type and press enter",removeAria:e=>`Remove ${e}`},autocomplete:{placeholder:"Type to search"},mention:{placeholder:"Type @ to mention a member…"},treeSelect:{placeholder:"Please select"},alert:{closeAria:"Close"},announce:{closeAria:"Close notification"},anchor:{navAria:"In-page navigation"},backTop:{aria:"Back to top"},breadcrumb:{navAria:"Breadcrumb"},notification:{closeAria:"Close"},pageHeader:{backAria:"Back"},parallaxBox:{hint:"Move → parallax · Click → rotate"},bottomSheet:{bgTitle:"Deployment details",bgHint:"Drag the bottom handle up to expand"},actionButtons:{reject:"Rollback",accept:"Deploy"},demo:{"actionButtons.reject":"Rolled back","actionButtons.accept":"Deployment complete","affix.hint":"Scroll the main area down — the button pins to 8px below the top menu; it follows the announce banner expand/collapse and releases when you scroll back to the top.","affix.stickyBtn":"Sticky button","affix.placeholder":"Scroll placeholder (900px container)","alert.infoTitle":"Info","alert.infoBody":"This is an info announcement.","alert.successTitle":"Success","alert.successBody":"Build finished with no errors or warnings.","alert.warnTitle":"Warning","alert.warnBody":"Node 20 or later is recommended.","alert.errorTitle":"Something went wrong","alert.errorBody":"Dependencies missing — reinstall node_modules.","anchor.sec1":"Section 1","anchor.sec2":"Section 2","anchor.sec3":"Section 3","anchor.note1":"The anchor rail highlights as this container scrolls: when a section title crosses the top decision line (offset=8px), the right-side rail snaps to it. Scroll this container to observe.","anchor.note2":"Keep scrolling — the decision line follows the container base, never misreading viewport coords as in-container offsets.","anchor.note3":"Scroll to the bottom: when the last section is short, its top edge may stay above the decision line — the component forces the rail onto it. Jumping to Section 3 highlights it instantly.","announce.title":'AeroUI Release v1.0.0 "Stratosphere" officially released 🎉',"announce.longBody":"A beautiful, elegant, easy-to-use Vue component library Vue 3 UI library.","announce.shortBody":"A beautiful, elegant, easy-to-use Vue component library Vue 3 UI library.","announce.action":"View release notes","announce.marqueeLabel":"Adaptive marquee","marquee.disclaimer":"All product names, logos and brands are property of their respective owners.","announce.longTextLabel":"Long copy (overflow demo)","announce.closeBtn":"Hide banner","announce.reopenBtn":"Show banner","announce.note":'Closing uses a max-height collapse transition so content below slides up smoothly with no jump; closing is session-level, and the banner reappears after refresh. With "Long copy" on and the viewport too small, the marquee kicks in automatically; with "Adaptive marquee" off, overflow is truncated.',"announce.bodyTitle":"Simulated page body (watch for no-jump collapse)","announce.bodyText":"This is the body area below the announce banner. When the banner closes, this region slides up smoothly via the max-height transition, with no instant jump.","autocomplete.placeholder":"Try typing v…","avatar.pallet":"6-tone palette:","avatar.multiSize":"Multi-size (28-128px):","backTop.hint":"Scroll the page down — a back-to-top button appears in the bottom-right corner.","badge.customLabel":"Custom label:","badge.defaultText":"Custom label","badge.dotLabel":"dot prefix:","badge.buildPass":"Build passed","badge.degraded":"Degraded","badge.deployFail":"Deployment failed","badge.comboLabel":"Scenario combos (hover signature spin):","bottomSheet.title":"Build a4f29c1","bottomSheet.duration":"Duration","bottomSheet.cacheHit":"Cache hit","bottomSheet.artifact":"Artifact size","bottomSheet.expanded":"Sheet expanded","breadcrumb.home":"Home","breadcrumb.components":"Components","button.primary":"Primary action","button.secondary":"Secondary action","button.ghost":"Ghost button","button.danger":"Dangerous action","button.dark":"Dark button","button.clickLoad":"Click to load","button.disabled":"Disabled","button.withIcon":"With icon","buttonGroup.day":"Day","buttonGroup.week":"Week","buttonGroup.month":"Month","buttonGroup.add":"New","buttonGroup.edit":"Edit","card.hoverableTitle":"Hoverable card","card.hoverableBody":"On hover it lifts and rotates, casting a 7px hard shadow — the Aero signature interaction.","card.withHeaderTitle":"With header","card.body":"Card body content.","card.confirm":"Confirm","card.cancel":"Cancel","carousel.zh1":"Hard shadows × springy motion component kit","carousel.zh2":"One token swaps the whole theme","carousel.zh3":"Coverage rivaling major libraries","carousel.customSlide":"Custom slide","carousel.anyContent":"Anything goes here — Vue templates / HTML: buttons, charts, forms…","carousel.clickPlus":"Click +1 (now","carousel.clickPlusEnd":")","cascader.placeholder":"Pick a file path (3 levels)","cascader.empty":"Nothing selected yet","checkbox.single":"Single checkbox","checkbox.selected":"Selected:","checkbox.none":"none","chip.removed":'Removed "',"chip.removedEnd":'"',"chip.selectedChip":"Selected Chip","chip.uncloseable":"Uncloseable","chip.reset":"Reset","collapse.q1":"What is the hard-shadow signature interaction?","collapse.a1":"On hover: element offset + micro-rotation + a solid offset shadow — Aero’s recognizable interaction language.","collapse.q2":"How are corner radii defined?","collapse.a2":"Controls 12px, cards 18px, pills 99px; the rest follow the xs→2xl ladder.","collapse.q3":"Which easing curve?","collapse.a3":"cubic-bezier(.3,1.4,.4,1) — a bouncy spring.","colorPicker.current":"Current color:","configProvider.badge":"Component rendered inside the scope","configProvider.default":"Default (no provider)","configProvider.injected":"Provider injected (theme=dark · preset=violet)","descriptions.title":"Package info","descriptions.pkgName":"Name","descriptions.version":"Version","descriptions.license":"License","descriptions.author":"Author","descriptions.build":"Build","descriptions.style":"Style","dialog.openBtn":"Open dialog","dialog.title":"Confirm delete","dialog.body":"This will permanently remove the reference to this component. Continue?","dialog.cancel":"Cancel","dialog.delete":"Delete","divider.topContent":"Content above","divider.left":"Left","divider.middle":"Middle","divider.right":"Right","dotField.title":"Dot-matrix background (with the flow enabled, an aurora sweep drifts slowly)","dotField.flow":"Flow","drawer.openBtn":"Open drawer","drawer.title":"Project settings","drawer.tag1":"Tag one","drawer.tag2":"Tag two","drawer.body":"The drawer slides in from the right; Esc closes it.","dropdown.copy":"Copy link","dropdown.edit":"Edit","dropdown.editDesc":"Open the editor","dropdown.share":"Share","dropdown.delete":"Delete","dropdown.selected":"Selected:","dropdown.moreBtn":"More actions ▾","form.required":"This field is required","form.submit":"Submitted:","form.projectLabel":"Project name","form.charHint":"2-30 characters","form.namePlaceholder":"Enter a name","form.descLabel":"Description","form.descPlaceholder":"Optional","form.submitBtn":"Submit","formItem.nameLabel":"Name","formItem.requiredHint":"Required","formItem.namePlaceholder":"Enter a name","formItem.noteLabel":"Note","formItem.noteError":"Cannot be empty","formItem.notePlaceholder":"Optional","grid.card":"Card","grid.sample":"Grid column sample","iconButton.notify":"Notifications","iconButton.theme":"Toggle theme","iconButton.search":"Search","iconButton.menu":"Menu","iconButton.settings":"Settings","icon.searchPlaceholder":"Search icon name…","icon.clickCopy":"Click to copy:","icon.copied":"Copied","image.sampleAlt":"Sample image","image.failAlt":"Failed sample","imageViewer.openBtn":"Open image viewer","input.required":"Required field","input.basicPlaceholder":"Basic input","input.prefixPlaceholder":"With prefix","input.errorPlaceholder":"Error state","input.disabledPlaceholder":"Disabled","input.disabledValue":"Read-only","inputTag.placeholder":"Type a tag and press enter","inputTag.current":"Current:","iridescent.desc":"Iridescent threads (ambient background: 6–8 low-opacity curves derived from the brand hue, two glow layers, a slow 32s loop)","iridescent.hueDrift":"Hue drift","knob.currentQuota":"Current quota","knob.estimatedCost":"Estimated cost","knob.perHour":"/ hr","knob.vcpu":"vCPU","layout.blockTitle":"Section title","layout.body":"Section layout: 96px top/bottom padding (compact 56px), alt light background, 1180px centered container.","link.internal":"Internal link","link.external":"External link","link.disabled":"Disabled link","loading.tip":"Loading…","loading.wrapped":"Wrapped content","loading.wrappedBody":"A coverage layer and spinner appear while loading.","loading.toggle":"Toggle Loading","mention.aeroTeam":"Aero team","menu.home":"Home","menu.components":"Components","menu.docs":"Docs","menu.groupOverview":"Overview","menu.dashboard":"Dashboard","menu.monitor":"Live monitor","menu.groupComponents":"Components","menu.form":"Form","menu.data":"Data","menu.groupSettings":"Settings","menu.account":"Account","menu.collapse":"Collapse","menu.expand":"Expand","menu.collapseHint":"collapsed state · hover item to float label","messageBox.title":"Delete component","messageBox.message":"This will permanently remove the reference to AeroDemo. This cannot be undone.","messageBox.confirmText":"Delete","messageBox.deleted":"Deleted","messageBox.cancelled":"Cancelled","messageBox.triggerBtn":"Trigger confirm box","mobileCarousel.zh1":"STRATOS release is live","mobileCarousel.chip1":"See what’s new →","mobileCarousel.zh2":"Global edge nodes, connect nearby","mobileCarousel.chip2":"Node map →","mobileCarousel.zh3":"From git push to globally accessible","mobileCarousel.chip3":"Deployment docs →","mobileStatCard.p95":"P95 latency","mobileStatCard.online":"Online instances","mobileStatCard.deploy":"Deployments this month","mobileTabBar.home":"Home","mobileTabBar.deploy":"Deploy","mobileTabBar.monitor":"Monitor","mobileTabBar.my":"Mine","motionPresets.enableLabel":"Enable motion (global)","notification.success":"Success","notification.successTitle":"Deployment complete","notification.successBody":"Preview link generated","notification.error":"Error","notification.errorTitle":"Deployment failed","notification.errorBody":"Check the build log","notification.warn":"Warning","notification.warnTitle":"Quota alert","notification.warnBody":"12% of this month’s build quota left","notification.info":"Info","notification.infoTitle":"New version 0.2.0","notification.infoBody":"22 fixes included","otp.codeLabel":"Code:","pageHeader.title":"Component overview","pageHeader.subtitle":"The 75+ Aero UI components, organized into six families, all tree-shakeable.","pageHeader.exportBtn":"Export","pagination.pageOf":"Page","pagination.pageSuffix":"","partyFx.btn":"🎉 Click here for confetti","partyFx.note":"Confetti is event-driven and finite; it stays silent under prefers-reduced-motion.","phone.title":"Overview","phone.subtitle":"Good afternoon, Gu Qingkong · all systems healthy","phone.allOk":"All systems healthy","phone.p95":"P95 latency","phone.online":"Online instances","phone.deploy":"Deployments this month","phone.home":"Home","phone.deployTab":"Deploy","phone.monitorTab":"Monitor","phone.myTab":"Mine","popconfirm.publishTitle":"Publish 0.2.0 to npm?","popconfirm.publishBtn":"Publish","popconfirm.published":"Published","popconfirm.deleteTitle":"This cannot be undone. Confirm delete?","popconfirm.deleteBtn":"Delete","popconfirm.deleted":"Deleted","popover.hoverTitle":"Hover Popover","popover.hoverBtn":"Hover to trigger","popover.hoverBody":"Popup content: repositions on scroll, supports top/bottom/right placements.","popover.clickTitle":"Click Popover","popover.clickBtn":"Click to trigger","popover.clickBody":"Popup content anchored on the right.","pullToRefresh.item1":"web-portal deployed","pullToRefresh.item1Desc":"East-1 · 11.6s","pullToRefresh.item2":"PR #482 merged","pullToRefresh.item2Desc":"feat: edge node health check","pullToRefresh.item3":"Scaled up to 18 instances","pullToRefresh.item3Desc":"metric: qps · threshold reached","pullToRefresh.item4":"billing-svc rolled back","pullToRefresh.item5":"Secret auto-rotated","pullToRefresh.item5Desc":"db-password · zero-downtime hot update","pullToRefresh.done":"Refresh complete","qrcode.caption":"The QR regenerates instantly as you type; on theme switch the QR foreground follows --ui-ink and repaints","qrcode.contentLabel":"Content","qrcode.inputPlaceholder":"Any text / URL","qrcode.sizeLabel":"Size","qrcode.fgLabel":"Foreground (empty = use computed --ui-ink)","qrcode.meta":"Input so far","qrcode.chars":"chars (version 1-10 auto-fits)","radioGroup.optA":"Option A","radioGroup.optB":"Option B","radioGroup.optC":"Option C","rate.current":"Current rating:","rate.decimalToggle":"1 decimal","rate.allowReselect":"Allow reselect","rate.decimalHint":"Off = whole stars; on = 0.1 precision by position inside a star","result.paySuccess":"Payment complete","result.paySuccessDesc":"Your order ships within 2 business days.","result.viewOrder":"View order","result.payFail":"Payment failed","result.payFailDesc":"Network error — retry or contact support.","result.retry":"Retry","scrollbar.item":"List item","scrollbar.itemNote":"— the scrollbar turns brand color on hover","search.placeholder":"Fuzzy-search components…","search.selected":"Selected:","search.none":"—","search.hint":"Type to filter — leave empty to show all components","search.optButton":"Button","search.optForm":"Form","search.optTable":"Table","search.optTree":"Tree select","search.optAvatar":"Avatar","search.optImageViewer":"ImageViewer","search.optCarousel":"Carousel","search.optAffix":"Affix","search.optAnchor":"Anchor","search.optCollapse":"Collapse","search.optButtonDesc":"Action button with type, size and loading states","search.optFormDesc":"Data-entry form with built-in validation and layouts","search.optTableDesc":"Data table with sorting, selection and fixed columns","search.optTreeDesc":"Hierarchical tree selector","search.optAvatarDesc":"User avatar with image and text fallback","search.optImageViewerDesc":"Fullscreen image preview with zoom and rotation","search.optCarouselDesc":"Looping carousel for multiple content slides","search.optAffixDesc":"Pins an element to a fixed viewport position while scrolling","search.optAnchorDesc":"In-page anchor navigation","search.optCollapseDesc":"Collapsible content panels","search.optGroupForm":"Form","search.optGroupDataDisplay":"Data Display","search.optGroupNavigation":"Navigation","segmented.listDesc":"List view: one per row, great for scanning and comparing","segmented.gridDesc":"Grid view: tiled layout, great for thumbnail browsing","segmented.kanbanDesc":"Kanban view: grouped by column, great for flow tracking","segmented.monthly":"Monthly","segmented.yearly":"Yearly","segmented.billing":"Billing:","segmented.viewLabel":"View:","segmented.list":"List","segmented.grid":"Grid","segmented.kanban":"Kanban","select.placeholder":"Pick a framework","select.current":"Current value:","select.none":"none","skeleton.name":"Gu Qingkong · released v3.0","skeleton.time":"2 min ago · East-1","skeleton.title":"STRATOS release is live","skeleton.p1":"The new release folds build, scheduling, scaling and observability into a single command.","skeleton.p2":"From git push to globally accessible — now in just 11.6 seconds.","skeleton.p3":"Every edge node has already finished its health check and hot update.","skeleton.viewUpdate":"See what’s new","skeleton.deployDoc":"Deployment docs","skeleton.toggle":"Toggle loading (skeleton ⇄ content)","slideGo.done":"Slide deploy complete: my-app is live","slideGo.title":"Slide to unlock","sortList.meta12":"12 replicas","sortList.meta18":"18 replicas","sortList.meta4":"4 replicas","sortList.meta2":"2 replicas","sortList.updated":"List order updated","sortList.dragTitle":"Drag to sort","space.clickPrimary":"Clickable Primary","space.clickOutline":"Clickable Outline","space.clickGhost":"Clickable Ghost","space.to32":"Switch to 32px","space.to12":"Switch back to 12px","space.leftEnd":"Left end (justify=between)","space.rightEnd":"Right end","space.vertA":"Vertical A","space.vertB":"Vertical B","space.lastClick":"Last click:","statistic.availability":"Availability","statistic.componentCount":"Components","steps.create":"Create project","steps.install":"Install deps","steps.build":"Build","steps.publish":"Publish","steps.prev":"Previous","steps.next":"Next","steps.current":"Current step:","swipeDeck.healthy":"Healthy","swipeDeck.degraded":"Degraded","swipeDeck.abnormal":"Abnormal","swipeDeck.regionEast":"East-1","swipeDeck.regionNorth":"North-1","swipeDeck.staging":"Staging","swipeDeck.regionSouth":"South-2","swipeDeck.build":"Build","swipeDeck.loopLabel":"Loop refill (off = destroy on swipe)","swipeDeck.deckCount":"Deck","swipeDeck.deckCountUnit":"cards","swipeDeck.deploy":"deploy","swipeDeck.rollback":"rollback","swipeDeck.empty":"Deck emptied","swipeDeck.insertBtn":"Insert card (FLIP entry)","swipeDeck.removeBtn":"Remove top card","switch.followSystem":"Follow system theme","switch.inverted":"Inverted switch","switch.disabled":"Disabled state","table.vueDesc":"Vue 3 component kit","table.buildTool":"Build tool","table.preprocessor":"Styles preprocessor","tabs.basic":"Basic","tabs.style":"Style","tabs.motion":"Motion","tabs.basicPanel":"Basic panel content","tabs.stylePanel":"Style panel content","tabs.motionPanel":"Motion panel content","textarea.multiLine":"Multiline text, vertically resizable","textarea.withCount":"With counter","themeProvider.aeroBlue":"Aero Blue","themeProvider.hint":"Pick a preset — the whole site’s brand color switches instantly; it survives page changes and refreshes","themeProvider.brandChanged":"Brand color switched","themeProvider.scopedBadge":"Scoped preview · zero global changes","themeProvider.scopedHint":"Preset buttons only affect the preview box below (CSS vars written to the container only, :root untouched); click Apply to set the global theme (persisted)","themeProvider.globalLabel":"Current global preset","themeProvider.applyBtn":"Apply globally","themeSwitch.hint":"Click to toggle light/dark theme (persisted)","themeSwitch.hintControlled":"Controlled: state is managed externally, the bound value drives the theme in real time","themeSwitch.secBasic":"Basic (default behavior)","themeSwitch.secControlled":"Controlled v-model (live bound value)","themeSwitch.secSizes":"Sizes sm / md / lg","themeSwitch.secDisabled":"Disabled (real switch controls the sample)","themeSwitch.secChangeLog":"change event log","themeSwitch.logEmpty":"(no events yet — click a switch above)","themeSwitch.logLight":"change → light","themeSwitch.logDark":"change → dark","timeline.item1":"Scaffold set up","timeline.item1Desc":"Token system and composables landed","timeline.item2":"Component porting","timeline.item2Desc":"40+ demo components rebuilt as SFCs","timeline.item3":"Demo pages live","timeline.item3Desc":"Playground and docs published in sync","toast.success":"Success","toast.successMsg":"Build finished, 0 errors 0 warnings","toast.error":"Error","toast.errorMsg":"Dependencies missing, please reinstall","toast.warn":"Warning","toast.warnMsg":"Node 20+ preferred","toast.info":"Info","toast.infoMsg":"New version 0.2.0 released","tooltip.top":"Tooltip from the top","tooltip.topBtn":"Top tooltip","tooltip.bottom":"Tooltip from the bottom","tooltip.bottomBtn":"Bottom tooltip","tour.step1Title":"Step 1: Search","tour.step1Desc":"Type a keyword here to filter components.","tour.step2Title":"Step 2: Status","tour.step2Desc":"The badge shows the current build status.","tour.step3Title":"Step 3: Get started","tour.step3Desc":"Click to start your Aero journey.","tour.searchPlaceholder":"Search components","tour.badge":"Build passed","tour.startBtn":"Start tour","tree.checked":"Checked (","tree.checkedEnd":"):","tree.hint":"Checking a parent cascades to all descendants; partial checks render the indeterminate state","tree.includeParents":"Include parents","treeSelect.groupBasic":"Basic components","treeSelect.groupForm":"Form components","treeSelect.groupData":"Data display components","treeSelect.groupFeedback":"Feedback components","treeSelect.optButton":"Button","treeSelect.optIcon":"Icon","treeSelect.optTypography":"Typography","treeSelect.optDivider":"Divider","treeSelect.optInput":"Input","treeSelect.optSelect":"Select","treeSelect.optDatepicker":"DatePicker","treeSelect.optUpload":"Upload","treeSelect.optTable":"Table","treeSelect.optTimeline":"Timeline","treeSelect.optStatistic":"Statistic","treeSelect.optToast":"Toast","treeSelect.optDialog":"Dialog","treeSelect.placeholder":"Pick a component","treeSelect.current":"Current key:","treeSelect.none":"—","typography.display":"Cloud-native, beautifully simple","typography.title":"Declarative config, natively GitOps-friendly","typography.body":"AeroBase folds build, scheduling, scaling and observability into one command, giving small teams enterprise-grade delivery infrastructure. Line-height 1.75, 14px paragraph spacing, keeping long-form reading comfortable.","typography.link":"Text link","typography.bold":"Bold text","typography.highlight":"Highlight word","typography.cloudWord":"the cloud","typography.boltWord":"lightning","typography.stickerPre":"Sticker style","typography.stickerPost":"highlight","typography.replay":"Replay animation","typography.trigger":"Trigger","typography.sendTo":"Ship an app onto","typography.like":"Fast as","typography.sameAs":"","watermark.title":"Watermarked content area","watermark.body":"The watermark tiles behind content and never blocks interaction."}},fi="AeroLocale",cp={"zh-cn":Ro,"en-us":ip};function Y(){const e=yo(fi,null),o=G(()=>(e==null?void 0:e.locale.value)??"zh-cn"),t=G(()=>cp[o.value]??Ro),a={locale:o,messages:t};for(const s of Object.keys(Ro)){const l=G(()=>t.value[s]);a[s]=l}return a}const dp={class:"aero-actbtns"},up=["aria-label"],pp=["aria-label"],mp=z({__name:"action-buttons",props:{rejectTip:{default:void 0},acceptTip:{default:void 0}},emits:["reject","accept"],setup(e,{emit:o}){const{actionButtons:t}=Y(),a=e,s=G(()=>a.rejectTip??t.value.reject),l=G(()=>a.acceptTip??t.value.accept),r=o;return(n,c)=>(d(),p("div",dp,[u("button",{class:"aero-actbtn aero-actbtn--no",type:"button","aria-label":s.value,onClick:c[0]||(c[0]=f=>r("reject"))},[...c[2]||(c[2]=[u("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),u("path",{d:"M3 4v5h5"})],-1)])],8,up),u("button",{class:"aero-actbtn aero-actbtn--yes",type:"button","aria-label":l.value,onClick:c[1]||(c[1]=f=>r("accept"))},[...c[3]||(c[3]=[Ao('<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-be680d9e><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" data-v-be680d9e></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" data-v-be680d9e></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" data-v-be680d9e></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" data-v-be680d9e></path></svg>',1)])],8,pp)]))}}),Z=(e,o)=>{const t=e.__vccOpts||e;for(const[a,s]of o)t[a]=s;return t},fp=Z(mp,[["__scopeId","data-v-be680d9e"]]);function le(e,o){const t=e;return t.install=a=>{a.component(o??t.name??"",t)},t}const hi=le(fp,"AeroActionButtons"),hp={x:["M18 6 6 18","m6 6 12 12"],check:["M20 6 9 12l-5 5"],"chevron-down":["m6 9 6 6 6-6"],"chevron-up":["m18 15-6-6-6 6"],"chevron-left":["m15 18-6-6 6-6"],"chevron-right":["m9 18 6-6-6-6"],"arrow-up":["m5 12 7-7 7 7","M12 19V5"],"arrow-left":["m12 19-7-7 7-7","M19 12H5"],"arrow-right":["M5 12h14","m12 5 7 7-7 7"],menu:["M4 6h16","M4 12h16","M4 18h16"],search:["circle cx=11 cy=11 r=8","m21 21-4.3-4.3"],copy:["rect x=8 y=8 width=14 height=14 rx=2","M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"],"external-link":["M15 3h6v6","M10 14 21 3","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h6"],"more-horizontal":["circle cx=12 cy=12 r=1","circle cx=19 cy=12 r=1","circle cx=5 cy=12 r=1"],info:["circle cx=12 cy=12 r=10","M12 16v-4","M12 8h.01"],"help-circle":["circle cx=12 cy=12 r=10","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3","M12 17h.01"],sun:["circle cx=12 cy=12 r=4","M12 2v2","M12 20v2","m4.93 4.93 1.41 1.41","m17.66 17.66 1.41 1.41","M2 12h2","M20 12h2","m6.34 17.66-1.41 1.41","m19.07 4.93-1.41 1.41"],moon:["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],palette:["circle cx=13.5 cy=6.5 r=.5","circle cx=17.5 cy=10.5 r=.5","circle cx=8.5 cy=7.5 r=.5","circle cx=6.5 cy=12.5 r=.5","M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"],bell:["M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9","M10.3 21a1.94 1.94 0 0 0 3.4 0"],"circle-check":["M22 11.08V12a10 10 0 1 1-5.93-9.14","m9 11 3 3L22 4"],"circle-alert":["circle cx=12 cy=12 r=10","M12 8v4","M12 16h.01"],"triangle-alert":["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z","M12 9v4","M12 17h.01"],"circle-x":["circle cx=12 cy=12 r=10","m15 9-6 6","m9 9 6 6"],user:["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2","circle cx=12 cy=7 r=4"],users:["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2","circle cx=9 cy=7 r=4","M22 21v-2a4 4 0 0 0-3-3.87","M16 3.13a4 4 0 0 1 0 7.75"],code:["m16 18 6-6-6-6","m8 6-6 6 6 6"],terminal:["m4 17 6-6-6-6","M12 19h8"],database:["ellipse cx=12 cy=5 rx=9 ry=3","M3 5v14a9 3 0 0 0 18 0V5","M3 12a9 3 0 0 0 18 0"],"file-text":["M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z","M14 2v4a2 2 0 0 0 2 2h4","M10 9H8","M16 13H8","M16 17H8"],folder:["M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"],image:["rect x=3 y=3 width=18 height=18 rx=2","circle cx=9 cy=9 r=2","m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"],table:["M12 3v18","M3 9h18","M3 15h18","rect x=3 y=3 width=18 height=18 rx=2"],plus:["M5 12h14","M12 5v14"],minus:["M5 12h14"],edit:["M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7","M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"],trash:["M3 6h18","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6","M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],download:["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","m7 10 5 5 5-5","M12 15V3"],upload:["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","m17 8-5-5-5 5","M12 3v12"],refresh:["M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8","M21 3v5h-5","M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16","M8 21H3v-5"],settings:["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z","circle cx=12 cy=12 r=3"],filter:["M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"],star:["M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16Z"],heart:["M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"],zap:["M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14Z"],sparkles:["M9.937 15.503 9 19l-.937-3.497a2 2 0 0 0-1.566-1.566L3 13l3.497-.937a2 2 0 0 0 1.566-1.566L9 7l.937 3.497a2 2 0 0 0 1.566 1.566L15 13l-3.497.937a2 2 0 0 0-1.566 1.566ZM20 3v4","M22 5h-4","M4 17l-1.644 1.355a.5.5 0 0 0 .187.875L4 20l.644 2.145a.5.5 0 0 0 .875.187L7 21"],grid:["rect x=3 y=3 width=18 height=18 rx=2","M3 9h18","M3 15h18","M9 3v18","M15 3v18"],layout:["rect x=3 y=3 width=18 height=18 rx=2","M3 9h18","M9 21V9"],layers:["M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z","m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65","m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"],box:["M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z","m3.3 7 8.7 5 8.7-5","M12 22V12"],compass:["circle cx=12 cy=12 r=10","M 16.24 7.76 L 14.12 14.12 L 7.76 16.24 L 9.88 9.88 z"],rocket:["M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"],cloud:["M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"],"git-branch":["M6 3v12","circle cx=18 cy=6 r=3","circle cx=6 cy=18 r=3","M18 9a9 9 0 0 1-9 9"],"git-commit":["circle cx=12 cy=12 r=3","M3 12h6","M15 12h6"],package:["m7.5 4.27 9 5.15","M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z","m3.3 7 8.7 5 8.7-5","M12 22V12"],send:["M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z","m21.854 2.147-10.94 10.939"],clock:["circle cx=12 cy=12 r=10","M12 6v6","M12 12l4 2"],calendar:["M8 2v4","M16 2v4","rect x=3 y=4 width=18 height=18 rx=2","M3 10h18"],mail:["rect x=2 y=4 width=20 height=16 rx=2","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],link:["M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71","M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"],lock:["rect x=3 y=11 width=18 height=11 rx=2","M7 11V7a5 5 0 0 1 10 0v4"],eye:["M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0","circle cx=12 cy=12 r=3"],"grip-vertical":["circle cx=9 cy=12 r=1","circle cx=9 cy=5 r=1","circle cx=9 cy=19 r=1","circle cx=15 cy=12 r=1","circle cx=15 cy=5 r=1","circle cx=15 cy=19 r=1"],home:["M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3h-2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"],"trending-up":["M16 7h6v6","m22 7-8.5 8.5-5-5L2 17"],activity:["M22 12h-4l-3 9L9 3l-3 9H2"],wifi:["M5 13a10 10 0 0 1 14 0","M8.5 16.5a5 5 0 0 1 7 0","M2 8.82a15 15 0 0 1 20 0","M12 20h.01"],globe:["circle cx=12 cy=12 r=10","M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20","M2 12h20"]};function vp(e){const o={};for(const t of e.split(/\s+/).slice(1)){const a=/^([\w-]+)=([\d.]+)$/.exec(t);a&&(o[a[1]]=Number(a[2]))}if(/^circle /.test(e)){const{cx:t=12,cy:a=12,r:s=4}=o;return`M ${t-s} ${a} a ${s} ${s} 0 1 0 ${s*2} 0 a ${s} ${s} 0 1 0 -${s*2} 0`}if(/^ellipse /.test(e)){const{cx:t=12,cy:a=12,rx:s=9,ry:l=3}=o;return`M ${t-s} ${a} a ${s} ${l} 0 1 0 ${s*2} 0 a ${s} ${l} 0 1 0 -${s*2} 0`}if(/^rect /.test(e)){const{x:t=3,y:a=3,width:s=18,height:l=18,rx:r=2}=o,n=Math.min(r,s/2,l/2);return[`M ${t+n} ${a}`,`h ${s-n*2}`,`a ${n} ${n} 0 0 1 ${n} ${n}`,`v ${l-n*2}`,`a ${n} ${n} 0 0 1 -${n} ${n}`,`h -${s-n*2}`,`a ${n} ${n} 0 0 1 -${n} -${n}`,`v -${l-n*2}`,`a ${n} ${n} 0 0 1 ${n} -${n}`,"z"].join(" ")}if(/^polygon |^polyline |^line /.test(e)){const t=/points=([\d.,\s]+)/.exec(e);if(!t)return"";const a=t[1].trim().split(/[\s,]+/).map(Number);if(/^line /.test(e)){const[l,r,n,c]=a;return`M ${l} ${r} L ${n} ${c}`}return a.reduce((l,r,n)=>n%2===0?[...l,`${n?"L":"M"} ${r}`]:[...l.slice(0,-1),`${l[l.length-1]} ${r}`],[]).join(" ")+(/^polygon /.test(e)?" z":"")}return e}const xe=Object.fromEntries(Object.entries(hp).map(([e,o])=>[e,o.map(vp)])),gp={width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},bp=["d"],yp={class:"aero-alert__body"},_p={key:0},xp={class:"aero-alert__content"},kp=["aria-label"],wp=z({__name:"alert",props:{type:{default:"info"},title:{},closable:{type:Boolean,default:!1}},setup(e){const{alert:o}=Y(),t={info:"info",success:"circle-check",warn:"triangle-alert",error:"circle-x"},a=C(!1);return(s,l)=>a.value?W("",!0):(d(),p("div",{key:0,class:Q(["aero-alert",`aero-alert--${e.type}`]),role:"alert"},[(d(),p("svg",gp,[(d(!0),p(q,null,X(i(xe)[t[e.type]]??[],(r,n)=>(d(),p("path",{key:n,d:r},null,8,bp))),128))])),u("div",yp,[e.title?(d(),p("b",_p,v(e.title),1)):W("",!0),u("div",xp,[de(s.$slots,"default",{},void 0,!0)])]),e.closable?(d(),p("button",{key:0,class:"aero-alert__close",type:"button",onClick:l[0]||(l[0]=r=>a.value=!0),"aria-label":i(o).closeAria},[...l[1]||(l[1]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})],-1)])],8,kp)):W("",!0)],2))}}),Ap=Z(wp,[["__scopeId","data-v-986f6c51"]]),Xo=le(Ap,"AeroAlert"),$p={class:"aero-announce__in"},Sp={class:"aero-announce__group"},Tp={width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"aero-announce__ic"},Cp=["d"],Bp={key:0},Lp={class:"aero-announce__text"},Mp=["href","target","rel"],Pp={width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"aero-announce__ic"},Ip=["d"],Dp={class:"aero-announce__body"},Vp={key:0},zp={class:"aero-announce__text"},Ep=["href","target","rel"],Rp=["aria-label"],Ir=40,Fp=2,Op=z({__name:"announce",props:{icon:{default:"sparkles"},storageKey:{default:""},animated:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},marquee:{type:Boolean,default:!0},actionHref:{default:void 0}},emits:["close","closed","update:open"],setup(e,{expose:o,emit:t}){const{announce:a}=Y(),s=e,l=t,r=s.open!==void 0,n=C(r?s.open:!(s.storageKey&&localStorage.getItem(s.storageKey)==="1"));r&&be(()=>s.open,x=>{x!==void 0&&(n.value=x)});function c(){n.value=!1,s.storageKey&&localStorage.setItem(s.storageKey,"1"),l("close"),l("update:open",!1),s.animated?setTimeout(()=>l("closed"),320):l("closed")}function f(){n.value=!0,s.storageKey&&localStorage.removeItem(s.storageKey),l("update:open",!0)}const m=C(),h=C(),g=C(!1),_=C(18);function k(){if(!s.marquee){g.value=!1;return}const x=m.value;if(!x)return;const b=x.style.whiteSpace,$=x.style.overflow;x.style.whiteSpace="nowrap",x.style.overflow="visible";const y=x.querySelector(".aero-announce__group"),w=y?y.scrollWidth:0,T=x.clientWidth;x.style.whiteSpace=b,x.style.overflow=$,g.value=w>T+2,g.value&&(x.style.setProperty("--mq-period",`${w+Ir}px`),_.value=Math.max(6,(w+Ir)/80))}return De(async()=>{if(await Oe(),k(),window.addEventListener("resize",k),typeof ResizeObserver<"u"&&h.value){const x=new ResizeObserver(()=>k());x.observe(h.value),h.value.__ro=x}}),Le(()=>{var b;window.removeEventListener("resize",k);const x=(b=h.value)==null?void 0:b.__ro;x&&(x.disconnect(),delete h.value.__ro)}),be(n,async x=>{x&&(await Oe(),k())}),be(()=>s.marquee,k),o({close:c,reopen:f}),(x,b)=>(d(),p("div",{class:Q(["aero-announce",{"is-open":n.value,"is-anim":e.animated}]),role:"status"},[u("div",$p,[u("div",{ref_key:"trackRef",ref:m,class:Q(["aero-announce__track",{"is-marquee":g.value}]),style:me(g.value?{animationDuration:_.value+"s"}:void 0)},[u("div",Sp,[(d(),p("svg",Tp,[(d(!0),p(q,null,X(i(xe)[e.icon]??[],($,y)=>(d(),p("path",{key:y,d:$},null,8,Cp))),128))])),u("div",{ref_key:"bodyRef",ref:h,class:"aero-announce__body"},[x.$slots.title?(d(),p("b",Bp,[de(x.$slots,"title",{},void 0,!0)])):W("",!0),u("div",Lp,[de(x.$slots,"default",{},void 0,!0)]),x.$slots.action?(d(),p("a",{key:1,class:"aero-announce__act",href:e.actionHref??"#",target:e.actionHref?"_blank":void 0,rel:e.actionHref?"noopener noreferrer":void 0,onClick:b[0]||(b[0]=$=>e.actionHref?void 0:$.preventDefault())},[de(x.$slots,"action",{},void 0,!0)],8,Mp)):W("",!0)],512)]),g.value?(d(),p(q,{key:0},X(Fp,$=>u("div",{key:$,class:"aero-announce__group","aria-hidden":"true"},[(d(),p("svg",Pp,[(d(!0),p(q,null,X(i(xe)[e.icon]??[],(y,w)=>(d(),p("path",{key:w,d:y},null,8,Ip))),128))])),u("div",Dp,[x.$slots.title?(d(),p("b",Vp,[de(x.$slots,"title",{},void 0,!0)])):W("",!0),u("div",zp,[de(x.$slots,"default",{},void 0,!0)]),x.$slots.action?(d(),p("a",{key:1,class:"aero-announce__act",href:e.actionHref??"#",target:e.actionHref?"_blank":void 0,rel:e.actionHref?"noopener noreferrer":void 0,onClick:b[1]||(b[1]=y=>e.actionHref?void 0:y.preventDefault())},[de(x.$slots,"action",{},void 0,!0)],8,Ep)):W("",!0)])])),64)):W("",!0)],6),u("button",{class:"aero-announce__close",type:"button","aria-label":i(a).closeAria,onClick:c},[...b[2]||(b[2]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})],-1)])],8,Rp)])],2))}}),Hp=Z(Op,[["__scopeId","data-v-be911302"]]),zl=le(Hp,"AeroAnnounce"),vi="aero-ui-preset",rl="aero-ui-brand",qp=localStorage.getItem(vi),Np=localStorage.getItem(rl),qe=wo({theme:localStorage.getItem("aero-ui-theme")||"light",preset:qp||"aero",brand:Np||""});function jp(e){e=(e||"#0EBFFF").replace("#","").trim(),e.length===3&&(e=[...e].map(m=>m+m).join(""));const o=parseInt(e.slice(0,2),16)/255,t=parseInt(e.slice(2,4),16)/255,a=parseInt(e.slice(4,6),16)/255,s=Math.max(o,t,a),l=Math.min(o,t,a),r=s-l;let n=0,c=0,f=(s+l)/2;if(r){switch(c=f>.5?r/(2-s-l):r/(s+l),s){case o:n=(t-a)/r+(t<a?6:0);break;case t:n=(a-o)/r+2;break;default:n=(o-t)/r+4}n*=60}return{h:n,s:c*100,l:f*100}}function gi(e){const{l:o}=jp(e);return o>52?`color-mix(in srgb, ${e} 30%, #000)`:"#FFFFFF"}function Gp(){const e=document.documentElement;e.dataset.theme=qe.theme,localStorage.setItem("aero-ui-theme",qe.theme),qe.brand?(e.dataset.preset="custom",e.style.setProperty("--ui-brand",qe.brand),e.style.setProperty("--ui-on-brand",gi(qe.brand)),localStorage.setItem(rl,qe.brand)):(e.style.removeProperty("--ui-brand"),e.style.removeProperty("--ui-on-brand"),localStorage.removeItem(rl),qe.preset!=="aero"?e.dataset.preset=qe.preset:delete e.dataset.preset),localStorage.setItem(vi,qe.preset)}xn(Gp);function Cs(){return{state:qe,isDark:()=>qe.theme==="dark",setTheme(e){qe.theme=e},toggleTheme(){qe.theme=qe.theme==="dark"?"light":"dark"},setPreset(e){qe.preset=e},setBrand(e){qe.brand=e},resetBrand(){qe.brand="",qe.preset="aero"},shadeFor:gi}}function Up(){function e(t){const a=t.currentTarget;if(!a)return;const s=a.getBoundingClientRect(),l=Math.max(s.width,s.height),r=document.createElement("span");r.className="aero-ripple",r.style.cssText=`width:${l}px;height:${l}px;left:${t.clientX-s.left-l/2}px;top:${t.clientY-s.top-l/2}px`,a.appendChild(r),setTimeout(()=>r.remove(),680)}function o(t,a){const s=l=>{a&&!a()||e(l)};return t.addEventListener("pointerdown",s),()=>t.removeEventListener("pointerdown",s)}return{attach:e,bind:o}}const Kp=(e,o=0)=>e.toLocaleString("zh-CN",{minimumFractionDigits:o,maximumFractionDigits:o});function Wp(e,o=1400,t=0){const a=C(0);let s=0;function l(r){cancelAnimationFrame(s);const n=a.value,c=performance.now(),f=m=>{const h=Math.min(1,(m-c)/o),g=1-Math.pow(1-h,3);a.value=n+(r-n)*g,h<1&&(s=requestAnimationFrame(f))};s=requestAnimationFrame(f)}return be(e,r=>l(r),{immediate:!0}),{display:a,text:()=>Kp(a.value,t)}}function Kt(e,o){const t=s=>{const l=e();l&&!l.contains(s.target)&&o()},a={capture:!0};return De(()=>document.addEventListener("pointerdown",t,a)),Le(()=>document.removeEventListener("pointerdown",t,a)),{handler:t}}const Yp=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function nl(e,o){if(Yp())return;const t=getComputedStyle(document.documentElement).getPropertyValue("--ui-brand").trim()||"#0EBFFF",a=getComputedStyle(document.documentElement).getPropertyValue("--ui-ink").trim()||"#0C1B2A",s=getComputedStyle(document.documentElement).getPropertyValue("--ui-ok").trim()||"#12B886",l=document.createElement("span");l.className="aero-party-ring",l.style.left=e+"px",l.style.top=o+"px",document.body.appendChild(l),setTimeout(()=>l.remove(),600);const r=document.createElement("div");r.className="aero-party-emoji",r.textContent="🎉",r.style.left=e+"px",r.style.top=o+"px",document.body.appendChild(r),r.animate([{transform:"translate(-50%,-50%) scale(.2) rotate(-24deg)",opacity:0},{transform:"translate(-50%,-135%) scale(1.25) rotate(10deg)",opacity:1,offset:.35},{transform:"translate(-50%,-210%) scale(1) rotate(-6deg)",opacity:0}],{duration:950,easing:"cubic-bezier(.2,.8,.3,1)"}).onfinish=()=>r.remove();const n=[t,s,"#FFD166","#FF8FA3","#B5A9FF",a];for(let c=0;c<32;c++){const f=document.createElement("i");f.className="aero-party-ribbon";const m=4+Math.random()*5,h=9+Math.random()*13,g=n[Math.floor(Math.random()*n.length)],_=Math.random();f.style.cssText=`left:${e}px;top:${o}px;width:${m}px;height:${h}px;background:${g};border-radius:${_>.55?"99px":_>.3?"2px 7px 99px 2px":"2px"}`,document.body.appendChild(f);const k=(-20-Math.random()*140)*(Math.PI/180),x=70+Math.random()*130,b=Math.cos(k)*x,$=Math.sin(k)*x,y=Math.random()*520-260,w=y+(Math.random()*360-180);f.animate([{transform:"translate(-50%,-50%) rotate(0deg)",opacity:1},{transform:`translate(calc(-50% + ${b}px),calc(-50% + ${$}px)) rotate(${y}deg)`,opacity:1,offset:.55},{transform:`translate(calc(-50% + ${b*1.18}px),calc(-50% + ${$+165}px)) rotate(${w}deg)`,opacity:0}],{duration:950+Math.random()*550,easing:"cubic-bezier(.2,.75,.35,1)"}).onfinish=()=>f.remove()}for(let c=0;c<5;c++){const f=document.createElement("span");f.className="aero-party-star",f.textContent="✦",f.style.cssText=`left:${e}px;top:${o}px;color:${t};font-size:${10+Math.random()*8}px`,document.body.appendChild(f);const m=Math.random()*Math.PI*2,h=34+Math.random()*44;f.animate([{transform:"translate(-50%,-50%) scale(.4)",opacity:1},{transform:`translate(calc(-50% + ${Math.cos(m)*h}px),calc(-50% + ${Math.sin(m)*h}px)) scale(1.1)`,opacity:0}],{duration:620,easing:"ease-out"}).onfinish=()=>f.remove()}}const Lo=wo({enabled:(localStorage.getItem("aero-ui-motion")??"on")!=="off"});function il(){const e=document.documentElement;Lo.enabled?delete e.dataset.motion:e.dataset.motion="off",localStorage.setItem("aero-ui-motion",Lo.enabled?"on":"off")}typeof document<"u"&&il();function Xp(){return{state:Lo,setEnabled(e){Lo.enabled=e,il()},toggle(){Lo.enabled=!Lo.enabled,il()}}}function yt(e,o={}){const t=C(!1);let a=null,s=!1,l=-1,r=-1,n=0,c=0;const f=5;function m(x){if(!(l>=0||!a||r<0)&&!(Math.hypot(x.clientX-n,x.clientY-c)<=f))try{a.setPointerCapture(r),l=r}catch{}}function h(x){t.value&&(m(x),e(x))}function g(){if(!s&&(s=!0,t.value=!1,document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",_),document.removeEventListener("pointercancel",_),a)){if(l>=0)try{a.releasePointerCapture(l)}catch{}a=null,l=-1}}function _(x){var b;g(),(b=o.onEnd)==null||b.call(o,x)}function k(x,b){var $;t.value||(b.stopPropagation(),b.pointerType!=="mouse"&&o.preventDefault!==!1&&(($=b.preventDefault)==null||$.call(b)),a=x??null,s=!1,t.value=!0,l=-1,r=b.pointerId,n=b.clientX,c=b.clientY,document.addEventListener("pointermove",h),document.addEventListener("pointerup",_),document.addEventListener("pointercancel",_))}return Le(g),{startDrag:k,active:t}}function El(e,o){const t=C({scrollTop:0,scrollHeight:0,clientHeight:0});let a=0,s=null;function l(){const h=e();if(h instanceof Window||h===null||h===void 0){const g=document.scrollingElement;t.value={scrollTop:window.scrollY,scrollHeight:(g==null?void 0:g.scrollHeight)??document.documentElement.scrollHeight,clientHeight:(g==null?void 0:g.clientHeight)??document.documentElement.clientHeight}}else t.value={scrollTop:h.scrollTop,scrollHeight:h.scrollHeight,clientHeight:h.clientHeight};o==null||o(t.value)}function r(){const h=n();s!==h&&(s&&s.removeEventListener("scroll",r),h.addEventListener("scroll",r,{passive:!0}),s=h),!a&&(a=requestAnimationFrame(()=>{a=0,l()}))}function n(){const h=e();return h instanceof Window||!h?window:h}function c(){const h=n();s&&s!==h&&s.removeEventListener("scroll",r),s!==h&&(h.addEventListener("scroll",r,{passive:!0}),s=h),l()}function f(){l()}function m(){s&&(s.removeEventListener("scroll",r),s=null),a&&(cancelAnimationFrame(a),a=0)}return Le(m),{latest:t,start:c,stop:m,sample:f}}const Zp=["value","placeholder","disabled"],Qp={key:0,class:"aero-ac__menu"},Jp=["onClick","onMousemove"],em={key:0,class:"aero-ac__hit"},tm=z({__name:"autocomplete",props:{modelValue:{},suggestions:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","select"],setup(e,{emit:o}){const{autocomplete:t}=Y(),a=e,s=G(()=>a.placeholder??t.value.placeholder),l=o,r=C(),n=C(!1),c=C(-1);Kt(()=>r.value,()=>n.value=!1);const f=G(()=>{const k=(a.modelValue??"").trim().toLowerCase();return k?a.suggestions.filter(x=>x.label.toLowerCase().includes(k)).slice(0,8):a.suggestions.slice(0,8)});be(f,k=>{var x;n.value=k.length>0&&document.activeElement===((x=r.value)==null?void 0:x.querySelector("input")),c.value=-1});function m(k){l("update:modelValue",k.label),l("select",k),n.value=!1}function h(k){if(n.value){if(k.key==="Escape")return n.value=!1;if(k.key==="ArrowDown"||k.key==="ArrowUp"){k.preventDefault();const x=k.key==="ArrowDown"?1:-1;c.value=(c.value+x+f.value.length)%f.value.length}if(k.key==="Enter"&&c.value>=0){const x=f.value[c.value];x&&m(x)}}}function g(k){const x=(a.modelValue??"").trim();if(!x)return k;const b=k.toLowerCase().indexOf(x.toLowerCase());return b<0?k:`${k.slice(0,b)}[H]${k.slice(b,b+x.length)}[/H]${k.slice(b+x.length)}`}function _(k){return g(k).split(/(\[H\].*?\[\/H\])/).map(x=>{const b=/^\[H\](.*?)\[\/H\]$/.exec(x);return b?{text:b[1],hit:!0}:{text:x,hit:!1}})}return(k,x)=>(d(),p("div",{ref_key:"root",ref:r,class:"aero-ac",onKeydown:h},[u("input",{class:"aero-ac__input",value:e.modelValue,placeholder:s.value,disabled:e.disabled,onInput:x[0]||(x[0]=b=>l("update:modelValue",b.target.value)),onFocus:x[1]||(x[1]=b=>n.value=f.value.length>0)},null,40,Zp),A(He,{name:"aero-ac-drop"},{default:I(()=>[n.value&&f.value.length?(d(),p("ul",Qp,[(d(!0),p(q,null,X(f.value,(b,$)=>(d(),p("li",{key:b.value,class:Q(["aero-ac__opt",{"is-kb":$===c.value}]),onClick:y=>m(b),onMousemove:y=>c.value=$},[(d(!0),p(q,null,X(_(b.label),(y,w)=>(d(),p(q,{key:w},[y.hit?(d(),p("b",em,v(y.text),1)):(d(),p(q,{key:1},[R(v(y.text),1)],64))],64))),128))],42,Jp))),128))])):W("",!0)]),_:1})],544))}}),om=Z(tm,[["__scopeId","data-v-df81df34"]]),bi=le(om,"AeroAutocomplete"),am={class:"aero-bsheet-bg"},sm={class:"aero-bsheet__t"},lm={class:"aero-bsheet__body"},rm=z({__name:"bottom-sheet",props:{title:{default:""},rows:{default:()=>[]},bgTitle:{default:void 0},bgHint:{default:void 0},open:{type:Boolean,default:!1}},emits:["update:open","change"],setup(e,{emit:o}){const{bottomSheet:t}=Y(),a=e,s=G(()=>a.bgTitle??t.value.bgTitle),l=G(()=>a.bgHint??t.value.bgHint),r=o,n=C(),c=C(),f=C(a.open),m=fa(),h=()=>{var F;return(((F=n.value)==null?void 0:F.clientHeight)??0)-58},g=F=>{c.value&&(c.value.style.transform=`translateY(${F}px)`)};let _=0,k=0;function x(){if(!c.value)return h();const F=getComputedStyle(c.value).transform;return F&&F!=="none"?new DOMMatrixReadOnly(F).f:h()}function b(F){let V=k+(F.clientY-_);V=Math.max(0,Math.min(h(),V)),g(V)}function $(){c.value&&(c.value.style.transition=""),x()<h()*.5?T(!0):T(!1)}const{startDrag:y}=yt(b,{onEnd:$});function w(F){_=F.clientY,k=x(),c.value&&(c.value.style.transition="none"),y(c.value,F)}function T(F){f.value=F,c.value&&c.value.classList.toggle("open",F),g(F?0:h()),r("update:open",F),r("change",F)}function L(){T(!f.value)}return De(()=>{var F;f.value=a.open,(F=c.value)==null||F.classList.toggle("open",a.open),g(a.open?0:h())}),(F,V)=>(d(),p("div",{ref_key:"zone",ref:n,class:"aero-bsheet-zone"},[u("div",am,[u("b",null,v(s.value),1),u("p",null,v(l.value),1),i(m).bg?de(F.$slots,"bg",{},void 0,!0,0):W("",!0)]),u("div",{ref_key:"sheet",ref:c,class:Q(["aero-bsheet",{open:f.value}]),onPointerdown:w},[u("div",{class:"aero-bsheet__bar",onClick:L},[...V[0]||(V[0]=[u("i",null,null,-1)])]),u("div",sm,v(e.title),1),u("div",lm,[de(F.$slots,"default",{},()=>[(d(!0),p(q,null,X(e.rows,(E,D)=>(d(),p("div",{key:D,class:"aero-bsheet__row"},[u("span",null,v(E[0]),1),u("b",null,v(E[1]),1)]))),128))],!0)])],34)],512))}}),nm=Z(rm,[["__scopeId","data-v-c9823da5"]]),yi=le(nm,"AeroBottomSheet"),im=["aria-valuenow","aria-valuemin","aria-valuemax"],cm={viewBox:"0 0 100 100"},dm={class:"aero-knob__c"},um=40,Dr=270/360,pm=z({__name:"knob",props:{modelValue:{default:8},min:{default:0},max:{default:16},step:{default:1},unit:{default:"CORES"}},emits:["update:modelValue","change"],setup(e,{emit:o}){const t=e,a=o,s=C(),l=C(),r=C(t.modelValue),n=2*Math.PI*um,c=G(()=>(r.value-t.min)/(t.max-t.min));function f(){l.value&&(l.value.style.strokeDashoffset=String(n*Dr*(1-c.value)))}function m(y){if(!s.value)return null;const w=s.value.getBoundingClientRect(),T=w.left+w.width/2,L=w.top+w.height/2;let F=Math.atan2(y.clientY-L,y.clientX-T)*180/Math.PI+135;return F=(F%360+360)%360,F>270?null:F}function h(y,w){let T=w-y;return T>180&&(T-=360),T<-180&&(T+=360),T}let g=null,_=0;function k(y){const w=m(y);if(w!==null){if(g===null)g=w,_=w/270,r.value=Math.round(_*(t.max-t.min)/t.step)*t.step+t.min;else{const T=h(g,w);_=Math.max(0,Math.min(1,_+T/270)),g=w,r.value=Math.round(_*(t.max-t.min)/t.step)*t.step+t.min}f(),a("update:modelValue",r.value),a("change",r.value)}}function x(y){var T;const w=m(y);w!==null&&(g=w,_=w/270,(T=s.value)==null||T.classList.add("drag"),$(s.value,y))}function b(){var y,w;g=null,(y=s.value)==null||y.classList.remove("drag"),(w=s.value)==null||w.animate([{transform:"scale(1)"},{transform:"scale(1.06)"},{transform:"scale(1)"}],{duration:280,easing:"ease-out"})}const{startDrag:$}=yt(k,{onEnd:b});return De(()=>{var y;l.value&&(l.value.style.strokeDasharray=`${n*Dr} ${n}`),f(),(y=s.value)==null||y.addEventListener("touchstart",w=>{const T=w.touches[0];if(!T||!s.value)return;const L=s.value.getBoundingClientRect(),F=L.left+L.width/2,V=L.top+L.height/2;let E=Math.atan2(T.clientY-V,T.clientX-F)*180/Math.PI+135;E=(E%360+360)%360,E<=270&&w.preventDefault()},{passive:!1})}),(y,w)=>(d(),p("div",{ref_key:"root",ref:s,class:"aero-knob",role:"slider","aria-valuenow":r.value,"aria-valuemin":e.min,"aria-valuemax":e.max,tabindex:"0",onPointerdown:x},[(d(),p("svg",cm,[w[0]||(w[0]=u("circle",{class:"aero-knob__track",cx:"50",cy:"50",r:"40"},null,-1)),u("circle",{ref_key:"arc",ref:l,class:"aero-knob__arc",cx:"50",cy:"50",r:"40"},null,512)])),u("div",dm,[u("b",null,v(r.value),1),u("small",null,v(e.unit),1)])],40,im))}}),mm=Z(pm,[["__scopeId","data-v-81d4e8c3"]]),_i=le(mm,"AeroKnob"),fm={class:"aero-mcar__vp"},hm={class:"aero-mcar__en"},vm={class:"aero-mcar__zh"},gm={key:0,class:"aero-mcar__chip"},bm={class:"aero-mcar__dots"},ym=["aria-label","onClick"],_m={key:0,class:"aero-mcar__prog"},xm=z({__name:"mobile-carousel",props:{slides:{},interval:{default:4200}},emits:["change"],setup(e,{emit:o}){const{carousel:t}=Y(),a=e,s=o,l=C(),r=C(),n=C(),c=C(0),f=C(0),m=C(!1);let h=0,g=null,_=0,k=0;const x=()=>a.slides.length,b=()=>{var S,P;return((P=(S=l.value)==null?void 0:S.querySelector(".aero-mcar__vp"))==null?void 0:P.clientWidth)??0};function $(S){r.value&&(r.value.style.transform=`translateX(${S}px)`)}function y(){g&&clearInterval(g),a.interval&&(n.value&&(n.value.getAnimations().forEach(S=>S.cancel()),n.value.animate([{width:"0%"},{width:"100%"}],{duration:a.interval,iterations:1})),g=setInterval(()=>w(h+1),a.interval))}function w(S,P=!0){var U;const K=x();K&&(h=(S%K+K)%K,P||(U=r.value)==null||U.classList.add("notrX"),$(-h*b()),P||requestAnimationFrame(()=>requestAnimationFrame(()=>{var oe;return(oe=r.value)==null?void 0:oe.classList.remove("notrX")})),f.value=h,c.value=h,s("change",h),y())}function T(){var S;g&&clearInterval(g),g=null,(S=n.value)==null||S.getAnimations().forEach(P=>P.pause())}function L(S){var U;k=S.clientX-_,!m.value&&Math.abs(k)>5&&((U=r.value)==null||U.classList.add("drag"));let P=-h*b()+k;P>0&&(P*=.32);const K=-((x()-1)*b());P<K&&(P=K+(P-K)*.32),$(P)}function F(){var S;m.value=!1,(S=r.value)==null||S.classList.remove("drag"),k<-45?w(h+1):k>45?w(h-1):w(h)}const{startDrag:V}=yt(L,{onEnd:F});function E(S){m.value=!1,_=S.clientX,k=0,V(r.value,S),T()}function D(){T()}function j(){m.value||y()}return De(()=>w(0,!1)),Le(()=>{g&&clearInterval(g)}),(S,P)=>(d(),p("div",{ref_key:"root",ref:l,class:"aero-mcar",onPointerenter:D,onPointerleave:j},[u("div",fm,[u("div",{ref_key:"track",ref:r,class:Q(["aero-mcar__track",{drag:m.value}]),onPointerdown:E},[(d(!0),p(q,null,X(e.slides,(K,U)=>(d(),p("div",{key:U,class:Q(["aero-mcar__slide",`aero-mcar__slide--${K.tone??"a"}`])},[(d(!0),p(q,null,X(K.rings??[],(oe,O)=>(d(),p("span",{key:O,class:"aero-mcar__ring",style:me({width:oe.w+"px",height:oe.h+"px",top:oe.top,right:oe.right,bottom:oe.bottom,left:oe.left})},null,4))),128)),u("span",hm,v(K.en),1),u("span",vm,v(K.zh),1),K.chip?(d(),p("span",gm,v(K.chip),1)):W("",!0)],2))),128))],34)]),u("div",bm,[(d(!0),p(q,null,X(e.slides,(K,U)=>(d(),p("button",{key:U,class:Q(["aero-mcar__dot",{on:U===c.value}]),"aria-label":i(t).pageAria(U+1),onClick:oe=>w(U)},null,10,ym))),128))]),e.interval?(d(),p("div",_m,[u("i",{ref_key:"prog",ref:n},null,512)])):W("",!0)],544))}}),km=Z(xm,[["__scopeId","data-v-0443b9f7"]]),Rl=le(km,"AeroMobileCarousel"),wm={class:"aero-mstat"},Am={class:"aero-mstat__label"},$m={class:"aero-mstat__value"},Sm={key:0,class:"aero-mstat__spark",viewBox:"0 0 100 26",preserveAspectRatio:"none"},Tm=["d","stroke"],Cm={key:1,class:"aero-mstat__spark",viewBox:"0 0 100 26",preserveAspectRatio:"none"},Bm={class:"aero-mstat__bars"},Lm=["x","y","width","height","fill"],Mm=z({__name:"mobile-stat-card",props:{label:{},value:{},chart:{default:"none"},points:{},bars:{},mainColor:{type:Boolean,default:!0}},setup(e){return(o,t)=>{var a,s;return d(),p("div",wm,[u("small",Am,v(e.label),1),u("b",$m,v(e.value),1),e.chart==="line"&&((a=e.points)!=null&&a.length)?(d(),p("svg",Sm,[u("path",{class:"aero-mstat__chartline",d:"M"+e.points.map(l=>`${l.x} ${l.y}`).join(" L"),fill:"none",stroke:e.mainColor?"var(--ui-brand)":"var(--ui-line-2)","stroke-width":"2.5","stroke-linecap":"round"},null,8,Tm)])):e.chart==="bar"&&((s=e.bars)!=null&&s.length)?(d(),p("svg",Cm,[u("g",Bm,[(d(!0),p(q,null,X(e.bars,(l,r)=>(d(),p("rect",{key:r,x:l.x,y:l.y,width:l.w,height:l.h,rx:"2",fill:l.main?"var(--ui-brand)":"var(--ui-line-2)",style:me({animationDelay:r*.4+"s"})},null,12,Lm))),128))])])):W("",!0)])}}}),Pm=Z(Mm,[["__scopeId","data-v-33835783"]]),Ht=le(Pm,"AeroMobileStatCard"),Im=["onClick"],Dm={width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Vm=["d"],xi={home:["M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3h-2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"],rocket:["M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"],activity:["M22 12h-4l-3 9L9 3l-3 9H2"],user:["M19 21a7 7 0 0 0-14 0","M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"]},zm={tabPaths:xi},Em=z({...zm,__name:"mobile-tab-bar",props:{items:{},modelValue:{default:0}},emits:["update:modelValue","change"],setup(e,{emit:o}){const t=e,a=o,s=C(),l=C(),r=C(t.modelValue);be(()=>t.modelValue,m=>{r.value=m});function n(){const m=s.value,h=l.value;if(!m||!h)return;const g=m.querySelectorAll(".aero-mtab")[r.value];g&&(h.style.width=g.offsetWidth+"px",h.style.transform=`translateX(${g.offsetLeft}px)`)}function c(m){r.value=m,a("update:modelValue",m),a("change",m),Oe(n)}const f=()=>n();return De(()=>{Oe(n),window.addEventListener("resize",f)}),Le(()=>window.removeEventListener("resize",f)),(m,h)=>(d(),p("nav",{ref_key:"root",ref:s,class:"aero-mtabbar"},[u("span",{ref_key:"pill",ref:l,class:"aero-mtabbar__pill"},null,512),(d(!0),p(q,null,X(e.items,(g,_)=>(d(),p("button",{key:_,class:Q(["aero-mtab",{on:_===r.value}]),type:"button",onClick:k=>c(_)},[(d(),p("svg",Dm,[(d(!0),p(q,null,X(xi[g.icon]??[],(k,x)=>(d(),p("path",{key:x,d:k},null,8,Vm))),128))])),R(" "+v(g.label),1)],10,Im))),128))],512))}}),Rm=Z(Em,[["__scopeId","data-v-ad61395a"]]),Fl=le(Rm,"AeroMobileTabBar"),Fm={class:"aero-phone"},Om={class:"aero-phone__screen"},Hm={class:"aero-phone__status"},qm={key:0,class:"aero-phone__title"},Nm={key:1,class:"aero-phone__sub"},jm=z({__name:"phone",props:{time:{default:"9:41"},title:{default:""},subtitle:{default:""}},setup(e){return fa(),fa(),(o,t)=>(d(),p(q,null,[u("div",Fm,[t[2]||(t[2]=u("div",{class:"aero-phone__notch"},null,-1)),u("div",Om,[u("div",Hm,[u("span",null,v(e.time),1),t[0]||(t[0]=Ao('<span class="aero-phone__si" data-v-404b845f><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-404b845f><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" data-v-404b845f></path></svg><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-404b845f><path d="M5 13a10 10 0 0 1 14 0" data-v-404b845f></path><path d="M8.5 16.5a5 5 0 0 1 7 0" data-v-404b845f></path><path d="M12 20h.01" data-v-404b845f></path></svg><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-404b845f><rect x="2" y="8" width="17" height="9" rx="3" data-v-404b845f></rect><path d="M22 11v3" data-v-404b845f></path></svg></span>',1))]),e.title?(d(),p("div",qm,v(e.title),1)):W("",!0),e.subtitle?(d(),p("div",Nm,v(e.subtitle),1)):W("",!0),de(o.$slots,"default",{},void 0,!0),t[1]||(t[1]=u("div",{class:"aero-phone__homebar"},null,-1))])]),W("",!0)],64))}}),Gm=Z(jm,[["__scopeId","data-v-404b845f"]]),ki=le(Gm,"AeroPhone"),Um={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Km=["d"],Wm={class:"aero-ptr__ic"},Ym={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Xm=["d"],Zm={key:0},Qm={key:0,class:"aero-ptr__time"},Jm=z({__name:"pull-to-refresh",props:{items:{},duration:{default:1300},damping:{default:.55},width:{},height:{}},emits:["refresh"],setup(e,{emit:o}){const t=e,a=o,s=C(),l=C(),r=C();let n=0,c=!1,f=!0;function m(){r.value&&(f=r.value.scrollTop<=2)}let h=!1,g=0;function _(V){!f||c||(h=!0,g=V.touches[0].clientY)}function k(V){if(!h||!l.value||!r.value)return;const E=V.touches[0].clientY-g;if(E<=0){r.value.style.transform="",l.value.style.transform="translate(-50%, -46px)";return}V.preventDefault();const D=Math.min(76,E*t.damping);r.value.style.transform=`translateY(${D}px)`,l.value.style.transform=`translate(-50%, ${-46+D}px) rotate(${D*4}deg)`}function x(){if(!h||!l.value||!r.value)return;h=!1,y()>46?(c=!0,l.value.classList.add("spin"),l.value.style.transform="translate(-50%, 14px)",r.value.style.transform="translateY(52px)",a("refresh"),setTimeout(()=>{if(!l.value||!r.value)return;l.value.classList.remove("spin"),l.value.style.transform="translate(-50%, -46px)",r.value.style.transform="",c=!1,r.value.querySelectorAll(".aero-ptr__item").forEach((D,j)=>{D.animate([{opacity:.3},{opacity:1}],{duration:400,delay:j*60,easing:"ease-out"})})},t.duration)):(r.value.style.transform="",l.value.style.transform="translate(-50%, -46px)")}function b(V){V.pointerType!=="touch"&&(!f||c||(n=V.clientY,T(r.value,V)))}function $(V){if(!l.value||!r.value)return;const E=V.clientY-n;if(E<=0){r.value.style.transform="",l.value.style.transform="translate(-50%, -46px)";return}const D=Math.min(76,E*t.damping);r.value.style.transform=`translateY(${D}px)`,l.value.style.transform=`translate(-50%, ${-46+D}px) rotate(${D*4}deg)`}function y(){if(!r.value)return 0;const V=getComputedStyle(r.value).transform;return V&&V!=="none"?new DOMMatrixReadOnly(V).f:0}function w(){if(!l.value||!r.value)return;r.value.style.overflowY="",y()>46?(c=!0,l.value.classList.add("spin"),l.value.style.transform="translate(-50%, 14px)",r.value.style.transform="translateY(52px)",a("refresh"),setTimeout(()=>{if(!l.value||!r.value)return;l.value.classList.remove("spin"),l.value.style.transform="translate(-50%, -46px)",r.value.style.transform="",c=!1,r.value.querySelectorAll(".aero-ptr__item").forEach((D,j)=>{D.animate([{opacity:.3},{opacity:1}],{duration:400,delay:j*60,easing:"ease-out"})})},t.duration)):(r.value&&(r.value.style.transform=""),l.value&&(l.value.style.transform="translate(-50%, -46px)"))}const{startDrag:T}=yt($,{onEnd:w}),L={rocket:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z|m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z|M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0|M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5","git-branch":"M6 3v12|M18 9a9 9 0 0 1-9 9|M15 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6|M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6","trending-up":"M16 7h6v6|m22 7-8.5 8.5-5-5L2 17","rotate-cw":"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8|M21 3v5h-5","rotate-ccw":"M3 12a9 9 0 1 0 3-6.7|M3 4v5h5","key-round":"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z|M17.5 7.5a1 1 0 1 0 0-.01",check:"M20 6 9 12l-5 5"},F=V=>V?(L[V]??L.rocket).split("|"):L["rotate-cw"].split("|");return De(()=>{var V,E,D,j,S;(V=r.value)==null||V.addEventListener("pointerdown",b,{passive:!1}),(E=r.value)==null||E.addEventListener("touchstart",_,{passive:!0}),(D=r.value)==null||D.addEventListener("touchmove",k,{passive:!1}),(j=r.value)==null||j.addEventListener("touchend",x,{passive:!0}),(S=r.value)==null||S.addEventListener("touchcancel",x,{passive:!0})}),Le(()=>{const V=r.value;V&&(V.removeEventListener("pointerdown",b),V.removeEventListener("touchstart",_),V.removeEventListener("touchmove",k),V.removeEventListener("touchend",x),V.removeEventListener("touchcancel",x))}),(V,E)=>(d(),p("div",{ref_key:"zone",ref:s,class:"aero-ptr",style:me({width:e.width?typeof e.width=="number"?e.width+"px":e.width:void 0,height:e.height?typeof e.height=="number"?e.height+"px":e.height:void 0})},[u("div",{ref_key:"ind",ref:l,class:"aero-ptr__ind"},[(d(),p("svg",Um,[(d(!0),p(q,null,X(F(),(D,j)=>(d(),p("path",{key:j,d:D},null,8,Km))),128))]))],512),u("div",{ref_key:"list",ref:r,class:"aero-ptr__list",onScrollPassive:m},[(d(!0),p(q,null,X(e.items,(D,j)=>(d(),p("div",{key:j,class:"aero-ptr__item"},[u("span",Wm,[(d(),p("svg",Ym,[(d(!0),p(q,null,X(F(D.icon),(S,P)=>(d(),p("path",{key:P,d:S},null,8,Xm))),128))]))]),u("div",null,[u("b",null,v(D.title),1),D.desc?(d(),p("small",Zm,v(D.desc),1)):W("",!0)]),D.time?(d(),p("span",Qm,v(D.time),1)):W("",!0)]))),128))],544)],4))}}),ef=Z(Jm,[["__scopeId","data-v-9c5bf471"]]),wi=le(ef,"AeroPullToRefresh"),tf=["aria-label"],of={class:"aero-slidego__txt"},af=z({__name:"slide-go",props:{text:{default:void 0},doneText:{default:void 0},width:{},autoReset:{type:Boolean,default:!1}},emits:["done"],setup(e,{emit:o}){const{slideGo:t}=Y(),a=e,s=G(()=>a.text??t.value.text),l=G(()=>a.doneText??t.value.done),r=o,n=C(),c=C(),f=C(),m=C(!1),h=C(!1);let g=0;const _=()=>{var L,F;return(((L=n.value)==null?void 0:L.clientWidth)??0)-(((F=c.value)==null?void 0:F.offsetWidth)??0)-8};function k(L){const F=Math.max(0,Math.min(_(),L));return c.value&&(c.value.style.transform=`translateX(${F}px)`),f.value&&(f.value.style.transform=`scaleX(${F/_()})`),F/_()}let x=!1,b;const{startDrag:$}=yt(L=>{k(L.clientX-g)>=.96&&!x&&(x=!0,w())},{onEnd:()=>{const L=c.value?getComputedStyle(c.value).transform:"";(L&&L!=="none"?new DOMMatrixReadOnly(L).m41:0)<_()*.96&&(c.value&&(c.value.style.transition="transform .4s cubic-bezier(.3,1.4,.4,1)"),k(0),setTimeout(()=>{var V;return(V=c.value)==null?void 0:V.style.removeProperty("transition")},420))}});function y(L){m.value||(h.value=!0,x=!1,clearTimeout(b),b=void 0,g=L.clientX,$(L.currentTarget,L))}function w(){h.value=!1,m.value=!0,r("done"),a.autoReset?b=setTimeout(()=>{m.value=!1,x=!1,c.value&&(c.value.style.transition="transform .45s cubic-bezier(.3,1.4,.4,1)"),k(0),setTimeout(()=>{var L;return(L=c.value)==null?void 0:L.style.removeProperty("transition")},480),b=void 0},600):setTimeout(()=>{m.value=!1,c.value&&(c.value.style.transition="transform .45s cubic-bezier(.3,1.4,.4,1)"),k(0),setTimeout(()=>{var L;return(L=c.value)==null?void 0:L.style.removeProperty("transition")},480)},1400)}function T(L){(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),w())}return De(()=>window.addEventListener("keydown",T)),Le(()=>{window.removeEventListener("keydown",T),clearTimeout(b),b=void 0}),(L,F)=>(d(),p("div",{ref_key:"root",ref:n,class:Q(["aero-slidego",{dragging:h.value,done:m.value,check:m.value}]),style:me(e.width?{width:typeof e.width=="number"?e.width+"px":e.width}:void 0),role:"slider",tabindex:"0","aria-label":i(t).aria,"aria-valuemin":"0","aria-valuemax":"100"},[u("div",{ref_key:"fill",ref:f,class:"aero-slidego__fill"},null,512),u("div",of,[F[0]||(F[0]=u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("path",{d:"m6 17 5-5-5-5"}),u("path",{d:"m13 17 5-5-5-5"})],-1)),R(" "+v(m.value?l.value:s.value),1)]),u("div",{ref_key:"knob",ref:c,class:"aero-slidego__knob",onPointerdown:y},[...F[1]||(F[1]=[Ao('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-2f93fec7><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" data-v-2f93fec7></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" data-v-2f93fec7></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" data-v-2f93fec7></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" data-v-2f93fec7></path></svg>',1)])],544)],14,tf))}}),sf=Z(af,[["__scopeId","data-v-2f93fec7"]]),Ai=le(sf,"AeroSlideGo"),lf=["data-key"],rf={class:"aero-sort__handle"},nf={class:"aero-sort__name"},cf={key:0,class:"aero-sort__meta"},df=z({__name:"sort-list",props:{items:{},width:{}},emits:["sorted"],setup(e,{expose:o,emit:t}){const{sortList:a}=Y(),s=e,l=t,r=C(),n=C(s.items.slice());let c=null,f=null,m=0,h=0,g=0;function _(y){if(!r.value||!c){y();return}const w=[...r.value.children].filter(L=>L!==c&&L!==f),T=w.map(L=>L.getBoundingClientRect().top);y(),w.forEach((L,F)=>{const V=T[F]-L.getBoundingClientRect().top;Math.abs(V)>.5&&(L.style.transition="none",L.style.transform=`translateY(${V}px)`,requestAnimationFrame(()=>{L.style.transition="transform .3s cubic-bezier(.3,1.3,.4,1)",L.style.transform=""}),setTimeout(()=>{L.style.removeProperty("transition"),L.style.removeProperty("transform")},340))})}function k(y){if(!r.value)return;const w=y.target.closest(".aero-sort__item");if(!w||!y.target.closest(".aero-sort__handle"))return;c=w;const T=w.getBoundingClientRect();m=y.clientX-T.left,h=y.clientY-T.top,g=y.clientX,f=document.createElement("div"),f.className="aero-sort__ph",f.style.height=T.height+"px",r.value.insertBefore(f,w),w.classList.add("dragging"),w.style.width=T.width+"px",w.style.position="fixed",w.style.left=T.left+"px",w.style.top=T.top+"px",w.style.zIndex=getComputedStyle(document.documentElement).getPropertyValue("--ui-z-drag").trim()||"900",w.style.margin="0",w.style.transform="rotate(2deg) scale(1.04)",document.body.appendChild(w),x(r.value,y)}const{startDrag:x}=yt(b,{onEnd:$});function b(y){if(!c||!r.value)return;const w=Math.max(-10,Math.min(10,(y.clientX-g)*.08));c.style.left=y.clientX-m+w+"px",c.style.top=y.clientY-h+"px";const T=[...r.value.querySelectorAll(".aero-sort__item")];let L=null;for(const F of T){const V=F.getBoundingClientRect();if(y.clientY<V.top+V.height/2){L=F;break}}_(()=>{!f||!r.value||(L&&L!==c?L!==f.nextSibling&&r.value.insertBefore(f,L):r.value.lastElementChild!==f&&r.value.appendChild(f))})}function $(){if(!c||!r.value)return;const y=c;c=null;const w=y.getBoundingClientRect();f&&(f.replaceWith(y),f=null),y.classList.remove("dragging"),["width","position","left","top","zIndex","margin","transform"].forEach(E=>y.style.removeProperty(E));const T=y.getBoundingClientRect(),L=w.left-T.left,F=w.top-T.top;(Math.abs(L)>.5||Math.abs(F)>.5)&&(y.style.transition="none",y.style.transform=`translate(${L}px, ${F}px)`,requestAnimationFrame(()=>{y.style.transition="transform .34s cubic-bezier(.3,1.3,.4,1)",y.style.transform="",setTimeout(()=>{y.style.removeProperty("transition"),y.style.removeProperty("transform")},380)}));const V=[...r.value.querySelectorAll(".aero-sort__item")].map(E=>E.dataset.key??"");n.value=V.map(E=>n.value.find(D=>(D.key??D.name)===E)).filter(Boolean),l("sorted",n.value.slice())}return o({order:n}),be(()=>s.items.map(y=>y.name+"|"+(y.meta??"")).join("|"),()=>{if(c)return;const y=n.value.map(L=>L.key??L.name),w=s.items.map(L=>L.key??L.name);if(!(y.length===w.length&&y.every(L=>w.includes(L))&&w.every(L=>y.includes(L)))){n.value=s.items.slice();return}n.value=y.map(L=>s.items.find(F=>(F.key??F.name)===L))}),(y,w)=>(d(),p("div",{ref_key:"list",ref:r,class:"aero-sort",style:me(e.width?{width:typeof e.width=="number"?e.width+"px":e.width}:void 0),onPointerdown:k},[(d(!0),p(q,null,X(n.value,T=>(d(),p("div",{key:T.key??T.name,class:"aero-sort__item","data-key":T.key??T.name},[u("span",rf,[w[0]||(w[0]=Ao('<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true" data-v-b7795dab><circle cx="9" cy="5" r="1.6" data-v-b7795dab></circle><circle cx="9" cy="12" r="1.6" data-v-b7795dab></circle><circle cx="9" cy="19" r="1.6" data-v-b7795dab></circle><circle cx="15" cy="5" r="1.6" data-v-b7795dab></circle><circle cx="15" cy="12" r="1.6" data-v-b7795dab></circle><circle cx="15" cy="19" r="1.6" data-v-b7795dab></circle></svg>',1)),u("em",null,v(i(a).handle),1)]),u("span",nf,v(T.name),1),T.meta?(d(),p("span",cf,v(T.meta),1)):W("",!0)],8,lf))),128))],36))}}),uf=Z(df,[["__scopeId","data-v-b7795dab"]]),$i=le(uf,"AeroSortList"),pf=["data-pos","data-name"],mf={key:0,class:"aero-sdeck__stamp aero-sdeck__stamp--go"},ff={key:1,class:"aero-sdeck__stamp aero-sdeck__stamp--back"},hf={key:0,class:"aero-sdeck__top"},vf={class:"aero-sdeck__name"},gf={class:"aero-sdeck__cta"},bf=z({__name:"swipe-deck",props:{cards:{},loop:{type:Boolean,default:!0},bare:{type:Boolean,default:!1}},emits:["deploy","rollback","emptied"],setup(e,{emit:o}){const{swipeDeck:t}=Y(),a=e,s=o,l=C(),r=C([]),n=C({});function c(){r.value.forEach((L,F)=>{n.value[L.name]=F})}let f=null,m=0,h=0,g=[];function _(L){return L.name}be(()=>a.cards.map(L=>L.name).join(","),L=>{const F=L?a.cards.slice():[],V=F.length!==g.length||F.some((j,S)=>j.name!==g[S]);if(g=F.map(j=>j.name),!V)return;const E=r.value.filter(j=>F.some(S=>S.name===j.name)),D=F.filter(j=>!E.some(S=>S.name===j.name));r.value=[...E,...D],c(),D.length&&requestAnimationFrame(()=>{D.forEach(j=>{var P;const S=(P=l.value)==null?void 0:P.querySelector(`.aero-sdeck__card[data-name="${j.name}"]`);S&&(S.style.transition="none",S.style.transform="translateY(42px) scale(0.92)",S.style.opacity="0",requestAnimationFrame(()=>{S.style.transition="transform .45s var(--ui-spring), opacity .4s",S.style.transform="",S.style.opacity="",setTimeout(()=>S.style.removeProperty("transition"),460)}))})})},{immediate:!0}),be(()=>JSON.stringify(a.cards),()=>{const L=r.value.map(E=>E.name),F=a.cards.map(E=>E.name);L.length===F.length&&L.every(E=>F.includes(E))&&(r.value=L.map(E=>a.cards.find(D=>D.name===E)))});function k(L){const F=L.target.closest(".aero-sdeck__card");F&&F.dataset.pos==="0"&&(f=F,m=L.clientX,h=L.clientY,F.classList.add("drag"),x(F,L))}const{startDrag:x}=yt(b,{onEnd:y});function b(L){if(!f)return;const F=L.clientX-m,V=(L.clientY-h)*.3;f.style.transform=`translate(${F}px, ${V}px) rotate(${F/16}deg)`,f.style.setProperty("--go",Math.min(1,Math.max(0,F/90)).toString()),f.style.setProperty("--back",Math.min(1,Math.max(0,-F/90)).toString())}function $(L){const F=getComputedStyle(L).transform;return F&&F!=="none"?new DOMMatrixReadOnly(F).m41:0}function y(){if(!f)return;const L=f;f=null,L.classList.remove("drag");const F=$(L);F>110?w(L,1):F<-110?w(L,-1):(L.style.transition="transform .4s cubic-bezier(.2,1.4,.3,1)",L.style.transform="",L.style.setProperty("--go","0"),L.style.setProperty("--back","0"),setTimeout(()=>L.style.removeProperty("transition"),420))}function w(L,F){const V=L.dataset.name??"",E=r.value.find(D=>D.name===V);L.style.transition="transform .5s cubic-bezier(.2,.7,.3,1), opacity .45s",L.style.transform=`translate(${F*560}px, -60px) rotate(${F*26}deg)`,L.style.opacity="0",F>0?s("deploy",E??{name:V}):s("rollback",E??{name:V}),setTimeout(()=>{a.loop?r.value.push(r.value.shift()):(r.value.splice(r.value.findIndex(D=>D.name===V),1),r.value.length===0&&s("emptied")),c(),T()},480)}function T(){requestAnimationFrame(()=>{var L;(L=l.value)==null||L.querySelectorAll(".aero-sdeck__card").forEach(F=>{F.style.removeProperty("transition"),F.style.removeProperty("transform"),F.style.removeProperty("opacity"),F.style.removeProperty("--go"),F.style.removeProperty("--back")})})}return De(()=>{r.value=a.cards.slice(),c()}),(L,F)=>(d(),p("div",{ref_key:"root",ref:l,class:"aero-sdeck",onPointerdown:k},[(d(!0),p(q,null,X(r.value,V=>(d(),p("div",{key:_(V),class:Q(["aero-sdeck__card",{top:n.value[V.name]===0,"is-bare":e.bare}]),"data-pos":n.value[V.name],"data-name":V.name,style:me({zIndex:10-n.value[V.name]})},[e.bare?W("",!0):(d(),p("span",mf,v(i(t).go),1)),e.bare?W("",!0):(d(),p("span",ff,v(i(t).back),1)),de(L.$slots,"default",{card:V},()=>{var E;return[e.bare?W("",!0):(d(),p("div",hf,[u("span",{class:Q(["aero-sdeck__avatar",`aero-sdeck__avatar--t${V.avatarTone??2}`])},v(V.avatar??((E=V.name[0])==null?void 0:E.toUpperCase())),3),u("div",null,[u("div",vf,v(V.name),1),u("span",{class:Q(["aero-sdeck__badge",`aero-sdeck__badge--${V.status??"ok"}`])},[F[0]||(F[0]=u("i",null,null,-1)),R(v(V.statusText??i(t).ok),1)],2)])])),e.bare?W("",!0):(d(),p(q,{key:1},[(d(!0),p(q,null,X(V.rows,(D,j)=>(d(),p("div",{key:j,class:"aero-sdeck__mono"},[u("span",null,v(D[0]),1),u("span",null,v(D[1]),1)]))),128)),u("div",gf,[u("span",null,v(V.foot),1),F[1]||(F[1]=u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true"},[u("path",{d:"M3 12h.01M8 12h.01M13 12h.01M18 12h.01",transform:"rotate(90 12 12)"})],-1))])],64))]},!0)],14,pf))),128))],544))}}),yf=Z(bf,[["__scopeId","data-v-82cf8d56"]]),Si=le(yf,"AeroSwipeDeck"),_f=["src","alt"],xf=z({__name:"avatar",props:ko({tone:{default:2},size:{default:44},src:{},alt:{},shape:{default:"circle"},fit:{default:"cover"}},{failed:{type:Boolean,default:!1},failedModifiers:{}}),emits:["update:failed"],setup(e){const o=e,t=G(()=>{const l=typeof o.size=="number"?`${o.size}px`:o.size,r=`calc(${l} / 3)`,n=o.shape==="square"?"calc(var(--ui-radius))":"50%";return{width:l,height:l,fontSize:r,borderRadius:n,background:`var(--ui-av-${o.tone}-bg)`,color:`var(--ui-av-${o.tone}-tx)`}}),a=G(()=>({objectFit:o.fit,borderRadius:o.shape==="square"?"calc(var(--ui-radius))":"50%"})),s=ks(e,"failed");return(l,r)=>(d(),p("span",{class:"aero-avatar",style:me(t.value)},[e.src&&!s.value?(d(),p("img",{key:0,class:"aero-avatar__img",src:e.src,alt:e.alt??"",style:me(a.value),onError:r[0]||(r[0]=n=>s.value=!0)},null,44,_f)):de(l.$slots,"default",{},void 0,!0,1)],4))}}),kf=Z(xf,[["__scopeId","data-v-3d2bc90d"]]),to=le(kf,"AeroAvatar"),wf={class:"aero-avatar-group"},Af=z({__name:"avatar-group",props:{total:{},max:{default:5},size:{default:44}},setup(e){const o=e,t=G(()=>Math.max(0,o.total-o.max)),a=G(()=>{const s=typeof o.size=="number"?`${o.size}px`:o.size;return{width:s,height:s,fontSize:`calc(${s} / 3)`}});return(s,l)=>(d(),p("span",wf,[de(s.$slots,"default",{},void 0,!0),t.value>0?(d(),p("span",{key:0,class:"aero-avatar-group__more",style:me(a.value)}," +"+v(t.value),5)):W("",!0)]))}}),$f=Z(Af,[["__scopeId","data-v-889f9483"]]),Ti=le($f,"AeroAvatarGroup"),Sf=["aria-label"],Tf={width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Cf=["d"],Bf=4,Lf=z({__name:"back-top",props:{threshold:{default:240},right:{default:26},bottom:{default:26},target:{}},setup(e){const{backTop:o}=Y(),t=e,a=C(!1);function s(){if(typeof t.target=="function")return t.target();if(typeof t.target=="string")return document.querySelector(t.target)??void 0;const g=document.documentElement;if(g.scrollHeight>g.clientHeight+1||document.body.scrollHeight>document.body.clientHeight+1)return;const k=Array.from(document.querySelectorAll('main, .pg-main, #app [class*="scroll"], .aero-scrollbar__bar'));for(const x of k){const b=getComputedStyle(x);if((b.overflowY==="auto"||b.overflowY==="scroll")&&x.scrollHeight>x.clientHeight+1)return x}}const r=El(()=>s(),g=>{a.value=g.scrollTop>t.threshold});function n(){(s()??window).scrollTo({top:0,behavior:"smooth"})}function c(){r.sample(),requestAnimationFrame(()=>r.start())}let f=0,m=0;function h(){f&&(++m>=Bf&&(m=0,r.sample()),f=requestAnimationFrame(h))}return De(()=>{r.start(),window.addEventListener("resize",c,{passive:!0}),requestAnimationFrame(r.sample),f=requestAnimationFrame(h)}),Le(()=>{f=0,r.stop(),window.removeEventListener("resize",c)}),(g,_)=>(d(),fe(Gt,{to:"body"},[A(He,{name:"aero-backtop"},{default:I(()=>[a.value?(d(),p("button",{key:0,class:"aero-backtop",type:"button",style:me({right:e.right+"px",bottom:e.bottom+"px"}),"aria-label":i(o).aria,onClick:n},[(d(),p("svg",Tf,[(d(!0),p(q,null,X(i(xe)["arrow-up"],(k,x)=>(d(),p("path",{key:x,d:k},null,8,Cf))),128))]))],12,Sf)):W("",!0)]),_:1})]))}}),Mf=Z(Lf,[["__scopeId","data-v-da40289e"]]),Ci=le(Mf,"AeroBackTop"),Pf={key:0,class:"aero-badge__dot"},If=z({__name:"badge",props:{type:{default:"soft"},dot:{type:Boolean,default:!1}},setup(e){const o=e;return(t,a)=>(d(),p("span",{class:Q(["aero-badge",`aero-badge--${o.type}`])},[o.dot?(d(),p("i",Pf)):W("",!0),de(t.$slots,"default",{},void 0,!0)],2))}}),Df=Z(If,[["__scopeId","data-v-e9ecff0c"]]),Ue=le(Df,"AeroBadge"),Vf=["aria-label"],zf=["href"],Ef=["aria-current"],Rf={key:2,class:"aero-crumb__sep",width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Ff=["d"],Of=z({__name:"breadcrumb",props:{items:{}},setup(e){const{breadcrumb:o}=Y();return(t,a)=>(d(),p("nav",{class:"aero-crumb","aria-label":i(o).navAria},[(d(!0),p(q,null,X(e.items,(s,l)=>(d(),p(q,{key:l},[s.href&&l<e.items.length-1?(d(),p("a",{key:0,class:"aero-crumb__link",href:s.href},v(s.label),9,zf)):(d(),p("span",{key:1,class:"aero-crumb__cur","aria-current":l===e.items.length-1?"page":void 0},v(s.label),9,Ef)),l<e.items.length-1?(d(),p("svg",Rf,[(d(!0),p(q,null,X(i(xe)["chevron-right"],(r,n)=>(d(),p("path",{key:n,d:r},null,8,Ff))),128))])):W("",!0)],64))),128))],8,Vf))}}),Hf=Z(Of,[["__scopeId","data-v-c9bfed70"]]),Bi=le(Hf,"AeroBreadcrumb"),qf=["type","disabled"],Nf={key:0,class:"aero-btn__icon"},jf={key:1,class:"aero-btn__label"},Gf=z({__name:"button",props:{type:{default:"primary"},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},nativeType:{default:"button"}},emits:["click","focus","blur"],setup(e,{emit:o}){const t=e,a=o,{attach:s}=Up();function l(c){t.disabled||t.loading||(t.ripple&&s(c),a("click",c))}function r(c){t.disabled||a("focus",c)}function n(c){t.disabled||a("blur",c)}return(c,f)=>(d(),p("button",{class:Q(["aero-btn",[`aero-btn--${t.type}`,`aero-btn--${t.size}`,{"is-block":t.block,"is-icon-only":t.iconOnly,"is-disabled":t.disabled,"is-loading":t.loading}]]),type:t.nativeType,disabled:t.disabled||t.loading,onClick:l,onFocus:r,onBlur:n},[c.$slots.icon?(d(),p("span",Nf,[de(c.$slots,"icon",{},void 0,!0)])):W("",!0),t.iconOnly?W("",!0):(d(),p("span",jf,[de(c.$slots,"default",{},void 0,!0)]))],42,qf))}}),ba=Z(Gf,[["__scopeId","data-v-a099a59c"]]),pe=le(ba,"AeroButton"),Uf=z({__name:"button-group",props:{vertical:{type:Boolean}},setup(e){return(o,t)=>(d(),p("div",{class:Q(["aero-btn-group",{"is-vertical":o.$props.vertical}])},[de(o.$slots,"default",{},void 0,!0)],2))}}),Kf=Z(Uf,[["__scopeId","data-v-402b074c"]]),cl=le(Kf,"AeroButtonGroup"),Wf={key:0,class:"aero-card__divider"},Yf=z({__name:"card",props:{hoverable:{type:Boolean,default:!1},paddingless:{type:Boolean,default:!1},width:{},minHeight:{}},setup(e){function o(t){if(!(t===void 0||t===""))return typeof t=="number"?t+"px":t}return(t,a)=>(d(),p("div",{class:Q(["aero-card",{"is-hoverable":t.$props.hoverable,"is-paddingless":t.$props.paddingless}]),style:me({width:o(t.$props.width),minHeight:o(t.$props.minHeight)})},[de(t.$slots,"header",{},void 0,!0),t.$slots.header?(d(),p("div",Wf)):W("",!0),de(t.$slots,"default",{},void 0,!0),de(t.$slots,"footer",{},void 0,!0)],6))}}),Xf=Z(Yf,[["__scopeId","data-v-f2f16d3d"]]),Fo=le(Xf,"AeroCard"),Zf={class:"aero-carousel"},Qf={class:"aero-carousel__en"},Jf={key:0,class:"aero-carousel__zh"},eh={key:1,class:"aero-carousel__chip"},th={class:"aero-carousel__dots"},oh=["aria-label","onClick"],ah=z({__name:"carousel",props:{slides:{},interval:{default:4200}},emits:["change"],setup(e,{expose:o,emit:t}){const{carousel:a}=Y(),s=e,l=t,r=C(0),n=C(!1),c=C(0),f=C(0),m=C(),h=G(()=>s.slides.length),g=G(()=>{const E=`translateX(${-r.value*100}%)`;return n.value&&c.value?`${E} translateX(${c.value}px)`:E});function _(E){const D=r.value;r.value=(E%h.value+h.value)%h.value,D!==r.value&&l("change",D,r.value)}function k(){_(r.value+1)}function x(){_(r.value-1)}function b(E){_(E)}o({setActiveItem(E){_(E)},next:k,prev:x});let $=null,y=!0;function w(){$||!s.interval||!y||($=setInterval(k,s.interval))}function T(){$&&(clearInterval($),$=null)}let L=null;De(()=>{L=new IntersectionObserver(([E])=>{y=E.isIntersecting,y?w():T()}),m.value&&L.observe(m.value.parentElement),w()}),Le(()=>{T(),L==null||L.disconnect()});const{startDrag:F}=yt(E=>{c.value=E.clientX-f.value,!n.value&&Math.abs(c.value)>5&&(n.value=!0)},{onEnd:()=>{const E=c.value;n.value=!1,c.value=0,Math.abs(E)>40&&(E<0?k():x()),w()}});function V(E){f.value=E.clientX,c.value=0,T(),F(E.currentTarget,E)}return(E,D)=>(d(),p("div",Zf,[u("div",{class:"aero-carousel__vp",onPointerdown:V},[u("div",{ref_key:"trackRef",ref:m,class:Q(["aero-carousel__track",{"is-drag":n.value}]),style:me({transform:g.value})},[E.$slots.default?(d(!0),p(q,{key:0},X(e.slides,(j,S)=>(d(),p("div",{key:S,class:Q(["aero-carousel__slide is-plain",`is-${j.tone??"a"}`])},[de(E.$slots,"default",{slide:j,index:S},void 0,!0)],2))),128)):(d(!0),p(q,{key:1},X(e.slides,(j,S)=>(d(),p("div",{key:S,class:Q(["aero-carousel__slide",`is-${j.tone??"a"}`])},[D[0]||(D[0]=u("i",{class:"aero-carousel__ring"},null,-1)),u("b",Qf,v(j.en),1),j.zh?(d(),p("span",Jf,v(j.zh),1)):W("",!0),j.chip?(d(),p("i",eh,v(j.chip),1)):W("",!0)],2))),128))],6)],32),u("div",th,[(d(!0),p(q,null,X(e.slides,(j,S)=>(d(),p("button",{key:S,class:Q(["aero-carousel__dot",{"is-on":S===r.value}]),type:"button","aria-label":i(a).pageAria(S+1),onClick:P=>b(S)},null,10,oh))),128))])]))}}),sh=Z(ah,[["__scopeId","data-v-09818d12"]]),dl=le(sh,"AeroCarousel"),lh={class:"aero-cascader__chev",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},rh=["d"],nh={key:0,class:"aero-cascader__panels"},ih={key:0,class:"aero-cascader__crumb"},ch=["onClick"],dh={class:"aero-cascader__menu"},uh=["onClick"],ph={key:0,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},mh=["d"],fh={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},hh=["d"],vh=z({__name:"cascader",props:{modelValue:{},options:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{cascader:t}=Y(),a=e,s=G(()=>a.placeholder??t.value.placeholder),l=o,r=C(),n=C(!1);Kt(()=>r.value,()=>n.value=!1);const c=C([]),f=G(()=>{let x=a.options;for(const b of c.value){const $=x.find(y=>y.value===b);x=($==null?void 0:$.children)??[]}return x});function m(x){const b=[];let $=a.options;for(const y of x){const w=$.find(T=>T.value===y);if(!w)break;b.push(w.label),$=w.children??[]}return b}const h=G(()=>{var x;return(x=a.modelValue)!=null&&x.length?m(a.modelValue).join(" / "):""});function g(x,b){var $;if(c.value=[...c.value.slice(0,b),x.value],!(($=x.children)!=null&&$.length)){const y=[...c.value];l("update:modelValue",y),l("change",y,m(y)),n.value=!1,c.value=y.slice(0,-1)}}function _(){var x;a.disabled||(n.value=!n.value,n.value&&(c.value=((x=a.modelValue)==null?void 0:x.slice(0,-1))??[]))}const k=x=>x.label;return(x,b)=>(d(),p("div",{ref_key:"root",ref:r,class:Q(["aero-cascader",{"is-open":n.value,"is-disabled":e.disabled}])},[u("button",{class:"aero-cascader__btn",type:"button",onClick:_},[u("span",{class:Q({"is-ph":!h.value})},v(h.value||s.value),3),(d(),p("svg",lh,[(d(!0),p(q,null,X(i(xe)["chevron-down"],($,y)=>(d(),p("path",{key:y,d:$},null,8,rh))),128))]))]),A(He,{name:"aero-cascader"},{default:I(()=>[n.value?(d(),p("div",nh,[c.value.length?(d(),p("ul",ih,[u("li",null,[u("button",{type:"button",onClick:b[0]||(b[0]=$=>c.value=[])},v(i(t).all),1)]),(d(!0),p(q,null,X(c.value,($,y)=>(d(),p("li",{key:$},[b[1]||(b[1]=u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[u("path",{d:"m9 18 6-6-6-6"})],-1)),u("button",{type:"button",onClick:w=>c.value=c.value.slice(0,y+1)},v(m(c.value.slice(0,y+1)).pop()),9,ch)]))),128))])):W("",!0),u("ul",dh,[(d(!0),p(q,null,X(f.value,$=>{var y,w;return d(),p("li",{key:$.value,class:Q({"is-sel":((y=e.modelValue)==null?void 0:y[c.value.length])===$.value&&!$.children}),onClick:T=>g($,c.value.length)},[u("span",null,v(k($)),1),$.children?(d(),p("svg",ph,[(d(!0),p(q,null,X(i(xe)["chevron-right"],(T,L)=>(d(),p("path",{key:L,d:T},null,8,mh))),128))])):(w=e.modelValue)!=null&&w.includes($.value)?(d(),p("svg",fh,[(d(!0),p(q,null,X(i(xe).check,(T,L)=>(d(),p("path",{key:L,d:T},null,8,hh))),128))])):W("",!0)],10,uh)}),128))])])):W("",!0)]),_:1})],2))}}),gh=Z(vh,[["__scopeId","data-v-3236d395"]]),Li=le(gh,"AeroCascader"),bh=["checked","disabled"],yh={class:"aero-check__label"},_h=z({__name:"checkbox",props:ko({disabled:{type:Boolean,default:!1},value:{}},{modelValue:{type:[Boolean,Array],default:!1},modelModifiers:{}}),emits:ko(["change","focus","blur"],["update:modelValue"]),setup(e,{emit:o}){const t=e,a=ks(e,"modelValue"),s=o,l=yo("AeroCheckboxGroup",null),r=G(()=>!!l&&t.value!==void 0),n=G(()=>r.value?l.values.value.includes(t.value):!!a.value),c=G(()=>t.disabled||(l==null?void 0:l.disabled.value));function f(){c.value||(r.value?l.toggle(t.value):(a.value=!a.value,s("change",!!a.value)))}return(m,h)=>(d(),p("label",{class:Q(["aero-check",{"is-disabled":c.value}])},[u("input",{type:"checkbox",class:"aero-check__input",checked:n.value,disabled:c.value,onChange:f,onFocus:h[0]||(h[0]=g=>s("focus",g)),onBlur:h[1]||(h[1]=g=>s("blur",g))},null,40,bh),h[2]||(h[2]=u("span",{class:"aero-check__box"},[u("i",{class:"aero-check__mark"})],-1)),u("span",yh,[de(m.$slots,"default",{},void 0,!0)])],2))}}),xh=Z(_h,[["__scopeId","data-v-d9595ee2"]]),Zo=le(xh,"AeroCheckbox"),kh={class:"aero-check-group"},wh=z({__name:"checkbox-group",props:{modelValue:{},disabled:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:o}){const t=e,a=o,s=G(()=>t.modelValue);return xo("AeroCheckboxGroup",{values:s,disabled:G(()=>!!t.disabled),toggle(l){const r=[...t.modelValue],n=r.indexOf(l);n>=0?r.splice(n,1):r.push(l),a("update:modelValue",r),a("change",r)}}),(l,r)=>(d(),p("div",kh,[de(l.$slots,"default",{},void 0,!0)]))}}),Ah=Z(wh,[["__scopeId","data-v-197b5a47"]]),Mi=le(Ah,"AeroCheckboxGroup"),$h={class:"aero-chip__label"},Sh={width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},Th=["d"],Ch=z({__name:"chip",props:{closable:{type:Boolean},active:{type:Boolean}},emits:["close"],setup(e,{emit:o}){const t=o;return(a,s)=>(d(),p("span",{class:Q(["aero-chip",{"is-active":a.$props.active}])},[u("span",$h,[de(a.$slots,"default",{},void 0,!0)]),a.$props.closable?(d(),p("button",{key:0,class:"aero-chip__close",type:"button",onClick:s[0]||(s[0]=l=>t("close",l))},[(d(),p("svg",Sh,[(d(!0),p(q,null,X(i(xe).x,(l,r)=>(d(),p("path",{key:r,d:l},null,8,Th))),128))]))])):W("",!0)],2))}}),Bh=Z(Ch,[["__scopeId","data-v-d6839855"]]),Do=le(Bh,"AeroChip"),Lh=[{re:/^\/\/[^\n]*/,cls:"tk-c"},{re:/^#[^\n]*/,cls:"tk-c"},{re:/^\/\*[\s\S]*?\*\//,cls:"tk-c"},{re:/^"(?:[^"\\]|\\.)*"/,cls:"tk-s"},{re:/^'(?:[^'\\]|\\.)*'/,cls:"tk-s"},{re:/^`(?:[^`\\]|\\.)*`/,cls:"tk-s"},{re:/^\b(0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e\d+)?)\b/,cls:"tk-n"},{re:/^\b(const|let|var|function|return|if|else|for|while|import|from|export|default|class|extends|new|async|await|try|catch|throw|typeof|interface|type|enum|public|private|readonly|switch|case|break|continue|do|in|of|this|null|undefined|true|false)\b/,cls:"tk-k"},{re:/^\b(fn|pub|use|mod|struct|impl|match|Self)\b/,cls:"tk-k"},{re:/^[A-Za-z_$][\w$]*(?=\s*\()/,cls:"tk-f"},{re:/^[A-Z][\w$]*/,cls:"tk-k2"},{re:/^[A-Za-z_$][\w$]*/,cls:"tk-v"}];function Mh(e){let o=e,t="";for(;o.length;){const a=/^\s+/.exec(o);if(a){t+=a[0],o=o.slice(a[0].length);continue}let s=!1;for(const l of Lh){const r=l.re.exec(o);if(r&&r[0]){t+=`<span class="${l.cls}">${Vr(r[0])}</span>`,o=o.slice(r[0].length),s=!0;break}}if(!s){const l=/^[^\w\s"'`#]+/.exec(o),r=l?l[0]:o[0];t+=Vr(r),o=o.slice(r.length)}}return t}function Vr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Ph=["tabindex","aria-expanded"],Ih={class:"aero-cw__bar-left"},Dh={key:0,class:"aero-cw__title"},Vh={key:1,class:"aero-cw__lang"},zh={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Eh={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Rh={key:2,class:"aero-cw__copy-text"},Fh=["aria-expanded","aria-label"],Oh={class:"aero-cw__code-zone"},Hh={class:"aero-cw__code-in"},qh={class:"aero-cw__code"},Nh={key:0,class:"aero-cw__ln"},jh=["innerHTML"],Gh=z({__name:"code-block",props:{code:{},lang:{default:""},title:{default:""},highlight:{type:Boolean,default:!0},lineNumbers:{type:Boolean,default:!0},copyable:{type:Boolean,default:!0},flush:{type:Boolean,default:!1},collapsible:{type:Boolean,default:!1},open:{type:Boolean,default:void 0}},emits:["update:open"],setup(e,{emit:o}){const t=e,a=o,s=C(t.open??!0);t.open!==void 0&&be(()=>t.open,k=>{s.value=k});function l(){s.value=!s.value,a("update:open",s.value)}const{code:r}=Y(),n=C(!1);let c;be(n,k=>{k&&(clearTimeout(c),c=setTimeout(()=>{n.value=!1},1800))});const f=G(()=>t.code.replace(/\n$/,"").split(`
`));function m(k){return k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const h=G(()=>f.value.map(k=>t.highlight?Mh(k):m(k)));async function g(){if(await _(t.code)){n.value=!0;return}console.warn("[aero-code-block] copy failed: clipboard API unavailable and execCommand fallback did not succeed")}async function _(k){try{return await navigator.clipboard.writeText(k),!0}catch{}const x=document.createElement("textarea");x.value=k,x.setAttribute("readonly",""),x.style.position="fixed",x.style.top="-9999px",x.style.opacity="0",document.body.appendChild(x),x.select(),x.setSelectionRange(0,x.value.length);let b=!1;try{b=document.execCommand("copy")}catch{b=!1}finally{document.body.removeChild(x)}return b}return(k,x)=>(d(),p("div",{class:Q(["aero-cw",{"is-flush":e.flush,"is-collapsed":e.collapsible&&!s.value}])},[u("div",{class:Q(["aero-cw__bar",{"is-clickable":e.collapsible}]),role:"button",tabindex:e.collapsible?0:void 0,"aria-expanded":e.collapsible?s.value:void 0,onClick:x[1]||(x[1]=b=>e.collapsible?l():void 0),onKeydown:[x[2]||(x[2]=Nt(b=>e.collapsible?l():void 0,["enter"])),x[3]||(x[3]=Nt(b=>e.collapsible?(b.preventDefault(),l()):void 0,["space"]))]},[u("div",Ih,[e.title?(d(),p("span",Dh,v(e.title),1)):W("",!0),e.lang?(d(),p("span",Vh,v(e.lang),1)):W("",!0)]),u("div",{class:"aero-cw__bar-right",onClick:x[0]||(x[0]=Pe(()=>{},["stop"]))},[e.copyable?(d(),p("button",{key:0,class:Q(["aero-cw__copy",{"is-copied":n.value}]),type:"button",onClick:Pe(g,["stop"])},[n.value?(d(),p("svg",zh,[...x[4]||(x[4]=[u("path",{d:"M20 6 9 12l-5 5"},null,-1)])])):(d(),p("svg",Eh,[...x[5]||(x[5]=[u("rect",{x:"8",y:"8",width:"14",height:"14",rx:"2"},null,-1),u("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},null,-1)])])),n.value?(d(),p("span",Rh,v(i(r).copied),1)):W("",!0)],2)):W("",!0),e.collapsible?(d(),p("button",{key:1,class:"aero-cw__fold",type:"button","aria-expanded":s.value,"aria-label":s.value?i(r).collapse:i(r).expand,onClick:l},[...x[6]||(x[6]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"m6 9 6 6 6-6"})],-1)])],8,Fh)):W("",!0)])],42,Ph),u("div",Oh,[u("div",Hh,[u("pre",qh,[u("code",null,[(d(!0),p(q,null,X(h.value,(b,$)=>(d(),p("span",{key:$,class:"aero-cw__line"},[e.lineNumbers?(d(),p("span",Nh,v($+1),1)):W("",!0),u("span",{class:"aero-cw__lc",innerHTML:b},null,8,jh)]))),128))])])])])],2))}}),Uh=Z(Gh,[["__scopeId","data-v-700708d2"]]),Jt=le(Uh,"AeroCodeBlock"),Kh={class:"aero-acc-group"},Wh=["onClick"],Yh={class:"aero-acc__title"},Xh={class:"aero-acc__chev"},Zh={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Qh=["d"],Jh={class:"aero-acc__body"},ev={class:"aero-acc__inner"},tv={class:"aero-acc__pad"},ov=z({__name:"collapse",props:{items:{},modelValue:{},accordion:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const t=e,a=o;function s(l){t.accordion&&a("update:modelValue",t.modelValue===l?void 0:l)}return(l,r)=>(d(),p("div",Kh,[(d(!0),p(q,null,X(e.items,n=>(d(),p("div",{key:n.key,class:Q(["aero-acc",{"is-open":e.modelValue===n.key}])},[u("button",{class:"aero-acc__head",type:"button",onClick:c=>s(n.key)},[u("span",Yh,v(n.title),1),u("span",Xh,[(d(),p("svg",Zh,[(d(!0),p(q,null,X(i(xe)["chevron-down"],(c,f)=>(d(),p("path",{key:f,d:c},null,8,Qh))),128))]))])],8,Wh),u("div",Jh,[u("div",ev,[u("div",tv,[de(l.$slots,"default",{item:n},()=>[R(v(n.content),1)],!0)])])])],2))),128))]))}}),av=Z(ov,[["__scopeId","data-v-3c8c2bd7"]]),Pi=le(av,"AeroCollapse"),sv={class:"aero-color__hex"},lv={key:0,class:"aero-color__panel"},rv={class:"aero-color__svrow"},nv={class:"aero-color__meta"},iv={class:"aero-color__rgb"},cv={key:0,class:"aero-color__presets"},dv=["aria-label","onClick"],uv=z({__name:"color-picker",props:{modelValue:{default:"#0EBFFF"},presets:{default:()=>["#0EBFFF","#7C6CFF","#10C999","#FF8A3D","#FF5C8A","#F59F00","#FA5252","#12B886"]}},emits:["update:modelValue","change"],setup(e,{emit:o}){const t=e,a=o;function s(O){const N=/^#?([0-9a-f]{6})$/i.exec(O.trim());if(!N)return null;const J=parseInt(N[1],16);return{r:J>>16&255,g:J>>8&255,b:J&255}}function l(O,N,J){return"#"+[O,N,J].map(ue=>Math.round(ue).toString(16).padStart(2,"0")).join("").toUpperCase()}function r(O,N,J){O/=255,N/=255,J/=255;const ue=Math.max(O,N,J),Ae=Math.min(O,N,J),ke=ue-Ae;let we=0;return ke&&(ue===O?we=((N-J)/ke+(N<J?6:0))/6:ue===N?we=((J-O)/ke+2)/6:we=((O-N)/ke+4)/6),{h:we*360,s:ue?ke/ue:0,v:ue}}function n(O,N,J){const ue=Ae=>{const ke=(Ae+O/60)%6;return J-J*N*Math.max(0,Math.min(ke,4-ke,1))};return{r:ue(5)*255,g:ue(3)*255,b:ue(1)*255}}const c=wo({h:200,s:.95,v:1}),f=C(t.modelValue);let m=!1;be(()=>t.modelValue,O=>{if(m)return;const N=s(O),J=n(c.h,c.s,c.v);N&&l(N.r,N.g,N.b)!==l(J.r,J.g,J.b)&&Object.assign(c,r(N.r,N.g,N.b))},{immediate:!0});const h=G(()=>n(c.h,c.s,c.v)),g=G(()=>l(h.value.r,h.value.g,h.value.b)),_=G(()=>`${Math.round(h.value.r)}, ${Math.round(h.value.g)}, ${Math.round(h.value.b)}`);be(g,O=>{(!document.activeElement||document.activeElement.tagName!=="INPUT")&&(f.value=O)});const k=G(()=>{const O=n(c.h,1,1);return l(O.r,O.g,O.b)});function x(){f.value=g.value,g.value!==t.modelValue&&(a("update:modelValue",g.value),a("change",g.value))}const b=C(),$=C(!1);Kt(()=>b.value,()=>$.value=!1);const y=C();function w(O){if(!y.value)return;const N=y.value.getBoundingClientRect();c.s=Math.min(1,Math.max(0,(O.clientX-N.left)/N.width)),c.v=1-Math.min(1,Math.max(0,(O.clientY-N.top)/N.height))}function T(){m&&(m=!1,x())}const{startDrag:L}=yt(w,{onEnd:T});function F(O){m=!0,L(y.value,O),w(O)}const V=C();function E(O){if(!V.value)return;const N=V.value.getBoundingClientRect();c.h=Math.min(360,Math.max(0,(O.clientY-N.top)/N.height*360))}function D(){m&&(m=!1,x())}const{startDrag:j}=yt(E,{onEnd:D});function S(O){m=!0,j(V.value,O),E(O)}function P(O){O.key==="Enter"&&U()}function K(){requestAnimationFrame(U)}function U(){const O=s(f.value);O&&(Object.assign(c,r(O.r,O.g,O.b)),x()),f.value=g.value}function oe(O){f.value=O;const N=s(O);N&&Object.assign(c,r(N.r,N.g,N.b)),x()}return(O,N)=>(d(),p("div",{ref_key:"root",ref:b,class:"aero-color"},[u("button",{class:"aero-color__trigger",type:"button",onClick:N[0]||(N[0]=J=>$.value=!$.value)},[u("span",{class:"aero-color__chip",style:me({background:g.value})},null,4),u("span",sv,v(g.value),1),N[2]||(N[2]=u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"m6 9 6 6 6-6"})],-1))]),A(He,{name:"aero-color"},{default:I(()=>[$.value?(d(),p("div",lv,[u("div",rv,[u("div",{ref_key:"svEl",ref:y,class:"aero-color__sv",style:me({backgroundColor:k.value}),onPointerdown:F},[u("span",{class:"aero-color__dot",style:me({left:`${c.s*100}%`,top:`${(1-c.v)*100}%`})},null,4)],36),u("div",{ref_key:"hueEl",ref:V,class:"aero-color__hue",onPointerdown:S},[u("span",{class:"aero-color__hue-dot",style:me({top:`${c.h/360*100}%`})},null,4)],544)]),u("div",nv,[Bl(u("input",{"onUpdate:modelValue":N[1]||(N[1]=J=>f.value=J),class:"aero-color__input",spellcheck:"false",maxlength:"7",onKeydown:P,onBlur:U,onPaste:K},null,544),[[Vl,f.value]]),u("span",iv,"RGB "+v(_.value),1)]),e.presets?(d(),p("div",cv,[(d(!0),p(q,null,X(e.presets,J=>{var ue;return d(),p("button",{key:J,type:"button",class:Q(["aero-color__preset",{"is-on":J.toLowerCase()===((ue=e.modelValue)==null?void 0:ue.toLowerCase())}]),style:me({"--c":J}),"aria-label":J,onClick:Ae=>oe(J)},null,14,dv)}),128))])):W("",!0)])):W("",!0)]),_:1})],512))}}),pv=Z(uv,[["__scopeId","data-v-a51a86a0"]]),Ol=le(pv,"AeroColorPicker"),mv=["data-preset"],fv=z({__name:"config-provider",props:{theme:{},preset:{},namespace:{},locale:{default:"zh-cn"}},setup(e){const o=e;return xo("AeroConfig",{theme:Sa(o,"theme"),preset:Sa(o,"preset"),namespace:Sa(o,"namespace")}),xo(fi,{locale:Sa(o,"locale")}),(t,a)=>(d(),p("div",{class:Q(["aero-config",[e.namespace,{"aero-dark":e.theme==="dark"}]]),"data-preset":e.preset&&e.preset!=="aero"?e.preset:void 0},[de(t.$slots,"default",{},void 0,!0)],10,mv))}}),hv=Z(fv,[["__scopeId","data-v-cc182ee0"]]),ra=le(hv,"AeroConfigProvider"),vv={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},gv=["d"],bv={key:0,class:"aero-date__panel"},yv={class:"aero-date__head"},_v=["aria-label"],xv={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},kv=["d"],wv=["aria-label"],Av={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},$v=["d"],Sv={key:0,class:"aero-date__grid"},Tv={key:0,class:"aero-date__cell is-out"},Cv=["onClick"],Bv={key:1,class:"aero-date__grid aero-date__grid--month"},Lv=["onClick"],Mv={key:2,class:"aero-date__grid aero-date__grid--year"},Pv=["onClick"],Iv={class:"aero-date__foot"},Dv={width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Vv=["d"],zv=z({__name:"date-picker",props:{modelValue:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{datePicker:t,common:a}=Y(),s=e,l=G(()=>s.placeholder??t.value.placeholder),r=o,n=C(),c=C(!1);Kt(()=>n.value,()=>c.value=!1);const f=new Date,m=C({y:f.getFullYear(),m:f.getMonth()}),h=C("day"),g=G(()=>s.modelValue??"");function _(U){return String(U).padStart(2,"0")}function k(U,oe,O){return`${U}-${_(oe+1)}-${_(O)}`}const x=G(()=>{const{y:U,m:oe}=m.value,O=new Date(U,oe,1),N=new Date(U,oe+1,0).getDate(),J=(O.getDay()+6)%7,ue=[];for(let Ae=0;Ae<J;Ae++)ue.push({d:0,iso:"",out:!0});for(let Ae=1;Ae<=N;Ae++)ue.push({d:Ae,iso:k(U,oe,Ae),out:!1});for(;ue.length%7;)ue.push({d:0,iso:"",out:!0});return ue}),b=G(()=>{const U=m.value.y-6;return Array.from({length:12},(oe,O)=>U+O)}),$=G(()=>`${b.value[0]} – ${b.value[11]}`);function y(U){return U===k(f.getFullYear(),f.getMonth(),f.getDate())}function w(U){r("update:modelValue",U),r("change",U),c.value=!1}function T(){const U=new Date;m.value={y:U.getFullYear(),m:U.getMonth()},w(k(U.getFullYear(),U.getMonth(),U.getDate()))}function L(){const U={...m.value};U.m--,U.m<0&&(U.m=11,U.y--),m.value=U}function F(){const U={...m.value};U.m++,U.m>11&&(U.m=0,U.y++),m.value=U}function V(){m.value={...m.value,y:m.value.y-12}}function E(){m.value={...m.value,y:m.value.y+12}}function D(U){m.value={...m.value,m:U},h.value="day"}function j(U){m.value={...m.value,y:U},h.value="month"}const S=G(()=>h.value==="day"||h.value==="month"?t.value.title(h.value,m.value.y,m.value.m+1):$.value),P=G(()=>[1,2,3,4,5,6,7,8,9,10,11,12].map(U=>t.value.monthName(U))),K=G(()=>[0,1,2,3,4,5,6].map(U=>t.value.weekday(U)));return(U,oe)=>(d(),p("div",{ref_key:"root",ref:n,class:Q(["aero-date",{"is-open":c.value,"is-disabled":e.disabled}])},[u("button",{class:"aero-date__btn",type:"button",onClick:oe[0]||(oe[0]=O=>c.value=!c.value)},[(d(),p("svg",vv,[(d(!0),p(q,null,X(i(xe).calendar,(O,N)=>(d(),p("path",{key:N,d:O},null,8,gv))),128))])),u("span",{class:Q({"is-ph":!g.value})},v(g.value||l.value),3)]),A(He,{name:"aero-date"},{default:I(()=>[c.value?(d(),p("div",bv,[u("header",yv,[u("button",{type:"button","aria-label":h.value==="day"?i(t).prevMonth:h.value==="month"?i(t).prevYear:i(t).prevDecade,onClick:oe[1]||(oe[1]=O=>h.value==="day"?L():(h.value==="month",V()))},[(d(),p("svg",xv,[(d(!0),p(q,null,X(i(xe)["chevron-left"],(O,N)=>(d(),p("path",{key:N,d:O},null,8,kv))),128))]))],8,_v),u("b",{class:"aero-date__title",onClick:oe[2]||(oe[2]=O=>h.value=h.value==="day"?"month":"year")},v(S.value),1),u("button",{type:"button","aria-label":h.value==="day"?i(t).nextMonth:h.value==="month"?i(t).nextYear:i(t).nextDecade,onClick:oe[3]||(oe[3]=O=>h.value==="day"?F():(h.value==="month",E()))},[(d(),p("svg",Av,[(d(!0),p(q,null,X(i(xe)["chevron-right"],(O,N)=>(d(),p("path",{key:N,d:O},null,8,$v))),128))]))],8,wv)]),h.value==="day"?(d(),p("div",Sv,[(d(!0),p(q,null,X(K.value,O=>(d(),p("span",{key:O,class:"aero-date__w"},v(O),1))),128)),(d(!0),p(q,null,X(x.value,(O,N)=>(d(),p(q,{key:N},[O.out?(d(),p("span",Tv)):(d(),p("button",{key:1,class:Q(["aero-date__cell",{"is-sel":O.iso===g.value,"is-today":y(O.iso)}]),type:"button",onClick:J=>w(O.iso)},v(O.d),11,Cv))],64))),128))])):h.value==="month"?(d(),p("div",Bv,[(d(!0),p(q,null,X(P.value,(O,N)=>(d(),p("button",{key:O,class:Q(["aero-date__cell aero-date__cell--wide",{"is-sel":N===m.value.m}]),type:"button",onClick:J=>D(N)},v(O),11,Lv))),128))])):(d(),p("div",Mv,[(d(!0),p(q,null,X(b.value,O=>(d(),p("button",{key:O,class:Q(["aero-date__cell aero-date__cell--wide",{"is-sel":O===m.value.y,"is-today":O===i(f).getFullYear()}]),type:"button",onClick:N=>j(O)},v(O),11,Pv))),128))])),u("footer",Iv,[u("button",{class:"aero-date__now",type:"button",onClick:T},[(d(),p("svg",Dv,[(d(!0),p(q,null,X(i(xe).clock,(O,N)=>(d(),p("path",{key:N,d:O},null,8,Vv))),128))])),R(" "+v(i(a).now),1)])])])):W("",!0)]),_:1})],2))}}),Ev=Z(zv,[["__scopeId","data-v-5f338a4e"]]),Ii=le(Ev,"AeroDatePicker"),Rv={class:"aero-desc"},Fv={key:0,class:"aero-desc__title"},Ov={class:"aero-desc__label",style:{gridColumn:"span 1"}},Hv=z({__name:"descriptions",props:{data:{},items:{},column:{default:3},bordered:{type:Boolean,default:!0},title:{}},setup(e){const o=e,t=G(()=>{const a=[];let s=[],l=0;for(const r of o.items){const n=Math.min(r.span??1,o.column);l+n>o.column&&(a.push(s),s=[],l=0),s.push({...r,span:n}),l+=n}return s.length&&a.push(s),a});return(a,s)=>(d(),p("div",Rv,[e.title?(d(),p("h4",Fv,v(e.title),1)):W("",!0),u("div",{class:"aero-desc__table",style:me({"--cols":e.column})},[(d(!0),p(q,null,X(t.value,(l,r)=>(d(),p(q,{key:r},[(d(!0),p(q,null,X(l,n=>(d(),p(q,{key:n.key},[u("div",Ov,v(n.label),1),u("div",{class:"aero-desc__value",style:me({gridColumn:`span ${n.span*2-1}`})},[de(a.$slots,n.key,{row:e.data},()=>[R(v(e.data[n.key]??"—"),1)],!0)],4)],64))),128))],64))),128))],4)]))}}),qv=Z(Hv,[["__scopeId","data-v-6d5f1c5b"]]),Di=le(qv,"AeroDescriptions"),Nv=["aria-label"],jv={key:0},Gv={class:"aero-modal__body"},Uv={key:0,class:"aero-modal__foot"},Kv=z({__name:"dialog",props:{modelValue:{type:Boolean},title:{},width:{default:"480px"},maskClosable:{type:Boolean,default:!0},blurMask:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(e,{emit:o}){const{dialog:t}=Y(),a=e,s=o,l=C();function r(){s("update:modelValue",!1),s("close")}function n(){a.maskClosable&&r()}function c(h){h.key==="Escape"&&a.modelValue&&r()}function f(){const h=l.value;if(!h)return;const g=h.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');g==null||g.focus()}function m(h){if(h.key!=="Tab"||!l.value)return;const g=[...l.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];if(!g.length)return;const _=g[0],k=g[g.length-1],x=document.activeElement;h.shiftKey&&x===_?(h.preventDefault(),k.focus()):!h.shiftKey&&x===k&&(h.preventDefault(),_.focus())}return be(()=>a.modelValue,h=>{h?(document.addEventListener("keydown",c),document.addEventListener("keydown",m),requestAnimationFrame(f)):(document.removeEventListener("keydown",c),document.removeEventListener("keydown",m))}),Le(()=>{document.removeEventListener("keydown",c),document.removeEventListener("keydown",m)}),(h,g)=>(d(),fe(Gt,{to:"body"},[A(He,{name:"aero-modal-mask"},{default:I(()=>[e.modelValue?(d(),p("div",{key:0,class:Q(["aero-modal-mask",{"has-blur":e.blurMask}]),onClick:Pe(n,["self"])},[u("div",{ref_key:"panel",ref:l,class:"aero-modal",style:me({maxWidth:e.width}),role:"dialog","aria-modal":"true","aria-label":e.title||i(t).label},[de(h.$slots,"header",{},()=>[e.title?(d(),p("h3",jv,v(e.title),1)):W("",!0)],!0),u("div",Gv,[de(h.$slots,"default",{},void 0,!0)]),h.$slots.footer?(d(),p("div",Uv,[de(h.$slots,"footer",{},void 0,!0)])):W("",!0)],12,Nv)],2)):W("",!0)]),_:3})]))}}),Vi=Z(Kv,[["__scopeId","data-v-ef98e6e3"]]),zi=le(Vi,"AeroDialog"),Wv={key:0,class:"aero-divider__title"},Yv=z({__name:"divider",props:{vertical:{type:Boolean,default:!1},dashed:{type:Boolean,default:!1},title:{}},setup(e){return(o,t)=>o.$props.vertical?(d(),p("div",{key:0,class:Q(["aero-divider aero-divider--vertical",{"is-dashed":o.$props.dashed}])},null,2)):(d(),p("div",{key:1,class:Q(["aero-divider",{"is-dashed":o.$props.dashed}])},[o.$props.title?(d(),p("span",Wv,v(o.$props.title),1)):W("",!0)],2))}}),Xv=Z(Yv,[["__scopeId","data-v-1898b749"]]),Qo=le(Xv,"AeroDivider"),Zv={class:"aero-dotfield","aria-hidden":"true"},Qv=z({__name:"dot-field",props:{shape:{default:"dot"},density:{default:26},flow:{type:Boolean,default:!1},speed:{default:1},color:{default:void 0}},setup(e){const o=e,t=C();let a=0,s=!1,l=0;function r(){var x;const k=getComputedStyle(((x=t.value)==null?void 0:x.parentElement)??document.body).getPropertyValue("--ui-brand").trim();if(k.startsWith("#")&&k.length===7){const b=parseInt(k.slice(1,3),16)/255,$=parseInt(k.slice(3,5),16)/255,y=parseInt(k.slice(5,7),16)/255,w=Math.max(b,$,y),T=Math.min(b,$,y),L=(w+T)/2,F=w-T,V=F===0?0:F/(1-Math.abs(2*L-1));let E=0;return F!==0&&(w===b?E=60*(($-y)/F%6):w===$?E=60*((y-b)/F+2):E=60*((b-$)/F+4),E<0&&(E+=360)),{h:E,s:V*100,l:L*100}}return{h:190,s:80,l:55}}function n(){const k=t.value,x=k==null?void 0:k.parentElement;if(!k||!x)return;const b=Math.min(window.devicePixelRatio||1,2),$=x.clientWidth,y=x.clientHeight;if(!$||!y)return;(k.width!==$*b||k.height!==y*b)&&(k.width=$*b,k.height=y*b);const w=k.getContext("2d");w.setTransform(b,0,0,b,0,0),w.clearRect(0,0,$,y);const T=o.density,L=o.color??(getComputedStyle(x).getPropertyValue("--ui-dot").trim()||"rgba(14,191,255,.3)"),{h:F,s:V}=r(),E=720,D=l*1%E;function j(S){let P=Math.abs(((S-D)%E+E)%E);return P>E/2&&(P=E-P),P>100?0:Math.cos(P/100*(Math.PI/2))**2}w.lineWidth=1.4;for(let S=T/2;S<$;S+=T)for(let P=T/2;P<y;P+=T){const K=S+P,U=o.flow?j(K):0;let oe,O;if(o.flow){const ue=(F+Math.sin(K*.012+l*.08)*35+360)%360,Ae=Math.min(V,80),ke=40+U*28;oe=`hsl(${ue}, ${Ae}%, ${ke}%)`,O=.3+U*.6}else oe=L,O=.22;if(o.flow&&U>.3){w.globalCompositeOperation="source-over";const ue=(F+Math.sin(K*.012+l*.08)*35+360)%360,Ae=3,ke=52+U*16,we=w.createRadialGradient(S,P,0,S,P,Ae);we.addColorStop(0,`hsla(${ue}, ${Math.min(V,70)}%, ${ke}%, 0.25)`),we.addColorStop(1,`hsla(${ue}, ${Math.min(V,70)}%, ${ke}%, 0)`),w.fillStyle=we,w.beginPath(),w.arc(S,P,Ae,0,Math.PI*2),w.fill()}w.globalCompositeOperation="source-over",w.globalAlpha=O,w.strokeStyle=oe,w.fillStyle=oe;const N=2,J=o.flow?N*(.8+U*.9):N;switch(o.shape){case"x":w.beginPath(),w.moveTo(S-J,P-J),w.lineTo(S+J,P+J),w.moveTo(S+J,P-J),w.lineTo(S-J,P+J),w.stroke();break;case"diamond":w.beginPath(),w.moveTo(S,P-J),w.lineTo(S+J,P),w.lineTo(S,P+J),w.lineTo(S-J,P),w.closePath(),w.stroke();break;case"ring":w.beginPath(),w.arc(S,P,J*.9,0,Math.PI*2),w.stroke();break;default:w.beginPath(),w.arc(S,P,1.6+(o.flow?U*1.4:0),0,Math.PI*2),w.fill()}}w.globalAlpha=1}function c(){s&&(l+=.8*o.speed,n(),a=requestAnimationFrame(c))}function f(){s||!o.flow||(s=!0,c())}function m(){s=!1,cancelAnimationFrame(a)}let h=null,g=null,_=!1;return De(()=>{n(),h=new IntersectionObserver(([k])=>{_=k.isIntersecting,_?f():m()}),h.observe(t.value.parentElement),typeof ResizeObserver<"u"&&(g=new ResizeObserver(()=>n()),g.observe(t.value.parentElement)),window.addEventListener("resize",n)}),Le(()=>{m(),h==null||h.disconnect(),g==null||g.disconnect(),window.removeEventListener("resize",n)}),be(()=>o.flow,k=>{k?f():(m(),_&&n())}),(k,x)=>(d(),p("div",Zv,[u("canvas",{ref_key:"canvasRef",ref:t},null,512)]))}}),Jv=Z(Qv,[["__scopeId","data-v-87e1959a"]]),Ei=le(Jv,"AeroDotField"),eg=["aria-label"],tg={class:"aero-drawer__head"},og=["aria-label"],ag={class:"aero-drawer__body"},sg=z({__name:"drawer",props:{modelValue:{type:Boolean},title:{},width:{default:"400px"},maskClosable:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(e,{emit:o}){const{drawer:t,common:a}=Y(),s=e,l=o,r=C();function n(){l("update:modelValue",!1),l("close")}function c(h){h.key==="Escape"&&s.modelValue&&n()}function f(){var h,g;(g=(h=r.value)==null?void 0:h.querySelector(".aero-drawer__close"))==null||g.focus()}function m(h){if(h.key!=="Tab"||!r.value)return;const g=[...r.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];if(!g.length)return;const _=g[0],k=g[g.length-1],x=document.activeElement;h.shiftKey&&x===_?(h.preventDefault(),k.focus()):!h.shiftKey&&x===k&&(h.preventDefault(),_.focus())}return be(()=>s.modelValue,h=>{h?(document.addEventListener("keydown",c),document.addEventListener("keydown",m),requestAnimationFrame(f)):(document.removeEventListener("keydown",c),document.removeEventListener("keydown",m))}),Le(()=>{document.removeEventListener("keydown",c),document.removeEventListener("keydown",m)}),(h,g)=>(d(),fe(Gt,{to:"body"},[A(He,{name:"aero-drawer-mask"},{default:I(()=>[e.modelValue?(d(),p("div",{key:0,class:"aero-drawer-mask",onClick:g[0]||(g[0]=Pe(_=>e.maskClosable&&n(),["self"]))},[u("aside",{ref_key:"panel",ref:r,class:"aero-drawer",style:me({width:`min(${e.width}, 92vw)`}),role:"dialog","aria-modal":"true","aria-label":e.title||i(t).label},[u("header",tg,[u("h3",null,v(e.title),1),u("button",{class:"aero-drawer__close",type:"button",onClick:n,"aria-label":i(a).close},[...g[1]||(g[1]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})],-1)])],8,og)]),u("div",ag,[de(h.$slots,"default",{},void 0,!0)])],12,eg)])):W("",!0)]),_:3})]))}}),lg=Z(sg,[["__scopeId","data-v-232aa508"]]),Ri=le(lg,"AeroDrawer"),rg={key:0,class:"aero-dropdown__menu"},ng={key:0,class:"aero-dropdown__sep"},ig=["disabled","onClick"],cg={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},dg=["d"],ug={class:"aero-dropdown__text"},pg={key:0},mg=z({__name:"dropdown",props:{items:{},align:{}},emits:["select"],setup(e,{emit:o}){const t=o,a=C(),s=C(!1);Kt(()=>a.value,()=>s.value=!1);function l(r){r.disabled||(s.value=!1,t("select",r))}return(r,n)=>(d(),p("div",{ref_key:"root",ref:a,class:Q(["aero-dropdown",{"is-open":s.value,"is-right":e.align!=="left"}])},[u("span",{class:"aero-dropdown__trigger",onClick:n[0]||(n[0]=c=>s.value=!s.value)},[de(r.$slots,"default",{},void 0,!0)]),A(He,{name:"aero-drop"},{default:I(()=>[s.value?(d(),p("div",rg,[(d(!0),p(q,null,X(e.items,c=>(d(),p(q,{key:c.key},[c.divided?(d(),p("hr",ng)):W("",!0),u("button",{type:"button",class:Q(["aero-dropdown__item",{"is-disabled":c.disabled,"is-danger":c.danger}]),disabled:c.disabled,onClick:f=>l(c)},[c.icon?(d(),p("svg",cg,[(d(!0),p(q,null,X(i(xe)[c.icon]??[],(f,m)=>(d(),p("path",{key:m,d:f},null,8,dg))),128))])):W("",!0),u("span",ug,[R(v(c.label)+" ",1),c.desc?(d(),p("small",pg,v(c.desc),1)):W("",!0)])],10,ig)],64))),128)),de(r.$slots,"menu",{},void 0,!0)])):W("",!0)]),_:3})],2))}}),fg=Z(mg,[["__scopeId","data-v-1fc6298b"]]),Fi=le(fg,"AeroDropdown"),hg={class:"aero-empty"},vg={class:"aero-empty__actions"},gg=z({__name:"empty",props:{hint:{default:void 0}},setup(e){const{empty:o}=Y();return(t,a)=>(d(),p("div",hg,[a[0]||(a[0]=Ao('<svg class="aero-empty__art" width="100" height="74" viewBox="0 0 100 74" fill="none" data-v-87ba994c><path d="M24 36 a13 13 0 0 1 26 -6 a11 11 0 0 1 21 5 a9 9 0 0 1 -2 18 H26 a10 10 0 0 1 -2 -17 Z" stroke="var(--ui-line-2)" stroke-width="3" stroke-dasharray="5 5" data-v-87ba994c></path><circle cx="42" cy="31" r="2.2" fill="var(--ui-ink-2)" data-v-87ba994c></circle><circle cx="56" cy="31" r="2.2" fill="var(--ui-ink-2)" data-v-87ba994c></circle><path d="M43 38 q5 5 10 0" stroke="var(--ui-brand)" stroke-width="2.5" stroke-linecap="round" data-v-87ba994c></path><circle cx="34" cy="27" r="3" fill="color-mix(in srgb, var(--ui-err) 28%, transparent)" data-v-87ba994c></circle><circle cx="65" cy="27" r="3" fill="color-mix(in srgb, var(--ui-err) 28%, transparent)" data-v-87ba994c></circle><path d="M50 50 v10 M44 56 l6 6 6-6" stroke="var(--ui-brand-deep)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" data-v-87ba994c></path></svg>',1)),u("b",null,v(e.hint??i(o).hint),1),u("p",null,[de(t.$slots,"default",{},()=>[R(v(i(o).text),1)],!0)]),u("div",vg,[de(t.$slots,"actions",{},void 0,!0)])]))}}),bg=Z(gg,[["__scopeId","data-v-87ba994c"]]),Oi=le(bg,"AeroEmpty"),yg=z({__name:"form",props:{submit:{type:Function}},emits:["submit"],setup(e,{emit:o}){const t=o;xo("AeroForm",{variant:"default"});function a(s){s.preventDefault(),t("submit",s)}return(s,l)=>(d(),p("form",{class:"aero-form",onSubmit:a},[de(s.$slots,"default",{},void 0,!0)],32))}}),_g=Z(yg,[["__scopeId","data-v-12b23c07"]]),Hi=le(_g,"AeroForm"),xg={key:0,class:"aero-field__label"},kg={key:0,class:"aero-field__req"},wg={key:1,class:"aero-field__hint is-error"},Ag={key:2,class:"aero-field__hint"},$g=z({__name:"form-item",props:{label:{},required:{type:Boolean},hint:{},error:{}},setup(e){return(o,t)=>(d(),p("div",{class:Q(["aero-field",{"is-error":!!e.error}])},[e.label?(d(),p("label",xg,[R(v(e.label),1),e.required?(d(),p("i",kg,"*")):W("",!0)])):W("",!0),de(o.$slots,"default",{},void 0,!0),e.error?(d(),p("p",wg,v(e.error),1)):e.hint?(d(),p("p",Ag,v(e.hint),1)):W("",!0)],2))}}),Sg=Z($g,[["__scopeId","data-v-5058a7db"]]),ul=le(Sg,"AeroFormItem"),Tg=z({__name:"grid",props:{cols:{default:3},gap:{default:20}},setup(e){const o=e,t=G(()=>({display:"grid",gridTemplateColumns:`repeat(${o.cols}, minmax(0, 1fr))`,gap:`${o.gap}px`}));return(a,s)=>(d(),p("div",{class:"aero-grid",style:me(t.value)},[de(a.$slots,"default",{},void 0,!0)],4))}}),Cg=Z(Tg,[["__scopeId","data-v-a9e36e11"]]),qi=le(Cg,"AeroGrid"),Bg=["width","height","stroke-width"],Lg=["d"],Mg=z({__name:"icon",props:{name:{},size:{default:16},stroke:{default:2}},setup(e){const o=e,t=G(()=>xe[o.name]??[]),a=G(()=>typeof o.size=="number"?`${o.size}px`:o.size);return(s,l)=>(d(),p("svg",{class:"aero-icon",width:a.value,height:a.value,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":o.stroke,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[(d(!0),p(q,null,X(t.value,(r,n)=>(d(),p("path",{key:n,d:r},null,8,Lg))),128))],8,Bg))}}),Mo=Z(Mg,[["__scopeId","data-v-7cff34d3"]]),We=le(Mo,"AeroIcon"),Pg=["aria-label","disabled"],Ig=["d"],Dg={key:0,class:"aero-icon-btn__dot"},Vg=z({__name:"icon-button",props:{icon:{},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},label:{}},emits:["click","focus","blur"],setup(e,{emit:o}){const t=e,a=o;function s(n){t.disabled||t.loading||a("click",n)}function l(n){t.disabled||a("focus",n)}function r(n){t.disabled||a("blur",n)}return(n,c)=>(d(),p("button",{class:Q(["aero-icon-btn",{"is-disabled":e.disabled,"is-loading":e.loading}]),"aria-label":e.label??e.icon,disabled:e.disabled||e.loading,onClick:s,onFocus:l,onBlur:r},[(d(),p("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:Q({"is-spinning":e.loading})},[(d(!0),p(q,null,X(i(xe)[t.icon]??[],(f,m)=>(d(),p("path",{key:m,d:f},null,8,Ig))),128))],2)),e.dot?(d(),p("i",Dg)):W("",!0)],42,Pg))}}),zg=Z(Vg,[["__scopeId","data-v-bef0bb59"]]),Co=le(zg,"AeroIconButton"),Eg=["src"],Rg=["aria-label"],Fg={class:"aero-viewer__pct"},Og=["aria-label"],Hg=["aria-label"],qg=["aria-label"],Ng=["aria-label"],jg={width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Gg=["d"],Ug=["aria-label"],Kg={width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Wg=["d"],Yg=["aria-label"],Xg={width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Zg=["d"],Qg={key:2,class:"aero-viewer__idx"},Jg=["aria-label"],eb={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},tb=["d"],ob=.2,ab=6,sb=z({__name:"image-viewer",props:{modelValue:{type:Boolean},urlList:{},initial:{default:0}},emits:["update:modelValue"],setup(e,{emit:o}){const{imageViewer:t,common:a}=Y(),s=e,l=o,r=C(s.initial),n=C(1),c=C(0),f=C(0),m=C(0),h=C({x:0,y:0}),g=C({x:0,y:0}),_=C(null),k=C(!1),x=C(!1),b=G(()=>k.value||x.value),$=G(()=>s.urlList.length),y=G(()=>s.urlList[r.value]??""),w=G(()=>({transform:`translate(${f.value}px, ${m.value}px) scale(${n.value}) rotate(${c.value}deg)`}));function T(B){return Math.min(ab,Math.max(ob,B))}function L(){n.value=1,c.value=0,f.value=0,m.value=0}function F(){const B=_.value;if(!B)return;const H=f.value,te=m.value,ee=n.value,se=c.value;f.value=0,m.value=0,n.value=1,c.value=0,requestAnimationFrame(()=>{const re=B.getBoundingClientRect();h.value={x:re.left,y:re.top},g.value={x:re.width/2,y:re.height/2},f.value=H,m.value=te,n.value=ee,c.value=se})}function V(B){const H=g.value,te=B-1;return{x:H.x*te,y:H.y*te}}function E(B){n.value=T(n.value*B)}function D(B){c.value=(c.value+B+360)%360}function j(){l("update:modelValue",!1)}function S(){L(),r.value=(r.value-1+$.value)%$.value}function P(){L(),r.value=(r.value+1)%$.value}function K(B){B.preventDefault(),E(B.deltaY<0?1.12:1/1.12)}const U=new Map;let oe=0,O=0,N=0,J={x:0,y:0},ue=1,Ae=0,ke=0;function we(B){return{x:(B[0].x+B[1].x)/2,y:(B[0].y+B[1].y)/2}}function no(B){return Math.hypot(B[0].x-B[1].x,B[0].y-B[1].y)}function Wt(B){oe=B.x-f.value,O=B.y-m.value}function io(B){N=no(B)||1,J=we(B),ue=n.value,Ae=f.value,ke=m.value}function Ne(B){B.currentTarget.setPointerCapture(B.pointerId),U.set(B.pointerId,{x:B.clientX,y:B.clientY});const te=[...U.values()];if(U.size===1){k.value=!0,Wt(te[0]);return}U.size===2&&(k.value=!1,x.value=!0,io(te))}function pt(B){if(U.has(B.pointerId)){if(U.set(B.pointerId,{x:B.clientX,y:B.clientY}),U.size>=2){const H=[...U.values()],te=no(H)||1,ee=we(H),se=h.value,re=ue,ie=J.x-se.x,ne=J.y-se.y,ae=re*(te/N),he=V(ae/re),ce=ee.x-se.x-(ie-Ae)*(ae/re)+he.x,ve=ee.y-se.y-(ne-ke)*(ae/re)+he.y;n.value=T(ae),f.value=ce,m.value=ve;return}if(k.value){const H=[...U.values()][0];f.value=H.x-oe,m.value=H.y-O}}}function rt(B){U.delete(B.pointerId);const H=[...U.values()];if(H.length>=2){io(H);return}if(x.value=!1,H.length===1){k.value=!0,Wt(H[0]);return}k.value=!1}function Vt(B){U.delete(B.pointerId);const H=[...U.values()];x.value=H.length>=2,k.value=H.length===1,H.length>=2?io(H):H.length===1&&Wt(H[0])}function co(B){s.modelValue&&(B.key==="Escape"&&j(),B.key==="ArrowLeft"&&S(),B.key==="ArrowRight"&&P(),(B.key==="+"||B.key==="=")&&E(1.2),B.key==="-"&&E(1/1.2),B.key==="0"&&L(),B.key.toLowerCase()==="r"&&D(90))}be(()=>s.modelValue,B=>{B?(r.value=s.initial,L(),document.addEventListener("keydown",co),Oe(F)):document.removeEventListener("keydown",co)});function M(){F()}return Le(()=>document.removeEventListener("keydown",co)),(B,H)=>(d(),fe(Gt,{to:"body"},[A(He,{name:"aero-viewer"},{default:I(()=>[e.modelValue?(d(),p("div",{key:0,class:"aero-viewer",onClick:Pe(j,["self"]),onWheel:Pe(K,["prevent"])},[u("img",{ref_key:"imgEl",ref:_,class:Q(["aero-viewer__img",{"is-pan":b.value}]),src:y.value,alt:"",style:me(w.value),draggable:"false",onLoad:M,onPointerdown:Ne,onPointermove:pt,onPointerup:rt,onPointercancel:Vt,onDblclick:L},null,46,Eg),u("div",{class:"aero-viewer__tools",onClick:H[4]||(H[4]=Pe(()=>{},["stop"]))},[u("button",{type:"button","aria-label":i(t).zoomOut,onClick:H[0]||(H[0]=te=>E(1/1.2))},[...H[5]||(H[5]=[u("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"},[u("path",{d:"M5 12h14"})],-1)])],8,Rg),u("b",Fg,v(Math.round(n.value*100))+"%",1),u("button",{type:"button","aria-label":i(t).zoomIn,onClick:H[1]||(H[1]=te=>E(1.2))},[...H[6]||(H[6]=[u("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"},[u("path",{d:"M5 12h14"}),u("path",{d:"M12 5v14"})],-1)])],8,Og),H[9]||(H[9]=u("i",{class:"aero-viewer__sep"},null,-1)),u("button",{type:"button","aria-label":i(t).rotateLeft,onClick:H[2]||(H[2]=te=>D(-90))},[...H[7]||(H[7]=[u("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),u("path",{d:"M3 4v5h5"})],-1)])],8,Hg),u("button",{type:"button","aria-label":i(t).rotateRight,onClick:H[3]||(H[3]=te=>D(90))},[...H[8]||(H[8]=[u("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),u("path",{d:"M21 4v5h-5"})],-1)])],8,qg),H[10]||(H[10]=u("i",{class:"aero-viewer__sep"},null,-1)),u("button",{type:"button","aria-label":i(t).reset,onClick:L},[(d(),p("svg",jg,[(d(!0),p(q,null,X(i(xe).refresh,(te,ee)=>(d(),p("path",{key:ee,d:te},null,8,Gg))),128))]))],8,Ng)]),$.value>1?(d(),p("button",{key:0,class:"aero-viewer__nav is-prev",type:"button","aria-label":i(t).prev,onClick:S},[(d(),p("svg",Kg,[(d(!0),p(q,null,X(i(xe)["chevron-left"],(te,ee)=>(d(),p("path",{key:ee,d:te},null,8,Wg))),128))]))],8,Ug)):W("",!0),$.value>1?(d(),p("button",{key:1,class:"aero-viewer__nav is-next",type:"button","aria-label":i(t).next,onClick:P},[(d(),p("svg",Xg,[(d(!0),p(q,null,X(i(xe)["chevron-right"],(te,ee)=>(d(),p("path",{key:ee,d:te},null,8,Zg))),128))]))],8,Yg)):W("",!0),$.value>1?(d(),p("span",Qg,v(r.value+1)+" / "+v($.value),1)):W("",!0),u("button",{class:"aero-viewer__close",type:"button","aria-label":i(a).close,onClick:j},[(d(),p("svg",eb,[(d(!0),p(q,null,X(i(xe).x,(te,ee)=>(d(),p("path",{key:ee,d:te},null,8,tb))),128))]))],8,Jg)],32)):W("",!0)]),_:1})]))}}),Ni=Z(sb,[["__scopeId","data-v-b73afe0e"]]),lb=["src","alt"],rb={key:1,class:"aero-image__fallback"},nb={key:2,class:"aero-image__zoom","aria-hidden":"true"},ib=z({__name:"image",props:{src:{},alt:{},width:{},height:{},radius:{default:"md"},preview:{type:Boolean,default:!1},fit:{default:"cover"}},emits:["preview"],setup(e,{emit:o}){const{image:t}=Y(),a=e,s=C(!1),l=C(!1),r=C(!1),n=o;function c(){a.preview&&(r.value=!0,n("preview",a.src))}return(f,m)=>(d(),p("figure",{class:Q(["aero-image",[`is-${e.radius}`,{"is-preview":e.preview,"is-failed":s.value}]]),style:me({width:e.width!==void 0?typeof e.width=="number"?e.width+"px":e.width:"100%",height:e.height!==void 0?typeof e.height=="number"?e.height+"px":e.height:void 0}),onClick:c},[s.value?(d(),p("div",rb,[m[3]||(m[3]=u("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},[u("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u("circle",{cx:"9",cy:"9",r:"2"}),u("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})],-1)),u("b",null,v(i(t).lost),1),u("span",null,v(i(t).retry),1)])):(d(),p("img",{key:0,class:"aero-image__img",src:e.src,alt:e.alt??"",style:me({objectFit:e.fit}),loading:"lazy",onError:m[0]||(m[0]=h=>s.value=!0),onLoad:m[1]||(m[1]=h=>l.value=!0)},null,44,lb)),e.preview&&l.value?(d(),p("span",nb,[...m[4]||(m[4]=[Ao('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-4ddb594c><circle cx="11" cy="11" r="7" data-v-4ddb594c></circle><path d="m21 21-4.3-4.3" data-v-4ddb594c></path><path d="M11 8v6" data-v-4ddb594c></path><path d="M8 11h6" data-v-4ddb594c></path></svg>',1)])])):W("",!0),A(Ni,{modelValue:r.value,"onUpdate:modelValue":m[2]||(m[2]=h=>r.value=h),"url-list":[e.src]},null,8,["modelValue","url-list"])],6))}}),cb=Z(ib,[["__scopeId","data-v-4ddb594c"]]),pl=le(cb,"AeroImage"),ji=le(Ni,"AeroImageViewer"),db={key:0,class:"aero-input__prefix"},ub=["type","value","placeholder","disabled","readonly","maxlength"],pb={key:1,class:"aero-input__suffix",type:"button",tabindex:"-1"},mb=["aria-label"],fb=z({__name:"input",props:{modelValue:{},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},prefix:{},suffix:{},type:{default:"text"},clearable:{type:Boolean,default:!1},maxlength:{},width:{}},emits:["update:modelValue","input","change","focus","blur","clear"],setup(e,{emit:o}){const{input:t}=Y(),a=e,s=o,l=G({get:()=>a.modelValue??"",set:c=>s("update:modelValue",c)});function r(c){l.value=c.target.value,s("input",c)}function n(){l.value="",s("clear")}return(c,f)=>(d(),p("div",{class:Q(["aero-input",{"is-disabled":e.disabled,"is-error":e.error,"has-prefix":!!e.prefix,"has-suffix":!!e.suffix}]),style:me(e.width?{width:typeof e.width=="number"?e.width+"px":e.width}:void 0)},[e.prefix?(d(),p("span",db,v(e.prefix),1)):W("",!0),u("input",{class:"aero-input__inner",type:e.type,value:l.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,onInput:r,onChange:f[0]||(f[0]=m=>s("change",m)),onFocus:f[1]||(f[1]=m=>s("focus",m)),onBlur:f[2]||(f[2]=m=>s("blur",m))},null,40,ub),e.suffix?(d(),p("button",pb,v(e.suffix),1)):W("",!0),e.clearable&&l.value&&!e.disabled?(d(),p("button",{key:2,class:"aero-input__clear",type:"button",onClick:n,"aria-label":i(t).clearAria},[...f[3]||(f[3]=[u("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})],-1)])],8,mb)):W("",!0)],6))}}),hb=Z(fb,[["__scopeId","data-v-27f2f6b8"]]),Bt=le(hb,"AeroInput"),vb=["disabled","aria-label"],gb={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},bb=["d"],yb=["value","min","max","step","disabled","placeholder"],_b=["disabled","aria-label"],xb={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},kb=["d"],wb=z({__name:"input-number",props:{modelValue:{},min:{default:Number.MIN_SAFE_INTEGER},max:{default:Number.MAX_SAFE_INTEGER},step:{default:1},stepStrictly:{type:Boolean},disabled:{type:Boolean,default:!1},placeholder:{}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{inputNumber:t}=Y(),a=e,s=o,l=C(),r=C(!1);function n(_){return Math.min(a.max,Math.max(a.min,_))}function c(_){const k=n(_);r.value=!0,setTimeout(()=>r.value=!1,400),s("update:modelValue",k),s("change",k)}function f(_){if(a.disabled)return;let x=(a.modelValue??a.min)+_*a.step;a.stepStrictly&&(x=Math.round(x/a.step)*a.step),x>a.max&&(x=a.min),c(x)}function m(){var x;const _=(x=l.value)==null?void 0:x.valueAsNumber;if(Number.isNaN(_)){l.value.value=String(a.modelValue??"");return}let k=n(_);a.stepStrictly&&a.step&&(k=Math.round(k/a.step)*a.step),k!==a.modelValue&&c(k)}const h=G(()=>!a.disabled&&a.modelValue!==void 0&&a.modelValue<=a.min),g=G(()=>!a.disabled&&a.modelValue!==void 0&&a.modelValue>=a.max);return(_,k)=>(d(),p("div",{class:Q(["aero-num",{"is-disabled":e.disabled}])},[u("button",{class:"aero-num__btn",type:"button",disabled:h.value||e.disabled,"aria-label":i(t).minusAria,onClick:k[0]||(k[0]=x=>f(-1))},[(d(),p("svg",gb,[(d(!0),p(q,null,X(i(xe).minus,(x,b)=>(d(),p("path",{key:b,d:x},null,8,bb))),128))]))],8,vb),u("input",{ref_key:"inner",ref:l,class:Q(["aero-num__input",{"is-pop":r.value}]),type:"number",value:e.modelValue,min:e.min,max:e.max,step:e.step,disabled:e.disabled,placeholder:e.placeholder,onBlur:m,onKeydown:[k[1]||(k[1]=Nt(Pe(x=>f(1),["prevent"]),["up"])),k[2]||(k[2]=Nt(Pe(x=>f(-1),["prevent"]),["down"]))]},null,42,yb),u("button",{class:"aero-num__btn",type:"button",disabled:g.value||e.disabled,"aria-label":i(t).plusAria,onClick:k[3]||(k[3]=x=>f(1))},[(d(),p("svg",xb,[(d(!0),p(q,null,X(i(xe).plus,(x,b)=>(d(),p("path",{key:b,d:x},null,8,kb))),128))]))],8,_b)],2))}}),Ab=Z(wb,[["__scopeId","data-v-e22a4baf"]]),Ea=le(Ab,"AeroInputNumber"),$b=["disabled","onClick","aria-label"],Sb={width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"},Tb=["d"],Cb=["placeholder","disabled","onKeydown"],Bb=z({__name:"input-tag",props:{modelValue:{},placeholder:{default:void 0},max:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{inputTag:t}=Y(),a=e,s=G(()=>a.placeholder??t.value.placeholder),l=o,r=C(""),n=C();function c(){const h=r.value.trim().replace(/[,，]$/,"");if(!h||a.disabled||a.max&&a.modelValue.length>=a.max)return;if(a.modelValue.includes(h)){r.value="";return}const g=[...a.modelValue,h];l("update:modelValue",g),l("change",g),r.value=""}function f(h){if(a.disabled)return;const g=a.modelValue.filter((_,k)=>k!==h);l("update:modelValue",g),l("change",g)}function m(){!r.value&&a.modelValue.length&&!a.disabled&&f(a.modelValue.length-1)}return(h,g)=>(d(),p("div",{class:Q(["aero-input-tag",{"is-disabled":e.disabled}]),onMousedown:g[1]||(g[1]=Pe(_=>{var k;return(k=n.value)==null?void 0:k.focus()},["prevent"]))},[A(os,{tag:"span",class:"aero-input-tag__chips",name:"itag-flip"},{default:I(()=>[(d(!0),p(q,null,X(e.modelValue,(_,k)=>(d(),p("span",{key:_,class:"aero-input-tag__chip"},[R(v(_)+" ",1),u("button",{class:"aero-input-tag__x",type:"button",disabled:e.disabled,onClick:x=>f(k),"aria-label":i(t).removeAria(_)},[(d(),p("svg",Sb,[(d(!0),p(q,null,X(i(xe).x,(x,b)=>(d(),p("path",{key:b,d:x},null,8,Tb))),128))]))],8,$b)]))),128))]),_:1}),Bl(u("input",{ref_key:"inputRef",ref:n,"onUpdate:modelValue":g[0]||(g[0]=_=>r.value=_),class:"aero-input-tag__inner",placeholder:e.modelValue.length?"":s.value,disabled:e.disabled,onKeydown:[Nt(Pe(c,["prevent"]),["enter"]),Nt(Pe(c,["prevent"]),[","]),Nt(m,["delete"])],onBlur:c},null,40,Cb),[[Vl,r.value]])],34))}}),Lb=Z(Bb,[["__scopeId","data-v-6d507913"]]),Gi=le(Lb,"AeroInputTag"),Mb=z({__name:"layout",props:{padding:{default:"normal"},alt:{type:Boolean,default:!1},maxWidth:{default:1180},radius:{}},setup(e){const o=e,t=G(()=>({maxWidth:typeof o.maxWidth=="number"?`${o.maxWidth}px`:o.maxWidth,borderRadius:o.radius!==void 0?typeof o.radius=="number"?`${o.radius}px`:o.radius:void 0}));return(a,s)=>(d(),p("section",{class:Q(["aero-section",[`is-${e.padding}`,{"is-alt":e.alt}]])},[u("div",{class:"aero-section__container",style:me(t.value)},[de(a.$slots,"default",{},void 0,!0)],4)],2))}}),Pb=Z(Mb,[["__scopeId","data-v-062f3946"]]),Ui=le(Pb,"AeroLayout"),Ib=["href","target","rel","aria-disabled"],Db={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{"margin-left":"3px","vertical-align":"-1px"}},Vb=z({__name:"link",props:{href:{default:"#"},external:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){return(o,t)=>(d(),p("a",{class:Q(["aero-link",{"is-disabled":e.disabled}]),href:e.disabled?void 0:e.href,target:e.external?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0,"aria-disabled":e.disabled},[de(o.$slots,"default",{},void 0,!0),e.external?(d(),p("svg",Db,[...t[0]||(t[0]=[u("path",{d:"M15 3h6v6"},null,-1),u("path",{d:"M10 14 21 3"},null,-1),u("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h6"},null,-1)])])):W("",!0)],10,Ib))}}),zb=Z(Vb,[["__scopeId","data-v-7147b40c"]]),Ra=le(zb,"AeroLink"),Eb={class:"aero-loading-wrap"},Rb=["aria-label"],Fb={key:0,class:"aero-loading__tip"},Ob=z({__name:"loading",props:{loading:{type:Boolean,default:!1},tip:{}},setup(e){const{common:o}=Y();return(t,a)=>(d(),p("div",Eb,[de(t.$slots,"default",{},void 0,!0),A(He,{name:"aero-loading"},{default:I(()=>[e.loading?(d(),p("div",{key:0,class:"aero-loading",role:"status","aria-label":e.tip??i(o).loading},[a[0]||(a[0]=u("span",{class:"aero-loading__spinner"},null,-1)),e.tip?(d(),p("span",Fb,v(e.tip),1)):W("",!0)],8,Rb)):W("",!0)]),_:1})]))}}),Hb=Z(Ob,[["__scopeId","data-v-d7a143f7"]]),Ki=le(Hb,"AeroLoading"),qb={key:0,class:"aero-mq__cap"},Nb={class:"aero-mq__viewport"},jb={class:"aero-mq__viewport"},Gb=z({__name:"marquee",props:{variant:{default:"brand"},caption:{},items:{default:()=>[]},duration:{},pauseOnHover:{type:Boolean,default:!0}},setup(e){const o=e,t=[...o.items,...o.items],a=o.duration??(o.variant==="brand"?28:34);return(s,l)=>e.variant==="brand"?(d(),p("div",{key:0,class:Q(["aero-mq",{"is-pausable":e.pauseOnHover}])},[e.caption?(d(),p("div",qb,v(e.caption),1)):W("",!0),u("div",Nb,[u("div",{class:"aero-mq__track",style:me({animationDuration:i(a)+"s"})},[(d(),p(q,null,X(t,(r,n)=>u("span",{key:n,class:"aero-mq__item"},[r.icon?(d(),fe(Mo,{key:0,name:r.icon,size:18},null,8,["name"])):W("",!0),R(" "+v(r.text),1)])),64))],4)])],2)):(d(),p("div",{key:1,class:Q(["aero-typeband",{"is-pausable":e.pauseOnHover}])},[u("div",jb,[u("div",{class:"aero-mq__track aero-mq__track--type",style:me({animationDuration:i(a)+"s"})},[(d(),p(q,null,X(t,(r,n)=>u("span",{key:n,class:Q(["aero-mq__tb",{"is-solid":r.solid}])},v(r.text),3)),64))],4)])],2))}}),Ub=Z(Gb,[["__scopeId","data-v-3d5e8e64"]]),ml=le(Ub,"AeroMarquee"),Kb=z({__name:"iridescent-threads",props:{count:{default:7},cycle:{default:32},hueShift:{default:0},opacity:{default:1}},setup(e){const o=e,t=C(),a=C(),s=C();let l=0,r=0,n=!1,c=!1;function f(){const b=t.value,$=getComputedStyle((b==null?void 0:b.parentElement)??document.body).getPropertyValue("--ui-brand").trim();if($.startsWith("#")&&$.length===7){const y=parseInt($.slice(1,3),16)/255,w=parseInt($.slice(3,5),16)/255,T=parseInt($.slice(5,7),16)/255,L=Math.max(y,w,T),F=Math.min(y,w,T),V=L-F;let E=0;return V!==0&&(L===y?E=60*((w-T)/V%6):L===w?E=60*((T-y)/V+2):E=60*((y-w)/V+4),E<0&&(E+=360)),E}return 190}function m(b){const $=[];for(let y=0;y<b;y++){const w=b>1?y/(b-1):.5;$.push({y0:.1+w*.8+(y%2?.02:-.02),amp:.06+y%3*.02,freq:.8+y*2%3*.3,phase:y*1.7%(Math.PI*2),width:1+y%3*.5,alpha:.12+y%4*.06,hueOff:y%3===0?0:y%3===1?20:-20})}return $}const h=C([]);function g(b,$){const y=b.parentElement;if(!y)return;const w=Math.min(window.devicePixelRatio||1,2),T=y.clientWidth,L=y.clientHeight;if(!T||!L)return;(b.width!==T*w||b.height!==L*w)&&(b.width=T*w,b.height=L*w);const F=b.getContext("2d");F.setTransform(w,0,0,w,0,0),F.clearRect(0,0,T,L);const V=f(),E=70,D=58;for(const j of h.value){F.lineWidth=j.width*$,F.lineCap="round",F.lineJoin="round";const P=(V+o.hueShift+j.hueOff+360)%360,K=j.alpha*o.opacity*($>1?.5:1);F.strokeStyle=`hsla(${P}, ${E}%, ${D}%, ${K})`,F.beginPath();for(let U=0;U<=72;U++){const oe=U/72,O=oe*T,N=(j.y0+Math.sin(oe*Math.PI*j.freq*2+j.phase+r)*j.amp)*L;U===0?F.moveTo(O,N):F.lineTo(O,N)}F.stroke()}}function _(){g(a.value,1),g(s.value,2.2)}function k(){!n||c||(r+=.016/(o.cycle/32),_(),l=requestAnimationFrame(k))}function x(){var b;c=((b=window.matchMedia)==null?void 0:b.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,c?(cancelAnimationFrame(l),r=0,_()):n&&k()}return De(()=>{var $,y,w;h.value=m(o.count),x(),c||_(),new IntersectionObserver(([T])=>{n=T.isIntersecting,n&&!c?k():cancelAnimationFrame(l)}).observe(t.value),window.addEventListener("resize",()=>{(n||c)&&_()}),(w=($=window.matchMedia)==null?void 0:(y=$.call(window,"(prefers-reduced-motion: reduce)")).addEventListener)==null||w.call(y,"change",x)}),Le(()=>{var b,$,y;cancelAnimationFrame(l),window.removeEventListener("resize",()=>_()),(y=(b=window.matchMedia)==null?void 0:($=b.call(window,"(prefers-reduced-motion: reduce)")).removeEventListener)==null||y.call($,"change",x)}),be(()=>o.count,b=>{h.value=m(b),(n||c)&&_()}),be(()=>o.cycle,()=>{}),be(()=>o.hueShift,()=>{(n||c)&&_()}),be(()=>o.opacity,()=>{(n||c)&&_()}),(b,$)=>(d(),p("div",{ref_key:"stageRef",ref:t,class:"aero-threads","aria-hidden":"true"},[u("canvas",{ref_key:"glowRef",ref:s,class:"aero-threads__glow"},null,512),u("canvas",{ref_key:"clearRef",ref:a,class:"aero-threads__clear"},null,512)],512))}}),Wb=Z(Kb,[["__scopeId","data-v-845b66c9"]]),Wi=le(Wb,"AeroIridescentThreads"),Yb=["data-depth"],Xb={class:"aero-parallax__in"},Zb={class:"aero-parallax__hint"},Qb=z({__name:"parallax-box",props:{height:{default:250},hint:{default:void 0}},setup(e){const{parallaxBox:o}=Y(),t=e,a=G(()=>t.hint??o.value.hint),s=fa(),l=C(),r=C([]),n=x=>{x instanceof HTMLElement&&!r.value.includes(x)&&r.value.push(x)},c={x:0,y:0};function f(x,b){matchMedia("(prefers-reduced-motion: reduce)").matches||r.value.forEach($=>{const y=Number($.dataset.depth)||10;$.style.transform=`translate(${x*y}px, ${b*y}px)`})}function m(x){const b=l.value;if(!b)return;x.preventDefault();const $=b.getBoundingClientRect();c.x=(x.clientX-$.left)/$.width-.5,c.y=(x.clientY-$.top)/$.height-.5,f(c.x,c.y)}function h(){c.x=0,c.y=0,f(0,0)}function g(x){matchMedia("(prefers-reduced-motion: reduce)").matches||(x.classList.remove("is-spin"),x.offsetWidth,x.classList.add("is-spin"))}let _=!1;function k(x){_||x.accelerationIncludingGravity&&(_=!0);const b=x.accelerationIncludingGravity;if(!b||!b.x||!b.y||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const $=Math.max(-1,Math.min(1,b.x/9.81)),y=Math.max(-1,Math.min(1,b.y/9.81));c.x=$*.5,c.y=y*.5,f(c.x,c.y)}return De(()=>{"ontouchstart"in window&&window.addEventListener("devicemotion",k,{passive:!0})}),Le(()=>{window.removeEventListener("devicemotion",k)}),(x,b)=>{var $;return d(),p("div",{ref_key:"boxRef",ref:l,class:"aero-parallax",style:me({height:e.height+"px"}),onPointermove:m,onPointerleave:h},[(d(!0),p(q,null,X((($=s.default)==null?void 0:$.call(s))??[],(y,w)=>(d(),p("div",{key:w,ref_for:!0,ref:T=>n(T),class:"aero-parallax__shape","data-depth":[26,14,20,10,18,30][w%6],style:me({top:["12%","68%","16%","72%","40%","8%"][w%6],left:["44%","20%","80%","56%","8%","88%"][w%6],animationDelay:["0s","1.2s","0.6s","1.8s","0.3s","2.2s"][w%6]}),onClick:b[0]||(b[0]=T=>g(T.currentTarget))},[u("span",Xb,[(d(),fe(_o(y)))])],12,Yb))),128)),u("span",Zb,[b[1]||(b[1]=u("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[u("path",{d:"M4 4l7 16 2.5-7.5L21 10z"})],-1)),R(" "+v(a.value),1)])],36)}}}),Jb=Z(Qb,[["__scopeId","data-v-4aa54cc9"]]),Yi=le(Jb,"AeroParallaxBox"),e1={key:0,class:"aero-popover__title"},t1={class:"aero-popover__body"},o1=z({__name:"popover",props:{trigger:{default:"hover"},placement:{default:"bottom"},title:{},width:{default:260},open:{type:Boolean,default:void 0}},emits:["update:open"],setup(e,{emit:o}){const t=e,a=o,s=C(!1),l=G(()=>t.open!==void 0?t.open:s.value),r=C(),n=C(),c=C({left:"0px",top:"0px"});Kt(()=>r.value,()=>{t.trigger==="click"&&f(!1)});function f(x){s.value=x,a("update:open",x)}async function m(){f(!0),await Oe(),_()}function h(){f(!1)}function g(){l.value?h():m()}function _(){var F;const x=(F=r.value)==null?void 0:F.firstElementChild,b=n.value;if(!x||!b)return;const $=x.getBoundingClientRect(),y=b.offsetWidth,w=b.offsetHeight;let T=$.left+$.width/2-y/2,L=$.bottom+10;t.placement==="top"&&(L=$.top-w-10),t.placement==="right"&&(T=$.right+10,L=$.top+$.height/2-w/2),T=Math.max(8,Math.min(window.innerWidth-y-8,T)),c.value={left:T+"px",top:L+"px"}}function k(){l.value&&_()}return De(()=>{window.addEventListener("scroll",k,{passive:!0}),window.addEventListener("resize",k)}),Le(()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",k)}),(x,b)=>(d(),p(q,null,[u("span",{ref_key:"root",ref:r,class:"aero-popover-trigger",onMouseenter:b[0]||(b[0]=$=>e.trigger==="hover"&&m()),onMouseleave:b[1]||(b[1]=$=>e.trigger==="hover"&&h()),onClick:b[2]||(b[2]=$=>e.trigger==="click"&&g())},[de(x.$slots,"default",{},void 0,!0)],544),(d(),fe(Gt,{to:"body"},[A(He,{name:"aero-popover"},{default:I(()=>[l.value?(d(),p("div",{key:0,ref_key:"panel",ref:n,class:Q(["aero-popover",`is-${e.placement}`]),style:me([c.value,{minWidth:e.width+"px"}]),role:"dialog"},[e.title?(d(),p("b",e1,v(e.title),1)):W("",!0),u("div",t1,[de(x.$slots,"content",{},void 0,!0)])],6)):W("",!0)]),_:3})]))],64))}}),Hl=Z(o1,[["__scopeId","data-v-9da8f99c"]]),a1=["href","onClick"],s1=["href","onClick"],l1={class:"aero-menu__label"},r1=["href","onClick"],n1={class:"aero-menu__label"},i1=z({__name:"menu",props:{items:{},modelValue:{},mode:{default:"horizontal"},width:{},collapsed:{type:Boolean,default:!1}},emits:["update:modelValue","select","focus","blur","update:collapsed"],setup(e,{emit:o}){const t=e,a=o;function s(b){a("update:modelValue",b.key),a("select",b)}function l(b){const $=t.mode==="horizontal";if(!($&&(b.key==="ArrowLeft"||b.key==="ArrowRight")||!$&&(b.key==="ArrowUp"||b.key==="ArrowDown")))return;b.preventDefault();const y=t.items.length;if(!y)return;const w=r.value<0?0:r.value;let T=w;$?T=b.key==="ArrowRight"?(w+1)%y:(w-1+y)%y:T=b.key==="ArrowDown"?(w+1)%y:(w-1+y)%y;const L=t.items[T];L&&s(L)}const r=G(()=>t.items.findIndex(b=>b.key===t.modelValue)),n=G(()=>{const b=[];for(const $ of t.items){const y=b[b.length-1];$.group&&y&&y.name===$.group?y.items.push($):b.push({name:$.group,items:[$]})}return b}),c=C(),f=C({left:"0px",width:"0px"});function m(){const b=c.value;if(!b||t.mode==="horizontal"||t.collapsed)return;const $=b.querySelectorAll(".aero-menu__item")[r.value];$?f.value={left:$.offsetLeft+"px",width:$.offsetWidth+"px"}:f.value={left:"0px",width:"0px"}}const h=C(null);function g(b){const $=c.value;if(!$||t.mode!=="vertical")return;const y=r.value>=0?$.querySelectorAll(".aero-menu__item")[r.value]:null;if(!y){h.value=null;return}const w=`translate(${y.offsetLeft-8}px, ${y.offsetTop+(y.offsetHeight-16)/2}px)`;b?(h.value={transform:w,transition:"none"},typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{h.value={transform:w}}):h.value={transform:w}):h.value={transform:w}}function _(b){m(),g(b)}let k=null,x=t.collapsed;return be([r,()=>t.items.length,()=>t.collapsed],()=>Oe(()=>{const b=t.collapsed!==x;x=t.collapsed,_(b)})),De(()=>{Oe(()=>_(!0)),k=new ResizeObserver(()=>_(!0)),c.value&&k.observe(c.value)}),Le(()=>k==null?void 0:k.disconnect()),(b,$)=>(d(),p("nav",{ref_key:"root",ref:c,class:Q(["aero-menu",[`is-${e.mode}`,e.collapsed&&e.mode==="vertical"?"is-collapsed":null]]),role:"menu",style:me(e.mode==="vertical"?{width:e.collapsed?"64px":typeof e.width=="number"?e.width+"px":e.width||"240px",transition:"width .25s cubic-bezier(.4,0,.2,1)"}:void 0),tabindex:"0",onFocus:$[0]||($[0]=y=>a("focus",y)),onBlur:$[1]||($[1]=y=>a("blur",y)),onKeydown:l},[e.mode==="horizontal"?(d(),p(q,{key:0},[u("span",{class:"aero-menu__ink",style:me(f.value)},null,4),(d(!0),p(q,null,X(e.items,y=>(d(),p("a",{key:y.key,class:Q(["aero-menu__item",{"is-active":y.key===e.modelValue}]),href:y.href,role:"menuitem",onClick:Pe(w=>s(y),["prevent"])},[y.icon?(d(),fe(_o(y.icon),{key:0,class:"aero-menu__icon"})):W("",!0),u("span",null,v(y.label),1)],10,a1))),128))],64)):(d(),p(q,{key:1},[h.value?(d(),p("span",{key:0,class:"aero-menu__indicator",style:me(h.value),"aria-hidden":"true"},null,4)):W("",!0),(d(!0),p(q,null,X(n.value,y=>(d(),p(q,{key:y.name??"__ungrouped__"},[y.name?(d(),p("div",{key:0,class:Q(["aero-menu__group",{"is-line":e.collapsed}])},v(y.name),3)):W("",!0),(d(!0),p(q,null,X(y.items,w=>(d(),p(q,{key:w.key},[e.collapsed?(d(),fe(Hl,{key:0,trigger:"hover",placement:"right",title:w.label},{default:I(()=>[u("a",{class:Q(["aero-menu__item is-v is-col",{"is-active":w.key===e.modelValue}]),href:w.href,role:"menuitem",onClick:Pe(T=>s(w),["prevent"])},[w.icon?(d(),fe(_o(w.icon),{key:0,class:"aero-menu__icon"})):W("",!0),u("span",l1,v(w.label),1)],10,s1)]),_:2},1032,["title"])):(d(),p("a",{key:1,class:Q(["aero-menu__item is-v",{"is-active":w.key===e.modelValue}]),href:w.href,role:"menuitem",onClick:Pe(T=>s(w),["prevent"])},[w.icon?(d(),fe(_o(w.icon),{key:0,class:"aero-menu__icon"})):W("",!0),u("span",n1,v(w.label),1)],10,r1))],64))),128))],64))),128))],64))],38))}}),c1=Z(i1,[["__scopeId","data-v-1fcd4147"]]),Xi=le(c1,"AeroMenu"),d1={class:"aero-mention"},u1=["value","placeholder"],p1=["onMousedown","onMousemove"],m1=z({__name:"mention",props:{modelValue:{},options:{},placeholder:{default:void 0},trigger:{default:"@"}},emits:["update:modelValue","select"],setup(e,{emit:o}){const{mention:t}=Y(),a=e,s=G(()=>a.placeholder??t.value.placeholder),l=o,r=C(),n=C(0),c=C(!1),f=C(""),m=C({left:"0px",top:"0px"}),h=C(-1),g=G(()=>a.options.filter(y=>y.label.toLowerCase().includes(f.value.toLowerCase())));function _(y){const w=y.target;l("update:modelValue",w.value),n.value=w.selectionStart??0,k(w)}function k(y){const w=(a.modelValue??y.value).slice(0,n.value),T=new RegExp(`${x(a.trigger)}([^\\s${x(a.trigger)}]*)$`).exec(w);if(T){f.value=T[1],c.value=!0,h.value=-1;const L=w.split(`
`),F=L[L.length-1];m.value={left:Math.min(12+F.length*8,360)+"px",top:(L.length-1)*24+30+"px"}}else c.value=!1}function x(y){return y.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function b(y){const w=r.value;if(!w)return;const T=w.value,L=T.slice(0,n.value),F=T.slice(n.value),V=new RegExp(`${x(a.trigger)}[^\\s${x(a.trigger)}]*$`).exec(L),E=`${a.trigger}${y.value} `,D=V?L.replace(V[0],E)+F:T;l("update:modelValue",D),l("select",y),c.value=!1,await Oe();const j=V?L.replace(V[0],E).length:T.length;w.focus(),w.setSelectionRange(j,j)}function $(y){if(!(!c.value||!g.value.length)){if(y.key==="Escape")return c.value=!1;if(y.key==="ArrowDown"||y.key==="ArrowUp"){y.preventDefault();const w=y.key==="ArrowDown"?1:-1;h.value=(h.value+w+g.value.length)%g.value.length}if(y.key==="Enter"){y.preventDefault();const w=g.value[h.value>=0?h.value:0];w&&b(w)}}}return(y,w)=>(d(),p("div",d1,[u("textarea",{ref_key:"ta",ref:r,class:"aero-mention__ta",value:e.modelValue,placeholder:s.value,rows:"3",onInput:_,onKeyup:w[0]||(w[0]=T=>n.value=T.target.selectionStart??0),onClick:w[1]||(w[1]=T=>n.value=T.target.selectionStart??0),onKeydown:$},null,40,u1),A(He,{name:"aero-mention"},{default:I(()=>[c.value&&g.value.length?(d(),p("ul",{key:0,class:"aero-mention__panel",style:me(m.value)},[(d(!0),p(q,null,X(g.value,(T,L)=>(d(),p("li",{key:T.value,class:Q({"is-kb":L===h.value}),onMousedown:Pe(F=>b(T),["prevent"]),onMousemove:F=>h.value=L},v(T.label),43,p1))),128))],4)):W("",!0)]),_:1})]))}}),f1=Z(m1,[["__scopeId","data-v-93ca32fa"]]),Zi=le(f1,"AeroMention"),h1={style:{margin:"0"}},v1=z({__name:"message-box-host",props:{open:{type:Boolean},opts:{}},emits:["update:open","confirm","cancel"],setup(e,{emit:o}){const{messageBox:t}=Y(),a=e,s=o;function l(){s("confirm"),s("update:open",!1)}function r(){s("cancel"),s("update:open",!1)}return(n,c)=>(d(),fe(Vi,{"model-value":a.open,title:a.opts.title??i(t).title,width:"420px","onUpdate:modelValue":c[0]||(c[0]=f=>s("update:open",f)),onClose:r},{footer:I(()=>[A(ba,{type:"ghost",size:"sm",onClick:r},{default:I(()=>[R(v(a.opts.cancelText),1)]),_:1}),A(ba,{type:a.opts.danger?"danger":"primary",size:"sm",onClick:l},{default:I(()=>[R(v(a.opts.confirmText),1)]),_:1},8,["type"])]),default:I(()=>[u("p",h1,v(a.opts.message),1)]),_:1},8,["model-value","title"]))}});function g1(){const e=document.createElement("div");document.body.appendChild(e);const o=C({open:!1,opts:{message:""},resolve:null});return Ts({setup(){return()=>zo(v1,{open:o.value.open,opts:o.value.opts,"onUpdate:open":a=>o.value.open=a,onConfirm:()=>{var a,s;(s=(a=o.value).resolve)==null||s.call(a,!0),o.value.resolve=null},onCancel:()=>{var a,s;(s=(a=o.value).resolve)==null||s.call(a,!1),o.value.resolve=null}})}}).mount(e),o}let Ns=null;function b1(){return Ns||(Ns=g1()),Ns}const Qi={confirm(e){const o=b1();return new Promise(t=>{o.value.opts={confirmText:Ro.messageBox.confirm,cancelText:Ro.messageBox.cancel,...e},o.value.resolve=t,o.value.open=!0})}},y1=z({__name:"motion-presets",props:{name:{},animated:{type:Boolean,default:!1},duration:{default:void 0}},setup(e){const o=e,t={pulse:{kf:"ui-mpulse 1.6s infinite",base:""},bounce:{kf:"ui-bounce-y 1.5s infinite",base:""},shake:{kf:"ui-shake-x 1.4s infinite",base:""},wiggle:{kf:"ui-wiggle 1.2s ease-in-out infinite",base:""},float:{kf:"ui-floaty 3.4s ease-in-out infinite",base:""},spin:{kf:"ui-spin 2.4s linear infinite",base:"border-radius:50%;border:3px solid var(--ui-line-2);border-top-color:var(--ui-brand)"}},a=G(()=>{if(!o.animated)return{};const s=t[o.name];return{animation:o.duration?s.kf.replace(/[\d.]+s/,o.duration):s.kf}});return(s,l)=>(d(),p("span",{class:Q(["aero-motion",`is-${e.name}`]),style:me(a.value)},[de(s.$slots,"default",{},void 0,!0)],6))}}),_1=Z(y1,[["__scopeId","data-v-85f97085"]]),Ji=le(_1,"AeroMotionPresets"),x1={class:"aero-noti-host"},k1={class:"aero-noti__ic",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w1=["d"],A1={class:"aero-noti__body"},$1={class:"aero-noti__title"},S1={key:0,class:"aero-noti__msg"},T1=["aria-label","onClick"],C1=z({__name:"notification-host",props:{list:{}},emits:["close"],setup(e,{emit:o}){const{notification:t}=Y(),a=o,s={success:"circle-check",error:"circle-x",warn:"triangle-alert",info:"bell"};return(l,r)=>(d(),fe(Gt,{to:"body"},[u("div",x1,[(d(!0),p(q,null,X(e.list,n=>(d(),p("div",{key:n.id,class:Q(["aero-noti",`is-${n.type??"info"}`]),role:"alert"},[(d(),p("svg",k1,[(d(!0),p(q,null,X(i(xe)[s[n.type??"info"]]??[],(c,f)=>(d(),p("path",{key:f,d:c},null,8,w1))),128))])),u("div",A1,[u("b",$1,v(n.title),1),n.message?(d(),p("p",S1,v(n.message),1)):W("",!0)]),u("button",{class:"aero-noti__close",type:"button","aria-label":i(t).closeAria,onClick:c=>a("close",n.id)},[...r[0]||(r[0]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})],-1)])],8,T1)],2))),128))])]))}});let na=null,B1=0;function L1(){if(na)return;const e=document.createElement("div");document.body.appendChild(e);const o=C([]);Ts({setup(){return()=>zo(C1,{list:o.value,onClose:t=>o.value=o.value.filter(a=>a.id!==t)})}}).mount(e),na=t=>o.value.push(t)}function jo(e){L1(),na==null||na({...e,id:++B1})}const Jo={success:(e,o)=>jo({type:"success",title:e,message:o}),error:(e,o)=>jo({type:"error",title:e,message:o}),warn:(e,o)=>jo({type:"warn",title:e,message:o}),info:(e,o)=>jo({type:"info",title:e,message:o}),show:e=>jo(e)},M1=["value","inputmode","disabled","aria-label","onInput","onKeydown"],P1=z({__name:"otp",props:{modelValue:{},length:{default:6},disabled:{type:Boolean,default:!1},numeric:{type:Boolean,default:!0}},emits:["update:modelValue","complete"],setup(e,{emit:o}){const{otp:t}=Y(),a=e,s=o,l=C();function r(){return(a.modelValue??"").slice(0,a.length).split("")}async function n(m,h){var b,$;const g=h.target;let _=g.value;a.numeric&&(_=_.replace(/\D/g,"")),g.value=_.slice(-1);const k=r();k[m]=g.value,k.join("").padEnd(a.length," ").trimEnd();const x=k.join("");s("update:modelValue",x),g.value&&m<a.length-1&&(await Oe(),($=(b=l.value)==null?void 0:b[m+1])==null||$.focus()),x.length===a.length&&!x.includes(" ")&&x&&s("complete",x)}async function c(m,h){var g,_,k,x,b,$;if(h.key==="Backspace"&&!r()[m]&&m>0){h.preventDefault();const y=r();y.splice(m-1,1),s("update:modelValue",y.join("")),await Oe(),(_=(g=l.value)==null?void 0:g[m-1])==null||_.focus()}h.key==="ArrowLeft"&&m>0&&((x=(k=l.value)==null?void 0:k[m-1])==null||x.focus()),h.key==="ArrowRight"&&m<a.length-1&&(($=(b=l.value)==null?void 0:b[m+1])==null||$.focus())}function f(m){var _;m.preventDefault();const g=(((_=m.clipboardData)==null?void 0:_.getData("text"))??"").replace(a.numeric?/\D/g:/\s/g,"").slice(0,a.length);s("update:modelValue",g),g.length===a.length&&s("complete",g)}return(m,h)=>(d(),p("div",{class:Q(["aero-otp",{"is-disabled":e.disabled}]),onPaste:f},[(d(!0),p(q,null,X(e.length,g=>(d(),p("input",{key:g,ref_for:!0,ref:_=>{_&&((l.value??(l.value=[]))[g-1]=_)},class:"aero-otp__cell",value:r()[g-1]??"",inputmode:e.numeric?"numeric":"text",disabled:e.disabled,maxlength:"1","aria-label":i(t).slotAria(g),autocomplete:"one-time-code",onInput:_=>n(g-1,_),onKeydown:_=>c(g-1,_)},null,40,M1))),128))],34))}}),I1=Z(P1,[["__scopeId","data-v-f810e0f0"]]),ec=le(I1,"AeroOTP"),D1={class:"aero-pghead"},V1=["aria-label"],z1={width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},E1=["d"],R1={class:"aero-pghead__main"},F1={class:"aero-pghead__title"},O1={key:0,class:"aero-pghead__sub"},H1={class:"aero-pghead__extra"},q1=z({__name:"page-header",props:{title:{},subtitle:{},back:{type:Boolean}},emits:["back"],setup(e,{emit:o}){const{pageHeader:t}=Y(),a=o;return(s,l)=>(d(),p("header",D1,[e.back?(d(),p("button",{key:0,class:"aero-pghead__back",type:"button","aria-label":i(t).backAria,onClick:l[0]||(l[0]=r=>a("back"))},[(d(),p("svg",z1,[(d(!0),p(q,null,X(i(xe)["arrow-left"],(r,n)=>(d(),p("path",{key:n,d:r},null,8,E1))),128))]))],8,V1)):W("",!0),u("div",R1,[u("h1",F1,v(e.title),1),e.subtitle?(d(),p("p",O1,v(e.subtitle),1)):W("",!0)]),u("div",H1,[de(s.$slots,"default",{},void 0,!0)])]))}}),N1=Z(q1,[["__scopeId","data-v-97072dc2"]]),tc=le(N1,"AeroPageHeader"),j1=["disabled","aria-label"],G1={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},U1=["d"],K1={key:0,class:"aero-pg__dots"},W1=["onClick"],Y1=["disabled","aria-label"],X1={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Z1=["d"],Q1={key:0,class:"aero-pg__jump"},J1=["aria-label","onKeydown"],ey=z({__name:"pagination",props:{modelValue:{},total:{},pageSize:{default:10},jumper:{type:Boolean,default:!0}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{pagination:t}=Y(),a=e,s=o,l=C(),r=C(0);let n;function c(){const b=l.value;if(!b)return;let $=b.parentElement;for(;$&&getComputedStyle($).display.startsWith("inline");)$=$.parentElement;$||($=b.parentElement??b),r.value=Math.min($.clientWidth,document.documentElement.clientWidth)}De(()=>{if(l.value){if(c(),typeof ResizeObserver<"u"){n=new ResizeObserver(c);let b=l.value.parentElement;for(;b&&getComputedStyle(b).display.startsWith("inline");)b=b.parentElement;b&&n.observe(b)}window.addEventListener("resize",c)}}),Le(()=>{n==null||n.disconnect(),window.removeEventListener("resize",c)});const f=G(()=>r.value>0&&r.value<480),m=G(()=>Math.max(1,Math.ceil(a.total/a.pageSize))),h=G(()=>Math.min(a.modelValue,m.value)),g=C("");be(h,()=>{var b;((b=document.activeElement)==null?void 0:b.tagName)!=="INPUT"&&(g.value="")});function _(){const b=g.value.trim();if(!b)return;let $=parseInt(b,10);Number.isNaN($)||($=Math.min(m.value,Math.max(1,$)),g.value="",x($))}const k=G(()=>{const b=h.value,$=m.value,y=[],w=T=>y.push(T);if(f.value||$<=5){if($<=5)for(let T=1;T<=$;T++)w(T);else w(1),b>2&&w("…"),b>1&&b<$&&w(b),b<$-1&&w("…"),w($);return y}w(1),b>3&&w("…");for(let T=Math.max(2,b-1);T<=Math.min($-1,b+1);T++)w(T);return b<$-2&&w("…"),w($),y});function x(b){b<1||b>m.value||b===h.value||(s("update:modelValue",b),s("change",b))}return(b,$)=>(d(),p("nav",{ref_key:"root",ref:l,class:Q(["aero-pg",{"is-compact":f.value}]),role:"navigation"},[u("button",{class:"aero-pg__btn aero-pg__arrow",type:"button",disabled:h.value<=1,"aria-label":i(t).prev,onClick:$[0]||($[0]=y=>x(h.value-1))},[(d(),p("svg",G1,[(d(!0),p(q,null,X(i(xe)["chevron-left"],(y,w)=>(d(),p("path",{key:w,d:y},null,8,U1))),128))]))],8,j1),(d(!0),p(q,null,X(k.value,(y,w)=>(d(),p(q,{key:w},[y==="…"?(d(),p("span",K1,"…")):(d(),p("button",{key:1,class:Q(["aero-pg__btn",{"is-active":y===h.value}]),type:"button",onClick:T=>x(y)},v(y),11,W1))],64))),128)),u("button",{class:"aero-pg__btn aero-pg__arrow",type:"button",disabled:h.value>=m.value,"aria-label":i(t).next,onClick:$[1]||($[1]=y=>x(h.value+1))},[(d(),p("svg",X1,[(d(!0),p(q,null,X(i(xe)["chevron-right"],(y,w)=>(d(),p("path",{key:w,d:y},null,8,Z1))),128))]))],8,Y1),e.jumper?(d(),p("span",Q1,[R(v(i(t).go)+" ",1),Bl(u("input",{"onUpdate:modelValue":$[2]||($[2]=y=>g.value=y),class:"aero-pg__jump-input",type:"text",inputmode:"numeric",autocomplete:"off","aria-label":i(t).jumpAria(m.value),onKeydown:Nt(Pe(_,["prevent"]),["enter"])},null,40,J1),[[Vl,g.value]]),f.value?W("",!0):(d(),p(q,{key:0},[R("/ ")],64)),R(v(m.value)+" "+v(i(t).page)+" ",1),u("button",{class:"aero-pg__jump-go",type:"button",onClick:_},v(i(t).confirm),1)])):W("",!0)],2))}}),ty=Z(ey,[["__scopeId","data-v-4730f88e"]]),oc=le(ty,"AeroPagination"),oy={style:{margin:"0 0 12px",color:"var(--ui-ink-2)","font-size":"13.5px"}},ay={style:{display:"flex","justify-content":"flex-end",gap:"8px"}},sy=z({__name:"popconfirm",props:{title:{default:void 0},confirmText:{default:void 0},cancelText:{default:void 0},danger:{type:Boolean,default:!1}},emits:["confirm","cancel"],setup(e,{emit:o}){const{popconfirm:t}=Y(),a=e,s=G(()=>a.title??t.value.title),l=G(()=>a.confirmText??t.value.confirm),r=G(()=>a.cancelText??t.value.cancel),n=o,c=C(!1);function f(){c.value=!1,n("confirm")}function m(){c.value=!1,n("cancel")}return(h,g)=>(d(),fe(Hl,{open:c.value,"onUpdate:open":g[0]||(g[0]=_=>c.value=_),trigger:"click",title:e.danger?i(t).dangerTitle:i(t).title,width:240},{content:I(()=>[u("p",oy,v(s.value),1),u("div",ay,[A(ba,{type:"ghost",size:"sm",onClick:m},{default:I(()=>[R(v(r.value),1)]),_:1}),A(ba,{type:e.danger?"danger":"primary",size:"sm",onClick:f},{default:I(()=>[R(v(l.value),1)]),_:1},8,["type"])])]),default:I(()=>[de(h.$slots,"default")]),_:3},8,["open","title"]))}}),fl=le(sy,"AeroPopconfirm"),as=le(Hl,"AeroPopover"),ly={class:"aero-progress"},ry={class:"aero-progress__track"},ny={key:0,class:"aero-progress__text"},iy=z({__name:"progress",props:{percent:{},shimmer:{type:Boolean,default:!0},status:{default:"normal"},showText:{type:Boolean,default:!0}},setup(e){const o=e,t=G(()=>Math.min(100,Math.max(0,o.percent))),a=G(()=>o.status==="success"?"var(--ui-ok)":o.status==="error"?"var(--ui-err)":"var(--ui-brand)");return(s,l)=>(d(),p("div",ly,[u("div",ry,[u("div",{class:Q(["aero-progress__bar",{"has-shimmer":e.shimmer&&e.status==="normal"}]),style:me({width:t.value+"%",background:a.value})},null,6)]),e.showText?(d(),p("span",ny,v(t.value)+"%",1)):W("",!0)]))}}),cy=Z(iy,[["__scopeId","data-v-0f2e1f4c"]]),Fa=le(cy,"AeroProgress"),ia=new Uint8Array(512),hl=new Uint8Array(256);(function(){let o=1;for(let t=0;t<255;t++)ia[t]=o,hl[o]=t,o<<=1,o&256&&(o^=285);for(let t=255;t<512;t++)ia[t]=ia[t-255]})();const ac=(e,o)=>e&&o?ia[hl[e]+hl[o]]:0,js={};function dy(e){if(!js[e]){let o=[1];for(let t=0;t<e;t++){const a=new Array(o.length+1).fill(0);for(let s=0;s<o.length;s++)a[s]^=o[s],a[s+1]^=ac(o[s],ia[t]);o=a}js[e]=o}return js[e]}function uy(e,o){const t=dy(o),a=[...e,...new Array(o).fill(0)];for(let s=0;s<e.length;s++){const l=a[s];if(l!==0)for(let r=1;r<t.length;r++)a[s+r]^=ac(t[r],l)}return a.slice(e.length)}const zr={L:[{total:26,ecPer:7,g1:1,d1:19,g2:0,d2:0},{total:44,ecPer:10,g1:1,d1:34,g2:0,d2:0},{total:70,ecPer:15,g1:1,d1:55,g2:0,d2:0},{total:100,ecPer:20,g1:1,d1:80,g2:0,d2:0},{total:134,ecPer:26,g1:1,d1:108,g2:0,d2:0},{total:172,ecPer:18,g1:2,d1:68,g2:0,d2:0},{total:196,ecPer:20,g1:2,d1:78,g2:0,d2:0},{total:242,ecPer:24,g1:2,d1:97,g2:0,d2:0},{total:292,ecPer:30,g1:2,d1:116,g2:0,d2:0},{total:346,ecPer:18,g1:2,d1:68,g2:2,d2:69}],M:[{total:26,ecPer:10,g1:1,d1:16,g2:0,d2:0},{total:44,ecPer:16,g1:1,d1:28,g2:0,d2:0},{total:70,ecPer:26,g1:1,d1:44,g2:0,d2:0},{total:100,ecPer:18,g1:2,d1:32,g2:0,d2:0},{total:134,ecPer:24,g1:2,d1:43,g2:0,d2:0},{total:172,ecPer:16,g1:4,d1:27,g2:0,d2:0},{total:196,ecPer:18,g1:4,d1:31,g2:0,d2:0},{total:242,ecPer:22,g1:2,d1:38,g2:2,d2:39},{total:292,ecPer:22,g1:3,d1:36,g2:2,d2:37},{total:346,ecPer:26,g1:4,d1:43,g2:1,d2:44}],Q:[{total:26,ecPer:13,g1:1,d1:13,g2:0,d2:0},{total:44,ecPer:22,g1:1,d1:22,g2:0,d2:0},{total:70,ecPer:18,g1:2,d1:17,g2:0,d2:0},{total:100,ecPer:26,g1:2,d1:24,g2:0,d2:0},{total:134,ecPer:18,g1:2,d1:15,g2:2,d2:16},{total:172,ecPer:24,g1:4,d1:19,g2:0,d2:0},{total:196,ecPer:18,g1:2,d1:14,g2:4,d2:15},{total:242,ecPer:22,g1:4,d1:18,g2:2,d2:19},{total:292,ecPer:20,g1:4,d1:16,g2:4,d2:17},{total:346,ecPer:24,g1:6,d1:19,g2:2,d2:20}],H:[{total:26,ecPer:17,g1:1,d1:9,g2:0,d2:0},{total:44,ecPer:28,g1:1,d1:16,g2:0,d2:0},{total:70,ecPer:22,g1:2,d1:13,g2:0,d2:0},{total:100,ecPer:16,g1:4,d1:9,g2:0,d2:0},{total:134,ecPer:22,g1:2,d1:11,g2:2,d2:12},{total:172,ecPer:28,g1:4,d1:15,g2:0,d2:0},{total:196,ecPer:26,g1:4,d1:13,g2:1,d2:14},{total:242,ecPer:26,g1:4,d1:14,g2:2,d2:15},{total:292,ecPer:24,g1:5,d1:12,g2:1,d2:13},{total:346,ecPer:28,g1:6,d1:15,g2:2,d2:16}]},Er={2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],7:[6,22,38],8:[6,24,42],9:[6,26,46],10:[6,28,50]},py={L:1,M:0,Q:3,H:2};function my(e,o,t){switch(e){case 0:return(o+t)%2===0;case 1:return o%2===0;case 2:return t%3===0;case 3:return(o+t)%3===0;case 4:return(Math.floor(o/2)+Math.floor(t/3))%2===0;case 5:return o*t%2+o*t%3===0;case 6:return(o*t%2+o*t%3)%2===0;default:return((o+t)%2+o*t%3)%2===0}}function fy(e,o){const t=py[e]<<3|o;let a=t<<10;for(let r=14;r>=10;r--)a>>r&1&&(a^=1335<<r-10);const s=(t<<10|a)^21522,l=[];for(let r=14;r>=0;r--)l.push((s>>r&1)===1);return l}function hy(e){let o=e<<12;for(let s=17;s>=12;s--)o>>s&1&&(o^=7973<<s-12);const t=e<<12|o,a=[];for(let s=17;s>=0;s--)a.push((t>>s&1)===1);return a}function Rr(e,o,t){const a=e.length,s=fy(o,t);for(let l=0;l<15;l++){const r=s[14-l],n=l<6?l:l<8?l+1:a-15+l,c=l<8?a-1-l:l<9?7:14-l;e[n][8]=r,e[8][c]=r}}function vy(e,o="M"){const t=new TextEncoder().encode(e);let a=1;for(;a<=10;){const S=zr[o][a-1],P=S.total-S.ecPer*(S.g1+S.g2);if(Math.ceil((4+(a<=9?8:16)+t.length*8)/8)<=P)break;a++}if(a>10)throw new Error("AeroQRCode: content exceeds version 10 capacity (~2.7KB)");const s=zr[o][a-1],l=s.g1+s.g2,r=s.total-s.ecPer*l;if(t.length>255&&a<=9)throw new Error("AeroQRCode: internal error (counter bit width)");const n=[],c=(S,P)=>{for(let K=P-1;K>=0;K--)n.push((S>>K&1)===1)};c(4,4),c(t.length,a<=9?8:16);for(const S of t)c(S,8);const f=Math.min(4,r*8-n.length);for(f>0&&c(0,f);n.length%8;)n.push(!1);const m=[];for(let S=0;S<n.length;S+=8){let P=0;for(let K=0;K<8;K++)n[S+K]&&(P|=1<<7-K);m.push(P)}for(let S=0;m.length<r;S++)m.push(S%2===0?236:17);const h=[];{let S=0;for(let P=0;P<l;P++){const K=P<s.g1?s.d1:s.d2;h.push(m.slice(S,S+K)),S+=K}}const g=h.map(S=>uy(S,s.ecPer)),_=Math.max(s.d1,s.d2),k=[];for(let S=0;S<_;S++)for(const P of h)S<P.length&&k.push(P[S]);for(let S=0;S<s.ecPer;S++)for(const P of g)k.push(P[S]);const x=[];for(const S of k)for(let P=7;P>=0;P--)x.push((S>>P&1)===1);const b=17+4*a,$=()=>Array.from({length:b},()=>Array(b).fill(!1)),y=$(),w=$(),T=(S,P,K)=>{S<0||P<0||S>=b||P>=b||(y[S][P]=K,w[S][P]=!0)},L=(S,P)=>{for(let K=-1;K<=7;K++)for(let U=-1;U<=7;U++){const oe=K>=0&&K<=6&&U>=0&&U<=6&&(K===0||K===6||U===0||U===6||K>=2&&K<=4&&U>=2&&U<=4);T(S+K,P+U,oe)}};L(0,0),L(0,b-7),L(b-7,0);for(let S=8;S<b-8;S++)T(6,S,S%2===0),T(S,6,S%2===0);if(a>=2){for(const S of Er[a])for(const P of Er[a])if(!(S<=8&&P<=8||S<=8&&P>=b-9||S>=b-9&&P<=8))for(let K=-2;K<=2;K++)for(let U=-2;U<=2;U++)T(S+K,P+U,Math.max(Math.abs(K),Math.abs(U))!==1)}T(b-8,8,!0);for(let S=0;S<=8;S++)S!==6&&(w[8][S]=!0,w[S][8]=!0);for(let S=0;S<8;S++)w[8][b-1-S]=!0,w[b-1-S][8]=!0;if(a>=7)for(let S=0;S<6;S++)for(let P=b-11;P<b-8;P++)w[S][P]=!0,w[P][S]=!0;{let S=0;const P=x.length;for(let K=b-1;K>=1;K-=2){K===6&&(K=5);for(let U=0;U<b;U++){const O=K%4===0?b-1-U:U;for(let N=0;N<2;N++){const J=K-N;J<0||w[O][J]||(y[O][J]=S<P?x[S++]:!1)}}}}const F=S=>{const P=y.map(K=>K.slice());for(let K=0;K<b;K++)for(let U=0;U<b;U++)!w[K][U]&&my(S,K,U)&&(P[K][U]=!P[K][U]);return P},V=S=>{let P=0;const K=O=>{for(let N=0;N<b;N++){let J=1;for(let ue=1;ue<b;ue++)O(N,ue)===O(N,ue-1)?J++:(J>=5&&(P+=3+(J-5)),J=1);J>=5&&(P+=3+(J-5))}};K((O,N)=>S[O][N]),K((O,N)=>S[N][O]);for(let O=0;O<b-1;O++)for(let N=0;N<b-1;N++){const J=S[O][N];J===S[O][N+1]&&J===S[O+1][N]&&J===S[O+1][N+1]&&(P+=3)}for(let O=0;O<b;O++){let N=0,J=0;for(let ue=0;ue<b;ue++)N=N<<1&2047|(S[O][ue]?1:0),ue>=10&&(N===1488||N===93)&&(P+=40),J=J<<1&2047|(S[ue][O]?1:0),ue>=10&&(J===1488||J===93)&&(P+=40)}let U=0;for(const O of S)for(const N of O)N&&U++;const oe=Math.abs(Math.ceil(U*100/(b*b)/5)-10);return P+=oe*10,P};let E=0,D=1/0;for(let S=0;S<8;S++){const P=F(S);Rr(P,o,S);const K=V(P);K<D&&(D=K,E=S)}const j=F(E);if(Rr(j,o,E),j[b-8][8]=!0,a>=7){const S=hy(a);for(let P=0;P<18;P++){const K=Math.floor(P/3),U=P%3+b-11,oe=S[17-P];j[K][U]=oe,j[U][K]=oe}}return j}const gy=["width","height","viewBox","aria-label"],by=["fill"],yy=["x","y","width","height","fill"],_y=z({__name:"qrcode",props:{value:{},size:{default:160},margin:{default:2},fg:{default:""},bg:{default:"transparent"},level:{default:"M"}},setup(e){const{qrcode:o}=Y(),t=e,a=C("#000000");function s(){const m=getComputedStyle(document.documentElement).getPropertyValue("--ui-ink").trim();m&&(a.value=m)}const l=G(()=>t.fg||a.value);De(()=>{s();const m=new MutationObserver(s);m.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),Le(()=>m.disconnect())}),be(()=>document.documentElement.getAttribute("data-preset"),s);const r=G(()=>vy(t.value,t.level)),n=G(()=>r.value.length),c=G(()=>Math.floor(t.size/(n.value+t.margin*2))),f=G(()=>c.value*(n.value+t.margin*2));return(m,h)=>(d(),p("svg",{class:"aero-qr",width:f.value,height:f.value,viewBox:`0 0 ${f.value} ${f.value}`,role:"img","aria-label":i(o).aria(e.value),"shape-rendering":"crispEdges"},[u("rect",{width:"100%",height:"100%",fill:e.bg},null,8,by),(d(!0),p(q,null,X(r.value,(g,_)=>(d(),p(q,{key:_},[(d(!0),p(q,null,X(g,(k,x)=>(d(),p(q,{key:x},[k?(d(),p("rect",{key:0,x:(x+e.margin)*c.value,y:(_+e.margin)*c.value,width:c.value,height:c.value,fill:l.value},null,8,yy)):W("",!0)],64))),128))],64))),128))],8,gy))}}),xy=Z(_y,[["__scopeId","data-v-d8849252"]]),sc=le(xy,"AeroQRCode"),ky=["checked","disabled"],wy={class:"aero-radio__label"},Ay=z({__name:"radio",props:ko({disabled:{type:Boolean,default:!1},value:{}},{modelValue:{type:[Boolean,String,Number],default:!1},modelModifiers:{}}),emits:ko(["change"],["update:modelValue"]),setup(e,{emit:o}){const t=e,a=ks(e,"modelValue"),s=o,l=yo("AeroRadioGroup",null),r=G(()=>!!l),n=G(()=>r.value?l.value.value===t.value:!!a.value),c=G(()=>t.disabled||(l==null?void 0:l.disabled.value));function f(){c.value||n.value||(r.value?l.pick(t.value):(a.value=t.value,s("change",t.value)))}return(m,h)=>(d(),p("label",{class:Q(["aero-radio",{"is-disabled":c.value,"is-checked":n.value}]),onClick:f},[u("input",{type:"radio",class:"aero-radio__input",checked:n.value,disabled:c.value,tabindex:"-1",onClick:h[0]||(h[0]=Pe(()=>{},["stop","prevent"]))},null,8,ky),h[1]||(h[1]=u("span",{class:"aero-radio__box"},[u("i",{class:"aero-radio__dot"})],-1)),u("span",wy,[de(m.$slots,"default",{},void 0,!0)])],2))}}),$y=Z(Ay,[["__scopeId","data-v-fbd771e9"]]),ea=le($y,"AeroRadio"),Sy={class:"aero-radio-group",role:"radiogroup"},Ty=z({__name:"radio-group",props:{modelValue:{},disabled:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:o}){const t=e,a=o;return xo("AeroRadioGroup",{value:G(()=>t.modelValue),disabled:G(()=>!!t.disabled),pick(s){a("update:modelValue",s),a("change",s)}}),(s,l)=>(d(),p("div",Sy,[de(s.$slots,"default",{},void 0,!0)]))}}),Cy=Z(Ty,[["__scopeId","data-v-fc5acdb6"]]),lc=le(Cy,"AeroRadioGroup"),By=["aria-valuenow","aria-valuemin","aria-valuemax"],Ly=["disabled","aria-label","onMouseenter","onMousemove","onClick"],My=z({__name:"rate",props:{modelValue:{default:0},count:{default:5},disabled:{type:Boolean,default:!1},animate:{type:Boolean,default:!0},confetti:{type:Boolean,default:!0},allowDecimal:{type:Boolean,default:!1},allowReselect:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{rate:t}=Y(),a=e,s=o,l=C(0),r=C(!1),n=C(!1),c=G(()=>!a.allowReselect&&n.value),f=G(()=>l.value||a.modelValue);function m(y){return a.allowDecimal?Math.min(1,Math.max(0,Math.round((f.value-(y-1))*10)/10)):y<=f.value?1:0}function h(y){const T=y.currentTarget.getBoundingClientRect(),L=(y.clientX-T.left)/T.width;return Math.min(1,Math.max(0,L))}function g(y){return a.allowDecimal?Math.min(a.count,Math.max(0,Math.round(y*10)/10)):y}function _(y,w){a.disabled||!a.allowReselect&&n.value||(s("update:modelValue",y),s("change",y),a.allowReselect||(n.value=!0),a.animate&&(r.value=!1,requestAnimationFrame(()=>r.value=!0)),a.confetti&&nl(w.clientX,w.clientY))}function k(y,w){if(!(a.disabled||!a.allowReselect&&n.value)){if(!a.allowDecimal){l.value=w;return}l.value=w-1+h(y)}}function x(y,w){!a.allowDecimal||a.disabled||!a.allowReselect&&n.value||(l.value=w-1+h(y))}function b(y,w){if(a.disabled||!a.allowReselect&&n.value)return;if(!a.allowDecimal){_(w,y);return}const T=g(w-1+h(y));s("update:modelValue",T),s("change",T),a.allowReselect||(n.value=!0),a.animate&&(r.value=!1,requestAnimationFrame(()=>r.value=!0)),a.confetti&&nl(y.clientX,y.clientY)}function $(y){if(!a.allowDecimal||a.disabled||!a.allowReselect&&n.value)return;let w=0;if(y.key==="ArrowRight"||y.key==="ArrowUp")w=1;else if(y.key==="ArrowLeft"||y.key==="ArrowDown")w=-1;else return;y.preventDefault();const T=g(f.value+w*.1);s("update:modelValue",T),s("change",T),a.allowReselect||(n.value=!0)}return(y,w)=>(d(),p("span",{class:Q(["aero-rate",{"is-disabled":e.disabled,"is-done":r.value}]),"aria-valuenow":e.allowDecimal?+f.value.toFixed(1):void 0,"aria-valuemin":e.allowDecimal?0:void 0,"aria-valuemax":e.allowDecimal?e.count:void 0,onMouseleave:w[0]||(w[0]=T=>l.value=0),onKeydown:$},[(d(!0),p(q,null,X(e.count,T=>(d(),p("button",{key:T,type:"button",class:Q(["aero-rate__star",{"is-on":!e.allowDecimal&&T<=f.value,"is-locked":c.value}]),style:me(c.value?{cursor:"default"}:void 0),disabled:e.disabled,"aria-label":i(t).starAria(T),onMouseenter:L=>k(L,T),onMousemove:L=>x(L,T),onClick:L=>b(L,T)},[w[2]||(w[2]=u("svg",{width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linejoin":"round"},[u("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16Z"})],-1)),e.allowDecimal&&m(T)>0?(d(),p("span",{key:0,class:"aero-rate__fill",style:me({width:m(T)*100+"%"}),"aria-hidden":"true"},[...w[1]||(w[1]=[u("svg",{width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linejoin":"round"},[u("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16Z"})],-1)])],4)):W("",!0)],46,Ly))),128))],42,By))}}),Py=Z(My,[["__scopeId","data-v-e5a701a7"]]),vl=le(Py,"AeroRate"),Iy={class:"aero-result__badge"},Dy={width:"42",height:"42",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},Vy=["d"],zy={class:"aero-result__title"},Ey={key:0,class:"aero-result__desc"},Ry={class:"aero-result__extra"},Fy=z({__name:"result",props:{status:{default:"info"},title:{},desc:{}},setup(e){const o=e,t=G(()=>a[o.status]??"info"),a={success:"circle-check",error:"circle-x",warn:"triangle-alert",info:"info"};return(s,l)=>(d(),p("div",{class:Q(["aero-result",`is-${s.$props.status}`])},[u("span",Iy,[(d(),p("svg",Dy,[(d(!0),p(q,null,X(i(xe)[t.value]??[],(r,n)=>(d(),p("path",{key:n,d:r},null,8,Vy))),128))]))]),u("h3",zy,v(e.title),1),e.desc?(d(),p("p",Ey,v(e.desc),1)):W("",!0),u("div",Ry,[de(s.$slots,"default",{},void 0,!0)])],2))}}),Oy=Z(Fy,[["__scopeId","data-v-85ef23aa"]]),gl=le(Oy,"AeroResult"),Hy=["width","height","viewBox"],qy=["cx","cy","r","stroke-width"],Ny=["cx","cy","r","stroke-width","stroke-dashoffset"],jy={class:"aero-ring__num"},Gy={key:0},Uy=z({__name:"ring-progress",props:{percent:{},label:{},sublabel:{},width:{default:130},size:{default:130},stroke:{default:11}},setup(e){const o=e,t=2*Math.PI*(o.size/2-o.stroke),a=G(()=>Math.min(100,Math.max(0,o.percent))),s=G(()=>t-t*a.value/100);return(l,r)=>(d(),p("div",{class:"aero-ring",style:me({width:e.size+"px",height:e.size+"px"})},[(d(),p("svg",{width:e.size,height:e.size,viewBox:`0 0 ${e.size} ${e.size}`},[u("circle",{class:"aero-ring__bg",cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke,"stroke-width":e.stroke},null,8,qy),u("circle",{class:"aero-ring__fg",cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke,"stroke-width":e.stroke,"stroke-dasharray":t,"stroke-dashoffset":s.value},null,8,Ny)],8,Hy)),u("div",jy,[u("b",null,v(e.label??a.value+"%"),1),e.sublabel?(d(),p("small",Gy,v(e.sublabel),1)):W("",!0)])],4))}}),Ky=Z(Uy,[["__scopeId","data-v-9b695f2e"]]),rc=le(Ky,"AeroRingProgress"),Wy={class:"aero-scrollbar__view"},Yy=z({__name:"scrollbar",props:{maxHeight:{default:260}},setup(e){return(o,t)=>(d(),p("div",{class:"aero-scrollbar",style:me({maxHeight:typeof e.maxHeight=="number"?e.maxHeight+"px":e.maxHeight})},[u("div",Wy,[de(o.$slots,"default",{},void 0,!0)])],4))}}),Xy=Z(Yy,[["__scopeId","data-v-fbe03ff0"]]),nc=le(Xy,"AeroScrollbar"),Zy=["disabled","aria-checked","onClick"],Qy=z({__name:"segmented",props:{modelValue:{},options:{},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:o}){const t=e,a=o;function s(m){m.disabled||t.disabled||(a("update:modelValue",m.value),a("change",m.value))}const l=C(),r=C({left:"0px",width:"0px"}),n=G(()=>t.options.findIndex(m=>m.value===t.modelValue));function c(){const m=l.value;if(!m)return;const g=m.querySelectorAll(".aero-seg__item")[n.value];g?r.value={left:g.offsetLeft+"px",width:g.offsetWidth+"px"}:r.value={left:"0px",width:"0px"}}let f=null;return be([n,()=>t.options.length],()=>Oe(c)),De(()=>{Oe(c),f=new ResizeObserver(()=>c()),l.value&&f.observe(l.value)}),Le(()=>f==null?void 0:f.disconnect()),(m,h)=>(d(),p("div",{ref_key:"root",ref:l,class:Q(["aero-seg",{"is-block":e.block,"is-disabled":e.disabled}]),role:"radiogroup"},[u("span",{class:"aero-seg__pill",style:me(r.value)},null,4),(d(!0),p(q,null,X(e.options,g=>(d(),p("button",{key:g.value,type:"button",class:Q(["aero-seg__item",{"is-on":g.value===e.modelValue,"is-off":g.disabled}]),disabled:g.disabled||e.disabled,role:"radio","aria-checked":g.value===e.modelValue,onClick:_=>s(g)},[de(m.$slots,"default",{option:g},()=>[R(v(g.label),1)],!0)],10,Zy))),128))],2))}}),Jy=Z(Qy,[["__scopeId","data-v-08102393"]]),ss=le(Jy,"AeroSegmented"),e0=["disabled"],t0=["aria-label"],o0=["aria-selected","onClick","onMousemove"],a0={key:0,width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},s0=z({__name:"select",props:{modelValue:{},options:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},emits:["update:modelValue","change","focus","blur"],setup(e,{emit:o}){const{select:t}=Y(),a=e,s=G(()=>a.placeholder??t.value.placeholder),l=o,r=C(),n=C(!1),c=()=>n.value=!1,f=()=>n.value=!n.value;Kt(()=>r.value,()=>c());const m=C(-1),h=G(()=>a.options.find(b=>b.value===a.modelValue));function g(b){b.disabled||(l("update:modelValue",b.value),l("change",b.value),c())}function _(b){b.stopPropagation(),l("update:modelValue",void 0),l("change",void 0),c()}async function k(){a.disabled||(f(),m.value=-1,n.value&&await Oe())}function x(b){var $;if(!n.value){(b.key==="Enter"||b.key==="ArrowDown")&&k();return}if(b.key==="Escape")return c();if(b.key==="ArrowDown"||b.key==="ArrowUp"){b.preventDefault();const y=b.key==="ArrowDown"?1:-1;let w=m.value;do w=(w+y+a.options.length)%a.options.length;while(($=a.options[w])!=null&&$.disabled&&w!==m.value);m.value=w}if(b.key==="Enter"&&m.value>=0){const y=a.options[m.value];y&&g(y)}}return(b,$)=>{var y;return d(),p("div",{ref_key:"root",ref:r,class:Q(["aero-select",{"is-open":n.value,"is-disabled":e.disabled}]),onKeydown:x},[u("button",{class:"aero-select__btn",type:"button",disabled:e.disabled,onClick:k,onFocus:$[0]||($[0]=w=>l("focus",w)),onBlur:$[1]||($[1]=w=>l("blur",w))},[u("span",{class:Q(["aero-select__label",{"is-placeholder":!h.value}])},v(((y=h.value)==null?void 0:y.label)??s.value),3),e.clearable&&h.value?(d(),p("span",{key:0,class:"aero-select__clear",onClick:_},[...$[2]||($[2]=[u("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})],-1)])])):W("",!0),$[3]||($[3]=u("svg",{class:"aero-select__chev",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"m6 9 6 6 6-6"})],-1))],40,e0),A(He,{name:"aero-select"},{default:I(()=>[n.value?(d(),p("ul",{key:0,class:"aero-select__menu",role:"listbox","aria-label":e.placeholder},[(d(!0),p(q,null,X(e.options,(w,T)=>(d(),p("li",{key:w.value,class:Q(["aero-select__opt",{"is-sel":w.value===e.modelValue,"is-kb":T===m.value,"is-disabled":w.disabled}]),role:"option","aria-selected":w.value===e.modelValue,onClick:L=>g(w),onMousemove:L=>m.value=T},[u("span",null,v(w.label),1),w.value===e.modelValue?(d(),p("svg",a0,[...$[4]||($[4]=[u("path",{d:"M20 6 9 12l-5 5"},null,-1)])])):W("",!0)],42,o0))),128))],8,t0)):W("",!0)]),_:1})],34)}}}),l0=Z(s0,[["__scopeId","data-v-4f0b6f27"]]),ic=le(l0,"AeroSelect"),r0=z({__name:"skeleton",props:{variant:{default:"text"},height:{default:12},width:{},loading:{type:Boolean,default:!0},animated:{type:Boolean,default:!0}},setup(e){const o=e,t=G(()=>o.variant==="text"&&!o.width?{width:"100%"}:void 0);return(a,s)=>e.loading?(d(),p("span",{key:1,class:Q(["aero-skeleton",[`aero-skeleton--${e.variant}`,{"is-animated":e.animated}]]),style:me([{width:e.variant!=="circle"?e.width??"100%":void 0,height:e.height+""},t.value])},null,6)):de(a.$slots,"default",{},void 0,!0,0)}}),n0=Z(r0,[["__scopeId","data-v-7fbdc91f"]]),$t=le(n0,"AeroSkeleton"),i0={class:"aero-slider__bubble"},c0=["min","max","step","value","disabled"],d0={key:0,class:"aero-slider__scale"},u0={key:0,class:"aero-slider__cap"},p0={class:"aero-slider__val"},m0=z({__name:"slider",props:{modelValue:{default:0},min:{default:0},max:{default:100},step:{default:1},disabled:{type:Boolean,default:!1},showScale:{type:Boolean,default:!0},startLabel:{},endLabel:{},unit:{default:""}},emits:["update:modelValue","change","focus","blur"],setup(e,{emit:o}){const t=e,a=o,s=C(!1),l=G(()=>{const f=(t.modelValue-t.min)/(t.max-t.min)*100;return Math.min(100,Math.max(0,f))}),r=G(()=>({"--fill":`${l.value}%`}));function n(f){const m=Number(f.target.value);a("update:modelValue",m)}function c(f){const m=Number(f.target.value);a("change",m)}return(f,m)=>(d(),p("div",{class:Q(["aero-slider",{"is-disabled":e.disabled,"is-drag":s.value}])},[u("div",{class:"aero-slider__wrap",style:me(r.value)},[u("output",i0,v(e.modelValue)+v(e.unit),1),u("input",{class:"aero-slider__range",type:"range",min:e.min,max:e.max,step:e.step,value:e.modelValue,disabled:e.disabled,onInput:n,onChange:c,onFocus:m[0]||(m[0]=h=>a("focus",h)),onBlur:m[1]||(m[1]=h=>a("blur",h)),onPointerdown:m[2]||(m[2]=h=>s.value=!0),onPointerup:m[3]||(m[3]=h=>s.value=!1)},null,40,c0),e.showScale?(d(),p("div",d0,[(d(),p(q,null,X(21,h=>u("i",{key:h})),64))])):W("",!0)],4),e.startLabel||e.endLabel?(d(),p("div",u0,[u("span",null,v(e.startLabel),1),u("span",p0,v(e.modelValue)+v(e.unit),1),u("span",null,v(e.endLabel),1)])):W("",!0)],2))}}),f0=Z(m0,[["__scopeId","data-v-9b1e8339"]]),wa=le(f0,"AeroSlider"),h0=z({__name:"space",props:{gap:{default:14},direction:{default:"horizontal"},justify:{},align:{},wrap:{type:Boolean,default:!0}},setup(e){const o=e,t=fa(),a=G(()=>({gap:`${o.gap}px`,flexDirection:o.direction==="vertical"?"column":"row",justifyContent:o.justify?o.justify==="between"?"space-between":o.justify==="around"?"space-around":`flex-${o.justify}`:"",alignItems:o.align?o.align==="start"||o.align==="end"?`flex-${o.align}`:o.align:"",flexWrap:o.wrap?"wrap":"nowrap"})),s=G(()=>{var l;return(((l=t.default)==null?void 0:l.call(t))??[]).filter(r=>r.type!==Comment)});return(l,r)=>(d(),p("div",{class:"aero-space",style:me(a.value)},[(d(!0),p(q,null,X(s.value,(n,c)=>(d(),fe(_o(n),{key:c,class:"aero-space__item"}))),128))],4))}}),v0=Z(h0,[["__scopeId","data-v-f3130f9a"]]),Bo=le(v0,"AeroSpace"),g0={class:"aero-search__box"},b0=["value","placeholder","disabled"],y0=["aria-label"],_0={class:"aero-search__group"},x0=["data-key","onMouseenter","onClick"],k0=["innerHTML"],w0=["innerHTML"],A0=["data-key","onMouseenter","onClick"],$0=["innerHTML"],S0=["innerHTML"],T0={key:2,class:"aero-search__empty"},C0=z({__name:"search",props:{options:{},placeholder:{default:void 0},limit:{default:12},emptyText:{default:void 0},disabled:{type:Boolean,default:!1},groupBy:{},showOptionDesc:{type:Boolean,default:!1}},emits:["select","search","clear"],setup(e,{emit:o}){const{search:t}=Y(),a=e,s=G(()=>a.placeholder??t.value.placeholder),l=G(()=>a.emptyText??t.value.empty),r=o,n=C(!1),c=C(0),f=C(null),m=C("");function h(D,j){const S=D.toLowerCase(),P=j.toLowerCase();if(!S)return{score:0,hits:[]};let K=0;const U=[];let oe=-2;for(let N=0;N<S.length;N++){const J=S[N];let ue=-1;const Ae=Math.min(P.length,oe+4);for(let we=Math.max(0,oe+1);we<Ae;we++)if(P[we]===J){ue=we;break}if(ue<0){for(let we=Ae;we<P.length;we++)if(P[we]===J){ue=we;break}}if(ue<0)return null;let ke=1;ue===oe+1&&(ke=2),(ue===0||/[\s\-_/.]/.test(P[ue-1]??""))&&(ke=3),K+=ke,U.push(ue),oe=ue}const O=Math.min(1,P.length/24/S.length);return{score:K/S.length*(1-O*.3),hits:U}}const g=G(()=>{const D=m.value.trim();if(!D)return a.options.map(S=>({opt:S,score:0,labelHits:[],descHits:[]}));const j=a.options.map(S=>{const P=String(S.label)?h(D,String(S.label)):null,K=S.description?h(D,String(S.description)):null,U=P??K;return U?{opt:S,score:U.score,labelHits:P?P.hits:[],descHits:K?K.hits:[]}:null}).filter(S=>S!==null);return j.sort((S,P)=>P.score-S.score||String(S.opt.label).localeCompare(String(P.opt.label))),j.slice(0,a.limit)}),_=G(()=>m.value.trim()?g.value.map(j=>({...j,main:String(j.opt.label),sub:j.opt.description?String(j.opt.description):""})):a.options.slice(0,a.limit).map(j=>({opt:j,main:String(j.label),sub:"",labelHits:[],descHits:[]})));function k(D){requestAnimationFrame(()=>{var P;const j=_.value[D];if(!j)return;const S=(P=f.value)==null?void 0:P.querySelector(`[data-key="${j.opt.value}"]`);S==null||S.scrollIntoView({block:"nearest"})})}function x(D){if(D.key==="ArrowDown")D.preventDefault(),c.value=(c.value+1)%Math.max(1,_.value.length),k(c.value);else if(D.key==="ArrowUp")D.preventDefault(),c.value=(c.value-1+_.value.length)%Math.max(1,_.value.length),k(c.value);else if(D.key==="Enter"){D.preventDefault();const j=_.value[c.value];j&&b(j)}else D.key==="Escape"&&(n.value=!1,D.target.blur())}function b(D){r("select",D.opt),n.value=!1,m.value=""}function $(){m.value="",c.value=0,r("clear")}be(m,D=>{c.value=0,n.value=D.trim().length>0,r("search",D.trim(),g.value.map(j=>j.opt))});const y=G(()=>!!a.groupBy),w=G(()=>t.value.other),T=G(()=>{if(!y.value||!_.value.length)return[];const D=new Map,j=w.value;for(const S of _.value){const P=a.groupBy==="description"?S.opt.description?String(S.opt.description):j:String(S.opt[a.groupBy]??j);(D.get(P)??D.set(P,[]).get(P)).push(S)}return[...D.entries()]});function L(D,j){let S="",P=0;for(const K of j)K<P||K>=D.length||(S+=E(D.slice(P,K))+"<mark>"+E(D[K])+"</mark>",P=K+1);return S+=E(D.slice(P)),S}function F(D){return L(D.main,D.labelHits)}function V(D){return L(D.sub,D.descHits)}function E(D){return D.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}return(D,j)=>(d(),p("div",{class:Q(["aero-search",{"is-open":n.value,"is-disabled":e.disabled}])},[u("div",g0,[A(i(We),{name:"search",size:16,class:"aero-search__icon"}),u("input",{class:"aero-search__input",value:m.value,placeholder:s.value,disabled:e.disabled,autocomplete:"off",spellcheck:"false",onInput:j[0]||(j[0]=S=>m.value=S.target.value),onFocus:j[1]||(j[1]=S=>n.value=!0),onKeydown:x},null,40,b0),m.value&&!e.disabled?(d(),p("button",{key:0,type:"button",class:"aero-search__clear","aria-label":i(t).clearAria,onMousedown:j[2]||(j[2]=Pe(()=>{},["stop"])),onClick:$},[A(i(We),{name:"x",size:13})],40,y0)):W("",!0)]),A(He,{name:"aero-search"},{default:I(()=>[n.value?(d(),p("ul",{key:0,ref_key:"listRef",ref:f,class:"aero-search__list"},[y.value?(d(!0),p(q,{key:0},X(T.value,([S,P])=>(d(),p(q,{key:S},[u("li",_0,v(S),1),(d(!0),p(q,null,X(P,K=>(d(),p("li",{key:String(K.opt.value),"data-key":String(K.opt.value),class:Q(["aero-search__item",{"is-focus":_.value.indexOf(K)===c.value}]),onMouseenter:U=>c.value=_.value.indexOf(K),onClick:U=>b(K)},[u("span",{innerHTML:F(K)},null,8,k0),e.showOptionDesc&&K.sub?(d(),p("span",{key:0,class:"aero-search__sub",innerHTML:V(K)},null,8,w0)):W("",!0)],42,x0))),128))],64))),128)):(d(!0),p(q,{key:1},X(_.value,(S,P)=>(d(),p("li",{key:String(S.opt.value),"data-key":String(S.opt.value),class:Q(["aero-search__item",{"is-focus":P===c.value}]),onMouseenter:K=>c.value=P,onClick:K=>b(S)},[u("span",{innerHTML:F(S)},null,8,$0),e.showOptionDesc&&S.sub?(d(),p("span",{key:0,class:"aero-search__sub",innerHTML:V(S)},null,8,S0)):W("",!0)],42,A0))),128)),_.value.length===0?(d(),p("li",T0,v(l.value),1)):W("",!0)],512)):W("",!0)]),_:1})],2))}}),B0=Z(C0,[["__scopeId","data-v-c8c56797"]]),ql=le(B0,"AeroSearch"),L0=["aria-label"],M0=z({__name:"spinner",props:{size:{default:"md"}},setup(e){const{common:o}=Y();return(t,a)=>(d(),p("span",{class:Q(["aero-spinner",`aero-spinner--${t.$props.size}`]),role:"status","aria-label":i(o).loading},null,10,L0))}}),P0=Z(M0,[["__scopeId","data-v-1469ab62"]]),Oa=le(P0,"AeroSpinner"),I0={class:"aero-stat"},D0={class:"aero-stat__num"},V0={key:0,class:"aero-stat__label"},z0=z({__name:"statistic",props:{value:{},prefix:{},suffix:{},label:{},animated:{type:Boolean,default:!0}},setup(e){const o=e,{text:t}=Wp(()=>o.value),a=G(()=>o.animated?t():o.value.toLocaleString("zh-CN"));return(s,l)=>(d(),p("div",I0,[u("b",D0,v(o.prefix)+v(a.value)+v(o.suffix),1),e.label?(d(),p("span",V0,v(e.label),1)):W("",!0)]))}}),E0=Z(z0,[["__scopeId","data-v-9ca9acf6"]]),Ha=le(E0,"AeroStatistic"),R0={class:"aero-steps"},F0=["onClick","onKeydown"],O0={class:"aero-step__num"},H0={key:0,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},q0={class:"aero-step__txt"},N0={key:0},j0=z({__name:"steps",props:{items:{},current:{}},emits:["change"],setup(e,{emit:o}){const t=o;return(a,s)=>(d(),p("div",R0,[(d(!0),p(q,null,X(e.items,(l,r)=>(d(),p("div",{key:r,class:Q(["aero-step",{"is-done":r<e.current,"is-active":r===e.current}]),role:"button",tabindex:"0",onClick:n=>t("change",r),onKeydown:Nt(n=>t("change",r),["enter"])},[u("i",O0,[r<e.current?(d(),p("svg",H0,[...s[0]||(s[0]=[u("path",{d:"M20 6 9 12l-5 5"},null,-1)])])):(d(),p(q,{key:1},[R(v(r+1),1)],64))]),u("div",q0,[u("b",null,v(l.title),1),l.desc?(d(),p("span",N0,v(l.desc),1)):W("",!0)])],42,F0))),128))]))}}),G0=Z(j0,[["__scopeId","data-v-960d73ff"]]),cc=le(G0,"AeroSteps"),U0=["checked","disabled"],K0={key:0,class:"aero-switch__label"},W0=z({__name:"switch",props:ko({disabled:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:ko(["change","focus","blur"],["update:modelValue"]),setup(e,{emit:o}){const t=ks(e,"modelValue"),a=o;function s(){t.value=!t.value,a("change",t.value)}return(l,r)=>(d(),p("label",{class:Q(["aero-switch",{"is-disabled":e.disabled}])},[u("input",{class:"aero-switch__input",type:"checkbox",checked:t.value,disabled:e.disabled,onChange:s,onFocus:r[0]||(r[0]=n=>a("focus",n)),onBlur:r[1]||(r[1]=n=>a("blur",n))},null,40,U0),r[2]||(r[2]=u("span",{class:"aero-switch__track"},[u("i",{class:"aero-switch__knob"})],-1)),l.$slots.default?(d(),p("span",K0,[de(l.$slots,"default",{},void 0,!0)])):W("",!0)],2))}}),Y0=Z(W0,[["__scopeId","data-v-ceb15ef6"]]),lt=le(Y0,"AeroSwitch"),X0={class:"aero-table"},Z0={class:"aero-table__inner"},Q0={key:0},J0=["colspan"],e_=z({__name:"table",props:{columns:{},data:{},emptyText:{}},setup(e){const{table:o}=Y();return(t,a)=>(d(),p("div",X0,[u("table",Z0,[u("thead",null,[u("tr",null,[(d(!0),p(q,null,X(e.columns,s=>(d(),p("th",{key:s.key,style:me(s.width?{width:s.width}:void 0)},v(s.title),5))),128))])]),u("tbody",null,[e.data.length?W("",!0):(d(),p("tr",Q0,[u("td",{colspan:e.columns.length,class:"aero-table__empty"},v(e.emptyText??i(o).empty),9,J0)])),(d(!0),p(q,null,X(e.data,(s,l)=>(d(),p("tr",{key:l},[(d(!0),p(q,null,X(e.columns,r=>(d(),p("td",{key:r.key,class:Q({"is-mono":r.mono})},[de(t.$slots,r.key,{row:s,index:l},()=>[R(v(s[r.key]),1)],!0)],2))),128))]))),128))])])]))}}),t_=Z(e_,[["__scopeId","data-v-50f0b970"]]),dc=le(t_,"AeroTable"),o_={class:"aero-tabs"},a_=["data-key","tabindex","aria-selected","onClick"],s_=z({__name:"tabs",props:{modelValue:{},tabs:{}},emits:["update:modelValue","change"],setup(e,{emit:o}){const t=e,a=o,s=G(()=>{var m;return t.modelValue??((m=t.tabs[0])==null?void 0:m.key)}),l=C(),r=C();async function n(){await Oe();const m=r.value,h=l.value;if(!m||!h)return;const g=m.querySelector(`[data-key="${String(s.value)}"]`);g&&(h.style.width=`${g.offsetWidth}px`,h.style.transform=`translateX(${g.offsetLeft}px)`)}function c(m){m!==s.value&&(a("update:modelValue",m),a("change",m))}function f(m){if(m.key!=="ArrowLeft"&&m.key!=="ArrowRight")return;m.preventDefault();const h=t.tabs.findIndex(k=>k.key===s.value),g=t.tabs.length;if(!g)return;const _=m.key==="ArrowRight"?(h+1)%g:(h-1+g)%g;c(t.tabs[_].key)}return De(n),be(s,n),be(()=>t.tabs,n,{deep:!0}),(m,h)=>(d(),p("div",o_,[u("div",{ref_key:"listRef",ref:r,class:"aero-tabs__list",role:"tablist"},[u("span",{ref_key:"inkRef",ref:l,class:"aero-tabs__ink"},null,512),(d(!0),p(q,null,X(e.tabs,g=>(d(),p("button",{key:g.key,type:"button",role:"tab","data-key":g.key,class:Q(["aero-tabs__tab",{"is-active":g.key===s.value}]),tabindex:g.key===s.value?0:-1,"aria-selected":g.key===s.value,onClick:_=>c(g.key),onKeydown:f},[de(m.$slots,"label",{tab:g},()=>[R(v(g.label),1)],!0)],42,a_))),128))],512),(d(),p("div",{class:"aero-tabs__panel",key:s.value},[de(m.$slots,"default",{active:s.value},void 0,!0)]))]))}}),l_=Z(s_,[["__scopeId","data-v-c30f4ff4"]]),uc=le(l_,"AeroTabs"),r_=z({__name:"tag",props:{accent:{type:Boolean}},setup(e){return(o,t)=>(d(),p("code",{class:Q(["aero-tag",{"is-accent":o.$props.accent}])},[de(o.$slots,"default",{},void 0,!0)],2))}}),n_=Z(r_,[["__scopeId","data-v-cc282d45"]]),Lt=le(n_,"AeroTag"),i_={class:"aero-term"},c_={class:"aero-term__bar"},d_={class:"aero-term__tt"},u_={class:"aero-term__body"},p_={key:0,class:"aero-term__cursor"},m_=z({__name:"terminal",props:{lines:{},typeSpeed:{default:26},lineDelay:{default:300},title:{default:"aero@terminal"}},emits:["done"],setup(e,{expose:o,emit:t}){const a=e,s=t;let l=!1;function r(g){return new Promise(_=>setTimeout(_,g))}const n=C([]),c=C(""),f=C("cmd"),m=C(!1);async function h(){l=!1,n.value=[],c.value="",m.value=!0;for(const g of a.lines){f.value=g.type??"out";for(const _ of g.text){if(l)return;c.value+=_,await r(a.typeSpeed)}if(l)return;n.value=[...n.value,{text:c.value,type:f.value}],c.value="",await r(a.lineDelay)}m.value=!1,s("done")}return be(()=>a.lines,()=>h(),{immediate:!0,deep:!1}),Le(()=>l=!0),o({replay:h}),(g,_)=>(d(),p("div",i_,[u("div",c_,[_[0]||(_[0]=u("i",null,null,-1)),_[1]||(_[1]=u("i",null,null,-1)),_[2]||(_[2]=u("i",null,null,-1)),u("span",d_,v(e.title),1)]),u("div",u_,[(d(!0),p(q,null,X(n.value,(k,x)=>(d(),p("p",{key:x,class:Q(["aero-term__line is-show",`is-${k.type??"out"}`])},v(k.text),3))),128)),c.value||m.value?(d(),p("p",{key:0,class:Q(["aero-term__line is-show",[`is-${f.value}`,"is-last"]])},[R(v(c.value),1),f.value==="cmd"?(d(),p("i",p_)):W("",!0)],2)):W("",!0)])]))}}),f_=Z(m_,[["__scopeId","data-v-52f50d57"]]),pc=le(f_,"AeroTerminal"),h_=["value","placeholder","disabled","readonly","maxlength","rows"],v_={key:0,class:"aero-textarea__count"},g_=z({__name:"textarea",props:{modelValue:{},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxlength:{},showCount:{type:Boolean,default:!1},rows:{default:3}},emits:["update:modelValue","focus","blur"],setup(e,{emit:o}){const t=e,a=o,s=G({get:()=>t.modelValue??"",set:l=>a("update:modelValue",l)});return(l,r)=>(d(),p("div",{class:Q(["aero-textarea",{"is-disabled":e.disabled,"is-error":e.error}])},[u("textarea",{class:"aero-textarea__inner",value:s.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,rows:e.rows,onInput:r[0]||(r[0]=n=>s.value=n.target.value),onFocus:r[1]||(r[1]=n=>a("focus",n)),onBlur:r[2]||(r[2]=n=>a("blur",n))},null,40,h_),e.showCount&&e.maxlength?(d(),p("span",v_,v(s.value.length)+"/"+v(e.maxlength),1)):W("",!0)],2))}}),b_=Z(g_,[["__scopeId","data-v-baea294a"]]),ls=le(b_,"AeroTextarea"),y_=["disabled","aria-checked","aria-label","title","aria-disabled"],__={class:"aero-theme-switch__thumb"},x_={class:"aero-theme-switch__track-icons","aria-hidden":"true"},k_=z({__name:"theme-switch",props:{modelValue:{default:void 0},disabled:{type:Boolean,default:!1},size:{default:"md"}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{themeSwitch:t}=Y(),a=e,s=o,{state:l,toggleTheme:r}=Cs(),n=a.modelValue!==void 0,c=G(()=>n?a.modelValue:l.theme==="dark"?"dark":"light"),f=G(()=>a.size==="sm"?10:a.size==="lg"?16:14);function m(){if(!a.disabled)if(n){const g=c.value==="dark"?"light":"dark";s("update:modelValue",g),s("change",g)}else{r();const g=l.theme==="dark"?"dark":"light";s("update:modelValue",g),s("change",g)}}const h=G(()=>c.value==="dark"?t.value.switchToLight:t.value.switchToDark);return(g,_)=>(d(),p("button",{class:Q(["aero-theme-switch",[`aero-theme-switch--${e.size}`,{"is-dark":c.value==="dark","is-disabled":e.disabled}]]),type:"button",disabled:e.disabled,role:"switch","aria-checked":c.value==="dark","aria-label":h.value,title:h.value,"aria-disabled":e.disabled||void 0,onClick:m},[u("span",__,[A(Mo,{class:"aero-theme-switch__sun",name:"sun",size:f.value},null,8,["size"]),A(Mo,{class:"aero-theme-switch__moon",name:"moon",size:f.value},null,8,["size"])]),u("span",x_,[A(Mo,{name:"moon",size:11}),A(Mo,{name:"sun",size:11})])],10,y_))}}),w_=Z(k_,[["__scopeId","data-v-62669ac5"]]),eo=le(w_,"AeroThemeSwitch"),A_={class:"aero-timeline"},$_={class:"aero-timeline__node"},S_={key:0,width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},T_=["d"],C_={class:"aero-timeline__card"},B_={class:"aero-timeline__date"},L_={key:0},M_={key:1,class:"aero-timeline__chip"},P_={key:0},I_=z({__name:"timeline",props:{items:{}},setup(e){return(o,t)=>(d(),p("div",A_,[(d(!0),p(q,null,X(e.items,a=>(d(),p("div",{key:a.title,class:"aero-timeline__item"},[u("span",$_,[a.icon?(d(),p("svg",S_,[(d(!0),p(q,null,X(i(xe)[a.icon]??[],(s,l)=>(d(),p("path",{key:l,d:s},null,8,T_))),128))])):W("",!0)]),u("div",C_,[u("div",B_,[a.date?(d(),p("span",L_,v(a.date),1)):W("",!0),a.chip?(d(),p("i",M_,v(a.chip),1)):W("",!0)]),u("b",null,v(a.title),1),a.desc?(d(),p("p",P_,v(a.desc),1)):W("",!0)])]))),128))]))}}),D_=Z(I_,[["__scopeId","data-v-c6471892"]]),mc=le(D_,"AeroTimeline"),V_={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},z_=["d"],E_={key:0,class:"aero-time__panel"},R_={class:"aero-time__cols"},F_={class:"aero-time__col"},O_=["onClick"],H_={class:"aero-time__col"},q_=["onClick"],N_={class:"aero-time__foot"},j_={width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},G_=["d"],U_=z({__name:"time-picker",props:{modelValue:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},minuteStep:{default:5}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{timePicker:t,common:a}=Y(),s=e,l=G(()=>s.placeholder??t.value.placeholder),r=o,n=C(),c=C(!1);Kt(()=>n.value,()=>c.value=!1);const f=G(()=>{var b;return((b=s.modelValue)==null?void 0:b.split(":")[0])??""}),m=G(()=>{var b;return((b=s.modelValue)==null?void 0:b.split(":")[1])??""}),h=Array.from({length:24},(b,$)=>String($).padStart(2,"0")),g=G(()=>Array.from({length:Math.ceil(60/s.minuteStep)},(b,$)=>String($*s.minuteStep).padStart(2,"0")));function _(b,$){const y=`${b}:${$}`;r("update:modelValue",y),r("change",y),c.value=!1}function k(){const b=new Date;_(String(b.getHours()).padStart(2,"0"),String(b.getMinutes()).padStart(2,"0"))}function x(){s.disabled||(c.value=!c.value)}return(b,$)=>(d(),p("div",{ref_key:"root",ref:n,class:Q(["aero-time",{"is-open":c.value,"is-disabled":e.disabled}])},[u("button",{class:"aero-time__btn",type:"button",onClick:x},[(d(),p("svg",V_,[(d(!0),p(q,null,X(i(xe).clock,(y,w)=>(d(),p("path",{key:w,d:y},null,8,z_))),128))])),u("span",{class:Q({"is-ph":!e.modelValue})},v(e.modelValue||l.value),3)]),A(He,{name:"aero-time"},{default:I(()=>[c.value?(d(),p("div",E_,[u("div",R_,[u("div",F_,[(d(!0),p(q,null,X(i(h),y=>(d(),p("button",{key:y,class:Q({"is-sel":y===f.value}),type:"button",onClick:w=>_(y,m.value||"00")},v(y),11,O_))),128))]),u("div",H_,[(d(!0),p(q,null,X(g.value,y=>(d(),p("button",{key:y,class:Q({"is-sel":y===m.value}),type:"button",onClick:w=>_(f.value||"00",y)},v(y),11,q_))),128))])]),u("footer",N_,[u("button",{class:"aero-time__now",type:"button",onClick:k},[(d(),p("svg",j_,[(d(!0),p(q,null,X(i(xe).clock,(y,w)=>(d(),p("path",{key:w,d:y},null,8,G_))),128))])),R(" "+v(i(a).now),1)])])])):W("",!0)]),_:1})],2))}}),K_=Z(U_,[["__scopeId","data-v-b63c8ea0"]]),fc=le(K_,"AeroTimePicker"),W_={class:"aero-toasts"},Y_=["id"],X_={class:"aero-toast__ic",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Z_=["d"],Q_={class:"aero-toast__body"},J_={key:0,class:"aero-toast__title"},ex={key:1,class:"aero-toast__msg"},tx=["onClick","aria-label"],ox=["onAnimationend"],ax=z({__name:"toast-host",props:{list:{},duration:{}},emits:["leave"],setup(e,{emit:o}){const{toast:t}=Y(),a=e,s=o,l={success:"circle-check",error:"circle-x",warn:"triangle-alert",info:"info"};function r(n){const c=document.getElementById(`aero-toast-${n}`);c==null||c.classList.add("is-out"),setTimeout(()=>s("leave",n),350)}return(n,c)=>(d(),fe(Gt,{to:"body"},[u("div",W_,[(d(!0),p(q,null,X(a.list,f=>(d(),p("div",{id:`aero-toast-${f.id}`,key:f.id,class:Q(["aero-toast",`aero-toast--${f.type??"info"}`]),role:"status"},[(d(),p("svg",X_,[(d(!0),p(q,null,X(i(xe)[l[f.type??"info"]]??[],(m,h)=>(d(),p("path",{key:h,d:m},null,8,Z_))),128))])),u("div",Q_,[f.title?(d(),p("b",J_,v(f.title),1)):W("",!0),f.message?(d(),p("div",ex,v(f.message),1)):W("",!0)]),u("button",{class:"aero-toast__close",type:"button",onClick:m=>r(f.id),"aria-label":i(t).closeAria},[...c[0]||(c[0]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})],-1)])],8,tx),u("i",{class:"aero-toast__bar",style:me({animationDuration:(f.duration??4200)+"ms"}),onAnimationend:m=>r(f.id)},null,44,ox)],10,Y_))),128))])]))}}),sx=Z(ax,[["__scopeId","data-v-5db5a302"]]);let Fr=!1,qa=null,lx=0;function rx(){if(Fr)return;const e=document.createElement("div");e.id="aero-toasts",document.body.appendChild(e);const o=C([]);Ts({setup(){return()=>zo(sx,{list:o.value,onLeave:t=>{o.value=o.value.filter(a=>a.id!==t)}})}}).mount(e),qa=t=>o.value.push(t),Fr=!0}function Go(e){rx(),qa==null||qa({...e,id:++lx})}const Ze={success:(e,o)=>Go({...o,type:"success",message:e}),error:(e,o)=>Go({...o,type:"error",message:e}),warn:(e,o)=>Go({...o,type:"warn",message:e}),info:(e,o)=>Go({...o,type:"info",message:e}),show:e=>Go(e)},nx=z({__name:"tooltip",props:{content:{},placement:{default:"top"}},setup(e){const o=e,t=C(!1),a=C({left:"0px",top:"0px"}),s=C(!1),l=C(),r=C();async function n(){t.value=!0,await Oe(),f()}function c(){t.value=!1}function f(){var y;const h=l.value,g=(y=r.value)==null?void 0:y.firstElementChild;if(!h||!g)return;const _=g.getBoundingClientRect(),k=h.offsetWidth,x=h.offsetHeight;let b=_.left+_.width/2-k/2,$=_.top-x-8;s.value=!1,(o.placement==="bottom"||$<8)&&($=_.bottom+8,s.value=!0),b=Math.max(8,Math.min(window.innerWidth-k-8,b)),a.value={left:b+"px",top:$+"px"}}function m(){t.value&&f()}return De(()=>{window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m)}),Le(()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)}),(h,g)=>(d(),p(q,null,[u("span",{ref_key:"triggerRef",ref:r,class:"aero-tip-trigger",onMouseenter:n,onMouseleave:c,onFocusin:n,onFocusout:c},[de(h.$slots,"default",{},void 0,!0)],544),(d(),fe(Gt,{to:"body"},[t.value?(d(),p("div",{key:0,ref_key:"tipRef",ref:l,class:Q(["aero-tip",{"is-below":s.value}]),style:me(a.value),role:"tooltip"},v(e.content),7)):W("",!0)]))],64))}}),ix=Z(nx,[["__scopeId","data-v-e46b37ed"]]),bl=le(ix,"AeroTooltip"),cx={key:0,class:"aero-tour"},dx={key:0},ux={class:"aero-tour__foot"},px={class:"aero-tour__idx"},mx={class:"aero-tour__btns"},fx=z({__name:"tour",props:{steps:{},modelValue:{type:Boolean}},emits:["update:modelValue","finish"],setup(e,{emit:o}){const{tour:t}=Y(),a=e,s=o,l=C(0),r=C({left:0,top:0,width:0,height:0}),n=C({left:"12px",top:"12px"}),c=G(()=>a.steps[l.value]);function f(){const S=document.documentElement;if(S.scrollHeight>S.clientHeight+1||document.body.scrollHeight>document.body.clientHeight+1)return S;const K=Array.from(document.querySelectorAll("main, .pg-main"));for(const U of K){const oe=getComputedStyle(U);if((oe.overflowY==="auto"||oe.overflowY==="scroll")&&U.scrollHeight>U.clientHeight+1)return U}return S}let m=null,h="",g="";function _(S){S.preventDefault()}function k(S){m===document.documentElement&&S.preventDefault()}function x(S){m===document.documentElement&&(S.key===" "||S.key==="PageUp"||S.key==="PageDown"||S.key==="Home"||S.key==="End"||S.key==="ArrowDown"||S.key==="ArrowUp"||S.key==="ArrowLeft"||S.key==="ArrowRight")&&S.preventDefault()}function b(){m||(m=f(),m===document.documentElement?(h=document.documentElement.style.overflow,g=document.body.style.overflow,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",window.addEventListener("wheel",k,{passive:!1}),document.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("keydown",x,{passive:!1})):(h=getComputedStyle(m).overflowY,m.style.overflowY="hidden"))}function $(){m&&(m===document.documentElement?(document.documentElement.style.overflow=h,document.body.style.overflow=g,window.removeEventListener("wheel",k),document.removeEventListener("touchmove",_),window.removeEventListener("keydown",x)):m.style.overflowY=h,m=null)}function y(){const S=r.value,P=Math.min(Math.max(12,S.left),window.innerWidth-300),K=S.top+S.height+14;n.value={left:P+"px",top:Math.min(K,window.innerHeight-160)+"px"}}let w,T=0;async function L(){var K;await Oe();const S=document.querySelector(((K=c.value)==null?void 0:K.target)??"");if(!S)return;const P=S.getBoundingClientRect();if(P.top<4||P.bottom>window.innerHeight-4){F(S);return}r.value={left:P.left,top:P.top,width:P.width,height:P.height},y()}function F(S){const P=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(S.scrollIntoView({block:"center",behavior:P?"auto":"smooth"}),clearTimeout(w),cancelAnimationFrame(T),T=0,P){w=setTimeout(()=>void L(),60);return}let K=NaN,U=0;const oe=performance.now(),O=()=>{const N=S.getBoundingClientRect();if(U=N.top>=4&&N.bottom<=window.innerHeight-4&&Math.abs(N.top-K)<1?U+1:0,K=N.top,U>=2||performance.now()-oe>1500){cancelAnimationFrame(T),T=0,L();return}T=requestAnimationFrame(O)};T=requestAnimationFrame(O)}be(()=>[a.modelValue,l.value],([S])=>{S?(b(),L()):($(),clearTimeout(w))},{immediate:!0});function V(){l.value<a.steps.length-1?l.value++:(E(),s("finish"))}function E(){l.value=0,s("update:modelValue",!1)}function D(S){a.modelValue&&(S.key==="Escape"&&E(),S.key==="ArrowRight"&&V())}function j(){var K;if(!a.modelValue)return;const S=document.querySelector(((K=c.value)==null?void 0:K.target)??"");if(!S)return;const P=S.getBoundingClientRect();P.top<4||P.bottom>window.innerHeight-4?F(S):(r.value={left:P.left,top:P.top,width:P.width,height:P.height},y())}return be(()=>a.modelValue,S=>{S?(document.addEventListener("keydown",D),window.addEventListener("resize",j)):(document.removeEventListener("keydown",D),window.removeEventListener("resize",j))}),Le(()=>{document.removeEventListener("keydown",D),window.removeEventListener("resize",j),$(),clearTimeout(w),cancelAnimationFrame(T)}),(S,P)=>(d(),fe(Gt,{to:"body"},[A(He,{name:"aero-tour"},{default:I(()=>{var K,U;return[e.modelValue?(d(),p("div",cx,[u("div",{class:"aero-tour__hl",style:me({left:r.value.left-6+"px",top:r.value.top-6+"px",width:r.value.width+12+"px",height:r.value.height+12+"px"})},null,4),u("div",{class:"aero-tour__tip",style:me(n.value)},[u("b",null,v((K=c.value)==null?void 0:K.title),1),(U=c.value)!=null&&U.desc?(d(),p("p",dx,v(c.value.desc),1)):W("",!0),u("div",ux,[u("span",px,v(l.value+1)+" / "+v(e.steps.length),1),u("div",mx,[u("button",{class:"aero-tour__skip",type:"button",onClick:E},v(i(t).skip),1),u("button",{class:"aero-tour__next",type:"button",onClick:V},v(l.value===e.steps.length-1?i(t).done:i(t).next),1)])])],4)])):W("",!0)]}),_:1})]))}}),hx=Z(fx,[["__scopeId","data-v-243a2e8f"]]),hc=le(hx,"AeroTour"),vx={class:"aero-transfer__panel"},gx={class:"aero-transfer__head"},bx=["onClick"],yx={class:"aero-transfer__ops"},_x=["disabled","aria-label"],xx={width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},kx=["d"],wx=["disabled","aria-label"],Ax={width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},$x=["d"],Sx={class:"aero-transfer__panel"},Tx={class:"aero-transfer__head"},Cx=["onClick"],Bx=z({__name:"transfer",props:{data:{},modelValue:{},titles:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{transfer:t}=Y(),a=e,s=G(()=>{var k;return((k=a.titles)==null?void 0:k[0])??t.value.source}),l=G(()=>{var k;return((k=a.titles)==null?void 0:k[1])??t.value.target}),r=o,n=C([]),c=C([]),f=G(()=>a.data.filter(k=>!a.modelValue.includes(k.key))),m=G(()=>a.modelValue.map(k=>a.data.find(x=>x.key===k)).filter(k=>!!k));function h(k,x,b){if(a.disabled||b)return;const $=k==="l"?n:c,y=$.value.indexOf(x);y>=0?$.value.splice(y,1):$.value.push(x)}function g(){if(a.disabled||!n.value.length)return;const k=[...a.modelValue,...n.value];r("update:modelValue",k),r("change",k),n.value=[]}function _(){if(a.disabled||!c.value.length)return;const k=a.modelValue.filter(x=>!c.value.includes(x));r("update:modelValue",k),r("change",k),c.value=[]}return(k,x)=>(d(),p("div",{class:Q(["aero-transfer",{"is-disabled":e.disabled}])},[u("div",vx,[u("header",gx,[R(v(s.value),1),u("b",null,v(f.value.length),1)]),A(os,{tag:"ul",name:"aero-transfer",class:"aero-transfer__list"},{default:I(()=>[(d(!0),p(q,null,X(f.value,b=>(d(),p("li",{key:b.key,class:Q({"is-checked":n.value.includes(b.key),"is-off":b.disabled}),onClick:$=>h("l",b.key,b.disabled)},[x[0]||(x[0]=u("i",{class:"aero-transfer__box"},null,-1)),R(" "+v(b.label),1)],10,bx))),128))]),_:1})]),u("div",yx,[u("button",{type:"button",disabled:!n.value.length||e.disabled,"aria-label":i(t).toRightAria,onClick:g},[(d(),p("svg",xx,[(d(!0),p(q,null,X(i(xe)["chevron-right"],(b,$)=>(d(),p("path",{key:$,d:b},null,8,kx))),128))]))],8,_x),u("button",{type:"button",disabled:!c.value.length||e.disabled,"aria-label":i(t).toLeftAria,onClick:_},[(d(),p("svg",Ax,[(d(!0),p(q,null,X(i(xe)["chevron-left"],(b,$)=>(d(),p("path",{key:$,d:b},null,8,$x))),128))]))],8,wx)]),u("div",Sx,[u("header",Tx,[R(v(l.value),1),u("b",null,v(m.value.length),1)]),A(os,{tag:"ul",name:"aero-transfer",class:"aero-transfer__list"},{default:I(()=>[(d(!0),p(q,null,X(m.value,b=>(d(),p("li",{key:b.key,class:Q({"is-checked":c.value.includes(b.key)}),onClick:$=>h("r",b.key)},[x[1]||(x[1]=u("i",{class:"aero-transfer__box"},null,-1)),R(" "+v(b.label),1)],10,Cx))),128))]),_:1})])],2))}}),Lx=Z(Bx,[["__scopeId","data-v-67965520"]]),vc=le(Lx,"AeroTransfer"),Mx=["aria-expanded"],Px=["aria-label"],Ix={width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},Dx=["d"],Vx={key:1,class:"aero-tree__chev is-leaf"},zx=["aria-checked","disabled","aria-label"],Ex={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},Rx=["d"],Fx={key:1,class:"aero-tree__dash"},Ox={key:0,class:"aero-tree__group",role:"group"},Hx=z({__name:"tree-row",props:{node:{},depth:{},expandedSet:{},states:{},checkedKeys:{},activeKey:{},checkable:{type:Boolean}},emits:["toggle-expand","toggle-check","select"],setup(e,{emit:o}){const{tree:t}=Y(),a=e,s=o,l=G(()=>a.states.get(a.node.key)??"none"),r=G(()=>a.expandedSet.has(a.node.key));return(n,c)=>{var m,h;const f=In("TreeRow",!0);return d(),p("li",{role:"treeitem","aria-expanded":(m=e.node.children)!=null&&m.length?r.value:void 0},[u("div",{class:Q(["aero-tree__row",{"is-active":e.node.key===e.activeKey,"is-disabled":e.node.disabled}]),style:me({paddingLeft:e.depth*20+6+"px"}),onClick:c[3]||(c[3]=g=>{var _;return(_=e.node.children)!=null&&_.length?s("toggle-expand",e.node.key):s("select",e.node)})},[(h=e.node.children)!=null&&h.length?(d(),p("button",{key:0,class:Q(["aero-tree__chev",{"is-open":r.value}]),type:"button","aria-label":i(t).expandAria(e.node.label),onClick:c[0]||(c[0]=Pe(g=>s("toggle-expand",e.node.key),["stop"]))},[(d(),p("svg",Ix,[(d(!0),p(q,null,X(i(xe)["chevron-right"],(g,_)=>(d(),p("path",{key:_,d:g},null,8,Dx))),128))]))],10,Px)):(d(),p("span",Vx)),e.checkable?(d(),p("button",{key:2,class:Q(["aero-tree__check",`is-${l.value}`]),type:"button",role:"checkbox","aria-checked":l.value==="all"?!0:l.value==="half"?"mixed":!1,disabled:e.node.disabled,"aria-label":i(t).checkAria(e.node.label),onClick:c[1]||(c[1]=Pe(g=>s("toggle-check",e.node),["stop"]))},[l.value==="all"?(d(),p("svg",Ex,[(d(!0),p(q,null,X(i(xe).check,(g,_)=>(d(),p("path",{key:_,d:g},null,8,Rx))),128))])):l.value==="half"?(d(),p("i",Fx)):W("",!0)],10,zx)):W("",!0),u("span",{class:"aero-tree__label",onClick:c[2]||(c[2]=Pe(g=>s("select",e.node),["stop"]))},v(e.node.label),1)],6),A(He,{name:"aero-tree"},{default:I(()=>{var g;return[(g=e.node.children)!=null&&g.length&&r.value?(d(),p("ul",Ox,[(d(!0),p(q,null,X(e.node.children,_=>(d(),fe(f,{key:_.key,node:_,depth:e.depth+1,"expanded-set":e.expandedSet,states:e.states,"checked-keys":e.checkedKeys,"active-key":e.activeKey,checkable:e.checkable,onToggleExpand:c[4]||(c[4]=k=>s("toggle-expand",k)),onToggleCheck:c[5]||(c[5]=k=>s("toggle-check",k)),onSelect:c[6]||(c[6]=k=>s("select",k))},null,8,["node","depth","expanded-set","states","checked-keys","active-key","checkable"]))),128))])):W("",!0)]}),_:1})],8,Mx)}}}),qx=Z(Hx,[["__scopeId","data-v-8f5a51f7"]]);function Pa(e,o){const t=new Map,a=new Set;function s(l){var m;if(o.has(l.key))return t.set(l.key,"all"),a.add(l.key),l.children&&l.children.forEach(h=>{t.set(h.key,"all"),a.add(h.key),Bs([h]).forEach(g=>{g!==h.key&&(t.set(g,"all"),a.add(g))})}),"all";if(!((m=l.children)!=null&&m.length))return t.set(l.key,"none"),"none";const r=l.children.map(s),n=r.every(h=>h==="all"),c=r.some(h=>h!=="none"),f=n?"all":c?"half":"none";return t.set(l.key,f),f==="all"&&a.add(l.key),f}return e.forEach(s),{states:t,checkedKeys:a}}function Bs(e){return e.flatMap(o=>[o.key,...Bs(o.children??[])])}function Or(e,o){const t=new Set,a=(l,r)=>{for(const n of l)r&&e.has(n.key)&&t.add(n.key),n.children&&a(n.children,r||e.has(n.key))};a(o,!1);const s=new Set;for(const l of e)t.has(l)||s.add(l);return s}function Nx(e,o,t){const a=new Set(e),s=gc(o,t);if(s)for(const m of Bs([s]))a.delete(m);const l=Gx(o),r=[];let n=t;for(;n!==void 0;)r.unshift(n),n=l.get(n);let c=-1;for(let m=0;m<r.length;m++)if(a.has(r[m])){c=m;break}if(c<0)return a;const f=Ux(o);for(let m=c;m<r.length-1;m++){const h=r[m],g=r[m+1];a.delete(h);for(const _ of f.get(h)??[])_!==g&&a.add(_);if(g===t)break}return a}function jx(e,o){const t=new Set(e);return t.add(o),t}function gc(e,o){for(const t of e){if(t.key===o)return t;if(t.children){const a=gc(t.children,o);if(a)return a}}return null}function Gx(e){const o=new Map,t=(a,s)=>{for(const l of a)s!==void 0&&o.set(l.key,s),l.children&&t(l.children,l.key)};return t(e),o}function Ux(e){const o=new Map,t=a=>{var s;for(const l of a)(s=l.children)!=null&&s.length&&(o.set(l.key,l.children.map(r=>r.key)),t(l.children))};return t(e),o}const Kx={class:"aero-tree",role:"tree"},Wx=z({__name:"tree",props:{data:{},expanded:{default:void 0},activeKey:{},checkable:{type:Boolean,default:!1},checked:{default:void 0},defaultExpandAll:{type:Boolean,default:!1},includeParents:{type:Boolean,default:!1}},emits:["update:expanded","update:checked","select"],setup(e,{emit:o}){const t=e,a=o,s=G(()=>t.expanded?new Set(t.expanded):t.defaultExpandAll?new Set(Bs(t.data)):new Set),l=G(()=>Pa(t.data,new Set(t.checked??[]))),r=G(()=>l.value.states),n=G(()=>l.value.checkedKeys),c=G(()=>{const g=new Set,_=k=>{var x;for(const b of k)(x=b.children)!=null&&x.length&&g.add(b.key),b.children&&_(b.children)};return _(t.data),g});function f(g){if(!t.expanded)return;const _=[...t.expanded],k=_.indexOf(g);k>=0?_.splice(k,1):_.push(g),a("update:expanded",_)}function m(g){if(!t.checked||g.disabled)return;const _=t.data,k=Or(new Set(t.checked),_),{checkedKeys:x}=Pa(_,k),b=x.has(g.key)?Nx(k,_,g.key):jx(k,g.key),$=[...Pa(_,b).checkedKeys];a("update:checked",t.includeParents?$:$.filter(y=>!c.value.has(y)))}function h(g){var _;(_=g.children)!=null&&_.length&&f(g.key),a("select",g)}return be(()=>t.includeParents,()=>{if(!t.checked)return;const{checkedKeys:g}=Pa(t.data,Or(new Set(t.checked),t.data)),_=[...g];a("update:checked",t.includeParents?_:_.filter(k=>!c.value.has(k)))}),(g,_)=>(d(),p("ul",Kx,[(d(!0),p(q,null,X(e.data,k=>(d(),fe(qx,{key:k.key,node:k,depth:0,"expanded-set":s.value,states:r.value,"checked-keys":n.value,"active-key":e.activeKey,checkable:e.checkable,onToggleExpand:f,onToggleCheck:m,onSelect:h},null,8,["node","expanded-set","states","checked-keys","active-key","checkable"]))),128))]))}}),bc=Z(Wx,[["__scopeId","data-v-b8d96f47"]]),yc=le(bc,"AeroTree"),Yx={class:"aero-tsel__chev",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Xx=["d"],Zx={key:0,class:"aero-tsel__panel"},Qx=z({__name:"tree-select",props:{data:{},modelValue:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},defaultExpandAll:{type:Boolean,default:!0}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{treeSelect:t}=Y(),a=e,s=G(()=>a.placeholder??t.value.placeholder),l=o,r=C(),n=C(!1);Kt(()=>r.value,()=>n.value=!1);function c(h,g){if(!g)return"";for(const _ of h){if(_.key===g)return _.label;const k=c(_.children??[],g);if(k)return k}return""}const f=()=>c(a.data,a.modelValue);function m(h){var g;(g=h.children)!=null&&g.length||(l("update:modelValue",h.key),l("change",h.key),n.value=!1)}return(h,g)=>(d(),p("div",{ref_key:"root",ref:r,class:Q(["aero-tsel",{"is-open":n.value,"is-disabled":e.disabled}])},[u("button",{class:"aero-tsel__btn",type:"button",onClick:g[0]||(g[0]=_=>n.value=!n.value)},[u("span",{class:Q({"is-ph":!e.modelValue})},v(f()||s.value),3),(d(),p("svg",Yx,[(d(!0),p(q,null,X(i(xe)["chevron-down"],(_,k)=>(d(),p("path",{key:k,d:_},null,8,Xx))),128))]))]),A(He,{name:"aero-tsel"},{default:I(()=>[n.value?(d(),p("div",Zx,[A(bc,{data:e.data,"active-key":e.modelValue,"default-expand-all":e.defaultExpandAll,onSelect:m},null,8,["data","active-key","default-expand-all"])])):W("",!0)]),_:1})],2))}}),Jx=Z(Qx,[["__scopeId","data-v-3f0295d5"]]),_c=le(Jx,"AeroTreeSelect"),ek=z({__name:"typography",props:{level:{default:"body"},tag:{},en:{type:Boolean},mono:{type:Boolean},highlight:{type:Boolean},sticker:{type:Boolean}},setup(e){const o=e,t={display:"h1","heading-en":"h2",title:"h3",body:"p",caption:"span"},a=G(()=>o.tag??t[o.level]);return(s,l)=>(d(),fe(_o(a.value),{class:Q(["aero-type",[`aero-type--${s.$props.level}`,{"is-en":s.$props.en,"is-mono":s.$props.mono,"is-highlight":s.$props.highlight,"is-sticker":s.$props.sticker}]])},{default:I(()=>[de(s.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),tk=Z(ek,[["__scopeId","data-v-f825f367"]]),Qe=le(tk,"AeroTypography");function ok(e){return e>1024*1024?(e/1024/1024).toFixed(1)+" MB":(e/1024).toFixed(0)+" KB"}const ak=["data-list-type"],sk={width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},lk=["d"],rk={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},nk=["d"],ik=["multiple","accept","disabled"],ck=["aria-label","onClick"],dk={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},uk=["d"],pk={class:"aero-upload__name"},mk={class:"aero-upload__size"},fk=["aria-label","onClick"],hk={width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},vk=["d"],gk=z({__name:"upload",props:{modelValue:{default:()=>[]},multiple:{type:Boolean,default:!1},accept:{default:""},drag:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},limit:{default:0},name:{default:"file"},withCredentials:{type:Boolean,default:!1},showFileList:{type:Boolean,default:!0},listType:{default:"text"},tip:{},beforeUpload:{type:Function,default:void 0},beforeRemove:{type:Function,default:void 0}},emits:["update:modelValue","change","remove","exceed","preview","upload","success","progress","error"],setup(e,{expose:o,emit:t}){const{upload:a}=Y(),s=e,l=t;let r=0;const n=C(),c=C(!1);function f(){return++r}function m(y,w){return s.beforeUpload?Promise.resolve(s.beforeUpload(y,w)).then(T=>{if(T===!1)return!1;if(T instanceof File||T instanceof Blob)return T}):Promise.resolve()}async function h(y){if(!y.length||s.disabled)return;const w=s.multiple?y:y.slice(0,1),T=[];for(const D of w){const j=await m(D,w);j!==!1&&T.push({file:D,repl:j===void 0?void 0:j})}if(!T.length)return;const L=s.limit>0?Math.max(0,s.limit-s.modelValue.length):1/0,F=T.slice(0,L),V=T.slice(L);if(V.length&&l("exceed",V.map(D=>D.file),s.modelValue),!F.length)return;const E=F.map(D=>{var j,S;return{uid:f(),name:((j=D.repl)==null?void 0:j.name)??D.file.name,size:((S=D.repl)==null?void 0:S.size)??D.file.size,status:"ready"}});l("update:modelValue",s.multiple?[...s.modelValue,...E]:E),l("change",F.map(D=>D.repl&&D.repl instanceof File?D.repl:D.file),T.map(D=>D.file));for(const D of F){const j=D.repl instanceof File?D.repl:D.file;l("upload",j,{name:s.name,withCredentials:s.withCredentials,headers:{}})}}function g(y){const w=y.target.files;h(Array.from(w??[])),n.value.value=""}function _(y){var w;c.value=!1,h(Array.from(((w=y.dataTransfer)==null?void 0:w.files)??[]))}async function k(y){const w=s.modelValue[y];w&&(s.beforeRemove&&await Promise.resolve(s.beforeRemove(w))===!1||(l("update:modelValue",s.modelValue.filter((T,L)=>L!==y)),l("remove",w)))}function x(y){l("preview",y)}be(()=>s.modelValue,(y,w)=>{for(const T of y??[]){const L=w==null?void 0:w.find(F=>F.uid===T.uid);L&&(T.status==="uploading"&&T.percent!==L.percent&&l("progress",T,T.percent??0),T.status==="done"&&L.status!=="done"&&l("success",T,T.url),T.status==="error"&&L.status!=="error"&&l("error",T,void 0))}},{deep:!0});const b=C([]);o({submit(){if(!b.value.length)return;const y=b.value;b.value=[],h(y)},clearFiles(){l("update:modelValue",[])},abort(){b.value=[]},handleStart(){var y;(y=n.value)==null||y.click()}});function $(){var y;s.disabled||(y=n.value)==null||y.click()}return(y,w)=>(d(),p("div",{class:Q(["aero-upload",{"is-disabled":e.disabled}]),"data-list-type":e.listType},[de(y.$slots,"trigger",{trigger:$},()=>[e.drag?(d(),p("div",{key:0,class:Q(["aero-upload__drop",{"is-over":c.value}]),onClick:$,onDragover:w[0]||(w[0]=Pe(T=>c.value=!0,["prevent"])),onDragleave:w[1]||(w[1]=T=>c.value=!1),onDrop:Pe(_,["prevent"])},[(d(),p("svg",sk,[(d(!0),p(q,null,X(i(xe).upload,(T,L)=>(d(),p("path",{key:L,d:T},null,8,lk))),128))])),u("b",null,v(i(a).dragTitle),1),u("span",null,v(i(a).dragSub(e.accept||i(a).anyType)),1)],34)):(d(),p("button",{key:1,class:"aero-upload__btn",type:"button",onClick:$},[(d(),p("svg",rk,[(d(!0),p(q,null,X(i(xe).upload,(T,L)=>(d(),p("path",{key:L,d:T},null,8,nk))),128))])),R(" "+v(i(a).select),1)]))],!0),u("input",{ref_key:"inputRef",ref:n,class:"aero-upload__input",type:"file",multiple:e.multiple,accept:e.accept,disabled:e.disabled,onChange:g},null,40,ik),de(y.$slots,"tip",{},()=>[R(v(e.tip),1)],!0),e.showFileList&&e.modelValue.length?(d(),p("ul",{key:0,class:Q(["aero-upload__list",{"is-picture":e.listType==="picture","is-card":e.listType==="picture-card"}])},[(d(!0),p(q,null,X(e.modelValue,(T,L)=>(d(),p("li",{key:T.uid??T.name+L},[de(y.$slots,"file",{file:T,index:L,preview:()=>x(T),remove:()=>k(L)},()=>[u("button",{class:"aero-upload__preview",type:"button","aria-label":i(a).previewAria,onClick:F=>x(T)},[(d(),p("svg",dk,[(d(!0),p(q,null,X(i(xe)["file-text"],(F,V)=>(d(),p("path",{key:V,d:F},null,8,uk))),128))]))],8,ck),u("span",pk,v(T.name),1),u("span",mk,v(i(ok)(T.size)),1),u("button",{class:"aero-upload__x",type:"button","aria-label":i(a).removeAria,onClick:F=>k(L)},[(d(),p("svg",hk,[(d(!0),p(q,null,X(i(xe).x,(F,V)=>(d(),p("path",{key:V,d:F},null,8,vk))),128))]))],8,fk)],!0)]))),128))],2)):W("",!0)],10,ak))}}),bk=Z(gk,[["__scopeId","data-v-fb82303d"]]),yl=le(bk,"AeroUpload"),yk={class:"aero-watermark__content"},_k=z({__name:"watermark",props:{content:{},rotate:{default:-22},gap:{default:140},fontSize:{default:18},opacity:{default:.22},maxWidth:{},radius:{}},setup(e){const o=e,t=C(""),a=G(()=>({"--wm-image":l(t.value),"--wm-opacity":o.opacity,maxWidth:o.maxWidth!==void 0?typeof o.maxWidth=="number"?`${o.maxWidth}px`:o.maxWidth:void 0,borderRadius:o.radius!==void 0?typeof o.radius=="number"?`${o.radius}px`:o.radius:void 0}));function s(c,f,m=22){const h=b=>{const $=/^#?([0-9a-f]{6})$/i.exec(b.trim());return $?[parseInt($[1].slice(0,2),16),parseInt($[1].slice(2,4),16),parseInt($[1].slice(4,6),16)]:null},g=m/100,_=(b,$)=>Math.round(b+($-b)*g),k=h(c),x=h(f);if(k&&x){const b=_(k[0],x[0]),$=_(k[1],x[1]),y=_(k[2],x[2]);return`rgb(${b}, ${$}, ${y})`}if(c&&c!=="transparent")try{const b=document.createElement("canvas");b.width=1,b.height=1;const $=b.getContext("2d");$.fillStyle=c,$.fillRect(0,0,1,1);const y=$.getImageData(0,0,1,1).data;return x?`rgb(${_(y[0],x[0])}, ${_(y[1],x[1])}, ${_(y[2],x[2])})`:`rgb(${y[0]}, ${y[1]}, ${y[2]})`}catch{}return null}function l(c){return c?`url("${c}")`:"none"}function r(){const c=document.createElement("canvas"),f=o.gap,m=o.gap;c.width=f,c.height=m;const h=c.getContext("2d");h.translate(f/2,m/2),h.rotate(o.rotate*Math.PI/180),h.lineWidth=2;const g=getComputedStyle(document.documentElement).getPropertyValue("--ui-ink").trim(),_=getComputedStyle(document.documentElement).getPropertyValue("--ui-brand").trim();h.fillStyle=s(g,_,30)||"rgba(12, 27, 42, 1)",h.strokeStyle=h.fillStyle,h.textAlign="center",h.textBaseline="middle",h.fillText(o.content,0,0),h.strokeText(o.content,0,0),t.value=c.toDataURL()}let n=null;return De(()=>{r(),n=new MutationObserver(r),n.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","data-preset"]})}),Le(()=>n==null?void 0:n.disconnect()),be(()=>[o.content,o.rotate,o.gap,o.fontSize],r),(c,f)=>(d(),p("div",{class:"aero-watermark",style:me(a.value)},[f[0]||(f[0]=u("div",{class:"aero-watermark__wm","aria-hidden":"true"},null,-1)),u("div",yk,[de(c.$slots,"default",{},void 0,!0)])],4))}}),xk=Z(_k,[["__scopeId","data-v-367b9ff6"]]),xc=le(xk,"AeroWatermark"),kk=[Xo,zl,bi,to,Ti,Ci,Ue,Bi,pe,cl,Fo,dl,Li,Zo,Mi,Do,Jt,Pi,Ol,ra,Ii,Di,zi,Qo,Ei,Ri,Fi,Oi,Hi,ul,qi,We,Co,pl,ji,Bt,Ea,Gi,Ui,Ra,Ki,Xi,Zi,Qi,Ji,Jo,ec,tc,oc,fl,as,Fa,sc,ea,lc,vl,gl,rc,nc,ql,ss,ic,$t,wa,Bo,Oa,Ha,cc,lt,dc,uc,Lt,pc,ls,eo,mc,fc,Ze,bl,hc,vc,yc,_c,Qe,yl,xc,ml,Yi,Wi,hi,yi,_i,Rl,Ht,Fl,ki,wi,Ai,$i,Si],wk={...Ro.cropper},Ak={class:"aero-cropper__viewer"},$k=["src","alt"],Sk={key:1,class:"aero-cropper__empty"},Tk={key:0,class:"aero-cropper__circle"},Ck={class:"aero-cropper__ctrls"},Bk={class:"aero-cropper__upload"},Lk=["disabled"],Mk={class:"aero-cropper__rot"},Pk=["disabled"],Ik=["disabled"],Dk=["disabled"],Vk=["disabled"],zk={class:"aero-cropper__meta"},Ek=["disabled"],Rk={key:0,class:"aero-cropper__result"},Fk=["src","width","height","alt"],Ia=260,Ok=.42,Hr=2,Hk=z({__name:"cropper",props:{exportSizes:{default:()=>[32,48,64,96,128]},shape:{default:"circle"},minSize:{default:60},maxSize:{default:0},disabled:{type:Boolean,default:!1},view:{default:260},labels:{default:()=>({})}},emits:["change","export","error"],setup(e,{expose:o,emit:t}){const{cropper:a}=Y();async function s(oe,O,N,J,ue,Ae){const ke=[],we=oe.naturalWidth/N.w,no=oe.naturalHeight/N.h,Wt=(O.cx-N.x)*we,io=(O.cy-N.y)*no;for(const Ne of J){const pt=document.createElement("canvas");pt.width=Ne,pt.height=Ne;const rt=pt.getContext("2d");rt.beginPath(),rt.arc(Ne/2,Ne/2,Ne/2,0,Math.PI*2),rt.clip();const Vt=O.rot*Math.PI/180,co=Ne/(O.size*2*ue*we);rt.translate(Ne/2,Ne/2),rt.scale(co,co),rt.rotate(Vt),rt.translate(-Wt,-io),rt.drawImage(oe,0,0);const M=await new Promise(B=>pt.toBlob(H=>B(H),"image/png"));ke.push({size:Ne,url:pt.toDataURL("image/png"),blob:M})}return ke}const l=e,r=G(()=>l.maxSize>0?l.maxSize:l.view-10),n=G(()=>({...wk,...a.value,...l.labels})),c=t,f=C({cx:Ia/2,cy:Ia/2,size:200,rot:0}),m=C(""),h=C(""),g=C(),_=C(),k=C({x:0,y:0,w:Ia,h:Ia});function x(){const oe=g.value;if(!oe||!oe.naturalWidth)return;const O=Math.min(l.view/oe.naturalWidth,l.view/oe.naturalHeight),N=oe.naturalWidth*O,J=oe.naturalHeight*O;k.value={x:(l.view-N)/2,y:(l.view-J)/2,w:N,h:J},f.value={cx:l.view/2,cy:l.view/2,size:Math.min(200,N,J)*.9,rot:0}}function b(oe){var J;const O=(J=oe.target.files)==null?void 0:J[0];if(!O)return;h.value=O.name;const N=new FileReader;N.onload=()=>{m.value=String(N.result)},N.onerror=()=>c("error",N.error),N.readAsDataURL(O),oe.target.value=""}function $(){f.value={cx:l.view/2,cy:l.view/2,size:Math.min(200,k.value.w,k.value.h)*.9,rot:0}}let y=null;const w=C({x:0,y:0});function T(oe,O){const N=document.querySelector(".aero-cropper__frame");if(!N)return{lx:0,ly:0};const J=N.getBoundingClientRect();return{lx:oe-(J.left+Hr),ly:O-(J.top+Hr)}}function L(oe,O){if(l.disabled)return;const N=O.currentTarget;if(!N)return;const{lx:J,ly:ue}=T(O.clientX,O.clientY);w.value={x:O.clientX,y:O.clientY};const Ae=J-f.value.cx,ke=ue-f.value.cy;y={kind:oe,ox:f.value.cx,oy:f.value.cy,osize:f.value.size,orot:f.value.rot,odist:Math.max(1,Math.hypot(Ae,ke)),oang:Math.atan2(ke,Ae)},E(N,O)}function F(oe){if(y){if(y.kind==="move"){const O=w.value;f.value.cx=D(y.ox+(oe.clientX-O.x),20,l.view-20),f.value.cy=D(y.oy+(oe.clientY-O.y),20,l.view-20)}else{const{lx:O,ly:N}=T(oe.clientX,oe.clientY),J=O-f.value.cx,ue=N-f.value.cy;if(y.kind==="scale"){const Ae=Math.hypot(J,ue)/y.odist;f.value.size=D(y.osize*Ae,l.minSize,r.value)}else{let ke=(Math.atan2(ue,J)-y.oang)*180/Math.PI;ke>180&&(ke-=360),ke<-180&&(ke+=360),f.value.rot=(Math.round(y.orot+ke)%360+360)%360}}c("change",{...f.value})}}function V(){y=null}const{startDrag:E}=yt(oe=>F(oe),{onEnd:V});function D(oe,O,N){return Math.min(N,Math.max(O,oe))}const j=G(()=>({left:f.value.cx-f.value.size/2+"px",top:f.value.cy-f.value.size/2+"px",width:f.value.size+"px",height:f.value.size+"px",transform:`rotate(${f.value.rot}deg)`})),S=C([]);async function P(){if(!m.value)return;const oe=new Image;oe.onload=async()=>{try{S.value=await s(oe,f.value,k.value,l.exportSizes,Ok,l.view),c("export",S.value)}catch(O){c("error",O)}},oe.onerror=()=>c("error",new Error("image load failed")),oe.src=m.value}o({reset(){$()},openFilePicker(){var oe;(oe=_.value)==null||oe.click()},setSource(oe,O){m.value=oe,O&&(h.value=O)}});function K(){var oe;(oe=_.value)==null||oe.click()}const U=G(()=>{if(!m.value)return n.value.ready;const oe=n.value.metaFrame?n.value.metaFrame(f.value.size,f.value.rot):`${Math.round(f.value.size)}px · ${Math.round(f.value.rot)}°`;return`${h.value||n.value.upload} · ${oe}`});return(oe,O)=>(d(),p("div",{class:Q(["aero-cropper",{"is-disabled":e.disabled}])},[u("div",Ak,[u("div",{class:"aero-cropper__frame",style:me({width:e.view+"px",height:e.view+"px"}),onPointerdown:O[3]||(O[3]=N=>L("move",N))},[m.value?(d(),p("img",{key:0,ref_key:"imgEl",ref:g,class:"aero-cropper__img",src:m.value,alt:h.value,style:me({left:k.value.x+"px",top:k.value.y+"px",width:k.value.w+"px",height:k.value.h+"px"}),draggable:"false",onLoad:x,onError:O[0]||(O[0]=N=>c("error",N))},null,44,$k)):(d(),p("span",Sk,v(n.value.empty),1)),m.value?(d(),p("div",{key:2,class:Q(["aero-cropper__crop",{"is-rect":e.shape==="rect"}]),style:me(j.value)},[O[9]||(O[9]=u("div",{class:"aero-cropper__grid"},null,-1)),e.shape==="circle"?(d(),p("div",Tk)):W("",!0),O[10]||(O[10]=Ao('<div class="aero-cropper__cross" data-v-0da5076c></div><div class="aero-cropper__north" data-v-0da5076c>▲</div><svg class="aero-cropper__rotate-hint" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0da5076c><path d="M12 4a8 8 0 0 1 8 8" data-v-0da5076c></path><path d="M20 8l-2 4 4-1z" fill="currentColor" stroke="none" data-v-0da5076c></path></svg>',3)),(d(),p(q,null,X(["tl","tr","br","bl"],N=>u("i",{key:N,class:Q(["aero-cropper__h aero-cropper__h--corner",`aero-cropper__h--${N}`]),onPointerdown:O[1]||(O[1]=J=>L("scale",J))},null,34)),64)),(d(),p(q,null,X(["t","r","b","l"],N=>u("i",{key:N,class:Q(["aero-cropper__h",`aero-cropper__h--${N}`]),onPointerdown:O[2]||(O[2]=J=>L("rotate",J))},null,34)),64))],6)):W("",!0)],36),de(oe.$slots,"tip",{},()=>[R(v(n.value.hint),1)],!0)]),u("div",Ck,[u("div",Bk,[u("input",{ref_key:"fileInput",ref:_,class:"aero-cropper__input",type:"file",accept:"image/*",hidden:"",onChange:b},null,544),de(oe.$slots,"trigger",{disabled:e.disabled,fileName:h.value,open:K},()=>[oe.$slots.trigger?W("",!0):(d(),p("button",{key:0,class:"aero-cropper__btn",type:"button",disabled:e.disabled,onClick:O[4]||(O[4]=N=>K())},v(h.value||n.value.upload),9,Lk))],!0)]),u("div",Mk,[u("button",{class:"aero-cropper__mini",type:"button",disabled:e.disabled||!m.value,onClick:O[5]||(O[5]=N=>f.value.size=Math.min(r.value,f.value.size+24))},v(n.value.enlarge),9,Pk),u("button",{class:"aero-cropper__mini",type:"button",disabled:e.disabled||!m.value,onClick:O[6]||(O[6]=N=>f.value.size=Math.max(e.minSize,f.value.size-24))},v(n.value.shrink),9,Ik),u("button",{class:"aero-cropper__mini",type:"button",disabled:e.disabled||!m.value,onClick:O[7]||(O[7]=N=>f.value.rot+=90)},v(n.value.rotate90),9,Dk),u("button",{class:"aero-cropper__mini",type:"button",disabled:e.disabled||!m.value,onClick:O[8]||(O[8]=N=>$())},v(n.value.reset),9,Vk)]),u("div",zk,v(U.value),1),u("button",{class:"aero-cropper__export",type:"button",disabled:e.disabled||!m.value,onClick:P},v(n.value.export),9,Ek),S.value.length?(d(),p("div",Rk,[(d(!0),p(q,null,X(S.value,N=>(d(),p("div",{key:N.size,class:"aero-cropper__result-item"},[u("img",{src:N.url,width:N.size,height:N.size,alt:N.size+"px"},null,8,Fk),u("span",null,v(N.size)+"px",1)]))),128))])):W("",!0)])],2))}}),qk=Z(Hk,[["__scopeId","data-v-0da5076c"]]),Nk=le(qk,"AeroCropper"),jk=["aria-label"],Gk=["href","onClick"],Uk=z({__name:"anchor",props:{items:{},container:{},offset:{default:20}},setup(e){var h;const{anchor:o}=Y(),t=e,a=C((h=t.items[0])==null?void 0:h.key);let s=window;function l(){return s}const r=El(l,n);function n(){var b,$;const g=s,k=(g===window?0:g.getBoundingClientRect().top)+t.offset+1;let x=((b=t.items[0])==null?void 0:b.key)??"";for(const y of t.items){const w=document.getElementById(y.key);w&&w.getBoundingClientRect().top<=k&&(x=y.key)}g instanceof Element&&g.scrollTop+g.clientHeight>=g.scrollHeight-2&&(x=(($=t.items[t.items.length-1])==null?void 0:$.key)??x),a.value=x}function c(){if(s=window,t.container){const g=document.querySelector(t.container);g&&(s=g)}r.stop(),r.start(),n()}const f=()=>n();De(()=>{c(),window.addEventListener("resize",f,{passive:!0})}),Le(()=>{r.stop(),window.removeEventListener("resize",f)}),be(()=>t.container,c);function m(g){var _;(_=document.getElementById(g))==null||_.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(n,420)}return(g,_)=>(d(),p("nav",{class:"aero-anchor","aria-label":i(o).navAria},[(d(!0),p(q,null,X(e.items,k=>(d(),p("a",{key:k.key,class:Q(["aero-anchor__item",{"is-active":k.key===a.value}]),href:`#${k.key}`,onClick:Pe(x=>m(k.key),["prevent"])},v(k.label),11,Gk))),128))],8,jk))}}),Kk=Z(Uk,[["__scopeId","data-v-3f80406c"]]),Wk=le(Kk,"AeroAnchor"),Yk=z({__name:"affix",props:{offsetTop:{default:0},top:{default:76},anchor:{type:Function,default:void 0},gutter:{default:8},target:{type:Function,default:void 0}},emits:["change"],setup(e,{emit:o}){const t=e,a=o,s=C(),l=C(),r=C(!1),n=C(t.top),c=El(()=>{var k;return((k=t.target)==null?void 0:k.call(t))??window},()=>g());let f;function m(){var $,y;const k=($=t.anchor)==null?void 0:$.call(t);if(k)return k;const x=(y=t.target)==null?void 0:y.call(t);if(!(x instanceof HTMLElement))return null;const b=x.querySelector("[data-affix-anchor]");if(b)return b;for(const w of Array.from(x.children)){if(!(w instanceof HTMLElement))continue;const T=getComputedStyle(w).position;if(!(T!=="sticky"&&T!=="fixed")&&w.getBoundingClientRect().height>0)return w}return null}function h(){const k=m(),x=k?k.getBoundingClientRect().bottom+t.gutter:t.top,b=Math.max(t.gutter,Math.round(x));b!==n.value&&(n.value=b)}function g(){var w;const k=s.value;if(!k)return;h();const x=k.getBoundingClientRect(),b=(w=t.target)==null?void 0:w.call(t);let $;b instanceof HTMLElement?$=x.top-b.getBoundingClientRect().top+b.scrollTop:$=x.top;const y=$>t.offsetTop;y!==r.value&&(r.value=y,l.value&&(l.value.style.height=r.value?x.height+"px":"0",l.value.style.display=r.value?"block":"none"),a("change",y))}const _=()=>g();return De(()=>{var $;c.start(),window.addEventListener("resize",_,{passive:!0});const k=[],x=($=t.target)==null?void 0:$.call(t);x instanceof HTMLElement&&k.push(x);const b=m();b&&k.push(b),k.length&&typeof ResizeObserver<"u"&&(f=new ResizeObserver(_),k.forEach(y=>f==null?void 0:f.observe(y))),g(),requestAnimationFrame(g),document.addEventListener("transitionrun",_),document.addEventListener("transitionend",_)}),Le(()=>{c.stop(),f==null||f.disconnect(),f=void 0,window.removeEventListener("resize",_),document.removeEventListener("transitionrun",_),document.removeEventListener("transitionend",_),r.value&&(r.value=!1,l.value&&(l.value.style.height="0",l.value.style.display="none"))}),(k,x)=>(d(),p("div",{ref_key:"wrap",ref:s,class:"aero-affix"},[u("div",{ref_key:"ph",ref:l,class:"aero-affix__ph","aria-hidden":"true"},null,512),u("div",{class:Q(["aero-affix__inner",{"is-fixed":r.value}]),style:me({"--affix-top":n.value+"px"})},[de(k.$slots,"default",{},void 0,!0)],6)],512))}}),Xk=Z(Yk,[["__scopeId","data-v-8d78a732"]]),Zk=le(Xk,"AeroAffix"),Qk=z({__name:"theme-provider",props:{theme:{},preset:{},brand:{},scoped:{type:Boolean,default:!1}},setup(e,{expose:o}){const t=e,{state:a,setTheme:s,setPreset:l,setBrand:r,resetBrand:n}=Cs();xo("AeroThemeCtx",{state:a});const c=C(),f={aero:{brand:"#0EBFFF"},violet:{brand:"#7C6CFF",onBrand:"#fff"},mint:{brand:"#10C999"},sunset:{brand:"#FF8A3D",onBrand:"#fff"},rose:{brand:"#FF5C8A",onBrand:"#fff"}};function m(g){const _=g.replace("#","").trim();if(!_)return"#fff";const k=parseInt(_.slice(0,2),16)/255,x=parseInt(_.slice(2,4),16)/255,b=parseInt(_.slice(4,6),16)/255,$=Math.max(k,x,b),y=Math.min(k,x,b);return($+y)/2*100>52?`color-mix(in srgb, ${g} 30%, #000)`:"#FFFFFF"}const h=["--ui-brand","--ui-on-brand","--ui-brand-deep","--ui-brand-ink"];return xn(()=>{t.scoped||(t.theme&&s(t.theme),t.preset&&l(t.preset),t.brand?r(t.brand):t.brand===void 0&&t.preset&&(n(),l(t.preset)))}),be(()=>[t.scoped,t.theme,t.preset,t.brand,!!c.value],([g,_,k,x])=>{if(!g||!c.value)return;const b=c.value;b.classList.toggle("aero-dark",_==="dark");const $={};if(x)$["--ui-brand"]=x,$["--ui-on-brand"]=m(x),$["--ui-brand-deep"]=`color-mix(in srgb, ${x} 86%, #03202E)`,$["--ui-brand-ink"]=`color-mix(in srgb, ${x} 52%, #062940)`;else if(k){const y=f[k];$["--ui-brand"]=y.brand,y.onBrand&&($["--ui-on-brand"]=y.onBrand),$["--ui-brand-deep"]=`color-mix(in srgb, ${y.brand} 86%, #03202E)`,$["--ui-brand-ink"]=`color-mix(in srgb, ${y.brand} 52%, #062940)`}for(const[y,w]of Object.entries($))b.style.setProperty(y,w);h.filter(y=>!(y in $)).forEach(y=>b.style.removeProperty(y))},{immediate:!0}),o({root:c}),(g,_)=>(d(),p("div",{ref_key:"root",ref:c,class:"aero-tp"},[de(g.$slots,"default",{},void 0,!0)],512))}}),Jk=Z(Qk,[["__scopeId","data-v-45ca83b9"]]),e2=le(Jk,"AeroThemeProvider"),t2={install(e){kk.forEach(o=>{const t=o;t.name&&e.component(t.name,o)})}},o2={class:"pg-side"},a2={class:"pg-side__cap"},s2=["href","onClick"],l2={key:0,class:"pg-hl"},r2=z({__name:"Sidebar",props:{groups:{},active:{},hits:{},query:{}},emits:["go"],setup(e,{emit:o}){const t=e,a=o;function s(l,r){var g;const n=l.split(""),c=(t.query??"").toLowerCase();if(!c||!((g=t.hits)!=null&&g[r]))return n.map(_=>({ch:_,hl:!1}));const f=l.toLowerCase(),m=new Array(n.length).fill(!1);let h=0;for(let _=0;_<f.length&&h<c.length;_++)f[_]===c[h]&&(m[_]=!0,h++);return n.map((_,k)=>({ch:_,hl:m[k]}))}return(l,r)=>(d(),p("aside",o2,[(d(!0),p(q,null,X(e.groups,n=>(d(),p("div",{key:n.name,class:"pg-side__group"},[u("span",a2,v(n.name),1),(d(!0),p(q,null,X(n.items,c=>(d(),p("a",{key:c.key,class:Q(["pg-side__link",{"is-active":c.key===e.active}]),href:`#/${c.key}`,onClick:Pe(f=>a("go",c.key),["prevent"])},[(d(!0),p(q,null,X(s(c.title,c.key),(f,m)=>(d(),p(q,{key:m},[f.hl?(d(),p("em",l2,v(f.ch),1)):(d(),p(q,{key:1},[R(v(f.ch),1)],64))],64))),128))],10,s2))),128))]))),128))]))}}),n2=Z(r2,[["__scopeId","data-v-1bf724b6"]]),i2="/aero-ui-view/large.svg",kc={nav:{searchPlaceholder:"搜索组件…",expandMenuAria:"展开菜单",switchToEn:{target:"EN",title:"Switch to EN",aria:"Switch to English"},switchToZh:{target:"中",title:"Switch to 中",aria:"Switch to Chinese"},langMenu:{triggerTitle:"选择语言",triggerAria:"语言选择",menuTitle:"语言",zh:"中文",en:"English",checkAria:"当前语言",num:"中"},aiGuide:{label:"AI Skill",aria:"Aero UI 开发助手 skill 指南"}},menu:{title:"组件目录",closeAria:"收起菜单",searchPlaceholder:"搜索组件…",empty:"无匹配组件"},api:{name:"名称",type:"类型",default:"默认",description:"说明",payload:"载荷"},codeView:{stage:"Demo",copyCode:"复制此代码",copied:"已复制",viewCode:"查看此代码",fullSource:e=>`${e} 完整源码（demo/basic.vue）`},toast:{demoCopied:"demo 源文件已复制到剪贴板"},announce:{title:"AeroUI Release v1.0.0「平流层」正式发布🎉",body:"一个好看、优雅、易套用的 Vue 组件库",action:"查看发布说明"},notFound:{title:"未找到组件",body:e=>`搜索「${e}」无结果，试试其他关键词。`},aiGuidePage:{title:"AI Skill",intro:"这个页面帮助你把 aero-vue 的配套 AI Skill 安装到你的 AI 编程助手中。安装后，AI 能按照官方用法使用全部 102 个组件，而不是凭记忆编造 API。",oneLiner:e=>`请阅读 ${e.trim()?e:"（公开仓文档地址，Release 填真值）"} 并按照说明，为我的项目安装 aero-vue 组件库与配套 skill`,copyBlockLabel:"复制这条指令给 AI agent",quickStartLead:"把下面这行话直接发给你的 AI 助手，即可自动完成安装：",step1Title:"第一步 · 安装组件库（已在使用 aero-vue 的项目跳过本步）",step1Desc:"skill 依赖组件库，先确认库已就位：",step1Code1:"npm i aero-vue",step1Follow:"再在入口文件引入样式与组件：",step1Code2:`import 'aero-vue/styles'
import { AeroButton } from 'aero-vue'`,step2Title:"第二步 · 安装 Skill",step2Desc:"组件库装好后，skill 就在你的依赖目录里，复制到 AI 工具的技能目录即可：",step2Code:"cp -r node_modules/aero-vue/skills/aero-vue ~/.claude/skills/",step2Follow:"重启 AI 工具后，问它「aero-vue 有哪些组件」，能正确列出即安装成功。",boxSizingTitle:"盒模型须知（box-sizing）",boxSizingCode:`*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }`,boxSizingBody:"<mark>推荐</mark>在你的项目中使用标准全局重置：aero-vue 组件已逐元素声明 border-box，在有无全局重置的宿主中均实测零几何漂移——添加与否都不会破坏组件；添加可获得更正规的页面排版基线（多数脚手架与 AI 生成项目已自带）。若遇组件几何异常，请先<mark>升级 aero-vue 版本</mark>排查，勿以临时样式补丁掩盖问题。"}},c2={nav:{searchPlaceholder:"Search components…",expandMenuAria:"Expand menu",switchToEn:{target:"EN",title:"Switch to English",aria:"Switch to English"},switchToZh:{target:"中",title:"Switch to Chinese",aria:"Switch to Chinese"},langMenu:{triggerTitle:"Choose language",triggerAria:"Language selection",menuTitle:"Language",zh:"中文",en:"English",checkAria:"Current language",num:"EN"},aiGuide:{label:"AI Skill",aria:"Aero UI developer skill guide"}},menu:{title:"Components",closeAria:"Collapse menu",searchPlaceholder:"Search components…",empty:"No matching components"},api:{name:"Name",type:"Type",default:"Default",description:"Description",payload:"Payload"},codeView:{stage:"Demo",copyCode:"Copy this code",copied:"Copied",viewCode:"View this code",fullSource:e=>`${e} full source (demo/basic.vue)`},toast:{demoCopied:"Demo source copied to clipboard"},announce:{title:'AeroUI Release v1.0.0 "Stratosphere" officially released 🎉',body:"A beautiful, elegant, easy-to-use Vue component library Vue 3 UI library.",action:"View release notes"},notFound:{title:"Component not found",body:e=>`No results for "${e}". Try another keyword.`},aiGuidePage:{title:"AI Skill",intro:"This page helps you install the aero-vue companion AI Skill into your AI coding assistant. Once installed, your AI uses all 102 components exactly as documented, instead of inventing APIs from memory.",oneLiner:e=>`Read ${e.trim()?e:"(public repo docs URL, filled at Release)"} and follow the instructions to install the aero-vue component library and its accompanying skill for my project`,copyBlockLabel:"Copy this command for your AI agent",quickStartLead:"Send the line below to your AI assistant and it will handle the installation:",step1Title:"Step 1 · Install the library (skip if your project already uses aero-vue)",step1Desc:"The skill depends on the library itself:",step1Code1:"npm i aero-vue",step1Follow:"Then import styles and components in your entry file:",step1Code2:`import 'aero-vue/styles'
import { AeroButton } from 'aero-vue'`,step2Title:"Step 2 · Install the skill",step2Desc:"Once the library is installed, the skill files live in your dependencies — copy them into your AI tool's skills directory:",step2Code:"cp -r node_modules/aero-vue/skills/aero-vue ~/.claude/skills/",step2Follow:'Restart your AI tool and ask "which components does aero-vue have" — a correct list means the skill is live.',boxSizingTitle:"Box-model note (box-sizing)",boxSizingCode:`*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }`,boxSizingBody:"We <mark>recommend</mark> using a standard global reset in your project: aero-vue components declare border-box element by element and show zero geometry drift in hosts with or without a global reset<mark>— adding it or not will not break the components</mark>; adding it gives you a more conventional page-typography baseline (most scaffolds and AI-generated projects already ship it). If you hit a component geometry anomaly, <mark>upgrade aero-vue</mark> first to rule out the cause, instead of masking the problem with ad-hoc style patches."}},rs="aero-pg-lang",qr="zh-cn",d2={"zh-cn":kc,"en-us":c2};function u2(){const e=localStorage.getItem(rs);return e==="en-us"?"en-us":(e!=="zh-cn"&&localStorage.setItem(rs,qr),qr)}const it=wo({locale:u2()});function Nl(){function e(){it.locale=it.locale==="en-us"?"zh-cn":"en-us",localStorage.setItem(rs,it.locale)}function o(s){it.locale!==s&&(it.locale=s,localStorage.setItem(rs,s))}const t=G(()=>it.locale),a=G(()=>d2[it.locale]??kc);return{locale:t,messages:a,t:a,toggle:e,setLang:o,isEn:G(()=>it.locale==="en-us")}}const p2={class:"pg-nav","data-affix-anchor":""},m2=["aria-label"],f2={class:"pg-search"},h2=["value","placeholder"],v2={class:"pg-actions"},g2=["title","aria-label","aria-expanded"],b2={class:"pg-lang-num"},y2={class:"pg-lang-menu",role:"menu"},_2={class:"pg-lang-menu__title"},x2=["aria-checked","onClick"],k2={class:"pg-gh",href:"https://github.com/FanXingYiDianYun/aero-vue",target:"_blank",rel:"noopener"},w2=["title","aria-label"],A2={class:"pg-gh-num"},$2=z({__name:"PgNav",props:{query:{},onQuery:{type:Function},menuOpen:{type:Boolean},onMenuToggle:{type:Function},onGoHome:{type:Function}},emits:["query","go-home","menu-toggle"],setup(e,{emit:o}){const{t,locale:a,setLang:s}=Nl(),l=C(!1),r=C(),n=C(null);function c(g){var _;s(g),l.value=!1,(_=r.value)==null||_.focus()}function f(g){var b,$,y;if(!l.value)return;const _=g.target,k=(($=(b=n.value)==null?void 0:b.$el)==null?void 0:$.contains(_))??!1,x=((y=document.querySelector(".aero-popover"))==null?void 0:y.contains(_))??!1;!k&&!x&&(l.value=!1)}function m(g){var _;g.key==="Escape"&&l.value&&(l.value=!1,(_=r.value)==null||_.focus())}De(()=>{document.addEventListener("keydown",m),document.addEventListener("pointerdown",f,{capture:!0})}),Le(()=>{document.removeEventListener("keydown",m),document.removeEventListener("pointerdown",f,{capture:!0})});const h=o;return(g,_)=>(d(),p("header",p2,[e.menuOpen?W("",!0):(d(),p("button",{key:0,class:"pg-menu-btn",type:"button","aria-label":i(t).nav.expandMenuAria,onClick:_[0]||(_[0]=k=>h("menu-toggle",!0))},[A(i(We),{name:"menu",size:20})],8,m2)),u("a",{class:"pg-logo",href:"#/button",onClick:_[1]||(_[1]=Pe(k=>h("go-home"),["prevent"]))},[_[5]||(_[5]=u("img",{class:"pg-logo-img",src:i2,width:"44",height:"44",alt:"Aero UI"},null,-1)),_[6]||(_[6]=u("span",{class:"pg-name"},"Aero UI",-1)),A(i(Ue),{type:"soft"},{default:I(()=>[..._[4]||(_[4]=[R("v0.1.0",-1)])]),_:1})]),u("div",f2,[A(i(We),{name:"search",size:15}),u("input",{value:e.query,placeholder:i(t).nav.searchPlaceholder,spellcheck:"false",onInput:_[2]||(_[2]=k=>h("query",k.target.value))},null,40,h2)]),u("div",v2,[A(i(as),{ref_key:"langPopRoot",ref:n,trigger:"click",placement:"bottom",width:132,open:l.value,"onUpdate:open":_[3]||(_[3]=k=>l.value=k)},{content:I(()=>[u("div",y2,[u("b",_2,v(i(t).nav.langMenu.menuTitle),1),(d(!0),p(q,null,X([{key:"zh-cn",label:i(t).nav.langMenu.zh},{key:"en-us",label:i(t).nav.langMenu.en}],k=>(d(),p("button",{key:k.key,type:"button",role:"menuitemradio",class:Q(["pg-lang-menu__item",{"is-on":i(a)===k.key}]),"aria-checked":i(a)===k.key,onClick:x=>c(k.key)},[i(a)===k.key?(d(),fe(i(We),{key:0,name:"check",size:12,class:"pg-lang-menu__check"})):W("",!0),u("span",null,v(k.label),1)],10,x2))),128))])]),default:I(()=>[u("button",{ref_key:"langBtn",ref:r,class:"pg-lang",type:"button",title:i(t).nav.langMenu.triggerTitle,"aria-label":i(t).nav.langMenu.triggerAria,"aria-expanded":l.value,"aria-haspopup":!0},[A(i(We),{name:"globe",size:13}),u("span",b2,v(i(t).nav.langMenu.num),1),A(i(We),{name:"chevron-down",size:11,class:"pg-lang-chev"})],8,g2)]),_:1},8,["open"]),u("a",k2,[A(i(We),{name:"git-branch",size:15}),_[7]||(_[7]=u("span",{class:"pg-gh-num"},"Stars",-1))]),u("a",{class:"pg-gh",href:"#/ai-guide",title:i(t).nav.aiGuide.aria,"aria-label":i(t).nav.aiGuide.aria},[A(i(We),{name:"sparkles",size:15}),u("span",A2,v(i(t).nav.aiGuide.label),1)],8,w2),A(i(eo),{class:"pg-theme"})])]))}}),S2=Z($2,[["__scopeId","data-v-f8c99037"]]),T2={class:"pg-menu"},C2={class:"pg-menu__head"},B2={class:"pg-menu__title"},L2=["aria-label"],M2={class:"pg-menu__search"},P2=["aria-expanded","onClick"],I2={class:"pg-menu__cap"},D2={class:"pg-menu__count"},V2={class:"pg-menu__children"},z2={class:"pg-menu__children-in"},E2=["onClick"],R2={key:0,class:"pg-menu__empty"},F2=z({__name:"PgMobileMenu",props:{groups:{},active:{},openGroups:{},searchOptions:{}},emits:["go","go-close","group-toggle","search-pick"],setup(e,{emit:o}){const{t}=Nl(),a=o;return(s,l)=>(d(),p("div",T2,[u("div",C2,[u("span",B2,v(i(t).menu.title),1),l[2]||(l[2]=u("span",{class:"pg-menu__head-spacer"},null,-1)),u("button",{class:"pg-menu__close",type:"button","aria-label":i(t).menu.closeAria,onClick:l[0]||(l[0]=r=>a("go-close"))},[A(i(We),{name:"x",size:16})],8,L2)]),u("div",M2,[A(i(ql),{options:e.searchOptions,placeholder:i(t).menu.searchPlaceholder,limit:99,"group-by":"group",onSelect:l[1]||(l[1]=r=>a("search-pick",r))},null,8,["options","placeholder"])]),(d(!0),p(q,null,X(e.groups,r=>(d(),p("div",{key:r.name,class:Q(["pg-menu__node",{"is-open":e.openGroups.has(r.name)}])},[u("button",{class:"pg-menu__branch",type:"button","aria-expanded":e.openGroups.has(r.name),onClick:n=>a("group-toggle",r.name)},[l[3]||(l[3]=u("svg",{class:"pg-menu__chev",width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("path",{d:"m9 18 6-6-6-6"})],-1)),u("span",I2,v(r.name),1),u("span",D2,v(r.items.length),1)],8,P2),u("div",V2,[u("div",z2,[(d(!0),p(q,null,X(r.items,n=>(d(),p("a",{key:n.key,class:Q(["pg-menu__link",{"is-active":n.key===e.active}]),href:"#",onClick:Pe(c=>a("go",n.key),["prevent"])},v(n.title),11,E2))),128))])])],2))),128)),e.groups.length?W("",!0):(d(),p("div",R2,v(i(t).menu.empty),1))]))}}),O2=Z(F2,[["__scopeId","data-v-08470b7f"]]),H2=[{items:[{key:"button",component:"AeroButton",demo:"btn",props:[["type","'primary'|'outline'|'ghost'|'danger'|'dark'","'primary'"],["size","'sm'|'md'|'lg'","'md'"],["disabled","boolean","false"],["loading","boolean","false"],["block","boolean","false"],["iconOnly","boolean","false"],["ripple","boolean","true"],["nativeType","'button'|'submit'|'reset'","'button'"]],events:[["click","MouseEvent"],["focus","FocusEvent"],["blur","FocusEvent"]]},{key:"button-group",component:"AeroButtonGroup",demo:"btnGroup",props:[["vertical","boolean","false"]]},{key:"action-buttons",component:"AeroActionButtons",demo:"actDemo",props:[["rejectTip","string","'回滚'"],["acceptTip","string","'部署'"]],events:[["reject","—"],["accept","—"]]},{key:"icon",component:"AeroIcon",demo:"icon",props:[["name","AeroIconName","—"],["size","number|string","16"],["stroke","number","2"]]},{key:"icon-button",component:"AeroIconButton",demo:"iconBtn",props:[["icon","AeroIconName","—"],["disabled","boolean","false"],["loading","boolean","false"],["dot","boolean","false"],["label","string","—"]],events:[["click","MouseEvent"],["focus","FocusEvent"],["blur","FocusEvent"]]},{key:"link",component:"AeroLink",demo:"link",props:[["href","string","'#'"],["external","boolean","false"],["disabled","boolean","false"]]},{key:"typography",component:"AeroTypography",demo:"typography",props:[["level","'display'|'heading-en'|'title'|'body'|'caption'","'body'"],["tag","string","—"],["en","boolean","false"],["mono","boolean","false"],["highlight","boolean","false"],["sticker","boolean","false"]]},{key:"divider",component:"AeroDivider",demo:"divider",props:[["vertical","boolean","false"],["dashed","boolean","false"],["title","string","—"]]},{key:"space",component:"AeroSpace",demo:"space",props:[["gap","number","14"],["direction","'horizontal'|'vertical'","'horizontal'"],["justify","string","—"],["align","string","—"],["wrap","boolean","true"]]},{key:"scrollbar",component:"AeroScrollbar",demo:"scrollbar",props:[["maxHeight","number|string","260"]]},{key:"grid",component:"AeroGrid",demo:"grid",props:[["cols","number","3"],["gap","number","20"]]},{key:"layout",component:"AeroLayout",demo:"layout",props:[["padding","'normal'|'compact'|'none'","'normal'"],["alt","boolean","false"],["maxWidth","number|string","1180"],["radius","number|string","—"]]},{key:"theme-switch",component:"AeroThemeSwitch",demo:"themeSwitch",props:[["modelValue","'light'|'dark'","—"],["disabled","boolean","false"],["size","'sm'|'md'|'lg'","'md'"]],events:[["update:modelValue","'light'|'dark'"],["change","'light'|'dark'"]]}]},{items:[{key:"input",component:"AeroInput",demo:"input",props:[["modelValue","string|number","—"],["placeholder","string","—"],["disabled","boolean","false"],["readonly","boolean","false"],["error","boolean","false"],["prefix","string","—"],["suffix","string","—"],["type","string","''"],["clearable","boolean","false"],["maxlength","number","—"],["width","number|string","—"]],events:[["update:modelValue","string"],["change","Event"],["clear","—"],["focus/blur","FocusEvent"],["input","Event"]]},{key:"textarea",component:"AeroTextarea",demo:"textarea",props:[["modelValue","string","—"],["placeholder","string","—"],["disabled","boolean","false"],["readonly","boolean","false"],["error","boolean","false"],["maxlength","number","—"],["showCount","boolean","false"],["rows","number","3"]],events:[["update:modelValue","string"],["focus/blur","FocusEvent"]]},{key:"input-number",component:"AeroInputNumber",demo:"inputNumber",props:[["modelValue","number","—"],["min/max","number","—"],["step","number","1"],["stepStrictly","boolean","false"],["disabled","boolean","false"],["placeholder","string","—"]],events:[["update:modelValue","number"],["change","number"]]},{key:"input-tag",component:"AeroInputTag",demo:"inputTag",props:[["modelValue","string[]","—"],["max","number","—"],["placeholder","string","输入后回车"],["disabled","boolean","false"]],events:[["update:modelValue","string[]"],["change","string[]"]]},{key:"search",component:"AeroSearch",demo:"search",props:[["options","AeroSearchOption[]","—","候选数据源"],["placeholder","string","—","占位（缺省取词包）"],["limit","number","12","召回上限（默认 12）"],["emptyText","string","—","空结果提示（缺省取词包）"],["disabled","boolean","false","禁用"],["groupBy","'description' | (keyof AeroSearchOption & string)","—","分组键（缺省=不分组平铺；按该字段出组标题，不参与匹配）"],["showOptionDesc","boolean","false","结果副行开关（默认 false；开=携 description 项渲染独立小字淡色副行命中位 mark，关=仅主行组件名，描述仍参与匹配召回）"]],events:[["select","AeroSearchOption"],["search","(q, hits)"],["clear","—"]]},{key:"select",component:"AeroSelect",demo:"select",props:[["modelValue","string|number","—"],["options","AeroSelectOption[]","—"],["placeholder","string","请选择"],["clearable","boolean","false"],["disabled","boolean","false"]],events:[["update:modelValue","string|number|undefined"],["change","string|number|undefined"]]},{key:"cascader",component:"AeroCascader",demo:"cascader",props:[["modelValue","string[]","—"],["options","CascaderOption[]","—"],["placeholder","string","请选择"],["disabled","boolean","false"]],events:[["update:modelValue","string[]"],["change","string[], labels"]]},{key:"tree-select",component:"AeroTreeSelect",demo:"treeSelect",props:[["data","AeroTreeNode[]","—"],["modelValue","string","—"],["placeholder","string","请选择"],["disabled","boolean","false"],["defaultExpandAll","boolean","true"]],events:[["update:modelValue","string"],["change","string"]]},{key:"date-picker",component:"AeroDatePicker",demo:"datePicker",props:[["modelValue","'YYYY-MM-DD'","—"],["placeholder","string","选择日期"],["disabled","boolean","false"]],events:[["update:modelValue","string"],["change","string"]]},{key:"time-picker",component:"AeroTimePicker",demo:"timePicker",props:[["modelValue","'HH:mm'","—"],["placeholder","string","选择时间"],["disabled","boolean","false"],["minuteStep","number","5"]],events:[["update:modelValue","string"],["change","string"]]},{key:"checkbox",component:"AeroCheckbox",demo:"checkbox",props:[["modelValue","boolean|string[]|number[]","—"],["value","string|number","—"],["disabled","boolean","false"]],events:[["change","boolean"],["focus","FocusEvent"],["blur","FocusEvent"]]},{key:"radio",component:"AeroRadio",demo:"radio",props:[["value","string|number","—"],["disabled","boolean","false"],["modelValue","boolean|string|number","false"]],events:[["change","string|number|boolean"]]},{key:"switch",component:"AeroSwitch",demo:"switchD",props:[["modelValue","boolean","—"],["disabled","boolean","false"]],events:[["change","boolean"],["focus","FocusEvent"],["blur","FocusEvent"]]},{key:"slider",component:"AeroSlider",demo:"slider",props:[["modelValue","number","0"],["min/max","number","0/100"],["step","number","1"],["showScale","boolean","true"],["startLabel/endLabel","string","—"],["unit","string","''"],["disabled","boolean","false"]],events:[["update:modelValue","number"],["change","number"],["focus","FocusEvent"],["blur","FocusEvent"]]},{key:"rate",component:"AeroRate",demo:"rate",props:[["modelValue","number","0"],["count","number","5"],["disabled","boolean","false"],["animate","boolean","true"],["confetti","boolean","true"],["allowDecimal","boolean","false"],["allowReselect","boolean","false"]],events:[["update:modelValue","number"],["change","number"]]},{key:"color-picker",component:"AeroColorPicker",demo:"colorPicker",props:[["modelValue","string","'#0EBFFF'"],["presets","string[]|null","内置8色"]],events:[["update:modelValue","string"],["change","string"]]},{key:"upload",component:"AeroUpload",demo:"upload",props:[["modelValue","UploadFile[]","—"],["drag","boolean","false"],["multiple","boolean","false"],["accept","string","—"],["disabled","boolean","false"],["limit","number","0"],["name","string","'file'"],["withCredentials","boolean","false"],["showFileList","boolean","true"],["listType","'text'|'picture'|'picture-card'","'text'"],["tip","string","—"],["beforeUpload","BeforeUploadHook","—"],["beforeRemove","(f: UploadFile) => false | void | Promise<false | void>","—"]],events:[["change","File[]"],["remove","UploadFile"],["update:modelValue","UploadFile[]"],["exceed","File[]"],["preview","UploadFile"],["upload","File"],["success","UploadFile"],["progress","UploadFile"],["error","UploadFile"]]},{key:"transfer",component:"AeroTransfer",demo:"transfer",props:[["data","TransferItem[]","—"],["modelValue","string[]","—"],["titles","[string,string]","['来源','目标']"],["disabled","boolean","false"]],events:[["update:modelValue","string[]"],["change","string[]"]]},{key:"autocomplete",component:"AeroAutocomplete",demo:"autocomplete",props:[["modelValue","string","—"],["suggestions","AutoSuggestion[]","—"],["placeholder","string","—"],["disabled","boolean","false"]],events:[["update:modelValue","string"],["select","AutoSuggestion"]]},{key:"mention",component:"AeroMention",demo:"mention",props:[["modelValue","string","—"],["options","MentionOption[]","—"],["placeholder","string","输入 @ 提及成员…"],["trigger","string","'@'"]],events:[["update:modelValue","string"],["select","MentionOption"]]},{key:"otp",component:"AeroOTP",demo:"otp",props:[["modelValue","string","—"],["length","number","6"],["numeric","boolean","true"],["disabled","boolean","false"]],events:[["complete","string"],["update:modelValue","string"]]},{key:"form",component:"AeroForm + AeroFormItem",demo:"form",props:[["submit","() => void","—"],["AeroFormItem.label","string","''"],["AeroFormItem.required","boolean","false"],["AeroFormItem.hint/error","string","''"]],events:[["submit","Event"]]}]},{items:[{key:"table",component:"AeroTable",demo:"table",props:[["columns","AeroTableColumn[]","—"],["data","Row[]","—"],["emptyText","string","暂无数据"]]},{key:"tree",component:"AeroTree",demo:"tree",props:[["data","AeroTreeNode[]","—"],["expanded","string[]","—"],["checked","string[]","—"],["activeKey","string","—"],["checkable","boolean","false"],["defaultExpandAll","boolean","false"],["includeParents","boolean","false"]],events:[["update:expanded","string[]"],["update:checked","string[]"],["select","AeroTreeNode"]]},{key:"timeline",component:"AeroTimeline",demo:"timeline",props:[["items","AeroTimelineItem[]","—"]]},{key:"tag",component:"AeroTag",demo:"tag",props:[["accent","boolean","false"]]},{key:"badge",component:"AeroBadge",demo:"badge",props:[["type","'solid'|'soft'|'line'|'dark'|'ok'|'warn'|'err'","'soft'"],["dot","boolean","false"]]},{key:"avatar",component:"AeroAvatar",demo:"avatar",props:[["tone","number","2"],["size","number|string","44"],["src","string","—"],["alt","string","—"],["shape","'circle'|'square'","'circle'"],["fit","'cover'|'contain'|'fill'","'cover'"]]},{key:"avatar-group",component:"AeroAvatarGroup",demo:"avatarGroup",props:[["total","number","—"],["max","number","5"],["size","number|string","44"]]},{key:"cropper",component:"AeroCropper",demo:"cropper",props:[["exportSizes","number[]","[32,48,64,96,128]"],["shape","'circle'|'rect'","'circle'"],["minSize","number","60"],["maxSize","number","0（自动 view-10）"],["disabled","boolean","false"],["view","number","260"],["labels","Partial<CropperLabels>","—"]],events:[["change","CropFrameState"],["export","CropResult[]"],["error","unknown"]]},{key:"card",component:"AeroCard",demo:"card",props:[["hoverable","boolean","false"],["paddingless","boolean","false"],["width","number|string","—"],["minHeight","number|string","—"]]},{key:"carousel",component:"AeroCarousel",demo:"carousel",props:[["slides","AeroCarouselSlide[]","—"],["interval","number","4200"]],events:[["change","number"]]},{key:"collapse",component:"AeroCollapse",demo:"collapse",props:[["items","CollapseItem[]","—"],["modelValue","string","—"],["accordion","boolean","true"]],events:[["update:modelValue","string|undefined"]]},{key:"descriptions",component:"AeroDescriptions",demo:"descriptions",props:[["data","Record<string,any>","—"],["items","{key,label,span?}[]","—"],["column","number","3"],["bordered","boolean","true"],["title","string","''"]]},{key:"empty",component:"AeroEmpty",demo:"empty",props:[["hint","string","暂无数据"]]},{key:"image",component:"AeroImage",demo:"image",props:[["src","string","—"],["alt","string","''"],["width/height","number|string","100%/-"],["radius","'sm'|'md'|'lg'|'pill'","'md'"],["preview","boolean","false"],["fit","'cover'|'contain'|'fill'","'cover'"]],events:[["preview","string"]]},{key:"image-viewer",component:"AeroImageViewer",demo:"imageViewer",props:[["modelValue","boolean","—"],["urlList","string[]","—"],["initial","number","0"]],events:[["update:modelValue","boolean"]]},{key:"pagination",component:"AeroPagination",demo:"pagination",props:[["modelValue","number","—"],["total","number","—"],["pageSize","number","10"],["jumper","boolean","true"]],events:[["change","number"],["update:modelValue","number"]]},{key:"progress",component:"AeroProgress",demo:"progress",props:[["percent","number","—"],["shimmer","boolean","true"],["status","'normal'|'success'|'error'","'normal'"],["showText","boolean","true"]],events:[]},{key:"ring-progress",component:"AeroRingProgress",demo:"ringProgress",props:[["percent","number","—"],["label","string","''"],["sublabel","string","''"],["size","number","130"],["stroke","number","11"],["width","number","130"]],events:[]},{key:"result",component:"AeroResult",demo:"result",props:[["status","'success'|'error'|'warn'|'info'","'info'"],["title","string","—"],["desc","string","—"]]},{key:"segmented",component:"AeroSegmented",demo:"segmented",props:[["modelValue","string|number","—"],["options","SegmentedOption[]","—"],["disabled","boolean","false"],["block","boolean","false"]],events:[["update:modelValue","string|number"],["change","string|number"]]},{key:"skeleton",component:"AeroSkeleton",demo:"skeleton",props:[["variant","'text'|'circle'|'rect'","'text'"],["height","number|string","12"],["width","number|string","—"],["loading","boolean","true"],["animated","boolean","true"]]},{key:"spinner",component:"AeroSpinner",demo:"spinner",props:[["size","'sm'|'md'|'lg'","'md'"]]},{key:"statistic",component:"AeroStatistic",demo:"statistic",props:[["value","number","—"],["prefix","string","''"],["suffix","string","''"],["label","string","''"],["animated","boolean","true"]]},{key:"qrcode",component:"AeroQRCode",demo:"qrcode",props:[["value","string","—"],["size","number","160"],["margin","number","2"],["fg","string","''（取 --ui-ink）"],["bg","string","'transparent'"],["level","'L'|'M'|'Q'|'H'","'M'"]]},{key:"watermark",component:"AeroWatermark",demo:"watermark",props:[["content","string","—"],["rotate","number","-22"],["gap","number","140"],["fontSize","number","15"],["opacity","number","0.22"],["maxWidth","number|string","—"],["radius","number|string","—"]]},{key:"terminal",component:"AeroTerminal",demo:"terminal",props:[["lines","TermLine[]","—"],["typeSpeed","number","26"],["lineDelay","number","300"],["title","string","'aero@terminal'"]],events:[["done","—"]]},{key:"code-block",component:"AeroCodeBlock",demo:"codeBlock",props:[["code","string","—"],["lang","string","''"],["title","string","''"],["highlight","boolean","true"],["lineNumbers","boolean","true"],["copyable","boolean","true"],["flush","boolean","false"],["collapsible","boolean","false"],["open","boolean","true"]],events:[["update:open","boolean"]]}]},{items:[{key:"menu",component:"AeroMenu",demo:"menu",props:[["items","MenuItem[]","—"],["modelValue","string","—"],["mode","'horizontal'|'vertical'","'horizontal'"],["width","number|string","—"],["collapsed","boolean","false"]],events:[["update:modelValue","string"],["select","MenuItem"],["focus","FocusEvent"],["blur","FocusEvent"],["update:collapsed","boolean"]]},{key:"tabs",component:"AeroTabs",demo:"tabs",props:[["modelValue","string|number","—"],["tabs","{key,label}[]","—"]],events:[["change","key"],["update:modelValue","string|number"]]},{key:"breadcrumb",component:"AeroBreadcrumb",demo:"breadcrumb",props:[["items","BreadcrumbItem[]","—"]]},{key:"dropdown",component:"AeroDropdown",demo:"dropdown",props:[["items","AeroDropdownItem[]","—"],["align","'left'|'right'","'left'"]],events:[["select","AeroDropdownItem"]]},{key:"steps",component:"AeroSteps",demo:"steps",props:[["items","StepItem[]","—"],["current","number","0"]],events:[["change","number"]]},{key:"page-header",component:"AeroPageHeader",demo:"pageHeader",props:[["title","string","—"],["subtitle","string","—"],["back","boolean","false"]],events:[["back","—"]]},{key:"anchor",component:"AeroAnchor",demo:"anchor",props:[["items","AnchorItem[]","—"],["container","string","—"],["offset","number","20"]]},{key:"affix",component:"AeroAffix",demo:"affix",props:[["offsetTop","number","0"],["top","number","76"],["target","() => HTMLElement|Window","window"],["anchor","() => HTMLElement|null|undefined","—"],["gutter","number","8"]],events:[["change","boolean"]]},{key:"back-top",component:"AeroBackTop",demo:"backTop",props:[["threshold","number","240"],["right/bottom","number","26"],["target","string | () => HTMLElement|Window","window"]]},{key:"tour",component:"AeroTour",demo:"tour",props:[["steps","TourStep[]","—"],["modelValue","boolean","—"]],events:[["update:modelValue","boolean"],["finish","—"]]}]},{items:[{key:"dialog",component:"AeroDialog",demo:"dialog",props:[["modelValue","boolean","—"],["title","string","''"],["width","string","'480px'"],["maskClosable","boolean","true"],["blurMask","boolean","true"]],events:[["update:modelValue","boolean"],["close","—"]]},{key:"drawer",component:"AeroDrawer",demo:"drawer",props:[["modelValue","boolean","—"],["title","string","''"],["width","string","'400px'"],["maskClosable","boolean","true"]],events:[["update:modelValue","boolean"],["close","—"]]},{key:"message-box",component:"AeroMessageBox",demo:"messageBox",props:[["confirm().message","string","—"],["confirm().title","string","''"],["confirm().confirmText/cancelText","string","'确定'/'取消'"],["confirm().danger","boolean","false"]],events:[["confirm() → Promise<boolean>","boolean"]]},{key:"notification",component:"AeroNotification",demo:"notification",props:[["show().type","'success'|'error'|'warn'|'info'","''"],["show().title","string","—"],["show().message","string","—"],["show().duration","number","—"]],events:[["success/error/warn/info(title,message?)","—"],["show(opts)","—"]]},{key:"alert",component:"AeroAlert",demo:"alert",props:[["type","'info'|'success'|'warn'|'error'","'info'"],["title","string","—"],["closable","boolean","false"]],events:[]},{key:"loading",component:"AeroLoading",demo:"loading",props:[["loading","boolean","false"],["tip","string","—"]]},{key:"popover",component:"AeroPopover",demo:"popover",props:[["trigger","'hover'|'click'","'hover'"],["placement","'top'|'bottom'|'right'","'bottom'"],["title","string","''"],["width","number","260"],["open","boolean","—"]],events:[["update:open","boolean"]]},{key:"popconfirm",component:"AeroPopconfirm",demo:"popconfirm",props:[["title","string","'确定执行此操作？'"],["confirmText","string","'确定'"],["cancelText","string","'取消'"],["danger","boolean","false"]],events:[["confirm","—"],["cancel","—"]]},{key:"tooltip",component:"AeroTooltip",demo:"tooltip",props:[["content","string","—"],["placement","'top'|'bottom'","'top'"]]},{key:"toast",component:"AeroToast",demo:"toast",props:[["show().type","'success'|'error'|'warn'|'info'","''"],["show().message","string","—"],["show().duration","number","4200"]],events:[["success/error/warn/info(msg, opts?)","—"],["show(opts)","—"]]},{key:"announce",component:"AeroAnnounce",demo:"announce",props:[["icon","AeroIconName","'sparkles'"],["open","boolean","undefined"],["storageKey","string","''"],["animated","boolean","true"],["marquee","boolean","true"],["actionHref","string","—"]],events:[["close","—"],["closed","—"],["update:open","boolean"]]},{key:"chip",component:"AeroChip",demo:"chip",props:[["closable","boolean","false"],["active","boolean","false"]],events:[["close","MouseEvent"]]}]},{items:[{key:"config-provider",component:"AeroConfigProvider",demo:"configProvider",props:[["theme","'light'|'dark'","—"],["preset","Preset","—"],["namespace","string","—"],["locale","'zh-cn'|'en-us'","'zh-cn'"]]},{key:"theme-provider",component:"AeroThemeProvider",demo:"themeProvider",props:[["theme","AeroTheme","—"],["preset","AeroPreset","—"],["brand","string","—"],["scoped","boolean","false"]]},{key:"motion-presets",component:"AeroMotionPresets",demo:"motionPresets",props:[["name","'pulse'|'bounce'|'shake'|'wiggle'|'float'|'spin'","—"],["animated","boolean","false"],["duration","string","—"]]},{key:"dot-field",component:"AeroDotField",demo:"dotField",props:[["shape","'dot'|'x'|'diamond'|'ring'","'dot'"],["density","number","26"],["flow","boolean","false"],["speed","number","1"],["color","string","—"]]},{key:"iridescent-threads",component:"AeroIridescentThreads",demo:"iridescentThreads",props:[["count","number","7"],["cycle","number","32"],["hueShift","number","0"],["opacity","number","1"]]},{key:"parallax-box",component:"AeroParallaxBox",demo:"parallaxBox",props:[["height","number","250"],["hint","string","—"]]},{key:"marquee",component:"AeroMarquee",demo:"marqueeDemo",props:[["variant","'brand'|'type'","'brand'"],["caption","string","—"],["items","{icon?,text,solid?}[]","—"],["duration","number","28/34"],["pauseOnHover","boolean","true"]]},{key:"party-fx",component:"useParty()",demo:"partyFx"}]},{items:[{key:"phone",component:"AeroPhone",demo:"phoneDemo",props:[["time","string","'9:41'"],["title","string","''"],["subtitle","string","''"]]},{key:"mobile-carousel",component:"AeroMobileCarousel",demo:"mCarDemo",props:[["slides","AeroMobileCarouselSlide[]","—"],["interval","number","4200"]],events:[["change","number"]]},{key:"mobile-stat-card",component:"AeroMobileStatCard",demo:"mStatDemo",props:[["label","string","—"],["value","string|number","—"],["chart","'line'|'bar'|'none'","'none'"],["points","AeroSparkPoint[]","—"],["bars","Array<{x,y,w,h,main?}>","—"],["mainColor","boolean","true"]]},{key:"mobile-tab-bar",component:"AeroMobileTabBar",demo:"mTabDemo",props:[["items","AeroMobileTabItem[]","—"],["modelValue","number","0"]],events:[["change","number"],["update:modelValue","number"]]},{key:"swipe-deck",component:"AeroSwipeDeck",demo:"deckDemo",props:[["cards","AeroSwipeCard[]","—"],["loop","boolean","true"],["bare","boolean","false"]],events:[["deploy","AeroSwipeCard"],["rollback","AeroSwipeCard"],["emptied","—"]]},{key:"slide-go",component:"AeroSlideGo",demo:"slideGoDemo",props:[["text","string","'滑动部署'"],["doneText","string","'部署完成'"],["autoReset","boolean","false"],["width","number|string","—"]],events:[["done","—"]]},{key:"sort-list",component:"AeroSortList",demo:"sortDemo",props:[["items","AeroSortItem[]","—"],["width","number|string","—"]],events:[["sorted","AeroSortItem[]"]]},{key:"bottom-sheet",component:"AeroBottomSheet",demo:"sheetDemo",props:[["title","string","''"],["rows","[string,string][]","—"],["open","boolean","false"],["bgTitle","string","—"],["bgHint","string","—"]],events:[["change","boolean"],["update:open","boolean"]]},{key:"knob",component:"AeroKnob",demo:"knobDemo",props:[["modelValue","number","8"],["min/max/step","number","0/16/1"],["unit","string","'CORES'"]],events:[["change","number"],["update:modelValue","number"]]},{key:"pull-to-refresh",component:"AeroPullToRefresh",demo:"ptrDemo",props:[["items","AeroPtrItem[]","—"],["duration","number","1300"],["damping","number","0.55"],["width","number|string","—"],["height","number|string","—"]],events:[["refresh","—"]]}]}],q2={groups:["Basic 基础","Form 表单","DataDisplay 数据展示","Navigation 导航","Feedback 反馈","Others 配置/增强","Mobile 移动端"],items:{button:{title:"Button 按钮",desc:"五种类型、三档尺寸，硬阴影抬升签名交互与涟漪反馈。",props:{type:"视觉类型",size:"尺寸",disabled:"禁用",loading:"加载态",block:"块级撑满",iconOnly:"方形图标按钮",ripple:"涟漪特效开关",nativeType:"原生 type"},events:{focus:"聚焦",blur:"失焦",click:"点击（禁用/加载时拦截）"}},"button-group":{title:"ButtonGroup 按钮组",desc:"首尾圆角拼接，支持水平/垂直。",props:{vertical:"垂直排列"}},"action-buttons":{title:"ActionButtons 操作钮",desc:"拒绝/同意双圆钮，hover 填充位移；与 <code>ButtonGroup</code> 同属操作类按钮。",props:{rejectTip:"左钮提示",acceptTip:"右钮提示"},events:{reject:"拒绝",accept:"同意"}},icon:{title:"Icon 图标",desc:"内置 60+ lucide 风格线性图标，<code>currentColor</code> 继承。",props:{name:"图标名",size:"尺寸",stroke:"描边宽度"}},"icon-button":{title:"IconButton 图标按钮",desc:"<code>38px</code> 圆角图标钮，hover 位移旋转；dot 红点为 GPU 门控动画；loading 旋转 + 禁用点击。",props:{icon:"图标",disabled:"禁用",loading:"加载中（禁用点击 + 旋转动画）",dot:"通知红点",label:"aria-label"},events:{click:"点击（非 disabled/loading）",focus:"聚焦",blur:"失焦"}},link:{title:"Link 链接",desc:"内链/外链/禁用三种态。",props:{href:"地址",external:"外链角标",disabled:"禁用"}},typography:{title:"Typography 排版",desc:"五级阶梯 + 西文轴 + 高亮词/贴纸盒。",props:{level:"阶梯",tag:"HTML 标签（默认按阶梯推导）",en:"西文字体",mono:"等宽字体",highlight:"高亮词",sticker:"贴纸盒"}},divider:{title:"Divider 分割线",desc:"水平/垂直、实/虚线、居中标题。",props:{vertical:"垂直",dashed:"虚线",title:"分隔文案"}},space:{title:"Space 间距",desc:"<code>flex gap</code> 组合容器。",props:{gap:"间距",direction:"方向",justify:"主轴对齐",align:"交叉轴对齐",wrap:"换行"}},scrollbar:{title:"Scrollbar 滚动条",desc:"<code>thin</code> 滚动条容器，hover 变品牌色。",props:{maxHeight:"最大高度"}},grid:{title:"Grid 栅格",desc:"<code>N</code> 列 grid 布局容器。",props:{cols:"列数",gap:"间距"}},layout:{title:"Layout 区块",desc:"<code>section</code> 语义容器，<code>1180px</code> 居中。",props:{radius:"容器圆角",padding:"留白",alt:"浅底",maxWidth:"容器宽"}},"theme-switch":{title:"ThemeSwitch 主题开关",desc:"明暗切换，<code>localStorage</code> 持久化。",props:{modelValue:"受控主题值（v-model）",disabled:"禁用",size:"尺寸 sm 36×20 · md 72×38 · lg 88×44"},events:{"update:modelValue":"主题更新",change:"切换完成"}},input:{title:"Input 输入框",desc:"前缀/后缀/清除/错误态，focus 品牌光晕。",props:{width:"输入框宽度",modelValue:"值",placeholder:"占位",disabled:"禁用",readonly:"只读",error:"错误态",prefix:"前缀",suffix:"后缀",type:"输入类型",clearable:"清除按钮",maxlength:"最大长度",showCount:"显示计数"},events:{input:"连续输入中","update:modelValue":"值变更",change:"变更",clear:"清空","focus/blur":"焦点事件"}},textarea:{title:"Textarea 文本域",desc:"可缩放多行输入，带计数。",props:{modelValue:"值",placeholder:"占位",disabled:"禁用",readonly:"只读",error:"错误态",maxlength:"最大长度",showCount:"计数",rows:"行数"},events:{"update:modelValue":"值变更","focus/blur":"焦点事件"}},"input-number":{title:"InputNumber 数字输入",desc:"步进按钮 + <kbd>↑</kbd><kbd>↓</kbd> + 越界钳制，值变更微弹。",props:{modelValue:"值","min/max":"范围",step:"步长",stepStrictly:"严格步进",disabled:"禁用",placeholder:"占位"},events:{"update:modelValue":"值更新",change:"值确认"}},"input-tag":{title:"InputTag 标签输入",desc:"<kbd>回车</kbd>/<kbd>逗号</kbd>生成标签，退格删除末项。",props:{modelValue:"标签数组",max:"最多标签数",placeholder:"占位",disabled:"禁用"},events:{"update:modelValue":"值更新",change:"变更"}},search:{title:"Search 搜索框",desc:"子序列模糊匹配 + 命中排序召回，命中 <code>mark</code> 高亮，<kbd>↑</kbd><kbd>↓</kbd>/<kbd>Enter</kbd>/<kbd>Esc</kbd> 键盘导航，支持按 <code>description</code> 分组召回；description 命中双行显示。",props:{options:"候选数据源",placeholder:"占位",limit:"召回上限",emptyText:"空结果提示",disabled:"禁用",groupBy:"分组键",showOptionDesc:"结果副行开关（开=携 description 项渲染小字淡色副行；关=仅主行组件名）"},events:{select:"选中项",search:"每次查询的命中列表",clear:"清空"}},select:{title:"Select 选择器",desc:"spring 弹入菜单、键盘导航、可清空。",props:{modelValue:"值",options:"选项",placeholder:"占位",clearable:"可清空",disabled:"禁用"},events:{"update:modelValue":"值更新",change:"选中变更"}},cascader:{title:"Cascader 级联选择",desc:"逐级面包屑下钻，选中路径回显。",props:{modelValue:"路径",options:"级联数据",placeholder:"占位",disabled:"禁用"},events:{"update:modelValue":"值更新",change:"选中变更"}},"tree-select":{title:"TreeSelect 树选择",desc:"树形面板 + 展开控制。",props:{data:"树数据",modelValue:"选中 key",placeholder:"占位",disabled:"禁用",defaultExpandAll:"默认全展开"},events:{"update:modelValue":"值更新",change:"选中变更"}},"date-picker":{title:"DatePicker 日期选择",desc:"月历面板，今日描边、选中硬阴影倾斜块。",props:{modelValue:"日期",placeholder:"占位",disabled:"禁用"},events:{"update:modelValue":"值更新",change:"确认变更"}},"time-picker":{title:"TimePicker 时间选择",desc:"双列滚轮（时/分），分钟步进 <code>5</code>。",props:{modelValue:"时间",placeholder:"占位",disabled:"禁用",minuteStep:"分钟步长"},events:{"update:modelValue":"值更新",change:"确认变更"}},checkbox:{title:"Checkbox 复选",desc:"spring 内块缩放，组内注入。",props:{modelValue:"值",value:"组内取值",disabled:"禁用"},events:{focus:"聚焦",blur:"失焦",change:"状态变化"}},radio:{title:"Radio 单选",desc:"spring 圆点缩放。",props:{modelValue:"选中值",value:"取值",disabled:"禁用"},events:{change:"选中变更"}},switch:{title:"Switch 开关",desc:"spring 圆钮位移。",props:{modelValue:"值",disabled:"禁用"},events:{focus:"聚焦",blur:"失焦",change:"切换"}},slider:{title:"Slider 滑块",desc:"气泡预览 + 刻度行 + 填充轨道，<code>thumb</code> 旋转 hover。",events:{"update:modelValue":"拖动中值变更",change:"松手确认值",focus:"聚焦",blur:"失焦"},props:{disabled:"禁用",modelValue:"值","min/max":"范围",step:"步长",showScale:"刻度","startLabel/endLabel":"两端文案",unit:"单位"}},rate:{title:"Rate 评分",desc:"悬停预览、确认后星星 <code>popIn</code> 弹跳。",events:{"update:modelValue":"评分时值变更",change:"评分确认"},props:{confetti:"确认评分时礼花特效",allowDecimal:"一位小数评级（粒度 0.1）",allowReselect:"首评后允许重选（缺省锁定）",modelValue:"值",count:"星数",disabled:"只读",animate:"弹跳动画"}},"color-picker":{title:"ColorPicker 颜色选择",desc:"自绘 <code>SV</code> 拾取区 + 色相条 + <code>HEX</code> 手输 + 预设色板。",props:{modelValue:"色值",presets:"色板（null 隐藏）"},events:{"update:modelValue":"值更新",change:"确认变更"}},upload:{title:"Upload 上传",desc:"拖拽区 + 文件列表，大小格式化。",props:{disabled:"禁用",limit:"最多文件数（0/缺省不限）",name:"表单字段名（透传）",withCredentials:"是否携带凭证（透传）",showFileList:"关闭文件列表渲染",listType:"列表样式",tip:"拖拽区/按钮下提示文案",beforeUpload:"选择后逐文件执行钩子",beforeRemove:"移除前取消钩子",modelValue:"文件列表",drag:"拖拽模式",multiple:"多选",accept:"MIME 过滤"},events:{"update:modelValue":"文件列表变更",exceed:"达 limit 超出部分",preview:"点击列表项预览",upload:"选择文件（用户侧上传）",success:"标记完成自动回报",progress:"进度变更自动回报",error:"标记失败自动回报",change:"选择",remove:"移除"}},transfer:{title:"Transfer 穿梭框",desc:"双列表 + 勾选批量转移。",props:{data:"数据",modelValue:"目标 keys",titles:"标题",disabled:"禁用"},events:{"update:modelValue":"值更新",change:"变更"}},autocomplete:{title:"Autocomplete 自动补全",desc:"前缀匹配 + 高亮命中段 + 键盘导航。",props:{disabled:"禁用输入",modelValue:"值",suggestions:"建议集",placeholder:"占位"},events:{"update:modelValue":"值更新",select:"选中建议"}},mention:{title:"Mention 提及",desc:"<kbd>@</kbd> 触发成员浮层，光标回填。",props:{modelValue:"正文",options:"成员",placeholder:"占位",trigger:"触发符"},events:{"update:modelValue":"值更新",select:"选中选项"}},otp:{title:"OTP 验证码",desc:"分格输入、自动跳格、粘贴分发。",props:{disabled:"禁用",modelValue:"值",length:"格数",numeric:"数字模式"},events:{"update:modelValue":"值变更",complete:"填满"}},form:{title:"Form 表单",desc:"结构化表单 + 必填校验提示。",props:{submit:"提交处理（D6 改名：onSubmit→submit）","AeroFormItem.label":"标签文字","AeroFormItem.required":"必填标记","AeroFormItem.hint/error":"提示/错误文字"},events:{submit:"表单提交"}},table:{title:"Table 表格",desc:"<code>mono</code> 列、行 hover、具名单元格插槽。",props:{columns:"列定义",data:"数据",emptyText:"空态文案"}},tree:{title:"Tree 树",desc:"缩进导轨 + 展开旋转箭头 + 勾选。",props:{data:"数据",expanded:"展开 keys（受控）",checked:"已勾选（受控）",activeKey:"选中",checkable:"复选",defaultExpandAll:"默认全展开",includeParents:"勾选集合含父节点"},events:{"update:expanded":"展开更新","update:checked":"勾选更新",select:"选中节点"}},timeline:{title:"Timeline 时间线",desc:"虚线导轨、节点旋转、卡片位移脉冲。",props:{items:"条目"}},tag:{title:"Tag 码标签",desc:"<code>mono</code> 浅底小标签。",props:{accent:"品牌实底"}},badge:{title:"Badge 徽章",desc:"七种类型 + 前置圆点，hover 旋转放大。",props:{type:"类型",dot:"前置圆点"}},avatar:{title:"Avatar 头像",desc:"六色配板、多尺寸 <code>28-128px</code>、图片回退文字。",props:{alt:"图片加载失败回退文字",shape:"头像形状",fit:"图片填充方式",tone:"配板1-6",size:"尺寸",src:"图片"}},"avatar-group":{title:"AvatarGroup 头像组",desc:"负边距叠放，hover 浮起置顶。",props:{total:"总数",max:"显示上限",size:"尺寸"}},cropper:{title:"Cropper 头像裁剪器",desc:"取框式裁剪：拖移动/角缩放/边旋转，多尺寸圆形导出（<code>canvas</code> 仿射链与预览同向）。",props:{labels:"工具栏文案（i18n 覆盖）",exportSizes:"导出尺寸档",shape:"裁取形状",minSize:"框最小边长",maxSize:"框最大边长",disabled:"禁用",view:"视窗边长"},events:{change:"框状态变更",export:"导出完成（url+blob 多档）",error:"图片加载失败"}},card:{title:"Card 卡片",desc:"hover 抬升 + <code>7px</code> 硬阴影。",props:{width:"宽度（px 或 CSS 值）",minHeight:"最小高度（px 或 CSS 值）",hoverable:"悬停交互",paddingless:"去内边距"}},carousel:{title:"Carousel 轮播",desc:"拖拽 + 自动播放（离屏暂停）+ 胶囊点。",events:{change:"索引变化（自动/拖拽/手动）"},props:{slides:"幻灯",interval:"自动播放间隔 ms（0 关闭）"}},collapse:{title:"Collapse 折叠面板",desc:"<code>grid-rows</code> <code>0fr</code>→<code>1fr</code> 展开动画。",props:{items:"面板",modelValue:"展开项",accordion:"手风琴（仅展开一项）"},events:{"update:modelValue":"展开项更新"}},descriptions:{title:"Descriptions 描述列表",desc:"<code>label</code>/<code>value</code> 网格 + 跨列。",props:{data:"数据对象",items:"字段列表",column:"每行列数",bordered:"边框",title:"标题"}},empty:{title:"Empty 空状态",desc:"毛玻璃虚线框 + 云朵插画 + 操作区。",props:{hint:"标题"}},image:{title:"Image 图片",desc:"懒加载、失败回退占位、预览 hover + 内置查看器。",props:{src:"图片地址",alt:"替代文字","width/height":"宽高",radius:"圆角档",preview:"点击放大",fit:"填充模式"},events:{preview:"点击预览时传出 src"}},"image-viewer":{title:"ImageViewer 图片查看",desc:"全屏遮罩 + <kbd>←</kbd><kbd>→</kbd> 翻页。",events:{"update:modelValue":"查看器关闭"},props:{modelValue:"开关",urlList:"图片集",initial:"初始索引"}},pagination:{title:"Pagination 分页",desc:"窗口页码 + 当前页倾斜硬阴影。",props:{jumper:"页码跳转输入框",modelValue:"页码",total:"总数",pageSize:"每页"},events:{"update:modelValue":"页码值变更",change:"翻页"}},progress:{title:"Progress 进度条",desc:"流光 <code>shimmer</code>（可关）+ 状态色；<code>draggable</code> 内置主题化滑块（<code>v-model</code>）。",props:{percent:"百分比 0-100（v-model）",shimmer:"流光效果",status:"状态色",showText:"显示百分比文字",draggable:"可交互滑块"},events:{"update:percent":"滑块拖动更新"}},"ring-progress":{title:"RingProgress 环形进度",desc:"<code>SVG</code> 描边动画 + 中心数字；<code>draggable</code> 沿环拖拽圆钮（<code>v-model</code>）。",props:{width:"环粗细",percent:"百分比（v-model）",label:"中心主文字",sublabel:"中心小字",size:"整体尺寸 px",stroke:"描边宽度",draggable:"可交互拖拽"},events:{"update:percent":"拖拽更新"}},result:{title:"Result 结果页",desc:"状态大图标 + 标题描述 + 操作区。",props:{status:"状态",title:"标题",desc:"描述"}},segmented:{title:"Segmented 分段器",desc:"胶囊滑动指示（bill-switch 同源）。",props:{modelValue:"值",options:"选项",disabled:"禁用",block:"每项等宽撑满"},events:{"update:modelValue":"值更新",change:"变更"}},skeleton:{title:"Skeleton 骨架屏",desc:"<code>text</code>/<code>circle</code>/<code>rect</code> 骨架 + <code>shimmer</code>。",props:{variant:"变体形状",height:"text 行高 px",width:"宽度",loading:"加载态",animated:"shimmer 动画"}},spinner:{title:"Spinner 转圈加载",desc:"三档尺寸（<code>sm</code>/<code>md</code>/<code>lg</code>）环形 spinner，<code>role=status</code> + <code>aria-label</code>。",props:{size:"尺寸"}},statistic:{title:"Statistic 统计数值",desc:"<code>easeOutCubic</code> 数字滚动。",props:{value:"数值",prefix:"前缀",suffix:"后缀",label:"标签",animated:"滚动动画"}},qrcode:{title:"QRCode 二维码",desc:"<code>ISO/IEC 18004</code> 无依赖完整编码（<code>RS</code> 纠错 + <code>8</code> 掩码择优），<code>SVG</code> 矩阵渲染；<code>fg</code> 未传时取 <code>var(--ui-ink)</code> 计算值（主题切换自动重绘）。",props:{value:"内容",size:"输出尺寸 px",margin:"静区（模块数）",fg:"前景色（传值覆盖）",bg:"背景色",level:"纠错级别"}},watermark:{title:"Watermark 水印",desc:"<code>Canvas</code> 平铺文字水印，独立 <code>::before</code> 层不挡交互。",props:{maxWidth:"最大宽度（px 或 CSS 值）",radius:"圆角（px 或 CSS 值）",content:"水印文字",rotate:"旋转角度",gap:"平铺间隔 px",fontSize:"字号",opacity:"透明度"}},terminal:{title:"Terminal 终端",desc:"打字机逐行输出 + 光标闪烁。",props:{lines:"行序列",typeSpeed:"字速 ms/字符",lineDelay:"行间停顿 ms",title:"窗口标题"},events:{done:"全部行输出完成"}},"code-block":{title:"CodeBlock 代码块",desc:"2px 描边代码窗：逐行极简语法高亮（<code>highlight</code>）、行号（<code>lineNumbers</code>）、一键复制（<code>copyable</code>）、可折叠（<code>collapsible</code>）。",events:{"update:open":"折叠开关变化"},props:{code:"源码",lang:"语言标签",title:"窗标题",highlight:"高亮",lineNumbers:"行号",copyable:"复制钮",flush:"嵌入态去壳",collapsible:"可折叠",open:"折叠显隐 v-model"}},menu:{title:"Menu 导航菜单",desc:"水平胶囊滑动 / 垂直侧栏高亮。",events:{"update:modelValue":"选中项变更",select:"点击菜单项",focus:"聚焦",blur:"失焦","update:collapsed":"折叠态变更（v-model:collapsed）"},props:{width:"侧栏宽度（vertical 模式）",collapsed:"折叠态（纯样式态）",items:"项",modelValue:"激活",mode:"方向"}},tabs:{title:"Tabs 标签页",desc:"滑块指示条 spring 跟随。",props:{modelValue:"激活",tabs:"标签"},events:{"update:modelValue":"选项卡选中变更",change:"切换"}},breadcrumb:{title:"Breadcrumb 面包屑",desc:"箭头分隔、末项加粗。",props:{items:"项"}},dropdown:{title:"Dropdown 下拉菜单",desc:"图标+描述+分隔线+危险项。",props:{items:"菜单项",align:"对齐"},events:{select:"选中"}},steps:{title:"Steps 步骤条",desc:"<code>done</code>/<code>active</code> 状态卡，可点击切换。",props:{items:"步骤",current:"当前"},events:{change:"点击切换"}},"page-header":{title:"PageHeader 页头",desc:"返回钮 + 标题副题 + 操作区。",props:{title:"标题",subtitle:"副题",back:"返回钮"},events:{back:"返回"}},anchor:{title:"Anchor 锚点",desc:"滚动 <code>spy</code> 左侧竖线高亮，容器内滚动按容器基准换算判定线。",props:{items:"锚点",container:"滚动容器选择器",offset:"高亮判定上偏移"}},affix:{title:"Affix 固钉",desc:"滚动过阈值即吸附顶部（默认 <code>76px</code>，让出 <code>sticky</code> 导航）；<code>target</code> 指定滚动容器。",props:{anchor:"吸附基准元素",gutter:"基准与吸附按钮间距",offsetTop:"触发阈值",top:"吸附距顶间距",target:"滚动容器"},events:{change:"吸附状态变更"}},"back-top":{title:"BackTop 返回顶部",desc:"滚动出现、hover 旋转；<code>target</code> 选择器指定滚动容器（演示页 <code>.pg-main</code>，EP 惯例；移动端内部滚动容器传选择器）。",props:{threshold:"出现阈值","right/bottom":"定位",target:"滚动容器选择器（EP 惯例）"}},tour:{title:"Tour 导览",desc:"高亮框 + 遮罩 + 步骤气泡。",props:{steps:"步骤",modelValue:"开关（受控）"},events:{"update:modelValue":"受控更新",finish:"完成导览"}},dialog:{title:"Dialog 对话框",desc:"<code>scale</code>+<code>rotate</code> spring 弹入，<kbd>Esc</kbd> 关闭。",props:{modelValue:"开关",title:"标题",width:"宽",maskClosable:"点遮罩关",blurMask:"毛玻璃遮罩"},events:{"update:modelValue":"受控更新",close:"关闭触发"}},drawer:{title:"Drawer 抽屉",desc:"右侧滑入。",props:{modelValue:"开关",title:"标题",width:"宽",maskClosable:"点遮罩关"},events:{"update:modelValue":"受控更新",close:"关闭触发"}},"message-box":{title:"MessageBox 确认框",desc:"命令式 <code>Promise</code> API：<code>AeroMessageBox.confirm(opts)</code>。",props:{"confirm().message":"正文","confirm().title":"标题","confirm().confirmText/cancelText":"按钮文案","confirm().danger":"危险样式"},events:{"confirm() → Promise<boolean>":"true=确认 / false=取消"}},notification:{title:"Notification 通知",desc:"命令式 API：<code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>，顶部居中堆叠。",props:{"show().type":"类型","show().title":"标题","show().message":"正文","show().duration":"停留 ms（0 不自动关）"},events:{"success/error/warn/info(title,message?)":"快捷弹出","show(opts)":"自定义弹出"}},alert:{title:"Alert 警告",desc:"四语义色 + 可关闭。",props:{type:"类型",title:"标题",closable:"可关闭"},events:{close:"关闭按钮点击"}},loading:{title:"Loading 加载",desc:"容器覆盖层 + <code>spinner</code> + 毛玻璃。",props:{loading:"加载态",tip:"文字"}},popover:{title:"Popover 气泡",desc:"<code>hover</code>/<code>click</code> 触发，上/下/右三方位。",props:{trigger:"触发",placement:"方位",title:"标题",width:"最小宽",open:"受控显隐"},events:{"update:open":"受控更新"}},popconfirm:{title:"Popconfirm 气泡确认",desc:"点击触发确认气泡。",props:{title:"确认标题",confirmText:"确认文案",cancelText:"取消文案",danger:"危险样式"},events:{confirm:"确认",cancel:"取消"}},tooltip:{title:"Tooltip 提示",desc:"<code>fixed</code> 定位、滚动重定位、上下箭头。",props:{content:"文字",placement:"方位"}},toast:{title:"Toast 轻提示",desc:"命令式 API：<code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>，右上角堆叠 + 倒计时条。",props:{"show().type":"类型","show().message":"文案","show().duration":"停留 ms"},events:{"success/error/warn/info(msg, opts?)":"快捷弹出","show(opts)":"自定义弹出"}},announce:{title:"Announce 通知横幅",desc:"顶部通知横幅，<code>max-height</code> 收起过渡不跳页；关闭为会话级，<code>v-model:open</code> 可重新显示；<code>marquee</code> 自适应跑马灯。",props:{actionHref:"action 槽链接目标",icon:"图标",open:"受控显隐（v-model:open）",storageKey:"显式传入才记忆关闭态",animated:"收起过渡",marquee:"跑马灯（仅内容溢出才滚动，false 禁用）"},events:{close:"关闭开始",closed:"收起完成","update:open":"显隐更新"}},chip:{title:"Chip 可关闭标签",desc:"pill 标签 + 旋转关闭钮。",props:{closable:"可关闭",active:"选中态"},events:{close:"关闭"}},"config-provider":{title:"ConfigProvider 配置注入",desc:"主题/预设/命名空间包裹注入。",props:{locale:"组件文案语言",theme:"主题",preset:"预设",namespace:"命名空间"}},"theme-provider":{title:"ThemeProvider 主题响应",desc:"响应式绑定 <code>useTheme</code> 状态。",props:{scoped:"作用域模式（仅容器变量）",theme:"主题",preset:"预设",brand:"自定义品牌色"}},"motion-presets":{title:"MotionPresets 动效预设",desc:"六种循环动效，<code>animated</code> 门控（<code>GPU</code> 隔离方案）。",props:{name:"动效",animated:"启用动画",duration:"时长"}},"dot-field":{title:"DotField 点阵背景",desc:"<code>Canvas</code> 点阵（<code>dot</code>/<code>x</code>/<code>diamond</code>/<code>ring</code>），流光态为品牌色单色相余弦波带缓慢漂移（克制不花哨），离屏暂停。",props:{color:"点色（缺省 --ui-dot）",shape:"形状",density:"点距",flow:"品牌色流光",speed:"速度"}},"iridescent-threads":{title:"IridescentThreads 虹彩丝线",desc:"环境氛围背景装饰（非迪斯科灯球）：<code>6–8</code> 条低透明曲线，颜色从 <code>--ui-brand</code> 派生（brand+两邻近 <code>hue</code>），两层（清晰层 + <code>blur(6px)</code> 光晕层），<code>24–40s</code> 缓慢循环，<code>prefers-reduced-motion</code> 静止。",props:{count:"丝线数量（6–8）",cycle:"漂移周期 s（24–40）",hueShift:"色相偏移",opacity:"不透明度倍率"}},"parallax-box":{title:"ParallaxBox 视差漂浮几何",desc:"Hero 同款：指针视差跟随、点击图形旋转，GPU 门控。",props:{height:"区高",hint:"提示文案"}},marquee:{title:"Marquee 跑马灯",desc:"品牌行/大字带两种模式，hover 暂停、<code>reduced-motion</code> 降级。",props:{variant:"模式",caption:"提示文案",items:"内容",duration:"周期s",pauseOnHover:"hover 暂停"}},"party-fx":{title:"PartyFx 礼花特效",desc:"<code>WAAPI</code> 事件驱动礼花：环 + 🎉 + <code>32</code> 彩带 + 星芒，<code>reduced-motion</code> 静默；Rate 确认评分时自动触发。"},phone:{title:"Phone 手机壳",desc:"<code>46px</code> 圆角深色外壳 + <code>notch</code> + 状态栏，hover 微浮旋转；内部承载移动端组件。",props:{time:"状态栏时间",title:"标题",subtitle:"副标题"}},"mobile-carousel":{title:"MobileCarousel Banner 轮播",desc:"拖拽切页（<code>rubber-band</code>）+ 自动播放进度条 + 圆点。",props:{slides:"轮播数据",interval:"自动播放间隔ms(0关)"},events:{change:"切换索引"}},"mobile-stat-card":{title:"MobileStatCard 数据卡",desc:"标签 + <code>mono</code> 大数字 + <code>spark</code> 迷你图表（折线/柱状）。",props:{label:"标签",value:"主数值",chart:"迷你图表类型",points:"折线坐标",bars:"柱状数据",mainColor:"线色是否主色"}},"mobile-tab-bar":{title:"MobileTabBar 底部标签栏",desc:"滑动胶囊指示条 + 图标 <code>popIn</code>。",props:{items:"标签项",modelValue:"当前索引"},events:{"update:modelValue":"选项卡选中变更",change:"切换"}},"swipe-deck":{title:"SwipeDeck 拖动卡片组",desc:"顶卡拖拽（旋转 + 部署/回滚章显隐），<code>>110px</code> 飞出；<code>loop</code> 循环补位或划掉销毁，支持动态插入/移除（<code>FLIP</code> 入场）；<code>bare</code> 模式去除默认排版（对齐 PrimeVue unstyled）。",props:{cards:"卡片数据",loop:"划掉回队尾；false 划掉即销毁",bare:"素面模式（去除默认卡片排版，插槽内容即卡片）"},events:{deploy:"右滑部署",rollback:"左滑回滚",emptied:"销毁模式下牌组清空"}},"slide-go":{title:"SlideGo 滑动解锁",desc:"拖动旋钮到最右完成：<code>fill</code> 跟随 + <code>squish</code> 完成动画 + 自动回位；<code>autoReset</code> 完成后 <code>600ms</code> 回位。",props:{width:"宽度（px 或 CSS 值）",text:"文案",doneText:"完成文案",autoReset:"完成后 600ms 自动回位 + 重置锁"},events:{done:"完成"}},"sort-list":{title:"SortList 拖动排序",desc:"指针跟随（挂 <code>body</code> 免受 <code>transform</code> 影响）+ <code>FLIP</code> 过渡 + 闪烁占位。",props:{width:"列表宽度（px 或 CSS 值）",items:"列表数据"},events:{sorted:"新顺序"}},"bottom-sheet":{title:"BottomSheet 底部抽屉",desc:"默认收起 <code>58px</code> 把手，拖拽/点击切换，<code>spring</code> 回弹。",props:{bgTitle:"背景占位文案（缺省取词包）",bgHint:"背景占位提示文案",title:"抽屉标题",rows:"行数据",open:"初始展开"},events:{"update:open":"展开开关变化",change:"开合"}},knob:{title:"Knob 拖动旋钮",desc:"<code>270°</code> 扫描弧 <code>atan2</code> 换算，release <code>WAAPI</code> 弹跳。",props:{modelValue:"值","min/max/step":"范围",unit:"单位"},events:{"update:modelValue":"拖动值变更",change:"松手值"}},"pull-to-refresh":{title:"PullToRefresh 下拉刷新",desc:"滚动至顶按住下拉：指示器跟手旋转，释放刷新 + 条目交错淡入。",props:{width:"容器宽度（px 或 CSS 值）",height:"容器高度（px 或 CSS 值）",items:"列表数据",duration:"刷新时长ms",damping:"阻尼"},events:{refresh:"触发刷新"}}}},N2={groups:["Basic","Form","DataDisplay","Navigation","Feedback","Others","Mobile"],items:{button:{title:"Button",desc:"Five types, three sizes; hard-shadow lift as the signature interaction plus ripple feedback.",props:{type:"visual type",size:"size",disabled:"disabled",loading:"loading",block:"block fill",iconOnly:"square icon button",ripple:"ripple toggle",nativeType:"native type"},events:{focus:"focus",blur:"blur",click:"click (blocked when disabled/loading)"}},"button-group":{title:"ButtonGroup",desc:"First/last rounded joins; horizontal/vertical.",props:{vertical:"vertical layout"}},"action-buttons":{title:"ActionButtons",desc:"Reject/accept dual round buttons, hover fill & shift; sibling of <code>ButtonGroup</code> in the action family.",props:{rejectTip:"left button tip",acceptTip:"right button tip"},events:{reject:"Reject",accept:"Accept"}},icon:{title:"Icon",desc:"60+ built-in lucide-style line icons, inheriting <code>currentColor</code>.",props:{name:"icon name",size:"size",stroke:"stroke width"}},"icon-button":{title:"IconButton",desc:"<code>38px</code> rounded icon button, hover shift-rotate; dot red badge is a GPU-gated animation; loading spin + clicks disabled.",props:{icon:"icon",disabled:"disabled",loading:"loading (clicks blocked + spin)",dot:"notification dot",label:"aria-label"},events:{click:"click (not disabled/loading)",focus:"focus",blur:"blur"}},link:{title:"Link",desc:"Internal/external/disabled states.",props:{href:"URL",external:"external link badge",disabled:"disabled"}},typography:{title:"Typography",desc:"Five-level scale + Latin axis + highlight word/sticker box.",props:{level:"scale",tag:"HTML tag (derived from scale by default)",en:"Latin font",mono:"monospace font",highlight:"highlight word",sticker:"sticker box"}},divider:{title:"Divider",desc:"Horizontal/vertical, solid/dashed, centered title.",props:{vertical:"vertical",dashed:"dashed",title:"separator text"}},space:{title:"Space",desc:"<code>flex gap</code> composite container.",props:{gap:"gap",direction:"direction",justify:"main-axis align",align:"cross-axis align",wrap:"wrap"}},scrollbar:{title:"Scrollbar",desc:"<code>Thin</code> scrollbar container, brand-colored on hover.",props:{maxHeight:"max height"}},grid:{title:"Grid",desc:"<code>N</code>-column grid layout container.",props:{cols:"columns",gap:"gap"}},layout:{title:"Layout",desc:"<code>section</code> semantic container, centered at <code>1180px</code>.",props:{radius:"container radius",padding:"padding",alt:"light base",maxWidth:"container width"}},"theme-switch":{title:"ThemeSwitch",desc:"Light/dark toggle, persisted in <code>localStorage</code>.",props:{modelValue:"controlled theme value (v-model)",disabled:"disabled",size:"size sm 36×20 · md 72×38 · lg 88×44"},events:{"update:modelValue":"theme update",change:"toggled"}},input:{title:"Input",desc:"Prefix/suffix/clear/error state, brand halo on focus.",props:{width:"input width",modelValue:"value",placeholder:"placeholder",disabled:"disabled",readonly:"read-only",error:"error state",prefix:"prefix",suffix:"suffix",type:"input type",clearable:"clear button",maxlength:"max length",showCount:"show count"},events:{input:"continuous typing","update:modelValue":"value change",change:"change",clear:"clear","focus/blur":"focus/blur"}},textarea:{title:"Textarea",desc:"Resizable multi-line input with counter.",props:{modelValue:"value",placeholder:"placeholder",disabled:"disabled",readonly:"read-only",error:"error state",maxlength:"max length",showCount:"count",rows:"rows"},events:{"update:modelValue":"value change","focus/blur":"focus/blur"}},"input-number":{title:"InputNumber",desc:"Step buttons + <kbd>↑</kbd><kbd>↓</kbd> + out-of-range clamping, value change micro-bounce.",props:{modelValue:"value","min/max":"range",step:"step",stepStrictly:"strict step",disabled:"disabled",placeholder:"placeholder"},events:{"update:modelValue":"value update",change:"value confirmed"}},"input-tag":{title:"InputTag",desc:"<kbd>Enter</kbd>/<kbd>comma</kbd> create tags, backspace removes the last one.",props:{modelValue:"tag array",max:"max tag count",placeholder:"placeholder",disabled:"disabled"},events:{"update:modelValue":"value update",change:"change"}},search:{title:"Search",desc:"Subsequence fuzzy match + ranked recall, <code>mark</code>-highlighted hits, <kbd>↑</kbd><kbd>↓</kbd>/<kbd>Enter</kbd>/<kbd>Esc</kbd> keys, optional grouping by <code>description</code>; description hits render on two lines.",props:{options:"candidate source",placeholder:"placeholder",limit:"recall cap",emptyText:"empty-result hint",disabled:"disabled",groupBy:"group key",showOptionDesc:"toggle description sub-row (on = render dimmed sub-line for options with description; off = main label only)"},events:{select:"selected item",search:"hit list per query",clear:"clear"}},select:{title:"Select",desc:"Spring pop-in menu, keyboard nav, clearable.",props:{modelValue:"value",options:"options",placeholder:"placeholder",clearable:"clearable",disabled:"disabled"},events:{"update:modelValue":"value update",change:"selection changed"}},cascader:{title:"Cascader",desc:"Drill down with per-level breadcrumbs; the selected path is echoed back.",props:{modelValue:"path",options:"cascade data",placeholder:"placeholder",disabled:"disabled"},events:{"update:modelValue":"value update",change:"selection changed"}},"tree-select":{title:"TreeSelect",desc:"Tree panel + expand control.",props:{data:"tree data",modelValue:"selected key",placeholder:"placeholder",disabled:"disabled",defaultExpandAll:"expand all by default"},events:{"update:modelValue":"value update",change:"selection changed"}},"date-picker":{title:"DatePicker",desc:"Month calendar; today outlined, selected as a hard-shadow tilted block.",props:{modelValue:"date",placeholder:"placeholder",disabled:"disabled"},events:{"update:modelValue":"value update",change:"change confirmed"}},"time-picker":{title:"TimePicker",desc:"Dual-wheel (hours/minutes), <code>5</code>-minute step.",props:{modelValue:"time",placeholder:"placeholder",disabled:"disabled",minuteStep:"minute step"},events:{"update:modelValue":"value update",change:"change confirmed"}},checkbox:{title:"Checkbox",desc:"Spring inner-block scale, group-inject.",props:{modelValue:"value",value:"group value",disabled:"disabled"},events:{focus:"focus",blur:"blur",change:"state change"}},radio:{title:"Radio",desc:"Spring dot scale.",props:{modelValue:"selected value",value:"value",disabled:"disabled"},events:{change:"selection changed"}},switch:{title:"Switch",desc:"Spring round-knob shift.",props:{modelValue:"value",disabled:"disabled"},events:{focus:"focus",blur:"blur",change:"toggle"}},slider:{title:"Slider",desc:"Bubble preview + scale row + filled track, <code>thumb</code> rotates on hover.",events:{"update:modelValue":"value on drag",change:"value on release",focus:"focus",blur:"blur"},props:{disabled:"disabled",modelValue:"value","min/max":"range",step:"step",showScale:"scale marks","startLabel/endLabel":"end labels",unit:"unit"}},rate:{title:"Rate",desc:"Hover preview, stars <code>popIn</code>-bounce on confirm.",events:{"update:modelValue":"value on rate",change:"rate confirmed"},props:{confetti:"confetti on confirm",allowDecimal:"decimal rating",allowReselect:"allow reselect",modelValue:"value",count:"star count",disabled:"read-only",animate:"bounce animation"}},"color-picker":{title:"ColorPicker",desc:"Custom <code>SV</code> picker + hue strip + <code>HEX</code> input + preset swatches.",props:{modelValue:"color value",presets:"swatch board (null hides)"},events:{"update:modelValue":"value update",change:"change confirmed"}},upload:{title:"Upload",desc:"Drop zone + file list, sizes formatted.",props:{disabled:"disabled",limit:"max file count",name:"form field name",withCredentials:"carry credentials",showFileList:"hide file list",listType:"list style",tip:"hint text",beforeUpload:"before-upload hook",beforeRemove:"before-remove hook",modelValue:"file list",drag:"drag mode",multiple:"multiple",accept:"MIME filter"},events:{"update:modelValue":"file list update",exceed:"limit exceeded",preview:"list item preview",upload:"file picked (user uploads)",success:"done (auto-reported)",progress:"progress (auto-reported)",error:"error (auto-reported)",change:"picked",remove:"removed"}},transfer:{title:"Transfer",desc:"Dual lists + batch transfer on check.",props:{data:"data",modelValue:"target keys",titles:"title",disabled:"disabled"},events:{"update:modelValue":"value update",change:"change"}},autocomplete:{title:"Autocomplete",desc:"Prefix match + highlighted hit span + keyboard nav.",props:{disabled:"input disabled",modelValue:"value",suggestions:"suggestions",placeholder:"placeholder"},events:{"update:modelValue":"value update",select:"suggestion picked"}},mention:{title:"Mention",desc:"<kbd>@</kbd> triggers a member popover, cursor backfill.",props:{modelValue:"body",options:"members",placeholder:"placeholder",trigger:"trigger"},events:{"update:modelValue":"value update",select:"option picked"}},otp:{title:"OTP",desc:"Segmented input, auto-jump to next, paste distribution.",props:{disabled:"disabled",modelValue:"value",length:"segment count",numeric:"numeric mode"},events:{"update:modelValue":"value change",complete:"filled"}},form:{title:"Form",desc:"Structured form + required-validation hints.",props:{submit:"submit handler (D6 rename: onSubmit→submit)","AeroFormItem.label":"label text","AeroFormItem.required":"required mark","AeroFormItem.hint/error":"hint/error text"},events:{submit:"form submit"}},table:{title:"Table",desc:"<code>mono</code> columns, row hover, named cell slots.",props:{columns:"column defs",data:"data",emptyText:"empty-state text"}},tree:{title:"Tree",desc:"Indent rail + rotating expand arrow + check.",props:{data:"data",expanded:"expanded keys (controlled)",checked:"checked (controlled)",activeKey:"selected",checkable:"checkable",defaultExpandAll:"expand all by default",includeParents:"checked set includes parents"},events:{"update:expanded":"expanded update","update:checked":"checked update",select:"selected node"}},timeline:{title:"Timeline",desc:"Dashed rail, node rotation, card-shift pulse.",props:{items:"entries"}},tag:{title:"Tag",desc:"<code>mono</code> light-base small tag.",props:{accent:"brand solid base"}},badge:{title:"Badge",desc:"Seven types + leading dot; hover spin & scale.",props:{type:"type",dot:"leading dot"}},avatar:{title:"Avatar",desc:"6-tone palette, multi-size <code>28-128px</code>, image falls back to text.",props:{alt:"alt text",shape:"avatar shape",fit:"image fit",tone:"palette 1-6",size:"size",src:"image"}},"avatar-group":{title:"AvatarGroup",desc:"Overlapping stack via negative margins; hover lifts on top.",props:{total:"total",max:"display cap",size:"size"}},cropper:{title:"Cropper",desc:"Frame-based crop: drag to move / corners to scale / edges to rotate; multi-size circular export (<code>canvas</code> affine chain aligned with preview).",props:{labels:"toolbar labels",exportSizes:"export size tiers",shape:"crop shape",minSize:"min frame side",maxSize:"max frame side",disabled:"disabled",view:"viewport side"},events:{change:"frame state change",export:"export done (url+blob, multi-size)",error:"image load failed"}},card:{title:"Card",desc:"Hover lift + <code>7px</code> hard shadow.",props:{width:"card width",minHeight:"min height",hoverable:"hover interaction",paddingless:"no inner padding"}},carousel:{title:"Carousel",desc:"Drag + autoplay (pauses off-screen) + pill dots.",events:{change:"index changed (prev, next)"},props:{slides:"slides",interval:"autoplay interval ms (0 = off)"}},collapse:{title:"Collapse",desc:"<code>grid-rows</code> <code>0fr</code>→<code>1fr</code> expand animation.",props:{items:"panels",modelValue:"expanded items",accordion:"accordion (single open)"},events:{"update:modelValue":"expanded item update"}},descriptions:{title:"Descriptions",desc:"<code>label</code>/<code>value</code> grid + spanning columns.",props:{data:"data object",items:"field list",column:"columns per row",bordered:"bordered",title:"title"}},empty:{title:"Empty",desc:"Frosted dashed frame + cloud illustration + action area.",props:{hint:"title"}},image:{title:"Image",desc:"Lazy load, fallback placeholder on failure, preview hover + built-in viewer.",props:{src:"image URL",alt:"alt text","width/height":"width/height",radius:"radius tier",preview:"click to zoom",fit:"fill mode"},events:{preview:"emits src on preview click"}},"image-viewer":{title:"ImageViewer",desc:"Full-screen mask + <kbd>←</kbd>/<kbd>→</kbd> key paging.",events:{"update:modelValue":"viewer closed"},props:{modelValue:"switch",urlList:"image set",initial:"initial index"}},pagination:{title:"Pagination",desc:"Windowed page numbers + tilted hard-shadow on the current page.",props:{jumper:"jump input",modelValue:"page number",total:"total",pageSize:"per page"},events:{"update:modelValue":"page value change",change:"page turn"}},progress:{title:"Progress",desc:"Flowing <code>shimmer</code> (toggleable) + status colors; <code>draggable</code> built-in themed thumb (<code>v-model</code>).",props:{percent:"percent 0-100 (v-model)",shimmer:"shimmer effect",status:"status color",showText:"show percent text",draggable:"interactive thumb"},events:{"update:percent":"thumb drag update"}},"ring-progress":{title:"RingProgress",desc:"<code>SVG</code> stroke animation + center number; <code>draggable</code> ring-handle drag (<code>v-model</code>).",props:{width:"ring width",percent:"percent (v-model)",label:"center main text",sublabel:"center small text",size:"overall size px",stroke:"stroke width",draggable:"interactive drag"},events:{"update:percent":"drag update"}},result:{title:"Result",desc:"Big status icon + title/description + actions.",props:{status:"status",title:"title",desc:"description"}},segmented:{title:"Segmented",desc:"Sliding pill indicator (shared with bill-switch).",props:{modelValue:"value",options:"options",disabled:"disabled",block:"equal-width fill"},events:{"update:modelValue":"value update",change:"change"}},skeleton:{title:"Skeleton",desc:"<code>text</code>/<code>circle</code>/<code>rect</code> skeletons + <code>shimmer</code>.",props:{variant:"variant shape",height:"text line-height px",width:"width",loading:"loading",animated:"shimmer animation"}},spinner:{title:"Spinner",desc:"Three sizes (<code>sm</code>/<code>md</code>/<code>lg</code>) ring spinner, <code>role=status</code> + <code>aria-label</code>.",props:{size:"size"}},statistic:{title:"Statistic",desc:"<code>easeOutCubic</code> number roll.",props:{value:"number",prefix:"prefix",suffix:"suffix",label:"label",animated:"roll animation"}},qrcode:{title:"QRCode",desc:"Dependency-free full <code>ISO/IEC 18004</code> encoder (<code>RS</code> error correction + best-of-<code>8</code> masks), <code>SVG</code> matrix render; <code>fg</code> falls back to the computed <code>--ui-ink</code> (auto-redraws on theme switch).",props:{value:"content",size:"output size px",margin:"quiet zone (module count)",fg:"foreground (value overrides)",bg:"background color",level:"error-correction level"}},watermark:{title:"Watermark",desc:"<code>Canvas</code> tiled text watermark; a separate <code>::before</code> layer that never blocks interaction.",props:{maxWidth:"max width",radius:"radius",content:"watermark text",rotate:"rotation angle",gap:"tile gap px",fontSize:"font size",opacity:"opacity"}},terminal:{title:"Terminal",desc:"Typewriter line-by-line output + blinking cursor.",props:{lines:"line sequence",typeSpeed:"type speed ms/char",lineDelay:"line gap ms",title:"window title"},events:{done:"all lines printed"}},"code-block":{title:"CodeBlock",desc:"2px-outlined code window: line-level mini highlighting (<code>highlight</code>), line numbers (<code>lineNumbers</code>), copy button (<code>copyable</code>), collapsible (<code>collapsible</code>).",events:{"update:open":"fold toggled"},props:{code:"source",lang:"language label",title:"window title",highlight:"highlight",lineNumbers:"line numbers",copyable:"copy button",flush:"flush (strip chrome)",collapsible:"collapsible",open:"collapsed visibility v-model"}},menu:{title:"Menu",desc:"Horizontal pill sliding / vertical sidebar highlight.",events:{"update:modelValue":"selection change",select:"item clicked",focus:"focus",blur:"blur","update:collapsed":"collapsed change"},props:{width:"sidebar width",collapsed:"collapsed",items:"items",modelValue:"active",mode:"direction"}},tabs:{title:"Tabs",desc:"Slider indicator with spring follow.",props:{modelValue:"active",tabs:"label"},events:{"update:modelValue":"tab selection change",change:"toggle"}},breadcrumb:{title:"Breadcrumb",desc:"Arrow separated, last item bolded.",props:{items:"items"}},dropdown:{title:"Dropdown",desc:"Icon + description + divider + danger items.",props:{items:"menu items",align:"alignment"},events:{select:"selected"}},steps:{title:"Steps",desc:"<code>done</code>/<code>active</code> status cards, click to switch.",props:{items:"steps",current:"current"},events:{change:"click to switch"}},"page-header":{title:"PageHeader",desc:"Back button + title/subtitle + action area.",props:{title:"title",subtitle:"subtitle",back:"back button"},events:{back:"back"}},anchor:{title:"Anchor",desc:"Scroll <code>spy</code> left-rail highlight; in-container scrolling converts the judge line by container origin.",props:{items:"anchors",container:"scroll container selector",offset:"highlight top offset"}},affix:{title:"Affix",desc:"Pins to the top after crossing the threshold (default <code>76px</code>, clears the <code>sticky</code> nav); <code>target</code> picks the scroll container.",props:{anchor:"anchor element",gutter:"gutter",offsetTop:"trigger threshold",top:"pin gap from top",target:"scroll container"},events:{change:"pin state change"}},"back-top":{title:"BackTop",desc:"Appears on scroll, rotates on hover; a <code>target</code> selector picks the scroll container (<code>.pg-main</code> on the demo page, EP convention; pass a selector for an inner mobile scroll container).",props:{threshold:"appear threshold","right/bottom":"positioning",target:"scroll container selector (EP convention)"}},tour:{title:"Tour",desc:"Highlight box + mask + step bubbles.",props:{steps:"steps",modelValue:"switch (controlled)"},events:{"update:modelValue":"controlled update",finish:"tour finished"}},dialog:{title:"Dialog",desc:"<code>scale</code>+<code>rotate</code> spring pop-in, <kbd>Esc</kbd> closes.",props:{modelValue:"switch",title:"title",width:"width",maskClosable:"close on mask click",blurMask:"frosted mask"},events:{"update:modelValue":"controlled update",close:"close triggered"}},drawer:{title:"Drawer",desc:"Slides in from the right.",props:{modelValue:"switch",title:"title",width:"width",maskClosable:"close on mask click"},events:{"update:modelValue":"controlled update",close:"close triggered"}},"message-box":{title:"MessageBox",desc:"Imperative <code>Promise</code> API: <code>AeroMessageBox.confirm(opts)</code>.",props:{"confirm().message":"body","confirm().title":"title","confirm().confirmText/cancelText":"button labels","confirm().danger":"danger style"},events:{"confirm() → Promise<boolean>":"true=confirm / false=cancel"}},notification:{title:"Notification",desc:"Imperative API: <code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>, stacked top-center.",props:{"show().type":"type","show().title":"title","show().message":"body","show().duration":"stay ms (0 = no auto-close)"},events:{"success/error/warn/info(title,message?)":"quick pop","show(opts)":"custom pop"}},alert:{title:"Alert",desc:"Four semantic tones + closable.",props:{type:"type",title:"title",closable:"closable"},events:{close:"close button click"}},loading:{title:"Loading",desc:"Container overlay + <code>spinner</code> + frosted glass.",props:{loading:"loading",tip:"text"}},popover:{title:"Popover",desc:"<code>hover</code>/<code>click</code> trigger, top/bottom/right placements.",props:{trigger:"trigger",placement:"placement",title:"title",width:"min width",open:"controlled visibility"},events:{"update:open":"controlled update"}},popconfirm:{title:"Popconfirm",desc:"Click triggers a confirm popover.",props:{title:"confirm title",confirmText:"confirm label",cancelText:"cancel label",danger:"danger style"},events:{confirm:"confirm",cancel:"cancel"}},tooltip:{title:"Tooltip",desc:"<code>fixed</code> placement, repositions on scroll, up/down arrows.",props:{content:"text",placement:"placement"}},toast:{title:"Toast",desc:"Imperative API: <code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>, stacked top-right + countdown bar.",props:{"show().type":"type","show().message":"copy","show().duration":"stay ms"},events:{"success/error/warn/info(msg, opts?)":"quick pop","show(opts)":"custom pop"}},announce:{title:"Announce",desc:"Top announce banner; <code>max-height</code> collapse without page jump; close is session-level, <code>v-model:open</code> can re-show; <code>marquee</code> auto-adapts.",props:{actionHref:"action link",icon:"icon",open:"controlled visibility (v-model:open)",storageKey:"memorizes closed state only when passed",animated:"collapse transition",marquee:"marquee (scrolls only when overflowing; false disables)"},events:{close:"close started",closed:"collapse finished","update:open":"visibility update"}},chip:{title:"Chip",desc:"Pill chip + rotating close button.",props:{closable:"closable",active:"selected state"},events:{close:"close"}},"config-provider":{title:"ConfigProvider",desc:"Wraps and injects theme/preset/namespace.",props:{locale:"locale",theme:"theme",preset:"preset",namespace:"namespace"}},"theme-provider":{title:"ThemeProvider",desc:"Reactive binding of <code>useTheme</code> state.",props:{scoped:"scoped mode",theme:"theme",preset:"preset",brand:"custom brand color"}},"motion-presets":{title:"MotionPresets",desc:"Six loop motions, <code>animated</code>-gated (<code>GPU</code> isolation approach).",props:{name:"motion",animated:"enable animation",duration:"duration"}},"dot-field":{title:"DotField",desc:"<code>Canvas</code> dot field (<code>dot</code>/<code>x</code>/<code>diamond</code>/<code>ring</code>); the flow state is a slowly drifting brand-tinted single-hue cosine band (restrained, not flashy); pauses off-screen.",props:{color:"dot color",shape:"shape",density:"dot spacing",flow:"brand-color flow",speed:"speed"}},"iridescent-threads":{title:"IridescentThreads",desc:"Ambient background décor (not a disco ball): <code>6–8</code> low-opacity curves, colors derived from <code>--ui-brand</code> (brand + two adjacent <code>hues</code>), two layers (sharp + <code>blur(6px)</code> glow), slow <code>24–40s</code> loop, static under <code>prefers-reduced-motion</code>.",props:{count:"thread count (6–8)",cycle:"drift period s (24–40)",hueShift:"hue shift",opacity:"opacity multiplier"}},"parallax-box":{title:"ParallaxBox",desc:"Hero-style: pointer parallax follow, click to rotate shapes, GPU-gated.",props:{height:"zone height",hint:"hint text"}},marquee:{title:"Marquee",desc:"Brand-row / big-type modes; hover pauses, <code>reduced-motion</code> degrades.",props:{variant:"mode",caption:"hint text",items:"content",duration:"period s",pauseOnHover:"hover pause"}},"party-fx":{title:"PartyFx",desc:"<code>WAAPI</code> event-driven confetti: ring + 🎉 + <code>32</code> ribbons + sparkles, silent under <code>reduced-motion</code>; auto-fires on <code>Rate</code> confirm."},phone:{title:"Phone",desc:"<code>46px</code> rounded dark shell + <code>notch</code> + status bar, hover micro-lift & rotate; hosts mobile components inside.",props:{time:"status bar time",title:"title",subtitle:"subtitle"}},"mobile-carousel":{title:"MobileCarousel",desc:"Drag to swipe pages (<code>rubber-band</code>) + autoplay progress + dots.",props:{slides:"carousel data",interval:"autoplay interval ms (0=off)"},events:{change:"index switched"}},"mobile-stat-card":{title:"MobileStatCard",desc:"Label + <code>mono</code> big number + <code>spark</code> mini chart (line/bar).",props:{label:"label",value:"primary value",chart:"mini chart type",points:"line points",bars:"bar data",mainColor:"line uses primary"}},"mobile-tab-bar":{title:"MobileTabBar",desc:"Sliding pill indicator + icon <code>popIn</code>.",props:{items:"tab items",modelValue:"current index"},events:{"update:modelValue":"tab selection change",change:"toggle"}},"swipe-deck":{title:"SwipeDeck",desc:"Drag the top card (rotation + deploy/rollback stamp show/hide), fly out past <code>110px</code>; <code>loop</code> recycles or swipes away, dynamic insert/remove (<code>FLIP</code> entry); <code>bare</code> mode strips the default chrome (PrimeVue unstyled parity).",props:{cards:"card data",loop:"swipe recycles to the back; false swipes away & destroys",bare:"bare mode (strip default card chrome, slot content IS the card)"},events:{deploy:"swipe right to deploy",rollback:"swipe left to roll back",emptied:"deck emptied in destroy mode"}},"slide-go":{title:"SlideGo",desc:"Drag the knob to the far right to complete: <code>fill</code> follows + <code>squish</code> completion + auto reset; <code>autoReset</code> resets <code>600ms</code> after done.",props:{width:"width",text:"copy",doneText:"done text",autoReset:"auto-reset + lock reset 600ms after done"},events:{done:"done"}},"sort-list":{title:"SortList",desc:"Pointer-follow (attached to <code>body</code>, immune to <code>transform</code>s) + <code>FLIP</code> transitions + flashing placeholder.",props:{width:"list width",items:"list data"},events:{sorted:"new order"}},"bottom-sheet":{title:"BottomSheet",desc:"Collapses to a <code>58px</code> handle by default; drag/click to toggle with a <code>spring</code> back.",props:{bgTitle:"bg title",bgHint:"bg hint",title:"sheet title",rows:"row data",open:"initially expanded"},events:{"update:open":"expand toggled",change:"open/close"}},knob:{title:"Knob",desc:"<code>270°</code> scan arc via <code>atan2</code>, release <code>WAAPI</code> bounce.",props:{modelValue:"value","min/max/step":"range",unit:"unit"},events:{"update:modelValue":"value on drag",change:"release value"}},"pull-to-refresh":{title:"PullToRefresh",desc:"Pull down at the top edge: the indicator rotates with your finger, release to refresh + staggered fade-in of items.",props:{width:"container width",height:"container height",items:"list data",duration:"refresh duration ms",damping:"damping"},events:{refresh:"refresh triggered"}}}},j2={style:{display:"flex",gap:"14px","flex-wrap":"wrap","align-items":"center"}},G2=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!1);function s(){a.value=!0,setTimeout(()=>a.value=!1,1500)}return(l,r)=>(d(),p("div",j2,[A(i(pe),{type:"primary"},{default:I(()=>[R(v(i(t)["button.primary"]),1)]),_:1}),A(i(pe),{type:"outline"},{default:I(()=>[R(v(i(t)["button.secondary"]),1)]),_:1}),A(i(pe),{type:"ghost"},{default:I(()=>[R(v(i(t)["button.ghost"]),1)]),_:1}),A(i(pe),{type:"danger"},{default:I(()=>[R(v(i(t)["button.danger"]),1)]),_:1}),A(i(pe),{type:"dark"},{default:I(()=>[R(v(i(t)["button.dark"]),1)]),_:1}),A(i(pe),{type:"primary",size:"sm"},{default:I(()=>[...r[0]||(r[0]=[R("Small",-1)])]),_:1}),A(i(pe),{type:"primary",size:"lg"},{default:I(()=>[...r[1]||(r[1]=[R("Large",-1)])]),_:1}),A(i(pe),{loading:a.value,onClick:s},{default:I(()=>[R(v(i(t)["button.clickLoad"]),1)]),_:1},8,["loading"]),A(i(pe),{type:"primary",disabled:""},{default:I(()=>[R(v(i(t)["button.disabled"]),1)]),_:1}),A(i(pe),{type:"outline","icon-only":""},{icon:I(()=>[A(i(We),{name:"zap"})]),_:1}),A(i(pe),{type:"primary"},{icon:I(()=>[A(i(We),{name:"rocket"})]),default:I(()=>[R(" "+v(i(t)["button.withIcon"]),1)]),_:1})]))}}),U2={style:{display:"flex","flex-direction":"column",gap:"18px"}},K2=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",U2,[A(i(cl),null,{default:I(()=>[A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(t)["buttonGroup.day"]),1)]),_:1}),A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(t)["buttonGroup.week"]),1)]),_:1}),A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(t)["buttonGroup.month"]),1)]),_:1})]),_:1}),A(i(cl),{vertical:""},{default:I(()=>[A(i(pe),{type:"primary",size:"sm"},{default:I(()=>[R(v(i(t)["buttonGroup.add"]),1)]),_:1}),A(i(pe),{type:"ghost",size:"sm"},{default:I(()=>[R(v(i(t)["buttonGroup.edit"]),1)]),_:1})]),_:1})]))}}),W2={class:"icon-demo"},Y2={class:"icon-demo__bar"},X2={class:"icon-demo__count"},Z2={class:"icon-demo__grid"},Q2=["title","onClick"],J2={class:"icon-demo__name"},ew={key:0,class:"icon-demo__copied"},tw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=Object.keys(xe),s=C(""),l=C(""),r=G(()=>a.filter(c=>c.includes(s.value.trim().toLowerCase())));async function n(c){try{await navigator.clipboard.writeText(`<AeroIcon name="${c}" />`),l.value=c,setTimeout(()=>{l.value===c&&(l.value="")},1200)}catch{}}return(c,f)=>(d(),p("div",W2,[u("div",Y2,[A(i(Bt),{modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=m=>s.value=m),placeholder:i(t)["icon.searchPlaceholder"],width:240},null,8,["modelValue","placeholder"]),u("span",X2,v(r.value.length)+" / "+v(i(a).length),1)]),u("div",Z2,[(d(!0),p(q,null,X(r.value,m=>(d(),p("button",{key:m,class:"icon-demo__cell",type:"button",title:`${i(t)["icon.clickCopy"]}<AeroIcon name="${m}" />`,onClick:h=>n(m)},[A(i(We),{name:m,size:20},null,8,["name"]),u("span",J2,v(m),1),l.value===m?(d(),p("span",ew,v(i(t)["icon.copied"]),1)):W("",!0)],8,Q2))),128))])]))}}),ow=Z(tw,[["__scopeId","data-v-01f88e35"]]),aw={style:{display:"flex",gap:"12px"}},sw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",aw,[A(i(Co),{icon:"bell",dot:"",label:i(t)["iconButton.notify"]},null,8,["label"]),A(i(Co),{icon:"sun",label:i(t)["iconButton.theme"]},null,8,["label"]),A(i(Co),{icon:"search",label:i(t)["iconButton.search"]},null,8,["label"]),A(i(Co),{icon:"menu",label:i(t)["iconButton.menu"]},null,8,["label"]),A(i(Co),{icon:"settings",disabled:"",label:i(t)["iconButton.settings"]},null,8,["label"])]))}}),lw={style:{display:"flex",gap:"16px"}},rw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",lw,[A(i(Ra),{href:"#"},{default:I(()=>[R(v(i(t)["link.internal"]),1)]),_:1}),A(i(Ra),{href:"https://github.com/FanXingYiDianYun/aero-vue",external:""},{default:I(()=>[R(v(i(t)["link.external"]),1)]),_:1}),A(i(Ra),{disabled:""},{default:I(()=>[R(v(i(t)["link.disabled"]),1)]),_:1})]))}}),nw={class:"type-row"},iw={class:"type-row"},cw={class:"type-row"},dw={class:"type-row"},uw={class:"type-row"},pw={class:"inline-els pg-prose"},mw={class:"t-link",href:"javascript:;"},fw={class:"type-row"},hw={class:"spec"},vw={class:"hl-row"},gw={class:"hl-demo"},bw={class:"hl-demo"},yw={class:"hl-demo"},_w=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(0);function s(){a.value++}return(l,r)=>(d(),p("div",{class:"type-demo",key:a.value},[u("div",nw,[r[0]||(r[0]=u("span",{class:"spec"},"Display / 900 / 44px",-1)),A(i(Qe),{level:"display"},{default:I(()=>[R(v(i(t)["typography.display"]),1)]),_:1})]),u("div",iw,[r[2]||(r[2]=u("span",{class:"spec"},"Heading EN / 700 / 34px",-1)),A(i(Qe),{level:"heading-en",en:""},{default:I(()=>[...r[1]||(r[1]=[R("Ship it. Scale it. 0→1 in 11.6s",-1)])]),_:1})]),u("div",cw,[r[3]||(r[3]=u("span",{class:"spec"},"Title / 700 / 22px",-1)),A(i(Qe),{level:"title"},{default:I(()=>[R(v(i(t)["typography.title"]),1)]),_:1})]),u("div",dw,[r[4]||(r[4]=u("span",{class:"spec"},"Body / 400 / 15.5px",-1)),A(i(Qe),{level:"body",style:{"max-width":"560px"}},{default:I(()=>[R(v(i(t)["typography.body"]),1)]),_:1})]),u("div",uw,[r[10]||(r[10]=u("span",{class:"spec"},"Inline elements",-1)),u("div",pw,[A(i(Lt),null,{default:I(()=>[...r[5]||(r[5]=[R("TAG",-1)])]),_:1}),u("a",mw,v(i(t)["typography.link"]),1),r[7]||(r[7]=u("kbd",null,"Ctrl",-1)),r[8]||(r[8]=R(" + ",-1)),r[9]||(r[9]=u("kbd",null,"K",-1)),u("b",null,v(i(t)["typography.bold"]),1),A(i(Lt),null,{default:I(()=>[...r[6]||(r[6]=[R("aero deploy",-1)])]),_:1})])]),u("div",fw,[u("span",hw,"Highlight / "+v(i(t)["typography.highlight"]),1),u("div",vw,[u("span",gw,[R(v(i(t)["typography.sendTo"]),1),A(i(Qe),{level:"title",highlight:"",class:"hl-word-demo"},{default:I(()=>[R(v(i(t)["typography.cloudWord"]),1)]),_:1})]),u("span",bw,[R(v(i(t)["typography.like"]),1),A(i(Qe),{level:"title",highlight:"",class:"hl-word-demo"},{default:I(()=>[R(v(i(t)["typography.boltWord"]),1)]),_:1}),R(v(i(t)["typography.sameAs"]),1)]),u("span",yw,[R(v(i(t)["typography.stickerPre"]),1),A(i(Qe),{level:"title",sticker:"",class:"hl-box-demo"},{default:I(()=>[...r[11]||(r[11]=[R("NEW!",-1)])]),_:1}),R(v(i(t)["typography.stickerPost"]),1)]),A(i(pe),{type:"outline",size:"sm",onClick:s},{default:I(()=>[R(v(i(t)["typography.replay"]),1)]),_:1}),(d(),fe(i(Lt),{key:`replay-${a.value}`},{default:I(()=>[R(v(i(t)["typography.trigger"])+" #"+v(a.value),1)]),_:1})),A(i(Lt),null,{default:I(()=>[...r[12]||(r[12]=[R(".hl-word / .hl-box",-1)])]),_:1})])])]))}}),xw=Z(_w,[["__scopeId","data-v-485f68a5"]]),kw={style:{color:"var(--ui-ink-2)"}},ww={style:{display:"flex",height:"40px","align-items":"center"}},Aw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",null,[u("p",kw,v(i(t)["divider.topContent"]),1),A(i(Qo)),A(i(Qo),{title:"Or"}),u("div",ww,[R(v(i(t)["divider.left"])+" ",1),A(i(Qo),{vertical:""}),R(" "+v(i(t)["divider.middle"])+" ",1),A(i(Qo),{vertical:"",dashed:""}),R(" "+v(i(t)["divider.right"]),1)])]))}}),$w={key:0,class:"click-log"},Sw={class:"hint-mono"},Tw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C([]),s=C(12);function l(r){a.value.unshift(r),a.value.length>6&&a.value.pop()}return(r,n)=>(d(),fe(i(Bo),{direction:"vertical",gap:18},{default:I(()=>[A(i(Bo),{gap:s.value},{default:I(()=>[A(i(pe),{type:"primary",size:"sm",onClick:n[0]||(n[0]=c=>l("Primary"))},{default:I(()=>[R(v(i(t)["space.clickPrimary"]),1)]),_:1}),A(i(pe),{type:"outline",size:"sm",onClick:n[1]||(n[1]=c=>l("Outline"))},{default:I(()=>[R(v(i(t)["space.clickOutline"]),1)]),_:1}),A(i(pe),{type:"ghost",size:"sm",onClick:n[2]||(n[2]=c=>l("Ghost"))},{default:I(()=>[R(v(i(t)["space.clickGhost"]),1)]),_:1})]),_:1},8,["gap"]),A(i(Bo),{gap:10,align:"center"},{default:I(()=>[n[4]||(n[4]=u("span",{class:"hint-mono"},"gap:",-1)),A(i(pe),{type:"outline",size:"sm",onClick:n[3]||(n[3]=c=>s.value=s.value===12?32:12)},{default:I(()=>[R(v(s.value===12?i(t)["space.to32"]:i(t)["space.to12"]),1)]),_:1})]),_:1}),A(i(Bo),{gap:24,justify:"between"},{default:I(()=>[u("span",null,v(i(t)["space.leftEnd"]),1),u("span",null,v(i(t)["space.rightEnd"]),1)]),_:1}),A(i(Bo),{direction:"vertical",gap:6},{default:I(()=>[u("span",null,v(i(t)["space.vertA"]),1),u("span",null,v(i(t)["space.vertB"]),1)]),_:1}),a.value.length?(d(),p("div",$w,[u("span",Sw,v(i(t)["space.lastClick"]),1),(d(!0),p(q,null,X(a.value,(c,f)=>(d(),p("span",{key:f,class:"click-item"},v(c),1))),128))])):W("",!0)]),_:1}))}}),Cw=Z(Tw,[["__scopeId","data-v-7b0739fd"]]),Bw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),fe(i(nc),{"max-height":180,style:{"max-width":"320px"}},{default:I(()=>[(d(),p(q,null,X(12,l=>u("p",{key:l,style:{padding:"10px 14px",color:"var(--ui-ink-2)","font-size":"13.5px","border-bottom":"2px dashed var(--ui-line)",margin:"0"}},v(i(t)["scrollbar.item"])+" "+v(l)+" "+v(i(t)["scrollbar.itemNote"]),1)),64))]),_:1}))}}),Lw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),fe(i(qi),{cols:3,gap:16,style:{"max-width":"560px"}},{default:I(()=>[(d(),p(q,null,X(6,l=>A(i(Fo),{key:l,hoverable:""},{default:I(()=>[u("h4",null,v(i(t)["grid.card"])+" "+v(l),1),u("p",null,v(i(t)["grid.sample"]),1)]),_:2},1024)),64))]),_:1}))}}),Mw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),fe(i(Ui),{alt:"",padding:"compact",radius:16},{default:I(()=>[A(i(Qe),{level:"title"},{default:I(()=>[R(v(i(t)["layout.blockTitle"]),1)]),_:1}),A(i(Qe),{level:"body"},{default:I(()=>[R(v(i(t)["layout.body"]),1)]),_:1})]),_:1}))}}),Pw={class:"ts-demo"},Iw={class:"ts-demo__sec"},Dw={class:"ts-demo__h"},Vw={class:"ts-demo__row"},zw={class:"ts-demo__sub"},Ew={class:"ts-demo__sec"},Rw={class:"ts-demo__h"},Fw={class:"ts-demo__row"},Ow={class:"ts-demo__sub ts-demo__val"},Hw={class:"ts-demo__sub"},qw={class:"ts-demo__sec"},Nw={class:"ts-demo__h"},jw={class:"ts-demo__row"},Gw={class:"ts-demo__sec"},Uw={class:"ts-demo__h"},Kw={class:"ts-demo__row"},Ww={class:"ts-demo__sec"},Yw={class:"ts-demo__h"},Xw={class:"ts-demo__log"},Zw={key:0,class:"ts-demo__logempty"},Qw=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,{state:a,setTheme:s}=Cs(),l=C(a.theme);be(l,f=>s(f)),be(()=>a.theme,f=>{l.value!==f&&(l.value=f)});const r=C(!1),n=C([]);function c(f){n.value=[f,...n.value].slice(0,8)}return(f,m)=>(d(),p("div",Pw,[u("section",Iw,[u("h3",Dw,v(i(t)["themeSwitch.secBasic"]),1),u("div",Vw,[A(i(eo)),u("span",zw,v(i(t)["themeSwitch.hint"]),1)])]),u("section",Ew,[u("h3",Rw,v(i(t)["themeSwitch.secControlled"]),1),u("div",Fw,[A(i(eo),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=h=>l.value=h),onChange:c},null,8,["modelValue"]),u("span",Ow,"v-model = "+v(l.value),1)]),u("span",Hw,v(i(t)["themeSwitch.hintControlled"]),1)]),u("section",qw,[u("h3",Nw,v(i(t)["themeSwitch.secSizes"]),1),u("div",jw,[A(i(eo),{size:"sm",modelValue:l.value,"onUpdate:modelValue":m[1]||(m[1]=h=>l.value=h),onChange:c},null,8,["modelValue"]),A(i(eo),{size:"md",modelValue:l.value,"onUpdate:modelValue":m[2]||(m[2]=h=>l.value=h),onChange:c},null,8,["modelValue"]),A(i(eo),{size:"lg",modelValue:l.value,"onUpdate:modelValue":m[3]||(m[3]=h=>l.value=h),onChange:c},null,8,["modelValue"])])]),u("section",Gw,[u("h3",Uw,v(i(t)["themeSwitch.secDisabled"]),1),u("div",Kw,[A(i(lt),{modelValue:r.value,"onUpdate:modelValue":m[4]||(m[4]=h=>r.value=h)},null,8,["modelValue"]),A(i(eo),{modelValue:l.value,"onUpdate:modelValue":m[5]||(m[5]=h=>l.value=h),disabled:r.value,onChange:c},null,8,["modelValue","disabled"])])]),u("section",Ww,[u("h3",Yw,v(i(t)["themeSwitch.secChangeLog"]),1),u("ol",Xw,[n.value.length?W("",!0):(d(),p("li",Zw,v(i(t)["themeSwitch.logEmpty"]),1)),(d(!0),p(q,null,X(n.value,(h,g)=>(d(),p("li",{key:g},v(h==="dark"?i(t)["themeSwitch.logDark"]:i(t)["themeSwitch.logLight"]),1))),128))])])]))}}),Jw=Z(Qw,[["__scopeId","data-v-c3853a9d"]]),eA={style:{display:"flex","flex-direction":"column",gap:"14px","max-width":"300px"}},tA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(""),s=C("");function l(){s.value=a.value?"":t.value["input.required"]}return(r,n)=>(d(),p("div",eA,[A(i(Bt),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),placeholder:i(t)["input.basicPlaceholder"],clearable:""},null,8,["modelValue","placeholder"]),A(i(Bt),{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=c=>a.value=c),prefix:"npm install",placeholder:i(t)["input.prefixPlaceholder"]},null,8,["modelValue","placeholder"]),A(i(Bt),{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=c=>a.value=c),placeholder:i(t)["input.errorPlaceholder"],error:!!s.value,onBlur:l},null,8,["modelValue","placeholder","error"]),A(i(Bt),{placeholder:i(t)["input.disabledPlaceholder"],disabled:"","model-value":i(t)["input.disabledValue"]},null,8,["placeholder","model-value"])]))}}),oA={style:{display:"flex","flex-direction":"column",gap:"14px","max-width":"320px"}},aA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("");return(s,l)=>(d(),p("div",oA,[A(i(ls),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),placeholder:i(t)["textarea.multiLine"]},null,8,["modelValue","placeholder"]),A(i(ls),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=r=>a.value=r),placeholder:i(t)["textarea.withCount"],maxlength:100,"show-count":""},null,8,["modelValue","placeholder"])]))}}),sA={style:{display:"flex",gap:"18px","flex-wrap":"wrap"}},lA=z({__name:"basic",setup(e){const o=C(5);return(t,a)=>(d(),p("div",sA,[A(i(Ea),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),min:0,max:10},null,8,["modelValue"]),A(i(Ea),{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s),step:2,"step-strictly":""},null,8,["modelValue"]),A(i(Ea),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=s=>o.value=s),disabled:""},null,8,["modelValue"])]))}}),rA={style:{"max-width":"360px"}},nA={style:{"font-size":"12.5px",color:"var(--ui-ink-3)","margin-top":"8px"}},iA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(["vue","vite"]);return(s,l)=>(d(),p("div",rA,[A(i(Gi),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),placeholder:i(t)["inputTag.placeholder"],max:6},null,8,["modelValue","placeholder"]),u("p",nA,v(i(t)["inputTag.current"])+v(a.value.join(" / ")),1)]))}}),cA={style:{display:"flex","flex-direction":"column",gap:"14px","max-width":"360px"}},dA={style:{"font-size":"12.5px",color:"var(--ui-ink-3)",margin:"0"}},uA={style:{"font-size":"13px",color:"var(--ui-ink-3)",margin:"0"}},pA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=c=>t.value[`search.optGroup${c}`],s=G(()=>[{value:"button",label:t.value["search.optButton"],description:t.value["search.optButtonDesc"],group:a("Form")},{value:"form",label:t.value["search.optForm"],description:t.value["search.optFormDesc"],group:a("Form")},{value:"table",label:t.value["search.optTable"],description:t.value["search.optTableDesc"],group:a("DataDisplay")},{value:"tree",label:t.value["search.optTree"],description:t.value["search.optTreeDesc"],group:a("DataDisplay")},{value:"avatar",label:t.value["search.optAvatar"],description:t.value["search.optAvatarDesc"],group:a("DataDisplay")},{value:"image-viewer",label:t.value["search.optImageViewer"],description:t.value["search.optImageViewerDesc"],group:a("DataDisplay")},{value:"carousel",label:t.value["search.optCarousel"],description:t.value["search.optCarouselDesc"],group:a("DataDisplay")},{value:"affix",label:t.value["search.optAffix"],description:t.value["search.optAffixDesc"],group:a("Navigation")},{value:"anchor",label:t.value["search.optAnchor"],description:t.value["search.optAnchorDesc"],group:a("Navigation")},{value:"collapse",label:t.value["search.optCollapse"],description:t.value["search.optCollapseDesc"],group:a("Navigation")}]),l=C(""),r=G(()=>{const c=s.value.find(f=>String(f.value)===l.value);return c?`${c.label}（${c.description}）`:""});function n(c){l.value=String(c.value)}return(c,f)=>(d(),p("div",cA,[A(i(ql),{options:s.value,placeholder:i(t)["search.placeholder"],"group-by":"group",onSelect:n},null,8,["options","placeholder"]),u("p",dA,v(i(t)["search.hint"]),1),u("p",uA,v(i(t)["search.selected"])+v(r.value||i(t)["search.none"]),1)]))}}),mA={style:{"max-width":"260px"}},fA={style:{"margin-top":"10px","font-size":"12.5px",color:"var(--ui-ink-3)"}},hA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("vue"),s=[{label:"Vue 3",value:"vue"},{label:"React",value:"react"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(l,r)=>(d(),p("div",mA,[A(i(ic),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),options:s,placeholder:i(t)["select.placeholder"],clearable:""},null,8,["modelValue","placeholder"]),u("p",fA,v(i(t)["select.current"])+v(a.value??i(t)["select.none"]),1)]))}}),vA={class:"cas-demo"},gA={style:{"max-width":"320px"}},bA={class:"cas-demo__val"},yA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C([]),s=[{value:"src",label:"src",children:[{value:"components",label:"components",children:[{value:"button",label:"button",children:[{value:"btn-vue",label:"button.vue"},{value:"btn-ts",label:"button.types.ts"}]},{value:"form",label:"form",children:[{value:"input",label:"input.vue"}]}]},{value:"styles",label:"styles",children:[{value:"tokens",label:"tokens.scss"},{value:"theme",label:"theme.scss",children:[{value:"dark",label:"_dark.scss"}]}]},{value:"composables",label:"composables",children:[{value:"popup",label:"use-popup.ts"}]}]},{value:"dist",label:"dist",children:[{value:"es",label:"aero-ui.js"},{value:"umd",label:"aero-ui.umd.cjs"}]},{value:"docs",label:"docs",children:[{value:"guide",label:"guide.md"},{value:"api",label:"api.md"}]}];return(l,r)=>(d(),p("div",vA,[u("div",gA,[A(i(Li),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),options:s,placeholder:i(t)["cascader.placeholder"]},null,8,["modelValue","placeholder"])]),u("p",bA,v(a.value.join("/")||i(t)["cascader.empty"]),1)]))}}),_A=Z(yA,[["__scopeId","data-v-71c6d0f2"]]),xA={class:"ts-demo"},kA={style:{"max-width":"380px"}},wA={class:"ts-demo__val"},AA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("button"),s=G(()=>[{key:"basic",label:t.value["treeSelect.groupBasic"],children:[{key:"button",label:t.value["treeSelect.optButton"]},{key:"icon",label:t.value["treeSelect.optIcon"]},{key:"typography",label:t.value["treeSelect.optTypography"]},{key:"divider",label:t.value["treeSelect.optDivider"]}]},{key:"form",label:t.value["treeSelect.groupForm"],children:[{key:"input",label:t.value["treeSelect.optInput"]},{key:"select",label:t.value["treeSelect.optSelect"]},{key:"datepicker",label:t.value["treeSelect.optDatepicker"]},{key:"upload",label:t.value["treeSelect.optUpload"]}]},{key:"data",label:t.value["treeSelect.groupData"],children:[{key:"table",label:t.value["treeSelect.optTable"]},{key:"timeline",label:t.value["treeSelect.optTimeline"]},{key:"statistic",label:t.value["treeSelect.optStatistic"]}]},{key:"feedback",label:t.value["treeSelect.groupFeedback"],children:[{key:"toast",label:t.value["treeSelect.optToast"]},{key:"dialog",label:t.value["treeSelect.optDialog"]}]}]);return(l,r)=>(d(),p("div",xA,[u("div",kA,[A(i(_c),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),data:s.value,placeholder:i(t)["treeSelect.placeholder"]},null,8,["modelValue","data","placeholder"])]),u("p",wA,v(i(t)["treeSelect.current"])+" "+v(a.value||i(t)["treeSelect.none"]),1)]))}}),$A=Z(AA,[["__scopeId","data-v-6f4be937"]]),SA={style:{"max-width":"240px"}},TA=z({__name:"basic",setup(e){const o=C("2026-09-13");return(t,a)=>(d(),p("div",SA,[A(i(Ii),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s)},null,8,["modelValue"])]))}}),CA={style:{"max-width":"200px"}},BA=z({__name:"basic",setup(e){const o=C("09:30");return(t,a)=>(d(),p("div",CA,[A(i(fc),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),"minute-step":5},null,8,["modelValue"])]))}}),LA={style:{display:"flex","flex-direction":"column",gap:"16px"}},MA={style:{"font-size":"12.5px",color:"var(--ui-ink-3)"}},PA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!0),s=C(["vue"]);return(l,r)=>(d(),p("div",LA,[A(i(Zo),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n)},{default:I(()=>[R(v(i(t)["checkbox.single"]),1)]),_:1},8,["modelValue"]),A(i(Mi),{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=n=>s.value=n)},{default:I(()=>[A(i(Zo),{value:"vue"},{default:I(()=>[...r[2]||(r[2]=[R("Vue",-1)])]),_:1}),A(i(Zo),{value:"vite"},{default:I(()=>[...r[3]||(r[3]=[R("Vite",-1)])]),_:1}),A(i(Zo),{value:"scss"},{default:I(()=>[...r[4]||(r[4]=[R("SCSS",-1)])]),_:1})]),_:1},8,["modelValue"]),u("p",MA,v(i(t)["checkbox.selected"])+v(s.value.join(" / ")||i(t)["checkbox.none"]),1)]))}}),IA=z({__name:"basic",setup(e){const o=C("vue");return(t,a)=>(d(),fe(i(lc),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s)},{default:I(()=>[A(i(ea),{value:"vue"},{default:I(()=>[...a[1]||(a[1]=[R("Vue",-1)])]),_:1}),A(i(ea),{value:"react"},{default:I(()=>[...a[2]||(a[2]=[R("React",-1)])]),_:1}),A(i(ea),{value:"svelte"},{default:I(()=>[...a[3]||(a[3]=[R("Svelte",-1)])]),_:1}),A(i(ea),{value:"solid",disabled:""},{default:I(()=>[...a[4]||(a[4]=[R("Solid",-1)])]),_:1})]),_:1},8,["modelValue"]))}}),DA={style:{display:"flex","flex-direction":"column",gap:"12px"}},VA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!0);return(s,l)=>(d(),p("div",DA,[A(i(lt),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r)},{default:I(()=>[R(v(i(t)["switch.followSystem"]),1)]),_:1},8,["modelValue"]),A(i(lt),{"model-value":!a.value},{default:I(()=>[R(v(i(t)["switch.inverted"]),1)]),_:1},8,["model-value"]),A(i(lt),{disabled:""},{default:I(()=>[R(v(i(t)["switch.disabled"]),1)]),_:1})]))}}),zA=z({__name:"basic",setup(e){const o=C(50);return(t,a)=>(d(),fe(i(wa),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),"start-label":"0%","end-label":"100%",unit:"%"},null,8,["modelValue"]))}}),EA={style:{display:"flex","flex-direction":"column",gap:"10px"}},RA={style:{display:"flex","align-items":"center",gap:"10px","min-width":"0","flex-wrap":"wrap"}},FA={style:{"font-size":"12.5px",color:"var(--ui-ink-3)"}},OA={style:{"font-size":"12.5px",color:"var(--ui-ink-3)"}},HA={style:{"font-size":"12.5px",color:"var(--ui-ink-3)"}},qA={style:{"font-size":"12px",color:"var(--ui-ink-3)","min-width":"0"}},NA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(3),s=C(!1),l=C(!1),r=G(()=>s.value?a.value.toFixed(1):String(a.value));return(n,c)=>(d(),p("div",EA,[u("div",RA,[A(i(lt),{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=f=>s.value=f),"aria-label":i(t)["rate.decimalToggle"]},null,8,["modelValue","aria-label"]),u("span",FA,v(i(t)["rate.decimalToggle"]),1),A(i(lt),{modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=f=>l.value=f),"aria-label":i(t)["rate.allowReselect"]},null,8,["modelValue","aria-label"]),u("span",OA,v(i(t)["rate.allowReselect"]),1)]),A(i(vl),{modelValue:a.value,"onUpdate:modelValue":c[2]||(c[2]=f=>a.value=f),"allow-decimal":s.value,"allow-reselect":l.value},null,8,["modelValue","allow-decimal","allow-reselect"]),u("span",HA,v(i(t)["rate.current"])+v(r.value),1),u("span",qA,v(i(t)["rate.decimalHint"]),1),A(i(vl),{"model-value":4,disabled:""})]))}}),jA={style:{display:"flex","flex-direction":"column",gap:"12px"}},GA={style:{"font-family":"var(--ui-font-mono)","font-size":"13px",color:"var(--ui-brand-ink)"}},UA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("#0EBFFF");return(s,l)=>(d(),p("div",jA,[A(i(Ol),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r)},null,8,["modelValue"]),u("span",GA,v(i(t)["colorPicker.current"])+v(a.value),1)]))}}),KA={style:{display:"flex","flex-direction":"column",gap:"18px","max-width":"400px","min-width":"0"}},WA=z({__name:"basic",setup(e){const o=C([]);return(t,a)=>(d(),p("div",KA,[A(i(yl),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),drag:"",multiple:"",accept:"image/*"},null,8,["modelValue"]),A(i(yl),{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s)},null,8,["modelValue"])]))}}),YA=z({__name:"basic",setup(e){const o=C(["vite"]),t=[{key:"vue",label:"Vue 3"},{key:"vite",label:"Vite"},{key:"sass",label:"Sass",disabled:!0},{key:"ts",label:"TypeScript"},{key:"pnpm",label:"pnpm"}];return(a,s)=>(d(),fe(i(vc),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value=l),data:t},null,8,["modelValue"]))}}),XA={style:{"max-width":"300px"}},ZA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(""),s=[{label:"Vue 3",value:"vue"},{label:"Vite",value:"vite"},{label:"Vitest",value:"vitest"},{label:"SCSS",value:"scss"},{label:"TypeScript",value:"ts"}];return(l,r)=>(d(),p("div",XA,[A(i(bi),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),suggestions:s,placeholder:i(t)["autocomplete.placeholder"]},null,8,["modelValue","placeholder"])]))}}),QA={style:{"max-width":"380px"}},JA=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(""),s=G(()=>[{label:t.value["mention.aeroTeam"],value:"aero-team"},{label:"Alia",value:"alia"},{label:"Ben",value:"ben"},{label:"Cara",value:"cara"}]);return(l,r)=>(d(),p("div",QA,[A(i(Zi),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),options:s.value},null,8,["modelValue","options"])]))}}),e4={style:{display:"flex","flex-direction":"column",gap:"12px"}},t4={style:{"font-size":"12.5px",color:"var(--ui-ink-3)","font-family":"var(--ui-font-mono)"}},o4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("");return(s,l)=>(d(),p("div",e4,[A(i(ec),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),onComplete:l[1]||(l[1]=r=>i(Ze).success(`${i(t)["otp.codeLabel"]}${r}`))},null,8,["modelValue"]),u("span",t4,"value = "+v(a.value||"…"),1)]))}}),a4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(""),s=C(""),l=C("");function r(){l.value=a.value?"":t.value["form.required"]}function n(){if(!a.value){l.value=t.value["form.required"];return}alert(`${t.value["form.submit"]}${a.value}`)}return(c,f)=>(d(),fe(i(Hi),{style:{"max-width":"380px"},onSubmit:n},{default:I(()=>[A(i(ul),{label:i(t)["form.projectLabel"],required:"",hint:i(t)["form.charHint"],error:l.value,style:{width:"100%"}},{default:I(()=>[A(i(Bt),{modelValue:a.value,"onUpdate:modelValue":f[0]||(f[0]=m=>a.value=m),placeholder:i(t)["form.namePlaceholder"],onBlur:r},null,8,["modelValue","placeholder"])]),_:1},8,["label","hint","error"]),A(i(ul),{label:i(t)["form.descLabel"],style:{width:"100%"}},{default:I(()=>[A(i(ls),{modelValue:s.value,"onUpdate:modelValue":f[1]||(f[1]=m=>s.value=m),placeholder:i(t)["form.descPlaceholder"]},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),A(i(pe),{type:"primary","native-type":"submit"},{default:I(()=>[R(v(i(t)["form.submitBtn"]),1)]),_:1})]),_:1}))}}),s4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=[{key:"pkg",title:"Package",mono:!0},{key:"desc",title:"Description"},{key:"ver",title:"Version",mono:!0},{key:"status",title:"Status"}],s=G(()=>[{pkg:"aero-vue",desc:t.value["table.vueDesc"],ver:"0.1.0",st:"stable"},{pkg:"vite",desc:t.value["table.buildTool"],ver:"5.2.0",st:"beta"},{pkg:"sass",desc:t.value["table.preprocessor"],ver:"1.77.0",st:"stable"}]);return(l,r)=>(d(),fe(i(dc),{columns:a,data:s.value},{status:I(({row:n})=>[A(i(Ue),{type:n.st==="stable"?"ok":"warn",dot:""},{default:I(()=>[R(v(n.st),1)]),_:2},1032,["type"])]),_:1},8,["data"]))}}),l4={class:"tree-demo"},r4={class:"tree-demo__ctrl"},n4={style:{"max-width":"340px"}},i4={class:"tree-demo__val"},c4={class:"tree-demo__hint"},d4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(["src","components"]),s=C(["styles"]),l=C(""),r=C(!1),n=[{key:"src",label:"src/",children:[{key:"components",label:"components/",children:[{key:"button",label:"button/"},{key:"form",label:"form/"},{key:"tree",label:"tree/"}]},{key:"composables",label:"composables/"},{key:"styles",label:"styles/"},{key:"index.ts",label:"index.ts"}]},{key:"dist",label:"dist/",children:[{key:"aero-ui.js",label:"aero-ui.js"},{key:"styles.css",label:"styles.css"}]}];return(c,f)=>(d(),p("div",l4,[u("div",r4,[A(i(lt),{modelValue:r.value,"onUpdate:modelValue":f[0]||(f[0]=m=>r.value=m)},{default:I(()=>[R(v(i(t)["tree.includeParents"]),1)]),_:1},8,["modelValue"])]),u("div",n4,[A(i(yc),{data:n,expanded:a.value,"onUpdate:expanded":f[1]||(f[1]=m=>a.value=m),checked:s.value,"onUpdate:checked":f[2]||(f[2]=m=>s.value=m),"active-key":l.value,"onUpdate:activeKey":f[3]||(f[3]=m=>l.value=m),checkable:"","include-parents":r.value},null,8,["expanded","checked","active-key","include-parents"])]),u("p",i4,v(i(t)["tree.checked"])+v(s.value.length)+v(i(t)["tree.checkedEnd"])+v(s.value.join(", ")||"—"),1),u("p",c4,v(i(t)["tree.hint"]),1)]))}}),u4=Z(d4,[["__scopeId","data-v-08528ed2"]]),p4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=G(()=>[{icon:"git-commit",date:"2026-09-01",chip:"INIT",title:t.value["timeline.item1"],desc:t.value["timeline.item1Desc"]},{icon:"code",date:"2026-09-05",chip:"DEV",title:t.value["timeline.item2"],desc:t.value["timeline.item2Desc"]},{icon:"rocket",date:"2026-09-13",chip:"NEXT",title:t.value["timeline.item3"],desc:t.value["timeline.item3Desc"]}]);return(s,l)=>(d(),fe(i(mc),{items:a.value},null,8,["items"]))}}),m4={style:{display:"flex",gap:"10px","align-items":"center"}},f4=z({__name:"basic",setup(e){return(o,t)=>(d(),p("div",m4,[A(i(Lt),null,{default:I(()=>[...t[0]||(t[0]=[R("npm",-1)])]),_:1}),A(i(Lt),null,{default:I(()=>[...t[1]||(t[1]=[R("pnpm",-1)])]),_:1}),A(i(Lt),{accent:""},{default:I(()=>[...t[2]||(t[2]=[R("Vue 3.4",-1)])]),_:1}),A(i(Lt),null,{default:I(()=>[...t[3]||(t[3]=[R("MIT",-1)])]),_:1})]))}}),h4={class:"badge-demo"},v4={class:"badge-demo__row"},g4={class:"badge-demo__row"},b4={class:"hint-mono"},y4={class:"badge-demo__row"},_4={class:"hint-mono"},x4={class:"badge-demo__row"},k4={class:"hint-mono"},w4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(t.value["badge.defaultText"]),s=C(!1);be(a,r=>{s.value=r!==t.value["badge.defaultText"]}),be(()=>t.value["badge.defaultText"],r=>{s.value||(a.value=r)});const l=["solid","soft","line","dark","ok","warn","err"];return(r,n)=>(d(),p("div",h4,[u("div",v4,[(d(),p(q,null,X(l,c=>A(i(Ue),{key:c,type:c,dot:c==="ok"||c==="err"},{default:I(()=>[R(v(c),1)]),_:2},1032,["type","dot"])),64))]),u("div",g4,[u("span",b4,v(i(t)["badge.customLabel"]),1),A(i(Ue),{type:"solid"},{default:I(()=>[R(v(a.value),1)]),_:1}),A(i(Bt),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),width:150,maxlength:14},null,8,["modelValue"])]),u("div",y4,[u("span",_4,v(i(t)["badge.dotLabel"]),1),A(i(Ue),{type:"ok",dot:""},{default:I(()=>[R(v(i(t)["badge.buildPass"]),1)]),_:1}),A(i(Ue),{type:"warn",dot:""},{default:I(()=>[R(v(i(t)["badge.degraded"]),1)]),_:1}),A(i(Ue),{type:"err",dot:""},{default:I(()=>[R(v(i(t)["badge.deployFail"]),1)]),_:1})]),u("div",x4,[u("span",k4,v(i(t)["badge.comboLabel"]),1),A(i(Ue),{type:"soft"},{default:I(()=>[...n[1]||(n[1]=[R("Beta",-1)])]),_:1}),A(i(Ue),{type:"line"},{default:I(()=>[...n[2]||(n[2]=[R("v0.1.0",-1)])]),_:1}),A(i(Ue),{type:"dark"},{default:I(()=>[...n[3]||(n[3]=[R("OSS",-1)])]),_:1})])]))}}),A4=Z(w4,[["__scopeId","data-v-df04eb66"]]),$4={class:"avatar-demo"},S4={class:"row"},T4={class:"hint"},C4={class:"row"},B4={class:"hint"},L4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=[1,2,3,4,5,6],s=[28,34,44,56,72,128];return(l,r)=>(d(),p("div",$4,[u("div",S4,[u("span",T4,v(i(t)["avatar.pallet"]),1),(d(),p(q,null,X(a,n=>A(i(to),{key:n,tone:n},{default:I(()=>[R(v(["AY","ZK","A3","Q4","W5","E6"][n-1]),1)]),_:2},1032,["tone"])),64))]),u("div",C4,[u("span",B4,v(i(t)["avatar.multiSize"]),1),(d(),p(q,null,X(s,n=>A(i(to),{key:n,size:n,tone:n%6+1},{default:I(()=>[R(v(n),1)]),_:2},1032,["size","tone"])),64))])]))}}),M4=Z(L4,[["__scopeId","data-v-a3c67a43"]]),P4={class:"cropper-demo"},I4={class:"hint-chip"},D4=z({__name:"basic",setup(e){const{cropper:o}=Y();return(t,a)=>(d(),p("div",P4,[A(i(Nk),null,{tip:I(()=>[u("span",I4,v(i(o).hint),1)]),_:1})]))}}),V4=Z(D4,[["__scopeId","data-v-e4436d0a"]]),z4={style:{display:"flex",gap:"24px","align-items":"center"}},E4=z({__name:"basic",setup(e){return(o,t)=>(d(),p("div",z4,[A(i(Ti),{total:8,max:5},{default:I(()=>[A(i(to),{tone:1},{default:I(()=>[...t[0]||(t[0]=[R("AY",-1)])]),_:1}),A(i(to),{tone:2},{default:I(()=>[...t[1]||(t[1]=[R("ZK",-1)])]),_:1}),A(i(to),{tone:3},{default:I(()=>[...t[2]||(t[2]=[R("A3",-1)])]),_:1}),A(i(to),{tone:4},{default:I(()=>[...t[3]||(t[3]=[R("Q4",-1)])]),_:1}),A(i(to),{tone:5},{default:I(()=>[...t[4]||(t[4]=[R("W5",-1)])]),_:1})]),_:1})]))}}),R4={style:{display:"flex",gap:"18px","flex-wrap":"wrap"}},F4={style:{display:"flex",gap:"10px","margin-top":"18px"}},O4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>{const l=In("Btn");return d(),p("div",R4,[A(i(Fo),{hoverable:"",width:280},{default:I(()=>[u("h4",null,v(i(t)["card.hoverableTitle"]),1),u("p",null,v(i(t)["card.hoverableBody"]),1)]),_:1}),A(i(Fo),{width:280},{header:I(()=>[u("h4",null,v(i(t)["card.withHeaderTitle"]),1)]),footer:I(()=>[u("div",F4,[A(l,{type:"primary",size:"sm"},{default:I(()=>[R(v(i(t)["card.confirm"]),1)]),_:1}),A(l,{type:"ghost",size:"sm"},{default:I(()=>[R(v(i(t)["card.cancel"]),1)]),_:1})])]),default:I(()=>[R(" "+v(i(t)["card.body"])+" ",1)]),_:1})])}}}),H4={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},q4={class:"custom-slide"},N4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=G(()=>[{en:"Aero UI",zh:t.value["carousel.zh1"],chip:"v0.1.0",tone:"a"},{en:"Dark Mode",zh:t.value["carousel.zh2"],chip:"THEME",tone:"b"},{en:"75+ CMP",zh:t.value["carousel.zh3"],chip:"SCALE",tone:"c"}]),s=C(0),l=[{en:"slot-1",tone:"b"},{en:"slot-2",tone:"c"}];return(r,n)=>(d(),p("div",H4,[A(i(dl),{slides:a.value,style:{"max-width":"300px"}},null,8,["slides"]),A(i(dl),{slides:l,interval:0,style:{"max-width":"300px"}},{default:I(({slide:c,index:f})=>[u("div",q4,[u("h4",null,"#"+v(f+1)+" "+v(c.en)+" "+v(i(t)["carousel.customSlide"]),1),u("p",null,v(i(t)["carousel.anyContent"]),1),A(i(pe),{type:"outline",size:"sm",onClick:n[0]||(n[0]=m=>s.value++)},{default:I(()=>[R(v(i(t)["carousel.clickPlus"])+" "+v(s.value)+" "+v(i(t)["carousel.clickPlusEnd"]),1)]),_:1})])]),_:1})]))}}),j4=Z(N4,[["__scopeId","data-v-a2a94207"]]),G4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("a"),s=G(()=>[{key:"a",title:t.value["collapse.q1"],content:t.value["collapse.a1"]},{key:"b",title:t.value["collapse.q2"],content:t.value["collapse.a2"]},{key:"c",title:t.value["collapse.q3"],content:t.value["collapse.a3"]}]);return(l,r)=>(d(),fe(i(Pi),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),items:s.value,style:{"max-width":"480px"}},null,8,["modelValue","items"]))}}),U4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a={name:"aero-vue",version:"0.1.0",license:"MIT",author:"AeroBase Team",deps:"vue >= 3.4",build:"vite lib (es + umd)",style:"SCSS tokens"};return(s,l)=>(d(),fe(i(Di),{title:i(t)["descriptions.title"],data:a,column:2,items:[{key:"name",label:i(t)["descriptions.pkgName"]},{key:"version",label:i(t)["descriptions.version"]},{key:"license",label:i(t)["descriptions.license"]},{key:"author",label:i(t)["descriptions.author"],span:2},{key:"build",label:i(t)["descriptions.build"]},{key:"style",label:i(t)["descriptions.style"]}],style:{"max-width":"560px"}},{license:I(()=>[A(i(Lt),{accent:""},{default:I(()=>[...l[0]||(l[0]=[R("MIT",-1)])]),_:1})]),_:1},8,["title","items"]))}}),K4={style:{"max-width":"400px"}},W4=z({__name:"basic",setup(e){const{empty:o}=Y();return(t,a)=>(d(),p("div",K4,[A(i(Oi),{hint:i(o).search},{actions:I(()=>[A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(o).reset),1)]),_:1})]),_:1},8,["hint"])]))}}),Y4={style:{display:"flex",gap:"14px","flex-wrap":"wrap"}},X4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",Y4,[A(i(pl),{src:"https://picsum.photos/seed/aero1/240/160",alt:i(t)["image.sampleAlt"],width:"240",height:"160",preview:""},null,8,["alt"]),A(i(pl),{src:"not-exists.png",width:"240",height:"160",alt:i(t)["image.failAlt"]},null,8,["alt"])]))}}),Z4=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!1);function s(r,n,c){const f=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="${n}"/>
    <g fill="none" stroke="rgba(255,255,255,.28)" stroke-width="2">
      ${Array.from({length:9},(m,h)=>`<line x1="${h*100}" y1="0" x2="${h*100}" y2="500"/>`).join("")}
      ${Array.from({length:6},(m,h)=>`<line x1="0" y1="${h*100}" x2="800" y2="${h*100}"/>`).join("")}
    </g>
    <circle cx="400" cy="250" r="150" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="6"/>
    <circle cx="655" cy="105" r="34" fill="#ff7a3d"/>
    <text x="400" y="272" font-family="monospace" font-size="104" font-weight="700" fill="rgba(255,255,255,.92)" text-anchor="middle">${c}</text>
  </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f)}`}const l=[s(1,"#25506e","01"),s(2,"#3d4a7a","02"),s(3,"#1f6146","03")];return(r,n)=>(d(),p("div",null,[A(i(pe),{type:"outline",onClick:n[0]||(n[0]=c=>a.value=!0)},{default:I(()=>[R(v(i(t)["imageViewer.openBtn"]),1)]),_:1}),A(i(ji),{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=c=>a.value=c),"url-list":l},null,8,["modelValue"])]))}}),Q4={style:{display:"flex","flex-direction":"column",gap:"10px","align-items":"flex-start"}},J4={style:{"font-size":"12.5px",color:"var(--ui-ink-3)"}},e$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(3);return(s,l)=>(d(),p("div",Q4,[A(i(oc),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),total:264},null,8,["modelValue"]),u("span",J4,v(i(t)["pagination.pageOf"])+" "+v(a.value)+" "+v(i(t)["pagination.pageSuffix"]),1)]))}}),t$={style:{display:"flex","flex-direction":"column",gap:"12px",width:"320px"}},o$=z({__name:"basic",setup(e){const o=C(66);return(t,a)=>(d(),p("div",t$,[A(i(Fa),{percent:o.value},null,8,["percent"]),A(i(Fa),{percent:100,status:"success",shimmer:!1}),A(i(Fa),{percent:32,status:"error",shimmer:!1}),A(i(wa),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),min:0,max:100,"show-scale":!1},null,8,["modelValue"])]))}}),a$={style:{display:"flex",gap:"20px","align-items":"center"}},s$=z({__name:"basic",setup(e){const o=C(72);return(t,a)=>(d(),p("div",a$,[A(i(rc),{percent:o.value,sublabel:"CPU LOAD"},null,8,["percent"]),A(i(wa),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),min:0,max:100,"show-scale":!1},null,8,["modelValue"])]))}}),l$={style:{display:"flex",gap:"16px","flex-wrap":"wrap",width:"100%"}},r$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",l$,[A(i(gl),{status:"success",title:i(t)["result.paySuccess"],desc:i(t)["result.paySuccessDesc"],style:{flex:"1","min-width":"260px"}},{default:I(()=>[A(i(pe),{type:"primary",size:"sm"},{default:I(()=>[R(v(i(t)["result.viewOrder"]),1)]),_:1})]),_:1},8,["title","desc"]),A(i(gl),{status:"error",title:i(t)["result.payFail"],desc:i(t)["result.payFailDesc"],style:{flex:"1","min-width":"260px"}},{default:I(()=>[A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(t)["result.retry"]),1)]),_:1})]),_:1},8,["title","desc"])]))}}),n$={class:"seg-demo"},i$={class:"seg-demo__row"},c$={class:"seg-demo__hint"},d$={class:"seg-demo__row"},u$={class:"seg-demo__hint"},p$={class:"seg-demo__panel"},m$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("month"),s=C("list"),l=G(()=>({list:t.value["segmented.listDesc"],grid:t.value["segmented.gridDesc"],kanban:t.value["segmented.kanbanDesc"]}));return(r,n)=>(d(),p("div",n$,[u("div",i$,[A(i(ss),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),options:[{label:i(t)["segmented.monthly"],value:"month"},{label:i(t)["segmented.yearly"],value:"year"}]},null,8,["modelValue","options"]),u("span",c$,v(i(t)["segmented.billing"])+v(a.value==="month"?i(t)["segmented.monthly"]:i(t)["segmented.yearly"]),1)]),u("div",d$,[A(i(ss),{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=c=>s.value=c),options:[{label:i(t)["segmented.list"],value:"list"},{label:i(t)["segmented.grid"],value:"grid"},{label:i(t)["segmented.kanban"],value:"kanban"}]},null,8,["modelValue","options"]),u("span",u$,v(i(t)["segmented.viewLabel"])+v(s.value),1)]),u("div",p$,v(l.value[s.value]),1)]))}}),f$=Z(m$,[["__scopeId","data-v-e513db9c"]]),h$={class:"sk-demo"},v$={key:0,class:"sk-demo__card"},g$={class:"sk-demo__head"},b$={class:"sk-demo__head-lines"},y$={class:"sk-demo__foot"},_$={key:1,class:"sk-demo__card"},x$={class:"sk-demo__head"},k$={class:"sk-demo__t"},w$={class:"sk-demo__s"},A$={class:"sk-demo__title"},$$={class:"sk-demo__p"},S$={class:"sk-demo__p"},T$={class:"sk-demo__p"},C$={class:"sk-demo__foot"},B$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!0);return(s,l)=>(d(),p("div",h$,[a.value?(d(),p("div",v$,[u("div",g$,[A(i($t),{variant:"circle",height:44,width:44}),u("div",b$,[A(i($t),{height:15,width:"45%"}),A(i($t),{height:11,width:"30%"})])]),A(i($t),{height:17,width:"70%",style:{"margin-top":"4px"}}),A(i($t),{height:12}),A(i($t),{height:12}),A(i($t),{height:12,width:"60%"}),u("div",y$,[A(i($t),{variant:"rect",height:34,width:"92px"}),A(i($t),{variant:"rect",height:34,width:"92px"})])])):(d(),p("div",_$,[u("div",x$,[l[1]||(l[1]=u("span",{class:"sk-demo__avatar"},"ZK",-1)),u("div",null,[u("b",k$,v(i(t)["skeleton.name"]),1),u("span",w$,v(i(t)["skeleton.time"]),1)])]),u("h4",A$,v(i(t)["skeleton.title"]),1),u("p",$$,v(i(t)["skeleton.p1"]),1),u("p",S$,v(i(t)["skeleton.p2"]),1),u("p",T$,v(i(t)["skeleton.p3"]),1),u("div",C$,[A(i(pe),{size:"sm",type:"primary"},{default:I(()=>[R(v(i(t)["skeleton.viewUpdate"]),1)]),_:1}),A(i(pe),{size:"sm",type:"outline"},{default:I(()=>[R(v(i(t)["skeleton.deployDoc"]),1)]),_:1})])])),A(i(pe),{size:"sm",onClick:l[0]||(l[0]=r=>a.value=!a.value)},{default:I(()=>[R(v(i(t)["skeleton.toggle"]),1)]),_:1})]))}}),L$=Z(B$,[["__scopeId","data-v-60ee32d9"]]),M$={style:{display:"flex",gap:"18px","align-items":"center"}},P$=z({__name:"basic",setup(e){return(o,t)=>(d(),p("div",M$,[A(i(Oa),{size:"sm"}),A(i(Oa)),A(i(Oa),{size:"lg"})]))}}),I$={style:{display:"flex",gap:"40px","align-items":"center","flex-wrap":"wrap"}},D$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(12864);return(s,l)=>(d(),p("div",I$,[A(i(Ha),{value:a.value,label:"GitHub Stars"},null,8,["value"]),A(i(Ha),{value:99.9,suffix:"%",label:i(t)["statistic.availability"]},null,8,["label"]),A(i(Ha),{value:42,prefix:"v",label:i(t)["statistic.componentCount"],animated:!1},null,8,["label"]),A(i(pe),{size:"sm",onClick:l[0]||(l[0]=r=>a.value+=500)},{default:I(()=>[...l[1]||(l[1]=[R("+500",-1)])]),_:1})]))}}),V$={class:"qr-demo"},z$={class:"qr-demo__left"},E$={class:"qr-demo__box"},R$={class:"qr-demo__cap"},F$={class:"qr-demo__ctrls"},O$={class:"qr-demo__meta"},H$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("https://github.com/FanXingYiDianYun/aero-vue"),s=C(160),l=C("");return(r,n)=>(d(),p("div",V$,[u("div",z$,[u("div",E$,[(d(),fe(i(sc),{value:a.value,size:s.value,fg:l.value,key:a.value+l.value},null,8,["value","size","fg"]))]),u("p",R$,v(i(t)["qrcode.caption"]),1)]),u("div",F$,[A(i(Qe),{level:"caption"},{default:I(()=>[R(v(i(t)["qrcode.contentLabel"]),1)]),_:1}),A(i(Bt),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),placeholder:i(t)["qrcode.inputPlaceholder"],width:"100%"},null,8,["modelValue","placeholder"]),A(i(Qe),{level:"caption"},{default:I(()=>[R(v(i(t)["qrcode.sizeLabel"])+" "+v(s.value)+"px",1)]),_:1}),A(i(wa),{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=c=>s.value=c),min:96,max:280,step:8,"show-scale":!1,class:"qr-demo__slider"},null,8,["modelValue"]),A(i(Qe),{level:"caption"},{default:I(()=>[R(v(i(t)["qrcode.fgLabel"]),1)]),_:1}),A(i(Ol),{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=c=>l.value=c),class:"qr-demo__picker"},null,8,["modelValue"]),u("p",O$,v(i(t)["qrcode.meta"])+" "+v(a.value.length)+" "+v(i(t)["qrcode.chars"]),1)])]))}}),q$=Z(H$,[["__scopeId","data-v-1c86b913"]]),N$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),fe(i(xc),{content:"AERO UI",gap:150,"max-width":480,radius:16,style:{overflow:"hidden"}},{default:I(()=>[A(i(Fo),{"min-height":160},{default:I(()=>[u("h4",null,v(i(t)["watermark.title"]),1),u("p",null,v(i(t)["watermark.body"]),1)]),_:1})]),_:1}))}}),j$=z({__name:"basic",setup(e){const o=[{text:"$ pnpm add aero-vue",type:"cmd"},{text:"+ aero-vue 0.1.0",type:"ok"},{text:"$ pnpm build",type:"cmd"},{text:"building for production...",type:"live"},{text:"done in 1.2s",type:"ok"}];return(t,a)=>(d(),fe(i(pc),{lines:o,title:"ztk@aero",style:{"max-width":"480px"}}))}}),G$=`import { AeroButton, AeroUI } from 'aero-vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(AeroUI)
`,U$=z({__name:"basic",setup(e){const o=C(!0);return(t,a)=>(d(),fe(i(Jt),{open:o.value,"onUpdate:open":a[0]||(a[0]=s=>o.value=s),code:G$,lang:"TS",title:"main.ts",collapsible:"",style:{"max-width":"480px"}},null,8,["open"]))}}),K$={style:{display:"flex","flex-direction":"column",gap:"18px","min-width":"0","max-width":"100%"}},W$={style:{display:"flex",gap:"10px","align-items":"center","flex-wrap":"wrap"}},Y$={style:{"font-size":"12px",color:"var(--ui-ink-3)","font-family":"var(--ui-font-mono)"}},X$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;function a(x,b){return{name:"MenuDemoIcon",render(){return zo("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":1.5,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",style:"width:18px;height:18px;display:block;flex:none"},x.map($=>zo("path",{d:$,key:$})))}}}const s=a(["M3 12h7M14 12h7M3 6h18M3 18h18"]),l=a(["M3 3h8v8H3zM13 3h8v5h-8zM13 12h8v9h-8zM3 15h8v6H3z"]),r=a(["M3 4h18v12H3zM8 20h8M12 16v4"]),n=a(["M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"]),c=a(["M4 5h16v4H4zM4 13h10v4H4zM4 17h6M18 15h2v2h-2z"]),f=a(["M6 3v18M6 7h12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6M6 13h12"]),m=a(["M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8 7 17M17 7l2.8-2.8"]),h=a(["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0"]),g=C("overview"),_=C(!1),k=G(()=>[{key:"overview",label:t.value["menu.groupOverview"],group:t.value["menu.groupOverview"],icon:s},{key:"dashboard",label:t.value["menu.dashboard"],group:t.value["menu.groupOverview"],icon:l},{key:"monitor",label:t.value["menu.monitor"],group:t.value["menu.groupOverview"],icon:r},{key:"component",label:t.value["menu.components"],group:t.value["menu.groupComponents"],icon:n},{key:"form",label:t.value["menu.form"],group:t.value["menu.groupComponents"],icon:c},{key:"data",label:t.value["menu.data"],group:t.value["menu.groupComponents"],icon:f},{key:"settings",label:t.value["menu.groupSettings"],group:t.value["menu.groupSettings"],icon:m},{key:"account",label:t.value["menu.account"],group:t.value["menu.groupSettings"],icon:h}]);return(x,b)=>(d(),p("div",K$,[u("div",W$,[A(i(pe),{size:"sm",type:"outline",onClick:b[0]||(b[0]=$=>_.value=!_.value)},{default:I(()=>[R(v(_.value?i(t)["menu.expand"]:i(t)["menu.collapse"]),1)]),_:1}),u("span",Y$,v(i(t)["menu.collapseHint"]),1)]),A(i(Xi),{modelValue:g.value,"onUpdate:modelValue":b[1]||(b[1]=$=>g.value=$),collapsed:_.value,"onUpdate:collapsed":b[2]||(b[2]=$=>_.value=$),items:k.value,mode:"vertical"},null,8,["modelValue","collapsed","items"])]))}}),Z$=Z(X$,[["__scopeId","data-v-7ebf62d5"]]),Q$={style:{color:"var(--ui-ink-2)","font-size":"14px"}},J$=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C("a"),s=G(()=>[{key:"a",label:t.value["tabs.basic"]},{key:"b",label:t.value["tabs.style"]},{key:"c",label:t.value["tabs.motion"]}]),l=G(()=>({a:t.value["tabs.basicPanel"],b:t.value["tabs.stylePanel"],c:t.value["tabs.motionPanel"]}));return(r,n)=>(d(),fe(i(uc),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),tabs:s.value},{default:I(({active:c})=>[u("div",Q$,v(l.value[c]),1)]),_:1},8,["modelValue","tabs"]))}}),e3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),fe(i(Bi),{items:[{label:i(t)["breadcrumb.home"],href:"#"},{label:i(t)["breadcrumb.components"],href:"#"},{label:"Breadcrumb"}]},null,8,["items"]))}}),t3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=G(()=>[{key:"copy",label:t.value["dropdown.copy"],icon:"copy"},{key:"edit",label:t.value["dropdown.edit"],icon:"edit",desc:t.value["dropdown.editDesc"]},{key:"share",label:t.value["dropdown.share"],icon:"send",divided:!0},{key:"del",label:t.value["dropdown.delete"],icon:"trash",danger:!0,divided:!0}]);return(s,l)=>(d(),fe(i(Fi),{items:a.value,onSelect:l[0]||(l[0]=r=>i(Ze).info(`${i(t)["dropdown.selected"]}${r.label}`))},{default:I(()=>[A(i(pe),{type:"outline"},{default:I(()=>[R(v(i(t)["dropdown.moreBtn"]),1)]),_:1})]),_:1},8,["items"]))}}),o3={class:"steps-demo"},a3={class:"steps-demo__ops"},s3={class:"steps-demo__val"},l3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(1),s=G(()=>[{title:t.value["steps.create"],desc:"pnpm init"},{title:t.value["steps.install"],desc:"pnpm add aero-vue"},{title:t.value["steps.build"],desc:"pnpm build"},{title:t.value["steps.publish"],desc:"npm publish"}]);return(l,r)=>(d(),p("div",o3,[A(i(cc),{items:s.value,current:a.value,onChange:r[0]||(r[0]=n=>a.value=n)},null,8,["items","current"]),u("div",a3,[A(i(pe),{size:"sm",type:"outline",disabled:a.value===0,onClick:r[1]||(r[1]=n=>a.value--)},{default:I(()=>[R(v(i(t)["steps.prev"]),1)]),_:1},8,["disabled"]),A(i(pe),{size:"sm",type:"primary",disabled:a.value===s.value.length-1,onClick:r[2]||(r[2]=n=>a.value++)},{default:I(()=>[R(v(i(t)["steps.next"]),1)]),_:1},8,["disabled"]),u("span",s3,v(i(t)["steps.current"])+" "+v(a.value+1)+" / "+v(s.value.length),1)])]))}}),r3=Z(l3,[["__scopeId","data-v-42383daf"]]),n3={style:{"max-width":"640px"}},i3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",n3,[A(i(tc),{title:i(t)["pageHeader.title"],subtitle:i(t)["pageHeader.subtitle"],back:"",onBack:()=>{}},{default:I(()=>[A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(t)["pageHeader.exportBtn"]),1)]),_:1})]),_:1},8,["title","subtitle"])]))}}),c3={style:{display:"flex",gap:"30px"}},d3={style:{height:"220px","overflow-y":"auto",flex:"1",border:"2px dashed var(--ui-line-2)","border-radius":"14px",padding:"14px"},id:"anchor-scroll"},u3={id:"sec-1",style:{margin:"0 0 90px"}},p3={style:{color:"var(--ui-ink-2)","font-size":"13.5px","line-height":"1.8"}},m3={id:"sec-2",style:{margin:"90px 0"}},f3={style:{color:"var(--ui-ink-2)","font-size":"13.5px","line-height":"1.8"}},h3={id:"sec-3",style:{margin:"90px 0 0"}},v3={style:{color:"var(--ui-ink-2)","font-size":"13.5px","line-height":"1.8","margin-top":"90px"}},g3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=G(()=>[{key:"sec-1",label:t.value["anchor.sec1"]},{key:"sec-2",label:t.value["anchor.sec2"]},{key:"sec-3",label:t.value["anchor.sec3"]}]);return(s,l)=>(d(),p("div",c3,[u("div",d3,[u("h3",u3,v(i(t)["anchor.sec1"]),1),u("p",p3,v(i(t)["anchor.note1"]),1),u("h3",m3,v(i(t)["anchor.sec2"]),1),u("p",f3,v(i(t)["anchor.note2"]),1),u("h3",h3,v(i(t)["anchor.sec3"]),1),u("p",v3,v(i(t)["anchor.note3"]),1)]),A(i(Wk),{items:a.value,container:"#anchor-scroll",offset:8},null,8,["items"])]))}}),b3={style:{height:"900px"}},y3={style:{color:"var(--ui-ink-3)","font-size":"13px"}},_3={style:{height:"700px",background:"var(--ui-bg-soft)",border:"2px dashed var(--ui-line-2)","border-radius":"14px","margin-top":"16px",display:"flex","align-items":"center","justify-content":"center",color:"var(--ui-ink-3)","font-size":"13px"}},x3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;function a(){return document.querySelector(".pg-main")}function s(){return document.querySelector(".pg-nav")}return(l,r)=>(d(),p("div",b3,[u("p",y3,v(i(t)["affix.hint"]),1),A(i(Zk),{"offset-top":40,target:a,anchor:s,gutter:8},{default:I(()=>[A(i(pe),{type:"primary",size:"sm"},{default:I(()=>[R(v(i(t)["affix.stickyBtn"]),1)]),_:1})]),_:1}),u("div",_3,v(i(t)["affix.placeholder"]),1)]))}}),k3={style:{height:"1200px","padding-top":"400px",color:"var(--ui-ink-3)","font-size":"13px"}},w3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",k3,[R(v(i(t)["backTop.hint"])+" ",1),A(i(Ci),{threshold:200})]))}}),A3={style:{display:"flex",gap:"22px","align-items":"center",padding:"30px 0","flex-wrap":"wrap"}},$3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!1),s=G(()=>[{target:"#tour-input",title:t.value["tour.step1Title"],desc:t.value["tour.step1Desc"]},{target:"#tour-badge",title:t.value["tour.step2Title"],desc:t.value["tour.step2Desc"]},{target:"#tour-btn",title:t.value["tour.step3Title"],desc:t.value["tour.step3Desc"]}]);return(l,r)=>(d(),p("div",A3,[A(i(Bt),{id:"tour-input",placeholder:i(t)["tour.searchPlaceholder"],width:200},null,8,["placeholder"]),A(i(Ue),{id:"tour-badge",type:"ok",dot:""},{default:I(()=>[R(v(i(t)["tour.badge"]),1)]),_:1}),A(i(pe),{id:"tour-btn",type:"primary",size:"sm",onClick:r[0]||(r[0]=n=>a.value=!0)},{default:I(()=>[R(v(i(t)["tour.startBtn"]),1)]),_:1}),A(i(hc),{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=n=>a.value=n),steps:s.value},null,8,["modelValue","steps"])]))}}),S3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!1);return(s,l)=>(d(),p("div",null,[A(i(pe),{type:"primary",onClick:l[0]||(l[0]=r=>a.value=!0)},{default:I(()=>[R(v(i(t)["dialog.openBtn"]),1)]),_:1}),A(i(zi),{modelValue:a.value,"onUpdate:modelValue":l[3]||(l[3]=r=>a.value=r),title:i(t)["dialog.title"]},{footer:I(()=>[A(i(pe),{type:"ghost",size:"sm",onClick:l[1]||(l[1]=r=>a.value=!1)},{default:I(()=>[R(v(i(t)["dialog.cancel"]),1)]),_:1}),A(i(pe),{type:"danger",size:"sm",onClick:l[2]||(l[2]=r=>a.value=!1)},{default:I(()=>[R(v(i(t)["dialog.delete"]),1)]),_:1})]),default:I(()=>[u("p",null,v(i(t)["dialog.body"]),1)]),_:1},8,["modelValue","title"])]))}}),T3={style:{display:"flex","flex-direction":"column",gap:"14px"}},C3={style:{color:"var(--ui-ink-2)","font-size":"13.5px"}},B3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!1);return(s,l)=>(d(),p("div",null,[A(i(pe),{type:"outline",onClick:l[0]||(l[0]=r=>a.value=!0)},{default:I(()=>[R(v(i(t)["drawer.openBtn"]),1)]),_:1}),A(i(Ri),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=r=>a.value=r),title:i(t)["drawer.title"]},{default:I(()=>[u("div",T3,[A(i(Do),null,{default:I(()=>[R(v(i(t)["drawer.tag1"]),1)]),_:1}),A(i(Do),null,{default:I(()=>[R(v(i(t)["drawer.tag2"]),1)]),_:1}),u("p",C3,v(i(t)["drawer.body"]),1)])]),_:1},8,["modelValue","title"])]))}}),L3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;async function a(){const s=await Qi.confirm({title:t.value["messageBox.title"],message:t.value["messageBox.message"],danger:!0,confirmText:t.value["messageBox.confirmText"]});Ze[s?"success":"info"](s?t.value["messageBox.deleted"]:t.value["messageBox.cancelled"])}return(s,l)=>(d(),fe(i(pe),{type:"danger",onClick:a},{default:I(()=>[R(v(i(t)["messageBox.triggerBtn"]),1)]),_:1}))}}),M3={style:{display:"flex",gap:"12px","flex-wrap":"wrap"}},P3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",M3,[A(i(pe),{size:"sm",type:"primary",onClick:s[0]||(s[0]=l=>i(Jo).success(i(t)["notification.successTitle"],i(t)["notification.successBody"]))},{default:I(()=>[R(v(i(t)["notification.success"]),1)]),_:1}),A(i(pe),{size:"sm",type:"danger",onClick:s[1]||(s[1]=l=>i(Jo).error(i(t)["notification.errorTitle"],i(t)["notification.errorBody"]))},{default:I(()=>[R(v(i(t)["notification.error"]),1)]),_:1}),A(i(pe),{size:"sm",onClick:s[2]||(s[2]=l=>i(Jo).warn(i(t)["notification.warnTitle"],i(t)["notification.warnBody"]))},{default:I(()=>[R(v(i(t)["notification.warn"]),1)]),_:1}),A(i(pe),{size:"sm",type:"ghost",onClick:s[3]||(s[3]=l=>i(Jo).info(i(t)["notification.infoTitle"],i(t)["notification.infoBody"]))},{default:I(()=>[R(v(i(t)["notification.info"]),1)]),_:1})]))}}),I3={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"420px"}},D3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",I3,[A(i(Xo),{type:"info",title:i(t)["alert.infoTitle"]},{default:I(()=>[R(v(i(t)["alert.infoBody"]),1)]),_:1},8,["title"]),A(i(Xo),{type:"success",title:i(t)["alert.successTitle"]},{default:I(()=>[R(v(i(t)["alert.successBody"]),1)]),_:1},8,["title"]),A(i(Xo),{type:"warn",title:i(t)["alert.warnTitle"]},{default:I(()=>[R(v(i(t)["alert.warnBody"]),1)]),_:1},8,["title"]),A(i(Xo),{type:"error",title:i(t)["alert.errorTitle"],closable:""},{default:I(()=>[R(v(i(t)["alert.errorBody"]),1)]),_:1},8,["title"])]))}}),V3={style:{"max-width":"380px"}},z3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!0);return(s,l)=>(d(),p("div",V3,[A(i(Ki),{loading:a.value,tip:i(t)["loading.tip"]},{default:I(()=>[A(i(Fo),null,{default:I(()=>[u("h4",null,v(i(t)["loading.wrapped"]),1),u("p",null,v(i(t)["loading.wrappedBody"]),1)]),_:1})]),_:1},8,["loading","tip"]),A(i(pe),{size:"sm",type:"outline",style:{"margin-top":"12px"},onClick:l[0]||(l[0]=r=>a.value=!a.value)},{default:I(()=>[R(v(i(t)["loading.toggle"]),1)]),_:1})]))}}),E3={style:{display:"flex",gap:"18px",padding:"30px 0"}},R3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",E3,[A(i(as),{title:i(t)["popover.hoverTitle"],trigger:"hover"},{content:I(()=>[R(v(i(t)["popover.hoverBody"]),1)]),default:I(()=>[A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(t)["popover.hoverBtn"]),1)]),_:1})]),_:1},8,["title"]),A(i(as),{title:i(t)["popover.clickTitle"],trigger:"click",placement:"right"},{content:I(()=>[R(v(i(t)["popover.clickBody"]),1)]),default:I(()=>[A(i(pe),{type:"ghost",size:"sm"},{default:I(()=>[R(v(i(t)["popover.clickBtn"]),1)]),_:1})]),_:1},8,["title"])]))}}),F3={style:{display:"flex",gap:"16px"}},O3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",F3,[A(i(fl),{title:i(t)["popconfirm.publishTitle"],onConfirm:s[0]||(s[0]=l=>i(Ze).success(i(t)["popconfirm.published"]))},{default:I(()=>[A(i(pe),{type:"primary",size:"sm"},{default:I(()=>[R(v(i(t)["popconfirm.publishBtn"]),1)]),_:1})]),_:1},8,["title"]),A(i(fl),{title:i(t)["popconfirm.deleteTitle"],danger:"","confirm-text":i(t)["popconfirm.deleteBtn"],onConfirm:s[1]||(s[1]=l=>i(Ze).error(i(t)["popconfirm.deleted"]))},{default:I(()=>[A(i(pe),{type:"danger",size:"sm"},{default:I(()=>[R(v(i(t)["popconfirm.deleteBtn"]),1)]),_:1})]),_:1},8,["title","confirm-text"])]))}}),H3={style:{display:"flex",gap:"18px","align-items":"center",padding:"40px 0"}},q3={tabindex:"0",style:{cursor:"help",color:"var(--ui-brand-ink)","font-weight":"700",display:"inline-flex","align-items":"baseline",gap:"4px",transform:"translateY(1px)"}},N3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",H3,[A(i(bl),{content:i(t)["tooltip.top"]},{default:I(()=>[A(i(pe),{type:"outline",size:"sm"},{default:I(()=>[R(v(i(t)["tooltip.topBtn"]),1)]),_:1})]),_:1},8,["content"]),A(i(bl),{content:i(t)["tooltip.bottom"],placement:"bottom"},{default:I(()=>[u("span",q3,[s[0]||(s[0]=u("sup",{style:{"line-height":"1","font-weight":"800",transform:"scale(0.82)","transform-origin":"center",display:"inline-block"}},"?",-1)),R(" "+v(i(t)["tooltip.bottomBtn"]),1)])]),_:1},8,["content"])]))}}),j3={style:{display:"flex",gap:"12px","flex-wrap":"wrap"}},G3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",j3,[A(i(pe),{size:"sm",type:"primary",onClick:s[0]||(s[0]=l=>i(Ze).success(i(t)["toast.successMsg"]))},{default:I(()=>[R(v(i(t)["toast.success"]),1)]),_:1}),A(i(pe),{size:"sm",type:"danger",onClick:s[1]||(s[1]=l=>i(Ze).error(i(t)["toast.errorMsg"]))},{default:I(()=>[R(v(i(t)["toast.error"]),1)]),_:1}),A(i(pe),{size:"sm",onClick:s[2]||(s[2]=l=>i(Ze).warn(i(t)["toast.warnMsg"]))},{default:I(()=>[R(v(i(t)["toast.warn"]),1)]),_:1}),A(i(pe),{size:"sm",type:"ghost",onClick:s[3]||(s[3]=l=>i(Ze).info(i(t)["toast.infoMsg"]))},{default:I(()=>[R(v(i(t)["toast.info"]),1)]),_:1})]))}}),U3={class:"chip-demo"},K3={class:"chip-demo__row"},W3={key:0,class:"chip-demo__log"},Y3=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=["Vue 3","TypeScript","Vite","SCSS"],s=C([...a]),l=C([]);function r(n){const c=s.value.indexOf(n);c>=0&&s.value.splice(c,1),l.value.unshift(n),l.value.length>3&&l.value.pop()}return(n,c)=>(d(),p("div",U3,[u("div",K3,[A(os,{name:"chip-pop",tag:"span",class:"chip-demo__row"},{default:I(()=>[(d(!0),p(q,null,X(s.value,f=>(d(),fe(i(Do),{key:f,closable:"",onClose:m=>r(f)},{default:I(()=>[R(v(f),1)]),_:2},1032,["onClose"]))),128))]),_:1}),A(i(Do),{active:""},{default:I(()=>[R(v(i(t)["chip.selectedChip"]),1)]),_:1}),A(i(Do),null,{default:I(()=>[R(v(i(t)["chip.uncloseable"]),1)]),_:1})]),l.value.length?(d(),p("p",W3,[(d(!0),p(q,null,X(l.value,(f,m)=>(d(),p("span",{key:m,class:"chip-demo__log-item"},v(i(t)["chip.removed"])+v(f)+v(i(t)["chip.removedEnd"]),1))),128))])):W("",!0),s.value.length<a.length?(d(),fe(i(pe),{key:1,type:"ghost",size:"sm",onClick:c[0]||(c[0]=f=>{s.value=[...a],l.value=[]})},{default:I(()=>[R(v(i(t)["chip.reset"]),1)]),_:1})):W("",!0)]))}}),X3=Z(Y3,[["__scopeId","data-v-2d4a5158"]]),Z3={class:"ann-demo"},Q3={class:"ann-demo__bar"},J3={class:"ann-demo__ctrls"},eS={class:"ann-demo__note"},tS={style:{display:"flex","flex-direction":"column",gap:"14px"}},oS={class:"ann-demo__h"},aS={class:"ann-demo__body"},sS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!0),s=C(!0),l=C(!1);return(r,n)=>(d(),p("div",Z3,[u("div",Q3,[A(i(zl),{open:a.value,"onUpdate:open":n[0]||(n[0]=c=>a.value=c),marquee:s.value,onClose:n[1]||(n[1]=c=>a.value=!1),"action-href":"https://github.com/FanXingYiDianYun/aero-vue"},{title:I(()=>[R(v(i(t)["announce.title"]),1)]),action:I(()=>[R(v(i(t)["announce.action"]),1)]),default:I(()=>[l.value?(d(),p(q,{key:0},[R(v(i(t)["announce.longBody"]),1)],64)):(d(),p(q,{key:1},[R(v(i(t)["announce.shortBody"]),1)],64))]),_:1},8,["open","marquee"])]),u("div",J3,[A(i(lt),{modelValue:s.value,"onUpdate:modelValue":n[2]||(n[2]=c=>s.value=c)},{default:I(()=>[R(v(i(t)["announce.marqueeLabel"]),1)]),_:1},8,["modelValue"]),A(i(lt),{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=c=>l.value=c)},{default:I(()=>[R(v(i(t)["announce.longTextLabel"]),1)]),_:1},8,["modelValue"]),A(i(pe),{size:"sm",type:"outline",onClick:n[4]||(n[4]=c=>a.value=!a.value)},{default:I(()=>[R(v(a.value?i(t)["announce.closeBtn"]:i(t)["announce.reopenBtn"]),1)]),_:1})]),u("p",eS,v(i(t)["announce.note"]),1),u("div",tS,[u("h4",oS,v(i(t)["announce.bodyTitle"]),1),u("div",aS,[u("p",null,v(i(t)["announce.bodyText"]),1)])])]))}}),lS=Z(sS,[["__scopeId","data-v-9f48108b"]]),rS={class:"cp-demo"},nS={class:"cp-demo__panel"},iS={class:"cp-demo__label"},cS={class:"cp-demo__panel"},dS={class:"cp-demo__label"},uS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",rS,[u("div",nS,[u("b",iS,v(i(t)["configProvider.default"]),1),A(i(Ue),{type:"soft",dot:""},{default:I(()=>[R(v(i(t)["configProvider.badge"]),1)]),_:1})]),A(i(ra),{theme:"dark",preset:"violet"},{default:I(()=>[u("div",cS,[u("b",dS,v(i(t)["configProvider.injected"]),1),A(i(Ue),{type:"soft",dot:""},{default:I(()=>[R(v(i(t)["configProvider.badge"]),1)]),_:1})])]),_:1})]))}}),pS=Z(uS,[["__scopeId","data-v-98d675c6"]]),mS={class:"tp-demo"},fS={class:"tp-demo__hint"},hS={class:"tp-demo__presets"},vS=["onClick"],gS={class:"tp-demo__scope"},bS={class:"tp-demo__global"},yS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,{state:a,setPreset:s}=Cs(),l=C("aero"),r=G(()=>[{key:"aero",label:t.value["themeProvider.aeroBlue"],color:"#0EBFFF"},{key:"violet",label:"Violet",color:"#7C6CFF"},{key:"mint",label:"Mint",color:"#10C999"},{key:"sunset",label:"Sunset",color:"#FF8A3D"},{key:"rose",label:"Rose",color:"#FF5C8A"}]);function n(){s(l.value)}return(c,f)=>(d(),p("div",mS,[u("div",fS,[A(i(Ue),{type:"soft",dot:""},{default:I(()=>[R(v(i(t)["themeProvider.scopedBadge"]),1)]),_:1}),u("span",null,v(i(t)["themeProvider.scopedHint"]),1)]),u("div",hS,[(d(!0),p(q,null,X(r.value,m=>(d(),p("button",{key:m.key,class:Q(["tp-demo__preset",{"is-on":l.value===m.key}]),type:"button",onClick:h=>l.value=m.key},[u("span",{class:"tp-demo__dot",style:me({background:m.color})},null,4),R(" "+v(m.label),1)],10,vS))),128))]),A(i(e2),{preset:l.value,scoped:""},{default:I(()=>[u("div",gS,[A(i(pe),{type:"primary"},{default:I(()=>[R(v(i(t)["themeProvider.brandChanged"]),1)]),_:1}),A(i(Ue),{type:"solid"},{default:I(()=>[R(v(l.value),1)]),_:1})])]),_:1},8,["preset"]),u("div",bS,[u("span",null,v(i(t)["themeProvider.globalLabel"])+"："+v(i(a).preset),1),A(i(pe),{type:"outline",size:"sm",onClick:n},{default:I(()=>[R(v(i(t)["themeProvider.applyBtn"]),1)]),_:1})])]))}}),_S=Z(yS,[["__scopeId","data-v-c3c33bae"]]),xS={style:{display:"flex","flex-direction":"column",gap:"16px"}},kS={style:{display:"flex",gap:"14px","flex-wrap":"wrap"}},wS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=["pulse","bounce","shake","wiggle","float","spin"],{state:s,setEnabled:l}=Xp();return(r,n)=>(d(),p("div",xS,[A(i(lt),{"model-value":i(s).enabled,"onUpdate:modelValue":n[0]||(n[0]=c=>i(l)(c))},{default:I(()=>[R(v(i(t)["motionPresets.enableLabel"]),1)]),_:1},8,["model-value"]),u("div",kS,[(d(),p(q,null,X(a,c=>A(i(Ji),{key:c,name:c,animated:i(s).enabled},null,8,["name","animated"])),64))])]))}}),AS={class:"df-stage"},$S={class:"df-panel"},SS={class:"df-panel__row"},TS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!0),s=C("diamond"),r=["dot","x","diamond","ring"].map(n=>({label:n,value:n}));return(n,c)=>(d(),p("div",AS,[A(i(Ei),{shape:s.value,flow:a.value,density:24},null,8,["shape","flow"]),u("div",$S,[A(i(Qe),{level:"body"},{default:I(()=>[R(v(i(t)["dotField.title"]),1)]),_:1}),u("div",SS,[A(i(lt),{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f)},{default:I(()=>[R(v(i(t)["dotField.flow"]),1)]),_:1},8,["modelValue"]),A(i(ss),{modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=f=>s.value=f),options:i(r)},null,8,["modelValue","options"])])])]))}}),CS=Z(TS,[["__scopeId","data-v-41e2907f"]]),BS={class:"it-stage"},LS={class:"it-panel"},MS={class:"it-panel__row"},PS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(0),s=C(!1);return(l,r)=>(d(),p("div",BS,[A(i(Wi),{count:7,cycle:32,"hue-shift":s.value?a.value:0},null,8,["hue-shift"]),u("div",LS,[A(i(Qe),{level:"body"},{default:I(()=>[R(v(i(t)["iridescent.desc"]),1)]),_:1}),u("div",MS,[A(i(lt),{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=n=>s.value=n)},{default:I(()=>[R(v(i(t)["iridescent.hueDrift"]),1)]),_:1},8,["modelValue"])])])]))}}),IS=Z(PS,[["__scopeId","data-v-9fb832e5"]]),DS=z({__name:"basic",setup(e){return(o,t)=>(d(),fe(i(Yi),{style:{flex:"1","min-width":"300px"}},{default:I(()=>[...t[0]||(t[0]=[u("svg",{width:"34",height:"34",viewBox:"0 0 34 34"},[u("path",{d:"M17 2 20 14 32 17 20 20 17 32 14 20 2 17 14 14Z",fill:"var(--ui-brand)"})],-1),u("svg",{width:"26",height:"26",viewBox:"0 0 26 26"},[u("rect",{x:"3",y:"3",width:"20",height:"20",rx:"5",fill:"none",stroke:"var(--ui-ink)","stroke-width":"3"})],-1),u("svg",{width:"40",height:"40",viewBox:"0 0 40 40"},[u("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"var(--ui-line-2)","stroke-width":"7"})],-1),u("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[u("path",{d:"M12 2v20M2 12h20",stroke:"var(--ui-brand)","stroke-width":"4.5","stroke-linecap":"round"})],-1),u("svg",{width:"22",height:"22",viewBox:"0 0 22 22"},[u("path",{d:"M11 2 21 20H1Z",fill:"none",stroke:"var(--ui-ink)","stroke-width":"3","stroke-linejoin":"round"})],-1),u("svg",{width:"18",height:"18",viewBox:"0 0 18 18"},[u("circle",{cx:"9",cy:"9",r:"7",fill:"var(--ui-brand)"})],-1)])]),_:1}))}}),VS={style:{display:"flex","flex-direction":"column",gap:"26px",width:"100%","max-width":"100%","overflow-x":"hidden"}},zS={class:"marquee-demo__disclaimer"},ES=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",VS,[A(i(ml),{caption:"BUILT WITH OPEN SOURCE",items:[{icon:"box",text:"Docker"},{icon:"package",text:"Kubernetes"},{icon:"compass",text:"Envoy"},{icon:"activity",text:"Prometheus"},{icon:"database",text:"Redis"},{icon:"layers",text:"Kafka"},{icon:"cloud",text:"Terraform"},{icon:"git-branch",text:"GitLab"}]}),A(i(ml),{variant:"type",items:[{text:"OPEN SOURCE"},{text:"CLOUD NATIVE",solid:!0},{text:"GIT PUSH"},{text:"SCALE ANYWHERE",solid:!0},{text:"EDGE FIRST"},{text:"ZERO CONFIG",solid:!0}]}),u("p",zS,v(i(t)["marquee.disclaimer"]),1)]))}}),RS=Z(ES,[["__scopeId","data-v-055cc6fa"]]),FS={style:{display:"flex",gap:"12px","flex-wrap":"wrap","align-items":"center"}},OS={style:{"font-size":"13px",color:"var(--ui-ink-3)"}},HS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),p("div",FS,[A(i(pe),{type:"primary",onClick:s[0]||(s[0]=l=>i(nl)(l.clientX,l.clientY))},{default:I(()=>[R(v(i(t)["partyFx.btn"]),1)]),_:1}),u("span",OS,v(i(t)["partyFx.note"]),1)]))}}),qS={style:{display:"flex",gap:"46px","justify-content":"center","flex-wrap":"wrap","min-width":"0"}},NS={class:"p-stats"},jS={style:{padding:"0 4px 4px",display:"flex","align-items":"center",gap:"8px"}},GS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(0),s=G(()=>[{en:"v3.0 STRATOS",zh:t.value["mobileCarousel.zh1"],chip:t.value["mobileCarousel.chip1"],tone:"a",rings:[{w:150,h:150,top:"-46px",right:"-36px"},{w:70,h:70,bottom:"-18px",left:"-14px"}]},{en:"EDGE · 312",zh:t.value["mobileCarousel.zh2"],chip:t.value["mobileCarousel.chip2"],tone:"b",rings:[{w:120,h:120,top:"-30px",left:"-30px"}]},{en:"11.6s",zh:t.value["mobileCarousel.zh3"],chip:t.value["mobileCarousel.chip3"],tone:"c",rings:[{w:100,h:100,bottom:"-24px",right:"-20px"}]}]),l=[{x:2,y:20},{x:18,y:14},{x:32,y:17},{x:48,y:8},{x:64,y:12},{x:80,y:5},{x:98,y:9}],r=[{x:10,y:12,w:8,h:12},{x:30,y:8,w:8,h:16,main:!0},{x:50,y:14,w:8,h:10},{x:70,y:5,w:8,h:19,main:!0},{x:88,y:10,w:8,h:14}];return(n,c)=>(d(),p("div",qS,[A(i(ki),{title:i(t)["phone.title"],subtitle:i(t)["phone.subtitle"]},{default:I(()=>[A(i(Rl),{slides:s.value},null,8,["slides"]),u("div",NS,[A(i(Ht),{label:"QPS",value:"12,480"}),A(i(Ht),{label:i(t)["phone.p95"],value:"41ms"},null,8,["label"]),A(i(Ht),{label:i(t)["phone.online"],value:"34",chart:"line",points:l},null,8,["label"]),A(i(Ht),{label:i(t)["phone.deploy"],value:"218",chart:"bar",bars:r},null,8,["label"])]),u("div",jS,[A(i(Ue),{type:"ok",dot:!0},{default:I(()=>[R(v(i(t)["phone.allOk"]),1)]),_:1})]),A(i(Fl),{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f),items:[{icon:"home",label:i(t)["phone.home"]},{icon:"rocket",label:i(t)["phone.deployTab"]},{icon:"activity",label:i(t)["phone.monitorTab"]},{icon:"user",label:i(t)["phone.myTab"]}]},null,8,["modelValue","items"])]),_:1},8,["title","subtitle"])]))}}),US=Z(GS,[["__scopeId","data-v-e08551c0"]]),KS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=G(()=>[{en:"v3.0 STRATOS",zh:t.value["mobileCarousel.zh1"],chip:t.value["mobileCarousel.chip1"],tone:"a",rings:[{w:150,h:150,top:"-46px",right:"-36px"},{w:70,h:70,bottom:"-18px",left:"-14px"}]},{en:"EDGE · 312",zh:t.value["mobileCarousel.zh2"],chip:t.value["mobileCarousel.chip2"],tone:"b",rings:[{w:120,h:120,top:"-30px",left:"-30px"}]},{en:"11.6s",zh:t.value["mobileCarousel.zh3"],chip:t.value["mobileCarousel.chip3"],tone:"c",rings:[{w:100,h:100,bottom:"-24px",right:"-20px"}]}]);return(s,l)=>(d(),fe(i(Rl),{slides:a.value,style:{"max-width":"330px"}},null,8,["slides"]))}}),WS={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px",width:"300px"}},YS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=[{x:2,y:20},{x:18,y:14},{x:32,y:17},{x:48,y:8},{x:64,y:12},{x:80,y:5},{x:98,y:9}],s=[{x:10,y:12,w:8,h:12},{x:30,y:8,w:8,h:16,main:!0},{x:50,y:14,w:8,h:10},{x:70,y:5,w:8,h:19,main:!0},{x:88,y:10,w:8,h:14}];return(l,r)=>(d(),p("div",WS,[A(i(Ht),{label:"QPS",value:"12,480"}),A(i(Ht),{label:i(t)["mobileStatCard.p95"],value:"41ms"},null,8,["label"]),A(i(Ht),{label:i(t)["mobileStatCard.online"],value:"34",chart:"line",points:a},null,8,["label"]),A(i(Ht),{label:i(t)["mobileStatCard.deploy"],value:"218",chart:"bar",bars:s},null,8,["label"])]))}}),XS={style:{width:"300px"}},ZS=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(0);return(s,l)=>(d(),p("div",XS,[A(i(Fl),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),items:[{icon:"home",label:i(t)["mobileTabBar.home"]},{icon:"rocket",label:i(t)["mobileTabBar.deploy"]},{icon:"activity",label:i(t)["mobileTabBar.monitor"]},{icon:"user",label:i(t)["mobileTabBar.my"]}]},null,8,["modelValue","items"])]))}}),QS={style:{width:"340px",display:"flex","flex-direction":"column",gap:"14px"}},JS={style:{display:"flex",gap:"14px","align-items":"center","flex-wrap":"wrap"}},eT={style:{"font-family":"var(--ui-font-mono)","font-size":"12px",color:"var(--ui-ink-3)"}},tT={style:{"min-height":"300px",display:"flex"}},oT={key:1,style:{margin:"auto",color:"var(--ui-ink-3)","font-size":"13px"}},aT={style:{display:"flex",gap:"10px"}},sT=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(!0);function s(){const g=t.value;return[{name:"web-portal",avatar:"W",avatarTone:2,status:"ok",statusText:g["swipeDeck.healthy"],rows:[["region",g["swipeDeck.regionEast"]],["replicas","12"],["p95","41ms"]],foot:`${g["swipeDeck.build"]} a4f29c1 · 2m ago`},{name:"api-gateway",avatar:"A",avatarTone:3,status:"ok",statusText:g["swipeDeck.healthy"],rows:[["region",g["swipeDeck.regionNorth"]],["replicas","18"],["p95","23ms"]],foot:`${g["swipeDeck.build"]} 91bc0e7 · 6h ago`},{name:"billing-svc",avatar:"B",avatarTone:5,status:"warn",statusText:g["swipeDeck.degraded"],rows:[["region",g["swipeDeck.staging"]],["replicas","4"],["p95","88ms"]],foot:`${g["swipeDeck.build"]} 3d20af1 · 1d ago`}]}function l(){const g=t.value;return[{name:"edge-cache",avatar:"E",avatarTone:4,status:"ok",statusText:g["swipeDeck.healthy"],rows:[["hits","94%"],["ttl","300s"],["evict","lru"]],foot:`${g["swipeDeck.build"]} 77c21e0 · 5m ago`},{name:"auth-proxy",avatar:"AU",avatarTone:6,status:"err",statusText:g["swipeDeck.abnormal"],rows:[["region",g["swipeDeck.regionSouth"]],["replicas","6"],["p95","412ms"]],foot:`${g["swipeDeck.build"]} f0a33d2 · 3d ago`},{name:"metrics-hub",avatar:"M",avatarTone:1,status:"ok",statusText:g["swipeDeck.healthy"],rows:[["series","1.2M"],["scrape","30s"],["ret","30d"]],foot:`${g["swipeDeck.build"]} 2b9e5aa · 1h ago`}]}const r=C(s()),n=G(l);let c=0;be(t,()=>{const g=s();r.value=r.value.map((_,k)=>k<3&&!_.name.includes("-")?g[k]:_)},{deep:!0});function f(){const g=n.value[c%n.value.length];c++,r.value.push({...g,name:g.name+(c>n.value.length?`-${c}`:"")})}function m(){r.value.splice(0,1)}function h(){r.value=n.value.slice(0,2).map(g=>({...g,name:g.name+"-reset"}))}return(g,_)=>(d(),p("div",QS,[u("div",JS,[A(i(lt),{modelValue:a.value,"onUpdate:modelValue":_[0]||(_[0]=k=>a.value=k)},{default:I(()=>[R(v(i(t)["swipeDeck.loopLabel"]),1)]),_:1},8,["modelValue"]),u("span",eT,v(i(t)["swipeDeck.deckCount"])+" "+v(r.value.length)+" "+v(i(t)["swipeDeck.deckCountUnit"]),1)]),u("div",tT,[r.value.length?(d(),fe(i(Si),{key:0,cards:r.value,loop:a.value,onDeploy:_[1]||(_[1]=k=>console.log(i(t)["swipeDeck.deploy"],k.name)),onRollback:_[2]||(_[2]=k=>console.log(i(t)["swipeDeck.rollback"],k.name)),onEmptied:h},null,8,["cards","loop"])):(d(),p("div",oT,v(i(t)["swipeDeck.empty"]),1))]),u("div",aT,[A(i(pe),{size:"sm",type:"primary",onClick:f},{default:I(()=>[R(v(i(t)["swipeDeck.insertBtn"]),1)]),_:1}),A(i(pe),{size:"sm",type:"outline",disabled:!r.value.length,onClick:m},{default:I(()=>[R(v(i(t)["swipeDeck.removeBtn"]),1)]),_:1},8,["disabled"])])]))}}),lT=z({__name:"basic",setup(e){const{demo:o}=Y();return(t,a)=>(d(),fe(i(hi),{onReject:a[0]||(a[0]=s=>i(Ze).warn(i(o)["actionButtons.reject"])),onAccept:a[1]||(a[1]=s=>i(Ze).success(i(o)["actionButtons.accept"]))}))}}),rT=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;function a(){Ze.success(t.value["slideGo.done"],{title:t.value["slideGo.title"]})}return(s,l)=>(d(),fe(i(Ai),{width:280,onDone:a}))}}),nT=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a={"web-portal":"sortList.meta12","api-gateway":"sortList.meta18","billing-svc":"sortList.meta4","admin-console":"sortList.meta2"},s=C(["web-portal","api-gateway","billing-svc","admin-console"]),l=G(()=>s.value.map(n=>({name:n,meta:t.value[a[n]]})));function r(n){s.value=n.map(c=>c.name),Ze.info(t.value["sortList.updated"],{title:t.value["sortList.dragTitle"]})}return(n,c)=>(d(),fe(i($i),{items:l.value,width:280,onSorted:r},null,8,["items"]))}}),iT=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o;return(a,s)=>(d(),fe(i(yi),{title:i(t)["bottomSheet.title"],style:{width:"280px","min-height":"220px"},rows:[[i(t)["bottomSheet.duration"],"2.1s"],[i(t)["bottomSheet.cacheHit"],"92%"],[i(t)["bottomSheet.artifact"],"42MB"]],onChange:s[0]||(s[0]=l=>l&&i(Ze).info(i(t)["bottomSheet.expanded"]))},null,8,["title","rows"]))}}),cT={style:{display:"flex","align-items":"center",gap:"22px","user-select":"none"}},dT={class:"knob-side"},uT={class:"ks"},pT={class:"kv"},mT={class:"ks"},fT={class:"kv"},hT=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=C(8),s=G(()=>`${a.value} / 16 ${t.value["knob.vcpu"]}`),l=G(()=>`¥${(a.value*.102).toFixed(2)} ${t.value["knob.perHour"]}`);return(r,n)=>(d(),p("div",cT,[A(i(_i),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c)},null,8,["modelValue"]),u("div",dT,[u("span",uT,v(i(t)["knob.currentQuota"]),1),u("span",pT,v(s.value),1),u("span",mT,v(i(t)["knob.estimatedCost"]),1),u("span",fT,v(l.value),1)])]))}}),vT=Z(hT,[["__scopeId","data-v-5522a49d"]]),gT=z({__name:"basic",setup(e){const{demo:o}=Y(),t=o,a=G(()=>[{icon:"rocket",title:t.value["pullToRefresh.item1"],desc:t.value["pullToRefresh.item1Desc"],time:"2m"},{icon:"git-branch",title:t.value["pullToRefresh.item2"],desc:t.value["pullToRefresh.item2Desc"],time:"18m"},{icon:"trending-up",title:t.value["pullToRefresh.item3"],desc:t.value["pullToRefresh.item3Desc"],time:"1h"},{icon:"rotate-ccw",title:t.value["pullToRefresh.item4"],desc:"3d20af1 → 91bc0e7",time:"3h"},{icon:"key-round",title:t.value["pullToRefresh.item5"],desc:t.value["pullToRefresh.item5Desc"],time:"5h"}]);return(s,l)=>(d(),fe(i(wi),{items:a.value,width:280,height:200,onRefresh:l[0]||(l[0]=r=>i(Ze).success(i(t)["pullToRefresh.done"]))},null,8,["items"]))}}),wc={"action-buttons":{usage:`<script setup lang="ts">
import { AeroActionButtons, AeroToast, useLocale } from 'aero-vue'
// toast 文案原硬编码中文 → 走词包 demo 组，随 ConfigProvider locale 翻转
const { demo } = useLocale()
<\/script>

<template>
  <AeroActionButtons
    @reject="AeroToast.warn(demo['actionButtons.reject'])"
    @accept="AeroToast.success(demo['actionButtons.accept'])"
  />
</template>
`,source:`<script setup lang="ts">
import { AeroActionButtons, AeroToast, useLocale } from 'aero-vue'
// toast 文案原硬编码中文 → 走词包 demo 组，随 ConfigProvider locale 翻转
const { demo } = useLocale()
<\/script>

<template>
  <AeroActionButtons
    @reject="AeroToast.warn(demo['actionButtons.reject'])"
    @accept="AeroToast.success(demo['actionButtons.accept'])"
  />
</template>
`},affix:{usage:`<script setup lang="ts">
import { AeroAffix, AeroButton, useLocale } from 'aero-vue'
// 提示/按钮/占位文案原硬编码中文 → 走词包 demo 组，随 ConfigProvider locale 翻转
const { demo } = useLocale()
const t = demo

function pgMain() {
  return document.querySelector('.pg-main') as HTMLElement | null
}

/* 吸附基准 = 顶部菜单条底边：Announce 横幅展开/收起时菜单整体下移或回升，
   Affix 自动跟随其下缘（无需按横幅状态硬编码 top 值） */
function navAnchor() {
  return document.querySelector('.pg-nav') as HTMLElement | null
}
<\/script>

<template>
  <div style="height: 900px">
    <p style="color: var(--ui-ink-3); font-size: 13px">
      {{ t['affix.hint'] }}
    </p>
    <AeroAffix :offset-top="40" :target="pgMain" :anchor="navAnchor" :gutter="8">
      <AeroButton type="primary" size="sm">{{ t['affix.stickyBtn'] }}</AeroButton>
    </AeroAffix>
    <div style="height: 700px; background: var(--ui-bg-soft); border: 2px dashed var(--ui-line-2); border-radius: 14px; margin-top: 16px; display: flex; align-items: center; justify-content: center; color: var(--ui-ink-3); font-size: 13px">
      {{ t['affix.placeholder'] }}
    </div>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroAffix, AeroButton, useLocale } from 'aero-vue'
// 提示/按钮/占位文案原硬编码中文 → 走词包 demo 组，随 ConfigProvider locale 翻转
const { demo } = useLocale()
const t = demo

function pgMain() {
  return document.querySelector('.pg-main') as HTMLElement | null
}

/* 吸附基准 = 顶部菜单条底边：Announce 横幅展开/收起时菜单整体下移或回升，
   Affix 自动跟随其下缘（无需按横幅状态硬编码 top 值） */
function navAnchor() {
  return document.querySelector('.pg-nav') as HTMLElement | null
}
<\/script>

<template>
  <div style="height: 900px">
    <p style="color: var(--ui-ink-3); font-size: 13px">
      {{ t['affix.hint'] }}
    </p>
    <AeroAffix :offset-top="40" :target="pgMain" :anchor="navAnchor" :gutter="8">
      <AeroButton type="primary" size="sm">{{ t['affix.stickyBtn'] }}</AeroButton>
    </AeroAffix>
    <div style="height: 700px; background: var(--ui-bg-soft); border: 2px dashed var(--ui-line-2); border-radius: 14px; margin-top: 16px; display: flex; align-items: center; justify-content: center; color: var(--ui-ink-3); font-size: 13px">
      {{ t['affix.placeholder'] }}
    </div>
  </div>
</template>
`},alert:{usage:`<script setup lang="ts">
import { AeroAlert, useLocale } from 'aero-vue'
// 四条 Alert 标题/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 420px">
    <AeroAlert type="info" :title="t['alert.infoTitle']">{{ t['alert.infoBody'] }}</AeroAlert>
    <AeroAlert type="success" :title="t['alert.successTitle']">{{ t['alert.successBody'] }}</AeroAlert>
    <AeroAlert type="warn" :title="t['alert.warnTitle']">{{ t['alert.warnBody'] }}</AeroAlert>
    <AeroAlert type="error" :title="t['alert.errorTitle']" closable>{{ t['alert.errorBody'] }}</AeroAlert>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroAlert, useLocale } from 'aero-vue'
// 四条 Alert 标题/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 420px">
    <AeroAlert type="info" :title="t['alert.infoTitle']">{{ t['alert.infoBody'] }}</AeroAlert>
    <AeroAlert type="success" :title="t['alert.successTitle']">{{ t['alert.successBody'] }}</AeroAlert>
    <AeroAlert type="warn" :title="t['alert.warnTitle']">{{ t['alert.warnBody'] }}</AeroAlert>
    <AeroAlert type="error" :title="t['alert.errorTitle']" closable>{{ t['alert.errorBody'] }}</AeroAlert>
  </div>
</template>
`},anchor:{usage:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroAnchor, useLocale } from 'aero-vue'
// 节标题/正文/锚点 labels 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const secItems = computed(() => [
  { key: 'sec-1', label: t.value['anchor.sec1'] },
  { key: 'sec-2', label: t.value['anchor.sec2'] },
  { key: 'sec-3', label: t.value['anchor.sec3'] },
])
<\/script>

<template>
  <div style="display: flex; gap: 30px">
    <div style="height: 220px; overflow-y: auto; flex: 1; border: 2px dashed var(--ui-line-2); border-radius: 14px; padding: 14px" id="anchor-scroll">
      <h3 id="sec-1" style="margin: 0 0 90px">{{ t['anchor.sec1'] }}</h3>
      <p style="color: var(--ui-ink-2); font-size: 13.5px; line-height: 1.8">{{ t['anchor.note1'] }}</p>
      <h3 id="sec-2" style="margin: 90px 0">{{ t['anchor.sec2'] }}</h3>
      <p style="color: var(--ui-ink-2); font-size: 13.5px; line-height: 1.8">{{ t['anchor.note2'] }}</p>
      <h3 id="sec-3" style="margin: 90px 0 0">{{ t['anchor.sec3'] }}</h3>
      <p style="color: var(--ui-ink-2); font-size: 13.5px; line-height: 1.8; margin-top: 90px">{{ t['anchor.note3'] }}</p>
    </div>
    <AeroAnchor
      :items="secItems"
      container="#anchor-scroll"
      :offset="8"
    />
  </div>
</template>
`,source:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroAnchor, useLocale } from 'aero-vue'
// 节标题/正文/锚点 labels 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const secItems = computed(() => [
  { key: 'sec-1', label: t.value['anchor.sec1'] },
  { key: 'sec-2', label: t.value['anchor.sec2'] },
  { key: 'sec-3', label: t.value['anchor.sec3'] },
])
<\/script>

<template>
  <div style="display: flex; gap: 30px">
    <div style="height: 220px; overflow-y: auto; flex: 1; border: 2px dashed var(--ui-line-2); border-radius: 14px; padding: 14px" id="anchor-scroll">
      <h3 id="sec-1" style="margin: 0 0 90px">{{ t['anchor.sec1'] }}</h3>
      <p style="color: var(--ui-ink-2); font-size: 13.5px; line-height: 1.8">{{ t['anchor.note1'] }}</p>
      <h3 id="sec-2" style="margin: 90px 0">{{ t['anchor.sec2'] }}</h3>
      <p style="color: var(--ui-ink-2); font-size: 13.5px; line-height: 1.8">{{ t['anchor.note2'] }}</p>
      <h3 id="sec-3" style="margin: 90px 0 0">{{ t['anchor.sec3'] }}</h3>
      <p style="color: var(--ui-ink-2); font-size: 13.5px; line-height: 1.8; margin-top: 90px">{{ t['anchor.note3'] }}</p>
    </div>
    <AeroAnchor
      :items="secItems"
      container="#anchor-scroll"
      :offset="8"
    />
  </div>
</template>
`},announce:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroAnnounce, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
// 横幅标题/正文/开关/按钮/注释文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// 受控显隐：v-model:open 外部接管，关闭后仍可重新打开（可逆）
const open = ref(true)
// 跑马灯开关：false 禁用（文字溢出直接截断）；true 自适应（仅装不下才滚动）
const marquee = ref(true)
// 长文案切换：演示跑马灯在文字溢出时的效果
const longText = ref(false)
<\/script>

<template>
  <div class="ann-demo">
    <div class="ann-demo__bar">
      <AeroAnnounce
        v-model:open="open"
        :marquee="marquee"
        @close="open = false"
        action-href="https://github.com/FanXingYiDianYun/aero-vue"
      >
        <template #title>{{ t['announce.title'] }}</template>
        <template v-if="longText">
          {{ t['announce.longBody'] }}
        </template>
        <template v-else>
          {{ t['announce.shortBody'] }}
        </template>
        <template #action>{{ t['announce.action'] }}</template>
      </AeroAnnounce>
    </div>
    <div class="ann-demo__ctrls">
      <AeroSwitch v-model="marquee">{{ t['announce.marqueeLabel'] }}</AeroSwitch>
      <AeroSwitch v-model="longText">{{ t['announce.longTextLabel'] }}</AeroSwitch>
      <AeroButton size="sm" type="outline" @click="open = !open">{{ open ? t['announce.closeBtn'] : t['announce.reopenBtn'] }}</AeroButton>
    </div>
    <p class="ann-demo__note">{{ t['announce.note'] }}</p>
    <div style="display: flex; flex-direction: column; gap: 14px">
      <h4 class="ann-demo__h">{{ t['announce.bodyTitle'] }}</h4>
      <div class="ann-demo__body">
        <p>{{ t['announce.bodyText'] }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ann-demo { display: flex; flex-direction: column; gap: 14px; width: 100%; }
.ann-demo__bar { border: 2px solid var(--ui-line); border-radius: 14px; overflow: hidden; background: var(--ui-card); }
.ann-demo__ctrls { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.ann-demo__note { font-size: 12.5px; color: var(--ui-ink-3); margin: 0; }
.ann-demo__h { margin: 0; font-size: 14px; }
.ann-demo__body {
  border: 2px dashed var(--ui-line-2);
  border-radius: 14px;
  padding: 16px;
  background: var(--ui-bg);
}
.ann-demo__body p { margin: 0 0 12px; font-size: 13.5px; color: var(--ui-ink-2); }
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroAnnounce, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
// 横幅标题/正文/开关/按钮/注释文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// 受控显隐：v-model:open 外部接管，关闭后仍可重新打开（可逆）
const open = ref(true)
// 跑马灯开关：false 禁用（文字溢出直接截断）；true 自适应（仅装不下才滚动）
const marquee = ref(true)
// 长文案切换：演示跑马灯在文字溢出时的效果
const longText = ref(false)
<\/script>

<template>
  <div class="ann-demo">
    <div class="ann-demo__bar">
      <AeroAnnounce
        v-model:open="open"
        :marquee="marquee"
        @close="open = false"
        action-href="https://github.com/FanXingYiDianYun/aero-vue"
      >
        <template #title>{{ t['announce.title'] }}</template>
        <template v-if="longText">
          {{ t['announce.longBody'] }}
        </template>
        <template v-else>
          {{ t['announce.shortBody'] }}
        </template>
        <template #action>{{ t['announce.action'] }}</template>
      </AeroAnnounce>
    </div>
    <div class="ann-demo__ctrls">
      <AeroSwitch v-model="marquee">{{ t['announce.marqueeLabel'] }}</AeroSwitch>
      <AeroSwitch v-model="longText">{{ t['announce.longTextLabel'] }}</AeroSwitch>
      <AeroButton size="sm" type="outline" @click="open = !open">{{ open ? t['announce.closeBtn'] : t['announce.reopenBtn'] }}</AeroButton>
    </div>
    <p class="ann-demo__note">{{ t['announce.note'] }}</p>
    <div style="display: flex; flex-direction: column; gap: 14px">
      <h4 class="ann-demo__h">{{ t['announce.bodyTitle'] }}</h4>
      <div class="ann-demo__body">
        <p>{{ t['announce.bodyText'] }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ann-demo { display: flex; flex-direction: column; gap: 14px; width: 100%; }
.ann-demo__bar { border: 2px solid var(--ui-line); border-radius: 14px; overflow: hidden; background: var(--ui-card); }
.ann-demo__ctrls { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.ann-demo__note { font-size: 12.5px; color: var(--ui-ink-3); margin: 0; }
.ann-demo__h { margin: 0; font-size: 14px; }
.ann-demo__body {
  border: 2px dashed var(--ui-line-2);
  border-radius: 14px;
  padding: 16px;
  background: var(--ui-bg);
}
.ann-demo__body p { margin: 0 0 12px; font-size: 13.5px; color: var(--ui-ink-2); }
</style>
`},autocomplete:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroAutocomplete, useLocale } from 'aero-vue'
import type { AutoSuggestion } from 'aero-vue'
// placeholder 原硬编码中文 → 走词包 demo 组（建议项 Vue 3/Vite 等为数据，保留）
const { demo } = useLocale()
const t = demo

const q = ref('')
const all: AutoSuggestion[] = [
  { label: 'Vue 3', value: 'vue' },
  { label: 'Vite', value: 'vite' },
  { label: 'Vitest', value: 'vitest' },
  { label: 'SCSS', value: 'scss' },
  { label: 'TypeScript', value: 'ts' },
]
<\/script>

<template>
  <div style="max-width: 300px">
    <AeroAutocomplete v-model="q" :suggestions="all" :placeholder="t['autocomplete.placeholder']" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroAutocomplete, useLocale } from 'aero-vue'
import type { AutoSuggestion } from 'aero-vue'
// placeholder 原硬编码中文 → 走词包 demo 组（建议项 Vue 3/Vite 等为数据，保留）
const { demo } = useLocale()
const t = demo

const q = ref('')
const all: AutoSuggestion[] = [
  { label: 'Vue 3', value: 'vue' },
  { label: 'Vite', value: 'vite' },
  { label: 'Vitest', value: 'vitest' },
  { label: 'SCSS', value: 'scss' },
  { label: 'TypeScript', value: 'ts' },
]
<\/script>

<template>
  <div style="max-width: 300px">
    <AeroAutocomplete v-model="q" :suggestions="all" :placeholder="t['autocomplete.placeholder']" />
  </div>
</template>
`},avatar:{usage:`<script setup lang="ts">
import { AeroAvatar, useLocale } from 'aero-vue'
// 两行 hint 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

/* 六色配板 + 多尺寸（28-128px）——裁剪器逻辑已下沉 AeroCropper（见独立页 cropper） */
const tones = [1, 2, 3, 4, 5, 6]
const sizes = [28, 34, 44, 56, 72, 128]
<\/script>

<template>
  <div class="avatar-demo">
    <div class="row">
      <span class="hint">{{ t['avatar.pallet'] }}</span>
      <AeroAvatar v-for="tne in tones" :key="tne" :tone="tne">{{ ['AY', 'ZK', 'A3', 'Q4', 'W5', 'E6'][tne - 1] }}</AeroAvatar>
    </div>
    <div class="row">
      <span class="hint">{{ t['avatar.multiSize'] }}</span>
      <AeroAvatar v-for="s in sizes" :key="s" :size="s" :tone="(s % 6) + 1">{{ s }}</AeroAvatar>
    </div>
  </div>
</template>

<style scoped>
.avatar-demo { display: flex; flex-direction: column; gap: 20px; }
.row { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
.hint { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
</style>
`,source:`<script setup lang="ts">
import { AeroAvatar, useLocale } from 'aero-vue'
// 两行 hint 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

/* 六色配板 + 多尺寸（28-128px）——裁剪器逻辑已下沉 AeroCropper（见独立页 cropper） */
const tones = [1, 2, 3, 4, 5, 6]
const sizes = [28, 34, 44, 56, 72, 128]
<\/script>

<template>
  <div class="avatar-demo">
    <div class="row">
      <span class="hint">{{ t['avatar.pallet'] }}</span>
      <AeroAvatar v-for="tne in tones" :key="tne" :tone="tne">{{ ['AY', 'ZK', 'A3', 'Q4', 'W5', 'E6'][tne - 1] }}</AeroAvatar>
    </div>
    <div class="row">
      <span class="hint">{{ t['avatar.multiSize'] }}</span>
      <AeroAvatar v-for="s in sizes" :key="s" :size="s" :tone="(s % 6) + 1">{{ s }}</AeroAvatar>
    </div>
  </div>
</template>

<style scoped>
.avatar-demo { display: flex; flex-direction: column; gap: 20px; }
.row { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
.hint { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
</style>
`},"avatar-group":{usage:`<script setup lang="ts">
import { AeroAvatarGroup } from 'aero-vue'
import { AeroAvatar } from 'aero-vue'
<\/script>

<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <AeroAvatarGroup :total="8" :max="5">
      <AeroAvatar :tone="1">AY</AeroAvatar>
      <AeroAvatar :tone="2">ZK</AeroAvatar>
      <AeroAvatar :tone="3">A3</AeroAvatar>
      <AeroAvatar :tone="4">Q4</AeroAvatar>
      <AeroAvatar :tone="5">W5</AeroAvatar>
    </AeroAvatarGroup>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroAvatarGroup } from 'aero-vue'
import { AeroAvatar } from 'aero-vue'
<\/script>

<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <AeroAvatarGroup :total="8" :max="5">
      <AeroAvatar :tone="1">AY</AeroAvatar>
      <AeroAvatar :tone="2">ZK</AeroAvatar>
      <AeroAvatar :tone="3">A3</AeroAvatar>
      <AeroAvatar :tone="4">Q4</AeroAvatar>
      <AeroAvatar :tone="5">W5</AeroAvatar>
    </AeroAvatarGroup>
  </div>
</template>
`},"back-top":{usage:`<script setup lang="ts">
import { AeroBackTop, useLocale } from 'aero-vue'
// 提示文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// 不传 target，靠组件自动探测真实滚动容器（双视口自适应）。
// 桌面端 window 不可滚 → 兜底命中 .pg-main；移动端 window 可滚 → 直接走 window。
// 硬传 ".pg-main" 在移动端失效（.pg-main 无滚动，scrollTop 恒 0）。
<\/script>

<template>
  <div style="height: 1200px; padding-top: 400px; color: var(--ui-ink-3); font-size: 13px">
    {{ t['backTop.hint'] }}
    <AeroBackTop :threshold="200" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroBackTop, useLocale } from 'aero-vue'
// 提示文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// 不传 target，靠组件自动探测真实滚动容器（双视口自适应）。
// 桌面端 window 不可滚 → 兜底命中 .pg-main；移动端 window 可滚 → 直接走 window。
// 硬传 ".pg-main" 在移动端失效（.pg-main 无滚动，scrollTop 恒 0）。
<\/script>

<template>
  <div style="height: 1200px; padding-top: 400px; color: var(--ui-ink-3); font-size: 13px">
    {{ t['backTop.hint'] }}
    <AeroBackTop :threshold="200" />
  </div>
</template>
`},badge:{usage:`<script setup lang="ts">
import { ref, watch } from 'vue'
import { AeroBadge, AeroInput, useLocale } from 'aero-vue'
// hint/场景文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// 初始值/默认值来自词包——用户未改过（dirty=false）时，语言切换复位为当前语言默认
const custom = ref(t.value['badge.defaultText'])
const dirty = ref(false)
watch(custom, (v) => { dirty.value = v !== t.value['badge.defaultText'] })
watch(
  () => t.value['badge.defaultText'],
  (v) => {
    if (!dirty.value) custom.value = v
  },
)
const types = ['solid', 'soft', 'line', 'dark', 'ok', 'warn', 'err'] as const
<\/script>

<template>
  <div class="badge-demo">
    <div class="badge-demo__row">
      <AeroBadge v-for="tp in types" :key="tp" :type="tp" :dot="tp === 'ok' || tp === 'err'">{{ tp }}</AeroBadge>
    </div>
    <div class="badge-demo__row">
      <span class="hint-mono">{{ t['badge.customLabel'] }}</span>
      <AeroBadge type="solid">{{ custom }}</AeroBadge>
      <AeroInput v-model="custom" :width="150" :maxlength="14" />
    </div>
    <div class="badge-demo__row">
      <span class="hint-mono">{{ t['badge.dotLabel'] }}</span>
      <AeroBadge type="ok" dot>{{ t['badge.buildPass'] }}</AeroBadge>
      <AeroBadge type="warn" dot>{{ t['badge.degraded'] }}</AeroBadge>
      <AeroBadge type="err" dot>{{ t['badge.deployFail'] }}</AeroBadge>
    </div>
    <div class="badge-demo__row">
      <span class="hint-mono">{{ t['badge.comboLabel'] }}</span>
      <AeroBadge type="soft">Beta</AeroBadge>
      <AeroBadge type="line">v0.1.0</AeroBadge>
      <AeroBadge type="dark">OSS</AeroBadge>
    </div>
  </div>
</template>

<style scoped>
.badge-demo { display: flex; flex-direction: column; gap: 16px; }
.badge-demo__row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.hint-mono { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
</style>
`,source:`<script setup lang="ts">
import { ref, watch } from 'vue'
import { AeroBadge, AeroInput, useLocale } from 'aero-vue'
// hint/场景文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// 初始值/默认值来自词包——用户未改过（dirty=false）时，语言切换复位为当前语言默认
const custom = ref(t.value['badge.defaultText'])
const dirty = ref(false)
watch(custom, (v) => { dirty.value = v !== t.value['badge.defaultText'] })
watch(
  () => t.value['badge.defaultText'],
  (v) => {
    if (!dirty.value) custom.value = v
  },
)
const types = ['solid', 'soft', 'line', 'dark', 'ok', 'warn', 'err'] as const
<\/script>

<template>
  <div class="badge-demo">
    <div class="badge-demo__row">
      <AeroBadge v-for="tp in types" :key="tp" :type="tp" :dot="tp === 'ok' || tp === 'err'">{{ tp }}</AeroBadge>
    </div>
    <div class="badge-demo__row">
      <span class="hint-mono">{{ t['badge.customLabel'] }}</span>
      <AeroBadge type="solid">{{ custom }}</AeroBadge>
      <AeroInput v-model="custom" :width="150" :maxlength="14" />
    </div>
    <div class="badge-demo__row">
      <span class="hint-mono">{{ t['badge.dotLabel'] }}</span>
      <AeroBadge type="ok" dot>{{ t['badge.buildPass'] }}</AeroBadge>
      <AeroBadge type="warn" dot>{{ t['badge.degraded'] }}</AeroBadge>
      <AeroBadge type="err" dot>{{ t['badge.deployFail'] }}</AeroBadge>
    </div>
    <div class="badge-demo__row">
      <span class="hint-mono">{{ t['badge.comboLabel'] }}</span>
      <AeroBadge type="soft">Beta</AeroBadge>
      <AeroBadge type="line">v0.1.0</AeroBadge>
      <AeroBadge type="dark">OSS</AeroBadge>
    </div>
  </div>
</template>

<style scoped>
.badge-demo { display: flex; flex-direction: column; gap: 16px; }
.badge-demo__row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.hint-mono { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
</style>
`},"bottom-sheet":{usage:`<script setup lang="ts">
import { AeroBottomSheet, AeroToast, useLocale } from 'aero-vue'
// 标题/行 label/toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroBottomSheet
    :title="t['bottomSheet.title']"
    style="width: 280px; min-height: 220px"
    :rows="[[t['bottomSheet.duration'], '2.1s'], [t['bottomSheet.cacheHit'], '92%'], [t['bottomSheet.artifact'], '42MB']]"
    @change="(v) => v && AeroToast.info(t['bottomSheet.expanded'])"
  />
</template>
`,source:`<script setup lang="ts">
import { AeroBottomSheet, AeroToast, useLocale } from 'aero-vue'
// 标题/行 label/toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroBottomSheet
    :title="t['bottomSheet.title']"
    style="width: 280px; min-height: 220px"
    :rows="[[t['bottomSheet.duration'], '2.1s'], [t['bottomSheet.cacheHit'], '92%'], [t['bottomSheet.artifact'], '42MB']]"
    @change="(v) => v && AeroToast.info(t['bottomSheet.expanded'])"
  />
</template>
`},breadcrumb:{usage:`<script setup lang="ts">
import { AeroBreadcrumb, useLocale } from 'aero-vue'
// 前两级 label 原硬编码中文 → 走词包 demo 组（'Breadcrumb' 为英文数据，保留）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroBreadcrumb
    :items="[
      { label: t['breadcrumb.home'], href: '#' },
      { label: t['breadcrumb.components'], href: '#' },
      { label: 'Breadcrumb' },
    ]"
  />
</template>
`,source:`<script setup lang="ts">
import { AeroBreadcrumb, useLocale } from 'aero-vue'
// 前两级 label 原硬编码中文 → 走词包 demo 组（'Breadcrumb' 为英文数据，保留）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroBreadcrumb
    :items="[
      { label: t['breadcrumb.home'], href: '#' },
      { label: t['breadcrumb.components'], href: '#' },
      { label: 'Breadcrumb' },
    ]"
  />
</template>
`},button:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroButton, AeroIcon, useLocale } from 'aero-vue'
// 按钮文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const loading = ref(false)
function simulate() {
  loading.value = true
  setTimeout(() => (loading.value = false), 1500)
}
<\/script>

<template>
  <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: center">
    <AeroButton type="primary">{{ t['button.primary'] }}</AeroButton>
    <AeroButton type="outline">{{ t['button.secondary'] }}</AeroButton>
    <AeroButton type="ghost">{{ t['button.ghost'] }}</AeroButton>
    <AeroButton type="danger">{{ t['button.danger'] }}</AeroButton>
    <AeroButton type="dark">{{ t['button.dark'] }}</AeroButton>
    <AeroButton type="primary" size="sm">Small</AeroButton>
    <AeroButton type="primary" size="lg">Large</AeroButton>
    <AeroButton :loading="loading" @click="simulate">{{ t['button.clickLoad'] }}</AeroButton>
    <AeroButton type="primary" disabled>{{ t['button.disabled'] }}</AeroButton>
    <AeroButton type="outline" icon-only>
      <template #icon><AeroIcon name="zap" /></template>
    </AeroButton>
    <AeroButton type="primary">
      <template #icon><AeroIcon name="rocket" /></template>
      {{ t['button.withIcon'] }}
    </AeroButton>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroButton, AeroIcon, useLocale } from 'aero-vue'
// 按钮文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const loading = ref(false)
function simulate() {
  loading.value = true
  setTimeout(() => (loading.value = false), 1500)
}
<\/script>

<template>
  <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: center">
    <AeroButton type="primary">{{ t['button.primary'] }}</AeroButton>
    <AeroButton type="outline">{{ t['button.secondary'] }}</AeroButton>
    <AeroButton type="ghost">{{ t['button.ghost'] }}</AeroButton>
    <AeroButton type="danger">{{ t['button.danger'] }}</AeroButton>
    <AeroButton type="dark">{{ t['button.dark'] }}</AeroButton>
    <AeroButton type="primary" size="sm">Small</AeroButton>
    <AeroButton type="primary" size="lg">Large</AeroButton>
    <AeroButton :loading="loading" @click="simulate">{{ t['button.clickLoad'] }}</AeroButton>
    <AeroButton type="primary" disabled>{{ t['button.disabled'] }}</AeroButton>
    <AeroButton type="outline" icon-only>
      <template #icon><AeroIcon name="zap" /></template>
    </AeroButton>
    <AeroButton type="primary">
      <template #icon><AeroIcon name="rocket" /></template>
      {{ t['button.withIcon'] }}
    </AeroButton>
  </div>
</template>
`},"button-group":{usage:`<script setup lang="ts">
import { AeroButtonGroup, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮组文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 18px">
    <AeroButtonGroup>
      <AeroButton type="outline" size="sm">{{ t['buttonGroup.day'] }}</AeroButton>
      <AeroButton type="outline" size="sm">{{ t['buttonGroup.week'] }}</AeroButton>
      <AeroButton type="outline" size="sm">{{ t['buttonGroup.month'] }}</AeroButton>
    </AeroButtonGroup>
    <AeroButtonGroup vertical>
      <AeroButton type="primary" size="sm">{{ t['buttonGroup.add'] }}</AeroButton>
      <AeroButton type="ghost" size="sm">{{ t['buttonGroup.edit'] }}</AeroButton>
    </AeroButtonGroup>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroButtonGroup, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮组文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 18px">
    <AeroButtonGroup>
      <AeroButton type="outline" size="sm">{{ t['buttonGroup.day'] }}</AeroButton>
      <AeroButton type="outline" size="sm">{{ t['buttonGroup.week'] }}</AeroButton>
      <AeroButton type="outline" size="sm">{{ t['buttonGroup.month'] }}</AeroButton>
    </AeroButtonGroup>
    <AeroButtonGroup vertical>
      <AeroButton type="primary" size="sm">{{ t['buttonGroup.add'] }}</AeroButton>
      <AeroButton type="ghost" size="sm">{{ t['buttonGroup.edit'] }}</AeroButton>
    </AeroButtonGroup>
  </div>
</template>
`},card:{usage:`<script setup lang="ts">
import { AeroCard, AeroButton, useLocale } from 'aero-vue'
// 卡片标题/正文/按钮原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 18px; flex-wrap: wrap">
    <AeroCard hoverable :width="280">
      <h4>{{ t['card.hoverableTitle'] }}</h4>
      <p>{{ t['card.hoverableBody'] }}</p>
    </AeroCard>
    <AeroCard :width="280">
      <template #header><h4>{{ t['card.withHeaderTitle'] }}</h4></template>
      {{ t['card.body'] }}
      <template #footer>
        <div style="display: flex; gap: 10px; margin-top: 18px">
          <Btn type="primary" size="sm">{{ t['card.confirm'] }}</Btn>
          <Btn type="ghost" size="sm">{{ t['card.cancel'] }}</Btn>
        </div>
      </template>
    </AeroCard>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroCard, AeroButton, useLocale } from 'aero-vue'
// 卡片标题/正文/按钮原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 18px; flex-wrap: wrap">
    <AeroCard hoverable :width="280">
      <h4>{{ t['card.hoverableTitle'] }}</h4>
      <p>{{ t['card.hoverableBody'] }}</p>
    </AeroCard>
    <AeroCard :width="280">
      <template #header><h4>{{ t['card.withHeaderTitle'] }}</h4></template>
      {{ t['card.body'] }}
      <template #footer>
        <div style="display: flex; gap: 10px; margin-top: 18px">
          <Btn type="primary" size="sm">{{ t['card.confirm'] }}</Btn>
          <Btn type="ghost" size="sm">{{ t['card.cancel'] }}</Btn>
        </div>
      </template>
    </AeroCard>
  </div>
</template>
`},carousel:{usage:`<script setup lang="ts">
import { AeroCarousel, AeroButton, useLocale } from 'aero-vue'
import { ref, computed } from 'vue'
// 幻灯样张与 slot 文案原硬编码中文 → 走词包 demo 组（en/chip 为英文数据，保留）
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const slides = computed(() => [
  { en: 'Aero UI', zh: t.value['carousel.zh1'], chip: 'v0.1.0', tone: 'a' as const },
  { en: 'Dark Mode', zh: t.value['carousel.zh2'], chip: 'THEME', tone: 'b' as const },
  { en: '75+ CMP', zh: t.value['carousel.zh3'], chip: 'SCALE', tone: 'c' as const },
])

/* slot 注入演示：任意 Vue/HTML 内容 */
const counter = ref(0)
const customSlides = [
  { en: 'slot-1', tone: 'b' as const },
  { en: 'slot-2', tone: 'c' as const },
]
<\/script>

<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap">
    <!-- 数据驱动（默认） -->
    <AeroCarousel :slides="slides" style="max-width: 300px" />

    <!-- slot 注入任意内容 -->
    <AeroCarousel :slides="customSlides" :interval="0" style="max-width: 300px">
      <template #default="{ slide, index }">
        <div class="custom-slide">
          <h4>#{{ index + 1 }} {{ slide.en }} {{ t['carousel.customSlide'] }}</h4>
          <p>{{ t['carousel.anyContent'] }}</p>
          <AeroButton type="outline" size="sm" @click="counter++">{{ t['carousel.clickPlus'] }} {{ counter }} {{ t['carousel.clickPlusEnd'] }}</AeroButton>
        </div>
      </template>
    </AeroCarousel>
  </div>
</template>

<style scoped>
.custom-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 24px 28px;
}
.custom-slide h4 { margin: 0; font-size: 20px; }
.custom-slide p { margin: 0; font-size: 13px; opacity: .8; }
</style>
`,source:`<script setup lang="ts">
import { AeroCarousel, AeroButton, useLocale } from 'aero-vue'
import { ref, computed } from 'vue'
// 幻灯样张与 slot 文案原硬编码中文 → 走词包 demo 组（en/chip 为英文数据，保留）
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const slides = computed(() => [
  { en: 'Aero UI', zh: t.value['carousel.zh1'], chip: 'v0.1.0', tone: 'a' as const },
  { en: 'Dark Mode', zh: t.value['carousel.zh2'], chip: 'THEME', tone: 'b' as const },
  { en: '75+ CMP', zh: t.value['carousel.zh3'], chip: 'SCALE', tone: 'c' as const },
])

/* slot 注入演示：任意 Vue/HTML 内容 */
const counter = ref(0)
const customSlides = [
  { en: 'slot-1', tone: 'b' as const },
  { en: 'slot-2', tone: 'c' as const },
]
<\/script>

<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap">
    <!-- 数据驱动（默认） -->
    <AeroCarousel :slides="slides" style="max-width: 300px" />

    <!-- slot 注入任意内容 -->
    <AeroCarousel :slides="customSlides" :interval="0" style="max-width: 300px">
      <template #default="{ slide, index }">
        <div class="custom-slide">
          <h4>#{{ index + 1 }} {{ slide.en }} {{ t['carousel.customSlide'] }}</h4>
          <p>{{ t['carousel.anyContent'] }}</p>
          <AeroButton type="outline" size="sm" @click="counter++">{{ t['carousel.clickPlus'] }} {{ counter }} {{ t['carousel.clickPlusEnd'] }}</AeroButton>
        </div>
      </template>
    </AeroCarousel>
  </div>
</template>

<style scoped>
.custom-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 24px 28px;
}
.custom-slide h4 { margin: 0; font-size: 20px; }
.custom-slide p { margin: 0; font-size: 13px; opacity: .8; }
</style>
`},cascader:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCascader, useLocale } from 'aero-vue'
// placeholder/空态原硬编码中文 → 走词包 demo 组（文件树 label 为英文数据，保留）
const { demo } = useLocale()
const t = demo

const path = ref<string[]>([])

const options = [
  {
    value: 'src',
    label: 'src',
    children: [
      {
        value: 'components',
        label: 'components',
        children: [
          { value: 'button', label: 'button', children: [{ value: 'btn-vue', label: 'button.vue' }, { value: 'btn-ts', label: 'button.types.ts' }] },
          { value: 'form', label: 'form', children: [{ value: 'input', label: 'input.vue' }] },
        ],
      },
      {
        value: 'styles',
        label: 'styles',
        children: [
          { value: 'tokens', label: 'tokens.scss' },
          { value: 'theme', label: 'theme.scss', children: [{ value: 'dark', label: '_dark.scss' }] },
        ],
      },
      { value: 'composables', label: 'composables', children: [{ value: 'popup', label: 'use-popup.ts' }] },
    ],
  },
  {
    value: 'dist',
    label: 'dist',
    children: [
      { value: 'es', label: 'aero-ui.js' },
      { value: 'umd', label: 'aero-ui.umd.cjs' },
    ],
  },
  {
    value: 'docs',
    label: 'docs',
    children: [
      { value: 'guide', label: 'guide.md' },
      { value: 'api', label: 'api.md' },
    ],
  },
]
<\/script>

<template>
  <div class="cas-demo">
    <div style="max-width: 320px">
      <AeroCascader v-model="path" :options="options" :placeholder="t['cascader.placeholder']" />
    </div>
    <p class="cas-demo__val">{{ path.join('/') || t['cascader.empty'] }}</p>
  </div>
</template>

<style scoped>
.cas-demo { display: flex; flex-direction: column; gap: 10px; }
.cas-demo__val {
  font-size: 12.5px;
  color: var(--ui-ink-3);
  font-family: var(--ui-font-mono);
}
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCascader, useLocale } from 'aero-vue'
// placeholder/空态原硬编码中文 → 走词包 demo 组（文件树 label 为英文数据，保留）
const { demo } = useLocale()
const t = demo

const path = ref<string[]>([])

const options = [
  {
    value: 'src',
    label: 'src',
    children: [
      {
        value: 'components',
        label: 'components',
        children: [
          { value: 'button', label: 'button', children: [{ value: 'btn-vue', label: 'button.vue' }, { value: 'btn-ts', label: 'button.types.ts' }] },
          { value: 'form', label: 'form', children: [{ value: 'input', label: 'input.vue' }] },
        ],
      },
      {
        value: 'styles',
        label: 'styles',
        children: [
          { value: 'tokens', label: 'tokens.scss' },
          { value: 'theme', label: 'theme.scss', children: [{ value: 'dark', label: '_dark.scss' }] },
        ],
      },
      { value: 'composables', label: 'composables', children: [{ value: 'popup', label: 'use-popup.ts' }] },
    ],
  },
  {
    value: 'dist',
    label: 'dist',
    children: [
      { value: 'es', label: 'aero-ui.js' },
      { value: 'umd', label: 'aero-ui.umd.cjs' },
    ],
  },
  {
    value: 'docs',
    label: 'docs',
    children: [
      { value: 'guide', label: 'guide.md' },
      { value: 'api', label: 'api.md' },
    ],
  },
]
<\/script>

<template>
  <div class="cas-demo">
    <div style="max-width: 320px">
      <AeroCascader v-model="path" :options="options" :placeholder="t['cascader.placeholder']" />
    </div>
    <p class="cas-demo__val">{{ path.join('/') || t['cascader.empty'] }}</p>
  </div>
</template>

<style scoped>
.cas-demo { display: flex; flex-direction: column; gap: 10px; }
.cas-demo__val {
  font-size: 12.5px;
  color: var(--ui-ink-3);
  font-family: var(--ui-font-mono);
}
</style>
`},checkbox:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCheckbox, useLocale } from 'aero-vue'
import { AeroCheckboxGroup } from 'aero-vue'
// 标签/空态原硬编码中文 → 走词包 demo 组（Vue/Vite/SCSS 为数据，保留）
const { demo } = useLocale()
const t = demo

const single = ref(true)
const arr = ref<string[]>(['vue'])
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <AeroCheckbox v-model="single">{{ t['checkbox.single'] }}</AeroCheckbox>
    <AeroCheckboxGroup v-model="arr">
      <AeroCheckbox value="vue">Vue</AeroCheckbox>
      <AeroCheckbox value="vite">Vite</AeroCheckbox>
      <AeroCheckbox value="scss">SCSS</AeroCheckbox>
    </AeroCheckboxGroup>
    <p style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['checkbox.selected'] }}{{ arr.join(' / ') || t['checkbox.none'] }}</p>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCheckbox, useLocale } from 'aero-vue'
import { AeroCheckboxGroup } from 'aero-vue'
// 标签/空态原硬编码中文 → 走词包 demo 组（Vue/Vite/SCSS 为数据，保留）
const { demo } = useLocale()
const t = demo

const single = ref(true)
const arr = ref<string[]>(['vue'])
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <AeroCheckbox v-model="single">{{ t['checkbox.single'] }}</AeroCheckbox>
    <AeroCheckboxGroup v-model="arr">
      <AeroCheckbox value="vue">Vue</AeroCheckbox>
      <AeroCheckbox value="vite">Vite</AeroCheckbox>
      <AeroCheckbox value="scss">SCSS</AeroCheckbox>
    </AeroCheckboxGroup>
    <p style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['checkbox.selected'] }}{{ arr.join(' / ') || t['checkbox.none'] }}</p>
  </div>
</template>
`},"checkbox-group":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCheckboxGroup } from 'aero-vue'
import { AeroCheckbox } from 'aero-vue'

const arr = ref<string[]>((['vue']))
<\/script>

<template>
  <AeroCheckboxGroup v-model="arr">
    <AeroCheckbox value="vue">Vue</AeroCheckbox>
    <AeroCheckbox value="vite">Vite</AeroCheckbox>
    <AeroCheckbox value="ts">TypeScript</AeroCheckbox>
  </AeroCheckboxGroup>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCheckboxGroup } from 'aero-vue'
import { AeroCheckbox } from 'aero-vue'

const arr = ref<string[]>((['vue']))
<\/script>

<template>
  <AeroCheckboxGroup v-model="arr">
    <AeroCheckbox value="vue">Vue</AeroCheckbox>
    <AeroCheckbox value="vite">Vite</AeroCheckbox>
    <AeroCheckbox value="ts">TypeScript</AeroCheckbox>
  </AeroCheckboxGroup>
</template>
`},chip:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroChip, AeroButton, useLocale } from 'aero-vue'
// chip 文案/日志/重置原硬编码中文 → 走词包 demo 组（chip 数据 Vue 3/TS 保留）
const { demo } = useLocale()
const t = demo

const all = ['Vue 3', 'TypeScript', 'Vite', 'SCSS']
const tags = ref([...all])
// 日志只存被移除的 tag（locale 无关键），文案渲染期拼词包求值——
// 原 unshift 烤串 \`\${t.removed}\${tag}\${t.removedEnd}\` 已废除，切语言同步翻转
const log = ref<string[]>([])

function remove(tag: string) {
  const i = tags.value.indexOf(tag)
  if (i >= 0) tags.value.splice(i, 1)
  log.value.unshift(tag)
  if (log.value.length > 3) log.value.pop()
}
<\/script>

<template>
  <div class="chip-demo">
    <div class="chip-demo__row">
      <TransitionGroup name="chip-pop" tag="span" class="chip-demo__row">
        <AeroChip v-for="tp in tags" :key="tp" closable @close="remove(tp)">{{ tp }}</AeroChip>
      </TransitionGroup>
      <AeroChip active>{{ t['chip.selectedChip'] }}</AeroChip>
      <AeroChip>{{ t['chip.uncloseable'] }}</AeroChip>
    </div>
    <p v-if="log.length" class="chip-demo__log">
      <span v-for="(l, li) in log" :key="li" class="chip-demo__log-item">{{ t['chip.removed'] }}{{ l }}{{ t['chip.removedEnd'] }}</span>
    </p>
    <AeroButton v-if="tags.length < all.length" type="ghost" size="sm" @click="tags = [...all]; log = []">{{ t['chip.reset'] }}</AeroButton>
  </div>
</template>

<style scoped>
.chip-demo { display: flex; flex-direction: column; gap: 12px; }
.chip-demo__row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.chip-demo__log { display: flex; gap: 8px; margin: 0; flex-wrap: wrap; }
.chip-demo__log-item {
  font-family: var(--ui-font-mono);
  font-size: 12px;
  color: var(--ui-brand-ink);
  background: var(--ui-bg-tint);
  border-radius: 8px;
  padding: 2px 9px;
}
.chip-demo__reset {
  align-self: flex-start;
  border: 2px solid var(--ui-line-2);
  border-radius: 10px;
  background: var(--ui-card);
  color: var(--ui-ink-2);
  font-size: 12.5px;
  font-weight: 700;
  padding: 5px 13px;
  cursor: pointer;
  transition: .2s var(--ui-spring);
}
.chip-demo__reset:hover { border-color: var(--ui-brand); color: var(--ui-brand-ink); transform: translateY(-1px); }

/* 关闭/新增过渡：弹入弹出 + 邻位平移（demo chip 签名交互的 spring 曲线）
 move 补位走 MotionPresets token（--ui-dur-mid/--ui-spring），
 prefers-reduced-motion 由 tokens 全局 .01ms 断路（FLIP 自动禁用） */
.chip-pop-enter-active { transition: opacity .3s var(--ui-spring), transform .3s var(--ui-spring); }
.chip-pop-leave-active { transition: opacity .25s var(--ui-ease), transform .25s var(--ui-ease); display: inline-flex; }
.chip-pop-move { transition: transform var(--ui-dur-mid) var(--ui-spring); }
.chip-pop-enter-from { opacity: 0; transform: translateY(8px) scale(.7); }
.chip-pop-leave-to { opacity: 0; transform: scale(.6) rotate(6deg); }
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroChip, AeroButton, useLocale } from 'aero-vue'
// chip 文案/日志/重置原硬编码中文 → 走词包 demo 组（chip 数据 Vue 3/TS 保留）
const { demo } = useLocale()
const t = demo

const all = ['Vue 3', 'TypeScript', 'Vite', 'SCSS']
const tags = ref([...all])
// 日志只存被移除的 tag（locale 无关键），文案渲染期拼词包求值——
// 原 unshift 烤串 \`\${t.removed}\${tag}\${t.removedEnd}\` 已废除，切语言同步翻转
const log = ref<string[]>([])

function remove(tag: string) {
  const i = tags.value.indexOf(tag)
  if (i >= 0) tags.value.splice(i, 1)
  log.value.unshift(tag)
  if (log.value.length > 3) log.value.pop()
}
<\/script>

<template>
  <div class="chip-demo">
    <div class="chip-demo__row">
      <TransitionGroup name="chip-pop" tag="span" class="chip-demo__row">
        <AeroChip v-for="tp in tags" :key="tp" closable @close="remove(tp)">{{ tp }}</AeroChip>
      </TransitionGroup>
      <AeroChip active>{{ t['chip.selectedChip'] }}</AeroChip>
      <AeroChip>{{ t['chip.uncloseable'] }}</AeroChip>
    </div>
    <p v-if="log.length" class="chip-demo__log">
      <span v-for="(l, li) in log" :key="li" class="chip-demo__log-item">{{ t['chip.removed'] }}{{ l }}{{ t['chip.removedEnd'] }}</span>
    </p>
    <AeroButton v-if="tags.length < all.length" type="ghost" size="sm" @click="tags = [...all]; log = []">{{ t['chip.reset'] }}</AeroButton>
  </div>
</template>

<style scoped>
.chip-demo { display: flex; flex-direction: column; gap: 12px; }
.chip-demo__row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.chip-demo__log { display: flex; gap: 8px; margin: 0; flex-wrap: wrap; }
.chip-demo__log-item {
  font-family: var(--ui-font-mono);
  font-size: 12px;
  color: var(--ui-brand-ink);
  background: var(--ui-bg-tint);
  border-radius: 8px;
  padding: 2px 9px;
}
.chip-demo__reset {
  align-self: flex-start;
  border: 2px solid var(--ui-line-2);
  border-radius: 10px;
  background: var(--ui-card);
  color: var(--ui-ink-2);
  font-size: 12.5px;
  font-weight: 700;
  padding: 5px 13px;
  cursor: pointer;
  transition: .2s var(--ui-spring);
}
.chip-demo__reset:hover { border-color: var(--ui-brand); color: var(--ui-brand-ink); transform: translateY(-1px); }

/* 关闭/新增过渡：弹入弹出 + 邻位平移（demo chip 签名交互的 spring 曲线）
 move 补位走 MotionPresets token（--ui-dur-mid/--ui-spring），
 prefers-reduced-motion 由 tokens 全局 .01ms 断路（FLIP 自动禁用） */
.chip-pop-enter-active { transition: opacity .3s var(--ui-spring), transform .3s var(--ui-spring); }
.chip-pop-leave-active { transition: opacity .25s var(--ui-ease), transform .25s var(--ui-ease); display: inline-flex; }
.chip-pop-move { transition: transform var(--ui-dur-mid) var(--ui-spring); }
.chip-pop-enter-from { opacity: 0; transform: translateY(8px) scale(.7); }
.chip-pop-leave-to { opacity: 0; transform: scale(.6) rotate(6deg); }
</style>
`},"code-block":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCodeBlock } from 'aero-vue'

const code = \`import { AeroButton, AeroUI } from 'aero-vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(AeroUI)
\`

// 折叠显隐（v-model:open 受控）；标题栏右侧展开/收起钮
const open = ref(true)
<\/script>

<template>
  <AeroCodeBlock
    v-model:open="open"
    :code="code"
    lang="TS"
    title="main.ts"
    collapsible
    style="max-width: 480px"
  />
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroCodeBlock } from 'aero-vue'

const code = \`import { AeroButton, AeroUI } from 'aero-vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(AeroUI)
\`

// 折叠显隐（v-model:open 受控）；标题栏右侧展开/收起钮
const open = ref(true)
<\/script>

<template>
  <AeroCodeBlock
    v-model:open="open"
    :code="code"
    lang="TS"
    title="main.ts"
    collapsible
    style="max-width: 480px"
  />
</template>
`},collapse:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroCollapse, useLocale } from 'aero-vue'
// 折叠面板标题/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref('a')
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed(() => [
  { key: 'a', title: t.value['collapse.q1'], content: t.value['collapse.a1'] },
  { key: 'b', title: t.value['collapse.q2'], content: t.value['collapse.a2'] },
  { key: 'c', title: t.value['collapse.q3'], content: t.value['collapse.a3'] },
])
<\/script>

<template>
  <AeroCollapse v-model="open" :items="items" style="max-width: 480px" />
</template>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroCollapse, useLocale } from 'aero-vue'
// 折叠面板标题/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref('a')
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed(() => [
  { key: 'a', title: t.value['collapse.q1'], content: t.value['collapse.a1'] },
  { key: 'b', title: t.value['collapse.q2'], content: t.value['collapse.a2'] },
  { key: 'c', title: t.value['collapse.q3'], content: t.value['collapse.a3'] },
])
<\/script>

<template>
  <AeroCollapse v-model="open" :items="items" style="max-width: 480px" />
</template>
`},"color-picker":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroColorPicker, useLocale } from 'aero-vue'
// 当前色标签原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const c = ref('#0EBFFF')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <AeroColorPicker v-model="c" />
    <span style="font-family: var(--ui-font-mono); font-size: 13px; color: var(--ui-brand-ink)">{{ t['colorPicker.current'] }}{{ c }}</span>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroColorPicker, useLocale } from 'aero-vue'
// 当前色标签原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const c = ref('#0EBFFF')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <AeroColorPicker v-model="c" />
    <span style="font-family: var(--ui-font-mono); font-size: 13px; color: var(--ui-brand-ink)">{{ t['colorPicker.current'] }}{{ c }}</span>
  </div>
</template>
`},"config-provider":{usage:`<script setup lang="ts">
import { AeroConfigProvider, AeroBadge, useLocale } from 'aero-vue'
// demo 空壳修复——前后对比可见：默认（无包裹）vs provider 注入（dark + violet）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div class="cp-demo">
    <div class="cp-demo__panel">
      <b class="cp-demo__label">{{ t['configProvider.default'] }}</b>
      <AeroBadge type="soft" dot>{{ t['configProvider.badge'] }}</AeroBadge>
    </div>
    <AeroConfigProvider theme="dark" preset="violet">
      <div class="cp-demo__panel">
        <b class="cp-demo__label">{{ t['configProvider.injected'] }}</b>
        <AeroBadge type="soft" dot>{{ t['configProvider.badge'] }}</AeroBadge>
      </div>
    </AeroConfigProvider>
  </div>
</template>

<style scoped>
.cp-demo {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  max-width: 100%;
}
.cp-demo__panel {
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
  background: var(--ui-card);
  border: 2px solid var(--ui-line);
  border-radius: 16px;
}
.cp-demo__label {
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ui-ink-2);
  letter-spacing: 0.02em;
}
</style>
`,source:`<script setup lang="ts">
import { AeroConfigProvider, AeroBadge, useLocale } from 'aero-vue'
// demo 空壳修复——前后对比可见：默认（无包裹）vs provider 注入（dark + violet）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div class="cp-demo">
    <div class="cp-demo__panel">
      <b class="cp-demo__label">{{ t['configProvider.default'] }}</b>
      <AeroBadge type="soft" dot>{{ t['configProvider.badge'] }}</AeroBadge>
    </div>
    <AeroConfigProvider theme="dark" preset="violet">
      <div class="cp-demo__panel">
        <b class="cp-demo__label">{{ t['configProvider.injected'] }}</b>
        <AeroBadge type="soft" dot>{{ t['configProvider.badge'] }}</AeroBadge>
      </div>
    </AeroConfigProvider>
  </div>
</template>

<style scoped>
.cp-demo {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  max-width: 100%;
}
.cp-demo__panel {
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
  background: var(--ui-card);
  border: 2px solid var(--ui-line);
  border-radius: 16px;
}
.cp-demo__label {
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ui-ink-2);
  letter-spacing: 0.02em;
}
</style>
`},cropper:{usage:`<script setup lang="ts">
import { AeroCropper, useLocale } from 'aero-vue'
// 展示组件内 .aero-cropper__result 结果卡片排，每档导出尺寸真实像素渲染
// tip slot 走 useLocale() 词包 hint，文案随 ConfigProvider locale 翻转
const { cropper } = useLocale()
<\/script>

<template>
  <div class="cropper-demo">
    <AeroCropper>
      <template #tip>
        <span class="hint-chip">{{ cropper.hint }}</span>
      </template>
    </AeroCropper>
  </div>
</template>

<style scoped>
.cropper-demo { display: flex; flex-direction: column; gap: 20px; max-width: 100%; }
/* 提示 chip：与 avatar demo .hint 风格统一——bg --ui-bg-soft + 1px --ui-line
   + pill 圆角 + 12.5px + --ui-ink-3 */
.hint-chip {
  display: inline-block;
  background: var(--ui-bg-soft);
  border: 1px solid var(--ui-line);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12.5px;
  color: var(--ui-ink-3);
  max-width: 100%;
  line-height: 1.5;
  box-sizing: border-box;
}
</style>
`,source:`<script setup lang="ts">
import { AeroCropper, useLocale } from 'aero-vue'
// 展示组件内 .aero-cropper__result 结果卡片排，每档导出尺寸真实像素渲染
// tip slot 走 useLocale() 词包 hint，文案随 ConfigProvider locale 翻转
const { cropper } = useLocale()
<\/script>

<template>
  <div class="cropper-demo">
    <AeroCropper>
      <template #tip>
        <span class="hint-chip">{{ cropper.hint }}</span>
      </template>
    </AeroCropper>
  </div>
</template>

<style scoped>
.cropper-demo { display: flex; flex-direction: column; gap: 20px; max-width: 100%; }
/* 提示 chip：与 avatar demo .hint 风格统一——bg --ui-bg-soft + 1px --ui-line
   + pill 圆角 + 12.5px + --ui-ink-3 */
.hint-chip {
  display: inline-block;
  background: var(--ui-bg-soft);
  border: 1px solid var(--ui-line);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12.5px;
  color: var(--ui-ink-3);
  max-width: 100%;
  line-height: 1.5;
  box-sizing: border-box;
}
</style>
`},"date-picker":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDatePicker } from 'aero-vue'

const d = ref('2026-09-13')
<\/script>

<template>
  <div style="max-width: 240px">
    <AeroDatePicker v-model="d" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDatePicker } from 'aero-vue'

const d = ref('2026-09-13')
<\/script>

<template>
  <div style="max-width: 240px">
    <AeroDatePicker v-model="d" />
  </div>
</template>
`},descriptions:{usage:`<script setup lang="ts">
import { AeroDescriptions, useLocale } from 'aero-vue'
import { AeroTag } from 'aero-vue'
// 标题/字段 label 原硬编码中文 → 走词包 demo 组（数据值英文，保留）
const { demo } = useLocale()
const t = demo

const data = {
  name: 'aero-vue',
  version: '0.1.0',
  license: 'MIT',
  author: 'AeroBase Team',
  deps: 'vue >= 3.4',
  build: 'vite lib (es + umd)',
  style: 'SCSS tokens',
}
<\/script>

<template>
  <AeroDescriptions
    :title="t['descriptions.title']"
    :data="data"
    :column="2"
    :items="[
      { key: 'name', label: t['descriptions.pkgName'] },
      { key: 'version', label: t['descriptions.version'] },
      { key: 'license', label: t['descriptions.license'] },
      { key: 'author', label: t['descriptions.author'], span: 2 },
      { key: 'build', label: t['descriptions.build'] },
      { key: 'style', label: t['descriptions.style'] },
    ]"
    style="max-width: 560px"
  >
    <template #license>
      <AeroTag accent>MIT</AeroTag>
    </template>
  </AeroDescriptions>
</template>
`,source:`<script setup lang="ts">
import { AeroDescriptions, useLocale } from 'aero-vue'
import { AeroTag } from 'aero-vue'
// 标题/字段 label 原硬编码中文 → 走词包 demo 组（数据值英文，保留）
const { demo } = useLocale()
const t = demo

const data = {
  name: 'aero-vue',
  version: '0.1.0',
  license: 'MIT',
  author: 'AeroBase Team',
  deps: 'vue >= 3.4',
  build: 'vite lib (es + umd)',
  style: 'SCSS tokens',
}
<\/script>

<template>
  <AeroDescriptions
    :title="t['descriptions.title']"
    :data="data"
    :column="2"
    :items="[
      { key: 'name', label: t['descriptions.pkgName'] },
      { key: 'version', label: t['descriptions.version'] },
      { key: 'license', label: t['descriptions.license'] },
      { key: 'author', label: t['descriptions.author'], span: 2 },
      { key: 'build', label: t['descriptions.build'] },
      { key: 'style', label: t['descriptions.style'] },
    ]"
    style="max-width: 560px"
  >
    <template #license>
      <AeroTag accent>MIT</AeroTag>
    </template>
  </AeroDescriptions>
</template>
`},dialog:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDialog, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮/标题/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref(false)
<\/script>

<template>
  <div>
    <AeroButton type="primary" @click="open = true">{{ t['dialog.openBtn'] }}</AeroButton>
    <AeroDialog v-model="open" :title="t['dialog.title']">
      <p>{{ t['dialog.body'] }}</p>
      <template #footer>
        <AeroButton type="ghost" size="sm" @click="open = false">{{ t['dialog.cancel'] }}</AeroButton>
        <AeroButton type="danger" size="sm" @click="open = false">{{ t['dialog.delete'] }}</AeroButton>
      </template>
    </AeroDialog>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDialog, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮/标题/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref(false)
<\/script>

<template>
  <div>
    <AeroButton type="primary" @click="open = true">{{ t['dialog.openBtn'] }}</AeroButton>
    <AeroDialog v-model="open" :title="t['dialog.title']">
      <p>{{ t['dialog.body'] }}</p>
      <template #footer>
        <AeroButton type="ghost" size="sm" @click="open = false">{{ t['dialog.cancel'] }}</AeroButton>
        <AeroButton type="danger" size="sm" @click="open = false">{{ t['dialog.delete'] }}</AeroButton>
      </template>
    </AeroDialog>
  </div>
</template>
`},divider:{usage:`<script setup lang="ts">
import { AeroDivider, useLocale } from 'aero-vue'
// 段落文案原硬编码中文 → 走词包 demo 组（'Or' 英文保留）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div>
    <p style="color: var(--ui-ink-2)">{{ t['divider.topContent'] }}</p>
    <AeroDivider />
    <AeroDivider title="Or" />
    <div style="display: flex; height: 40px; align-items: center">
      {{ t['divider.left'] }} <AeroDivider vertical /> {{ t['divider.middle'] }} <AeroDivider vertical dashed /> {{ t['divider.right'] }}
    </div>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroDivider, useLocale } from 'aero-vue'
// 段落文案原硬编码中文 → 走词包 demo 组（'Or' 英文保留）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div>
    <p style="color: var(--ui-ink-2)">{{ t['divider.topContent'] }}</p>
    <AeroDivider />
    <AeroDivider title="Or" />
    <div style="display: flex; height: 40px; align-items: center">
      {{ t['divider.left'] }} <AeroDivider vertical /> {{ t['divider.middle'] }} <AeroDivider vertical dashed /> {{ t['divider.right'] }}
    </div>
  </div>
</template>
`},"dot-field":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDotField, useLocale } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
import { AeroTypography } from 'aero-vue'
import { AeroSegmented } from 'aero-vue'
// 面板文案/开关 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const flow = ref(true)
const shape = ref<'dot' | 'x' | 'diamond' | 'ring'>('diamond')
const shapes = ['dot', 'x', 'diamond', 'ring'] as const
const shapeOptions = shapes.map((s) => ({ label: s, value: s }))
<\/script>

<template>
  <!-- 容器脱离舞台 flex 流（绝对定位），让 DotField 的 inset:0 以它为基准铺满 -->
  <div class="df-stage">
    <AeroDotField :shape="shape" :flow="flow" :density="24" />
    <!-- 控制条移到左下角，别挡住极光扫过的整片区域 -->
    <div class="df-panel">
      <AeroTypography level="body">{{ t['dotField.title'] }}</AeroTypography>
      <div class="df-panel__row">
        <AeroSwitch v-model="flow">{{ t['dotField.flow'] }}</AeroSwitch>
        <AeroSegmented v-model="shape" :options="shapeOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.df-stage {
  position: relative;
  width: 100%;
  /* 桌面端限宽居中——原 width:100% 在 1440 视口下撑满 .pg-stage 内容盒
 （888px），canvas 右缘贴边呈「右对齐」观感。max-width + margin-inline:auto
 在桌面（内容盒 >560px）限宽居中；390px 移动视口下 560px 上限不生效，
 仍 100% 占满可用宽度（零变化） */
  max-width: 560px;
  margin-inline: auto;
  /* aspect-ratio 使容器高度随宽度等比缩放（canvas 按父宽重绘）；
 min-height 兜底窄屏不至于过扁（固定宽度 + overflow:hidden 在 390px 视口下会裁掉点阵右侧区域） */
  aspect-ratio: 4 / 3;
  min-height: 260px;
  overflow: hidden;
  border: 2px dashed var(--ui-line-2);
  border-radius: 20px;
  display: grid;
  place-items: center;
}
.df-panel {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: color-mix(in srgb, var(--ui-bg) 82%, transparent);
  backdrop-filter: blur(6px);
  padding: 14px 18px;
  border-radius: 14px;
  border: 2px solid var(--ui-line);
}
.df-panel__row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
/* 窄屏（≤520px，覆盖 390 视口下 312px 舞台）控制条不得溢出点阵区。
 AeroSegmented 为固定固有宽（不随容器收缩），max-width 只能裁不能缩 →
 用 transform:scale 等比缩小整块面板（视觉完整、几何全部落回舞台内）。
 实测 ≤400px：row 自然宽 ~327px × 0.8 ≈ 262px < 280px 可用宽度 */
@media (max-width: 400px) {
  .df-panel {
    transform: scale(0.8);
    transform-origin: left bottom;
  }
}
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDotField, useLocale } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
import { AeroTypography } from 'aero-vue'
import { AeroSegmented } from 'aero-vue'
// 面板文案/开关 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const flow = ref(true)
const shape = ref<'dot' | 'x' | 'diamond' | 'ring'>('diamond')
const shapes = ['dot', 'x', 'diamond', 'ring'] as const
const shapeOptions = shapes.map((s) => ({ label: s, value: s }))
<\/script>

<template>
  <!-- 容器脱离舞台 flex 流（绝对定位），让 DotField 的 inset:0 以它为基准铺满 -->
  <div class="df-stage">
    <AeroDotField :shape="shape" :flow="flow" :density="24" />
    <!-- 控制条移到左下角，别挡住极光扫过的整片区域 -->
    <div class="df-panel">
      <AeroTypography level="body">{{ t['dotField.title'] }}</AeroTypography>
      <div class="df-panel__row">
        <AeroSwitch v-model="flow">{{ t['dotField.flow'] }}</AeroSwitch>
        <AeroSegmented v-model="shape" :options="shapeOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.df-stage {
  position: relative;
  width: 100%;
  /* 桌面端限宽居中——原 width:100% 在 1440 视口下撑满 .pg-stage 内容盒
 （888px），canvas 右缘贴边呈「右对齐」观感。max-width + margin-inline:auto
 在桌面（内容盒 >560px）限宽居中；390px 移动视口下 560px 上限不生效，
 仍 100% 占满可用宽度（零变化） */
  max-width: 560px;
  margin-inline: auto;
  /* aspect-ratio 使容器高度随宽度等比缩放（canvas 按父宽重绘）；
 min-height 兜底窄屏不至于过扁（固定宽度 + overflow:hidden 在 390px 视口下会裁掉点阵右侧区域） */
  aspect-ratio: 4 / 3;
  min-height: 260px;
  overflow: hidden;
  border: 2px dashed var(--ui-line-2);
  border-radius: 20px;
  display: grid;
  place-items: center;
}
.df-panel {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: color-mix(in srgb, var(--ui-bg) 82%, transparent);
  backdrop-filter: blur(6px);
  padding: 14px 18px;
  border-radius: 14px;
  border: 2px solid var(--ui-line);
}
.df-panel__row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
/* 窄屏（≤520px，覆盖 390 视口下 312px 舞台）控制条不得溢出点阵区。
 AeroSegmented 为固定固有宽（不随容器收缩），max-width 只能裁不能缩 →
 用 transform:scale 等比缩小整块面板（视觉完整、几何全部落回舞台内）。
 实测 ≤400px：row 自然宽 ~327px × 0.8 ≈ 262px < 280px 可用宽度 */
@media (max-width: 400px) {
  .df-panel {
    transform: scale(0.8);
    transform-origin: left bottom;
  }
}
</style>
`},drawer:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDrawer, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroChip } from 'aero-vue'
// 按钮/标题/标签/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref(false)
<\/script>

<template>
  <div>
    <AeroButton type="outline" @click="open = true">{{ t['drawer.openBtn'] }}</AeroButton>
    <AeroDrawer v-model="open" :title="t['drawer.title']">
      <div style="display: flex; flex-direction: column; gap: 14px">
        <AeroChip>{{ t['drawer.tag1'] }}</AeroChip>
        <AeroChip>{{ t['drawer.tag2'] }}</AeroChip>
        <p style="color: var(--ui-ink-2); font-size: 13.5px">{{ t['drawer.body'] }}</p>
      </div>
    </AeroDrawer>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroDrawer, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroChip } from 'aero-vue'
// 按钮/标题/标签/正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref(false)
<\/script>

<template>
  <div>
    <AeroButton type="outline" @click="open = true">{{ t['drawer.openBtn'] }}</AeroButton>
    <AeroDrawer v-model="open" :title="t['drawer.title']">
      <div style="display: flex; flex-direction: column; gap: 14px">
        <AeroChip>{{ t['drawer.tag1'] }}</AeroChip>
        <AeroChip>{{ t['drawer.tag2'] }}</AeroChip>
        <p style="color: var(--ui-ink-2); font-size: 13.5px">{{ t['drawer.body'] }}</p>
      </div>
    </AeroDrawer>
  </div>
</template>
`},dropdown:{usage:`<script setup lang="ts">
import { AeroDropdown, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroToast } from 'aero-vue'
import type { AeroDropdownItem } from 'aero-vue'
import { computed } from 'vue'
// 菜单项/按钮/toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed<AeroDropdownItem[]>(() => [
  { key: 'copy', label: t.value['dropdown.copy'], icon: 'copy' },
  { key: 'edit', label: t.value['dropdown.edit'], icon: 'edit', desc: t.value['dropdown.editDesc'] },
  { key: 'share', label: t.value['dropdown.share'], icon: 'send', divided: true },
  { key: 'del', label: t.value['dropdown.delete'], icon: 'trash', danger: true, divided: true },
])
<\/script>

<template>
  <AeroDropdown :items="items" @select="(it) => AeroToast.info(\`\${t['dropdown.selected']}\${it.label}\`)">
    <AeroButton type="outline">{{ t['dropdown.moreBtn'] }}</AeroButton>
  </AeroDropdown>
</template>
`,source:`<script setup lang="ts">
import { AeroDropdown, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroToast } from 'aero-vue'
import type { AeroDropdownItem } from 'aero-vue'
import { computed } from 'vue'
// 菜单项/按钮/toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed<AeroDropdownItem[]>(() => [
  { key: 'copy', label: t.value['dropdown.copy'], icon: 'copy' },
  { key: 'edit', label: t.value['dropdown.edit'], icon: 'edit', desc: t.value['dropdown.editDesc'] },
  { key: 'share', label: t.value['dropdown.share'], icon: 'send', divided: true },
  { key: 'del', label: t.value['dropdown.delete'], icon: 'trash', danger: true, divided: true },
])
<\/script>

<template>
  <AeroDropdown :items="items" @select="(it) => AeroToast.info(\`\${t['dropdown.selected']}\${it.label}\`)">
    <AeroButton type="outline">{{ t['dropdown.moreBtn'] }}</AeroButton>
  </AeroDropdown>
</template>
`},empty:{usage:`<script setup lang="ts">
import { AeroEmpty, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// hint/按钮原硬编码中文 → 走词包，随 ConfigProvider locale 翻转
const { empty } = useLocale()
<\/script>

<template>
  <div style="max-width: 400px">
    <AeroEmpty :hint="empty.search">
      <template #actions>
        <AeroButton type="outline" size="sm">{{ empty.reset }}</AeroButton>
      </template>
    </AeroEmpty>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroEmpty, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// hint/按钮原硬编码中文 → 走词包，随 ConfigProvider locale 翻转
const { empty } = useLocale()
<\/script>

<template>
  <div style="max-width: 400px">
    <AeroEmpty :hint="empty.search">
      <template #actions>
        <AeroButton type="outline" size="sm">{{ empty.reset }}</AeroButton>
      </template>
    </AeroEmpty>
  </div>
</template>
`},form:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroForm, useLocale } from 'aero-vue'
import { AeroFormItem } from 'aero-vue'
import { AeroInput } from 'aero-vue'
import { AeroTextarea } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 表单 label/提示/校验文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const name = ref('')
const desc = ref('')
const err = ref('')

function onBlur() {
  err.value = name.value ? '' : t.value['form.required']
}
function submit() {
  if (!name.value) {
    err.value = t.value['form.required']
    return
  }
  alert(\`\${t.value['form.submit']}\${name.value}\`)
}
<\/script>

<template>
  <AeroForm style="max-width: 380px" @submit="submit">
    <AeroFormItem :label="t['form.projectLabel']" required :hint="t['form.charHint']" :error="err" style="width: 100%">
      <AeroInput v-model="name" :placeholder="t['form.namePlaceholder']" @blur="onBlur" />
    </AeroFormItem>
    <AeroFormItem :label="t['form.descLabel']" style="width: 100%">
      <AeroTextarea v-model="desc" :placeholder="t['form.descPlaceholder']" />
    </AeroFormItem>
    <AeroButton type="primary" native-type="submit">{{ t['form.submitBtn'] }}</AeroButton>
  </AeroForm>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroForm, useLocale } from 'aero-vue'
import { AeroFormItem } from 'aero-vue'
import { AeroInput } from 'aero-vue'
import { AeroTextarea } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 表单 label/提示/校验文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const name = ref('')
const desc = ref('')
const err = ref('')

function onBlur() {
  err.value = name.value ? '' : t.value['form.required']
}
function submit() {
  if (!name.value) {
    err.value = t.value['form.required']
    return
  }
  alert(\`\${t.value['form.submit']}\${name.value}\`)
}
<\/script>

<template>
  <AeroForm style="max-width: 380px" @submit="submit">
    <AeroFormItem :label="t['form.projectLabel']" required :hint="t['form.charHint']" :error="err" style="width: 100%">
      <AeroInput v-model="name" :placeholder="t['form.namePlaceholder']" @blur="onBlur" />
    </AeroFormItem>
    <AeroFormItem :label="t['form.descLabel']" style="width: 100%">
      <AeroTextarea v-model="desc" :placeholder="t['form.descPlaceholder']" />
    </AeroFormItem>
    <AeroButton type="primary" native-type="submit">{{ t['form.submitBtn'] }}</AeroButton>
  </AeroForm>
</template>
`},"form-item":{usage:`<script setup lang="ts">
import { AeroFormItem, useLocale } from 'aero-vue'
import { AeroInput } from 'aero-vue'
import { AeroTextarea } from 'aero-vue'
// label/提示/错误文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 20px; max-width: 480px; width: 100%">
    <AeroFormItem :label="t['formItem.nameLabel']" required :hint="t['formItem.requiredHint']">
      <AeroInput :placeholder="t['formItem.namePlaceholder']" />
    </AeroFormItem>
    <AeroFormItem :label="t['formItem.noteLabel']" :error="t['formItem.noteError']">
      <AeroTextarea :placeholder="t['formItem.notePlaceholder']" />
    </AeroFormItem>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroFormItem, useLocale } from 'aero-vue'
import { AeroInput } from 'aero-vue'
import { AeroTextarea } from 'aero-vue'
// label/提示/错误文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 20px; max-width: 480px; width: 100%">
    <AeroFormItem :label="t['formItem.nameLabel']" required :hint="t['formItem.requiredHint']">
      <AeroInput :placeholder="t['formItem.namePlaceholder']" />
    </AeroFormItem>
    <AeroFormItem :label="t['formItem.noteLabel']" :error="t['formItem.noteError']">
      <AeroTextarea :placeholder="t['formItem.notePlaceholder']" />
    </AeroFormItem>
  </div>
</template>
`},grid:{usage:`<script setup lang="ts">
import { AeroGrid, useLocale } from 'aero-vue'
import { AeroCard } from 'aero-vue'
// 卡片文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroGrid :cols="3" :gap="16" style="max-width: 560px">
    <AeroCard v-for="i in 6" :key="i" hoverable>
      <h4>{{ t['grid.card'] }} {{ i }}</h4>
      <p>{{ t['grid.sample'] }}</p>
    </AeroCard>
  </AeroGrid>
</template>
`,source:`<script setup lang="ts">
import { AeroGrid, useLocale } from 'aero-vue'
import { AeroCard } from 'aero-vue'
// 卡片文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroGrid :cols="3" :gap="16" style="max-width: 560px">
    <AeroCard v-for="i in 6" :key="i" hoverable>
      <h4>{{ t['grid.card'] }} {{ i }}</h4>
      <p>{{ t['grid.sample'] }}</p>
    </AeroCard>
  </AeroGrid>
</template>
`},icon:{usage:`<script setup lang="ts">
import { computed, ref } from 'vue'
import { AeroIcon, useLocale } from 'aero-vue'
import { iconPaths } from 'aero-vue'
import { AeroInput } from 'aero-vue'
// placeholder/标题/已复制 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const names = Object.keys(iconPaths)
const q = ref('')
const copied = ref('')
const filtered = computed(() => names.filter((n) => n.includes(q.value.trim().toLowerCase())))

async function copy(name: string) {
  try {
    await navigator.clipboard.writeText(\`<AeroIcon name="\${name}" />\`)
    copied.value = name
    setTimeout(() => { if (copied.value === name) copied.value = '' }, 1200)
  } catch { /* clipboard 不可用时静默 */ }
}
<\/script>

<template>
  <div class="icon-demo">
    <div class="icon-demo__bar">
      <AeroInput
        v-model="q"
        :placeholder="t['icon.searchPlaceholder']"
        :width="240"
      />
      <span class="icon-demo__count">{{ filtered.length }} / {{ names.length }}</span>
    </div>
    <div class="icon-demo__grid">
      <button
        v-for="n in filtered"
        :key="n"
        class="icon-demo__cell"
        type="button"
        :title="\`\${t['icon.clickCopy']}&lt;AeroIcon name=&quot;\${n}&quot; /&gt;\`"
        @click="copy(n)"
      >
        <AeroIcon :name="n as any" :size="20" />
        <span class="icon-demo__name">{{ n }}</span>
        <span v-if="copied === n" class="icon-demo__copied">{{ t['icon.copied'] }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-demo {
  width: 100%;

  &__bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  &__count {
    font-family: var(--ui-font-mono);
    font-size: 12.5px;
    color: var(--ui-ink-3);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
    gap: 10px;
    max-height: 420px;
    overflow-y: auto;
    padding: 2px;
  }

  &__cell {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 14px 6px 10px;
    border: 2px solid var(--ui-line);
    border-radius: 12px;
    background: var(--ui-card);
    color: var(--ui-ink-2);
    cursor: copy;
    transition: 0.2s;
    font-family: inherit;

    &:hover {
      border-color: var(--ui-brand);
      color: var(--ui-brand-ink);
      transform: translateY(-2px);
      box-shadow: 3px 3px 0 var(--ui-bg-tint);
    }
  }

  &__name {
    font-family: var(--ui-font-mono);
    font-size: 11px;
    color: var(--ui-ink-3);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__copied {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: var(--ui-on-brand);
    background: var(--ui-brand);
    border-radius: 10px;
    animation: icon-demo-pop 0.25s var(--ui-spring);
  }
}

@keyframes icon-demo-pop {
  from { transform: scale(0.85); }
  to { transform: scale(1); }
}
</style>
`,source:`<script setup lang="ts">
import { computed, ref } from 'vue'
import { AeroIcon, useLocale } from 'aero-vue'
import { iconPaths } from 'aero-vue'
import { AeroInput } from 'aero-vue'
// placeholder/标题/已复制 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const names = Object.keys(iconPaths)
const q = ref('')
const copied = ref('')
const filtered = computed(() => names.filter((n) => n.includes(q.value.trim().toLowerCase())))

async function copy(name: string) {
  try {
    await navigator.clipboard.writeText(\`<AeroIcon name="\${name}" />\`)
    copied.value = name
    setTimeout(() => { if (copied.value === name) copied.value = '' }, 1200)
  } catch { /* clipboard 不可用时静默 */ }
}
<\/script>

<template>
  <div class="icon-demo">
    <div class="icon-demo__bar">
      <AeroInput
        v-model="q"
        :placeholder="t['icon.searchPlaceholder']"
        :width="240"
      />
      <span class="icon-demo__count">{{ filtered.length }} / {{ names.length }}</span>
    </div>
    <div class="icon-demo__grid">
      <button
        v-for="n in filtered"
        :key="n"
        class="icon-demo__cell"
        type="button"
        :title="\`\${t['icon.clickCopy']}&lt;AeroIcon name=&quot;\${n}&quot; /&gt;\`"
        @click="copy(n)"
      >
        <AeroIcon :name="n as any" :size="20" />
        <span class="icon-demo__name">{{ n }}</span>
        <span v-if="copied === n" class="icon-demo__copied">{{ t['icon.copied'] }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-demo {
  width: 100%;

  &__bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  &__count {
    font-family: var(--ui-font-mono);
    font-size: 12.5px;
    color: var(--ui-ink-3);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
    gap: 10px;
    max-height: 420px;
    overflow-y: auto;
    padding: 2px;
  }

  &__cell {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 14px 6px 10px;
    border: 2px solid var(--ui-line);
    border-radius: 12px;
    background: var(--ui-card);
    color: var(--ui-ink-2);
    cursor: copy;
    transition: 0.2s;
    font-family: inherit;

    &:hover {
      border-color: var(--ui-brand);
      color: var(--ui-brand-ink);
      transform: translateY(-2px);
      box-shadow: 3px 3px 0 var(--ui-bg-tint);
    }
  }

  &__name {
    font-family: var(--ui-font-mono);
    font-size: 11px;
    color: var(--ui-ink-3);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__copied {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: var(--ui-on-brand);
    background: var(--ui-brand);
    border-radius: 10px;
    animation: icon-demo-pop 0.25s var(--ui-spring);
  }
}

@keyframes icon-demo-pop {
  from { transform: scale(0.85); }
  to { transform: scale(1); }
}
</style>
`},"icon-button":{usage:`<script setup lang="ts">
import { AeroIconButton, useLocale } from 'aero-vue'
// aria label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 12px">
    <AeroIconButton icon="bell" dot :label="t['iconButton.notify']" />
    <AeroIconButton icon="sun" :label="t['iconButton.theme']" />
    <AeroIconButton icon="search" :label="t['iconButton.search']" />
    <AeroIconButton icon="menu" :label="t['iconButton.menu']" />
    <AeroIconButton icon="settings" disabled :label="t['iconButton.settings']" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroIconButton, useLocale } from 'aero-vue'
// aria label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 12px">
    <AeroIconButton icon="bell" dot :label="t['iconButton.notify']" />
    <AeroIconButton icon="sun" :label="t['iconButton.theme']" />
    <AeroIconButton icon="search" :label="t['iconButton.search']" />
    <AeroIconButton icon="menu" :label="t['iconButton.menu']" />
    <AeroIconButton icon="settings" disabled :label="t['iconButton.settings']" />
  </div>
</template>
`},image:{usage:`<script setup lang="ts">
import { AeroImage, useLocale } from 'aero-vue'
// alt 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 14px; flex-wrap: wrap">
    <AeroImage
      src="https://picsum.photos/seed/aero1/240/160"
      :alt="t['image.sampleAlt']"
      width="240"
      height="160"
      preview
    />
    <AeroImage src="not-exists.png" width="240" height="160" :alt="t['image.failAlt']" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroImage, useLocale } from 'aero-vue'
// alt 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 14px; flex-wrap: wrap">
    <AeroImage
      src="https://picsum.photos/seed/aero1/240/160"
      :alt="t['image.sampleAlt']"
      width="240"
      height="160"
      preview
    />
    <AeroImage src="not-exists.png" width="240" height="160" :alt="t['image.failAlt']" />
  </div>
</template>
`},"image-viewer":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroImageViewer, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref(false)
/* 内联 SVG 占位图：demo 与截图/回归不依赖外部图床，离线可复现 */
function poster(n: number, bg: string, mark: string) {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="\${bg}"/>
    <g fill="none" stroke="rgba(255,255,255,.28)" stroke-width="2">
      \${Array.from({ length: 9 }, (_, i) => \`<line x1="\${i * 100}" y1="0" x2="\${i * 100}" y2="500"/>\`).join('')}
      \${Array.from({ length: 6 }, (_, i) => \`<line x1="0" y1="\${i * 100}" x2="800" y2="\${i * 100}"/>\`).join('')}
    </g>
    <circle cx="400" cy="250" r="150" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="6"/>
    <circle cx="655" cy="105" r="34" fill="#ff7a3d"/>
    <text x="400" y="272" font-family="monospace" font-size="104" font-weight="700" fill="rgba(255,255,255,.92)" text-anchor="middle">\${mark}</text>
  </svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}
const urls = [poster(1, '#25506e', '01'), poster(2, '#3d4a7a', '02'), poster(3, '#1f6146', '03')]
<\/script>

<template>
  <div>
    <AeroButton type="outline" @click="open = true">{{ t['imageViewer.openBtn'] }}</AeroButton>
    <AeroImageViewer v-model="open" :url-list="urls" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroImageViewer, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const open = ref(false)
/* 内联 SVG 占位图：demo 与截图/回归不依赖外部图床，离线可复现 */
function poster(n: number, bg: string, mark: string) {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="\${bg}"/>
    <g fill="none" stroke="rgba(255,255,255,.28)" stroke-width="2">
      \${Array.from({ length: 9 }, (_, i) => \`<line x1="\${i * 100}" y1="0" x2="\${i * 100}" y2="500"/>\`).join('')}
      \${Array.from({ length: 6 }, (_, i) => \`<line x1="0" y1="\${i * 100}" x2="800" y2="\${i * 100}"/>\`).join('')}
    </g>
    <circle cx="400" cy="250" r="150" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="6"/>
    <circle cx="655" cy="105" r="34" fill="#ff7a3d"/>
    <text x="400" y="272" font-family="monospace" font-size="104" font-weight="700" fill="rgba(255,255,255,.92)" text-anchor="middle">\${mark}</text>
  </svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}
const urls = [poster(1, '#25506e', '01'), poster(2, '#3d4a7a', '02'), poster(3, '#1f6146', '03')]
<\/script>

<template>
  <div>
    <AeroButton type="outline" @click="open = true">{{ t['imageViewer.openBtn'] }}</AeroButton>
    <AeroImageViewer v-model="open" :url-list="urls" />
  </div>
</template>
`},input:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroInput, useLocale } from 'aero-vue'
// placeholder/校验文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref('')
const err = ref('')
function onBlur() {
  err.value = v.value ? '' : t.value['input.required']
}
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 14px; max-width: 300px">
    <AeroInput v-model="v" :placeholder="t['input.basicPlaceholder']" clearable />
    <AeroInput v-model="v" prefix="npm install" :placeholder="t['input.prefixPlaceholder']" />
    <AeroInput v-model="v" :placeholder="t['input.errorPlaceholder']" :error="!!err" @blur="onBlur" />
    <AeroInput :placeholder="t['input.disabledPlaceholder']" disabled :model-value="t['input.disabledValue']" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroInput, useLocale } from 'aero-vue'
// placeholder/校验文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref('')
const err = ref('')
function onBlur() {
  err.value = v.value ? '' : t.value['input.required']
}
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 14px; max-width: 300px">
    <AeroInput v-model="v" :placeholder="t['input.basicPlaceholder']" clearable />
    <AeroInput v-model="v" prefix="npm install" :placeholder="t['input.prefixPlaceholder']" />
    <AeroInput v-model="v" :placeholder="t['input.errorPlaceholder']" :error="!!err" @blur="onBlur" />
    <AeroInput :placeholder="t['input.disabledPlaceholder']" disabled :model-value="t['input.disabledValue']" />
  </div>
</template>
`},"input-number":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroInputNumber } from 'aero-vue'

const n = ref(5)
<\/script>

<template>
  <div style="display: flex; gap: 18px; flex-wrap: wrap">
    <AeroInputNumber v-model="n" :min="0" :max="10" />
    <AeroInputNumber v-model="n" :step="2" step-strictly />
    <AeroInputNumber v-model="n" disabled />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroInputNumber } from 'aero-vue'

const n = ref(5)
<\/script>

<template>
  <div style="display: flex; gap: 18px; flex-wrap: wrap">
    <AeroInputNumber v-model="n" :min="0" :max="10" />
    <AeroInputNumber v-model="n" :step="2" step-strictly />
    <AeroInputNumber v-model="n" disabled />
  </div>
</template>
`},"input-tag":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroInputTag, useLocale } from 'aero-vue'
// placeholder/当前标签原硬编码中文 → 走词包 demo 组（tags 数据保留）
const { demo } = useLocale()
const t = demo

const tags = ref<string[]>(['vue', 'vite'])
<\/script>

<template>
  <div style="max-width: 360px">
    <AeroInputTag v-model="tags" :placeholder="t['inputTag.placeholder']" :max="6" />
    <p style="font-size: 12.5px; color: var(--ui-ink-3); margin-top: 8px">{{ t['inputTag.current'] }}{{ tags.join(' / ') }}</p>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroInputTag, useLocale } from 'aero-vue'
// placeholder/当前标签原硬编码中文 → 走词包 demo 组（tags 数据保留）
const { demo } = useLocale()
const t = demo

const tags = ref<string[]>(['vue', 'vite'])
<\/script>

<template>
  <div style="max-width: 360px">
    <AeroInputTag v-model="tags" :placeholder="t['inputTag.placeholder']" :max="6" />
    <p style="font-size: 12.5px; color: var(--ui-ink-3); margin-top: 8px">{{ t['inputTag.current'] }}{{ tags.join(' / ') }}</p>
  </div>
</template>
`},"iridescent-threads":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroIridescentThreads, AeroSwitch, AeroTypography, useLocale } from 'aero-vue'
// 面板文案/开关 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const hueShift = ref(0)
/** 开关控制是否启相位漂移（switch 要 boolean，hueShift 保留 number 供组件消费） */
const driftOn = ref(false)
<\/script>

<template>
  <div class="it-stage">
    <AeroIridescentThreads :count="7" :cycle="32" :hue-shift="driftOn ? hueShift : 0" />
    <div class="it-panel">
      <AeroTypography level="body">{{ t['iridescent.desc'] }}</AeroTypography>
      <div class="it-panel__row">
        <AeroSwitch v-model="driftOn">{{ t['iridescent.hueDrift'] }}</AeroSwitch>
      </div>
    </div>
  </div>
</template>

<style scoped>
.it-stage {
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;
  border: 2px dashed var(--ui-line-2);
  border-radius: 20px;
  display: grid;
  place-items: center;
}
.it-panel {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: color-mix(in srgb, var(--ui-bg) 82%, transparent);
  backdrop-filter: blur(6px);
  padding: 14px 18px;
  border-radius: 14px;
  border: 2px solid var(--ui-line);
}
.it-panel__row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroIridescentThreads, AeroSwitch, AeroTypography, useLocale } from 'aero-vue'
// 面板文案/开关 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const hueShift = ref(0)
/** 开关控制是否启相位漂移（switch 要 boolean，hueShift 保留 number 供组件消费） */
const driftOn = ref(false)
<\/script>

<template>
  <div class="it-stage">
    <AeroIridescentThreads :count="7" :cycle="32" :hue-shift="driftOn ? hueShift : 0" />
    <div class="it-panel">
      <AeroTypography level="body">{{ t['iridescent.desc'] }}</AeroTypography>
      <div class="it-panel__row">
        <AeroSwitch v-model="driftOn">{{ t['iridescent.hueDrift'] }}</AeroSwitch>
      </div>
    </div>
  </div>
</template>

<style scoped>
.it-stage {
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;
  border: 2px dashed var(--ui-line-2);
  border-radius: 20px;
  display: grid;
  place-items: center;
}
.it-panel {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: color-mix(in srgb, var(--ui-bg) 82%, transparent);
  backdrop-filter: blur(6px);
  padding: 14px 18px;
  border-radius: 14px;
  border: 2px solid var(--ui-line);
}
.it-panel__row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
`},knob:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroKnob, useLocale } from 'aero-vue'
// 标签/单位原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref(8)
const info = computed(() => \`\${v.value} / 16 \${t.value['knob.vcpu']}\`)
const cost = computed(() => \`¥\${(v.value * 0.102).toFixed(2)} \${t.value['knob.perHour']}\`)
<\/script>

<template>
  <div style="display: flex; align-items: center; gap: 22px; user-select: none">
    <AeroKnob v-model="v" />
    <div class="knob-side">
      <span class="ks">{{ t['knob.currentQuota'] }}</span>
      <span class="kv">{{ info }}</span>
      <span class="ks">{{ t['knob.estimatedCost'] }}</span>
      <span class="kv">{{ cost }}</span>
    </div>
  </div>
</template>

<style scoped>
.knob-side { display: flex; flex-direction: column; gap: 8px; }
.ks { font-size: 11.5px; color: var(--ui-ink-3); font-weight: 600; }
.kv { font-family: var(--ui-font-mono); font-size: 13px; color: var(--ui-brand-ink); font-weight: 700; }
</style>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroKnob, useLocale } from 'aero-vue'
// 标签/单位原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref(8)
const info = computed(() => \`\${v.value} / 16 \${t.value['knob.vcpu']}\`)
const cost = computed(() => \`¥\${(v.value * 0.102).toFixed(2)} \${t.value['knob.perHour']}\`)
<\/script>

<template>
  <div style="display: flex; align-items: center; gap: 22px; user-select: none">
    <AeroKnob v-model="v" />
    <div class="knob-side">
      <span class="ks">{{ t['knob.currentQuota'] }}</span>
      <span class="kv">{{ info }}</span>
      <span class="ks">{{ t['knob.estimatedCost'] }}</span>
      <span class="kv">{{ cost }}</span>
    </div>
  </div>
</template>

<style scoped>
.knob-side { display: flex; flex-direction: column; gap: 8px; }
.ks { font-size: 11.5px; color: var(--ui-ink-3); font-weight: 600; }
.kv { font-family: var(--ui-font-mono); font-size: 13px; color: var(--ui-brand-ink); font-weight: 700; }
</style>
`},layout:{usage:`<script setup lang="ts">
import { AeroLayout, AeroTypography, useLocale } from 'aero-vue'
// 段落文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroLayout alt padding="compact" :radius="16">
    <AeroTypography level="title">{{ t['layout.blockTitle'] }}</AeroTypography>
    <AeroTypography level="body">{{ t['layout.body'] }}</AeroTypography>
  </AeroLayout>
</template>
`,source:`<script setup lang="ts">
import { AeroLayout, AeroTypography, useLocale } from 'aero-vue'
// 段落文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroLayout alt padding="compact" :radius="16">
    <AeroTypography level="title">{{ t['layout.blockTitle'] }}</AeroTypography>
    <AeroTypography level="body">{{ t['layout.body'] }}</AeroTypography>
  </AeroLayout>
</template>
`},link:{usage:`<script setup lang="ts">
import { AeroLink, useLocale } from 'aero-vue'
// 链接文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 16px">
    <AeroLink href="#">{{ t['link.internal'] }}</AeroLink>
    <AeroLink href="https://github.com/FanXingYiDianYun/aero-vue" external>{{ t['link.external'] }}</AeroLink>
    <AeroLink disabled>{{ t['link.disabled'] }}</AeroLink>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroLink, useLocale } from 'aero-vue'
// 链接文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 16px">
    <AeroLink href="#">{{ t['link.internal'] }}</AeroLink>
    <AeroLink href="https://github.com/FanXingYiDianYun/aero-vue" external>{{ t['link.external'] }}</AeroLink>
    <AeroLink disabled>{{ t['link.disabled'] }}</AeroLink>
  </div>
</template>
`},loading:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroLoading, useLocale } from 'aero-vue'
import { AeroCard } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// tip/卡片/按钮文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const loading = ref(true)
<\/script>

<template>
  <div style="max-width: 380px">
    <AeroLoading :loading="loading" :tip="t['loading.tip']">
      <AeroCard>
        <h4>{{ t['loading.wrapped'] }}</h4>
        <p>{{ t['loading.wrappedBody'] }}</p>
      </AeroCard>
    </AeroLoading>
    <AeroButton size="sm" type="outline" style="margin-top: 12px" @click="loading = !loading">
      {{ t['loading.toggle'] }}
    </AeroButton>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroLoading, useLocale } from 'aero-vue'
import { AeroCard } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// tip/卡片/按钮文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const loading = ref(true)
<\/script>

<template>
  <div style="max-width: 380px">
    <AeroLoading :loading="loading" :tip="t['loading.tip']">
      <AeroCard>
        <h4>{{ t['loading.wrapped'] }}</h4>
        <p>{{ t['loading.wrappedBody'] }}</p>
      </AeroCard>
    </AeroLoading>
    <AeroButton size="sm" type="outline" style="margin-top: 12px" @click="loading = !loading">
      {{ t['loading.toggle'] }}
    </AeroButton>
  </div>
</template>
`},marquee:{usage:`<script setup lang="ts">
import { AeroMarquee, useLocale } from 'aero-vue'
// / 免责行走词包 demo 组（marquee.disclaimer，zh/en 同源）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display:flex;flex-direction:column;gap:26px;width:100%;max-width:100%;overflow-x:hidden">
    <AeroMarquee
      caption="BUILT WITH OPEN SOURCE"
      :items="[
        { icon: 'box', text: 'Docker' },
        { icon: 'package', text: 'Kubernetes' },
        { icon: 'compass', text: 'Envoy' },
        { icon: 'activity', text: 'Prometheus' },
        { icon: 'database', text: 'Redis' },
        { icon: 'layers', text: 'Kafka' },
        { icon: 'cloud', text: 'Terraform' },
        { icon: 'git-branch', text: 'GitLab' },
      ]"
    />
    <AeroMarquee
      variant="type"
      :items="[
        { text: 'OPEN SOURCE' },
        { text: 'CLOUD NATIVE', solid: true },
        { text: 'GIT PUSH' },
        { text: 'SCALE ANYWHERE', solid: true },
        { text: 'EDGE FIRST' },
        { text: 'ZERO CONFIG', solid: true },
      ]"
    />
    <!-- 免责行（marquee 区块下方）：词包 marquee.disclaimer，12px / ink-3 / margin 8px 0 0 -->
    <p class="marquee-demo__disclaimer">{{ t['marquee.disclaimer'] }}</p>
  </div>
</template>

<style scoped>
.marquee-demo__disclaimer {
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--ui-ink-3);
}
</style>

`,source:`<script setup lang="ts">
import { AeroMarquee, useLocale } from 'aero-vue'
// / 免责行走词包 demo 组（marquee.disclaimer，zh/en 同源）
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display:flex;flex-direction:column;gap:26px;width:100%;max-width:100%;overflow-x:hidden">
    <AeroMarquee
      caption="BUILT WITH OPEN SOURCE"
      :items="[
        { icon: 'box', text: 'Docker' },
        { icon: 'package', text: 'Kubernetes' },
        { icon: 'compass', text: 'Envoy' },
        { icon: 'activity', text: 'Prometheus' },
        { icon: 'database', text: 'Redis' },
        { icon: 'layers', text: 'Kafka' },
        { icon: 'cloud', text: 'Terraform' },
        { icon: 'git-branch', text: 'GitLab' },
      ]"
    />
    <AeroMarquee
      variant="type"
      :items="[
        { text: 'OPEN SOURCE' },
        { text: 'CLOUD NATIVE', solid: true },
        { text: 'GIT PUSH' },
        { text: 'SCALE ANYWHERE', solid: true },
        { text: 'EDGE FIRST' },
        { text: 'ZERO CONFIG', solid: true },
      ]"
    />
    <!-- 免责行（marquee 区块下方）：词包 marquee.disclaimer，12px / ink-3 / margin 8px 0 0 -->
    <p class="marquee-demo__disclaimer">{{ t['marquee.disclaimer'] }}</p>
  </div>
</template>

<style scoped>
.marquee-demo__disclaimer {
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--ui-ink-3);
}
</style>

`},mention:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroMention, useLocale } from 'aero-vue'
// 团队名原硬编码中文 → 走词包 demo 组（个人名 Alia/Ben/Cara 为数据，保留）
const { demo } = useLocale()
const t = demo

const text = ref('')
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const options = computed(() => [
  { label: t.value['mention.aeroTeam'], value: 'aero-team' },
  { label: 'Alia', value: 'alia' },
  { label: 'Ben', value: 'ben' },
  { label: 'Cara', value: 'cara' },
])
<\/script>

<template>
  <div style="max-width: 380px">
    <AeroMention v-model="text" :options="options" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroMention, useLocale } from 'aero-vue'
// 团队名原硬编码中文 → 走词包 demo 组（个人名 Alia/Ben/Cara 为数据，保留）
const { demo } = useLocale()
const t = demo

const text = ref('')
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const options = computed(() => [
  { label: t.value['mention.aeroTeam'], value: 'aero-team' },
  { label: 'Alia', value: 'alia' },
  { label: 'Ben', value: 'ben' },
  { label: 'Cara', value: 'cara' },
])
<\/script>

<template>
  <div style="max-width: 380px">
    <AeroMention v-model="text" :options="options" />
  </div>
</template>
`},menu:{usage:`<script setup lang="ts">
import { AeroMenu, AeroButton, useLocale } from 'aero-vue'
import type { MenuItem } from 'aero-vue'
import { ref, computed, h, type Component } from 'vue'
// 菜单 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// demo 内联 SVG icon（线条 stroke 1.5，形状不敏感）——<component :is> 可消费的 Vue 组件
function makeIcon(paths: string[], opts?: { fill?: boolean }): Component {
  return {
    name: 'MenuDemoIcon',
    render() {
      return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', style: 'width:18px;height:18px;display:block;flex:none' },
        paths.map((d) => h('path', { d, key: d })))
    },
  }
}
// lucide 线条（stroke 1.5 风格，形状不敏感）
const I_OVERVIEW = makeIcon(['M3 12h7M14 12h7M3 6h18M3 18h18'])
const I_DASHBOARD = makeIcon(['M3 3h8v8H3zM13 3h8v5h-8zM13 12h8v9h-8zM3 15h8v6H3z'])
const I_MONITOR = makeIcon(['M3 4h18v12H3zM8 20h8M12 16v4'])
const I_COMPONENT = makeIcon(['M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5'])
const I_FORM = makeIcon(['M4 5h16v4H4zM4 13h10v4H4zM4 17h6M18 15h2v2h-2z'])
const I_DATA = makeIcon(['M6 3v18M6 7h12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6M6 13h12'])
const I_SETTINGS = makeIcon(['M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8 7 17M17 7l2.8-2.8'])
const I_USER = makeIcon(['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0'])

const active = ref('overview')
const collapsed = ref(false)

// 三组结构（概览/组件/设置），每项带 icon；折叠开关 demo 层用库内 Button 控制
const items = computed<MenuItem[]>(() => [
  { key: 'overview', label: t.value['menu.groupOverview'], group: t.value['menu.groupOverview'], icon: I_OVERVIEW },
  { key: 'dashboard', label: t.value['menu.dashboard'], group: t.value['menu.groupOverview'], icon: I_DASHBOARD },
  { key: 'monitor', label: t.value['menu.monitor'], group: t.value['menu.groupOverview'], icon: I_MONITOR },
  { key: 'component', label: t.value['menu.components'], group: t.value['menu.groupComponents'], icon: I_COMPONENT },
  { key: 'form', label: t.value['menu.form'], group: t.value['menu.groupComponents'], icon: I_FORM },
  { key: 'data', label: t.value['menu.data'], group: t.value['menu.groupComponents'], icon: I_DATA },
  { key: 'settings', label: t.value['menu.groupSettings'], group: t.value['menu.groupSettings'], icon: I_SETTINGS },
  { key: 'account', label: t.value['menu.account'], group: t.value['menu.groupSettings'], icon: I_USER },
])
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 18px; min-width: 0; max-width: 100%">
    <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap">
      <AeroButton size="sm" type="outline" @click="collapsed = !collapsed">{{ collapsed ? t['menu.expand'] : t['menu.collapse'] }}</AeroButton>
      <span style="font-size: 12px; color: var(--ui-ink-3); font-family: var(--ui-font-mono)">{{ t['menu.collapseHint'] }}</span>
    </div>
    <AeroMenu
      v-model="active"
      v-model:collapsed="collapsed"
      :items="items"
      mode="vertical"
    />
  </div>
</template>

<style scoped>
.aero-menu {
  max-width: 100%;
  min-width: 0;
}
</style>
`,source:`<script setup lang="ts">
import { AeroMenu, AeroButton, useLocale } from 'aero-vue'
import type { MenuItem } from 'aero-vue'
import { ref, computed, h, type Component } from 'vue'
// 菜单 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// demo 内联 SVG icon（线条 stroke 1.5，形状不敏感）——<component :is> 可消费的 Vue 组件
function makeIcon(paths: string[], opts?: { fill?: boolean }): Component {
  return {
    name: 'MenuDemoIcon',
    render() {
      return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', style: 'width:18px;height:18px;display:block;flex:none' },
        paths.map((d) => h('path', { d, key: d })))
    },
  }
}
// lucide 线条（stroke 1.5 风格，形状不敏感）
const I_OVERVIEW = makeIcon(['M3 12h7M14 12h7M3 6h18M3 18h18'])
const I_DASHBOARD = makeIcon(['M3 3h8v8H3zM13 3h8v5h-8zM13 12h8v9h-8zM3 15h8v6H3z'])
const I_MONITOR = makeIcon(['M3 4h18v12H3zM8 20h8M12 16v4'])
const I_COMPONENT = makeIcon(['M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5'])
const I_FORM = makeIcon(['M4 5h16v4H4zM4 13h10v4H4zM4 17h6M18 15h2v2h-2z'])
const I_DATA = makeIcon(['M6 3v18M6 7h12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6M6 13h12'])
const I_SETTINGS = makeIcon(['M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8 7 17M17 7l2.8-2.8'])
const I_USER = makeIcon(['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0'])

const active = ref('overview')
const collapsed = ref(false)

// 三组结构（概览/组件/设置），每项带 icon；折叠开关 demo 层用库内 Button 控制
const items = computed<MenuItem[]>(() => [
  { key: 'overview', label: t.value['menu.groupOverview'], group: t.value['menu.groupOverview'], icon: I_OVERVIEW },
  { key: 'dashboard', label: t.value['menu.dashboard'], group: t.value['menu.groupOverview'], icon: I_DASHBOARD },
  { key: 'monitor', label: t.value['menu.monitor'], group: t.value['menu.groupOverview'], icon: I_MONITOR },
  { key: 'component', label: t.value['menu.components'], group: t.value['menu.groupComponents'], icon: I_COMPONENT },
  { key: 'form', label: t.value['menu.form'], group: t.value['menu.groupComponents'], icon: I_FORM },
  { key: 'data', label: t.value['menu.data'], group: t.value['menu.groupComponents'], icon: I_DATA },
  { key: 'settings', label: t.value['menu.groupSettings'], group: t.value['menu.groupSettings'], icon: I_SETTINGS },
  { key: 'account', label: t.value['menu.account'], group: t.value['menu.groupSettings'], icon: I_USER },
])
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 18px; min-width: 0; max-width: 100%">
    <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap">
      <AeroButton size="sm" type="outline" @click="collapsed = !collapsed">{{ collapsed ? t['menu.expand'] : t['menu.collapse'] }}</AeroButton>
      <span style="font-size: 12px; color: var(--ui-ink-3); font-family: var(--ui-font-mono)">{{ t['menu.collapseHint'] }}</span>
    </div>
    <AeroMenu
      v-model="active"
      v-model:collapsed="collapsed"
      :items="items"
      mode="vertical"
    />
  </div>
</template>

<style scoped>
.aero-menu {
  max-width: 100%;
  min-width: 0;
}
</style>
`},"message-box":{usage:`<script setup lang="ts">
import { AeroMessageBox, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroToast } from 'aero-vue'
// 确认框文案/toast 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

async function ask() {
  const ok = await AeroMessageBox.confirm({
    title: t.value['messageBox.title'],
    message: t.value['messageBox.message'],
    danger: true,
    confirmText: t.value['messageBox.confirmText'],
  })
  AeroToast[ok ? 'success' : 'info'](ok ? t.value['messageBox.deleted'] : t.value['messageBox.cancelled'])
}
<\/script>

<template>
  <AeroButton type="danger" @click="ask">{{ t['messageBox.triggerBtn'] }}</AeroButton>
</template>
`,source:`<script setup lang="ts">
import { AeroMessageBox, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroToast } from 'aero-vue'
// 确认框文案/toast 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

async function ask() {
  const ok = await AeroMessageBox.confirm({
    title: t.value['messageBox.title'],
    message: t.value['messageBox.message'],
    danger: true,
    confirmText: t.value['messageBox.confirmText'],
  })
  AeroToast[ok ? 'success' : 'info'](ok ? t.value['messageBox.deleted'] : t.value['messageBox.cancelled'])
}
<\/script>

<template>
  <AeroButton type="danger" @click="ask">{{ t['messageBox.triggerBtn'] }}</AeroButton>
</template>
`},"mobile-carousel":{usage:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroMobileCarousel, useLocale, type AeroMobileCarouselSlide } from 'aero-vue'
// 幻灯 zh 样张/chip 原硬编码中文 → 走词包 demo 组（en 英文数据保留）
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const slides = computed<AeroMobileCarouselSlide[]>(() => [
  { en: 'v3.0 STRATOS', zh: t.value['mobileCarousel.zh1'], chip: t.value['mobileCarousel.chip1'], tone: 'a', rings: [{ w: 150, h: 150, top: '-46px', right: '-36px' }, { w: 70, h: 70, bottom: '-18px', left: '-14px' }] },
  { en: 'EDGE · 312', zh: t.value['mobileCarousel.zh2'], chip: t.value['mobileCarousel.chip2'], tone: 'b', rings: [{ w: 120, h: 120, top: '-30px', left: '-30px' }] },
  { en: '11.6s', zh: t.value['mobileCarousel.zh3'], chip: t.value['mobileCarousel.chip3'], tone: 'c', rings: [{ w: 100, h: 100, bottom: '-24px', right: '-20px' }] },
])
<\/script>

<template>
  <AeroMobileCarousel :slides="slides" style="max-width: 330px" />
</template>
`,source:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroMobileCarousel, useLocale, type AeroMobileCarouselSlide } from 'aero-vue'
// 幻灯 zh 样张/chip 原硬编码中文 → 走词包 demo 组（en 英文数据保留）
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const slides = computed<AeroMobileCarouselSlide[]>(() => [
  { en: 'v3.0 STRATOS', zh: t.value['mobileCarousel.zh1'], chip: t.value['mobileCarousel.chip1'], tone: 'a', rings: [{ w: 150, h: 150, top: '-46px', right: '-36px' }, { w: 70, h: 70, bottom: '-18px', left: '-14px' }] },
  { en: 'EDGE · 312', zh: t.value['mobileCarousel.zh2'], chip: t.value['mobileCarousel.chip2'], tone: 'b', rings: [{ w: 120, h: 120, top: '-30px', left: '-30px' }] },
  { en: '11.6s', zh: t.value['mobileCarousel.zh3'], chip: t.value['mobileCarousel.chip3'], tone: 'c', rings: [{ w: 100, h: 100, bottom: '-24px', right: '-20px' }] },
])
<\/script>

<template>
  <AeroMobileCarousel :slides="slides" style="max-width: 330px" />
</template>
`},"mobile-stat-card":{usage:`<script setup lang="ts">
import { AeroMobileStatCard, useLocale } from 'aero-vue'
// 卡片 label 原硬编码中文 → 走词包 demo 组（数值数据保留）
const { demo } = useLocale()
const t = demo

const line = [
  { x: 2, y: 20 }, { x: 18, y: 14 }, { x: 32, y: 17 }, { x: 48, y: 8 },
  { x: 64, y: 12 }, { x: 80, y: 5 }, { x: 98, y: 9 },
]
const bars = [
  { x: 10, y: 12, w: 8, h: 12 }, { x: 30, y: 8, w: 8, h: 16, main: true },
  { x: 50, y: 14, w: 8, h: 10 }, { x: 70, y: 5, w: 8, h: 19, main: true }, { x: 88, y: 10, w: 8, h: 14 },
]
<\/script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 300px">
    <AeroMobileStatCard label="QPS" value="12,480" />
    <AeroMobileStatCard :label="t['mobileStatCard.p95']" value="41ms" />
    <AeroMobileStatCard :label="t['mobileStatCard.online']" value="34" chart="line" :points="line" />
    <AeroMobileStatCard :label="t['mobileStatCard.deploy']" value="218" chart="bar" :bars="bars" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroMobileStatCard, useLocale } from 'aero-vue'
// 卡片 label 原硬编码中文 → 走词包 demo 组（数值数据保留）
const { demo } = useLocale()
const t = demo

const line = [
  { x: 2, y: 20 }, { x: 18, y: 14 }, { x: 32, y: 17 }, { x: 48, y: 8 },
  { x: 64, y: 12 }, { x: 80, y: 5 }, { x: 98, y: 9 },
]
const bars = [
  { x: 10, y: 12, w: 8, h: 12 }, { x: 30, y: 8, w: 8, h: 16, main: true },
  { x: 50, y: 14, w: 8, h: 10 }, { x: 70, y: 5, w: 8, h: 19, main: true }, { x: 88, y: 10, w: 8, h: 14 },
]
<\/script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 300px">
    <AeroMobileStatCard label="QPS" value="12,480" />
    <AeroMobileStatCard :label="t['mobileStatCard.p95']" value="41ms" />
    <AeroMobileStatCard :label="t['mobileStatCard.online']" value="34" chart="line" :points="line" />
    <AeroMobileStatCard :label="t['mobileStatCard.deploy']" value="218" chart="bar" :bars="bars" />
  </div>
</template>
`},"mobile-tab-bar":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroMobileTabBar, useLocale } from 'aero-vue'
// 底部标签 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const act = ref(0)
<\/script>

<template>
  <div style="width: 300px">
    <AeroMobileTabBar
      v-model="act"
      :items="[
        { icon: 'home', label: t['mobileTabBar.home'] },
        { icon: 'rocket', label: t['mobileTabBar.deploy'] },
        { icon: 'activity', label: t['mobileTabBar.monitor'] },
        { icon: 'user', label: t['mobileTabBar.my'] },
      ]"
    />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroMobileTabBar, useLocale } from 'aero-vue'
// 底部标签 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const act = ref(0)
<\/script>

<template>
  <div style="width: 300px">
    <AeroMobileTabBar
      v-model="act"
      :items="[
        { icon: 'home', label: t['mobileTabBar.home'] },
        { icon: 'rocket', label: t['mobileTabBar.deploy'] },
        { icon: 'activity', label: t['mobileTabBar.monitor'] },
        { icon: 'user', label: t['mobileTabBar.my'] },
      ]"
    />
  </div>
</template>
`},"motion-presets":{usage:`<script setup lang="ts">
import { AeroMotionPresets, useLocale } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
import { useMotion } from 'aero-vue'
import type { MotionName } from 'aero-vue'
// 开关 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const names: MotionName[] = ['pulse', 'bounce', 'shake', 'wiggle', 'float', 'spin']
// 全局动效门控：开关联动 html[data-motion]，影响全库循环动画（GPU 断路方案）
const { state, setEnabled } = useMotion()
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <AeroSwitch :model-value="state.enabled" @update:model-value="(v) => setEnabled(v)">{{ t['motionPresets.enableLabel'] }}</AeroSwitch>
    <div style="display: flex; gap: 14px; flex-wrap: wrap">
      <AeroMotionPresets v-for="n in names" :key="n" :name="n" :animated="state.enabled" />
    </div>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroMotionPresets, useLocale } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
import { useMotion } from 'aero-vue'
import type { MotionName } from 'aero-vue'
// 开关 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const names: MotionName[] = ['pulse', 'bounce', 'shake', 'wiggle', 'float', 'spin']
// 全局动效门控：开关联动 html[data-motion]，影响全库循环动画（GPU 断路方案）
const { state, setEnabled } = useMotion()
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <AeroSwitch :model-value="state.enabled" @update:model-value="(v) => setEnabled(v)">{{ t['motionPresets.enableLabel'] }}</AeroSwitch>
    <div style="display: flex; gap: 14px; flex-wrap: wrap">
      <AeroMotionPresets v-for="n in names" :key="n" :name="n" :animated="state.enabled" />
    </div>
  </div>
</template>
`},notification:{usage:`<script setup lang="ts">
import { AeroNotification, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮文字/通知标题正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap">
    <AeroButton size="sm" type="primary" @click="AeroNotification.success(t['notification.successTitle'], t['notification.successBody'])">{{ t['notification.success'] }}</AeroButton>
    <AeroButton size="sm" type="danger" @click="AeroNotification.error(t['notification.errorTitle'], t['notification.errorBody'])">{{ t['notification.error'] }}</AeroButton>
    <AeroButton size="sm" @click="AeroNotification.warn(t['notification.warnTitle'], t['notification.warnBody'])">{{ t['notification.warn'] }}</AeroButton>
    <AeroButton size="sm" type="ghost" @click="AeroNotification.info(t['notification.infoTitle'], t['notification.infoBody'])">{{ t['notification.info'] }}</AeroButton>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroNotification, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮文字/通知标题正文原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap">
    <AeroButton size="sm" type="primary" @click="AeroNotification.success(t['notification.successTitle'], t['notification.successBody'])">{{ t['notification.success'] }}</AeroButton>
    <AeroButton size="sm" type="danger" @click="AeroNotification.error(t['notification.errorTitle'], t['notification.errorBody'])">{{ t['notification.error'] }}</AeroButton>
    <AeroButton size="sm" @click="AeroNotification.warn(t['notification.warnTitle'], t['notification.warnBody'])">{{ t['notification.warn'] }}</AeroButton>
    <AeroButton size="sm" type="ghost" @click="AeroNotification.info(t['notification.infoTitle'], t['notification.infoBody'])">{{ t['notification.info'] }}</AeroButton>
  </div>
</template>
`},otp:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroOTP, AeroToast, useLocale } from 'aero-vue'
// toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const code = ref('')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <AeroOTP v-model="code" @complete="(v) => AeroToast.success(\`\${t['otp.codeLabel']}\${v}\`)" />
    <span style="font-size: 12.5px; color: var(--ui-ink-3); font-family: var(--ui-font-mono)">value = {{ code || '…' }}</span>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroOTP, AeroToast, useLocale } from 'aero-vue'
// toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const code = ref('')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <AeroOTP v-model="code" @complete="(v) => AeroToast.success(\`\${t['otp.codeLabel']}\${v}\`)" />
    <span style="font-size: 12.5px; color: var(--ui-ink-3); font-family: var(--ui-font-mono)">value = {{ code || '…' }}</span>
  </div>
</template>
`},"page-header":{usage:`<script setup lang="ts">
import { AeroPageHeader, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 标题/副标题/按钮原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="max-width: 640px">
    <AeroPageHeader :title="t['pageHeader.title']" :subtitle="t['pageHeader.subtitle']" back @back="() => {}">
      <AeroButton type="outline" size="sm">{{ t['pageHeader.exportBtn'] }}</AeroButton>
    </AeroPageHeader>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroPageHeader, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 标题/副标题/按钮原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="max-width: 640px">
    <AeroPageHeader :title="t['pageHeader.title']" :subtitle="t['pageHeader.subtitle']" back @back="() => {}">
      <AeroButton type="outline" size="sm">{{ t['pageHeader.exportBtn'] }}</AeroButton>
    </AeroPageHeader>
  </div>
</template>
`},pagination:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroPagination, useLocale } from 'aero-vue'
// 页码提示原硬编码中文 → 走词包 demo 组（键+插值）
const { demo } = useLocale()
const t = demo

const page = ref(3)
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 10px; align-items: flex-start">
    <AeroPagination v-model="page" :total="264" />
    <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['pagination.pageOf'] }} {{ page }} {{ t['pagination.pageSuffix'] }}</span>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroPagination, useLocale } from 'aero-vue'
// 页码提示原硬编码中文 → 走词包 demo 组（键+插值）
const { demo } = useLocale()
const t = demo

const page = ref(3)
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 10px; align-items: flex-start">
    <AeroPagination v-model="page" :total="264" />
    <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['pagination.pageOf'] }} {{ page }} {{ t['pagination.pageSuffix'] }}</span>
  </div>
</template>
`},"parallax-box":{usage:`<script setup lang="ts">
import { AeroParallaxBox } from 'aero-vue'
<\/script>

<template>
  <AeroParallaxBox style="flex: 1; min-width: 300px">
    <!-- six floating geometries (brand colors), replicated from the demo -->
    <svg width="34" height="34" viewBox="0 0 34 34">
      <path d="M17 2 20 14 32 17 20 20 17 32 14 20 2 17 14 14Z" :fill="'var(--ui-brand)'" />
    </svg>
    <svg width="26" height="26" viewBox="0 0 26 26">
      <rect x="3" y="3" width="20" height="20" rx="5" fill="none" :stroke="'var(--ui-ink)'" stroke-width="3" />
    </svg>
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="15" fill="none" :stroke="'var(--ui-line-2)'" stroke-width="7" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2v20M2 12h20" :stroke="'var(--ui-brand)'" stroke-width="4.5" stroke-linecap="round" />
    </svg>
    <svg width="22" height="22" viewBox="0 0 22 22">
      <path d="M11 2 21 20H1Z" fill="none" :stroke="'var(--ui-ink)'" stroke-width="3" stroke-linejoin="round" />
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="7" :fill="'var(--ui-brand)'" />
    </svg>
  </AeroParallaxBox>
</template>
`,source:`<script setup lang="ts">
import { AeroParallaxBox } from 'aero-vue'
<\/script>

<template>
  <AeroParallaxBox style="flex: 1; min-width: 300px">
    <!-- six floating geometries (brand colors), replicated from the demo -->
    <svg width="34" height="34" viewBox="0 0 34 34">
      <path d="M17 2 20 14 32 17 20 20 17 32 14 20 2 17 14 14Z" :fill="'var(--ui-brand)'" />
    </svg>
    <svg width="26" height="26" viewBox="0 0 26 26">
      <rect x="3" y="3" width="20" height="20" rx="5" fill="none" :stroke="'var(--ui-ink)'" stroke-width="3" />
    </svg>
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="15" fill="none" :stroke="'var(--ui-line-2)'" stroke-width="7" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2v20M2 12h20" :stroke="'var(--ui-brand)'" stroke-width="4.5" stroke-linecap="round" />
    </svg>
    <svg width="22" height="22" viewBox="0 0 22 22">
      <path d="M11 2 21 20H1Z" fill="none" :stroke="'var(--ui-ink)'" stroke-width="3" stroke-linejoin="round" />
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="7" :fill="'var(--ui-brand)'" />
    </svg>
  </AeroParallaxBox>
</template>
`},"party-fx":{usage:`<script setup lang="ts">
import { AeroButton, useLocale } from 'aero-vue'
import { party } from 'aero-vue'
// 按钮/说明原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
    <AeroButton type="primary" @click="party($event.clientX, $event.clientY)">{{ t['partyFx.btn'] }}</AeroButton>
    <span style="font-size:13px;color:var(--ui-ink-3)">{{ t['partyFx.note'] }}</span>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroButton, useLocale } from 'aero-vue'
import { party } from 'aero-vue'
// 按钮/说明原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
    <AeroButton type="primary" @click="party($event.clientX, $event.clientY)">{{ t['partyFx.btn'] }}</AeroButton>
    <span style="font-size:13px;color:var(--ui-ink-3)">{{ t['partyFx.note'] }}</span>
  </div>
</template>
`},phone:{usage:`<script setup lang="ts">
import { AeroPhone, useLocale } from 'aero-vue'
import { AeroBadge } from 'aero-vue'
import { AeroMobileCarousel, type AeroMobileCarouselSlide } from 'aero-vue'
import { AeroMobileStatCard } from 'aero-vue'
import { AeroMobileTabBar } from 'aero-vue'
import { ref, computed } from 'vue'
// 手机样机文案（标题/统计/徽章/标签栏）原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const act = ref(0)

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const slides = computed<AeroMobileCarouselSlide[]>(() => [
  { en: 'v3.0 STRATOS', zh: t.value['mobileCarousel.zh1'], chip: t.value['mobileCarousel.chip1'], tone: 'a', rings: [{ w: 150, h: 150, top: '-46px', right: '-36px' }, { w: 70, h: 70, bottom: '-18px', left: '-14px' }] },
  { en: 'EDGE · 312', zh: t.value['mobileCarousel.zh2'], chip: t.value['mobileCarousel.chip2'], tone: 'b', rings: [{ w: 120, h: 120, top: '-30px', left: '-30px' }] },
  { en: '11.6s', zh: t.value['mobileCarousel.zh3'], chip: t.value['mobileCarousel.chip3'], tone: 'c', rings: [{ w: 100, h: 100, bottom: '-24px', right: '-20px' }] },
])

const line = [
  { x: 2, y: 20 }, { x: 18, y: 14 }, { x: 32, y: 17 }, { x: 48, y: 8 },
  { x: 64, y: 12 }, { x: 80, y: 5 }, { x: 98, y: 9 },
]
const bars = [
  { x: 10, y: 12, w: 8, h: 12 }, { x: 30, y: 8, w: 8, h: 16, main: true },
  { x: 50, y: 14, w: 8, h: 10 }, { x: 70, y: 5, w: 8, h: 19, main: true }, { x: 88, y: 10, w: 8, h: 14 },
]
<\/script>

<template>
  <!-- 外层 flex wrapper 为 .pg-stage 的 flex item——min-width:auto=壳定宽 330px，
 窄宿主（390 视口卡内容宽 312）下 min-width:auto 阻止 max-width:100% 收缩，
 壳(330)+12px shadow 越出 demo 卡右缘约 10px。加 min-width:0 允许该 flex item
 收缩到「宿主宽 − 左右留白」，壳 max-width:100% 才生效。桌面宿主充足时取 330 定宽，
 像素不变；不动 L1 的 .aero-mcar min-width:0，不用 overflow:hidden 掩盖。 -->
  <div style="display: flex; gap: 46px; justify-content: center; flex-wrap: wrap; min-width: 0">
    <AeroPhone :title="t['phone.title']" :subtitle="t['phone.subtitle']">
      <AeroMobileCarousel :slides="slides" />
      <div class="p-stats">
        <AeroMobileStatCard label="QPS" value="12,480" />
        <AeroMobileStatCard :label="t['phone.p95']" value="41ms" />
        <AeroMobileStatCard :label="t['phone.online']" value="34" chart="line" :points="line" />
        <AeroMobileStatCard :label="t['phone.deploy']" value="218" chart="bar" :bars="bars" />
      </div>
      <div style="padding: 0 4px 4px; display: flex; align-items: center; gap: 8px">
        <AeroBadge type="ok" :dot="true">{{ t['phone.allOk'] }}</AeroBadge>
      </div>
      <AeroMobileTabBar v-model="act" :items="[
        { icon: 'home', label: t['phone.home'] },
        { icon: 'rocket', label: t['phone.deployTab'] },
        { icon: 'activity', label: t['phone.monitorTab'] },
        { icon: 'user', label: t['phone.myTab'] },
      ]" />
    </AeroPhone>
  </div>
</template>

<style scoped>
.p-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 14px 16px 6px;
}
</style>
`,source:`<script setup lang="ts">
import { AeroPhone, useLocale } from 'aero-vue'
import { AeroBadge } from 'aero-vue'
import { AeroMobileCarousel, type AeroMobileCarouselSlide } from 'aero-vue'
import { AeroMobileStatCard } from 'aero-vue'
import { AeroMobileTabBar } from 'aero-vue'
import { ref, computed } from 'vue'
// 手机样机文案（标题/统计/徽章/标签栏）原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const act = ref(0)

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const slides = computed<AeroMobileCarouselSlide[]>(() => [
  { en: 'v3.0 STRATOS', zh: t.value['mobileCarousel.zh1'], chip: t.value['mobileCarousel.chip1'], tone: 'a', rings: [{ w: 150, h: 150, top: '-46px', right: '-36px' }, { w: 70, h: 70, bottom: '-18px', left: '-14px' }] },
  { en: 'EDGE · 312', zh: t.value['mobileCarousel.zh2'], chip: t.value['mobileCarousel.chip2'], tone: 'b', rings: [{ w: 120, h: 120, top: '-30px', left: '-30px' }] },
  { en: '11.6s', zh: t.value['mobileCarousel.zh3'], chip: t.value['mobileCarousel.chip3'], tone: 'c', rings: [{ w: 100, h: 100, bottom: '-24px', right: '-20px' }] },
])

const line = [
  { x: 2, y: 20 }, { x: 18, y: 14 }, { x: 32, y: 17 }, { x: 48, y: 8 },
  { x: 64, y: 12 }, { x: 80, y: 5 }, { x: 98, y: 9 },
]
const bars = [
  { x: 10, y: 12, w: 8, h: 12 }, { x: 30, y: 8, w: 8, h: 16, main: true },
  { x: 50, y: 14, w: 8, h: 10 }, { x: 70, y: 5, w: 8, h: 19, main: true }, { x: 88, y: 10, w: 8, h: 14 },
]
<\/script>

<template>
  <!-- 外层 flex wrapper 为 .pg-stage 的 flex item——min-width:auto=壳定宽 330px，
 窄宿主（390 视口卡内容宽 312）下 min-width:auto 阻止 max-width:100% 收缩，
 壳(330)+12px shadow 越出 demo 卡右缘约 10px。加 min-width:0 允许该 flex item
 收缩到「宿主宽 − 左右留白」，壳 max-width:100% 才生效。桌面宿主充足时取 330 定宽，
 像素不变；不动 L1 的 .aero-mcar min-width:0，不用 overflow:hidden 掩盖。 -->
  <div style="display: flex; gap: 46px; justify-content: center; flex-wrap: wrap; min-width: 0">
    <AeroPhone :title="t['phone.title']" :subtitle="t['phone.subtitle']">
      <AeroMobileCarousel :slides="slides" />
      <div class="p-stats">
        <AeroMobileStatCard label="QPS" value="12,480" />
        <AeroMobileStatCard :label="t['phone.p95']" value="41ms" />
        <AeroMobileStatCard :label="t['phone.online']" value="34" chart="line" :points="line" />
        <AeroMobileStatCard :label="t['phone.deploy']" value="218" chart="bar" :bars="bars" />
      </div>
      <div style="padding: 0 4px 4px; display: flex; align-items: center; gap: 8px">
        <AeroBadge type="ok" :dot="true">{{ t['phone.allOk'] }}</AeroBadge>
      </div>
      <AeroMobileTabBar v-model="act" :items="[
        { icon: 'home', label: t['phone.home'] },
        { icon: 'rocket', label: t['phone.deployTab'] },
        { icon: 'activity', label: t['phone.monitorTab'] },
        { icon: 'user', label: t['phone.myTab'] },
      ]" />
    </AeroPhone>
  </div>
</template>

<style scoped>
.p-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 14px 16px 6px;
}
</style>
`},popconfirm:{usage:`<script setup lang="ts">
import { AeroPopconfirm, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroToast } from 'aero-vue'
// 确认框标题/按钮/toast 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 16px">
    <AeroPopconfirm :title="t['popconfirm.publishTitle']" @confirm="AeroToast.success(t['popconfirm.published'])">
      <AeroButton type="primary" size="sm">{{ t['popconfirm.publishBtn'] }}</AeroButton>
    </AeroPopconfirm>
    <AeroPopconfirm :title="t['popconfirm.deleteTitle']" danger :confirm-text="t['popconfirm.deleteBtn']" @confirm="AeroToast.error(t['popconfirm.deleted'])">
      <AeroButton type="danger" size="sm">{{ t['popconfirm.deleteBtn'] }}</AeroButton>
    </AeroPopconfirm>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroPopconfirm, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroToast } from 'aero-vue'
// 确认框标题/按钮/toast 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 16px">
    <AeroPopconfirm :title="t['popconfirm.publishTitle']" @confirm="AeroToast.success(t['popconfirm.published'])">
      <AeroButton type="primary" size="sm">{{ t['popconfirm.publishBtn'] }}</AeroButton>
    </AeroPopconfirm>
    <AeroPopconfirm :title="t['popconfirm.deleteTitle']" danger :confirm-text="t['popconfirm.deleteBtn']" @confirm="AeroToast.error(t['popconfirm.deleted'])">
      <AeroButton type="danger" size="sm">{{ t['popconfirm.deleteBtn'] }}</AeroButton>
    </AeroPopconfirm>
  </div>
</template>
`},popover:{usage:`<script setup lang="ts">
import { AeroPopover, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 浮层标题/按钮/内容原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 18px; padding: 30px 0">
    <AeroPopover :title="t['popover.hoverTitle']" trigger="hover">
      <AeroButton type="outline" size="sm">{{ t['popover.hoverBtn'] }}</AeroButton>
      <template #content>{{ t['popover.hoverBody'] }}</template>
    </AeroPopover>
    <AeroPopover :title="t['popover.clickTitle']" trigger="click" placement="right">
      <AeroButton type="ghost" size="sm">{{ t['popover.clickBtn'] }}</AeroButton>
      <template #content>{{ t['popover.clickBody'] }}</template>
    </AeroPopover>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroPopover, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 浮层标题/按钮/内容原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 18px; padding: 30px 0">
    <AeroPopover :title="t['popover.hoverTitle']" trigger="hover">
      <AeroButton type="outline" size="sm">{{ t['popover.hoverBtn'] }}</AeroButton>
      <template #content>{{ t['popover.hoverBody'] }}</template>
    </AeroPopover>
    <AeroPopover :title="t['popover.clickTitle']" trigger="click" placement="right">
      <AeroButton type="ghost" size="sm">{{ t['popover.clickBtn'] }}</AeroButton>
      <template #content>{{ t['popover.clickBody'] }}</template>
    </AeroPopover>
  </div>
</template>
`},progress:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroProgress } from 'aero-vue'
import { AeroSlider } from 'aero-vue'

const p = ref(66)
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px; width: 320px">
    <AeroProgress :percent="p" />
    <AeroProgress :percent="100" status="success" :shimmer="false" />
    <AeroProgress :percent="32" status="error" :shimmer="false" />
    <!-- 控制滑块统一用项目 Slider 组件（替代原生 input[type=range]） -->
    <AeroSlider v-model="p" :min="0" :max="100" :show-scale="false" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroProgress } from 'aero-vue'
import { AeroSlider } from 'aero-vue'

const p = ref(66)
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px; width: 320px">
    <AeroProgress :percent="p" />
    <AeroProgress :percent="100" status="success" :shimmer="false" />
    <AeroProgress :percent="32" status="error" :shimmer="false" />
    <!-- 控制滑块统一用项目 Slider 组件（替代原生 input[type=range]） -->
    <AeroSlider v-model="p" :min="0" :max="100" :show-scale="false" />
  </div>
</template>
`},"pull-to-refresh":{usage:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroPullToRefresh, AeroToast, useLocale } from 'aero-vue'
import type { AeroPtrItem } from 'aero-vue'
// 列表条目/toast 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed<AeroPtrItem[]>(() => [
  { icon: 'rocket', title: t.value['pullToRefresh.item1'], desc: t.value['pullToRefresh.item1Desc'], time: '2m' },
  { icon: 'git-branch', title: t.value['pullToRefresh.item2'], desc: t.value['pullToRefresh.item2Desc'], time: '18m' },
  { icon: 'trending-up', title: t.value['pullToRefresh.item3'], desc: t.value['pullToRefresh.item3Desc'], time: '1h' },
  { icon: 'rotate-ccw', title: t.value['pullToRefresh.item4'], desc: '3d20af1 → 91bc0e7', time: '3h' },
  { icon: 'key-round', title: t.value['pullToRefresh.item5'], desc: t.value['pullToRefresh.item5Desc'], time: '5h' },
])
<\/script>

<template>
  <AeroPullToRefresh :items="items" :width="280" :height="200" @refresh="AeroToast.success(t['pullToRefresh.done'])" />
</template>
`,source:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroPullToRefresh, AeroToast, useLocale } from 'aero-vue'
import type { AeroPtrItem } from 'aero-vue'
// 列表条目/toast 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed<AeroPtrItem[]>(() => [
  { icon: 'rocket', title: t.value['pullToRefresh.item1'], desc: t.value['pullToRefresh.item1Desc'], time: '2m' },
  { icon: 'git-branch', title: t.value['pullToRefresh.item2'], desc: t.value['pullToRefresh.item2Desc'], time: '18m' },
  { icon: 'trending-up', title: t.value['pullToRefresh.item3'], desc: t.value['pullToRefresh.item3Desc'], time: '1h' },
  { icon: 'rotate-ccw', title: t.value['pullToRefresh.item4'], desc: '3d20af1 → 91bc0e7', time: '3h' },
  { icon: 'key-round', title: t.value['pullToRefresh.item5'], desc: t.value['pullToRefresh.item5Desc'], time: '5h' },
])
<\/script>

<template>
  <AeroPullToRefresh :items="items" :width="280" :height="200" @refresh="AeroToast.success(t['pullToRefresh.done'])" />
</template>
`},qrcode:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroQRCode, useLocale } from 'aero-vue'
import { AeroSlider } from 'aero-vue'
import { AeroInput } from 'aero-vue'
import { AeroColorPicker } from 'aero-vue'
import { AeroTypography } from 'aero-vue'
// 标签/说明/placeholder 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const text = ref('https://github.com/FanXingYiDianYun/aero-vue')
const size = ref(160)
/** QR 前景色（dogfood：AeroColorPicker 选色；传 '' 时组件取 var(--ui-ink) 计算值） */
const color = ref('')
<\/script>

<template>
  <div class="qr-demo">
    <!-- 左列：固定方形预览容器（280x280）+ 居中 QR，几何位置不随 QR 尺寸变化 -->
    <div class="qr-demo__left">
      <div class="qr-demo__box">
        <AeroQRCode :value="text" :size="size" :fg="color" :key="text + color" />
      </div>
      <p class="qr-demo__cap">{{ t['qrcode.caption'] }}</p>
    </div>
    <!-- 右列：滑块独立成行，不随 QR 缩放容器位移 -->
    <div class="qr-demo__ctrls">
      <AeroTypography level="caption">{{ t['qrcode.contentLabel'] }}</AeroTypography>
      <AeroInput v-model="text" :placeholder="t['qrcode.inputPlaceholder']" :width="'100%'" />
      <AeroTypography level="caption">{{ t['qrcode.sizeLabel'] }} {{ size }}px</AeroTypography>
      <!-- 控制滑块统一用项目 Slider 组件 -->
      <AeroSlider v-model="size" :min="96" :max="280" :step="8" :show-scale="false" class="qr-demo__slider" />
      <AeroTypography level="caption">{{ t['qrcode.fgLabel'] }}</AeroTypography>
      <AeroColorPicker v-model="color" class="qr-demo__picker" />
      <p class="qr-demo__meta">{{ t['qrcode.meta'] }} {{ text.length }} {{ t['qrcode.chars'] }}</p>
    </div>
  </div>
</template>

<style scoped>
.qr-demo { display: flex; gap: 26px; align-items: flex-start; flex-wrap: wrap; }
.qr-demo__left { display: flex; flex-direction: column; align-items: center; gap: 8px; }
/* 固定 280x280 方形容器，QR 居中；滑块几何位置在任何 QR 尺寸下恒定 */
.qr-demo__box {
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid var(--ui-line);
  border-radius: 14px;
  background: var(--ui-card);
  box-shadow: 5px 5px 0 var(--ui-bg-tint);
}
.qr-demo__cap { font-size: 12.5px; color: var(--ui-ink-3); }
.qr-demo__ctrls { display: flex; flex-direction: column; gap: 8px; min-width: 240px; flex: 1; }
.qr-demo__slider { width: 100%; }
.qr-demo__picker { width: 100%; }
.qr-demo__meta { font-size: 12px; color: var(--ui-ink-3); font-family: var(--ui-font-mono); }
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroQRCode, useLocale } from 'aero-vue'
import { AeroSlider } from 'aero-vue'
import { AeroInput } from 'aero-vue'
import { AeroColorPicker } from 'aero-vue'
import { AeroTypography } from 'aero-vue'
// 标签/说明/placeholder 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const text = ref('https://github.com/FanXingYiDianYun/aero-vue')
const size = ref(160)
/** QR 前景色（dogfood：AeroColorPicker 选色；传 '' 时组件取 var(--ui-ink) 计算值） */
const color = ref('')
<\/script>

<template>
  <div class="qr-demo">
    <!-- 左列：固定方形预览容器（280x280）+ 居中 QR，几何位置不随 QR 尺寸变化 -->
    <div class="qr-demo__left">
      <div class="qr-demo__box">
        <AeroQRCode :value="text" :size="size" :fg="color" :key="text + color" />
      </div>
      <p class="qr-demo__cap">{{ t['qrcode.caption'] }}</p>
    </div>
    <!-- 右列：滑块独立成行，不随 QR 缩放容器位移 -->
    <div class="qr-demo__ctrls">
      <AeroTypography level="caption">{{ t['qrcode.contentLabel'] }}</AeroTypography>
      <AeroInput v-model="text" :placeholder="t['qrcode.inputPlaceholder']" :width="'100%'" />
      <AeroTypography level="caption">{{ t['qrcode.sizeLabel'] }} {{ size }}px</AeroTypography>
      <!-- 控制滑块统一用项目 Slider 组件 -->
      <AeroSlider v-model="size" :min="96" :max="280" :step="8" :show-scale="false" class="qr-demo__slider" />
      <AeroTypography level="caption">{{ t['qrcode.fgLabel'] }}</AeroTypography>
      <AeroColorPicker v-model="color" class="qr-demo__picker" />
      <p class="qr-demo__meta">{{ t['qrcode.meta'] }} {{ text.length }} {{ t['qrcode.chars'] }}</p>
    </div>
  </div>
</template>

<style scoped>
.qr-demo { display: flex; gap: 26px; align-items: flex-start; flex-wrap: wrap; }
.qr-demo__left { display: flex; flex-direction: column; align-items: center; gap: 8px; }
/* 固定 280x280 方形容器，QR 居中；滑块几何位置在任何 QR 尺寸下恒定 */
.qr-demo__box {
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid var(--ui-line);
  border-radius: 14px;
  background: var(--ui-card);
  box-shadow: 5px 5px 0 var(--ui-bg-tint);
}
.qr-demo__cap { font-size: 12.5px; color: var(--ui-ink-3); }
.qr-demo__ctrls { display: flex; flex-direction: column; gap: 8px; min-width: 240px; flex: 1; }
.qr-demo__slider { width: 100%; }
.qr-demo__picker { width: 100%; }
.qr-demo__meta { font-size: 12px; color: var(--ui-ink-3); font-family: var(--ui-font-mono); }
</style>
`},radio:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroRadio } from 'aero-vue'
import { AeroRadioGroup } from 'aero-vue'

const v = ref('vue')
<\/script>

<template>
  <AeroRadioGroup v-model="v">
    <AeroRadio value="vue">Vue</AeroRadio>
    <AeroRadio value="react">React</AeroRadio>
    <AeroRadio value="svelte">Svelte</AeroRadio>
    <AeroRadio value="solid" disabled>Solid</AeroRadio>
  </AeroRadioGroup>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroRadio } from 'aero-vue'
import { AeroRadioGroup } from 'aero-vue'

const v = ref('vue')
<\/script>

<template>
  <AeroRadioGroup v-model="v">
    <AeroRadio value="vue">Vue</AeroRadio>
    <AeroRadio value="react">React</AeroRadio>
    <AeroRadio value="svelte">Svelte</AeroRadio>
    <AeroRadio value="solid" disabled>Solid</AeroRadio>
  </AeroRadioGroup>
</template>
`},"radio-group":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroRadioGroup, useLocale } from 'aero-vue'
import { AeroRadio } from 'aero-vue'
// 选项文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref('a')
<\/script>

<template>
  <AeroRadioGroup v-model="v">
    <AeroRadio value="a">{{ t['radioGroup.optA'] }}</AeroRadio>
    <AeroRadio value="b">{{ t['radioGroup.optB'] }}</AeroRadio>
    <AeroRadio value="c">{{ t['radioGroup.optC'] }}</AeroRadio>
  </AeroRadioGroup>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroRadioGroup, useLocale } from 'aero-vue'
import { AeroRadio } from 'aero-vue'
// 选项文字原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref('a')
<\/script>

<template>
  <AeroRadioGroup v-model="v">
    <AeroRadio value="a">{{ t['radioGroup.optA'] }}</AeroRadio>
    <AeroRadio value="b">{{ t['radioGroup.optB'] }}</AeroRadio>
    <AeroRadio value="c">{{ t['radioGroup.optC'] }}</AeroRadio>
  </AeroRadioGroup>
</template>
`},rate:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroRate, AeroSwitch, useLocale } from 'aero-vue'
// 评分标签原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref(3)
// 小数评级开关——词包 rate.*（useLocale demo 组 zh/en 同源）
const decimal = ref(false)
// 允许重选开关——allowReselect=false（默认）首评后锁定，true 可反复改
const allowReselect = ref(false)
const display = computed(() => (decimal.value ? v.value.toFixed(1) : String(v.value)))
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex-wrap: wrap">
      <AeroSwitch v-model="decimal" :aria-label="t['rate.decimalToggle']" />
      <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['rate.decimalToggle'] }}</span>
      <AeroSwitch v-model="allowReselect" :aria-label="t['rate.allowReselect']" />
      <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['rate.allowReselect'] }}</span>
    </div>
    <AeroRate v-model="v" :allow-decimal="decimal" :allow-reselect="allowReselect" />
    <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['rate.current'] }}{{ display }}</span>
    <span style="font-size: 12px; color: var(--ui-ink-3); min-width: 0">{{ t['rate.decimalHint'] }}</span>
    <AeroRate :model-value="4" disabled />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroRate, AeroSwitch, useLocale } from 'aero-vue'
// 评分标签原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const v = ref(3)
// 小数评级开关——词包 rate.*（useLocale demo 组 zh/en 同源）
const decimal = ref(false)
// 允许重选开关——allowReselect=false（默认）首评后锁定，true 可反复改
const allowReselect = ref(false)
const display = computed(() => (decimal.value ? v.value.toFixed(1) : String(v.value)))
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex-wrap: wrap">
      <AeroSwitch v-model="decimal" :aria-label="t['rate.decimalToggle']" />
      <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['rate.decimalToggle'] }}</span>
      <AeroSwitch v-model="allowReselect" :aria-label="t['rate.allowReselect']" />
      <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['rate.allowReselect'] }}</span>
    </div>
    <AeroRate v-model="v" :allow-decimal="decimal" :allow-reselect="allowReselect" />
    <span style="font-size: 12.5px; color: var(--ui-ink-3)">{{ t['rate.current'] }}{{ display }}</span>
    <span style="font-size: 12px; color: var(--ui-ink-3); min-width: 0">{{ t['rate.decimalHint'] }}</span>
    <AeroRate :model-value="4" disabled />
  </div>
</template>
`},result:{usage:`<script setup lang="ts">
import { AeroResult, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 结果页文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; width: 100%">
    <AeroResult status="success" :title="t['result.paySuccess']" :desc="t['result.paySuccessDesc']" style="flex: 1; min-width: 260px">
      <AeroButton type="primary" size="sm">{{ t['result.viewOrder'] }}</AeroButton>
    </AeroResult>
    <AeroResult status="error" :title="t['result.payFail']" :desc="t['result.payFailDesc']" style="flex: 1; min-width: 260px">
      <AeroButton type="outline" size="sm">{{ t['result.retry'] }}</AeroButton>
    </AeroResult>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroResult, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 结果页文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; width: 100%">
    <AeroResult status="success" :title="t['result.paySuccess']" :desc="t['result.paySuccessDesc']" style="flex: 1; min-width: 260px">
      <AeroButton type="primary" size="sm">{{ t['result.viewOrder'] }}</AeroButton>
    </AeroResult>
    <AeroResult status="error" :title="t['result.payFail']" :desc="t['result.payFailDesc']" style="flex: 1; min-width: 260px">
      <AeroButton type="outline" size="sm">{{ t['result.retry'] }}</AeroButton>
    </AeroResult>
  </div>
</template>
`},"ring-progress":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroRingProgress } from 'aero-vue'
import { AeroSlider } from 'aero-vue'

const p = ref(72)
<\/script>

<template>
  <div style="display: flex; gap: 20px; align-items: center">
    <AeroRingProgress :percent="p" sublabel="CPU LOAD" />
    <!-- 控制滑块统一用项目 Slider 组件（替代原生 input[type=range]） -->
    <AeroSlider v-model="p" :min="0" :max="100" :show-scale="false" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroRingProgress } from 'aero-vue'
import { AeroSlider } from 'aero-vue'

const p = ref(72)
<\/script>

<template>
  <div style="display: flex; gap: 20px; align-items: center">
    <AeroRingProgress :percent="p" sublabel="CPU LOAD" />
    <!-- 控制滑块统一用项目 Slider 组件（替代原生 input[type=range]） -->
    <AeroSlider v-model="p" :min="0" :max="100" :show-scale="false" />
  </div>
</template>
`},scrollbar:{usage:`<script setup lang="ts">
import { AeroScrollbar, useLocale } from 'aero-vue'
// 列表条目文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroScrollbar :max-height="180" style="max-width: 320px">
    <p v-for="i in 12" :key="i" style="padding: 10px 14px; color: var(--ui-ink-2); font-size: 13.5px; border-bottom: 2px dashed var(--ui-line); margin: 0">
      {{ t['scrollbar.item'] }} {{ i }} {{ t['scrollbar.itemNote'] }}
    </p>
  </AeroScrollbar>
</template>
`,source:`<script setup lang="ts">
import { AeroScrollbar, useLocale } from 'aero-vue'
// 列表条目文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroScrollbar :max-height="180" style="max-width: 320px">
    <p v-for="i in 12" :key="i" style="padding: 10px 14px; color: var(--ui-ink-2); font-size: 13.5px; border-bottom: 2px dashed var(--ui-line); margin: 0">
      {{ t['scrollbar.item'] }} {{ i }} {{ t['scrollbar.itemNote'] }}
    </p>
  </AeroScrollbar>
</template>
`},search:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroSearch, useLocale, type AeroSearchOption } from 'aero-vue'
// 选项 label/placeholder/已选文案原硬编码中文 → 走词包 demo 组（description 英文分组保留）
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
// group = 分类组标题（走词包 optGroup* 键，与 description 功能描述解耦；组值映射 = 侧栏三组
// 表单 / 数据展示 / 导航，description 不再兼作组键，防「描述当标题 / 描述两次」）
const g = (k: 'Form' | 'DataDisplay' | 'Navigation') => t.value[\`search.optGroup\${k}\`]
const options = computed<AeroSearchOption[]>(() => [
  { value: 'button', label: t.value['search.optButton'], description: t.value['search.optButtonDesc'], group: g('Form') },
  { value: 'form', label: t.value['search.optForm'], description: t.value['search.optFormDesc'], group: g('Form') },
  { value: 'table', label: t.value['search.optTable'], description: t.value['search.optTableDesc'], group: g('DataDisplay') },
  { value: 'tree', label: t.value['search.optTree'], description: t.value['search.optTreeDesc'], group: g('DataDisplay') },
  { value: 'avatar', label: t.value['search.optAvatar'], description: t.value['search.optAvatarDesc'], group: g('DataDisplay') },
  { value: 'image-viewer', label: t.value['search.optImageViewer'], description: t.value['search.optImageViewerDesc'], group: g('DataDisplay') },
  { value: 'carousel', label: t.value['search.optCarousel'], description: t.value['search.optCarouselDesc'], group: g('DataDisplay') },
  { value: 'affix', label: t.value['search.optAffix'], description: t.value['search.optAffixDesc'], group: g('Navigation') },
  { value: 'anchor', label: t.value['search.optAnchor'], description: t.value['search.optAnchorDesc'], group: g('Navigation') },
  { value: 'collapse', label: t.value['search.optCollapse'], description: t.value['search.optCollapseDesc'], group: g('Navigation') },
])

const picked = ref('')
// 只存选中的 option 键（locale 无关），展示文案渲染期经 options computed 求值——
// 交互写回串（\`\${o.label}（…）\` 烤进 ref）已废除，切语言后已选条目同步翻转
const pickedText = computed(() => {
  const o = options.value.find((x) => String(x.value) === picked.value)
  return o ? \`\${o.label}（\${o.description}）\` : ''
})
function onPick(o: AeroSearchOption) {
  picked.value = String(o.value)
}
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 14px; max-width: 360px">
    <AeroSearch :options="options" :placeholder="t['search.placeholder']" group-by="group" @select="onPick" />
    <p style="font-size: 12.5px; color: var(--ui-ink-3); margin: 0">{{ t['search.hint'] }}</p>
    <p style="font-size: 13px; color: var(--ui-ink-3); margin: 0">
      {{ t['search.selected'] }}{{ pickedText || t['search.none'] }}
    </p>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroSearch, useLocale, type AeroSearchOption } from 'aero-vue'
// 选项 label/placeholder/已选文案原硬编码中文 → 走词包 demo 组（description 英文分组保留）
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
// group = 分类组标题（走词包 optGroup* 键，与 description 功能描述解耦；组值映射 = 侧栏三组
// 表单 / 数据展示 / 导航，description 不再兼作组键，防「描述当标题 / 描述两次」）
const g = (k: 'Form' | 'DataDisplay' | 'Navigation') => t.value[\`search.optGroup\${k}\`]
const options = computed<AeroSearchOption[]>(() => [
  { value: 'button', label: t.value['search.optButton'], description: t.value['search.optButtonDesc'], group: g('Form') },
  { value: 'form', label: t.value['search.optForm'], description: t.value['search.optFormDesc'], group: g('Form') },
  { value: 'table', label: t.value['search.optTable'], description: t.value['search.optTableDesc'], group: g('DataDisplay') },
  { value: 'tree', label: t.value['search.optTree'], description: t.value['search.optTreeDesc'], group: g('DataDisplay') },
  { value: 'avatar', label: t.value['search.optAvatar'], description: t.value['search.optAvatarDesc'], group: g('DataDisplay') },
  { value: 'image-viewer', label: t.value['search.optImageViewer'], description: t.value['search.optImageViewerDesc'], group: g('DataDisplay') },
  { value: 'carousel', label: t.value['search.optCarousel'], description: t.value['search.optCarouselDesc'], group: g('DataDisplay') },
  { value: 'affix', label: t.value['search.optAffix'], description: t.value['search.optAffixDesc'], group: g('Navigation') },
  { value: 'anchor', label: t.value['search.optAnchor'], description: t.value['search.optAnchorDesc'], group: g('Navigation') },
  { value: 'collapse', label: t.value['search.optCollapse'], description: t.value['search.optCollapseDesc'], group: g('Navigation') },
])

const picked = ref('')
// 只存选中的 option 键（locale 无关），展示文案渲染期经 options computed 求值——
// 交互写回串（\`\${o.label}（…）\` 烤进 ref）已废除，切语言后已选条目同步翻转
const pickedText = computed(() => {
  const o = options.value.find((x) => String(x.value) === picked.value)
  return o ? \`\${o.label}（\${o.description}）\` : ''
})
function onPick(o: AeroSearchOption) {
  picked.value = String(o.value)
}
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 14px; max-width: 360px">
    <AeroSearch :options="options" :placeholder="t['search.placeholder']" group-by="group" @select="onPick" />
    <p style="font-size: 12.5px; color: var(--ui-ink-3); margin: 0">{{ t['search.hint'] }}</p>
    <p style="font-size: 13px; color: var(--ui-ink-3); margin: 0">
      {{ t['search.selected'] }}{{ pickedText || t['search.none'] }}
    </p>
  </div>
</template>
`},segmented:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroSegmented, useLocale } from 'aero-vue'
// 分段选项/说明文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const m = ref('month')
const view = ref('list')

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const views = computed<Record<string, string>>(() => ({
  list: t.value['segmented.listDesc'],
  grid: t.value['segmented.gridDesc'],
  kanban: t.value['segmented.kanbanDesc'],
}))
<\/script>

<template>
  <div class="seg-demo">
    <div class="seg-demo__row">
      <AeroSegmented
        v-model="m"
        :options="[
          { label: t['segmented.monthly'], value: 'month' },
          { label: t['segmented.yearly'], value: 'year' },
        ]"
      />
      <span class="seg-demo__hint">{{ t['segmented.billing'] }}{{ m === 'month' ? t['segmented.monthly'] : t['segmented.yearly'] }}</span>
    </div>
    <div class="seg-demo__row">
      <AeroSegmented
        v-model="view"
        :options="[
          { label: t['segmented.list'], value: 'list' },
          { label: t['segmented.grid'], value: 'grid' },
          { label: t['segmented.kanban'], value: 'kanban' },
        ]"
      />
      <span class="seg-demo__hint">{{ t['segmented.viewLabel'] }}{{ view }}</span>
    </div>
    <div class="seg-demo__panel">{{ views[view] }}</div>  </div>
</template>

<style scoped>
.seg-demo { display: flex; flex-direction: column; gap: 14px; }
.seg-demo__row { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
.seg-demo__hint { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
.seg-demo__panel {
  padding: 14px 16px;
  border: 2px dashed var(--ui-line-2);
  border-radius: 12px;
  font-size: 13.5px;
  color: var(--ui-ink-2);
  background: var(--ui-bg-soft);
  animation: seg-pop .3s var(--ui-spring);
}
@keyframes seg-pop { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
</style>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroSegmented, useLocale } from 'aero-vue'
// 分段选项/说明文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const m = ref('month')
const view = ref('list')

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const views = computed<Record<string, string>>(() => ({
  list: t.value['segmented.listDesc'],
  grid: t.value['segmented.gridDesc'],
  kanban: t.value['segmented.kanbanDesc'],
}))
<\/script>

<template>
  <div class="seg-demo">
    <div class="seg-demo__row">
      <AeroSegmented
        v-model="m"
        :options="[
          { label: t['segmented.monthly'], value: 'month' },
          { label: t['segmented.yearly'], value: 'year' },
        ]"
      />
      <span class="seg-demo__hint">{{ t['segmented.billing'] }}{{ m === 'month' ? t['segmented.monthly'] : t['segmented.yearly'] }}</span>
    </div>
    <div class="seg-demo__row">
      <AeroSegmented
        v-model="view"
        :options="[
          { label: t['segmented.list'], value: 'list' },
          { label: t['segmented.grid'], value: 'grid' },
          { label: t['segmented.kanban'], value: 'kanban' },
        ]"
      />
      <span class="seg-demo__hint">{{ t['segmented.viewLabel'] }}{{ view }}</span>
    </div>
    <div class="seg-demo__panel">{{ views[view] }}</div>  </div>
</template>

<style scoped>
.seg-demo { display: flex; flex-direction: column; gap: 14px; }
.seg-demo__row { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
.seg-demo__hint { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
.seg-demo__panel {
  padding: 14px 16px;
  border: 2px dashed var(--ui-line-2);
  border-radius: 12px;
  font-size: 13.5px;
  color: var(--ui-ink-2);
  background: var(--ui-bg-soft);
  animation: seg-pop .3s var(--ui-spring);
}
@keyframes seg-pop { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
</style>
`},select:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSelect, useLocale } from 'aero-vue'
// placeholder/当前值原硬编码中文 → 走词包 demo 组（框架 options 为数据，保留）
const { demo } = useLocale()
const t = demo

const v = ref<string | undefined>('vue')
const opts = [
  { label: 'Vue 3', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
<\/script>

<template>
  <div style="max-width: 260px">
    <AeroSelect v-model="v" :options="opts" :placeholder="t['select.placeholder']" clearable />
    <p style="margin-top: 10px; font-size: 12.5px; color: var(--ui-ink-3)">{{ t['select.current'] }}{{ v ?? t['select.none'] }}</p>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSelect, useLocale } from 'aero-vue'
// placeholder/当前值原硬编码中文 → 走词包 demo 组（框架 options 为数据，保留）
const { demo } = useLocale()
const t = demo

const v = ref<string | undefined>('vue')
const opts = [
  { label: 'Vue 3', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
<\/script>

<template>
  <div style="max-width: 260px">
    <AeroSelect v-model="v" :options="opts" :placeholder="t['select.placeholder']" clearable />
    <p style="margin-top: 10px; font-size: 12.5px; color: var(--ui-ink-3)">{{ t['select.current'] }}{{ v ?? t['select.none'] }}</p>
  </div>
</template>
`},skeleton:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSkeleton, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 样张文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const loading = ref(true)
<\/script>

<template>
  <div class="sk-demo">
    <!-- article skeleton: circle avatar + title lines + three char placeholders (last 60%) -->
    <div v-if="loading" class="sk-demo__card">
      <div class="sk-demo__head">
        <AeroSkeleton variant="circle" :height="44" :width="44" />
        <div class="sk-demo__head-lines">
          <AeroSkeleton :height="15" width="45%" />
          <AeroSkeleton :height="11" width="30%" />
        </div>
      </div>
      <AeroSkeleton :height="17" width="70%" style="margin-top: 4px" />
      <AeroSkeleton :height="12" />
      <AeroSkeleton :height="12" />
      <AeroSkeleton :height="12" width="60%" />
      <div class="sk-demo__foot">
        <AeroSkeleton variant="rect" :height="34" width="92px" />
        <AeroSkeleton variant="rect" :height="34" width="92px" />
      </div>
    </div>

    <!-- real content -->
    <div v-else class="sk-demo__card">
      <div class="sk-demo__head">
        <span class="sk-demo__avatar">ZK</span>
        <div>
          <b class="sk-demo__t">{{ t['skeleton.name'] }}</b>
          <span class="sk-demo__s">{{ t['skeleton.time'] }}</span>
        </div>
      </div>
      <h4 class="sk-demo__title">{{ t['skeleton.title'] }}</h4>
      <p class="sk-demo__p">{{ t['skeleton.p1'] }}</p>
      <p class="sk-demo__p">{{ t['skeleton.p2'] }}</p>
      <p class="sk-demo__p">{{ t['skeleton.p3'] }}</p>
      <div class="sk-demo__foot">
        <AeroButton size="sm" type="primary">{{ t['skeleton.viewUpdate'] }}</AeroButton>
        <AeroButton size="sm" type="outline">{{ t['skeleton.deployDoc'] }}</AeroButton>
      </div>
    </div>

    <AeroButton size="sm" @click="loading = !loading">{{ t['skeleton.toggle'] }}</AeroButton>
  </div>
</template>

<style scoped>
.sk-demo { width: 320px; display: flex; flex-direction: column; gap: 14px; }
.sk-demo__card {
  border: 2px solid var(--ui-line);
  border-radius: 16px;
  padding: 20px;
  background: var(--ui-card);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sk-demo__head { display: flex; gap: 12px; align-items: center; }
.sk-demo__head-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.sk-demo__avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--ui-brand); color: var(--ui-on-brand);
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-family: var(--ui-font-en);
}
.sk-demo__t { display: block; font-size: 15px; }
.sk-demo__s { font-size: 12.5px; color: var(--ui-ink-3); font-family: var(--ui-font-mono); }
.sk-demo__title { margin: 4px 0 0; font-size: 17px; }
.sk-demo__p { margin: 0; font-size: 13.5px; color: var(--ui-ink-2); line-height: 1.7; }
.sk-demo__foot { display: flex; gap: 10px; margin-top: 4px; }
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSkeleton, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 样张文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const loading = ref(true)
<\/script>

<template>
  <div class="sk-demo">
    <!-- article skeleton: circle avatar + title lines + three char placeholders (last 60%) -->
    <div v-if="loading" class="sk-demo__card">
      <div class="sk-demo__head">
        <AeroSkeleton variant="circle" :height="44" :width="44" />
        <div class="sk-demo__head-lines">
          <AeroSkeleton :height="15" width="45%" />
          <AeroSkeleton :height="11" width="30%" />
        </div>
      </div>
      <AeroSkeleton :height="17" width="70%" style="margin-top: 4px" />
      <AeroSkeleton :height="12" />
      <AeroSkeleton :height="12" />
      <AeroSkeleton :height="12" width="60%" />
      <div class="sk-demo__foot">
        <AeroSkeleton variant="rect" :height="34" width="92px" />
        <AeroSkeleton variant="rect" :height="34" width="92px" />
      </div>
    </div>

    <!-- real content -->
    <div v-else class="sk-demo__card">
      <div class="sk-demo__head">
        <span class="sk-demo__avatar">ZK</span>
        <div>
          <b class="sk-demo__t">{{ t['skeleton.name'] }}</b>
          <span class="sk-demo__s">{{ t['skeleton.time'] }}</span>
        </div>
      </div>
      <h4 class="sk-demo__title">{{ t['skeleton.title'] }}</h4>
      <p class="sk-demo__p">{{ t['skeleton.p1'] }}</p>
      <p class="sk-demo__p">{{ t['skeleton.p2'] }}</p>
      <p class="sk-demo__p">{{ t['skeleton.p3'] }}</p>
      <div class="sk-demo__foot">
        <AeroButton size="sm" type="primary">{{ t['skeleton.viewUpdate'] }}</AeroButton>
        <AeroButton size="sm" type="outline">{{ t['skeleton.deployDoc'] }}</AeroButton>
      </div>
    </div>

    <AeroButton size="sm" @click="loading = !loading">{{ t['skeleton.toggle'] }}</AeroButton>
  </div>
</template>

<style scoped>
.sk-demo { width: 320px; display: flex; flex-direction: column; gap: 14px; }
.sk-demo__card {
  border: 2px solid var(--ui-line);
  border-radius: 16px;
  padding: 20px;
  background: var(--ui-card);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sk-demo__head { display: flex; gap: 12px; align-items: center; }
.sk-demo__head-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.sk-demo__avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--ui-brand); color: var(--ui-on-brand);
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-family: var(--ui-font-en);
}
.sk-demo__t { display: block; font-size: 15px; }
.sk-demo__s { font-size: 12.5px; color: var(--ui-ink-3); font-family: var(--ui-font-mono); }
.sk-demo__title { margin: 4px 0 0; font-size: 17px; }
.sk-demo__p { margin: 0; font-size: 13.5px; color: var(--ui-ink-2); line-height: 1.7; }
.sk-demo__foot { display: flex; gap: 10px; margin-top: 4px; }
</style>
`},"slide-go":{usage:`<script setup lang="ts">
import { AeroSlideGo, AeroToast, useLocale } from 'aero-vue'
// toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

function onDone() {
  AeroToast.success(t.value['slideGo.done'], { title: t.value['slideGo.title'] })
}
<\/script>

<template>
  <AeroSlideGo :width="280" @done="onDone" />
</template>
`,source:`<script setup lang="ts">
import { AeroSlideGo, AeroToast, useLocale } from 'aero-vue'
// toast 文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

function onDone() {
  AeroToast.success(t.value['slideGo.done'], { title: t.value['slideGo.title'] })
}
<\/script>

<template>
  <AeroSlideGo :width="280" @done="onDone" />
</template>
`},slider:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSlider } from 'aero-vue'

const v = ref(50)
<\/script>

<template>
  <AeroSlider v-model="v" start-label="0%" end-label="100%" unit="%" />
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSlider } from 'aero-vue'

const v = ref(50)
<\/script>

<template>
  <AeroSlider v-model="v" start-label="0%" end-label="100%" unit="%" />
</template>
`},"sort-list":{usage:`<script setup lang="ts">
import { AeroSortList, AeroToast, useLocale } from 'aero-vue'
import type { AeroSortItem } from 'aero-vue'
// 条目 meta/toast 原硬编码中文 → 走词包 demo 组
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
import { computed, ref } from 'vue'
const { demo } = useLocale()
const t = demo

// demo 状态只存 locale 无关的「键序」（name 键 + meta 词包键），
// 文案一律渲染期 t() 求值；拖拽只回写键序（onSorted），永不回写字符串。
// 库侧 watch 同步守卫要求 inner 键序 === props.items 键序——order 化后
// 两者恒等（都=用户当前序），切语言时库同步新文案，翻转恢复。
const META_KEY: Record<string, string> = {
  'web-portal': 'sortList.meta12',
  'api-gateway': 'sortList.meta18',
  'billing-svc': 'sortList.meta4',
  'admin-console': 'sortList.meta2',
}
const order = ref(['web-portal', 'api-gateway', 'billing-svc', 'admin-console'])

const items = computed<AeroSortItem[]>(() =>
  order.value.map((name) => ({ name, meta: t.value[META_KEY[name]] })),
)

function onSorted(list: AeroSortItem[]) {
  order.value = list.map((i) => i.name)
  AeroToast.info(t.value['sortList.updated'], { title: t.value['sortList.dragTitle'] })
}
<\/script>

<template>
  <AeroSortList :items="items" :width="280" @sorted="onSorted" />
</template>
`,source:`<script setup lang="ts">
import { AeroSortList, AeroToast, useLocale } from 'aero-vue'
import type { AeroSortItem } from 'aero-vue'
// 条目 meta/toast 原硬编码中文 → 走词包 demo 组
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
import { computed, ref } from 'vue'
const { demo } = useLocale()
const t = demo

// demo 状态只存 locale 无关的「键序」（name 键 + meta 词包键），
// 文案一律渲染期 t() 求值；拖拽只回写键序（onSorted），永不回写字符串。
// 库侧 watch 同步守卫要求 inner 键序 === props.items 键序——order 化后
// 两者恒等（都=用户当前序），切语言时库同步新文案，翻转恢复。
const META_KEY: Record<string, string> = {
  'web-portal': 'sortList.meta12',
  'api-gateway': 'sortList.meta18',
  'billing-svc': 'sortList.meta4',
  'admin-console': 'sortList.meta2',
}
const order = ref(['web-portal', 'api-gateway', 'billing-svc', 'admin-console'])

const items = computed<AeroSortItem[]>(() =>
  order.value.map((name) => ({ name, meta: t.value[META_KEY[name]] })),
)

function onSorted(list: AeroSortItem[]) {
  order.value = list.map((i) => i.name)
  AeroToast.info(t.value['sortList.updated'], { title: t.value['sortList.dragTitle'] })
}
<\/script>

<template>
  <AeroSortList :items="items" :width="280" @sorted="onSorted" />
</template>
`},space:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSpace, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮/占位/日志文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const clicks = ref<string[]>([])
const gap = ref(12)

function onClick(label: string) {
  clicks.value.unshift(label)
  if (clicks.value.length > 6) clicks.value.pop()
}
<\/script>

<template>
  <AeroSpace direction="vertical" :gap="18">
    <AeroSpace :gap="gap">
      <AeroButton type="primary" size="sm" @click="onClick('Primary')">{{ t['space.clickPrimary'] }}</AeroButton>
      <AeroButton type="outline" size="sm" @click="onClick('Outline')">{{ t['space.clickOutline'] }}</AeroButton>
      <AeroButton type="ghost" size="sm" @click="onClick('Ghost')">{{ t['space.clickGhost'] }}</AeroButton>
    </AeroSpace>
    <AeroSpace :gap="10" align="center">
      <span class="hint-mono">gap:</span>
      <AeroButton type="outline" size="sm" @click="gap = gap === 12 ? 32 : 12">
        {{ gap === 12 ? t['space.to32'] : t['space.to12'] }}
      </AeroButton>
    </AeroSpace>
    <AeroSpace :gap="24" justify="between">
      <span>{{ t['space.leftEnd'] }}</span>
      <span>{{ t['space.rightEnd'] }}</span>
    </AeroSpace>
    <AeroSpace direction="vertical" :gap="6">
      <span>{{ t['space.vertA'] }}</span>
      <span>{{ t['space.vertB'] }}</span>
    </AeroSpace>
    <div v-if="clicks.length" class="click-log">
      <span class="hint-mono">{{ t['space.lastClick'] }}</span>
      <span v-for="(c, i) in clicks" :key="i" class="click-item">{{ c }}</span>
    </div>
  </AeroSpace>
</template>

<style scoped>
.hint-mono { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
.click-log { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.click-item {
  font-family: var(--ui-font-mono);
  font-size: 12.5px;
  color: var(--ui-brand-ink);
  background: var(--ui-bg-tint);
  border-radius: 8px;
  padding: 2px 9px;
  animation: click-pop .3s var(--ui-spring);
}
@keyframes click-pop { from { transform: scale(.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSpace, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 按钮/占位/日志文案原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const clicks = ref<string[]>([])
const gap = ref(12)

function onClick(label: string) {
  clicks.value.unshift(label)
  if (clicks.value.length > 6) clicks.value.pop()
}
<\/script>

<template>
  <AeroSpace direction="vertical" :gap="18">
    <AeroSpace :gap="gap">
      <AeroButton type="primary" size="sm" @click="onClick('Primary')">{{ t['space.clickPrimary'] }}</AeroButton>
      <AeroButton type="outline" size="sm" @click="onClick('Outline')">{{ t['space.clickOutline'] }}</AeroButton>
      <AeroButton type="ghost" size="sm" @click="onClick('Ghost')">{{ t['space.clickGhost'] }}</AeroButton>
    </AeroSpace>
    <AeroSpace :gap="10" align="center">
      <span class="hint-mono">gap:</span>
      <AeroButton type="outline" size="sm" @click="gap = gap === 12 ? 32 : 12">
        {{ gap === 12 ? t['space.to32'] : t['space.to12'] }}
      </AeroButton>
    </AeroSpace>
    <AeroSpace :gap="24" justify="between">
      <span>{{ t['space.leftEnd'] }}</span>
      <span>{{ t['space.rightEnd'] }}</span>
    </AeroSpace>
    <AeroSpace direction="vertical" :gap="6">
      <span>{{ t['space.vertA'] }}</span>
      <span>{{ t['space.vertB'] }}</span>
    </AeroSpace>
    <div v-if="clicks.length" class="click-log">
      <span class="hint-mono">{{ t['space.lastClick'] }}</span>
      <span v-for="(c, i) in clicks" :key="i" class="click-item">{{ c }}</span>
    </div>
  </AeroSpace>
</template>

<style scoped>
.hint-mono { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
.click-log { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.click-item {
  font-family: var(--ui-font-mono);
  font-size: 12.5px;
  color: var(--ui-brand-ink);
  background: var(--ui-bg-tint);
  border-radius: 8px;
  padding: 2px 9px;
  animation: click-pop .3s var(--ui-spring);
}
@keyframes click-pop { from { transform: scale(.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
</style>
`},spinner:{usage:`<script setup lang="ts">
import { AeroSpinner } from 'aero-vue'
<\/script>

<template>
  <div style="display: flex; gap: 18px; align-items: center">
    <AeroSpinner size="sm" />
    <AeroSpinner />
    <AeroSpinner size="lg" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroSpinner } from 'aero-vue'
<\/script>

<template>
  <div style="display: flex; gap: 18px; align-items: center">
    <AeroSpinner size="sm" />
    <AeroSpinner />
    <AeroSpinner size="lg" />
  </div>
</template>
`},statistic:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroStatistic, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 统计 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const n = ref(12864)
<\/script>

<template>
  <div style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap">
    <AeroStatistic :value="n" label="GitHub Stars" />
    <AeroStatistic :value="99.9" suffix="%" :label="t['statistic.availability']" />
    <AeroStatistic :value="42" prefix="v" :label="t['statistic.componentCount']" :animated="false" />
    <AeroButton size="sm" @click="n += 500">+500</AeroButton>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroStatistic, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 统计 label 原硬编码中文 → 走词包 demo 组
const { demo } = useLocale()
const t = demo

const n = ref(12864)
<\/script>

<template>
  <div style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap">
    <AeroStatistic :value="n" label="GitHub Stars" />
    <AeroStatistic :value="99.9" suffix="%" :label="t['statistic.availability']" />
    <AeroStatistic :value="42" prefix="v" :label="t['statistic.componentCount']" :animated="false" />
    <AeroButton size="sm" @click="n += 500">+500</AeroButton>
  </div>
</template>
`},steps:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroSteps, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 步骤标题/按钮/当前步骤文案原硬编码中文 → 走词包 demo 组（desc 为命令，保留）
const { demo } = useLocale()
const t = demo

const cur = ref(1)
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed(() => [
  { title: t.value['steps.create'], desc: 'pnpm init' },
  { title: t.value['steps.install'], desc: 'pnpm add aero-vue' },
  { title: t.value['steps.build'], desc: 'pnpm build' },
  { title: t.value['steps.publish'], desc: 'npm publish' },
])
<\/script>

<template>
  <div class="steps-demo">
    <AeroSteps :items="items" :current="cur" @change="cur = $event" />
    <div class="steps-demo__ops">
      <AeroButton size="sm" type="outline" :disabled="cur === 0" @click="cur--">{{ t['steps.prev'] }}</AeroButton>
      <AeroButton size="sm" type="primary" :disabled="cur === items.length - 1" @click="cur++">{{ t['steps.next'] }}</AeroButton>
      <span class="steps-demo__val">{{ t['steps.current'] }} {{ cur + 1 }} / {{ items.length }}</span>
    </div>
  </div>
</template>

<style scoped>
.steps-demo { display: flex; flex-direction: column; gap: 18px; max-width: 620px; }
.steps-demo__ops { display: flex; gap: 10px; align-items: center; }
.steps-demo__val { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
</style>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroSteps, useLocale } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// 步骤标题/按钮/当前步骤文案原硬编码中文 → 走词包 demo 组（desc 为命令，保留）
const { demo } = useLocale()
const t = demo

const cur = ref(1)
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed(() => [
  { title: t.value['steps.create'], desc: 'pnpm init' },
  { title: t.value['steps.install'], desc: 'pnpm add aero-vue' },
  { title: t.value['steps.build'], desc: 'pnpm build' },
  { title: t.value['steps.publish'], desc: 'npm publish' },
])
<\/script>

<template>
  <div class="steps-demo">
    <AeroSteps :items="items" :current="cur" @change="cur = $event" />
    <div class="steps-demo__ops">
      <AeroButton size="sm" type="outline" :disabled="cur === 0" @click="cur--">{{ t['steps.prev'] }}</AeroButton>
      <AeroButton size="sm" type="primary" :disabled="cur === items.length - 1" @click="cur++">{{ t['steps.next'] }}</AeroButton>
      <span class="steps-demo__val">{{ t['steps.current'] }} {{ cur + 1 }} / {{ items.length }}</span>
    </div>
  </div>
</template>

<style scoped>
.steps-demo { display: flex; flex-direction: column; gap: 18px; max-width: 620px; }
.steps-demo__ops { display: flex; gap: 10px; align-items: center; }
.steps-demo__val { font-family: var(--ui-font-mono); font-size: 12.5px; color: var(--ui-ink-3); }
</style>
`},"swipe-deck":{usage:`<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { AeroSwipeDeck, type AeroSwipeCard } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const loop = ref(true)

// locale 相关文案经工厂函数在渲染期取 t.value（切语言不刷新即翻转；
// 已插入牌组的卡是用户交互数据，仅新增/重置时取当前语言）
function makeCards(): AeroSwipeCard[] {
  const d = t.value
  return [
    {
      name: 'web-portal', avatar: 'W', avatarTone: 2, status: 'ok', statusText: d['swipeDeck.healthy'],
      rows: [['region', d['swipeDeck.regionEast']], ['replicas', '12'], ['p95', '41ms']],
      foot: \`\${d['swipeDeck.build']} a4f29c1 · 2m ago\`,
    },
    {
      name: 'api-gateway', avatar: 'A', avatarTone: 3, status: 'ok', statusText: d['swipeDeck.healthy'],
      rows: [['region', d['swipeDeck.regionNorth']], ['replicas', '18'], ['p95', '23ms']],
      foot: \`\${d['swipeDeck.build']} 91bc0e7 · 6h ago\`,
    },
    {
      name: 'billing-svc', avatar: 'B', avatarTone: 5, status: 'warn', statusText: d['swipeDeck.degraded'],
      rows: [['region', d['swipeDeck.staging']], ['replicas', '4'], ['p95', '88ms']],
      foot: \`\${d['swipeDeck.build']} 3d20af1 · 1d ago\`,
    },
  ]
}

function makePool(): AeroSwipeCard[] {
  const d = t.value
  return [
    { name: 'edge-cache', avatar: 'E', avatarTone: 4, status: 'ok', statusText: d['swipeDeck.healthy'], rows: [['hits', '94%'], ['ttl', '300s'], ['evict', 'lru']], foot: \`\${d['swipeDeck.build']} 77c21e0 · 5m ago\` },
    { name: 'auth-proxy', avatar: 'AU', avatarTone: 6, status: 'err', statusText: d['swipeDeck.abnormal'], rows: [['region', d['swipeDeck.regionSouth']], ['replicas', '6'], ['p95', '412ms']], foot: \`\${d['swipeDeck.build']} f0a33d2 · 3d ago\` },
    { name: 'metrics-hub', avatar: 'M', avatarTone: 1, status: 'ok', statusText: d['swipeDeck.healthy'], rows: [['series', '1.2M'], ['scrape', '30s'], ['ret', '30d']], foot: \`\${d['swipeDeck.build']} 2b9e5aa · 1h ago\` },
  ]
}

const cards = ref<AeroSwipeCard[]>(makeCards())
const pool = computed(makePool)
let poolIdx = 0

// locale 切换时刷新初始三张卡的文案（用户追加的 -N 卡保留其交互数据，不动）
watch(t, () => {
  const fresh = makeCards()
  cards.value = cards.value.map((c, i) => (i < 3 && !c.name.includes('-') ? fresh[i] : c))
}, { deep: true })

function insertCard() {
  const c = pool.value[poolIdx % pool.value.length]
  poolIdx++
  cards.value.push({ ...c, name: c.name + (poolIdx > pool.value.length ? \`-\${poolIdx}\` : '') })
}

function removeCard() {
  cards.value.splice(0, 1)
}

function onEmptied() {
  cards.value = pool.value.slice(0, 2).map((c) => ({ ...c, name: c.name + '-reset' }))
}
<\/script>

<template>
  <div style="width: 340px; display: flex; flex-direction: column; gap: 14px">
    <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap">
      <AeroSwitch v-model="loop">{{ t['swipeDeck.loopLabel'] }}</AeroSwitch>
      <span style="font-family: var(--ui-font-mono); font-size: 12px; color: var(--ui-ink-3)">{{ t['swipeDeck.deckCount'] }} {{ cards.length }} {{ t['swipeDeck.deckCountUnit'] }}</span>
    </div>
    <div style="min-height: 300px; display: flex">
      <AeroSwipeDeck
        v-if="cards.length"
        :cards="cards"
        :loop="loop"
        @deploy="(c) => console.log(t['swipeDeck.deploy'], c.name)"
        @rollback="(c) => console.log(t['swipeDeck.rollback'], c.name)"
        @emptied="onEmptied"
      />
      <div v-else style="margin: auto; color: var(--ui-ink-3); font-size: 13px">
        {{ t['swipeDeck.empty'] }}
      </div>
    </div>
    <div style="display: flex; gap: 10px">
      <AeroButton size="sm" type="primary" @click="insertCard">{{ t['swipeDeck.insertBtn'] }}</AeroButton>
      <AeroButton size="sm" type="outline" :disabled="!cards.length" @click="removeCard">{{ t['swipeDeck.removeBtn'] }}</AeroButton>
    </div>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { AeroSwipeDeck, type AeroSwipeCard } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroSwitch } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const loop = ref(true)

// locale 相关文案经工厂函数在渲染期取 t.value（切语言不刷新即翻转；
// 已插入牌组的卡是用户交互数据，仅新增/重置时取当前语言）
function makeCards(): AeroSwipeCard[] {
  const d = t.value
  return [
    {
      name: 'web-portal', avatar: 'W', avatarTone: 2, status: 'ok', statusText: d['swipeDeck.healthy'],
      rows: [['region', d['swipeDeck.regionEast']], ['replicas', '12'], ['p95', '41ms']],
      foot: \`\${d['swipeDeck.build']} a4f29c1 · 2m ago\`,
    },
    {
      name: 'api-gateway', avatar: 'A', avatarTone: 3, status: 'ok', statusText: d['swipeDeck.healthy'],
      rows: [['region', d['swipeDeck.regionNorth']], ['replicas', '18'], ['p95', '23ms']],
      foot: \`\${d['swipeDeck.build']} 91bc0e7 · 6h ago\`,
    },
    {
      name: 'billing-svc', avatar: 'B', avatarTone: 5, status: 'warn', statusText: d['swipeDeck.degraded'],
      rows: [['region', d['swipeDeck.staging']], ['replicas', '4'], ['p95', '88ms']],
      foot: \`\${d['swipeDeck.build']} 3d20af1 · 1d ago\`,
    },
  ]
}

function makePool(): AeroSwipeCard[] {
  const d = t.value
  return [
    { name: 'edge-cache', avatar: 'E', avatarTone: 4, status: 'ok', statusText: d['swipeDeck.healthy'], rows: [['hits', '94%'], ['ttl', '300s'], ['evict', 'lru']], foot: \`\${d['swipeDeck.build']} 77c21e0 · 5m ago\` },
    { name: 'auth-proxy', avatar: 'AU', avatarTone: 6, status: 'err', statusText: d['swipeDeck.abnormal'], rows: [['region', d['swipeDeck.regionSouth']], ['replicas', '6'], ['p95', '412ms']], foot: \`\${d['swipeDeck.build']} f0a33d2 · 3d ago\` },
    { name: 'metrics-hub', avatar: 'M', avatarTone: 1, status: 'ok', statusText: d['swipeDeck.healthy'], rows: [['series', '1.2M'], ['scrape', '30s'], ['ret', '30d']], foot: \`\${d['swipeDeck.build']} 2b9e5aa · 1h ago\` },
  ]
}

const cards = ref<AeroSwipeCard[]>(makeCards())
const pool = computed(makePool)
let poolIdx = 0

// locale 切换时刷新初始三张卡的文案（用户追加的 -N 卡保留其交互数据，不动）
watch(t, () => {
  const fresh = makeCards()
  cards.value = cards.value.map((c, i) => (i < 3 && !c.name.includes('-') ? fresh[i] : c))
}, { deep: true })

function insertCard() {
  const c = pool.value[poolIdx % pool.value.length]
  poolIdx++
  cards.value.push({ ...c, name: c.name + (poolIdx > pool.value.length ? \`-\${poolIdx}\` : '') })
}

function removeCard() {
  cards.value.splice(0, 1)
}

function onEmptied() {
  cards.value = pool.value.slice(0, 2).map((c) => ({ ...c, name: c.name + '-reset' }))
}
<\/script>

<template>
  <div style="width: 340px; display: flex; flex-direction: column; gap: 14px">
    <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap">
      <AeroSwitch v-model="loop">{{ t['swipeDeck.loopLabel'] }}</AeroSwitch>
      <span style="font-family: var(--ui-font-mono); font-size: 12px; color: var(--ui-ink-3)">{{ t['swipeDeck.deckCount'] }} {{ cards.length }} {{ t['swipeDeck.deckCountUnit'] }}</span>
    </div>
    <div style="min-height: 300px; display: flex">
      <AeroSwipeDeck
        v-if="cards.length"
        :cards="cards"
        :loop="loop"
        @deploy="(c) => console.log(t['swipeDeck.deploy'], c.name)"
        @rollback="(c) => console.log(t['swipeDeck.rollback'], c.name)"
        @emptied="onEmptied"
      />
      <div v-else style="margin: auto; color: var(--ui-ink-3); font-size: 13px">
        {{ t['swipeDeck.empty'] }}
      </div>
    </div>
    <div style="display: flex; gap: 10px">
      <AeroButton size="sm" type="primary" @click="insertCard">{{ t['swipeDeck.insertBtn'] }}</AeroButton>
      <AeroButton size="sm" type="outline" :disabled="!cards.length" @click="removeCard">{{ t['swipeDeck.removeBtn'] }}</AeroButton>
    </div>
  </div>
</template>
`},switch:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSwitch } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const on = ref(true)
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <AeroSwitch v-model="on">{{ t['switch.followSystem'] }}</AeroSwitch>
    <AeroSwitch :model-value="!on">{{ t['switch.inverted'] }}</AeroSwitch>
    <AeroSwitch disabled>{{ t['switch.disabled'] }}</AeroSwitch>
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroSwitch } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const on = ref(true)
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <AeroSwitch v-model="on">{{ t['switch.followSystem'] }}</AeroSwitch>
    <AeroSwitch :model-value="!on">{{ t['switch.inverted'] }}</AeroSwitch>
    <AeroSwitch disabled>{{ t['switch.disabled'] }}</AeroSwitch>
  </div>
</template>
`},table:{usage:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroTable } from 'aero-vue'
import { AeroBadge } from 'aero-vue'
import type { AeroTableColumn } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const cols: AeroTableColumn[] = [
  { key: 'pkg', title: 'Package', mono: true },
  { key: 'desc', title: 'Description' },
  { key: 'ver', title: 'Version', mono: true },
  { key: 'status', title: 'Status' },
]

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const rows = computed(() => [
  { pkg: 'aero-vue', desc: t.value['table.vueDesc'], ver: '0.1.0', st: 'stable' },
  { pkg: 'vite', desc: t.value['table.buildTool'], ver: '5.2.0', st: 'beta' },
  { pkg: 'sass', desc: t.value['table.preprocessor'], ver: '1.77.0', st: 'stable' },
])
<\/script>

<template>
  <AeroTable :columns="cols" :data="rows">
    <template #status="{ row }">
      <AeroBadge :type="row.st === 'stable' ? 'ok' : 'warn'" dot>{{ row.st }}</AeroBadge>
    </template>
  </AeroTable>
</template>
`,source:`<script setup lang="ts">
import { computed } from 'vue'
import { AeroTable } from 'aero-vue'
import { AeroBadge } from 'aero-vue'
import type { AeroTableColumn } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const cols: AeroTableColumn[] = [
  { key: 'pkg', title: 'Package', mono: true },
  { key: 'desc', title: 'Description' },
  { key: 'ver', title: 'Version', mono: true },
  { key: 'status', title: 'Status' },
]

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const rows = computed(() => [
  { pkg: 'aero-vue', desc: t.value['table.vueDesc'], ver: '0.1.0', st: 'stable' },
  { pkg: 'vite', desc: t.value['table.buildTool'], ver: '5.2.0', st: 'beta' },
  { pkg: 'sass', desc: t.value['table.preprocessor'], ver: '1.77.0', st: 'stable' },
])
<\/script>

<template>
  <AeroTable :columns="cols" :data="rows">
    <template #status="{ row }">
      <AeroBadge :type="row.st === 'stable' ? 'ok' : 'warn'" dot>{{ row.st }}</AeroBadge>
    </template>
  </AeroTable>
</template>
`},tabs:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroTabs } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const k = ref('a')
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const tabs = computed(() => [
  { key: 'a', label: t.value['tabs.basic'] },
  { key: 'b', label: t.value['tabs.style'] },
  { key: 'c', label: t.value['tabs.motion'] },
])
const panels = computed<Record<string, string>>(() => ({
  a: t.value['tabs.basicPanel'],
  b: t.value['tabs.stylePanel'],
  c: t.value['tabs.motionPanel'],
}))
<\/script>

<template>
  <AeroTabs v-model="k" :tabs="tabs">
    <template #default="{ active }">
      <div style="color: var(--ui-ink-2); font-size: 14px">{{ panels[active] }}</div>
    </template>
  </AeroTabs>
</template>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroTabs } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const k = ref('a')
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const tabs = computed(() => [
  { key: 'a', label: t.value['tabs.basic'] },
  { key: 'b', label: t.value['tabs.style'] },
  { key: 'c', label: t.value['tabs.motion'] },
])
const panels = computed<Record<string, string>>(() => ({
  a: t.value['tabs.basicPanel'],
  b: t.value['tabs.stylePanel'],
  c: t.value['tabs.motionPanel'],
}))
<\/script>

<template>
  <AeroTabs v-model="k" :tabs="tabs">
    <template #default="{ active }">
      <div style="color: var(--ui-ink-2); font-size: 14px">{{ panels[active] }}</div>
    </template>
  </AeroTabs>
</template>
`},tag:{usage:`<script setup lang="ts">
import { AeroTag } from 'aero-vue'
<\/script>

<template>
  <div style="display: flex; gap: 10px; align-items: center">
    <AeroTag>npm</AeroTag>
    <AeroTag>pnpm</AeroTag>
    <AeroTag accent>Vue 3.4</AeroTag>
    <AeroTag>MIT</AeroTag>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroTag } from 'aero-vue'
<\/script>

<template>
  <div style="display: flex; gap: 10px; align-items: center">
    <AeroTag>npm</AeroTag>
    <AeroTag>pnpm</AeroTag>
    <AeroTag accent>Vue 3.4</AeroTag>
    <AeroTag>MIT</AeroTag>
  </div>
</template>
`},terminal:{usage:`<script setup lang="ts">
import { AeroTerminal } from 'aero-vue'
import type { TermLine } from 'aero-vue'

const lines: TermLine[] = [
  { text: '$ pnpm add aero-vue', type: 'cmd' },
  { text: '+ aero-vue 0.1.0', type: 'ok' },
  { text: '$ pnpm build', type: 'cmd' },
  { text: 'building for production...', type: 'live' },
  { text: 'done in 1.2s', type: 'ok' },
]
<\/script>

<template>
  <AeroTerminal :lines="lines" title="ztk@aero" style="max-width: 480px" />
</template>
`,source:`<script setup lang="ts">
import { AeroTerminal } from 'aero-vue'
import type { TermLine } from 'aero-vue'

const lines: TermLine[] = [
  { text: '$ pnpm add aero-vue', type: 'cmd' },
  { text: '+ aero-vue 0.1.0', type: 'ok' },
  { text: '$ pnpm build', type: 'cmd' },
  { text: 'building for production...', type: 'live' },
  { text: 'done in 1.2s', type: 'ok' },
]
<\/script>

<template>
  <AeroTerminal :lines="lines" title="ztk@aero" style="max-width: 480px" />
</template>
`},textarea:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTextarea } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const v = ref('')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 14px; max-width: 320px">
    <AeroTextarea v-model="v" :placeholder="t['textarea.multiLine']" />
    <AeroTextarea v-model="v" :placeholder="t['textarea.withCount']" :maxlength="100" show-count />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTextarea } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const v = ref('')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 14px; max-width: 320px">
    <AeroTextarea v-model="v" :placeholder="t['textarea.multiLine']" />
    <AeroTextarea v-model="v" :placeholder="t['textarea.withCount']" :maxlength="100" show-count />
  </div>
</template>
`},"theme-provider":{usage:`<script setup lang="ts">
/**
 * ThemeProvider demo —— 预设切换（作用域化，全局零 mutation）
 * - 预设按钮只作用于 demo 预览框（AeroThemeProvider scoped 模式，
 * CSS 变量只写容器自身，不动 :root、不写 localStorage）；
 * - 「应用到全局」= 用户显式操作才写全局 useTheme 状态（离开页面后保持，
 * 由 useTheme 持久化语义决定，与库原有全局开关行为一致）。
 */
import { ref, computed } from 'vue'
import { AeroThemeProvider } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroBadge } from 'aero-vue'
import { useTheme, useLocale } from 'aero-vue'
// demo 文案走词包 demo 组
const { demo } = useLocale()
const t = demo

const { state, setPreset } = useTheme()
const inner = ref<'aero' | 'violet' | 'mint' | 'sunset' | 'rose'>('aero')

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const presets = computed(() => ([
  { key: 'aero', label: t.value['themeProvider.aeroBlue'], color: '#0EBFFF' },
  { key: 'violet', label: 'Violet', color: '#7C6CFF' },
  { key: 'mint', label: 'Mint', color: '#10C999' },
  { key: 'sunset', label: 'Sunset', color: '#FF8A3D' },
  { key: 'rose', label: 'Rose', color: '#FF5C8A' },
] as Array<{ key: 'aero' | 'violet' | 'mint' | 'sunset' | 'rose'; label: string; color: string }>))

function applyGlobal() {
  setPreset(inner.value)
}
<\/script>

<template>
  <div class="tp-demo">
    <div class="tp-demo__hint">
      <AeroBadge type="soft" dot>{{ t["themeProvider.scopedBadge"] }}</AeroBadge>
      <span>{{ t["themeProvider.scopedHint"] }}</span>
    </div>

    <!-- 预设色板（只影响下方预览框，scoped 零全局副作用） -->
    <div class="tp-demo__presets">
      <button
        v-for="p in presets"
        :key="p.key"
        class="tp-demo__preset"
        :class="{ 'is-on': inner === p.key }"
        type="button"
        @click="inner = p.key"
      >
        <span class="tp-demo__dot" :style="{ background: p.color }" />
        {{ p.label }}
      </button>
    </div>

    <!-- 作用域内的组件随预设换色（CSS 变量只写容器，:root 不动） -->
    <AeroThemeProvider :preset="inner" scoped>
      <div class="tp-demo__scope">
        <AeroButton type="primary">{{ t["themeProvider.brandChanged"] }}</AeroButton>
        <AeroBadge type="solid">{{ inner }}</AeroBadge>
      </div>
    </AeroThemeProvider>

    <!-- 显式操作才写全局（用户主动点击） -->
    <div class="tp-demo__global">
      <span>{{ t["themeProvider.globalLabel"] }}：{{ state.preset }}</span>
      <AeroButton type="outline" size="sm" @click="applyGlobal">{{ t["themeProvider.applyBtn"] }}</AeroButton>
    </div>
  </div>
</template>

<style scoped>
.tp-demo { display: flex; flex-direction: column; gap: 16px; }
.tp-demo__hint { display: flex; gap: 10px; align-items: center; font-size: 13px; color: var(--ui-ink-2); flex-wrap: wrap; }
.tp-demo__presets { display: flex; gap: 8px; flex-wrap: wrap; }
.tp-demo__preset {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 2px solid var(--ui-line);
  border-radius: 99px;
  background: var(--ui-card);
  color: var(--ui-ink-2);
  font-size: 13px;
  font-weight: 700;
  padding: 7px 14px;
  cursor: pointer;
  transition: .2s var(--ui-spring);
}
.tp-demo__preset:hover { border-color: var(--ui-brand); color: var(--ui-brand-ink); transform: translateY(-1px); }
.tp-demo__preset.is-on { border-color: var(--ui-ink); box-shadow: 2px 2px 0 var(--ui-ink); transform: rotate(-1deg); }
.tp-demo__dot { width: 15px; height: 15px; border-radius: 50%; border: 2px solid var(--ui-card); box-shadow: 0 0 0 2px var(--ui-line-2); }
.tp-demo__scope {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 18px;
  border: 2px dashed var(--ui-line-2);
  border-radius: 16px;
}
.tp-demo__global {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 12.5px;
  color: var(--ui-ink-3);
  flex-wrap: wrap;
}
</style>
`,source:`<script setup lang="ts">
/**
 * ThemeProvider demo —— 预设切换（作用域化，全局零 mutation）
 * - 预设按钮只作用于 demo 预览框（AeroThemeProvider scoped 模式，
 * CSS 变量只写容器自身，不动 :root、不写 localStorage）；
 * - 「应用到全局」= 用户显式操作才写全局 useTheme 状态（离开页面后保持，
 * 由 useTheme 持久化语义决定，与库原有全局开关行为一致）。
 */
import { ref, computed } from 'vue'
import { AeroThemeProvider } from 'aero-vue'
import { AeroButton } from 'aero-vue'
import { AeroBadge } from 'aero-vue'
import { useTheme, useLocale } from 'aero-vue'
// demo 文案走词包 demo 组
const { demo } = useLocale()
const t = demo

const { state, setPreset } = useTheme()
const inner = ref<'aero' | 'violet' | 'mint' | 'sunset' | 'rose'>('aero')

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const presets = computed(() => ([
  { key: 'aero', label: t.value['themeProvider.aeroBlue'], color: '#0EBFFF' },
  { key: 'violet', label: 'Violet', color: '#7C6CFF' },
  { key: 'mint', label: 'Mint', color: '#10C999' },
  { key: 'sunset', label: 'Sunset', color: '#FF8A3D' },
  { key: 'rose', label: 'Rose', color: '#FF5C8A' },
] as Array<{ key: 'aero' | 'violet' | 'mint' | 'sunset' | 'rose'; label: string; color: string }>))

function applyGlobal() {
  setPreset(inner.value)
}
<\/script>

<template>
  <div class="tp-demo">
    <div class="tp-demo__hint">
      <AeroBadge type="soft" dot>{{ t["themeProvider.scopedBadge"] }}</AeroBadge>
      <span>{{ t["themeProvider.scopedHint"] }}</span>
    </div>

    <!-- 预设色板（只影响下方预览框，scoped 零全局副作用） -->
    <div class="tp-demo__presets">
      <button
        v-for="p in presets"
        :key="p.key"
        class="tp-demo__preset"
        :class="{ 'is-on': inner === p.key }"
        type="button"
        @click="inner = p.key"
      >
        <span class="tp-demo__dot" :style="{ background: p.color }" />
        {{ p.label }}
      </button>
    </div>

    <!-- 作用域内的组件随预设换色（CSS 变量只写容器，:root 不动） -->
    <AeroThemeProvider :preset="inner" scoped>
      <div class="tp-demo__scope">
        <AeroButton type="primary">{{ t["themeProvider.brandChanged"] }}</AeroButton>
        <AeroBadge type="solid">{{ inner }}</AeroBadge>
      </div>
    </AeroThemeProvider>

    <!-- 显式操作才写全局（用户主动点击） -->
    <div class="tp-demo__global">
      <span>{{ t["themeProvider.globalLabel"] }}：{{ state.preset }}</span>
      <AeroButton type="outline" size="sm" @click="applyGlobal">{{ t["themeProvider.applyBtn"] }}</AeroButton>
    </div>
  </div>
</template>

<style scoped>
.tp-demo { display: flex; flex-direction: column; gap: 16px; }
.tp-demo__hint { display: flex; gap: 10px; align-items: center; font-size: 13px; color: var(--ui-ink-2); flex-wrap: wrap; }
.tp-demo__presets { display: flex; gap: 8px; flex-wrap: wrap; }
.tp-demo__preset {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 2px solid var(--ui-line);
  border-radius: 99px;
  background: var(--ui-card);
  color: var(--ui-ink-2);
  font-size: 13px;
  font-weight: 700;
  padding: 7px 14px;
  cursor: pointer;
  transition: .2s var(--ui-spring);
}
.tp-demo__preset:hover { border-color: var(--ui-brand); color: var(--ui-brand-ink); transform: translateY(-1px); }
.tp-demo__preset.is-on { border-color: var(--ui-ink); box-shadow: 2px 2px 0 var(--ui-ink); transform: rotate(-1deg); }
.tp-demo__dot { width: 15px; height: 15px; border-radius: 50%; border: 2px solid var(--ui-card); box-shadow: 0 0 0 2px var(--ui-line-2); }
.tp-demo__scope {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 18px;
  border: 2px dashed var(--ui-line-2);
  border-radius: 16px;
}
.tp-demo__global {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 12.5px;
  color: var(--ui-ink-3);
  flex-wrap: wrap;
}
</style>
`},"theme-switch":{usage:`<script setup lang="ts">
import { ref, watch } from 'vue'
import { AeroThemeSwitch, AeroSwitch, useLocale, useTheme } from 'aero-vue'
const { demo } = useLocale()
const t = demo
const { state, setTheme } = useTheme()

// 五段（全真实交互，无编造内容）：
// ① 基础（现行为）② 受控 v-model + 消费方应用值 + 实时显示绑定值
// ③ 尺寸 sm·md·lg 三枚共用一个值（联动）④ 禁用（独立值 + 真实开关控制 disabled）
// ⑤ change 事件日志
// —— 双向同步：demo 单一共享状态 pageTheme，②③④ 全部 v-model 绑它。
//    a) 初始化只读不写：取主题服务当前值（禁加载期写服务——避免 immediate 强写冲掉持久化，固化为规则）；
//    b) 推向：watch(pageTheme) → setTheme(v)，全局主题真变；
//    c) 回流：watch(state.theme) → pageTheme（不等式守卫防回声循环），外部改主题 demo 跟得上。
//    @change 统一进 ⑤ 日志（一个 handler，删各自零散消费 watch）；④ 禁用仍由 disSwitchOn 独立控制。
const pageTheme = ref<'light' | 'dark'>(state.theme)
watch(pageTheme, (v) => setTheme(v))
watch(() => state.theme, (v) => { if (pageTheme.value !== v) pageTheme.value = v })
// —— ④ 禁用段：disSwitchOn=false 可正常切换明暗，true 才锁定（disabled 只锁交互不锁显示，
//    旋钮仍随 pageTheme 呈现）；禁用视觉 token 不动
const disSwitchOn = ref(false)
// —— ⑤ change 事件日志：只存 'light'|'dark' 键值，文案渲染期 t() 求值（禁烤串）
const log = ref<('light' | 'dark')[]>([])
// ②③④ 的 change 事件并入同一条真实事件流（非模拟）
function onThemeChange(v: 'light' | 'dark') {
  log.value = [v, ...log.value].slice(0, 8)
}
<\/script>

<template>
  <div class="ts-demo">
    <!-- ① 基础（现行为：内部 useTheme 主题服务，零回归） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secBasic'] }}</h3>
      <div class="ts-demo__row">
        <AeroThemeSwitch />
        <span class="ts-demo__sub">{{ t['themeSwitch.hint'] }}</span>
      </div>
    </section>

    <!-- ② 受控 v-model（绑单一共享状态 pageTheme，点击 emit + 推向服务 → 全局主题真变；
 回流 watch 使外部改主题时此段同步跟上）+ 实时显示绑定值 -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secControlled'] }}</h3>
      <div class="ts-demo__row">
        <AeroThemeSwitch v-model="pageTheme" @change="onThemeChange" />
        <span class="ts-demo__sub ts-demo__val">v-model = {{ pageTheme }}</span>
      </div>
      <span class="ts-demo__sub">{{ t['themeSwitch.hintControlled'] }}</span>
    </section>

    <!-- ③ 尺寸 sm · md · lg 三枚（全部绑 pageTheme，任一枚点击全段联动） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secSizes'] }}</h3>
      <div class="ts-demo__row">
        <AeroThemeSwitch size="sm" v-model="pageTheme" @change="onThemeChange" />
        <AeroThemeSwitch size="md" v-model="pageTheme" @change="onThemeChange" />
        <AeroThemeSwitch size="lg" v-model="pageTheme" @change="onThemeChange" />
      </div>
    </section>

    <!-- ④ 禁用：真实 AeroSwitch 控制示例开关的 disabled（绑 pageTheme；
 disabled 只锁交互不锁显示，旋钮仍随 pageTheme 呈现） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secDisabled'] }}</h3>
      <div class="ts-demo__row">
        <AeroSwitch v-model="disSwitchOn" />
        <AeroThemeSwitch v-model="pageTheme" :disabled="disSwitchOn" @change="onThemeChange" />
      </div>
    </section>

    <!-- ⑤ change 事件日志（真实事件流；日志只存键值，渲染期 t() 求值） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secChangeLog'] }}</h3>
      <ol class="ts-demo__log">
        <li v-if="!log.length" class="ts-demo__logempty">{{ t['themeSwitch.logEmpty'] }}</li>
        <li v-for="(v, i) in log" :key="i">{{ v === 'dark' ? t['themeSwitch.logDark'] : t['themeSwitch.logLight'] }}</li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.ts-demo {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
}
.ts-demo__sec {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ts-demo__h {
  margin: 0;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ui-ink-2);
}
.ts-demo__row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
.ts-demo__sub {
  font-size: 13px;
  color: var(--ui-ink-3);
  min-width: 0;
}
.ts-demo__val {
  font-family: var(--ui-font-mono);
  font-size: 12.5px;
  color: var(--ui-brand-ink);
}
.ts-demo__log {
  margin: 0;
  padding: 0 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.ts-demo__log li,
.ts-demo__logempty {
  font-size: 12.5px;
  font-family: var(--ui-font-mono);
  color: var(--ui-ink-2);
}
.ts-demo__logempty {
  color: var(--ui-ink-3);
}
</style>
`,source:`<script setup lang="ts">
import { ref, watch } from 'vue'
import { AeroThemeSwitch, AeroSwitch, useLocale, useTheme } from 'aero-vue'
const { demo } = useLocale()
const t = demo
const { state, setTheme } = useTheme()

// 五段（全真实交互，无编造内容）：
// ① 基础（现行为）② 受控 v-model + 消费方应用值 + 实时显示绑定值
// ③ 尺寸 sm·md·lg 三枚共用一个值（联动）④ 禁用（独立值 + 真实开关控制 disabled）
// ⑤ change 事件日志
// —— 双向同步：demo 单一共享状态 pageTheme，②③④ 全部 v-model 绑它。
//    a) 初始化只读不写：取主题服务当前值（禁加载期写服务——避免 immediate 强写冲掉持久化，固化为规则）；
//    b) 推向：watch(pageTheme) → setTheme(v)，全局主题真变；
//    c) 回流：watch(state.theme) → pageTheme（不等式守卫防回声循环），外部改主题 demo 跟得上。
//    @change 统一进 ⑤ 日志（一个 handler，删各自零散消费 watch）；④ 禁用仍由 disSwitchOn 独立控制。
const pageTheme = ref<'light' | 'dark'>(state.theme)
watch(pageTheme, (v) => setTheme(v))
watch(() => state.theme, (v) => { if (pageTheme.value !== v) pageTheme.value = v })
// —— ④ 禁用段：disSwitchOn=false 可正常切换明暗，true 才锁定（disabled 只锁交互不锁显示，
//    旋钮仍随 pageTheme 呈现）；禁用视觉 token 不动
const disSwitchOn = ref(false)
// —— ⑤ change 事件日志：只存 'light'|'dark' 键值，文案渲染期 t() 求值（禁烤串）
const log = ref<('light' | 'dark')[]>([])
// ②③④ 的 change 事件并入同一条真实事件流（非模拟）
function onThemeChange(v: 'light' | 'dark') {
  log.value = [v, ...log.value].slice(0, 8)
}
<\/script>

<template>
  <div class="ts-demo">
    <!-- ① 基础（现行为：内部 useTheme 主题服务，零回归） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secBasic'] }}</h3>
      <div class="ts-demo__row">
        <AeroThemeSwitch />
        <span class="ts-demo__sub">{{ t['themeSwitch.hint'] }}</span>
      </div>
    </section>

    <!-- ② 受控 v-model（绑单一共享状态 pageTheme，点击 emit + 推向服务 → 全局主题真变；
 回流 watch 使外部改主题时此段同步跟上）+ 实时显示绑定值 -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secControlled'] }}</h3>
      <div class="ts-demo__row">
        <AeroThemeSwitch v-model="pageTheme" @change="onThemeChange" />
        <span class="ts-demo__sub ts-demo__val">v-model = {{ pageTheme }}</span>
      </div>
      <span class="ts-demo__sub">{{ t['themeSwitch.hintControlled'] }}</span>
    </section>

    <!-- ③ 尺寸 sm · md · lg 三枚（全部绑 pageTheme，任一枚点击全段联动） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secSizes'] }}</h3>
      <div class="ts-demo__row">
        <AeroThemeSwitch size="sm" v-model="pageTheme" @change="onThemeChange" />
        <AeroThemeSwitch size="md" v-model="pageTheme" @change="onThemeChange" />
        <AeroThemeSwitch size="lg" v-model="pageTheme" @change="onThemeChange" />
      </div>
    </section>

    <!-- ④ 禁用：真实 AeroSwitch 控制示例开关的 disabled（绑 pageTheme；
 disabled 只锁交互不锁显示，旋钮仍随 pageTheme 呈现） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secDisabled'] }}</h3>
      <div class="ts-demo__row">
        <AeroSwitch v-model="disSwitchOn" />
        <AeroThemeSwitch v-model="pageTheme" :disabled="disSwitchOn" @change="onThemeChange" />
      </div>
    </section>

    <!-- ⑤ change 事件日志（真实事件流；日志只存键值，渲染期 t() 求值） -->
    <section class="ts-demo__sec">
      <h3 class="ts-demo__h">{{ t['themeSwitch.secChangeLog'] }}</h3>
      <ol class="ts-demo__log">
        <li v-if="!log.length" class="ts-demo__logempty">{{ t['themeSwitch.logEmpty'] }}</li>
        <li v-for="(v, i) in log" :key="i">{{ v === 'dark' ? t['themeSwitch.logDark'] : t['themeSwitch.logLight'] }}</li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.ts-demo {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
}
.ts-demo__sec {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ts-demo__h {
  margin: 0;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ui-ink-2);
}
.ts-demo__row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
.ts-demo__sub {
  font-size: 13px;
  color: var(--ui-ink-3);
  min-width: 0;
}
.ts-demo__val {
  font-family: var(--ui-font-mono);
  font-size: 12.5px;
  color: var(--ui-brand-ink);
}
.ts-demo__log {
  margin: 0;
  padding: 0 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.ts-demo__log li,
.ts-demo__logempty {
  font-size: 12.5px;
  font-family: var(--ui-font-mono);
  color: var(--ui-ink-2);
}
.ts-demo__logempty {
  color: var(--ui-ink-3);
}
</style>
`},"time-picker":{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTimePicker } from 'aero-vue'

const t = ref('09:30')
<\/script>

<template>
  <div style="max-width: 200px">
    <AeroTimePicker v-model="t" :minute-step="5" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTimePicker } from 'aero-vue'

const t = ref('09:30')
<\/script>

<template>
  <div style="max-width: 200px">
    <AeroTimePicker v-model="t" :minute-step="5" />
  </div>
</template>
`},timeline:{usage:`<script setup lang="ts">
import { AeroTimeline } from 'aero-vue'
import type { AeroTimelineItem } from 'aero-vue'
// demo 文案走词包 demo 组
import { computed } from 'vue'
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed<AeroTimelineItem[]>(() => [
  { icon: 'git-commit', date: '2026-09-01', chip: 'INIT', title: t.value['timeline.item1'], desc: t.value['timeline.item1Desc'] },
  { icon: 'code', date: '2026-09-05', chip: 'DEV', title: t.value['timeline.item2'], desc: t.value['timeline.item2Desc'] },
  { icon: 'rocket', date: '2026-09-13', chip: 'NEXT', title: t.value['timeline.item3'], desc: t.value['timeline.item3Desc'] },
])
<\/script>

<template>
  <AeroTimeline :items="items" />
</template>
`,source:`<script setup lang="ts">
import { AeroTimeline } from 'aero-vue'
import type { AeroTimelineItem } from 'aero-vue'
// demo 文案走词包 demo 组
import { computed } from 'vue'
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const items = computed<AeroTimelineItem[]>(() => [
  { icon: 'git-commit', date: '2026-09-01', chip: 'INIT', title: t.value['timeline.item1'], desc: t.value['timeline.item1Desc'] },
  { icon: 'code', date: '2026-09-05', chip: 'DEV', title: t.value['timeline.item2'], desc: t.value['timeline.item2Desc'] },
  { icon: 'rocket', date: '2026-09-13', chip: 'NEXT', title: t.value['timeline.item3'], desc: t.value['timeline.item3Desc'] },
])
<\/script>

<template>
  <AeroTimeline :items="items" />
</template>
`},toast:{usage:`<script setup lang="ts">
import { AeroToast } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap">
    <AeroButton size="sm" type="primary" @click="AeroToast.success(t['toast.successMsg'])">{{ t['toast.success'] }}</AeroButton>
    <AeroButton size="sm" type="danger" @click="AeroToast.error(t['toast.errorMsg'])">{{ t['toast.error'] }}</AeroButton>
    <AeroButton size="sm" @click="AeroToast.warn(t['toast.warnMsg'])">{{ t['toast.warn'] }}</AeroButton>
    <AeroButton size="sm" type="ghost" @click="AeroToast.info(t['toast.infoMsg'])">{{ t['toast.info'] }}</AeroButton>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroToast } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap">
    <AeroButton size="sm" type="primary" @click="AeroToast.success(t['toast.successMsg'])">{{ t['toast.success'] }}</AeroButton>
    <AeroButton size="sm" type="danger" @click="AeroToast.error(t['toast.errorMsg'])">{{ t['toast.error'] }}</AeroButton>
    <AeroButton size="sm" @click="AeroToast.warn(t['toast.warnMsg'])">{{ t['toast.warn'] }}</AeroButton>
    <AeroButton size="sm" type="ghost" @click="AeroToast.info(t['toast.infoMsg'])">{{ t['toast.info'] }}</AeroButton>
  </div>
</template>
`},tooltip:{usage:`<script setup lang="ts">
import { AeroTooltip } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 18px; align-items: center; padding: 40px 0">
    <AeroTooltip :content="t['tooltip.top']">
      <AeroButton type="outline" size="sm">{{ t['tooltip.topBtn'] }}</AeroButton>
    </AeroTooltip>
    <AeroTooltip :content="t['tooltip.bottom']" placement="bottom">
      <!-- 底部提示触发器：? 图标上标（super）+ 文字基线对齐，整体再下沉 1px 与左侧
           按钮视觉同轴；替代「图标被 -3px 顶起来」的上下错位 -->
      <span tabindex="0" style="cursor: help; color: var(--ui-brand-ink); font-weight: 700; display: inline-flex; align-items: baseline; gap: 4px; transform: translateY(1px)">
        <sup style="line-height: 1; font-weight: 800; transform: scale(0.82); transform-origin: center; display: inline-block">?</sup>
        {{ t['tooltip.bottomBtn'] }}
      </span>
    </AeroTooltip>
  </div>
</template>
`,source:`<script setup lang="ts">
import { AeroTooltip } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <div style="display: flex; gap: 18px; align-items: center; padding: 40px 0">
    <AeroTooltip :content="t['tooltip.top']">
      <AeroButton type="outline" size="sm">{{ t['tooltip.topBtn'] }}</AeroButton>
    </AeroTooltip>
    <AeroTooltip :content="t['tooltip.bottom']" placement="bottom">
      <!-- 底部提示触发器：? 图标上标（super）+ 文字基线对齐，整体再下沉 1px 与左侧
           按钮视觉同轴；替代「图标被 -3px 顶起来」的上下错位 -->
      <span tabindex="0" style="cursor: help; color: var(--ui-brand-ink); font-weight: 700; display: inline-flex; align-items: baseline; gap: 4px; transform: translateY(1px)">
        <sup style="line-height: 1; font-weight: 800; transform: scale(0.82); transform-origin: center; display: inline-block">?</sup>
        {{ t['tooltip.bottomBtn'] }}
      </span>
    </AeroTooltip>
  </div>
</template>
`},tour:{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroTour, AeroButton, AeroInput, AeroBadge } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const open = ref(false)
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const steps = computed(() => [
  { target: '#tour-input', title: t.value['tour.step1Title'], desc: t.value['tour.step1Desc'] },
  { target: '#tour-badge', title: t.value['tour.step2Title'], desc: t.value['tour.step2Desc'] },
  { target: '#tour-btn', title: t.value['tour.step3Title'], desc: t.value['tour.step3Desc'] },
])
<\/script>

<template>
  <div style="display: flex; gap: 22px; align-items: center; padding: 30px 0; flex-wrap: wrap">
    <AeroInput id="tour-input" :placeholder="t['tour.searchPlaceholder']" :width="200" />
    <AeroBadge id="tour-badge" type="ok" dot>{{ t['tour.badge'] }}</AeroBadge>
    <AeroButton id="tour-btn" type="primary" size="sm" @click="open = true">{{ t['tour.startBtn'] }}</AeroButton>
    <AeroTour v-model="open" :steps="steps" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroTour, AeroButton, AeroInput, AeroBadge } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const open = ref(false)
// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const steps = computed(() => [
  { target: '#tour-input', title: t.value['tour.step1Title'], desc: t.value['tour.step1Desc'] },
  { target: '#tour-badge', title: t.value['tour.step2Title'], desc: t.value['tour.step2Desc'] },
  { target: '#tour-btn', title: t.value['tour.step3Title'], desc: t.value['tour.step3Desc'] },
])
<\/script>

<template>
  <div style="display: flex; gap: 22px; align-items: center; padding: 30px 0; flex-wrap: wrap">
    <AeroInput id="tour-input" :placeholder="t['tour.searchPlaceholder']" :width="200" />
    <AeroBadge id="tour-badge" type="ok" dot>{{ t['tour.badge'] }}</AeroBadge>
    <AeroButton id="tour-btn" type="primary" size="sm" @click="open = true">{{ t['tour.startBtn'] }}</AeroButton>
    <AeroTour v-model="open" :steps="steps" />
  </div>
</template>
`},transfer:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTransfer } from 'aero-vue'

const target = ref<string[]>(['vite'])
const data = [
  { key: 'vue', label: 'Vue 3' },
  { key: 'vite', label: 'Vite' },
  { key: 'sass', label: 'Sass', disabled: true },
  { key: 'ts', label: 'TypeScript' },
  { key: 'pnpm', label: 'pnpm' },
]
<\/script>

<template>
  <AeroTransfer v-model="target" :data="data" />
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTransfer } from 'aero-vue'

const target = ref<string[]>(['vite'])
const data = [
  { key: 'vue', label: 'Vue 3' },
  { key: 'vite', label: 'Vite' },
  { key: 'sass', label: 'Sass', disabled: true },
  { key: 'ts', label: 'TypeScript' },
  { key: 'pnpm', label: 'pnpm' },
]
<\/script>

<template>
  <AeroTransfer v-model="target" :data="data" />
</template>
`},tree:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTree, AeroSwitch } from 'aero-vue'
import type { AeroTreeNode } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const expanded = ref(['src', 'components'])
const checked = ref<string[]>(['styles'])
const active = ref('')
// includeParents 实时切换（false=仅叶 / true=全集含父）
const includeParents = ref(false)

const data: AeroTreeNode[] = [
  {
    key: 'src',
    label: 'src/',
    children: [
      {
        key: 'components',
        label: 'components/',
        children: [
          { key: 'button', label: 'button/' },
          { key: 'form', label: 'form/' },
          { key: 'tree', label: 'tree/' },
        ],
      },
      { key: 'composables', label: 'composables/' },
      { key: 'styles', label: 'styles/' },
      { key: 'index.ts', label: 'index.ts' },
    ],
  },
  {
    key: 'dist',
    label: 'dist/',
    children: [{ key: 'aero-ui.js', label: 'aero-ui.js' }, { key: 'styles.css', label: 'styles.css' }],
  },
]

function onChecked(v: string[]) {
  checked.value = v
}
<\/script>

<template>
  <div class="tree-demo">
    <div class="tree-demo__ctrl">
      <AeroSwitch v-model="includeParents">{{ t['tree.includeParents'] }}</AeroSwitch>
    </div>
    <div style="max-width: 340px">
      <AeroTree
        :data="data"
        v-model:expanded="expanded"
        v-model:checked="checked"
        v-model:active-key="active"
        checkable
        :include-parents="includeParents"
      />
    </div>
    <p class="tree-demo__val">{{ t['tree.checked'] }}{{ checked.length }}{{ t['tree.checkedEnd'] }}{{ checked.join(', ') || '—' }}</p>
    <p class="tree-demo__hint">{{ t['tree.hint'] }}</p>
  </div>
</template>

<style scoped>
.tree-demo { display: flex; flex-direction: column; gap: 10px; }
.tree-demo__ctrl { display: flex; }
.tree-demo__val,
.tree-demo__hint {
  font-size: 12.5px;
  color: var(--ui-ink-3);
  font-family: var(--ui-font-mono);
}
.tree-demo__hint { font-family: inherit; }
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTree, AeroSwitch } from 'aero-vue'
import type { AeroTreeNode } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const expanded = ref(['src', 'components'])
const checked = ref<string[]>(['styles'])
const active = ref('')
// includeParents 实时切换（false=仅叶 / true=全集含父）
const includeParents = ref(false)

const data: AeroTreeNode[] = [
  {
    key: 'src',
    label: 'src/',
    children: [
      {
        key: 'components',
        label: 'components/',
        children: [
          { key: 'button', label: 'button/' },
          { key: 'form', label: 'form/' },
          { key: 'tree', label: 'tree/' },
        ],
      },
      { key: 'composables', label: 'composables/' },
      { key: 'styles', label: 'styles/' },
      { key: 'index.ts', label: 'index.ts' },
    ],
  },
  {
    key: 'dist',
    label: 'dist/',
    children: [{ key: 'aero-ui.js', label: 'aero-ui.js' }, { key: 'styles.css', label: 'styles.css' }],
  },
]

function onChecked(v: string[]) {
  checked.value = v
}
<\/script>

<template>
  <div class="tree-demo">
    <div class="tree-demo__ctrl">
      <AeroSwitch v-model="includeParents">{{ t['tree.includeParents'] }}</AeroSwitch>
    </div>
    <div style="max-width: 340px">
      <AeroTree
        :data="data"
        v-model:expanded="expanded"
        v-model:checked="checked"
        v-model:active-key="active"
        checkable
        :include-parents="includeParents"
      />
    </div>
    <p class="tree-demo__val">{{ t['tree.checked'] }}{{ checked.length }}{{ t['tree.checkedEnd'] }}{{ checked.join(', ') || '—' }}</p>
    <p class="tree-demo__hint">{{ t['tree.hint'] }}</p>
  </div>
</template>

<style scoped>
.tree-demo { display: flex; flex-direction: column; gap: 10px; }
.tree-demo__ctrl { display: flex; }
.tree-demo__val,
.tree-demo__hint {
  font-size: 12.5px;
  color: var(--ui-ink-3);
  font-family: var(--ui-font-mono);
}
.tree-demo__hint { font-family: inherit; }
</style>
`},"tree-select":{usage:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroTreeSelect } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const v = ref('button')

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const data = computed(() => [
  {
    key: 'basic',
    label: t.value['treeSelect.groupBasic'],
    children: [
      { key: 'button', label: t.value['treeSelect.optButton'] },
      { key: 'icon', label: t.value['treeSelect.optIcon'] },
      { key: 'typography', label: t.value['treeSelect.optTypography'] },
      { key: 'divider', label: t.value['treeSelect.optDivider'] },
    ],
  },
  {
    key: 'form',
    label: t.value['treeSelect.groupForm'],
    children: [
      { key: 'input', label: t.value['treeSelect.optInput'] },
      { key: 'select', label: t.value['treeSelect.optSelect'] },
      { key: 'datepicker', label: t.value['treeSelect.optDatepicker'] },
      { key: 'upload', label: t.value['treeSelect.optUpload'] },
    ],
  },
  {
    key: 'data',
    label: t.value['treeSelect.groupData'],
    children: [
      { key: 'table', label: t.value['treeSelect.optTable'] },
      { key: 'timeline', label: t.value['treeSelect.optTimeline'] },
      { key: 'statistic', label: t.value['treeSelect.optStatistic'] },
    ],
  },
  {
    key: 'feedback',
    label: t.value['treeSelect.groupFeedback'],
    children: [
      { key: 'toast', label: t.value['treeSelect.optToast'] },
      { key: 'dialog', label: t.value['treeSelect.optDialog'] },
    ],
  },
])
<\/script>

<template>
  <div class="ts-demo">
    <div style="max-width: 380px">
      <AeroTreeSelect v-model="v" :data="data" :placeholder="t['treeSelect.placeholder']" />
    </div>
    <p class="ts-demo__val">{{ t['treeSelect.current'] }} {{ v || t['treeSelect.none'] }}</p>
  </div>
</template>

<style scoped>
.ts-demo { display: flex; flex-direction: column; gap: 10px; }
.ts-demo__val { font-size: 12.5px; color: var(--ui-ink-3); font-family: var(--ui-font-mono); }
</style>
`,source:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { AeroTreeSelect } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const v = ref('button')

// computed 化——切语言不刷新即翻转（顶层一次性求值 t.value[] 已废除）
const data = computed(() => [
  {
    key: 'basic',
    label: t.value['treeSelect.groupBasic'],
    children: [
      { key: 'button', label: t.value['treeSelect.optButton'] },
      { key: 'icon', label: t.value['treeSelect.optIcon'] },
      { key: 'typography', label: t.value['treeSelect.optTypography'] },
      { key: 'divider', label: t.value['treeSelect.optDivider'] },
    ],
  },
  {
    key: 'form',
    label: t.value['treeSelect.groupForm'],
    children: [
      { key: 'input', label: t.value['treeSelect.optInput'] },
      { key: 'select', label: t.value['treeSelect.optSelect'] },
      { key: 'datepicker', label: t.value['treeSelect.optDatepicker'] },
      { key: 'upload', label: t.value['treeSelect.optUpload'] },
    ],
  },
  {
    key: 'data',
    label: t.value['treeSelect.groupData'],
    children: [
      { key: 'table', label: t.value['treeSelect.optTable'] },
      { key: 'timeline', label: t.value['treeSelect.optTimeline'] },
      { key: 'statistic', label: t.value['treeSelect.optStatistic'] },
    ],
  },
  {
    key: 'feedback',
    label: t.value['treeSelect.groupFeedback'],
    children: [
      { key: 'toast', label: t.value['treeSelect.optToast'] },
      { key: 'dialog', label: t.value['treeSelect.optDialog'] },
    ],
  },
])
<\/script>

<template>
  <div class="ts-demo">
    <div style="max-width: 380px">
      <AeroTreeSelect v-model="v" :data="data" :placeholder="t['treeSelect.placeholder']" />
    </div>
    <p class="ts-demo__val">{{ t['treeSelect.current'] }} {{ v || t['treeSelect.none'] }}</p>
  </div>
</template>

<style scoped>
.ts-demo { display: flex; flex-direction: column; gap: 10px; }
.ts-demo__val { font-size: 12.5px; color: var(--ui-ink-3); font-family: var(--ui-font-mono); }
</style>
`},typography:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTypography } from 'aero-vue'
import { AeroTag } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const animKey = ref(0)
function replay() { animKey.value++ }
<\/script>

<template>
  <div class="type-demo" :key="animKey">
    <div class="type-row">
      <span class="spec">Display / 900 / 44px</span>
      <AeroTypography level="display">{{ t['typography.display'] }}</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Heading EN / 700 / 34px</span>
      <AeroTypography level="heading-en" en>Ship it. Scale it. 0→1 in 11.6s</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Title / 700 / 22px</span>
      <AeroTypography level="title">{{ t['typography.title'] }}</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Body / 400 / 15.5px</span>
      <AeroTypography level="body" style="max-width: 560px">{{ t['typography.body'] }}</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Inline elements</span>
      <div class="inline-els pg-prose">
        <AeroTag>TAG</AeroTag>
        <a class="t-link" href="javascript:;">{{ t['typography.link'] }}</a>
        <kbd>Ctrl</kbd> + <kbd>K</kbd>
        <b>{{ t['typography.bold'] }}</b>
        <AeroTag>aero deploy</AeroTag>
      </div>
    </div>
    <div class="type-row">
      <span class="spec">Highlight / {{ t['typography.highlight'] }}</span>
      <div class="hl-row">
        <span class="hl-demo">{{ t['typography.sendTo'] }}<AeroTypography level="title" highlight class="hl-word-demo">{{ t['typography.cloudWord'] }}</AeroTypography></span>
        <span class="hl-demo">{{ t['typography.like'] }}<AeroTypography level="title" highlight class="hl-word-demo">{{ t['typography.boltWord'] }}</AeroTypography>{{ t['typography.sameAs'] }}</span>
        <span class="hl-demo">{{ t['typography.stickerPre'] }}<AeroTypography level="title" sticker class="hl-box-demo">NEW!</AeroTypography>{{ t['typography.stickerPost'] }}</span>
        <AeroButton type="outline" size="sm" @click="replay">{{ t['typography.replay'] }}</AeroButton>
        <AeroTag :key="\`replay-\${animKey}\`">{{ t['typography.trigger'] }} #{{ animKey }}</AeroTag>
        <AeroTag>.hl-word / .hl-box</AeroTag>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.type-demo {
  width: 100%;
}

.type-row {
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 2px solid var(--ui-line);
  flex-wrap: wrap;

  &:last-child { border-bottom: 0; }

  .spec {
    font-family: var(--ui-font-mono);
    font-size: 12px;
    color: var(--ui-ink-3);
    min-width: 170px;
  }
}

.inline-els {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  .t-link {
    color: var(--ui-brand-ink);
    font-weight: 700;

    &:hover { text-decoration: underline; }
  }
}

.hl-row {
  display: flex;
  gap: 12px 34px;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
}

.hl-demo {
  font-size: 25px;
  font-weight: 900;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
}

// 覆写内联字号：Typography 的 highlight/sticker 在 25px 字号下还原 demo 观感
:deep(.hl-word-demo) {
  font-size: 25px;
  font-weight: 900;
}

:deep(.hl-box-demo) {
  font-size: 16px;
}

/* 行内元素（kbd/code/mark/em）观感由 demo 站全局单源 .pg-prose（style.scss）承担，
   本组件 scoped 块不再并行定义 */
</style>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroTypography } from 'aero-vue'
import { AeroTag } from 'aero-vue'
import { AeroButton } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo

const animKey = ref(0)
function replay() { animKey.value++ }
<\/script>

<template>
  <div class="type-demo" :key="animKey">
    <div class="type-row">
      <span class="spec">Display / 900 / 44px</span>
      <AeroTypography level="display">{{ t['typography.display'] }}</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Heading EN / 700 / 34px</span>
      <AeroTypography level="heading-en" en>Ship it. Scale it. 0→1 in 11.6s</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Title / 700 / 22px</span>
      <AeroTypography level="title">{{ t['typography.title'] }}</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Body / 400 / 15.5px</span>
      <AeroTypography level="body" style="max-width: 560px">{{ t['typography.body'] }}</AeroTypography>
    </div>
    <div class="type-row">
      <span class="spec">Inline elements</span>
      <div class="inline-els pg-prose">
        <AeroTag>TAG</AeroTag>
        <a class="t-link" href="javascript:;">{{ t['typography.link'] }}</a>
        <kbd>Ctrl</kbd> + <kbd>K</kbd>
        <b>{{ t['typography.bold'] }}</b>
        <AeroTag>aero deploy</AeroTag>
      </div>
    </div>
    <div class="type-row">
      <span class="spec">Highlight / {{ t['typography.highlight'] }}</span>
      <div class="hl-row">
        <span class="hl-demo">{{ t['typography.sendTo'] }}<AeroTypography level="title" highlight class="hl-word-demo">{{ t['typography.cloudWord'] }}</AeroTypography></span>
        <span class="hl-demo">{{ t['typography.like'] }}<AeroTypography level="title" highlight class="hl-word-demo">{{ t['typography.boltWord'] }}</AeroTypography>{{ t['typography.sameAs'] }}</span>
        <span class="hl-demo">{{ t['typography.stickerPre'] }}<AeroTypography level="title" sticker class="hl-box-demo">NEW!</AeroTypography>{{ t['typography.stickerPost'] }}</span>
        <AeroButton type="outline" size="sm" @click="replay">{{ t['typography.replay'] }}</AeroButton>
        <AeroTag :key="\`replay-\${animKey}\`">{{ t['typography.trigger'] }} #{{ animKey }}</AeroTag>
        <AeroTag>.hl-word / .hl-box</AeroTag>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.type-demo {
  width: 100%;
}

.type-row {
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 2px solid var(--ui-line);
  flex-wrap: wrap;

  &:last-child { border-bottom: 0; }

  .spec {
    font-family: var(--ui-font-mono);
    font-size: 12px;
    color: var(--ui-ink-3);
    min-width: 170px;
  }
}

.inline-els {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  .t-link {
    color: var(--ui-brand-ink);
    font-weight: 700;

    &:hover { text-decoration: underline; }
  }
}

.hl-row {
  display: flex;
  gap: 12px 34px;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
}

.hl-demo {
  font-size: 25px;
  font-weight: 900;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
}

// 覆写内联字号：Typography 的 highlight/sticker 在 25px 字号下还原 demo 观感
:deep(.hl-word-demo) {
  font-size: 25px;
  font-weight: 900;
}

:deep(.hl-box-demo) {
  font-size: 16px;
}

/* 行内元素（kbd/code/mark/em）观感由 demo 站全局单源 .pg-prose（style.scss）承担，
   本组件 scoped 块不再并行定义 */
</style>
`},upload:{usage:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroUpload } from 'aero-vue'
import type { UploadFile } from 'aero-vue'

const files = ref<UploadFile[]>([])
<\/script>

<template>
  <!-- 外层 wrapper 是 .pg-stage 的 flex item（min-width:auto 链路第三次撞）——
 加 min-width:0 让 AeroUpload 内 max-width:100% 收缩到「宿主内容宽 316px」，
 长文件名在名称层 ellipsis，不撑出 demo 卡、不出页面横滚。
 max-width:400px 桌面定宽保留（宿主充足时仍 400px，短名像素不变）。 -->
  <div style="display: flex; flex-direction: column; gap: 18px; max-width: 400px; min-width: 0">
    <AeroUpload v-model="files" drag multiple accept="image/*" />
    <AeroUpload v-model="files" />
  </div>
</template>
`,source:`<script setup lang="ts">
import { ref } from 'vue'
import { AeroUpload } from 'aero-vue'
import type { UploadFile } from 'aero-vue'

const files = ref<UploadFile[]>([])
<\/script>

<template>
  <!-- 外层 wrapper 是 .pg-stage 的 flex item（min-width:auto 链路第三次撞）——
 加 min-width:0 让 AeroUpload 内 max-width:100% 收缩到「宿主内容宽 316px」，
 长文件名在名称层 ellipsis，不撑出 demo 卡、不出页面横滚。
 max-width:400px 桌面定宽保留（宿主充足时仍 400px，短名像素不变）。 -->
  <div style="display: flex; flex-direction: column; gap: 18px; max-width: 400px; min-width: 0">
    <AeroUpload v-model="files" drag multiple accept="image/*" />
    <AeroUpload v-model="files" />
  </div>
</template>
`},watermark:{usage:`<script setup lang="ts">
import { AeroWatermark, AeroCard } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroWatermark content="AERO UI" :gap="150" :max-width="480" :radius="16" style="overflow: hidden">
    <AeroCard :min-height="160">
      <h4>{{ t['watermark.title'] }}</h4>
      <p>{{ t['watermark.body'] }}</p>
    </AeroCard>
  </AeroWatermark>
</template>
`,source:`<script setup lang="ts">
import { AeroWatermark, AeroCard } from 'aero-vue'
// demo 文案走词包 demo 组
import { useLocale } from 'aero-vue'
const { demo } = useLocale()
const t = demo
<\/script>

<template>
  <AeroWatermark content="AERO UI" :gap="150" :max-width="480" :radius="16" style="overflow: hidden">
    <AeroCard :min-height="160">
      <h4>{{ t['watermark.title'] }}</h4>
      <p>{{ t['watermark.body'] }}</p>
    </AeroCard>
  </AeroWatermark>
</template>
`}},bT={button:G2,"button-group":K2,"action-buttons":lT,icon:ow,"icon-button":sw,link:rw,typography:xw,divider:Aw,space:Cw,scrollbar:Bw,grid:Lw,layout:Mw,"theme-switch":Jw,input:tA,textarea:aA,"input-number":lA,"input-tag":iA,search:pA,select:hA,cascader:_A,"tree-select":$A,"date-picker":TA,"time-picker":BA,checkbox:PA,radio:IA,switch:VA,slider:zA,rate:NA,"color-picker":UA,upload:WA,transfer:YA,autocomplete:ZA,mention:JA,otp:o4,form:a4,table:s4,tree:u4,timeline:p4,tag:f4,badge:A4,avatar:M4,"avatar-group":E4,cropper:V4,card:O4,carousel:j4,collapse:G4,descriptions:U4,empty:W4,image:X4,"image-viewer":Z4,pagination:e$,progress:o$,"ring-progress":s$,result:r$,segmented:f$,skeleton:L$,spinner:P$,statistic:D$,qrcode:q$,watermark:N$,terminal:j$,"code-block":U$,menu:Z$,tabs:J$,breadcrumb:e3,dropdown:t3,steps:r3,"page-header":i3,anchor:g3,affix:x3,"back-top":w3,tour:$3,dialog:S3,drawer:B3,"message-box":L3,notification:P3,alert:D3,loading:z3,popover:R3,popconfirm:O3,tooltip:N3,toast:G3,chip:X3,announce:lS,"motion-presets":wS,"dot-field":CS,"iridescent-threads":IS,"parallax-box":DS,marquee:RS,"party-fx":HS,phone:US,"mobile-carousel":KS,"mobile-stat-card":YS,"mobile-tab-bar":ZS,"swipe-deck":sT,"slide-go":rT,"sort-list":nT,"bottom-sheet":iT,knob:vT,"pull-to-refresh":gT,"config-provider":pS,"theme-provider":_S};function yT(e){const o=e==="en-us"?N2:q2;return H2.map((t,a)=>({name:o.groups[a]??"",items:t.items.map(s=>{var r,n;const l=o.items[s.key];return{key:s.key,title:(l==null?void 0:l.title)??s.key,component:s.component,desc:(l==null?void 0:l.desc)??"",demo:bT[s.key],props:(r=s.props)==null?void 0:r.map(c=>{var f;return[c[0],c[1],c[2],((f=l==null?void 0:l.props)==null?void 0:f[c[0]])??""]}),events:(n=s.events)==null?void 0:n.map(c=>{var f;return[c[0],c[1],((f=l==null?void 0:l.events)==null?void 0:f[c[0]])??""]})}})}))}const Uo=G(()=>yT(it.locale));function _T(e){var o;return((o=wc[e])==null?void 0:o.usage)??""}function xT(e){var o;return((o=wc[e])==null?void 0:o.source)??""}const kT="https://FanXingYiDianYun.github.io/aero-ui-view/#/ai-guide";function Nr(e){if(!e)return"";let o=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return o=o.replace(/&lt;(\/?)(kbd|code|mark|em)&gt;/g,(t,a,s)=>`<${a}${s}>`),o}const wT={class:"pg"},AT={class:"pg-body"},$T={class:"pg-main"},ST={class:"pg-main__in"},TT={class:"pg-head"},CT={class:"pg-head-row"},BT={class:"pg-desc"},LT={class:"pg-api pg-ai-block"},MT={class:"pg-ai-lead"},PT={class:"pg-api pg-ai-block"},IT={class:"pg-ai-lead"},DT={class:"pg-ai-lead"},VT={class:"pg-ai-step-gap"},zT={class:"pg-ai-substep"},ET={class:"pg-ai-lead"},RT={class:"pg-ai-lead"},FT={class:"pg-api pg-ai-block"},OT=["innerHTML"],HT={class:"pg-head"},qT={class:"pg-head-row"},NT={class:"pg-comp"},jT=["innerHTML"],GT={class:"pg-stage"},UT={class:"pg-stage-label"},KT={class:"pg-stage-tools"},WT=["aria-label"],YT=["aria-label"],XT={key:0,class:"pg-codeview"},ZT=["aria-expanded"],QT={class:"pg-codeview__zone-in"},JT={key:1,class:"pg-api"},e8={class:"pg-api__wrap"},t8={class:"pg-api__scroll"},o8={key:2,class:"pg-api"},a8={class:"pg-api__wrap"},s8={class:"pg-api__scroll"},l8={key:2,class:"pg-none"},r8=z({__name:"App",setup(e){const o=C(""),t=C(location.hash.slice(2)||"button"),a=C(!1),{t:s}=Nl(),l=C(!1),r=C(!1),n=C(!0),c=G(()=>s.value.aiGuidePage.oneLiner(kT)),f=G(()=>{var V;return xT(((V=_.value)==null?void 0:V.item.key)??"")});async function m(){var D;const V=((D=_.value)==null?void 0:D.item.key)??"",E=_T(V);try{await navigator.clipboard.writeText(E)}catch{const j=document.createElement("textarea");j.value=E,document.body.appendChild(j),j.select(),document.execCommand("copy"),j.remove()}a.value=!0,Ze.success(s.value.toast.demoCopied),setTimeout(()=>a.value=!1,1600)}be(t,()=>{r.value=!1}),window.addEventListener("hashchange",()=>{const V=location.hash.slice(2)||"button";V!==t.value&&(t.value=V)});function h(V){t.value=V,location.hash!==`#/${V}`&&(location.hash=`#/${V}`),requestAnimationFrame(()=>{var E;(E=document.querySelector(".pg-main"))==null||E.scrollTo({top:0})})}const g=G(()=>{const V=o.value.trim().toLowerCase();return V?Uo.value.map(E=>{const D=E.items.find(P=>P.key.includes(V)),j=E.items.find(P=>!P.key.includes(V)&&y(V,P.title)),S=D??j;return{...E,items:S?[S]:[]}}).filter(E=>E.items.length):Uo.value}),_=G(()=>{for(const V of Uo.value){const E=V.items.find(D=>D.key===t.value);if(E)return{group:V,item:E}}return null}),k=C(new Set(_.value?[_.value.group.name]:[]));function x(V){const E=new Set(k.value);E.has(V)?E.delete(V):E.add(V),k.value=E}be(t,()=>{var E;const V=(E=_.value)==null?void 0:E.group.name;V&&!k.value.has(V)&&(k.value=new Set([...k.value,V]))});let b=null;function $(){b==null||b.disconnect();const E=Array.from(document.querySelectorAll(".pg-prose")).flatMap(D=>Array.from(D.querySelectorAll("mark")));E.length&&(E.forEach(D=>D.classList.add("is-armed")),b=new IntersectionObserver(D=>{for(const j of D){if(!j.isIntersecting)continue;const S=j.target;S.classList.add("is-erasing"),S.addEventListener("animationend",()=>{S.classList.remove("is-armed","is-erasing")},{once:!0})}},{threshold:.4}),E.forEach(D=>b==null?void 0:b.observe(D)))}be([t,it.locale],([V,E])=>{V==="ai-guide"&&Oe($)},{immediate:!0});function y(V,E){const D=E.toLowerCase();let j=0;for(let S=0;S<V.length;S++){const P=D.indexOf(V[S],j);if(P<0)return!1;j=P+1}return!0}const w=G(()=>{const V=o.value.trim().toLowerCase();if(!V)return null;const E={};for(const D of Uo.value)for(const j of D.items)(y(V,j.key)||y(V,j.title))&&(E[j.key]=!0);return E}),T=G(()=>Uo.value.flatMap(V=>V.items.map(E=>({value:E.key,label:E.title,group:V.name}))));function L(V){h(String(V.value)),l.value=!1}function F(V){if(V){const D=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",j=document.scrollingElement;j&&j.scrollTop>0&&j.scrollTo({top:0,behavior:D});const S=document.querySelector(".pg-main");S&&S.scrollTop>0&&S.scrollTo({top:0,behavior:D})}l.value=V}return(V,E)=>(d(),p("div",wT,[A(i(zl),{open:n.value,"onUpdate:open":E[0]||(E[0]=D=>n.value=D),icon:"sparkles","action-href":"https://github.com/FanXingYiDianYun/aero-vue"},{title:I(()=>[R(v(i(s).announce.title),1)]),action:I(()=>[R(v(i(s).announce.action),1)]),default:I(()=>[R(" "+v(i(s).announce.body)+" ",1)]),_:1},8,["open"]),A(S2,{query:o.value,"menu-open":l.value,onQuery:E[1]||(E[1]=D=>o.value=D),onGoHome:E[2]||(E[2]=D=>h("button")),onMenuToggle:F},null,8,["query","menu-open"]),A(He,{name:"pg-menu"},{default:I(()=>[l.value?(d(),fe(O2,{key:0,groups:g.value,active:t.value,"open-groups":k.value,"search-options":T.value,onGroupToggle:x,onGo:E[3]||(E[3]=D=>{h(D),l.value=!1}),onGoClose:E[4]||(E[4]=D=>l.value=!1),onSearchPick:L},null,8,["groups","active","open-groups","search-options"])):W("",!0)]),_:1}),u("div",AT,[A(n2,{groups:g.value,active:t.value,hits:w.value,query:o.value.trim(),onGo:h},null,8,["groups","active","hits","query"]),u("main",$T,[u("div",ST,[t.value==="ai-guide"?(d(),p(q,{key:0},[u("div",TT,[u("div",CT,[u("h1",null,v(i(s).aiGuidePage.title),1),E[7]||(E[7]=u("code",{class:"pg-comp"},"aero-vue",-1))]),u("p",BT,v(i(s).aiGuidePage.intro),1)]),u("div",LT,[u("h3",null,v(i(s).aiGuidePage.copyBlockLabel),1),u("p",MT,v(i(s).aiGuidePage.quickStartLead),1),A(i(ra),{locale:i(it).locale},{default:I(()=>[A(i(Jt),{code:c.value,copyable:!0,lang:"text",title:i(s).aiGuidePage.copyBlockLabel},null,8,["code","title"])]),_:1},8,["locale"])]),u("div",PT,[u("h3",null,v(i(s).aiGuidePage.step1Title),1),u("p",IT,v(i(s).aiGuidePage.step1Desc),1),A(i(Jt),{code:i(s).aiGuidePage.step1Code1,copyable:!0,lang:"bash"},null,8,["code"]),u("p",DT,v(i(s).aiGuidePage.step1Follow),1),A(i(Jt),{code:i(s).aiGuidePage.step1Code2,copyable:!0,lang:"js"},null,8,["code"]),u("div",VT,[u("h3",zT,v(i(s).aiGuidePage.step2Title),1),u("p",ET,v(i(s).aiGuidePage.step2Desc),1),A(i(Jt),{code:i(s).aiGuidePage.step2Code,copyable:!0,lang:"bash"},null,8,["code"]),u("p",RT,v(i(s).aiGuidePage.step2Follow),1)])]),u("div",FT,[u("h3",null,v(i(s).aiGuidePage.boxSizingTitle),1),A(i(Jt),{code:i(s).aiGuidePage.boxSizingCode,copyable:!0,lang:"css",title:"global reset"},null,8,["code"]),A(i(Qe),{level:"body"},{default:I(()=>[u("span",{class:"pg-ai-note pg-prose",innerHTML:i(Nr)(i(s).aiGuidePage.boxSizingBody)},null,8,OT)]),_:1})])],64)):_.value?(d(),p(q,{key:1},[u("div",HT,[u("div",qT,[u("h1",null,v(_.value.item.title),1),u("code",NT,v(_.value.item.component),1)]),u("p",{class:"pg-desc pg-prose",innerHTML:i(Nr)(_.value.item.desc)},null,8,jT)]),u("div",GT,[u("span",UT,v(i(s).codeView.stage),1),u("div",KT,[u("button",{class:"pg-stage-copy",type:"button","aria-label":a.value?i(s).codeView.copied:i(s).codeView.copyCode,onClick:m},[A(i(We),{name:a.value?"check":"copy",size:14},null,8,["name"]),u("span",null,v(a.value?i(s).codeView.copied:i(s).codeView.copyCode),1)],8,WT),u("button",{class:"pg-stage-copy",type:"button","aria-label":i(s).codeView.viewCode,onClick:E[5]||(E[5]=D=>r.value=!r.value)},[A(i(We),{name:r.value?"chevron-up":"code",size:14},null,8,["name"]),u("span",null,v(i(s).codeView.viewCode),1)],8,YT)]),A(i(ra),{locale:i(it).locale},{default:I(()=>[(d(),fe(_o(_.value.item.demo),{key:_.value.item.key}))]),_:1},8,["locale"])]),f.value?(d(),p("div",XT,[u("button",{class:"pg-codeview__toggle",type:"button","aria-expanded":r.value,onClick:E[6]||(E[6]=D=>r.value=!r.value)},[A(i(We),{name:"chevron-down",size:14,class:Q(["pg-codeview__chev",{"is-open":r.value}])},null,8,["class"]),u("span",null,v(i(s).codeView.fullSource(_.value.item.component)),1)],8,ZT),u("div",{class:Q(["pg-codeview__zone",{"is-open":r.value}])},[u("div",QT,[A(i(ra),{locale:i(it).locale},{default:I(()=>[A(i(Jt),{code:f.value,lang:"vue","line-numbers":!0,copyable:!0,title:_.value.item.component,flush:""},null,8,["code","title"])]),_:1},8,["locale"])])],2)])):W("",!0),_.value.item.props?(d(),p("div",JT,[E[8]||(E[8]=u("h3",null,"Props",-1)),u("div",e8,[u("div",t8,[u("table",null,[u("thead",null,[u("tr",null,[u("th",null,v(i(s).api.name),1),u("th",null,v(i(s).api.type),1),u("th",null,v(i(s).api.default),1),u("th",null,v(i(s).api.description),1)])]),u("tbody",null,[(d(!0),p(q,null,X(_.value.item.props,D=>(d(),p("tr",{key:D[0]},[u("td",null,[u("code",null,v(D[0]),1)]),u("td",null,[u("code",null,v(D[1]),1)]),u("td",null,[u("code",null,v(D[2]),1)]),u("td",null,v(D[3]),1)]))),128))])])])])])):W("",!0),_.value.item.events?(d(),p("div",o8,[E[9]||(E[9]=u("h3",null,"Events",-1)),u("div",a8,[u("div",s8,[u("table",null,[u("thead",null,[u("tr",null,[u("th",null,v(i(s).api.name),1),u("th",null,v(i(s).api.payload),1),u("th",null,v(i(s).api.description),1)])]),u("tbody",null,[(d(!0),p(q,null,X(_.value.item.events,D=>(d(),p("tr",{key:D[0]},[u("td",null,[u("code",null,v(D[0]),1)]),u("td",null,[u("code",null,v(D[1]),1)]),u("td",null,v(D[2]),1)]))),128))])])])])])):W("",!0)],64)):(d(),p("div",l8,[u("h1",null,v(i(s).notFound.title),1),u("p",null,v(i(s).notFound.body(o.value)),1)]))])])])]))}}),n8=Z(r8,[["__scopeId","data-v-e3c68e9e"]]),i8=960,c8="pg-nav-mobile";let Gs=null;function d8(){if(Gs)return;const e=window.matchMedia(`(max-width: ${i8}px)`),o=()=>document.documentElement.classList.toggle(c8,e.matches);o(),e.addEventListener("change",o),Gs=()=>{e.removeEventListener("change",o),Gs=null}}d8();Ts(n8).use(t2).mount("#app");
