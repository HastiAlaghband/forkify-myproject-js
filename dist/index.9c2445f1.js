function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.9c2445f1.js","hfd23":"icons.c14567a0.svg","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,h={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var p,v=Function.prototype.call;h=f?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!g.call({1:2},1);p=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k,E={},S={},M=Function.prototype,N=M.call,O=f&&M.bind.bind(N,N),j=(S=f?O:function(e){return function(){return N.apply(e,arguments)}})({}.toString),L=S("".slice);k=function(e){return L(j(e),8,-1)},w=function(e){if("Function"===k(e))return S(e)};var P=Object,x=w("".split);E=d((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==k(e)?x(e,""):P(e)}:P;var $,T;T=function(e){return null==e};var I=TypeError;$=function(e){if(T(e))throw I("Can't call method on "+e);return e},_=function(e){return E($(e))};var H,q,F,A={},C={},D="object"==typeof document&&document.all,R=(F={all:D,IS_HTMLDDA:void 0===D&&void 0!==D}).all;C=F.IS_HTMLDDA?function(e){return"function"==typeof e||e===R}:function(e){return"function"==typeof e};var U=F.all;A=F.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:C(e)||e===U}:function(e){return"object"==typeof e?null!==e:C(e)};var W,B={},G=function(e){return C(e)?e:void 0};W=function(e,t){return arguments.length<2?G(c[e]):c[e]&&c[e][t]};var z={};z=w({}.isPrototypeOf);var Z,J,V,Y={};Y=W("navigator","userAgent")||"";var Q,K,X=c.process,ee=c.Deno,te=X&&X.versions||ee&&ee.version,ne=te&&te.v8;ne&&(K=(Q=ne.split("."))[0]>0&&Q[0]<4?1:+(Q[0]+Q[1])),!K&&Y&&(!(Q=Y.match(/Edge\/(\d+)/))||Q[1]>=74)&&(Q=Y.match(/Chrome\/(\d+)/))&&(K=+Q[1]),V=K,J=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&V&&V<41})),Z=J&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var re=Object;B=Z?function(e){return"symbol"==typeof e}:function(e){var t=W("Symbol");return C(t)&&z(t.prototype,re(e))};var ie,oe,ae,se=String;ae=function(e){try{return se(e)}catch(e){return"Object"}};var ce=TypeError;oe=function(e){if(C(e))return e;throw ce(ae(e)+" is not a function")},ie=function(e,t){var n=e[t];return T(n)?void 0:oe(n)};var ue,le=TypeError;ue=function(e,t){var n,r;if("string"===t&&C(n=e.toString)&&!A(r=h(n,e)))return r;if(C(n=e.valueOf)&&!A(r=h(n,e)))return r;if("string"!==t&&C(n=e.toString)&&!A(r=h(n,e)))return r;throw le("Can't convert object to primitive value")};var de;var fe,he={},pe=Object.defineProperty;fe=function(e,t){try{pe(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var ve=c["__core-js_shared__"]||fe("__core-js_shared__",{});he=ve,(de=function(e,t){return he[e]||(he[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ge,ye={},me=Object;ge=function(e){return me($(e))};var be=w({}.hasOwnProperty);ye=Object.hasOwn||function(e,t){return be(ge(e),t)};var _e,we=0,ke=Math.random(),Ee=w(1..toString);_e=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ee(++we+ke,36)};var Se=de("wks"),Me=c.Symbol,Ne=Me&&Me.for,Oe=Z?Me:Me&&Me.withoutSetter||_e,je=TypeError,Le=function(e){if(!ye(Se,e)||!J&&"string"!=typeof Se[e]){var t="Symbol."+e;J&&ye(Me,e)?Se[e]=Me[e]:Se[e]=Z&&Ne?Ne(t):Oe(t)}return Se[e]}("toPrimitive");q=function(e,t){if(!A(e)||B(e))return e;var n,r=ie(e,Le);if(r){if(void 0===t&&(t="default"),n=h(r,e,t),!A(n)||B(n))return n;throw je("Can't convert object to primitive value")}return void 0===t&&(t="number"),ue(e,t)},H=function(e){var t=q(e,"string");return B(t)?t:t+""};var Pe,xe,$e=c.document,Te=A($e)&&A($e.createElement);xe=function(e){return Te?$e.createElement(e):{}},Pe=!l&&!d((function(){return 7!=Object.defineProperty(xe("div"),"a",{get:function(){return 7}}).a}));var Ie,He,qe=Object.getOwnPropertyDescriptor,Fe=s=l?qe:function(e,t){if(e=_(e),t=H(t),Pe)try{return qe(e,t)}catch(e){}if(ye(e,t))return b(!h(p,e,t),e[t])},Ae={};He=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ce,De=String,Re=TypeError;Ce=function(e){if(A(e))return e;throw Re(De(e)+" is not an object")};var Ue=TypeError,We=Object.defineProperty,Be=Object.getOwnPropertyDescriptor;Ie=l?He?function(e,t,n){if(Ce(e),t=H(t),Ce(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Be(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return We(e,t,n)}:We:function(e,t,n){if(Ce(e),t=H(t),Ce(n),Pe)try{return We(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ue("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ae=l?function(e,t,n){return Ie(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var Ge,ze,Ze=Function.prototype,Je=l&&Object.getOwnPropertyDescriptor,Ve=ye(Ze,"name"),Ye={EXISTS:Ve,PROPER:Ve&&"something"===function(){}.name,CONFIGURABLE:Ve&&(!l||l&&Je(Ze,"name").configurable)}.CONFIGURABLE,Qe={},Ke=w(Function.toString);C(he.inspectSource)||(he.inspectSource=function(e){return Ke(e)}),Qe=he.inspectSource;var Xe,et,tt=c.WeakMap;et=C(tt)&&/native code/.test(String(tt));var nt,rt=de("keys");nt=function(e){return rt[e]||(rt[e]=_e(e))};var it={};it={};var ot,at,st,ct=c.TypeError,ut=c.WeakMap;if(et||he.state){var lt=he.state||(he.state=new ut);lt.get=lt.get,lt.has=lt.has,lt.set=lt.set,ot=function(e,t){if(lt.has(e))throw ct("Object already initialized");return t.facade=e,lt.set(e,t),t},at=function(e){return lt.get(e)||{}},st=function(e){return lt.has(e)}}else{var dt=nt("state");it[dt]=!0,ot=function(e,t){if(ye(e,dt))throw ct("Object already initialized");return t.facade=e,Ae(e,dt,t),t},at=function(e){return ye(e,dt)?e[dt]:{}},st=function(e){return ye(e,dt)}}var ft=(Xe={set:ot,get:at,has:st,enforce:function(e){return st(e)?at(e):ot(e,{})},getterFor:function(e){return function(t){var n;if(!A(t)||(n=at(t)).type!==e)throw ct("Incompatible receiver, "+e+" required");return n}}}).enforce,ht=Xe.get,pt=Object.defineProperty,vt=l&&!d((function(){return 8!==pt((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),yt=ze=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!ye(e,"name")||Ye&&e.name!==t)&&(l?pt(e,"name",{value:t,configurable:!0}):e.name=t),vt&&n&&ye(n,"arity")&&e.length!==n.arity&&pt(e,"length",{value:n.arity});try{n&&ye(n,"constructor")&&n.constructor?l&&pt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=ft(e);return ye(r,"source")||(r.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=yt((function(){return C(this)&&ht(this).source||Qe(this)}),"toString"),Ge=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(C(n)&&ze(n,o,r),r.global)i?e[t]=n:fe(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:Ie(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var mt,bt,_t,wt,kt,Et={},St={},Mt=Math.ceil,Nt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?Nt:Mt)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Ot=Math.max,jt=Math.min;wt=function(e,t){var n=kt(e);return n<0?Ot(n+t,0):jt(n,t)};var Lt,Pt,xt=Math.min;Pt=function(e){return e>0?xt(kt(e),9007199254740991):0},Lt=function(e){return Pt(e.length)};var $t=function(e){return function(t,n,r){var i,o=_(t),a=Lt(o),s=wt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Tt={includes:$t(!0),indexOf:$t(!1)}.indexOf,It=w([].push);_t=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!ye(it,n)&&ye(r,n)&&It(o,n);for(;t.length>i;)ye(r,n=t[i++])&&(~Tt(o,n)||It(o,n));return o};var Ht,qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");bt=Object.getOwnPropertyNames||function(e){return _t(e,qt)},Ht=Object.getOwnPropertySymbols;var Ft=w([].concat);Et=W("Reflect","ownKeys")||function(e){var t=bt(Ce(e));return Ht?Ft(t,Ht(e)):t},mt=function(e,t,n){for(var r=Et(t),i=Ie,o=s,a=0;a<r.length;a++){var c=r[a];ye(e,c)||n&&ye(n,c)||i(e,c,o(t,c))}};var At={},Ct=/#|\.prototype\./,Dt=function(e,t){var n=Ut[Rt(e)];return n==Bt||n!=Wt&&(C(t)?d(t):!!t)},Rt=Dt.normalize=function(e){return String(e).replace(Ct,".").toLowerCase()},Ut=Dt.data={},Wt=Dt.NATIVE="N",Bt=Dt.POLYFILL="P";At=Dt,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||fe(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=Fe(n,r))&&a.value:n[r],!At(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;mt(o,i)}(e.sham||i&&i.sham)&&Ae(o,"sham",!0),Ge(n,r,o,e)}};var Gt,zt={},Zt=Function.prototype,Jt=Zt.apply,Vt=Zt.call;zt="object"==typeof Reflect&&Reflect.apply||(f?Vt.bind(Jt):function(){return Vt.apply(Jt,arguments)});var Yt,Qt=w(w.bind);Yt=function(e,t){return oe(e),void 0===t?e:f?Qt(e,t):function(){return e.apply(t,arguments)}};var Kt={};Kt=W("document","documentElement");var Xt={};Xt=w([].slice);var en,tn=TypeError;en=function(e,t){if(e<t)throw tn("Not enough arguments");return e};var nn;nn=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y);var rn;rn="process"==k(c.process);var on,an,sn,cn,un=c.setImmediate,ln=c.clearImmediate,dn=c.process,fn=c.Dispatch,hn=c.Function,pn=c.MessageChannel,vn=c.String,gn=0,yn={};try{on=c.location}catch(e){}var mn=function(e){if(ye(yn,e)){var t=yn[e];delete yn[e],t()}},bn=function(e){return function(){mn(e)}},_n=function(e){mn(e.data)},wn=function(e){c.postMessage(vn(e),on.protocol+"//"+on.host)};un&&ln||(un=function(e){en(arguments.length,1);var t=C(e)?e:hn(e),n=Xt(arguments,1);return yn[++gn]=function(){zt(t,void 0,n)},an(gn),gn},ln=function(e){delete yn[e]},rn?an=function(e){dn.nextTick(bn(e))}:fn&&fn.now?an=function(e){fn.now(bn(e))}:pn&&!nn?(cn=(sn=new pn).port2,sn.port1.onmessage=_n,an=Yt(cn.postMessage,cn)):c.addEventListener&&C(c.postMessage)&&!c.importScripts&&on&&"file:"!==on.protocol&&!d(wn)?(an=wn,c.addEventListener("message",_n,!1)):an="onreadystatechange"in xe("script")?function(e){Kt.appendChild(xe("script")).onreadystatechange=function(){Kt.removeChild(this),mn(e)}}:function(e){setTimeout(bn(e),0)});var kn=(Gt={set:un,clear:ln}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==kn},{clearImmediate:kn});var En=Gt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==En},{setImmediate:En});var Sn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),s=new L(r||[]);return i(a,"_invoke",{value:M(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",h="executing",p="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=m.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function M(e,t,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return x()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=N(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?p:"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function N(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=Sn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Sn:Function("r","regeneratorRuntime = r")(Sn)}const Mn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var n},Nn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},On=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},jn=function(e=Nn.search.page){Nn.search.page=e;const t=(e-1)*Nn.search.resultsPerPage,n=e*Nn.search.resultsPerPage;return Nn.search.results.slice(t,n)},Ln=function(){localStorage.setItem("bookmarks",JSON.stringify(Nn.bookmarks))},Pn=function(e){Nn.bookmarks.push(e),e.id===Nn.recipe.id&&(Nn.recipe.bookmarked=!0),Ln()};!function(){const e=localStorage.getItem("bookmarks");e&&(Nn.bookmarks=JSON.parse(e))}();var xn;xn=new URL(o("27Lyk").resolve("hfd23"),import.meta.url).toString();class $n{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n       <div class="spinner">\n          <svg>\n              <use href="${n(xn)}#icon-loader"></use>\n          </svg>\n       </div>\n  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(xn)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n       </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){const t=`\n      <div class="message">\n       <div>\n        <svg>\n          <use href="${n(xn)}#icon-smile"></use>\n        </svg>\n       </div>\n       <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Tn={};
/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/!function(e){var t={s:1,n:0,d:1};function n(e,t){if(isNaN(e=parseInt(e,10)))throw s.InvalidParameter;return e*t}function r(e,t){if(0===t)throw s.DivisionByZero;var n=Object.create(s.prototype);n.s=e<0?-1:1;var r=a(e=e<0?-e:e,t);return n.n=e/r,n.d=t/r,n}function i(e){for(var t={},n=e,r=2,i=4;i<=n;){for(;n%r==0;)n/=r,t[r]=(t[r]||0)+1;i+=1+2*r++}return n!==e?n>1&&(t[n]=(t[n]||0)+1):t[e]=(t[e]||0)+1,t}var o=function(e,r){var i,o=0,a=1,c=1,u=0,l=0,d=0,f=1,h=1,p=0,v=1,g=1,y=1,m=1e7;if(null==e);else if(void 0!==r){if(c=(o=e)*(a=r),o%1!=0||a%1!=0)throw s.NonIntegerParameter}else switch(typeof e){case"object":if("d"in e&&"n"in e)o=e.n,a=e.d,"s"in e&&(o*=e.s);else{if(!(0 in e))throw s.InvalidParameter;o=e[0],1 in e&&(a=e[1])}c=o*a;break;case"number":if(e<0&&(c=e,e=-e),e%1==0)o=e;else if(e>0){for(e>=1&&(e/=h=Math.pow(10,Math.floor(1+Math.log(e)/Math.LN10)));v<=m&&y<=m;){if(e===(i=(p+g)/(v+y))){v+y<=m?(o=p+g,a=v+y):y>v?(o=g,a=y):(o=p,a=v);break}e>i?(p+=g,v+=y):(g+=p,y+=v),v>m?(o=g,a=y):(o=p,a=v)}o*=h}else(isNaN(e)||isNaN(r))&&(a=o=NaN);break;case"string":if(null===(v=e.match(/\d+|./g)))throw s.InvalidParameter;if("-"===v[p]?(c=-1,p++):"+"===v[p]&&p++,v.length===p+1?l=n(v[p++],c):"."===v[p+1]||"."===v[p]?("."!==v[p]&&(u=n(v[p++],c)),(++p+1===v.length||"("===v[p+1]&&")"===v[p+3]||"'"===v[p+1]&&"'"===v[p+3])&&(l=n(v[p],c),f=Math.pow(10,v[p].length),p++),("("===v[p]&&")"===v[p+2]||"'"===v[p]&&"'"===v[p+2])&&(d=n(v[p+1],c),h=Math.pow(10,v[p+1].length)-1,p+=3)):"/"===v[p+1]||":"===v[p+1]?(l=n(v[p],c),f=n(v[p+2],1),p+=3):"/"===v[p+3]&&" "===v[p+1]&&(u=n(v[p],c),l=n(v[p+2],c),f=n(v[p+4],1),p+=5),v.length<=p){c=o=d+(a=f*h)*u+h*l;break}default:throw s.InvalidParameter}if(0===a)throw s.DivisionByZero;t.s=c<0?-1:1,t.n=Math.abs(o),t.d=Math.abs(a)};function a(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function s(e,n){if(o(e,n),!(this instanceof s))return r(t.s*t.n,t.d);e=a(t.d,t.n),this.s=t.s,this.n=t.n/e,this.d=t.d/e}s.DivisionByZero=new Error("Division by Zero"),s.InvalidParameter=new Error("Invalid argument"),s.NonIntegerParameter=new Error("Parameters must be integer"),s.prototype={s:1,n:0,d:1,abs:function(){return r(this.n,this.d)},neg:function(){return r(-this.s*this.n,this.d)},add:function(e,n){return o(e,n),r(this.s*this.n*t.d+t.s*this.d*t.n,this.d*t.d)},sub:function(e,n){return o(e,n),r(this.s*this.n*t.d-t.s*this.d*t.n,this.d*t.d)},mul:function(e,n){return o(e,n),r(this.s*t.s*this.n*t.n,this.d*t.d)},div:function(e,n){return o(e,n),r(this.s*t.s*this.n*t.d,this.d*t.n)},clone:function(){return r(this.s*this.n,this.d)},mod:function(e,n){if(isNaN(this.n)||isNaN(this.d))return new s(NaN);if(void 0===e)return r(this.s*this.n%this.d,1);if(o(e,n),0===t.n&&0===this.d)throw s.DivisionByZero;return r(this.s*(t.d*this.n)%(t.n*this.d),t.d*this.d)},gcd:function(e,n){return o(e,n),r(a(t.n,this.n)*a(t.d,this.d),t.d*this.d)},lcm:function(e,n){return o(e,n),0===t.n&&0===this.n?r(0,1):r(t.n*this.n,a(t.n,this.n)*a(t.d,this.d))},ceil:function(e){return e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):r(Math.ceil(e*this.s*this.n/this.d),e)},floor:function(e){return e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):r(Math.floor(e*this.s*this.n/this.d),e)},round:function(e){return e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):r(Math.round(e*this.s*this.n/this.d),e)},inverse:function(){return r(this.s*this.d,this.n)},pow:function(e,n){if(o(e,n),1===t.d)return t.s<0?r(Math.pow(this.s*this.d,t.n),Math.pow(this.n,t.n)):r(Math.pow(this.s*this.n,t.n),Math.pow(this.d,t.n));if(this.s<0)return null;var a=i(this.n),s=i(this.d),c=1,u=1;for(var l in a)if("1"!==l){if("0"===l){c=0;break}if(a[l]*=t.n,a[l]%t.d!=0)return null;a[l]/=t.d,c*=Math.pow(l,a[l])}for(var l in s)if("1"!==l){if(s[l]*=t.n,s[l]%t.d!=0)return null;s[l]/=t.d,u*=Math.pow(l,s[l])}return t.s<0?r(u,c):r(c,u)},equals:function(e,n){return o(e,n),this.s*this.n*t.d==t.s*t.n*this.d},compare:function(e,n){o(e,n);var r=this.s*this.n*t.d-t.s*t.n*this.d;return(0<r)-(r<0)},simplify:function(e){if(isNaN(this.n)||isNaN(this.d))return this;e=e||.001;for(var t=this.abs(),n=t.toContinued(),i=1;i<n.length;i++){for(var o=r(n[i-1],1),a=i-2;a>=0;a--)o=o.inverse().add(n[a]);if(o.sub(t).abs().valueOf()<e)return o.mul(this.s)}return this},divisible:function(e,n){return o(e,n),!(!(t.n*this.d)||this.n*t.d%(t.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(e){var t,n="",r=this.n,i=this.d;return this.s<0&&(n+="-"),1===i?n+=r:(e&&(t=Math.floor(r/i))>0&&(n+=t,n+=" ",r%=i),n+=r,n+="/",n+=i),n},toLatex:function(e){var t,n="",r=this.n,i=this.d;return this.s<0&&(n+="-"),1===i?n+=r:(e&&(t=Math.floor(r/i))>0&&(n+=t,r%=i),n+="\\frac{",n+=r,n+="}{",n+=i,n+="}"),n},toContinued:function(){var e,t=this.n,n=this.d,r=[];if(isNaN(t)||isNaN(n))return r;do{r.push(Math.floor(t/n)),e=t%n,t=n,n=e}while(1!==t);return r},toString:function(e){var t=this.n,n=this.d;if(isNaN(t)||isNaN(n))return"NaN";e=e||15;var r=function(e,t){for(;t%2==0;t/=2);for(;t%5==0;t/=5);if(1===t)return 0;for(var n=10%t,r=1;1!==n;r++)if(n=10*n%t,r>2e3)return 0;return r}(0,n),i=function(e,t,n){for(var r=1,i=function(e,t,n){for(var r=1;t>0;e=e*e%n,t>>=1)1&t&&(r=r*e%n);return r}(10,n,t),o=0;o<300;o++){if(r===i)return o;r=10*r%t,i=10*i%t}return 0}(0,n,r),o=this.s<0?"-":"";if(o+=t/n|0,t%=n,(t*=10)&&(o+="."),r){for(var a=i;a--;)o+=t/n|0,t%=n,t*=10;o+="(";for(a=r;a--;)o+=t/n|0,t%=n,t*=10;o+=")"}else for(a=e;t&&a--;)o+=t/n|0,t%=n,t*=10;return o}},"function"==typeof define&&define.amd?define([],(function(){return s})):(Object.defineProperty(s,"__esModule",{value:!0}),s.default=s,s.Fraction=s,Tn=s)}();var In=new class extends $n{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return` \n    <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n    </figure>\n\n      <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(xn)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(xn)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(xn)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(xn)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(xn)}#icon-user"></use>\n            </svg>\n          </div>\n          \n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(xn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n            </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(xn)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>`}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(xn)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new(n(Tn))(e.quantity).toFraction(!0):""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n    `}};var Hn,qn=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};Hn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();var Fn=new class extends $n{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n      <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n        <figure class="preview__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" />\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">${this._data.title}</h4>\n          <p class="preview__publisher">${this._data.publisher}</p>\n\n          <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(Hn)}#icon-user"></use>\n            </svg>\n          </div>\n       </div>\n      </a>\n    </li>\n    `}};var An=new class extends $n{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! please try again ;)";_successMessage="";_generateMarkup(){return this._data.map((e=>Fn.render(e,!1))).join("")}};var Cn=new class extends $n{_parentElement=document.querySelector(".pagination");addHandlerPgnClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupButton(1):e===t&&t>1?this._generateMarkupButton(-1):e<t?`${this._generateMarkupButton(-1)+this._generateMarkupButton(1)}`:""}_generateMarkupButton(e){const t=this._data.page,r=`\n    <svg class="search__icon">\n      <use href="${n(Hn)}#icon-arrow-${e<0?"left":"right"}">\n      </use>\n    </svg>`,i=`\n    <span>Page ${e+t}</span>\n    `;return`\n      <button data-goto="${e+t}" class="btn--inline pagination__btn--${e<0?"prev":"next"}">\n    ${e<0?r+i:i+r}\n      </button>\n  `}};var Dn=new class extends $n{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Fn.render(e,!1))).join("")}};var Rn=new class extends $n{_parentElement=document.querySelector(".upload");_successMessage="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Un=async function(){try{const e=window.location.hash.slice(1);if(!e)return;In.renderSpinner(),An.update(jn()),Dn.update(Nn.bookmarks),await async function(e){try{const t=await Mn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=9e6d9f5d-2c11-41f0-a69d-ad530003f67a`);Nn.recipe=On(t),Nn.bookmarks.some((t=>t.id===e))?Nn.recipe.bookmarked=!0:Nn.recipe.bookmarked=!1,console.log(Nn.recipe)}catch(e){throw console.error(`${e} 💥💥💥`),e}}(e),In.render(Nn.recipe)}catch(e){In.renderError(),console.error(e)}},Wn=async function(){try{An.renderSpinner();const e=qn.getQuery();if(!e)return;await async function(e){try{Nn.search.query=e;const t=await Mn(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=9e6d9f5d-2c11-41f0-a69d-ad530003f67a`);Nn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Nn.search.page=1}catch(e){throw console.error(`${e} 💥💥💥`),e}}(e),An.render(jn()),Cn.render(Nn.search)}catch(e){console.log(e)}},Bn=function(e){An.render(jn(e)),Cn.render(Nn.search)},Gn=function(e){!function(e){Nn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*(e/Nn.recipe.servings)})),Nn.recipe.servings=e}(e),In.update(Nn.recipe)},zn=function(){Nn.recipe.bookmarked?function(e){const t=Nn.bookmarks.findIndex((t=>t.id===e));Nn.bookmarks.splice(t,1),e===Nn.recipe.id&&(Nn.recipe.bookmarked=!1),Ln()}(Nn.recipe.id):Pn(Nn.recipe),In.update(Nn.recipe),Dn.render(Nn.bookmarks)},Zn=function(){Dn.render(Nn.bookmarks)},Jn=async function(e){try{Rn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format :)");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await Mn("https://forkify-api.herokuapp.com/api/v2/recipes?key=9e6d9f5d-2c11-41f0-a69d-ad530003f67a",n);Nn.recipe=On(r),Pn(Nn.recipe)}catch(e){throw e}}(e),console.log(Nn.recipe),In.render(Nn.recipe),Rn.renderMessage(),Dn.render(Nn.bookmarks),window.history.pushState(null,"",`#${Nn.recipe.id}`),setTimeout((function(){Rn.toggleWindow()}),2500)}catch(e){console.error("💥",e),Rn.renderError(e.message)}};Dn.addHandlerRender(Zn),In.addHandlerRender(Un),In.addHandlerUpdateServings(Gn),In.addHandlerAddBookmark(zn),qn.addHandlerSearch(Wn),Cn.addHandlerPgnClick(Bn),Rn.addHandlerUpload(Jn);
//# sourceMappingURL=index.9c2445f1.js.map
