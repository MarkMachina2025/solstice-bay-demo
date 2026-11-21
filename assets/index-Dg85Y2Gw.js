(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Yd={exports:{}},wl={};var ox;function tb(){if(ox)return wl;ox=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:f,ref:l!==void 0?l:null,props:c}}return wl.Fragment=t,wl.jsx=i,wl.jsxs=i,wl}var lx;function eb(){return lx||(lx=1,Yd.exports=tb()),Yd.exports}var Rt=eb(),qd={exports:{}},ye={};var cx;function nb(){if(cx)return ye;cx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function D(k,ot,Dt){this.props=k,this.context=ot,this.refs=y,this.updater=Dt||A}D.prototype.isReactComponent={},D.prototype.setState=function(k,ot){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ot,"setState")},D.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function O(){}O.prototype=D.prototype;function T(k,ot,Dt){this.props=k,this.context=ot,this.refs=y,this.updater=Dt||A}var R=T.prototype=new O;R.constructor=T,M(R,D.prototype),R.isPureReactComponent=!0;var L=Array.isArray;function P(){}var b={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function B(k,ot,Dt){var $=Dt.ref;return{$$typeof:o,type:k,key:ot,ref:$!==void 0?$:null,props:Dt}}function I(k,ot){return B(k.type,ot,k.props)}function W(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function J(k){var ot={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Dt){return ot[Dt]})}var X=/\/+/g;function V(k,ot){return typeof k=="object"&&k!==null&&k.key!=null?J(""+k.key):ot.toString(36)}function H(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(P,P):(k.status="pending",k.then(function(ot){k.status==="pending"&&(k.status="fulfilled",k.value=ot)},function(ot){k.status==="pending"&&(k.status="rejected",k.reason=ot)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function q(k,ot,Dt,$,vt){var At=typeof k;(At==="undefined"||At==="boolean")&&(k=null);var pt=!1;if(k===null)pt=!0;else switch(At){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(k.$$typeof){case o:case t:pt=!0;break;case _:return pt=k._init,q(pt(k._payload),ot,Dt,$,vt)}}if(pt)return vt=vt(k),pt=$===""?"."+V(k,0):$,L(vt)?(Dt="",pt!=null&&(Dt=pt.replace(X,"$&/")+"/"),q(vt,ot,Dt,"",function(Bt){return Bt})):vt!=null&&(W(vt)&&(vt=I(vt,Dt+(vt.key==null||k&&k.key===vt.key?"":(""+vt.key).replace(X,"$&/")+"/")+pt)),ot.push(vt)),1;pt=0;var K=$===""?".":$+":";if(L(k))for(var mt=0;mt<k.length;mt++)$=k[mt],At=K+V($,mt),pt+=q($,ot,Dt,At,vt);else if(mt=E(k),typeof mt=="function")for(k=mt.call(k),mt=0;!($=k.next()).done;)$=$.value,At=K+V($,mt++),pt+=q($,ot,Dt,At,vt);else if(At==="object"){if(typeof k.then=="function")return q(H(k),ot,Dt,$,vt);throw ot=String(k),Error("Objects are not valid as a React child (found: "+(ot==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ot)+"). If you meant to render a collection of children, use an array instead.")}return pt}function rt(k,ot,Dt){if(k==null)return k;var $=[],vt=0;return q(k,$,"","",function(At){return ot.call(Dt,At,vt++)}),$}function st(k){if(k._status===-1){var ot=k._result,Dt=ot();Dt.then(function($){(k._status===0||k._status===-1)&&(k._status=1,k._result=$,Dt.status===void 0&&(Dt.status="fulfilled",Dt.value=$))},function($){(k._status===0||k._status===-1)&&(k._status=2,k._result=$,Dt.status===void 0&&(Dt.status="rejected",Dt.reason=$))}),k._status===-1&&(k._status=0,k._result=Dt)}if(k._status===1)return k._result.default;throw k._result}var ut=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ot=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(ot))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function ct(k){var ot=b.T,Dt={};Dt.types=ot!==null?ot.types:null,b.T=Dt;try{var $=k(),vt=b.S;vt!==null&&vt(Dt,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(P,ut)}catch(At){ut(At)}finally{ot!==null&&Dt.types!==null&&(ot.types=Dt.types),b.T=ot}}function kt(k){var ot=b.T;if(ot!==null){var Dt=ot.types;Dt===null?ot.types=[k]:Dt.indexOf(k)===-1&&Dt.push(k)}else ct(kt.bind(null,k))}var Zt={map:rt,forEach:function(k,ot,Dt){rt(k,function(){ot.apply(this,arguments)},Dt)},count:function(k){var ot=0;return rt(k,function(){ot++}),ot},toArray:function(k){return rt(k,function(ot){return ot})||[]},only:function(k){if(!W(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return ye.Activity=v,ye.Children=Zt,ye.Component=D,ye.Fragment=i,ye.Profiler=l,ye.PureComponent=T,ye.StrictMode=s,ye.Suspense=p,ye.ViewTransition=g,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,ye.__COMPILER_RUNTIME={__proto__:null,c:function(k){return b.H.useMemoCache(k)}},ye.addTransitionType=kt,ye.cache=function(k){return function(){return k.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(k,ot,Dt){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var $=M({},k.props),vt=k.key;if(ot!=null)for(At in ot.key!==void 0&&(vt=""+ot.key),ot)!U.call(ot,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&ot.ref===void 0||($[At]=ot[At]);var At=arguments.length-2;if(At===1)$.children=Dt;else if(1<At){for(var pt=Array(At),K=0;K<At;K++)pt[K]=arguments[K+2];$.children=pt}return B(k.type,vt,$)},ye.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:c,_context:k},k},ye.createElement=function(k,ot,Dt){var $,vt={},At=null;if(ot!=null)for($ in ot.key!==void 0&&(At=""+ot.key),ot)U.call(ot,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(vt[$]=ot[$]);var pt=arguments.length-2;if(pt===1)vt.children=Dt;else if(1<pt){for(var K=Array(pt),mt=0;mt<pt;mt++)K[mt]=arguments[mt+2];vt.children=K}if(k&&k.defaultProps)for($ in pt=k.defaultProps,pt)vt[$]===void 0&&(vt[$]=pt[$]);return B(k,At,vt)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(k){return{$$typeof:d,render:k}},ye.isValidElement=W,ye.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:st}},ye.memo=function(k,ot){return{$$typeof:m,type:k,compare:ot===void 0?null:ot}},ye.startTransition=ct,ye.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},ye.use=function(k){return b.H.use(k)},ye.useActionState=function(k,ot,Dt){return b.H.useActionState(k,ot,Dt)},ye.useCallback=function(k,ot){return b.H.useCallback(k,ot)},ye.useContext=function(k){return b.H.useContext(k)},ye.useDebugValue=function(){},ye.useDeferredValue=function(k,ot){return b.H.useDeferredValue(k,ot)},ye.useEffect=function(k,ot){return b.H.useEffect(k,ot)},ye.useEffectEvent=function(k){return b.H.useEffectEvent(k)},ye.useId=function(){return b.H.useId()},ye.useImperativeHandle=function(k,ot,Dt){return b.H.useImperativeHandle(k,ot,Dt)},ye.useInsertionEffect=function(k,ot){return b.H.useInsertionEffect(k,ot)},ye.useLayoutEffect=function(k,ot){return b.H.useLayoutEffect(k,ot)},ye.useMemo=function(k,ot){return b.H.useMemo(k,ot)},ye.useOptimistic=function(k,ot){return b.H.useOptimistic(k,ot)},ye.useReducer=function(k,ot,Dt){return b.H.useReducer(k,ot,Dt)},ye.useRef=function(k){return b.H.useRef(k)},ye.useState=function(k){return b.H.useState(k)},ye.useSyncExternalStore=function(k,ot,Dt){return b.H.useSyncExternalStore(k,ot,Dt)},ye.useTransition=function(){return b.H.useTransition()},ye.version="19.3.0",ye}var ux;function Rm(){return ux||(ux=1,qd.exports=nb()),qd.exports}var fn=Rm(),Zd={exports:{}},Al={},Kd={exports:{}},Qd={};var fx;function ib(){return fx||(fx=1,(function(o){function t(H,q){var rt=H.length;H.push(q);t:for(;0<rt;){var st=rt-1>>>1,ut=H[st];if(0<l(ut,q))H[st]=q,H[rt]=ut,rt=st;else break t}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var q=H[0],rt=H.pop();if(rt!==q){H[0]=rt;t:for(var st=0,ut=H.length,ct=ut>>>1;st<ct;){var kt=2*(st+1)-1,Zt=H[kt],k=kt+1,ot=H[k];if(0>l(Zt,rt))k<ut&&0>l(ot,Zt)?(H[st]=ot,H[k]=rt,st=k):(H[st]=Zt,H[kt]=rt,st=kt);else if(k<ut&&0>l(ot,rt))H[st]=ot,H[k]=rt,st=k;else break t}}return q}function l(H,q){var rt=H.sortIndex-q.sortIndex;return rt!==0?rt:H.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,g=3,S=!1,E=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function T(H){for(var q=i(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=H)s(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=i(m)}}function R(H){if(A=!1,T(H),!E)if(i(p)!==null)E=!0,L||(L=!0,W());else{var q=i(m);q!==null&&V(R,q.startTime-H)}}var L=!1,P=-1,b=5,U=-1;function B(){return M?!0:!(o.unstable_now()-U<b)}function I(){if(M=!1,L){var H=o.unstable_now();U=H;var q=!0;try{t:{E=!1,A&&(A=!1,D(P),P=-1),S=!0;var rt=g;try{e:{for(T(H),v=i(p);v!==null&&!(v.expirationTime>H&&B());){var st=v.callback;if(typeof st=="function"){v.callback=null,g=v.priorityLevel;var ut=st(v.expirationTime<=H);if(H=o.unstable_now(),typeof ut=="function"){v.callback=ut,T(H),q=!0;break e}v===i(p)&&s(p),T(H)}else s(p);v=i(p)}if(v!==null)q=!0;else{var ct=i(m);ct!==null&&V(R,ct.startTime-H),q=!1}}break t}finally{v=null,g=rt,S=!1}q=void 0}}finally{q?W():L=!1}}}var W;if(typeof O=="function")W=function(){O(I)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,X=J.port2;J.port1.onmessage=I,W=function(){X.postMessage(null)}}else W=function(){y(I,0)};function V(H,q){P=y(function(){H(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(H){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var rt=g;g=q;try{return H()}finally{g=rt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(H,q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var rt=g;g=H;try{return q()}finally{g=rt}},o.unstable_scheduleCallback=function(H,q,rt){var st=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?st+rt:st):rt=st,H){case 1:var ut=-1;break;case 2:ut=250;break;case 5:ut=1073741823;break;case 4:ut=1e4;break;default:ut=5e3}return ut=rt+ut,H={id:_++,callback:q,priorityLevel:H,startTime:rt,expirationTime:ut,sortIndex:-1},rt>st?(H.sortIndex=rt,t(m,H),i(p)===null&&H===i(m)&&(A?(D(P),P=-1):A=!0,V(R,rt-st))):(H.sortIndex=ut,t(p,H),E||S||(E=!0,L||(L=!0,W()))),H},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(H){var q=g;return function(){var rt=g;g=q;try{return H.apply(this,arguments)}finally{g=rt}}}})(Qd)),Qd}var hx;function ab(){return hx||(hx=1,Kd.exports=ib()),Kd.exports}var Jd={exports:{}},Gn={};var dx;function sb(){if(dx)return Gn;dx=1;var o=Rm();function t(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)v+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(_,v,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===f?f:""+S,children:_,containerInfo:v,implementation:g}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.browser=function(_){return{$$typeof:c,_reason:_}},Gn.createPortal=function(_,v){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return d(_,v,null,g)},Gn.flushSync=function(_){var v=p.T,g=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=v,s.p=g,s.d.f()}},Gn.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(_,v))},Gn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Gn.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var g=v.as,S=m(g,v.crossOrigin),E=typeof v.integrity=="string"?v.integrity:void 0,A=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;g==="style"?s.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:A}):g==="script"&&s.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:A,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Gn.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var g=m(v.as,v.crossOrigin);s.d.M(_,{crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(_)},Gn.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var g=v.as,S=m(g,v.crossOrigin);s.d.L(_,g,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Gn.preloadModule=function(_,v){if(typeof _=="string")if(v){var g=m(v.as,v.crossOrigin);s.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(_)},Gn.requestFormReset=function(_){s.d.r(_)},Gn.unstable_batchedUpdates=function(_,v){return _(v)},Gn.useFormState=function(_,v,g){return p.H.useFormState(_,v,g)},Gn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Gn.version="19.3.0",Gn}var px;function rb(){if(px)return Jd.exports;px=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jd.exports=sb(),Jd.exports}var mx;function ob(){if(mx)return Al;mx=1;var o=ab(),t=Rm(),i=rb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===r)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=h;else{for(var x=!1,N=u.child;N;){if(N===a){x=!0,a=u,r=h;break}if(N===r){x=!0,r=u,a=h;break}N=N.sibling}if(!x){for(N=h.child;N;){if(N===a){x=!0,a=h,r=u;break}if(N===r){x=!0,r=h,a=u;break}N=N.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,r,u,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,u,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,r,u,h))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=g(e);return a===null||A(n,e,a.child,{foundSelf:!1}),n}function A(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,D=null;function O(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function T(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(y=e),!0):!1}function R(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,n,a){for(var r=0,u=e;u;u=a(u))r++;u=0;for(var h=n;h;h=a(h))u++;for(;0<r-u;)e=a(e),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,b=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),V=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),kt=Symbol.for("react.legacy_hidden"),Zt=Symbol.for("react.memo_cache_sentinel"),k=Symbol.for("react.view_transition"),ot=Symbol.for("react.recoverable"),Dt=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=Dt&&e[Dt]||e["@@iterator"],typeof e=="function"?e:null)}var vt=Symbol.for("react.client.reference");function At(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case J:return"Profiler";case W:return"StrictMode";case q:return"Suspense";case rt:return"SuspenseList";case ct:return"Activity";case k:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case V:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case H:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case st:return n=e.displayName||null,n!==null?n:At(e.type)||"Memo";case ut:n=e._payload,e=e._init;try{return At(e(n))}catch{}}return null}var pt=Array.isArray,K=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bt={pending:!1,data:null,method:null,action:null},Ct=[],Ot=-1;function Lt(e){return{current:e}}function Nt(e){0>Ot||(e.current=Ct[Ot],Ct[Ot]=null,Ot--)}function Pt(e,n){Ot++,Ct[Ot]=e.current,e.current=n}var he=Lt(null),Me=Lt(null),de=Lt(null),me=Lt(null);function Y(e,n){switch(Pt(de,n),Pt(Me,e),Pt(he,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?g_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=g_(n),e=v_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Nt(he),Pt(he,e)}function Se(){Nt(he),Nt(Me),Nt(de)}function re(e){var n=e.memoizedState;n!==null&&($r._currentValue=n.memoizedState,Pt(me,e)),n=he.current;var a=v_(n,e.type);n!==a&&(Pt(Me,e),Pt(he,a))}function z(e){Me.current===e&&(Nt(he),Nt(Me)),me.current===e&&(Nt(me),$r._currentValue=Bt)}var w,it;function et(e){if(w===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);w=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+w+e+it}var xt=!1;function wt(e,n){if(!e||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(Gt){var tt=Gt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(Gt){tt=Gt}bt=!1;try{var dt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),bt=!0,new e}finally{bt&&(dt!==void 0?Object.defineProperty(e.prototype,"props",dt):delete e.prototype.props)}}}else{try{throw Error()}catch(Gt){tt=Gt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(Gt){if(Gt&&tt&&typeof Gt.stack=="string")return[Gt.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),x=h[0],N=h[1];if(x&&N){var G=x.split(`
`),at=N.split(`
`);for(u=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(r===G.length||u===at.length)for(r=G.length-1,u=at.length-1;1<=r&&0<=u&&G[r]!==at[u];)u--;for(;1<=r&&0<=u;r--,u--)if(G[r]!==at[u]){if(r!==1||u!==1)do if(r--,u--,0>u||G[r]!==at[u]){var gt=`
`+G[r].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=r&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?et(a):""}function Ut(e,n){switch(e.tag){case 26:case 27:case 5:return et(e.type);case 16:return et("Lazy");case 13:return e.child!==n&&n!==null?et("Suspense Fallback"):et("Suspense");case 19:return et("SuspenseList");case 0:case 15:return wt(e.type,!1);case 11:return wt(e.type.render,!1);case 1:return wt(e.type,!0);case 31:return et("Activity");case 30:return et("ViewTransition");default:return""}}function St(e){try{var n="",a=null;do n+=Ut(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mt=Object.prototype.hasOwnProperty,It=o.unstable_scheduleCallback,le=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,Vt=o.unstable_requestPaint,Jt=o.unstable_now,pe=o.unstable_getCurrentPriorityLevel,be=o.unstable_ImmediatePriority,j=o.unstable_UserBlockingPriority,zt=o.unstable_NormalPriority,Et=o.unstable_LowPriority,Ft=o.unstable_IdlePriority,Qt=o.log,Tt=o.unstable_setDisableYieldValue,oe=null,Kt=null;function Ve(e){if(typeof Qt=="function"&&Tt(e),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(oe,e)}catch{}}var Ee=Math.clz32?Math.clz32:yf,gi=Math.log,Di=Math.LN2;function yf(e){return e>>>=0,e===0?32:31-(gi(e)/Di|0)|0}var mr=256,Ls=262144,Za=4194304;function Ea(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Us(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var N=r&134217727;return N!==0?(r=N&~h,r!==0?u=Ea(r):(x&=N,x!==0?u=Ea(x):a||(a=N&~e,a!==0&&(u=Ea(a))))):(N=r&~h,N!==0?u=Ea(N):x!==0?u=Ea(x):a||(a=r&~e,a!==0&&(u=Ea(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ka(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function sa(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Ee(a),u=1<<r;n|=e[r],a&=~u}return n}function Lo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uo(){var e=Za;return Za<<=1,(Za&62914560)===0&&(Za=4194304),e}function gr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ra(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ic(e,n,a,r,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var N=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(a=x&~a;0<a;){var gt=31-Ee(a),bt=1<<gt;N[gt]=0,G[gt]=-1;var tt=at[gt];if(tt!==null)for(at[gt]=null,gt=0;gt<tt.length;gt++){var dt=tt[gt];dt!==null&&(dt.lane&=-536870913)}a&=~bt}r!==0&&Ps(e,r,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Ps(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ee(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Po(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ee(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Oo(e,n){var a=n&-n;return a=(a&42)!==0?1:zo(a),(a&(e.suspendedLanes|n))!==0?0:a}function zo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Io(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ac(){var e=mt.p;return e!==0?e:(e=window.event,e===void 0?32:tx(e.type))}function sc(e,n){var a=mt.p;try{return mt.p=e,n()}finally{mt.p=a}}var Ni=Math.random().toString(36).slice(2),C="__reactFiber$"+Ni,Z="__reactProps$"+Ni,_t="__reactContainer$"+Ni,ft="__reactEvents$"+Ni,ht="__reactListeners$"+Ni,Xt="__reactHandles$"+Ni,jt="__reactResources$"+Ni,Ht="__reactMarker$"+Ni,ee="__reactLoad$"+Ni;function ie(e){delete e[C],delete e[Z],delete e[ht],delete e[Xt]}function xe(e){var n;if(n=e[C])return n;for(var a=e.parentNode;a;){if(n=a[_t]||a[C]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=P_(e);e!==null;){if(a=e[C])return a;e=P_(e)}return n}e=a,a=e.parentNode}return null}function Te(e){if(e=e[C]||e[_t]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $t(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Pe(e){var n=e[jt];return n||(n=e[jt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(e){e[Ht]=!0}function an(e){e[ee]=void 0}var Ke=new Set,Tn={};function Yt(e,n){dn(e,n),dn(e+"Capture",n)}function dn(e,n){for(Tn[e]=n,e=0;e<n.length;e++)Ke.add(n[e])}var ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jn={},vi={};function oa(e){return Mt.call(vi,e)?!0:Mt.call(Jn,e)?!1:ke.test(e)?vi[e]=!0:(Jn[e]=!0,!1)}var Ne=!1;function qe(){var e=Ne;return Ne=!1,e}function on(e,n,a){if(oa(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function _i(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Fe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ta(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rc(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mf(e){if(!e._valueTracker){var n=Ta(e)?"checked":"value";e._valueTracker=rc(e,n,""+e[n])}}function a0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ta(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var yy=/[\n"\\]/g;function Li(e){return e.replace(yy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bf(e,n,a,r,u,h,x,N){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pn(n)):e.value!==""+pn(n)&&(e.value=""+pn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?Ef(e,pn(e.value)):Ef(e,pn(n)):a!=null?Ef(e,pn(a)):r!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+pn(N):e.removeAttribute("name")}function s0(e,n,a,r,u,h,x,N){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Mf(e);return}a=a!=null?""+pn(a):"",n=n!=null?""+pn(n):a,N||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=N?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Mf(e)}function Ef(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function vr(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+pn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function r0(e,n,a){if(n!=null&&(n=""+pn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pn(a):""}function o0(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(pt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=pn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Mf(e)}function _r(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var My=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function l0(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||My.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function c0(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Ne=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(l0(e,u,r),Ne=!0)}else for(var h in n)n.hasOwnProperty(h)&&l0(e,h,n[h])}function Tf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var by=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ey=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oc(e){return Ey.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var wf=null;function Af(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,Sr=null;function u0(e){var n=Te(e);if(n&&(e=n.stateNode)){var a=e[Z]||null;t:switch(e=n.stateNode,n.type){case"input":if(bf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Li(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Z]||null;if(!u)throw Error(s(90));bf(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&a0(r)}break t;case"textarea":r0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vr(e,!!a.multiple,n,!1)}}}var Rf=!1;function f0(e,n,a){if(Rf)return e(n,a);Rf=!0;try{var r=e(n);return r}finally{if(Rf=!1,(xr!==null||Sr!==null)&&(ou(),xr&&(n=xr,e=Sr,Sr=xr=null,u0(n),e)))for(n=0;n<e.length;n++)u0(e[n])}}function Bo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Z]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=!1;if(wa)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{Cf=!1}var Qa=null,Df=null,lc=null;function h0(){if(lc)return lc;var e,n=Df,a=n.length,r,u="value"in Qa?Qa.value:Qa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===u[h-r];r++);return lc=u.slice(e,1<r?1-r:void 0)}function cc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function uc(){return!0}function d0(){return!1}function jn(e){function n(a,r,u,h,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(a=e[N],this[N]=a?a(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?uc:d0,this.isPropagationStopped=d0,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=jn(Ja),Ho=P({},Ja,{view:0,detail:0}),Ty=jn(Ho),Nf,Lf,Go,hc=P({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Go&&(Go&&e.type==="mousemove"?(Nf=e.screenX-Go.screenX,Lf=e.screenY-Go.screenY):Lf=Nf=0,Go=e),Nf)},movementY:function(e){return"movementY"in e?e.movementY:Lf}}),p0=jn(hc),wy=P({},hc,{dataTransfer:0}),Ay=jn(wy),Ry=P({},Ho,{relatedTarget:0}),Uf=jn(Ry),Cy=P({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Dy=jn(Cy),Ny=P({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ly=jn(Ny),Uy=P({},Ja,{data:0}),m0=jn(Uy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zy[e])?!!n[e]:!1}function Pf(){return Iy}var By=P({},Ho,{key:function(e){if(e.key){var n=Py[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(e){return e.type==="keypress"?cc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fy=jn(By),Hy=P({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g0=jn(Hy),Gy=P({},Ja,{submitter:0}),Vy=jn(Gy),ky=P({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),Wy=jn(ky),Xy=P({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=jn(Xy),qy=P({},hc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=jn(qy),Ky=P({},Ja,{newState:0,oldState:0,source:0}),Qy=jn(Ky),Jy=[9,13,27,32],Of=wa&&"CompositionEvent"in window,Vo=null;wa&&"documentMode"in document&&(Vo=document.documentMode);var jy=wa&&"TextEvent"in window&&!Vo,v0=wa&&(!Of||Vo&&8<Vo&&11>=Vo),_0=" ",x0=!1;function S0(e,n){switch(e){case"keyup":return Jy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function $y(e,n){switch(e){case"compositionend":return y0(n);case"keypress":return n.which!==32?null:(x0=!0,_0);case"textInput":return e=n.data,e===_0&&x0?null:e;default:return null}}function tM(e,n){if(yr)return e==="compositionend"||!Of&&S0(e,n)?(e=h0(),lc=Df=Qa=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v0&&n.locale!=="ko"?null:n.data;default:return null}}var eM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!eM[e.type]:n==="textarea"}function b0(e,n,a,r){xr?Sr?Sr.push(r):Sr=[r]:xr=r,n=du(n,"onChange"),0<n.length&&(a=new fc("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var ko=null,Wo=null;function nM(e){u_(e,0)}function dc(e){var n=$t(e);if(a0(n))return e}function E0(e,n){if(e==="change")return n}var T0=!1;if(wa){var zf;if(wa){var If="oninput"in document;if(!If){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),If=typeof w0.oninput=="function"}zf=If}else zf=!1;T0=zf&&(!document.documentMode||9<document.documentMode)}function A0(){ko&&(ko.detachEvent("onpropertychange",R0),Wo=ko=null)}function R0(e){if(e.propertyName==="value"&&dc(Wo)){var n=[];b0(n,Wo,e,Af(e)),f0(nM,n)}}function iM(e,n,a){e==="focusin"?(A0(),ko=n,Wo=a,ko.attachEvent("onpropertychange",R0)):e==="focusout"&&A0()}function aM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dc(Wo)}function sM(e,n){if(e==="click")return dc(n)}function rM(e,n){if(e==="input"||e==="change")return dc(n)}function oM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var xi=typeof Object.is=="function"?Object.is:oM;function Xo(e,n){if(xi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Mt.call(n,u)||!xi(e[u],n[u]))return!1}return!0}function Bf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function C0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function D0(e,n){var a=C0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=C0(a)}}function N0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?N0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function L0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Bf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Bf(e.document)}return n}function Ff(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lM=wa&&"documentMode"in document&&11>=document.documentMode,Mr=null,Hf=null,Yo=null,Gf=!1;function U0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gf||Mr==null||Mr!==Bf(r)||(r=Mr,"selectionStart"in r&&Ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yo&&Xo(Yo,r)||(Yo=r,r=du(Hf,"onSelect"),0<r.length&&(n=new fc("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Mr)))}function Os(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var br={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},Vf={},P0={};wa&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function zs(e){if(Vf[e])return Vf[e];if(!br[e])return e;var n=br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in P0)return Vf[e]=n[a];return e}var O0=zs("animationend"),z0=zs("animationiteration"),I0=zs("animationstart"),cM=zs("transitionrun"),uM=zs("transitionstart"),fM=zs("transitioncancel"),B0=zs("transitionend"),F0=new Map,kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kf.push("scrollEnd");function Xi(e,n){F0.set(e,n),Yt(n,[e])}var hM=0;function Aa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ki.identifierPrefix;var a=hM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function H0(e){if(e==null||typeof e=="string")return e;var n=null,a=kr;if(a!==null)for(var r=0;r<a.length;r++){var u=e[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Ra(e,n){return e=H0(e),n=H0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],Er=0,Wf=0;function mc(){for(var e=Er,n=Wf=Er=0;n<e;){var a=Ui[n];Ui[n++]=null;var r=Ui[n];Ui[n++]=null;var u=Ui[n];Ui[n++]=null;var h=Ui[n];if(Ui[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}h!==0&&G0(a,u,h)}}function gc(e,n,a,r){Ui[Er++]=e,Ui[Er++]=n,Ui[Er++]=a,Ui[Er++]=r,Wf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Xf(e,n,a,r){return gc(e,n,a,r),vc(e)}function Is(e,n){return gc(e,null,null,n),vc(e)}function G0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,r=h.alternate,r!==null&&(r.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ee(a),e=h.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),h):null}function vc(e){if(50<pl)throw pl=0,ru=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Tr={};function dM(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,n,a,r){return new dM(e,n,a,r)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ca(e,n){var a=e.alternate;return a===null?(a=li(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function V0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _c(e,n,a,r,u,h){var x=0;if(r=e,typeof r=="function")Yf(r)&&(x=1);else if(typeof r=="string")x=G1(e,a,he.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case ct:return e=li(31,a,n,u),e.elementType=ct,e.lanes=h,e;case I:return Bs(a.children,u,h,n);case W:x=8,u|=24;break;case J:return e=li(12,a,n,u|2),e.elementType=J,e.lanes=h,e;case q:return e=li(13,a,n,u),e.elementType=q,e.lanes=h,e;case rt:return e=li(19,a,n,u),e.elementType=rt,e.lanes=h,e;case kt:case k:return e=u|32,e=li(30,a,n,e),e.elementType=k,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case V:x=10;break t;case X:x=9;break t;case H:x=11;break t;case st:x=14;break t;case ut:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=li(x,a,n,u),n.elementType=e,n.type=r,n.lanes=h,n}function Bs(e,n,a,r){return e=li(7,e,r,n),e.lanes=a,e}function qf(e,n,a){return e=li(6,e,null,n),e.lanes=a,e}function k0(e){var n=li(18,null,null,0);return n.stateNode=e,n}function Zf(e,n,a){return n=li(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var W0=new WeakMap;function Pi(e,n){if(typeof e=="object"&&e!==null){var a=W0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:St(n)},W0.set(e,n),n)}return{value:e,source:n,stack:St(n)}}var wr=[],Ar=0,xc=null,qo=0,Oi=[],zi=0,ja=null,ca=1,ua="";function Da(e,n){wr[Ar++]=qo,wr[Ar++]=xc,xc=e,qo=n}function X0(e,n,a){Oi[zi++]=ca,Oi[zi++]=ua,Oi[zi++]=ja,ja=e;var r=ca;e=ua;var u=32-Ee(r)-1;r&=~(1<<u),a+=1;var h=32-Ee(n)+u;if(30<h){var x=u-u%5;h=(r&(1<<x)-1).toString(32),r>>=x,u-=x,ca=1<<32-Ee(n)+u|a<<u|r,ua=h+e}else ca=1<<h|a<<u|r,ua=e}function Sc(e){e.return!==null&&(Da(e,1),X0(e,1,0))}function Kf(e){for(;e===xc;)xc=wr[--Ar],wr[Ar]=null,qo=wr[--Ar],wr[Ar]=null;for(;e===ja;)ja=Oi[--zi],Oi[zi]=null,ua=Oi[--zi],Oi[zi]=null,ca=Oi[--zi],Oi[zi]=null}function Y0(e,n){Oi[zi++]=ca,Oi[zi++]=ua,Oi[zi++]=ja,ca=n.id,ua=n.overflow,ja=e}var Dn=null,ln=null,Le=!1,$a=null,Ii=!1,Qf=Error(s(519));function ts(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zo(Pi(n,e)),Qf}function q0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[C]=e,n[Z]=r,a){case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":case"embed":ze("load",n);break;case"video":case"audio":for(a=0;a<gl.length;a++)ze(gl[a],n);break;case"source":ze("error",n);break;case"img":case"image":case"link":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"input":ze("invalid",n),s0(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ze("invalid",n);break;case"textarea":ze("invalid",n),o0(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||p_(n.textContent,a)?(r.popover!=null&&(ze("beforetoggle",n),ze("toggle",n)),r.onScroll!=null&&ze("scroll",n),r.onScrollEnd!=null&&ze("scrollend",n),r.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||ts(e,!0)}function yc(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Dn=Dn.return}}function Rr(e){if(e!==Dn)return!1;if(!Le)return yc(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wd(e.type,e.memoizedProps)),a=!a),a&&ln&&ts(e),yc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ln=U_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ln=U_(e)}else n===27?(n=ln,gs(e.type)?(e=Od,Od=null,ln=e):ln=n):ln=Dn?Fi(e.stateNode.nextSibling):null;return!0}function Fs(){ln=Dn=null,Le=!1}function Jf(){var e=$a;return e!==null&&(fi===null?fi=e:fi.push.apply(fi,e),$a=null),e}function Zo(e){$a===null?$a=[e]:$a.push(e)}var jf=Lt(null),Hs=null,Na=null;function es(e,n,a){Pt(jf,n._currentValue),n._currentValue=a}function La(e){e._currentValue=jf.current,Nt(jf)}function Mc(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function $f(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var N=h;h=u;for(var G=0;G<n.length;G++)if(N.context===n[G]){h.lanes|=a,N=h.alternate,N!==null&&(N.lanes|=a),Mc(h.return,a,e),r||(x=null);break t}h=N.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Mc(x,a,e),x=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,x=u.alternate,x!==null&&(x.lanes|=a),Mc(u.return,a,e),x=u.child,x=x!==null?x.sibling:null):x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Gs(e,n,a,r){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var N=u.type;xi(u.pendingProps.value,x.value)||(e!==null?e.push(N):e=[N])}}else if(u===me.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push($r):e=[$r])}u=u.return}return e!==null&&$f(n,e,a,r),n.flags|=262144,e!==null}function bc(e){for(e=e.firstContext;e!==null;){if(!xi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){Hs=e,Na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return Z0(Hs,e)}function Ec(e,n){return Hs===null&&Vs(e),Z0(e,n)}function Z0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Na===null){if(e===null)throw Error(s(308));Na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Na=Na.next=n;return a}var pM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},mM=o.unstable_scheduleCallback,gM=o.unstable_NormalPriority,Sn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function th(){return{controller:new pM,data:new Map,refCount:0}}function Ko(e){e.refCount--,e.refCount===0&&mM(gM,function(){e.controller.abort()})}function K0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Qo=null;function vM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Jo=null,eh=0,ks=0,Cr=null;function _M(e,n){if(Jo===null){var a=Jo=[];eh=0,ks=vd(),Cr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return eh++,n.then(Q0,Q0),n}function Q0(){if(--eh===0&&(Qo=null,Jo!==null)){Cr!==null&&(Cr.status="fulfilled");var e=Jo;Jo=null,ks=0,Cr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xM(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var J0=K.S;K.S=function(e,n){if(kv=Jt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_M(e,n),Qo!==null)for(var a=qr;a!==null;)K0(a,Qo),a=a.next;if(a=e.types,a!==null){for(var r=qr;r!==null;)K0(r,a),r=r.next;if(ks!==0){r=Qo,r===null&&(r=Qo=[]);for(var u=0;u<a.length;u++){var h=a[u];r.indexOf(h)===-1&&r.push(h)}}}J0!==null&&J0(e,n)};var Ws=Lt(null);function nh(){var e=Ws.current;return e!==null?e:rn.pooledCache}function Tc(e,n){n===null?Pt(Ws,Ws.current):Pt(Ws,n.pool)}function j0(){var e=nh();return e===null?null:{parent:Sn._currentValue,pool:e}}var Dr=Error(s(460)),ih=Error(s(474)),wc=Error(s(542)),Ac={then:function(){}};function $0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ng(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(la,la);else{if(e=rn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ng(e),e}throw Ys=n,Dr}}function Xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ys=a,Dr):a}}var Ys=null;function eg(){if(Ys===null)throw Error(s(459));var e=Ys;return Ys=null,e}function ng(e){if(e===Dr||e===wc)throw Error(s(483))}var Nr=null,jo=0;function Rc(e){var n=jo;return jo+=1,Nr===null&&(Nr=[]),tg(Nr,e,n)}function ns(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cc(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ig(e){function n(nt,Q){if(e){var lt=nt.deletions;lt===null?(nt.deletions=[Q],nt.flags|=16):lt.push(Q)}}function a(nt,Q){if(!e)return null;for(;Q!==null;)n(nt,Q),Q=Q.sibling;return null}function r(nt){for(var Q=new Map;nt!==null;)nt.key===null?Q.set(nt.index,nt):Q.set(nt.key,nt),nt=nt.sibling;return Q}function u(nt,Q){return nt=Ca(nt,Q),nt.index=0,nt.sibling=null,nt}function h(nt,Q,lt){return nt.index=lt,e?(lt=nt.alternate,lt!==null?(lt=lt.index,lt<Q?(nt.flags|=2,Q):lt):(nt.flags|=134217730,Q)):(nt.flags|=1048576,Q)}function x(nt){return e&&nt.alternate===null&&(nt.flags|=134217730),nt}function N(nt,Q,lt,yt){return Q===null||Q.tag!==6?(Q=qf(lt,nt.mode,yt),Q.return=nt,Q):(Q=u(Q,lt),Q.return=nt,Q)}function G(nt,Q,lt,yt){var te=lt.type;return te===I?(nt=gt(nt,Q,lt.props.children,yt,lt.key),ns(nt,lt),nt):Q!==null&&(Q.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ut&&Xs(te)===Q.type)?(Q=u(Q,lt.props),ns(Q,lt),Q.return=nt,Q):(Q=_c(lt.type,lt.key,lt.props,null,nt.mode,yt),ns(Q,lt),Q.return=nt,Q)}function at(nt,Q,lt,yt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==lt.containerInfo||Q.stateNode.implementation!==lt.implementation?(Q=Zf(lt,nt.mode,yt),Q.return=nt,Q):(Q=u(Q,lt.children||[]),Q.return=nt,Q)}function gt(nt,Q,lt,yt,te){return Q===null||Q.tag!==7?(Q=Bs(lt,nt.mode,yt,te),Q.return=nt,Q):(Q=u(Q,lt),Q.return=nt,Q)}function bt(nt,Q,lt){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=qf(""+Q,nt.mode,lt),Q.return=nt,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case U:return lt=_c(Q.type,Q.key,Q.props,null,nt.mode,lt),ns(lt,Q),lt.return=nt,lt;case B:return Q=Zf(Q,nt.mode,lt),Q.return=nt,Q;case ut:return Q=Xs(Q),bt(nt,Q,lt)}if(pt(Q)||$(Q))return Q=Bs(Q,nt.mode,lt,null),Q.return=nt,Q;if(typeof Q.then=="function")return bt(nt,Rc(Q),lt);if(Q.$$typeof===V)return bt(nt,Ec(nt,Q),lt);Cc(nt,Q)}return null}function tt(nt,Q,lt,yt){var te=Q!==null?Q.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return te!==null?null:N(nt,Q,""+lt,yt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case U:return lt.key===te?G(nt,Q,lt,yt):null;case B:return lt.key===te?at(nt,Q,lt,yt):null;case ut:return lt=Xs(lt),tt(nt,Q,lt,yt)}if(pt(lt)||$(lt))return te!==null?null:gt(nt,Q,lt,yt,null);if(typeof lt.then=="function")return tt(nt,Q,Rc(lt),yt);if(lt.$$typeof===V)return tt(nt,Q,Ec(nt,lt),yt);Cc(nt,lt)}return null}function dt(nt,Q,lt,yt,te){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return nt=nt.get(lt)||null,N(Q,nt,""+yt,te);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case U:return nt=nt.get(yt.key===null?lt:yt.key)||null,G(Q,nt,yt,te);case B:return nt=nt.get(yt.key===null?lt:yt.key)||null,at(Q,nt,yt,te);case ut:return yt=Xs(yt),dt(nt,Q,lt,yt,te)}if(pt(yt)||$(yt))return nt=nt.get(lt)||null,gt(Q,nt,yt,te,null);if(typeof yt.then=="function")return dt(nt,Q,lt,Rc(yt),te);if(yt.$$typeof===V)return dt(nt,Q,lt,Ec(Q,yt),te);Cc(Q,yt)}return null}function Gt(nt,Q,lt,yt){for(var te=null,Ge=null,fe=Q,_e=Q=0,bn=null;fe!==null&&_e<lt.length;_e++){fe.index>_e?(bn=fe,fe=null):bn=fe.sibling;var Xe=tt(nt,fe,lt[_e],yt);if(Xe===null){fe===null&&(fe=bn);break}e&&fe&&Xe.alternate===null&&n(nt,fe),Q=h(Xe,Q,_e),Ge===null?te=Xe:Ge.sibling=Xe,Ge=Xe,fe=bn}if(_e===lt.length)return a(nt,fe),Le&&Da(nt,_e),te;if(fe===null){for(;_e<lt.length;_e++)fe=bt(nt,lt[_e],yt),fe!==null&&(Q=h(fe,Q,_e),Ge===null?te=fe:Ge.sibling=fe,Ge=fe);return Le&&Da(nt,_e),te}for(fe=r(fe);_e<lt.length;_e++)bn=dt(fe,nt,_e,lt[_e],yt),bn!==null&&(e&&(Xe=bn.alternate,Xe!==null&&fe.delete(Xe.key===null?_e:Xe.key)),Q=h(bn,Q,_e),Ge===null?te=bn:Ge.sibling=bn,Ge=bn);return e&&fe.forEach(function(ys){return n(nt,ys)}),Le&&Da(nt,_e),te}function ae(nt,Q,lt,yt){if(lt==null)throw Error(s(151));for(var te=null,Ge=null,fe=Q,_e=Q=0,bn=null,Xe=lt.next();fe!==null&&!Xe.done;_e++,Xe=lt.next()){fe.index>_e?(bn=fe,fe=null):bn=fe.sibling;var ys=tt(nt,fe,Xe.value,yt);if(ys===null){fe===null&&(fe=bn);break}e&&fe&&ys.alternate===null&&n(nt,fe),Q=h(ys,Q,_e),Ge===null?te=ys:Ge.sibling=ys,Ge=ys,fe=bn}if(Xe.done)return a(nt,fe),Le&&Da(nt,_e),te;if(fe===null){for(;!Xe.done;_e++,Xe=lt.next())Xe=bt(nt,Xe.value,yt),Xe!==null&&(Q=h(Xe,Q,_e),Ge===null?te=Xe:Ge.sibling=Xe,Ge=Xe);return Le&&Da(nt,_e),te}for(fe=r(fe);!Xe.done;_e++,Xe=lt.next())Xe=dt(fe,nt,_e,Xe.value,yt),Xe!==null&&(e&&(bn=Xe.alternate,bn!==null&&fe.delete(bn.key===null?_e:bn.key)),Q=h(Xe,Q,_e),Ge===null?te=Xe:Ge.sibling=Xe,Ge=Xe);return e&&fe.forEach(function($1){return n(nt,$1)}),Le&&Da(nt,_e),te}function Re(nt,Q,lt,yt){if(typeof lt=="object"&&lt!==null&&lt.type===I&&lt.key===null&&lt.props.ref===void 0&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case U:t:{for(var te=lt.key;Q!==null;){if(Q.key===te){if(te=lt.type,te===I){if(Q.tag===7){a(nt,Q.sibling),yt=u(Q,lt.props.children),ns(yt,lt),yt.return=nt,nt=yt;break t}}else if(Q.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ut&&Xs(te)===Q.type){a(nt,Q.sibling),yt=u(Q,lt.props),ns(yt,lt),yt.return=nt,nt=yt;break t}a(nt,Q);break}else n(nt,Q);Q=Q.sibling}lt.type===I?(yt=Bs(lt.props.children,nt.mode,yt,lt.key),ns(yt,lt),yt.return=nt,nt=yt):(yt=_c(lt.type,lt.key,lt.props,null,nt.mode,yt),ns(yt,lt),yt.return=nt,nt=yt)}return x(nt);case B:t:{for(te=lt.key;Q!==null;){if(Q.key===te)if(Q.tag===4&&Q.stateNode.containerInfo===lt.containerInfo&&Q.stateNode.implementation===lt.implementation){a(nt,Q.sibling),yt=u(Q,lt.children||[]),yt.return=nt,nt=yt;break t}else{a(nt,Q);break}else n(nt,Q);Q=Q.sibling}yt=Zf(lt,nt.mode,yt),yt.return=nt,nt=yt}return x(nt);case ut:return lt=Xs(lt),Re(nt,Q,lt,yt)}if(pt(lt))return Gt(nt,Q,lt,yt);if($(lt)){if(te=$(lt),typeof te!="function")throw Error(s(150));return lt=te.call(lt),ae(nt,Q,lt,yt)}if(typeof lt.then=="function")return Re(nt,Q,Rc(lt),yt);if(lt.$$typeof===V)return Re(nt,Q,Ec(nt,lt),yt);Cc(nt,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,Q!==null&&Q.tag===6?(a(nt,Q.sibling),yt=u(Q,lt),yt.return=nt,nt=yt):(a(nt,Q),yt=qf(lt,nt.mode,yt),yt.return=nt,nt=yt),x(nt)):a(nt,Q)}return function(nt,Q,lt,yt){try{jo=0;var te=Re(nt,Q,lt,yt);return Nr=null,te}catch(fe){if(fe===Dr||fe===wc)throw fe;var Ge=li(29,fe,null,nt.mode);return Ge.lanes=yt,Ge.return=nt,Ge}}}var qs=ig(!0),ag=ig(!1),is=!1;function ah(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function as(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ss(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ze&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=vc(e),G0(e,null,a),n}return gc(e,r,n,a),vc(e)}function $o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Po(e,a)}}function rh(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var oh=!1;function tl(){if(oh){var e=Cr;if(e!==null)throw e}}function el(e,n,a,r){oh=!1;var u=e.updateQueue;is=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var G=N,at=G.next;G.next=null,x===null?h=at:x.next=at,x=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,N=gt.lastBaseUpdate,N!==x&&(N===null?gt.firstBaseUpdate=at:N.next=at,gt.lastBaseUpdate=G))}if(h!==null){var bt=u.baseState;x=0,gt=at=G=null,N=h;do{var tt=N.lane&-536870913,dt=tt!==N.lane;if(dt?(He&tt)===tt:(r&tt)===tt){tt!==0&&tt===ks&&(oh=!0),gt!==null&&(gt=gt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var Gt=e,ae=N;tt=n;var Re=a;switch(ae.tag){case 1:if(Gt=ae.payload,typeof Gt=="function"){bt=Gt.call(Re,bt,tt);break t}bt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ae.payload,tt=typeof Gt=="function"?Gt.call(Re,bt,tt):Gt,tt==null)break t;bt=P({},bt,tt);break t;case 2:is=!0}}tt=N.callback,tt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[tt]:dt.push(tt))}else dt={lane:tt,tag:N.tag,payload:N.payload,callback:N.callback,next:null},gt===null?(at=gt=dt,G=bt):gt=gt.next=dt,x|=tt;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;dt=N,N=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);gt===null&&(G=bt),u.baseState=G,u.firstBaseUpdate=at,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),hs|=x,e.lanes=x,e.memoizedState=bt}}function sg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function rg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)sg(a[e],n)}var rs=Lt(null),Dc=Lt(0);function og(e,n){e=Ia,Pt(Dc,e),Pt(rs,n),Ia=e|n.baseLanes}function lh(){Pt(Dc,Ia),Pt(rs,rs.current)}function ch(){Ia=Dc.current,Nt(rs),Nt(Dc)}var In=Lt(null),Wn=null;function os(e){var n=e.alternate;Pt(Bn,Bn.current&1),Pt(In,e),Wn===null&&(n===null||rs.current!==null||n.memoizedState!==null)&&(Wn=e)}function uh(e){Pt(Bn,Bn.current),Pt(In,e),Wn===null&&(Wn=e)}function lg(e){e.tag===22?(Pt(Bn,Bn.current),Pt(In,e),Wn===null&&(Wn=e)):ls()}function ls(){Pt(Bn,Bn.current),Pt(In,In.current)}function Si(e){Nt(In),Wn===e&&(Wn=null),Nt(Bn)}var Bn=Lt(0);function nl(e,n){Pt(In,In.current),Pt(Bn,n)}function fh(e){Nt(Bn),Nt(In),Wn===e&&(Wn=null)}function Nc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ud(a)||Pd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ua=0,Ae=null,sn=null,yn=null,Lc=!1,Lr=!1,Zs=!1,Uc=0,il=0,Ur=null,SM=0;function mn(){throw Error(s(321))}function hh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!xi(e[a],n[a]))return!1;return!0}function dh(e,n,a,r,u,h){return Ua=h,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,K.H=e===null||e.memoizedState===null?Xg:Yg,Zs=!1,h=a(r,u),Zs=!1,Lr&&(h=ug(n,a,r,u)),cg(e),h}function cg(e){K.H=Hc;var n=sn!==null&&sn.next!==null;if(Ua=0,yn=sn=Ae=null,Lc=!1,il=0,Ur=null,n)throw Error(s(300));e===null||Mn||(e=e.dependencies,e!==null&&bc(e)&&(Mn=!0))}function ug(e,n,a,r){Ae=e;var u=0;do{if(Lr&&(Ur=null),il=0,Lr=!1,25<=u)throw Error(s(301));if(u+=1,yn=sn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}K.H=RM,h=n(a,r)}while(Lr);return h}function yM(){var e=K.H,n=e.useState()[0];return n=typeof n.then=="function"?al(n):n,e=e.useState()[0],(sn!==null?sn.memoizedState:null)!==e&&(Ae.flags|=1024),n}function ph(){var e=Uc!==0;return Uc=0,e}function mh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gh(e){if(Lc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Lc=!1}Ua=0,yn=sn=Ae=null,Lr=!1,il=Uc=0,Ur=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Ae.memoizedState=yn=e:yn=yn.next=e,yn}function _n(){if(sn===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=sn.next;var n=yn===null?Ae.memoizedState:yn.next;if(n!==null)yn=n,sn=e;else{if(e===null)throw Ae.alternate===null?Error(s(467)):Error(s(310));sn=e,e={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},yn===null?Ae.memoizedState=yn=e:yn=yn.next=e}return yn}function Pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var n=il;return il+=1,Ur===null&&(Ur=[]),e=tg(Ur,e,n),n=Ae,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,K.H=n===null||n.memoizedState===null?Xg:Yg),e}function Oc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===ot)return;if(e.$$typeof===V)return zn(e)}throw Error(s(438,String(e)))}function vh(e){var n=null,a=Ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Ae.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pc(),Ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Zt;return n.index++,a}function Pa(e,n){return typeof n=="function"?n(e):n}function zc(e){var n=_n();return _h(n,sn,e)}function _h(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,h=r.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,r.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var N=x=null,G=null,at=n,gt=!1;do{var bt=at.lane&-536870913;if(bt!==at.lane?(He&bt)===bt:(Ua&bt)===bt){var tt=at.revertLane;if(tt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),bt===ks&&(gt=!0);else if((Ua&tt)===tt){at=at.next,tt===ks&&(gt=!0);continue}else bt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(N=G=bt,x=h):G=G.next=bt,Ae.lanes|=tt,hs|=tt;bt=at.action,Zs&&a(h,bt),h=at.hasEagerState?at.eagerState:a(h,bt)}else tt={lane:bt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(N=G=tt,x=h):G=G.next=tt,Ae.lanes|=bt,hs|=bt;at=at.next}while(at!==null&&at!==n);if(G===null?x=h:G.next=N,!xi(h,e.memoizedState)&&(Mn=!0,gt&&(a=Cr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=G,r.lastRenderedState=h}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xh(e){var n=_n(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);xi(h,n.memoizedState)||(Mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,r]}function fg(e,n,a){var r=Ae,u=_n(),h=Le;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!xi((sn||u).memoizedState,a);if(x&&(u.memoizedState=a,Mn=!0),u=u.queue,Mh(pg.bind(null,r,u,e),[e]),e=u.getSnapshot!==n||x||yn!==null&&(yn.memoizedState.tag&1)!==0,Pr(e?9:8,{destroy:void 0},dg.bind(null,r,u,a,n),null),e){if(r.flags|=2048,rn===null)throw Error(s(349));h||(Ua&127)!==0||hg(r,n,a)}return a}function hg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ae.updateQueue,n===null?(n=Pc(),Ae.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function dg(e,n,a,r){n.value=a,n.getSnapshot=r,mg(n)&&gg(e)}function pg(e,n,a){return a(function(){mg(n)&&gg(e)})}function mg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!xi(e,a)}catch{return!0}}function gg(e){var n=Is(e,2);n!==null&&hi(n,e,2)}function Sh(e){var n=$n();if(typeof e=="function"){var a=e;if(e=a(),Zs){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},n}function vg(e,n,a,r){return e.baseState=a,_h(e,sn,typeof r=="function"?r:Pa)}function MM(e,n,a,r,u){if(Fc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};K.T!==null?a(!0):h.isTransition=!1,r(h),a=n.pending,a===null?(h.next=n.pending=h,_g(n,h)):(h.next=a.next,n.pending=a.next=h)}}function _g(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var h=K.T,x={};x.types=h!==null?h.types:null,K.T=x;try{var N=a(u,r),G=K.S;G!==null&&G(x,N),xg(e,n,N)}catch(at){yh(e,n,at)}finally{h!==null&&x.types!==null&&(h.types=x.types),K.T=h}}else try{h=a(u,r),xg(e,n,h)}catch(at){yh(e,n,at)}}function xg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Sg(e,n,r)},function(r){return yh(e,n,r)}):Sg(e,n,a)}function Sg(e,n,a){n.status="fulfilled",n.value=a,yg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,_g(e,a)))}function yh(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,yg(n),n=n.next;while(n!==r)}e.action=null}function yg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Mg(e,n){return n}function bg(e,n){if(Le){var a=rn.formState;if(a!==null){t:{var r=Ae;if(Le){if(ln){e:{for(var u=ln,h=Ii;u.nodeType!==8;){if(!h){u=null;break e}if(u=Fi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){ln=Fi(u.nextSibling),r=u.data==="F!";break t}}ts(r)}r=!1}r&&(n=a[0])}}return a=$n(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:n},a.queue=r,a=Vg.bind(null,Ae,r),r.dispatch=a,r=Sh(!1),h=Ah.bind(null,Ae,!1,r.queue),r=$n(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=MM.bind(null,Ae,u,h,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Eg(e){var n=_n();return Tg(n,sn,e)}function Tg(e,n,a){if(n=_h(e,n,Mg)[0],e=zc(Pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=al(n)}catch(x){throw x===Dr?wc:x}else r=n;n=_n();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Ae.flags|=2048,Pr(9,{destroy:void 0},bM.bind(null,u,a),null)),[r,h,e]}function bM(e,n){e.action=n}function wg(e){var n=_n(),a=sn;if(a!==null)return Tg(n,a,e);_n(),n=n.memoizedState,a=_n();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Pr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Ae.updateQueue,n===null&&(n=Pc(),Ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Ag(){return _n().memoizedState}function Ic(e,n,a,r){var u=$n();Ae.flags|=e,u.memoizedState=Pr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Bc(e,n,a,r){var u=_n();r=r===void 0?null:r;var h=u.memoizedState.inst;sn!==null&&r!==null&&hh(r,sn.memoizedState.deps)?u.memoizedState=Pr(n,h,a,r):(Ae.flags|=e,u.memoizedState=Pr(1|n,h,a,r))}function Rg(e,n){Ic(8390656,8,e,n)}function Mh(e,n){Bc(2048,8,e,n)}function EM(e){Ae.flags|=4;var n=Ae.updateQueue;if(n===null)n=Pc(),Ae.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Cg(e){var n=_n().memoizedState;return EM({ref:n,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Dg(e,n){return Bc(4,2,e,n)}function Ng(e,n){return Bc(4,4,e,n)}function Lg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ug(e,n,a){a=a!=null?a.concat([e]):null,Bc(4,4,Lg.bind(null,n,e),a)}function bh(){}function Pg(e,n){var a=_n();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&hh(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Og(e,n){var a=_n();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&hh(n,r[1]))return r[0];if(r=e(),Zs){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[r,n],r}function Eh(e,n,a){return a===void 0||(Ua&1073741824)!==0&&(He&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Xv(),Ae.lanes|=e,hs|=e,a)}function zg(e,n,a,r){return xi(a,n)?a:rs.current!==null?(e=Eh(e,a,r),xi(e,n)||(Mn=!0),e):(Ua&106)===0||(Ua&1073741824)!==0&&(He&261930)===0?(Mn=!0,e.memoizedState=a):(e=Xv(),Ae.lanes|=e,hs|=e,n)}function Ig(e,n,a,r,u){var h=mt.p;mt.p=h!==0&&8>h?h:8;var x=K.T,N={};N.types=x!==null?x.types:null,K.T=N,Ah(e,!1,n,a);try{var G=u(),at=K.S;if(at!==null&&at(N,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=xM(G,r);sl(e,n,gt,Ei(e))}else sl(e,n,r,Ei(e))}catch(bt){sl(e,n,{then:function(){},status:"rejected",reason:bt},Ei())}finally{mt.p=h,x!==null&&N.types!==null&&(x.types=N.types),K.T=x}}function TM(){}function Th(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Bg(e).queue;Ig(e,u,n,Bt,a===null?TM:function(){return Fg(e),a(r)})}function Bg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Bt,baseState:Bt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:Bt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fg(e){var n=Bg(e);n.next===null&&(n=e.alternate.memoizedState),sl(e,n.next.queue,{},Ei())}function wh(){return zn($r)}function Hg(){return _n().memoizedState}function Gg(){return _n().memoizedState}function wM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ei();e=as(a);var r=ss(n,e,a);r!==null&&(hi(r,n,a),$o(r,n,a)),n={cache:th()},e.payload=n;return}n=n.return}}function AM(e,n,a){var r=Ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fc(e)?kg(n,a):(a=Xf(e,n,a,r),a!==null&&(hi(a,e,r),Wg(a,n,r)))}function Vg(e,n,a){var r=Ei();sl(e,n,a,r)}function sl(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))kg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,N=h(x,a);if(u.hasEagerState=!0,u.eagerState=N,xi(N,x))return gc(e,n,u,0),rn===null&&mc(),!1}catch{}if(a=Xf(e,n,u,r),a!==null)return hi(a,e,r),Wg(a,n,r),!0}return!1}function Ah(e,n,a,r){if(r={lane:2,revertLane:vd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fc(e)){if(n)throw Error(s(479))}else n=Xf(e,a,r,2),n!==null&&hi(n,e,2)}function Fc(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function kg(e,n){Lr=Lc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Wg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Po(e,a)}}var Hc={readContext:zn,use:Oc,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn,useEffectEvent:mn},Xg={readContext:zn,use:Oc,useCallback:function(e,n){return $n().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:Rg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ic(4194308,4,Lg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ic(4194308,4,e,n)},useInsertionEffect:function(e,n){Ic(4,2,e,n)},useMemo:function(e,n){var a=$n();n=n===void 0?null:n;var r=e();if(Zs){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=$n();if(a!==void 0){var u=a(n);if(Zs){Ve(!0);try{a(n)}finally{Ve(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=AM.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var n=$n();return e={current:e},n.memoizedState=e},useState:function(e){e=Sh(e);var n=e.queue,a=Vg.bind(null,Ae,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:bh,useDeferredValue:function(e,n){var a=$n();return Eh(a,e,n)},useTransition:function(){var e=Sh(!1);return e=Ig.bind(null,Ae,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Ae,u=$n();if(Le){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),rn===null)throw Error(s(349));(He&127)!==0||hg(r,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Rg(pg.bind(null,r,h,e),[e]),r.flags|=2048,Pr(9,{destroy:void 0},dg.bind(null,r,h,a,n),null),a},useId:function(){var e=$n(),n=rn.identifierPrefix;if(Le){var a=ua,r=ca;a=(r&~(1<<32-Ee(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Uc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=SM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:wh,useFormState:bg,useActionState:bg,useOptimistic:function(e){var n=$n();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ah.bind(null,Ae,!0,a),a.dispatch=n,[e,n]},useMemoCache:vh,useCacheRefresh:function(){return $n().memoizedState=wM.bind(null,Ae)},useEffectEvent:function(e){var n=$n(),a={impl:e};return n.memoizedState=a,function(){if((Ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Yg={readContext:zn,use:Oc,useCallback:Pg,useContext:zn,useEffect:Mh,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Og,useReducer:zc,useRef:Ag,useState:function(){return zc(Pa)},useDebugValue:bh,useDeferredValue:function(e,n){var a=_n();return zg(a,sn.memoizedState,e,n)},useTransition:function(){var e=zc(Pa)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:al(e),n]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:wh,useFormState:Eg,useActionState:Eg,useOptimistic:function(e,n){var a=_n();return vg(a,sn,e,n)},useMemoCache:vh,useCacheRefresh:Gg,useEffectEvent:Cg},RM={readContext:zn,use:Oc,useCallback:Pg,useContext:zn,useEffect:Mh,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Og,useReducer:xh,useRef:Ag,useState:function(){return xh(Pa)},useDebugValue:bh,useDeferredValue:function(e,n){var a=_n();return sn===null?Eh(a,e,n):zg(a,sn.memoizedState,e,n)},useTransition:function(){var e=xh(Pa)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:al(e),n]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:wh,useFormState:wg,useActionState:wg,useOptimistic:function(e,n){var a=_n();return sn!==null?vg(a,sn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vh,useCacheRefresh:Gg,useEffectEvent:Cg};function Rh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ch={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Ei(),u=as(r);u.payload=n,a!=null&&(u.callback=a),n=ss(e,u,r),n!==null&&(hi(n,e,r),$o(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Ei(),u=as(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ss(e,u,r),n!==null&&(hi(n,e,r),$o(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ei(),r=as(a);r.tag=2,n!=null&&(r.callback=n),n=ss(e,r,a),n!==null&&(hi(n,e,a),$o(n,e,a))}};function qg(e,n,a,r,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,x):n.prototype&&n.prototype.isPureReactComponent?!Xo(a,r)||!Xo(u,h):!0}function Zg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Ch.enqueueReplaceState(n,n.state,null)}function Ks(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Kg(e){pc(e)}function Qg(e){console.error(e)}function Jg(e){pc(e)}function Gc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function jg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Dh(e,n,a){return a=as(a),a.tag=3,a.payload={element:null},a.callback=function(){Gc(e,n)},a}function $g(e){return e=as(e),e.tag=3,e}function tv(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;e.payload=function(){return u(h)},e.callback=function(){jg(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){jg(n,a,r),typeof u!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var N=r.stack;this.componentDidCatch(r.value,{componentStack:N!==null?N:""})})}function CM(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,u,!0),a=In.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Wn===null?lu():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Ac?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),pd(e,r,u)),!1;case 22:return a.flags|=65536,r===Ac?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),pd(e,r,u)),!1}throw Error(s(435,a.tag))}return pd(e,r,u),lu(),!1}if(Le)return n=In.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Qf&&(e=Error(s(422),{cause:r}),Zo(Pi(e,a)))):(r!==Qf&&(n=Error(s(423),{cause:r}),Zo(Pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Pi(r,a),u=Dh(e.stateNode,r,u),rh(e,u),gn!==4&&(gn=2)),!1;var h=Error(s(520),{cause:r});if(h=Pi(h,a),dl===null?dl=[h]:dl.push(h),gn!==4&&(gn=2),n===null)return!0;r=Pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Dh(a.stateNode,r,e),rh(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ds===null||!ds.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$g(u),tv(u,e,a,r),rh(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Nh=Error(s(461)),Mn=!1;function wn(e,n,a,r){n.child=e===null?ag(n,null,a,r):qs(n,e.child,a,r)}function ev(e,n,a,r,u){a=a.render;var h=n.ref;if("ref"in r){var x={};for(var N in r)N!=="ref"&&(x[N]=r[N])}else x=r;return Vs(n),r=dh(e,n,a,x,h,u),N=ph(),e!==null&&!Mn?(mh(e,n,u),Oa(e,n,u)):(Le&&N&&Sc(n),n.flags|=1,wn(e,n,r,u),n.child)}function nv(e,n,a,r,u){if(e===null){var h=a.type;return typeof h=="function"&&!Yf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,iv(e,n,h,r,u)):(e=_c(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Fh(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(x,r)&&e.ref===n.ref)return Oa(e,n,u)}return n.flags|=1,e=Ca(h,r),e.ref=n.ref,e.return=n,n.child=e}function iv(e,n,a,r,u){if(e!==null){var h=e.memoizedProps;if(Xo(h,r)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=r=h,Fh(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,Oa(e,n,u)}return Lh(e,n,a,r,u)}function av(e,n,a,r){var u=r.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~h}else r=0,n.child=null;return sv(e,n,h,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tc(n,h!==null?h.cachePool:null),h!==null?og(n,h):lh(),lg(n);else return r=n.lanes=536870912,sv(e,n,h!==null?h.baseLanes|a:a,a,r)}else h!==null?(Tc(n,h.cachePool),og(n,h),ls(),n.memoizedState=null):(e!==null&&Tc(n,null),lh(),ls());return wn(e,n,u,a),n.child}function rl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function sv(e,n,a,r,u){var h=nh();return h=h===null?null:{parent:Sn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Tc(n,null),lh(),lg(n),e!==null&&Gs(e,n,r,!0),n.childLanes=u,null}function Vc(e,n){return n=kc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function rv(e,n,a){return qs(n,e.child,null,a),e=Vc(n,n.pendingProps),e.flags|=2,Si(n),n.memoizedState=null,e}function DM(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Le){if(r.mode==="hidden")return e=Vc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},rl(null,e);if(uh(n),(e=ln)?(e=L_(e,Ii),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=k0(e),a.return=n,n.child=a,Dn=n,ln=null)):e=null,e===null)throw ts(n);return n.lanes=536870912,null}return Vc(n,r)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(uh(n),u)if(n.flags&256)n.flags&=-257,n=rv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Mn||Gs(e,n,a,!1),u=(a&e.childLanes)!==0,Mn||u){if(rs.current===null){if(r=rn,r!==null&&(x=Oo(r,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Is(e,x),hi(r,e,x),Nh;lu()}n=rv(e,n,a)}else e=h.treeContext,ln=Fi(x.nextSibling),Dn=n,Le=!0,$a=null,Ii=!1,e!==null&&Y0(n,e),n=Vc(n,r),n.flags|=134221824;return n}return e=Ca(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Or(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Lh(e,n,a,r,u){return Vs(n),a=dh(e,n,a,r,void 0,u),r=ph(),e!==null&&!Mn?(mh(e,n,u),Oa(e,n,u)):(Le&&r&&Sc(n),n.flags|=1,wn(e,n,a,u),n.child)}function ov(e,n,a,r,u,h){return Vs(n),n.updateQueue=null,a=ug(n,r,a,u),cg(e),r=ph(),e!==null&&!Mn?(mh(e,n,h),Oa(e,n,h)):(Le&&r&&Sc(n),n.flags|=1,wn(e,n,a,h),n.child)}function lv(e,n,a,r,u){if(Vs(n),n.stateNode===null){var h=Tr,x=a.contextType;typeof x=="object"&&x!==null&&(h=zn(x)),h=new a(r,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Ch,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=r,h.state=n.memoizedState,h.refs={},ah(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?zn(x):Tr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Rh(n,a,x,r),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Ch.enqueueReplaceState(h,h.state,null),el(n,r,h,u),tl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){h=n.stateNode;var N=n.memoizedProps,G=Ks(a,N);h.props=G;var at=h.context,gt=a.contextType;x=Tr,typeof gt=="object"&&gt!==null&&(x=zn(gt));var bt=a.getDerivedStateFromProps;gt=typeof bt=="function"||typeof h.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(N||at!==x)&&Zg(n,h,r,x),is=!1;var tt=n.memoizedState;h.state=tt,el(n,r,h,u),tl(),at=n.memoizedState,N||tt!==at||is?(typeof bt=="function"&&(Rh(n,a,bt,r),at=n.memoizedState),(G=is||qg(n,a,G,r,tt,at,x))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=at),h.props=r,h.state=at,h.context=x,r=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{h=n.stateNode,sh(e,n),x=n.memoizedProps,gt=Ks(a,x),h.props=gt,bt=n.pendingProps,tt=h.context,at=a.contextType,G=Tr,typeof at=="object"&&at!==null&&(G=zn(at)),N=a.getDerivedStateFromProps,(at=typeof N=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==bt||tt!==G)&&Zg(n,h,r,G),is=!1,tt=n.memoizedState,h.state=tt,el(n,r,h,u),tl();var dt=n.memoizedState;x!==bt||tt!==dt||is||e!==null&&e.dependencies!==null&&bc(e.dependencies)?(typeof N=="function"&&(Rh(n,a,N,r),dt=n.memoizedState),(gt=is||qg(n,a,gt,r,tt,dt,G)||e!==null&&e.dependencies!==null&&bc(e.dependencies))?(at||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,dt,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,dt,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=dt),h.props=r,h.state=dt,h.context=G,r=gt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),r=!1)}return h=r,Or(e,n),r=(n.flags&128)!==0,h||r?(h=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&r?(n.child=qs(n,e.child,null,u),n.child=qs(n,null,a,u)):wn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Oa(e,n,u),e}function cv(e,n,a,r){return Fs(),n.flags|=256,wn(e,n,a,r),n.child}var Uh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ph(e){return{baseLanes:e,cachePool:j0()}}function Oh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=bi),e}function uv(e,n,a){var r=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(Bn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?os(n):ls(),(e=ln)?(e=L_(e,Ii),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=k0(e),a.return=n,n.child=a,Dn=n,ln=null)):e=null,e===null)throw ts(n);return Pd(e)?n.lanes=32:n.lanes=536870912,null}return h=r.children,r=r.fallback,u?(ls(),u=n.mode,h=kc({mode:"hidden",children:h},u),r=Bs(r,u,a,null),h.return=n,r.return=n,h.sibling=r,n.child=h,r=n.child,r.memoizedState=Ph(a),r.childLanes=Oh(e,x,a),n.memoizedState=Uh,rl(null,r)):(os(n),zh(n,h))}var N=e.memoizedState;if(N!==null){var G=N.dehydrated;if(G!==null)return NM(e,n,h,x,r,G,N,a)}return u?(ls(),u=r.fallback,h=n.mode,N=e.child,G=N.sibling,r=Ca(N,{mode:"hidden",children:r.children}),r.subtreeFlags=N.subtreeFlags&1206910976,G!==null?u=Ca(G,u):(u=Bs(u,h,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,rl(null,r),r=n.child,u=e.child.memoizedState,u===null?u=Ph(a):(h=u.cachePool,h!==null?(N=Sn._currentValue,h=h.parent!==N?{parent:N,pool:N}:h):h=j0(),u={baseLanes:u.baseLanes|a,cachePool:h}),r.memoizedState=u,r.childLanes=Oh(e,x,a),n.memoizedState=Uh,rl(e.child,r)):(os(n),a=e.child,e=a.sibling,a=Ca(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function zh(e,n){return n=kc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kc(e,n){return e=li(22,e,null,n),e.lanes=0,e}function Wc(e,n,a){return qs(n,e.child,null,a),e=zh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function NM(e,n,a,r,u,h,x,N){if(a)return n.flags&256?(os(n),n.flags&=-257,Wc(e,n,N)):n.memoizedState!==null?(ls(),n.child=e.child,n.flags|=128,null):(ls(),h=u.fallback,x=n.mode,u=kc({mode:"visible",children:u.children},x),h=Bs(h,x,N,null),h.flags|=2,u.return=n,h.return=n,u.sibling=h,n.child=u,qs(n,e.child,null,N),u=n.child,u.memoizedState=Ph(N),u.childLanes=Oh(e,r,N),n.memoizedState=Uh,rl(null,u));if(os(n),Pd(h)){if(r=h.nextSibling&&h.nextSibling.dataset,r)var G=r.dgst;return r=G,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Zo({value:u,source:null,stack:null})),Wc(e,n,N)}if(Mn||Gs(e,n,N,!1),r=(N&e.childLanes)!==0,Mn||r){if(rs.current!==null)return Wc(e,n,N);if(r=rn,r!==null&&(u=Oo(r,N),u!==0&&u!==x.retryLane))throw x.retryLane=u,Is(e,u),hi(r,e,u),Nh;return Ud(h)||lu(),Wc(e,n,N)}return Ud(h)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,ln=Fi(h.nextSibling),Dn=n,Le=!0,$a=null,Ii=!1,e!==null&&Y0(n,e),n=zh(n,u.children),n.flags|=134221824,n)}function fv(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mc(e.return,n,a)}function hv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Nc(a)===null&&(n=e),e=e.sibling}return n}function Xc(e,n,a,r,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Ih(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Bh(e,n,a){var r=n.pendingProps,u=r.revealOrder,h=r.tail;r=r.children;var x=Bn.current;if(n.flags&128)return nl(n,x),null;var N=(x&2)!==0;if(N?(x=x&1|2,n.flags|=128):x&=1,nl(n,x),u==="backwards"&&e!==null?(Ih(e),wn(e,n,r,a),Ih(e)):wn(e,n,r,a),r=Le?qo:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fv(e,a,n);else if(e.tag===19)fv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=hv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Ih(n)),Xc(n,!0,u,null,h,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Xc(n,!0,a,null,h,r);break;case"together":Xc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=hv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Xc(n,!1,u,a,h,r)}return n.child}function dv(e,n,a){var r=n.pendingProps;return es(n,n.type,r.value),wn(e,n,r.children,a),n.child}function Oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),hs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Fh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bc(e)))}function LM(e,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),es(n,Sn,e.memoizedState.cache),Fs();break;case 27:case 5:re(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:es(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uh(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return os(n),n.flags|=128,null;r=Gs(e,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?uv(e,n,a):(os(n),e=Oa(e,n,a),e!==null?e.sibling:null)}os(n);break;case 19:if(n.flags&128)return Bh(e,n,a);if(u=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Gs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Bh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),nl(n,Bn.current),r)break;return null;case 22:return n.lanes=0,av(e,n,a,n.pendingProps);case 24:es(n,Sn,e.memoizedState.cache)}return Oa(e,n,a)}function pv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!Fh(e,a)&&(n.flags&128)===0)return Mn=!1,LM(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,Le&&(n.flags&1048576)!==0&&X0(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Xs(n.elementType),n.type=e,typeof e=="function")Yf(e)?(r=Ks(e,r),n.tag=1,n=lv(null,n,e,r,a)):(n.tag=0,n=Lh(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===H){n.tag=11,n=ev(null,n,e,r,a);break t}else if(u===st){n.tag=14,n=nv(null,n,e,r,a);break t}else if(u===V){n.tag=10,n.type=e,n=dv(null,n,a);break t}}throw n=At(e)||e,Error(s(306,n,""))}}return n;case 0:return Lh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ks(r,n.pendingProps),lv(e,n,r,u,a);case 3:t:{if(Y(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var h=n.memoizedState;u=h.element,sh(e,n),el(n,r,null,a);var x=n.memoizedState;if(r=x.cache,es(n,Sn,r),r!==h.cache&&$f(n,[Sn],a,!0),tl(),r=x.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=cv(e,n,r,a);break t}else if(r!==u){u=Pi(Error(s(424)),n),Zo(u),n=cv(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ln=Fi(e.firstChild),Dn=n,Le=!0,$a=null,Ii=!0,a=ag(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Fs(),r===u){n=Oa(e,n,a);break t}wn(e,n,r,a)}n=n.child}return n;case 26:return Or(e,n),e===null?(a=F_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(n.stateNode=__(n.type,n.pendingProps,de.current,n)):n.memoizedState=F_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return re(n),e===null&&Le&&(r=n.stateNode=O_(n.type,n.pendingProps,de.current),Dn=n,Ii=!0,u=ln,gs(n.type)?(Od=u,ln=Fi(r.firstChild)):ln=u),wn(e,n,n.pendingProps.children,a),Or(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=r=ln)&&(r=w1(r,n.type,n.pendingProps,Ii),r!==null?(n.stateNode=r,Dn=n,ln=Fi(r.firstChild),Ii=!1,u=!0):u=!1),u||ts(n)),re(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,r=h.children,wd(u,h)?r=null:x!==null&&wd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=dh(e,n,yM,null,null,a),$r._currentValue=u),Or(e,n),wn(e,n,r,a),n.child;case 6:return e===null&&Le&&((e=a=ln)&&(a=A1(a,n.pendingProps,Ii),a!==null?(n.stateNode=a,Dn=n,ln=null,e=!0):e=!1),e||ts(n)),null;case 13:return uv(e,n,a);case 4:return Y(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qs(n,null,r,a):wn(e,n,r,a),n.child;case 11:return ev(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Or(e,n),wn(e,n,r,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return dv(e,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Vs(n),u=zn(u),r=r(u),n.flags|=1,wn(e,n,r,a),n.child;case 14:return nv(e,n,n.type,n.pendingProps,a);case 15:return iv(e,n,n.type,n.pendingProps,a);case 19:return Bh(e,n,a);case 31:return DM(e,n,a);case 22:return av(e,n,a,n.pendingProps);case 24:return Vs(n),r=zn(Sn),e===null?(u=nh(),u===null&&(u=rn,h=th(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:r,cache:u},ah(n),es(n,Sn,u)):((e.lanes&a)!==0&&(sh(e,n),el(n,null,null,a),tl()),u=e.memoizedState,h=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),es(n,Sn,r)):(r=h.cache,es(n,Sn,r),r!==u.cache&&$f(n,[Sn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Le&&Sc(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Or(e,n),wn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function za(e){e.flags|=4}function Hh(e,n,a,r,u){var h;if((h=(e.mode&32)!==0)&&(h=a===null?k_(n,r):k_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Kv())e.flags|=8192;else throw Ys=Ac,ih}else e.flags&=-16777217}function mv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W_(n))if(Kv())e.flags|=8192;else throw Ys=Ac,ih}function Yc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Uo():536870912,e.lanes|=n,Hr|=n)}function ol(e,n){if(!Le)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function cn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function UM(e,n,a){var r=n.pendingProps;switch(Kf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),La(Sn),Se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?za(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Jf())),cn(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(za(n),h!==null?(cn(n),mv(n,h)):(cn(n),Hh(n,u,null,r,a))):h?h!==e.memoizedState?(za(n),cn(n),mv(n,h)):(cn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&za(n),cn(n),Hh(n,u,e,r,a)),null;case 27:if(z(n),a=de.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&za(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return cn(n),n.subtreeFlags&=-33554433,null}e=he.current,Rr(n)?q0(n):(e=O_(u,r,a),n.stateNode=e,za(n))}return cn(n),n.subtreeFlags&=-33554433,null;case 5:if(z(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&za(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return cn(n),n.subtreeFlags&=-33554433,null}if(h=he.current,Rr(n))q0(n);else{var x=_l(de.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}h[C]=n,h[Z]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Hn(h,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&za(n)}}return cn(n),n.subtreeFlags&=-33554433,Hh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&za(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=de.current,Rr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[C]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||p_(e.nodeValue,a)),e||ts(n,!0)}else e=_l(e).createTextNode(r),e[C]=n,n.stateNode=e}return cn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Rr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[C]=n}else Fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),e=!1}else a=Jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Si(n),n):(Si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return cn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Rr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[C]=n}else Fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),u=!1}else u=Jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Si(n),n):(Si(n),null)}return Si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yc(n,n.updateQueue),cn(n),null);case 4:return Se(),e===null&&yd(n.stateNode.containerInfo),n.flags|=67108864,cn(n),null;case 10:return La(n.type),cn(n),null;case 19:if(fh(n),r=n.memoizedState,r===null)return cn(n),null;if(u=(n.flags&128)!==0,h=r.rendering,h===null)if(u)ol(r,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Nc(e),h!==null){for(n.flags|=128,ol(r,!1),e=h.updateQueue,n.updateQueue=e,Yc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)V0(a,e),a=a.sibling;return nl(n,Bn.current&1|2),Le&&Da(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Jt()>au&&(n.flags|=128,u=!0,ol(r,!1),n.lanes=4194304)}else{if(!u)if(e=Nc(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yc(n,e),ol(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!h.alternate&&!Le)return cn(n),null}else 2*Jt()-r.renderingStartTime>au&&a!==536870912&&(n.flags|=128,u=!0,ol(r,!1),n.lanes=4194304);r.isBackwards?(h.sibling=n.child,n.child=h):(e=r.last,e!==null?e.sibling=h:n.child=h,r.last=h)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Jt(),e.sibling=null,h=Bn.current,h=u?h&1|2:h&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Le?nl(n,h):(a=h,Pt(In,n),Pt(Bn,a),Wn===null&&(Wn=n)),Le&&Da(n,r.treeForkCount),e}return cn(n),null;case 22:case 23:return Si(n),ch(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),a=n.updateQueue,a!==null&&Yc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Nt(Ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),La(Sn),cn(n),null;case 25:return null;case 30:return n.flags|=33554432,cn(n),null}throw Error(s(156,n.tag))}function PM(e,n){switch(Kf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return La(Sn),Se(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return z(n),null;case 31:if(n.memoizedState!==null){if(Si(n),n.alternate===null)throw Error(s(340));Fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return fh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Se(),null;case 10:return La(n.type),null;case 22:case 23:return Si(n),ch(),e!==null&&Nt(Ws),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return La(Sn),null;case 25:return null;default:return null}}function gv(e,n){switch(Kf(n),n.tag){case 3:La(Sn),Se();break;case 26:case 27:case 5:z(n);break;case 4:Se();break;case 31:n.memoizedState!==null&&Si(n);break;case 13:Si(n);break;case 19:fh(n);break;case 10:La(n.type);break;case 22:case 23:Si(n),ch(),e!==null&&Nt(Ws);break;case 24:La(Sn)}}function ll(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var h=a.create,x=a.inst;r=h(),x.destroy=r}a=a.next}while(a!==u)}}catch(N){tn(n,n.return,N)}}function cs(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){var x=r.inst,N=x.destroy;if(N!==void 0){x.destroy=void 0,u=n;var G=a,at=N;try{at()}catch(gt){tn(u,G,gt)}}}r=r.next}while(r!==h)}}catch(gt){tn(n,n.return,gt)}}function vv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{rg(n,a)}catch(r){tn(e,e.return,r)}}}function _v(e,n,a){a.props=Ks(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){tn(e,n,r)}}function fa(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var u=e.stateNode,h=Aa(e.memoizedProps,u);(u.ref===null||u.ref.name!==h)&&(u.ref=T_(h)),r=u.ref;break;case 7:if(e.stateNode===null){var x=new Ti(e);v(e.child,!1,E1,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(N){tn(e,n,N)}}function Fn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){tn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){tn(e,n,u)}else a.current=null}function qc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)N_(e.stateNode,n[a])}function xv(e){for(var n=e.return;n!==null&&(Vh(n)&&N_(e.stateNode,n.stateNode),!Gh(n));)n=n.return}function cl(e){for(var n=e.return;n!==null&&(Vh(n)&&T1(e.stateNode,n.stateNode),!Gh(n));)n=n.return}function Gh(e){return e.tag===5||e.tag===3||e.tag===27}function Vh(e){return e&&e.tag===7&&e.stateNode!==null}function kh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){tn(e,e.return,u)}}function Wh(e,n,a){try{var r=e.stateNode;r1(r,e.type,a,n),r[Z]=n}catch(u){tn(e,e.return,u)}}function Sv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&gs(e.type)||e.tag===4}function Xh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&gs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yh(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la)),qc(e,r),Ne=!0;else if(u!==4&&(u===27&&(qc(e,r),r=null,gs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Yh(e,n,a,r),e=e.sibling;e!==null;)Yh(e,n,a,r),e=e.sibling}function Zc(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),qc(e,r),Ne=!0;else if(u!==4&&(u===27&&(qc(e,r),r=null,gs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Zc(e,n,a,r),e=e.sibling;e!==null;)Zc(e,n,a,r),e=e.sibling}function yv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,r,a),n[C]=e,n[Z]=a}catch(h){tn(e,e.return,h)}}var Kc=!1,yi=null;function Mv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Kc=!0)}var ha=null;function bv(){var e=ha;return ha=null,e}var ci=0;function zr(e,n,a,r,u){return ci=0,Ev(e.child,n,a,r,u)}function Ev(e,n,a,r,u){for(var h=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var N=Cd(x);r.push(N),N.view&&(h=!0)}else h||Cd(x).view&&(h=!0);Kc=!0,b_(x,ci===0?n:n+"_"+ci,a),ci++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||Ev(e.child,n,a,r,u)&&(h=!0));e=e.sibling}return h}function da(e,n){for(;e!==null;)e.tag===5?E_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||da(e.child,n)),e=e.sibling}function Qc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Qc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=Ra(n.default,n.share),n!=="none"&&(zr(e,a,n,null,!1)||da(e.child,!1))}e=e.sibling}}function qh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,u=Aa(r,a),h=Ra(r.default,a.paired?r.share:r.enter);h!=="none"?zr(e,u,h,null,!1)?(Qc(e),a.paired||n||Wr(e,r.onEnter)):da(e.child,!1):Qc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qh(e,n),e=e.sibling;else Qc(e)}function Zh(e){if(yi!==null&&yi.size!==0){var n=yi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var h=Ra(a.default,a.share);if(h!=="none"&&(zr(e,r,h,null,!1)?(h=e.stateNode,u.paired=h,h.paired=u,Wr(e,a.onShare)):da(e.child,!1)),n.delete(r),n.size===0)break}}}Zh(e)}e=e.sibling}}}function Kh(e){if(e.tag===30){var n=e.memoizedProps,a=Aa(n,e.stateNode),r=yi!==null?yi.get(a):void 0,u=Ra(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(zr(e,a,u,null,!1)?r!==void 0?(u=e.stateNode,r.paired=u,u.paired=r,yi.delete(a),Wr(e,n.onShare)):Wr(e,n.onExit):da(e.child,!1)),yi!==null&&Zh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Kh(e),e=e.sibling;else yi!==null&&Zh(e)}function Tv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Aa(n,e.stateNode);n=Ra(n.default,n.update),e.flags&=-5,n!=="none"&&zr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Tv(e);e=e.sibling}}function Qh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,da(e.child,!1))}Qh(e)}e=e.sibling}}function Jc(e){if(e.tag===30)e.stateNode.paired=null,da(e.child,!1),Qh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Jc(e),e=e.sibling;else Qh(e)}function wv(e){for(e=e.child;e!==null;)e.tag===30?da(e.child,!1):(e.subtreeFlags&33554432)!==0&&wv(e),e=e.sibling}function Jh(e,n,a,r,u,h,x){for(var N=!1;n!==null;){if(n.tag===5){var G=n.stateNode;if(h!==null&&ci<h.length){var at=h[ci],gt=Cd(G);(at.view||gt.view)&&(N=!0);var bt;if(bt=(e.flags&4)===0)if(gt.clip)bt=!0;else{bt=at.rect;var tt=gt.rect;bt=bt.y!==tt.y||bt.x!==tt.x||bt.height!==tt.height||bt.width!==tt.width}bt&&(e.flags|=4),gt.abs?gt=!at.abs:(at=at.rect,gt=gt.rect,gt=at.height!==gt.height||at.width!==gt.width),gt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&b_(G,ci===0?a:a+"_"+ci,u),N&&(e.flags&4)!==0||(ha===null&&(ha=[]),ha.push(G,ci===0?r:r+"_"+ci,n.memoizedProps)),ci++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Jh(e,n.child,a,r,u,h,x)&&(N=!0));n=n.sibling}return N}function Av(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,u=Aa(a,r),h=Ra(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var N=e.child;ci=0,u=Jh(r,N,u,u,h,x,!1),(e.flags&4)!==0&&u&&Wr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Av(e);e=e.sibling}}var Nn=!1,Qe=!1,pa=!1,jh=!1,Rv=typeof WeakSet=="function"?WeakSet:Set,Ln=null,ma=!1,ul=!1,jc=!1,$h=!1;function OM(e,n,a){if(e=e.containerInfo,Ed=to,e=L0(e),Ff(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break t}var N=0,G=-1,at=-1,gt=0,bt=0,tt=e,dt=null;e:for(;;){for(var Gt;tt!==r||h!==0&&tt.nodeType!==3||(G=N+h),tt!==x||u!==0&&tt.nodeType!==3||(at=N+u),tt.nodeType===3&&(N+=tt.nodeValue.length),(Gt=tt.firstChild)!==null;)dt=tt,tt=Gt;for(;;){if(tt===e)break e;if(dt===r&&++gt===h&&(G=N),dt===x&&++bt===u&&(at=N),(Gt=tt.nextSibling)!==null)break;tt=dt,dt=tt.parentNode}tt=Gt}r=G===-1||at===-1?null:{start:G,end:at}}else r=null}r=r||{start:0,end:0}}else r=null;for(Td={focusedElem:e,selectionRange:r},to=!1,a=(a&335544064)===a,Ln=n,n=a?9270:1024;Ln!==null;){if(e=Ln,a&&(r=e.deletions,r!==null))for(h=0;h<r.length;h++)a&&Kh(r[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&Mv(e),$c(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Kh(r),$c(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Mv(e),$c(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Ln=r):(a&&Tv(e),$c(a))}}yi=null}function $c(e){for(;Ln!==null;){var n=Ln,a=e,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var h=n.stateNode;try{var x=Ks(n.type,u);a=h.getSnapshotBeforeUpdate(x,r),h.__reactInternalSnapshotBeforeUpdate=a}catch(N){tn(n,n.return,N)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Ld(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Ld(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Aa(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=Ra(u.default,u.update),u!=="none"&&zr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Ln=r;break}Ln=n.return}}function Cv(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),r&4&&ll(5,a);break;case 1:if(ga(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){tn(a,a.return,x)}else{var u=Ks(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){tn(a,a.return,x)}}r&64&&vv(a),r&512&&fa(a,a.return);break;case 3:if(ga(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rg(e,n)}catch(x){tn(a,a.return,x)}}break;case 27:n===null&&r&4&&yv(a);case 26:case 5:ga(e,a),n===null&&r&4&&kh(a),r&512&&fa(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),r&4&&Uv(e,a);break;case 13:ga(e,a),r&4&&Pv(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qM.bind(null,a),R1(e,a))));break;case 22:if(r=a.memoizedState!==null||Nn,!r){var h=n!==null&&n.memoizedState!==null||Qe;n=Nn,u=Qe,Nn=r,(Qe=h)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Zi(e,a,r)):ga(e,a),Nn=n,Qe=u}break;case 30:ga(e,a),r&512&&fa(a,a.return);break;case 7:r&512&&fa(a,a.return);default:ga(e,a)}}function td(e,n){for(e=e.child;e!==null;)Dv(e,n),e=e.sibling}function Dv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=e.stateNode,h=e.memoizedProps.style,x=h!=null&&h.hasOwnProperty("display")?h.display:null;u.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(G){tn(e,e.return,G)}ed(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ne=!0}catch(G){tn(e,e.return,G)}break;case 18:try{var N=e.stateNode;n?M_(N,!0):M_(e.stateNode,!1)}catch(G){tn(e,e.return,G)}break;case 22:case 23:e.memoizedState===null&&td(e,n);break;default:td(e,n)}}function ed(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:Dv(a,r);break t;case 22:a.memoizedState===null&&ed(a,r);break t;default:ed(a,r)}}e=e.sibling}}function Nv(e){var n=e.alternate;n!==null&&(e.alternate=null,Nv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ie(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var un=null,ui=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Lv(e,n,a),a=a.sibling}function Lv(e,n,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:Qe||Fn(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Qe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Fn(a,n),cl(a);var r=un,u=ui;gs(a.type)&&(un=a.stateNode,ui=!1),Yi(e,n,a),z_(a.stateNode,a.type,a.memoizedProps),un=r,ui=u;break;case 5:Qe||Fn(a,n),cl(a);case 6:if(a.tag===6&&cl(a),r=un,u=ui,un=null,Yi(e,n,a),un=r,ui=u,un!==null)if(ui)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(a.stateNode),Ne=!0}catch(h){tn(a,n,h)}else try{un.removeChild(a.stateNode),Ne=!0}catch(h){tn(a,n,h)}break;case 18:un!==null&&(ui?(e=un,y_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),eo(e)):y_(un,a.stateNode));break;case 4:r=un,u=ui,un=a.stateNode.containerInfo,ui=!0,Yi(e,n,a),un=r,ui=u;break;case 0:case 11:case 14:case 15:cs(2,a,n),Qe||cs(4,a,n),Yi(e,n,a);break;case 1:Qe||(Fn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&_v(a,n,r)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:Qe=(r=Qe)||a.memoizedState!==null,Yi(e,n,a),Qe=r;break;case 30:Fn(a,n),Yi(e,n,a);break;case 7:Qe||Fn(a,n),Yi(e,n,a);break;default:Yi(e,n,a)}}function Uv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(a){tn(n,n.return,a)}}}function Pv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(a){tn(n,n.return,a)}}function zM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Rv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Rv),n;default:throw Error(s(435,e.tag))}}function tu(e,n){var a=zM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=ZM.bind(null,e,r);r.then(u,u)}})}function ti(e,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],x=e,N=n,G=N;t:for(;G!==null;){switch(G.tag){case 27:if(gs(G.type)){un=G.stateNode,ui=!1;break t}break;case 5:un=G.stateNode,ui=!1;break t;case 3:case 4:un=G.stateNode.containerInfo,ui=!0;break t}G=G.return}if(un===null)throw Error(s(160));Lv(x,N,h),un=null,ui=!1,x=h.alternate,x!==null&&(x.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ov(n,e,a),n=n.sibling}var qi=null;function Ov(e,n,a){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var h=0;h<r.length;h++){var x=r[h];x.ref.impl=x.nextImpl}ti(n,e,a),ei(e),u&4&&(cs(3,e,e.return),ll(3,e),cs(5,e,e.return));break;case 1:ti(n,e,a),ei(e),u&512&&(Qe||r===null||Fn(r,r.return)),u&64&&Nn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=qi,ti(n,e,a),ei(e),u&512&&(Qe||r===null||Fn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Nn)e.stateNode=__(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=h.ownerDocument||h;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ht]||r[C]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Hn(r,n,a),r[C]=e,De(r),n=r;break t;case"link":if(h=V_("link","href",u).get(n+(a.href||""))){for(x=0;x<h.length;x++)if(r=h[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(x,1);break e}}r=u.createElement(n),Hn(r,n,a),u.head.appendChild(r);break;case"meta":if(h=V_("meta","content",u).get(n+(a.content||""))){for(x=0;x<h.length;x++)if(r=h[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(x,1);break e}}r=u.createElement(n),Hn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[C]=e,De(r),n=r}e.stateNode=n}else Nn||Fd(h,e.type,e.stateNode);else e.stateNode=G_(h,a,e.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Qe||n.parentNode.removeChild(n)):u.count--,a===null?Nn||Fd(h,e.type,e.stateNode):G_(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Wh(e,e.memoizedProps,r.memoizedProps);break;case 27:ti(n,e,a),ei(e),u&512&&(Qe||r===null||Fn(r,r.return)),r!==null&&u&4&&Wh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(h=pa,pa=!1,ti(n,e,a),pa=h,ei(e),u&512&&(Qe||r===null||Fn(r,r.return)),e.flags&32){n=e.stateNode;try{_r(n,""),Ne=!0}catch(gt){tn(e,e.return,gt)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Wh(e,n,r!==null?r.memoizedProps:n)),u&1024&&(jh=!0);break;case 6:if(ti(n,e,a),ei(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Ne=!0}catch(gt){tn(e,e.return,gt)}}break;case 3:if(Ne=!1,mu=null,h=qi,qi=xl(n.containerInfo),ti(n,e,a),qi=h,ei(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{eo(n.containerInfo)}catch(gt){tn(e,e.return,gt)}jh&&(jh=!1,zv(e)),Ne=!1;break;case 4:u=pa,pa=Nn,r=qe(),h=qi,qi=xl(e.stateNode.containerInfo),ti(n,e,a),ei(e),qi=h,Ne&&ul&&(jc=!0),Ne=r,pa=u;break;case 12:ti(n,e,a),ei(e);break;case 31:ti(n,e,a),ei(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,tu(e,n)));break;case 13:ti(n,e,a),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(iu=Jt()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,tu(e,n)));break;case 22:h=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var N=Nn,G=Qe,at=pa;Nn=N||h,pa=at||h,Qe=G||x,ti(n,e,a),Qe=G,pa=at,Nn=N,ei(e),u&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||r===null||x||Nn||Qe||(n=x||Qe,a=Nn,r=Qe,Nn=h||Nn,Qe=n,us(e,2),Nn=a,Qe=r),!h&&pa||td(e,h)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,tu(e,a))));break;case 19:ti(n,e,a),ei(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,tu(e,n)));break;case 30:u&512&&(Qe||r===null||Fn(r,r.return)),u=qe(),h=ul,x=(a&335544064)===a,N=e.memoizedProps,ul=x&&Ra(N.default,N.update)!=="none",ti(n,e,a),ei(e),x&&r!==null&&Ne&&(e.flags|=4),ul=h,Ne=u;break;case 21:break;case 7:u&512&&(Qe||r===null||Fn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:ti(n,e,a),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Sv(r)){a=r;break}r=r.return}r=null;for(var u=e.return;u!==null;){if(Vh(u)){var h=u.stateNode;r===null?r=[h]:r.push(h)}if(Gh(u))break;u=u.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var N=a.stateNode,G=Xh(e);Zc(e,G,N,x);break;case 5:var at=a.stateNode;a.flags&32&&(_r(at,""),a.flags&=-33);var gt=Xh(e);Zc(e,gt,at,x);break;case 3:case 4:var bt=a.stateNode.containerInfo,tt=Xh(e);Yh(e,tt,bt,x);break;default:throw Error(s(161))}}catch(dt){tn(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,to=!0,n.reset(),to=!1),e=e.sibling}}function Ir(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Iv(n,e),n=n.sibling;else Av(n)}function Iv(e,n){var a=e.alternate;if(a===null)qh(e,!1);else switch(e.tag){case 3:if($h=ma=!1,bv(),Ir(n,e),!ma&&!jc){if(e=ha,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var u=e[r+1];E_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),$h=!0}ha=null;break;case 5:Ir(n,e);break;case 4:r=ma,ma=!1,Ir(n,e),ma&&(jc=!0),ma=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?qh(e,!1):Ir(n,e));break;case 30:r=ma,u=bv(),ma=!1,Ir(n,e),ma&&(e.flags|=4);var h=e.memoizedProps,x=e.stateNode;n=Aa(h,x),x=Aa(a.memoizedProps,x);var N=Ra(h.default,h.update);N==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ci=0,n=Jh(e,a,n,x,N,h,!0),ci!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Wr(e,e.memoizedProps.onUpdate),ha=u):u!==null&&(u.push.apply(u,ha),ha=u),ma=(e.flags&32)!==0?!0:r;break;default:Ir(n,e)}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cv(e,n.alternate,n),n=n.sibling}function us(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:cs(4,a,a.return),us(a,r);break;case 1:Fn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&_v(a,a.return,u),us(a,r);break;case 27:(r&2)!==0&&z_(a.stateNode,a.type,a.memoizedProps);case 5:Fn(a,a.return),a.tag!==5&&a.tag!==27||cl(a),us(a,r);break;case 6:cl(a);break;case 26:Fn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Qe||u.parentNode.removeChild(u),us(a,r);break;case 22:a.memoizedState===null&&us(a,r);break;case 30:Fn(a,a.return),us(a,r);break;case 7:Fn(a,a.return);default:us(a,r)}e=e.sibling}}function Zi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=e,h=n,x=h.flags,N=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:Zi(u,h,a),ll(4,h);break;case 1:if(Zi(u,h,a),r=h,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(gt){tn(r,r.return,gt)}if(r=h,u=r.updateQueue,u!==null){var G=r.stateNode;try{var at=u.shared.hiddenCallbacks;if(at!==null)for(u.shared.hiddenCallbacks=null,u=0;u<at.length;u++)sg(at[u],G)}catch(gt){tn(r,r.return,gt)}}N&&x&64&&vv(h),fa(h,h.return);break;case 27:(a&2)!==0&&yv(h);case 5:h.tag!==5&&h.tag!==27||xv(h),Zi(u,h,a),N&&r===null&&x&4&&kh(h),fa(h,h.return);break;case 6:xv(h);break;case 26:G=h.stateNode,h.memoizedState!==null||G===null||Nn||Fd(xl(G.ownerDocument),h.type,G),Zi(u,h,a),N&&r===null&&x&4&&kh(h),fa(h,h.return);break;case 12:Zi(u,h,a);break;case 31:Zi(u,h,a),N&&x&4&&Uv(u,h);break;case 13:Zi(u,h,a),N&&x&4&&Pv(u,h);break;case 22:h.memoizedState===null&&Zi(u,h,a),fa(h,h.return);break;case 30:Zi(u,h,a),fa(h,h.return);break;case 7:fa(h,h.return);default:Zi(u,h,a)}n=n.sibling}}function nd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ko(a))}function id(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ko(e))}function Bi(e,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Bv(e,n,a,r),n=n.sibling;else u&&wv(n)}function Bv(e,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Jc(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n,a,r),h&2048&&ll(9,n);break;case 1:Bi(e,n,a,r);break;case 3:Bi(e,n,a,r),u&&$h&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&Ko(h)));break;case 12:if(h&2048){Bi(e,n,a,r),h=n.stateNode;try{var x=n.memoizedProps,N=x.id,G=x.onPostCommit;typeof G=="function"&&G(N,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(at){tn(n,n.return,at)}}else Bi(e,n,a,r);break;case 31:Bi(e,n,a,r);break;case 13:Bi(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,N=n.alternate,n.memoizedState!==null?(u&&N!==null&&N.memoizedState===null&&Jc(N),x._visibility&2?Bi(e,n,a,r):fl(e,n)):(u&&N!==null&&N.memoizedState!==null&&Jc(n),x._visibility&2?Bi(e,n,a,r):(x._visibility|=2,Br(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),h&2048&&nd(N,n);break;case 24:Bi(e,n,a,r),h&2048&&id(n.alternate,n);break;case 30:u&&(h=n.alternate,h!==null&&(da(h.child,!0),da(n.child,!0))),Bi(e,n,a,r);break;default:Bi(e,n,a,r)}}function Br(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,N=a,G=r,at=x.flags;switch(x.tag){case 0:case 11:case 15:Br(h,x,N,G,u),ll(8,x);break;case 23:break;case 22:var gt=x.stateNode;x.memoizedState!==null?gt._visibility&2?Br(h,x,N,G,u):fl(h,x):(gt._visibility|=2,Br(h,x,N,G,u)),u&&at&2048&&nd(x.alternate,x);break;case 24:Br(h,x,N,G,u),u&&at&2048&&id(x.alternate,x);break;default:Br(h,x,N,G,u)}n=n.sibling}}function fl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:fl(a,r),u&2048&&nd(r.alternate,r);break;case 24:fl(a,r),u&2048&&id(r.alternate,r);break;default:fl(a,r)}n=n.sibling}}var Qs=8192;function Js(e,n,a){if(e.subtreeFlags&Qs)for(e=e.child;e!==null;)Fv(e,n,a),e=e.sibling}function Fv(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&Qs&&(e.memoizedState!==null?V1(a,qi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Y_(a,e)));break;case 5:Js(e,n,a),e.flags&Qs&&(e=e.stateNode,(n&335544128)===n&&Y_(a,e));break;case 3:case 4:var r=qi;qi=xl(e.stateNode.containerInfo),Js(e,n,a),qi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Qs,Qs=16777216,Js(e,n,a),Qs=r):Js(e,n,a));break;case 30:if((e.flags&Qs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var u=e.stateNode;u.paired=null,yi===null&&(yi=new Map),yi.set(r,u)}Js(e,n,a);break;default:Js(e,n,a)}}function Hv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Ln=r,Vv(r,e)}Hv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gv(e),e=e.sibling}function Gv(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&cs(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,eu(e)):hl(e);break;default:hl(e)}}function eu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Ln=r,Vv(r,e)}Hv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:cs(8,n,n.return),eu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,eu(n));break;default:eu(n)}e=e.sibling}}function Vv(e,n){for(;Ln!==null;){var a=Ln;switch(a.tag){case 0:case 11:case 15:cs(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ko(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Ln=r;else t:for(a=e;Ln!==null;){r=Ln;var u=r.sibling,h=r.return;if(Nv(r),r===a){Ln=null;break t}if(u!==null){u.return=h,Ln=u;break t}Ln=h}}}var IM={getCacheForType:function(e){var n=zn(Sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zn(Sn).controller.signal}},BM=typeof WeakMap=="function"?WeakMap:Map,Ze=0,rn=null,Oe=null,He=0,$e=0,Mi=null,fs=!1,Fr=!1,ad=!1,Ia=0,gn=0,hs=0,js=0,nu=0,bi=0,Hr=0,dl=null,fi=null,sd=!1,iu=0,kv=0,au=1/0,su=null,ds=null,hn=0,Ki=null,$s=null,va=0,rd=0,od=null,Wv=null,Gr=null,Vr=null,kr=null,pl=0,ru=null;function Ei(){return(Ze&2)!==0&&He!==0?He&-He:K.T!==null?vd():ac()}function Xv(){if(bi===0)if((He&536870912)===0||Le){var e=Ls;Ls<<=1,(Ls&3932160)===0&&(Ls=262144),bi=e}else bi=536870912;return e=In.current,e!==null&&(e.flags|=32),bi}function Wr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=T_(Aa(e.memoizedProps,a))),Vr===null&&(Vr=[]),Vr.push(n.bind(null,r))}}function hi(e,n,a){(e===rn&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),ps(e,He,bi,!1)),ra(e,a),((Ze&2)===0||e!==rn)&&(e===rn&&((Ze&2)===0&&(js|=a),gn===4&&ps(e,He,bi,!1)),_a(e))}function Yv(e,n,a){if((Ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ka(e,n),u=r?GM(e,n):cd(e,n,!0),h=r;do{if(u===0){Fr&&!r&&ps(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!FM(a)){u=cd(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var N=e;u=dl;var G=N.current.memoizedState.isDehydrated;if(G&&(Xr(N,x).flags|=256),x=cd(N,x,!1),x!==2&&x!==6){if(ad&&!G){N.errorRecoveryDisabledLanes|=h,js|=h,u=4;break t}h=fi,fi=u,h!==null&&(fi===null?fi=h:fi.push.apply(fi,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){Xr(e,0),ps(e,n,0,!0);break}t:{switch(r=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ps(r,n,bi,!fs);break t;case 2:fi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=iu+300-Jt(),10<u)){if(ps(r,n,bi,!fs),Us(r,0,!0)!==0)break t;va=n,r.timeoutHandle=Rd(qv.bind(null,r,a,fi,su,sd,n,bi,js,Hr,fs,h,"Throttled",-0,0),u);break t}qv(r,a,fi,su,sd,n,bi,js,Hr,fs,h,null,-0,0)}}break}while(!0);_a(e)}function qv(e,n,a,r,u,h,x,N,G,at,gt,bt,tt,dt){e.timeoutHandle=-1;var Gt=n.subtreeFlags,ae=(h&335544064)===h;if(bt=null,(ae||Gt&8192||(Gt&16785408)===16785408)&&(bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},yi=null,Fv(n,h,bt),ae&&(Gt=bt,ae=e.containerInfo,ae=(ae.nodeType===9?ae:ae.ownerDocument).__reactViewTransition,ae!=null&&(Gt.count++,Gt.waitingForViewTransition=!0,Gt=Ml.bind(Gt),ae.finished.then(Gt,Gt))),Gt=(h&62914560)===h?iu-Jt():(h&4194048)===h?kv-Jt():0,Gt=k1(bt,Gt),Gt!==null)){va=h,e.cancelPendingCommit=Gt(e_.bind(null,e,n,h,a,r,u,x,N,G,at,gt,bt,null,tt,dt)),ps(e,h,x,!at);return}e_(e,n,h,a,r,u,x,N,G,at,gt,bt)}function FM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],h=u.getSnapshot;u=u.value;try{if(!xi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ps(e,n,a,r){n=sa(e,n),n&=~nu,n&=~js,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var h=31-Ee(u),x=1<<h;r[h]=-1,u&=~x}a!==0&&Ps(e,a,n)}function ou(){return(Ze&6)===0?(ml(0),!1):!0}function ld(){if(Oe!==null){if($e===0)var e=Oe.return;else e=Oe,Na=Hs=null,gh(e),Nr=null,jo=0,e=Oe;for(;e!==null;)gv(e.alternate,e),e=e.return;Oe=null}}function Xr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,c1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,ld(),rn=e,Oe=a=Ca(e.current,null),He=n,$e=0,Mi=null,fs=!1,Fr=Ka(e,n),ad=!1,Hr=bi=nu=js=hs=gn=0,fi=dl=null,sd=!1,Ia=sa(e,n),mc(),a}function Zv(e,n){Ae=null,K.H=Hc,n===Dr||n===wc?(n=eg(),$e=3):n===ih?(n=eg(),$e=4):$e=n===Nh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Mi=n,Oe===null&&(gn=1,Gc(e,Pi(n,e.current)))}function Kv(){var e=In.current;return e===null?!0:(He&4194048)===He?Wn===null:(He&62914560)===He||(He&536870912)!==0?e===Wn:!1}function Qv(){var e=K.H;return K.H=Hc,e===null?Hc:e}function Jv(){var e=K.A;return K.A=IM,e}function lu(){gn=4,fs||(He&4194048)!==He&&In.current!==null||(Fr=!0),(hs&134217727)===0&&(js&134217727)===0||rn===null||ps(rn,He,bi,!1)}function cd(e,n,a){var r=Ze;Ze|=2;var u=Qv(),h=Jv();(rn!==e||He!==n)&&(su=null,Xr(e,n)),n=!1;var x=gn;t:do try{if($e!==0&&Oe!==null){var N=Oe,G=Mi;switch($e){case 8:ld(),x=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(n=!0);var at=$e;if($e=0,Mi=null,Yr(e,N,G,at),a&&Fr){x=0;break t}break;default:at=$e,$e=0,Mi=null,Yr(e,N,G,at)}}HM(),x=gn;break}catch(gt){Zv(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Na=Hs=null,Ze=r,K.H=u,K.A=h,Oe===null&&(rn=null,He=0,mc()),x}function HM(){for(;Oe!==null;)jv(Oe)}function GM(e,n){var a=Ze;Ze|=2;var r=Qv(),u=Jv();rn!==e||He!==n?(su=null,au=Jt()+500,Xr(e,n)):Fr=Ka(e,n);t:do try{if($e!==0&&Oe!==null){n=Oe;var h=Mi;e:switch($e){case 1:$e=0,Mi=null,Yr(e,n,h,1);break;case 2:case 9:if($0(h)){$e=0,Mi=null,$v(n);break}n=function(){$e!==2&&$e!==9||rn!==e||($e=7),_a(e)},h.then(n,n);break t;case 3:$e=7;break t;case 4:$e=5;break t;case 7:$0(h)?($e=0,Mi=null,$v(n)):($e=0,Mi=null,Yr(e,n,h,7));break;case 5:var x=null;switch(Oe.tag){case 26:x=Oe.memoizedState;case 5:case 27:var N=Oe;if(x?W_(x):N.stateNode.complete){$e=0,Mi=null;var G=N.sibling;if(G!==null)Oe=G;else{var at=N.return;at!==null?(Oe=at,cu(at)):Oe=null}break e}}$e=0,Mi=null,Yr(e,n,h,5);break;case 6:$e=0,Mi=null,Yr(e,n,h,6);break;case 8:ld(),gn=6;break t;default:throw Error(s(462))}}VM();break}catch(gt){Zv(e,gt)}while(!0);return Na=Hs=null,K.H=r,K.A=u,Ze=a,Oe!==null?0:(rn=null,He=0,mc(),gn)}function VM(){for(;Oe!==null&&!Wt();)jv(Oe)}function jv(e){var n=pv(e.alternate,e,Ia);e.memoizedProps=e.pendingProps,n===null?cu(e):Oe=n}function $v(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ov(a,n,n.pendingProps,n.type,void 0,He);break;case 11:n=ov(a,n,n.pendingProps,n.type.render,n.ref,He);break;case 5:gh(n);var r=n;r===Dn&&(Le?(yc(r),r.tag===5&&r.stateNode!=null&&(ln=r.stateNode)):(yc(r),Le=!0));default:gv(a,n),n=Oe=V0(n,Ia),n=pv(a,n,Ia)}e.memoizedProps=e.pendingProps,n===null?cu(e):Oe=n}function Yr(e,n,a,r){Na=Hs=null,gh(n),Nr=null,jo=0;var u=n.return;try{if(CM(e,u,n,a,He)){gn=1,Gc(e,Pi(a,e.current)),Oe=null;return}}catch(h){if(u!==null)throw Oe=u,h;gn=1,Gc(e,Pi(a,e.current)),Oe=null;return}n.flags&32768?(Le||r===1?e=!0:Fr||(He&536870912)!==0?e=!1:(fs=e=!0,(r===2||r===9||r===3||r===6)&&(r=In.current,r!==null&&r.tag===13&&(r.flags|=16384))),t_(n,e)):cu(n)}function cu(e){var n=e;do{if((n.flags&32768)!==0){t_(n,fs);return}e=n.return;var a=UM(n.alternate,n,Ia);if(a!==null){Oe=a;return}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=e}while(n!==null);gn===0&&(gn=5)}function t_(e,n){do{var a=PM(e.alternate,e);if(a!==null){a.flags&=32767,Oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Oe=e;return}Oe=e=a}while(e!==null);gn=6,Oe=null}function e_(e,n,a,r,u,h,x,N,G,at,gt,bt){e.cancelPendingCommit=null;do uu();while(hn!==0);if((Ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===rn&&(Oe=rn=null,He=0),$s=n,Ki=e,va=a,od=u,Wv=r,kM(e,n,a,x,N,G,bt)}}function kM(e,n,a,r,u,h,x){var N=n.lanes|n.childLanes;if(rd=N,N|=Wf,ic(e,a,N,r,u,h),Vr=null,(a&335544064)===a?(kr=vM(e),r=10262):(kr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,KM(zt,function(){return dd(),null})):(e.callbackNode=null,e.callbackPriority=0),Kc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=K.T,K.T=null,u=mt.p,mt.p=2,h=Ze,Ze|=4;try{OM(e,n,a)}finally{Ze=h,mt.p=u,K.T=r}}hn=1,Kc?Gr=m1(x,e.containerInfo,kr,ud,fd,XM,hd,dd,WM):(ud(),fd(),hd())}function WM(e){if(hn!==0){var n=Ki.onRecoverableError;n(e,{componentStack:null})}}function XM(){hn===3&&(hn=0,Iv($s,Ki),hn=4)}function ud(){if(hn===1){hn=0;var e=Ki,n=$s,a=va,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=K.T,K.T=null;var u=mt.p;mt.p=2;var h=Ze;Ze|=4;try{ul=jc=!1,Ov(n,e,a),a=Td;var x=L0(e.containerInfo),N=a.focusedElem,G=a.selectionRange;if(x!==N&&N&&N.ownerDocument&&N0(N.ownerDocument.documentElement,N)){if(G!==null&&Ff(N)){var at=G.start,gt=G.end;if(gt===void 0&&(gt=at),"selectionStart"in N)N.selectionStart=at,N.selectionEnd=Math.min(gt,N.value.length);else{var bt=N.ownerDocument||document,tt=bt&&bt.defaultView||window;if(tt.getSelection){var dt=tt.getSelection(),Gt=N.textContent.length,ae=Math.min(G.start,Gt),Re=G.end===void 0?ae:Math.min(G.end,Gt);!dt.extend&&ae>Re&&(x=Re,Re=ae,ae=x);var nt=D0(N,ae),Q=D0(N,Re);if(nt&&Q&&(dt.rangeCount!==1||dt.anchorNode!==nt.node||dt.anchorOffset!==nt.offset||dt.focusNode!==Q.node||dt.focusOffset!==Q.offset)){var lt=bt.createRange();lt.setStart(nt.node,nt.offset),dt.removeAllRanges(),ae>Re?(dt.addRange(lt),dt.extend(Q.node,Q.offset)):(lt.setEnd(Q.node,Q.offset),dt.addRange(lt))}}}}for(bt=[],dt=N;dt=dt.parentNode;)dt.nodeType===1&&bt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<bt.length;N++){var yt=bt[N];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}to=!!Ed,Td=Ed=null}finally{Ze=h,mt.p=u,K.T=r}}e.current=n,hn=2}}function fd(){if(hn===2){hn=0;var e=Ki,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var r=mt.p;mt.p=2;var u=Ze;Ze|=4;try{Cv(e,n.alternate,n)}finally{Ze=u,mt.p=r,K.T=a}}hn=3}}function hd(){if(hn===4||hn===3){hn=0;var e=Gr;Gr=null,Vt();var n=Ki,a=$s,r=va,u=Wv,h=(r&335544064)===r?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?hn=5:(hn=0,$s=Ki=null,n_(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(ds=null),Io(r),a=a.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(oe,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=K.T,h=mt.p,mt.p=2,K.T=null;try{for(var x=n.onRecoverableError,N=0;N<u.length;N++){var G=u[N];x(G.value,{componentStack:G.stack})}}finally{K.T=a,mt.p=h}}if(u=Vr,x=kr,kr=null,u!==null&&(Vr=null,x===null&&(x=[]),e!==null))for(G=0;G<u.length;G++)a=(0,u[G])(x),a!==void 0&&e.finished.finally(a);(va&3)!==0&&uu(),_a(n),h=n.pendingLanes,(r&261930)!==0&&(h&42)!==0?n===ru?pl++:(pl=0,ru=n):(pl=0,ru=null),ml(0)}}function n_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ko(n)))}function uu(){return Gr!==null&&(Gr.skipTransition(),Gr=null),ud(),fd(),hd(),dd()}function dd(){if(hn!==5)return!1;var e=Ki,n=rd;rd=0;var a=Io(va),r=K.T,u=mt.p;try{mt.p=32>a?32:a,K.T=null,a=od,od=null;var h=Ki,x=va;if(hn=0,$s=Ki=null,va=0,(Ze&6)!==0)throw Error(s(331));var N=Ze;if(Ze|=4,Gv(h.current),Bv(h,h.current,x,a),Ze=N,ml(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(oe,h)}catch{}return!0}finally{mt.p=u,K.T=r,n_(e,n)}}function i_(e,n,a){n=Pi(a,n),n=Dh(e.stateNode,n,2),e=ss(e,n,2),e!==null&&(ra(e,2),_a(e))}function tn(e,n,a){if(e.tag===3)i_(e,e,a);else for(;n!==null;){if(n.tag===3){i_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ds===null||!ds.has(r))){e=Pi(a,e),a=$g(2),r=ss(n,a,2),r!==null&&(tv(a,r,n,e),ra(r,2),_a(r));break}}n=n.return}}function pd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new BM;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(ad=!0,u.add(a),e=YM.bind(null,e,n,a),n.then(e,e))}function YM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,rn===e&&(He&a)===a&&((gn===4||gn===3&&(He&62914560)===He&&300>Jt()-iu)&&(Ze&2)===0?Xr(e,0):nu|=a,Hr===He&&(Hr=0)),_a(e)}function a_(e,n){n===0&&(n=Uo()),e=Is(e,n),e!==null&&(ra(e,n),_a(e))}function qM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),a_(e,a)}function ZM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),a_(e,a)}function KM(e,n){return It(e,n)}var qr=null,Zr=null,md=!1,fu=!1,gd=!1,ms=0;function _a(e){e!==Zr&&e.next===null&&(Zr===null?qr=Zr=e:Zr=Zr.next=e),fu=!0,md||(md=!0,JM())}function ml(e,n){if(!gd&&fu){gd=!0;do for(var a=!1,r=qr;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var h=0;else{var x=r.suspendedLanes,N=r.pingedLanes;h=(1<<31-Ee(42|e)+1)-1,h&=u&~(x&~N),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,l_(r,h))}else h=He,h=Us(r,r===rn?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||Ka(r,h)||(a=!0,l_(r,h));r=r.next}while(a);gd=!1}}function QM(){s_()}function s_(){fu=md=!1;var e=0;ms!==0&&l1()&&(e=ms);for(var n=Jt(),a=null,r=qr;r!==null;){var u=r.next,h=r_(r,n);h===0?(r.next=null,a===null?qr=u:a.next=u,u===null&&(Zr=a)):(a=r,(e!==0||(h&3)!==0)&&(fu=!0)),r=u}hn!==0&&hn!==5||ml(e),ms!==0&&(ms=0)}function r_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ee(h),N=1<<x,G=u[x];G===-1?((N&a)===0||(N&r)!==0)&&(u[x]=Lo(N,n)):G<=n&&(e.expiredLanes|=N),h&=~N}if(n=rn,a=He,a=Us(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&($e===2||$e===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&le(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ka(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&le(r),Io(a)){case 2:case 8:a=j;break;case 32:a=zt;break;case 268435456:a=Ft;break;default:a=zt}return r=o_.bind(null,e),a=It(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&le(r),e.callbackPriority=2,e.callbackNode=null,2}function o_(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uu()&&e.callbackNode!==a)return null;var r=He;return r=Us(e,e===rn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Yv(e,r,n),r_(e,Jt()),e.callbackNode!=null&&e.callbackNode===a?o_.bind(null,e):null)}function l_(e,n){if(uu())return null;Yv(e,n,!0)}function JM(){u1(function(){(Ze&6)!==0?It(be,QM):s_()})}function vd(){if(ms===0){var e=ks;e===0&&(e=mr,mr<<=1,(mr&261888)===0&&(mr=256)),ms=e}return ms}function c_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oc(e)}function jM(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var h=c_((u[Z]||null).action),x=r.submitter;x&&(n=(n=x[Z]||null)?c_(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var N=new fc("action","action",null,r,u);e.push({event:N,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ms!==0){var G=new FormData(u,x);Th(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(N.preventDefault(),G=new FormData(u,x),Th(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var _d=0;_d<kf.length;_d++){var xd=kf[_d],$M=xd.toLowerCase(),t1=xd[0].toUpperCase()+xd.slice(1);Xi($M,"on"+t1)}Xi(O0,"onAnimationEnd"),Xi(z0,"onAnimationIteration"),Xi(I0,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(cM,"onTransitionRun"),Xi(uM,"onTransitionStart"),Xi(fM,"onTransitionCancel"),Xi(B0,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function u_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var h=void 0;if(n)for(var x=r.length-1;0<=x;x--){var N=r[x],G=N.instance,at=N.currentTarget;if(N=N.listener,G!==h&&u.isPropagationStopped())break t;h=N,u.currentTarget=at;try{h(u)}catch(gt){pc(gt)}u.currentTarget=null,h=G}else for(x=0;x<r.length;x++){if(N=r[x],G=N.instance,at=N.currentTarget,N=N.listener,G!==h&&u.isPropagationStopped())break t;h=N,u.currentTarget=at;try{h(u)}catch(gt){pc(gt)}u.currentTarget=null,h=G}}}}function ze(e,n){var a=n[ft];a===void 0&&(a=n[ft]=new Set);var r=e+"__bubble";a.has(r)||(f_(n,e,2,!1),a.add(r))}function Sd(e,n,a){var r=0;n&&(r|=4),f_(a,e,r,n)}var hu="_reactListening"+Math.random().toString(36).slice(2);function yd(e){if(!e[hu]){e[hu]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(e1.has(a)||Sd(a,!1,e),Sd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hu]||(n[hu]=!0,Sd("selectionchange",!1,n))}}function f_(e,n,a,r){switch(tx(n)){case 2:var u=q1;break;case 8:u=Z1;break;default:u=Gd}a=u.bind(null,n,a,e),u=void 0,!Cf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Md(e,n,a,r,u){var h=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var N=r.stateNode.containerInfo;if(N===u)break;if(x===4)for(x=r.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;N!==null;){if(x=xe(N),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){r=h=x;continue t}N=N.parentNode}}r=r.return}f0(function(){var at=h,gt=Af(a),bt=[];t:{var tt=F0.get(e);if(tt!==void 0){var dt=fc,Gt=e;switch(e){case"keypress":if(cc(a)===0)break t;case"keydown":case"keyup":dt=Fy;break;case"focusin":Gt="focus",dt=Uf;break;case"focusout":Gt="blur",dt=Uf;break;case"beforeblur":case"afterblur":dt=Uf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Wy;break;case O0:case z0:case I0:dt=Dy;break;case B0:dt=Yy;break;case"scroll":case"scrollend":dt=Ty;break;case"wheel":dt=Zy;break;case"copy":case"cut":case"paste":dt=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=g0;break;case"submit":dt=Vy;break;case"toggle":case"beforetoggle":dt=Qy}var ae=(n&4)!==0,Re=!ae&&(e==="scroll"||e==="scrollend"),nt=ae?tt!==null?tt+"Capture":null:tt;ae=[];for(var Q=at,lt;Q!==null;){var yt=Q;if(lt=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||lt===null||nt===null||(yt=Bo(Q,nt),yt!=null&&ae.push(vl(Q,yt,lt))),Re)break;Q=Q.return}0<ae.length&&(tt=new dt(tt,Gt,null,a,gt),bt.push({event:tt,listeners:ae}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",tt=e==="mouseout"||e==="pointerout",dt&&a!==wf&&(Gt=a.relatedTarget||a.fromElement)&&(xe(Gt)||Gt[_t]))break t;(tt||dt)&&(Gt=gt.window===gt?gt:(dt=gt.ownerDocument)?dt.defaultView||dt.parentWindow:window,tt?(dt=a.relatedTarget||a.toElement,tt=at,dt=dt?xe(dt):null,dt!==null&&(Re=c(dt),ae=dt.tag,dt!==Re||ae!==5&&ae!==27&&ae!==6)&&(dt=null)):(tt=null,dt=at),tt!==dt&&(ae=p0,yt="onMouseLeave",nt="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(ae=g0,yt="onPointerLeave",nt="onPointerEnter",Q="pointer"),Re=tt==null?Gt:$t(tt),lt=dt==null?Gt:$t(dt),Gt=new ae(yt,Q+"leave",tt,a,gt),Gt.target=Re,Gt.relatedTarget=lt,yt=null,xe(gt)===at&&(ae=new ae(nt,Q+"enter",dt,a,gt),ae.target=lt,ae.relatedTarget=Re,yt=ae),Re=yt,ae=tt&&dt?L(tt,dt,n1):null,tt!==null&&h_(bt,Gt,tt,ae,!1),dt!==null&&Re!==null&&h_(bt,Re,dt,ae,!0)))}t:{if(tt=at?$t(at):window,dt=tt.nodeName&&tt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&tt.type==="file")var te=E0;else if(M0(tt))if(T0)te=rM;else{te=aM;var Ge=iM}else dt=tt.nodeName,!dt||dt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?at&&Tf(at.elementType)&&(te=E0):te=sM;if(te&&(te=te(e,at))){b0(bt,te,a,gt);break t}Ge&&Ge(e,tt,at)}switch(Ge=at?$t(at):window,e){case"focusin":(M0(Ge)||Ge.contentEditable==="true")&&(Mr=Ge,Hf=at,Yo=null);break;case"focusout":Yo=Hf=Mr=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,U0(bt,a,gt);break;case"selectionchange":if(lM)break;case"keydown":case"keyup":U0(bt,a,gt)}var fe;if(Of)t:{switch(e){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else yr?S0(e,a)&&(_e="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(v0&&a.locale!=="ko"&&(yr||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&yr&&(fe=h0()):(Qa=gt,Df="value"in Qa?Qa.value:Qa.textContent,yr=!0)),Ge=du(at,_e),0<Ge.length&&(_e=new m0(_e,e,null,a,gt),bt.push({event:_e,listeners:Ge}),fe?_e.data=fe:(fe=y0(a),fe!==null&&(_e.data=fe)))),(fe=jy?$y(e,a):tM(e,a))&&(_e=du(at,"onBeforeInput"),0<_e.length&&(Ge=new m0("onBeforeInput","beforeinput",null,a,gt),bt.push({event:Ge,listeners:_e}),Ge.data=fe)),jM(bt,e,at,a,gt)}u_(bt,n)})}function vl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function du(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Bo(e,a),u!=null&&r.unshift(vl(e,u,h)),u=Bo(e,n),u!=null&&r.push(vl(e,u,h))),e.tag===3)return r;e=e.return}return[]}function n1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function h_(e,n,a,r,u){for(var h=n._reactName,x=[];a!==null&&a!==r;){var N=a,G=N.alternate,at=N.stateNode;if(N=N.tag,G!==null&&G===r)break;N!==5&&N!==26&&N!==27||at===null||(G=at,u?(at=Bo(a,h),at!=null&&x.unshift(vl(a,at,G))):u||(at=Bo(a,h),at!=null&&x.push(vl(a,at,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var i1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function d_(e){return(typeof e=="string"?e:""+e).replace(i1,`
`).replace(a1,"")}function p_(e,n){return n=d_(n),d_(e)===n}function en(e,n,a,r,u,h){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||_r(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&_r(e,""+r);else return;break;case"className":_i(e,"class",r);break;case"tabIndex":_i(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":_i(e,a,r);break;case"style":c0(e,r,h);return;case"data":if(n!=="object"){_i(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=oc(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&en(e,n,"name",u.name,u,null),en(e,n,"formEncType",u.formEncType,u,null),en(e,n,"formMethod",u.formMethod,u,null),en(e,n,"formTarget",u.formTarget,u,null)):(en(e,n,"encType",u.encType,u,null),en(e,n,"method",u.method,u,null),en(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=oc(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=la);return;case"onScroll":r!=null&&ze("scroll",e);return;case"onScrollEnd":r!=null&&ze("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));h?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=oc(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ze("beforetoggle",e),ze("toggle",e),on(e,"popover",r);break;case"xlinkActuate":Fe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Fe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Fe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Fe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Fe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Fe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Fe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Fe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Fe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":on(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=by.get(a)||a,on(e,a,r);else return}Ne=!0}function bd(e,n,a,r,u,h){switch(a){case"style":c0(e,r,h);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));h?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")_r(e,r);else if(typeof r=="number"||typeof r=="bigint")_r(e,""+r);else return;break;case"onScroll":r!=null&&ze("scroll",e);return;case"onScrollEnd":r!=null&&ze("scrollend",e);return;case"onClick":r!=null&&(e.onclick=la);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Tn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),h=a.slice(2,u?a.length-7:void 0),n=e[Z]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,r,u);break t}Ne=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):on(e,a,r)}return}Ne=!0}function Hn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var r=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,h,x,a,null)}}u&&en(e,n,"srcSet",a.srcSet,a,null),r&&en(e,n,"src",a.src,a,null);return;case"input":ze("invalid",e);var N=h=x=u=null,G=null,at=null;for(r in a)if(a.hasOwnProperty(r)){var gt=a[r];if(gt!=null)switch(r){case"name":u=gt;break;case"type":x=gt;break;case"checked":G=gt;break;case"defaultChecked":at=gt;break;case"value":h=gt;break;case"defaultValue":N=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:en(e,n,r,gt,a,null)}}s0(e,h,N,G,at,x,u,!1);return;case"select":ze("invalid",e),r=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":h=N;break;case"defaultValue":x=N;break;case"multiple":r=N;default:en(e,n,u,N,a,null)}n=h,a=x,e.multiple=!!r,n!=null?vr(e,!!r,n,!1):a!=null&&vr(e,!!r,a,!0);return;case"textarea":ze("invalid",e),h=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(N=a[x],N!=null))switch(x){case"value":r=N;break;case"defaultValue":u=N;break;case"children":h=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:en(e,n,x,N,a,null)}o0(e,r,u,h);return;case"option":for(G in a)a.hasOwnProperty(G)&&(r=a[G],r!=null)&&(G==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":en(e,n,G,r,a,null));return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(r=0;r<gl.length;r++)ze(gl[r],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(r=a[at],r!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,at,r,a,null)}return;default:if(Tf(n)){for(gt in a)a.hasOwnProperty(gt)&&(r=a[gt],r!==void 0&&bd(e,n,gt,r,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(r=a[N],r!=null&&en(e,n,N,r,a,null))}var s1={};function r1(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,N=null,G=null,at=null,gt=null;for(dt in a){var bt=a[dt];if(a.hasOwnProperty(dt)&&bt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":G=bt;default:r.hasOwnProperty(dt)||en(e,n,dt,null,r,bt)}}for(var tt in r){var dt=r[tt];if(bt=a[tt],r.hasOwnProperty(tt)&&(dt!=null||bt!=null))switch(tt){case"type":dt!==bt&&(Ne=!0),h=dt;break;case"name":dt!==bt&&(Ne=!0),u=dt;break;case"checked":dt!==bt&&(Ne=!0),at=dt;break;case"defaultChecked":dt!==bt&&(Ne=!0),gt=dt;break;case"value":dt!==bt&&(Ne=!0),x=dt;break;case"defaultValue":dt!==bt&&(Ne=!0),N=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==bt&&en(e,n,tt,dt,r,bt)}}bf(e,x,N,G,at,gt,h,u);return;case"select":dt=x=N=tt=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":dt=G;default:r.hasOwnProperty(h)||en(e,n,h,null,r,G)}for(u in r)if(h=r[u],G=a[u],r.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":h!==G&&(Ne=!0),tt=h;break;case"defaultValue":h!==G&&(Ne=!0),N=h;break;case"multiple":h!==G&&(Ne=!0),x=h;default:h!==G&&en(e,n,u,h,r,G)}n=N,a=x,r=dt,tt!=null?vr(e,!!a,tt,!1):!!r!=!!a&&(n!=null?vr(e,!!a,n,!0):vr(e,!!a,a?[]:"",!1));return;case"textarea":dt=tt=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!r.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:en(e,n,N,null,r,u)}for(x in r)if(u=r[x],h=a[x],r.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":u!==h&&(Ne=!0),tt=u;break;case"defaultValue":u!==h&&(Ne=!0),dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&en(e,n,x,u,r,h)}r0(e,tt,dt);return;case"option":for(var Gt in a)tt=a[Gt],a.hasOwnProperty(Gt)&&tt!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:en(e,n,Gt,null,r,tt));for(G in r)tt=r[G],dt=a[G],r.hasOwnProperty(G)&&tt!==dt&&(tt!=null||dt!=null)&&(G==="selected"?(tt!==dt&&(Ne=!0),e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol"):en(e,n,G,tt,r,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)tt=a[ae],a.hasOwnProperty(ae)&&tt!=null&&!r.hasOwnProperty(ae)&&en(e,n,ae,null,r,tt);for(at in r)if(tt=r[at],dt=a[at],r.hasOwnProperty(at)&&tt!==dt&&(tt!=null||dt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:en(e,n,at,tt,r,dt)}return;default:if(Tf(n)){for(var Re in a)tt=a[Re],a.hasOwnProperty(Re)&&tt!==void 0&&!r.hasOwnProperty(Re)&&bd(e,n,Re,void 0,r,tt);for(gt in r)tt=r[gt],dt=a[gt],!r.hasOwnProperty(gt)||tt===dt||tt===void 0&&dt===void 0||bd(e,n,gt,tt,r,dt);return}}for(var nt in a)tt=a[nt],a.hasOwnProperty(nt)&&tt!=null&&!r.hasOwnProperty(nt)&&en(e,n,nt,null,r,tt);for(bt in r)tt=r[bt],dt=a[bt],!r.hasOwnProperty(bt)||tt===dt||tt==null&&dt==null||en(e,n,bt,tt,r,dt)}function m_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function o1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],h=u.transferSize,x=u.initiatorType,N=u.duration;if(h&&N&&m_(x)){for(x=0,N=u.responseEnd,r+=1;r<a.length;r++){var G=a[r],at=G.startTime;if(at>N)break;var gt=G.transferSize,bt=G.initiatorType;gt&&m_(bt)&&(G=G.responseEnd,x+=gt*(G<N?1:(N-at)/(G-at)))}if(--r,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ed=null,Td=null;function _l(e){return e.nodeType===9?e:e.ownerDocument}function g_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function __(e,n,a,r){return a=_l(a).createElement(e),a[C]=r,a[Z]=n,Hn(a,e,n),De(a),a}function wd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ad=null;function l1(){var e=window.event;return e&&e.type==="popstate"?e===Ad?!1:(Ad=e,!0):(Ad=null,!1)}var Rd=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,x_=typeof Promise=="function"?Promise:void 0,S_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rd,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof x_<"u"?function(e){return x_.resolve(null).then(e).catch(f1)}:Rd;function f1(e){setTimeout(function(){throw e})}function gs(e){return e==="head"}function y_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),eo(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")zd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zd(a);for(var h=a.firstChild;h;){var x=h.nextSibling,N=h.nodeName;h[Ht]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&zd(e.ownerDocument.body);a=u}while(a);eo(n)}function M_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function b_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var h=n[u];0<h.width&&0<h.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function E_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function h1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Cd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return h1(n,a,e)}function d1(e){return e.documentElement.clientHeight}function p1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function m1(e,n,a,r,u,h,x,N,G){var at=n.nodeType===9?n:n.ownerDocument;try{var gt=at.startViewTransition({update:function(){var tt=at.defaultView,dt=tt.navigation&&tt.navigation.transition,Gt=at.fonts.status;r();var ae=[];if(Gt==="loaded"&&(d1(at),at.fonts.status==="loading"&&ae.push(at.fonts.ready)),Gt=ae.length,e!==null)for(var Re=e.suspenseyImages,nt=0,Q=0;Q<Re.length;Q++){var lt=Re[Q];if(!lt.complete){var yt=lt.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<tt.innerHeight&&yt.left<tt.innerWidth){if(nt+=X_(lt),nt>gu){ae.length=Gt;break}lt=new Promise(p1.bind(lt)),ae.push(lt)}}}if(0<ae.length)return tt=Promise.race([Promise.all(ae),new Promise(function(te){return setTimeout(te,500)})]).then(u,u),(dt?Promise.allSettled([dt.finished,tt]):tt).then(h,h);if(u(),dt)return dt.finished.then(h,h);h()},types:a});at.__reactViewTransition=gt;var bt=[];return gt.ready.then(function(){for(var tt=at.documentElement.getAnimations({subtree:!0}),dt=0;dt<tt.length;dt++){var Gt=tt[dt],ae=Gt.effect,Re=ae.pseudoElement;if(Re!=null&&Re.startsWith("::view-transition")){bt.push(Gt),Gt=ae.getKeyframes();for(var nt=Re=void 0,Q=!0,lt=0;lt<Gt.length;lt++){var yt=Gt[lt],te=yt.width;if(Re===void 0)Re=te;else if(Re!==te){Q=!1;break}if(te=yt.height,nt===void 0)nt=te;else if(nt!==te){Q=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}Q&&Re!==void 0&&nt!==void 0&&(ae.setKeyframes(Gt),Q=getComputedStyle(ae.target,ae.pseudoElement),Q.width!==Re||Q.height!==nt)&&(Q=Gt[0],Q.width=Re,Q.height=nt,Q=Gt[Gt.length-1],Q.width=Re,Q.height=nt,ae.setKeyframes(Gt))}}x()},function(tt){at.__reactViewTransition===gt&&(at.__reactViewTransition=null);try{typeof tt=="object"&&tt!==null&&tt.name==="InvalidStateError"&&(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null),tt!==null&&G(tt)}finally{r(),u(),x()}}),gt.finished.finally(function(){for(var tt=0;tt<bt.length;tt++)bt[tt].cancel();at.__reactViewTransition===gt&&(at.__reactViewTransition=null),N()}),gt}catch{return r(),u(),x(),null}}function tr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}tr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},tr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var h=a[u].effect;h!==null&&h.target===e&&h.pseudoElement===n&&r.push(a[u])}return r},tr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function T_(e){return{name:e,group:new tr("group",e),imagePair:new tr("image-pair",e),old:new tr("old",e),new:new tr("new",e)}}function Ti(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ti.prototype.addEventListener=function(e,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(A_(h,e,n,a)===-1){var x=this,N=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(N=function(G){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,G):n.handleEvent(G)}),r!==null&&(u=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Kr(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:N,cleanup:u}),v(this._fragmentFiber.child,!1,g1,e,N,r)}this._eventListeners=h}};function g1(e,n,a,r){return M(e).addEventListener(n,a,r),!1}Ti.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=A_(r,e,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var h=u.cleanup;u=Kr(u.optionsOrUseCapture),v(this._fragmentFiber.child,!1,v1,e,a,u),r.splice(n,1),h!==null&&h()}};function v1(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Kr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function w_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function A_(e,n,a,r){if(e.length===0)return-1;r=w_(r);for(var u=0;u<e.length;u++){var h=e[u];if(h.type===n&&h.listener===a&&w_(h.optionsOrUseCapture)===r)return u}return-1}Ti.prototype.dispatchEvent=function(e){var n=g(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var h=a[u];r.addEventListener(h.type,h.attachedListener,Kr(h.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(u=0;u<a.length;u++)h=a[u],r.removeEventListener(h.type,h.attachedListener,Kr(h.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},Ti.prototype.focus=function(e){v(this._fragmentFiber.child,!0,R_,e,void 0,void 0)};function R_(e,n){return e.tag===6?!1:(e=M(e),C1(e,n))}Ti.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,Dd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!R_(n[a],e);a--);};function Dd(e,n){return n.push(e),!1}Ti.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=M(e),e=_l(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,_1,e,void 0,void 0))};function _1(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Ti.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,x1,e,void 0,void 0)};function x1(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}Ti.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,S1,e,void 0,void 0);for(var a=n=0;a<Qi.length;a++){var r=Qi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Qi[n++]=r}Qi.length=n}};function S1(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Qi=[],Nd=!1;function y1(e,n,a){Qi.push({fragmentInstance:e,observer:n,instance:a}),Nd||(Nd=!0,D1(function(){Nd=!1;var r=Qi;Qi=[];for(var u=0;u<r.length;u++){var h=r[u];h.observer.unobserve(h.instance)}}))}Ti.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,M1,e,void 0,void 0),e};function M1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}Ti.prototype.getRootNode=function(e){var n=g(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},Ti.prototype.compareDocumentPosition=function(e){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Dd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var h=S(this._fragmentFiber)?n.parentElement:r;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),N=u.compareDocumentPosition(e),G=x&Node.DOCUMENT_POSITION_CONTAINED_BY||N&Node.DOCUMENT_POSITION_CONTAINED_BY;return N=r&&h&&x&Node.DOCUMENT_POSITION_FOLLOWING&&N&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||h&&u===e||G||N?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!h&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||b1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function b1(e,n,a,r,u){var h=xe(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=u.ownerDocument,u===h||u===h.documentElement||u===h.body;t:{for(h=n,n=g(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=L(a,h,R),n===null?n=!1:(v(n,!0,O,h,a),h=y,y=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===r)&&(n=L(r,h,R),n===null?n=!1:(v(n,!0,T,h,r),h=y,D=y=null,n=h!==null)),n):!1}function C_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ti.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Dd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),C_(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),C_(u,a)):M(u).scrollIntoView(e),r+=a?-1:1}};function E1(e,n){return e=M(e),D_(e,n),!1}function D_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function N_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.addEventListener(u.type,u.attachedListener,Kr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var x=0,N=0;N<Qi.length;N++){var G=Qi[N];(G.fragmentInstance!==n||G.observer!==h||G.instance!==e)&&(Qi[x++]=G)}Qi.length=x,h.observe(e)}),D_(e,n))}function T1(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.removeEventListener(u.type,u.attachedListener,Kr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?y1(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Ld(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ld(a),ie(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function w1(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ht])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function A1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Fi(e.nextSibling),e===null))return null;return e}function L_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Fi(e.nextSibling),e===null))return null;return e}function Ud(e){return e.data==="$?"||e.data==="$~"}function Pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function R1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Od=null;function U_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function P_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function C1(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function D1(e){S_(function(){S_(function(n){return e(n)})})}function O_(e,n,a){switch(n=_l(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function z_(e,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&en(e,n,r,null,s1,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===la&&(e.onclick=null),ie(e)}function zd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ie(e)}var Hi=new Map,I_=new Set;function xl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ba=mt.d;mt.d={f:N1,r:L1,D:U1,C:P1,L:O1,m:z1,X:B1,S:I1,M:F1};function N1(){var e=Ba.f(),n=ou();return e||n}function L1(e){var n=Te(e);n!==null&&n.tag===5&&n.type==="form"?Fg(n):Ba.r(e)}var Qr=typeof document>"u"?null:document;function B_(e,n,a){var r=Qr;if(r&&typeof n=="string"&&n){var u=Li(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),I_.has(u)||(I_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Hn(n,"link",e),De(n),r.head.appendChild(n)))}}function U1(e){Ba.D(e),B_("dns-prefetch",e,null)}function P1(e,n){Ba.C(e,n),B_("preconnect",e,n)}function O1(e,n,a){Ba.L(e,n,a);var r=Qr;if(r&&e&&n){var u='link[rel="preload"][as="'+Li(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Li(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Li(a.imageSizes)+'"]')):u+='[href="'+Li(e)+'"]';var h=u;switch(n){case"style":h=Jr(e);break;case"script":h=jr(e)}if(!(Hi.has(h)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Hi.set(h,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Sl(h))||n==="script"&&r.querySelector(yl(h))))){var x=r.createElement("link");Hn(x,"link",e),n==="style"&&(x[ee]=!0,x.onload=x.onerror=function(){an(x)}),De(x),r.head.appendChild(x)}}}function z1(e,n){Ba.m(e,n);var a=Qr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Li(r)+'"][href="'+Li(e)+'"]',h=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=jr(e)}if(!Hi.has(h)&&(e=P({rel:"modulepreload",href:e},n),Hi.set(h,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yl(h)))return}r=a.createElement("link"),Hn(r,"link",e),De(r),a.head.appendChild(r)}}}function I1(e,n,a){Ba.S(e,n,a);var r=Qr;if(r&&e){var u=Pe(r).hoistableStyles,h=Jr(e);n=n||"default";var x=u.get(h);if(!x){var N={loading:0,preload:null};if(x=r.querySelector(Sl(h)))N.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Hi.get(h))&&Id(e,a);var G=x=r.createElement("link");De(G),Hn(G,"link",e),G._p=new Promise(function(at,gt){G.onload=at,G.onerror=gt}),G.addEventListener("load",function(){N.loading|=1}),G.addEventListener("error",function(){N.loading|=2}),N.loading|=4,pu(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:N},u.set(h,x)}}}function B1(e,n){Ba.X(e,n);var a=Qr;if(a&&e){var r=Pe(a).hoistableScripts,u=jr(e),h=r.get(u);h||(h=a.querySelector(yl(u)),h||(e=P({src:e,async:!0},n),(n=Hi.get(u))&&Bd(e,n),h=a.createElement("script"),De(h),Hn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(u,h))}}function F1(e,n){Ba.M(e,n);var a=Qr;if(a&&e){var r=Pe(a).hoistableScripts,u=jr(e),h=r.get(u);h||(h=a.querySelector(yl(u)),h||(e=P({src:e,async:!0,type:"module"},n),(n=Hi.get(u))&&Bd(e,n),h=a.createElement("script"),De(h),Hn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(u,h))}}function F_(e,n,a,r){var u=(u=de.current)?xl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Jr(a.href),n=Pe(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var h=Pe(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Sl(e)))?h._p||(x.instance=h,x.state.loading=5):(h=Hi.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hi.set(e,h)),H1(u,e,h,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=jr(a),n=Pe(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Jr(e){return'href="'+Li(e)+'"'}function Sl(e){return'link[rel="stylesheet"]['+e+"]"}function H_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function H1(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ee]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[ee]=!0,n.onload=n.onerror=an.bind(null,n),Hn(n,"link",a),De(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function jr(e){return'[src="'+Li(e)+'"]'}function yl(e){return"script[async]"+e}function G_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Li(a.href)+'"]');if(r)return n.instance=r,De(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),De(r),Hn(r,"style",u),pu(r,a.precedence,e),n.instance=r;case"stylesheet":u=Jr(a.href);var h=e.querySelector(Sl(u));if(h)return n.state.loading|=4,n.instance=h,De(h),h;r=H_(a),(u=Hi.get(u))&&Id(r,u),h=(e.ownerDocument||e).createElement("link"),De(h);var x=h;return x._p=new Promise(function(N,G){x.onload=N,x.onerror=G}),Hn(h,"link",r),n.state.loading|=4,pu(h,a.precedence,e),n.instance=h;case"script":return h=jr(a.src),(u=e.querySelector(yl(h)))?(n.instance=u,De(u),u):(r=a,(u=Hi.get(h))&&(r=P({},a),Bd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),De(u),Hn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,pu(r,a.precedence,e));return n.instance}function pu(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,h=u,x=0;x<r.length;x++){var N=r[x];if(N.dataset.precedence===n)h=N;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mu=null;function V_(e,n,a){if(mu===null){var r=new Map,u=mu=new Map;u.set(a,r)}else u=mu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ht]||h[C]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var N=r.get(x);N?N.push(h):r.set(x,[h])}}return r}function Fd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function G1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function W_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function X_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Y_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=X_(n),e.suspenseyImages.push(n)),e=W1.bind(e),n.decode().then(e,e))}function V1(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Jr(r.href),h=n.querySelector(Sl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,De(h);return}h=n.ownerDocument||n,r=H_(r),(u=Hi.get(u))&&Id(r,u),h=h.createElement("link"),De(h);var x=h;x._p=new Promise(function(N,G){x.onload=N,x.onerror=G}),Hn(h,"link",r),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var gu=0;function k1(e,n){return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&gu===0&&(gu=62500*o1());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>gu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function q_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)_u(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Ml(){this.count--,q_(this)}function W1(){this.imgCount--,q_(this)}var vu=null;function _u(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vu=new Map,n.forEach(X1,e),vu=null,Ml.call(e))}function X1(e,n){if(!(n.state.loading&4)){var a=vu.get(e);if(a)var r=a.get(null);else{a=new Map,vu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||r,h===r&&a.set(null,u),a.set(x,u),this.count++,r=Ml.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var $r={$$typeof:V,Provider:null,Consumer:null,_currentValue:Bt,_currentValue2:Bt,_threadCount:0};function Y1(e,n,a,r,u,h,x,N,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gr(0),this.hiddenUpdates=gr(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.transitionTypes=null,this.incompleteTransitions=new Map}function Z_(e,n,a,r,u,h,x,N,G,at,gt,bt){return e=new Y1(e,n,a,x,G,at,gt,bt,N),n=1,h===!0&&(n|=24),h=li(3,null,null,n),e.current=h,h.stateNode=e,n=th(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:r,isDehydrated:a,cache:n},ah(h),e}function K_(e){return e?(e=Tr,e):Tr}function Q_(e,n,a,r,u,h){u=K_(u),r.context===null?r.context=u:r.pendingContext=u,r=as(n),r.payload={element:a},h=h===void 0?null:h,h!==null&&(r.callback=h),a=ss(e,r,n),a!==null&&(hi(a,e,n),$o(a,e,n))}function J_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hd(e,n){J_(e,n),(e=e.alternate)&&J_(e,n)}function j_(e){if(e.tag===13||e.tag===31){var n=Is(e,67108864);n!==null&&hi(n,e,67108864),Hd(e,67108864)}}function $_(e){if(e.tag===13||e.tag===31){var n=Ei();n=zo(n);var a=Is(e,n);a!==null&&hi(a,e,n),Hd(e,n)}}var to=!0;function q1(e,n,a,r){var u=K.T;K.T=null;var h=mt.p;try{mt.p=2,Gd(e,n,a,r)}finally{mt.p=h,K.T=u}}function Z1(e,n,a,r){var u=K.T;K.T=null;var h=mt.p;try{mt.p=8,Gd(e,n,a,r)}finally{mt.p=h,K.T=u}}function Gd(e,n,a,r){if(to){var u=Vd(r);if(u===null)Md(e,n,r,xu,a),ex(e,r);else if(Q1(u,e,n,a,r))r.stopPropagation();else if(ex(e,r),n&4&&-1<K1.indexOf(e)){for(;u!==null;){var h=Te(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Ea(h.pendingLanes);if(x!==0){var N=h;for(N.pendingLanes|=2,N.entangledLanes|=2;x;){var G=1<<31-Ee(x);N.entanglements[1]|=G,x&=~G}_a(h),(Ze&6)===0&&(au=Jt()+500,ml(0))}}break;case 31:case 13:N=Is(h,2),N!==null&&hi(N,h,2),ou(),Hd(h,2)}if(h=Vd(r),h===null&&Md(e,n,r,xu,a),h===u)break;u=h}u!==null&&r.stopPropagation()}else Md(e,n,r,null,a)}}function Vd(e){return e=Af(e),kd(e)}var xu=null;function kd(e){if(xu=null,e=xe(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xu=e,null}function tx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pe()){case be:return 2;case j:return 8;case zt:case Et:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var Wd=!1,vs=null,_s=null,xs=null,bl=new Map,El=new Map,Ss=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ex(e,n){switch(e){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":bl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(n.pointerId)}}function Tl(e,n,a,r,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Te(n),n!==null&&j_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Q1(e,n,a,r,u){switch(n){case"focusin":return vs=Tl(vs,e,n,a,r,u),!0;case"dragenter":return _s=Tl(_s,e,n,a,r,u),!0;case"mouseover":return xs=Tl(xs,e,n,a,r,u),!0;case"pointerover":var h=u.pointerId;return bl.set(h,Tl(bl.get(h)||null,e,n,a,r,u)),!0;case"gotpointercapture":return h=u.pointerId,El.set(h,Tl(El.get(h)||null,e,n,a,r,u)),!0}return!1}function nx(e){var n=xe(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,sc(e.priority,function(){$_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,sc(e.priority,function(){$_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Su(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);wf=r,a.target.dispatchEvent(r),wf=null}else return n=Te(a),n!==null&&j_(n),e.blockedOn=a,!1;n.shift()}return!0}function ix(e,n,a){Su(e)&&a.delete(n)}function J1(){Wd=!1,vs!==null&&Su(vs)&&(vs=null),_s!==null&&Su(_s)&&(_s=null),xs!==null&&Su(xs)&&(xs=null),bl.forEach(ix),El.forEach(ix)}function yu(e,n){e.blockedOn===n&&(e.blockedOn=null,Wd||(Wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,J1)))}var Mu=null;function ax(e){Mu!==e&&(Mu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Mu===e&&(Mu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(kd(r||a)===null)continue;break}var h=Te(a);h!==null&&(e.splice(n,3),n-=3,Th(h,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function eo(e){function n(G){return yu(G,e)}vs!==null&&yu(vs,e),_s!==null&&yu(_s,e),xs!==null&&yu(xs,e),bl.forEach(n),El.forEach(n);for(var a=0;a<Ss.length;a++){var r=Ss[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ss.length&&(a=Ss[0],a.blockedOn===null);)nx(a),a.blockedOn===null&&Ss.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],h=a[r+1],x=u[Z]||null;if(typeof h=="function")x||ax(a);else if(x){var N=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Z]||null)N=x.formAction;else if(kd(u)!==null)continue}else N=x.action;typeof N=="function"?a[r+1]=N:(a.splice(r,3),r-=3),ax(a)}}}function sx(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Xd(e){this._internalRoot=e}bu.prototype.render=Xd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Ei();Q_(a,r,e,n,null,null)},bu.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Q_(e.current,2,null,e,null,null),ou(),n[_t]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var n=ac();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ss.length&&n!==0&&n<Ss[a].priority;a++);Ss.splice(a,0,e),a===0&&nx(e)}};var rx=t.version;if(rx!=="19.3.0")throw Error(s(527,rx,"19.3.0"));mt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var j1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{oe=Eu.inject(j1),Kt=Eu}catch{}}return Al.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Kg,h=Qg,x=Jg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Z_(e,1,!1,null,null,a,r,null,u,h,x,sx),e[_t]=n.current,yd(e),new Xd(n)},Al.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",h=Kg,x=Qg,N=Jg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Z_(e,1,!0,n,a??null,r,u,G,h,x,N,sx),n.context=K_(null),a=n.current,r=Ei(),r=zo(r),u=as(r),u.callback=null,ss(a,u,r),a=r,n.current.lanes=a,ra(n,a),_a(n),e[_t]=n.current,yd(e),new bu(n)},Al.version="19.3.0",Al}var gx;function lb(){if(gx)return Zd.exports;gx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zd.exports=ob(),Zd.exports}var cb=lb();const Cm="186",ub=0,vx=1,fb=2,Gl=1,hb=2,Il=3,cr=0,oi=1,si=2,Wa=0,Vl=1,ql=2,_x=3,xx=4,db=5,vo=100,pb=101,mb=102,gb=103,vb=104,_b=200,xb=201,Sb=202,yb=203,US=204,PS=205,Mb=206,bb=207,Eb=208,Tb=209,wb=210,Ab=211,Rb=212,Cb=213,Db=214,Op=0,zp=1,Ip=2,Zl=3,Bp=4,Fp=5,Hp=6,Gp=7,OS=0,Nb=1,Lb=2,na=0,zS=1,IS=2,BS=3,FS=4,HS=5,GS=6,VS=7,Sx="attached",Ub="detached",kS=300,ur=301,Ao=302,jd=303,$d=304,gf=306,Kl=1e3,Ci=1001,Vp=1002,kn=1003,Pb=1004,Tu=1005,vn=1006,tp=1007,or=1008,Kn=1009,WS=1010,XS=1011,Ql=1012,Dm=1013,ia=1014,ki=1015,aa=1016,Nm=1017,Lm=1018,Jl=1020,YS=35902,qS=35899,ZS=1021,KS=1022,ri=1023,Ya=1026,lr=1027,Um=1028,Pm=1029,fr=1030,Om=1031,zm=1033,$u=33776,tf=33777,ef=33778,nf=33779,kp=35840,Wp=35841,Xp=35842,Yp=35843,qp=36196,Zp=37492,Kp=37496,Qp=37488,Jp=37489,sf=37490,jp=37491,$p=37808,tm=37809,em=37810,nm=37811,im=37812,am=37813,sm=37814,rm=37815,om=37816,lm=37817,cm=37818,um=37819,fm=37820,hm=37821,dm=36492,pm=36494,mm=36495,gm=36283,vm=36284,rf=36285,_m=36286,Ob=3200,xm=0,zb=1,Rs="",ai="srgb",of="srgb-linear",lf="linear",nn="srgb",ep=7680,Ib=519,Bb=512,Fb=513,Hb=514,Im=515,Gb=516,Vb=517,Bm=518,kb=519,Wb=35044,yx="300 es",Ma=2e3,jl=2001;function Xb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function cf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Yb(){const o=cf("canvas");return o.style.display="block",o}const Mx={};function bx(...o){const t="THREE."+o.shift();console.log(t,...o)}function QS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ge(...o){o=QS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ye(...o){o=QS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Mo(...o){const t=o.join(" ");t in Mx||(Mx[t]=!0,ge(...o))}function qb(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Zb={[Op]:zp,[Ip]:Hp,[Bp]:Gp,[Zl]:Fp,[zp]:Op,[Hp]:Ip,[Gp]:Bp,[Fp]:Zl};class hr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ex=1234567;const kl=Math.PI/180,$l=180/Math.PI;function dr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Xn[o&255]+Xn[o>>8&255]+Xn[o>>16&255]+Xn[o>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[i&63|128]+Xn[i>>8&255]+"-"+Xn[i>>16&255]+Xn[i>>24&255]+Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]).toLowerCase()}function Ue(o,t,i){return Math.max(t,Math.min(i,o))}function Fm(o,t){return(o%t+t)%t}function Kb(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function Qb(o,t,i){return o!==t?(i-o)/(t-o):0}function Wl(o,t,i){return(1-i)*o+i*t}function Jb(o,t,i,s){return Wl(o,t,1-Math.exp(-i*s))}function jb(o,t=1){return t-Math.abs(Fm(o,t*2)-t)}function $b(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function tE(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function eE(o,t){return o+Math.floor(Math.random()*(t-o+1))}function nE(o,t){return o+Math.random()*(t-o)}function iE(o){return o*(.5-Math.random())}function aE(o){o!==void 0&&(Ex=o);let t=Ex+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sE(o){return o*kl}function rE(o){return o*$l}function oE(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function lE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function cE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function uE(o,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),p=f(i/2),m=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":o.set(d*_,p*v,p*g,d*m);break;case"YZY":o.set(p*g,d*_,p*v,d*m);break;case"ZXZ":o.set(p*v,p*g,d*_,d*m);break;case"XZX":o.set(d*_,p*E,p*S,d*m);break;case"YXY":o.set(p*S,d*_,p*E,d*m);break;case"ZYZ":o.set(p*E,p*S,d*_,d*m);break;default:ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function _o(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ue={DEG2RAD:kl,RAD2DEG:$l,generateUUID:dr,clamp:Ue,euclideanModulo:Fm,mapLinear:Kb,inverseLerp:Qb,lerp:Wl,damp:Jb,pingpong:jb,smoothstep:$b,smootherstep:tE,randInt:eE,randFloat:nE,randFloatSpread:iE,seededRandom:aE,degToRad:sE,radToDeg:rE,isPowerOfTwo:oE,ceilPowerOfTwo:lE,floorPowerOfTwo:cE,setQuaternionFromProperEuler:uE,normalize:ni,denormalize:_o},$m=class $m{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$m.prototype.isVector2=!0;let ce=$m;class Do{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(v!==A||p!==g||m!==S||_!==E){let M=p*g+m*S+_*E+v*A;M<0&&(g=-g,S=-S,E=-E,A=-A,M=-M);let y=1-d;if(M<.9995){const D=Math.acos(M),O=Math.sin(D);y=Math.sin(y*D)/O,d=Math.sin(d*D)/O,p=p*y+g*d,m=m*y+S*d,_=_*y+E*d,v=v*y+A*d}else{p=p*y+g*d,m=m*y+S*d,_=_*y+E*d,v=v*y+A*d;const D=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=D,m*=D,_*=D,v*=D}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+_*v+p*S-m*g,t[i+1]=p*E+_*g+m*v-d*S,t[i+2]=m*E+_*S+d*g-p*v,t[i+3]=_*E-d*v-p*g-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),v=d(c/2),g=p(s/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=g*_*v+m*S*E,this._y=m*S*v-g*_*E,this._z=m*_*E+g*S*v,this._w=m*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+m*S*E,this._y=m*S*v-g*_*E,this._z=m*_*E-g*S*v,this._w=m*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-m*S*E,this._y=m*S*v+g*_*E,this._z=m*_*E+g*S*v,this._w=m*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-m*S*E,this._y=m*S*v+g*_*E,this._z=m*_*E-g*S*v,this._w=m*_*v+g*S*E;break;case"YZX":this._x=g*_*v+m*S*E,this._y=m*S*v+g*_*E,this._z=m*_*E-g*S*v,this._w=m*_*v-g*S*E;break;case"XZY":this._x=g*_*v-m*S*E,this._y=m*S*v-g*_*E,this._z=m*_*E+g*S*v,this._w=m*_*v+g*S*E;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+f*d+l*m-c*p,this._y=l*_+f*p+c*d-s*m,this._z=c*_+f*m+s*p-l*d,this._w=f*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const t0=class t0{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Tx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Tx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+p*m+f*v-d*_,this.y=s+p*_+d*m-c*v,this.z=l+p*v+c*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};t0.prototype.isVector3=!0;let F=t0;const np=new F,Tx=new Do,e0=class e0{constructor(t,i,s,l,c,f,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],_=s[4],v=s[7],g=s[2],S=s[5],E=s[8],A=l[0],M=l[3],y=l[6],D=l[1],O=l[4],T=l[7],R=l[2],L=l[5],P=l[8];return c[0]=f*A+d*D+p*R,c[3]=f*M+d*O+p*L,c[6]=f*y+d*T+p*P,c[1]=m*A+_*D+v*R,c[4]=m*M+_*O+v*L,c[7]=m*y+_*T+v*P,c[2]=g*A+S*D+E*R,c[5]=g*M+S*O+E*L,c[8]=g*y+S*T+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*f*_-i*d*m-s*c*_+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=_*f-d*m,g=d*p-_*c,S=m*c-f*p,E=i*v+s*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*m-_*s)*A,t[2]=(d*s-l*f)*A,t[3]=g*A,t[4]=(_*i-l*p)*A,t[5]=(l*c-d*i)*A,t[6]=S*A,t[7]=(s*p-m*i)*A,t[8]=(f*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return Mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ip.makeScale(t,i)),this}rotate(t){return Mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ip.makeRotation(-t)),this}translate(t,i){return Mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ip.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};e0.prototype.isMatrix3=!0;let we=e0;const ip=new we,wx=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ax=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const o={enabled:!0,workingColorSpace:of,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===nn&&(l.r=Xa(l.r),l.g=Xa(l.g),l.b=Xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===nn&&(l.r=bo(l.r),l.g=bo(l.g),l.b=bo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Rs?lf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[of]:{primaries:t,whitePoint:s,transfer:lf,toXYZ:wx,fromXYZ:Ax,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:s,transfer:nn,toXYZ:wx,fromXYZ:Ax,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const We=fE();function Xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let no;class hE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{no===void 0&&(no=cf("canvas")),no.width=t.width,no.height=t.height;const l=no.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=no}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Xa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Xa(i[s]/255)*255):i[s]=Xa(i[s]);return{data:i,width:t.width,height:t.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dE=0;class Hm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=dr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(ap(l[f].image)):c.push(ap(l[f]))}else c=ap(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ap(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ge("Texture: Unable to serialize Texture."),{})}let pE=0;const sp=new F;class Qn extends hr{constructor(t=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=Ci,l=Ci,c=vn,f=or,d=ri,p=Kn,m=Qn.DEFAULT_ANISOTROPY,_=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=dr(),this.name="",this.source=new Hm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sp).x}get height(){return this.source.getSize(sp).y}get depth(){return this.source.getSize(sp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kl:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Vp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kl:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Vp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=kS;Qn.DEFAULT_ANISOTROPY=1;const n0=class n0{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],v=p[8],g=p[1],S=p[5],E=p[9],A=p[2],M=p[6],y=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+A)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,T=(S+1)/2,R=(y+1)/2,L=(_+g)/4,P=(v+A)/4,b=(E+M)/4;return O>T&&O>R?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=L/s,c=P/s):T>R?T<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(T),s=L/l,c=b/l):R<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(R),s=P/c,l=b/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-E)*(M-E)+(v-A)*(v-A)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(v-A)/D,this.z=(g-_)/D,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this.w=Ue(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this.w=Ue(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};n0.prototype.isVector4=!0;let Je=n0;class mE extends hr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Je(0,0,t,i),this.scissorTest=!1,this.viewport=new Je(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Qn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends mE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class JS extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const mf=class mf{constructor(t,i,s,l,c,f,d,p,m,_,v,g,S,E,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,_,v,g,S,E,A,M)}set(t,i,s,l,c,f,d,p,m,_,v,g,S,E,A,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=p,y[2]=m,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/io.setFromMatrixColumn(t,0).length(),c=1/io.setFromMatrixColumn(t,1).length(),f=1/io.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,E=d*_,A=d*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=S+E*m,i[5]=g-A*m,i[9]=-d*p,i[2]=A-g*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const g=p*_,S=p*v,E=m*_,A=m*v;i[0]=g+A*d,i[4]=E*d-S,i[8]=f*m,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=S*d-E,i[6]=A+g*d,i[10]=f*p}else if(t.order==="ZXY"){const g=p*_,S=p*v,E=m*_,A=m*v;i[0]=g-A*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*_,i[9]=A-g*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const g=f*_,S=f*v,E=d*_,A=d*v;i[0]=p*_,i[4]=E*m-S,i[8]=g*m+A,i[1]=p*v,i[5]=A*m+g,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const g=f*p,S=f*m,E=d*p,A=d*m;i[0]=p*_,i[4]=A-g*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*v+E,i[10]=g-A*v}else if(t.order==="XZY"){const g=f*p,S=f*m,E=d*p,A=d*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=g*v+A,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*_,i[10]=A*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vE,t,_E)}lookAt(t,i,s){const l=this.elements;return wi.subVectors(t,i),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Ms.crossVectors(s,wi),Ms.lengthSq()===0&&(Math.abs(s.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Ms.crossVectors(s,wi)),Ms.normalize(),wu.crossVectors(wi,Ms),l[0]=Ms.x,l[4]=wu.x,l[8]=wi.x,l[1]=Ms.y,l[5]=wu.y,l[9]=wi.y,l[2]=Ms.z,l[6]=wu.z,l[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],_=s[1],v=s[5],g=s[9],S=s[13],E=s[2],A=s[6],M=s[10],y=s[14],D=s[3],O=s[7],T=s[11],R=s[15],L=l[0],P=l[4],b=l[8],U=l[12],B=l[1],I=l[5],W=l[9],J=l[13],X=l[2],V=l[6],H=l[10],q=l[14],rt=l[3],st=l[7],ut=l[11],ct=l[15];return c[0]=f*L+d*B+p*X+m*rt,c[4]=f*P+d*I+p*V+m*st,c[8]=f*b+d*W+p*H+m*ut,c[12]=f*U+d*J+p*q+m*ct,c[1]=_*L+v*B+g*X+S*rt,c[5]=_*P+v*I+g*V+S*st,c[9]=_*b+v*W+g*H+S*ut,c[13]=_*U+v*J+g*q+S*ct,c[2]=E*L+A*B+M*X+y*rt,c[6]=E*P+A*I+M*V+y*st,c[10]=E*b+A*W+M*H+y*ut,c[14]=E*U+A*J+M*q+y*ct,c[3]=D*L+O*B+T*X+R*rt,c[7]=D*P+O*I+T*V+R*st,c[11]=D*b+O*W+T*H+R*ut,c[15]=D*U+O*J+T*q+R*ct,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],_=t[2],v=t[6],g=t[10],S=t[14],E=t[3],A=t[7],M=t[11],y=t[15],D=p*S-m*g,O=d*S-m*v,T=d*g-p*v,R=f*S-m*_,L=f*g-p*_,P=f*v-d*_;return i*(A*D-M*O+y*T)-s*(E*D-M*R+y*L)+l*(E*O-A*R+y*P)-c*(E*T-A*L+M*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],_=t[10];return i*(f*_-d*m)-s*(c*_-d*p)+l*(c*m-f*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=t[9],g=t[10],S=t[11],E=t[12],A=t[13],M=t[14],y=t[15],D=i*d-s*f,O=i*p-l*f,T=i*m-c*f,R=s*p-l*d,L=s*m-c*d,P=l*m-c*p,b=_*A-v*E,U=_*M-g*E,B=_*y-S*E,I=v*M-g*A,W=v*y-S*A,J=g*y-S*M,X=D*J-O*W+T*I+R*B-L*U+P*b;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/X;return t[0]=(d*J-p*W+m*I)*V,t[1]=(l*W-s*J-c*I)*V,t[2]=(A*P-M*L+y*R)*V,t[3]=(g*L-v*P-S*R)*V,t[4]=(p*B-f*J-m*U)*V,t[5]=(i*J-l*B+c*U)*V,t[6]=(M*T-E*P-y*O)*V,t[7]=(_*P-g*T+S*O)*V,t[8]=(f*W-d*B+m*b)*V,t[9]=(s*B-i*W-c*b)*V,t[10]=(E*L-A*T+y*D)*V,t[11]=(v*T-_*L-S*D)*V,t[12]=(d*U-f*I-p*b)*V,t[13]=(i*I-s*U+l*b)*V,t[14]=(A*O-E*R-M*D)*V,t[15]=(_*R-v*O+g*D)*V,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,_=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*f,0,m*p-l*d,_*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,_=f+f,v=d+d,g=c*m,S=c*_,E=c*v,A=f*_,M=f*v,y=d*v,D=p*m,O=p*_,T=p*v,R=s.x,L=s.y,P=s.z;return l[0]=(1-(A+y))*R,l[1]=(S+T)*R,l[2]=(E-O)*R,l[3]=0,l[4]=(S-T)*L,l[5]=(1-(g+y))*L,l[6]=(M+D)*L,l[7]=0,l[8]=(E+O)*P,l[9]=(M-D)*P,l[10]=(1-(g+A))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=io.set(l[0],l[1],l[2]).length();const d=io.set(l[4],l[5],l[6]).length(),p=io.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ji.copy(this);const m=1/f,_=1/d,v=1/p;return Ji.elements[0]*=m,Ji.elements[1]*=m,Ji.elements[2]*=m,Ji.elements[4]*=_,Ji.elements[5]*=_,Ji.elements[6]*=_,Ji.elements[8]*=v,Ji.elements[9]*=v,Ji.elements[10]*=v,i.setFromRotationMatrix(Ji),s.x=f,s.y=d,s.z=p,this}makePerspective(t,i,s,l,c,f,d=Ma,p=!1){const m=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(p)E=c/(f-c),A=f*c/(f-c);else if(d===Ma)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===jl)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Ma,p=!1){const m=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,A;if(p)E=1/(f-c),A=f/(f-c);else if(d===Ma)E=-2/(f-c),A=-(f+c)/(f-c);else if(d===jl)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};mf.prototype.isMatrix4=!0;let Be=mf;const io=new F,Ji=new Be,vE=new F(0,0,0),_E=new F(1,1,1),Ms=new F,wu=new F,wi=new F,Rx=new Be,Cx=new Do;class Cs{constructor(t=0,i=0,s=0,l=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ue(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Rx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cx.setFromEuler(this),this.setFromQuaternion(Cx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class jS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xE=0;const Dx=new F,ao=new Do,Fa=new Be,Au=new F,Rl=new F,SE=new F,yE=new Do,Nx=new F(1,0,0),Lx=new F(0,1,0),Ux=new F(0,0,1),Px={type:"added"},ME={type:"removed"},so={type:"childadded",child:null},rp={type:"childremoved",child:null};class xn extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new F,i=new Cs,s=new Do,l=new F(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Be},normalMatrix:{value:new we}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Nx,t)}rotateY(t){return this.rotateOnAxis(Lx,t)}rotateZ(t){return this.rotateOnAxis(Ux,t)}translateOnAxis(t,i){return Dx.copy(t).applyQuaternion(this.quaternion),this.position.add(Dx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Nx,t)}translateY(t){return this.translateOnAxis(Lx,t)}translateZ(t){return this.translateOnAxis(Ux,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Au.copy(t):Au.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fa.lookAt(Rl,Au,this.up):Fa.lookAt(Au,Rl,this.up),this.quaternion.setFromRotationMatrix(Fa),l&&(Fa.extractRotation(l.matrixWorld),ao.setFromRotationMatrix(Fa),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Px),so.child=t,this.dispatchEvent(so),so.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ME),rp.child=t,this.dispatchEvent(rp),rp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Px),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,t,SE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,yE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xn.DEFAULT_UP=new F(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zn extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,s),y=this._getHandJoint(m,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&g>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Zn;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const $S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function lp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ve{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=We.workingColorSpace){return this.r=t,this.g=i,this.b=s,We.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=We.workingColorSpace){if(t=Fm(t,1),i=Ue(i,0,1),s=Ue(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=lp(f,c,t+1/3),this.g=lp(f,c,t),this.b=lp(f,c,t-1/3)}return We.colorSpaceToWorking(this,l),this}setStyle(t,i=ai){function s(c){c!==void 0&&parseFloat(c)<1&&ge("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ge("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ai){const s=$S[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return We.workingToColorSpace(Yn.copy(this),t),Math.round(Ue(Yn.r*255,0,255))*65536+Math.round(Ue(Yn.g*255,0,255))*256+Math.round(Ue(Yn.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=We.workingColorSpace){We.workingToColorSpace(Yn.copy(this),i);const s=Yn.r,l=Yn.g,c=Yn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=We.workingColorSpace){return We.workingToColorSpace(Yn.copy(this),i),t.r=Yn.r,t.g=Yn.g,t.b=Yn.b,t}getStyle(t=ai){We.workingToColorSpace(Yn.copy(this),t);const i=Yn.r,s=Yn.g,l=Yn.b;return t!==ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(bs),this.setHSL(bs.h+t,bs.s+i,bs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(bs),t.getHSL(Ru);const s=Wl(bs.h,Ru.h,i),l=Wl(bs.s,Ru.s,i),c=Wl(bs.l,Ru.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new ve;ve.NAMES=$S;class uf{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(t),this.density=i}clone(){return new uf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tc extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ji=new F,Ha=new F,cp=new F,Ga=new F,ro=new F,oo=new F,Ox=new F,up=new F,fp=new F,hp=new F,dp=new Je,pp=new Je,mp=new Je;class ta{constructor(t=new F,i=new F,s=new F){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ji.subVectors(t,i),l.cross(ji);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ji.subVectors(l,i),Ha.subVectors(s,i),cp.subVectors(t,i);const f=ji.dot(ji),d=ji.dot(Ha),p=ji.dot(cp),m=Ha.dot(Ha),_=Ha.dot(cp),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(m*p-d*_)*g,E=(f*_-d*p)*g;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,Ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ga.x),p.addScaledVector(f,Ga.y),p.addScaledVector(d,Ga.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(t,i),pp.fromBufferAttribute(t,s),mp.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(dp,c.x),f.addScaledVector(pp,c.y),f.addScaledVector(mp,c.z),f}static isFrontFacing(t,i,s,l){return ji.subVectors(s,i),Ha.subVectors(t,i),ji.cross(Ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),ji.cross(Ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ta.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ta.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ta.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ta.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ta.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;ro.subVectors(l,s),oo.subVectors(c,s),up.subVectors(t,s);const p=ro.dot(up),m=oo.dot(up);if(p<=0&&m<=0)return i.copy(s);fp.subVectors(t,l);const _=ro.dot(fp),v=oo.dot(fp);if(_>=0&&v<=_)return i.copy(l);const g=p*v-_*m;if(g<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(s).addScaledVector(ro,f);hp.subVectors(t,c);const S=ro.dot(hp),E=oo.dot(hp);if(E>=0&&S<=E)return i.copy(c);const A=S*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(oo,d);const M=_*E-S*v;if(M<=0&&v-_>=0&&S-E>=0)return Ox.subVectors(c,l),d=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(Ox,d);const y=1/(M+A+g);return f=A*y,d=g*y,i.copy(s).addScaledVector(ro,f).addScaledVector(oo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ds{constructor(t=new F(1/0,1/0,1/0),i=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint($i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint($i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=$i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,$i):$i.fromBufferAttribute(c,f),$i.applyMatrix4(t.matrixWorld),this.expandByPoint($i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cu.copy(s.boundingBox)),Cu.applyMatrix4(t.matrixWorld),this.union(Cu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$i),$i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cl),Du.subVectors(this.max,Cl),lo.subVectors(t.a,Cl),co.subVectors(t.b,Cl),uo.subVectors(t.c,Cl),Es.subVectors(co,lo),Ts.subVectors(uo,co),er.subVectors(lo,uo);let i=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-er.z,er.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,er.z,0,-er.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-er.y,er.x,0];return!gp(i,lo,co,uo,Du)||(i=[1,0,0,0,1,0,0,0,1],!gp(i,lo,co,uo,Du))?!1:(Nu.crossVectors(Es,Ts),i=[Nu.x,Nu.y,Nu.z],gp(i,lo,co,uo,Du))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Va=[new F,new F,new F,new F,new F,new F,new F,new F],$i=new F,Cu=new Ds,lo=new F,co=new F,uo=new F,Es=new F,Ts=new F,er=new F,Cl=new F,Du=new F,Nu=new F,nr=new F;function gp(o,t,i,s,l){for(let c=0,f=o.length-3;c<=f;c+=3){nr.fromArray(o,c);const d=l.x*Math.abs(nr.x)+l.y*Math.abs(nr.y)+l.z*Math.abs(nr.z),p=t.dot(nr),m=i.dot(nr),_=s.dot(nr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const En=new F,Lu=new ce;let EE=0;class Wi extends hr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Wb,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lu.fromBufferAttribute(this,i),Lu.applyMatrix3(t),this.setXY(i,Lu.x,Lu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(t),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.transformDirection(t),this.setXYZ(i,En.x,En.y,En.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=_o(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ni(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array),l=ni(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array),l=ni(l,this.array),c=ni(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Gm extends Wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ty extends Wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class je extends Wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const TE=new Ds,Dl=new F,vp=new F;class Ns{constructor(t=new F,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):TE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dl.subVectors(t,this.center);const i=Dl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Dl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dl.copy(t.center).add(vp)),this.expandByPoint(Dl.copy(t.center).sub(vp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wE=0;const Gi=new Be,_p=new xn,fo=new F,Ai=new Ds,Nl=new Ds,Un=new F;class On extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xb(t)?ty:Gm)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new we().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gi.makeRotationFromQuaternion(t),this.applyMatrix4(Gi),this}rotateX(t){return Gi.makeRotationX(t),this.applyMatrix4(Gi),this}rotateY(t){return Gi.makeRotationY(t),this.applyMatrix4(Gi),this}rotateZ(t){return Gi.makeRotationZ(t),this.applyMatrix4(Gi),this}translate(t,i,s){return Gi.makeTranslation(t,i,s),this.applyMatrix4(Gi),this}scale(t,i,s){return Gi.makeScale(t,i,s),this.applyMatrix4(Gi),this}lookAt(t){return _p.lookAt(t),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new je(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const s=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Nl.setFromBufferAttribute(d),this.morphTargetsRelative?(Un.addVectors(Ai.min,Nl.min),Ai.expandByPoint(Un),Un.addVectors(Ai.max,Nl.max),Ai.expandByPoint(Un)):(Ai.expandByPoint(Nl.min),Ai.expandByPoint(Nl.max))}Ai.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Un.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Un));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Un.fromBufferAttribute(d,m),p&&(fo.fromBufferAttribute(t,m),Un.add(fo)),l=Math.max(l,s.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Wi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const d=[],p=[];for(let b=0;b<s.count;b++)d[b]=new F,p[b]=new F;const m=new F,_=new F,v=new F,g=new ce,S=new ce,E=new ce,A=new F,M=new F;function y(b,U,B){m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,B),g.fromBufferAttribute(c,b),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,B),_.sub(m),v.sub(m),S.sub(g),E.sub(g);const I=1/(S.x*E.y-E.x*S.y);isFinite(I)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(I),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(I),d[b].add(A),d[U].add(A),d[B].add(A),p[b].add(M),p[U].add(M),p[B].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let b=0,U=D.length;b<U;++b){const B=D[b],I=B.start,W=B.count;for(let J=I,X=I+W;J<X;J+=3)y(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const O=new F,T=new F,R=new F,L=new F;function P(b){R.fromBufferAttribute(l,b),L.copy(R);const U=d[b];O.copy(U),O.sub(R.multiplyScalar(R.dot(U))).normalize(),T.crossVectors(L,U);const I=T.dot(p[b])<0?-1:1;f.setXYZW(b,O.x,O.y,O.z,I)}for(let b=0,U=D.length;b<U;++b){const B=D[b],I=B.start,W=B.count;for(let J=I,X=I+W;J<X;J+=3)P(t.getX(J+0)),P(t.getX(J+1)),P(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new F,c=new F,f=new F,d=new F,p=new F,m=new F,_=new F,v=new F;if(t)for(let g=0,S=t.count;g<S;g+=3){const E=t.getX(g+0),A=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,M),d.add(_),p.add(_),m.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Un.fromBufferAttribute(t,i),Un.normalize(),t.setXYZ(i,Un.x,Un.y,Un.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,v=d.normalized,g=new m.constructor(p.length*_);let S=0,E=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*_;for(let y=0;y<_;y++)g[E++]=m[S++]}return new Wi(g,_,v)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new On,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const g=m[_],S=t(g,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,g=m.length;v<g;v++){const S=m[v];_.push(S.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],v=c[m];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xp=new F,AE=new F,RE=new we;class As{constructor(t=new F(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=xp.subVectors(s,i).cross(AE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(xp),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||RE.getNormalMatrix(t),l=this.coplanarPoint(xp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let CE=0;class pr extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Vl,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=US,this.blendDst=PS,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ib,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ep,this.stencilZFail=ep,this.stencilZPass=ep,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ge(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new As().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ce().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ka=new F,Sp=new F,Uu=new F,Pu=new F;class Vm{constructor(t=new F,i=new F(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ka)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ka.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ka.copy(this.origin).addScaledVector(this.direction,i),ka.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Sp.copy(t).add(i).multiplyScalar(.5),Uu.copy(i).sub(t).normalize(),Pu.copy(this.origin).sub(Sp);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Uu),d=Pu.dot(this.direction),p=-Pu.dot(Uu),m=Pu.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*p-d,g=f*d-p,E=c*_,v>=0)if(g>=-E)if(g<=E){const A=1/_;v*=A,g*=A,S=v*(v+f*g+2*d)+g*(f*v+g+2*p)+m}else g=c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*p)+m;else g=-c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*p)+m;else g<=-E?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+g*(g+2*p)+m):g<=E?(v=0,g=Math.min(Math.max(-c,-p),c),S=g*(g+2*p)+m):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+g*(g+2*p)+m);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Sp).addScaledVector(Uu,g),S}intersectSphere(t,i){if(t.radius<0)return null;ka.subVectors(t.center,this.origin);const s=ka.dot(this.direction),l=ka.dot(ka)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return m>=0?(s=(t.min.x-g.x)*m,l=(t.max.x-g.x)*m):(s=(t.max.x-g.x)*m,l=(t.min.x-g.x)*m),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ka)!==null}intersectTriangle(t,i,s,l,c){const f=this.origin,d=this.direction,p=d.x,m=d.y,_=d.z,v=t.x-f.x,g=t.y-f.y,S=t.z-f.z,E=i.x-f.x,A=i.y-f.y,M=i.z-f.z,y=s.x-f.x,D=s.y-f.y,O=s.z-f.z,T=Math.abs(p),R=Math.abs(m),L=Math.abs(_);let P,b,U,B,I,W,J,X,V,H,q,rt;if(T>=R&&T>=L?(U=p,W=v,V=E,rt=y,p>=0?(P=m,b=_,B=g,I=S,J=A,X=M,H=D,q=O):(P=_,b=m,B=S,I=g,J=M,X=A,H=O,q=D)):R>=L?(U=m,W=g,V=A,rt=D,m>=0?(P=_,b=p,B=S,I=v,J=M,X=E,H=O,q=y):(P=p,b=_,B=v,I=S,J=E,X=M,H=y,q=O)):(U=_,W=S,V=M,rt=O,_>=0?(P=p,b=m,B=v,I=g,J=E,X=A,H=y,q=D):(P=m,b=p,B=g,I=v,J=A,X=E,H=D,q=y)),U===0)return null;const st=P/U,ut=b/U,ct=1/U,kt=B-st*W,Zt=I-ut*W,k=J-st*V,ot=X-ut*V,Dt=H-st*rt,$=q-ut*rt,vt=Dt*ot-$*k,At=kt*$-Zt*Dt,pt=k*Zt-ot*kt;if(l){if(vt<0||At<0||pt<0)return null}else if((vt<0||At<0||pt<0)&&(vt>0||At>0||pt>0))return null;const K=vt+At+pt;if(K===0)return null;const mt=ct*(vt*W+At*V+pt*rt);return(K>0?mt<0:mt>0)?null:this.at(mt/K,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class km extends pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=OS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zx=new Be,ir=new Vm,Ou=new Ns,Ix=new F,zu=new F,Iu=new F,Bu=new F,yp=new F,Fu=new F,Bx=new F,Hu=new F;class ne extends xn{constructor(t=new On,i=new km){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Fu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&(yp.fromBufferAttribute(v,t),f?Fu.addScaledVector(yp,_):Fu.addScaledVector(yp.sub(i),_))}i.add(Fu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ou.copy(s.boundingSphere),Ou.applyMatrix4(c),ir.copy(t.ray).recast(t.near),!(Ou.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ou,Ix)===null||ir.origin.distanceToSquared(Ix)>(t.far-t.near)**2))&&(zx.copy(c).invert(),ir.copy(t.ray).applyMatrix4(zx),!(s.boundingBox!==null&&ir.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ir)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=g.length;E<A;E++){const M=g[E],y=f[M.materialIndex],D=Math.max(M.start,S.start),O=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let T=D,R=O;T<R;T+=3){const L=d.getX(T),P=d.getX(T+1),b=d.getX(T+2);l=Gu(this,y,t,s,m,_,v,L,P,b),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=E,y=A;M<y;M+=3){const D=d.getX(M),O=d.getX(M+1),T=d.getX(M+2);l=Gu(this,f,t,s,m,_,v,D,O,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=g.length;E<A;E++){const M=g[E],y=f[M.materialIndex],D=Math.max(M.start,S.start),O=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let T=D,R=O;T<R;T+=3){const L=T,P=T+1,b=T+2;l=Gu(this,y,t,s,m,_,v,L,P,b),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let M=E,y=A;M<y;M+=3){const D=M,O=M+1,T=M+2;l=Gu(this,f,t,s,m,_,v,D,O,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function DE(o,t,i,s,l,c,f,d){let p;if(t.side===oi?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===cr,d),p===null)return null;Hu.copy(d),Hu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Hu);return m<i.near||m>i.far?null:{distance:m,point:Hu.clone(),object:o}}function Gu(o,t,i,s,l,c,f,d,p,m){o.getVertexPosition(d,zu),o.getVertexPosition(p,Iu),o.getVertexPosition(m,Bu);const _=DE(o,t,i,s,zu,Iu,Bu,Bx);if(_){const v=new F;ta.getBarycoord(Bx,zu,Iu,Bu,v),l&&(_.uv=ta.getInterpolatedAttribute(l,d,p,m,v,new ce)),c&&(_.uv1=ta.getInterpolatedAttribute(c,d,p,m,v,new ce)),f&&(_.normal=ta.getInterpolatedAttribute(f,d,p,m,v,new F),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new F,materialIndex:0};ta.getNormal(zu,Iu,Bu,g.normal),_.face=g,_.barycoord=v}return _}const Ll=new Je,Fx=new Je,Hx=new Je,NE=new Je,Gx=new Be,Vu=new F,Mp=new Ns,Vx=new Be,bp=new Vm;class LE extends ne{constructor(t,i){super(t,i),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sx,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ds),this.boundingBox.makeEmpty();const i=t.getAttribute("position");for(let s=0;s<i.count;s++)this.getVertexPosition(s,Vu),this.boundingBox.expandByPoint(Vu)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ns),this.boundingSphere.makeEmpty();const i=t.getAttribute("position");for(let s=0;s<i.count;s++)this.getVertexPosition(s,Vu),this.boundingSphere.expandByPoint(Vu)}copy(t,i){return super.copy(t,i),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,i){const s=this.material,l=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mp.copy(this.boundingSphere),Mp.applyMatrix4(l),t.ray.intersectsSphere(Mp)!==!1&&(Vx.copy(l).invert(),bp.copy(t.ray).applyMatrix4(Vx),!(this.boundingBox!==null&&bp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,i,bp)))}getVertexPosition(t,i){return super.getVertexPosition(t,i),this.applyBoneTransform(t,i),i}bind(t,i){this.skeleton=t,i===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),i=this.matrixWorld),this.bindMatrix.copy(i),this.bindMatrixInverse.copy(i).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Je,i=this.geometry.attributes.skinWeight;for(let s=0,l=i.count;s<l;s++){t.fromBufferAttribute(i,s);const c=1/t.manhattanLength();c!==1/0?t.multiplyScalar(c):t.set(1,0,0,0),i.setXYZW(s,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Sx?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ub?this.bindMatrixInverse.copy(this.bindMatrix).invert():ge("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,i){const s=this.skeleton,l=this.geometry;Fx.fromBufferAttribute(l.attributes.skinIndex,t),Hx.fromBufferAttribute(l.attributes.skinWeight,t),i.isVector4?(Ll.copy(i),i.set(0,0,0,0)):(Ll.set(...i,1),i.set(0,0,0)),Ll.applyMatrix4(this.bindMatrix);for(let c=0;c<4;c++){const f=Hx.getComponent(c);if(f!==0){const d=Fx.getComponent(c);Gx.multiplyMatrices(s.bones[d].matrixWorld,s.boneInverses[d]),i.addScaledVector(NE.copy(Ll).applyMatrix4(Gx),f)}}return i.isVector4&&(i.w=Ll.w),i.applyMatrix4(this.bindMatrixInverse)}}class An extends xn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vf extends Qn{constructor(t=null,i=1,s=1,l,c,f,d,p,m=kn,_=kn,v,g){super(null,f,d,p,m,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kx=new Be,UE=new Be;class Wm{constructor(t=[],i=[]){this.uuid=dr(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){ge("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,l=this.bones.length;s<l;s++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){const s=new Be;this.bones[t]&&s.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];s&&s.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){const t=this.bones,i=this.boneInverses,s=this.boneMatrices,l=this.boneTexture;for(let c=0,f=t.length;c<f;c++){const d=t[c]?t[c].matrixWorld:UE;kx.multiplyMatrices(d,i[c]),kx.toArray(s,c*16)}l!==null&&(l.needsUpdate=!0)}clone(){return new Wm(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const i=new Float32Array(t*t*4);i.set(this.boneMatrices);const s=new vf(i,t,t,ri,ki);return s.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=s,this}getBoneByName(t){for(let i=0,s=this.bones.length;i<s;i++){const l=this.bones[i];if(l.name===t)return l}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let s=0,l=t.bones.length;s<l;s++){const c=t.bones[s];let f=i[c];f===void 0&&(ge("Skeleton: No bone found with UUID:",c),f=new An),this.bones.push(f),this.boneInverses.push(new Be().fromArray(t.boneInverses[s]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const i=this.bones,s=this.boneInverses;for(let l=0,c=i.length;l<c;l++){const f=i[l];t.bones.push(f.uuid);const d=s[l];t.boneInverses.push(d.toArray())}return t}}class Wx extends Wi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ho=new Be,Xx=new Be,ku=[],Yx=new Ds,PE=new Be,Ul=new ne,Pl=new Ns;class Sm extends ne{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Wx(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,PE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ho),Yx.copy(t.boundingBox).applyMatrix4(ho),this.boundingBox.union(Yx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ho),Pl.copy(t.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(Pl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Ul.geometry=this.geometry,Ul.material=this.material,Ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(s),t.ray.intersectsSphere(Pl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,ho),Xx.multiplyMatrices(s,ho),Ul.matrixWorld=Xx,Ul.raycast(t,ku);for(let f=0,d=ku.length;f<d;f++){const p=ku[f];p.instanceId=c,p.object=this,i.push(p)}ku.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new Wx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new vf(new Float32Array(l*this.count),l,this.count,Um,ki));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;return c[p]=d,c.set(s,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ar=new Ns,OE=new ce(.5,.5),Wu=new F;class Xm{constructor(t=new As,i=new As,s=new As,l=new As,c=new As,f=new As){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ma,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],p=c[2],m=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],A=c[9],M=c[10],y=c[11],D=c[12],O=c[13],T=c[14],R=c[15];if(l[0].setComponents(m-f,S-_,y-E,R-D).normalize(),l[1].setComponents(m+f,S+_,y+E,R+D).normalize(),l[2].setComponents(m+d,S+v,y+A,R+O).normalize(),l[3].setComponents(m-d,S-v,y-A,R-O).normalize(),s)l[4].setComponents(p,g,M,T).normalize(),l[5].setComponents(m-p,S-g,y-M,R-T).normalize();else if(l[4].setComponents(m-p,S-g,y-M,R-T).normalize(),i===Ma)l[5].setComponents(m+p,S+g,y+M,R+T).normalize();else if(i===jl)l[5].setComponents(p,g,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);const i=OE.distanceTo(t.center);return ar.radius=.7071067811865476+i,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Wu.x=l.normal.x>0?t.max.x:t.min.x,Wu.y=l.normal.y>0?t.max.y:t.min.y,Wu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zE extends pr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qx=new Be,ym=new Vm,Xu=new Ns,Yu=new F;class IE extends xn{constructor(t=new On,i=new zE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xu.copy(s.boundingSphere),Xu.applyMatrix4(l),Xu.radius+=c,t.ray.intersectsSphere(Xu)===!1)return;qx.copy(l).invert(),ym.copy(t.ray).applyMatrix4(qx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,v=s.attributes.position;if(m!==null){const g=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let E=g,A=S;E<A;E++){const M=m.getX(E);Yu.fromBufferAttribute(v,M),Zx(Yu,M,p,l,t,i,this)}}else{const g=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=g,A=S;E<A;E++)Yu.fromBufferAttribute(v,E),Zx(Yu,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Zx(o,t,i,s,l,c,f){const d=ym.distanceSqToPoint(o);if(d<i){const p=new F;ym.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class ey extends Qn{constructor(t=[],i=ur,s,l,c,f,d,p,m,_){super(t,i,s,l,c,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ym extends Qn{constructor(t,i,s,l,c,f,d,p,m){super(t,i,s,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ro extends Qn{constructor(t,i,s=ia,l,c,f,d=kn,p=kn,m,_=Ya,v=1){if(_!==Ya&&_!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,p,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class BE extends Ro{constructor(t,i=ia,s=ur,l,c,f=kn,d=kn,p,m=Ya){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ny extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vn extends On{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(v,2));function E(A,M,y,D,O,T,R,L,P,b,U){const B=T/P,I=R/b,W=T/2,J=R/2,X=L/2,V=P+1,H=b+1;let q=0,rt=0;const st=new F;for(let ut=0;ut<H;ut++){const ct=ut*I-J;for(let kt=0;kt<V;kt++){const Zt=kt*B-W;st[A]=Zt*D,st[M]=ct*O,st[y]=X,m.push(st.x,st.y,st.z),st[A]=0,st[M]=0,st[y]=L>0?1:-1,_.push(st.x,st.y,st.z),v.push(kt/P),v.push(1-ut/b),q+=1}}for(let ut=0;ut<b;ut++)for(let ct=0;ct<P;ct++){const kt=g+ct+V*ut,Zt=g+ct+V*(ut+1),k=g+(ct+1)+V*(ut+1),ot=g+(ct+1)+V*ut;p.push(kt,Zt,ot),p.push(Zt,k,ot),rt+=6}d.addGroup(S,rt,U),S+=rt,g+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _f extends On{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],S=[];let E=0;const A=[],M=s/2;let y=0;D(),f===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(S,2));function D(){const T=new F,R=new F;let L=0;const P=(i-t)/s;for(let b=0;b<=c;b++){const U=[],B=b/c,I=B*(i-t)+t;for(let W=0;W<=l;W++){const J=W/l,X=J*p+d,V=Math.sin(X),H=Math.cos(X);R.x=I*V,R.y=-B*s+M,R.z=I*H,v.push(R.x,R.y,R.z),T.set(V,P,H).normalize(),g.push(T.x,T.y,T.z),S.push(J,1-B),U.push(E++)}A.push(U)}for(let b=0;b<l;b++)for(let U=0;U<c;U++){const B=A[U][b],I=A[U+1][b],W=A[U+1][b+1],J=A[U][b+1];(t>0||U!==0)&&(_.push(B,I,J),L+=3),(i>0||U!==c-1)&&(_.push(I,W,J),L+=3)}m.addGroup(y,L,0),y+=L}function O(T){const R=E,L=new ce,P=new F;let b=0;const U=T===!0?t:i,B=T===!0?1:-1;for(let W=1;W<=l;W++)v.push(0,M*B,0),g.push(0,B,0),S.push(.5,.5),E++;const I=E;for(let W=0;W<=l;W++){const X=W/l*p+d,V=Math.cos(X),H=Math.sin(X);P.x=U*H,P.y=M*B,P.z=U*V,v.push(P.x,P.y,P.z),g.push(0,B,0),L.x=V*.5+.5,L.y=H*.5*B+.5,S.push(L.x,L.y),E++}for(let W=0;W<l;W++){const J=R+W,X=I+W;T===!0?_.push(X,X+1,J):_.push(X+1,X,J),b+=3}m.addGroup(y,b,T===!0?1:2),y+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _f(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends _f{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,s,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new Eo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qm extends On{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];d(l),m(s),_(),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(c.slice(),3)),this.setAttribute("uv",new je(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const O=new F,T=new F,R=new F;for(let L=0;L<i.length;L+=3)S(i[L+0],O),S(i[L+1],T),S(i[L+2],R),p(O,T,R,D)}function p(D,O,T,R){const L=R+1,P=[];for(let b=0;b<=L;b++){P[b]=[];const U=D.clone().lerp(T,b/L),B=O.clone().lerp(T,b/L),I=L-b;for(let W=0;W<=I;W++)W===0&&b===L?P[b][W]=U:P[b][W]=U.clone().lerp(B,W/I)}for(let b=0;b<L;b++)for(let U=0;U<2*(L-b)-1;U++){const B=Math.floor(U/2);U%2===0?(g(P[b][B+1]),g(P[b+1][B]),g(P[b][B])):(g(P[b][B+1]),g(P[b+1][B+1]),g(P[b+1][B]))}}function m(D){const O=new F;for(let T=0;T<c.length;T+=3)O.x=c[T+0],O.y=c[T+1],O.z=c[T+2],O.normalize().multiplyScalar(D),c[T+0]=O.x,c[T+1]=O.y,c[T+2]=O.z}function _(){const D=new F;for(let O=0;O<c.length;O+=3){D.x=c[O+0],D.y=c[O+1],D.z=c[O+2];const T=M(D)/2/Math.PI+.5,R=y(D)/Math.PI+.5;f.push(T,1-R)}E(),v()}function v(){for(let D=0;D<f.length;D+=6){const O=f[D+0],T=f[D+2],R=f[D+4],L=Math.max(O,T,R),P=Math.min(O,T,R);L>.9&&P<.1&&(O<.2&&(f[D+0]+=1),T<.2&&(f[D+2]+=1),R<.2&&(f[D+4]+=1))}}function g(D){c.push(D.x,D.y,D.z)}function S(D,O){const T=D*3;O.x=t[T+0],O.y=t[T+1],O.z=t[T+2]}function E(){const D=new F,O=new F,T=new F,R=new F,L=new ce,P=new ce,b=new ce;for(let U=0,B=0;U<c.length;U+=9,B+=6){D.set(c[U+0],c[U+1],c[U+2]),O.set(c[U+3],c[U+4],c[U+5]),T.set(c[U+6],c[U+7],c[U+8]),L.set(f[B+0],f[B+1]),P.set(f[B+2],f[B+3]),b.set(f[B+4],f[B+5]),R.copy(D).add(O).add(T).divideScalar(3);const I=M(R);A(L,B+0,D,I),A(P,B+2,O,I),A(b,B+4,T,I)}}function A(D,O,T,R){R<0&&D.x===1&&(f[O]=D.x-1),T.x===0&&T.z===0&&(f[O]=R/2/Math.PI+.5)}function M(D){return Math.atan2(D.z,-D.x)}function y(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qm(t.vertices,t.indices,t.radius,t.detail)}}class qa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ge("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,S=(f-_)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new ce:new F);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new F,l=[],c=[],f=[],d=new F,p=new Be;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new F)}c[0]=new F,f[0]=new F;let m=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=m&&(m=_,s.set(1,0,0)),v<=m&&(m=v,s.set(0,1,0)),g<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ue(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Ue(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class iy extends qa{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new ce){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=p-this.aX,S=m-this.aY;p=g*_-S*v+this.aX,m=g*v+S*_+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class FE extends iy{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Zm(){let o=0,t=0,i=0,s=0;function l(c,f,d,p){o=c,t=d,i=-3*c+3*f-2*d-p,s=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,_,v){let g=(f-c)/m-(d-c)/(m+_)+(d-f)/_,S=(d-f)/_-(p-f)/(_+v)+(p-d)/v;g*=_,S*=_,l(f,d,g,S)},calc:function(c){const f=c*c,d=f*c;return o+t*c+i*f+s*d}}}const Kx=new F,Qx=new F,Ep=new Zm,Tp=new Zm,wp=new Zm;class Mm extends qa{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new F){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,_;this.closed||d>0?m=l[(d-1)%c]:(Qx.subVectors(l[0],l[1]).add(l[0]),m=Qx);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Kx.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Kx),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),A=Math.pow(v.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(_),S);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Ep.initNonuniformCatmullRom(m.x,v.x,g.x,_.x,E,A,M),Tp.initNonuniformCatmullRom(m.y,v.y,g.y,_.y,E,A,M),wp.initNonuniformCatmullRom(m.z,v.z,g.z,_.z,E,A,M)}else this.curveType==="catmullrom"&&(Ep.initCatmullRom(m.x,v.x,g.x,_.x,this.tension),Tp.initCatmullRom(m.y,v.y,g.y,_.y,this.tension),wp.initCatmullRom(m.z,v.z,g.z,_.z,this.tension));return s.set(Ep.calc(p),Tp.calc(p),wp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new F().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jx(o,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+c+f)*p+(-3*i+3*s-2*c-f)*d+c*o+i}function HE(o,t){const i=1-o;return i*i*t}function GE(o,t){return 2*(1-o)*o*t}function VE(o,t){return o*o*t}function Xl(o,t,i,s){return HE(o,t)+GE(o,i)+VE(o,s)}function kE(o,t){const i=1-o;return i*i*i*t}function WE(o,t){const i=1-o;return 3*i*i*o*t}function XE(o,t){return 3*(1-o)*o*o*t}function YE(o,t){return o*o*o*t}function Yl(o,t,i,s,l){return kE(o,t)+WE(o,i)+XE(o,s)+YE(o,l)}class qE extends qa{constructor(t=new ce,i=new ce,s=new ce,l=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new ce){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Yl(t,l.x,c.x,f.x,d.x),Yl(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ZE extends qa{constructor(t=new F,i=new F,s=new F,l=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new F){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Yl(t,l.x,c.x,f.x,d.x),Yl(t,l.y,c.y,f.y,d.y),Yl(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class KE extends qa{constructor(t=new ce,i=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ce){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ce){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class QE extends qa{constructor(t=new F,i=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new F){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new F){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class JE extends qa{constructor(t=new ce,i=new ce,s=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new ce){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Xl(t,l.x,c.x,f.x),Xl(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ay extends qa{constructor(t=new F,i=new F,s=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new F){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Xl(t,l.x,c.x,f.x),Xl(t,l.y,c.y,f.y),Xl(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jE extends qa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ce){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],_=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(Jx(d,p.x,m.x,_.x,v.x),Jx(d,p.y,m.y,_.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new ce().fromArray(l))}return this}}var $E=Object.freeze({__proto__:null,ArcCurve:FE,CatmullRomCurve3:Mm,CubicBezierCurve:qE,CubicBezierCurve3:ZE,EllipseCurve:iy,LineCurve:KE,LineCurve3:QE,QuadraticBezierCurve:JE,QuadraticBezierCurve3:ay,SplineCurve:jE});class Km extends qm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Km(t.radius,t.detail)}}class mi extends On{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,v=t/d,g=i/p,S=[],E=[],A=[],M=[];for(let y=0;y<_;y++){const D=y*g-f;for(let O=0;O<m;O++){const T=O*v-c;E.push(T,-D,0),A.push(0,0,1),M.push(O/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<d;D++){const O=D+m*y,T=D+m*(y+1),R=D+1+m*(y+1),L=D+1+m*y;S.push(O,T,L),S.push(T,R,L)}this.setIndex(S),this.setAttribute("position",new je(E,3)),this.setAttribute("normal",new je(A,3)),this.setAttribute("uv",new je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ri extends On{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new F,g=new F,S=[],E=[],A=[],M=[];for(let y=0;y<=s;y++){const D=[],O=y/s,T=f+O*d,R=t*Math.cos(T),L=Math.sqrt(t*t-R*R);let P=0;y===0&&f===0?P=.5/i:y===s&&p===Math.PI&&(P=-.5/i);for(let b=0;b<=i;b++){const U=b/i,B=l+U*c;v.x=-L*Math.cos(B),v.y=R,v.z=L*Math.sin(B),E.push(v.x,v.y,v.z),g.copy(v).normalize(),A.push(g.x,g.y,g.z),M.push(U+P,1-O),D.push(m++)}_.push(D)}for(let y=0;y<s;y++)for(let D=0;D<i;D++){const O=_[y][D+1],T=_[y][D],R=_[y+1][D],L=_[y+1][D+1];(y!==0||f>0)&&S.push(O,T,L),(y!==s-1||p<Math.PI)&&S.push(T,R,L)}this.setIndex(S),this.setAttribute("position",new je(E,3)),this.setAttribute("normal",new je(A,3)),this.setAttribute("uv",new je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qm extends On{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const p=[],m=[],_=[],v=[],g=new F,S=new F,E=new F;for(let A=0;A<=s;A++){const M=f+A/s*d;for(let y=0;y<=l;y++){const D=y/l*c;S.x=(t+i*Math.cos(M))*Math.cos(D),S.y=(t+i*Math.cos(M))*Math.sin(D),S.z=i*Math.sin(M),m.push(S.x,S.y,S.z),g.x=t*Math.cos(D),g.y=t*Math.sin(D),E.subVectors(S,g).normalize(),_.push(E.x,E.y,E.z),v.push(y/l),v.push(A/s)}}for(let A=1;A<=s;A++)for(let M=1;M<=l;M++){const y=(l+1)*A+M-1,D=(l+1)*(A-1)+M-1,O=(l+1)*(A-1)+M,T=(l+1)*A+M;p.push(y,D,T),p.push(D,O,T)}this.setIndex(p),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ff extends On{constructor(t=new ay(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new F,p=new F,m=new ce;let _=new F;const v=[],g=[],S=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(S,2));function A(){for(let O=0;O<i;O++)M(O);M(c===!1?i:0),D(),y()}function M(O){_=t.getPointAt(O/i,_);const T=f.normals[O],R=f.binormals[O];for(let L=0;L<=l;L++){const P=L/l*Math.PI*2,b=Math.sin(P),U=-Math.cos(P);p.x=U*T.x+b*R.x,p.y=U*T.y+b*R.y,p.z=U*T.z+b*R.z,p.normalize(),g.push(p.x,p.y,p.z),d.x=_.x+s*p.x,d.y=_.y+s*p.y,d.z=_.z+s*p.z,v.push(d.x,d.y,d.z)}}function y(){for(let O=1;O<=i;O++)for(let T=1;T<=l;T++){const R=(l+1)*(O-1)+(T-1),L=(l+1)*O+(T-1),P=(l+1)*O+T,b=(l+1)*(O-1)+T;E.push(R,L,b),E.push(L,P,b)}}function D(){for(let O=0;O<=i;O++)for(let T=0;T<=l;T++)m.x=O/i,m.y=T/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ff(new $E[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Co(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(jx(l))l.isRenderTargetTexture?(ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(jx(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ii(o){const t={};for(let i=0;i<o.length;i++){const s=Co(o[i]);for(const l in s)t[l]=s[l]}return t}function jx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function tT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function sy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const ry={clone:Co,merge:ii};var eT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eT,this.fragmentShader=nT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=tT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ve().setHex(l.value);break;case"v2":this.uniforms[s].value=new ce().fromArray(l.value);break;case"v3":this.uniforms[s].value=new F().fromArray(l.value);break;case"v4":this.uniforms[s].value=new Je().fromArray(l.value);break;case"m3":this.uniforms[s].value=new we().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Be().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class iT extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ea extends pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xm,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aT extends ea{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sT extends pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rT extends pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class oy extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class oT extends oy{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Ap=new Be,$x=new F,tS=new F;class lT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xm,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;$x.setFromMatrixPosition(t.matrixWorld),i.position.copy($x),tS.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(tS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){Ap.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(Ap,t.coordinateSystem,t.reversedDepth);const c=this._frameExtents,f=l?l.z/c.x:1,d=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;t.coordinateSystem===jl||t.reversedDepth?i.set(.5*f,0,0,.5*f+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*f,0,0,.5*f+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(Ap)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qu=new F,Zu=new Do,xa=new F;let ly=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qu,Zu,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qu,Zu,xa.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(qu,Zu,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qu,Zu,xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const ws=new F,eS=new ce,nS=new ce;class Vi extends ly{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$l*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-t/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ws.x,ws.y).multiplyScalar(-t/ws.z)}getViewSize(t,i){return this.getViewBounds(t,eS,nS),i.subVectors(nS,eS)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(kl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class nc extends ly{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cT extends lT{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uT extends oy{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new cT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const po=-90,mo=1;class fT extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Vi(po,mo,t,i);l.layers=this.layers,this.add(l);const c=new Vi(po,mo,t,i);c.layers=this.layers,this.add(c);const f=new Vi(po,mo,t,i);f.layers=this.layers,this.add(f);const d=new Vi(po,mo,t,i);d.layers=this.layers,this.add(d);const p=new Vi(po,mo,t,i);p.layers=this.layers,this.add(p);const m=new Vi(po,mo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===Ma)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===jl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class hT extends Vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const i0=class i0{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};i0.prototype.isMatrix2=!0;let iS=i0;function aS(o,t,i,s){const l=dT(s);switch(i){case ZS:return o*t;case Um:return o*t/l.components*l.byteLength;case Pm:return o*t/l.components*l.byteLength;case fr:return o*t*2/l.components*l.byteLength;case Om:return o*t*2/l.components*l.byteLength;case KS:return o*t*3/l.components*l.byteLength;case ri:return o*t*4/l.components*l.byteLength;case zm:return o*t*4/l.components*l.byteLength;case $u:case tf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ef:case nf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wp:case Yp:return Math.max(o,16)*Math.max(t,8)/4;case kp:case Xp:return Math.max(o,8)*Math.max(t,8)/2;case qp:case Zp:case Qp:case Jp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Kp:case sf:case jp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $p:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case tm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case em:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case nm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case im:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case am:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case sm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case rm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case om:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case lm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case cm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case um:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case fm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case hm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case dm:case pm:case mm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case gm:case vm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case rf:case _m:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dT(o){switch(o){case Kn:case WS:return{byteLength:1,components:1};case Ql:case XS:case aa:return{byteLength:2,components:1};case Nm:case Lm:return{byteLength:2,components:4};case ia:case Dm:case ki:return{byteLength:4,components:1};case YS:case qS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cm}}));typeof window<"u"&&(window.__THREE__?ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cm);function cy(){let o=null,t=!1,i=null,s=null;function l(c,f){s=o.requestAnimationFrame(l),i(c,f)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function pT(o){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,v=m.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],A=v[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,v[g]=A)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const A=v[S];o.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var mT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gT=`#ifdef USE_ALPHAHASH
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
#endif`,vT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ST=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yT=`#ifdef USE_AOMAP
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
#endif`,MT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bT=`#ifdef USE_BATCHING
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
#endif`,ET=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RT=`#ifdef USE_IRIDESCENCE
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
#endif`,CT=`#ifdef USE_BUMPMAP
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
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BT=`#define PI 3.141592653589793
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
} // validated`,FT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HT=`vec3 transformedNormal = objectNormal;
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
#endif`,GT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XT="gl_FragColor = linearToOutputTexel( gl_FragColor );",YT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
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
#endif`,QT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n2=`#ifdef USE_GRADIENTMAP
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
}`,i2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,o2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,d2=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,p2=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,g2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,_2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T2=`#if defined( USE_POINTS_UV )
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
#endif`,w2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N2=`#ifdef USE_MORPHTARGETS
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
#endif`,L2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B2=`#ifdef USE_NORMALMAP
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
#endif`,F2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,j2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tw=`float getShadowMask() {
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
}`,ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nw=`#ifdef USE_SKINNING
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
#endif`,iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aw=`#ifdef USE_SKINNING
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
#endif`,sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ow=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cw=`#ifdef USE_TRANSMISSION
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
#endif`,uw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gw=`uniform sampler2D t2D;
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_w=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`#include <common>
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
}`,Mw=`#if DEPTH_PACKING == 3200
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
}`,bw=`#define DISTANCE
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
}`,Ew=`#define DISTANCE
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`uniform float scale;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Dw=`uniform vec3 diffuse;
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
}`,Nw=`#define LAMBERT
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
}`,Lw=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Uw=`#define MATCAP
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
}`,Pw=`#define MATCAP
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
}`,Ow=`#define NORMAL
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
}`,zw=`#define NORMAL
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
}`,Iw=`#define PHONG
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
}`,Bw=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,Fw=`#define STANDARD
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
}`,Hw=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,Gw=`#define TOON
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
}`,Vw=`#define TOON
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
}`,kw=`uniform float size;
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#include <common>
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
}`,Yw=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:mT,alphahash_pars_fragment:gT,alphamap_fragment:vT,alphamap_pars_fragment:_T,alphatest_fragment:xT,alphatest_pars_fragment:ST,aomap_fragment:yT,aomap_pars_fragment:MT,batching_pars_vertex:bT,batching_vertex:ET,begin_vertex:TT,beginnormal_vertex:wT,bsdfs:AT,iridescence_fragment:RT,bumpmap_pars_fragment:CT,clipping_planes_fragment:DT,clipping_planes_pars_fragment:NT,clipping_planes_pars_vertex:LT,clipping_planes_vertex:UT,color_fragment:PT,color_pars_fragment:OT,color_pars_vertex:zT,color_vertex:IT,common:BT,cube_uv_reflection_fragment:FT,defaultnormal_vertex:HT,displacementmap_pars_vertex:GT,displacementmap_vertex:VT,emissivemap_fragment:kT,emissivemap_pars_fragment:WT,colorspace_fragment:XT,colorspace_pars_fragment:YT,envmap_fragment:qT,envmap_common_pars_fragment:ZT,envmap_pars_fragment:KT,envmap_pars_vertex:QT,envmap_physical_pars_fragment:o2,envmap_vertex:JT,fog_vertex:jT,fog_pars_vertex:$T,fog_fragment:t2,fog_pars_fragment:e2,gradientmap_pars_fragment:n2,lightmap_pars_fragment:i2,lights_lambert_fragment:a2,lights_lambert_pars_fragment:s2,lights_pars_begin:r2,lights_toon_fragment:l2,lights_toon_pars_fragment:c2,lights_phong_fragment:u2,lights_phong_pars_fragment:f2,lights_physical_fragment:h2,lights_physical_pars_fragment:d2,lights_fragment_begin:p2,lights_fragment_maps:m2,lights_fragment_end:g2,lightprobes_pars_fragment:v2,logdepthbuf_fragment:_2,logdepthbuf_pars_fragment:x2,logdepthbuf_pars_vertex:S2,logdepthbuf_vertex:y2,map_fragment:M2,map_pars_fragment:b2,map_particle_fragment:E2,map_particle_pars_fragment:T2,metalnessmap_fragment:w2,metalnessmap_pars_fragment:A2,morphinstance_vertex:R2,morphcolor_vertex:C2,morphnormal_vertex:D2,morphtarget_pars_vertex:N2,morphtarget_vertex:L2,normal_fragment_begin:U2,normal_fragment_maps:P2,normal_pars_fragment:O2,normal_pars_vertex:z2,normal_vertex:I2,normalmap_pars_fragment:B2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:H2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:V2,opaque_fragment:k2,packing:W2,premultiplied_alpha_fragment:X2,project_vertex:Y2,dithering_fragment:q2,dithering_pars_fragment:Z2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Q2,shadowmap_pars_fragment:J2,shadowmap_pars_vertex:j2,shadowmap_vertex:$2,shadowmask_pars_fragment:tw,skinbase_vertex:ew,skinning_pars_vertex:nw,skinning_vertex:iw,skinnormal_vertex:aw,specularmap_fragment:sw,specularmap_pars_fragment:rw,tonemapping_fragment:ow,tonemapping_pars_fragment:lw,transmission_fragment:cw,transmission_pars_fragment:uw,uv_pars_fragment:fw,uv_pars_vertex:hw,uv_vertex:dw,worldpos_vertex:pw,background_vert:mw,background_frag:gw,backgroundCube_vert:vw,backgroundCube_frag:_w,cube_vert:xw,cube_frag:Sw,depth_vert:yw,depth_frag:Mw,distance_vert:bw,distance_frag:Ew,equirect_vert:Tw,equirect_frag:ww,linedashed_vert:Aw,linedashed_frag:Rw,meshbasic_vert:Cw,meshbasic_frag:Dw,meshlambert_vert:Nw,meshlambert_frag:Lw,meshmatcap_vert:Uw,meshmatcap_frag:Pw,meshnormal_vert:Ow,meshnormal_frag:zw,meshphong_vert:Iw,meshphong_frag:Bw,meshphysical_vert:Fw,meshphysical_frag:Hw,meshtoon_vert:Gw,meshtoon_frag:Vw,points_vert:kw,points_frag:Ww,shadow_vert:Xw,shadow_frag:Yw,sprite_vert:qw,sprite_frag:Zw},qt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},ya={basic:{uniforms:ii([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ii([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ii([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ii([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ii([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ii([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ii([qt.points,qt.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ii([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ii([qt.common,qt.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ii([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ii([qt.sprite,qt.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distance:{uniforms:ii([qt.common,qt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distance_vert,fragmentShader:Ce.distance_frag},shadow:{uniforms:ii([qt.lights,qt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};ya.physical={uniforms:ii([ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Ku={r:0,b:0,g:0},Kw=new Be,uy=new we;uy.set(-1,0,0,0,1,0,0,0,1);function Qw(o,t,i,s,l,c){const f=new ve(0);let d=l===!0?0:1,p,m,_=null,v=0,g=null;function S(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){const T=D.backgroundBlurriness>0;O=t.get(O,T)}return O}function E(D){let O=!1;const T=S(D);T===null?M(f,d):T&&T.isColor&&(M(T,1),O=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(D,O){const T=S(O);T&&(T.isCubeTexture||T.mapping===gf)?(m===void 0&&(m=new ne(new Vn(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Co(ya.backgroundCube.uniforms),vertexShader:ya.backgroundCube.vertexShader,fragmentShader:ya.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(R,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=T,m.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(O.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(uy),m.material.toneMapped=We.getTransfer(T.colorSpace)!==nn,(_!==T||v!==T.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,_=T,v=T.version,g=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(p===void 0&&(p=new ne(new mi(2,2),new Pn({name:"BackgroundMaterial",uniforms:Co(ya.background.uniforms),vertexShader:ya.background.vertexShader,fragmentShader:ya.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=T,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=We.getTransfer(T.colorSpace)!==nn,T.matrixAutoUpdate===!0&&T.updateMatrix(),p.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||v!==T.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=T,v=T.version,g=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function M(D,O){D.getRGB(Ku,sy(o)),i.buffers.color.setClear(Ku.r,Ku.g,Ku.b,O,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,O=1){f.set(D),d=O,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(f,d)},render:E,addToRenderList:A,dispose:y}}function Jw(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(I,W,J,X,V){let H=!1;const q=v(I,X,J,W);c!==q&&(c=q,m(c.object)),H=S(I,X,J,V),H&&E(I,X,J,V),V!==null&&t.update(V,o.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,T(I,W,J,X),V!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function p(){return o.createVertexArray()}function m(I){return o.bindVertexArray(I)}function _(I){return o.deleteVertexArray(I)}function v(I,W,J,X){const V=X.wireframe===!0;let H=s[W.id];H===void 0&&(H={},s[W.id]=H);const q=I.isInstancedMesh===!0?I.id:0;let rt=H[q];rt===void 0&&(rt={},H[q]=rt);let st=rt[J.id];st===void 0&&(st={},rt[J.id]=st);let ut=st[V];return ut===void 0&&(ut=g(p()),st[V]=ut),ut}function g(I){const W=[],J=[],X=[];for(let V=0;V<i;V++)W[V]=0,J[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:X,object:I,attributes:{},index:null}}function S(I,W,J,X){const V=c.attributes,H=W.attributes;let q=0;const rt=J.getAttributes();for(const st in rt)if(rt[st].location>=0){const ct=V[st];let kt=H[st];if(kt===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(kt=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(kt=I.instanceColor)),ct===void 0||ct.attribute!==kt||kt&&ct.data!==kt.data)return!0;q++}return c.attributesNum!==q||c.index!==X}function E(I,W,J,X){const V={},H=W.attributes;let q=0;const rt=J.getAttributes();for(const st in rt)if(rt[st].location>=0){let ct=H[st];ct===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(ct=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(ct=I.instanceColor));const kt={};kt.attribute=ct,ct&&ct.data&&(kt.data=ct.data),V[st]=kt,q++}c.attributes=V,c.attributesNum=q,c.index=X}function A(){const I=c.newAttributes;for(let W=0,J=I.length;W<J;W++)I[W]=0}function M(I){y(I,0)}function y(I,W){const J=c.newAttributes,X=c.enabledAttributes,V=c.attributeDivisors;J[I]=1,X[I]===0&&(o.enableVertexAttribArray(I),X[I]=1),V[I]!==W&&(o.vertexAttribDivisor(I,W),V[I]=W)}function D(){const I=c.newAttributes,W=c.enabledAttributes;for(let J=0,X=W.length;J<X;J++)W[J]!==I[J]&&(o.disableVertexAttribArray(J),W[J]=0)}function O(I,W,J,X,V,H,q){q===!0?o.vertexAttribIPointer(I,W,J,V,H):o.vertexAttribPointer(I,W,J,X,V,H)}function T(I,W,J,X){A();const V=X.attributes,H=J.getAttributes(),q=W.defaultAttributeValues;for(const rt in H){const st=H[rt];if(st.location>=0){let ut=V[rt];if(ut===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),ut!==void 0){const ct=ut.normalized,kt=ut.itemSize,Zt=t.get(ut);if(Zt===void 0)continue;const k=Zt.buffer,ot=Zt.type,Dt=Zt.bytesPerElement,$=ot===o.INT||ot===o.UNSIGNED_INT||ut.gpuType===Dm;if(ut.isInterleavedBufferAttribute){const vt=ut.data,At=vt.stride,pt=ut.offset;if(vt.isInstancedInterleavedBuffer){for(let K=0;K<st.locationSize;K++)y(st.location+K,vt.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let K=0;K<st.locationSize;K++)M(st.location+K);o.bindBuffer(o.ARRAY_BUFFER,k);for(let K=0;K<st.locationSize;K++)O(st.location+K,kt/st.locationSize,ot,ct,At*Dt,(pt+kt/st.locationSize*K)*Dt,$)}else{if(ut.isInstancedBufferAttribute){for(let vt=0;vt<st.locationSize;vt++)y(st.location+vt,ut.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let vt=0;vt<st.locationSize;vt++)M(st.location+vt);o.bindBuffer(o.ARRAY_BUFFER,k);for(let vt=0;vt<st.locationSize;vt++)O(st.location+vt,kt/st.locationSize,ot,ct,kt*Dt,kt/st.locationSize*vt*Dt,$)}}else if(q!==void 0){const ct=q[rt];if(ct!==void 0)switch(ct.length){case 2:o.vertexAttrib2fv(st.location,ct);break;case 3:o.vertexAttrib3fv(st.location,ct);break;case 4:o.vertexAttrib4fv(st.location,ct);break;default:o.vertexAttrib1fv(st.location,ct)}}}}D()}function R(){U();for(const I in s){const W=s[I];for(const J in W){const X=W[J];for(const V in X){const H=X[V];for(const q in H)_(H[q].object),delete H[q];delete X[V]}}delete s[I]}}function L(I){if(s[I.id]===void 0)return;const W=s[I.id];for(const J in W){const X=W[J];for(const V in X){const H=X[V];for(const q in H)_(H[q].object),delete H[q];delete X[V]}}delete s[I.id]}function P(I){for(const W in s){const J=s[W];for(const X in J){const V=J[X];if(V[I.id]===void 0)continue;const H=V[I.id];for(const q in H)_(H[q].object),delete H[q];delete V[I.id]}}}function b(I){for(const W in s){const J=s[W],X=I.isInstancedMesh===!0?I.id:0,V=J[X];if(V!==void 0){for(const H in V){const q=V[H];for(const rt in q)_(q[rt].object),delete q[rt];delete V[H]}delete J[X],Object.keys(J).length===0&&delete s[W]}}}function U(){B(),f=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:D}}function jw(o,t,i){let s;function l(p){s=p}function c(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function f(p,m,_){_!==0&&(o.drawArraysInstanced(s,p,m,_),i.update(m,s,_))}function d(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let g=0;for(let S=0;S<_;S++)g+=m[S];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function $w(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==ri&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const b=P===aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Kn&&P!==ki&&!b&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(ge("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),T=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:T,maxSamples:R,samples:L}}function tA(o){const t=this;let i=null,s=0,l=!1,c=!1;const f=new As,d=new we,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,y=o.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):m();else{const D=c?0:s,O=D*4;let T=y.clippingState||null;p.value=T,T=_(E,g,O,S);for(let R=0;R!==O;++R)T[R]=i[R];y.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,E){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=p.value,E!==!0||M===null){const y=S+A*4,D=g.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let O=0,T=S;O!==A;++O,T+=4)f.copy(v[O]).applyMatrix4(D,d),f.normal.toArray(M,T),M[T+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}const yo=4,eA=6,nA=20,iA=256,Ol=new nc,sS=new ve;let Rp=null,Cp=0,Dp=0,Np=!1;const aA=new F,sr=new F;class bm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=aA}=c;Rp=this._renderer.getRenderTarget(),Cp=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel(),Np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rp,Cp,Dp),this._renderer.xr.enabled=Np,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ur||t.mapping===Ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rp=this._renderer.getRenderTarget(),Cp=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel(),Np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:aa,format:ri,colorSpace:of,depthBuffer:!1},l=rS(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rS(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sA(c)),this._blurMaterial=oA(c,t,i),this._ggxMaterial=rA(c,t,i)}return l}_compileMaterial(t){const i=new ne(new On,t);this._renderer.compile(i,Ol)}_sceneToCubeUV(t,i,s,l,c){const p=new Vi(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(sS),v.toneMapping=na,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new Vn,new km({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(sS),y=!0);for(let O=0;O<6;O++){const T=O%3;T===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[O],c.y,c.z)):T===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[O]));const R=this._cubeSize;go(l,T*R,O>2?R:0,R,R),v.setRenderTarget(l),y&&v.render(A,p),v.render(t,p)}v.toneMapping=S,v.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ur||t.mapping===Ao;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oS());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;go(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Ol)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const p=f.uniforms,m=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-_*_),g=m*1.25,S=v*g,{_lodMax:E}=this,A=this._sizeLods[s],M=3*A*(s>E-yo?s-E+yo:0),y=4*(this._cubeSize-A);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=E-i,go(c,M,y,3*A,2*A),l.setRenderTarget(c),l.render(d,Ol),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-s,go(t,M,y,3*A,2*A),l.setRenderTarget(t),l.render(d,Ol)}_blur(t,i,s,l){const c=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,c,i,s,f),this._blurPass(c,t,s,s,f)}_blurPass(t,i,s,l,c){const f=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-s;const _=this._sizeLods[l],v=3*_*(l>this._lodMax-yo?l-this._lodMax+yo:0),g=4*(this._cubeSize-_);go(i,v,g,3*_,2*_),f.setRenderTarget(i),f.render(p,Ol)}}function sA(o){const t=[],i=[];let s=o;const l=o-yo+1+eA;for(let c=0;c<l;c++){const f=Math.pow(2,s);t.push(f);const d=1/(f-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,g=6,S=3,E=new Float32Array(S*g*v),A=new Float32Array(S*g*v);for(let y=0;y<v;y++){const D=y%3*2/3-1,O=y>2?0:-1,T=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];E.set(T,S*g*y);for(let R=0;R<g;R++){const L=_[R*2]*2-1,P=_[R*2+1]*2-1;y===0?sr.set(1,P,L):y===1?sr.set(-L,1,-P):y===2?sr.set(-L,P,1):y===3?sr.set(-1,P,-L):y===4?sr.set(-L,-1,P):sr.set(L,P,-1),sr.toArray(A,(y*g+R)*S)}}const M=new On;M.setAttribute("position",new Wi(E,S)),M.setAttribute("outputDirection",new Wi(A,S)),i.push(new ne(M,null)),s>yo&&s--}return{lodMeshes:i,sizeLods:t}}function rS(o,t,i){const s=new pi(o,t,i);return s.texture.mapping=gf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function go(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function rA(o,t,i){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function oA(o,t,i){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:nA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function oS(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function lS(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class fy extends pi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ey(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vn(5,5,5),c=new Pn({name:"CubemapFromEquirect",uniforms:Co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:Wa});c.uniforms.tEquirect.value=i;const f=new ne(l,c),d=i.minFilter;return i.minFilter===or&&(i.minFilter=vn),new fT(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function lA(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===jd||S===$d)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const A=new fy(E.height);return A.fromEquirectangularTexture(o,g),t.set(g,A),g.addEventListener("dispose",m),d(A.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===jd||S===$d,A=S===ur||S===Ao;if(E||A){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new bm(o)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return E&&D&&D.height>0||A&&D&&p(D)?(s===null&&(s=new bm(o)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,S){return S===jd?g.mapping=ur:S===$d&&(g.mapping=Ao),g}function p(g){let S=0;const E=6;for(let A=0;A<E;A++)g[A]!==void 0&&S++;return S===E}function m(g){const S=g.target;S.removeEventListener("dispose",m);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function cA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mo("WebGLRenderer: "+s+" extension not supported."),l}}}function uA(o,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function p(v){const g=v.attributes;for(const S in g)t.update(g[S],o.ARRAY_BUFFER)}function m(v){const g=[],S=v.index,E=v.attributes.position;let A=0;if(E===void 0)return;if(S!==null){const D=S.array;A=S.version;for(let O=0,T=D.length;O<T;O+=3){const R=D[O+0],L=D[O+1],P=D[O+2];g.push(R,L,L,P,P,R)}}else{const D=E.array;A=E.version;for(let O=0,T=D.length/3-1;O<T;O+=3){const R=O+0,L=O+1,P=O+2;g.push(R,L,L,P,P,R)}}const M=new(E.count>=65535?ty:Gm)(g,1);M.version=A;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function fA(o,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,g){o.drawElements(s,g,c,v*f),i.update(g,s,1)}function m(v,g,S){S!==0&&(o.drawElementsInstanced(s,g,c,v*f,S),i.update(g,s,S))}function _(v,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,S);let A=0;for(let M=0;M<S;M++)A+=g[M];i.update(A,s,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function hA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ye("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function dA(o,t,i){const s=new WeakMap,l=new Je;function c(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let B=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var S=B;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),A===!0&&(T=2),M===!0&&(T=3);let R=d.attributes.position.count*T,L=1;R>t.maxTextureSize&&(L=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*L*4*v),b=new JS(P,R,L,v);b.type=ki,b.needsUpdate=!0;const U=T*4;for(let I=0;I<v;I++){const W=y[I],J=D[I],X=O[I],V=R*L*4*I;for(let H=0;H<W.count;H++){const q=H*U;E===!0&&(l.fromBufferAttribute(W,H),P[V+q+0]=l.x,P[V+q+1]=l.y,P[V+q+2]=l.z,P[V+q+3]=0),A===!0&&(l.fromBufferAttribute(J,H),P[V+q+4]=l.x,P[V+q+5]=l.y,P[V+q+6]=l.z,P[V+q+7]=0),M===!0&&(l.fromBufferAttribute(X,H),P[V+q+8]=l.x,P[V+q+9]=l.y,P[V+q+10]=l.z,P[V+q+11]=X.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new ce(R,L)},s.set(d,g),d.addEventListener("dispose",B)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function pA(o,t,i,s,l){let c=new WeakMap;function f(m){const _=l.render.frame,v=m.geometry,g=t.get(m,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function d(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const mA={[zS]:"LINEAR_TONE_MAPPING",[IS]:"REINHARD_TONE_MAPPING",[BS]:"CINEON_TONE_MAPPING",[FS]:"ACES_FILMIC_TONE_MAPPING",[GS]:"AGX_TONE_MAPPING",[VS]:"NEUTRAL_TONE_MAPPING",[HS]:"CUSTOM_TONE_MAPPING"};function gA(o,t,i,s,l,c){const f=new pi(t,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new On;m.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new je([0,2,0,0,2,0],2));const _=new iT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new ne(m,_),g=new nc(-1,1,1,-1,0,1);let S=null,E=null,A=!1,M,y=null,D=[],O=!1;this.setSize=function(T,R){f.setSize(T,R),d!==null&&d.setSize(T,R),p!==null&&p.setSize(T,R);for(let L=0;L<D.length;L++){const P=D[L];P.setSize&&P.setSize(T,R)}},this.setEffects=function(T){D=T,O=D.length>0&&D[0].isRenderPass===!0;const R=f.width,L=f.height;D.length>0&&d===null&&(d=new pi(R,L,{type:aa,depthBuffer:!1,stencilBuffer:!1}),p=new pi(R,L,{type:aa,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<D.length;P++){const b=D[P];b.setSize&&b.setSize(R,L)}},this.begin=function(T,R){if(A||T.toneMapping===na&&D.length===0)return!1;if(y=R,R!==null){const L=R.width,P=R.height;(f.width!==L||f.height!==P)&&this.setSize(L,P)}return O===!1&&T.setRenderTarget(f),M=T.toneMapping,T.toneMapping=na,!0},this.hasRenderPass=function(){return O},this.end=function(T,R){T.toneMapping=M,A=!0;let L=f,P=d;for(let b=0;b<D.length;b++){const U=D[b];U.enabled!==!1&&(U.render(T,P,L,R),U.needsSwap!==!1&&(L=P,P=P===d?p:d))}if(S!==T.outputColorSpace||E!==T.toneMapping){S=T.outputColorSpace,E=T.toneMapping,_.defines={},We.getTransfer(S)===nn&&(_.defines.SRGB_TRANSFER="");const b=mA[E];b&&(_.defines[b]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=L.texture,T.setRenderTarget(y),T.render(v,g),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){f.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const hy=new Qn,Em=new Ro(1,1),dy=new JS,py=new gE,my=new ey,cS=[],uS=[],fS=new Float32Array(16),hS=new Float32Array(9),dS=new Float32Array(4);function No(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=cS[l];if(c===void 0&&(c=new Float32Array(l),cS[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,o[f].toArray(c,d)}return c}function Rn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Sf(o,t){let i=uS[t];i===void 0&&(i=new Int32Array(t),uS[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function vA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function _A(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2fv(this.addr,t),Cn(i,t)}}function xA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rn(i,t))return;o.uniform3fv(this.addr,t),Cn(i,t)}}function SA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4fv(this.addr,t),Cn(i,t)}}function yA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;dS.set(s),o.uniformMatrix2fv(this.addr,!1,dS),Cn(i,s)}}function MA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;hS.set(s),o.uniformMatrix3fv(this.addr,!1,hS),Cn(i,s)}}function bA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;fS.set(s),o.uniformMatrix4fv(this.addr,!1,fS),Cn(i,s)}}function EA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function TA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2iv(this.addr,t),Cn(i,t)}}function wA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;o.uniform3iv(this.addr,t),Cn(i,t)}}function AA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4iv(this.addr,t),Cn(i,t)}}function RA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function CA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2uiv(this.addr,t),Cn(i,t)}}function DA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;o.uniform3uiv(this.addr,t),Cn(i,t)}}function NA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4uiv(this.addr,t),Cn(i,t)}}function LA(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Em.compareFunction=i.isReversedDepthBuffer()?Bm:Im,c=Em):c=hy,i.setTexture2D(t||c,l)}function UA(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||py,l)}function PA(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||my,l)}function OA(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||dy,l)}function zA(o){switch(o){case 5126:return vA;case 35664:return _A;case 35665:return xA;case 35666:return SA;case 35674:return yA;case 35675:return MA;case 35676:return bA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return wA;case 35669:case 35673:return AA;case 5125:return RA;case 36294:return CA;case 36295:return DA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return OA}}function IA(o,t){o.uniform1fv(this.addr,t)}function BA(o,t){const i=No(t,this.size,2);o.uniform2fv(this.addr,i)}function FA(o,t){const i=No(t,this.size,3);o.uniform3fv(this.addr,i)}function HA(o,t){const i=No(t,this.size,4);o.uniform4fv(this.addr,i)}function GA(o,t){const i=No(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function VA(o,t){const i=No(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function kA(o,t){const i=No(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function WA(o,t){o.uniform1iv(this.addr,t)}function XA(o,t){o.uniform2iv(this.addr,t)}function YA(o,t){o.uniform3iv(this.addr,t)}function qA(o,t){o.uniform4iv(this.addr,t)}function ZA(o,t){o.uniform1uiv(this.addr,t)}function KA(o,t){o.uniform2uiv(this.addr,t)}function QA(o,t){o.uniform3uiv(this.addr,t)}function JA(o,t){o.uniform4uiv(this.addr,t)}function jA(o,t,i){const s=this.cache,l=t.length,c=Sf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));let f;this.type===o.SAMPLER_2D_SHADOW?f=Em:f=hy;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function $A(o,t,i){const s=this.cache,l=t.length,c=Sf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||py,c[f])}function t3(o,t,i){const s=this.cache,l=t.length,c=Sf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||my,c[f])}function e3(o,t,i){const s=this.cache,l=t.length,c=Sf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||dy,c[f])}function n3(o){switch(o){case 5126:return IA;case 35664:return BA;case 35665:return FA;case 35666:return HA;case 35674:return GA;case 35675:return VA;case 35676:return kA;case 5124:case 35670:return WA;case 35667:case 35671:return XA;case 35668:case 35672:return YA;case 35669:case 35673:return qA;case 5125:return ZA;case 36294:return KA;case 36295:return QA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return e3}}class i3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zA(i.type)}}class a3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=n3(i.type)}}class s3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Lp=/(\w+)(\])?(\[|\.)?/g;function pS(o,t){o.seq.push(t),o.map[t.id]=t}function r3(o,t,i){const s=o.name,l=s.length;for(Lp.lastIndex=0;;){const c=Lp.exec(s),f=Lp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){pS(i,m===void 0?new i3(d,o,t):new a3(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new s3(d),pS(i,v)),i=v}}}class af{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),p=t.getUniformLocation(i,d.name);r3(d,p,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function mS(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const o3=37297;let l3=0;function c3(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const gS=new we;function u3(o){We._getMatrix(gS,We.workingColorSpace,o);const t=`mat3( ${gS.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(o)){case lf:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function vS(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+c3(o.getShaderSource(t),d)}else return c}function f3(o,t){const i=u3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const h3={[zS]:"Linear",[IS]:"Reinhard",[BS]:"Cineon",[FS]:"ACESFilmic",[GS]:"AgX",[VS]:"Neutral",[HS]:"Custom"};function d3(o,t){const i=h3[t];return i===void 0?(ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qu=new F;function p3(){We.getLuminanceCoefficients(Qu);const o=Qu.x.toFixed(4),t=Qu.y.toFixed(4),i=Qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function g3(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function v3(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),f=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:o.getAttribLocation(t,f),locationSize:d}}return i}function Bl(o){return o!==""}function _S(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tm(o){return o.replace(_3,S3)}const x3=new Map;function S3(o,t){let i=Ce[t];if(i===void 0){const s=x3.get(t);if(s!==void 0)i=Ce[s],ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tm(i)}const y3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SS(o){return o.replace(y3,M3)}function M3(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const b3={[Gl]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function E3(o){return b3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T3={[ur]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE",[gf]:"ENVMAP_TYPE_CUBE_UV"};function w3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":T3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const A3={[Ao]:"ENVMAP_MODE_REFRACTION"};function R3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":A3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const C3={[OS]:"ENVMAP_BLENDING_MULTIPLY",[Nb]:"ENVMAP_BLENDING_MIX",[Lb]:"ENVMAP_BLENDING_ADD"};function D3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":C3[o.combine]||"ENVMAP_BLENDING_NONE"}function N3(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function L3(o,t,i,s){const l=o.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=E3(i),m=w3(i),_=R3(i),v=D3(i),g=N3(i),S=m3(i),E=g3(c),A=l.createProgram();let M,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bl).join(`
`),y.length>0&&(y+=`
`)):(M=[yS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),y=[yS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?Ce.tonemapping_pars_fragment:"",i.toneMapping!==na?d3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,f3("linearToOutputTexel",i.outputColorSpace),p3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bl).join(`
`)),f=Tm(f),f=_S(f,i),f=xS(f,i),d=Tm(d),d=_S(d,i),d=xS(d,i),f=SS(f),d=SS(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===yx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=D+M+f,T=D+y+d,R=mS(l,l.VERTEX_SHADER,O),L=mS(l,l.FRAGMENT_SHADER,T);l.attachShader(A,R),l.attachShader(A,L),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(I){if(o.debug.checkShaderErrors){const W=l.getProgramInfoLog(A)||"",J=l.getShaderInfoLog(R)||"",X=l.getShaderInfoLog(L)||"",V=W.trim(),H=J.trim(),q=X.trim();let rt=!0,st=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,R,L);else{const ut=vS(l,R,"vertex"),ct=vS(l,L,"fragment");Ye("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ut+`
`+ct)}else V!==""?ge("WebGLProgram: Program Info Log:",V):(H===""||q==="")&&(st=!1);st&&(I.diagnostics={runnable:rt,programLog:V,vertexShader:{log:H,prefix:M},fragmentShader:{log:q,prefix:y}})}l.deleteShader(R),l.deleteShader(L),b=new af(l,A),U=v3(l,A)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let B=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=l.getProgramParameter(A,o3)),B},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=l3++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=R,this.fragmentShader=L,this}let U3=0;class P3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new O3(t),i.set(t,s)),s}}class O3{constructor(t){this.id=U3++,this.code=t,this.usedTimes=0}}function z3(o){return o===fr||o===sf||o===rf}function I3(o,t,i,s,l,c){const f=new jS,d=new P3,p=new Set,m=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return p.add(b),b===0?"uv":`uv${b}`}function A(b,U,B,I,W,J){const X=I.fog,V=W.geometry,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,rt=t.get(b.envMap||H,q),st=rt&&rt.mapping===gf?rt.image.height:null,ut=S[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ge("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,kt=ct!==void 0?ct.length:0;let Zt=0;V.morphAttributes.position!==void 0&&(Zt=1),V.morphAttributes.normal!==void 0&&(Zt=2),V.morphAttributes.color!==void 0&&(Zt=3);let k,ot,Dt,$;if(ut){const Ve=ya[ut];k=Ve.vertexShader,ot=Ve.fragmentShader}else{k=b.vertexShader,ot=b.fragmentShader;const Ve=d.getVertexShaderStage(b),Ee=d.getFragmentShaderStage(b);d.update(b,Ve,Ee),Dt=Ve.id,$=Ee.id}const vt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),pt=W.isInstancedMesh===!0,K=W.isBatchedMesh===!0,mt=!!b.map,Bt=!!b.matcap,Ct=!!rt,Ot=!!b.aoMap,Lt=!!b.lightMap,Nt=!!b.bumpMap&&b.wireframe===!1,Pt=!!b.normalMap,he=!!b.displacementMap,Me=!!b.emissiveMap,de=!!b.metalnessMap,me=!!b.roughnessMap,Y=b.anisotropy>0,Se=b.clearcoat>0,re=b.dispersion>0,z=b.retroreflectivity>0,w=b.iridescence>0,it=b.sheen>0,et=b.transmission>0,xt=Y&&!!b.anisotropyMap,wt=Se&&!!b.clearcoatMap,Ut=Se&&!!b.clearcoatNormalMap,St=Se&&!!b.clearcoatRoughnessMap,Mt=w&&!!b.iridescenceMap,It=w&&!!b.iridescenceThicknessMap,le=it&&!!b.sheenColorMap,Wt=it&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Jt=!!b.specularColorMap,pe=!!b.specularIntensityMap,be=et&&!!b.transmissionMap,j=et&&!!b.thicknessMap,zt=!!b.gradientMap,Et=!!b.alphaMap,Ft=b.alphaTest>0,Qt=!!b.alphaHash,Tt=!!b.extensions;let oe=na;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(oe=o.toneMapping);const Kt={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:ot,defines:b.defines,customVertexShaderID:Dt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:K,batchingColor:K&&W._colorsTexture!==null,instancing:pt,instancingColor:pt&&W.instanceColor!==null,instancingMorph:pt&&W.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:mt,matcap:Bt,envMap:Ct,envMapMode:Ct&&rt.mapping,envMapCubeUVHeight:st,aoMap:Ot,lightMap:Lt,bumpMap:Nt,normalMap:Pt,displacementMap:he,emissiveMap:Me,normalMapObjectSpace:Pt&&b.normalMapType===zb,normalMapTangentSpace:Pt&&b.normalMapType===xm,packedNormalMap:Pt&&b.normalMapType===xm&&z3(b.normalMap.format),metalnessMap:de,roughnessMap:me,anisotropy:Y,anisotropyMap:xt,clearcoat:Se,clearcoatMap:wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:St,dispersion:re,retroreflection:z,iridescence:w,iridescenceMap:Mt,iridescenceThicknessMap:It,sheen:it,sheenColorMap:le,sheenRoughnessMap:Wt,specularMap:Vt,specularColorMap:Jt,specularIntensityMap:pe,transmission:et,transmissionMap:be,thicknessMap:j,gradientMap:zt,opaque:b.transparent===!1&&b.blending===Vl&&b.alphaToCoverage===!1,alphaMap:Et,alphaTest:Ft,alphaHash:Qt,combine:b.combine,mapUv:mt&&E(b.map.channel),aoMapUv:Ot&&E(b.aoMap.channel),lightMapUv:Lt&&E(b.lightMap.channel),bumpMapUv:Nt&&E(b.bumpMap.channel),normalMapUv:Pt&&E(b.normalMap.channel),displacementMapUv:he&&E(b.displacementMap.channel),emissiveMapUv:Me&&E(b.emissiveMap.channel),metalnessMapUv:de&&E(b.metalnessMap.channel),roughnessMapUv:me&&E(b.roughnessMap.channel),anisotropyMapUv:xt&&E(b.anisotropyMap.channel),clearcoatMapUv:wt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:It&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:le&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&E(b.sheenRoughnessMap.channel),specularMapUv:Vt&&E(b.specularMap.channel),specularColorMapUv:Jt&&E(b.specularColorMap.channel),specularIntensityMapUv:pe&&E(b.specularIntensityMap.channel),transmissionMapUv:be&&E(b.transmissionMap.channel),thicknessMapUv:j&&E(b.thicknessMap.channel),alphaMapUv:Et&&E(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pt||Y),vertexNormals:!!V.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(mt||Et),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||V.attributes.normal===void 0&&Pt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Zt,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:oe,decodeVideoTexture:mt&&b.map.isVideoTexture===!0&&We.getTransfer(b.map.colorSpace)===nn,decodeVideoTextureEmissive:Me&&b.emissiveMap.isVideoTexture===!0&&We.getTransfer(b.emissiveMap.colorSpace)===nn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===si,flipSided:b.side===oi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Tt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&b.extensions.multiDraw===!0||K)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function M(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)U.push(B),U.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(y(U,b),D(U,b),U.push(o.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function y(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numSunLights),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numSunLightShadows),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function D(b,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.retroreflection&&f.enable(24),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),U.packedNormalMap&&f.enable(22),U.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),U.numLightProbeGrids>0&&f.enable(22),U.hasPositionAttribute&&f.enable(23),b.push(f.mask)}function O(b){const U=S[b.type];let B;if(U){const I=ya[U];B=ry.clone(I.uniforms)}else B=b.uniforms;return B}function T(b,U){let B=_.get(U);return B!==void 0?++B.usedTimes:(B=new L3(o,U,b,l),m.push(B),_.set(U,B)),B}function R(b){if(--b.usedTimes===0){const U=m.indexOf(b);m[U]=m[m.length-1],m.pop(),_.delete(b.cacheKey),b.destroy()}}function L(b){d.remove(b)}function P(){d.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:O,acquireProgram:T,releaseProgram:R,releaseShaderCache:L,programs:m,dispose:P}}function B3(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function s(f){o.delete(f)}function l(f,d,p){o.get(f)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function F3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function MS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function bS(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,E,A,M,y){let D=o[t];return D===void 0?(D={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:A,renderOrder:g.renderOrder,z:M,group:y},o[t]=D):(D.id=g.id,D.object=g,D.geometry=S,D.material=E,D.materialVariant=f(g),D.groupOrder=A,D.renderOrder=g.renderOrder,D.z=M,D.group=y),t++,D}function p(g,S,E,A,M,y,D){D.reversedDepth===!0&&(M=-M);const O=d(g,S,E,A,M,y);E.transmission>0?s.push(O):E.transparent===!0?l.push(O):i.push(O)}function m(g,S,E,A,M,y){const D=d(g,S,E,A,M,y);E.transmission>0?s.unshift(D):E.transparent===!0?l.unshift(D):i.unshift(D)}function _(g,S){i.length>1&&i.sort(g||F3),s.length>1&&s.sort(S||MS),l.length>1&&l.sort(S||MS)}function v(){for(let g=t,S=o.length;g<S;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:v,sort:_}}function H3(){let o=new WeakMap;function t(s,l){const c=o.get(s);let f;return c===void 0?(f=new bS,o.set(s,[f])):l>=c.length?(f=new bS,c.push(f)):f=c[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function G3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new F,color:new ve};break;case"SpotLight":i={position:new F,direction:new F,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new F,halfWidth:new F,halfHeight:new F};break}return o[t.id]=i,i}}}function V3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let k3=0;function W3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function X3(o){const t=new G3,i=V3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new F);const l=new F,c=new Be,f=new Be;function d(m){let _=0,v=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let S=0,E=0,A=0,M=0,y=0,D=0,O=0,T=0,R=0,L=0,P=0,b=0,U=0,B=0;m.sort(W3);for(let W=0,J=m.length;W<J;W++){const X=m[W],V=X.color,H=X.intensity,q=X.distance;let rt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===fr?rt=X.shadow.map.texture:rt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=V.r*H,v+=V.g*H,g+=V.b*H;else if(X.isLightProbe){for(let st=0;st<9;st++)s.probe[st].addScaledVector(X.sh.coefficients[st],H);B++}else if(X.isSunLight){const st=t.get(X);if(st.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ut=X.shadow,ct=i.get(X);ct.shadowIntensity=ut.intensity,ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),s.sunShadow[E]=ct,s.sunShadowMap[E]=rt;const kt=ut.getViewportCount();for(let Zt=0;Zt<kt;Zt++)s.sunShadowMatrix[A+Zt]=ut.getMatrix(Zt),s.sunShadowCascade[A+Zt]=ut._cascadeData[Zt];A+=kt,E++}s.sun[S]=st,S++}else if(X.isDirectionalLight){const st=t.get(X);if(st.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ut=X.shadow,ct=i.get(X);ct.shadowIntensity=ut.intensity,ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,s.directionalShadow[M]=ct,s.directionalShadowMap[M]=rt,s.directionalShadowMatrix[M]=X.shadow.matrix,R++}s.directional[M]=st,M++}else if(X.isSpotLight){const st=t.get(X);st.position.setFromMatrixPosition(X.matrixWorld),st.color.copy(V).multiplyScalar(H),st.distance=q,st.coneCos=Math.cos(X.angle),st.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),st.decay=X.decay,s.spot[D]=st;const ut=X.shadow;if(X.map&&(s.spotLightMap[b]=X.map,b++,ut.updateMatrices(X),X.castShadow&&U++),s.spotLightMatrix[D]=ut.matrix,X.castShadow){const ct=i.get(X);ct.shadowIntensity=ut.intensity,ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,s.spotShadow[D]=ct,s.spotShadowMap[D]=rt,P++}D++}else if(X.isRectAreaLight){const st=t.get(X);st.color.copy(V).multiplyScalar(H),st.halfWidth.set(X.width*.5,0,0),st.halfHeight.set(0,X.height*.5,0),s.rectArea[O]=st,O++}else if(X.isPointLight){const st=t.get(X);if(st.color.copy(X.color).multiplyScalar(X.intensity),st.distance=X.distance,st.decay=X.decay,X.castShadow){const ut=X.shadow,ct=i.get(X);ct.shadowIntensity=ut.intensity,ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,ct.shadowCameraNear=ut.camera.near,ct.shadowCameraFar=ut.camera.far,s.pointShadow[y]=ct,s.pointShadowMap[y]=rt,s.pointShadowMatrix[y]=X.shadow.matrix,L++}s.point[y]=st,y++}else if(X.isHemisphereLight){const st=t.get(X);st.skyColor.copy(X.color).multiplyScalar(H),st.groundColor.copy(X.groundColor).multiplyScalar(H),s.hemi[T]=st,T++}}O>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qt.LTC_FLOAT_1,s.rectAreaLTC2=qt.LTC_FLOAT_2):(s.rectAreaLTC1=qt.LTC_HALF_1,s.rectAreaLTC2=qt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const I=s.hash;(I.sunLength!==S||I.directionalLength!==M||I.pointLength!==y||I.spotLength!==D||I.rectAreaLength!==O||I.hemiLength!==T||I.numSunShadows!==E||I.numDirectionalShadows!==R||I.numPointShadows!==L||I.numSpotShadows!==P||I.numSpotMaps!==b||I.numLightProbes!==B)&&(s.sun.length=S,s.directional.length=M,s.spot.length=D,s.rectArea.length=O,s.point.length=y,s.hemi.length=T,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=A,s.sunShadowCascade.length=A,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.directionalShadowMatrix.length=R,s.pointShadow.length=L,s.pointShadowMap.length=L,s.pointShadowMatrix.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+b-U,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=B,I.sunLength=S,I.directionalLength=M,I.pointLength=y,I.spotLength=D,I.rectAreaLength=O,I.hemiLength=T,I.numSunShadows=E,I.numDirectionalShadows=R,I.numPointShadows=L,I.numSpotShadows=P,I.numSpotMaps=b,I.numLightProbes=B,s.version=k3++)}function p(m,_){let v=0,g=0,S=0,E=0,A=0,M=0;const y=_.matrixWorldInverse;for(let D=0,O=m.length;D<O;D++){const T=m[D];if(T.isSunLight){const R=s.sun[v];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(y),v++}else if(T.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),g++}else if(T.isSpotLight){const R=s.spot[E];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),E++}else if(T.isRectAreaLight){const R=s.rectArea[A];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(y),f.identity(),c.copy(T.matrixWorld),c.premultiply(y),f.extractRotation(c),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),A++}else if(T.isPointLight){const R=s.point[S];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(y),S++}else if(T.isHemisphereLight){const R=s.hemi[M];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(y),M++}}}return{setup:d,setupView:p,state:s}}function ES(o){const t=new X3(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function p(g){l.push(g)}function m(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:m,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:p}}function Y3(o){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new ES(o),t.set(l,[d])):c>=f.length?(d=new ES(o),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const q3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z3=`uniform sampler2D shadow_pass;
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
}`,K3=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Q3=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],TS=new Be,zl=new F,Up=new F;function J3(o,t,i){let s=new Xm;const l=new ce,c=new ce,f=new Je,d=new sT,p=new rT,m={},_=i.maxTextureSize,v={[cr]:oi,[oi]:cr,[si]:si},g=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:q3,fragmentShader:Z3}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new On;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ne(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let y=this.type;this.render=function(L,P,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===hb&&(ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gl);const U=o.getRenderTarget(),B=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Wa),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const J=y!==this.type;J&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(V=>V.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,V=L.length;X<V;X++){const H=L[X],q=H.shadow;if(q===void 0){ge("WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const rt=q.getFrameExtents();l.multiply(rt),c.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/rt.x),l.x=c.x*rt.x,q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/rt.y),l.y=c.y*rt.y,q.mapSize.y=c.y));const st=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=st,q.map===null||J===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Il){if(H.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new pi(l.x,l.y,{format:fr,type:aa,minFilter:vn,magFilter:vn,generateMipmaps:!1}),q.map.texture.name=H.name+".shadowMap",q.map.depthTexture=new Ro(l.x,l.y,ki),q.map.depthTexture.name=H.name+".shadowMapDepth",q.map.depthTexture.format=Ya,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=kn,q.map.depthTexture.magFilter=kn}else H.isPointLight?(q.map=new fy(l.x),q.map.depthTexture=new BE(l.x,ia)):(q.map=new pi(l.x,l.y),q.map.depthTexture=new Ro(l.x,l.y,ia)),q.map.depthTexture.name=H.name+".shadowMap",q.map.depthTexture.format=Ya,this.type===Gl?(q.map.depthTexture.compareFunction=st?Bm:Im,q.map.depthTexture.minFilter=vn,q.map.depthTexture.magFilter=vn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=kn,q.map.depthTexture.magFilter=kn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==l.x||q.map.height!==l.y)&&q.map.setSize(l.x,l.y);const ut=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();H.isPointLight!==!0&&q.updateMatrices(H,b);for(let ct=0;ct<ut;ct++){const kt=q.getCamera(ct);if(H.isPointLight){const Zt=q.camera,k=q.matrix,ot=H.distance||Zt.far;ot!==Zt.far&&(Zt.far=ot,Zt.updateProjectionMatrix()),zl.setFromMatrixPosition(H.matrixWorld),Zt.position.copy(zl),Up.copy(Zt.position),Up.add(K3[ct]),Zt.up.copy(Q3[ct]),Zt.lookAt(Up),Zt.updateMatrixWorld(),k.makeTranslation(-zl.x,-zl.y,-zl.z),TS.multiplyMatrices(Zt.projectionMatrix,Zt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(TS,Zt.coordinateSystem,Zt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,ct),o.clear();else{ct===0&&(o.setRenderTarget(q.map),o.clear());const Zt=q.getViewport(ct);f.set(c.x*Zt.x,c.y*Zt.y,c.x*Zt.z,c.y*Zt.w),W.viewport(f)}s=q.getFrustum(ct),T(P,b,kt,H,this.type)}q.isPointLightShadow!==!0&&this.type===Il&&D(q,b),q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(U,B,I)};function D(L,P){const b=t.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null?L.mapPass=new pi(l.x,l.y,{format:fr,type:aa}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(P,null,b,g,A,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value.set(L.map.width,L.map.height),S.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(P,null,b,S,A,null)}function O(L,P,b,U){let B=null;const I=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(I!==void 0)B=I;else if(B=b.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=B.uuid,J=P.uuid;let X=m[W];X===void 0&&(X={},m[W]=X);let V=X[J];V===void 0&&(V=B.clone(),X[J]=V,P.addEventListener("dispose",R)),B=V}if(B.visible=P.visible,B.wireframe=P.wireframe,U===Il?B.side=P.shadowSide!==null?P.shadowSide:P.side:B.side=P.shadowSide!==null?P.shadowSide:v[P.side],B.alphaMap=P.alphaMap,B.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,B.map=P.map,B.clipShadows=P.clipShadows,B.clippingPlanes=P.clippingPlanes,B.clipIntersection=P.clipIntersection,B.displacementMap=P.displacementMap,B.displacementScale=P.displacementScale,B.displacementBias=P.displacementBias,B.wireframeLinewidth=P.wireframeLinewidth,B.linewidth=P.linewidth,b.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const W=o.properties.get(B);W.light=b}return B}function T(L,P,b,U,B){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===Il)&&(!L.frustumCulled||L.intersectsFrustum(s))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const J=t.update(L),X=L.material;if(Array.isArray(X)){const V=J.groups;for(let H=0,q=V.length;H<q;H++){const rt=V[H],st=X[rt.materialIndex];if(st&&st.visible){const ut=O(L,st,U,B);L.onBeforeShadow(o,L,P,b,J,ut,rt),o.renderBufferDirect(b,null,J,ut,L,rt),L.onAfterShadow(o,L,P,b,J,ut,rt)}}}else if(X.visible){const V=O(L,X,U,B);L.onBeforeShadow(o,L,P,b,J,V,null),o.renderBufferDirect(b,null,J,V,L,null),L.onAfterShadow(o,L,P,b,J,V,null)}}const W=L.children;for(let J=0,X=W.length;J<X;J++)T(W[J],P,b,U,B)}function R(L){L.target.removeEventListener("dispose",R);for(const b in m){const U=m[b],B=L.target.uuid;B in U&&(U[B].dispose(),delete U[B])}}}function j3(o,t){function i(){let j=!1;const zt=new Je;let Et=null;const Ft=new Je(0,0,0,0);return{setMask:function(Qt){Et!==Qt&&!j&&(o.colorMask(Qt,Qt,Qt,Qt),Et=Qt)},setLocked:function(Qt){j=Qt},setClear:function(Qt,Tt,oe,Kt,Ve){Ve===!0&&(Qt*=Kt,Tt*=Kt,oe*=Kt),zt.set(Qt,Tt,oe,Kt),Ft.equals(zt)===!1&&(o.clearColor(Qt,Tt,oe,Kt),Ft.copy(zt))},reset:function(){j=!1,Et=null,Ft.set(-1,0,0,0)}}}function s(){let j=!1,zt=!1,Et=null,Ft=null,Qt=null;return{setReversed:function(Tt){if(zt!==Tt){const oe=t.get("EXT_clip_control");Tt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),zt=Tt;const Kt=Qt;Qt=null,this.setClear(Kt)}},getReversed:function(){return zt},setTest:function(Tt){Tt?vt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(Tt){Et!==Tt&&!j&&(o.depthMask(Tt),Et=Tt)},setFunc:function(Tt){if(zt&&(Tt=Zb[Tt]),Ft!==Tt){switch(Tt){case Op:o.depthFunc(o.NEVER);break;case zp:o.depthFunc(o.ALWAYS);break;case Ip:o.depthFunc(o.LESS);break;case Zl:o.depthFunc(o.LEQUAL);break;case Bp:o.depthFunc(o.EQUAL);break;case Fp:o.depthFunc(o.GEQUAL);break;case Hp:o.depthFunc(o.GREATER);break;case Gp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=Tt}},setLocked:function(Tt){j=Tt},setClear:function(Tt){Qt!==Tt&&(Qt=Tt,zt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){j=!1,Et=null,Ft=null,Qt=null,zt=!1}}}function l(){let j=!1,zt=null,Et=null,Ft=null,Qt=null,Tt=null,oe=null,Kt=null,Ve=null;return{setTest:function(Ee){j||(Ee?vt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Ee){zt!==Ee&&!j&&(o.stencilMask(Ee),zt=Ee)},setFunc:function(Ee,gi,Di){(Et!==Ee||Ft!==gi||Qt!==Di)&&(o.stencilFunc(Ee,gi,Di),Et=Ee,Ft=gi,Qt=Di)},setOp:function(Ee,gi,Di){(Tt!==Ee||oe!==gi||Kt!==Di)&&(o.stencilOp(Ee,gi,Di),Tt=Ee,oe=gi,Kt=Di)},setLocked:function(Ee){j=Ee},setClear:function(Ee){Ve!==Ee&&(o.clearStencil(Ee),Ve=Ee)},reset:function(){j=!1,zt=null,Et=null,Ft=null,Qt=null,Tt=null,oe=null,Kt=null,Ve=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],A=null,M=!1,y=null,D=null,O=null,T=null,R=null,L=null,P=null,b=new ve(0,0,0),U=0,B=!1,I=null,W=null,J=null,X=null,V=null;const H=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,rt=0;const st=o.getParameter(o.VERSION);st.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(st)[1]),q=rt>=1):st.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),q=rt>=2);let ut=null,ct={};const kt=o.getParameter(o.SCISSOR_BOX),Zt=o.getParameter(o.VIEWPORT),k=new Je().fromArray(kt),ot=new Je().fromArray(Zt);function Dt(j,zt,Et,Ft){const Qt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(j,Tt),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let oe=0;oe<Et;oe++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Qt):o.texImage2D(zt+oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Qt);return Tt}const $={};$[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),f.setFunc(Zl),Nt(!1),Pt(vx),vt(o.CULL_FACE),Ot(Wa);function vt(j){_[j]!==!0&&(o.enable(j),_[j]=!0)}function At(j){_[j]!==!1&&(o.disable(j),_[j]=!1)}function pt(j,zt){return g[j]!==zt?(o.bindFramebuffer(j,zt),g[j]=zt,j===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=zt),j===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function K(j,zt){let Et=E,Ft=!1;if(j){Et=S.get(zt),Et===void 0&&(Et=[],S.set(zt,Et));const Qt=j.textures;if(Et.length!==Qt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,oe=Qt.length;Tt<oe;Tt++)Et[Tt]=o.COLOR_ATTACHMENT0+Tt;Et.length=Qt.length,Ft=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Et)}function mt(j){return A!==j?(o.useProgram(j),A=j,!0):!1}const Bt={[vo]:o.FUNC_ADD,[pb]:o.FUNC_SUBTRACT,[mb]:o.FUNC_REVERSE_SUBTRACT};Bt[gb]=o.MIN,Bt[vb]=o.MAX;const Ct={[_b]:o.ZERO,[xb]:o.ONE,[Sb]:o.SRC_COLOR,[US]:o.SRC_ALPHA,[wb]:o.SRC_ALPHA_SATURATE,[Eb]:o.DST_COLOR,[Mb]:o.DST_ALPHA,[yb]:o.ONE_MINUS_SRC_COLOR,[PS]:o.ONE_MINUS_SRC_ALPHA,[Tb]:o.ONE_MINUS_DST_COLOR,[bb]:o.ONE_MINUS_DST_ALPHA,[Ab]:o.CONSTANT_COLOR,[Rb]:o.ONE_MINUS_CONSTANT_COLOR,[Cb]:o.CONSTANT_ALPHA,[Db]:o.ONE_MINUS_CONSTANT_ALPHA};function Ot(j,zt,Et,Ft,Qt,Tt,oe,Kt,Ve,Ee){if(j===Wa){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(vt(o.BLEND),M=!0),j!==db){if(j!==y||Ee!==B){if((D!==vo||R!==vo)&&(o.blendEquation(o.FUNC_ADD),D=vo,R=vo),Ee)switch(j){case Vl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ql:o.blendFunc(o.ONE,o.ONE);break;case _x:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case xx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ye("WebGLState: Invalid blending: ",j);break}else switch(j){case Vl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ql:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case _x:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xx:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",j);break}O=null,T=null,L=null,P=null,b.set(0,0,0),U=0,y=j,B=Ee}return}Qt=Qt||zt,Tt=Tt||Et,oe=oe||Ft,(zt!==D||Qt!==R)&&(o.blendEquationSeparate(Bt[zt],Bt[Qt]),D=zt,R=Qt),(Et!==O||Ft!==T||Tt!==L||oe!==P)&&(o.blendFuncSeparate(Ct[Et],Ct[Ft],Ct[Tt],Ct[oe]),O=Et,T=Ft,L=Tt,P=oe),(Kt.equals(b)===!1||Ve!==U)&&(o.blendColor(Kt.r,Kt.g,Kt.b,Ve),b.copy(Kt),U=Ve),y=j,B=!1}function Lt(j,zt){j.side===si?At(o.CULL_FACE):vt(o.CULL_FACE);let Et=j.side===oi;zt&&(Et=!Et),Nt(Et),j.blending===Vl&&j.transparent===!1?Ot(Wa):Ot(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ft=j.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Me(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(j){I!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),I=j)}function Pt(j){j!==ub?(vt(o.CULL_FACE),j!==W&&(j===vx?o.cullFace(o.BACK):j===fb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),W=j}function he(j){j!==J&&(q&&o.lineWidth(j),J=j)}function Me(j,zt,Et){j?(vt(o.POLYGON_OFFSET_FILL),(X!==zt||V!==Et)&&(X=zt,V=Et,f.getReversed()&&(zt=-zt),o.polygonOffset(zt,Et))):At(o.POLYGON_OFFSET_FILL)}function de(j){j?vt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function me(j){j===void 0&&(j=o.TEXTURE0+H-1),ut!==j&&(o.activeTexture(j),ut=j)}function Y(j,zt,Et){Et===void 0&&(ut===null?Et=o.TEXTURE0+H-1:Et=ut);let Ft=ct[Et];Ft===void 0&&(Ft={type:void 0,texture:void 0},ct[Et]=Ft),(Ft.type!==j||Ft.texture!==zt)&&(ut!==Et&&(o.activeTexture(Et),ut=Et),o.bindTexture(j,zt||$[j]),Ft.type=j,Ft.texture=zt)}function Se(){const j=ct[ut];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function re(){try{o.compressedTexImage2D(...arguments)}catch(j){Ye("WebGLState:",j)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(j){Ye("WebGLState:",j)}}function w(){try{o.texSubImage2D(...arguments)}catch(j){Ye("WebGLState:",j)}}function it(){try{o.texSubImage3D(...arguments)}catch(j){Ye("WebGLState:",j)}}function et(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Ye("WebGLState:",j)}}function xt(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Ye("WebGLState:",j)}}function wt(){try{o.texStorage2D(...arguments)}catch(j){Ye("WebGLState:",j)}}function Ut(){try{o.texStorage3D(...arguments)}catch(j){Ye("WebGLState:",j)}}function St(){try{o.texImage2D(...arguments)}catch(j){Ye("WebGLState:",j)}}function Mt(){try{o.texImage3D(...arguments)}catch(j){Ye("WebGLState:",j)}}function It(j){return v[j]!==void 0?v[j]:o.getParameter(j)}function le(j,zt){v[j]!==zt&&(o.pixelStorei(j,zt),v[j]=zt)}function Wt(j){k.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),k.copy(j))}function Vt(j){ot.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),ot.copy(j))}function Jt(j,zt){let Et=m.get(zt);Et===void 0&&(Et=new WeakMap,m.set(zt,Et));let Ft=Et.get(j);Ft===void 0&&(Ft=o.getUniformBlockIndex(zt,j.name),Et.set(j,Ft))}function pe(j,zt){const Ft=m.get(zt).get(j);p.get(zt)!==Ft&&(o.uniformBlockBinding(zt,Ft,j.__bindingPointIndex),p.set(zt,Ft))}function be(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},ut=null,ct={},g={},S=new WeakMap,E=[],A=null,M=!1,y=null,D=null,O=null,T=null,R=null,L=null,P=null,b=new ve(0,0,0),U=0,B=!1,I=null,W=null,J=null,X=null,V=null,k.set(0,0,o.canvas.width,o.canvas.height),ot.set(0,0,o.canvas.width,o.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:vt,disable:At,bindFramebuffer:pt,drawBuffers:K,useProgram:mt,setBlending:Ot,setMaterial:Lt,setFlipSided:Nt,setCullFace:Pt,setLineWidth:he,setPolygonOffset:Me,setScissorTest:de,activeTexture:me,bindTexture:Y,unbindTexture:Se,compressedTexImage2D:re,compressedTexImage3D:z,texImage2D:St,texImage3D:Mt,pixelStorei:le,getParameter:It,updateUBOMapping:Jt,uniformBlockBinding:pe,texStorage2D:wt,texStorage3D:Ut,texSubImage2D:w,texSubImage3D:it,compressedTexSubImage2D:et,compressedTexSubImage3D:xt,scissor:Wt,viewport:Vt,reset:be}}function $3(o,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ce,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(z,w){return E?new OffscreenCanvas(z,w):cf("canvas")}function M(z,w,it){let et=1;const xt=re(z);if((xt.width>it||xt.height>it)&&(et=it/Math.max(xt.width,xt.height)),et<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const wt=Math.floor(et*xt.width),Ut=Math.floor(et*xt.height);g===void 0&&(g=A(wt,Ut));const St=w?A(wt,Ut):g;return St.width=wt,St.height=Ut,St.getContext("2d").drawImage(z,0,0,wt,Ut),ge("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+wt+"x"+Ut+")."),St}else return"data"in z&&ge("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function y(z){return z.generateMipmaps}function D(z){o.generateMipmap(z)}function O(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function T(z,w,it,et,xt,wt=!1){if(z!==null){if(o[z]!==void 0)return o[z];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ut;et&&(Ut=t.get("EXT_texture_norm16"),Ut||ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let St=w;if(w===o.RED&&(it===o.FLOAT&&(St=o.R32F),it===o.HALF_FLOAT&&(St=o.R16F),it===o.UNSIGNED_BYTE&&(St=o.R8),it===o.UNSIGNED_SHORT&&Ut&&(St=Ut.R16_EXT),it===o.SHORT&&Ut&&(St=Ut.R16_SNORM_EXT)),w===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.R8UI),it===o.UNSIGNED_SHORT&&(St=o.R16UI),it===o.UNSIGNED_INT&&(St=o.R32UI),it===o.BYTE&&(St=o.R8I),it===o.SHORT&&(St=o.R16I),it===o.INT&&(St=o.R32I)),w===o.RG&&(it===o.FLOAT&&(St=o.RG32F),it===o.HALF_FLOAT&&(St=o.RG16F),it===o.UNSIGNED_BYTE&&(St=o.RG8),it===o.UNSIGNED_SHORT&&Ut&&(St=Ut.RG16_EXT),it===o.SHORT&&Ut&&(St=Ut.RG16_SNORM_EXT)),w===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.RG8UI),it===o.UNSIGNED_SHORT&&(St=o.RG16UI),it===o.UNSIGNED_INT&&(St=o.RG32UI),it===o.BYTE&&(St=o.RG8I),it===o.SHORT&&(St=o.RG16I),it===o.INT&&(St=o.RG32I)),w===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.RGB8UI),it===o.UNSIGNED_SHORT&&(St=o.RGB16UI),it===o.UNSIGNED_INT&&(St=o.RGB32UI),it===o.BYTE&&(St=o.RGB8I),it===o.SHORT&&(St=o.RGB16I),it===o.INT&&(St=o.RGB32I)),w===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(St=o.RGBA16UI),it===o.UNSIGNED_INT&&(St=o.RGBA32UI),it===o.BYTE&&(St=o.RGBA8I),it===o.SHORT&&(St=o.RGBA16I),it===o.INT&&(St=o.RGBA32I)),w===o.RGB&&(it===o.UNSIGNED_SHORT&&Ut&&(St=Ut.RGB16_EXT),it===o.SHORT&&Ut&&(St=Ut.RGB16_SNORM_EXT),it===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(St=o.R11F_G11F_B10F)),w===o.RGBA){const Mt=wt?lf:We.getTransfer(xt);it===o.FLOAT&&(St=o.RGBA32F),it===o.HALF_FLOAT&&(St=o.RGBA16F),it===o.UNSIGNED_BYTE&&(St=Mt===nn?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT&&Ut&&(St=Ut.RGBA16_EXT),it===o.SHORT&&Ut&&(St=Ut.RGBA16_SNORM_EXT),it===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function R(z,w){let it;return z?w===null||w===ia||w===Jl?it=o.DEPTH24_STENCIL8:w===ki?it=o.DEPTH32F_STENCIL8:w===Ql&&(it=o.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ia||w===Jl?it=o.DEPTH_COMPONENT24:w===ki?it=o.DEPTH_COMPONENT32F:w===Ql&&(it=o.DEPTH_COMPONENT16),it}function L(z,w){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==kn&&z.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function P(z){const w=z.target;w.removeEventListener("dispose",P),U(w),w.isVideoTexture&&_.delete(w),w.isHTMLTexture&&v.delete(w)}function b(z){const w=z.target;w.removeEventListener("dispose",b),I(w)}function U(z){const w=s.get(z);if(w.__webglInit===void 0)return;const it=z.source,et=S.get(it);if(et){const xt=et[w.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&B(z),Object.keys(et).length===0&&S.delete(it)}s.remove(z)}function B(z){const w=s.get(z);o.deleteTexture(w.__webglTexture);const it=z.source,et=S.get(it);delete et[w.__cacheKey],f.memory.textures--}function I(z){const w=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let xt=0;xt<w.__webglFramebuffer[et].length;xt++)o.deleteFramebuffer(w.__webglFramebuffer[et][xt]);else o.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)o.deleteFramebuffer(w.__webglFramebuffer[et]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const it=z.textures;for(let et=0,xt=it.length;et<xt;et++){const wt=s.get(it[et]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),f.memory.textures--),s.remove(it[et])}s.remove(z)}let W=0;function J(){W=0}function X(){return W}function V(z){W=z}function H(){const z=W;return z>=l.maxTextures&&ge("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+l.maxTextures),W+=1,z}function q(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function rt(z,w){const it=s.get(z);if(z.isVideoTexture&&Y(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&it.__version!==z.version){const et=z.image;if(et===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{At(it,z,w);return}}else z.isExternalTexture&&(it.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+w)}function st(z,w){const it=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&it.__version!==z.version){At(it,z,w);return}else z.isExternalTexture&&(it.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+w)}function ut(z,w){const it=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&it.__version!==z.version){At(it,z,w);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+w)}function ct(z,w){const it=s.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&it.__version!==z.version){pt(it,z,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+w)}const kt={[Kl]:o.REPEAT,[Ci]:o.CLAMP_TO_EDGE,[Vp]:o.MIRRORED_REPEAT},Zt={[kn]:o.NEAREST,[Pb]:o.NEAREST_MIPMAP_NEAREST,[Tu]:o.NEAREST_MIPMAP_LINEAR,[vn]:o.LINEAR,[tp]:o.LINEAR_MIPMAP_NEAREST,[or]:o.LINEAR_MIPMAP_LINEAR},k={[Bb]:o.NEVER,[kb]:o.ALWAYS,[Fb]:o.LESS,[Im]:o.LEQUAL,[Hb]:o.EQUAL,[Bm]:o.GEQUAL,[Gb]:o.GREATER,[Vb]:o.NOTEQUAL};function ot(z,w){if(w.type===ki&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vn||w.magFilter===tp||w.magFilter===Tu||w.magFilter===or||w.minFilter===vn||w.minFilter===tp||w.minFilter===Tu||w.minFilter===or)&&ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,kt[w.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,kt[w.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,kt[w.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,Zt[w.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,Zt[w.minFilter]),w.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kn||w.minFilter!==Tu&&w.minFilter!==or||w.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Dt(z,w){let it=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",P));const et=w.source;let xt=S.get(et);xt===void 0&&(xt={},S.set(et,xt));const wt=q(w);if(wt!==z.__cacheKey){xt[wt]===void 0&&(xt[wt]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,it=!0),xt[wt].usedTimes++;const Ut=xt[z.__cacheKey];Ut!==void 0&&(xt[z.__cacheKey].usedTimes--,Ut.usedTimes===0&&B(w)),z.__cacheKey=wt,z.__webglTexture=xt[wt].texture}return it}function $(z,w,it){return Math.floor(Math.floor(z/it)/w)}function vt(z,w,it,et){const wt=z.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,it,et,w.data);else{wt.sort((le,Wt)=>le.start-Wt.start);let Ut=0;for(let le=1;le<wt.length;le++){const Wt=wt[Ut],Vt=wt[le],Jt=Wt.start+Wt.count,pe=$(Vt.start,w.width,4),be=$(Wt.start,w.width,4);Vt.start<=Jt+1&&pe===be&&$(Vt.start+Vt.count-1,w.width,4)===pe?Wt.count=Math.max(Wt.count,Vt.start+Vt.count-Wt.start):(++Ut,wt[Ut]=Vt)}wt.length=Ut+1;const St=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),It=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let le=0,Wt=wt.length;le<Wt;le++){const Vt=wt[le],Jt=Math.floor(Vt.start/4),pe=Math.ceil(Vt.count/4),be=Jt%w.width,j=Math.floor(Jt/w.width),zt=pe,Et=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,be),i.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,be,j,zt,Et,it,et,w.data)}z.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,St),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,It)}}function At(z,w,it){let et=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=o.TEXTURE_3D);const xt=Dt(z,w),wt=w.source;i.bindTexture(et,z.__webglTexture,o.TEXTURE0+it);const Ut=s.get(wt);if(wt.version!==Ut.__version||xt===!0){if(i.activeTexture(o.TEXTURE0+it),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Et=We.getPrimaries(We.workingColorSpace),Ft=w.colorSpace===Rs?null:We.getPrimaries(w.colorSpace),Qt=w.colorSpace===Rs||Et===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}i.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment);let Mt=M(w.image,!1,l.maxTextureSize);Mt=Se(w,Mt);const It=c.convert(w.format,w.colorSpace),le=c.convert(w.type);let Wt=T(w.internalFormat,It,le,w.normalized,w.colorSpace,w.isVideoTexture);ot(et,w);let Vt;const Jt=w.mipmaps,pe=w.isVideoTexture!==!0,be=Ut.__version===void 0||xt===!0,j=wt.dataReady,zt=L(w,Mt);if(w.isDepthTexture)Wt=R(w.format===lr,w.type),be&&(pe?i.texStorage2D(o.TEXTURE_2D,1,Wt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,It,le,null));else if(w.isDataTexture)if(Jt.length>0){pe&&be&&i.texStorage2D(o.TEXTURE_2D,zt,Wt,Jt[0].width,Jt[0].height);for(let Et=0,Ft=Jt.length;Et<Ft;Et++)Vt=Jt[Et],pe?j&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Vt.width,Vt.height,It,le,Vt.data):i.texImage2D(o.TEXTURE_2D,Et,Wt,Vt.width,Vt.height,0,It,le,Vt.data);w.generateMipmaps=!1}else pe?(be&&i.texStorage2D(o.TEXTURE_2D,zt,Wt,Mt.width,Mt.height),j&&vt(w,Mt,It,le)):i.texImage2D(o.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,It,le,Mt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){pe&&be&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Wt,Jt[0].width,Jt[0].height,Mt.depth);for(let Et=0,Ft=Jt.length;Et<Ft;Et++)if(Vt=Jt[Et],w.format!==ri)if(It!==null)if(pe){if(j)if(w.layerUpdates.size>0){const Qt=aS(Vt.width,Vt.height,w.format,w.type);for(const Tt of w.layerUpdates){const oe=Vt.data.subarray(Tt*Qt/Vt.data.BYTES_PER_ELEMENT,(Tt+1)*Qt/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,Tt,Vt.width,Vt.height,1,It,oe)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Vt.width,Vt.height,Mt.depth,It,Vt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Wt,Vt.width,Vt.height,Mt.depth,0,Vt.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?j&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Vt.width,Vt.height,Mt.depth,It,le,Vt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Wt,Vt.width,Vt.height,Mt.depth,0,It,le,Vt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{pe&&be&&i.texStorage2D(o.TEXTURE_2D,zt,Wt,Jt[0].width,Jt[0].height);for(let Et=0,Ft=Jt.length;Et<Ft;Et++)Vt=Jt[Et],w.format!==ri?It!==null?pe?j&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Vt.width,Vt.height,It,Vt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Wt,Vt.width,Vt.height,0,Vt.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?j&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Vt.width,Vt.height,It,le,Vt.data):i.texImage2D(o.TEXTURE_2D,Et,Wt,Vt.width,Vt.height,0,It,le,Vt.data)}else if(w.isDataArrayTexture)if(pe){if(be&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Wt,Mt.width,Mt.height,Mt.depth),j)if(w.layerUpdates.size>0){const Et=aS(Mt.width,Mt.height,w.format,w.type);for(const Ft of w.layerUpdates){const Qt=Mt.data.subarray(Ft*Et/Mt.data.BYTES_PER_ELEMENT,(Ft+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ft,Mt.width,Mt.height,1,It,le,Qt)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,le,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,Mt.width,Mt.height,Mt.depth,0,It,le,Mt.data);else if(w.isData3DTexture)pe?(be&&i.texStorage3D(o.TEXTURE_3D,zt,Wt,Mt.width,Mt.height,Mt.depth),j&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,le,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Wt,Mt.width,Mt.height,Mt.depth,0,It,le,Mt.data);else if(w.isFramebufferTexture){if(be)if(pe)i.texStorage2D(o.TEXTURE_2D,zt,Wt,Mt.width,Mt.height);else{let Et=Mt.width,Ft=Mt.height;for(let Qt=0;Qt<zt;Qt++)i.texImage2D(o.TEXTURE_2D,Qt,Wt,Et,Ft,0,It,le,null),Et>>=1,Ft>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in o){const Et=o.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),Mt.parentNode!==Et){Et.appendChild(Mt),v.add(w),Et.onpaint=Ft=>{const Qt=Ft.changedElements;for(const Tt of v)Qt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Et.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Qt=o.RGBA,Tt=o.RGBA,oe=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Qt,Tt,oe,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(pe&&be){const Et=re(Jt[0]);i.texStorage2D(o.TEXTURE_2D,zt,Wt,Et.width,Et.height)}for(let Et=0,Ft=Jt.length;Et<Ft;Et++)Vt=Jt[Et],pe?j&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,It,le,Vt):i.texImage2D(o.TEXTURE_2D,Et,Wt,It,le,Vt);w.generateMipmaps=!1}else if(pe){if(be){const Et=re(Mt);i.texStorage2D(o.TEXTURE_2D,zt,Wt,Et.width,Et.height)}j&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,le,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Wt,It,le,Mt);y(w)&&D(et),Ut.__version=wt.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function pt(z,w,it){if(w.image.length!==6)return;const et=Dt(z,w),xt=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+it);const wt=s.get(xt);if(xt.version!==wt.__version||et===!0){i.activeTexture(o.TEXTURE0+it);const Ut=We.getPrimaries(We.workingColorSpace),St=w.colorSpace===Rs?null:We.getPrimaries(w.colorSpace),Mt=w.colorSpace===Rs||Ut===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const It=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Wt=[];for(let Tt=0;Tt<6;Tt++)!It&&!le?Wt[Tt]=M(w.image[Tt],!0,l.maxCubemapSize):Wt[Tt]=le?w.image[Tt].image:w.image[Tt],Wt[Tt]=Se(w,Wt[Tt]);const Vt=Wt[0],Jt=c.convert(w.format,w.colorSpace),pe=c.convert(w.type),be=T(w.internalFormat,Jt,pe,w.normalized,w.colorSpace),j=w.isVideoTexture!==!0,zt=wt.__version===void 0||et===!0,Et=xt.dataReady;let Ft=L(w,Vt);ot(o.TEXTURE_CUBE_MAP,w);let Qt;if(It){j&&zt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,be,Vt.width,Vt.height);for(let Tt=0;Tt<6;Tt++){Qt=Wt[Tt].mipmaps;for(let oe=0;oe<Qt.length;oe++){const Kt=Qt[oe];w.format!==ri?Jt!==null?j?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,Kt.width,Kt.height,Jt,Kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,be,Kt.width,Kt.height,0,Kt.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,Kt.width,Kt.height,Jt,pe,Kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,be,Kt.width,Kt.height,0,Jt,pe,Kt.data)}}}else{if(Qt=w.mipmaps,j&&zt){Qt.length>0&&Ft++;const Tt=re(Wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,be,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(le){j?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Wt[Tt].width,Wt[Tt].height,Jt,pe,Wt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,be,Wt[Tt].width,Wt[Tt].height,0,Jt,pe,Wt[Tt].data);for(let oe=0;oe<Qt.length;oe++){const Ve=Qt[oe].image[Tt].image;j?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,Ve.width,Ve.height,Jt,pe,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,be,Ve.width,Ve.height,0,Jt,pe,Ve.data)}}else{j?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Jt,pe,Wt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,be,Jt,pe,Wt[Tt]);for(let oe=0;oe<Qt.length;oe++){const Kt=Qt[oe];j?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,Jt,pe,Kt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,be,Jt,pe,Kt.image[Tt])}}}y(w)&&D(o.TEXTURE_CUBE_MAP),wt.__version=xt.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function K(z,w,it,et,xt,wt){const Ut=c.convert(it.format,it.colorSpace),St=c.convert(it.type),Mt=T(it.internalFormat,Ut,St,it.normalized,it.colorSpace),It=s.get(w),le=s.get(it);if(le.__renderTarget=w,!It.__hasExternalTextures){const Wt=Math.max(1,w.width>>wt),Vt=Math.max(1,w.height>>wt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,wt,Mt,Wt,Vt,w.depth,0,Ut,St,null):i.texImage2D(xt,wt,Mt,Wt,Vt,0,Ut,St,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),me(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,et,xt,le.__webglTexture,0,de(w)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,et,xt,le.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function mt(z,w,it){if(o.bindRenderbuffer(o.RENDERBUFFER,z),w.depthBuffer){const et=w.depthTexture,xt=et&&et.isDepthTexture?et.type:null,wt=R(w.stencilBuffer,xt),Ut=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;me(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de(w),wt,w.width,w.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,de(w),wt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,wt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,z)}else{const et=w.textures;for(let xt=0;xt<et.length;xt++){const wt=et[xt],Ut=c.convert(wt.format,wt.colorSpace),St=c.convert(wt.type),Mt=T(wt.internalFormat,Ut,St,wt.normalized,wt.colorSpace);me(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de(w),Mt,w.width,w.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,de(w),Mt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(z,w,it){const et=w.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xt=s.get(w.depthTexture);if(xt.__renderTarget=w,(!xt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),et){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,w.depthTexture.addEventListener("dispose",P)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),ot(o.TEXTURE_CUBE_MAP,w.depthTexture);const It=c.convert(w.depthTexture.format),le=c.convert(w.depthTexture.type);let Wt;w.depthTexture.format===Ya?Wt=o.DEPTH_COMPONENT24:w.depthTexture.format===lr&&(Wt=o.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Wt,w.width,w.height,0,It,le,null)}}else rt(w.depthTexture,0);const wt=xt.__webglTexture,Ut=de(w),St=et?o.TEXTURE_CUBE_MAP_POSITIVE_X+it:o.TEXTURE_2D,Mt=w.depthTexture.format===lr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ya)me(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,St,wt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,St,wt,0);else if(w.depthTexture.format===lr)me(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,St,wt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,St,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ct(z){const w=s.get(z),it=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){const et=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){const xt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",xt)};et.addEventListener("dispose",xt),w.__depthDisposeCallback=xt}w.__boundDepthTexture=et}if(z.depthTexture&&!w.__autoAllocateDepthBuffer)if(it)for(let et=0;et<6;et++)Bt(w.__webglFramebuffer[et],z,et);else{const et=z.texture.mipmaps;et&&et.length>0?Bt(w.__webglFramebuffer[0],z,0):Bt(w.__webglFramebuffer,z,0)}else if(it){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=o.createRenderbuffer(),mt(w.__webglDepthbuffer[et],z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=w.__webglDepthbuffer[et];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,wt)}}else{const et=z.texture.mipmaps;if(et&&et.length>0?i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),mt(w.__webglDepthbuffer,z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,wt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(z,w,it){const et=s.get(z);w!==void 0&&K(et.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Ct(z)}function Lt(z){const w=z.texture,it=s.get(z),et=s.get(w);z.addEventListener("dispose",b);const xt=z.textures,wt=z.isWebGLCubeRenderTarget===!0,Ut=xt.length>1;if(Ut||(et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture()),et.__version=w.version,f.memory.textures++),wt){it.__webglFramebuffer=[];for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0){it.__webglFramebuffer[St]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)it.__webglFramebuffer[St][Mt]=o.createFramebuffer()}else it.__webglFramebuffer[St]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){it.__webglFramebuffer=[];for(let St=0;St<w.mipmaps.length;St++)it.__webglFramebuffer[St]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let St=0,Mt=xt.length;St<Mt;St++){const It=s.get(xt[St]);It.__webglTexture===void 0&&(It.__webglTexture=o.createTexture(),f.memory.textures++)}if(z.samples>0&&me(z)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let St=0;St<xt.length;St++){const Mt=xt[St];it.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[St]);const It=c.convert(Mt.format,Mt.colorSpace),le=c.convert(Mt.type),Wt=T(Mt.internalFormat,It,le,Mt.normalized,Mt.colorSpace,z.isXRRenderTarget===!0),Vt=de(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Wt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,it.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),mt(it.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture),ot(o.TEXTURE_CUBE_MAP,w);for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)K(it.__webglFramebuffer[St][Mt],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Mt);else K(it.__webglFramebuffer[St],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);y(w)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let St=0,Mt=xt.length;St<Mt;St++){const It=xt[St],le=s.get(It);let Wt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Wt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Wt,le.__webglTexture),ot(Wt,It),K(it.__webglFramebuffer,z,It,o.COLOR_ATTACHMENT0+St,Wt,0),y(It)&&D(Wt)}i.unbindTexture()}else{let St=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(St=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,et.__webglTexture),ot(St,w),w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)K(it.__webglFramebuffer[Mt],z,w,o.COLOR_ATTACHMENT0,St,Mt);else K(it.__webglFramebuffer,z,w,o.COLOR_ATTACHMENT0,St,0);y(w)&&D(St),i.unbindTexture()}z.depthBuffer&&Ct(z)}function Nt(z){const w=z.textures;for(let it=0,et=w.length;it<et;it++){const xt=w[it];if(y(xt)){const wt=O(z),Ut=s.get(xt).__webglTexture;i.bindTexture(wt,Ut),D(wt),i.unbindTexture()}}}const Pt=[],he=[];function Me(z){if(z.samples>0){if(me(z)===!1){const w=z.textures,it=z.width,et=z.height;let xt=o.COLOR_BUFFER_BIT;const wt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=s.get(z),St=w.length>1;if(St)for(let It=0;It<w.length;It++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Mt=z.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let It=0;It<w.length;It++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),St){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[It]);const le=s.get(w[It]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,le,0)}o.blitFramebuffer(0,0,it,et,0,0,it,et,xt,o.NEAREST),p===!0&&(Pt.length=0,he.length=0,Pt.push(o.COLOR_ATTACHMENT0+It),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Pt.push(wt),he.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let It=0;It<w.length;It++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[It]);const le=s.get(w[It]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,le,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&p){const w=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function de(z){return Math.min(l.maxSamples,z.samples)}function me(z){const w=s.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Y(z){const w=f.render.frame;_.get(z)!==w&&(_.set(z,w),z.update())}function Se(z,w){const it=z.colorSpace,et=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||it!==of&&it!==Rs&&(We.getTransfer(it)===nn?(et!==ri||xt!==Kn)&&ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",it)),w}function re(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=H,this.resetTextureUnits=J,this.getTextureUnits=X,this.setTextureUnits=V,this.setTexture2D=rt,this.setTexture2DArray=st,this.setTexture3D=ut,this.setTextureCube=ct,this.rebindTextures=Ot,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=K,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function tR(o,t){function i(s,l=Rs){let c;const f=We.getTransfer(l);if(s===Kn)return o.UNSIGNED_BYTE;if(s===Nm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Lm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===YS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===qS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===WS)return o.BYTE;if(s===XS)return o.SHORT;if(s===Ql)return o.UNSIGNED_SHORT;if(s===Dm)return o.INT;if(s===ia)return o.UNSIGNED_INT;if(s===ki)return o.FLOAT;if(s===aa)return o.HALF_FLOAT;if(s===ZS)return o.ALPHA;if(s===KS)return o.RGB;if(s===ri)return o.RGBA;if(s===Ya)return o.DEPTH_COMPONENT;if(s===lr)return o.DEPTH_STENCIL;if(s===Um)return o.RED;if(s===Pm)return o.RED_INTEGER;if(s===fr)return o.RG;if(s===Om)return o.RG_INTEGER;if(s===zm)return o.RGBA_INTEGER;if(s===$u||s===tf||s===ef||s===nf)if(f===nn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ef)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ef)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kp||s===Wp||s===Xp||s===Yp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===kp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qp||s===Zp||s===Kp||s===Qp||s===Jp||s===sf||s===jp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qp||s===Zp)return f===nn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Kp)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Qp)return c.COMPRESSED_R11_EAC;if(s===Jp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===sf)return c.COMPRESSED_RG11_EAC;if(s===jp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm||s===cm||s===um||s===fm||s===hm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===$p)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===em)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===im)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===am)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===om)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===um)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hm)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dm||s===pm||s===mm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===dm)return f===nn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gm||s===vm||s===rf||s===_m)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===gm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===vm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_m)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const eR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ny(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Pn({vertexShader:eR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ne(new mi(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aR extends hr{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,g=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",M=new iR,y={},D=i.getContextAttributes();let O=null,T=null;const R=[],L=[],P=new ce;let b=null,U=null;const B=new Vi;B.viewport=new Je;const I=new Vi;I.viewport=new Je;const W=[B,I],J=new hT;let X=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let vt=R[$];return vt===void 0&&(vt=new op,R[$]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function($){let vt=R[$];return vt===void 0&&(vt=new op,R[$]=vt),vt.getGripSpace()},this.getHand=function($){let vt=R[$];return vt===void 0&&(vt=new op,R[$]=vt),vt.getHandSpace()};function H($){const vt=L.indexOf($.inputSource);if(vt===-1)return;const At=R[vt];At!==void 0&&(At.update($.inputSource,$.frame,m||f),At.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){l.removeEventListener("select",H),l.removeEventListener("selectstart",H),l.removeEventListener("selectend",H),l.removeEventListener("squeeze",H),l.removeEventListener("squeezestart",H),l.removeEventListener("squeezeend",H),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",rt);for(let $=0;$<R.length;$++){const vt=L[$];vt!==null&&(L[$]=null,R[$].disconnect(vt))}X=null,V=null,M.reset();for(const $ in y)delete y[$];if(t.setRenderTarget(O),S=null,g=null,v=null,l=null,T=null,Dt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),U!==null){const $=U.camera;$.fov=U.fov,$.zoom=U.zoom,$.updateProjectionMatrix(),U=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",H),l.addEventListener("selectstart",H),l.addEventListener("selectend",H),l.addEventListener("squeeze",H),l.addEventListener("squeezestart",H),l.addEventListener("squeezeend",H),l.addEventListener("end",q),l.addEventListener("inputsourceschange",rt),D.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,pt=null,K=null;D.depth&&(K=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=D.stencil?lr:Ya,pt=D.stencil?Jl:ia);const mt={colorFormat:i.RGBA8,depthFormat:K,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(mt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),T=new pi(g.textureWidth,g.textureHeight,{format:ri,type:Kn,depthTexture:new Ro(g.textureWidth,g.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const At={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new pi(S.framebufferWidth,S.framebufferHeight,{format:ri,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function rt($){for(let vt=0;vt<$.removed.length;vt++){const At=$.removed[vt],pt=L.indexOf(At);pt>=0&&(L[pt]=null,R[pt].disconnect(At))}for(let vt=0;vt<$.added.length;vt++){const At=$.added[vt];let pt=L.indexOf(At);if(pt===-1){for(let mt=0;mt<R.length;mt++)if(mt>=L.length){L.push(At),pt=mt;break}else if(L[mt]===null){L[mt]=At,pt=mt;break}if(pt===-1)break}const K=R[pt];K&&K.connect(At)}}const st=new F,ut=new F;function ct($,vt,At){st.setFromMatrixPosition(vt.matrixWorld),ut.setFromMatrixPosition(At.matrixWorld);const pt=st.distanceTo(ut),K=vt.projectionMatrix.elements,mt=At.projectionMatrix.elements,Bt=K[14]/(K[10]-1),Ct=K[14]/(K[10]+1),Ot=(K[9]+1)/K[5],Lt=(K[9]-1)/K[5],Nt=(K[8]-1)/K[0],Pt=(mt[8]+1)/mt[0],he=Bt*Nt,Me=Bt*Pt,de=pt/(-Nt+Pt),me=de*-Nt;if(vt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(de),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),K[10]===-1)$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Y=Bt+de,Se=Ct+de,re=he-me,z=Me+(pt-me),w=Ot*Ct/Se*Y,it=Lt*Ct/Se*Y;$.projectionMatrix.makePerspective(re,z,w,it,Y,Se),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function kt($,vt){vt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(vt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let vt=$.near,At=$.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),J.near=I.near=B.near=vt,J.far=I.far=B.far=At,(X!==J.near||V!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),X=J.near,V=J.far),J.layers.mask=$.layers.mask|6,B.layers.mask=J.layers.mask&-5,I.layers.mask=J.layers.mask&-3;const pt=$.parent,K=J.cameras;kt(J,pt);for(let mt=0;mt<K.length;mt++)kt(K[mt],pt);K.length===2?ct(J,B,I):J.projectionMatrix.copy(B.projectionMatrix),U===null&&$.isPerspectiveCamera&&(U={camera:$,fov:$.fov,zoom:$.zoom}),Zt($,J,pt)};function Zt($,vt,At){At===null?$.matrix.copy(vt.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(vt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$l*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function($){p=$,g!==null&&(g.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function($){return y[$]};let k=null;function ot($,vt){if(_=vt.getViewerPose(m||f),E=vt,_!==null){const At=_.views;S!==null&&(t.setRenderTargetFramebuffer(T,S.framebuffer),t.setRenderTarget(T));let pt=!1;At.length!==J.cameras.length&&(J.cameras.length=0,pt=!0);for(let Ct=0;Ct<At.length;Ct++){const Ot=At[Ct];let Lt=null;if(S!==null)Lt=S.getViewport(Ot);else{const Pt=v.getViewSubImage(g,Ot);Lt=Pt.viewport,Ct===0&&(t.setRenderTargetTextures(T,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(T))}let Nt=W[Ct];Nt===void 0&&(Nt=new Vi,Nt.layers.enable(Ct),Nt.viewport=new Je,W[Ct]=Nt),Nt.matrix.fromArray(Ot.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ot.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ct===0&&(J.matrix.copy(Nt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),pt===!0&&J.cameras.push(Nt)}const K=l.enabledFeatures;if(K&&K.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const Ct=v.getDepthInformation(At[0]);Ct&&Ct.isValid&&Ct.texture&&M.init(Ct,l.renderState)}if(K&&K.includes("camera-access")&&A){t.state.unbindTexture(),v=s.getBinding();for(let Ct=0;Ct<At.length;Ct++){const Ot=At[Ct].camera;if(Ot){let Lt=y[Ot];Lt||(Lt=new ny,y[Ot]=Lt);const Nt=v.getCameraImage(Ot);Lt.sourceTexture=Nt}}}}for(let At=0;At<R.length;At++){const pt=L[At],K=R[At];pt!==null&&K!==void 0&&K.update(pt,vt,m||f)}k&&k($,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),E=null}const Dt=new cy;Dt.setAnimationLoop(ot),this.setAnimationLoop=function($){k=$},this.dispose=function(){}}}const sR=new Be,gy=new we;gy.set(-1,0,0,0,1,0,0,0,1);function rR(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,sy(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,D,O,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,T)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,D,O):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===oi&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===oi&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),O=D.envMap,T=D.envMapRotation;O&&(M.envMap.value=O,M.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(T)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(gy),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,D,O){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=O*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===oi&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function oR(o,t,i,s){let l={},c={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,R){const L=R.program;s.uniformBlockBinding(T,L)}function m(T,R){let L=l[T.id];L===void 0&&(M(T),L=_(T),l[T.id]=L,T.addEventListener("dispose",D));const P=R.program;s.updateUBOMapping(T,P);const b=t.render.frame;c[T.id]!==b&&(g(T),c[T.id]=b)}function _(T){const R=v();T.__bindingPointIndex=R;const L=o.createBuffer(),P=T.__size,b=T.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,L),L}function v(){for(let T=0;T<d;T++)if(f.indexOf(T)===-1)return f.push(T),T;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const R=l[T.id],L=T.uniforms,P=T.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let b=0,U=L.length;b<U;b++){const B=L[b];if(Array.isArray(B))for(let I=0,W=B.length;I<W;I++)S(B[I],b,I,P);else S(B,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(T,R,L,P){if(A(T,R,L,P)===!0){const b=T.__offset,U=T.value;if(Array.isArray(U)){let B=0;for(let I=0;I<U.length;I++){const W=U[I],J=y(W);E(W,T.__data,B),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,T.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,T.__data)}}function E(T,R,L){typeof T=="number"||typeof T=="boolean"?R[0]=T:T.isMatrix3?(R[0]=T.elements[0],R[1]=T.elements[1],R[2]=T.elements[2],R[3]=0,R[4]=T.elements[3],R[5]=T.elements[4],R[6]=T.elements[5],R[7]=0,R[8]=T.elements[6],R[9]=T.elements[7],R[10]=T.elements[8],R[11]=0):ArrayBuffer.isView(T)?R.set(new T.constructor(T.buffer,T.byteOffset,R.length)):T.toArray(R,L)}function A(T,R,L,P){const b=T.value,U=R+"_"+L;if(P[U]===void 0)return typeof b=="number"||typeof b=="boolean"?P[U]=b:ArrayBuffer.isView(b)?P[U]=b.slice():P[U]=b.clone(),!0;{const B=P[U];if(typeof b=="number"||typeof b=="boolean"){if(B!==b)return P[U]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(B.equals(b)===!1)return B.copy(b),!0}}return!1}function M(T){const R=T.uniforms;let L=0;const P=16;for(let U=0,B=R.length;U<B;U++){const I=Array.isArray(R[U])?R[U]:[R[U]];for(let W=0,J=I.length;W<J;W++){const X=I[W],V=Array.isArray(X.value)?X.value:[X.value];for(let H=0,q=V.length;H<q;H++){const rt=V[H],st=y(rt),ut=L%P,ct=ut%st.boundary,kt=ut+ct;L+=ct,kt!==0&&P-kt<st.storage&&(L+=P-kt),X.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=L,L+=st.storage}}}const b=L%P;return b>0&&(L+=P-b),T.__size=L,T.__cache={},this}function y(T){const R={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(R.boundary=4,R.storage=4):T.isVector2?(R.boundary=8,R.storage=8):T.isVector3||T.isColor?(R.boundary=16,R.storage=12):T.isVector4?(R.boundary=16,R.storage=16):T.isMatrix3?(R.boundary=48,R.storage=48):T.isMatrix4?(R.boundary=64,R.storage=64):T.isTexture?ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(R.boundary=16,R.storage=T.byteLength):ge("WebGLRenderer: Unsupported uniform value type.",T),R}function D(T){const R=T.target;R.removeEventListener("dispose",D);const L=f.indexOf(R.__bindingPointIndex);f.splice(L,1),o.deleteBuffer(l[R.id]),delete l[R.id],delete c[R.id]}function O(){for(const T in l)o.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:p,update:m,dispose:O}}const lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sa=null;function cR(){return Sa===null&&(Sa=new vf(lR,16,16,fr,aa),Sa.name="DFG_LUT",Sa.minFilter=vn,Sa.magFilter=vn,Sa.wrapS=Ci,Sa.wrapT=Ci,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class uR{constructor(t={}){const{canvas:i=Yb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Kn}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=S,M=new Set([zm,Om,Pm]),y=new Set([Kn,ia,Ql,Jl,Nm,Lm]),D=new Uint32Array(4),O=new Int32Array(4),T=new F;let R=null,L=null;const P=[],b=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let I=!1,W=null,J=null,X=null,V=null;this._outputColorSpace=ai;let H=0,q=0,rt=null,st=-1,ut=null;const ct=new Je,kt=new Je;let Zt=null;const k=new ve(0);let ot=0,Dt=i.width,$=i.height,vt=1,At=null,pt=null;const K=new Je(0,0,Dt,$),mt=new Je(0,0,Dt,$);let Bt=!1;const Ct=new Xm;let Ot=!1,Lt=!1;const Nt=new Be,Pt=new F,he=new Je,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function me(){return rt===null?vt:1}let Y=s;function Se(C,Z){return i.getContext(C,Z)}let re,z,w,it,et,xt,wt,Ut,St,Mt,It,le,Wt,Vt,Jt,pe,be,j,zt,Et,Ft,Qt,Tt;try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cm}`),i.addEventListener("webglcontextlost",Ve,!1),i.addEventListener("webglcontextrestored",Ee,!1),i.addEventListener("webglcontextcreationerror",gi,!1),Y===null){const Z="webgl2";if(Y=Se(Z,C),Y===null)throw Se(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(C){throw i.removeEventListener("webglcontextlost",Ve,!1),i.removeEventListener("webglcontextrestored",Ee,!1),i.removeEventListener("webglcontextcreationerror",gi,!1),Ye("WebGLRenderer: "+C.message),C}function oe(){re=new cA(Y),re.init(),Ft=new tR(Y,re),z=new $w(Y,re,t,Ft),w=new j3(Y,re),z.reversedDepthBuffer&&g&&w.buffers.depth.setReversed(!0),J=Y.createFramebuffer(),X=Y.createFramebuffer(),V=Y.createFramebuffer(),it=new hA(Y),et=new B3,xt=new $3(Y,re,w,et,z,Ft,it),wt=new lA(B),Ut=new pT(Y),Qt=new Jw(Y,Ut),St=new uA(Y,Ut,it,Qt),Mt=new pA(Y,St,Ut,Qt,it),j=new dA(Y,z,xt),Jt=new tA(et),It=new I3(B,wt,re,z,Qt,Jt),le=new rR(B,et),Wt=new H3,Vt=new Y3(re),be=new Qw(B,wt,w,Mt,E,p),pe=new J3(B,Mt,z),Tt=new oR(Y,it,z,w),zt=new jw(Y,re,it),Et=new fA(Y,re,it),it.programs=It.programs,B.capabilities=z,B.extensions=re,B.properties=et,B.renderLists=Wt,B.shadowMap=pe,B.state=w,B.info=it}A!==Kn&&(U=new gA(A,i.width,i.height,d,l,c));const Kt=new aR(B,Y);this.xr=Kt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize(Dt,$,!1))},this.getSize=function(C){return C.set(Dt,$)},this.setSize=function(C,Z,_t=!0){if(Kt.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Dt=C,$=Z,i.width=Math.floor(C*vt),i.height=Math.floor(Z*vt),_t===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(Dt*vt,$*vt).floor()},this.setDrawingBufferSize=function(C,Z,_t){Dt=C,$=Z,vt=_t,i.width=Math.floor(C*_t),i.height=Math.floor(Z*_t),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(A===Kn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ct)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,Z,_t,ft){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,Z,_t,ft),w.viewport(ct.copy(K).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(mt)},this.setScissor=function(C,Z,_t,ft){C.isVector4?mt.set(C.x,C.y,C.z,C.w):mt.set(C,Z,_t,ft),w.scissor(kt.copy(mt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(C){w.setScissorTest(Bt=C)},this.setOpaqueSort=function(C){At=C},this.setTransparentSort=function(C){pt=C},this.getClearColor=function(C){return C.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,_t=!0){let ft=0;if(C){let ht=!1;if(rt!==null){const Xt=rt.texture.format;ht=M.has(Xt)}if(ht){const Xt=rt.texture.type,jt=y.has(Xt),Ht=be.getClearColor(),ee=be.getClearAlpha(),ie=Ht.r,xe=Ht.g,Te=Ht.b;jt?(D[0]=ie,D[1]=xe,D[2]=Te,D[3]=ee,Y.clearBufferuiv(Y.COLOR,0,D)):(O[0]=ie,O[1]=xe,O[2]=Te,O[3]=ee,Y.clearBufferiv(Y.COLOR,0,O))}else ft|=Y.COLOR_BUFFER_BIT}Z&&(ft|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_t&&(ft|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft!==0&&Y.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),W=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Ve,!1),i.removeEventListener("webglcontextrestored",Ee,!1),i.removeEventListener("webglcontextcreationerror",gi,!1),be.dispose(),Wt.dispose(),Vt.dispose(),et.dispose(),wt.dispose(),Mt.dispose(),Qt.dispose(),Tt.dispose(),It.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Us),Kt.removeEventListener("sessionend",Ka),sa.stop()};function Ve(C){C.preventDefault(),bx("WebGLRenderer: Context Lost."),I=!0}function Ee(){bx("WebGLRenderer: Context Restored."),I=!1;const C=it.autoReset,Z=pe.enabled,_t=pe.autoUpdate,ft=pe.needsUpdate,ht=pe.type;oe(),it.autoReset=C,pe.enabled=Z,pe.autoUpdate=_t,pe.needsUpdate=ft,pe.type=ht}function gi(C){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Di(C){const Z=C.target;Z.removeEventListener("dispose",Di),yf(Z)}function yf(C){mr(C),et.remove(C)}function mr(C){const Z=et.get(C).programs;Z!==void 0&&(Z.forEach(function(_t){It.releaseProgram(_t)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,_t,ft,ht,Xt){Z===null&&(Z=Me);const jt=ht.isMesh&&ht.matrixWorld.determinantAffine()<0,Ht=Io(C,Z,_t,ft,ht);w.setMaterial(ft,jt);let ee=_t.index,ie=1;if(ft.wireframe===!0){if(ee=St.getWireframeAttribute(_t),ee===void 0)return;ie=2}const xe=_t.drawRange,Te=_t.attributes.position;let $t=xe.start*ie,Pe=(xe.start+xe.count)*ie;Xt!==null&&($t=Math.max($t,Xt.start*ie),Pe=Math.min(Pe,(Xt.start+Xt.count)*ie)),ee!==null?($t=Math.max($t,0),Pe=Math.min(Pe,ee.count)):Te!=null&&($t=Math.max($t,0),Pe=Math.min(Pe,Te.count));const De=Pe-$t;if(De<0||De===1/0)return;Qt.setup(ht,ft,Ht,_t,ee);let an,Ke=zt;if(ee!==null&&(an=Ut.get(ee),Ke=Et,Ke.setIndex(an)),ht.isMesh)ft.wireframe===!0?(w.setLineWidth(ft.wireframeLinewidth*me()),Ke.setMode(Y.LINES)):Ke.setMode(Y.TRIANGLES);else if(ht.isLine){let Tn=ft.linewidth;Tn===void 0&&(Tn=1),w.setLineWidth(Tn*me()),ht.isLineSegments?Ke.setMode(Y.LINES):ht.isLineLoop?Ke.setMode(Y.LINE_LOOP):Ke.setMode(Y.LINE_STRIP)}else ht.isPoints?Ke.setMode(Y.POINTS):ht.isSprite&&Ke.setMode(Y.TRIANGLES);if(ht.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ke.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{const Tn=ht._multiDrawStarts,Yt=ht._multiDrawCounts,dn=ht._multiDrawCount,ke=ee?Ut.get(ee).bytesPerElement:1,Jn=et.get(ft).currentProgram.getUniforms();for(let vi=0;vi<dn;vi++)Jn.setValue(Y,"_gl_DrawID",vi),Ke.render(Tn[vi]/ke,Yt[vi])}else if(ht.isInstancedMesh)Ke.renderInstances($t,De,ht.count);else if(_t.isInstancedBufferGeometry){const Tn=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,Yt=Math.min(_t.instanceCount,Tn);Ke.renderInstances($t,De,Yt)}else Ke.render($t,De)};function Ls(C,Z,_t,ft){W!==null&&C.isNodeMaterial&&W.setObject(ft,C),Ot===!0&&Jt.setState(C,_t,!1),C.transparent===!0&&C.side===si&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,Ps(C,Z,ft),C.side=cr,C.needsUpdate=!0,Ps(C,Z,ft),C.side=si):Ps(C,Z,ft)}this.compile=function(C,Z,_t=null){_t===null&&(_t=C),W!==null&&W.renderStart(C,Z,_t),L=Vt.get(_t),L.init(Z),b.push(L),_t.traverseVisible(function(ht){ht.isLight&&ht.layers.test(Z.layers)&&(L.pushLight(ht),ht.castShadow&&L.pushShadow(ht))}),C!==_t&&C.traverseVisible(function(ht){ht.isLight&&ht.layers.test(Z.layers)&&(L.pushLight(ht),ht.castShadow&&L.pushShadow(ht))}),L.setupLights(),W!==null&&W.updateLights(L.state.lightsArray),Lt=this.localClippingEnabled,Ot=Jt.init(this.clippingPlanes,Lt),Ot===!0&&Jt.setGlobalState(this.clippingPlanes,Z),W!==null&&pe.render(L.state.shadowsArray,_t,Z);const ft=new Set;return C.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;const Xt=ht.material;if(Xt)if(Array.isArray(Xt))for(let jt=0;jt<Xt.length;jt++){const Ht=Xt[jt];Ls(Ht,_t,Z,ht),ft.add(Ht)}else Ls(Xt,_t,Z,ht),ft.add(Xt)}),L=b.pop(),W!==null&&W.renderEnd(),ft},this.compileAsync=function(C,Z,_t=null){const ft=this.compile(C,Z,_t);return new Promise(ht=>{function Xt(){if(ft.forEach(function(jt){const ee=et.get(jt).currentProgram;(ee===void 0||ee.isReady())&&ft.delete(jt)}),ft.size===0){ht(C);return}setTimeout(Xt,10)}re.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let Za=null;function Ea(C){Za&&Za(C)}function Us(){sa.stop()}function Ka(){sa.start()}const sa=new cy;sa.setAnimationLoop(Ea),typeof self<"u"&&sa.setContext(self),this.setAnimationLoop=function(C){Za=C,Kt.setAnimationLoop(C),C===null?sa.stop():sa.start()},Kt.addEventListener("sessionstart",Us),Kt.addEventListener("sessionend",Ka),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;W!==null&&W.renderStart(C,Z);const _t=Kt.enabled===!0&&Kt.isPresenting===!0,ft=U!==null&&(rt===null||_t)&&U.begin(B,rt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(Z),Z=Kt.getCamera()),C.isScene===!0&&C.onBeforeRender(B,C,Z,rt),L=Vt.get(C,b.length),L.init(Z),L.state.textureUnits=xt.getTextureUnits(),b.push(L),Nt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ct.setFromProjectionMatrix(Nt,Ma,Z.reversedDepth),Lt=this.localClippingEnabled,Ot=Jt.init(this.clippingPlanes,Lt),R=Wt.get(C,P.length),R.init(),P.push(R),Kt.enabled===!0&&Kt.isPresenting===!0){const jt=B.xr.getDepthSensingMesh();jt!==null&&Lo(jt,Z,-1/0,B.sortObjects)}Lo(C,Z,0,B.sortObjects),R.finish(),W!==null&&W.updateLights(L.state.lightsArray),B.sortObjects===!0&&R.sort(At,pt),de=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,de&&be.addToRenderList(R,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ot===!0&&Jt.beginShadows();const ht=L.state.shadowsArray;if(pe.render(ht,C,Z),Ot===!0&&Jt.endShadows(),(ft&&U.hasRenderPass())===!1){const jt=R.opaque,Ht=R.transmissive;if(L.setupLights(),Z.isArrayCamera){const ee=Z.cameras;if(Ht.length>0)for(let ie=0,xe=ee.length;ie<xe;ie++){const Te=ee[ie];gr(jt,Ht,C,Te)}de&&be.render(C);for(let ie=0,xe=ee.length;ie<xe;ie++){const Te=ee[ie];Uo(R,C,Te,Te.viewport)}}else Ht.length>0&&gr(jt,Ht,C,Z),de&&be.render(C),Uo(R,C,Z)}rt!==null&&q===0&&(xt.updateMultisampleRenderTarget(rt),xt.updateRenderTargetMipmap(rt)),ft&&U.end(B),C.isScene===!0&&C.onAfterRender(B,C,Z),Qt.resetDefaultState(),st=-1,ut=null,b.pop(),b.length>0?(L=b[b.length-1],xt.setTextureUnits(L.state.textureUnits),Ot===!0&&Jt.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,W!==null&&W.renderEnd()};function Lo(C,Z,_t,ft){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)_t=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Ct)){ft&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Nt);const jt=Mt.update(C),Ht=C.material;Ht.visible&&R.push(C,jt,Ht,_t,he.z,null,Z)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Ct))){const jt=Mt.update(C),Ht=C.material;if(ft&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),he.copy(jt.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ht)){const ee=jt.groups;for(let ie=0,xe=ee.length;ie<xe;ie++){const Te=ee[ie],$t=Ht[Te.materialIndex];$t&&$t.visible&&R.push(C,jt,$t,_t,he.z,Te,Z)}}else Ht.visible&&R.push(C,jt,Ht,_t,he.z,null,Z)}}const Xt=C.children;for(let jt=0,Ht=Xt.length;jt<Ht;jt++)Lo(Xt[jt],Z,_t,ft)}function Uo(C,Z,_t,ft){const{opaque:ht,transmissive:Xt,transparent:jt}=C;L.setupLightsView(_t),Ot===!0&&Jt.setGlobalState(B.clippingPlanes,_t),ft&&w.viewport(ct.copy(ft)),ht.length>0&&ra(ht,Z,_t),Xt.length>0&&ra(Xt,Z,_t),jt.length>0&&ra(jt,Z,_t),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function gr(C,Z,_t,ft){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ft.id]===void 0){const $t=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ft.id]=new pi(1,1,{generateMipmaps:!0,type:$t?aa:Kn,minFilter:or,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const Xt=L.state.transmissionRenderTarget[ft.id],jt=ft.viewport||ct;Xt.setSize(jt.z*B.transmissionResolutionScale,jt.w*B.transmissionResolutionScale);const Ht=B.getRenderTarget(),ee=B.getActiveCubeFace(),ie=B.getActiveMipmapLevel();B.setRenderTarget(Xt),B.getClearColor(k),ot=B.getClearAlpha(),ot<1&&B.setClearColor(16777215,.5),B.clear(),de&&be.render(_t);const xe=B.toneMapping;B.toneMapping=na;const Te=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),L.setupLightsView(ft),Ot===!0&&Jt.setGlobalState(B.clippingPlanes,ft),ra(C,_t,ft),xt.updateMultisampleRenderTarget(Xt),xt.updateRenderTargetMipmap(Xt),re.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Pe=0,De=Z.length;Pe<De;Pe++){const an=Z[Pe],{object:Ke,geometry:Tn,material:Yt,group:dn}=an;if(Yt.side===si&&Ke.layers.test(ft.layers)){const ke=Yt.side;Yt.side=oi,Yt.needsUpdate=!0,ic(Ke,_t,ft,Tn,Yt,dn),Yt.side=ke,Yt.needsUpdate=!0,$t=!0}}$t===!0&&(xt.updateMultisampleRenderTarget(Xt),xt.updateRenderTargetMipmap(Xt))}B.setRenderTarget(Ht,ee,ie),B.setClearColor(k,ot),Te!==void 0&&(ft.viewport=Te),B.toneMapping=xe}function ra(C,Z,_t){const ft=Z.isScene===!0?Z.overrideMaterial:null;for(let ht=0,Xt=C.length;ht<Xt;ht++){const jt=C[ht],{object:Ht,geometry:ee,group:ie}=jt;let xe=jt.material;xe.allowOverride===!0&&ft!==null&&(xe=ft),Ht.layers.test(_t.layers)&&ic(Ht,Z,_t,ee,xe,ie)}}function ic(C,Z,_t,ft,ht,Xt){W!==null&&ht.isNodeMaterial&&W.setObject(C,ht),C.onBeforeRender(B,Z,_t,ft,ht,Xt),C.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ht.onBeforeRender(B,Z,_t,ft,C,Xt),ht.transparent===!0&&ht.side===si&&ht.forceSinglePass===!1?(ht.side=oi,ht.needsUpdate=!0,B.renderBufferDirect(_t,Z,ft,ht,C,Xt),ht.side=cr,ht.needsUpdate=!0,B.renderBufferDirect(_t,Z,ft,ht,C,Xt),ht.side=si):B.renderBufferDirect(_t,Z,ft,ht,C,Xt),C.onAfterRender(B,Z,_t,ft,ht,Xt)}function Ps(C,Z,_t){Z.isScene!==!0&&(Z=Me);const ft=et.get(C),ht=L.state.lights,Xt=L.state.shadowsArray,jt=ht.state.version,Ht=It.getParameters(C,ht.state,Xt,Z,_t,L.state.lightProbeGridArray),ee=It.getProgramCacheKey(Ht);let ie=ft.programs;ft.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,ft.fog=Z.fog;const xe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ft.envMap=wt.get(C.envMap||ft.environment,xe),ft.envMapRotation=ft.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ie===void 0&&(C.addEventListener("dispose",Di),ie=new Map,ft.programs=ie);let Te=ie.get(ee);if(Te!==void 0){if(ft.currentProgram===Te&&ft.lightsStateVersion===jt)return Oo(C,Ht),Te}else Ht.uniforms=It.getUniforms(C),W!==null&&C.isNodeMaterial&&W.build(C,_t,Ht),C.onBeforeCompile(Ht,B),Te=It.acquireProgram(Ht,ee),ie.set(ee,Te),ft.uniforms=Ht.uniforms;const $t=ft.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($t.clippingPlanes=Jt.uniform),Oo(C,Ht),ft.needsLights=sc(C),ft.lightsStateVersion=jt,ft.needsLights&&($t.ambientLightColor.value=ht.state.ambient,$t.lightProbe.value=ht.state.probe,$t.sunLights.value=ht.state.sun,$t.sunLightShadows.value=ht.state.sunShadow,$t.directionalLights.value=ht.state.directional,$t.directionalLightShadows.value=ht.state.directionalShadow,$t.spotLights.value=ht.state.spot,$t.spotLightShadows.value=ht.state.spotShadow,$t.rectAreaLights.value=ht.state.rectArea,$t.ltc_1.value=ht.state.rectAreaLTC1,$t.ltc_2.value=ht.state.rectAreaLTC2,$t.pointLights.value=ht.state.point,$t.pointLightShadows.value=ht.state.pointShadow,$t.hemisphereLights.value=ht.state.hemi,$t.sunShadowMatrix.value=ht.state.sunShadowMatrix,$t.sunShadowCascade.value=ht.state.sunShadowCascade,$t.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,$t.spotLightMatrix.value=ht.state.spotLightMatrix,$t.spotLightMap.value=ht.state.spotLightMap,$t.pointShadowMatrix.value=ht.state.pointShadowMatrix),ft.lightProbeGrid=L.state.lightProbeGridArray.length>0,ft.currentProgram=Te,ft.uniformsList=null,Te}function Po(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=af.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Oo(C,Z){const _t=et.get(C);_t.outputColorSpace=Z.outputColorSpace,_t.batching=Z.batching,_t.batchingColor=Z.batchingColor,_t.instancing=Z.instancing,_t.instancingColor=Z.instancingColor,_t.instancingMorph=Z.instancingMorph,_t.skinning=Z.skinning,_t.morphTargets=Z.morphTargets,_t.morphNormals=Z.morphNormals,_t.morphColors=Z.morphColors,_t.morphTargetsCount=Z.morphTargetsCount,_t.numClippingPlanes=Z.numClippingPlanes,_t.numIntersection=Z.numClipIntersection,_t.vertexAlphas=Z.vertexAlphas,_t.vertexTangents=Z.vertexTangents,_t.toneMapping=Z.toneMapping}function zo(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;T.setFromMatrixPosition(Z.matrixWorld);for(let _t=0,ft=C.length;_t<ft;_t++){const ht=C[_t];if(ht.texture!==null&&ht.boundingBox.containsPoint(T))return ht}return null}function Io(C,Z,_t,ft,ht){Z.isScene!==!0&&(Z=Me),xt.resetTextureUnits();const Xt=Z.fog,jt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial?Z.environment:null,Ht=rt===null?B.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:We.workingColorSpace,ee=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial&&!ft.envMap||ft.isMeshPhongMaterial&&!ft.envMap,ie=wt.get(ft.envMap||jt,ee),xe=ft.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,Te=!!_t.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),$t=!!_t.morphAttributes.position,Pe=!!_t.morphAttributes.normal,De=!!_t.morphAttributes.color;let an=na;ft.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(an=B.toneMapping);const Ke=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Tn=Ke!==void 0?Ke.length:0,Yt=et.get(ft),dn=L.state.lights;if(Ot===!0&&(Lt===!0||C!==ut)){const Fe=C===ut&&ft.id===st;Jt.setState(ft,C,Fe)}let ke=!1;ft.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==dn.state.version||Yt.outputColorSpace!==Ht||ht.isBatchedMesh&&Yt.batching===!1||!ht.isBatchedMesh&&Yt.batching===!0||ht.isBatchedMesh&&Yt.batchingColor===!0&&ht._colorsTexture===null||ht.isBatchedMesh&&Yt.batchingColor===!1&&ht._colorsTexture!==null||ht.isInstancedMesh&&Yt.instancing===!1||!ht.isInstancedMesh&&Yt.instancing===!0||ht.isSkinnedMesh&&Yt.skinning===!1||!ht.isSkinnedMesh&&Yt.skinning===!0||ht.isInstancedMesh&&Yt.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&Yt.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&Yt.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&Yt.instancingMorph===!1&&ht.morphTexture!==null||Yt.envMap!==ie||ft.fog===!0&&Yt.fog!==Xt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Jt.numPlanes||Yt.numIntersection!==Jt.numIntersection)||Yt.vertexAlphas!==xe||Yt.vertexTangents!==Te||Yt.morphTargets!==$t||Yt.morphNormals!==Pe||Yt.morphColors!==De||Yt.toneMapping!==an||Yt.morphTargetsCount!==Tn||!!Yt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,Yt.__version=ft.version);let Jn=Yt.currentProgram;ke===!0&&(Jn=Ps(ft,Z,ht),W&&ft.isNodeMaterial&&W.onUpdateProgram(ft,Jn,Yt));let vi=!1,oa=!1,Ne=!1;const qe=Jn.getUniforms(),on=Yt.uniforms;if(w.useProgram(Jn.program)&&(vi=!0,oa=!0,Ne=!0),ft.id!==st&&(st=ft.id,oa=!0),Yt.needsLights){const Fe=zo(L.state.lightProbeGridArray,ht);Yt.lightProbeGrid!==Fe&&(Yt.lightProbeGrid=Fe,oa=!0)}if(vi||ut!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),qe.setValue(Y,"projectionMatrix",C.projectionMatrix),qe.setValue(Y,"viewMatrix",C.matrixWorldInverse);const pn=qe.map.cameraPosition;pn!==void 0&&pn.setValue(Y,Pt.setFromMatrixPosition(C.matrixWorld)),z.logarithmicDepthBuffer&&qe.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&qe.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),ut!==C&&(ut=C,oa=!0,Ne=!0)}if(Yt.needsLights&&(dn.state.sunShadowMap.length>0&&qe.setValue(Y,"sunShadowMap",dn.state.sunShadowMap,xt),dn.state.directionalShadowMap.length>0&&qe.setValue(Y,"directionalShadowMap",dn.state.directionalShadowMap,xt),dn.state.spotShadowMap.length>0&&qe.setValue(Y,"spotShadowMap",dn.state.spotShadowMap,xt),dn.state.pointShadowMap.length>0&&qe.setValue(Y,"pointShadowMap",dn.state.pointShadowMap,xt)),ht.isSkinnedMesh){qe.setOptional(Y,ht,"bindMatrix"),qe.setOptional(Y,ht,"bindMatrixInverse");const Fe=ht.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),qe.setValue(Y,"boneTexture",Fe.boneTexture,xt))}ht.isBatchedMesh&&(qe.setOptional(Y,ht,"batchingTexture"),qe.setValue(Y,"batchingTexture",ht._matricesTexture,xt),qe.setOptional(Y,ht,"batchingIdTexture"),qe.setValue(Y,"batchingIdTexture",ht._indirectTexture,xt),qe.setOptional(Y,ht,"batchingColorTexture"),ht._colorsTexture!==null&&qe.setValue(Y,"batchingColorTexture",ht._colorsTexture,xt));const _i=_t.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&j.update(ht,_t,Jn),(oa||Yt.receiveShadow!==ht.receiveShadow)&&(Yt.receiveShadow=ht.receiveShadow,qe.setValue(Y,"receiveShadow",ht.receiveShadow)),(ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial)&&ft.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=cR()),oa){if(qe.setValue(Y,"toneMappingExposure",B.toneMappingExposure),Yt.needsLights&&ac(on,Ne),Xt&&ft.fog===!0&&le.refreshFogUniforms(on,Xt),le.refreshMaterialUniforms(on,ft,vt,$,L.state.transmissionRenderTarget[C.id]),Yt.needsLights&&Yt.lightProbeGrid){const Fe=Yt.lightProbeGrid;on.probesSH.value=Fe.texture,on.probesMin.value.copy(Fe.boundingBox.min),on.probesMax.value.copy(Fe.boundingBox.max),on.probesResolution.value.copy(Fe.resolution)}af.upload(Y,Po(Yt),on,xt)}if(ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(af.upload(Y,Po(Yt),on,xt),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&qe.setValue(Y,"center",ht.center),qe.setValue(Y,"modelViewMatrix",ht.modelViewMatrix),qe.setValue(Y,"normalMatrix",ht.normalMatrix),qe.setValue(Y,"modelMatrix",ht.matrixWorld),ft.uniformsGroups!==void 0){const Fe=ft.uniformsGroups;for(let pn=0,Ta=Fe.length;pn<Ta;pn++){const rc=Fe[pn];Tt.update(rc,Jn),Tt.bind(rc,Jn)}}return Jn}function ac(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.sunLights.needsUpdate=Z,C.sunLightShadows.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function sc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(C,Z,_t){const ft=et.get(C);ft.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),et.get(C.texture).__webglTexture=Z,et.get(C.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:_t,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const _t=et.get(C);_t.__webglFramebuffer=Z,_t.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,_t=0){rt=C,H=Z,q=_t;let ft=null,ht=!1,Xt=!1;if(C){const Ht=et.get(C);if(Ht.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(Y.FRAMEBUFFER,Ht.__webglFramebuffer),ct.copy(C.viewport),kt.copy(C.scissor),Zt=C.scissorTest,w.viewport(ct),w.scissor(kt),w.setScissorTest(Zt),st=-1;return}else if(Ht.__webglFramebuffer===void 0)xt.setupRenderTarget(C);else if(Ht.__hasExternalTextures)xt.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const xe=C.depthTexture;if(Ht.__boundDepthTexture!==xe){if(xe!==null&&et.has(xe)&&(C.width!==xe.image.width||C.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Xt=!0);const ie=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?ft=ie[Z][_t]:ft=ie[Z],ht=!0):C.samples>0&&xt.useMultisampledRTT(C)===!1?ft=et.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?ft=ie[_t]:ft=ie,ct.copy(C.viewport),kt.copy(C.scissor),Zt=C.scissorTest}else ct.copy(K).multiplyScalar(vt).floor(),kt.copy(mt).multiplyScalar(vt).floor(),Zt=Bt;if(_t!==0&&(ft=J),w.bindFramebuffer(Y.FRAMEBUFFER,ft)&&w.drawBuffers(C,ft),w.viewport(ct),w.scissor(kt),w.setScissorTest(Zt),ht){const Ht=et.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ht.__webglTexture,_t)}else if(Xt){const Ht=Z;for(let ee=0;ee<C.textures.length;ee++){const ie=et.get(C.textures[ee]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+ee,ie.__webglTexture,_t,Ht)}}else if(C!==null&&_t!==0){const Ht=et.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ht.__webglTexture,_t)}st=-1};function Ni(C){const Z=et.get(C);return(Z.__readFormat!==C.format||Z.__readType!==C.type)&&(Z.__readFormat=C.format,Z.__readType=C.type,Z.__formatReadable=z.textureFormatReadable(C.format),Z.__typeReadable=z.textureTypeReadable(C.type)),Z}this.readRenderTargetPixels=function(C,Z,_t,ft,ht,Xt,jt,Ht=0){if(!(C&&C.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&jt!==void 0&&(ee=ee[jt]),ee){w.bindFramebuffer(Y.FRAMEBUFFER,ee);try{const ie=C.textures[Ht],xe=ie.format,Te=ie.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ht);const $t=Ni(ie);if($t.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($t.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ft&&_t>=0&&_t<=C.height-ht&&Y.readPixels(Z,_t,ft,ht,Ft.convert(xe),Ft.convert(Te),Xt)}finally{const ie=rt!==null?et.get(rt).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(C,Z,_t,ft,ht,Xt,jt,Ht=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&jt!==void 0&&(ee=ee[jt]),ee)if(Z>=0&&Z<=C.width-ft&&_t>=0&&_t<=C.height-ht){w.bindFramebuffer(Y.FRAMEBUFFER,ee);const ie=C.textures[Ht],xe=ie.format,Te=ie.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ht);const $t=Ni(ie);if($t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Pe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Xt.byteLength,Y.STREAM_READ),Y.readPixels(Z,_t,ft,ht,Ft.convert(xe),Ft.convert(Te),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const De=rt!==null?et.get(rt).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,De);const an=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await qb(Y,an,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Pe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Xt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Pe),Y.deleteSync(an),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,_t=0){const ft=Math.pow(2,-_t),ht=Math.floor(C.image.width*ft),Xt=Math.floor(C.image.height*ft),jt=Z!==null?Z.x:0,Ht=Z!==null?Z.y:0;xt.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,_t,0,0,jt,Ht,ht,Xt),w.unbindTexture()},this.copyTextureToTexture=function(C,Z,_t=null,ft=null,ht=0,Xt=0){let jt,Ht,ee,ie,xe,Te,$t,Pe,De;const an=C.isCompressedTexture?C.mipmaps[Xt]:C.image;if(_t!==null)jt=_t.max.x-_t.min.x,Ht=_t.max.y-_t.min.y,ee=_t.isBox3?_t.max.z-_t.min.z:1,ie=_t.min.x,xe=_t.min.y,Te=_t.isBox3?_t.min.z:0;else{const on=Math.pow(2,-ht);jt=Math.floor(an.width*on),Ht=Math.floor(an.height*on),C.isDataArrayTexture?ee=an.depth:C.isData3DTexture?ee=Math.floor(an.depth*on):ee=1,ie=0,xe=0,Te=0}ft!==null?($t=ft.x,Pe=ft.y,De=ft.z):($t=0,Pe=0,De=0);const Ke=Ft.convert(Z.format),Tn=Ft.convert(Z.type);let Yt;Z.isData3DTexture?(xt.setTexture3D(Z,0),Yt=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(xt.setTexture2DArray(Z,0),Yt=Y.TEXTURE_2D_ARRAY):(xt.setTexture2D(Z,0),Yt=Y.TEXTURE_2D),w.activeTexture(Y.TEXTURE0),w.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),w.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),w.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const dn=w.getParameter(Y.UNPACK_ROW_LENGTH),ke=w.getParameter(Y.UNPACK_IMAGE_HEIGHT),Jn=w.getParameter(Y.UNPACK_SKIP_PIXELS),vi=w.getParameter(Y.UNPACK_SKIP_ROWS),oa=w.getParameter(Y.UNPACK_SKIP_IMAGES);w.pixelStorei(Y.UNPACK_ROW_LENGTH,an.width),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,an.height),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,ie),w.pixelStorei(Y.UNPACK_SKIP_ROWS,xe),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,Te);const Ne=C.isDataArrayTexture||C.isData3DTexture,qe=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const on=et.get(C),_i=et.get(Z),Fe=et.get(on.__renderTarget),pn=et.get(_i.__renderTarget);w.bindFramebuffer(Y.READ_FRAMEBUFFER,Fe.__webglFramebuffer),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let Ta=0;Ta<ee;Ta++)Ne&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,et.get(C).__webglTexture,ht,Te+Ta),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,et.get(Z).__webglTexture,Xt,De+Ta)),Y.blitFramebuffer(ie,xe,jt,Ht,$t,Pe,jt,Ht,Y.DEPTH_BUFFER_BIT,Y.NEAREST);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ht!==0||C.isRenderTargetTexture||et.has(C)){const on=et.get(C),_i=et.get(Z);w.bindFramebuffer(Y.READ_FRAMEBUFFER,X),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,V);for(let Fe=0;Fe<ee;Fe++)Ne?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,on.__webglTexture,ht,Te+Fe):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,on.__webglTexture,ht),qe?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,_i.__webglTexture,Xt,De+Fe):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,_i.__webglTexture,Xt),ht!==0?Y.blitFramebuffer(ie,xe,jt,Ht,$t,Pe,jt,Ht,Y.COLOR_BUFFER_BIT,Y.NEAREST):qe?Y.copyTexSubImage3D(Yt,Xt,$t,Pe,De+Fe,ie,xe,jt,Ht):Y.copyTexSubImage2D(Yt,Xt,$t,Pe,ie,xe,jt,Ht);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else qe?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(Yt,Xt,$t,Pe,De,jt,Ht,ee,Ke,Tn,an.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(Yt,Xt,$t,Pe,De,jt,Ht,ee,Ke,an.data):Y.texSubImage3D(Yt,Xt,$t,Pe,De,jt,Ht,ee,Ke,Tn,an):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Xt,$t,Pe,jt,Ht,Ke,Tn,an.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Xt,$t,Pe,an.width,an.height,Ke,an.data):Y.texSubImage2D(Y.TEXTURE_2D,Xt,$t,Pe,jt,Ht,Ke,Tn,an);w.pixelStorei(Y.UNPACK_ROW_LENGTH,dn),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ke),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,Jn),w.pixelStorei(Y.UNPACK_SKIP_ROWS,vi),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,oa),Xt===0&&Z.generateMipmaps&&Y.generateMipmap(Yt),w.unbindTexture()},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&xt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?xt.setTextureCube(C,0):C.isData3DTexture?xt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xt.setTexture2DArray(C,0):xt.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){H=0,q=0,rt=null,w.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),i.unpackColorSpace=We._getUnpackColorSpace()}}const wS=260,AS=180,fR=256,hf=220,df=-14,Jm=18;function Ju(o,t){const i=Math.sin(o*127.1+t*311.7)*43758.5453123;return i-Math.floor(i)}function hR(o,t){const i=Math.floor(o),s=Math.floor(t),l=o-i,c=t-s,f=l*l*(3-2*l),d=c*c*(3-2*c),p=Ju(i,s),m=Ju(i+1,s),_=Ju(i,s+1),v=Ju(i+1,s+1);return p+(m-p)*f+(_-p)*d+(p-m-_+v)*f*d}function ju(o,t,i=3){let s=0,l=.5,c=1;for(let f=0;f<i;f++)s+=l*(hR(o*c,t*c)*2-1),c*=2.04,l*=.5;return s}function To(o){const t=o/46,i=-t*t*10.5,s=Math.sin(o*.085)*1.45+Math.cos(o*.042+.6)*1.1;return i+s}function Ie(o,t){const i=To(o),s=t-i;let l=0;if(s>=0){const d=s*.088,p=Math.sin(Math.min(s/22,1)*Math.PI)*.42,m=ue.smoothstep(s,12,34),_=(Math.sin(o*.09+t*.14)*.55+Math.cos(o*.055-t*.09)*.45+ju(o*.032,t*.032,3)*1.45+1.15)*m*2.35,v=Math.pow(Math.max(0,(s-32)/36),1.65)*6.5;l=d+p+_+v}else{const d=-s,p=-d*.108,m=(d-16.5)/6.2,_=Math.exp(-m*m)*.62*(.7+.3*Math.cos(o*.075)),v=ue.smoothstep(d,18,66),g=-v*7.8,S=ju(o*.045,t*.045,3)*(.35+v*.85);l=Math.max(-12.5,p+_+g+S)}const c=Math.abs(o)-34;if(c>0){const d=ue.smoothstep(c,0,26),p=ue.smoothstep(t,-24,18),m=(ju(o*.06,t*.06,3)*.5+.5)*3.8;l+=d*p*(6.2+m)}const f=ju(o*.085+3.1,t*.085-1.7,2)*.12;return l+f}function xo(o,t,i=new F){const l=Ie(o-.25,t),c=Ie(o+.25,t),f=Ie(o,t-.25),d=Ie(o,t+.25);return i.set(l-c,2*.25,f-d).normalize(),i}function dR(){const o=new mi(wS,wS,AS,AS);o.rotateX(-Math.PI/2);const t=o.attributes.position;for(let i=0;i<t.count;i++){const s=t.getX(i),l=t.getZ(i);t.setY(i,Ie(s,l))}return t.needsUpdate=!0,o.computeVertexNormals(),o}function pR(){const o=fR,t=new Uint8Array(o*o*4),i=Jm-df;for(let l=0;l<o;l++){const f=-110+l/(o-1)*hf;for(let d=0;d<o;d++){const m=-110+d/(o-1)*hf,_=Ie(m,f),v=ue.clamp((_-df)/i,0,1),g=Math.round(v*65535),S=g>>8&255,E=g&255,A=(l*o+d)*4;t[A]=S,t[A+1]=E,t[A+2]=0,t[A+3]=255}}const s=new vf(t,o,o,ri,Kn);return s.minFilter=vn,s.magFilter=vn,s.wrapS=Ci,s.wrapT=Ci,s.needsUpdate=!0,s}function wm(o,t,i){for(let s=0;s<i.length;s++){const l=i[s];if(l.type==="circle"){const c=o.x-l.x,f=o.z-l.z,d=t+l.radius,p=c*c+f*f;if(p<d*d&&p>1e-8){const m=Math.sqrt(p),_=d-m;o.x+=c/m*_,o.z+=f/m*_}}else{const c=Math.cos(-l.rotationY),f=Math.sin(-l.rotationY),d=o.x-l.x,p=o.z-l.z,m=d*c-p*f,_=d*f+p*c,v=ue.clamp(m,-l.halfW,l.halfW),g=ue.clamp(_,-l.halfD,l.halfD),S=m-v,E=_-g,A=S*S+E*E;if(A<t*t){let M=0,y=0;if(A>1e-8){const T=Math.sqrt(A),R=t-T;M=S/T*R,y=E/T*R}else{const T=l.halfW-Math.abs(m),R=l.halfD-Math.abs(_);T<R?M=(m>=0?1:-1)*(T+t):y=(_>=0?1:-1)*(R+t)}const D=Math.cos(l.rotationY),O=Math.sin(l.rotationY);o.x+=M*D-y*O,o.z+=M*O+y*D}}}}const rr=1024,So=56,Fl=0,Hl=7;class mR{rtA;rtB;currentRead;currentWrite;orthoCamera;updateScene;updateMaterial;stampScene;stampMesh;stampMaterial;pendingStamps=[];totalStamps=0;initialized=!1;decayAccumDt=0;constructor(t){const i={format:ri,type:Kn,minFilter:vn,magFilter:vn,wrapS:Ci,wrapT:Ci,depthBuffer:!1,stencilBuffer:!1};this.rtA=new pi(rr,rr,i),this.rtB=new pi(rr,rr,i),this.currentRead=this.rtA,this.currentWrite=this.rtB,this.orthoCamera=new nc(-1,1,1,-1,0,1),this.updateScene=new tc,this.updateMaterial=new Pn({uniforms:{uPrevMap:{value:this.rtA.texture},uTerrainHeightTex:{value:t},uTexelSize:{value:new ce(1/rr,1/rr)},uDeformBounds:{value:new Je(Fl,Hl,So,0)},uHeightBounds:{value:new F(hf,df,Jm)},uTime:{value:0},uDt:{value:.016},uWaveIntensity:{value:1},uInitPass:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D uPrevMap;
        uniform sampler2D uTerrainHeightTex;
        uniform vec2 uTexelSize;
        uniform vec4 uDeformBounds;
        uniform vec3 uHeightBounds;
        uniform float uTime;
        uniform float uDt;
        uniform float uWaveIntensity;
        uniform float uInitPass;

        float sampleTerrainY(vec2 worldXZ) {
          vec2 huv = (worldXZ + uHeightBounds.x * 0.5) / uHeightBounds.x;
          vec4 enc = texture2D(uTerrainHeightTex, clamp(huv, 0.0, 1.0));
          float norm = (enc.r * 255.0 * 256.0 + enc.g * 255.0) / 65535.0;
          return mix(uHeightBounds.y, uHeightBounds.z, norm);
        }

        void main() {
          vec2 worldXZ = (vUv - 0.5) * uDeformBounds.z + uDeformBounds.xy;
          float terrainY = sampleTerrainY(worldXZ);

          // Fast 2-wave dominant shore-runup evaluator (matches primary Gerstner swell energy)
          float depthFactor = clamp((max(0.0, -terrainY) + 0.35) / 2.2, 0.22, 1.0);
          float ampScale = uWaveIntensity * depthFactor;
          float f0 = (6.2831853 / 22.0) * (0.14 * worldXZ.x + 0.99 * worldXZ.y - 6.32 * uTime);
          float f1 = (6.2831853 / 14.5) * (-0.26 * worldXZ.x + 0.965 * worldXZ.y - 5.61 * uTime);
          float waveHeight = (0.24 * sin(f0) + 0.16 * sin(f1)) * ampScale + 0.08 * uWaveIntensity;

          // Initialization pass: neutral footprints (0.5) and natural initial tide wetness band
          if (uInitPass > 0.5) {
            float initWet = smoothstep(0.55 * uWaveIntensity + 0.25, -0.05, terrainY);
            gl_FragColor = vec4(0.5, initWet, 0.0, 1.0);
            return;
          }

          vec4 prev = texture2D(uPrevMap, vUv);
          float heightVal = prev.r;
          float wetness = prev.g;
          float aoVal = prev.b;

          // Determine if waves are currently washing over this texel
          float submergence = waveHeight - terrainY;
          float washedOver = smoothstep(-0.08, 0.14, submergence);

          // Capillary moisture rises slightly above active water edge
          float capillaryWet = smoothstep(0.45, -0.02, terrainY - waveHeight) * 0.65;
          float targetWet = max(washedOver, capillaryWet);

          if (targetWet > wetness) {
            // Instant wetting when waves wash up
            wetness = mix(wetness, targetWet, clamp(uDt * 4.5, 0.0, 1.0));
          } else {
            // Gradual solar drying as waves recede -> glossy wet sand lingers authentically
            wetness = max(targetWet, wetness - uDt * 0.028);
          }

          // Footprint smoothing & erosion:
          // - Dry sand prints persist very long (tiny decay)
          // - Wet tide-line prints smooth & fade noticeably faster as waves wash over them!
          float isWetZone = clamp(wetness * 0.65 + washedOver * 1.4, 0.0, 1.0);
          float blurWeight = clamp((washedOver * 2.2 + wetness * 0.14) * uDt, 0.0, 0.45);
          float decayRate = mix(0.0012, 0.28, washedOver) + wetness * 0.022;

          if (blurWeight > 0.0005) {
            vec2 o = uTexelSize * 1.35;
            float n1 = texture2D(uPrevMap, vUv + vec2(o.x, 0.0)).r;
            float n2 = texture2D(uPrevMap, vUv - vec2(o.x, 0.0)).r;
            float n3 = texture2D(uPrevMap, vUv + vec2(0.0, o.y)).r;
            float n4 = texture2D(uPrevMap, vUv - vec2(0.0, o.y)).r;
            float blurred = (n1 + n2 + n3 + n4 + heightVal * 2.0) / 6.0;
            heightVal = mix(heightVal, blurred, blurWeight);
          }

          // Gently relax height toward neutral 0.5 and AO toward 0.0
          heightVal = mix(heightVal, 0.5, clamp(decayRate * uDt, 0.0, 0.35));
          aoVal = max(0.0, aoVal - (decayRate * 1.15 + isWetZone * 0.04) * uDt);

          // Snap tiny quantization residuals cleanly to 0.5 so neutral beach stays pristine
          if (abs(heightVal - 0.5) < 0.003) heightVal = 0.5;

          gl_FragColor = vec4(heightVal, clamp(wetness, 0.0, 1.0), clamp(aoVal, 0.0, 1.0), 1.0);
        }
      `,depthTest:!1,depthWrite:!1});const s=new mi(2,2);this.updateScene.add(new ne(s,this.updateMaterial)),this.stampScene=new tc,this.stampMaterial=new Pn({uniforms:{uPrevMap:{value:this.rtA.texture},uStampCenterUV:{value:new ce(.5,.5)},uStampSizeUV:{value:new ce(.01,.01)},uHeading:{value:0},uIsLeft:{value:1},uStrength:{value:.7}},vertexShader:`
        uniform vec2 uStampCenterUV;
        uniform vec2 uStampSizeUV;
        varying vec2 vLocal;
        varying vec2 vScreenUv;
        void main() {
          vLocal = position.xy; // [-1, 1]
          vec2 uvPos = uStampCenterUV + position.xy * uStampSizeUV;
          vScreenUv = uvPos;
          gl_Position = vec4(uvPos * 2.0 - 1.0, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vLocal;
        varying vec2 vScreenUv;

        uniform sampler2D uPrevMap;
        uniform float uHeading;
        uniform float uIsLeft;
        uniform float uStrength;

        // Signed distance to an anatomically shaped barefoot / sandal heel-to-toe impression
        // Local coordinates: p.y in [-1, 1] (heel at -0.58, toes at +0.62), p.x in [-1, 1]
        float footprintProfile(vec2 p, float isLeft, out float rimMask) {
          // Mirror horizontally for left vs right foot arch asymmetry
          float side = isLeft > 0.5 ? 1.0 : -1.0;
          p.x *= side;

          // Heel depression (oval around y = -0.46)
          vec2 heelP = (p - vec2(-0.02, -0.45)) / vec2(0.24, 0.28);
          float heel = smoothstep(1.0, 0.15, length(heelP));

          // Lateral arch bridge (curves outward on outer edge x > 0)
          vec2 archP = (p - vec2(0.08, -0.05)) / vec2(0.18, 0.30);
          float arch = smoothstep(1.0, 0.2, length(archP)) * 0.65;

          // Forefoot ball depression (wider pad around y = +0.26)
          vec2 ballP = (p - vec2(0.01, 0.24)) / vec2(0.32, 0.26);
          float ball = smoothstep(1.0, 0.12, length(ballP));

          // Five subtle toe impressions arcing across the front (big toe inner side x < 0)
          float toes = 0.0;
          toes = max(toes, smoothstep(1.0, 0.15, length((p - vec2(-0.18, 0.61)) / vec2(0.105, 0.135))) * 0.92);
          toes = max(toes, smoothstep(1.0, 0.15, length((p - vec2(-0.04, 0.65)) / vec2(0.078, 0.108))) * 0.76);
          toes = max(toes, smoothstep(1.0, 0.15, length((p - vec2(0.08, 0.61)) / vec2(0.070, 0.098))) * 0.68);
          toes = max(toes, smoothstep(1.0, 0.15, length((p - vec2(0.19, 0.54)) / vec2(0.064, 0.088))) * 0.58);
          toes = max(toes, smoothstep(1.0, 0.15, length((p - vec2(0.28, 0.44)) / vec2(0.058, 0.078))) * 0.48);

          float sole = clamp(max(max(heel * 0.96, ball * 1.0), max(arch, toes)), 0.0, 1.0);

          // Raised displaced sand rim ringing the depressed perimeter
          vec2 rimP = (p - vec2(0.02, 0.04)) / vec2(0.46, 0.80);
          float outerEnvelope = smoothstep(1.22, 0.72, length(rimP));
          rimMask = outerEnvelope * (1.0 - smoothstep(0.05, 0.45, sole)) * 0.55;

          return sole;
        }

        void main() {
          // Rotate local quad coords into foot-aligned space
          float c = cos(uHeading);
          float s = sin(uHeading);
          vec2 rotP = vec2(vLocal.x * c - vLocal.y * s, vLocal.x * s + vLocal.y * c);

          float rim = 0.0;
          float depress = footprintProfile(rotP, uIsLeft, rim);

          if (depress < 0.005 && rim < 0.005) discard;

          vec4 prev = texture2D(uPrevMap, vScreenUv);
          float wet = prev.g;

          // Wet sand holds crisp medium impressions; dry soft sand pushes up a slightly taller rim
          float depthScale = mix(0.36, 0.28, wet) * uStrength;
          float rimScale = mix(0.14, 0.08, wet) * uStrength;

          float targetH = 0.5 - depress * depthScale + rim * rimScale;
          // Blend depression downward cleanly while preserving deeper overlapping prints
          float nextH = prev.r;
          if (depress > 0.05) {
            nextH = min(prev.r, mix(prev.r, targetH, clamp(depress * 1.25, 0.0, 1.0)));
          } else {
            nextH = max(prev.r, mix(prev.r, targetH, rim * 0.9));
          }

          float nextAO = max(prev.b, depress * uStrength * 0.95);
          gl_FragColor = vec4(clamp(nextH, 0.04, 0.96), wet, clamp(nextAO, 0.0, 1.0), 1.0);
        }
      `,depthTest:!1,depthWrite:!1,transparent:!1}),this.stampMesh=new ne(new mi(2,2),this.stampMaterial),this.stampScene.add(this.stampMesh)}getTexture(){return this.currentRead.texture}stampFootprint(t,i,s,l,c=.85,f=1){const d=So*.5;t<Fl-d+1||t>Fl+d-1||i<Hl-d+1||i>Hl+d-1||(this.pendingStamps.push({x:t,z:i,heading:s,isLeft:l,strength:c,scale:f}),this.totalStamps++)}update(t,i,s,l){const c=t.getRenderTarget(),f=t.autoClear;t.autoClear=!1,this.initialized?(this.decayAccumDt+=s,this.decayAccumDt>=.05&&(this.updateMaterial.uniforms.uPrevMap.value=this.currentRead.texture,this.updateMaterial.uniforms.uTime.value=i,this.updateMaterial.uniforms.uDt.value=this.decayAccumDt,this.updateMaterial.uniforms.uWaveIntensity.value=l,this.updateMaterial.uniforms.uInitPass.value=0,t.setRenderTarget(this.currentWrite),t.render(this.updateScene,this.orthoCamera),this.swap(),this.decayAccumDt=0)):(this.updateMaterial.uniforms.uInitPass.value=1,this.updateMaterial.uniforms.uTime.value=i,this.updateMaterial.uniforms.uDt.value=s,this.updateMaterial.uniforms.uWaveIntensity.value=l,this.updateMaterial.uniforms.uPrevMap.value=this.rtB.texture,t.setRenderTarget(this.rtA),t.render(this.updateScene,this.orthoCamera),this.updateMaterial.uniforms.uPrevMap.value=this.rtA.texture,t.setRenderTarget(this.rtB),t.render(this.updateScene,this.orthoCamera),this.currentRead=this.rtB,this.currentWrite=this.rtA,this.initialized=!0);const d=Math.min(this.pendingStamps.length,12);if(d>0)for(let p=0;p<d;p++){const m=this.pendingStamps.shift(),_=(m.x-Fl)/So+.5,v=(m.z-Hl)/So+.5,g=.3*m.scale/So;this.stampMaterial.uniforms.uPrevMap.value=this.currentWrite.texture,this.stampMaterial.uniforms.uStampCenterUV.value.set(_,v),this.stampMaterial.uniforms.uStampSizeUV.value.set(g,g),this.stampMaterial.uniforms.uHeading.value=-m.heading,this.stampMaterial.uniforms.uIsLeft.value=m.isLeft?1:0,this.stampMaterial.uniforms.uStrength.value=m.strength,t.setRenderTarget(this.currentRead),t.render(this.stampScene,this.orthoCamera)}t.setRenderTarget(c),t.autoClear=f}swap(){const t=this.currentRead;this.currentRead=this.currentWrite,this.currentWrite=t}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.updateMaterial.dispose(),this.stampMaterial.dispose()}}const gR=`
    
#ifdef IS_VERTEX
    vec3 csm_Position;
    vec4 csm_PositionRaw;
    vec3 csm_Normal;

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize;
    #endif
#else
    vec4 csm_DiffuseColor;
    vec4 csm_FragColor;
    float csm_UnlitFac;

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive;
        float csm_Roughness;
        float csm_Metalness;
        float csm_Iridescence;
        
        #if defined IS_MESHPHYSICALMATERIAL
            float csm_Clearcoat;
            float csm_ClearcoatRoughness;
            vec3 csm_ClearcoatNormal;
            float csm_Transmission;
            float csm_Thickness;
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO;
    #endif

    // csm_FragNormal
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_FragNormal;
    #endif

    float csm_DepthAlpha;
#endif
`,vR=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        csm_Position = vec3(0.0);
        csm_PositionRaw = vec4(0.0);
        csm_Normal = vec3(0.0);
    #else
        csm_Position = position;
        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        csm_PointSize = size;
    #endif
#else
    csm_UnlitFac = 0.0;

    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHDISTANCEMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            csm_DiffuseColor = vec4(diffuse, opacity);
            csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        csm_Emissive = emissive;
        csm_Roughness = roughness;
        csm_Metalness = metalness;

        #ifdef USE_IRIDESCENCE
            csm_Iridescence = iridescence;
        #else
            csm_Iridescence = 0.0;
        #endif

        #if defined IS_MESHPHYSICALMATERIAL
            #ifdef USE_CLEARCOAT
                csm_Clearcoat = clearcoat;
                csm_ClearcoatRoughness = clearcoatRoughness;
            #else
                csm_Clearcoat = 0.0;
                csm_ClearcoatRoughness = 0.0;
            #endif

            #ifdef USE_TRANSMISSION
                csm_Transmission = transmission;
                csm_Thickness = thickness;
            #else
                csm_Transmission = 0.0;
                csm_Thickness = 0.0;
            #endif
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        csm_AO = 0.0;
    #endif

    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        #ifdef FLAT_SHADED
            vec3 fdx = dFdx( vViewPosition );
            vec3 fdy = dFdy( vViewPosition );
            csm_FragNormal = normalize( cross( fdx, fdy ) );
        #else
            csm_FragNormal = normalize(vNormal);
            #ifdef DOUBLE_SIDED
                csm_FragNormal *= gl_FrontFacing ? 1.0 : - 1.0;
            #endif
        #endif
    #endif

    csm_DepthAlpha = 1.0;
#endif
`,_R=`
    varying mat4 csm_internal_vModelViewMatrix;
`,xR=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,SR=`
    varying mat4 csm_internal_vModelViewMatrix;
`,yR=`
    
`,se={diffuse:"csm_DiffuseColor",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",fragNormal:"csm_FragNormal",clearcoat:"csm_Clearcoat",clearcoatRoughness:"csm_ClearcoatRoughness",clearcoatNormal:"csm_ClearcoatNormal",transmission:"csm_Transmission",thickness:"csm_Thickness",iridescence:"csm_Iridescence",pointSize:"csm_PointSize",fragColor:"csm_FragColor",depthAlpha:"csm_DepthAlpha",unlitFac:"csm_UnlitFac",position:"csm_Position",positionRaw:"csm_PositionRaw",normal:"csm_Normal"},MR={[`${se.position}`]:"*",[`${se.positionRaw}`]:"*",[`${se.normal}`]:"*",[`${se.depthAlpha}`]:"*",[`${se.pointSize}`]:["PointsMaterial"],[`${se.diffuse}`]:"*",[`${se.fragColor}`]:"*",[`${se.fragNormal}`]:"*",[`${se.unlitFac}`]:"*",[`${se.emissive}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${se.roughness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${se.metalness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${se.iridescence}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${se.ao}`]:["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"],[`${se.clearcoat}`]:["MeshPhysicalMaterial"],[`${se.clearcoatRoughness}`]:["MeshPhysicalMaterial"],[`${se.clearcoatNormal}`]:["MeshPhysicalMaterial"],[`${se.transmission}`]:["MeshPhysicalMaterial"],[`${se.thickness}`]:["MeshPhysicalMaterial"]},bR={"*":{"#include <lights_physical_fragment>":Ce.lights_physical_fragment,"#include <transmission_fragment>":Ce.transmission_fragment},[`${se.normal}`]:{"#include <beginnormal_vertex>":`
    vec3 objectNormal = ${se.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `},[`${se.position}`]:{"#include <begin_vertex>":`
    vec3 transformed = ${se.position};
  `},[`${se.positionRaw}`]:{"#include <project_vertex>":`
    #include <project_vertex>
    gl_Position = ${se.positionRaw};
  `},[`${se.pointSize}`]:{"gl_PointSize = size;":`
    gl_PointSize = ${se.pointSize};
    `},[`${se.diffuse}`]:{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = ${se.diffuse};
  `},[`${se.fragColor}`]:{"#include <opaque_fragment>":`
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${se.fragColor}, ${se.unlitFac});
  `},[`${se.emissive}`]:{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = ${se.emissive};
    `},[`${se.roughness}`]:{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = ${se.roughness};
    `},[`${se.metalness}`]:{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = ${se.metalness};
    `},[`${se.ao}`]:{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${se.ao};
    `},[`${se.fragNormal}`]:{"#include <normal_fragment_maps>":`
      #include <normal_fragment_maps>
      normal = ${se.fragNormal};
    `},[`${se.depthAlpha}`]:{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${se.depthAlpha} );
    `,"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      if(${se.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,"gl_FragColor = packDepthToRGBA( dist );":`
      if(${se.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `},[`${se.clearcoat}`]:{"material.clearcoat = clearcoat;":`material.clearcoat = ${se.clearcoat};`},[`${se.clearcoatRoughness}`]:{"material.clearcoatRoughness = clearcoatRoughness;":`material.clearcoatRoughness = ${se.clearcoatRoughness};`},[`${se.clearcoatNormal}`]:{"#include <clearcoat_normal_fragment_begin>":`
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `},[`${se.transmission}`]:{"material.transmission = transmission;":`
      material.transmission = ${se.transmission};
    `},[`${se.thickness}`]:{"material.thickness = thickness;":`
      material.thickness = ${se.thickness};
    `},[`${se.iridescence}`]:{"material.iridescence = iridescence;":`
      material.iridescence = ${se.iridescence};
    `}},ER={clearcoat:[se.clearcoat,se.clearcoatNormal,se.clearcoatRoughness],transmission:[se.transmission],iridescence:[se.iridescence]};function TR(o){let t=0;for(let s=0;s<o.length;s++)t=o.charCodeAt(s)+(t<<6)+(t<<16)-t;const i=t>>>0;return String(i)}function wR(o){try{new o}catch(t){if(t.message.indexOf("is not a constructor")>=0)return!1}return!0}function RS(o){return o.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,"")}class pf extends pr{constructor({baseMaterial:t,vertexShader:i,fragmentShader:s,uniforms:l,patchMap:c,cacheKey:f,...d}){if(!t)throw new Error("CustomShaderMaterial: baseMaterial is required.");let p;if(wR(t)){const g=Object.keys(d).length===0;p=new t(g?void 0:d)}else p=t,Object.assign(p,d);if(["ShaderMaterial","RawShaderMaterial"].includes(p.type))throw new Error(`CustomShaderMaterial does not support ${p.type} as a base material.`);super(),this.uniforms={},this.vertexShader="",this.fragmentShader="";const m=p;m.name=`CustomShaderMaterial<${p.name||p.type}>`,m.update=this.update,m.__csm={prevOnBeforeCompile:p.onBeforeCompile,baseMaterial:p,vertexShader:i,fragmentShader:s,uniforms:l,patchMap:c,cacheKey:f};const _={...m.uniforms||{},...l||{}};m.uniforms=this.uniforms=_,m.vertexShader=this.vertexShader=i||"",m.fragmentShader=this.fragmentShader=s||"",m.update({fragmentShader:m.fragmentShader,vertexShader:m.vertexShader,uniforms:m.uniforms,patchMap:c,cacheKey:f}),Object.assign(this,m);const v=Object.getOwnPropertyDescriptors(Object.getPrototypeOf(m));for(const g in v){const S=v[g];(S.get||S.set)&&Object.defineProperty(this,g,S)}return Object.defineProperty(this,"type",{get(){return p.type},set(g){p.type=g}}),this}update({fragmentShader:t,vertexShader:i,uniforms:s,cacheKey:l,patchMap:c}){const f=RS(i||""),d=RS(t||""),p=this;s&&(p.uniforms=s),i&&(p.vertexShader=i),t&&(p.fragmentShader=t),Object.entries(ER).forEach(([g,S])=>{for(const E in S){const A=S[E];(d&&d.includes(A)||f&&f.includes(A))&&(p[g]||(p[g]=1))}});const m=p.__csm.prevOnBeforeCompile,_=(g,S,E)=>{let A,M="";if(S){const y=S.search(/void\s+main\s*\(\s*\)\s*{/);if(y!==-1){M=S.slice(0,y);let D=0,O=-1;for(let T=y;T<S.length;T++)if(S[T]==="{"&&D++,S[T]==="}"&&(D--,D===0)){O=T;break}if(O!==-1){const T=S.slice(y,O+1);A=T.slice(T.indexOf("{")+1,-1)}}else M=S}if(E&&S&&S.includes(se.fragColor)&&A&&(A=`csm_UnlitFac = 1.0;
`+A),g.includes("//~CSM_DEFAULTS")){g=g.replace("void main() {",`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${M}
          
          void main() {
          `);const y=g.lastIndexOf("//~CSM_MAIN_END");if(y!==-1){const D=`
            ${A?`${A}`:""}
            //~CSM_MAIN_END
          `;g=g.slice(0,y)+D+g.slice(y)}}else{const y=/void\s*main\s*\(\s*\)\s*{/gm;g=g.replace(y,`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${E?SR:_R}
          ${gR}
  
          ${M}
          
          void main() {
            {
              ${vR}
            }
            ${E?yR:xR}

            ${A?`${A}`:""}
            //~CSM_MAIN_END
          `)}return g};p.onBeforeCompile=(g,S)=>{m?.(g,S);const E=c||{},A=p.type,M=A?`#define IS_${A.toUpperCase()};
`:`#define IS_UNKNOWN;
`;g.vertexShader=M+`#define IS_VERTEX
`+g.vertexShader,g.fragmentShader=M+`#define IS_FRAGMENT
`+g.fragmentShader;const y=D=>{for(const O in D){const T=O==="*"||f&&f.includes(O);if(O==="*"||d&&d.includes(O)||T){const R=MR[O];if(R&&R!=="*"&&(Array.isArray(R)?!R.includes(A):R!==A)){console.error(`CustomShaderMaterial: ${O} is not available in ${A}. Shader cannot compile.`);return}const L=D[O];for(const P in L){const b=L[P];if(typeof b=="object"){const U=b.type,B=b.value;U==="fs"?g.fragmentShader=g.fragmentShader.replace(P,B):U==="vs"&&(g.vertexShader=g.vertexShader.replace(P,B))}else b&&(g.vertexShader=g.vertexShader.replace(P,b),g.fragmentShader=g.fragmentShader.replace(P,b))}}}};y(bR),y(E),g.vertexShader=_(g.vertexShader,f,!1),g.fragmentShader=_(g.fragmentShader,d,!0),s&&(g.uniforms={...g.uniforms,...p.uniforms}),p.uniforms=g.uniforms};const v=p.customProgramCacheKey;p.customProgramCacheKey=()=>(l?.()||TR((f||"")+(d||"")))+v?.call(p),p.needsUpdate=!0}clone(){const t=this;return new t.constructor({baseMaterial:t.__csm.baseMaterial.clone(),vertexShader:t.__csm.vertexShader,fragmentShader:t.__csm.fragmentShader,uniforms:t.__csm.uniforms,patchMap:t.__csm.patchMap,cacheKey:t.__csm.cacheKey})}}const Pp=[{dx:.14,dz:.99,amplitude:.24,wavelength:22,steepness:.34,speed:1.08},{dx:-.26,dz:.965,amplitude:.16,wavelength:14.5,steepness:.3,speed:1.18},{dx:.42,dz:.907,amplitude:.1,wavelength:9.2,steepness:.28,speed:1.32},{dx:-.54,dz:.841,amplitude:.065,wavelength:5.8,steepness:.24,speed:1.48},{dx:.72,dz:.694,amplitude:.036,wavelength:3.4,steepness:.2,speed:1.72},{dx:-.35,dz:.936,amplitude:.022,wavelength:2.1,steepness:.16,speed:1.95}],AR=new F;function Am(o,t,i,s=1,l=10,c){const f=ue.clamp((l+.35)/2.2,.22,1),d=s*f;let p=0,m=0,_=0,v=1,g=0,S=0,E=0,A=0,M=1,y=0;for(let P=0;P<Pp.length;P++){const b=Pp[P],U=Math.PI*2/b.wavelength,B=Math.sqrt(9.81/U)*b.speed,I=b.amplitude*d,W=U*(b.dx*o+b.dz*t-B*i),J=Math.cos(W),X=Math.sin(W),V=Math.min(b.steepness,.75/Math.max(.001,U*I*Pp.length)),H=U*I;p+=b.dx*(V*I*J),m+=I*X,_+=b.dz*(V*I*J),v-=b.dx*b.dx*(V*H*X),g+=b.dx*(H*J),S-=b.dx*b.dz*(V*H*X),E-=b.dx*b.dz*(V*H*X),A+=b.dz*(H*J),M-=b.dz*b.dz*(V*H*X),y+=Math.max(0,X)*b.steepness*s}const D=A*S-M*g,O=M*v-E*S,T=E*g-A*v,R=Math.hypot(D,O,T)||1,L=AR;return L.set(D/R,O/R,T/R),{height:m,dispX:p,dispZ:_,normal:L,foam:ue.clamp((y-.52)*1.65,0,1)}}function wo(o,t,i,s=1,l=10,c){let f=o,d=t;for(let p=0;p<2;p++){const m=Am(f,d,i,s,l);f=o-m.dispX,d=t-m.dispZ}return Am(f,d,i,s,l)}function RR(o,t){const i=Am(0,-3.5,o,t,1.4);return ue.clamp(i.height/(.55*Math.max(.25,t))*.5+.5,0,1)}const jm=`
float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm2(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
  for (int i = 0; i < 4; i++) {
    v += a * valueNoise(p);
    p = rot * p * 2.03 + vec2(17.1, 31.7);
    a *= 0.5;
  }
  return v;
}
`,vy=`
struct GerstnerResult {
  vec3 displacement;
  vec3 normal;
  float foam;
};

GerstnerResult evalGerstner(vec2 xz, float time, float intensity, float waterDepth) {
  float depthFactor = clamp((waterDepth + 0.35) / 2.2, 0.22, 1.0);
  float ampScale = intensity * depthFactor;

  vec2 dirs[6];
  dirs[0] = vec2(0.14, 0.99);
  dirs[1] = vec2(-0.26, 0.965);
  dirs[2] = vec2(0.42, 0.907);
  dirs[3] = vec2(-0.54, 0.841);
  dirs[4] = vec2(0.72, 0.694);
  dirs[5] = vec2(-0.35, 0.936);

  float amps[6];
  amps[0] = 0.24; amps[1] = 0.16; amps[2] = 0.10;
  amps[3] = 0.065; amps[4] = 0.036; amps[5] = 0.022;

  float wlens[6];
  wlens[0] = 22.0; wlens[1] = 14.5; wlens[2] = 9.2;
  wlens[3] = 5.8; wlens[4] = 3.4; wlens[5] = 2.1;

  float steeps[6];
  steeps[0] = 0.34; steeps[1] = 0.30; steeps[2] = 0.28;
  steeps[3] = 0.24; steeps[4] = 0.20; steeps[5] = 0.16;

  float speeds[6];
  speeds[0] = 1.08; speeds[1] = 1.18; speeds[2] = 1.32;
  speeds[3] = 1.48; speeds[4] = 1.72; speeds[5] = 1.95;

  vec3 disp = vec3(0.0);
  vec3 tangent = vec3(1.0, 0.0, 0.0);
  vec3 binormal = vec3(0.0, 0.0, 1.0);
  float crest = 0.0;

  for (int i = 0; i < 6; i++) {
    vec2 d = dirs[i];
    float k = 6.28318530718 / wlens[i];
    float c = sqrt(9.81 / k) * speeds[i];
    float a = amps[i] * ampScale;
    float f = k * (dot(d, xz) - c * time);
    float cosF = cos(f);
    float sinF = sin(f);
    float q = min(steeps[i], 0.75 / max(0.001, k * a * 6.0));
    float wa = k * a;

    disp.x += d.x * (q * a * cosF);
    disp.y += a * sinF;
    disp.z += d.y * (q * a * cosF);

    tangent += vec3(
      -d.x * d.x * (q * wa * sinF),
      d.x * (wa * cosF),
      -d.x * d.y * (q * wa * sinF)
    );
    binormal += vec3(
      -d.x * d.y * (q * wa * sinF),
      d.y * (wa * cosF),
      -d.y * d.y * (q * wa * sinF)
    );

    crest += max(0.0, sinF) * steeps[i] * intensity;
  }

  GerstnerResult res;
  res.displacement = disp;
  res.normal = normalize(cross(binormal, tangent));
  res.foam = clamp((crest - 0.52) * 1.65, 0.0, 1.0);
  return res;
}
`,_y=`
float causticLayer(vec2 uv, float time) {
  vec2 p = mod(uv * 6.2831853, 6.2831853) - 250.0;
  vec2 i = p;
  float c = 1.0;
  float inten = 0.0052;
  for (int n = 0; n < 4; n++) {
    float t = time * (1.0 - (3.2 / float(n + 1)));
    i = p + vec2(
      cos(t - i.x) + sin(t + i.y),
      sin(t - i.y) + cos(t + i.x)
    );
    c += 1.0 / length(vec2(
      p.x / (sin(i.x + t) / inten),
      p.y / (cos(i.y + t) / inten)
    ));
  }
  c /= 4.0;
  c = 1.17 - pow(c, 1.4);
  return clamp(pow(abs(c), 9.0), 0.0, 1.35);
}

/**
 * Dual-layer sun-projected animated underwater caustics.
 * Attenuates smoothly with depth and fades out above the live waterline.
 */
vec3 computeCaustics(vec3 worldPos, vec3 worldNormal, vec3 sunDir, float waterSurfaceY, float time) {
  float depth = waterSurfaceY - worldPos.y;
  if (depth <= -0.05) return vec3(0.0);

  // Project along refracted sun ray onto water plane
  vec3 refractedSun = normalize(vec3(sunDir.x * 0.72, max(0.32, sunDir.y), sunDir.z * 0.72));
  vec2 projXZ = worldPos.xz + refractedSun.xz * (max(0.0, depth) / refractedSun.y);

  // Two counter-drifting scales for organic chromatic interference
  float c1 = causticLayer(projXZ * 0.145 + vec2(time * 0.028, time * 0.019), time * 0.85);
  float c2 = causticLayer(projXZ * 0.215 - vec2(time * 0.022, -time * 0.031) + 0.37, time * 1.12 + 2.4);

  // Slight RGB dispersion offset for realistic sunlit refraction shimmer
  float cR = causticLayer(projXZ * 0.145 + vec2(0.007, 0.003) + vec2(time * 0.028, time * 0.019), time * 0.85);
  float cB = causticLayer(projXZ * 0.145 - vec2(0.007, 0.003) + vec2(time * 0.028, time * 0.019), time * 0.85);

  vec3 causticRGB = vec3(
    cR * 0.55 + c2 * 0.45,
    c1 * 0.58 + c2 * 0.48,
    cB * 0.62 + c2 * 0.52
  );

  // Smooth entry at waterline + exponential depth attenuation
  float surfaceFade = smoothstep(-0.02, 0.24, depth);
  float depthAtten = exp(-max(0.0, depth) * 0.175);
  float upFacing = clamp(dot(normalize(worldNormal), refractedSun) * 0.75 + 0.35, 0.0, 1.0);
  float sunElevBoost = smoothstep(0.04, 0.35, sunDir.y);

  return causticRGB * surfaceFade * depthAtten * upFacing * sunElevBoost * 0.78;
}
`;function CR(){return{uTime:{value:0},uSunDir:{value:new F(.45,.72,-.52).normalize()},uWaterLevel:{value:0},uWaveIntensity:{value:1},uCameraMatrixWorld:{value:new Be}}}function DR(o,t){return new pf({baseMaterial:ea,roughness:.88,metalness:0,uniforms:{uDeformMap:{value:o},uDeformBounds:{value:new Je(Fl,Hl,So,1/rr)},uTime:t.uTime,uSunDir:t.uSunDir,uWaterLevel:t.uWaterLevel,uWaveIntensity:t.uWaveIntensity,uCameraMatrixWorld:t.uCameraMatrixWorld},vertexShader:`
      uniform sampler2D uDeformMap;
      uniform vec4 uDeformBounds;

      varying vec3 vSandWorldPos;
      varying vec3 vSandWorldNormal;

      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vec2 duv = (wp.xz - uDeformBounds.xy) / uDeformBounds.z + 0.5;
        float inside = step(0.004, duv.x) * step(duv.x, 0.996) * step(0.004, duv.y) * step(duv.y, 0.996);

        float deformH = (texture2D(uDeformMap, clamp(duv, 0.0, 1.0)).r - 0.5) * 0.16 * inside;
        csm_Position = position + vec3(0.0, deformH, 0.0);

        wp.y += deformH;
        vSandWorldPos = wp.xyz;
        vSandWorldNormal = normalize(mat3(modelMatrix) * normal);
      }
    `,fragmentShader:`
      uniform sampler2D uDeformMap;
      uniform vec4 uDeformBounds;
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform float uWaterLevel;
      uniform float uWaveIntensity;

      varying vec3 vSandWorldPos;
      varying vec3 vSandWorldNormal;

      ${jm}
      ${_y}

      void main() {
        vec2 duv = (vSandWorldPos.xz - uDeformBounds.xy) / uDeformBounds.z + 0.5;
        float insideMask =
          smoothstep(0.0, 0.03, duv.x) * smoothstep(1.0, 0.97, duv.x) *
          smoothstep(0.0, 0.03, duv.y) * smoothstep(1.0, 0.97, duv.y);

        vec4 deformSample = texture2D(uDeformMap, clamp(duv, 0.0, 1.0));
        float deformH = (deformSample.r - 0.5) * insideMask;
        float rtWetness = deformSample.g * insideMask;
        float printAO = deformSample.b * insideMask;

        // Fallback wetness outside RT footprint bounds (headlands / far coast)
        float fallbackWet = smoothstep(0.65 * uWaveIntensity + 0.25, -0.05, vSandWorldPos.y);
        float wetness = mix(fallbackWet, rtWetness, insideMask);
        // Anything currently below water surface is fully wet
        wetness = max(wetness, smoothstep(0.18, -0.10, vSandWorldPos.y - uWaterLevel));

        // 1) Real-time finite-difference normal perturbation from footprint heightmap
        float texel = uDeformBounds.w * 1.4;
        float hL = texture2D(uDeformMap, clamp(duv - vec2(texel, 0.0), 0.0, 1.0)).r;
        float hR = texture2D(uDeformMap, clamp(duv + vec2(texel, 0.0), 0.0, 1.0)).r;
        float hD = texture2D(uDeformMap, clamp(duv - vec2(0.0, texel), 0.0, 1.0)).r;
        float hU = texture2D(uDeformMap, clamp(duv + vec2(0.0, texel), 0.0, 1.0)).r;

        float printSlopeScale = 7.4 * insideMask;
        vec3 footPerturb = vec3((hL - hR) * printSlopeScale, 0.0, (hD - hU) * printSlopeScale);

        // 2) Fine multi-scale sand grain & subtle organic FBM-warped sand ripples (zero striping)
        vec2 grainUV1 = vSandWorldPos.xz * 12.0;
        vec2 grainUV2 = vSandWorldPos.xz * 38.0;
        float g1 = valueNoise(grainUV1);
        float g2 = valueNoise(grainUV2);
        float g1x = valueNoise(grainUV1 + vec2(0.2, 0.0)) - g1;
        float g1z = valueNoise(grainUV1 + vec2(0.0, 0.2)) - g1;
        float g2x = valueNoise(grainUV2 + vec2(0.25, 0.0)) - g2;
        float g2z = valueNoise(grainUV2 + vec2(0.0, 0.25)) - g2;

        // Subtle organic wind-warped micro-ripples on dunes & seabed
        float warp = fbm2(vSandWorldPos.xz * 0.24) * 4.5;
        float duneMask = smoothstep(2.0, 5.0, vSandWorldPos.y);
        float seabedMask = smoothstep(-0.8, -3.0, vSandWorldPos.y);
        float ripplePhase = vSandWorldPos.z * 0.95 + vSandWorldPos.x * 0.42 + warp;
        float rippleDeriv = cos(ripplePhase) * (duneMask * 0.018 + seabedMask * 0.012);

        float grainStrength = mix(0.24, 0.07, wetness);
        vec3 microPerturb = vec3(
          (g1x * 0.65 + g2x * 0.55) * grainStrength,
          0.0,
          (g1z * 0.65 + g2z * 0.55) * grainStrength + rippleDeriv
        );

        vec3 worldN = normalize(vSandWorldNormal + footPerturb + microPerturb);
        // Convert world-space perturbed normal into Three.js view-space normal
        csm_FragNormal = normalize((viewMatrix * vec4(worldN, 0.0)).xyz);

        // 3) Natural coastal sand albedo variation (warm sunlit golden dry -> rich dark wet -> coral seabed -> cliffs)
        float macroVar = fbm2(vSandWorldPos.xz * 0.055);
        float fineVar = fbm2(vSandWorldPos.xz * 0.55);

        vec3 drySandLight = vec3(0.72, 0.61, 0.43);
        vec3 drySandWarm  = vec3(0.62, 0.50, 0.34);
        vec3 drySand = mix(drySandWarm, drySandLight, clamp(macroVar * 0.8 + fineVar * 0.35, 0.0, 1.0));

        // Darker saturated wet sand near shoreline
        vec3 wetSand = drySand * vec3(0.44, 0.40, 0.36);
        // Seabed sand deeper underwater (rich contrast so dancing caustics pop clearly!)
        vec3 seabedSand = mix(vec3(0.36, 0.37, 0.31), vec3(0.14, 0.21, 0.22), smoothstep(-1.5, -8.5, vSandWorldPos.y));

        vec3 baseSand = mix(drySand, wetSand, smoothstep(0.05, 0.92, wetness));
        baseSand = mix(baseSand, seabedSand, smoothstep(-0.3, -2.8, vSandWorldPos.y));

        // Rocky headland cliff faces blend naturally on steep/high flanks
        float cliffSlope = smoothstep(0.76, 0.54, vSandWorldNormal.y);
        float cliffElev = smoothstep(3.8, 6.8, vSandWorldPos.y) + smoothstep(32.0, 42.0, abs(vSandWorldPos.x)) * 0.7;
        float rockMix = clamp(max(cliffSlope * smoothstep(0.5, 2.5, vSandWorldPos.y), cliffElev * 0.55), 0.0, 1.0);
        vec3 cliffRock = mix(vec3(0.30, 0.27, 0.23), vec3(0.45, 0.40, 0.34), fbm2(vSandWorldPos.xz * 0.22));
        baseSand = mix(baseSand, cliffRock, rockMix);

        // Warm sand-shadow darkening inside depressed footprint sole + lighter displaced rim
        float depressShadow = smoothstep(0.0, -0.15, deformH) * 0.36 + printAO * 0.24;
        float rimLighten = smoothstep(0.015, 0.12, deformH) * 0.11 * (1.0 - wetness);
        baseSand = baseSand * mix(vec3(1.0), vec3(0.52, 0.44, 0.35), clamp(depressShadow, 0.0, 0.82)) + vec3(rimLighten * 1.1, rimLighten * 0.98, rimLighten * 0.8);

        csm_DiffuseColor = vec4(baseSand, 1.0);
        csm_AO = clamp(1.0 - printAO * 0.62 - smoothstep(0.0, -0.18, deformH) * 0.35, 0.20, 1.0);

        // Dynamic wet-to-dry roughness: glossy mirror-like sheen on wave-washed wet sand!
        float baseRough = mix(0.90, 0.10, smoothstep(0.15, 0.95, wetness));
        baseRough = mix(baseRough, 0.06, clamp(wetness * printAO * 0.85, 0.0, 1.0));
        csm_Roughness = mix(baseRough, 0.86, rockMix);

        // 4) Dry sand quartz sunlight sparkle / micro-glint
        vec3 viewDir = normalize(cameraPosition - vSandWorldPos);
        vec3 halfVec = normalize(uSunDir + viewDir);
        vec2 glintCell = floor(vSandWorldPos.xz * 48.0);
        vec2 randTilt = hash22(glintCell) * 2.0 - 1.0;
        vec3 grainNormal = normalize(worldN + vec3(randTilt.x * 0.52, 0.0, randTilt.y * 0.52));
        float specDot = max(0.0, dot(grainNormal, halfVec));
        float sparkleMask = step(0.87, hash21(glintCell + 13.7));
        float sparkle = pow(specDot, 110.0) * sparkleMask * (1.0 - wetness) * (1.0 - rockMix);
        float distFade = 1.0 - smoothstep(12.0, 42.0, length(cameraPosition - vSandWorldPos));
        float sunVis = smoothstep(0.05, 0.28, uSunDir.y);

        // Subtle wet-sand Fresnel specular sheen boost
        float fresnelWet = pow(1.0 - max(0.0, dot(worldN, viewDir)), 4.0) * wetness * smoothstep(-0.08, 0.05, vSandWorldPos.y - uWaterLevel);
        vec3 wetSheen = vec3(0.24, 0.36, 0.46) * fresnelWet * 0.18 * sunVis;

        // 5) Underwater dual-layer animated caustics on submerged seabed
        vec3 caustics = computeCaustics(vSandWorldPos, worldN, uSunDir, uWaterLevel + 0.10, uTime);
        float subDepth = max(0.0, uWaterLevel - vSandWorldPos.y);
        vec3 causticGlow = caustics * vec3(0.45, 0.92, 1.0) * mix(0.62, 0.36, clamp(subDepth / 8.5, 0.0, 1.0));

        csm_Emissive = vec3(1.0, 0.94, 0.78) * sparkle * distFade * sunVis * 1.4 + wetSheen + causticGlow;
      }
    `})}function qn(o,t,i){const s=i?.wetBand?1:0,l=i?.rockTint?1:0;return new pf({baseMaterial:ea,...o,uniforms:{uTime:t.uTime,uSunDir:t.uSunDir,uWaterLevel:t.uWaterLevel,uCameraMatrixWorld:t.uCameraMatrixWorld,uEnableWetBand:{value:s},uEnableRockDetail:{value:l}},fragmentShader:`
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform float uWaterLevel;
      uniform mat4 uCameraMatrixWorld;
      uniform float uEnableWetBand;
      uniform float uEnableRockDetail;

      ${jm}
      ${_y}

      void main() {
        // Reconstruct exact world-space position & normal from view-space varyings (works on SkinnedMesh too!)
        vec3 worldPos = (uCameraMatrixWorld * vec4(-vViewPosition, 1.0)).xyz;
        vec3 worldNormal = normalize((uCameraMatrixWorld * vec4(normalize(vNormal), 0.0)).xyz);

        // Optional coastal rock stratification & mossy wet tide-line band
        if (uEnableRockDetail > 0.5) {
          float strata = fbm2(vec2(worldPos.x * 0.45 + worldPos.z * 0.35, worldPos.y * 1.4));
          float micro = valueNoise(worldPos.xz * 3.8 + worldPos.y * 2.5);
          csm_DiffuseColor.rgb *= mix(0.76, 1.18, strata * 0.7 + micro * 0.3);
        }

        if (uEnableWetBand > 0.5) {
          float wetH = smoothstep(0.62, -0.05, worldPos.y - uWaterLevel);
          csm_DiffuseColor.rgb *= mix(1.0, 0.52, wetH);
          // Subtle green coastal algae tint near waterline on boulders
          float algaeBand = smoothstep(0.35, -0.1, worldPos.y - uWaterLevel) * smoothstep(-2.4, -0.25, worldPos.y - uWaterLevel);
          float algaeNoise = valueNoise(worldPos.xz * 2.1 + worldPos.y * 1.7);
          csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, vec3(0.16, 0.25, 0.14), algaeBand * algaeNoise * 0.55);
          csm_Roughness = mix(csm_Roughness, 0.14, wetH);
        }

        // Animated depth-attenuated caustics whenever submerged
        vec3 caustics = computeCaustics(worldPos, worldNormal, uSunDir, uWaterLevel + 0.14, uTime);
        csm_Emissive += caustics * vec3(0.48, 0.94, 1.0) * 1.15;
      }
    `})}function NR(o){const i=new mi(1,1,150,150);i.rotateX(-Math.PI/2);const s=i.attributes.position;for(let f=0;f<s.count;f++){const d=s.getX(f)*2,p=s.getZ(f)*2,m=Math.sign(d)*(Math.abs(d)*58+Math.pow(Math.abs(d),3)*270),_=(p<0?-1:1)*(Math.abs(p)*52+Math.pow(Math.abs(p),3)*260)-34;s.setXYZ(f,m,0,_)}s.needsUpdate=!0,i.computeBoundingSphere();const l=new Pn({transparent:!0,depthWrite:!0,side:si,uniforms:{uTime:{value:0},uWaveIntensity:{value:1},uSunDir:{value:new F(.45,.72,-.52).normalize()},uSunColor:{value:new ve(1,.96,.86)},uSkyZenith:{value:new ve(.14,.44,.82)},uSkyHorizon:{value:new ve(.68,.84,.95)},uTerrainHeightTex:{value:o},uHeightBounds:{value:new F(hf,df,Jm)},uFogColor:{value:new ve(.68,.84,.94)},uFogDensity:{value:.0038}},vertexShader:`
      uniform float uTime;
      uniform float uWaveIntensity;
      uniform sampler2D uTerrainHeightTex;
      uniform vec3 uHeightBounds;

      varying vec3 vWorldPos;
      varying vec3 vWaveNormal;
      varying float vFoamCrest;
      varying float vWaterDepth;
      varying float vWaveHeight;

      ${vy}

      float sampleSeabedY(vec2 xz) {
        vec2 huv = (xz + uHeightBounds.x * 0.5) / uHeightBounds.x;
        if (huv.x < 0.0 || huv.x > 1.0 || huv.y < 0.0 || huv.y > 1.0) return -12.0;
        vec4 enc = texture2D(uTerrainHeightTex, huv);
        float norm = (enc.r * 255.0 * 256.0 + enc.g * 255.0) / 65535.0;
        return mix(uHeightBounds.y, uHeightBounds.z, norm);
      }

      void main() {
        vec3 basePos = position;
        float seabedY = sampleSeabedY(basePos.xz);
        float staticDepth = max(0.0, -seabedY);

        GerstnerResult g = evalGerstner(basePos.xz, uTime, uWaveIntensity, staticDepth);
        vec3 displaced = basePos + g.displacement;

        // Re-sample seabed at displaced XZ for crisp accurate shoreline water depth
        float finalSeabedY = sampleSeabedY(displaced.xz);
        vWaterDepth = displaced.y - finalSeabedY;
        vWorldPos = (modelMatrix * vec4(displaced, 1.0)).xyz;
        vWaveNormal = g.normal;
        vFoamCrest = g.foam;
        vWaveHeight = g.displacement.y;

        gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
      }
    `,fragmentShader:`
      precision highp float;

      uniform float uTime;
      uniform float uWaveIntensity;
      uniform vec3 uSunDir;
      uniform vec3 uSunColor;
      uniform vec3 uSkyZenith;
      uniform vec3 uSkyHorizon;
      uniform vec3 uFogColor;
      uniform float uFogDensity;

      varying vec3 vWorldPos;
      varying vec3 vWaveNormal;
      varying float vFoamCrest;
      varying float vWaterDepth;
      varying float vWaveHeight;

      ${jm}

      // Animated high-frequency micro-capillary ripple normal detail
      vec3 microRippleNormal(vec2 xz, float time, float distFade) {
        vec2 uv1 = xz * 1.45 + vec2(time * 0.34, time * 0.52);
        vec2 uv2 = xz * 2.85 - vec2(time * 0.48, -time * 0.27);
        vec2 uv3 = xz * 5.60 + vec2(-time * 0.22, time * 0.65);

        float n1 = valueNoise(uv1);
        float n1x = valueNoise(uv1 + vec2(0.15, 0.0)) - n1;
        float n1z = valueNoise(uv1 + vec2(0.0, 0.15)) - n1;

        float n2 = valueNoise(uv2);
        float n2x = valueNoise(uv2 + vec2(0.15, 0.0)) - n2;
        float n2z = valueNoise(uv2 + vec2(0.0, 0.15)) - n2;

        float n3 = valueNoise(uv3);
        float n3x = valueNoise(uv3 + vec2(0.18, 0.0)) - n3;
        float n3z = valueNoise(uv3 + vec2(0.0, 0.18)) - n3;

        float amp = (0.19 + 0.08 * uWaveIntensity) * distFade;
        return vec3((n1x + n2x * 0.7 + n3x * 0.4) * amp, 0.0, (n1z + n2z * 0.7 + n3z * 0.4) * amp);
      }

      void main() {
        // Clip cleanly where water mesh passes beneath dry beach sand
        if (vWaterDepth < -0.04) discard;

        vec3 toCam = cameraPosition - vWorldPos;
        float dist = length(toCam);
        vec3 V = toCam / max(dist, 0.0001);
        float detailFade = 1.0 - smoothstep(24.0, 145.0, dist);

        vec3 N = normalize(vWaveNormal + microRippleNormal(vWorldPos.xz, uTime, detailFade));
        vec3 sunDir = normalize(uSunDir);
        float sunElev = smoothstep(-0.02, 0.22, sunDir.y);

        // ============================================================
        // UNDERSIDE OF WATER SURFACE (Snell's Window + Total Internal Reflection)
        // ============================================================
        if (!gl_FrontFacing) {
          vec3 Ndown = -N;
          float cosTheta = clamp(dot(Ndown, V), 0.0, 1.0);
          // Air/water critical angle is ~48.6 deg -> cos(48.6) ≈ 0.661
          float snellMask = smoothstep(0.56, 0.74, cosTheta);

          // Refracted sky & glowing solar disc visible inside Snell's window
          vec3 skyCol = mix(uSkyHorizon, uSkyZenith, pow(cosTheta, 0.75)) * 1.15;
          vec3 refractedRay = normalize(mix(-V, sunDir, 0.25) + Ndown * 0.22);
          float sunSpot = pow(max(0.0, dot(normalize(-V + Ndown * 0.32), sunDir)), 48.0);
          vec3 windowColor = skyCol + uSunColor * sunSpot * 2.8 * sunElev;

          // Outside Snell's window: shimmering deep turquoise-blue total internal reflection
          float rippleShimmer = fbm2(vWorldPos.xz * 0.65 + vec2(uTime * 0.35, -uTime * 0.28));
          vec3 tirColor = mix(vec3(0.02, 0.20, 0.30), vec3(0.06, 0.38, 0.48), rippleShimmer * 0.7 + cosTheta * 0.5);

          vec3 col = mix(tirColor, windowColor, snellMask);
          // Underwater distance fog fading toward deep aquatic blue
          float uwFog = 1.0 - exp(-dist * 0.036);
          col = mix(col, vec3(0.03, 0.26, 0.38) * (0.45 + 0.55 * sunElev), uwFog);

          gl_FragColor = vec4(col, mix(0.92, 0.72, snellMask));
          return;
        }

        // ============================================================
        // ABOVE-WATER PHYSICALLY INSPIRED OCEAN SHADING
        // ============================================================
        float NdotV = max(0.001, dot(N, V));
        // Schlick Fresnel for water (F0 = 0.02)
        float fresnel = 0.02 + 0.98 * pow(1.0 - NdotV, 5.0);
        fresnel = clamp(fresnel * 1.08, 0.02, 0.96);

        // Sky reflection color along reflected ray
        vec3 R = reflect(-V, N);
        float skyGrad = pow(clamp(R.y * 0.85 + 0.15, 0.0, 1.0), 0.65);
        vec3 reflColor = mix(uSkyHorizon, uSkyZenith, skyGrad);

        // Crisp sun specular glitter path + softer atmospheric sun sheen
        vec3 H = normalize(sunDir + V);
        float NdotH = max(0.0, dot(N, H));
        float specTight = pow(NdotH, 420.0) * 3.8;
        float specBroad = pow(NdotH, 46.0) * 0.42;
        vec3 sunSpec = uSunColor * (specTight + specBroad) * sunElev;

        // Beer-Lambert depth-based tropical turquoise -> teal -> deep cobalt water color
        float depth = max(0.0, vWaterDepth);
        vec3 shallowTurquoise = vec3(0.04, 0.46, 0.48);
        vec3 midTeal          = vec3(0.015, 0.24, 0.36);
        vec3 deepOcean        = vec3(0.008, 0.08, 0.19);

        vec3 waterBody = mix(shallowTurquoise, midTeal, smoothstep(0.35, 3.2, depth));
        waterBody = mix(waterBody, deepOcean, smoothstep(2.6, 9.2, depth));
        waterBody *= (0.35 + 0.72 * sunElev);

        // Subsurface scattering (SSS): radiant aquamarine glow through sunlit wave crests
        float backLight = pow(clamp(dot(V, -sunDir + N * 0.42), 0.0, 1.0), 3.5);
        float crestThin = clamp(vWaveHeight * 2.2 + 0.35, 0.0, 1.0);
        vec3 sssGlow = vec3(0.04, 0.56, 0.52) * (backLight * 0.80 + pow(1.0 - NdotV, 2.0) * 0.18) * crestThin * sunElev * 0.55;

        vec3 surfaceColor = mix(waterBody + sssGlow, reflColor * 0.78, fresnel) + sunSpec * 0.75;

        // Shoreline swash foam + organic cellular lacy foam + steep wave whitecaps (no banding!)
        float foamNoise1 = fbm2(vWorldPos.xz * 0.85 + vec2(uTime * 0.16, -uTime * 0.28));
        float foamNoise2 = fbm2(vWorldPos.xz * 2.15 - vec2(uTime * 0.24, uTime * 0.35));
        float lacyFoam = smoothstep(0.42, 0.74, foamNoise1 * 0.55 + foamNoise2 * 0.60);

        // Crisp organic foam ribbon right where wave meets wet sand + broken lacy backwash
        float edgeLine = smoothstep(0.24, 0.01, depth) * (0.55 + 0.45 * foamNoise2);
        float shoreBand = smoothstep(0.72, 0.05, depth) * lacyFoam * (0.55 + 0.45 * foamNoise1);
        float crestFoam = smoothstep(0.22, 0.78, vFoamCrest) * smoothstep(0.46, 0.74, foamNoise1) * smoothstep(0.5, 2.0, depth);

        float totalFoam = clamp(edgeLine + shoreBand * 0.72 + crestFoam * 0.58, 0.0, 0.92);
        vec3 foamColor = mix(vec3(0.76, 0.84, 0.88), vec3(0.95, 0.94, 0.91), sunElev) * (0.52 + 0.48 * max(0.2, dot(N, sunDir)));

        surfaceColor = mix(surfaceColor, foamColor, totalFoam);

        // Smooth coastal horizon aerial perspective fog
        float fogAmt = 1.0 - exp(-pow(dist * uFogDensity, 1.55));
        surfaceColor = mix(surfaceColor, uFogColor * 0.85, clamp(fogAmt, 0.0, 0.92));

        // Physically motivated water opacity: crystal-clear feathering at ankle-deep shore -> opaque in deep water
        float edgeFeather = smoothstep(-0.02, 0.16, depth);
        float depthOpacity = 1.0 - exp(-depth * 0.78);
        float alpha = clamp(max(max(depthOpacity, fresnel * 0.85), totalFoam) * edgeFeather, 0.0, 0.985);

        gl_FragColor = vec4(surfaceColor, alpha);
      }
    `}),c=new ne(i,l);return c.renderOrder=2,c.frustumCulled=!1,{mesh:c,material:l,update(f,d,p,m,_,v){l.uniforms.uTime.value=f,l.uniforms.uWaveIntensity.value=d,l.uniforms.uSunDir.value.copy(p),l.uniforms.uSunColor.value.copy(m),l.uniforms.uSkyZenith.value.copy(_),l.uniforms.uSkyHorizon.value.copy(v),l.uniforms.uFogColor.value.copy(v)},dispose(){i.dispose(),l.dispose()}}}class ec extends ne{constructor(){const t=ec.SkyShader,i=new Pn({name:t.name,uniforms:ry.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:oi,depthWrite:!1});super(new Vn(1,1,1),i),this.isSky=!0}}ec.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function LR(o,t){const i=new ec;i.scale.setScalar(900),t.add(i);const s=i.material.uniforms;s.turbidity.value=3.6,s.rayleigh.value=1.65,s.mieCoefficient.value=.0045,s.mieDirectionalG.value=.84;const l=new mi(58,58),c=new Pn({transparent:!0,depthWrite:!1,blending:ql,uniforms:{uSunColor:{value:new ve(1,.96,.85)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uSunColor;
      void main() {
        float d = length(vUv - 0.5) * 2.0;
        float core = smoothstep(0.24, 0.11, d);
        float halo = exp(-d * 3.8) * 0.55;
        float alpha = clamp(core + halo, 0.0, 1.0) * smoothstep(1.0, 0.72, d);
        gl_FragColor = vec4(uSunColor * (core * 2.2 + halo * 1.1), alpha);
      }
    `}),f=new ne(l,c);f.frustumCulled=!1,f.renderOrder=0,t.add(f);const d=new uT(16774624,2.85);d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=5,d.shadow.camera.far=180;const p=46;d.shadow.camera.left=-p,d.shadow.camera.right=p,d.shadow.camera.top=p,d.shadow.camera.bottom=-p,d.shadow.bias=-55e-5,d.shadow.normalBias=.032,d.shadow.radius=2.6,t.add(d),t.add(d.target),d.target.position.set(0,0,8);const m=new oT(8964607,13940364,.78);t.add(m);const _=new bm(o);_.compileEquirectangularShader();let v=null;const g=new tc,S=new ec;S.scale.setScalar(100),g.add(S);const E=new F(.42,.62,-.66).normalize(),A=new ve(16774624),M=new ve(1994440),y=new ve(10406632);t.fog=new uf(y.getHex(),.0036);let D=-999,O=-999;const T=(R,L,P,b)=>{if(Math.abs(R-D)<.15&&Math.abs(L-O)<.15)return;D=R,O=L;const U=ue.degToRad(90-R),B=ue.degToRad(L);E.setFromSphericalCoords(1,U,B).normalize(),s.sunPosition.value.copy(E);const I=1-ue.smoothstep(R,6,36);s.turbidity.value=ue.lerp(2.2,7.6,I),s.rayleigh.value=ue.lerp(2.35,3.1,I),s.mieCoefficient.value=ue.lerp(.0032,.0095,I);const W=S.material.uniforms;W.sunPosition.value.copy(E),W.turbidity.value=s.turbidity.value,W.rayleigh.value=s.rayleigh.value,W.mieCoefficient.value=s.mieCoefficient.value,W.mieDirectionalG.value=s.mieDirectionalG.value,v&&v.dispose(),v=_.fromScene(g,.04),b.environment=v.texture,b.environmentIntensity=ue.lerp(.48,.38,I),A.setRGB(1,ue.lerp(.95,.7,I),ue.lerp(.86,.42,I)),c.uniforms.uSunColor.value.copy(A),d.color.copy(A),d.intensity=ue.lerp(1.85,1.65,I),d.position.copy(E).multiplyScalar(78).add(new F(0,0,8)),M.setRGB(ue.lerp(.1,.22,I),ue.lerp(.38,.34,I),ue.lerp(.78,.62,I)),y.setRGB(ue.lerp(.56,.86,I),ue.lerp(.74,.64,I),ue.lerp(.88,.52,I)),m.color.copy(y),m.groundColor.setRGB(ue.lerp(.68,.6,I),ue.lerp(.58,.44,I),ue.lerp(.44,.3,I)),m.intensity=ue.lerp(.46,.38,I),b.fog instanceof uf&&(b.fog.color.copy(y),b.fog.density=ue.lerp(.0033,.0044,I))};return T(38,152,o,t),{sky:i,sunLight:d,hemiLight:m,sunDisc:f,sunDirection:E,sunColor:A,skyZenithColor:M,horizonColor:y,setSunAngle:T,updateSunDiscPosition(R){i.position.copy(R),f.position.copy(R).addScaledVector(E,380),f.lookAt(R)},dispose(){v&&v.dispose(),_.dispose(),l.dispose(),c.dispose(),i.geometry.dispose(),i.material.dispose(),S.geometry.dispose(),S.material.dispose()}}}function UR(o){let t=o>>>0;return()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function PR(){const o=document.createElement("canvas");o.width=128,o.height=128;const t=o.getContext("2d"),i=t.createRadialGradient(64,64,6,64,64,60);i.addColorStop(0,"rgba(18, 12, 6, 0.44)"),i.addColorStop(.55,"rgba(18, 12, 6, 0.20)"),i.addColorStop(1,"rgba(18, 12, 6, 0.0)"),t.fillStyle=i,t.fillRect(0,0,128,128);const s=new Ym(o);return s.needsUpdate=!0,s}function CS(o,t,i=12){const s=document.createElement("canvas");s.width=256,s.height=256;const l=s.getContext("2d"),c=256/i;for(let d=0;d<i;d++)l.fillStyle=d%2===0?o:t,l.fillRect(d*c,0,c+.5,256);l.fillStyle="rgba(0,0,0,0.035)";for(let d=0;d<256;d+=4)l.fillRect(0,d,256,1);const f=new Ym(s);return f.colorSpace=ai,f.wrapS=Kl,f.wrapT=Kl,f}function OR(o,t,i){const s=document.createElement("canvas");s.width=128,s.height=512;const l=s.getContext("2d");l.fillStyle=o,l.fillRect(0,0,128,512),l.fillStyle=t,l.fillRect(50,0,28,512),l.fillStyle=i,l.fillRect(42,0,5,512),l.fillRect(81,0,5,512),l.fillStyle=i,l.fillRect(0,160,128,22);const c=new Ym(s);return c.colorSpace=ai,c}function zR(o,t){const i=new Ri(o,26,20),s=i.attributes.position,l=new F,c=t*1.73,f=t*2.91;for(let d=0;d<s.count;d++){l.fromBufferAttribute(s,d);const p=l.x/o,m=l.y/o,_=l.z/o,v=Math.sin(p*2.5+c)*Math.cos(_*2.3-f)*.16+Math.sin(m*3.8+p*2.9+f)*.085+Math.cos(_*4.6-m*2.6+c)*.05,g=m<0?.68:.84;l.multiplyScalar(1+v),l.y*=g,s.setXYZ(d,l.x,l.y,l.z)}return i.computeVertexNormals(),i}function IR(){const t=[],i=[],s=[],l=[];for(let d=0;d<=14;d++){const p=d/14,m=p*3.55,_=Math.sin(p*Math.PI*.78)*.62-Math.pow(p,2.3)*.92,v=Math.sin(Math.pow(p,.72)*Math.PI)*.68,g=d>0&&d<14?d%2===0?1:.74:.15,S=v*g,E=S*.34;t.push(-S,_-E,m),t.push(0,_,m),t.push(S,_-E,m),i.push(0,p,.5,p,1,p),l.push(p*p,1,0,p*p,.15,0,p*p,1,0)}for(let d=0;d<14;d++){const p=d*3,m=(d+1)*3;s.push(p,m,p+1),s.push(p+1,m,m+1),s.push(p+1,m+1,p+2),s.push(p+2,m+1,m+2)}const f=new On;return f.setAttribute("position",new je(t,3)),f.setAttribute("uv",new je(i,2)),f.setAttribute("color",new je(l,3)),f.setIndex(s),f.computeVertexNormals(),f}function BR(o){const t=new Zn,i=[],s=[],l=UR(20261121),c=[],f=PR();c.push(f);const d=new km({map:f,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});c.push(d);const p=(pt,K,mt,Bt,Ct=0)=>{const Ot=new mi(mt*2,Bt*2);Ot.rotateX(-Math.PI/2);const Lt=new ne(Ot,d),Nt=Ie(pt,K),Pt=xo(pt,K);Lt.position.set(pt,Nt+.03,K),Lt.quaternion.setFromUnitVectors(new F(0,1,0),Pt),Lt.rotateY(Ct),Lt.renderOrder=1,t.add(Lt),c.push(Ot)},m=qn({color:8090215,roughness:.86,metalness:.02},o,{wetBand:!0,rockTint:!0});c.push(m);const _=[[-28.5,-2.5,3.2,1],[-25.2,-5.8,2.3,2],[-31.5,2.8,3.9,3],[-22.8,-1.2,1.45,4],[-26.5,7.2,2.2,5],[27.5,-3.4,3.4,6],[24.2,-7.2,2.1,7],[31.2,2.2,4.1,8],[21.6,1.4,1.35,9],[26,9.5,2.4,10],[-16.4,-3.6,1.15,11],[-17.8,-2.8,.78,12],[16.8,-4.4,1.25,13],[18.1,-3.5,.72,14],[-8.5,-22.5,2.1,15],[-5.8,-24.2,1.35,16],[7.2,-26,2.35,17],[10.2,-24.8,1.45,18],[-1.5,-34,2.7,19],[2.1,-35.8,1.65,20],[-13,-32.5,2.5,21],[14.5,-33,2.6,22],[.5,-45.5,3.1,23],[-6.5,-43,2,24],[8.2,-44.2,2.2,25]];for(const[pt,K,mt,Bt]of _){const Ct=zR(mt,Bt);c.push(Ct);const Ot=new ne(Ct,m),Lt=Ie(pt,K);Ot.position.set(pt,Lt+mt*.28,K),Ot.rotation.set((l()-.5)*.25,l()*Math.PI*2,(l()-.5)*.25),Ot.castShadow=!0,Ot.receiveShadow=!0,t.add(Ot),i.push({type:"circle",x:pt,z:K,radius:mt*.92,height:mt*1.1,label:"boulder"})}const v=qn({color:8216902,roughness:.92,metalness:0},o),g=new ea({color:5059612,roughness:.78}),S={value:0},E=new pf({baseMaterial:ea,color:3898673,roughness:.58,metalness:.02,side:si,uniforms:{uWindTime:S},vertexShader:`
      uniform float uWindTime;
      varying float vFrondTip;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vFrondTip = clamp(position.z / 3.55, 0.0, 1.0);
        float bend = vFrondTip * vFrondTip;
        float flutter = abs(uv.x - 0.5) * 2.0;

        float phase = wp.x * 0.22 + wp.z * 0.19;
        float swayX = sin(uWindTime * 1.65 + phase) * 0.28 * bend + sin(uWindTime * 3.8 + phase * 2.1) * 0.07 * flutter * bend;
        float swayY = cos(uWindTime * 1.45 + phase * 1.3) * 0.14 * bend;
        float swayZ = cos(uWindTime * 1.25 + phase * 0.8) * 0.16 * bend;

        csm_Position = position + vec3(swayX, swayY, swayZ);
      }
    `,fragmentShader:`
      varying float vFrondTip;
      void main() {
        // Warm sunlit tropical olive-green tips -> deeper emerald base
        vec3 baseGreen = vec3(0.11, 0.28, 0.09);
        vec3 tipGreen  = vec3(0.32, 0.52, 0.16);
        csm_DiffuseColor.rgb = mix(baseGreen, tipGreen, vFrondTip);
      }
    `});c.push(v,g,E);const A=IR(),M=new Ri(.16,10,8);c.push(A,M);const y=[[-21.5,13.5,8.8,.26,-.45],[-18.8,17.2,7.6,.22,.25],[-12.2,22.8,9.4,.2,-.2],[-4.5,25.4,8.2,.18,.35],[4.8,24.5,9.1,.24,-.3],[13.4,21.8,8.5,.25,-.6],[19.2,16,9.6,.28,-.85],[22.4,12.2,7.4,.32,-1.1],[-26.2,18.8,10.1,.19,.4],[25.6,19.2,9.2,.21,-.5]];for(const[pt,K,mt,Bt,Ct]of y){const Ot=Ie(pt,K),Lt=new Zn;Lt.position.set(pt,Ot-.15,K);const Nt=[],Pt=12,he=Math.cos(Ct)*mt*Bt,Me=Math.sin(Ct)*mt*Bt;for(let et=0;et<=Pt;et++){const xt=et/Pt,wt=Math.pow(xt,1.55);Nt.push(new F(he*wt,xt*mt,Me*wt))}const de=new Mm(Nt),me=new ff(de,16,.26,9,!1),Y=me.attributes.position,Se=new F;for(let et=0;et<Y.count;et++){Se.fromBufferAttribute(Y,et);const xt=ue.clamp(Se.y/mt,0,1),wt=de.getPointAt(xt),Ut=Se.clone().sub(wt),St=ue.lerp(1.38,.56,xt),Mt=1+Math.sin(xt*54)*.06;Se.copy(wt).addScaledVector(Ut,St*Mt),Y.setXYZ(et,Se.x,Se.y,Se.z)}me.computeVertexNormals(),c.push(me);const re=new ne(me,v);re.castShadow=!0,re.receiveShadow=!0,Lt.add(re);const z=de.getPointAt(1),w=new Zn;w.position.copy(z);for(let et=0;et<3;et++){const xt=et/3*Math.PI*2+l(),wt=new ne(M,g);wt.position.set(Math.cos(xt)*.22,-.18,Math.sin(xt)*.22),wt.scale.set(.95,1.15,.95),wt.castShadow=!0,w.add(wt)}const it=10;for(let et=0;et<it;et++){const xt=et/it*Math.PI*2+(l()-.5)*.25,wt=et%2===0?-.18:.16,Ut=new ne(A,E);Ut.rotation.order="YXZ",Ut.rotation.set(wt,xt,(l()-.5)*.16);const St=.84+l()*.34;Ut.scale.setScalar(St),Ut.castShadow=!0,w.add(Ut)}Lt.add(w),t.add(Lt),p(pt,K,.72,.72),i.push({type:"circle",x:pt,z:K,radius:.45,height:mt,label:"palm"})}const D=new mi(.085,.85,1,4);D.translate(0,.425,0);const O=D.attributes.position;for(let pt=0;pt<O.count;pt++){const K=O.getX(pt),mt=O.getY(pt),Bt=mt/.85;O.setXYZ(pt,K*(1-Bt*.88),mt,Math.pow(Bt,2)*.24)}D.computeVertexNormals(),c.push(D);const T=new pf({baseMaterial:ea,color:7310404,roughness:.72,side:si,uniforms:{uWindTime:S},vertexShader:`
      uniform float uWindTime;
      varying float vBladeH;
      void main() {
        vBladeH = clamp(position.y / 0.85, 0.0, 1.0);
        vec4 instW = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float sway = sin(uWindTime * 2.1 + instW.x * 0.35 + instW.z * 0.25) * 0.22 * vBladeH * vBladeH;
        float swayZ = cos(uWindTime * 1.7 + instW.x * 0.28) * 0.12 * vBladeH * vBladeH;
        csm_Position = position + vec3(sway, 0.0, swayZ);
      }
    `,fragmentShader:`
      varying float vBladeH;
      void main() {
        vec3 baseCol = vec3(0.28, 0.36, 0.16);
        vec3 tipCol  = vec3(0.66, 0.64, 0.32); // sun-kissed sea oats gold tips
        csm_DiffuseColor.rgb = mix(baseCol, tipCol, vBladeH);
      }
    `});c.push(T);const R=[],L=new xn;for(let pt=0;pt<115;pt++){const K=(l()-.5)*62,Bt=To(K)+14.5+l()*24;if(Ie(K,Bt)<1.35)continue;const Ot=7+Math.floor(l()*5);for(let Lt=0;Lt<Ot;Lt++){const Nt=l()*Math.PI*2,Pt=l()*.42,he=K+Math.cos(Nt)*Pt,Me=Bt+Math.sin(Nt)*Pt,de=Ie(he,Me);L.position.set(he,de-.04,Me),L.rotation.set((l()-.5)*.22,l()*Math.PI*2,(l()-.5)*.22);const me=.65+l()*.75;L.scale.set(me,me*(.85+l()*.4),me),L.updateMatrix(),R.push(L.matrix.clone())}}const P=new Sm(D,T,R.length);for(let pt=0;pt<R.length;pt++)P.setMatrixAt(pt,R[pt]);P.instanceMatrix.needsUpdate=!0,P.receiveShadow=!0,t.add(P);const b=qn({color:10253384,roughness:.72,metalness:.02},o),U=qn({color:7031854,roughness:.76},o),B=new ea({color:14212320,roughness:.32,metalness:.78}),I=qn({color:16249575,roughness:.85},o);c.push(b,U,B,I);const W=[["#e05845","#faf5eb"],["#1d5d8c","#f8fafc"],["#178a82","#f7f1e1"],["#d98b2b","#fcf7ec"],["#c84b6b","#f9f4ed"]],J=[[-11.8,10.6,.14,0],[-4.6,12.2,-.1,1],[4.4,11.4,.12,2],[11.6,9.8,-.14,3],[17.4,12.8,.11,4]],X=(pt,K,mt,Bt)=>{const[Ct,Ot]=W[Bt%W.length],Lt=CS(Ct,Ot,14);c.push(Lt);const Nt=qn({map:Lt,roughness:.78,side:si},o);c.push(Nt);const Pt=new Zn,he=Ie(pt,K);Pt.position.set(pt,he-.08,K),Pt.rotation.z=mt,Pt.rotation.x=.06;const Me=new _f(.032,.036,2.55,10),de=new ne(Me,b);de.position.y=1.25,de.castShadow=!0,Pt.add(de);const me=new Eo(1.55,.52,14,2,!0),Y=me.attributes.position;for(let w=0;w<Y.count;w++){const it=Y.getX(w),et=Y.getY(w),xt=Y.getZ(w),wt=Math.hypot(it,xt);wt>.25&&wt<1.3&&Y.setY(w,et+.11)}me.computeVertexNormals();const Se=new ne(me,Nt);Se.position.y=2.38,Se.castShadow=!0,Se.receiveShadow=!0,Pt.add(Se);const re=new Ri(.055,8,8),z=new ne(re,b);z.position.y=2.66,Pt.add(z),c.push(Me,me,re),t.add(Pt),p(pt,K,1.35,1.35),i.push({type:"circle",x:pt,z:K,radius:.22,height:2.5,label:"umbrella"})};for(const[pt,K,mt,Bt]of J)X(pt,K,mt,Bt);const V=(pt,K,mt,Bt)=>{const Ct=new Zn,Ot=Ie(pt,K),Lt=xo(pt,K);Ct.position.set(pt,Ot+.02,K),Ct.quaternion.setFromUnitVectors(new F(0,1,0),Lt),Ct.rotateY(mt);const Nt=new Vn(.06,.34,.06),Pt=new Vn(.06,.065,1.88),he=new Vn(.66,.026,.11),Me=new Vn(.64,.026,.1),de=new Vn(.46,.09,.22);c.push(Nt,Pt,he,Me,de);const me=[[-.31,-.72],[.31,-.72],[-.31,.68],[.31,.68]];for(const[re,z]of me){const w=new ne(Nt,U);w.position.set(re,.17,z),w.castShadow=!0,Ct.add(w)}for(const re of[-.32,.32]){const z=new ne(Pt,b);z.position.set(re,.34,0),z.castShadow=!0,Ct.add(z)}for(let re=0;re<8;re++){const z=new ne(he,b);z.position.set(0,.38,-.82+re*.145),z.castShadow=!0,z.receiveShadow=!0,Ct.add(z)}const Y=new Zn;Y.position.set(0,.38,.26),Y.rotation.x=.56;for(let re=0;re<5;re++){const z=new ne(Me,b);z.position.set(0,0,.09+re*.135),z.castShadow=!0,z.receiveShadow=!0,Y.add(z)}const Se=new ne(de,I);Se.position.set(0,.055,.62),Se.castShadow=!0,Y.add(Se),Ct.add(Y),t.add(Ct),p(pt,K,.55,1.08,mt),i.push({type:"box",x:pt,z:K,halfW:.42,halfD:.98,rotationY:mt,height:.72,label:"chair"}),Bt&&s.push({position:new F(pt,Ot+.41,K),rotationY:mt,kind:"chair"})};V(-10.4,9.6,.18,!0),V(-3.2,11.2,-.12,!0),V(5.8,10.6,.08,!1),V(13,9,-.22,!1);const H=(pt,K,mt,Bt,Ct,Ot)=>{const Lt=CS(Bt,Ct,10);c.push(Lt);const Nt=qn({map:Lt,roughness:.92,side:si},o);c.push(Nt);const Pt=1.02,he=2.02,Me=new mi(Pt,he,8,14);Me.rotateX(-Math.PI/2);const de=Math.cos(mt),me=Math.sin(mt),Y=Me.attributes.position;for(let re=0;re<Y.count;re++){const z=Y.getX(re),w=Y.getZ(re),it=pt+z*de+w*me,et=K-z*me+w*de,xt=Ie(it,et)+.032+Math.sin(z*7+w*4)*.006;Y.setXYZ(re,it,xt,et)}Me.computeVertexNormals(),c.push(Me);const Se=new ne(Me,Nt);Se.receiveShadow=!0,t.add(Se),Ot&&s.push({position:new F(pt,Ie(pt,K)+.06,K),rotationY:mt,kind:"towel"})};H(-13.2,9.4,.14,"#e56b54","#f7efe1",!0),H(2.8,10.4,-.15,"#2b8a9e","#faf5ea",!0),H(-6.1,11,.08,"#e3a73b","#faf3e3",!1),H(10.2,8.8,-.18,"#36588c","#f4f7fa",!1),H(16,11.8,.24,"#d15a78","#fbf4ee",!1);const q=(pt,K,mt,Bt)=>{const Ct=qn({color:Bt,roughness:.36,metalness:.08},o),Ot=qn({color:16185594,roughness:.32,metalness:.05},o);c.push(Ct,Ot);const Lt=new Zn,Nt=Ie(pt,K),Pt=xo(pt,K);Lt.position.set(pt,Nt+.01,K),Lt.quaternion.setFromUnitVectors(new F(0,1,0),Pt),Lt.rotateY(mt);const he=new Vn(.66,.36,.4),Me=new Vn(.69,.085,.43),de=new Vn(.06,.08,.03),me=new Qm(.11,.015,6,12,Math.PI);c.push(he,Me,de,me);const Y=new ne(he,Ct);Y.position.y=.18,Y.castShadow=!0,Y.receiveShadow=!0,Lt.add(Y);const Se=new ne(Me,Ot);Se.position.y=.39,Se.castShadow=!0,Lt.add(Se);for(const re of[-.18,.18]){const z=new ne(de,B);z.position.set(re,.34,.21),Lt.add(z)}for(const re of[-.34,.34]){const z=new ne(me,Ot);z.position.set(re,.26,0),z.rotation.y=Math.PI/2,z.rotation.z=Math.PI,Lt.add(z)}t.add(Lt),p(pt,K,.44,.32,mt),i.push({type:"box",x:pt,z:K,halfW:.38,halfD:.26,rotationY:mt,height:.46,label:"cooler"})};q(-9.1,10.8,.45,2527912),q(4.5,9.7,-.35,14175294),q(14.3,10.6,.65,3107990);const st=(()=>{const pt=new Ri(1,20,24),K=pt.attributes.position;for(let mt=0;mt<K.count;mt++){const Bt=K.getX(mt),Ct=K.getY(mt),Ot=K.getZ(mt),Lt=Ct<0?1-Math.abs(Ct)*.25:1-Math.pow(Ct,2.2)*.14,Nt=Bt*.29*Lt,Pt=Ct*1.18,he=Math.pow(Ct,2)*.065,Me=Ot*.042*(1-Math.abs(Ct)*.35)+he;K.setXYZ(mt,Nt,Pt,Me)}return pt.computeVertexNormals(),pt})(),ut=new Eo(.08,.22,4);c.push(st,ut);const ct=(pt,K,mt,Bt,Ct,Ot,Lt)=>{const Nt=OR(Ct,Ot,Lt);c.push(Nt);const Pt=qn({map:Nt,roughness:.16,metalness:.06},o);c.push(Pt);const he=new Zn,Me=Ie(pt,K),de=new ne(st,Pt);de.castShadow=!0,de.receiveShadow=!0,he.add(de);const me=new ne(ut,Pt);if(me.position.set(0,-.78,-.09),me.rotation.x=-Math.PI*.45,he.add(me),mt)he.position.set(pt,Me+.92,K),he.rotation.set(.14,Bt,-.09),p(pt,K,.38,.32,Bt),i.push({type:"circle",x:pt,z:K,radius:.34,height:2,label:"surfboard"});else{const Y=xo(pt,K);he.position.set(pt,Me+.06,K),he.quaternion.setFromUnitVectors(new F(0,1,0),Y),he.rotateY(Bt),he.rotateX(Math.PI/2),p(pt,K,.38,1.15,Bt)}t.add(he)};ct(-7.8,7.6,!0,.55,"#faf6ec","#1e7f91","#e86a42"),ct(8.2,7.2,!0,-.42,"#f7c948","#faf8f2","#1d4c73"),ct(14.8,8.2,!1,.85,"#f2f7f7","#e05749","#257985");const kt=qn({color:8154974,roughness:.94,metalness:0},o,{wetBand:!0,rockTint:!0});c.push(kt);const Zt=[[-15.2,4.6,2.8,.35],[-2.4,5.8,2.1,-.22],[13.8,4.8,3.1,-.48],[20.2,6.2,2.4,.62]];for(const[pt,K,mt,Bt]of Zt){const Ct=new Mm([new F(-mt*.5,.02,0),new F(-mt*.15,.08,.14),new F(mt*.2,.04,-.1),new F(mt*.5,0,.06)]),Ot=new ff(Ct,12,.13,8,!1);c.push(Ot);const Lt=new ne(Ot,kt),Nt=Ie(pt,K),Pt=xo(pt,K);Lt.position.set(pt,Nt+.05,K),Lt.quaternion.setFromUnitVectors(new F(0,1,0),Pt),Lt.rotateY(Bt),Lt.castShadow=!0,Lt.receiveShadow=!0,t.add(Lt),p(pt,K,mt*.52,.28,Bt),i.push({type:"box",x:pt,z:K,halfW:mt*.48,halfD:.22,rotationY:Bt,height:.32,label:"driftwood"})}const k=new Eo(.06,.14,7);k.rotateX(Math.PI*.46);const ot=qn({color:16049364,roughness:.48,metalness:.05},o);c.push(k,ot);const Dt=55,$=new Sm(k,ot,Dt),vt=new ve,At=[16246744,15913410,15390920,14668743,16314342];for(let pt=0;pt<Dt;pt++){const K=(l()-.5)*44,mt=To(K)+1.2+l()*7.8,Bt=Ie(K,mt);L.position.set(K,Bt+.025,mt),L.rotation.set((l()-.5)*.3,l()*Math.PI*2,(l()-.5)*.3);const Ct=.7+l()*.85;L.scale.set(Ct,Ct*.75,Ct),L.updateMatrix(),$.setMatrixAt(pt,L.matrix),vt.setHex(At[pt%At.length]),$.setColorAt(pt,vt)}return $.instanceMatrix.needsUpdate=!0,$.instanceColor&&($.instanceColor.needsUpdate=!0),$.receiveShadow=!0,t.add($),{group:t,colliders:i,loungeSpots:s,update(pt){S.value=pt},dispose(){for(const pt of c)pt.dispose()}}}function di(o,t=16){const i=[],s=[],l=[],c=o.length;for(let p=0;p<c;p++){const m=o[p],_=p/Math.max(1,c-1),v=m.offsetX??0,g=m.offsetZ??0;for(let S=0;S<=t;S++){const E=S/t,A=E*Math.PI*2,M=v+Math.cos(A)*m.rx,y=g+Math.sin(A)*m.rz;i.push(M,m.y,y),s.push(E,_)}}const f=t+1;for(let p=0;p<c-1;p++)for(let m=0;m<t;m++){const _=p*f+m,v=(p+1)*f+m,g=(p+1)*f+(m+1),S=p*f+(m+1);l.push(_,v,S),l.push(S,v,g)}const d=new On;return d.setAttribute("position",new je(i,3)),d.setAttribute("uv",new je(s,2)),d.setIndex(l),d.computeVertexNormals(),d}function DS(o,t,i,s,l,c){const f=di(o,18),d=f.attributes.position,p=o[0].y,m=o[o.length-1].y,_=Math.max(.001,m-p),v=[],g=[];for(let E=0;E<d.count;E++){const A=ue.clamp((d.getY(E)-p)/_,0,1);if(A<.42){const M=ue.smoothstep(A,.08,.42);v.push(s,l,0,0),g.push(1-M,M,0,0)}else{const M=ue.smoothstep(A,.42,.78);v.push(l,c,0,0),g.push(1-M,M,0,0)}}f.setAttribute("skinIndex",new Gm(v,4)),f.setAttribute("skinWeight",new je(g,4));const S=new LE(f,t);return S.castShadow=!0,S.receiveShadow=!0,S.bind(i),S}class xy{root;skeleton;pelvis;spine;chest;neck;head;shoulderL;upperArmL;forearmL;shoulderR;upperArmR;forearmR;thighL;shinL;footL;thighR;shinR;footR;phase=0;prevStepSign=1;prevStrokePhase=0;smoothPose={};disposables=[];_leftFootWorld=new F;_rightFootWorld=new F;constructor(t,i){this.root=new Zn;const s=t.heightScale??1;this.root.scale.setScalar(s);const l=!!t.feminine,c=t.build==="athletic"?1.07:t.build==="slender"?.91:1,f=qn({color:t.skinTone,roughness:.56,metalness:.02},i),d=qn({color:t.primaryColor,roughness:.64,metalness:.04},i),p=qn({color:t.secondaryColor,roughness:.7,metalness:.02},i),m=qn({color:t.hairColor,roughness:.72,metalness:.06},i),_=new ea({color:16250869,roughness:.25}),v=new ea({color:2497815,roughness:.12}),g=new ea({color:new ve(t.skinTone).lerp(new ve(10176070),.34),roughness:.45}),S=new ea({color:1054752,roughness:.08,metalness:.82});this.disposables.push(f,d,p,m,_,v,g,S);const E=new An;E.name="Root",this.pelvis=new An,this.pelvis.name="Pelvis",this.pelvis.position.set(0,.94,0),E.add(this.pelvis),this.spine=new An,this.spine.name="Spine",this.spine.position.set(0,.16,0),this.pelvis.add(this.spine),this.chest=new An,this.chest.name="Chest",this.chest.position.set(0,.21,0),this.spine.add(this.chest),this.neck=new An,this.neck.name="Neck",this.neck.position.set(0,.21,0),this.chest.add(this.neck),this.head=new An,this.head.name="Head",this.head.position.set(0,.09,.01),this.neck.add(this.head);const A=(l?.15:.174)*c,M=(l?.096:.092)*c;this.shoulderL=new An,this.shoulderL.position.set(-A,.15,0),this.chest.add(this.shoulderL),this.upperArmL=new An,this.upperArmL.position.set(-.015,-.025,0),this.shoulderL.add(this.upperArmL),this.forearmL=new An,this.forearmL.position.set(0,-.275,0),this.upperArmL.add(this.forearmL),this.shoulderR=new An,this.shoulderR.position.set(A,.15,0),this.chest.add(this.shoulderR),this.upperArmR=new An,this.upperArmR.position.set(.015,-.025,0),this.shoulderR.add(this.upperArmR),this.forearmR=new An,this.forearmR.position.set(0,-.275,0),this.upperArmR.add(this.forearmR),this.thighL=new An,this.thighL.position.set(-M,-.04,0),this.pelvis.add(this.thighL),this.shinL=new An,this.shinL.position.set(0,-.43,0),this.thighL.add(this.shinL),this.footL=new An,this.footL.position.set(0,-.41,0),this.shinL.add(this.footL),this.thighR=new An,this.thighR.position.set(M,-.04,0),this.pelvis.add(this.thighR),this.shinR=new An,this.shinR.position.set(0,-.43,0),this.thighR.add(this.shinR),this.footR=new An,this.footR.position.set(0,-.41,0),this.shinR.add(this.footR);const y=[E,this.pelvis,this.spine,this.chest,this.neck,this.head,this.shoulderL,this.upperArmL,this.forearmL,this.shoulderR,this.upperArmR,this.forearmR,this.thighL,this.shinL,this.footL,this.thighR,this.shinR,this.footR];this.skeleton=new Wm(y),this.root.add(E),this.root.updateMatrixWorld(!0);const D=(l?.175:.162)*c,O=(l?.128:.148)*c,T=(l?.165:.192)*c,R=(l?.122:.125)*c,L=[{y:.85,rx:.04,rz:.04},{y:.9,rx:D*.96,rz:.112,offsetZ:-.008},{y:.97,rx:D,rz:.118,offsetZ:-.006},{y:1.07,rx:O,rz:.098,offsetZ:.002},{y:1.18,rx:O*1.06,rz:.104,offsetZ:.006},{y:1.3,rx:T,rz:R,offsetZ:l?.018:.012},{y:1.41,rx:T*1.03,rz:.114,offsetZ:.005},{y:1.49,rx:T*.84,rz:.092,offsetZ:0},{y:1.54,rx:.056,rz:.056,offsetZ:.002}],P=DS(L,f,this.skeleton,1,2,3);this.root.add(P),this.disposables.push(P.geometry);const b=(K,mt,Bt,Ct)=>{const Ot=L.filter(Nt=>Nt.y>=K-.02&&Nt.y<=mt+.02).map(Nt=>({y:ue.clamp(Nt.y,K,mt),rx:Nt.rx+Bt,rz:Nt.rz+Bt,offsetZ:Nt.offsetZ}));if(Ot.length<2)return;const Lt=DS(Ot,Ct,this.skeleton,1,2,3);this.root.add(Lt),this.disposables.push(Lt.geometry)};t.swimwear==="boardshorts"?b(.84,1.05,.01,d):t.swimwear==="bikini"?(b(.86,.99,.007,d),b(1.25,1.38,.007,d)):t.swimwear==="onepiece"?b(.86,1.4,.008,d):t.swimwear==="linen_shirt"?(b(.84,1.05,.01,p),b(1.03,1.5,.015,d)):t.swimwear==="rashguard"&&(b(.84,1.05,.01,p),b(1.04,1.51,.009,d));const U=di([{y:-.02,rx:.056,rz:.056},{y:.05,rx:.05,rz:.051},{y:.11,rx:.052,rz:.054}],14);this.disposables.push(U);const B=new ne(U,f);B.castShadow=!0,this.neck.add(B);const I=di([{y:0,rx:.042,rz:.05,offsetZ:.014},{y:.04,rx:.072,rz:.084,offsetZ:.01},{y:.1,rx:.086,rz:.102,offsetZ:.005},{y:.16,rx:.088,rz:.106,offsetZ:0},{y:.21,rx:.076,rz:.094,offsetZ:-.004},{y:.24,rx:.025,rz:.032,offsetZ:-.005}],18);this.disposables.push(I);const W=new ne(I,f);W.castShadow=!0,W.receiveShadow=!0,this.head.add(W);const J=new Eo(.016,.044,6);J.rotateX(Math.PI*.15);const X=new ne(J,f);X.position.set(0,.108,.108),this.head.add(X);const V=new Ri(.022,8,8);V.scale(.55,1.15,.85);for(const K of[-1,1]){const mt=new ne(V,f);mt.position.set(K*.088,.115,0),this.head.add(mt)}const H=new Ri(.013,10,8),q=new Ri(.0085,8,8),rt=new Vn(.032,.007,.012);for(const K of[-1,1]){const mt=new ne(H,_);mt.position.set(K*.033,.132,.091),mt.scale.set(1.15,.82,.72),this.head.add(mt);const Bt=new ne(q,v);Bt.position.set(K*.033,.132,.098),this.head.add(Bt);const Ct=new ne(rt,m);Ct.position.set(K*.034,.152,.095),Ct.rotation.z=-K*.08,this.head.add(Ct)}const st=new Ri(.018,8,6);st.scale(1.4,.42,.65);const ut=new ne(st,g);if(ut.position.set(0,.068,.093),this.head.add(ut),this.disposables.push(J,V,H,q,rt,st),t.sunglasses){const K=new Vn(.046,.028,.012),mt=new Vn(.024,.006,.008);for(const Ct of[-1,1]){const Ot=new ne(K,S);Ot.position.set(Ct*.036,.132,.106),this.head.add(Ot)}const Bt=new ne(mt,S);Bt.position.set(0,.136,.106),this.head.add(Bt),this.disposables.push(K,mt)}this.buildHair(t.hairStyle,m);const ct=(l?.9:1.04)*c,kt=di([{y:.045,rx:.022*ct,rz:.022*ct},{y:.015,rx:.052*ct,rz:.052*ct},{y:-.055,rx:.05*ct,rz:.052*ct},{y:-.165,rx:.045*ct,rz:.047*ct},{y:-.275,rx:.038*ct,rz:.04*ct},{y:-.295,rx:.026*ct,rz:.028*ct}],16),Zt=di([{y:.028,rx:.028*ct,rz:.03*ct},{y:.005,rx:.038*ct,rz:.04*ct},{y:-.085,rx:.04*ct,rz:.041*ct},{y:-.2,rx:.03*ct,rz:.029*ct},{y:-.265,rx:.026*ct,rz:.023*ct}],16),k=di([{y:0,rx:.026*ct,rz:.017*ct},{y:-.06,rx:.034*ct,rz:.016*ct},{y:-.125,rx:.024*ct,rz:.012*ct},{y:-.15,rx:.008,rz:.006}],12);this.disposables.push(kt,Zt,k);for(const[K,mt]of[[this.upperArmL,this.forearmL],[this.upperArmR,this.forearmR]]){const Bt=new ne(kt,f);if(Bt.castShadow=!0,Bt.receiveShadow=!0,K.add(Bt),t.swimwear==="linen_shirt"||t.swimwear==="rashguard"){const Lt=di([{y:.04,rx:.045*ct,rz:.045*ct},{y:.01,rx:.058*ct,rz:.058*ct},{y:-.1,rx:.056*ct,rz:.056*ct},{y:-.19,rx:.051*ct,rz:.051*ct}],16);this.disposables.push(Lt);const Nt=new ne(Lt,d);Nt.castShadow=!0,K.add(Nt)}const Ct=new ne(Zt,f);Ct.castShadow=!0,Ct.receiveShadow=!0,mt.add(Ct);const Ot=new ne(k,f);Ot.position.set(0,-.26,0),Ot.castShadow=!0,mt.add(Ot)}const ot=(l?.96:1.02)*c,Dt=di([{y:.075,rx:.068*ot,rz:.074*ot},{y:.03,rx:.088*ot,rz:.092*ot},{y:-.11,rx:.083*ot,rz:.087*ot},{y:-.29,rx:.066*ot,rz:.07*ot},{y:-.43,rx:.053*ot,rz:.055*ot},{y:-.455,rx:.036*ot,rz:.038*ot}],16),$=di([{y:.035,rx:.038*ot,rz:.04*ot},{y:.005,rx:.052*ot,rz:.054*ot},{y:-.13,rx:.058*ot,rz:.062*ot,offsetZ:-.008},{y:-.29,rx:.041*ot,rz:.043*ot},{y:-.41,rx:.035*ot,rz:.037*ot}],16),vt=di([{y:-.06,rx:.038,rz:.042,offsetZ:-.02},{y:-.03,rx:.046,rz:.115,offsetZ:.055},{y:.01,rx:.038,rz:.07,offsetZ:.025}],12);this.disposables.push(Dt,$,vt);const At=t.swimwear==="boardshorts"||t.swimwear==="linen_shirt"||t.swimwear==="rashguard",pt=t.swimwear==="boardshorts"?d:p;for(const[K,mt,Bt]of[[this.thighL,this.shinL,this.footL],[this.thighR,this.shinR,this.footR]]){const Ct=new ne(Dt,f);if(Ct.castShadow=!0,Ct.receiveShadow=!0,K.add(Ct),At){const Nt=di([{y:.035,rx:.091*ot,rz:.095*ot},{y:-.04,rx:.092*ot,rz:.096*ot},{y:-.14,rx:.088*ot,rz:.092*ot},{y:-.24,rx:.081*ot,rz:.084*ot}],16);this.disposables.push(Nt);const Pt=new ne(Nt,pt);Pt.castShadow=!0,Pt.receiveShadow=!0,K.add(Pt)}const Ot=new ne($,f);Ot.castShadow=!0,Ot.receiveShadow=!0,mt.add(Ot);const Lt=new ne(vt,f);Lt.castShadow=!0,Lt.receiveShadow=!0,Bt.add(Lt)}}buildHair(t,i){const s=new Ri(.104,16,14,0,Math.PI*2,0,Math.PI*.62);s.scale(.92,1.06,1.06);const l=new ne(s,i);if(l.position.set(0,.152,-.008),l.castShadow=!0,this.head.add(l),this.disposables.push(s),t==="ponytail"){const c=di([{y:0,rx:.026,rz:.026},{y:-.07,rx:.044,rz:.042,offsetZ:-.03},{y:-.17,rx:.036,rz:.034,offsetZ:-.05},{y:-.26,rx:.012,rz:.012,offsetZ:-.04}],12),f=new ne(c,i);f.position.set(0,.17,-.1),f.castShadow=!0,this.head.add(f),this.disposables.push(c)}else if(t==="beach_waves"){const c=di([{y:.17,rx:.095,rz:.072,offsetZ:-.042},{y:.07,rx:.112,rz:.078,offsetZ:-.054},{y:-.06,rx:.118,rz:.066,offsetZ:-.062},{y:-.15,rx:.096,rz:.042,offsetZ:-.058}],14),f=new ne(c,i);f.castShadow=!0,this.head.add(f),this.disposables.push(c)}else if(t==="sleek_bob"){const c=di([{y:.17,rx:.098,rz:.096,offsetZ:-.018},{y:.09,rx:.106,rz:.092,offsetZ:-.028},{y:.02,rx:.096,rz:.08,offsetZ:-.03}],14),f=new ne(c,i);f.castShadow=!0,this.head.add(f),this.disposables.push(c)}else if(t==="curly_crown"){const c=new Km(.118,2);c.scale(1.02,.92,1.06);const f=new ne(c,i);f.position.set(0,.185,-.012),f.castShadow=!0,this.head.add(f),this.disposables.push(c)}else if(t==="surfer_messy"){const c=new Ri(.112,12,10);c.scale(.98,.62,1.12);const f=new ne(c,i);f.position.set(0,.205,.008),f.rotation.x=-.15,f.castShadow=!0,this.head.add(f),this.disposables.push(c)}}lerpPose(t,i,s){const l=this.smoothPose[t]??i,c=l+(i-l)*s;return this.smoothPose[t]=c,c}updateAnimation(t,i,s=0,l=0,c=0){const f=1-Math.exp(-i*11.5),d=this.phase+c;let p=!1,m=!1,_=!1;if(t==="walk"||t==="run"||t==="wade"){const V=t==="run"?2.25*Math.max(2.2,s):t==="wade"?2.55*Math.max(.8,s):2.65*Math.max(.9,s);this.phase+=i*V;const H=Math.sin(this.phase);s>.35&&(this.prevStepSign<=0&&H>0&&(p=!0),this.prevStepSign>=0&&H<0&&(m=!0)),this.prevStepSign=H}else if(t==="swim"||t==="dive"){const V=2.6+Math.min(2.4,s*.48);this.phase+=i*V;const H=Math.floor(this.phase/(Math.PI*2));H!==this.prevStrokePhase&&s>.4&&(_=!0),this.prevStrokePhase=H}else this.phase+=i*1.4;let v=.94,g=0,S=0,E=0,A=0,M=0,y=0,D=0,O=0,T=0,R=0,L=0,P=0,b=0,U=0,B=.08,I=-.14,W=0,J=-.08,X=-.14;if(t==="idle"){const V=Math.sin(d*1.5);v=.94+V*.008,S=Math.sin(d*.6)*.03,A=V*.02,y=Math.sin(d*.45)*.18,D=Math.sin(d*.33)*.05,B=.09+V*.015,J=-.09-V*.015}else if(t==="chat"){const V=Math.sin(d*1.85),H=Math.cos(d*1.25);v=.94+Math.sin(d*1.2)*.01,S=H*.04,M=V*.09,y=Math.sin(d*.95)*.22,D=Math.sin(d*2.1)*.08,U=-.32+V*.24,B=.16+Math.max(0,V)*.14,I=-.68-Math.max(0,V)*.35,W=-.26-H*.22,J=-.16-Math.max(0,-H)*.12,X=-.58-Math.max(0,-H)*.32}else if(t==="sunbathe")v=.22,g=-Math.PI*.48,A=.05,y=Math.sin(d*.35)*.2,D=.16,O=-.06,T=.1,L=-.58,P=1.05,U=-2.45,B=.38,I=-.72,W=-.14,J=-.22,X=-.18;else if(t==="recline")v=.12,g=-.92,A=.1,y=Math.sin(d*.42)*.22,D=.28,O=-.62,T=.14,L=-.68,P=.22,U=.58,B=.2,I=-.55,W=.54,J=-.2,X=-.5;else if(t==="walk"||t==="run"||t==="wade"){const V=this.phase,H=t==="run",q=H?.78:t==="wade"?.62:.48,rt=H?1.18:t==="wade"?1.05+l*.35:.68,st=H?.85:t==="wade"?.36:.44,ut=Math.sin(V),ct=Math.cos(V);v=(H?.91:.935)+Math.abs(ct)*(H?.055:.025),g=H?.14:t==="wade"?.1:.04,E=ut*(H?.14:.09),S=-ut*.04,M=-ut*(H?.18:.1),O=-ut*q,L=ut*q,T=Math.max(.05,Math.cos(V-.35)*rt),P=Math.max(.05,Math.cos(V+Math.PI-.35)*rt),R=-O*.28-T*.22,b=-L*.28-P*.22,U=ut*st,W=-ut*st;const kt=t==="wade"?l*.55:0;B=.09+kt,J=-.09-kt,I=H?-1.35+ut*.25:-.35-Math.max(0,ut)*.35-kt*.5,X=H?-1.35-ut*.25:-.35-Math.max(0,-ut)*.35-kt*.5}else if(t==="tread"){const V=this.phase*1.4;v=.88+Math.sin(V*.7)*.05,g=.12,O=-.45+Math.sin(V)*.38,T=.65+Math.cos(V)*.35,L=-.45-Math.sin(V)*.38,P=.65-Math.cos(V)*.35,U=-.45+Math.sin(V*.9)*.25,B=.65+Math.cos(V*.9)*.32,I=-.68,W=-.45+Math.sin(V*.9)*.25,J=-.65-Math.cos(V*.9)*.32,X=-.68}else if(t==="swim"||t==="dive"){const V=this.phase,H=t==="dive";v=.9,g=H?Math.PI*.48:Math.PI*.43,A=H?-.08:-.22,D=H?-.35:-.78;const q=Math.sin(V*2);O=.15+q*.36,L=.15-q*.36,T=.28+Math.max(0,-q)*.42,P=.28+Math.max(0,q)*.42,R=.45,b=.45;const rt=Math.sin(V),st=Math.cos(V);U=-1.75+st*.85,B=.62+rt*.65,I=-.55-Math.max(0,-st)*.65,W=-1.75+st*.85,J=-.62-rt*.65,X=-.55-Math.max(0,-st)*.65}return this.pelvis.position.y=this.lerpPose("pelvisY",v,f),this.pelvis.rotation.set(this.lerpPose("pelvisPitch",g,f),this.lerpPose("pelvisYaw",E,f),this.lerpPose("pelvisRoll",S,f)),this.spine.rotation.set(this.lerpPose("spinePitch",A,f),0,0),this.chest.rotation.set(0,this.lerpPose("chestYaw",M,f),0),this.head.rotation.set(this.lerpPose("headPitch",D,f),this.lerpPose("headYaw",y,f),0),this.thighL.rotation.set(this.lerpPose("thighLPitch",O,f),0,.03),this.shinL.rotation.set(this.lerpPose("shinLPitch",T,f),0,0),this.footL.rotation.set(this.lerpPose("footLPitch",R,f),0,0),this.thighR.rotation.set(this.lerpPose("thighRPitch",L,f),0,-.03),this.shinR.rotation.set(this.lerpPose("shinRPitch",P,f),0,0),this.footR.rotation.set(this.lerpPose("footRPitch",b,f),0,0),this.upperArmL.rotation.set(this.lerpPose("armLPitch",U,f),0,this.lerpPose("armLRoll",B,f)),this.forearmL.rotation.set(this.lerpPose("foreLPitch",I,f),0,0),this.upperArmR.rotation.set(this.lerpPose("armRPitch",W,f),0,this.lerpPose("armRRoll",J,f)),this.forearmR.rotation.set(this.lerpPose("foreRPitch",X,f),0,0),(p||m)&&(this.root.updateMatrixWorld(!0),this.footL.getWorldPosition(this._leftFootWorld),this.footR.getWorldPosition(this._rightFootWorld)),{leftPlanted:p,rightPlanted:m,strokeTriggered:_,leftFootWorld:this._leftFootWorld,rightFootWorld:this._rightFootWorld}}dispose(){for(const t of this.disposables)t.dispose()}}function FR(o,t){const i=new Zn,s=[],l=o.filter(A=>A.kind==="chair"),c=o.filter(A=>A.kind==="towel"),f=(A,M,y,D,O,T=[],R=1.25,L=0)=>{const P=new xy(M,t);P.root.position.copy(D),P.root.rotation.y=O,i.add(P.root),s.push({id:A,humanoid:P,role:y,position:D.clone(),heading:O,waypoints:T,wpIndex:0,pauseTimer:0,walkSpeed:R,timeOffset:L})};if(c[0]){const A=c[0];f("sunbather_1",{skinTone:14261875,hairColor:3876376,hairStyle:"beach_waves",swimwear:"bikini",primaryColor:14898764,secondaryColor:16248801,build:"slender",heightScale:.96,sunglasses:!0,feminine:!0},"sunbathe",A.position,A.rotationY+Math.PI,[],0,.4)}if(c[1]){const A=c[1];f("sunbather_2",{skinTone:9262388,hairColor:1446416,hairStyle:"curly_crown",swimwear:"boardshorts",primaryColor:2133910,secondaryColor:16116179,build:"athletic",heightScale:1.03,sunglasses:!0,feminine:!1},"sunbathe",A.position,A.rotationY+Math.PI,[],0,2.1)}if(l[0]){const A=l[0];f("recliner_1",{skinTone:15778462,hairColor:12751694,hairStyle:"ponytail",swimwear:"onepiece",primaryColor:1858954,secondaryColor:16250352,build:"average",heightScale:.97,sunglasses:!0,feminine:!0},"recline",A.position,A.rotationY+Math.PI,[],0,1.3)}if(l[1]){const A=l[1];f("recliner_2",{skinTone:13010520,hairColor:2234900,hairStyle:"short_fade",swimwear:"linen_shirt",primaryColor:15920352,secondaryColor:2575467,build:"average",heightScale:1.02,sunglasses:!1,feminine:!1},"recline",A.position,A.rotationY+Math.PI,[],0,3.5)}const d=-7.2,p=To(d)+3.4,m=-5.7,_=To(m)+3.1;f("chatter_1",{skinTone:7028262,hairColor:1380622,hairStyle:"sleek_bob",swimwear:"onepiece",primaryColor:15114030,secondaryColor:16248801,build:"slender",heightScale:.98,sunglasses:!1,feminine:!0},"chat",new F(d,Ie(d,p),p),Math.atan2(m-d,_-p),[],0,.8),f("chatter_2",{skinTone:14987401,hairColor:6044193,hairStyle:"surfer_messy",swimwear:"rashguard",primaryColor:2784652,secondaryColor:1846074,build:"athletic",heightScale:1.04,sunglasses:!0,feminine:!1},"chat",new F(m,Ie(m,_),_),Math.atan2(d-m,p-_),[],0,2.4);const v=(A,M,y=0)=>({x:A,z:To(A)+M,pauseSec:y}),g=[v(-14,2.6,.8),v(-4,1.4,0),v(4.5,-2.8,3.2),v(11.5,1.8,1),v(3,3.2,0),v(-8,1.6,0)];f("walker_1",{skinTone:13735016,hairColor:3022612,hairStyle:"ponytail",swimwear:"bikini",primaryColor:1676940,secondaryColor:16447212,build:"athletic",heightScale:.98,sunglasses:!1,feminine:!0},"stroll_wade",new F(g[0].x,Ie(g[0].x,g[0].z),g[0].z),Math.PI*.5,g,1.32,0);const S=[v(15,2.5,.5),v(7.5,1.1,0),v(-2.5,-4.4,4),v(-11,1.5,1.2),v(-1,3.8,0),v(9.5,2.9,0)];f("walker_2",{skinTone:15579540,hairColor:9198123,hairStyle:"surfer_messy",swimwear:"boardshorts",primaryColor:14243387,secondaryColor:16051938,build:"athletic",heightScale:1.03,sunglasses:!1,feminine:!1},"stroll_wade",new F(S[0].x,Ie(S[0].x,S[0].z),S[0].z),-Math.PI*.5,S,1.28,1.7);const E=[v(-3.5,5.4,1),v(6.5,4.2,0),v(13.5,.6,2.2),v(5,-1.6,1.8),v(-6.5,4.6,1.4)];return f("walker_3",{skinTone:10249280,hairColor:1774866,hairStyle:"short_fade",swimwear:"linen_shirt",primaryColor:9025740,secondaryColor:15129284,build:"average",heightScale:1,sunglasses:!0,feminine:!1},"stroll_wade",new F(E[0].x,Ie(E[0].x,E[0].z),E[0].z),Math.PI*.4,E,1.18,3.1),{group:i,npcCount:s.length,update(A,M,y,D,O){for(let T=0;T<s.length;T++){const R=s[T];let L="idle",P=0,b=0;if(R.role==="sunbathe")L="sunbathe";else if(R.role==="recline")L="recline";else if(R.role==="chat")L="chat";else if(R.role==="stroll_wade"&&R.waypoints.length>0){const B=R.waypoints[R.wpIndex],I=B.x-R.position.x,W=B.z-R.position.z,J=Math.hypot(I,W),X=Ie(R.position.x,R.position.z),V=wo(R.position.x,R.position.z,M,y,Math.max(0,-X)),H=Math.max(0,V.height-X);if(b=ue.clamp((H-.12)/.85,0,1),J<.65)R.pauseTimer<=0&&(R.pauseTimer=B.pauseSec),R.pauseTimer-=A,R.pauseTimer<=0&&(R.wpIndex=(R.wpIndex+1)%R.waypoints.length),L="idle",P=0;else{let rt=Math.atan2(I,W)-R.heading;for(;rt>Math.PI;)rt-=Math.PI*2;for(;rt<-Math.PI;)rt+=Math.PI*2;R.heading+=rt*Math.min(1,A*4.5);const st=1-b*.45;P=R.walkSpeed*st,R.position.x+=Math.sin(R.heading)*P*A,R.position.z+=Math.cos(R.heading)*P*A,wm(R.position,.42,O),L=b>.15?"wade":"walk"}R.position.y=Ie(R.position.x,R.position.z),R.humanoid.root.position.copy(R.position),R.humanoid.root.rotation.y=R.heading}const U=R.humanoid.updateAnimation(L,A,P,b,R.timeOffset);R.role==="stroll_wade"&&P>.35&&(U.leftPlanted&&Ie(U.leftFootWorld.x,U.leftFootWorld.z)>-.35&&D.stampFootprint(U.leftFootWorld.x,U.leftFootWorld.z,R.heading,!0,.82,.96),U.rightPlanted&&Ie(U.rightFootWorld.x,U.rightFootWorld.z)>-.35&&D.stampFootprint(U.rightFootWorld.x,U.rightFootWorld.z,R.heading,!1,.82,.96))}},getWalkerPositions(){return s.filter(A=>A.role==="stroll_wade").map(A=>({x:Number(A.position.x.toFixed(2)),y:Number(A.position.y.toFixed(2)),z:Number(A.position.z.toFixed(2)),role:A.id}))},dispose(){for(const A of s)A.humanoid.dispose()}}}class HR{humanoid;position=new F(-4.2,0,6.2);velocity=new F;heading=Math.PI-.32;perspective="third-person";targetYaw=Math.PI-.32;targetPitch=-.11;smoothYaw=Math.PI-.32;smoothPitch=-.11;targetArmDist=4.6;smoothArmDist=4.6;smoothCamPos=new F;smoothLookAt=new F;camInitialized=!1;grounded=!0;isSwimming=!1;isDiving=!1;currentZone="dry_sand";lastWaterDepth=0;lastSubmergedDepth=0;diveBubbleCooldown=0;wasInWater=!1;keys=new Set;isDragging=!1;lastMouseX=0;lastMouseY=0;domElement;onInteract;_forward=new F;_right=new F;_moveDir=new F;_terrainNormal=new F;_desiredCamPos=new F;_pivot=new F;_rayPt=new F;_bubbleOrigin=new F;constructor(t,i,s){this.domElement=t,this.onInteract=s,this.humanoid=new xy({skinTone:14130032,hairColor:2825490,hairStyle:"surfer_messy",swimwear:"boardshorts",primaryColor:1408138,secondaryColor:16051939,build:"athletic",heightScale:1,sunglasses:!1,feminine:!1},i);const l=Ie(this.position.x,this.position.z);this.position.y=l,this.humanoid.root.position.copy(this.position),this.humanoid.root.rotation.y=this.heading,this.bindEvents()}setPerspective(t){this.perspective=t,this.humanoid.root.visible=t==="third-person"}togglePerspective(){return this.setPerspective(this.perspective==="third-person"?"first-person":"third-person"),this.perspective}teleportTo(t,i,s,l,c){const f=Ie(t,s);this.position.set(t,i!==null?i:f,s),this.velocity.set(0,0,0),l!==void 0&&(this.heading=l,this.targetYaw=l,this.smoothYaw=l),c!==void 0&&(this.targetPitch=c,this.smoothPitch=c);const d=wo(t,s,0,1,Math.max(0,-f)).height;this.isDiving=this.position.y<d-1.25,this.isSwimming=d-f>1.15,this.grounded=!this.isSwimming&&Math.abs(this.position.y-f)<.25,this.camInitialized=!1}setVirtualKey(t,i){i?this.keys.add(t):this.keys.delete(t)}onKeyDown=t=>{t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement||(this.keys.add(t.code),this.onInteract(),t.code==="Space"&&t.preventDefault())};onKeyUp=t=>{this.keys.delete(t.code)};onBlur=()=>{this.keys.clear(),this.isDragging=!1};onMouseDown=t=>{if(t.target===this.domElement&&(this.onInteract(),this.isDragging=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY,t.button===0&&document.pointerLockElement!==this.domElement&&this.domElement.requestPointerLock))try{const i=this.domElement.requestPointerLock();i&&typeof i.catch=="function"&&i.catch(()=>{})}catch{}};onMouseUp=()=>{this.isDragging=!1};onMouseMove=t=>{const i=document.pointerLockElement===this.domElement;if(!i&&!this.isDragging)return;const s=i?t.movementX:t.clientX-this.lastMouseX,l=i?t.movementY:t.clientY-this.lastMouseY;this.lastMouseX=t.clientX,this.lastMouseY=t.clientY;const c=.0024;this.targetYaw-=s*c,this.targetPitch=ue.clamp(this.targetPitch-l*c,-Math.PI*.44,Math.PI*.44)};onWheel=t=>{this.perspective==="third-person"&&(this.targetArmDist=ue.clamp(this.targetArmDist+t.deltaY*.003,2.3,8.8))};bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),this.domElement.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0})}update(t,i,s,l,c,f,d,p){const m=1-Math.exp(-t*22);this.smoothYaw+=(this.targetYaw-this.smoothYaw)*m,this.smoothPitch+=(this.targetPitch-this.smoothPitch)*m,this.smoothArmDist+=(this.targetArmDist-this.smoothArmDist)*(1-Math.exp(-t*12));const _=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),v=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),g=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),S=this.keys.has("Space"),E=this.keys.has("KeyC")||this.keys.has("ControlLeft")||this.keys.has("ControlRight"),A=Math.sin(this.smoothYaw),M=Math.cos(this.smoothYaw);this._forward.set(A,0,M).normalize(),this._right.set(-M,0,A).normalize();const y=Ie(this.position.x,this.position.z),D=wo(this.position.x,this.position.z,i,s,Math.max(0,-y)),O=Math.max(0,D.height-y),T=this.position.y+1.56,R=Math.max(0,D.height-T);!this.isSwimming&&O>1.24?(this.isSwimming=!0,this.grounded=!1,this.isDiving=!1):this.isSwimming&&O<1.02&&this.position.y<=y+.15&&(this.isSwimming=!1,this.isDiving=!1),O>.35&&!this.wasInWater?(this._bubbleOrigin.set(this.position.x,Math.min(D.height-.1,this.position.y+.4),this.position.z),p.spawnBubbles(this._bubbleOrigin,10,.45),this.wasInWater=!0):O<.15&&(this.wasInWater=!1);let L="idle";const P=ue.clamp((O-.14)/1.05,0,1);if(this.isSwimming){const I=Math.cos(this.smoothPitch),W=Math.sin(this.smoothPitch),J=new F(A*I,W,M*I).normalize();E?this.isDiving=!0:_>0&&this.smoothPitch<-.34&&O>1.65&&(this.isDiving=!0);const X=D.height-1.18;this.isDiving&&this.position.y>=X-.06&&S&&!E&&(this.isDiving=!1),this.isDiving&&this.position.y>=X-.04&&!E&&this.smoothPitch>.15&&_>0&&(this.isDiving=!1);const V=new F;this.isDiving?(V.addScaledVector(J,_),V.addScaledVector(this._right,v),S&&(V.y+=.92),E&&(V.y-=.92)):(V.addScaledVector(this._forward,_),V.addScaledVector(this._right,v));const H=V.lengthSq()>1e-4;H&&V.normalize();const q=g?5.6:3.55,rt=1-Math.exp(-t*(H?4.4:3.1));if(this.isDiving){const Zt=H?V.x*q:0,k=H?V.y*q:.16,ot=H?V.z*q:0;this.velocity.x+=(Zt-this.velocity.x)*rt,this.velocity.y+=(k-this.velocity.y)*rt,this.velocity.z+=(ot-this.velocity.z)*rt}else{const Zt=H?V.x*q:0,k=H?V.z*q:0;this.velocity.x+=(Zt-this.velocity.x)*rt,this.velocity.z+=(k-this.velocity.z)*rt;const Dt=(X-this.position.y)*9.5-this.velocity.y*4.8+(S?1.8:0);this.velocity.y+=Dt*t}this.position.addScaledVector(this.velocity,t),this.position.x=ue.clamp(this.position.x,-44,44),this.position.z=ue.clamp(this.position.z,-82,42),wm(this.position,.45,c);const ut=Ie(this.position.x,this.position.z)+(this.isDiving?.55:.05);if(this.position.y<ut&&(this.position.y=ut,this.velocity.y<0&&(this.velocity.y*=.2)),this.position.y>X+.14&&(this.position.y=X+.14,this.velocity.y>0&&(this.velocity.y=0)),Math.hypot(this.velocity.x,this.velocity.z)>.22){let k=Math.atan2(this.velocity.x,this.velocity.z)-this.heading;for(;k>Math.PI;)k-=Math.PI*2;for(;k<-Math.PI;)k+=Math.PI*2;this.heading+=k*Math.min(1,t*7.5)}const kt=this.velocity.length();this.isDiving?(L="dive",this.currentZone="underwater"):kt>.45?(L="swim",this.currentZone="surface_swim"):(L="tread",this.currentZone="surface_swim"),this.diveBubbleCooldown-=t,this.isDiving&&this.diveBubbleCooldown<=0&&(this._bubbleOrigin.set(this.position.x+Math.sin(this.heading)*.35,this.position.y+1,this.position.z+Math.cos(this.heading)*.35),p.spawnBubbles(this._bubbleOrigin,kt>1?4:2,.35),this.diveBubbleCooldown=kt>1?.24:.52)}else{this._moveDir.set(0,0,0),this._moveDir.addScaledVector(this._forward,_),this._moveDir.addScaledVector(this._right,v);const I=this._moveDir.lengthSq()>1e-4;I&&this._moveDir.normalize();const W=1-P*.52,J=(g?7.2:4.25)*W,X=I?this._moveDir.x*J:0,V=I?this._moveDir.z*J:0,H=I?this.grounded?10.5:4.2:this.grounded?12:2,q=1-Math.exp(-t*H);this.velocity.x+=(X-this.velocity.x)*q,this.velocity.z+=(V-this.velocity.z)*q,S&&this.grounded&&(this.velocity.y=5.35*(1-P*.35),this.grounded=!1),this.velocity.y-=14.8*t,this.position.addScaledVector(this.velocity,t),this.position.x=ue.clamp(this.position.x,-44,44),this.position.z=ue.clamp(this.position.z,-82,42),wm(this.position,.42,c);const rt=Ie(this.position.x,this.position.z);this.position.y<=rt&&(this.position.y=rt,this.velocity.y=0,this.grounded=!0);const st=Math.hypot(this.velocity.x,this.velocity.z);if(st>.25){let ct=Math.atan2(this.velocity.x,this.velocity.z)-this.heading;for(;ct>Math.PI;)ct-=Math.PI*2;for(;ct<-Math.PI;)ct+=Math.PI*2;this.heading+=ct*Math.min(1,t*11)}st>.3?P>.16?L="wade":g&&st>5?L="run":L="walk":L="idle",P>.05?this.currentZone="wading":rt<D.height+.55?this.currentZone="wet_sand":this.currentZone="dry_sand"}if(this.humanoid.root.position.copy(this.position),this.isSwimming){const I=this.isDiving?ue.clamp(-this.velocity.y*.16,-.55,.55):0;this.humanoid.root.rotation.order="YXZ",this.humanoid.root.rotation.y=this.heading,this.humanoid.root.rotation.x+=(I-this.humanoid.root.rotation.x)*Math.min(1,t*6),this.humanoid.root.rotation.z*=Math.exp(-t*8)}else{xo(this.position.x,this.position.z,this._terrainNormal);const I=this._terrainNormal.z*.14,W=-this._terrainNormal.x*.14;this.humanoid.root.rotation.order="YXZ",this.humanoid.root.rotation.y=this.heading,this.humanoid.root.rotation.x+=(I-this.humanoid.root.rotation.x)*Math.min(1,t*8),this.humanoid.root.rotation.z+=(W-this.humanoid.root.rotation.z)*Math.min(1,t*8)}const b=this.velocity.length(),U=this.humanoid.updateAnimation(L,t,b,P,0);if(!this.isSwimming&&this.grounded){const I=L==="run",W=ue.clamp((D.height+.5-y)/.8,0,1);U.leftPlanted&&(f.stampFootprint(U.leftFootWorld.x,U.leftFootWorld.z,this.heading,!0,I?1:.88,1),d.playFootstep(W,O,I),O>.18&&p.spawnBubbles(U.leftFootWorld,4,.25)),U.rightPlanted&&(f.stampFootprint(U.rightFootWorld.x,U.rightFootWorld.z,this.heading,!1,I?1:.88,1),d.playFootstep(W,O,I),O>.18&&p.spawnBubbles(U.rightFootWorld,4,.25))}this.isSwimming&&U.strokeTriggered&&(d.playSwimStroke(this.isDiving,g?1:.72),this.isDiving&&d.playBubbleBurst(4),this._bubbleOrigin.set(this.position.x,this.position.y+.95,this.position.z),p.spawnBubbles(this._bubbleOrigin,this.isDiving?8:5,.55));const B=this.isDiving?.95:this.isSwimming?1.32:1.48;if(this._pivot.set(this.position.x,this.position.y+B,this.position.z),this.perspective==="first-person"){const I=this.isDiving?this.position.y+1.15:this.isSwimming?this.position.y+1.45:this.position.y+1.64;this._desiredCamPos.set(this.position.x+Math.sin(this.smoothYaw)*.14,I,this.position.z+Math.cos(this.smoothYaw)*.14);const W=new F(this._desiredCamPos.x+Math.sin(this.smoothYaw)*Math.cos(this.smoothPitch)*10,this._desiredCamPos.y+Math.sin(this.smoothPitch)*10,this._desiredCamPos.z+Math.cos(this.smoothYaw)*Math.cos(this.smoothPitch)*10);if(!this.camInitialized)this.smoothCamPos.copy(this._desiredCamPos),this.smoothLookAt.copy(W),this.camInitialized=!0;else{const J=1-Math.exp(-t*24);this.smoothCamPos.lerp(this._desiredCamPos,J),this.smoothLookAt.lerp(W,J)}l.position.copy(this.smoothCamPos),l.lookAt(this.smoothLookAt)}else{const I=Math.cos(this.smoothPitch),W=Math.sin(this.smoothPitch),J=new F(-Math.sin(this.smoothYaw)*I*this.smoothArmDist,-W*this.smoothArmDist+.35,-Math.cos(this.smoothYaw)*I*this.smoothArmDist);let X=1;const V=6;for(let q=1;q<=V;q++){const rt=q/V;this._rayPt.copy(this._pivot).addScaledVector(J,rt);const st=Ie(this._rayPt.x,this._rayPt.z)+.38;if(this._rayPt.y<st){X=Math.min(X,Math.max(.28,rt-.12));break}}this._desiredCamPos.copy(this._pivot).addScaledVector(J,X);const H=Ie(this._desiredCamPos.x,this._desiredCamPos.z)+.36;if(this._desiredCamPos.y<H&&(this._desiredCamPos.y=H),!this.camInitialized)this.smoothCamPos.copy(this._desiredCamPos),this.smoothLookAt.copy(this._pivot),this.camInitialized=!0;else{const q=1-Math.exp(-t*13.5),rt=1-Math.exp(-t*16);this.smoothCamPos.lerp(this._desiredCamPos,q),this.smoothLookAt.lerp(this._pivot,rt)}l.position.copy(this.smoothCamPos),l.lookAt(this.smoothLookAt)}return this.lastWaterDepth=O,this.lastSubmergedDepth=R,{zone:this.currentZone,speed:b,waterDepth:this.lastWaterDepth,submergedDepth:this.lastSubmergedDepth,cameraSubmergence:0,perspective:this.perspective,posX:this.position.x,posY:this.position.y,posZ:this.position.z}}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),this.domElement.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.domElement.removeEventListener("wheel",this.onWheel),this.humanoid.dispose()}}class GR{worldGroup;shaftsGroup;shaftMaterial;planktonPoints;planktonMaterial;bubbleMesh;bubbles=[];bubbleCursor=0;_dummy=new xn;sceneRT;postScene;postCamera;postMaterial;_nearTL=new F;_nearTR=new F;_nearBL=new F;_nearBR=new F;_samplePt=new F;_upVec=new F;_topPt=new F;_botPt=new F;disposables=[];constructor(t,i,s){this.worldGroup=new Zn,this.shaftsGroup=new Zn;const l=new mi(3.4,24,2,10);l.translate(0,-12,0),this.disposables.push(l),this.shaftMaterial=new Pn({transparent:!0,depthWrite:!1,side:si,blending:ql,uniforms:{uTime:{value:0},uWaveIntensity:{value:1},uSunColor:{value:new ve(.85,.98,1)},uCameraSubmergence:{value:0},uSunElev:{value:.7}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;

        uniform float uTime;
        uniform float uWaveIntensity;
        uniform vec3 uSunColor;
        uniform float uCameraSubmergence;
        uniform float uSunElev;

        ${vy}

        void main() {
          if (uCameraSubmergence < 0.01) discard;
          // Fade out cleanly above the water surface
          if (vWorldPos.y > 0.25) discard;

          float depth = max(0.0, -vWorldPos.y);
          // Horizontal soft curtain profile
          float horiz = sin(vUv.x * 3.14159265);
          horiz = pow(horiz, 1.75);

          // Depth attenuation: bright near sunlit surface, dissolving gently into deep blue
          float depthFade = smoothstep(0.0, 0.85, depth) * exp(-depth * 0.145) * smoothstep(0.0, 0.22, vUv.y);

          // Modulate shaft brightness by live Gerstner surface wave normals overhead!
          GerstnerResult surfWave = evalGerstner(vWorldPos.xz, uTime, uWaveIntensity, 5.0);
          float focusLens = clamp(dot(surfWave.normal, normalize(vec3(0.18, 0.96, 0.18))), 0.0, 1.0);
          float waveBeam = pow(focusLens, 2.4) * 1.65;
          float shimmer = 0.52 + 0.48 * sin(vUv.x * 11.0 + uTime * 1.65 + vWorldPos.x * 0.38);

          // Grazing-angle edge fade so flat planes never look like harsh cards
          vec3 V = normalize(cameraPosition - vWorldPos);
          float facing = pow(abs(dot(vNormalWorld, V)), 0.55);
          float dist = length(cameraPosition - vWorldPos);
          float distFade = smoothstep(1.8, 6.2, dist) * (1.0 - smoothstep(24.0, 46.0, dist));

          float alpha = horiz * depthFade * waveBeam * shimmer * facing * distFade * uCameraSubmergence * uSunElev * 0.56;
          vec3 rayColor = mix(vec3(0.26, 0.88, 0.96), uSunColor, 0.48);

          gl_FragColor = vec4(rayColor * alpha * 1.45, alpha);
        }
      `}),this.disposables.push(this.shaftMaterial);for(let A=0;A<28;A++){const M=A/28*Math.PI*2+A%3*.23,y=5.5+A%5*4.6+A*7%4*1.3,D=Math.cos(M)*y,O=Math.sin(M)*y,T=new ne(l,this.shaftMaterial);T.position.set(D,.2,O),T.rotation.y=M+(A%2===0?.4:-.5);const R=.7+A*13%7*.22;T.scale.set(R,1,1),T.renderOrder=4,this.shaftsGroup.add(T)}this.worldGroup.add(this.shaftsGroup);const c=900,f=new Float32Array(c*3),d=new Float32Array(c*3);for(let A=0;A<c;A++)f[A*3]=(Math.random()-.5)*38,f[A*3+1]=-Math.random()*12,f[A*3+2]=(Math.random()-.5)*38,d[A*3]=Math.random()*Math.PI*2,d[A*3+1]=.5+Math.random()*1.4,d[A*3+2]=1.6+Math.random()*3;const p=new On;p.setAttribute("position",new Wi(f,3)),p.setAttribute("aSeed",new Wi(d,3)),this.disposables.push(p),this.planktonMaterial=new Pn({transparent:!0,depthWrite:!1,blending:ql,uniforms:{uTime:{value:0},uAnchor:{value:new F(0,-3,-20)},uSubmergence:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
        attribute vec3 aSeed;
        uniform float uTime;
        uniform vec3 uAnchor;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vWarmth;

        void main() {
          vec3 box = vec3(34.0, 12.0, 34.0);
          vec3 drift = vec3(
            sin(uTime * 0.25 * aSeed.y + aSeed.x) * 1.1,
            cos(uTime * 0.18 * aSeed.y + aSeed.x * 1.7) * 0.45 + uTime * 0.04,
            cos(uTime * 0.22 * aSeed.y + aSeed.x * 0.8) * 1.1
          );
          // Wrap infinitely around camera underwater anchor
          vec3 rel = mod(position + drift - uAnchor + box * 0.5, box) - box * 0.5;
          vec3 wp = uAnchor + rel;

          vec4 mv = viewMatrix * vec4(wp, 1.0);
          float dist = length(mv.xyz);

          float belowSurface = smoothstep(0.05, -0.45, wp.y);
          float depthGlow = exp(-max(0.0, -wp.y) * 0.14);
          float twinkle = 0.65 + 0.35 * sin(uTime * 1.8 * aSeed.y + aSeed.x * 3.0);
          vAlpha = belowSurface * depthGlow * twinkle * smoothstep(18.0, 4.0, dist) * smoothstep(0.5, 2.2, dist);
          vWarmth = fract(aSeed.x);

          gl_PointSize = clamp((aSeed.z * 26.0 * uPixelRatio) / max(1.0, dist), 1.5, 11.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        precision highp float;
        uniform float uSubmergence;
        varying float vAlpha;
        varying float vWarmth;

        void main() {
          if (uSubmergence < 0.02 || vAlpha < 0.01) discard;
          float d = length(gl_PointCoord - 0.5) * 2.0;
          if (d > 1.0) discard;
          float bokeh = pow(1.0 - d * d, 2.0);
          vec3 col = mix(vec3(0.52, 0.92, 0.96), vec3(0.95, 0.98, 0.86), vWarmth);
          gl_FragColor = vec4(col, bokeh * vAlpha * uSubmergence * 0.52);
        }
      `}),this.disposables.push(this.planktonMaterial),this.planktonPoints=new IE(p,this.planktonMaterial),this.planktonPoints.frustumCulled=!1,this.planktonPoints.renderOrder=5,this.worldGroup.add(this.planktonPoints);const m=160,_=new Ri(1,10,8),v=new aT({color:14679039,roughness:.05,metalness:.1,transparent:!0,opacity:.56,envMapIntensity:1.8,depthWrite:!1});this.disposables.push(_,v),this.bubbleMesh=new Sm(_,v,m),this.bubbleMesh.frustumCulled=!1,this.bubbleMesh.renderOrder=6;for(let A=0;A<m;A++)this.bubbles.push({pos:new F(0,-100,0),vel:new F,radius:.02,age:0,maxAge:2,wobblePhase:Math.random()*Math.PI*2,active:!1}),this._dummy.position.set(0,-100,0),this._dummy.scale.setScalar(1e-4),this._dummy.updateMatrix(),this.bubbleMesh.setMatrixAt(A,this._dummy.matrix);this.bubbleMesh.instanceMatrix.needsUpdate=!0,this.worldGroup.add(this.bubbleMesh);const g=new Ro(Math.max(1,t),Math.max(1,i));g.type=ia;const S=s.extensions.has("EXT_color_buffer_float")||s.extensions.has("EXT_color_buffer_half_float");this.sceneRT=new pi(Math.max(1,t),Math.max(1,i),{format:ri,type:S?aa:Kn,minFilter:vn,magFilter:vn,depthBuffer:!0,depthTexture:g}),this.postScene=new tc,this.postCamera=new nc(-1,1,1,-1,0,1),this.postMaterial=new Pn({uniforms:{tColor:{value:this.sceneRT.texture},tDepth:{value:g},uResolution:{value:new ce(t,i)},uCameraNear:{value:.1},uCameraFar:{value:650},uTime:{value:0},uSubmergence:{value:0},uCameraDepth:{value:0},uWaterlineY:{value:[-2,-2,-2,-2,-2]},uSunElev:{value:.7},uHorizonY:{value:.5}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tColor;
        uniform sampler2D tDepth;
        uniform vec2 uResolution;
        uniform float uCameraNear;
        uniform float uCameraFar;
        uniform float uTime;
        uniform float uSubmergence;
        uniform float uCameraDepth;
        uniform float uWaterlineY[5];
        uniform float uSunElev;
        uniform float uHorizonY;

        float linearizeDepth(float d) {
          float z = d * 2.0 - 1.0;
          return (2.0 * uCameraNear * uCameraFar) / (uCameraFar + uCameraNear - z * (uCameraFar - uCameraNear));
        }

        // Smooth piecewise Catmull/linear wave meniscus elevation at screen X in [0..1]
        float sampleMeniscusY(float x) {
          float fx = clamp(x, 0.0, 1.0) * 4.0;
          int idx = int(floor(fx));
          float f = fract(fx);
          float s = f * f * (3.0 - 2.0 * f);
          if (idx <= 0) return mix(uWaterlineY[0], uWaterlineY[1], s);
          if (idx == 1) return mix(uWaterlineY[1], uWaterlineY[2], s);
          if (idx == 2) return mix(uWaterlineY[2], uWaterlineY[3], s);
          return mix(uWaterlineY[3], uWaterlineY[4], s);
        }

        vec3 acesToneMap(vec3 x) {
          const float a = 2.51;
          const float b = 0.03;
          const float c = 2.43;
          const float d = 0.59;
          const float e = 0.14;
          return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
        }

        void main() {
          // Physical wave height across lens (smooth GTA V waterline intersection!)
          float waveScreenY = sampleMeniscusY(vUv.x);
          // Add subtle micro-capillary ripple along meniscus curve
          waveScreenY += sin(vUv.x * 26.0 + uTime * 4.2) * 0.0022;

          // 1.0 where this screen pixel lies below the live ocean surface wave!
          float distFromLine = waveScreenY - vUv.y;
          float isBelowPixel = smoothstep(-0.014, 0.014, distFromLine);
          // Ensure smooth agreement when camera is completely submerged deep down
          float underMask = max(isBelowPixel, smoothstep(0.85, 1.0, uSubmergence));

          // Meniscus refractive water-lip band right where wave washes across the lens
          float meniscusBand = exp(-pow(distFromLine / 0.018, 2.0)) * step(-0.25, waveScreenY) * step(waveScreenY, 1.25);

          // Sample UV with gentle underwater screen-space refraction ripple + subtle above-water horizon heat haze
          vec2 sampleUv = vUv;
          if (underMask > 0.005) {
            vec2 ripple = vec2(
              sin(vUv.y * 19.0 + uTime * 2.15 + vUv.x * 4.0) * 0.0024,
              cos(vUv.x * 16.0 - uTime * 1.85 + vUv.y * 5.0) * 0.0019
            );
            sampleUv += ripple * underMask;
          }
          // Meniscus vertical refraction bend right at water surface lip
          sampleUv.y += meniscusBand * 0.014 * sin(vUv.x * 14.0 + uTime * 3.0);

          // Subtle coastal heat haze near distant sunny horizon above water
          float rawDepth = texture2D(tDepth, vUv).r;
          float viewDist = linearizeDepth(rawDepth);
          float horizonBand = exp(-pow((vUv.y - uHorizonY) / 0.10, 2.0)) * smoothstep(38.0, 140.0, viewDist) * (1.0 - underMask);
          if (horizonBand > 0.01) {
            float hazeWave = sin(vUv.y * 95.0 - uTime * 5.5 + vUv.x * 18.0);
            sampleUv.x += hazeWave * 0.00085 * horizonBand * uSunElev;
            sampleUv.y += cos(vUv.x * 70.0 + uTime * 4.4) * 0.00055 * horizonBand * uSunElev;
          }

          sampleUv = clamp(sampleUv, vec2(0.001), vec2(0.999));

          // Base scene sample
          vec3 col = texture2D(tColor, sampleUv).rgb;

          // ============================================================
          // UNDERWATER OPTICAL EFFECTS (below meniscus / submerged)
          // ============================================================
          if (underMask > 0.005) {
            float uwDist = linearizeDepth(texture2D(tDepth, sampleUv).r);
            vec2 px = 1.0 / uResolution;

            // 1) Subtle chromatic aberration near screen edges
            vec2 fromCenter = vUv - 0.5;
            float edgeWeight = dot(fromCenter, fromCenter) * 2.8;
            vec2 caOffset = fromCenter * (0.0042 + edgeWeight * 0.0055) * underMask;
            float rCh = texture2D(tColor, clamp(sampleUv + caOffset, 0.001, 0.999)).r;
            float bCh = texture2D(tColor, clamp(sampleUv - caOffset, 0.001, 0.999)).b;
            vec3 uwCol = vec3(rCh, col.g, bCh);

            // 2) Subtle optical softening of distant underwater geometry
            float blurAmt = smoothstep(3.5, 24.0, uwDist) * underMask;
            if (blurAmt > 0.02) {
              float rad = mix(0.8, 2.4, blurAmt);
              vec3 b1 = texture2D(tColor, clamp(sampleUv + vec2(px.x, px.y) * rad, 0.001, 0.999)).rgb;
              vec3 b2 = texture2D(tColor, clamp(sampleUv + vec2(-px.x, px.y) * rad, 0.001, 0.999)).rgb;
              vec3 b3 = texture2D(tColor, clamp(sampleUv + vec2(px.x, -px.y) * rad, 0.001, 0.999)).rgb;
              vec3 b4 = texture2D(tColor, clamp(sampleUv + vec2(-px.x, -px.y) * rad, 0.001, 0.999)).rgb;
              vec3 blurred = (uwCol * 2.0 + b1 + b2 + b3 + b4) / 6.0;
              uwCol = mix(uwCol, blurred, blurAmt * 0.65);
            }

            // 3) Exponential depth-based turquoise -> deep pelagic blue fog + red light absorption
            float depthRatio = clamp(uCameraDepth / 9.0, 0.0, 1.0);
            vec3 shallowFog = vec3(0.05, 0.44, 0.52) * (0.45 + 0.65 * uSunElev);
            vec3 deepFog    = vec3(0.012, 0.14, 0.28) * (0.35 + 0.65 * uSunElev);
            vec3 fogColor = mix(shallowFog, deepFog, depthRatio);

            // Beer-Lambert selective wavelength absorption (red drops off fastest underwater)
            vec3 absorption = exp(-vec3(0.11, 0.036, 0.024) * min(uwDist, 45.0));
            uwCol *= mix(vec3(1.0), absorption, 0.58 * underMask);

            float fogDensity = mix(0.044, 0.068, depthRatio);
            float fogFactor = 1.0 - exp(-uwDist * fogDensity);
            // Keep Snell's window sky slightly brighter straight overhead
            uwCol = mix(uwCol, fogColor, clamp(fogFactor * 0.92, 0.0, 0.95));

            // Gentle aquatic vignette
            float vig = 1.0 - dot(fromCenter, fromCenter) * 0.42;
            uwCol *= vig;

            col = mix(col, uwCol, underMask);
          }

          // Meniscus glossy translucent turquoise lip highlight right on waterline
          col = mix(col, vec3(0.12, 0.52, 0.62), meniscusBand * 0.48);
          col += vec3(0.32, 0.78, 0.86) * meniscusBand * 0.38;

          // Filmic exposure calibrated for Preetham HDR sky & sunlit sand + ACES tone mapping + sRGB
          float exposure = mix(0.56, 0.88, underMask);
          col = acesToneMap(col * exposure);
          col = pow(col, vec3(1.0 / 2.2));

          gl_FragColor = vec4(col, 1.0);
        }
      `,depthTest:!1,depthWrite:!1}),this.disposables.push(this.postMaterial);const E=new mi(2,2);this.disposables.push(E),this.postScene.add(new ne(E,this.postMaterial))}spawnBubbles(t,i,s=.32){for(let l=0;l<i;l++){const c=this.bubbles[this.bubbleCursor];this.bubbleCursor=(this.bubbleCursor+1)%this.bubbles.length,c.pos.set(t.x+(Math.random()-.5)*s,t.y+(Math.random()-.5)*s*.6,t.z+(Math.random()-.5)*s),c.vel.set((Math.random()-.5)*.45,.55+Math.random()*.85,(Math.random()-.5)*.45),c.radius=.016+Math.random()*.042,c.age=0,c.maxAge=2.4+Math.random()*2.8,c.wobblePhase=Math.random()*Math.PI*2,c.active=!0}}update(t,i,s,l,c,f){l.updateMatrixWorld();const d=Math.max(.18,l.near+.08),p=Math.tan(ue.degToRad(l.fov*.5))*d,m=p*l.aspect;this._nearTL.set(-m,p,-d).applyMatrix4(l.matrixWorld),this._nearTR.set(m,p,-d).applyMatrix4(l.matrixWorld),this._nearBL.set(-m,-p,-d).applyMatrix4(l.matrixWorld),this._nearBR.set(m,-p,-d).applyMatrix4(l.matrixWorld);const _=this.postMaterial.uniforms.uWaterlineY.value;let v=0;for(let O=0;O<5;O++){const T=O/4;this._topPt.lerpVectors(this._nearTL,this._nearTR,T),this._botPt.lerpVectors(this._nearBL,this._nearBR,T),this._samplePt.lerpVectors(this._botPt,this._topPt,.5);const R=Ie(this._samplePt.x,this._samplePt.z),L=wo(this._samplePt.x,this._samplePt.z,i,s,Math.max(0,-R)),P=this._botPt.y,U=this._topPt.y-P,B=R<L.height+.15;let I=-2;B&&Math.abs(U)>1e-5?I=(L.height-P)/U:B&&(I=this._samplePt.y<L.height?2:-2),_[O]=ue.clamp(I,-2,2),v+=ue.clamp(I,0,1)}const g=v/5,S=Ie(l.position.x,l.position.z),E=wo(l.position.x,l.position.z,i,s,Math.max(0,-S)),A=S<E.height+.1?Math.max(0,E.height-l.position.y):0;this._upVec.set(0,0,-1).applyQuaternion(l.quaternion);const M=ue.clamp(.5-this._upVec.y*1.15,0,1);this.postMaterial.uniforms.uTime.value=i,this.postMaterial.uniforms.uCameraNear.value=l.near,this.postMaterial.uniforms.uCameraFar.value=l.far,this.postMaterial.uniforms.uSubmergence.value=g,this.postMaterial.uniforms.uCameraDepth.value=A,this.postMaterial.uniforms.uSunElev.value=ue.smoothstep(c.y,.04,.35),this.postMaterial.uniforms.uHorizonY.value=M;const y=ue.smoothstep(c.y,.04,.32);if(this.shaftsGroup.visible=g>.02,this.shaftsGroup.visible){this.shaftsGroup.position.set(l.position.x,0,l.position.z);const O=new F(c.x*.72,Math.max(.35,c.y),c.z*.72).normalize();this.shaftsGroup.quaternion.setFromUnitVectors(new F(0,1,0),O),this.shaftMaterial.uniforms.uTime.value=i,this.shaftMaterial.uniforms.uWaveIntensity.value=s,this.shaftMaterial.uniforms.uSunColor.value.copy(f),this.shaftMaterial.uniforms.uCameraSubmergence.value=g,this.shaftMaterial.uniforms.uSunElev.value=y}this.planktonPoints.visible=g>.02,this.planktonMaterial.uniforms.uTime.value=i,this.planktonMaterial.uniforms.uAnchor.value.copy(l.position),this.planktonMaterial.uniforms.uSubmergence.value=g;let D=!1;for(let O=0;O<this.bubbles.length;O++){const T=this.bubbles[O];if(!T.active)continue;D=!0,T.age+=t,T.pos.x+=(T.vel.x+Math.sin(i*4.5+T.wobblePhase)*.22)*t,T.pos.y+=T.vel.y*t,T.pos.z+=(T.vel.z+Math.cos(i*4+T.wobblePhase)*.22)*t,T.vel.x*=.96,T.vel.z*=.96;const R=wo(T.pos.x,T.pos.z,i,s,3);if(T.age>=T.maxAge||T.pos.y>=R.height-.02)T.active=!1,this._dummy.position.set(0,-100,0),this._dummy.scale.setScalar(1e-4);else{const P=.8+T.age/T.maxAge*.55;this._dummy.position.copy(T.pos),this._dummy.scale.set(T.radius*P*1.08,T.radius*P*.92,T.radius*P*1.08)}this._dummy.updateMatrix(),this.bubbleMesh.setMatrixAt(O,this._dummy.matrix)}return D&&(this.bubbleMesh.instanceMatrix.needsUpdate=!0),{cameraSubmergence:g,cameraDepth:A}}renderComposite(t){t.setRenderTarget(null),t.render(this.postScene,this.postCamera)}resize(t,i){const s=Math.max(1,Math.floor(t)),l=Math.max(1,Math.floor(i));this.sceneRT.setSize(s,l),this.postMaterial.uniforms.uResolution.value.set(s,l)}dispose(){this.sceneRT.depthTexture?.dispose(),this.sceneRT.dispose();for(const t of this.disposables)t.dispose()}}class VR{ctx=null;masterGain=null;surfaceBus=null;surfaceLowpass=null;underwaterBus=null;waveGain=null;waveFilter=null;windGain=null;windFilter=null;currentGain=null;noiseBuffer=null;pinkNoiseBuffer=null;unlocked=!1;muted=!1;gullTimer=6;lastFilterFreq=18e3;wasUnderwater=!1;isUnlocked(){return this.unlocked}isMuted(){return this.muted}getCurrentFilterFreq(){return this.lastFilterFreq}setMuted(t){this.muted=t,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(t?0:.78,this.ctx.currentTime,.06)}unlock(){if(this.unlocked){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(t)try{const i=new t;this.ctx=i;const s=i.createGain();s.gain.value=this.muted?0:.78,s.connect(i.destination),this.masterGain=s;const l=i.sampleRate,c=l*3,f=i.createBuffer(1,c,l),d=i.createBuffer(1,c,l),p=f.getChannelData(0),m=d.getChannelData(0);let _=0,v=0,g=0,S=0,E=0,A=0,M=0;for(let J=0;J<c;J++){const X=Math.random()*2-1;p[J]=X,_=.99886*_+X*.0555179,v=.99332*v+X*.0750759,g=.969*g+X*.153852,S=.8665*S+X*.3104856,E=.55*E+X*.5329522,A=-.7616*A-X*.016898,m[J]=(_+v+g+S+E+A+M+X*.5362)*.095,M=X*.115926}this.noiseBuffer=f,this.pinkNoiseBuffer=d;const y=i.createBiquadFilter();y.type="lowpass",y.frequency.value=18e3,y.Q.value=.85,y.connect(s),this.surfaceLowpass=y;const D=i.createGain();D.gain.value=1,D.connect(y),this.surfaceBus=D;const O=i.createBufferSource();O.buffer=d,O.loop=!0;const T=i.createBiquadFilter();T.type="lowpass",T.frequency.value=650,T.Q.value=.7;const R=i.createGain();R.gain.value=.24,O.connect(T),T.connect(R),R.connect(D),O.start(),this.waveFilter=T,this.waveGain=R;const L=i.createBufferSource();L.buffer=d,L.loop=!0;const P=i.createBiquadFilter();P.type="bandpass",P.frequency.value=480,P.Q.value=1.25;const b=i.createGain();b.gain.value=.075,L.connect(P),P.connect(b),b.connect(D),L.start(),this.windFilter=P,this.windGain=b;const U=i.createGain();U.gain.value=0,U.connect(s),this.underwaterBus=U;const B=i.createBufferSource();B.buffer=d,B.loop=!0;const I=i.createBiquadFilter();I.type="lowpass",I.frequency.value=195,I.Q.value=1.4;const W=i.createGain();W.gain.value=.52,B.connect(I),I.connect(W),W.connect(U),B.start(),this.currentGain=W,i.state==="suspended"&&i.resume(),this.unlocked=!0}catch{}}update(t,i,s,l,c){if(!this.unlocked||!this.ctx)return;const f=this.ctx.currentTime,d=ue.clamp(c,0,1);d>.55&&!this.wasUnderwater?(this.playBubbleBurst(7),this.playSwimStroke(!0,.9),this.wasUnderwater=!0):d<.25&&this.wasUnderwater&&(this.wasUnderwater=!1);const p=18e3*Math.pow(320/18e3,d);if(this.lastFilterFreq=p,this.surfaceLowpass&&this.surfaceLowpass.frequency.setTargetAtTime(p,f,.085),this.surfaceBus){const m=ue.lerp(1,.62,d);this.surfaceBus.gain.setTargetAtTime(m,f,.09)}if(this.underwaterBus&&this.underwaterBus.gain.setTargetAtTime(d*.92,f,.09),this.waveGain&&this.waveFilter){const m=Math.pow(s,1.35),_=.55+l*.55,v=(.14+m*.26)*_,g=(340+m*1350)*Math.min(1.3,_);this.waveGain.gain.setTargetAtTime(v,f,.12),this.waveFilter.frequency.setTargetAtTime(g,f,.12)}if(this.windGain&&this.windFilter){const m=Math.sin(i*.37)*.5+.5;this.windGain.gain.setTargetAtTime((.045+m*.055)*(1-d*.8),f,.2),this.windFilter.frequency.setTargetAtTime(360+m*420,f,.25)}if(this.currentGain){const m=.44+Math.sin(i*.72)*.1;this.currentGain.gain.setTargetAtTime(m,f,.2)}d<.35&&(this.gullTimer-=t,this.gullTimer<=0&&(this.playSeagullCall(),this.gullTimer=11+Math.random()*16))}playFootstep(t,i,s=!1){if(!this.unlocked||!this.ctx||!this.noiseBuffer||!this.surfaceBus||this.muted)return;const l=this.ctx,c=l.currentTime,f=s?1.25:.88;if(i>.12){const _=l.createBufferSource();_.buffer=this.pinkNoiseBuffer||this.noiseBuffer;const v=l.createBiquadFilter();v.type="bandpass",v.frequency.setValueAtTime(750+Math.random()*350,c),v.frequency.exponentialRampToValueAtTime(280,c+.22),v.Q.value=1.6;const g=l.createGain();g.gain.setValueAtTime(.001,c),g.gain.linearRampToValueAtTime(.22*f,c+.03),g.gain.exponentialRampToValueAtTime(.001,c+.25),_.connect(v),v.connect(g),g.connect(this.surfaceBus),_.start(c,Math.random()*1.5,.28);return}const d=t>.55?2:3;for(let _=0;_<d;_++){const v=c+_*(.018+Math.random()*.014),g=t>.55?.075:.065,S=l.createBufferSource();S.buffer=this.noiseBuffer;const E=l.createBiquadFilter();E.type="bandpass";const A=ue.lerp(2550,1050,t)+(Math.random()-.5)*500;E.frequency.setValueAtTime(A,v),E.Q.value=t>.55?1.8:2.2;const M=l.createGain(),y=(.11-_*.02)*f;M.gain.setValueAtTime(.001,v),M.gain.linearRampToValueAtTime(y,v+.01),M.gain.exponentialRampToValueAtTime(.001,v+g),S.connect(E),E.connect(M),M.connect(this.surfaceBus),S.start(v,Math.random()*2,g+.02)}const p=l.createOscillator();p.type="sine",p.frequency.setValueAtTime(105+Math.random()*20,c),p.frequency.exponentialRampToValueAtTime(42,c+.07);const m=l.createGain();m.gain.setValueAtTime(.055*f,c),m.gain.exponentialRampToValueAtTime(.001,c+.075),p.connect(m),m.connect(this.surfaceBus),p.start(c),p.stop(c+.08)}playSwimStroke(t,i=.75){if(!this.unlocked||!this.ctx||!this.pinkNoiseBuffer||this.muted)return;const s=this.ctx,l=s.currentTime,c=t?this.underwaterBus:this.surfaceBus;if(!c)return;const f=s.createBufferSource();f.buffer=this.pinkNoiseBuffer;const d=s.createBiquadFilter();d.type="bandpass",t?(d.frequency.setValueAtTime(160,l),d.frequency.linearRampToValueAtTime(290,l+.14),d.frequency.exponentialRampToValueAtTime(110,l+.42),d.Q.value=1.4):(d.frequency.setValueAtTime(950,l),d.frequency.exponentialRampToValueAtTime(380,l+.34),d.Q.value=1.1);const p=s.createGain();p.gain.setValueAtTime(.001,l),p.gain.linearRampToValueAtTime(.26*i,l+.09),p.gain.exponentialRampToValueAtTime(.001,l+.44),f.connect(d),d.connect(p),p.connect(c),f.start(l,Math.random()*1.6,.48)}playBubbleBurst(t=4){if(!this.unlocked||!this.ctx||!this.underwaterBus||this.muted)return;const i=this.ctx,s=i.currentTime;for(let l=0;l<t;l++){const c=s+l*(.032+Math.random()*.048),f=.055+Math.random()*.045,d=340+Math.random()*520,p=i.createOscillator();p.type="sine",p.frequency.setValueAtTime(d,c),p.frequency.exponentialRampToValueAtTime(d*1.95,c+f);const m=i.createGain();m.gain.setValueAtTime(.001,c),m.gain.linearRampToValueAtTime(.075+Math.random()*.04,c+f*.22),m.gain.exponentialRampToValueAtTime(.001,c+f),p.connect(m),m.connect(this.underwaterBus),p.start(c),p.stop(c+f+.01)}}playSeagullCall(){if(!this.ctx||!this.surfaceBus||this.muted)return;const t=this.ctx,i=t.currentTime,s=(Math.random()-.5)*1.5,l=t.createStereoPanner?t.createStereoPanner():null;l&&(l.pan.value=s,l.connect(this.surfaceBus));const c=l||this.surfaceBus,f=2+Math.floor(Math.random()*2);for(let d=0;d<f;d++){const p=i+d*.36,m=t.createOscillator();m.type="triangle";const _=1650+Math.random()*380-d*110;m.frequency.setValueAtTime(_*.78,p),m.frequency.linearRampToValueAtTime(_,p+.07),m.frequency.exponentialRampToValueAtTime(_*.62,p+.27);const v=t.createBiquadFilter();v.type="bandpass",v.frequency.value=_,v.Q.value=3.2;const g=t.createGain();g.gain.setValueAtTime(5e-4,p),g.gain.linearRampToValueAtTime(.026,p+.05),g.gain.exponentialRampToValueAtTime(5e-4,p+.28),m.connect(v),v.connect(g),g.connect(c),m.start(p),m.stop(p+.3)}}dispose(){this.ctx&&(this.ctx.close(),this.ctx=null),this.unlocked=!1}}class kR{container;renderer;scene;camera;terrainHeightTex;footprints;sharedUniforms;skySystem;ocean;environment;npcs;player;underwater;audio;terrainMesh;terrainGeo;sandMaterial;settings={sunElevation:38,sunAzimuth:152,waveIntensity:1,perspective:"third-person",muted:!1};rafId=0;running=!1;paused=!1;simTime=0;lastNow=0;fpsAccum=0;fpsFrames=0;currentFps=60;lastHudPush=0;latestSnapshot;onHudUpdate;constructor(t,i){this.container=t,this.onHudUpdate=i;const s=Math.max(1,t.clientWidth),l=Math.max(1,t.clientHeight);this.renderer=new uR({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(s,l),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gl,this.renderer.toneMapping=na,this.renderer.outputColorSpace=ai,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",t.appendChild(this.renderer.domElement),this.scene=new tc,this.camera=new Vi(60,s/l,.12,650),this.terrainHeightTex=pR(),this.footprints=new mR(this.terrainHeightTex),this.sharedUniforms=CR(),this.skySystem=LR(this.renderer,this.scene),this.terrainGeo=dR(),this.sandMaterial=DR(this.footprints.getTexture(),this.sharedUniforms),this.terrainMesh=new ne(this.terrainGeo,this.sandMaterial),this.terrainMesh.receiveShadow=!0,this.scene.add(this.terrainMesh),this.ocean=NR(this.terrainHeightTex),this.scene.add(this.ocean.mesh),this.environment=BR(this.sharedUniforms),this.scene.add(this.environment.group),this.npcs=FR(this.environment.loungeSpots,this.sharedUniforms),this.scene.add(this.npcs.group),this.underwater=new GR(Math.floor(s*this.renderer.getPixelRatio()),Math.floor(l*this.renderer.getPixelRatio()),this.renderer),this.scene.add(this.underwater.worldGroup),this.audio=new VR,this.player=new HR(this.renderer.domElement,this.sharedUniforms,()=>this.audio.unlock()),this.scene.add(this.player.humanoid.root),this.latestSnapshot={zone:"dry_sand",speed:0,waterDepth:0,submergedDepth:0,cameraSubmergence:0,perspective:"third-person",posX:this.player.position.x,posY:this.player.position.y,posZ:this.player.position.z,fps:60,audioUnlocked:!1,audioFilterHz:18e3,totalFootprints:0,npcCount:this.npcs.npcCount},window.addEventListener("resize",this.handleResize),this.exposeDebugAPI(),this.running=!0,this.lastNow=performance.now(),this.rafId=requestAnimationFrame(this.loop)}exposeDebugAPI(){window.__SOLSTICE_DEBUG__={getTelemetry:()=>({...this.latestSnapshot}),teleportPlayer:(t,i,s,l,c)=>{this.player.teleportTo(t,i,s,l,c)},setPerspective:t=>this.setPerspective(t),setVirtualKey:(t,i)=>this.player.setVirtualKey(t,i),setSunElevation:t=>this.setSunElevation(t),setWaveIntensity:t=>this.setWaveIntensity(t),unlockAudio:()=>this.audio.unlock(),getNpcWalkers:()=>this.npcs.getWalkerPositions(),getCameraPos:()=>({x:Number(this.camera.position.x.toFixed(2)),y:Number(this.camera.position.y.toFixed(2)),z:Number(this.camera.position.z.toFixed(2))}),setPaused:t=>{this.paused=t}}}unlockAudio(){this.audio.unlock()}setSunElevation(t){this.settings.sunElevation=ue.clamp(t,6,74),this.skySystem.setSunAngle(this.settings.sunElevation,this.settings.sunAzimuth,this.renderer,this.scene)}setSunPreset(t){t==="morning"?(this.settings.sunElevation=24,this.settings.sunAzimuth=122):t==="midday"?(this.settings.sunElevation=56,this.settings.sunAzimuth=162):(this.settings.sunElevation=11,this.settings.sunAzimuth=208),this.skySystem.setSunAngle(this.settings.sunElevation,this.settings.sunAzimuth,this.renderer,this.scene)}setWaveIntensity(t){this.settings.waveIntensity=ue.clamp(t,.25,1.85)}setPerspective(t){this.settings.perspective=t,this.player.setPerspective(t)}togglePerspective(){const t=this.player.togglePerspective();return this.settings.perspective=t,t}setMuted(t){this.settings.muted=t,this.audio.setMuted(t)}handleResize=()=>{const t=Math.max(1,this.container.clientWidth),i=Math.max(1,this.container.clientHeight);this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i);const s=this.renderer.getPixelRatio();this.underwater.resize(t*s,i*s)};loop=t=>{if(!this.running)return;if(this.rafId=requestAnimationFrame(this.loop),this.paused){this.lastNow=t;return}const i=(t-this.lastNow)*.001;this.lastNow=t;const s=Math.min(Math.max(i,.001),.05);this.simTime+=s,this.fpsAccum+=i,this.fpsFrames++,this.fpsAccum>=.4&&(this.currentFps=Math.round(this.fpsFrames/Math.max(.001,this.fpsAccum)),this.fpsAccum=0,this.fpsFrames=0);const l=this.settings.waveIntensity,c=this.player.update(s,this.simTime,l,this.camera,this.environment.colliders,this.footprints,this.audio,this.underwater);this.npcs.update(s,this.simTime,l,this.footprints,this.environment.colliders),this.footprints.update(this.renderer,this.simTime,s,l);const f=this.sandMaterial.uniforms;f&&f.uDeformMap&&(f.uDeformMap.value=this.footprints.getTexture()),this.camera.updateMatrixWorld(),this.sharedUniforms.uTime.value=this.simTime,this.sharedUniforms.uSunDir.value.copy(this.skySystem.sunDirection),this.sharedUniforms.uWaveIntensity.value=l,this.sharedUniforms.uCameraMatrixWorld.value.copy(this.camera.matrixWorld),this.skySystem.updateSunDiscPosition(this.camera.position),this.environment.update(this.simTime),this.ocean.update(this.simTime,l,this.skySystem.sunDirection,this.skySystem.sunColor,this.skySystem.skyZenithColor,this.skySystem.horizonColor,this.camera);const{cameraSubmergence:d,cameraDepth:p}=this.underwater.update(s,this.simTime,l,this.camera,this.skySystem.sunDirection,this.skySystem.sunColor),m=RR(this.simTime,l);this.audio.update(s,this.simTime,m,l,d),this.renderer.setRenderTarget(this.underwater.sceneRT),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.underwater.renderComposite(this.renderer),this.latestSnapshot={...c,cameraSubmergence:d,submergedDepth:p>0?p:c.submergedDepth,fps:this.currentFps,audioUnlocked:this.audio.isUnlocked(),audioFilterHz:Math.round(this.audio.getCurrentFilterFreq()),totalFootprints:this.footprints.totalStamps,npcCount:this.npcs.npcCount},t-this.lastHudPush>85&&(this.lastHudPush=t,this.onHudUpdate(this.latestSnapshot))};dispose(){this.running=!1,cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.handleResize),delete window.__SOLSTICE_DEBUG__,this.player.dispose(),this.npcs.dispose(),this.environment.dispose(),this.ocean.dispose(),this.skySystem.dispose(),this.footprints.dispose(),this.underwater.dispose(),this.audio.dispose(),this.terrainGeo.dispose(),this.sandMaterial.dispose(),this.terrainHeightTex.dispose(),this.renderer.dispose(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement)}}const Sy=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();const WR=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const XR=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase());const NS=o=>{const t=XR(o);return t.charAt(0).toUpperCase()+t.slice(1)};var YR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const qR=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const ZR=fn.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},p)=>fn.createElement("svg",{ref:p,...YR,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:Sy("lucide",l),...!c&&!qR(d)&&{"aria-hidden":"true"},...d},[...f.map(([m,_])=>fn.createElement(m,_)),...Array.isArray(c)?c:[c]]));const ba=(o,t)=>{const i=fn.forwardRef(({className:s,...l},c)=>fn.createElement(ZR,{ref:c,iconNode:t,className:Sy(`lucide-${WR(NS(o))}`,`lucide-${o}`,s),...l}));return i.displayName=NS(o),i};const KR=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],QR=ba("camera",KR);const JR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jR=ba("chevron-down",JR);const $R=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],tC=ba("chevron-up",$R);const eC=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],nC=ba("eye",eC);const iC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],aC=ba("info",iC);const sC=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],rC=ba("sun",sC);const oC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],LS=ba("volume-2",oC);const lC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],cC=ba("volume-x",lC);const uC=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],fC=ba("waves",uC);const hC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],dC=ba("x",hC),pC={dry_sand:{label:"Dry Sand",dotClass:"bg-amber-300"},wet_sand:{label:"Wet Shoreline",dotClass:"bg-amber-500"},wading:{label:"Wading",dotClass:"bg-teal-300"},surface_swim:{label:"Surface Swim",dotClass:"bg-cyan-400"},underwater:{label:"Underwater",dotClass:"bg-sky-400"}},mC=({visible:o,snapshot:t,sunElevation:i,waveIntensity:s,perspective:l,muted:c,onSunElevationChange:f,onSunPreset:d,onWaveIntensityChange:p,onTogglePerspective:m,onToggleMute:_,onUnlockAudio:v})=>{const[g,S]=fn.useState(!0),[E,A]=fn.useState(!1);if(!o)return null;const M=pC[t.zone],y=t.cameraSubmergence>.35||t.zone==="underwater";return Rt.jsxs("div",{className:"pointer-events-none fixed inset-0 z-20 flex flex-col justify-between p-4 sm:p-5 text-white",children:[Rt.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Rt.jsxs("div",{className:"pointer-events-auto flex flex-col gap-2",children:[Rt.jsxs("div",{className:"rounded-2xl border border-white/15 bg-slate-950/35 px-4 py-2.5 backdrop-blur-md shadow-lg",children:[Rt.jsxs("div",{className:"flex items-center gap-2.5",children:[Rt.jsx("span",{className:`h-2 w-2 rounded-full ${M.dotClass} shadow-[0_0_8px_currentColor]`}),Rt.jsx("span",{className:"text-xs font-semibold tracking-[0.18em] uppercase text-white/95",children:"Solstice Bay"}),Rt.jsx("span",{className:"text-[11px] font-medium text-white/45",children:"•"}),Rt.jsx("span",{className:"text-xs font-medium text-white/85",children:M.label})]}),Rt.jsxs("div",{className:"mt-1.5 flex items-center gap-3 text-[11px] text-white/65 tabular-nums",children:[t.waterDepth>.08||t.submergedDepth>.05?Rt.jsxs("span",{children:["Depth:"," ",Rt.jsxs("strong",{className:"font-semibold text-cyan-200",children:[(y?t.submergedDepth:t.waterDepth).toFixed(1),"m"]})]}):Rt.jsxs("span",{children:["Tracks:"," ",Rt.jsx("strong",{className:"font-semibold text-amber-200",children:t.totalFootprints})]}),Rt.jsx("span",{className:"text-white/30",children:"|"}),Rt.jsxs("span",{children:[t.fps," FPS"]}),t.audioUnlocked&&!c&&Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("span",{className:"text-white/30",children:"|"}),Rt.jsxs("span",{className:"text-sky-200/80",children:["LPF ",t.audioFilterHz>=1e3?`${(t.audioFilterHz/1e3).toFixed(1)}kHz`:`${t.audioFilterHz}Hz`]})]})]})]}),!t.audioUnlocked&&Rt.jsxs("button",{type:"button",onClick:v,className:"pointer-events-auto flex items-center gap-2 self-start rounded-full border border-cyan-300/30 bg-slate-950/45 px-3.5 py-1.5 text-xs font-medium text-cyan-100 backdrop-blur-md transition hover:bg-slate-900/65 hover:border-cyan-200/50 cursor-pointer",children:[Rt.jsx(LS,{className:"h-3.5 w-3.5 text-cyan-300"}),"Click to Explore & Enable Coastal Audio"]})]}),Rt.jsxs("div",{className:"pointer-events-auto flex flex-col items-end gap-2",children:[Rt.jsxs("div",{className:"w-64 rounded-2xl border border-white/15 bg-slate-950/38 backdrop-blur-md shadow-xl overflow-hidden",children:[Rt.jsxs("div",{className:"flex items-center justify-between px-3.5 py-2.5 border-b border-white/10",children:[Rt.jsxs("button",{type:"button",onClick:()=>S(D=>!D),className:"flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/90 cursor-pointer",children:[Rt.jsx("span",{children:"Environment"}),g?Rt.jsx(tC,{className:"h-3.5 w-3.5 text-white/60"}):Rt.jsx(jR,{className:"h-3.5 w-3.5 text-white/60"})]}),Rt.jsxs("div",{className:"flex items-center gap-1.5",children:[Rt.jsx("button",{type:"button",onClick:m,title:"Toggle Camera Perspective (V)",className:"rounded-lg border border-white/15 bg-white/10 p-1.5 text-white/85 transition hover:bg-white/20 cursor-pointer",children:l==="third-person"?Rt.jsx(QR,{className:"h-3.5 w-3.5"}):Rt.jsx(nC,{className:"h-3.5 w-3.5"})}),Rt.jsx("button",{type:"button",onClick:_,title:"Toggle Audio (M)",className:"rounded-lg border border-white/15 bg-white/10 p-1.5 text-white/85 transition hover:bg-white/20 cursor-pointer",children:c?Rt.jsx(cC,{className:"h-3.5 w-3.5 text-rose-300"}):Rt.jsx(LS,{className:"h-3.5 w-3.5 text-cyan-200"})}),Rt.jsx("button",{type:"button",onClick:()=>A(D=>!D),title:"Tech Stack & Licenses",className:"rounded-lg border border-white/15 bg-white/10 p-1.5 text-white/85 transition hover:bg-white/20 cursor-pointer",children:Rt.jsx(aC,{className:"h-3.5 w-3.5"})})]})]}),g&&Rt.jsxs("div",{className:"space-y-3.5 p-3.5",children:[Rt.jsxs("div",{children:[Rt.jsxs("div",{className:"mb-1.5 flex items-center justify-between text-[11px] text-white/80",children:[Rt.jsxs("span",{className:"flex items-center gap-1.5 font-medium",children:[Rt.jsx(rC,{className:"h-3.5 w-3.5 text-amber-300"}),"Sun Angle"]}),Rt.jsxs("span",{className:"tabular-nums text-white/65",children:[Math.round(i),"°"]})]}),Rt.jsx("input",{type:"range",min:8,max:68,step:1,value:i,onChange:D=>f(Number(D.target.value)),className:"solstice-slider w-full","aria-label":"Sun elevation angle"}),Rt.jsx("div",{className:"mt-2 grid grid-cols-3 gap-1",children:[["morning","Morning"],["midday","Midday"],["golden","Golden"]].map(([D,O])=>Rt.jsx("button",{type:"button",onClick:()=>d(D),className:"rounded-lg border border-white/10 bg-white/8 py-1 text-[10px] font-medium text-white/80 transition hover:bg-white/20 hover:text-white cursor-pointer",children:O},D))})]}),Rt.jsxs("div",{children:[Rt.jsxs("div",{className:"mb-1.5 flex items-center justify-between text-[11px] text-white/80",children:[Rt.jsxs("span",{className:"flex items-center gap-1.5 font-medium",children:[Rt.jsx(fC,{className:"h-3.5 w-3.5 text-cyan-300"}),"Wave Intensity"]}),Rt.jsxs("span",{className:"tabular-nums text-white/65",children:[Math.round(s*100),"%"]})]}),Rt.jsx("input",{type:"range",min:.3,max:1.75,step:.05,value:s,onChange:D=>p(Number(D.target.value)),className:"solstice-slider w-full","aria-label":"Wave intensity"})]}),Rt.jsxs("div",{className:"flex items-center justify-between pt-0.5",children:[Rt.jsx("span",{className:"text-[11px] font-medium text-white/75",children:"Camera"}),Rt.jsx("button",{type:"button",onClick:m,className:"rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90 transition hover:bg-white/20 cursor-pointer",children:l==="third-person"?"3rd Person (V)":"1st Person (V)"})]})]})]}),E&&Rt.jsxs("div",{className:"w-72 rounded-2xl border border-white/15 bg-slate-950/75 p-3.5 text-[11px] leading-relaxed text-white/80 backdrop-blur-lg shadow-2xl",children:[Rt.jsxs("div",{className:"mb-1.5 flex items-center justify-between",children:[Rt.jsx("span",{className:"font-semibold tracking-wider uppercase text-white/95",children:"Architecture & Licenses"}),Rt.jsx("button",{type:"button",onClick:()=>A(!1),className:"text-white/55 hover:text-white cursor-pointer",children:Rt.jsx(dC,{className:"h-3.5 w-3.5"})})]}),Rt.jsxs("ul",{className:"space-y-1 text-white/70",children:[Rt.jsxs("li",{children:[Rt.jsx("strong",{className:"text-white/90",children:"Engine:"})," Three.js (MIT) · WebGL2 GLSL ·"," ","three-custom-shader-material (MIT)"]}),Rt.jsxs("li",{children:[Rt.jsx("strong",{className:"text-white/90",children:"Shaders:"})," 6-wave Gerstner ocean, RTT ping-pong sand footprints & wet-sand erosion, dual-layer caustics, volumetric sun shafts, DepthTexture GTA V waterline lens post-pass."]}),Rt.jsxs("li",{children:[Rt.jsx("strong",{className:"text-white/90",children:"Characters & Props:"})," 100% original procedural 19-bone SkinnedMesh humanoids & beach assets (MIT, zero restricted external models)."]}),Rt.jsxs("li",{children:[Rt.jsx("strong",{className:"text-white/90",children:"Audio:"})," Procedural Web Audio API engine with 18 kHz → 320 Hz Biquad underwater low-pass sweep."]})]})]})]})]}),Rt.jsx("div",{className:"flex justify-center",children:Rt.jsxs("div",{className:"pointer-events-auto flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 rounded-2xl border border-white/15 bg-slate-950/35 px-4 py-2 text-[11px] text-white/80 backdrop-blur-md shadow-lg",children:[Rt.jsxs("span",{className:"flex items-center gap-1.5",children:[Rt.jsx("kbd",{className:"rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white",children:"WASD"}),Rt.jsx("span",{children:"Move / Swim"})]}),Rt.jsxs("span",{className:"flex items-center gap-1.5",children:[Rt.jsx("kbd",{className:"rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white",children:"Shift"}),Rt.jsx("span",{children:"Sprint / Fast"})]}),Rt.jsxs("span",{className:"flex items-center gap-1.5",children:[Rt.jsx("kbd",{className:"rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white",children:"Space"}),Rt.jsx("span",{children:"Jump / Ascend"})]}),Rt.jsxs("span",{className:"flex items-center gap-1.5",children:[Rt.jsx("kbd",{className:"rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white",children:"C"}),Rt.jsx("span",{children:"Dive"})]}),Rt.jsxs("span",{className:"flex items-center gap-1.5",children:[Rt.jsx("kbd",{className:"rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white",children:"Mouse"}),Rt.jsx("span",{children:"Look / Scroll"})]}),Rt.jsxs("span",{className:"flex items-center gap-1.5",children:[Rt.jsx("kbd",{className:"rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white",children:"V"}),Rt.jsx("span",{children:"View"})]}),Rt.jsxs("span",{className:"flex items-center gap-1.5",children:[Rt.jsx("kbd",{className:"rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white",children:"H"}),Rt.jsx("span",{children:"Hide HUD"})]})]})})]})},gC={zone:"dry_sand",speed:0,waterDepth:0,submergedDepth:0,cameraSubmergence:0,perspective:"third-person",posX:0,posY:.5,posZ:5.2,fps:60,audioUnlocked:!1,audioFilterHz:18e3,totalFootprints:0,npcCount:9};function vC(){const o=fn.useRef(null),t=fn.useRef(null),[i,s]=fn.useState(!0),[l,c]=fn.useState(gC),[f,d]=fn.useState(38),[p,m]=fn.useState(1),[_,v]=fn.useState("third-person"),[g,S]=fn.useState(!1);fn.useEffect(()=>{const T=o.current;if(!T)return;const R=new kR(T,L=>{c(L)});return t.current=R,()=>{R.dispose(),t.current=null}},[]);const E=fn.useCallback(T=>{d(T),t.current?.setSunElevation(T)},[]),A=fn.useCallback(T=>{d(T==="morning"?24:T==="midday"?56:11),t.current?.setSunPreset(T)},[]),M=fn.useCallback(T=>{m(T),t.current?.setWaveIntensity(T)},[]),y=fn.useCallback(()=>{const T=t.current?.togglePerspective();T&&v(T)},[]),D=fn.useCallback(()=>{S(T=>{const R=!T;return t.current?.unlockAudio(),t.current?.setMuted(R),R})},[]),O=fn.useCallback(()=>{t.current?.unlockAudio()},[]);return fn.useEffect(()=>{const T=R=>{R.target instanceof HTMLInputElement||R.target instanceof HTMLTextAreaElement||(R.code==="KeyH"?s(L=>!L):R.code==="KeyV"?y():R.code==="KeyM"&&D())};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[y,D]),Rt.jsxs("main",{className:"relative h-screen w-screen overflow-hidden bg-[#061826]",children:[Rt.jsx("div",{ref:o,className:"h-full w-full cursor-grab active:cursor-grabbing","aria-label":"Solstice Bay 3D Interactive Coastal and Underwater Canvas"}),Rt.jsx(mC,{visible:i,snapshot:l,sunElevation:f,waveIntensity:p,perspective:_,muted:g,onSunElevationChange:E,onSunPreset:A,onWaveIntensityChange:M,onTogglePerspective:y,onToggleMute:D,onUnlockAudio:O})]})}cb.createRoot(document.getElementById("root")).render(Rt.jsx(fn.StrictMode,{children:Rt.jsx(vC,{})}));
