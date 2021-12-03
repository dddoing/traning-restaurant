(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["polyfills"],{

/***/ "./node_modules/next/dist/client/polyfills.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/client/polyfills.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


__webpack_require__(/*! next/dist/build/polyfills/polyfill-nomodule */ "./node_modules/next/dist/build/polyfills/polyfill-nomodule.js");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/polyfill-nomodule.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/polyfill-nomodule.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function e(t){var e={exports:{}};return t(e,e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),a={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,s={f:u&&!a.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:a},c=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,l=function(t){return f.call(t).slice(8,-1)},h="".split,p=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==l(t)?h.call(t,""):Object(t)}:Object,d=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return p(d(t))},g=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=function(t,e){if(!g(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!g(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!g(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!g(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,b=function(t,e){return m.call(t,e)},w=n.document,S=g(w)&&g(w.createElement),E=function(t){return S?w.createElement(t):{}},x=!i&&!o(function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a}),A=Object.getOwnPropertyDescriptor,O={f:i?A:function(t,e){if(t=v(t),e=y(e,!0),x)try{return A(t,e)}catch(t){}if(b(t,e))return c(!s.f.call(t,e),t[e])}},R=function(t){if(!g(t))throw TypeError(String(t)+" is not an object");return t},j=Object.defineProperty,P={f:i?j:function(t,e,r){if(R(t),e=y(e,!0),R(r),x)try{return j(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},I=i?function(t,e,r){return P.f(t,e,c(1,r))}:function(t,e,r){return t[e]=r,t},T=function(t,e){try{I(n,t,e)}catch(r){n[t]=e}return e},k="__core-js_shared__",L=n[k]||T(k,{}),U=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(t){return U.call(t)});var M,_,N,C=L.inspectSource,F=n.WeakMap,B="function"==typeof F&&/native code/.test(C(F)),D=!1,q=e(function(t){(t.exports=function(t,e){return L[t]||(L[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),z=0,W=Math.random(),K=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++z+W).toString(36)},G=q("keys"),$=function(t){return G[t]||(G[t]=K(t))},V={};if(B){var H=new(0,n.WeakMap),X=H.get,Y=H.has,J=H.set;M=function(t,e){return J.call(H,t,e),e},_=function(t){return X.call(H,t)||{}},N=function(t){return Y.call(H,t)}}else{var Q=$("state");V[Q]=!0,M=function(t,e){return I(t,Q,e),e},_=function(t){return b(t,Q)?t[Q]:{}},N=function(t){return b(t,Q)}}var Z,tt={set:M,get:_,has:N,enforce:function(t){return N(t)?_(t):M(t,{})},getterFor:function(t){return function(e){var r;if(!g(e)||(r=_(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},et=e(function(t){var e=tt.get,r=tt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,a){var u=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||b(i,"name")||I(i,"name",e),r(i).source=o.join("string"==typeof e?e:"")),t!==n?(u?!c&&t[e]&&(s=!0):delete t[e],s?t[e]=i:I(t,e,i)):s?t[e]=i:T(e,i)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||C(this)})}),rt=n,nt=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?nt(rt[t])||nt(n[t]):rt[t]&&rt[t][e]||n[t]&&n[t][e]},it=Math.ceil,at=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?at:it)(t)},st=Math.min,ct=function(t){return t>0?st(ut(t),9007199254740991):0},ft=Math.max,lt=Math.min,ht=function(t,e){var r=ut(t);return r<0?ft(r+e,0):lt(r,e)},pt=function(t){return function(e,r,n){var o,i=v(e),a=ct(i.length),u=ht(n,a);if(t&&r!=r){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},dt={includes:pt(!0),indexOf:pt(!1)},vt=dt.indexOf,gt=function(t,e){var r,n=v(t),o=0,i=[];for(r in n)!b(V,r)&&b(n,r)&&i.push(r);for(;e.length>o;)b(n,r=e[o++])&&(~vt(i,r)||i.push(r));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=yt.concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return gt(t,mt)}},wt={f:Object.getOwnPropertySymbols},St=ot("Reflect","ownKeys")||function(t){var e=bt.f(R(t)),r=wt.f;return r?e.concat(r(t)):e},Et=function(t,e){for(var r=St(e),n=P.f,o=O.f,i=0;i<r.length;i++){var a=r[i];b(t,a)||n(t,a,o(e,a))}},xt=/#|\.prototype\./,At=function(t,e){var r=Rt[Ot(t)];return r==Pt||r!=jt&&("function"==typeof e?o(e):!!e)},Ot=At.normalize=function(t){return String(t).replace(xt,".").toLowerCase()},Rt=At.data={},jt=At.NATIVE="N",Pt=At.POLYFILL="P",It=At,Tt=O.f,kt=function(t,e){var r,o,i,a,u,s=t.target,c=t.global,f=t.stat;if(r=c?n:f?n[s]||T(s,{}):(n[s]||{}).prototype)for(o in e){if(a=e[o],i=t.noTargetGet?(u=Tt(r,o))&&u.value:r[o],!It(c?o:s+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Et(a,i)}(t.sham||i&&i.sham)&&I(a,"sham",!0),et(r,o,a,t)}},Lt=function(t){return Object(d(t))},Ut=Math.min,Mt=[].copyWithin||function(t,e){var r=Lt(this),n=ct(r.length),o=ht(t,n),i=ht(e,n),a=arguments.length>2?arguments[2]:void 0,u=Ut((void 0===a?n:ht(a,n))-i,n-o),s=1;for(i<o&&o<i+u&&(s=-1,i+=u-1,o+=u-1);u-- >0;)i in r?r[o]=r[i]:delete r[o],o+=s,i+=s;return r},_t=!!Object.getOwnPropertySymbols&&!o(function(){return!String(Symbol())}),Nt=_t&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ct=q("wks"),Ft=n.Symbol,Bt=Nt?Ft:Ft&&Ft.withoutSetter||K,Dt=function(t){return b(Ct,t)||(Ct[t]=_t&&b(Ft,t)?Ft[t]:Bt("Symbol."+t)),Ct[t]},qt=Object.keys||function(t){return gt(t,yt)},zt=i?Object.defineProperties:function(t,e){R(t);for(var r,n=qt(e),o=n.length,i=0;o>i;)P.f(t,r=n[i++],e[r]);return t},Wt=ot("document","documentElement"),Kt=$("IE_PROTO"),Gt=function(){},$t=function(t){return"<script>"+t+"<\/script>"},Vt=function(){try{Z=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Vt=Z?function(t){t.write($t("")),t.close();var e=t.parentWindow.Object;return t=null,e}(Z):((e=E("iframe")).style.display="none",Wt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write($t("document.F=Object")),t.close(),t.F);for(var r=yt.length;r--;)delete Vt.prototype[yt[r]];return Vt()};V[Kt]=!0;var Ht=Object.create||function(t,e){var r;return null!==t?(Gt.prototype=R(t),r=new Gt,Gt.prototype=null,r[Kt]=t):r=Vt(),void 0===e?r:zt(r,e)},Xt=Dt("unscopables"),Yt=Array.prototype;null==Yt[Xt]&&P.f(Yt,Xt,{configurable:!0,value:Ht(null)});var Jt=function(t){Yt[Xt][t]=!0};kt({target:"Array",proto:!0},{copyWithin:Mt}),Jt("copyWithin");var Qt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Zt=function(t,e,r){if(Qt(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},te=Function.call,ee=function(t,e,r){return Zt(te,n[t].prototype[e],r)};ee("Array","copyWithin"),kt({target:"Array",proto:!0},{fill:function(t){for(var e=Lt(this),r=ct(e.length),n=arguments.length,o=ht(n>1?arguments[1]:void 0,r),i=n>2?arguments[2]:void 0,a=void 0===i?r:ht(i,r);a>o;)e[o++]=t;return e}}),Jt("fill"),ee("Array","fill");var re=Array.isArray||function(t){return"Array"==l(t)},ne=Dt("species"),oe=function(t,e){var r;return re(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!re(r.prototype)?g(r)&&null===(r=r[ne])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},ie=[].push,ae=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=5==t||i;return function(u,s,c,f){for(var l,h,d=Lt(u),v=p(d),g=Zt(s,c,3),y=ct(v.length),m=0,b=f||oe,w=e?b(u,y):r?b(u,0):void 0;y>m;m++)if((a||m in v)&&(h=g(l=v[m],m,d),t))if(e)w[m]=h;else if(h)switch(t){case 3:return!0;case 5:return l;case 6:return m;case 2:ie.call(w,l)}else if(o)return!1;return i?-1:n||o?o:w}},ue={forEach:ae(0),map:ae(1),filter:ae(2),some:ae(3),every:ae(4),find:ae(5),findIndex:ae(6)},se=Object.defineProperty,ce={},fe=function(t){throw t},le=function(t,e){if(b(ce,t))return ce[t];e||(e={});var r=[][t],n=!!b(e,"ACCESSORS")&&e.ACCESSORS,a=b(e,0)?e[0]:fe,u=b(e,1)?e[1]:void 0;return ce[t]=!!r&&!o(function(){if(n&&!i)return!0;var t={length:-1};n?se(t,1,{enumerable:!0,get:fe}):t[1]=1,r.call(t,a,u)})},he=ue.find,pe="find",de=!0,ve=le(pe);pe in[]&&Array(1).find(function(){de=!1}),kt({target:"Array",proto:!0,forced:de||!ve},{find:function(t){return he(this,t,arguments.length>1?arguments[1]:void 0)}}),Jt(pe),ee("Array","find");var ge=ue.findIndex,ye="findIndex",me=!0,be=le(ye);ye in[]&&Array(1).findIndex(function(){me=!1}),kt({target:"Array",proto:!0,forced:me||!be},{findIndex:function(t){return ge(this,t,arguments.length>1?arguments[1]:void 0)}}),Jt(ye),ee("Array","findIndex");var we=function t(e,r,n,o,i,a,u,s){for(var c,f=i,l=0,h=!!u&&Zt(u,s,3);l<o;){if(l in n){if(c=h?h(n[l],l,r):n[l],a>0&&re(c))f=t(e,r,c,ct(c.length),f,a-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=c}f++}l++}return f};kt({target:"Array",proto:!0},{flatMap:function(t){var e,r=Lt(this),n=ct(r.length);return Qt(t),(e=oe(r,0)).length=we(e,r,r,n,0,1,t,arguments.length>1?arguments[1]:void 0),e}}),Jt("flatMap"),ee("Array","flatMap"),kt({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=Lt(this),r=ct(e.length),n=oe(e,0);return n.length=we(n,e,e,r,0,void 0===t?1:ut(t)),n}}),Jt("flat"),ee("Array","flat");var Se,Ee,xe,Ae=function(t){return function(e,r){var n,o,i=String(d(e)),a=ut(r),u=i.length;return a<0||a>=u?t?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===u||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):n:t?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},Oe={codeAt:Ae(!1),charAt:Ae(!0)},Re=!o(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),je=$("IE_PROTO"),Pe=Object.prototype,Ie=Re?Object.getPrototypeOf:function(t){return t=Lt(t),b(t,je)?t[je]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Pe:null},Te=Dt("iterator"),ke=!1;[].keys&&("next"in(xe=[].keys())?(Ee=Ie(Ie(xe)))!==Object.prototype&&(Se=Ee):ke=!0),null==Se&&(Se={}),b(Se,Te)||I(Se,Te,function(){return this});var Le={IteratorPrototype:Se,BUGGY_SAFARI_ITERATORS:ke},Ue=P.f,Me=Dt("toStringTag"),_e=function(t,e,r){t&&!b(t=r?t:t.prototype,Me)&&Ue(t,Me,{configurable:!0,value:e})},Ne={},Ce=Le.IteratorPrototype,Fe=function(){return this},Be=function(t,e,r){var n=e+" Iterator";return t.prototype=Ht(Ce,{next:c(1,r)}),_e(t,n,!1),Ne[n]=Fe,t},De=function(t){if(!g(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t},qe=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return R(r),De(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),ze=Le.IteratorPrototype,We=Le.BUGGY_SAFARI_ITERATORS,Ke=Dt("iterator"),Ge="keys",$e="values",Ve="entries",He=function(){return this},Xe=function(t,e,r,n,o,i,a){Be(r,e,n);var u,s,c,f=function(t){if(t===o&&v)return v;if(!We&&t in p)return p[t];switch(t){case Ge:case $e:case Ve:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",h=!1,p=t.prototype,d=p[Ke]||p["@@iterator"]||o&&p[o],v=!We&&d||f(o),g="Array"==e&&p.entries||d;if(g&&(u=Ie(g.call(new t)),ze!==Object.prototype&&u.next&&(Ie(u)!==ze&&(qe?qe(u,ze):"function"!=typeof u[Ke]&&I(u,Ke,He)),_e(u,l,!0))),o==$e&&d&&d.name!==$e&&(h=!0,v=function(){return d.call(this)}),p[Ke]!==v&&I(p,Ke,v),Ne[e]=v,o)if(s={values:f($e),keys:i?v:f(Ge),entries:f(Ve)},a)for(c in s)(We||h||!(c in p))&&et(p,c,s[c]);else kt({target:e,proto:!0,forced:We||h},s);return s},Ye=Oe.charAt,Je="String Iterator",Qe=tt.set,Ze=tt.getterFor(Je);Xe(String,"String",function(t){Qe(this,{type:Je,string:String(t),index:0})},function(){var t,e=Ze(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Ye(r,n),e.index+=t.length,{value:t,done:!1})});var tr=function(t,e,r,n){try{return n?e(R(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&R(o.call(t)),e}},er=Dt("iterator"),rr=Array.prototype,nr=function(t){return void 0!==t&&(Ne.Array===t||rr[er]===t)},or=function(t,e,r){var n=y(e);n in t?P.f(t,n,c(0,r)):t[n]=r},ir={};ir[Dt("toStringTag")]="z";var ar="[object z]"===String(ir),ur=Dt("toStringTag"),sr="Arguments"==l(function(){return arguments}()),cr=ar?l:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ur))?r:sr?l(e):"Object"==(n=l(e))&&"function"==typeof e.callee?"Arguments":n},fr=Dt("iterator"),lr=function(t){if(null!=t)return t[fr]||t["@@iterator"]||Ne[cr(t)]},hr=function(t){var e,r,n,o,i,a,u=Lt(t),s="function"==typeof this?this:Array,c=arguments.length,f=c>1?arguments[1]:void 0,l=void 0!==f,h=lr(u),p=0;if(l&&(f=Zt(f,c>2?arguments[2]:void 0,2)),null==h||s==Array&&nr(h))for(r=new s(e=ct(u.length));e>p;p++)a=l?f(u[p],p):u[p],or(r,p,a);else for(i=(o=h.call(u)).next,r=new s;!(n=i.call(o)).done;p++)a=l?tr(o,f,[n.value,p],!0):n.value,or(r,p,a);return r.length=p,r},pr=Dt("iterator"),dr=!1;try{var vr=0,gr={next:function(){return{done:!!vr++}},return:function(){dr=!0}};gr[pr]=function(){return this},Array.from(gr,function(){throw 2})}catch(t){}var yr=function(t,e){if(!e&&!dr)return!1;var r=!1;try{var n={};n[pr]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},mr=!yr(function(t){Array.from(t)});kt({target:"Array",stat:!0,forced:mr},{from:hr});var br=dt.includes,wr=le("indexOf",{ACCESSORS:!0,1:0});kt({target:"Array",proto:!0,forced:!wr},{includes:function(t){return br(this,t,arguments.length>1?arguments[1]:void 0)}}),Jt("includes"),ee("Array","includes");var Sr="Array Iterator",Er=tt.set,xr=tt.getterFor(Sr),Ar=Xe(Array,"Array",function(t,e){Er(this,{type:Sr,target:v(t),index:0,kind:e})},function(){var t=xr(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}},"values");Ne.Arguments=Ne.Array,Jt("keys"),Jt("values"),Jt("entries"),ee("Array","values");var Or=o(function(){function t(){}return!(Array.of.call(t)instanceof t)});kt({target:"Array",stat:!0,forced:Or},{of:function(){for(var t=0,e=arguments.length,r=new("function"==typeof this?this:Array)(e);e>t;)or(r,t,arguments[t++]);return r.length=e,r}});var Rr=Dt("hasInstance"),jr=Function.prototype;Rr in jr||P.f(jr,Rr,{value:function(t){if("function"!=typeof this||!g(t))return!1;if(!g(this.prototype))return t instanceof this;for(;t=Ie(t);)if(this.prototype===t)return!0;return!1}}),Dt("hasInstance");var Pr=Function.prototype,Ir=Pr.toString,Tr=/^\s*function ([^ (]*)/,kr="name";i&&!(kr in Pr)&&(0,P.f)(Pr,kr,{configurable:!0,get:function(){try{return Ir.call(this).match(Tr)[1]}catch(t){return""}}});var Lr=!o(function(){return Object.isExtensible(Object.preventExtensions({}))}),Ur=e(function(t){var e=P.f,r=K("meta"),n=0,o=Object.isExtensible||function(){return!0},i=function(t){e(t,r,{value:{objectID:"O"+ ++n,weakData:{}}})},a=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!g(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!b(t,r)){if(!o(t))return"F";if(!e)return"E";i(t)}return t[r].objectID},getWeakData:function(t,e){if(!b(t,r)){if(!o(t))return!0;if(!e)return!1;i(t)}return t[r].weakData},onFreeze:function(t){return Lr&&a.REQUIRED&&o(t)&&!b(t,r)&&i(t),t}};V[r]=!0}),Mr=e(function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,r,n,o,i){var a,u,s,c,f,l,h,p=Zt(r,n,o?2:1);if(i)a=t;else{if("function"!=typeof(u=lr(t)))throw TypeError("Target is not iterable");if(nr(u)){for(s=0,c=ct(t.length);c>s;s++)if((f=o?p(R(h=t[s])[0],h[1]):p(t[s]))&&f instanceof e)return f;return new e(!1)}a=u.call(t)}for(l=a.next;!(h=l.call(a)).done;)if("object"==typeof(f=tr(a,p,h.value,o))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}}),_r=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t},Nr=function(t,e,r){var n,o;return qe&&"function"==typeof(n=e.constructor)&&n!==r&&g(o=n.prototype)&&o!==r.prototype&&qe(t,o),t},Cr=function(t,e,r){var i=-1!==t.indexOf("Map"),a=-1!==t.indexOf("Weak"),u=i?"set":"add",s=n[t],c=s&&s.prototype,f=s,l={},h=function(t){var e=c[t];et(c,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(a&&!g(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return a&&!g(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(a&&!g(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(It(t,"function"!=typeof s||!(a||c.forEach&&!o(function(){(new s).entries().next()}))))f=r.getConstructor(e,t,i,u),Ur.REQUIRED=!0;else if(It(t,!0)){var p=new f,d=p[u](a?{}:-0,1)!=p,v=o(function(){p.has(1)}),y=yr(function(t){new s(t)}),m=!a&&o(function(){for(var t=new s,e=5;e--;)t[u](e,e);return!t.has(-0)});y||((f=e(function(e,r){_r(e,f,t);var n=Nr(new s,e,f);return null!=r&&Mr(r,n[u],n,i),n})).prototype=c,c.constructor=f),(v||m)&&(h("delete"),h("has"),i&&h("get")),(m||d)&&h(u),a&&c.clear&&delete c.clear}return l[t]=f,kt({global:!0,forced:f!=s},l),_e(f,t),a||r.setStrong(f,t,i),f},Fr=function(t,e,r){for(var n in e)et(t,n,e[n],r);return t},Br=Dt("species"),Dr=function(t){var e=ot(t);i&&e&&!e[Br]&&(0,P.f)(e,Br,{configurable:!0,get:function(){return this}})},qr=P.f,zr=Ur.fastKey,Wr=tt.set,Kr=tt.getterFor,Gr={getConstructor:function(t,e,r,n){var o=t(function(t,a){_r(t,o,e),Wr(t,{type:e,index:Ht(null),first:void 0,last:void 0,size:0}),i||(t.size=0),null!=a&&Mr(a,t[n],t,r)}),a=Kr(e),u=function(t,e,r){var n,o,u=a(t),c=s(t,e);return c?c.value=r:(u.last=c={index:o=zr(e,!0),key:e,value:r,previous:n=u.last,next:void 0,removed:!1},u.first||(u.first=c),n&&(n.next=c),i?u.size++:t.size++,"F"!==o&&(u.index[o]=c)),t},s=function(t,e){var r,n=a(t),o=zr(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return Fr(o.prototype,{clear:function(){for(var t=a(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,i?t.size=0:this.size=0},delete:function(t){var e=this,r=a(e),n=s(e,t);if(n){var o=n.next,u=n.previous;delete r.index[n.index],n.removed=!0,u&&(u.next=o),o&&(o.previous=u),r.first==n&&(r.first=o),r.last==n&&(r.last=u),i?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=a(this),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!s(this,t)}}),Fr(o.prototype,r?{get:function(t){var e=s(this,t);return e&&e.value},set:function(t,e){return u(this,0===t?0:t,e)}}:{add:function(t){return u(this,t=0===t?0:t,t)}}),i&&qr(o.prototype,"size",{get:function(){return a(this).size}}),o},setStrong:function(t,e,r){var n=e+" Iterator",o=Kr(e),i=Kr(n);Xe(t,e,function(t,e){Wr(this,{type:n,target:t,state:o(t),kind:e,last:void 0})},function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})},r?"entries":"values",!r,!0),Dr(e)}},$r=Cr("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},Gr);ar||et(Object.prototype,"toString",ar?{}.toString:function(){return"[object "+cr(this)+"]"},{unsafe:!0});var Vr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Hr=Dt("iterator"),Xr=Dt("toStringTag"),Yr=Ar.values;for(var Jr in Vr){var Qr=n[Jr],Zr=Qr&&Qr.prototype;if(Zr){if(Zr[Hr]!==Yr)try{I(Zr,Hr,Yr)}catch(t){Zr[Hr]=Yr}if(Zr[Xr]||I(Zr,Xr,Jr),Vr[Jr])for(var tn in Ar)if(Zr[tn]!==Ar[tn])try{I(Zr,tn,Ar[tn])}catch(t){Zr[tn]=Ar[tn]}}}var en=function(t){var e,r,n,o,i=arguments.length,a=i>1?arguments[1]:void 0;return Qt(this),(e=void 0!==a)&&Qt(a),null==t?new this:(r=[],e?(n=0,o=Zt(a,i>2?arguments[2]:void 0,2),Mr(t,function(t){r.push(o(t,n++))})):Mr(t,r.push,r),new this(r))};kt({target:"Map",stat:!0},{from:en});var rn=function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)};kt({target:"Map",stat:!0},{of:rn});var nn=function(){for(var t,e=R(this),r=Qt(e.delete),n=!0,o=0,i=arguments.length;o<i;o++)t=r.call(e,arguments[o]),n=n&&t;return!!n};kt({target:"Map",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}});var on=function(t){var e=lr(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return R(e.call(t))},an=function(t){return Map.prototype.entries.call(t)};kt({target:"Map",proto:!0,real:!0,forced:D},{every:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return!Mr(r,function(t,r){if(!n(r,t,e))return Mr.stop()},void 0,!0,!0).stopped}});var un=Dt("species"),sn=function(t,e){var r,n=R(t).constructor;return void 0===n||null==(r=R(n)[un])?e:Qt(r)};kt({target:"Map",proto:!0,real:!0,forced:D},{filter:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Map"))),i=Qt(o.set);return Mr(r,function(t,r){n(r,t,e)&&i.call(o,t,r)},void 0,!0,!0),o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{find:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t,r){if(n(r,t,e))return Mr.stop(r)},void 0,!0,!0).result}}),kt({target:"Map",proto:!0,real:!0,forced:D},{findKey:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t,r){if(n(r,t,e))return Mr.stop(t)},void 0,!0,!0).result}}),kt({target:"Map",stat:!0},{groupBy:function(t,e){var r=new this;Qt(e);var n=Qt(r.has),o=Qt(r.get),i=Qt(r.set);return Mr(t,function(t){var a=e(t);n.call(r,a)?o.call(r,a).push(t):i.call(r,a,[t])}),r}}),kt({target:"Map",proto:!0,real:!0,forced:D},{includes:function(t){return Mr(an(R(this)),function(e,r){if((n=r)===(o=t)||n!=n&&o!=o)return Mr.stop();var n,o},void 0,!0,!0).stopped}}),kt({target:"Map",stat:!0},{keyBy:function(t,e){var r=new this;Qt(e);var n=Qt(r.set);return Mr(t,function(t){n.call(r,e(t),t)}),r}}),kt({target:"Map",proto:!0,real:!0,forced:D},{keyOf:function(t){return Mr(an(R(this)),function(e,r){if(r===t)return Mr.stop(e)},void 0,!0,!0).result}}),kt({target:"Map",proto:!0,real:!0,forced:D},{mapKeys:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Map"))),i=Qt(o.set);return Mr(r,function(t,r){i.call(o,n(r,t,e),r)},void 0,!0,!0),o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{mapValues:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Map"))),i=Qt(o.set);return Mr(r,function(t,r){i.call(o,t,n(r,t,e))},void 0,!0,!0),o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{merge:function(t){for(var e=R(this),r=Qt(e.set),n=0;n<arguments.length;)Mr(arguments[n++],r,e,!0);return e}}),kt({target:"Map",proto:!0,real:!0,forced:D},{reduce:function(t){var e=R(this),r=an(e),n=arguments.length<2,o=n?void 0:arguments[1];if(Qt(t),Mr(r,function(r,i){n?(n=!1,o=i):o=t(o,i,r,e)},void 0,!0,!0),n)throw TypeError("Reduce of empty map with no initial value");return o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{some:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t,r){if(n(r,t,e))return Mr.stop()},void 0,!0,!0).stopped}}),kt({target:"Map",proto:!0,real:!0,forced:D},{update:function(t,e){var r=R(this),n=arguments.length;Qt(e);var o=r.has(t);if(!o&&n<3)throw TypeError("Updating absent value");var i=o?r.get(t):Qt(n>2?arguments[2]:void 0)(t,r);return r.set(t,e(i,t,r)),r}});var cn=function(t,e){var r,n=R(this),o=arguments.length>2?arguments[2]:void 0;if("function"!=typeof e&&"function"!=typeof o)throw TypeError("At least one callback required");return n.has(t)?(r=n.get(t),"function"==typeof e&&(r=e(r),n.set(t,r))):"function"==typeof o&&(r=o(),n.set(t,r)),r};kt({target:"Map",proto:!0,real:!0,forced:D},{upsert:cn}),kt({target:"Map",proto:!0,real:!0,forced:D},{updateOrInsert:cn});var fn="\t\n\v\f\r                　\u2028\u2029\ufeff",ln="["+fn+"]",hn=RegExp("^"+ln+ln+"*"),pn=RegExp(ln+ln+"*$"),dn=function(t){return function(e){var r=String(d(e));return 1&t&&(r=r.replace(hn,"")),2&t&&(r=r.replace(pn,"")),r}},vn={start:dn(1),end:dn(2),trim:dn(3)},gn=bt.f,yn=O.f,mn=P.f,bn=vn.trim,wn="Number",Sn=n.Number,En=Sn.prototype,xn=l(Ht(En))==wn,An=function(t){var e,r,n,o,i,a,u,s,c=y(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=bn(c)).charCodeAt(0))||45===e){if(88===(r=c.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(a=(i=c.slice(2)).length,u=0;u<a;u++)if((s=i.charCodeAt(u))<48||s>o)return NaN;return parseInt(i,n)}return+c};if(It(wn,!Sn(" 0o1")||!Sn("0b1")||Sn("+0x1"))){for(var On,Rn=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof Rn&&(xn?o(function(){En.valueOf.call(r)}):l(r)!=wn)?Nr(new Sn(An(e)),r,Rn):An(e)},jn=i?gn(Sn):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Pn=0;jn.length>Pn;Pn++)b(Sn,On=jn[Pn])&&!b(Rn,On)&&mn(Rn,On,yn(Sn,On));Rn.prototype=En,En.constructor=Rn,et(n,wn,Rn)}kt({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)});var In=n.isFinite;kt({target:"Number",stat:!0},{isFinite:Number.isFinite||function(t){return"number"==typeof t&&In(t)}});var Tn=Math.floor,kn=function(t){return!g(t)&&isFinite(t)&&Tn(t)===t};kt({target:"Number",stat:!0},{isInteger:kn}),kt({target:"Number",stat:!0},{isNaN:function(t){return t!=t}});var Ln=Math.abs;kt({target:"Number",stat:!0},{isSafeInteger:function(t){return kn(t)&&Ln(t)<=9007199254740991}}),kt({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991}),kt({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991});var Un=vn.trim,Mn=n.parseFloat,_n=1/Mn(fn+"-0")!=-Infinity?function(t){var e=Un(String(t)),r=Mn(e);return 0===r&&"-"==e.charAt(0)?-0:r}:Mn;kt({target:"Number",stat:!0,forced:Number.parseFloat!=_n},{parseFloat:_n});var Nn=vn.trim,Cn=n.parseInt,Fn=/^[+-]?0[Xx]/,Bn=8!==Cn(fn+"08")||22!==Cn(fn+"0x16")?function(t,e){var r=Nn(String(t));return Cn(r,e>>>0||(Fn.test(r)?16:10))}:Cn;kt({target:"Number",stat:!0,forced:Number.parseInt!=Bn},{parseInt:Bn});var Dn=s.f,qn=function(t){return function(e){for(var r,n=v(e),o=qt(n),a=o.length,u=0,s=[];a>u;)r=o[u++],i&&!Dn.call(n,r)||s.push(t?[r,n[r]]:n[r]);return s}},zn={entries:qn(!0),values:qn(!1)},Wn=zn.entries;kt({target:"Object",stat:!0},{entries:function(t){return Wn(t)}}),kt({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){for(var e,r,n=v(t),o=O.f,i=St(n),a={},u=0;i.length>u;)void 0!==(r=o(n,e=i[u++]))&&or(a,e,r);return a}});var Kn=o(function(){qt(1)});kt({target:"Object",stat:!0,forced:Kn},{keys:function(t){return qt(Lt(t))}});var Gn=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};kt({target:"Object",stat:!0},{is:Gn});var $n=zn.values;kt({target:"Object",stat:!0},{values:function(t){return $n(t)}});var Vn=ot("Reflect","apply"),Hn=Function.apply,Xn=!o(function(){Vn(function(){})});kt({target:"Reflect",stat:!0,forced:Xn},{apply:function(t,e,r){return Qt(t),R(r),Vn?Vn(t,e,r):Hn.call(t,e,r)}});var Yn=[].slice,Jn={},Qn=function(t,e,r){if(!(e in Jn)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";Jn[e]=Function("C,a","return new C("+n.join(",")+")")}return Jn[e](t,r)},Zn=Function.bind||function(t){var e=Qt(this),r=Yn.call(arguments,1),n=function(){var o=r.concat(Yn.call(arguments));return this instanceof n?Qn(e,o.length,o):e.apply(t,o)};return g(e.prototype)&&(n.prototype=e.prototype),n},to=ot("Reflect","construct"),eo=o(function(){function t(){}return!(to(function(){},[],t)instanceof t)}),ro=!o(function(){to(function(){})}),no=eo||ro;kt({target:"Reflect",stat:!0,forced:no,sham:no},{construct:function(t,e){Qt(t),R(e);var r=arguments.length<3?t:Qt(arguments[2]);if(ro&&!eo)return to(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(Zn.apply(t,n))}var o=r.prototype,i=Ht(g(o)?o:Object.prototype),a=Function.apply.call(t,i,e);return g(a)?a:i}});var oo=o(function(){Reflect.defineProperty(P.f({},1,{value:1}),1,{value:2})});kt({target:"Reflect",stat:!0,forced:oo,sham:!i},{defineProperty:function(t,e,r){R(t);var n=y(e,!0);R(r);try{return P.f(t,n,r),!0}catch(t){return!1}}});var io=O.f;kt({target:"Reflect",stat:!0},{deleteProperty:function(t,e){var r=io(R(t),e);return!(r&&!r.configurable)&&delete t[e]}}),kt({target:"Reflect",stat:!0},{get:function t(e,r){var n,o,i=arguments.length<3?e:arguments[2];return R(e)===i?e[r]:(n=O.f(e,r))?b(n,"value")?n.value:void 0===n.get?void 0:n.get.call(i):g(o=Ie(e))?t(o,r,i):void 0}}),kt({target:"Reflect",stat:!0,sham:!i},{getOwnPropertyDescriptor:function(t,e){return O.f(R(t),e)}}),kt({target:"Reflect",stat:!0,sham:!Re},{getPrototypeOf:function(t){return Ie(R(t))}}),kt({target:"Reflect",stat:!0},{has:function(t,e){return e in t}});var ao=Object.isExtensible;kt({target:"Reflect",stat:!0},{isExtensible:function(t){return R(t),!ao||ao(t)}}),kt({target:"Reflect",stat:!0},{ownKeys:St}),kt({target:"Reflect",stat:!0,sham:!Lr},{preventExtensions:function(t){R(t);try{var e=ot("Object","preventExtensions");return e&&e(t),!0}catch(t){return!1}}});var uo=o(function(){var t=P.f({},"a",{configurable:!0});return!1!==Reflect.set(Ie(t),"a",1,t)});kt({target:"Reflect",stat:!0,forced:uo},{set:function t(e,r,n){var o,i,a=arguments.length<4?e:arguments[3],u=O.f(R(e),r);if(!u){if(g(i=Ie(e)))return t(i,r,n,a);u=c(0)}if(b(u,"value")){if(!1===u.writable||!g(a))return!1;if(o=O.f(a,r)){if(o.get||o.set||!1===o.writable)return!1;o.value=n,P.f(a,r,o)}else P.f(a,r,c(0,n));return!0}return void 0!==u.set&&(u.set.call(a,n),!0)}}),qe&&kt({target:"Reflect",stat:!0},{setPrototypeOf:function(t,e){R(t),De(e);try{return qe(t,e),!0}catch(t){return!1}}});var so=Ur.getWeakData,co=tt.set,fo=tt.getterFor,lo=ue.find,ho=ue.findIndex,po=0,vo=function(t){return t.frozen||(t.frozen=new go)},go=function(){this.entries=[]},yo=function(t,e){return lo(t.entries,function(t){return t[0]===e})};go.prototype={get:function(t){var e=yo(this,t);if(e)return e[1]},has:function(t){return!!yo(this,t)},set:function(t,e){var r=yo(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=ho(this.entries,function(e){return e[0]===t});return~e&&this.entries.splice(e,1),!!~e}};var mo={getConstructor:function(t,e,r,n){var o=t(function(t,i){_r(t,o,e),co(t,{type:e,id:po++,frozen:void 0}),null!=i&&Mr(i,t[n],t,r)}),i=fo(e),a=function(t,e,r){var n=i(t),o=so(R(e),!0);return!0===o?vo(n).set(e,r):o[n.id]=r,t};return Fr(o.prototype,{delete:function(t){var e=i(this);if(!g(t))return!1;var r=so(t);return!0===r?vo(e).delete(t):r&&b(r,e.id)&&delete r[e.id]},has:function(t){var e=i(this);if(!g(t))return!1;var r=so(t);return!0===r?vo(e).has(t):r&&b(r,e.id)}}),Fr(o.prototype,r?{get:function(t){var e=i(this);if(g(t)){var r=so(t);return!0===r?vo(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return a(this,t,e)}}:{add:function(t){return a(this,t,!0)}}),o}},bo=e(function(t){var e,r=tt.enforce,o=!n.ActiveXObject&&"ActiveXObject"in n,i=Object.isExtensible,a=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},u=t.exports=Cr("WeakMap",a,mo);if(B&&o){e=mo.getConstructor(a,"WeakMap",!0),Ur.REQUIRED=!0;var s=u.prototype,c=s.delete,f=s.has,l=s.get,h=s.set;Fr(s,{delete:function(t){if(g(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),c.call(this,t)||n.frozen.delete(t)}return c.call(this,t)},has:function(t){if(g(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),f.call(this,t)||n.frozen.has(t)}return f.call(this,t)},get:function(t){if(g(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),f.call(this,t)?l.call(this,t):n.frozen.get(t)}return l.call(this,t)},set:function(t,n){if(g(t)&&!i(t)){var o=r(this);o.frozen||(o.frozen=new e),f.call(this,t)?h.call(this,t,n):o.frozen.set(t,n)}else h.call(this,t,n);return this}})}}),wo=q("metadata"),So=wo.store||(wo.store=new bo),Eo=function(t,e,r){var n=So.get(t);if(!n){if(!r)return;So.set(t,n=new $r)}var o=n.get(e);if(!o){if(!r)return;n.set(e,o=new $r)}return o},xo={store:So,getMap:Eo,has:function(t,e,r){var n=Eo(e,r,!1);return void 0!==n&&n.has(t)},get:function(t,e,r){var n=Eo(e,r,!1);return void 0===n?void 0:n.get(t)},set:function(t,e,r,n){Eo(r,n,!0).set(t,e)},keys:function(t,e){var r=Eo(t,e,!1),n=[];return r&&r.forEach(function(t,e){n.push(e)}),n},toKey:function(t){return void 0===t||"symbol"==typeof t?t:String(t)}},Ao=xo.toKey,Oo=xo.set;kt({target:"Reflect",stat:!0},{defineMetadata:function(t,e,r){var n=arguments.length<4?void 0:Ao(arguments[3]);Oo(t,e,R(r),n)}});var Ro=xo.toKey,jo=xo.getMap,Po=xo.store;kt({target:"Reflect",stat:!0},{deleteMetadata:function(t,e){var r=arguments.length<3?void 0:Ro(arguments[2]),n=jo(R(e),r,!1);if(void 0===n||!n.delete(t))return!1;if(n.size)return!0;var o=Po.get(e);return o.delete(r),!!o.size||Po.delete(e)}});var Io=xo.has,To=xo.get,ko=xo.toKey,Lo=function t(e,r,n){if(Io(e,r,n))return To(e,r,n);var o=Ie(r);return null!==o?t(e,o,n):void 0};kt({target:"Reflect",stat:!0},{getMetadata:function(t,e){var r=arguments.length<3?void 0:ko(arguments[2]);return Lo(t,R(e),r)}});var Uo=Cr("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},Gr),Mo=xo.keys,_o=xo.toKey,No=function t(e,r){var n=Mo(e,r),o=Ie(e);if(null===o)return n;var i,a,u=t(o,r);return u.length?n.length?(i=new Uo(n.concat(u)),Mr(i,(a=[]).push,a),a):u:n};kt({target:"Reflect",stat:!0},{getMetadataKeys:function(t){var e=arguments.length<2?void 0:_o(arguments[1]);return No(R(t),e)}});var Co=xo.get,Fo=xo.toKey;kt({target:"Reflect",stat:!0},{getOwnMetadata:function(t,e){var r=arguments.length<3?void 0:Fo(arguments[2]);return Co(t,R(e),r)}});var Bo=xo.keys,Do=xo.toKey;kt({target:"Reflect",stat:!0},{getOwnMetadataKeys:function(t){var e=arguments.length<2?void 0:Do(arguments[1]);return Bo(R(t),e)}});var qo=xo.has,zo=xo.toKey,Wo=function t(e,r,n){if(qo(e,r,n))return!0;var o=Ie(r);return null!==o&&t(e,o,n)};kt({target:"Reflect",stat:!0},{hasMetadata:function(t,e){var r=arguments.length<3?void 0:zo(arguments[2]);return Wo(t,R(e),r)}});var Ko=xo.has,Go=xo.toKey;kt({target:"Reflect",stat:!0},{hasOwnMetadata:function(t,e){var r=arguments.length<3?void 0:Go(arguments[2]);return Ko(t,R(e),r)}});var $o=xo.toKey,Vo=xo.set;kt({target:"Reflect",stat:!0},{metadata:function(t,e){return function(r,n){Vo(t,e,R(r),$o(n))}}});var Ho=Dt("match"),Xo=function(t){var e;return g(t)&&(void 0!==(e=t[Ho])?!!e:"RegExp"==l(t))},Yo=function(){var t=R(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Jo(t,e){return RegExp(t,e)}var Qo={UNSUPPORTED_Y:o(function(){var t=Jo("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),BROKEN_CARET:o(function(){var t=Jo("^r","gy");return t.lastIndex=2,null!=t.exec("str")})},Zo=P.f,ti=bt.f,ei=tt.set,ri=Dt("match"),ni=n.RegExp,oi=ni.prototype,ii=/a/g,ai=/a/g,ui=new ni(ii)!==ii,si=Qo.UNSUPPORTED_Y;if(i&&It("RegExp",!ui||si||o(function(){return ai[ri]=!1,ni(ii)!=ii||ni(ai)==ai||"/a/i"!=ni(ii,"i")}))){for(var ci=function(t,e){var r,n=this instanceof ci,o=Xo(t),i=void 0===e;if(!n&&o&&t.constructor===ci&&i)return t;ui?o&&!i&&(t=t.source):t instanceof ci&&(i&&(e=Yo.call(t)),t=t.source),si&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=Nr(ui?new ni(t,e):ni(t,e),n?this:oi,ci);return si&&r&&ei(a,{sticky:r}),a},fi=function(t){t in ci||Zo(ci,t,{configurable:!0,get:function(){return ni[t]},set:function(e){ni[t]=e}})},li=ti(ni),hi=0;li.length>hi;)fi(li[hi++]);oi.constructor=ci,ci.prototype=oi,et(n,"RegExp",ci)}Dr("RegExp");var pi="toString",di=RegExp.prototype,vi=di.toString;(o(function(){return"/a/b"!=vi.call({source:"a",flags:"b"})})||vi.name!=pi)&&et(RegExp.prototype,pi,function(){var t=R(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in di)?Yo.call(t):r)},{unsafe:!0});var gi=RegExp.prototype.exec,yi=String.prototype.replace,mi=gi,bi=function(){var t=/a/,e=/b*/g;return gi.call(t,"a"),gi.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),wi=Qo.UNSUPPORTED_Y||Qo.BROKEN_CARET,Si=void 0!==/()??/.exec("")[1];(bi||Si||wi)&&(mi=function(t){var e,r,n,o,i=this,a=wi&&i.sticky,u=Yo.call(i),s=i.source,c=0,f=t;return a&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(s="(?: "+s+")",f=" "+f,c++),r=new RegExp("^(?:"+s+")",u)),Si&&(r=new RegExp("^"+s+"$(?!\\s)",u)),bi&&(e=i.lastIndex),n=gi.call(a?r:i,f),a?n?(n.input=n.input.slice(c),n[0]=n[0].slice(c),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:bi&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),Si&&n&&n.length>1&&yi.call(n[0],r,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)}),n});var Ei=mi;kt({target:"RegExp",proto:!0,forced:/./.exec!==Ei},{exec:Ei}),i&&("g"!=/./g.flags||Qo.UNSUPPORTED_Y)&&P.f(RegExp.prototype,"flags",{configurable:!0,get:Yo});var xi=tt.get,Ai=RegExp.prototype;i&&Qo.UNSUPPORTED_Y&&(0,P.f)(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==Ai){if(this instanceof RegExp)return!!xi(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}});var Oi,Ri,ji=(Oi=!1,(Ri=/[ac]/).exec=function(){return Oi=!0,/./.exec.apply(this,arguments)},!0===Ri.test("abc")&&Oi),Pi=/./.test;kt({target:"RegExp",proto:!0,forced:!ji},{test:function(t){if("function"!=typeof this.exec)return Pi.call(this,t);var e=this.exec(t);if(null!==e&&!g(e))throw new Error("RegExp exec method returned something other than an Object or null");return!!e}});var Ii=Dt("species"),Ti=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),ki="$0"==="a".replace(/./,"$0"),Li=Dt("replace"),Ui=!!/./[Li]&&""===/./[Li]("a","$0"),Mi=!o(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}),_i=function(t,e,r,n){var i=Dt(t),a=!o(function(){var e={};return e[i]=function(){return 7},7!=""[t](e)}),u=a&&!o(function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Ii]=function(){return r},r.flags="",r[i]=/./[i]),r.exec=function(){return e=!0,null},r[i](""),!e});if(!a||!u||"replace"===t&&(!Ti||!ki||Ui)||"split"===t&&!Mi){var s=/./[i],c=r(i,""[t],function(t,e,r,n,o){return e.exec===Ei?a&&!o?{done:!0,value:s.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}},{REPLACE_KEEPS_$0:ki,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ui}),f=c[1];et(String.prototype,t,c[0]),et(RegExp.prototype,i,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}n&&I(RegExp.prototype[i],"sham",!0)},Ni=Oe.charAt,Ci=function(t,e,r){return e+(r?Ni(t,e).length:1)},Fi=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==l(t))throw TypeError("RegExp#exec called on incompatible receiver");return Ei.call(t,e)};_i("match",1,function(t,e,r){return[function(e){var r=d(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var o=R(t),i=String(this);if(!o.global)return Fi(o,i);var a=o.unicode;o.lastIndex=0;for(var u,s=[],c=0;null!==(u=Fi(o,i));){var f=String(u[0]);s[c]=f,""===f&&(o.lastIndex=Ci(i,ct(o.lastIndex),a)),c++}return 0===c?null:s}]});var Bi=Math.max,Di=Math.min,qi=Math.floor,zi=/\$([$&'`]|\d\d?|<[^>]*>)/g,Wi=/\$([$&'`]|\d\d?)/g;_i("replace",2,function(t,e,r,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,a=o?"$":"$0";return[function(r,n){var o=d(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!o&&i||"string"==typeof n&&-1===n.indexOf(a)){var s=r(e,t,this,n);if(s.done)return s.value}var c=R(t),f=String(this),l="function"==typeof n;l||(n=String(n));var h=c.global;if(h){var p=c.unicode;c.lastIndex=0}for(var d=[];;){var v=Fi(c,f);if(null===v)break;if(d.push(v),!h)break;""===String(v[0])&&(c.lastIndex=Ci(f,ct(c.lastIndex),p))}for(var g,y="",m=0,b=0;b<d.length;b++){v=d[b];for(var w=String(v[0]),S=Bi(Di(ut(v.index),f.length),0),E=[],x=1;x<v.length;x++)E.push(void 0===(g=v[x])?g:String(g));var A=v.groups;if(l){var O=[w].concat(E,S,f);void 0!==A&&O.push(A);var j=String(n.apply(void 0,O))}else j=u(w,f,S,E,A,n);S>=m&&(y+=f.slice(m,S)+j,m=S+w.length)}return y+f.slice(m)}];function u(t,r,n,o,i,a){var u=n+t.length,s=o.length,c=Wi;return void 0!==i&&(i=Lt(i),c=zi),e.call(a,c,function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=i[a.slice(1,-1)];break;default:var f=+a;if(0===f)return e;if(f>s){var l=qi(f/10);return 0===l?e:l<=s?void 0===o[l-1]?a.charAt(1):o[l-1]+a.charAt(1):e}c=o[f-1]}return void 0===c?"":c})}}),_i("search",1,function(t,e,r){return[function(e){var r=d(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var o=R(t),i=String(this),a=o.lastIndex;Gn(a,0)||(o.lastIndex=0);var u=Fi(o,i);return Gn(o.lastIndex,a)||(o.lastIndex=a),null===u?-1:u.index}]});var Ki=[].push,Gi=Math.min,$i=4294967295,Vi=!o(function(){return!RegExp($i,"y")});_i("split",2,function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(d(this)),o=void 0===r?$i:r>>>0;if(0===o)return[];if(void 0===t)return[n];if(!Xo(t))return e.call(n,t,o);for(var i,a,u,s=[],c=0,f=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(i=Ei.call(f,n))&&!((a=f.lastIndex)>c&&(s.push(n.slice(c,i.index)),i.length>1&&i.index<n.length&&Ki.apply(s,i.slice(1)),u=i[0].length,c=a,s.length>=o));)f.lastIndex===i.index&&f.lastIndex++;return c===n.length?!u&&f.test("")||s.push(""):s.push(n.slice(c)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=d(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var i=r(n,t,this,o,n!==e);if(i.done)return i.value;var a=R(t),u=String(this),s=sn(a,RegExp),c=a.unicode,f=new s(Vi?a:"^(?:"+a.source+")",(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(Vi?"y":"g")),l=void 0===o?$i:o>>>0;if(0===l)return[];if(0===u.length)return null===Fi(f,u)?[u]:[];for(var h=0,p=0,d=[];p<u.length;){f.lastIndex=Vi?p:0;var v,g=Fi(f,Vi?u:u.slice(p));if(null===g||(v=Gi(ct(f.lastIndex+(Vi?0:p)),u.length))===h)p=Ci(u,p,c);else{if(d.push(u.slice(h,p)),d.length===l)return d;for(var y=1;y<=g.length-1;y++)if(d.push(g[y]),d.length===l)return d;p=h=v}}return d.push(u.slice(h)),d}]},!Vi),kt({target:"Set",stat:!0},{from:en}),kt({target:"Set",stat:!0},{of:rn});var Hi=function(){for(var t=R(this),e=Qt(t.add),r=0,n=arguments.length;r<n;r++)e.call(t,arguments[r]);return t};kt({target:"Set",proto:!0,real:!0,forced:D},{addAll:function(){return Hi.apply(this,arguments)}}),kt({target:"Set",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}});var Xi=function(t){return Set.prototype.values.call(t)};kt({target:"Set",proto:!0,real:!0,forced:D},{every:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return!Mr(r,function(t){if(!n(t,t,e))return Mr.stop()},void 0,!1,!0).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{difference:function(t){var e=R(this),r=new(sn(e,ot("Set")))(e),n=Qt(r.delete);return Mr(t,function(t){n.call(r,t)}),r}}),kt({target:"Set",proto:!0,real:!0,forced:D},{filter:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Set"))),i=Qt(o.add);return Mr(r,function(t){n(t,t,e)&&i.call(o,t)},void 0,!1,!0),o}}),kt({target:"Set",proto:!0,real:!0,forced:D},{find:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t){if(n(t,t,e))return Mr.stop(t)},void 0,!1,!0).result}}),kt({target:"Set",proto:!0,real:!0,forced:D},{intersection:function(t){var e=R(this),r=new(sn(e,ot("Set"))),n=Qt(e.has),o=Qt(r.add);return Mr(t,function(t){n.call(e,t)&&o.call(r,t)}),r}}),kt({target:"Set",proto:!0,real:!0,forced:D},{isDisjointFrom:function(t){var e=R(this),r=Qt(e.has);return!Mr(t,function(t){if(!0===r.call(e,t))return Mr.stop()}).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{isSubsetOf:function(t){var e=on(this),r=R(t),n=r.has;return"function"!=typeof n&&(r=new(ot("Set"))(t),n=Qt(r.has)),!Mr(e,function(t){if(!1===n.call(r,t))return Mr.stop()},void 0,!1,!0).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{isSupersetOf:function(t){var e=R(this),r=Qt(e.has);return!Mr(t,function(t){if(!1===r.call(e,t))return Mr.stop()}).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{join:function(t){var e=R(this),r=Xi(e),n=void 0===t?",":String(t),o=[];return Mr(r,o.push,o,!1,!0),o.join(n)}}),kt({target:"Set",proto:!0,real:!0,forced:D},{map:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Set"))),i=Qt(o.add);return Mr(r,function(t){i.call(o,n(t,t,e))},void 0,!1,!0),o}}),kt({target:"Set",proto:!0,real:!0,forced:D},{reduce:function(t){var e=R(this),r=Xi(e),n=arguments.length<2,o=n?void 0:arguments[1];if(Qt(t),Mr(r,function(r){n?(n=!1,o=r):o=t(o,r,r,e)},void 0,!1,!0),n)throw TypeError("Reduce of empty set with no initial value");return o}}),kt({target:"Set",proto:!0,real:!0,forced:D},{some:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t){if(n(t,t,e))return Mr.stop()},void 0,!1,!0).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{symmetricDifference:function(t){var e=R(this),r=new(sn(e,ot("Set")))(e),n=Qt(r.delete),o=Qt(r.add);return Mr(t,function(t){n.call(r,t)||o.call(r,t)}),r}}),kt({target:"Set",proto:!0,real:!0,forced:D},{union:function(t){var e=R(this),r=new(sn(e,ot("Set")))(e);return Mr(t,Qt(r.add),r),r}});var Yi,Ji,Qi=ot("navigator","userAgent")||"",Zi=n.process,ta=Zi&&Zi.versions,ea=ta&&ta.v8;ea?Ji=(Yi=ea.split("."))[0]+Yi[1]:Qi&&(!(Yi=Qi.match(/Edge\/(\d+)/))||Yi[1]>=74)&&(Yi=Qi.match(/Chrome\/(\d+)/))&&(Ji=Yi[1]);var ra=Ji&&+Ji,na=Dt("species"),oa=Dt("isConcatSpreadable"),ia=9007199254740991,aa="Maximum allowed index exceeded",ua=ra>=51||!o(function(){var t=[];return t[oa]=!1,t.concat()[0]!==t}),sa=ra>=51||!o(function(){var t=[];return(t.constructor={})[na]=function(){return{foo:1}},1!==t.concat(Boolean).foo}),ca=function(t){if(!g(t))return!1;var e=t[oa];return void 0!==e?!!e:re(t)};kt({target:"Array",proto:!0,forced:!ua||!sa},{concat:function(t){var e,r,n,o,i,a=Lt(this),u=oe(a,0),s=0;for(e=-1,n=arguments.length;e<n;e++)if(ca(i=-1===e?a:arguments[e])){if(s+(o=ct(i.length))>ia)throw TypeError(aa);for(r=0;r<o;r++,s++)r in i&&or(u,s,i[r])}else{if(s>=ia)throw TypeError(aa);or(u,s++,i)}return u.length=s,u}});var fa=bt.f,la={}.toString,ha="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],pa={f:function(t){return ha&&"[object Window]"==la.call(t)?function(t){try{return fa(t)}catch(t){return ha.slice()}}(t):fa(v(t))}},da={f:Dt},va=P.f,ga=function(t){var e=rt.Symbol||(rt.Symbol={});b(e,t)||va(e,t,{value:da.f(t)})},ya=ue.forEach,ma=$("hidden"),ba="Symbol",wa=Dt("toPrimitive"),Sa=tt.set,Ea=tt.getterFor(ba),xa=Object.prototype,Aa=n.Symbol,Oa=ot("JSON","stringify"),Ra=O.f,ja=P.f,Pa=pa.f,Ia=s.f,Ta=q("symbols"),ka=q("op-symbols"),La=q("string-to-symbol-registry"),Ua=q("symbol-to-string-registry"),Ma=q("wks"),_a=n.QObject,Na=!_a||!_a.prototype||!_a.prototype.findChild,Ca=i&&o(function(){return 7!=Ht(ja({},"a",{get:function(){return ja(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=Ra(xa,e);n&&delete xa[e],ja(t,e,r),n&&t!==xa&&ja(xa,e,n)}:ja,Fa=function(t,e){var r=Ta[t]=Ht(Aa.prototype);return Sa(r,{type:ba,tag:t,description:e}),i||(r.description=e),r},Ba=Nt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Aa},Da=function(t,e,r){t===xa&&Da(ka,e,r),R(t);var n=y(e,!0);return R(r),b(Ta,n)?(r.enumerable?(b(t,ma)&&t[ma][n]&&(t[ma][n]=!1),r=Ht(r,{enumerable:c(0,!1)})):(b(t,ma)||ja(t,ma,c(1,{})),t[ma][n]=!0),Ca(t,n,r)):ja(t,n,r)},qa=function(t,e){R(t);var r=v(e),n=qt(r).concat(Ga(r));return ya(n,function(e){i&&!za.call(r,e)||Da(t,e,r[e])}),t},za=function(t){var e=y(t,!0),r=Ia.call(this,e);return!(this===xa&&b(Ta,e)&&!b(ka,e))&&(!(r||!b(this,e)||!b(Ta,e)||b(this,ma)&&this[ma][e])||r)},Wa=function(t,e){var r=v(t),n=y(e,!0);if(r!==xa||!b(Ta,n)||b(ka,n)){var o=Ra(r,n);return!o||!b(Ta,n)||b(r,ma)&&r[ma][n]||(o.enumerable=!0),o}},Ka=function(t){var e=Pa(v(t)),r=[];return ya(e,function(t){b(Ta,t)||b(V,t)||r.push(t)}),r},Ga=function(t){var e=t===xa,r=Pa(e?ka:v(t)),n=[];return ya(r,function(t){!b(Ta,t)||e&&!b(xa,t)||n.push(Ta[t])}),n};if(_t||(et((Aa=function(){if(this instanceof Aa)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=K(t),r=function t(r){this===xa&&t.call(ka,r),b(this,ma)&&b(this[ma],e)&&(this[ma][e]=!1),Ca(this,e,c(1,r))};return i&&Na&&Ca(xa,e,{configurable:!0,set:r}),Fa(e,t)}).prototype,"toString",function(){return Ea(this).tag}),et(Aa,"withoutSetter",function(t){return Fa(K(t),t)}),s.f=za,P.f=Da,O.f=Wa,bt.f=pa.f=Ka,wt.f=Ga,da.f=function(t){return Fa(Dt(t),t)},i&&(ja(Aa.prototype,"description",{configurable:!0,get:function(){return Ea(this).description}}),et(xa,"propertyIsEnumerable",za,{unsafe:!0}))),kt({global:!0,wrap:!0,forced:!_t,sham:!_t},{Symbol:Aa}),ya(qt(Ma),function(t){ga(t)}),kt({target:ba,stat:!0,forced:!_t},{for:function(t){var e=String(t);if(b(La,e))return La[e];var r=Aa(e);return La[e]=r,Ua[r]=e,r},keyFor:function(t){if(!Ba(t))throw TypeError(t+" is not a symbol");if(b(Ua,t))return Ua[t]},useSetter:function(){Na=!0},useSimple:function(){Na=!1}}),kt({target:"Object",stat:!0,forced:!_t,sham:!i},{create:function(t,e){return void 0===e?Ht(t):qa(Ht(t),e)},defineProperty:Da,defineProperties:qa,getOwnPropertyDescriptor:Wa}),kt({target:"Object",stat:!0,forced:!_t},{getOwnPropertyNames:Ka,getOwnPropertySymbols:Ga}),kt({target:"Object",stat:!0,forced:o(function(){wt.f(1)})},{getOwnPropertySymbols:function(t){return wt.f(Lt(t))}}),Oa){var $a=!_t||o(function(){var t=Aa();return"[null]"!=Oa([t])||"{}"!=Oa({a:t})||"{}"!=Oa(Object(t))});kt({target:"JSON",stat:!0,forced:$a},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(g(e)||void 0!==t)&&!Ba(t))return re(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Ba(e))return e}),o[1]=e,Oa.apply(null,o)}})}Aa.prototype[wa]||I(Aa.prototype,wa,Aa.prototype.valueOf),_e(Aa,ba),V[ma]=!0,ga("asyncIterator");var Va=P.f,Ha=n.Symbol;if(i&&"function"==typeof Ha&&(!("description"in Ha.prototype)||void 0!==Ha().description)){var Xa={},Ya=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof Ya?new Ha(t):void 0===t?Ha():Ha(t);return""===t&&(Xa[e]=!0),e};Et(Ya,Ha);var Ja=Ya.prototype=Ha.prototype;Ja.constructor=Ya;var Qa=Ja.toString,Za="Symbol(test)"==String(Ha("test")),tu=/^Symbol\((.*)\)[^)]+$/;Va(Ja,"description",{configurable:!0,get:function(){var t=g(this)?this.valueOf():this,e=Qa.call(t);if(b(Xa,t))return"";var r=Za?e.slice(7,-1):e.replace(tu,"$1");return""===r?void 0:r}}),kt({global:!0,forced:!0},{Symbol:Ya})}ga("hasInstance"),ga("isConcatSpreadable"),ga("iterator"),ga("match"),ga("matchAll"),ga("replace"),ga("search"),ga("species"),ga("split"),ga("toPrimitive"),ga("toStringTag"),ga("unscopables"),_e(Math,"Math",!0),_e(n.JSON,"JSON",!0),ga("asyncDispose"),ga("dispose"),ga("observable"),ga("patternMatch"),ga("replaceAll"),da.f("asyncIterator");var eu=Oe.codeAt;kt({target:"String",proto:!0},{codePointAt:function(t){return eu(this,t)}}),ee("String","codePointAt");var ru,nu=function(t){if(Xo(t))throw TypeError("The method doesn't accept regular expressions");return t},ou=Dt("match"),iu=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[ou]=!1,"/./"[t](e)}catch(t){}}return!1},au=O.f,uu="".endsWith,su=Math.min,cu=iu("endsWith"),fu=!(cu||(ru=au(String.prototype,"endsWith"),!ru||ru.writable));kt({target:"String",proto:!0,forced:!fu&&!cu},{endsWith:function(t){var e=String(d(this));nu(t);var r=arguments.length>1?arguments[1]:void 0,n=ct(e.length),o=void 0===r?n:su(ct(r),n),i=String(t);return uu?uu.call(e,i,o):e.slice(o-i.length,o)===i}}),ee("String","endsWith");var lu=String.fromCharCode,hu=String.fromCodePoint;kt({target:"String",stat:!0,forced:!!hu&&1!=hu.length},{fromCodePoint:function(t){for(var e,r=[],n=arguments.length,o=0;n>o;){if(e=+arguments[o++],ht(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?lu(e):lu(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}}),kt({target:"String",proto:!0,forced:!iu("includes")},{includes:function(t){return!!~String(d(this)).indexOf(nu(t),arguments.length>1?arguments[1]:void 0)}}),ee("String","includes");var pu="".repeat||function(t){var e=String(d(this)),r="",n=ut(t);if(n<0||Infinity==n)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r},du=Math.ceil,vu=function(t){return function(e,r,n){var o,i,a=String(d(e)),u=a.length,s=void 0===n?" ":String(n),c=ct(r);return c<=u||""==s?a:((i=pu.call(s,du((o=c-u)/s.length))).length>o&&(i=i.slice(0,o)),t?a+i:i+a)}},gu={start:vu(!1),end:vu(!0)},yu=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Qi),mu=gu.start;kt({target:"String",proto:!0,forced:yu},{padStart:function(t){return mu(this,t,arguments.length>1?arguments[1]:void 0)}}),ee("String","padStart");var bu=gu.end;kt({target:"String",proto:!0,forced:yu},{padEnd:function(t){return bu(this,t,arguments.length>1?arguments[1]:void 0)}}),ee("String","padEnd"),kt({target:"String",stat:!0},{raw:function(t){for(var e=v(t.raw),r=ct(e.length),n=arguments.length,o=[],i=0;r>i;)o.push(String(e[i++])),i<n&&o.push(String(arguments[i]));return o.join("")}}),kt({target:"String",proto:!0},{repeat:pu}),ee("String","repeat");var wu=O.f,Su="".startsWith,Eu=Math.min,xu=iu("startsWith"),Au=!xu&&!!function(){var t=wu(String.prototype,"startsWith");return t&&!t.writable}();kt({target:"String",proto:!0,forced:!Au&&!xu},{startsWith:function(t){var e=String(d(this));nu(t);var r=ct(Eu(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return Su?Su.call(e,n,r):e.slice(r,r+n.length)===n}}),ee("String","startsWith");var Ou=function(t){return o(function(){return!!fn[t]()||"​᠎"!="​᠎"[t]()||fn[t].name!==t})},Ru=vn.start,ju=Ou("trimStart"),Pu=ju?function(){return Ru(this)}:"".trimStart;kt({target:"String",proto:!0,forced:ju},{trimStart:Pu,trimLeft:Pu}),ee("String","trimLeft");var Iu=vn.end,Tu=Ou("trimEnd"),ku=Tu?function(){return Iu(this)}:"".trimEnd;kt({target:"String",proto:!0,forced:Tu},{trimEnd:ku,trimRight:ku}),ee("String","trimRight");var Lu=Dt("iterator"),Uu=!o(function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach(function(t,n){e.delete("b"),r+=n+t}),!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[Lu]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}),Mu=Object.assign,_u=Object.defineProperty,Nu=!Mu||o(function(){if(i&&1!==Mu({b:1},Mu(_u({},"a",{enumerable:!0,get:function(){_u(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=Mu({},t)[r]||qt(Mu({},e)).join("")!=n})?function(t,e){for(var r=Lt(t),n=arguments.length,o=1,a=wt.f,u=s.f;n>o;)for(var c,f=p(arguments[o++]),l=a?qt(f).concat(a(f)):qt(f),h=l.length,d=0;h>d;)c=l[d++],i&&!u.call(f,c)||(r[c]=f[c]);return r}:Mu,Cu=2147483647,Fu=/[^\0-\u007E]/,Bu=/[.\u3002\uFF0E\uFF61]/g,Du="Overflow: input needs wider integers to process",qu=Math.floor,zu=String.fromCharCode,Wu=function(t){return t+22+75*(t<26)},Ku=function(t,e,r){var n=0;for(t=r?qu(t/700):t>>1,t+=qu(t/e);t>455;n+=36)t=qu(t/35);return qu(n+36*t/(t+38))},Gu=function(t){var e,r,n=[],o=(t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=t.charCodeAt(r++);56320==(64512&i)?e.push(((1023&o)<<10)+(1023&i)+65536):(e.push(o),r--)}else e.push(o)}return e}(t)).length,i=128,a=0,u=72;for(e=0;e<t.length;e++)(r=t[e])<128&&n.push(zu(r));var s=n.length,c=s;for(s&&n.push("-");c<o;){var f=Cu;for(e=0;e<t.length;e++)(r=t[e])>=i&&r<f&&(f=r);var l=c+1;if(f-i>qu((Cu-a)/l))throw RangeError(Du);for(a+=(f-i)*l,i=f,e=0;e<t.length;e++){if((r=t[e])<i&&++a>Cu)throw RangeError(Du);if(r==i){for(var h=a,p=36;;p+=36){var d=p<=u?1:p>=u+26?26:p-u;if(h<d)break;var v=h-d,g=36-d;n.push(zu(Wu(d+v%g))),h=qu(v/g)}n.push(zu(Wu(h))),u=Ku(a,l,c==s),a=0,++c}}++a,++i}return n.join("")},$u=ot("fetch"),Vu=ot("Headers"),Hu=Dt("iterator"),Xu="URLSearchParams",Yu="URLSearchParamsIterator",Ju=tt.set,Qu=tt.getterFor(Xu),Zu=tt.getterFor(Yu),ts=/\+/g,es=Array(4),rs=function(t){return es[t-1]||(es[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},ns=function(t){try{return decodeURIComponent(t)}catch(e){return t}},os=function(t){var e=t.replace(ts," "),r=4;try{return decodeURIComponent(e)}catch(t){for(;r;)e=e.replace(rs(r--),ns);return e}},is=/[!'()~]|%20/g,as={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},us=function(t){return as[t]},ss=function(t){return encodeURIComponent(t).replace(is,us)},cs=function(t,e){if(e)for(var r,n,o=e.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),t.push({key:os(n.shift()),value:os(n.join("="))}))},fs=function(t){this.entries.length=0,cs(this.entries,t)},ls=function(t,e){if(t<e)throw TypeError("Not enough arguments")},hs=Be(function(t,e){Ju(this,{type:Yu,iterator:on(Qu(t).entries),kind:e})},"Iterator",function(){var t=Zu(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r}),ps=function(){_r(this,ps,Xu);var t,e,r,n,o,i,a,u,s,c=arguments.length>0?arguments[0]:void 0,f=this,l=[];if(Ju(f,{type:Xu,entries:l,updateURL:function(){},updateSearchParams:fs}),void 0!==c)if(g(c))if("function"==typeof(t=lr(c)))for(r=(e=t.call(c)).next;!(n=r.call(e)).done;){if((a=(i=(o=on(R(n.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");l.push({key:a.value+"",value:u.value+""})}else for(s in c)b(c,s)&&l.push({key:s,value:c[s]+""});else cs(l,"string"==typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},ds=ps.prototype;Fr(ds,{append:function(t,e){ls(arguments.length,2);var r=Qu(this);r.entries.push({key:t+"",value:e+""}),r.updateURL()},delete:function(t){ls(arguments.length,1);for(var e=Qu(this),r=e.entries,n=t+"",o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;e.updateURL()},get:function(t){ls(arguments.length,1);for(var e=Qu(this).entries,r=t+"",n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){ls(arguments.length,1);for(var e=Qu(this).entries,r=t+"",n=[],o=0;o<e.length;o++)e[o].key===r&&n.push(e[o].value);return n},has:function(t){ls(arguments.length,1);for(var e=Qu(this).entries,r=t+"",n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){ls(arguments.length,1);for(var r,n=Qu(this),o=n.entries,i=!1,a=t+"",u=e+"",s=0;s<o.length;s++)(r=o[s]).key===a&&(i?o.splice(s--,1):(i=!0,r.value=u));i||o.push({key:a,value:u}),n.updateURL()},sort:function(){var t,e,r,n=Qu(this),o=n.entries,i=o.slice();for(o.length=0,r=0;r<i.length;r++){for(t=i[r],e=0;e<r;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===r&&o.push(t)}n.updateURL()},forEach:function(t){for(var e,r=Qu(this).entries,n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new hs(this,"keys")},values:function(){return new hs(this,"values")},entries:function(){return new hs(this,"entries")}},{enumerable:!0}),et(ds,Hu,ds.entries),et(ds,"toString",function(){for(var t,e=Qu(this).entries,r=[],n=0;n<e.length;)t=e[n++],r.push(ss(t.key)+"="+ss(t.value));return r.join("&")},{enumerable:!0}),_e(ps,Xu),kt({global:!0,forced:!Uu},{URLSearchParams:ps}),Uu||"function"!=typeof $u||"function"!=typeof Vu||kt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,r,n,o=[t];return arguments.length>1&&(g(e=arguments[1])&&cr(r=e.body)===Xu&&((n=e.headers?new Vu(e.headers):new Vu).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=Ht(e,{body:c(0,String(r)),headers:c(0,n)})),o.push(e)),$u.apply(this,o)}});var vs,gs={URLSearchParams:ps,getState:Qu},ys=Oe.codeAt,ms=n.URL,bs=gs.URLSearchParams,ws=gs.getState,Ss=tt.set,Es=tt.getterFor("URL"),xs=Math.floor,As=Math.pow,Os="Invalid scheme",Rs="Invalid host",js="Invalid port",Ps=/[A-Za-z]/,Is=/[\d+-.A-Za-z]/,Ts=/\d/,ks=/^(0x|0X)/,Ls=/^[0-7]+$/,Us=/^\d+$/,Ms=/^[\dA-Fa-f]+$/,_s=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,Ns=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,Cs=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,Fs=/[\u0009\u000A\u000D]/g,Bs=function(t,e){var r,n,o;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return Rs;if(!(r=qs(e.slice(1,-1))))return Rs;t.host=r}else if(Xs(t)){if(e=function(t){var e,r,n=[],o=t.toLowerCase().replace(Bu,".").split(".");for(e=0;e<o.length;e++)n.push(Fu.test(r=o[e])?"xn--"+Gu(r):r);return n.join(".")}(e),_s.test(e))return Rs;if(null===(r=Ds(e)))return Rs;t.host=r}else{if(Ns.test(e))return Rs;for(r="",n=hr(e),o=0;o<n.length;o++)r+=Vs(n[o],Ws);t.host=r}},Ds=function(t){var e,r,n,o,i,a,u,s=t.split(".");if(s.length&&""==s[s.length-1]&&s.pop(),(e=s.length)>4)return t;for(r=[],n=0;n<e;n++){if(""==(o=s[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=ks.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?Us:8==i?Ls:Ms).test(o))return t;a=parseInt(o,i)}r.push(a)}for(n=0;n<e;n++)if(a=r[n],n==e-1){if(a>=As(256,5-e))return null}else if(a>255)return null;for(u=r.pop(),n=0;n<r.length;n++)u+=r[n]*As(256,3-n);return u},qs=function(t){var e,r,n,o,i,a,u,s=[0,0,0,0,0,0,0,0],c=0,f=null,l=0,h=function(){return t.charAt(l)};if(":"==h()){if(":"!=t.charAt(1))return;l+=2,f=++c}for(;h();){if(8==c)return;if(":"!=h()){for(e=r=0;r<4&&Ms.test(h());)e=16*e+parseInt(h(),16),l++,r++;if("."==h()){if(0==r)return;if(l-=r,c>6)return;for(n=0;h();){if(o=null,n>0){if(!("."==h()&&n<4))return;l++}if(!Ts.test(h()))return;for(;Ts.test(h());){if(i=parseInt(h(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}s[c]=256*s[c]+o,2!=++n&&4!=n||c++}if(4!=n)return;break}if(":"==h()){if(l++,!h())return}else if(h())return;s[c++]=e}else{if(null!==f)return;l++,f=++c}}if(null!==f)for(a=c-f,c=7;0!=c&&a>0;)u=s[c],s[c--]=s[f+a-1],s[f+--a]=u;else if(8!=c)return;return s},zs=function(t){var e,r,n,o;if("number"==typeof t){for(e=[],r=0;r<4;r++)e.unshift(t%256),t=xs(t/256);return e.join(".")}if("object"==typeof t){for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>r&&(e=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return o>r&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o&&(o=!1),n===r?(e+=r?":":"::",o=!0):(e+=t[r].toString(16),r<7&&(e+=":")));return"["+e+"]"}return t},Ws={},Ks=Nu({},Ws,{" ":1,'"':1,"<":1,">":1,"`":1}),Gs=Nu({},Ks,{"#":1,"?":1,"{":1,"}":1}),$s=Nu({},Gs,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Vs=function(t,e){var r=ys(t,0);return r>32&&r<127&&!b(e,t)?t:encodeURIComponent(t)},Hs={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Xs=function(t){return b(Hs,t.scheme)},Ys=function(t){return""!=t.username||""!=t.password},Js=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},Qs=function(t,e){var r;return 2==t.length&&Ps.test(t.charAt(0))&&(":"==(r=t.charAt(1))||!e&&"|"==r)},Zs=function(t){var e;return t.length>1&&Qs(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)},tc=function(t){var e=t.path,r=e.length;!r||"file"==t.scheme&&1==r&&Qs(e[0],!0)||e.pop()},ec=function(t){return"."===t||"%2e"===t.toLowerCase()},rc={},nc={},oc={},ic={},ac={},uc={},sc={},cc={},fc={},lc={},hc={},pc={},dc={},vc={},gc={},yc={},mc={},bc={},wc={},Sc={},Ec={},xc=function(t,e,r,n){var o,i,a,u,s,c=r||rc,f=0,l="",h=!1,p=!1,d=!1;for(r||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(Cs,"")),e=e.replace(Fs,""),o=hr(e);f<=o.length;){switch(i=o[f],c){case rc:if(!i||!Ps.test(i)){if(r)return Os;c=oc;continue}l+=i.toLowerCase(),c=nc;break;case nc:if(i&&(Is.test(i)||"+"==i||"-"==i||"."==i))l+=i.toLowerCase();else{if(":"!=i){if(r)return Os;l="",c=oc,f=0;continue}if(r&&(Xs(t)!=b(Hs,l)||"file"==l&&(Ys(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=l,r)return void(Xs(t)&&Hs[t.scheme]==t.port&&(t.port=null));l="","file"==t.scheme?c=vc:Xs(t)&&n&&n.scheme==t.scheme?c=ic:Xs(t)?c=cc:"/"==o[f+1]?(c=ac,f++):(t.cannotBeABaseURL=!0,t.path.push(""),c=wc)}break;case oc:if(!n||n.cannotBeABaseURL&&"#"!=i)return Os;if(n.cannotBeABaseURL&&"#"==i){t.scheme=n.scheme,t.path=n.path.slice(),t.query=n.query,t.fragment="",t.cannotBeABaseURL=!0,c=Ec;break}c="file"==n.scheme?vc:uc;continue;case ic:if("/"!=i||"/"!=o[f+1]){c=uc;continue}c=fc,f++;break;case ac:if("/"==i){c=lc;break}c=bc;continue;case uc:if(t.scheme=n.scheme,i==vs)t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query=n.query;else if("/"==i||"\\"==i&&Xs(t))c=sc;else if("?"==i)t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query="",c=Sc;else{if("#"!=i){t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.path.pop(),c=bc;continue}t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query=n.query,t.fragment="",c=Ec}break;case sc:if(!Xs(t)||"/"!=i&&"\\"!=i){if("/"!=i){t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,c=bc;continue}c=lc}else c=fc;break;case cc:if(c=fc,"/"!=i||"/"!=l.charAt(f+1))continue;f++;break;case fc:if("/"!=i&&"\\"!=i){c=lc;continue}break;case lc:if("@"==i){h&&(l="%40"+l),h=!0,a=hr(l);for(var v=0;v<a.length;v++){var g=a[v];if(":"!=g||d){var y=Vs(g,$s);d?t.password+=y:t.username+=y}else d=!0}l=""}else if(i==vs||"/"==i||"?"==i||"#"==i||"\\"==i&&Xs(t)){if(h&&""==l)return"Invalid authority";f-=hr(l).length+1,l="",c=hc}else l+=i;break;case hc:case pc:if(r&&"file"==t.scheme){c=yc;continue}if(":"!=i||p){if(i==vs||"/"==i||"?"==i||"#"==i||"\\"==i&&Xs(t)){if(Xs(t)&&""==l)return Rs;if(r&&""==l&&(Ys(t)||null!==t.port))return;if(u=Bs(t,l))return u;if(l="",c=mc,r)return;continue}"["==i?p=!0:"]"==i&&(p=!1),l+=i}else{if(""==l)return Rs;if(u=Bs(t,l))return u;if(l="",c=dc,r==pc)return}break;case dc:if(!Ts.test(i)){if(i==vs||"/"==i||"?"==i||"#"==i||"\\"==i&&Xs(t)||r){if(""!=l){var m=parseInt(l,10);if(m>65535)return js;t.port=Xs(t)&&m===Hs[t.scheme]?null:m,l=""}if(r)return;c=mc;continue}return js}l+=i;break;case vc:if(t.scheme="file","/"==i||"\\"==i)c=gc;else{if(!n||"file"!=n.scheme){c=bc;continue}if(i==vs)t.host=n.host,t.path=n.path.slice(),t.query=n.query;else if("?"==i)t.host=n.host,t.path=n.path.slice(),t.query="",c=Sc;else{if("#"!=i){Zs(o.slice(f).join(""))||(t.host=n.host,t.path=n.path.slice(),tc(t)),c=bc;continue}t.host=n.host,t.path=n.path.slice(),t.query=n.query,t.fragment="",c=Ec}}break;case gc:if("/"==i||"\\"==i){c=yc;break}n&&"file"==n.scheme&&!Zs(o.slice(f).join(""))&&(Qs(n.path[0],!0)?t.path.push(n.path[0]):t.host=n.host),c=bc;continue;case yc:if(i==vs||"/"==i||"\\"==i||"?"==i||"#"==i){if(!r&&Qs(l))c=bc;else if(""==l){if(t.host="",r)return;c=mc}else{if(u=Bs(t,l))return u;if("localhost"==t.host&&(t.host=""),r)return;l="",c=mc}continue}l+=i;break;case mc:if(Xs(t)){if(c=bc,"/"!=i&&"\\"!=i)continue}else if(r||"?"!=i)if(r||"#"!=i){if(i!=vs&&(c=bc,"/"!=i))continue}else t.fragment="",c=Ec;else t.query="",c=Sc;break;case bc:if(i==vs||"/"==i||"\\"==i&&Xs(t)||!r&&("?"==i||"#"==i)){if(".."===(s=(s=l).toLowerCase())||"%2e."===s||".%2e"===s||"%2e%2e"===s?(tc(t),"/"==i||"\\"==i&&Xs(t)||t.path.push("")):ec(l)?"/"==i||"\\"==i&&Xs(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&Qs(l)&&(t.host&&(t.host=""),l=l.charAt(0)+":"),t.path.push(l)),l="","file"==t.scheme&&(i==vs||"?"==i||"#"==i))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==i?(t.query="",c=Sc):"#"==i&&(t.fragment="",c=Ec)}else l+=Vs(i,Gs);break;case wc:"?"==i?(t.query="",c=Sc):"#"==i?(t.fragment="",c=Ec):i!=vs&&(t.path[0]+=Vs(i,Ws));break;case Sc:r||"#"!=i?i!=vs&&("'"==i&&Xs(t)?t.query+="%27":t.query+="#"==i?"%23":Vs(i,Ws)):(t.fragment="",c=Ec);break;case Ec:i!=vs&&(t.fragment+=Vs(i,Ks))}f++}},Ac=function(t){var e,r,n=_r(this,Ac,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),u=Ss(n,{type:"URL"});if(void 0!==o)if(o instanceof Ac)e=Es(o);else if(r=xc(e={},String(o)))throw TypeError(r);if(r=xc(u,a,null,e))throw TypeError(r);var s=u.searchParams=new bs,c=ws(s);c.updateSearchParams(u.query),c.updateURL=function(){u.query=String(s)||null},i||(n.href=Rc.call(n),n.origin=jc.call(n),n.protocol=Pc.call(n),n.username=Ic.call(n),n.password=Tc.call(n),n.host=kc.call(n),n.hostname=Lc.call(n),n.port=Uc.call(n),n.pathname=Mc.call(n),n.search=_c.call(n),n.searchParams=Nc.call(n),n.hash=Cc.call(n))},Oc=Ac.prototype,Rc=function(){var t=Es(this),e=t.scheme,r=t.username,n=t.password,o=t.host,i=t.port,a=t.path,u=t.query,s=t.fragment,c=e+":";return null!==o?(c+="//",Ys(t)&&(c+=r+(n?":"+n:"")+"@"),c+=zs(o),null!==i&&(c+=":"+i)):"file"==e&&(c+="//"),c+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(c+="?"+u),null!==s&&(c+="#"+s),c},jc=function(){var t=Es(this),e=t.scheme,r=t.port;if("blob"==e)try{return new URL(e.path[0]).origin}catch(t){return"null"}return"file"!=e&&Xs(t)?e+"://"+zs(t.host)+(null!==r?":"+r:""):"null"},Pc=function(){return Es(this).scheme+":"},Ic=function(){return Es(this).username},Tc=function(){return Es(this).password},kc=function(){var t=Es(this),e=t.host,r=t.port;return null===e?"":null===r?zs(e):zs(e)+":"+r},Lc=function(){var t=Es(this).host;return null===t?"":zs(t)},Uc=function(){var t=Es(this).port;return null===t?"":String(t)},Mc=function(){var t=Es(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},_c=function(){var t=Es(this).query;return t?"?"+t:""},Nc=function(){return Es(this).searchParams},Cc=function(){var t=Es(this).fragment;return t?"#"+t:""},Fc=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(i&&zt(Oc,{href:Fc(Rc,function(t){var e=Es(this),r=String(t),n=xc(e,r);if(n)throw TypeError(n);ws(e.searchParams).updateSearchParams(e.query)}),origin:Fc(jc),protocol:Fc(Pc,function(t){var e=Es(this);xc(e,String(t)+":",rc)}),username:Fc(Ic,function(t){var e=Es(this),r=hr(String(t));if(!Js(e)){e.username="";for(var n=0;n<r.length;n++)e.username+=Vs(r[n],$s)}}),password:Fc(Tc,function(t){var e=Es(this),r=hr(String(t));if(!Js(e)){e.password="";for(var n=0;n<r.length;n++)e.password+=Vs(r[n],$s)}}),host:Fc(kc,function(t){var e=Es(this);e.cannotBeABaseURL||xc(e,String(t),hc)}),hostname:Fc(Lc,function(t){var e=Es(this);e.cannotBeABaseURL||xc(e,String(t),pc)}),port:Fc(Uc,function(t){var e=Es(this);Js(e)||(""==(t=String(t))?e.port=null:xc(e,t,dc))}),pathname:Fc(Mc,function(t){var e=Es(this);e.cannotBeABaseURL||(e.path=[],xc(e,t+"",mc))}),search:Fc(_c,function(t){var e=Es(this);""==(t=String(t))?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",xc(e,t,Sc)),ws(e.searchParams).updateSearchParams(e.query)}),searchParams:Fc(Nc),hash:Fc(Cc,function(t){var e=Es(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",xc(e,t,Ec)):e.fragment=null})}),et(Oc,"toJSON",function(){return Rc.call(this)},{enumerable:!0}),et(Oc,"toString",function(){return Rc.call(this)},{enumerable:!0}),ms){var Bc=ms.createObjectURL,Dc=ms.revokeObjectURL;Bc&&et(Ac,"createObjectURL",function(t){return Bc.apply(ms,arguments)}),Dc&&et(Ac,"revokeObjectURL",function(t){return Dc.apply(ms,arguments)})}_e(Ac,"URL"),kt({global:!0,forced:!Uu,sham:!i},{URL:Ac}),kt({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}}),kt({target:"WeakMap",stat:!0},{from:en}),kt({target:"WeakMap",stat:!0},{of:rn}),kt({target:"WeakMap",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}}),kt({target:"WeakMap",proto:!0,real:!0,forced:D},{upsert:cn}),Cr("WeakSet",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},mo),kt({target:"WeakSet",proto:!0,real:!0,forced:D},{addAll:function(){return Hi.apply(this,arguments)}}),kt({target:"WeakSet",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}}),kt({target:"WeakSet",stat:!0},{from:en}),kt({target:"WeakSet",stat:!0},{of:rn});var qc,zc,Wc,Kc=n.Promise,Gc=/(iphone|ipod|ipad).*applewebkit/i.test(Qi),$c=n.location,Vc=n.setImmediate,Hc=n.clearImmediate,Xc=n.process,Yc=n.MessageChannel,Jc=n.Dispatch,Qc=0,Zc={},tf=function(t){if(Zc.hasOwnProperty(t)){var e=Zc[t];delete Zc[t],e()}},ef=function(t){return function(){tf(t)}},rf=function(t){tf(t.data)},nf=function(t){n.postMessage(t+"",$c.protocol+"//"+$c.host)};Vc&&Hc||(Vc=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return Zc[++Qc]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},qc(Qc),Qc},Hc=function(t){delete Zc[t]},"process"==l(Xc)?qc=function(t){Xc.nextTick(ef(t))}:Jc&&Jc.now?qc=function(t){Jc.now(ef(t))}:Yc&&!Gc?(Wc=(zc=new Yc).port2,zc.port1.onmessage=rf,qc=Zt(Wc.postMessage,Wc,1)):!n.addEventListener||"function"!=typeof postMessage||n.importScripts||o(nf)||"file:"===$c.protocol?qc="onreadystatechange"in E("script")?function(t){Wt.appendChild(E("script")).onreadystatechange=function(){Wt.removeChild(this),tf(t)}}:function(t){setTimeout(ef(t),0)}:(qc=nf,n.addEventListener("message",rf,!1)));var of,af,uf,sf,cf,ff,lf,hf,pf={set:Vc,clear:Hc},df=O.f,vf=pf.set,gf=n.MutationObserver||n.WebKitMutationObserver,yf=n.process,mf=n.Promise,bf="process"==l(yf),wf=df(n,"queueMicrotask"),Sf=wf&&wf.value;Sf||(of=function(){var t,e;for(bf&&(t=yf.domain)&&t.exit();af;){e=af.fn,af=af.next;try{e()}catch(t){throw af?sf():uf=void 0,t}}uf=void 0,t&&t.enter()},bf?sf=function(){yf.nextTick(of)}:gf&&!Gc?(cf=!0,ff=document.createTextNode(""),new gf(of).observe(ff,{characterData:!0}),sf=function(){ff.data=cf=!cf}):mf&&mf.resolve?(lf=mf.resolve(void 0),hf=lf.then,sf=function(){hf.call(lf,of)}):sf=function(){vf.call(n,of)});var Ef,xf,Af,Of,Rf=Sf||function(t){var e={fn:t,next:void 0};uf&&(uf.next=e),af||(af=e,sf()),uf=e},jf=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=Qt(e),this.reject=Qt(r)},Pf={f:function(t){return new jf(t)}},If=function(t,e){if(R(t),g(e)&&e.constructor===t)return e;var r=Pf.f(t);return(0,r.resolve)(e),r.promise},Tf=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},kf=pf.set,Lf=Dt("species"),Uf="Promise",Mf=tt.get,_f=tt.set,Nf=tt.getterFor(Uf),Cf=Kc,Ff=n.TypeError,Bf=n.document,Df=n.process,qf=ot("fetch"),zf=Pf.f,Wf=zf,Kf="process"==l(Df),Gf=!!(Bf&&Bf.createEvent&&n.dispatchEvent),$f="unhandledrejection",Vf=It(Uf,function(){if(C(Cf)===String(Cf)){if(66===ra)return!0;if(!Kf&&"function"!=typeof PromiseRejectionEvent)return!0}if(ra>=51&&/native code/.test(Cf))return!1;var t=Cf.resolve(1),e=function(t){t(function(){},function(){})};return(t.constructor={})[Lf]=e,!(t.then(function(){})instanceof e)}),Hf=Vf||!yr(function(t){Cf.all(t).catch(function(){})}),Xf=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},Yf=function(t,e,r){if(!e.notified){e.notified=!0;var n=e.reactions;Rf(function(){for(var o=e.value,i=1==e.state,a=0;n.length>a;){var u,s,c,f=n[a++],l=i?f.ok:f.fail,h=f.resolve,p=f.reject,d=f.domain;try{l?(i||(2===e.rejection&&tl(t,e),e.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),c=!0)),u===f.promise?p(Ff("Promise-chain cycle")):(s=Xf(u))?s.call(u,h,p):h(u)):p(o)}catch(t){d&&!c&&d.exit(),p(t)}}e.reactions=[],e.notified=!1,r&&!e.rejection&&Qf(t,e)})}},Jf=function(t,e,r){var o,i;Gf?((o=Bf.createEvent("Event")).promise=e,o.reason=r,o.initEvent(t,!1,!0),n.dispatchEvent(o)):o={promise:e,reason:r},(i=n["on"+t])?i(o):t===$f&&function(t,e){var r=n.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}("Unhandled promise rejection",r)},Qf=function(t,e){kf.call(n,function(){var r,n=e.value;if(Zf(e)&&(r=Tf(function(){Kf?Df.emit("unhandledRejection",n,t):Jf($f,t,n)}),e.rejection=Kf||Zf(e)?2:1,r.error))throw r.value})},Zf=function(t){return 1!==t.rejection&&!t.parent},tl=function(t,e){kf.call(n,function(){Kf?Df.emit("rejectionHandled",t):Jf("rejectionhandled",t,e.value)})},el=function(t,e,r,n){return function(o){t(e,r,o,n)}},rl=function(t,e,r,n){e.done||(e.done=!0,n&&(e=n),e.value=r,e.state=2,Yf(t,e,!0))},nl=function t(e,r,n,o){if(!r.done){r.done=!0,o&&(r=o);try{if(e===n)throw Ff("Promise can't be resolved itself");var i=Xf(n);i?Rf(function(){var o={done:!1};try{i.call(n,el(t,e,o,r),el(rl,e,o,r))}catch(t){rl(e,o,t,r)}}):(r.value=n,r.state=1,Yf(e,r,!1))}catch(t){rl(e,{done:!1},t,r)}}};Vf&&(Cf=function(t){_r(this,Cf,Uf),Qt(t),Ef.call(this);var e=Mf(this);try{t(el(nl,this,e),el(rl,this,e))}catch(t){rl(this,e,t)}},(Ef=function(t){_f(this,{type:Uf,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Fr(Cf.prototype,{then:function(t,e){var r=Nf(this),n=zf(sn(this,Cf));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=Kf?Df.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&Yf(this,r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),xf=function(){var t=new Ef,e=Mf(t);this.promise=t,this.resolve=el(nl,t,e),this.reject=el(rl,t,e)},Pf.f=zf=function(t){return t===Cf||t===Af?new xf(t):Wf(t)},"function"==typeof Kc&&(Of=Kc.prototype.then,et(Kc.prototype,"then",function(t,e){var r=this;return new Cf(function(t,e){Of.call(r,t,e)}).then(t,e)},{unsafe:!0}),"function"==typeof qf&&kt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return If(Cf,qf.apply(n,arguments))}}))),kt({global:!0,wrap:!0,forced:Vf},{Promise:Cf}),_e(Cf,Uf,!1),Dr(Uf),Af=ot(Uf),kt({target:Uf,stat:!0,forced:Vf},{reject:function(t){var e=zf(this);return e.reject.call(void 0,t),e.promise}}),kt({target:Uf,stat:!0,forced:Vf},{resolve:function(t){return If(this,t)}}),kt({target:Uf,stat:!0,forced:Hf},{all:function(t){var e=this,r=zf(e),n=r.resolve,o=r.reject,i=Tf(function(){var r=Qt(e.resolve),i=[],a=0,u=1;Mr(t,function(t){var s=a++,c=!1;i.push(void 0),u++,r.call(e,t).then(function(t){c||(c=!0,i[s]=t,--u||n(i))},o)}),--u||n(i)});return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=zf(e),n=r.reject,o=Tf(function(){var o=Qt(e.resolve);Mr(t,function(t){o.call(e,t).then(r.resolve,n)})});return o.error&&n(o.value),r.promise}}),kt({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=Pf.f(e),n=r.resolve,o=r.reject,i=Tf(function(){var r=Qt(e.resolve),o=[],i=0,a=1;Mr(t,function(t){var u=i++,s=!1;o.push(void 0),a++,r.call(e,t).then(function(t){s||(s=!0,o[u]={status:"fulfilled",value:t},--a||n(o))},function(t){s||(s=!0,o[u]={status:"rejected",reason:t},--a||n(o))})}),--a||n(o)});return i.error&&o(i.value),r.promise}});var ol=!!Kc&&o(function(){Kc.prototype.finally.call({then:function(){}},function(){})});kt({target:"Promise",proto:!0,real:!0,forced:ol},{finally:function(t){var e=sn(this,ot("Promise")),r="function"==typeof t;return this.then(r?function(r){return If(e,t()).then(function(){return r})}:t,r?function(r){return If(e,t()).then(function(){throw r})}:t)}}),"function"!=typeof Kc||Kc.prototype.finally||et(Kc.prototype,"finally",ot("Promise").prototype.finally);var il=tt.set,al=tt.getterFor("AggregateError"),ul=function(t,e){var r=this;if(!(r instanceof ul))return new ul(t,e);qe&&(r=qe(new Error(e),Ie(r)));var n=[];return Mr(t,n.push,n),i?il(r,{errors:n,type:"AggregateError"}):r.errors=n,void 0!==e&&I(r,"message",String(e)),r};ul.prototype=Ht(Error.prototype,{constructor:c(5,ul),message:c(5,""),name:c(5,"AggregateError")}),i&&P.f(ul.prototype,"errors",{get:function(){return al(this).errors},configurable:!0}),kt({global:!0},{AggregateError:ul}),kt({target:"Promise",stat:!0},{try:function(t){var e=Pf.f(this),r=Tf(t);return(r.error?e.reject:e.resolve)(r.value),e.promise}});var sl="No one promise resolved";kt({target:"Promise",stat:!0},{any:function(t){var e=this,r=Pf.f(e),n=r.resolve,o=r.reject,i=Tf(function(){var r=Qt(e.resolve),i=[],a=0,u=1,s=!1;Mr(t,function(t){var c=a++,f=!1;i.push(void 0),u++,r.call(e,t).then(function(t){f||s||(s=!0,n(t))},function(t){f||s||(f=!0,i[c]=t,--u||o(new(ot("AggregateError"))(i,sl)))})}),--u||o(new(ot("AggregateError"))(i,sl))});return i.error&&o(i.value),r.promise}}),ee("Promise","finally");var cl="URLSearchParams"in self,fl="Symbol"in self&&"iterator"in Symbol,ll="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),hl="FormData"in self,pl="ArrayBuffer"in self;if(pl)var dl=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],vl=ArrayBuffer.isView||function(t){return t&&dl.indexOf(Object.prototype.toString.call(t))>-1};function gl(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function yl(t){return"string"!=typeof t&&(t=String(t)),t}function ml(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return fl&&(e[Symbol.iterator]=function(){return e}),e}function bl(t){this.map={},t instanceof bl?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function wl(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function Sl(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function El(t){var e=new FileReader,r=Sl(e);return e.readAsArrayBuffer(t),r}function xl(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function Al(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:ll&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:hl&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:cl&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():pl&&ll&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=xl(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):pl&&(ArrayBuffer.prototype.isPrototypeOf(t)||vl(t))?this._bodyArrayBuffer=xl(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):cl&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},ll&&(this.blob=function(){var t=wl(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?wl(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(El)}),this.text=function(){var t=wl(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=Sl(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},hl&&(this.formData=function(){return this.text().then(jl)}),this.json=function(){return this.text().then(JSON.parse)},this}bl.prototype.append=function(t,e){t=gl(t),e=yl(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},bl.prototype.delete=function(t){delete this.map[gl(t)]},bl.prototype.get=function(t){return t=gl(t),this.has(t)?this.map[t]:null},bl.prototype.has=function(t){return this.map.hasOwnProperty(gl(t))},bl.prototype.set=function(t,e){this.map[gl(t)]=yl(e)},bl.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},bl.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),ml(t)},bl.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),ml(t)},bl.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),ml(t)},fl&&(bl.prototype[Symbol.iterator]=bl.prototype.entries);var Ol=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Rl(t,e){var r,n,o=(e=e||{}).body;if(t instanceof Rl){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new bl(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new bl(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),Ol.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function jl(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function Pl(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new bl(e.headers),this.url=e.url||"",this._initBody(t)}Rl.prototype.clone=function(){return new Rl(this,{body:this._bodyInit})},Al.call(Rl.prototype),Al.call(Pl.prototype),Pl.prototype.clone=function(){return new Pl(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new bl(this.headers),url:this.url})},Pl.error=function(){var t=new Pl(null,{status:0,statusText:""});return t.type="error",t};var Il=[301,302,303,307,308];Pl.redirect=function(t,e){if(-1===Il.indexOf(e))throw new RangeError("Invalid status code");return new Pl(null,{status:e,headers:{location:t}})};var Tl=self.DOMException;try{new Tl}catch(t){(Tl=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),Tl.prototype.constructor=Tl}function kl(t,e){return new Promise(function(r,n){var o=new Rl(t,e);if(o.signal&&o.signal.aborted)return n(new Tl("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t,e,n={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new bl,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL"),r(new Pl("response"in i?i.response:i.responseText,n))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new Tl("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&ll&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),o.signal&&(o.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",a)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})}kl.polyfill=!0,self.fetch||(self.fetch=kl,self.Headers=bl,self.Request=Rl,self.Response=Pl);var Ll=Object.getOwnPropertySymbols,Ul=Object.prototype.hasOwnProperty,Ml=Object.prototype.propertyIsEnumerable;function _l(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var Nl=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,n,o=_l(t),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))Ul.call(r,a)&&(o[a]=r[a]);if(Ll){n=Ll(r);for(var u=0;u<n.length;u++)Ml.call(r,n[u])&&(o[n[u]]=r[n[u]])}}return o};Object.assign=Nl}();


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/polyfills.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9wb2x5ZmlsbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3BvbHlmaWxsLW5vbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYSxzQ0FBc0Msc0JBQXNCLHNCQUFzQjtBQUMvRix5Qzs7Ozs7Ozs7OztBQ0RBLFlBQVksc0dBQXNHLHFCQUFNLENBQUMscUJBQU0sa0NBQWtDLGNBQWMsT0FBTyxZQUFZLGdDQUFnQyxrQkFBa0IsMEJBQTBCLHFMQUFxTCxJQUFJLFlBQVksU0FBUyxVQUFVLGlCQUFpQixrQ0FBa0MsSUFBSSxlQUFlLFVBQVUsS0FBSyxNQUFNLDJEQUEyRCxjQUFjLElBQUksZ0JBQWdCLGdCQUFnQix3QkFBd0IsR0FBRyxpQkFBaUIsT0FBTywrREFBK0QsS0FBSyx3QkFBd0IsNkJBQTZCLDJCQUEyQiwyQ0FBMkMsY0FBYyw0Q0FBNEMsc0JBQXNCLHNEQUFzRCxTQUFTLGVBQWUsZUFBZSxlQUFlLHVEQUF1RCxpQkFBaUIsa0JBQWtCLFFBQVEsaUVBQWlFLDZEQUE2RCxrRUFBa0UsMkRBQTJELEtBQUssZ0NBQWdDLG1CQUFtQix1REFBdUQsK0JBQStCLHFCQUFxQiw4Q0FBOEMsZUFBZSxVQUFVLElBQUksdUNBQXVDLG9CQUFvQiwwQkFBMEIs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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQiwwREFBMEQ7QUFDMUQsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzV4RWE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SEFBc0Q7QUFDeEQiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wb2x5ZmlsbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvcG9seWZpbGwtbm9tb2R1bGUnXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCIhZnVuY3Rpb24oKXt2YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e307ZnVuY3Rpb24gZSh0KXt2YXIgZT17ZXhwb3J0czp7fX07cmV0dXJuIHQoZSxlLmV4cG9ydHMpLGUuZXhwb3J0c312YXIgcj1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5NYXRoPT1NYXRoJiZ0fSxuPXIoXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbFRoaXMmJmdsb2JhbFRoaXMpfHxyKFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdyl8fHIoXCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYpfHxyKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0KXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLG89ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKHQpe3JldHVybiEwfX0saT0hbyhmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sMSx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSlbMV19KSxhPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLHU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixzPXtmOnUmJiFhLmNhbGwoezE6Mn0sMSk/ZnVuY3Rpb24odCl7dmFyIGU9dSh0aGlzLHQpO3JldHVybiEhZSYmZS5lbnVtZXJhYmxlfTphfSxjPWZ1bmN0aW9uKHQsZSl7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOmV9fSxmPXt9LnRvU3RyaW5nLGw9ZnVuY3Rpb24odCl7cmV0dXJuIGYuY2FsbCh0KS5zbGljZSg4LC0xKX0saD1cIlwiLnNwbGl0LHA9byhmdW5jdGlvbigpe3JldHVybiFPYmplY3QoXCJ6XCIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApfSk/ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09bCh0KT9oLmNhbGwodCxcIlwiKTpPYmplY3QodCl9Ok9iamVjdCxkPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIrdCk7cmV0dXJuIHR9LHY9ZnVuY3Rpb24odCl7cmV0dXJuIHAoZCh0KSl9LGc9ZnVuY3Rpb24odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH0seT1mdW5jdGlvbih0LGUpe2lmKCFnKHQpKXJldHVybiB0O3ZhciByLG47aWYoZSYmXCJmdW5jdGlvblwiPT10eXBlb2Yocj10LnRvU3RyaW5nKSYmIWcobj1yLmNhbGwodCkpKXJldHVybiBuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKHI9dC52YWx1ZU9mKSYmIWcobj1yLmNhbGwodCkpKXJldHVybiBuO2lmKCFlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihyPXQudG9TdHJpbmcpJiYhZyhuPXIuY2FsbCh0KSkpcmV0dXJuIG47dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfSxtPXt9Lmhhc093blByb3BlcnR5LGI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbS5jYWxsKHQsZSl9LHc9bi5kb2N1bWVudCxTPWcodykmJmcody5jcmVhdGVFbGVtZW50KSxFPWZ1bmN0aW9uKHQpe3JldHVybiBTP3cuY3JlYXRlRWxlbWVudCh0KTp7fX0seD0haSYmIW8oZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KEUoXCJkaXZcIiksXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KSxBPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsTz17ZjppP0E6ZnVuY3Rpb24odCxlKXtpZih0PXYodCksZT15KGUsITApLHgpdHJ5e3JldHVybiBBKHQsZSl9Y2F0Y2godCl7fWlmKGIodCxlKSlyZXR1cm4gYyghcy5mLmNhbGwodCxlKSx0W2VdKX19LFI9ZnVuY3Rpb24odCl7aWYoIWcodCkpdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KStcIiBpcyBub3QgYW4gb2JqZWN0XCIpO3JldHVybiB0fSxqPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxQPXtmOmk/ajpmdW5jdGlvbih0LGUscil7aWYoUih0KSxlPXkoZSwhMCksUihyKSx4KXRyeXtyZXR1cm4gaih0LGUscil9Y2F0Y2godCl7fWlmKFwiZ2V0XCJpbiByfHxcInNldFwiaW4gcil0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZFwiKTtyZXR1cm5cInZhbHVlXCJpbiByJiYodFtlXT1yLnZhbHVlKSx0fX0sST1pP2Z1bmN0aW9uKHQsZSxyKXtyZXR1cm4gUC5mKHQsZSxjKDEscikpfTpmdW5jdGlvbih0LGUscil7cmV0dXJuIHRbZV09cix0fSxUPWZ1bmN0aW9uKHQsZSl7dHJ5e0kobix0LGUpfWNhdGNoKHIpe25bdF09ZX1yZXR1cm4gZX0saz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLEw9bltrXXx8VChrLHt9KSxVPUZ1bmN0aW9uLnRvU3RyaW5nO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEwuaW5zcGVjdFNvdXJjZSYmKEwuaW5zcGVjdFNvdXJjZT1mdW5jdGlvbih0KXtyZXR1cm4gVS5jYWxsKHQpfSk7dmFyIE0sXyxOLEM9TC5pbnNwZWN0U291cmNlLEY9bi5XZWFrTWFwLEI9XCJmdW5jdGlvblwiPT10eXBlb2YgRiYmL25hdGl2ZSBjb2RlLy50ZXN0KEMoRikpLEQ9ITEscT1lKGZ1bmN0aW9uKHQpeyh0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTFt0XXx8KExbdF09dm9pZCAwIT09ZT9lOnt9KX0pKFwidmVyc2lvbnNcIixbXSkucHVzaCh7dmVyc2lvbjpcIjMuNi41XCIsbW9kZTpcImdsb2JhbFwiLGNvcHlyaWdodDpcIsKpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSlcIn0pfSksej0wLFc9TWF0aC5yYW5kb20oKSxLPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiK1N0cmluZyh2b2lkIDA9PT10P1wiXCI6dCkrXCIpX1wiKygrK3orVykudG9TdHJpbmcoMzYpfSxHPXEoXCJrZXlzXCIpLCQ9ZnVuY3Rpb24odCl7cmV0dXJuIEdbdF18fChHW3RdPUsodCkpfSxWPXt9O2lmKEIpe3ZhciBIPW5ldygwLG4uV2Vha01hcCksWD1ILmdldCxZPUguaGFzLEo9SC5zZXQ7TT1mdW5jdGlvbih0LGUpe3JldHVybiBKLmNhbGwoSCx0LGUpLGV9LF89ZnVuY3Rpb24odCl7cmV0dXJuIFguY2FsbChILHQpfHx7fX0sTj1mdW5jdGlvbih0KXtyZXR1cm4gWS5jYWxsKEgsdCl9fWVsc2V7dmFyIFE9JChcInN0YXRlXCIpO1ZbUV09ITAsTT1mdW5jdGlvbih0LGUpe3JldHVybiBJKHQsUSxlKSxlfSxfPWZ1bmN0aW9uKHQpe3JldHVybiBiKHQsUSk/dFtRXTp7fX0sTj1mdW5jdGlvbih0KXtyZXR1cm4gYih0LFEpfX12YXIgWix0dD17c2V0Ok0sZ2V0Ol8saGFzOk4sZW5mb3JjZTpmdW5jdGlvbih0KXtyZXR1cm4gTih0KT9fKHQpOk0odCx7fSl9LGdldHRlckZvcjpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI7aWYoIWcoZSl8fChyPV8oZSkpLnR5cGUhPT10KXRocm93IFR5cGVFcnJvcihcIkluY29tcGF0aWJsZSByZWNlaXZlciwgXCIrdCtcIiByZXF1aXJlZFwiKTtyZXR1cm4gcn19fSxldD1lKGZ1bmN0aW9uKHQpe3ZhciBlPXR0LmdldCxyPXR0LmVuZm9yY2Usbz1TdHJpbmcoU3RyaW5nKS5zcGxpdChcIlN0cmluZ1wiKTsodC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxpLGEpe3ZhciB1PSEhYSYmISFhLnVuc2FmZSxzPSEhYSYmISFhLmVudW1lcmFibGUsYz0hIWEmJiEhYS5ub1RhcmdldEdldDtcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fGIoaSxcIm5hbWVcIil8fEkoaSxcIm5hbWVcIixlKSxyKGkpLnNvdXJjZT1vLmpvaW4oXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTpcIlwiKSksdCE9PW4/KHU/IWMmJnRbZV0mJihzPSEwKTpkZWxldGUgdFtlXSxzP3RbZV09aTpJKHQsZSxpKSk6cz90W2VdPWk6VChlLGkpfSkoRnVuY3Rpb24ucHJvdG90eXBlLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMmJmUodGhpcykuc291cmNlfHxDKHRoaXMpfSl9KSxydD1uLG50PWZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDp2b2lkIDB9LG90PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg8Mj9udChydFt0XSl8fG50KG5bdF0pOnJ0W3RdJiZydFt0XVtlXXx8blt0XSYmblt0XVtlXX0saXQ9TWF0aC5jZWlsLGF0PU1hdGguZmxvb3IsdXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9hdDppdCkodCl9LHN0PU1hdGgubWluLGN0PWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/c3QodXQodCksOTAwNzE5OTI1NDc0MDk5MSk6MH0sZnQ9TWF0aC5tYXgsbHQ9TWF0aC5taW4saHQ9ZnVuY3Rpb24odCxlKXt2YXIgcj11dCh0KTtyZXR1cm4gcjwwP2Z0KHIrZSwwKTpsdChyLGUpfSxwdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyLG4pe3ZhciBvLGk9dihlKSxhPWN0KGkubGVuZ3RoKSx1PWh0KG4sYSk7aWYodCYmciE9cil7Zm9yKDthPnU7KWlmKChvPWlbdSsrXSkhPW8pcmV0dXJuITB9ZWxzZSBmb3IoO2E+dTt1KyspaWYoKHR8fHUgaW4gaSkmJmlbdV09PT1yKXJldHVybiB0fHx1fHwwO3JldHVybiF0JiYtMX19LGR0PXtpbmNsdWRlczpwdCghMCksaW5kZXhPZjpwdCghMSl9LHZ0PWR0LmluZGV4T2YsZ3Q9ZnVuY3Rpb24odCxlKXt2YXIgcixuPXYodCksbz0wLGk9W107Zm9yKHIgaW4gbikhYihWLHIpJiZiKG4scikmJmkucHVzaChyKTtmb3IoO2UubGVuZ3RoPm87KWIobixyPWVbbysrXSkmJih+dnQoaSxyKXx8aS5wdXNoKHIpKTtyZXR1cm4gaX0seXQ9W1wiY29uc3RydWN0b3JcIixcImhhc093blByb3BlcnR5XCIsXCJpc1Byb3RvdHlwZU9mXCIsXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFwidG9Mb2NhbGVTdHJpbmdcIixcInRvU3RyaW5nXCIsXCJ2YWx1ZU9mXCJdLG10PXl0LmNvbmNhdChcImxlbmd0aFwiLFwicHJvdG90eXBlXCIpLGJ0PXtmOk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gZ3QodCxtdCl9fSx3dD17ZjpPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxTdD1vdChcIlJlZmxlY3RcIixcIm93bktleXNcIil8fGZ1bmN0aW9uKHQpe3ZhciBlPWJ0LmYoUih0KSkscj13dC5mO3JldHVybiByP2UuY29uY2F0KHIodCkpOmV9LEV0PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPVN0KGUpLG49UC5mLG89Ty5mLGk9MDtpPHIubGVuZ3RoO2krKyl7dmFyIGE9cltpXTtiKHQsYSl8fG4odCxhLG8oZSxhKSl9fSx4dD0vI3xcXC5wcm90b3R5cGVcXC4vLEF0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9UnRbT3QodCldO3JldHVybiByPT1QdHx8ciE9anQmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP28oZSk6ISFlKX0sT3Q9QXQubm9ybWFsaXplPWZ1bmN0aW9uKHQpe3JldHVybiBTdHJpbmcodCkucmVwbGFjZSh4dCxcIi5cIikudG9Mb3dlckNhc2UoKX0sUnQ9QXQuZGF0YT17fSxqdD1BdC5OQVRJVkU9XCJOXCIsUHQ9QXQuUE9MWUZJTEw9XCJQXCIsSXQ9QXQsVHQ9Ty5mLGt0PWZ1bmN0aW9uKHQsZSl7dmFyIHIsbyxpLGEsdSxzPXQudGFyZ2V0LGM9dC5nbG9iYWwsZj10LnN0YXQ7aWYocj1jP246Zj9uW3NdfHxUKHMse30pOihuW3NdfHx7fSkucHJvdG90eXBlKWZvcihvIGluIGUpe2lmKGE9ZVtvXSxpPXQubm9UYXJnZXRHZXQ/KHU9VHQocixvKSkmJnUudmFsdWU6cltvXSwhSXQoYz9vOnMrKGY/XCIuXCI6XCIjXCIpK28sdC5mb3JjZWQpJiZ2b2lkIDAhPT1pKXtpZih0eXBlb2YgYT09dHlwZW9mIGkpY29udGludWU7RXQoYSxpKX0odC5zaGFtfHxpJiZpLnNoYW0pJiZJKGEsXCJzaGFtXCIsITApLGV0KHIsbyxhLHQpfX0sTHQ9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChkKHQpKX0sVXQ9TWF0aC5taW4sTXQ9W10uY29weVdpdGhpbnx8ZnVuY3Rpb24odCxlKXt2YXIgcj1MdCh0aGlzKSxuPWN0KHIubGVuZ3RoKSxvPWh0KHQsbiksaT1odChlLG4pLGE9YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDAsdT1VdCgodm9pZCAwPT09YT9uOmh0KGEsbikpLWksbi1vKSxzPTE7Zm9yKGk8byYmbzxpK3UmJihzPS0xLGkrPXUtMSxvKz11LTEpO3UtLSA+MDspaSBpbiByP3Jbb109cltpXTpkZWxldGUgcltvXSxvKz1zLGkrPXM7cmV0dXJuIHJ9LF90PSEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyYmIW8oZnVuY3Rpb24oKXtyZXR1cm4hU3RyaW5nKFN5bWJvbCgpKX0pLE50PV90JiYhU3ltYm9sLnNoYW0mJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3IsQ3Q9cShcIndrc1wiKSxGdD1uLlN5bWJvbCxCdD1OdD9GdDpGdCYmRnQud2l0aG91dFNldHRlcnx8SyxEdD1mdW5jdGlvbih0KXtyZXR1cm4gYihDdCx0KXx8KEN0W3RdPV90JiZiKEZ0LHQpP0Z0W3RdOkJ0KFwiU3ltYm9sLlwiK3QpKSxDdFt0XX0scXQ9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKHQpe3JldHVybiBndCh0LHl0KX0senQ9aT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbih0LGUpe1IodCk7Zm9yKHZhciByLG49cXQoZSksbz1uLmxlbmd0aCxpPTA7bz5pOylQLmYodCxyPW5baSsrXSxlW3JdKTtyZXR1cm4gdH0sV3Q9b3QoXCJkb2N1bWVudFwiLFwiZG9jdW1lbnRFbGVtZW50XCIpLEt0PSQoXCJJRV9QUk9UT1wiKSxHdD1mdW5jdGlvbigpe30sJHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCI8c2NyaXB0PlwiK3QrXCI8XFwvc2NyaXB0PlwifSxWdD1mdW5jdGlvbigpe3RyeXtaPWRvY3VtZW50LmRvbWFpbiYmbmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKX1jYXRjaCh0KXt9dmFyIHQsZTtWdD1aP2Z1bmN0aW9uKHQpe3Qud3JpdGUoJHQoXCJcIikpLHQuY2xvc2UoKTt2YXIgZT10LnBhcmVudFdpbmRvdy5PYmplY3Q7cmV0dXJuIHQ9bnVsbCxlfShaKTooKGU9RShcImlmcmFtZVwiKSkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixXdC5hcHBlbmRDaGlsZChlKSxlLnNyYz1TdHJpbmcoXCJqYXZhc2NyaXB0OlwiKSwodD1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQpLm9wZW4oKSx0LndyaXRlKCR0KFwiZG9jdW1lbnQuRj1PYmplY3RcIikpLHQuY2xvc2UoKSx0LkYpO2Zvcih2YXIgcj15dC5sZW5ndGg7ci0tOylkZWxldGUgVnQucHJvdG90eXBlW3l0W3JdXTtyZXR1cm4gVnQoKX07VltLdF09ITA7dmFyIEh0PU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsZSl7dmFyIHI7cmV0dXJuIG51bGwhPT10PyhHdC5wcm90b3R5cGU9Uih0KSxyPW5ldyBHdCxHdC5wcm90b3R5cGU9bnVsbCxyW0t0XT10KTpyPVZ0KCksdm9pZCAwPT09ZT9yOnp0KHIsZSl9LFh0PUR0KFwidW5zY29wYWJsZXNcIiksWXQ9QXJyYXkucHJvdG90eXBlO251bGw9PVl0W1h0XSYmUC5mKFl0LFh0LHtjb25maWd1cmFibGU6ITAsdmFsdWU6SHQobnVsbCl9KTt2YXIgSnQ9ZnVuY3Rpb24odCl7WXRbWHRdW3RdPSEwfTtrdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMH0se2NvcHlXaXRoaW46TXR9KSxKdChcImNvcHlXaXRoaW5cIik7dmFyIFF0PWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KStcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtyZXR1cm4gdH0sWnQ9ZnVuY3Rpb24odCxlLHIpe2lmKFF0KHQpLHZvaWQgMD09PWUpcmV0dXJuIHQ7c3dpdGNoKHIpe2Nhc2UgMDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5jYWxsKGUpfTtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiB0LmNhbGwoZSxyKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihyLG4pe3JldHVybiB0LmNhbGwoZSxyLG4pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHIsbixvKXtyZXR1cm4gdC5jYWxsKGUscixuLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShlLGFyZ3VtZW50cyl9fSx0ZT1GdW5jdGlvbi5jYWxsLGVlPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gWnQodGUsblt0XS5wcm90b3R5cGVbZV0scil9O2VlKFwiQXJyYXlcIixcImNvcHlXaXRoaW5cIiksa3Qoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITB9LHtmaWxsOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1MdCh0aGlzKSxyPWN0KGUubGVuZ3RoKSxuPWFyZ3VtZW50cy5sZW5ndGgsbz1odChuPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxyKSxpPW4+Mj9hcmd1bWVudHNbMl06dm9pZCAwLGE9dm9pZCAwPT09aT9yOmh0KGkscik7YT5vOyllW28rK109dDtyZXR1cm4gZX19KSxKdChcImZpbGxcIiksZWUoXCJBcnJheVwiLFwiZmlsbFwiKTt2YXIgcmU9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT1sKHQpfSxuZT1EdChcInNwZWNpZXNcIiksb2U9ZnVuY3Rpb24odCxlKXt2YXIgcjtyZXR1cm4gcmUodCkmJihcImZ1bmN0aW9uXCIhPXR5cGVvZihyPXQuY29uc3RydWN0b3IpfHxyIT09QXJyYXkmJiFyZShyLnByb3RvdHlwZSk/ZyhyKSYmbnVsbD09PShyPXJbbmVdKSYmKHI9dm9pZCAwKTpyPXZvaWQgMCksbmV3KHZvaWQgMD09PXI/QXJyYXk6cikoMD09PWU/MDplKX0saWU9W10ucHVzaCxhZT1mdW5jdGlvbih0KXt2YXIgZT0xPT10LHI9Mj09dCxuPTM9PXQsbz00PT10LGk9Nj09dCxhPTU9PXR8fGk7cmV0dXJuIGZ1bmN0aW9uKHUscyxjLGYpe2Zvcih2YXIgbCxoLGQ9THQodSksdj1wKGQpLGc9WnQocyxjLDMpLHk9Y3Qodi5sZW5ndGgpLG09MCxiPWZ8fG9lLHc9ZT9iKHUseSk6cj9iKHUsMCk6dm9pZCAwO3k+bTttKyspaWYoKGF8fG0gaW4gdikmJihoPWcobD12W21dLG0sZCksdCkpaWYoZSl3W21dPWg7ZWxzZSBpZihoKXN3aXRjaCh0KXtjYXNlIDM6cmV0dXJuITA7Y2FzZSA1OnJldHVybiBsO2Nhc2UgNjpyZXR1cm4gbTtjYXNlIDI6aWUuY2FsbCh3LGwpfWVsc2UgaWYobylyZXR1cm4hMTtyZXR1cm4gaT8tMTpufHxvP286d319LHVlPXtmb3JFYWNoOmFlKDApLG1hcDphZSgxKSxmaWx0ZXI6YWUoMiksc29tZTphZSgzKSxldmVyeTphZSg0KSxmaW5kOmFlKDUpLGZpbmRJbmRleDphZSg2KX0sc2U9T2JqZWN0LmRlZmluZVByb3BlcnR5LGNlPXt9LGZlPWZ1bmN0aW9uKHQpe3Rocm93IHR9LGxlPWZ1bmN0aW9uKHQsZSl7aWYoYihjZSx0KSlyZXR1cm4gY2VbdF07ZXx8KGU9e30pO3ZhciByPVtdW3RdLG49ISFiKGUsXCJBQ0NFU1NPUlNcIikmJmUuQUNDRVNTT1JTLGE9YihlLDApP2VbMF06ZmUsdT1iKGUsMSk/ZVsxXTp2b2lkIDA7cmV0dXJuIGNlW3RdPSEhciYmIW8oZnVuY3Rpb24oKXtpZihuJiYhaSlyZXR1cm4hMDt2YXIgdD17bGVuZ3RoOi0xfTtuP3NlKHQsMSx7ZW51bWVyYWJsZTohMCxnZXQ6ZmV9KTp0WzFdPTEsci5jYWxsKHQsYSx1KX0pfSxoZT11ZS5maW5kLHBlPVwiZmluZFwiLGRlPSEwLHZlPWxlKHBlKTtwZSBpbltdJiZBcnJheSgxKS5maW5kKGZ1bmN0aW9uKCl7ZGU9ITF9KSxrdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6ZGV8fCF2ZX0se2ZpbmQ6ZnVuY3Rpb24odCl7cmV0dXJuIGhlKHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSksSnQocGUpLGVlKFwiQXJyYXlcIixcImZpbmRcIik7dmFyIGdlPXVlLmZpbmRJbmRleCx5ZT1cImZpbmRJbmRleFwiLG1lPSEwLGJlPWxlKHllKTt5ZSBpbltdJiZBcnJheSgxKS5maW5kSW5kZXgoZnVuY3Rpb24oKXttZT0hMX0pLGt0KHt0YXJnZXQ6XCJBcnJheVwiLHByb3RvOiEwLGZvcmNlZDptZXx8IWJlfSx7ZmluZEluZGV4OmZ1bmN0aW9uKHQpe3JldHVybiBnZSh0aGlzLHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLEp0KHllKSxlZShcIkFycmF5XCIsXCJmaW5kSW5kZXhcIik7dmFyIHdlPWZ1bmN0aW9uIHQoZSxyLG4sbyxpLGEsdSxzKXtmb3IodmFyIGMsZj1pLGw9MCxoPSEhdSYmWnQodSxzLDMpO2w8bzspe2lmKGwgaW4gbil7aWYoYz1oP2gobltsXSxsLHIpOm5bbF0sYT4wJiZyZShjKSlmPXQoZSxyLGMsY3QoYy5sZW5ndGgpLGYsYS0xKS0xO2Vsc2V7aWYoZj49OTAwNzE5OTI1NDc0MDk5MSl0aHJvdyBUeXBlRXJyb3IoXCJFeGNlZWQgdGhlIGFjY2VwdGFibGUgYXJyYXkgbGVuZ3RoXCIpO2VbZl09Y31mKyt9bCsrfXJldHVybiBmfTtrdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMH0se2ZsYXRNYXA6ZnVuY3Rpb24odCl7dmFyIGUscj1MdCh0aGlzKSxuPWN0KHIubGVuZ3RoKTtyZXR1cm4gUXQodCksKGU9b2UociwwKSkubGVuZ3RoPXdlKGUscixyLG4sMCwxLHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApLGV9fSksSnQoXCJmbGF0TWFwXCIpLGVlKFwiQXJyYXlcIixcImZsYXRNYXBcIiksa3Qoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITB9LHtmbGF0OmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06dm9pZCAwLGU9THQodGhpcykscj1jdChlLmxlbmd0aCksbj1vZShlLDApO3JldHVybiBuLmxlbmd0aD13ZShuLGUsZSxyLDAsdm9pZCAwPT09dD8xOnV0KHQpKSxufX0pLEp0KFwiZmxhdFwiKSxlZShcIkFycmF5XCIsXCJmbGF0XCIpO3ZhciBTZSxFZSx4ZSxBZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXt2YXIgbixvLGk9U3RyaW5nKGQoZSkpLGE9dXQociksdT1pLmxlbmd0aDtyZXR1cm4gYTwwfHxhPj11P3Q/XCJcIjp2b2lkIDA6KG49aS5jaGFyQ29kZUF0KGEpKTw1NTI5Nnx8bj41NjMxOXx8YSsxPT09dXx8KG89aS5jaGFyQ29kZUF0KGErMSkpPDU2MzIwfHxvPjU3MzQzP3Q/aS5jaGFyQXQoYSk6bjp0P2kuc2xpY2UoYSxhKzIpOm8tNTYzMjArKG4tNTUyOTY8PDEwKSs2NTUzNn19LE9lPXtjb2RlQXQ6QWUoITEpLGNoYXJBdDpBZSghMCl9LFJlPSFvKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC5wcm90b3R5cGUuY29uc3RydWN0b3I9bnVsbCxPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IHQpIT09dC5wcm90b3R5cGV9KSxqZT0kKFwiSUVfUFJPVE9cIiksUGU9T2JqZWN0LnByb3RvdHlwZSxJZT1SZT9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQ9THQodCksYih0LGplKT90W2plXTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnN0cnVjdG9yJiZ0IGluc3RhbmNlb2YgdC5jb25zdHJ1Y3Rvcj90LmNvbnN0cnVjdG9yLnByb3RvdHlwZTp0IGluc3RhbmNlb2YgT2JqZWN0P1BlOm51bGx9LFRlPUR0KFwiaXRlcmF0b3JcIiksa2U9ITE7W10ua2V5cyYmKFwibmV4dFwiaW4oeGU9W10ua2V5cygpKT8oRWU9SWUoSWUoeGUpKSkhPT1PYmplY3QucHJvdG90eXBlJiYoU2U9RWUpOmtlPSEwKSxudWxsPT1TZSYmKFNlPXt9KSxiKFNlLFRlKXx8SShTZSxUZSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSk7dmFyIExlPXtJdGVyYXRvclByb3RvdHlwZTpTZSxCVUdHWV9TQUZBUklfSVRFUkFUT1JTOmtlfSxVZT1QLmYsTWU9RHQoXCJ0b1N0cmluZ1RhZ1wiKSxfZT1mdW5jdGlvbih0LGUscil7dCYmIWIodD1yP3Q6dC5wcm90b3R5cGUsTWUpJiZVZSh0LE1lLHtjb25maWd1cmFibGU6ITAsdmFsdWU6ZX0pfSxOZT17fSxDZT1MZS5JdGVyYXRvclByb3RvdHlwZSxGZT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxCZT1mdW5jdGlvbih0LGUscil7dmFyIG49ZStcIiBJdGVyYXRvclwiO3JldHVybiB0LnByb3RvdHlwZT1IdChDZSx7bmV4dDpjKDEscil9KSxfZSh0LG4sITEpLE5lW25dPUZlLHR9LERlPWZ1bmN0aW9uKHQpe2lmKCFnKHQpJiZudWxsIT09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIrU3RyaW5nKHQpK1wiIGFzIGEgcHJvdG90eXBlXCIpO3JldHVybiB0fSxxZT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fChcIl9fcHJvdG9fX1wiaW57fT9mdW5jdGlvbigpe3ZhciB0LGU9ITEscj17fTt0cnl7KHQ9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLFwiX19wcm90b19fXCIpLnNldCkuY2FsbChyLFtdKSxlPXIgaW5zdGFuY2VvZiBBcnJheX1jYXRjaCh0KXt9cmV0dXJuIGZ1bmN0aW9uKHIsbil7cmV0dXJuIFIociksRGUobiksZT90LmNhbGwocixuKTpyLl9fcHJvdG9fXz1uLHJ9fSgpOnZvaWQgMCksemU9TGUuSXRlcmF0b3JQcm90b3R5cGUsV2U9TGUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUyxLZT1EdChcIml0ZXJhdG9yXCIpLEdlPVwia2V5c1wiLCRlPVwidmFsdWVzXCIsVmU9XCJlbnRyaWVzXCIsSGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sWGU9ZnVuY3Rpb24odCxlLHIsbixvLGksYSl7QmUocixlLG4pO3ZhciB1LHMsYyxmPWZ1bmN0aW9uKHQpe2lmKHQ9PT1vJiZ2KXJldHVybiB2O2lmKCFXZSYmdCBpbiBwKXJldHVybiBwW3RdO3N3aXRjaCh0KXtjYXNlIEdlOmNhc2UgJGU6Y2FzZSBWZTpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMpfX0sbD1lK1wiIEl0ZXJhdG9yXCIsaD0hMSxwPXQucHJvdG90eXBlLGQ9cFtLZV18fHBbXCJAQGl0ZXJhdG9yXCJdfHxvJiZwW29dLHY9IVdlJiZkfHxmKG8pLGc9XCJBcnJheVwiPT1lJiZwLmVudHJpZXN8fGQ7aWYoZyYmKHU9SWUoZy5jYWxsKG5ldyB0KSksemUhPT1PYmplY3QucHJvdG90eXBlJiZ1Lm5leHQmJihJZSh1KSE9PXplJiYocWU/cWUodSx6ZSk6XCJmdW5jdGlvblwiIT10eXBlb2YgdVtLZV0mJkkodSxLZSxIZSkpLF9lKHUsbCwhMCkpKSxvPT0kZSYmZCYmZC5uYW1lIT09JGUmJihoPSEwLHY9ZnVuY3Rpb24oKXtyZXR1cm4gZC5jYWxsKHRoaXMpfSkscFtLZV0hPT12JiZJKHAsS2UsdiksTmVbZV09dixvKWlmKHM9e3ZhbHVlczpmKCRlKSxrZXlzOmk/djpmKEdlKSxlbnRyaWVzOmYoVmUpfSxhKWZvcihjIGluIHMpKFdlfHxofHwhKGMgaW4gcCkpJiZldChwLGMsc1tjXSk7ZWxzZSBrdCh7dGFyZ2V0OmUscHJvdG86ITAsZm9yY2VkOldlfHxofSxzKTtyZXR1cm4gc30sWWU9T2UuY2hhckF0LEplPVwiU3RyaW5nIEl0ZXJhdG9yXCIsUWU9dHQuc2V0LFplPXR0LmdldHRlckZvcihKZSk7WGUoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24odCl7UWUodGhpcyx7dHlwZTpKZSxzdHJpbmc6U3RyaW5nKHQpLGluZGV4OjB9KX0sZnVuY3Rpb24oKXt2YXIgdCxlPVplKHRoaXMpLHI9ZS5zdHJpbmcsbj1lLmluZGV4O3JldHVybiBuPj1yLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PVllKHIsbiksZS5pbmRleCs9dC5sZW5ndGgse3ZhbHVlOnQsZG9uZTohMX0pfSk7dmFyIHRyPWZ1bmN0aW9uKHQsZSxyLG4pe3RyeXtyZXR1cm4gbj9lKFIocilbMF0sclsxXSk6ZShyKX1jYXRjaChlKXt2YXIgbz10LnJldHVybjt0aHJvdyB2b2lkIDAhPT1vJiZSKG8uY2FsbCh0KSksZX19LGVyPUR0KFwiaXRlcmF0b3JcIikscnI9QXJyYXkucHJvdG90eXBlLG5yPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10JiYoTmUuQXJyYXk9PT10fHxycltlcl09PT10KX0sb3I9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPXkoZSk7biBpbiB0P1AuZih0LG4sYygwLHIpKTp0W25dPXJ9LGlyPXt9O2lyW0R0KFwidG9TdHJpbmdUYWdcIildPVwielwiO3ZhciBhcj1cIltvYmplY3Qgel1cIj09PVN0cmluZyhpciksdXI9RHQoXCJ0b1N0cmluZ1RhZ1wiKSxzcj1cIkFyZ3VtZW50c1wiPT1sKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSksY3I9YXI/bDpmdW5jdGlvbih0KXt2YXIgZSxyLG47cmV0dXJuIHZvaWQgMD09PXQ/XCJVbmRlZmluZWRcIjpudWxsPT09dD9cIk51bGxcIjpcInN0cmluZ1wiPT10eXBlb2Yocj1mdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gdFtlXX1jYXRjaCh0KXt9fShlPU9iamVjdCh0KSx1cikpP3I6c3I/bChlKTpcIk9iamVjdFwiPT0obj1sKGUpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5jYWxsZWU/XCJBcmd1bWVudHNcIjpufSxmcj1EdChcIml0ZXJhdG9yXCIpLGxyPWZ1bmN0aW9uKHQpe2lmKG51bGwhPXQpcmV0dXJuIHRbZnJdfHx0W1wiQEBpdGVyYXRvclwiXXx8TmVbY3IodCldfSxocj1mdW5jdGlvbih0KXt2YXIgZSxyLG4sbyxpLGEsdT1MdCh0KSxzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXM/dGhpczpBcnJheSxjPWFyZ3VtZW50cy5sZW5ndGgsZj1jPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxsPXZvaWQgMCE9PWYsaD1scih1KSxwPTA7aWYobCYmKGY9WnQoZixjPjI/YXJndW1lbnRzWzJdOnZvaWQgMCwyKSksbnVsbD09aHx8cz09QXJyYXkmJm5yKGgpKWZvcihyPW5ldyBzKGU9Y3QodS5sZW5ndGgpKTtlPnA7cCsrKWE9bD9mKHVbcF0scCk6dVtwXSxvcihyLHAsYSk7ZWxzZSBmb3IoaT0obz1oLmNhbGwodSkpLm5leHQscj1uZXcgczshKG49aS5jYWxsKG8pKS5kb25lO3ArKylhPWw/dHIobyxmLFtuLnZhbHVlLHBdLCEwKTpuLnZhbHVlLG9yKHIscCxhKTtyZXR1cm4gci5sZW5ndGg9cCxyfSxwcj1EdChcIml0ZXJhdG9yXCIpLGRyPSExO3RyeXt2YXIgdnI9MCxncj17bmV4dDpmdW5jdGlvbigpe3JldHVybntkb25lOiEhdnIrK319LHJldHVybjpmdW5jdGlvbigpe2RyPSEwfX07Z3JbcHJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LEFycmF5LmZyb20oZ3IsZnVuY3Rpb24oKXt0aHJvdyAyfSl9Y2F0Y2godCl7fXZhciB5cj1mdW5jdGlvbih0LGUpe2lmKCFlJiYhZHIpcmV0dXJuITE7dmFyIHI9ITE7dHJ5e3ZhciBuPXt9O25bcHJdPWZ1bmN0aW9uKCl7cmV0dXJue25leHQ6ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTpyPSEwfX19fSx0KG4pfWNhdGNoKHQpe31yZXR1cm4gcn0sbXI9IXlyKGZ1bmN0aW9uKHQpe0FycmF5LmZyb20odCl9KTtrdCh7dGFyZ2V0OlwiQXJyYXlcIixzdGF0OiEwLGZvcmNlZDptcn0se2Zyb206aHJ9KTt2YXIgYnI9ZHQuaW5jbHVkZXMsd3I9bGUoXCJpbmRleE9mXCIse0FDQ0VTU09SUzohMCwxOjB9KTtrdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6IXdyfSx7aW5jbHVkZXM6ZnVuY3Rpb24odCl7cmV0dXJuIGJyKHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSksSnQoXCJpbmNsdWRlc1wiKSxlZShcIkFycmF5XCIsXCJpbmNsdWRlc1wiKTt2YXIgU3I9XCJBcnJheSBJdGVyYXRvclwiLEVyPXR0LnNldCx4cj10dC5nZXR0ZXJGb3IoU3IpLEFyPVhlKEFycmF5LFwiQXJyYXlcIixmdW5jdGlvbih0LGUpe0VyKHRoaXMse3R5cGU6U3IsdGFyZ2V0OnYodCksaW5kZXg6MCxraW5kOmV9KX0sZnVuY3Rpb24oKXt2YXIgdD14cih0aGlzKSxlPXQudGFyZ2V0LHI9dC5raW5kLG49dC5pbmRleCsrO3JldHVybiFlfHxuPj1lLmxlbmd0aD8odC50YXJnZXQ9dm9pZCAwLHt2YWx1ZTp2b2lkIDAsZG9uZTohMH0pOlwia2V5c1wiPT1yP3t2YWx1ZTpuLGRvbmU6ITF9OlwidmFsdWVzXCI9PXI/e3ZhbHVlOmVbbl0sZG9uZTohMX06e3ZhbHVlOltuLGVbbl1dLGRvbmU6ITF9fSxcInZhbHVlc1wiKTtOZS5Bcmd1bWVudHM9TmUuQXJyYXksSnQoXCJrZXlzXCIpLEp0KFwidmFsdWVzXCIpLEp0KFwiZW50cmllc1wiKSxlZShcIkFycmF5XCIsXCJ2YWx1ZXNcIik7dmFyIE9yPW8oZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiEoQXJyYXkub2YuY2FsbCh0KWluc3RhbmNlb2YgdCl9KTtrdCh7dGFyZ2V0OlwiQXJyYXlcIixzdGF0OiEwLGZvcmNlZDpPcn0se29mOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT1hcmd1bWVudHMubGVuZ3RoLHI9bmV3KFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXM/dGhpczpBcnJheSkoZSk7ZT50OylvcihyLHQsYXJndW1lbnRzW3QrK10pO3JldHVybiByLmxlbmd0aD1lLHJ9fSk7dmFyIFJyPUR0KFwiaGFzSW5zdGFuY2VcIiksanI9RnVuY3Rpb24ucHJvdG90eXBlO1JyIGluIGpyfHxQLmYoanIsUnIse3ZhbHVlOmZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXN8fCFnKHQpKXJldHVybiExO2lmKCFnKHRoaXMucHJvdG90eXBlKSlyZXR1cm4gdCBpbnN0YW5jZW9mIHRoaXM7Zm9yKDt0PUllKHQpOylpZih0aGlzLnByb3RvdHlwZT09PXQpcmV0dXJuITA7cmV0dXJuITF9fSksRHQoXCJoYXNJbnN0YW5jZVwiKTt2YXIgUHI9RnVuY3Rpb24ucHJvdG90eXBlLElyPVByLnRvU3RyaW5nLFRyPS9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLyxrcj1cIm5hbWVcIjtpJiYhKGtyIGluIFByKSYmKDAsUC5mKShQcixrcix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3RyeXtyZXR1cm4gSXIuY2FsbCh0aGlzKS5tYXRjaChUcilbMV19Y2F0Y2godCl7cmV0dXJuXCJcIn19fSk7dmFyIExyPSFvKGZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSl9KSxVcj1lKGZ1bmN0aW9uKHQpe3ZhciBlPVAuZixyPUsoXCJtZXRhXCIpLG49MCxvPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LGk9ZnVuY3Rpb24odCl7ZSh0LHIse3ZhbHVlOntvYmplY3RJRDpcIk9cIisgKytuLHdlYWtEYXRhOnt9fX0pfSxhPXQuZXhwb3J0cz17UkVRVUlSRUQ6ITEsZmFzdEtleTpmdW5jdGlvbih0LGUpe2lmKCFnKHQpKXJldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6KFwic3RyaW5nXCI9PXR5cGVvZiB0P1wiU1wiOlwiUFwiKSt0O2lmKCFiKHQscikpe2lmKCFvKHQpKXJldHVyblwiRlwiO2lmKCFlKXJldHVyblwiRVwiO2kodCl9cmV0dXJuIHRbcl0ub2JqZWN0SUR9LGdldFdlYWtEYXRhOmZ1bmN0aW9uKHQsZSl7aWYoIWIodCxyKSl7aWYoIW8odCkpcmV0dXJuITA7aWYoIWUpcmV0dXJuITE7aSh0KX1yZXR1cm4gdFtyXS53ZWFrRGF0YX0sb25GcmVlemU6ZnVuY3Rpb24odCl7cmV0dXJuIExyJiZhLlJFUVVJUkVEJiZvKHQpJiYhYih0LHIpJiZpKHQpLHR9fTtWW3JdPSEwfSksTXI9ZShmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0LGUpe3RoaXMuc3RvcHBlZD10LHRoaXMucmVzdWx0PWV9Oyh0LmV4cG9ydHM9ZnVuY3Rpb24odCxyLG4sbyxpKXt2YXIgYSx1LHMsYyxmLGwsaCxwPVp0KHIsbixvPzI6MSk7aWYoaSlhPXQ7ZWxzZXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZih1PWxyKHQpKSl0aHJvdyBUeXBlRXJyb3IoXCJUYXJnZXQgaXMgbm90IGl0ZXJhYmxlXCIpO2lmKG5yKHUpKXtmb3Iocz0wLGM9Y3QodC5sZW5ndGgpO2M+cztzKyspaWYoKGY9bz9wKFIoaD10W3NdKVswXSxoWzFdKTpwKHRbc10pKSYmZiBpbnN0YW5jZW9mIGUpcmV0dXJuIGY7cmV0dXJuIG5ldyBlKCExKX1hPXUuY2FsbCh0KX1mb3IobD1hLm5leHQ7IShoPWwuY2FsbChhKSkuZG9uZTspaWYoXCJvYmplY3RcIj09dHlwZW9mKGY9dHIoYSxwLGgudmFsdWUsbykpJiZmJiZmIGluc3RhbmNlb2YgZSlyZXR1cm4gZjtyZXR1cm4gbmV3IGUoITEpfSkuc3RvcD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGUoITAsdCl9fSksX3I9ZnVuY3Rpb24odCxlLHIpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IFR5cGVFcnJvcihcIkluY29ycmVjdCBcIisocj9yK1wiIFwiOlwiXCIpK1wiaW52b2NhdGlvblwiKTtyZXR1cm4gdH0sTnI9ZnVuY3Rpb24odCxlLHIpe3ZhciBuLG87cmV0dXJuIHFlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuPWUuY29uc3RydWN0b3IpJiZuIT09ciYmZyhvPW4ucHJvdG90eXBlKSYmbyE9PXIucHJvdG90eXBlJiZxZSh0LG8pLHR9LENyPWZ1bmN0aW9uKHQsZSxyKXt2YXIgaT0tMSE9PXQuaW5kZXhPZihcIk1hcFwiKSxhPS0xIT09dC5pbmRleE9mKFwiV2Vha1wiKSx1PWk/XCJzZXRcIjpcImFkZFwiLHM9blt0XSxjPXMmJnMucHJvdG90eXBlLGY9cyxsPXt9LGg9ZnVuY3Rpb24odCl7dmFyIGU9Y1t0XTtldChjLHQsXCJhZGRcIj09dD9mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHRoaXMsMD09PXQ/MDp0KSx0aGlzfTpcImRlbGV0ZVwiPT10P2Z1bmN0aW9uKHQpe3JldHVybiEoYSYmIWcodCkpJiZlLmNhbGwodGhpcywwPT09dD8wOnQpfTpcImdldFwiPT10P2Z1bmN0aW9uKHQpe3JldHVybiBhJiYhZyh0KT92b2lkIDA6ZS5jYWxsKHRoaXMsMD09PXQ/MDp0KX06XCJoYXNcIj09dD9mdW5jdGlvbih0KXtyZXR1cm4hKGEmJiFnKHQpKSYmZS5jYWxsKHRoaXMsMD09PXQ/MDp0KX06ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHRoaXMsMD09PXQ/MDp0LHIpLHRoaXN9KX07aWYoSXQodCxcImZ1bmN0aW9uXCIhPXR5cGVvZiBzfHwhKGF8fGMuZm9yRWFjaCYmIW8oZnVuY3Rpb24oKXsobmV3IHMpLmVudHJpZXMoKS5uZXh0KCl9KSkpKWY9ci5nZXRDb25zdHJ1Y3RvcihlLHQsaSx1KSxVci5SRVFVSVJFRD0hMDtlbHNlIGlmKEl0KHQsITApKXt2YXIgcD1uZXcgZixkPXBbdV0oYT97fTotMCwxKSE9cCx2PW8oZnVuY3Rpb24oKXtwLmhhcygxKX0pLHk9eXIoZnVuY3Rpb24odCl7bmV3IHModCl9KSxtPSFhJiZvKGZ1bmN0aW9uKCl7Zm9yKHZhciB0PW5ldyBzLGU9NTtlLS07KXRbdV0oZSxlKTtyZXR1cm4hdC5oYXMoLTApfSk7eXx8KChmPWUoZnVuY3Rpb24oZSxyKXtfcihlLGYsdCk7dmFyIG49TnIobmV3IHMsZSxmKTtyZXR1cm4gbnVsbCE9ciYmTXIocixuW3VdLG4saSksbn0pKS5wcm90b3R5cGU9YyxjLmNvbnN0cnVjdG9yPWYpLCh2fHxtKSYmKGgoXCJkZWxldGVcIiksaChcImhhc1wiKSxpJiZoKFwiZ2V0XCIpKSwobXx8ZCkmJmgodSksYSYmYy5jbGVhciYmZGVsZXRlIGMuY2xlYXJ9cmV0dXJuIGxbdF09ZixrdCh7Z2xvYmFsOiEwLGZvcmNlZDpmIT1zfSxsKSxfZShmLHQpLGF8fHIuc2V0U3Ryb25nKGYsdCxpKSxmfSxGcj1mdW5jdGlvbih0LGUscil7Zm9yKHZhciBuIGluIGUpZXQodCxuLGVbbl0scik7cmV0dXJuIHR9LEJyPUR0KFwic3BlY2llc1wiKSxEcj1mdW5jdGlvbih0KXt2YXIgZT1vdCh0KTtpJiZlJiYhZVtCcl0mJigwLFAuZikoZSxCcix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzfX0pfSxxcj1QLmYsenI9VXIuZmFzdEtleSxXcj10dC5zZXQsS3I9dHQuZ2V0dGVyRm9yLEdyPXtnZXRDb25zdHJ1Y3RvcjpmdW5jdGlvbih0LGUscixuKXt2YXIgbz10KGZ1bmN0aW9uKHQsYSl7X3IodCxvLGUpLFdyKHQse3R5cGU6ZSxpbmRleDpIdChudWxsKSxmaXJzdDp2b2lkIDAsbGFzdDp2b2lkIDAsc2l6ZTowfSksaXx8KHQuc2l6ZT0wKSxudWxsIT1hJiZNcihhLHRbbl0sdCxyKX0pLGE9S3IoZSksdT1mdW5jdGlvbih0LGUscil7dmFyIG4sbyx1PWEodCksYz1zKHQsZSk7cmV0dXJuIGM/Yy52YWx1ZT1yOih1Lmxhc3Q9Yz17aW5kZXg6bz16cihlLCEwKSxrZXk6ZSx2YWx1ZTpyLHByZXZpb3VzOm49dS5sYXN0LG5leHQ6dm9pZCAwLHJlbW92ZWQ6ITF9LHUuZmlyc3R8fCh1LmZpcnN0PWMpLG4mJihuLm5leHQ9YyksaT91LnNpemUrKzp0LnNpemUrKyxcIkZcIiE9PW8mJih1LmluZGV4W29dPWMpKSx0fSxzPWZ1bmN0aW9uKHQsZSl7dmFyIHIsbj1hKHQpLG89enIoZSk7aWYoXCJGXCIhPT1vKXJldHVybiBuLmluZGV4W29dO2ZvcihyPW4uZmlyc3Q7cjtyPXIubmV4dClpZihyLmtleT09ZSlyZXR1cm4gcn07cmV0dXJuIEZyKG8ucHJvdG90eXBlLHtjbGVhcjpmdW5jdGlvbigpe2Zvcih2YXIgdD1hKHRoaXMpLGU9dC5pbmRleCxyPXQuZmlyc3Q7cjspci5yZW1vdmVkPSEwLHIucHJldmlvdXMmJihyLnByZXZpb3VzPXIucHJldmlvdXMubmV4dD12b2lkIDApLGRlbGV0ZSBlW3IuaW5kZXhdLHI9ci5uZXh0O3QuZmlyc3Q9dC5sYXN0PXZvaWQgMCxpP3Quc2l6ZT0wOnRoaXMuc2l6ZT0wfSxkZWxldGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxyPWEoZSksbj1zKGUsdCk7aWYobil7dmFyIG89bi5uZXh0LHU9bi5wcmV2aW91cztkZWxldGUgci5pbmRleFtuLmluZGV4XSxuLnJlbW92ZWQ9ITAsdSYmKHUubmV4dD1vKSxvJiYoby5wcmV2aW91cz11KSxyLmZpcnN0PT1uJiYoci5maXJzdD1vKSxyLmxhc3Q9PW4mJihyLmxhc3Q9dSksaT9yLnNpemUtLTplLnNpemUtLX1yZXR1cm4hIW59LGZvckVhY2g6ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9YSh0aGlzKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7ZT1lP2UubmV4dDpyLmZpcnN0Oylmb3IobihlLnZhbHVlLGUua2V5LHRoaXMpO2UmJmUucmVtb3ZlZDspZT1lLnByZXZpb3VzfSxoYXM6ZnVuY3Rpb24odCl7cmV0dXJuISFzKHRoaXMsdCl9fSksRnIoby5wcm90b3R5cGUscj97Z2V0OmZ1bmN0aW9uKHQpe3ZhciBlPXModGhpcyx0KTtyZXR1cm4gZSYmZS52YWx1ZX0sc2V0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHUodGhpcywwPT09dD8wOnQsZSl9fTp7YWRkOmZ1bmN0aW9uKHQpe3JldHVybiB1KHRoaXMsdD0wPT09dD8wOnQsdCl9fSksaSYmcXIoby5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBhKHRoaXMpLnNpemV9fSksb30sc2V0U3Ryb25nOmZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1lK1wiIEl0ZXJhdG9yXCIsbz1LcihlKSxpPUtyKG4pO1hlKHQsZSxmdW5jdGlvbih0LGUpe1dyKHRoaXMse3R5cGU6bix0YXJnZXQ6dCxzdGF0ZTpvKHQpLGtpbmQ6ZSxsYXN0OnZvaWQgMH0pfSxmdW5jdGlvbigpe2Zvcih2YXIgdD1pKHRoaXMpLGU9dC5raW5kLHI9dC5sYXN0O3ImJnIucmVtb3ZlZDspcj1yLnByZXZpb3VzO3JldHVybiB0LnRhcmdldCYmKHQubGFzdD1yPXI/ci5uZXh0OnQuc3RhdGUuZmlyc3QpP1wia2V5c1wiPT1lP3t2YWx1ZTpyLmtleSxkb25lOiExfTpcInZhbHVlc1wiPT1lP3t2YWx1ZTpyLnZhbHVlLGRvbmU6ITF9Ont2YWx1ZTpbci5rZXksci52YWx1ZV0sZG9uZTohMX06KHQudGFyZ2V0PXZvaWQgMCx7dmFsdWU6dm9pZCAwLGRvbmU6ITB9KX0scj9cImVudHJpZXNcIjpcInZhbHVlc1wiLCFyLCEwKSxEcihlKX19LCRyPUNyKFwiTWFwXCIsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQodGhpcyxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1swXTp2b2lkIDApfX0sR3IpO2FyfHxldChPYmplY3QucHJvdG90eXBlLFwidG9TdHJpbmdcIixhcj97fS50b1N0cmluZzpmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBcIitjcih0aGlzKStcIl1cIn0se3Vuc2FmZTohMH0pO3ZhciBWcj17Q1NTUnVsZUxpc3Q6MCxDU1NTdHlsZURlY2xhcmF0aW9uOjAsQ1NTVmFsdWVMaXN0OjAsQ2xpZW50UmVjdExpc3Q6MCxET01SZWN0TGlzdDowLERPTVN0cmluZ0xpc3Q6MCxET01Ub2tlbkxpc3Q6MSxEYXRhVHJhbnNmZXJJdGVtTGlzdDowLEZpbGVMaXN0OjAsSFRNTEFsbENvbGxlY3Rpb246MCxIVE1MQ29sbGVjdGlvbjowLEhUTUxGb3JtRWxlbWVudDowLEhUTUxTZWxlY3RFbGVtZW50OjAsTWVkaWFMaXN0OjAsTWltZVR5cGVBcnJheTowLE5hbWVkTm9kZU1hcDowLE5vZGVMaXN0OjEsUGFpbnRSZXF1ZXN0TGlzdDowLFBsdWdpbjowLFBsdWdpbkFycmF5OjAsU1ZHTGVuZ3RoTGlzdDowLFNWR051bWJlckxpc3Q6MCxTVkdQYXRoU2VnTGlzdDowLFNWR1BvaW50TGlzdDowLFNWR1N0cmluZ0xpc3Q6MCxTVkdUcmFuc2Zvcm1MaXN0OjAsU291cmNlQnVmZmVyTGlzdDowLFN0eWxlU2hlZXRMaXN0OjAsVGV4dFRyYWNrQ3VlTGlzdDowLFRleHRUcmFja0xpc3Q6MCxUb3VjaExpc3Q6MH0sSHI9RHQoXCJpdGVyYXRvclwiKSxYcj1EdChcInRvU3RyaW5nVGFnXCIpLFlyPUFyLnZhbHVlcztmb3IodmFyIEpyIGluIFZyKXt2YXIgUXI9bltKcl0sWnI9UXImJlFyLnByb3RvdHlwZTtpZihacil7aWYoWnJbSHJdIT09WXIpdHJ5e0koWnIsSHIsWXIpfWNhdGNoKHQpe1pyW0hyXT1Zcn1pZihacltYcl18fEkoWnIsWHIsSnIpLFZyW0pyXSlmb3IodmFyIHRuIGluIEFyKWlmKFpyW3RuXSE9PUFyW3RuXSl0cnl7SShacix0bixBclt0bl0pfWNhdGNoKHQpe1pyW3RuXT1Bclt0bl19fX12YXIgZW49ZnVuY3Rpb24odCl7dmFyIGUscixuLG8saT1hcmd1bWVudHMubGVuZ3RoLGE9aT4xP2FyZ3VtZW50c1sxXTp2b2lkIDA7cmV0dXJuIFF0KHRoaXMpLChlPXZvaWQgMCE9PWEpJiZRdChhKSxudWxsPT10P25ldyB0aGlzOihyPVtdLGU/KG49MCxvPVp0KGEsaT4yP2FyZ3VtZW50c1syXTp2b2lkIDAsMiksTXIodCxmdW5jdGlvbih0KXtyLnB1c2gobyh0LG4rKykpfSkpOk1yKHQsci5wdXNoLHIpLG5ldyB0aGlzKHIpKX07a3Qoe3RhcmdldDpcIk1hcFwiLHN0YXQ6ITB9LHtmcm9tOmVufSk7dmFyIHJuPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCk7dC0tOyllW3RdPWFyZ3VtZW50c1t0XTtyZXR1cm4gbmV3IHRoaXMoZSl9O2t0KHt0YXJnZXQ6XCJNYXBcIixzdGF0OiEwfSx7b2Y6cm59KTt2YXIgbm49ZnVuY3Rpb24oKXtmb3IodmFyIHQsZT1SKHRoaXMpLHI9UXQoZS5kZWxldGUpLG49ITAsbz0wLGk9YXJndW1lbnRzLmxlbmd0aDtvPGk7bysrKXQ9ci5jYWxsKGUsYXJndW1lbnRzW29dKSxuPW4mJnQ7cmV0dXJuISFufTtrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2RlbGV0ZUFsbDpmdW5jdGlvbigpe3JldHVybiBubi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSk7dmFyIG9uPWZ1bmN0aW9uKHQpe3ZhciBlPWxyKHQpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KStcIiBpcyBub3QgaXRlcmFibGVcIik7cmV0dXJuIFIoZS5jYWxsKHQpKX0sYW49ZnVuY3Rpb24odCl7cmV0dXJuIE1hcC5wcm90b3R5cGUuZW50cmllcy5jYWxsKHQpfTtrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2V2ZXJ5OmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1hbihlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7cmV0dXJuIU1yKHIsZnVuY3Rpb24odCxyKXtpZighbihyLHQsZSkpcmV0dXJuIE1yLnN0b3AoKX0sdm9pZCAwLCEwLCEwKS5zdG9wcGVkfX0pO3ZhciB1bj1EdChcInNwZWNpZXNcIiksc249ZnVuY3Rpb24odCxlKXt2YXIgcixuPVIodCkuY29uc3RydWN0b3I7cmV0dXJuIHZvaWQgMD09PW58fG51bGw9PShyPVIobilbdW5dKT9lOlF0KHIpfTtrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2ZpbHRlcjpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9YW4oZSksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpLG89bmV3KHNuKGUsb3QoXCJNYXBcIikpKSxpPVF0KG8uc2V0KTtyZXR1cm4gTXIocixmdW5jdGlvbih0LHIpe24ocix0LGUpJiZpLmNhbGwobyx0LHIpfSx2b2lkIDAsITAsITApLG99fSksa3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtmaW5kOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1hbihlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCxyKXtpZihuKHIsdCxlKSlyZXR1cm4gTXIuc3RvcChyKX0sdm9pZCAwLCEwLCEwKS5yZXN1bHR9fSksa3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtmaW5kS2V5OmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1hbihlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCxyKXtpZihuKHIsdCxlKSlyZXR1cm4gTXIuc3RvcCh0KX0sdm9pZCAwLCEwLCEwKS5yZXN1bHR9fSksa3Qoe3RhcmdldDpcIk1hcFwiLHN0YXQ6ITB9LHtncm91cEJ5OmZ1bmN0aW9uKHQsZSl7dmFyIHI9bmV3IHRoaXM7UXQoZSk7dmFyIG49UXQoci5oYXMpLG89UXQoci5nZXQpLGk9UXQoci5zZXQpO3JldHVybiBNcih0LGZ1bmN0aW9uKHQpe3ZhciBhPWUodCk7bi5jYWxsKHIsYSk/by5jYWxsKHIsYSkucHVzaCh0KTppLmNhbGwocixhLFt0XSl9KSxyfX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7aW5jbHVkZXM6ZnVuY3Rpb24odCl7cmV0dXJuIE1yKGFuKFIodGhpcykpLGZ1bmN0aW9uKGUscil7aWYoKG49cik9PT0obz10KXx8biE9biYmbyE9bylyZXR1cm4gTXIuc3RvcCgpO3ZhciBuLG99LHZvaWQgMCwhMCwhMCkuc3RvcHBlZH19KSxrdCh7dGFyZ2V0OlwiTWFwXCIsc3RhdDohMH0se2tleUJ5OmZ1bmN0aW9uKHQsZSl7dmFyIHI9bmV3IHRoaXM7UXQoZSk7dmFyIG49UXQoci5zZXQpO3JldHVybiBNcih0LGZ1bmN0aW9uKHQpe24uY2FsbChyLGUodCksdCl9KSxyfX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7a2V5T2Y6ZnVuY3Rpb24odCl7cmV0dXJuIE1yKGFuKFIodGhpcykpLGZ1bmN0aW9uKGUscil7aWYocj09PXQpcmV0dXJuIE1yLnN0b3AoZSl9LHZvaWQgMCwhMCwhMCkucmVzdWx0fX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7bWFwS2V5czpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9YW4oZSksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpLG89bmV3KHNuKGUsb3QoXCJNYXBcIikpKSxpPVF0KG8uc2V0KTtyZXR1cm4gTXIocixmdW5jdGlvbih0LHIpe2kuY2FsbChvLG4ocix0LGUpLHIpfSx2b2lkIDAsITAsITApLG99fSksa3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHttYXBWYWx1ZXM6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPWFuKGUpLG49WnQodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwzKSxvPW5ldyhzbihlLG90KFwiTWFwXCIpKSksaT1RdChvLnNldCk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCxyKXtpLmNhbGwobyx0LG4ocix0LGUpKX0sdm9pZCAwLCEwLCEwKSxvfX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7bWVyZ2U6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVIodGhpcykscj1RdChlLnNldCksbj0wO248YXJndW1lbnRzLmxlbmd0aDspTXIoYXJndW1lbnRzW24rK10scixlLCEwKTtyZXR1cm4gZX19KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se3JlZHVjZTpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9YW4oZSksbj1hcmd1bWVudHMubGVuZ3RoPDIsbz1uP3ZvaWQgMDphcmd1bWVudHNbMV07aWYoUXQodCksTXIocixmdW5jdGlvbihyLGkpe24/KG49ITEsbz1pKTpvPXQobyxpLHIsZSl9LHZvaWQgMCwhMCwhMCksbil0aHJvdyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgbWFwIHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtyZXR1cm4gb319KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se3NvbWU6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPWFuKGUpLG49WnQodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwzKTtyZXR1cm4gTXIocixmdW5jdGlvbih0LHIpe2lmKG4ocix0LGUpKXJldHVybiBNci5zdG9wKCl9LHZvaWQgMCwhMCwhMCkuc3RvcHBlZH19KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se3VwZGF0ZTpmdW5jdGlvbih0LGUpe3ZhciByPVIodGhpcyksbj1hcmd1bWVudHMubGVuZ3RoO1F0KGUpO3ZhciBvPXIuaGFzKHQpO2lmKCFvJiZuPDMpdGhyb3cgVHlwZUVycm9yKFwiVXBkYXRpbmcgYWJzZW50IHZhbHVlXCIpO3ZhciBpPW8/ci5nZXQodCk6UXQobj4yP2FyZ3VtZW50c1syXTp2b2lkIDApKHQscik7cmV0dXJuIHIuc2V0KHQsZShpLHQscikpLHJ9fSk7dmFyIGNuPWZ1bmN0aW9uKHQsZSl7dmFyIHIsbj1SKHRoaXMpLG89YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbyl0aHJvdyBUeXBlRXJyb3IoXCJBdCBsZWFzdCBvbmUgY2FsbGJhY2sgcmVxdWlyZWRcIik7cmV0dXJuIG4uaGFzKHQpPyhyPW4uZ2V0KHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihyPWUociksbi5zZXQodCxyKSkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJihyPW8oKSxuLnNldCh0LHIpKSxyfTtrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se3Vwc2VydDpjbn0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7dXBkYXRlT3JJbnNlcnQ6Y259KTt2YXIgZm49XCJcXHRcXG5cXHZcXGZcXHIgwqDhmoDigIDigIHigILigIPigITigIXigIbigIfigIjigInigIrigK/igZ/jgIBcXHUyMDI4XFx1MjAyOVxcdWZlZmZcIixsbj1cIltcIitmbitcIl1cIixobj1SZWdFeHAoXCJeXCIrbG4rbG4rXCIqXCIpLHBuPVJlZ0V4cChsbitsbitcIiokXCIpLGRuPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj1TdHJpbmcoZChlKSk7cmV0dXJuIDEmdCYmKHI9ci5yZXBsYWNlKGhuLFwiXCIpKSwyJnQmJihyPXIucmVwbGFjZShwbixcIlwiKSkscn19LHZuPXtzdGFydDpkbigxKSxlbmQ6ZG4oMiksdHJpbTpkbigzKX0sZ249YnQuZix5bj1PLmYsbW49UC5mLGJuPXZuLnRyaW0sd249XCJOdW1iZXJcIixTbj1uLk51bWJlcixFbj1Tbi5wcm90b3R5cGUseG49bChIdChFbikpPT13bixBbj1mdW5jdGlvbih0KXt2YXIgZSxyLG4sbyxpLGEsdSxzLGM9eSh0LCExKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYyYmYy5sZW5ndGg+MilpZig0Mz09PShlPShjPWJuKGMpKS5jaGFyQ29kZUF0KDApKXx8NDU9PT1lKXtpZig4OD09PShyPWMuY2hhckNvZGVBdCgyKSl8fDEyMD09PXIpcmV0dXJuIE5hTn1lbHNlIGlmKDQ4PT09ZSl7c3dpdGNoKGMuY2hhckNvZGVBdCgxKSl7Y2FzZSA2NjpjYXNlIDk4Om49MixvPTQ5O2JyZWFrO2Nhc2UgNzk6Y2FzZSAxMTE6bj04LG89NTU7YnJlYWs7ZGVmYXVsdDpyZXR1cm4rY31mb3IoYT0oaT1jLnNsaWNlKDIpKS5sZW5ndGgsdT0wO3U8YTt1KyspaWYoKHM9aS5jaGFyQ29kZUF0KHUpKTw0OHx8cz5vKXJldHVybiBOYU47cmV0dXJuIHBhcnNlSW50KGksbil9cmV0dXJuK2N9O2lmKEl0KHduLCFTbihcIiAwbzFcIil8fCFTbihcIjBiMVwiKXx8U24oXCIrMHgxXCIpKSl7Zm9yKHZhciBPbixSbj1mdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPDE/MDp0LHI9dGhpcztyZXR1cm4gciBpbnN0YW5jZW9mIFJuJiYoeG4/byhmdW5jdGlvbigpe0VuLnZhbHVlT2YuY2FsbChyKX0pOmwocikhPXduKT9OcihuZXcgU24oQW4oZSkpLHIsUm4pOkFuKGUpfSxqbj1pP2duKFNuKTpcIk1BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLEVQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUixNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyXCIuc3BsaXQoXCIsXCIpLFBuPTA7am4ubGVuZ3RoPlBuO1BuKyspYihTbixPbj1qbltQbl0pJiYhYihSbixPbikmJm1uKFJuLE9uLHluKFNuLE9uKSk7Um4ucHJvdG90eXBlPUVuLEVuLmNvbnN0cnVjdG9yPVJuLGV0KG4sd24sUm4pfWt0KHt0YXJnZXQ6XCJOdW1iZXJcIixzdGF0OiEwfSx7RVBTSUxPTjpNYXRoLnBvdygyLC01Mil9KTt2YXIgSW49bi5pc0Zpbml0ZTtrdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMH0se2lzRmluaXRlOk51bWJlci5pc0Zpbml0ZXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJkluKHQpfX0pO3ZhciBUbj1NYXRoLmZsb29yLGtuPWZ1bmN0aW9uKHQpe3JldHVybiFnKHQpJiZpc0Zpbml0ZSh0KSYmVG4odCk9PT10fTtrdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMH0se2lzSW50ZWdlcjprbn0pLGt0KHt0YXJnZXQ6XCJOdW1iZXJcIixzdGF0OiEwfSx7aXNOYU46ZnVuY3Rpb24odCl7cmV0dXJuIHQhPXR9fSk7dmFyIExuPU1hdGguYWJzO2t0KHt0YXJnZXQ6XCJOdW1iZXJcIixzdGF0OiEwfSx7aXNTYWZlSW50ZWdlcjpmdW5jdGlvbih0KXtyZXR1cm4ga24odCkmJkxuKHQpPD05MDA3MTk5MjU0NzQwOTkxfX0pLGt0KHt0YXJnZXQ6XCJOdW1iZXJcIixzdGF0OiEwfSx7TUFYX1NBRkVfSU5URUdFUjo5MDA3MTk5MjU0NzQwOTkxfSksa3Qoe3RhcmdldDpcIk51bWJlclwiLHN0YXQ6ITB9LHtNSU5fU0FGRV9JTlRFR0VSOi05MDA3MTk5MjU0NzQwOTkxfSk7dmFyIFVuPXZuLnRyaW0sTW49bi5wYXJzZUZsb2F0LF9uPTEvTW4oZm4rXCItMFwiKSE9LUluZmluaXR5P2Z1bmN0aW9uKHQpe3ZhciBlPVVuKFN0cmluZyh0KSkscj1NbihlKTtyZXR1cm4gMD09PXImJlwiLVwiPT1lLmNoYXJBdCgwKT8tMDpyfTpNbjtrdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMCxmb3JjZWQ6TnVtYmVyLnBhcnNlRmxvYXQhPV9ufSx7cGFyc2VGbG9hdDpfbn0pO3ZhciBObj12bi50cmltLENuPW4ucGFyc2VJbnQsRm49L15bKy1dPzBbWHhdLyxCbj04IT09Q24oZm4rXCIwOFwiKXx8MjIhPT1DbihmbitcIjB4MTZcIik/ZnVuY3Rpb24odCxlKXt2YXIgcj1ObihTdHJpbmcodCkpO3JldHVybiBDbihyLGU+Pj4wfHwoRm4udGVzdChyKT8xNjoxMCkpfTpDbjtrdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMCxmb3JjZWQ6TnVtYmVyLnBhcnNlSW50IT1Cbn0se3BhcnNlSW50OkJufSk7dmFyIERuPXMuZixxbj1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciByLG49dihlKSxvPXF0KG4pLGE9by5sZW5ndGgsdT0wLHM9W107YT51OylyPW9bdSsrXSxpJiYhRG4uY2FsbChuLHIpfHxzLnB1c2godD9bcixuW3JdXTpuW3JdKTtyZXR1cm4gc319LHpuPXtlbnRyaWVzOnFuKCEwKSx2YWx1ZXM6cW4oITEpfSxXbj16bi5lbnRyaWVzO2t0KHt0YXJnZXQ6XCJPYmplY3RcIixzdGF0OiEwfSx7ZW50cmllczpmdW5jdGlvbih0KXtyZXR1cm4gV24odCl9fSksa3Qoe3RhcmdldDpcIk9iamVjdFwiLHN0YXQ6ITAsc2hhbTohaX0se2dldE93blByb3BlcnR5RGVzY3JpcHRvcnM6ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHIsbj12KHQpLG89Ty5mLGk9U3QobiksYT17fSx1PTA7aS5sZW5ndGg+dTspdm9pZCAwIT09KHI9byhuLGU9aVt1KytdKSkmJm9yKGEsZSxyKTtyZXR1cm4gYX19KTt2YXIgS249byhmdW5jdGlvbigpe3F0KDEpfSk7a3Qoe3RhcmdldDpcIk9iamVjdFwiLHN0YXQ6ITAsZm9yY2VkOktufSx7a2V5czpmdW5jdGlvbih0KXtyZXR1cm4gcXQoTHQodCkpfX0pO3ZhciBHbj1PYmplY3QuaXN8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT1lPzAhPT10fHwxL3Q9PTEvZTp0IT10JiZlIT1lfTtrdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMH0se2lzOkdufSk7dmFyICRuPXpuLnZhbHVlcztrdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMH0se3ZhbHVlczpmdW5jdGlvbih0KXtyZXR1cm4gJG4odCl9fSk7dmFyIFZuPW90KFwiUmVmbGVjdFwiLFwiYXBwbHlcIiksSG49RnVuY3Rpb24uYXBwbHksWG49IW8oZnVuY3Rpb24oKXtWbihmdW5jdGlvbigpe30pfSk7a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwLGZvcmNlZDpYbn0se2FwcGx5OmZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gUXQodCksUihyKSxWbj9Wbih0LGUscik6SG4uY2FsbCh0LGUscil9fSk7dmFyIFluPVtdLnNsaWNlLEpuPXt9LFFuPWZ1bmN0aW9uKHQsZSxyKXtpZighKGUgaW4gSm4pKXtmb3IodmFyIG49W10sbz0wO288ZTtvKyspbltvXT1cImFbXCIrbytcIl1cIjtKbltlXT1GdW5jdGlvbihcIkMsYVwiLFwicmV0dXJuIG5ldyBDKFwiK24uam9pbihcIixcIikrXCIpXCIpfXJldHVybiBKbltlXSh0LHIpfSxabj1GdW5jdGlvbi5iaW5kfHxmdW5jdGlvbih0KXt2YXIgZT1RdCh0aGlzKSxyPVluLmNhbGwoYXJndW1lbnRzLDEpLG49ZnVuY3Rpb24oKXt2YXIgbz1yLmNvbmNhdChZbi5jYWxsKGFyZ3VtZW50cykpO3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbj9RbihlLG8ubGVuZ3RoLG8pOmUuYXBwbHkodCxvKX07cmV0dXJuIGcoZS5wcm90b3R5cGUpJiYobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUpLG59LHRvPW90KFwiUmVmbGVjdFwiLFwiY29uc3RydWN0XCIpLGVvPW8oZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiEodG8oZnVuY3Rpb24oKXt9LFtdLHQpaW5zdGFuY2VvZiB0KX0pLHJvPSFvKGZ1bmN0aW9uKCl7dG8oZnVuY3Rpb24oKXt9KX0pLG5vPWVvfHxybztrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITAsZm9yY2VkOm5vLHNoYW06bm99LHtjb25zdHJ1Y3Q6ZnVuY3Rpb24odCxlKXtRdCh0KSxSKGUpO3ZhciByPWFyZ3VtZW50cy5sZW5ndGg8Mz90OlF0KGFyZ3VtZW50c1syXSk7aWYocm8mJiFlbylyZXR1cm4gdG8odCxlLHIpO2lmKHQ9PXIpe3N3aXRjaChlLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KGVbMF0pO2Nhc2UgMjpyZXR1cm4gbmV3IHQoZVswXSxlWzFdKTtjYXNlIDM6cmV0dXJuIG5ldyB0KGVbMF0sZVsxXSxlWzJdKTtjYXNlIDQ6cmV0dXJuIG5ldyB0KGVbMF0sZVsxXSxlWzJdLGVbM10pfXZhciBuPVtudWxsXTtyZXR1cm4gbi5wdXNoLmFwcGx5KG4sZSksbmV3KFpuLmFwcGx5KHQsbikpfXZhciBvPXIucHJvdG90eXBlLGk9SHQoZyhvKT9vOk9iamVjdC5wcm90b3R5cGUpLGE9RnVuY3Rpb24uYXBwbHkuY2FsbCh0LGksZSk7cmV0dXJuIGcoYSk/YTppfX0pO3ZhciBvbz1vKGZ1bmN0aW9uKCl7UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShQLmYoe30sMSx7dmFsdWU6MX0pLDEse3ZhbHVlOjJ9KX0pO2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMCxmb3JjZWQ6b28sc2hhbTohaX0se2RlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsZSxyKXtSKHQpO3ZhciBuPXkoZSwhMCk7UihyKTt0cnl7cmV0dXJuIFAuZih0LG4sciksITB9Y2F0Y2godCl7cmV0dXJuITF9fX0pO3ZhciBpbz1PLmY7a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7ZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24odCxlKXt2YXIgcj1pbyhSKHQpLGUpO3JldHVybiEociYmIXIuY29uZmlndXJhYmxlKSYmZGVsZXRlIHRbZV19fSksa3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7Z2V0OmZ1bmN0aW9uIHQoZSxyKXt2YXIgbixvLGk9YXJndW1lbnRzLmxlbmd0aDwzP2U6YXJndW1lbnRzWzJdO3JldHVybiBSKGUpPT09aT9lW3JdOihuPU8uZihlLHIpKT9iKG4sXCJ2YWx1ZVwiKT9uLnZhbHVlOnZvaWQgMD09PW4uZ2V0P3ZvaWQgMDpuLmdldC5jYWxsKGkpOmcobz1JZShlKSk/dChvLHIsaSk6dm9pZCAwfX0pLGt0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMCxzaGFtOiFpfSx7Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8uZihSKHQpLGUpfX0pLGt0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMCxzaGFtOiFSZX0se2dldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiBJZShSKHQpKX19KSxrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHtoYXM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSBpbiB0fX0pO3ZhciBhbz1PYmplY3QuaXNFeHRlbnNpYmxlO2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2lzRXh0ZW5zaWJsZTpmdW5jdGlvbih0KXtyZXR1cm4gUih0KSwhYW98fGFvKHQpfX0pLGt0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se293bktleXM6U3R9KSxrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITAsc2hhbTohTHJ9LHtwcmV2ZW50RXh0ZW5zaW9uczpmdW5jdGlvbih0KXtSKHQpO3RyeXt2YXIgZT1vdChcIk9iamVjdFwiLFwicHJldmVudEV4dGVuc2lvbnNcIik7cmV0dXJuIGUmJmUodCksITB9Y2F0Y2godCl7cmV0dXJuITF9fX0pO3ZhciB1bz1vKGZ1bmN0aW9uKCl7dmFyIHQ9UC5mKHt9LFwiYVwiLHtjb25maWd1cmFibGU6ITB9KTtyZXR1cm4hMSE9PVJlZmxlY3Quc2V0KEllKHQpLFwiYVwiLDEsdCl9KTtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITAsZm9yY2VkOnVvfSx7c2V0OmZ1bmN0aW9uIHQoZSxyLG4pe3ZhciBvLGksYT1hcmd1bWVudHMubGVuZ3RoPDQ/ZTphcmd1bWVudHNbM10sdT1PLmYoUihlKSxyKTtpZighdSl7aWYoZyhpPUllKGUpKSlyZXR1cm4gdChpLHIsbixhKTt1PWMoMCl9aWYoYih1LFwidmFsdWVcIikpe2lmKCExPT09dS53cml0YWJsZXx8IWcoYSkpcmV0dXJuITE7aWYobz1PLmYoYSxyKSl7aWYoby5nZXR8fG8uc2V0fHwhMT09PW8ud3JpdGFibGUpcmV0dXJuITE7by52YWx1ZT1uLFAuZihhLHIsbyl9ZWxzZSBQLmYoYSxyLGMoMCxuKSk7cmV0dXJuITB9cmV0dXJuIHZvaWQgMCE9PXUuc2V0JiYodS5zZXQuY2FsbChhLG4pLCEwKX19KSxxZSYma3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7c2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCxlKXtSKHQpLERlKGUpO3RyeXtyZXR1cm4gcWUodCxlKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19fSk7dmFyIHNvPVVyLmdldFdlYWtEYXRhLGNvPXR0LnNldCxmbz10dC5nZXR0ZXJGb3IsbG89dWUuZmluZCxobz11ZS5maW5kSW5kZXgscG89MCx2bz1mdW5jdGlvbih0KXtyZXR1cm4gdC5mcm96ZW58fCh0LmZyb3plbj1uZXcgZ28pfSxnbz1mdW5jdGlvbigpe3RoaXMuZW50cmllcz1bXX0seW89ZnVuY3Rpb24odCxlKXtyZXR1cm4gbG8odC5lbnRyaWVzLGZ1bmN0aW9uKHQpe3JldHVybiB0WzBdPT09ZX0pfTtnby5wcm90b3R5cGU9e2dldDpmdW5jdGlvbih0KXt2YXIgZT15byh0aGlzLHQpO2lmKGUpcmV0dXJuIGVbMV19LGhhczpmdW5jdGlvbih0KXtyZXR1cm4hIXlvKHRoaXMsdCl9LHNldDpmdW5jdGlvbih0LGUpe3ZhciByPXlvKHRoaXMsdCk7cj9yWzFdPWU6dGhpcy5lbnRyaWVzLnB1c2goW3QsZV0pfSxkZWxldGU6ZnVuY3Rpb24odCl7dmFyIGU9aG8odGhpcy5lbnRyaWVzLGZ1bmN0aW9uKGUpe3JldHVybiBlWzBdPT09dH0pO3JldHVybn5lJiZ0aGlzLmVudHJpZXMuc3BsaWNlKGUsMSksISF+ZX19O3ZhciBtbz17Z2V0Q29uc3RydWN0b3I6ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89dChmdW5jdGlvbih0LGkpe19yKHQsbyxlKSxjbyh0LHt0eXBlOmUsaWQ6cG8rKyxmcm96ZW46dm9pZCAwfSksbnVsbCE9aSYmTXIoaSx0W25dLHQscil9KSxpPWZvKGUpLGE9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWkodCksbz1zbyhSKGUpLCEwKTtyZXR1cm4hMD09PW8/dm8obikuc2V0KGUscik6b1tuLmlkXT1yLHR9O3JldHVybiBGcihvLnByb3RvdHlwZSx7ZGVsZXRlOmZ1bmN0aW9uKHQpe3ZhciBlPWkodGhpcyk7aWYoIWcodCkpcmV0dXJuITE7dmFyIHI9c28odCk7cmV0dXJuITA9PT1yP3ZvKGUpLmRlbGV0ZSh0KTpyJiZiKHIsZS5pZCkmJmRlbGV0ZSByW2UuaWRdfSxoYXM6ZnVuY3Rpb24odCl7dmFyIGU9aSh0aGlzKTtpZighZyh0KSlyZXR1cm4hMTt2YXIgcj1zbyh0KTtyZXR1cm4hMD09PXI/dm8oZSkuaGFzKHQpOnImJmIocixlLmlkKX19KSxGcihvLnByb3RvdHlwZSxyP3tnZXQ6ZnVuY3Rpb24odCl7dmFyIGU9aSh0aGlzKTtpZihnKHQpKXt2YXIgcj1zbyh0KTtyZXR1cm4hMD09PXI/dm8oZSkuZ2V0KHQpOnI/cltlLmlkXTp2b2lkIDB9fSxzZXQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gYSh0aGlzLHQsZSl9fTp7YWRkOmZ1bmN0aW9uKHQpe3JldHVybiBhKHRoaXMsdCwhMCl9fSksb319LGJvPWUoZnVuY3Rpb24odCl7dmFyIGUscj10dC5lbmZvcmNlLG89IW4uQWN0aXZlWE9iamVjdCYmXCJBY3RpdmVYT2JqZWN0XCJpbiBuLGk9T2JqZWN0LmlzRXh0ZW5zaWJsZSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0KHRoaXMsYXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06dm9pZCAwKX19LHU9dC5leHBvcnRzPUNyKFwiV2Vha01hcFwiLGEsbW8pO2lmKEImJm8pe2U9bW8uZ2V0Q29uc3RydWN0b3IoYSxcIldlYWtNYXBcIiwhMCksVXIuUkVRVUlSRUQ9ITA7dmFyIHM9dS5wcm90b3R5cGUsYz1zLmRlbGV0ZSxmPXMuaGFzLGw9cy5nZXQsaD1zLnNldDtGcihzLHtkZWxldGU6ZnVuY3Rpb24odCl7aWYoZyh0KSYmIWkodCkpe3ZhciBuPXIodGhpcyk7cmV0dXJuIG4uZnJvemVufHwobi5mcm96ZW49bmV3IGUpLGMuY2FsbCh0aGlzLHQpfHxuLmZyb3plbi5kZWxldGUodCl9cmV0dXJuIGMuY2FsbCh0aGlzLHQpfSxoYXM6ZnVuY3Rpb24odCl7aWYoZyh0KSYmIWkodCkpe3ZhciBuPXIodGhpcyk7cmV0dXJuIG4uZnJvemVufHwobi5mcm96ZW49bmV3IGUpLGYuY2FsbCh0aGlzLHQpfHxuLmZyb3plbi5oYXModCl9cmV0dXJuIGYuY2FsbCh0aGlzLHQpfSxnZXQ6ZnVuY3Rpb24odCl7aWYoZyh0KSYmIWkodCkpe3ZhciBuPXIodGhpcyk7cmV0dXJuIG4uZnJvemVufHwobi5mcm96ZW49bmV3IGUpLGYuY2FsbCh0aGlzLHQpP2wuY2FsbCh0aGlzLHQpOm4uZnJvemVuLmdldCh0KX1yZXR1cm4gbC5jYWxsKHRoaXMsdCl9LHNldDpmdW5jdGlvbih0LG4pe2lmKGcodCkmJiFpKHQpKXt2YXIgbz1yKHRoaXMpO28uZnJvemVufHwoby5mcm96ZW49bmV3IGUpLGYuY2FsbCh0aGlzLHQpP2guY2FsbCh0aGlzLHQsbik6by5mcm96ZW4uc2V0KHQsbil9ZWxzZSBoLmNhbGwodGhpcyx0LG4pO3JldHVybiB0aGlzfX0pfX0pLHdvPXEoXCJtZXRhZGF0YVwiKSxTbz13by5zdG9yZXx8KHdvLnN0b3JlPW5ldyBibyksRW89ZnVuY3Rpb24odCxlLHIpe3ZhciBuPVNvLmdldCh0KTtpZighbil7aWYoIXIpcmV0dXJuO1NvLnNldCh0LG49bmV3ICRyKX12YXIgbz1uLmdldChlKTtpZighbyl7aWYoIXIpcmV0dXJuO24uc2V0KGUsbz1uZXcgJHIpfXJldHVybiBvfSx4bz17c3RvcmU6U28sZ2V0TWFwOkVvLGhhczpmdW5jdGlvbih0LGUscil7dmFyIG49RW8oZSxyLCExKTtyZXR1cm4gdm9pZCAwIT09biYmbi5oYXModCl9LGdldDpmdW5jdGlvbih0LGUscil7dmFyIG49RW8oZSxyLCExKTtyZXR1cm4gdm9pZCAwPT09bj92b2lkIDA6bi5nZXQodCl9LHNldDpmdW5jdGlvbih0LGUscixuKXtFbyhyLG4sITApLnNldCh0LGUpfSxrZXlzOmZ1bmN0aW9uKHQsZSl7dmFyIHI9RW8odCxlLCExKSxuPVtdO3JldHVybiByJiZyLmZvckVhY2goZnVuY3Rpb24odCxlKXtuLnB1c2goZSl9KSxufSx0b0tleTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dHx8XCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9fSxBbz14by50b0tleSxPbz14by5zZXQ7a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7ZGVmaW5lTWV0YWRhdGE6ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg8ND92b2lkIDA6QW8oYXJndW1lbnRzWzNdKTtPbyh0LGUsUihyKSxuKX19KTt2YXIgUm89eG8udG9LZXksam89eG8uZ2V0TWFwLFBvPXhvLnN0b3JlO2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2RlbGV0ZU1ldGFkYXRhOmZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDwzP3ZvaWQgMDpSbyhhcmd1bWVudHNbMl0pLG49am8oUihlKSxyLCExKTtpZih2b2lkIDA9PT1ufHwhbi5kZWxldGUodCkpcmV0dXJuITE7aWYobi5zaXplKXJldHVybiEwO3ZhciBvPVBvLmdldChlKTtyZXR1cm4gby5kZWxldGUociksISFvLnNpemV8fFBvLmRlbGV0ZShlKX19KTt2YXIgSW89eG8uaGFzLFRvPXhvLmdldCxrbz14by50b0tleSxMbz1mdW5jdGlvbiB0KGUscixuKXtpZihJbyhlLHIsbikpcmV0dXJuIFRvKGUscixuKTt2YXIgbz1JZShyKTtyZXR1cm4gbnVsbCE9PW8/dChlLG8sbik6dm9pZCAwfTtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHtnZXRNZXRhZGF0YTpmdW5jdGlvbih0LGUpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg8Mz92b2lkIDA6a28oYXJndW1lbnRzWzJdKTtyZXR1cm4gTG8odCxSKGUpLHIpfX0pO3ZhciBVbz1DcihcIlNldFwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0KHRoaXMsYXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06dm9pZCAwKX19LEdyKSxNbz14by5rZXlzLF9vPXhvLnRvS2V5LE5vPWZ1bmN0aW9uIHQoZSxyKXt2YXIgbj1NbyhlLHIpLG89SWUoZSk7aWYobnVsbD09PW8pcmV0dXJuIG47dmFyIGksYSx1PXQobyxyKTtyZXR1cm4gdS5sZW5ndGg/bi5sZW5ndGg/KGk9bmV3IFVvKG4uY29uY2F0KHUpKSxNcihpLChhPVtdKS5wdXNoLGEpLGEpOnU6bn07a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7Z2V0TWV0YWRhdGFLZXlzOmZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8Mj92b2lkIDA6X28oYXJndW1lbnRzWzFdKTtyZXR1cm4gTm8oUih0KSxlKX19KTt2YXIgQ289eG8uZ2V0LEZvPXhvLnRvS2V5O2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2dldE93bk1ldGFkYXRhOmZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDwzP3ZvaWQgMDpGbyhhcmd1bWVudHNbMl0pO3JldHVybiBDbyh0LFIoZSkscil9fSk7dmFyIEJvPXhvLmtleXMsRG89eG8udG9LZXk7a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7Z2V0T3duTWV0YWRhdGFLZXlzOmZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8Mj92b2lkIDA6RG8oYXJndW1lbnRzWzFdKTtyZXR1cm4gQm8oUih0KSxlKX19KTt2YXIgcW89eG8uaGFzLHpvPXhvLnRvS2V5LFdvPWZ1bmN0aW9uIHQoZSxyLG4pe2lmKHFvKGUscixuKSlyZXR1cm4hMDt2YXIgbz1JZShyKTtyZXR1cm4gbnVsbCE9PW8mJnQoZSxvLG4pfTtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHtoYXNNZXRhZGF0YTpmdW5jdGlvbih0LGUpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg8Mz92b2lkIDA6em8oYXJndW1lbnRzWzJdKTtyZXR1cm4gV28odCxSKGUpLHIpfX0pO3ZhciBLbz14by5oYXMsR289eG8udG9LZXk7a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7aGFzT3duTWV0YWRhdGE6ZnVuY3Rpb24odCxlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPDM/dm9pZCAwOkdvKGFyZ3VtZW50c1syXSk7cmV0dXJuIEtvKHQsUihlKSxyKX19KTt2YXIgJG89eG8udG9LZXksVm89eG8uc2V0O2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se21ldGFkYXRhOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7Vm8odCxlLFIociksJG8obikpfX19KTt2YXIgSG89RHQoXCJtYXRjaFwiKSxYbz1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gZyh0KSYmKHZvaWQgMCE9PShlPXRbSG9dKT8hIWU6XCJSZWdFeHBcIj09bCh0KSl9LFlvPWZ1bmN0aW9uKCl7dmFyIHQ9Uih0aGlzKSxlPVwiXCI7cmV0dXJuIHQuZ2xvYmFsJiYoZSs9XCJnXCIpLHQuaWdub3JlQ2FzZSYmKGUrPVwiaVwiKSx0Lm11bHRpbGluZSYmKGUrPVwibVwiKSx0LmRvdEFsbCYmKGUrPVwic1wiKSx0LnVuaWNvZGUmJihlKz1cInVcIiksdC5zdGlja3kmJihlKz1cInlcIiksZX07ZnVuY3Rpb24gSm8odCxlKXtyZXR1cm4gUmVnRXhwKHQsZSl9dmFyIFFvPXtVTlNVUFBPUlRFRF9ZOm8oZnVuY3Rpb24oKXt2YXIgdD1KbyhcImFcIixcInlcIik7cmV0dXJuIHQubGFzdEluZGV4PTIsbnVsbCE9dC5leGVjKFwiYWJjZFwiKX0pLEJST0tFTl9DQVJFVDpvKGZ1bmN0aW9uKCl7dmFyIHQ9Sm8oXCJeclwiLFwiZ3lcIik7cmV0dXJuIHQubGFzdEluZGV4PTIsbnVsbCE9dC5leGVjKFwic3RyXCIpfSl9LFpvPVAuZix0aT1idC5mLGVpPXR0LnNldCxyaT1EdChcIm1hdGNoXCIpLG5pPW4uUmVnRXhwLG9pPW5pLnByb3RvdHlwZSxpaT0vYS9nLGFpPS9hL2csdWk9bmV3IG5pKGlpKSE9PWlpLHNpPVFvLlVOU1VQUE9SVEVEX1k7aWYoaSYmSXQoXCJSZWdFeHBcIiwhdWl8fHNpfHxvKGZ1bmN0aW9uKCl7cmV0dXJuIGFpW3JpXT0hMSxuaShpaSkhPWlpfHxuaShhaSk9PWFpfHxcIi9hL2lcIiE9bmkoaWksXCJpXCIpfSkpKXtmb3IodmFyIGNpPWZ1bmN0aW9uKHQsZSl7dmFyIHIsbj10aGlzIGluc3RhbmNlb2YgY2ksbz1Ybyh0KSxpPXZvaWQgMD09PWU7aWYoIW4mJm8mJnQuY29uc3RydWN0b3I9PT1jaSYmaSlyZXR1cm4gdDt1aT9vJiYhaSYmKHQ9dC5zb3VyY2UpOnQgaW5zdGFuY2VvZiBjaSYmKGkmJihlPVlvLmNhbGwodCkpLHQ9dC5zb3VyY2UpLHNpJiYocj0hIWUmJmUuaW5kZXhPZihcInlcIik+LTEpJiYoZT1lLnJlcGxhY2UoL3kvZyxcIlwiKSk7dmFyIGE9TnIodWk/bmV3IG5pKHQsZSk6bmkodCxlKSxuP3RoaXM6b2ksY2kpO3JldHVybiBzaSYmciYmZWkoYSx7c3RpY2t5OnJ9KSxhfSxmaT1mdW5jdGlvbih0KXt0IGluIGNpfHxabyhjaSx0LHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG5pW3RdfSxzZXQ6ZnVuY3Rpb24oZSl7bmlbdF09ZX19KX0sbGk9dGkobmkpLGhpPTA7bGkubGVuZ3RoPmhpOylmaShsaVtoaSsrXSk7b2kuY29uc3RydWN0b3I9Y2ksY2kucHJvdG90eXBlPW9pLGV0KG4sXCJSZWdFeHBcIixjaSl9RHIoXCJSZWdFeHBcIik7dmFyIHBpPVwidG9TdHJpbmdcIixkaT1SZWdFeHAucHJvdG90eXBlLHZpPWRpLnRvU3RyaW5nOyhvKGZ1bmN0aW9uKCl7cmV0dXJuXCIvYS9iXCIhPXZpLmNhbGwoe3NvdXJjZTpcImFcIixmbGFnczpcImJcIn0pfSl8fHZpLm5hbWUhPXBpKSYmZXQoUmVnRXhwLnByb3RvdHlwZSxwaSxmdW5jdGlvbigpe3ZhciB0PVIodGhpcyksZT1TdHJpbmcodC5zb3VyY2UpLHI9dC5mbGFncztyZXR1cm5cIi9cIitlK1wiL1wiK1N0cmluZyh2b2lkIDA9PT1yJiZ0IGluc3RhbmNlb2YgUmVnRXhwJiYhKFwiZmxhZ3NcImluIGRpKT9Zby5jYWxsKHQpOnIpfSx7dW5zYWZlOiEwfSk7dmFyIGdpPVJlZ0V4cC5wcm90b3R5cGUuZXhlYyx5aT1TdHJpbmcucHJvdG90eXBlLnJlcGxhY2UsbWk9Z2ksYmk9ZnVuY3Rpb24oKXt2YXIgdD0vYS8sZT0vYiovZztyZXR1cm4gZ2kuY2FsbCh0LFwiYVwiKSxnaS5jYWxsKGUsXCJhXCIpLDAhPT10Lmxhc3RJbmRleHx8MCE9PWUubGFzdEluZGV4fSgpLHdpPVFvLlVOU1VQUE9SVEVEX1l8fFFvLkJST0tFTl9DQVJFVCxTaT12b2lkIDAhPT0vKCk/Py8uZXhlYyhcIlwiKVsxXTsoYml8fFNpfHx3aSkmJihtaT1mdW5jdGlvbih0KXt2YXIgZSxyLG4sbyxpPXRoaXMsYT13aSYmaS5zdGlja3ksdT1Zby5jYWxsKGkpLHM9aS5zb3VyY2UsYz0wLGY9dDtyZXR1cm4gYSYmKC0xPT09KHU9dS5yZXBsYWNlKFwieVwiLFwiXCIpKS5pbmRleE9mKFwiZ1wiKSYmKHUrPVwiZ1wiKSxmPVN0cmluZyh0KS5zbGljZShpLmxhc3RJbmRleCksaS5sYXN0SW5kZXg+MCYmKCFpLm11bHRpbGluZXx8aS5tdWx0aWxpbmUmJlwiXFxuXCIhPT10W2kubGFzdEluZGV4LTFdKSYmKHM9XCIoPzogXCIrcytcIilcIixmPVwiIFwiK2YsYysrKSxyPW5ldyBSZWdFeHAoXCJeKD86XCIrcytcIilcIix1KSksU2kmJihyPW5ldyBSZWdFeHAoXCJeXCIrcytcIiQoPyFcXFxccylcIix1KSksYmkmJihlPWkubGFzdEluZGV4KSxuPWdpLmNhbGwoYT9yOmksZiksYT9uPyhuLmlucHV0PW4uaW5wdXQuc2xpY2UoYyksblswXT1uWzBdLnNsaWNlKGMpLG4uaW5kZXg9aS5sYXN0SW5kZXgsaS5sYXN0SW5kZXgrPW5bMF0ubGVuZ3RoKTppLmxhc3RJbmRleD0wOmJpJiZuJiYoaS5sYXN0SW5kZXg9aS5nbG9iYWw/bi5pbmRleCtuWzBdLmxlbmd0aDplKSxTaSYmbiYmbi5sZW5ndGg+MSYmeWkuY2FsbChuWzBdLHIsZnVuY3Rpb24oKXtmb3Iobz0xO288YXJndW1lbnRzLmxlbmd0aC0yO28rKyl2b2lkIDA9PT1hcmd1bWVudHNbb10mJihuW29dPXZvaWQgMCl9KSxufSk7dmFyIEVpPW1pO2t0KHt0YXJnZXQ6XCJSZWdFeHBcIixwcm90bzohMCxmb3JjZWQ6Ly4vLmV4ZWMhPT1FaX0se2V4ZWM6RWl9KSxpJiYoXCJnXCIhPS8uL2cuZmxhZ3N8fFFvLlVOU1VQUE9SVEVEX1kpJiZQLmYoUmVnRXhwLnByb3RvdHlwZSxcImZsYWdzXCIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6WW99KTt2YXIgeGk9dHQuZ2V0LEFpPVJlZ0V4cC5wcm90b3R5cGU7aSYmUW8uVU5TVVBQT1JURURfWSYmKDAsUC5mKShSZWdFeHAucHJvdG90eXBlLFwic3RpY2t5XCIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzIT09QWkpe2lmKHRoaXMgaW5zdGFuY2VvZiBSZWdFeHApcmV0dXJuISF4aSh0aGlzKS5zdGlja3k7dGhyb3cgVHlwZUVycm9yKFwiSW5jb21wYXRpYmxlIHJlY2VpdmVyLCBSZWdFeHAgcmVxdWlyZWRcIil9fX0pO3ZhciBPaSxSaSxqaT0oT2k9ITEsKFJpPS9bYWNdLykuZXhlYz1mdW5jdGlvbigpe3JldHVybiBPaT0hMCwvLi8uZXhlYy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LCEwPT09UmkudGVzdChcImFiY1wiKSYmT2kpLFBpPS8uLy50ZXN0O2t0KHt0YXJnZXQ6XCJSZWdFeHBcIixwcm90bzohMCxmb3JjZWQ6IWppfSx7dGVzdDpmdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzLmV4ZWMpcmV0dXJuIFBpLmNhbGwodGhpcyx0KTt2YXIgZT10aGlzLmV4ZWModCk7aWYobnVsbCE9PWUmJiFnKGUpKXRocm93IG5ldyBFcnJvcihcIlJlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbFwiKTtyZXR1cm4hIWV9fSk7dmFyIElpPUR0KFwic3BlY2llc1wiKSxUaT0hbyhmdW5jdGlvbigpe3ZhciB0PS8uLztyZXR1cm4gdC5leGVjPWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIHQuZ3JvdXBzPXthOlwiN1wifSx0fSxcIjdcIiE9PVwiXCIucmVwbGFjZSh0LFwiJDxhPlwiKX0pLGtpPVwiJDBcIj09PVwiYVwiLnJlcGxhY2UoLy4vLFwiJDBcIiksTGk9RHQoXCJyZXBsYWNlXCIpLFVpPSEhLy4vW0xpXSYmXCJcIj09PS8uL1tMaV0oXCJhXCIsXCIkMFwiKSxNaT0hbyhmdW5jdGlvbigpe3ZhciB0PS8oPzopLyxlPXQuZXhlYzt0LmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3ZhciByPVwiYWJcIi5zcGxpdCh0KTtyZXR1cm4gMiE9PXIubGVuZ3RofHxcImFcIiE9PXJbMF18fFwiYlwiIT09clsxXX0pLF9pPWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBpPUR0KHQpLGE9IW8oZnVuY3Rpb24oKXt2YXIgZT17fTtyZXR1cm4gZVtpXT1mdW5jdGlvbigpe3JldHVybiA3fSw3IT1cIlwiW3RdKGUpfSksdT1hJiYhbyhmdW5jdGlvbigpe3ZhciBlPSExLHI9L2EvO3JldHVyblwic3BsaXRcIj09PXQmJigocj17fSkuY29uc3RydWN0b3I9e30sci5jb25zdHJ1Y3RvcltJaV09ZnVuY3Rpb24oKXtyZXR1cm4gcn0sci5mbGFncz1cIlwiLHJbaV09Ly4vW2ldKSxyLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gZT0hMCxudWxsfSxyW2ldKFwiXCIpLCFlfSk7aWYoIWF8fCF1fHxcInJlcGxhY2VcIj09PXQmJighVGl8fCFraXx8VWkpfHxcInNwbGl0XCI9PT10JiYhTWkpe3ZhciBzPS8uL1tpXSxjPXIoaSxcIlwiW3RdLGZ1bmN0aW9uKHQsZSxyLG4sbyl7cmV0dXJuIGUuZXhlYz09PUVpP2EmJiFvP3tkb25lOiEwLHZhbHVlOnMuY2FsbChlLHIsbil9Ontkb25lOiEwLHZhbHVlOnQuY2FsbChyLGUsbil9Ontkb25lOiExfX0se1JFUExBQ0VfS0VFUFNfJDA6a2ksUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU6VWl9KSxmPWNbMV07ZXQoU3RyaW5nLnByb3RvdHlwZSx0LGNbMF0pLGV0KFJlZ0V4cC5wcm90b3R5cGUsaSwyPT1lP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIGYuY2FsbCh0LHRoaXMsZSl9OmZ1bmN0aW9uKHQpe3JldHVybiBmLmNhbGwodCx0aGlzKX0pfW4mJkkoUmVnRXhwLnByb3RvdHlwZVtpXSxcInNoYW1cIiwhMCl9LE5pPU9lLmNoYXJBdCxDaT1mdW5jdGlvbih0LGUscil7cmV0dXJuIGUrKHI/TmkodCxlKS5sZW5ndGg6MSl9LEZpPWZ1bmN0aW9uKHQsZSl7dmFyIHI9dC5leGVjO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHIpe3ZhciBuPXIuY2FsbCh0LGUpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBuKXRocm93IFR5cGVFcnJvcihcIlJlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbFwiKTtyZXR1cm4gbn1pZihcIlJlZ0V4cFwiIT09bCh0KSl0aHJvdyBUeXBlRXJyb3IoXCJSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyXCIpO3JldHVybiBFaS5jYWxsKHQsZSl9O19pKFwibWF0Y2hcIiwxLGZ1bmN0aW9uKHQsZSxyKXtyZXR1cm5bZnVuY3Rpb24oZSl7dmFyIHI9ZCh0aGlzKSxuPW51bGw9PWU/dm9pZCAwOmVbdF07cmV0dXJuIHZvaWQgMCE9PW4/bi5jYWxsKGUscik6bmV3IFJlZ0V4cChlKVt0XShTdHJpbmcocikpfSxmdW5jdGlvbih0KXt2YXIgbj1yKGUsdCx0aGlzKTtpZihuLmRvbmUpcmV0dXJuIG4udmFsdWU7dmFyIG89Uih0KSxpPVN0cmluZyh0aGlzKTtpZighby5nbG9iYWwpcmV0dXJuIEZpKG8saSk7dmFyIGE9by51bmljb2RlO28ubGFzdEluZGV4PTA7Zm9yKHZhciB1LHM9W10sYz0wO251bGwhPT0odT1GaShvLGkpKTspe3ZhciBmPVN0cmluZyh1WzBdKTtzW2NdPWYsXCJcIj09PWYmJihvLmxhc3RJbmRleD1DaShpLGN0KG8ubGFzdEluZGV4KSxhKSksYysrfXJldHVybiAwPT09Yz9udWxsOnN9XX0pO3ZhciBCaT1NYXRoLm1heCxEaT1NYXRoLm1pbixxaT1NYXRoLmZsb29yLHppPS9cXCQoWyQmJ2BdfFxcZFxcZD98PFtePl0qPikvZyxXaT0vXFwkKFskJidgXXxcXGRcXGQ/KS9nO19pKFwicmVwbGFjZVwiLDIsZnVuY3Rpb24odCxlLHIsbil7dmFyIG89bi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSxpPW4uUkVQTEFDRV9LRUVQU18kMCxhPW8/XCIkXCI6XCIkMFwiO3JldHVybltmdW5jdGlvbihyLG4pe3ZhciBvPWQodGhpcyksaT1udWxsPT1yP3ZvaWQgMDpyW3RdO3JldHVybiB2b2lkIDAhPT1pP2kuY2FsbChyLG8sbik6ZS5jYWxsKFN0cmluZyhvKSxyLG4pfSxmdW5jdGlvbih0LG4pe2lmKCFvJiZpfHxcInN0cmluZ1wiPT10eXBlb2YgbiYmLTE9PT1uLmluZGV4T2YoYSkpe3ZhciBzPXIoZSx0LHRoaXMsbik7aWYocy5kb25lKXJldHVybiBzLnZhbHVlfXZhciBjPVIodCksZj1TdHJpbmcodGhpcyksbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuO2x8fChuPVN0cmluZyhuKSk7dmFyIGg9Yy5nbG9iYWw7aWYoaCl7dmFyIHA9Yy51bmljb2RlO2MubGFzdEluZGV4PTB9Zm9yKHZhciBkPVtdOzspe3ZhciB2PUZpKGMsZik7aWYobnVsbD09PXYpYnJlYWs7aWYoZC5wdXNoKHYpLCFoKWJyZWFrO1wiXCI9PT1TdHJpbmcodlswXSkmJihjLmxhc3RJbmRleD1DaShmLGN0KGMubGFzdEluZGV4KSxwKSl9Zm9yKHZhciBnLHk9XCJcIixtPTAsYj0wO2I8ZC5sZW5ndGg7YisrKXt2PWRbYl07Zm9yKHZhciB3PVN0cmluZyh2WzBdKSxTPUJpKERpKHV0KHYuaW5kZXgpLGYubGVuZ3RoKSwwKSxFPVtdLHg9MTt4PHYubGVuZ3RoO3grKylFLnB1c2godm9pZCAwPT09KGc9dlt4XSk/ZzpTdHJpbmcoZykpO3ZhciBBPXYuZ3JvdXBzO2lmKGwpe3ZhciBPPVt3XS5jb25jYXQoRSxTLGYpO3ZvaWQgMCE9PUEmJk8ucHVzaChBKTt2YXIgaj1TdHJpbmcobi5hcHBseSh2b2lkIDAsTykpfWVsc2Ugaj11KHcsZixTLEUsQSxuKTtTPj1tJiYoeSs9Zi5zbGljZShtLFMpK2osbT1TK3cubGVuZ3RoKX1yZXR1cm4geStmLnNsaWNlKG0pfV07ZnVuY3Rpb24gdSh0LHIsbixvLGksYSl7dmFyIHU9bit0Lmxlbmd0aCxzPW8ubGVuZ3RoLGM9V2k7cmV0dXJuIHZvaWQgMCE9PWkmJihpPUx0KGkpLGM9emkpLGUuY2FsbChhLGMsZnVuY3Rpb24oZSxhKXt2YXIgYztzd2l0Y2goYS5jaGFyQXQoMCkpe2Nhc2VcIiRcIjpyZXR1cm5cIiRcIjtjYXNlXCImXCI6cmV0dXJuIHQ7Y2FzZVwiYFwiOnJldHVybiByLnNsaWNlKDAsbik7Y2FzZVwiJ1wiOnJldHVybiByLnNsaWNlKHUpO2Nhc2VcIjxcIjpjPWlbYS5zbGljZSgxLC0xKV07YnJlYWs7ZGVmYXVsdDp2YXIgZj0rYTtpZigwPT09ZilyZXR1cm4gZTtpZihmPnMpe3ZhciBsPXFpKGYvMTApO3JldHVybiAwPT09bD9lOmw8PXM/dm9pZCAwPT09b1tsLTFdP2EuY2hhckF0KDEpOm9bbC0xXSthLmNoYXJBdCgxKTplfWM9b1tmLTFdfXJldHVybiB2b2lkIDA9PT1jP1wiXCI6Y30pfX0pLF9pKFwic2VhcmNoXCIsMSxmdW5jdGlvbih0LGUscil7cmV0dXJuW2Z1bmN0aW9uKGUpe3ZhciByPWQodGhpcyksbj1udWxsPT1lP3ZvaWQgMDplW3RdO3JldHVybiB2b2lkIDAhPT1uP24uY2FsbChlLHIpOm5ldyBSZWdFeHAoZSlbdF0oU3RyaW5nKHIpKX0sZnVuY3Rpb24odCl7dmFyIG49cihlLHQsdGhpcyk7aWYobi5kb25lKXJldHVybiBuLnZhbHVlO3ZhciBvPVIodCksaT1TdHJpbmcodGhpcyksYT1vLmxhc3RJbmRleDtHbihhLDApfHwoby5sYXN0SW5kZXg9MCk7dmFyIHU9RmkobyxpKTtyZXR1cm4gR24oby5sYXN0SW5kZXgsYSl8fChvLmxhc3RJbmRleD1hKSxudWxsPT09dT8tMTp1LmluZGV4fV19KTt2YXIgS2k9W10ucHVzaCxHaT1NYXRoLm1pbiwkaT00Mjk0OTY3Mjk1LFZpPSFvKGZ1bmN0aW9uKCl7cmV0dXJuIVJlZ0V4cCgkaSxcInlcIil9KTtfaShcInNwbGl0XCIsMixmdW5jdGlvbih0LGUscil7dmFyIG47cmV0dXJuIG49XCJjXCI9PVwiYWJiY1wiLnNwbGl0KC8oYikqLylbMV18fDQhPVwidGVzdFwiLnNwbGl0KC8oPzopLywtMSkubGVuZ3RofHwyIT1cImFiXCIuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGh8fDQhPVwiLlwiLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aHx8XCIuXCIuc3BsaXQoLygpKCkvKS5sZW5ndGg+MXx8XCJcIi5zcGxpdCgvLj8vKS5sZW5ndGg/ZnVuY3Rpb24odCxyKXt2YXIgbj1TdHJpbmcoZCh0aGlzKSksbz12b2lkIDA9PT1yPyRpOnI+Pj4wO2lmKDA9PT1vKXJldHVybltdO2lmKHZvaWQgMD09PXQpcmV0dXJuW25dO2lmKCFYbyh0KSlyZXR1cm4gZS5jYWxsKG4sdCxvKTtmb3IodmFyIGksYSx1LHM9W10sYz0wLGY9bmV3IFJlZ0V4cCh0LnNvdXJjZSwodC5pZ25vcmVDYXNlP1wiaVwiOlwiXCIpKyh0Lm11bHRpbGluZT9cIm1cIjpcIlwiKSsodC51bmljb2RlP1widVwiOlwiXCIpKyh0LnN0aWNreT9cInlcIjpcIlwiKStcImdcIik7KGk9RWkuY2FsbChmLG4pKSYmISgoYT1mLmxhc3RJbmRleCk+YyYmKHMucHVzaChuLnNsaWNlKGMsaS5pbmRleCkpLGkubGVuZ3RoPjEmJmkuaW5kZXg8bi5sZW5ndGgmJktpLmFwcGx5KHMsaS5zbGljZSgxKSksdT1pWzBdLmxlbmd0aCxjPWEscy5sZW5ndGg+PW8pKTspZi5sYXN0SW5kZXg9PT1pLmluZGV4JiZmLmxhc3RJbmRleCsrO3JldHVybiBjPT09bi5sZW5ndGg/IXUmJmYudGVzdChcIlwiKXx8cy5wdXNoKFwiXCIpOnMucHVzaChuLnNsaWNlKGMpKSxzLmxlbmd0aD5vP3Muc2xpY2UoMCxvKTpzfTpcIjBcIi5zcGxpdCh2b2lkIDAsMCkubGVuZ3RoP2Z1bmN0aW9uKHQscil7cmV0dXJuIHZvaWQgMD09PXQmJjA9PT1yP1tdOmUuY2FsbCh0aGlzLHQscil9OmUsW2Z1bmN0aW9uKGUscil7dmFyIG89ZCh0aGlzKSxpPW51bGw9PWU/dm9pZCAwOmVbdF07cmV0dXJuIHZvaWQgMCE9PWk/aS5jYWxsKGUsbyxyKTpuLmNhbGwoU3RyaW5nKG8pLGUscil9LGZ1bmN0aW9uKHQsbyl7dmFyIGk9cihuLHQsdGhpcyxvLG4hPT1lKTtpZihpLmRvbmUpcmV0dXJuIGkudmFsdWU7dmFyIGE9Uih0KSx1PVN0cmluZyh0aGlzKSxzPXNuKGEsUmVnRXhwKSxjPWEudW5pY29kZSxmPW5ldyBzKFZpP2E6XCJeKD86XCIrYS5zb3VyY2UrXCIpXCIsKGEuaWdub3JlQ2FzZT9cImlcIjpcIlwiKSsoYS5tdWx0aWxpbmU/XCJtXCI6XCJcIikrKGEudW5pY29kZT9cInVcIjpcIlwiKSsoVmk/XCJ5XCI6XCJnXCIpKSxsPXZvaWQgMD09PW8/JGk6bz4+PjA7aWYoMD09PWwpcmV0dXJuW107aWYoMD09PXUubGVuZ3RoKXJldHVybiBudWxsPT09RmkoZix1KT9bdV06W107Zm9yKHZhciBoPTAscD0wLGQ9W107cDx1Lmxlbmd0aDspe2YubGFzdEluZGV4PVZpP3A6MDt2YXIgdixnPUZpKGYsVmk/dTp1LnNsaWNlKHApKTtpZihudWxsPT09Z3x8KHY9R2koY3QoZi5sYXN0SW5kZXgrKFZpPzA6cCkpLHUubGVuZ3RoKSk9PT1oKXA9Q2kodSxwLGMpO2Vsc2V7aWYoZC5wdXNoKHUuc2xpY2UoaCxwKSksZC5sZW5ndGg9PT1sKXJldHVybiBkO2Zvcih2YXIgeT0xO3k8PWcubGVuZ3RoLTE7eSsrKWlmKGQucHVzaChnW3ldKSxkLmxlbmd0aD09PWwpcmV0dXJuIGQ7cD1oPXZ9fXJldHVybiBkLnB1c2godS5zbGljZShoKSksZH1dfSwhVmkpLGt0KHt0YXJnZXQ6XCJTZXRcIixzdGF0OiEwfSx7ZnJvbTplbn0pLGt0KHt0YXJnZXQ6XCJTZXRcIixzdGF0OiEwfSx7b2Y6cm59KTt2YXIgSGk9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9Uih0aGlzKSxlPVF0KHQuYWRkKSxyPTAsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZS5jYWxsKHQsYXJndW1lbnRzW3JdKTtyZXR1cm4gdH07a3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHthZGRBbGw6ZnVuY3Rpb24oKXtyZXR1cm4gSGkuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZGVsZXRlQWxsOmZ1bmN0aW9uKCl7cmV0dXJuIG5uLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KTt2YXIgWGk9ZnVuY3Rpb24odCl7cmV0dXJuIFNldC5wcm90b3R5cGUudmFsdWVzLmNhbGwodCl9O2t0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZXZlcnk6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPVhpKGUpLG49WnQodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwzKTtyZXR1cm4hTXIocixmdW5jdGlvbih0KXtpZighbih0LHQsZSkpcmV0dXJuIE1yLnN0b3AoKX0sdm9pZCAwLCExLCEwKS5zdG9wcGVkfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZGlmZmVyZW5jZTpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9bmV3KHNuKGUsb3QoXCJTZXRcIikpKShlKSxuPVF0KHIuZGVsZXRlKTtyZXR1cm4gTXIodCxmdW5jdGlvbih0KXtuLmNhbGwocix0KX0pLHJ9fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtmaWx0ZXI6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPVhpKGUpLG49WnQodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwzKSxvPW5ldyhzbihlLG90KFwiU2V0XCIpKSksaT1RdChvLmFkZCk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCl7bih0LHQsZSkmJmkuY2FsbChvLHQpfSx2b2lkIDAsITEsITApLG99fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtmaW5kOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1YaShlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCl7aWYobih0LHQsZSkpcmV0dXJuIE1yLnN0b3AodCl9LHZvaWQgMCwhMSwhMCkucmVzdWx0fX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7aW50ZXJzZWN0aW9uOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1uZXcoc24oZSxvdChcIlNldFwiKSkpLG49UXQoZS5oYXMpLG89UXQoci5hZGQpO3JldHVybiBNcih0LGZ1bmN0aW9uKHQpe24uY2FsbChlLHQpJiZvLmNhbGwocix0KX0pLHJ9fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtpc0Rpc2pvaW50RnJvbTpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9UXQoZS5oYXMpO3JldHVybiFNcih0LGZ1bmN0aW9uKHQpe2lmKCEwPT09ci5jYWxsKGUsdCkpcmV0dXJuIE1yLnN0b3AoKX0pLnN0b3BwZWR9fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtpc1N1YnNldE9mOmZ1bmN0aW9uKHQpe3ZhciBlPW9uKHRoaXMpLHI9Uih0KSxuPXIuaGFzO3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIG4mJihyPW5ldyhvdChcIlNldFwiKSkodCksbj1RdChyLmhhcykpLCFNcihlLGZ1bmN0aW9uKHQpe2lmKCExPT09bi5jYWxsKHIsdCkpcmV0dXJuIE1yLnN0b3AoKX0sdm9pZCAwLCExLCEwKS5zdG9wcGVkfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7aXNTdXBlcnNldE9mOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1RdChlLmhhcyk7cmV0dXJuIU1yKHQsZnVuY3Rpb24odCl7aWYoITE9PT1yLmNhbGwoZSx0KSlyZXR1cm4gTXIuc3RvcCgpfSkuc3RvcHBlZH19KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2pvaW46ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPVhpKGUpLG49dm9pZCAwPT09dD9cIixcIjpTdHJpbmcodCksbz1bXTtyZXR1cm4gTXIocixvLnB1c2gsbywhMSwhMCksby5qb2luKG4pfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7bWFwOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1YaShlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyksbz1uZXcoc24oZSxvdChcIlNldFwiKSkpLGk9UXQoby5hZGQpO3JldHVybiBNcihyLGZ1bmN0aW9uKHQpe2kuY2FsbChvLG4odCx0LGUpKX0sdm9pZCAwLCExLCEwKSxvfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7cmVkdWNlOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1YaShlKSxuPWFyZ3VtZW50cy5sZW5ndGg8MixvPW4/dm9pZCAwOmFyZ3VtZW50c1sxXTtpZihRdCh0KSxNcihyLGZ1bmN0aW9uKHIpe24/KG49ITEsbz1yKTpvPXQobyxyLHIsZSl9LHZvaWQgMCwhMSwhMCksbil0aHJvdyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgc2V0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtyZXR1cm4gb319KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se3NvbWU6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPVhpKGUpLG49WnQodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwzKTtyZXR1cm4gTXIocixmdW5jdGlvbih0KXtpZihuKHQsdCxlKSlyZXR1cm4gTXIuc3RvcCgpfSx2b2lkIDAsITEsITApLnN0b3BwZWR9fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtzeW1tZXRyaWNEaWZmZXJlbmNlOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1uZXcoc24oZSxvdChcIlNldFwiKSkpKGUpLG49UXQoci5kZWxldGUpLG89UXQoci5hZGQpO3JldHVybiBNcih0LGZ1bmN0aW9uKHQpe24uY2FsbChyLHQpfHxvLmNhbGwocix0KX0pLHJ9fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHt1bmlvbjpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9bmV3KHNuKGUsb3QoXCJTZXRcIikpKShlKTtyZXR1cm4gTXIodCxRdChyLmFkZCkscikscn19KTt2YXIgWWksSmksUWk9b3QoXCJuYXZpZ2F0b3JcIixcInVzZXJBZ2VudFwiKXx8XCJcIixaaT1uLnByb2Nlc3MsdGE9WmkmJlppLnZlcnNpb25zLGVhPXRhJiZ0YS52ODtlYT9KaT0oWWk9ZWEuc3BsaXQoXCIuXCIpKVswXStZaVsxXTpRaSYmKCEoWWk9UWkubWF0Y2goL0VkZ2VcXC8oXFxkKykvKSl8fFlpWzFdPj03NCkmJihZaT1RaS5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLykpJiYoSmk9WWlbMV0pO3ZhciByYT1KaSYmK0ppLG5hPUR0KFwic3BlY2llc1wiKSxvYT1EdChcImlzQ29uY2F0U3ByZWFkYWJsZVwiKSxpYT05MDA3MTk5MjU0NzQwOTkxLGFhPVwiTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkXCIsdWE9cmE+PTUxfHwhbyhmdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiB0W29hXT0hMSx0LmNvbmNhdCgpWzBdIT09dH0pLHNhPXJhPj01MXx8IW8oZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4odC5jb25zdHJ1Y3Rvcj17fSlbbmFdPWZ1bmN0aW9uKCl7cmV0dXJue2ZvbzoxfX0sMSE9PXQuY29uY2F0KEJvb2xlYW4pLmZvb30pLGNhPWZ1bmN0aW9uKHQpe2lmKCFnKHQpKXJldHVybiExO3ZhciBlPXRbb2FdO3JldHVybiB2b2lkIDAhPT1lPyEhZTpyZSh0KX07a3Qoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITAsZm9yY2VkOiF1YXx8IXNhfSx7Y29uY2F0OmZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGksYT1MdCh0aGlzKSx1PW9lKGEsMCkscz0wO2ZvcihlPS0xLG49YXJndW1lbnRzLmxlbmd0aDtlPG47ZSsrKWlmKGNhKGk9LTE9PT1lP2E6YXJndW1lbnRzW2VdKSl7aWYocysobz1jdChpLmxlbmd0aCkpPmlhKXRocm93IFR5cGVFcnJvcihhYSk7Zm9yKHI9MDtyPG87cisrLHMrKylyIGluIGkmJm9yKHUscyxpW3JdKX1lbHNle2lmKHM+PWlhKXRocm93IFR5cGVFcnJvcihhYSk7b3IodSxzKyssaSl9cmV0dXJuIHUubGVuZ3RoPXMsdX19KTt2YXIgZmE9YnQuZixsYT17fS50b1N0cmluZyxoYT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10scGE9e2Y6ZnVuY3Rpb24odCl7cmV0dXJuIGhhJiZcIltvYmplY3QgV2luZG93XVwiPT1sYS5jYWxsKHQpP2Z1bmN0aW9uKHQpe3RyeXtyZXR1cm4gZmEodCl9Y2F0Y2godCl7cmV0dXJuIGhhLnNsaWNlKCl9fSh0KTpmYSh2KHQpKX19LGRhPXtmOkR0fSx2YT1QLmYsZ2E9ZnVuY3Rpb24odCl7dmFyIGU9cnQuU3ltYm9sfHwocnQuU3ltYm9sPXt9KTtiKGUsdCl8fHZhKGUsdCx7dmFsdWU6ZGEuZih0KX0pfSx5YT11ZS5mb3JFYWNoLG1hPSQoXCJoaWRkZW5cIiksYmE9XCJTeW1ib2xcIix3YT1EdChcInRvUHJpbWl0aXZlXCIpLFNhPXR0LnNldCxFYT10dC5nZXR0ZXJGb3IoYmEpLHhhPU9iamVjdC5wcm90b3R5cGUsQWE9bi5TeW1ib2wsT2E9b3QoXCJKU09OXCIsXCJzdHJpbmdpZnlcIiksUmE9Ty5mLGphPVAuZixQYT1wYS5mLElhPXMuZixUYT1xKFwic3ltYm9sc1wiKSxrYT1xKFwib3Atc3ltYm9sc1wiKSxMYT1xKFwic3RyaW5nLXRvLXN5bWJvbC1yZWdpc3RyeVwiKSxVYT1xKFwic3ltYm9sLXRvLXN0cmluZy1yZWdpc3RyeVwiKSxNYT1xKFwid2tzXCIpLF9hPW4uUU9iamVjdCxOYT0hX2F8fCFfYS5wcm90b3R5cGV8fCFfYS5wcm90b3R5cGUuZmluZENoaWxkLENhPWkmJm8oZnVuY3Rpb24oKXtyZXR1cm4gNyE9SHQoamEoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBqYSh0aGlzLFwiYVwiLHt2YWx1ZTo3fSkuYX19KSkuYX0pP2Z1bmN0aW9uKHQsZSxyKXt2YXIgbj1SYSh4YSxlKTtuJiZkZWxldGUgeGFbZV0samEodCxlLHIpLG4mJnQhPT14YSYmamEoeGEsZSxuKX06amEsRmE9ZnVuY3Rpb24odCxlKXt2YXIgcj1UYVt0XT1IdChBYS5wcm90b3R5cGUpO3JldHVybiBTYShyLHt0eXBlOmJhLHRhZzp0LGRlc2NyaXB0aW9uOmV9KSxpfHwoci5kZXNjcmlwdGlvbj1lKSxyfSxCYT1OdD9mdW5jdGlvbih0KXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdCh0KWluc3RhbmNlb2YgQWF9LERhPWZ1bmN0aW9uKHQsZSxyKXt0PT09eGEmJkRhKGthLGUsciksUih0KTt2YXIgbj15KGUsITApO3JldHVybiBSKHIpLGIoVGEsbik/KHIuZW51bWVyYWJsZT8oYih0LG1hKSYmdFttYV1bbl0mJih0W21hXVtuXT0hMSkscj1IdChyLHtlbnVtZXJhYmxlOmMoMCwhMSl9KSk6KGIodCxtYSl8fGphKHQsbWEsYygxLHt9KSksdFttYV1bbl09ITApLENhKHQsbixyKSk6amEodCxuLHIpfSxxYT1mdW5jdGlvbih0LGUpe1IodCk7dmFyIHI9dihlKSxuPXF0KHIpLmNvbmNhdChHYShyKSk7cmV0dXJuIHlhKG4sZnVuY3Rpb24oZSl7aSYmIXphLmNhbGwocixlKXx8RGEodCxlLHJbZV0pfSksdH0semE9ZnVuY3Rpb24odCl7dmFyIGU9eSh0LCEwKSxyPUlhLmNhbGwodGhpcyxlKTtyZXR1cm4hKHRoaXM9PT14YSYmYihUYSxlKSYmIWIoa2EsZSkpJiYoIShyfHwhYih0aGlzLGUpfHwhYihUYSxlKXx8Yih0aGlzLG1hKSYmdGhpc1ttYV1bZV0pfHxyKX0sV2E9ZnVuY3Rpb24odCxlKXt2YXIgcj12KHQpLG49eShlLCEwKTtpZihyIT09eGF8fCFiKFRhLG4pfHxiKGthLG4pKXt2YXIgbz1SYShyLG4pO3JldHVybiFvfHwhYihUYSxuKXx8YihyLG1hKSYmclttYV1bbl18fChvLmVudW1lcmFibGU9ITApLG99fSxLYT1mdW5jdGlvbih0KXt2YXIgZT1QYSh2KHQpKSxyPVtdO3JldHVybiB5YShlLGZ1bmN0aW9uKHQpe2IoVGEsdCl8fGIoVix0KXx8ci5wdXNoKHQpfSkscn0sR2E9ZnVuY3Rpb24odCl7dmFyIGU9dD09PXhhLHI9UGEoZT9rYTp2KHQpKSxuPVtdO3JldHVybiB5YShyLGZ1bmN0aW9uKHQpeyFiKFRhLHQpfHxlJiYhYih4YSx0KXx8bi5wdXNoKFRhW3RdKX0pLG59O2lmKF90fHwoZXQoKEFhPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIEFhKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTt2YXIgdD1hcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/U3RyaW5nKGFyZ3VtZW50c1swXSk6dm9pZCAwLGU9Syh0KSxyPWZ1bmN0aW9uIHQocil7dGhpcz09PXhhJiZ0LmNhbGwoa2EsciksYih0aGlzLG1hKSYmYih0aGlzW21hXSxlKSYmKHRoaXNbbWFdW2VdPSExKSxDYSh0aGlzLGUsYygxLHIpKX07cmV0dXJuIGkmJk5hJiZDYSh4YSxlLHtjb25maWd1cmFibGU6ITAsc2V0OnJ9KSxGYShlLHQpfSkucHJvdG90eXBlLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiBFYSh0aGlzKS50YWd9KSxldChBYSxcIndpdGhvdXRTZXR0ZXJcIixmdW5jdGlvbih0KXtyZXR1cm4gRmEoSyh0KSx0KX0pLHMuZj16YSxQLmY9RGEsTy5mPVdhLGJ0LmY9cGEuZj1LYSx3dC5mPUdhLGRhLmY9ZnVuY3Rpb24odCl7cmV0dXJuIEZhKER0KHQpLHQpfSxpJiYoamEoQWEucHJvdG90eXBlLFwiZGVzY3JpcHRpb25cIix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBFYSh0aGlzKS5kZXNjcmlwdGlvbn19KSxldCh4YSxcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsemEse3Vuc2FmZTohMH0pKSksa3Qoe2dsb2JhbDohMCx3cmFwOiEwLGZvcmNlZDohX3Qsc2hhbTohX3R9LHtTeW1ib2w6QWF9KSx5YShxdChNYSksZnVuY3Rpb24odCl7Z2EodCl9KSxrdCh7dGFyZ2V0OmJhLHN0YXQ6ITAsZm9yY2VkOiFfdH0se2ZvcjpmdW5jdGlvbih0KXt2YXIgZT1TdHJpbmcodCk7aWYoYihMYSxlKSlyZXR1cm4gTGFbZV07dmFyIHI9QWEoZSk7cmV0dXJuIExhW2VdPXIsVWFbcl09ZSxyfSxrZXlGb3I6ZnVuY3Rpb24odCl7aWYoIUJhKHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIHN5bWJvbFwiKTtpZihiKFVhLHQpKXJldHVybiBVYVt0XX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7TmE9ITB9LHVzZVNpbXBsZTpmdW5jdGlvbigpe05hPSExfX0pLGt0KHt0YXJnZXQ6XCJPYmplY3RcIixzdGF0OiEwLGZvcmNlZDohX3Qsc2hhbTohaX0se2NyZWF0ZTpmdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT1lP0h0KHQpOnFhKEh0KHQpLGUpfSxkZWZpbmVQcm9wZXJ0eTpEYSxkZWZpbmVQcm9wZXJ0aWVzOnFhLGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpXYX0pLGt0KHt0YXJnZXQ6XCJPYmplY3RcIixzdGF0OiEwLGZvcmNlZDohX3R9LHtnZXRPd25Qcm9wZXJ0eU5hbWVzOkthLGdldE93blByb3BlcnR5U3ltYm9sczpHYX0pLGt0KHt0YXJnZXQ6XCJPYmplY3RcIixzdGF0OiEwLGZvcmNlZDpvKGZ1bmN0aW9uKCl7d3QuZigxKX0pfSx7Z2V0T3duUHJvcGVydHlTeW1ib2xzOmZ1bmN0aW9uKHQpe3JldHVybiB3dC5mKEx0KHQpKX19KSxPYSl7dmFyICRhPSFfdHx8byhmdW5jdGlvbigpe3ZhciB0PUFhKCk7cmV0dXJuXCJbbnVsbF1cIiE9T2EoW3RdKXx8XCJ7fVwiIT1PYSh7YTp0fSl8fFwie31cIiE9T2EoT2JqZWN0KHQpKX0pO2t0KHt0YXJnZXQ6XCJKU09OXCIsc3RhdDohMCxmb3JjZWQ6JGF9LHtzdHJpbmdpZnk6ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgbixvPVt0XSxpPTE7YXJndW1lbnRzLmxlbmd0aD5pOylvLnB1c2goYXJndW1lbnRzW2krK10pO2lmKG49ZSwoZyhlKXx8dm9pZCAwIT09dCkmJiFCYSh0KSlyZXR1cm4gcmUoZSl8fChlPWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKGU9bi5jYWxsKHRoaXMsdCxlKSksIUJhKGUpKXJldHVybiBlfSksb1sxXT1lLE9hLmFwcGx5KG51bGwsbyl9fSl9QWEucHJvdG90eXBlW3dhXXx8SShBYS5wcm90b3R5cGUsd2EsQWEucHJvdG90eXBlLnZhbHVlT2YpLF9lKEFhLGJhKSxWW21hXT0hMCxnYShcImFzeW5jSXRlcmF0b3JcIik7dmFyIFZhPVAuZixIYT1uLlN5bWJvbDtpZihpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBIYSYmKCEoXCJkZXNjcmlwdGlvblwiaW4gSGEucHJvdG90eXBlKXx8dm9pZCAwIT09SGEoKS5kZXNjcmlwdGlvbikpe3ZhciBYYT17fSxZYT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg8MXx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3ZvaWQgMDpTdHJpbmcoYXJndW1lbnRzWzBdKSxlPXRoaXMgaW5zdGFuY2VvZiBZYT9uZXcgSGEodCk6dm9pZCAwPT09dD9IYSgpOkhhKHQpO3JldHVyblwiXCI9PT10JiYoWGFbZV09ITApLGV9O0V0KFlhLEhhKTt2YXIgSmE9WWEucHJvdG90eXBlPUhhLnByb3RvdHlwZTtKYS5jb25zdHJ1Y3Rvcj1ZYTt2YXIgUWE9SmEudG9TdHJpbmcsWmE9XCJTeW1ib2wodGVzdClcIj09U3RyaW5nKEhhKFwidGVzdFwiKSksdHU9L15TeW1ib2xcXCgoLiopXFwpW14pXSskLztWYShKYSxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD1nKHRoaXMpP3RoaXMudmFsdWVPZigpOnRoaXMsZT1RYS5jYWxsKHQpO2lmKGIoWGEsdCkpcmV0dXJuXCJcIjt2YXIgcj1aYT9lLnNsaWNlKDcsLTEpOmUucmVwbGFjZSh0dSxcIiQxXCIpO3JldHVyblwiXCI9PT1yP3ZvaWQgMDpyfX0pLGt0KHtnbG9iYWw6ITAsZm9yY2VkOiEwfSx7U3ltYm9sOllhfSl9Z2EoXCJoYXNJbnN0YW5jZVwiKSxnYShcImlzQ29uY2F0U3ByZWFkYWJsZVwiKSxnYShcIml0ZXJhdG9yXCIpLGdhKFwibWF0Y2hcIiksZ2EoXCJtYXRjaEFsbFwiKSxnYShcInJlcGxhY2VcIiksZ2EoXCJzZWFyY2hcIiksZ2EoXCJzcGVjaWVzXCIpLGdhKFwic3BsaXRcIiksZ2EoXCJ0b1ByaW1pdGl2ZVwiKSxnYShcInRvU3RyaW5nVGFnXCIpLGdhKFwidW5zY29wYWJsZXNcIiksX2UoTWF0aCxcIk1hdGhcIiwhMCksX2Uobi5KU09OLFwiSlNPTlwiLCEwKSxnYShcImFzeW5jRGlzcG9zZVwiKSxnYShcImRpc3Bvc2VcIiksZ2EoXCJvYnNlcnZhYmxlXCIpLGdhKFwicGF0dGVybk1hdGNoXCIpLGdhKFwicmVwbGFjZUFsbFwiKSxkYS5mKFwiYXN5bmNJdGVyYXRvclwiKTt2YXIgZXU9T2UuY29kZUF0O2t0KHt0YXJnZXQ6XCJTdHJpbmdcIixwcm90bzohMH0se2NvZGVQb2ludEF0OmZ1bmN0aW9uKHQpe3JldHVybiBldSh0aGlzLHQpfX0pLGVlKFwiU3RyaW5nXCIsXCJjb2RlUG9pbnRBdFwiKTt2YXIgcnUsbnU9ZnVuY3Rpb24odCl7aWYoWG8odCkpdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO3JldHVybiB0fSxvdT1EdChcIm1hdGNoXCIpLGl1PWZ1bmN0aW9uKHQpe3ZhciBlPS8uLzt0cnl7XCIvLi9cIlt0XShlKX1jYXRjaChyKXt0cnl7cmV0dXJuIGVbb3VdPSExLFwiLy4vXCJbdF0oZSl9Y2F0Y2godCl7fX1yZXR1cm4hMX0sYXU9Ty5mLHV1PVwiXCIuZW5kc1dpdGgsc3U9TWF0aC5taW4sY3U9aXUoXCJlbmRzV2l0aFwiKSxmdT0hKGN1fHwocnU9YXUoU3RyaW5nLnByb3RvdHlwZSxcImVuZHNXaXRoXCIpLCFydXx8cnUud3JpdGFibGUpKTtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOiFmdSYmIWN1fSx7ZW5kc1dpdGg6ZnVuY3Rpb24odCl7dmFyIGU9U3RyaW5nKGQodGhpcykpO251KHQpO3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLG49Y3QoZS5sZW5ndGgpLG89dm9pZCAwPT09cj9uOnN1KGN0KHIpLG4pLGk9U3RyaW5nKHQpO3JldHVybiB1dT91dS5jYWxsKGUsaSxvKTplLnNsaWNlKG8taS5sZW5ndGgsbyk9PT1pfX0pLGVlKFwiU3RyaW5nXCIsXCJlbmRzV2l0aFwiKTt2YXIgbHU9U3RyaW5nLmZyb21DaGFyQ29kZSxodT1TdHJpbmcuZnJvbUNvZGVQb2ludDtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIsc3RhdDohMCxmb3JjZWQ6ISFodSYmMSE9aHUubGVuZ3RofSx7ZnJvbUNvZGVQb2ludDpmdW5jdGlvbih0KXtmb3IodmFyIGUscj1bXSxuPWFyZ3VtZW50cy5sZW5ndGgsbz0wO24+bzspe2lmKGU9K2FyZ3VtZW50c1tvKytdLGh0KGUsMTExNDExMSkhPT1lKXRocm93IFJhbmdlRXJyb3IoZStcIiBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50XCIpO3IucHVzaChlPDY1NTM2P2x1KGUpOmx1KDU1Mjk2KygoZS09NjU1MzYpPj4xMCksZSUxMDI0KzU2MzIwKSl9cmV0dXJuIHIuam9pbihcIlwiKX19KSxrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOiFpdShcImluY2x1ZGVzXCIpfSx7aW5jbHVkZXM6ZnVuY3Rpb24odCl7cmV0dXJuISF+U3RyaW5nKGQodGhpcykpLmluZGV4T2YobnUodCksYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLGVlKFwiU3RyaW5nXCIsXCJpbmNsdWRlc1wiKTt2YXIgcHU9XCJcIi5yZXBlYXR8fGZ1bmN0aW9uKHQpe3ZhciBlPVN0cmluZyhkKHRoaXMpKSxyPVwiXCIsbj11dCh0KTtpZihuPDB8fEluZmluaXR5PT1uKXRocm93IFJhbmdlRXJyb3IoXCJXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnNcIik7Zm9yKDtuPjA7KG4+Pj49MSkmJihlKz1lKSkxJm4mJihyKz1lKTtyZXR1cm4gcn0sZHU9TWF0aC5jZWlsLHZ1PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIsbil7dmFyIG8saSxhPVN0cmluZyhkKGUpKSx1PWEubGVuZ3RoLHM9dm9pZCAwPT09bj9cIiBcIjpTdHJpbmcobiksYz1jdChyKTtyZXR1cm4gYzw9dXx8XCJcIj09cz9hOigoaT1wdS5jYWxsKHMsZHUoKG89Yy11KS9zLmxlbmd0aCkpKS5sZW5ndGg+byYmKGk9aS5zbGljZSgwLG8pKSx0P2EraTppK2EpfX0sZ3U9e3N0YXJ0OnZ1KCExKSxlbmQ6dnUoITApfSx5dT0vVmVyc2lvblxcLzEwXFwuXFxkKyhcXC5cXGQrKT8oIE1vYmlsZVxcL1xcdyspPyBTYWZhcmlcXC8vLnRlc3QoUWkpLG11PWd1LnN0YXJ0O2t0KHt0YXJnZXQ6XCJTdHJpbmdcIixwcm90bzohMCxmb3JjZWQ6eXV9LHtwYWRTdGFydDpmdW5jdGlvbih0KXtyZXR1cm4gbXUodGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxlZShcIlN0cmluZ1wiLFwicGFkU3RhcnRcIik7dmFyIGJ1PWd1LmVuZDtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOnl1fSx7cGFkRW5kOmZ1bmN0aW9uKHQpe3JldHVybiBidSh0aGlzLHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLGVlKFwiU3RyaW5nXCIsXCJwYWRFbmRcIiksa3Qoe3RhcmdldDpcIlN0cmluZ1wiLHN0YXQ6ITB9LHtyYXc6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXYodC5yYXcpLHI9Y3QoZS5sZW5ndGgpLG49YXJndW1lbnRzLmxlbmd0aCxvPVtdLGk9MDtyPmk7KW8ucHVzaChTdHJpbmcoZVtpKytdKSksaTxuJiZvLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpO3JldHVybiBvLmpvaW4oXCJcIil9fSksa3Qoe3RhcmdldDpcIlN0cmluZ1wiLHByb3RvOiEwfSx7cmVwZWF0OnB1fSksZWUoXCJTdHJpbmdcIixcInJlcGVhdFwiKTt2YXIgd3U9Ty5mLFN1PVwiXCIuc3RhcnRzV2l0aCxFdT1NYXRoLm1pbix4dT1pdShcInN0YXJ0c1dpdGhcIiksQXU9IXh1JiYhIWZ1bmN0aW9uKCl7dmFyIHQ9d3UoU3RyaW5nLnByb3RvdHlwZSxcInN0YXJ0c1dpdGhcIik7cmV0dXJuIHQmJiF0LndyaXRhYmxlfSgpO2t0KHt0YXJnZXQ6XCJTdHJpbmdcIixwcm90bzohMCxmb3JjZWQ6IUF1JiYheHV9LHtzdGFydHNXaXRoOmZ1bmN0aW9uKHQpe3ZhciBlPVN0cmluZyhkKHRoaXMpKTtudSh0KTt2YXIgcj1jdChFdShhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxlLmxlbmd0aCkpLG49U3RyaW5nKHQpO3JldHVybiBTdT9TdS5jYWxsKGUsbixyKTplLnNsaWNlKHIscituLmxlbmd0aCk9PT1ufX0pLGVlKFwiU3RyaW5nXCIsXCJzdGFydHNXaXRoXCIpO3ZhciBPdT1mdW5jdGlvbih0KXtyZXR1cm4gbyhmdW5jdGlvbigpe3JldHVybiEhZm5bdF0oKXx8XCLigIvCheGgjlwiIT1cIuKAi8KF4aCOXCJbdF0oKXx8Zm5bdF0ubmFtZSE9PXR9KX0sUnU9dm4uc3RhcnQsanU9T3UoXCJ0cmltU3RhcnRcIiksUHU9anU/ZnVuY3Rpb24oKXtyZXR1cm4gUnUodGhpcyl9OlwiXCIudHJpbVN0YXJ0O2t0KHt0YXJnZXQ6XCJTdHJpbmdcIixwcm90bzohMCxmb3JjZWQ6anV9LHt0cmltU3RhcnQ6UHUsdHJpbUxlZnQ6UHV9KSxlZShcIlN0cmluZ1wiLFwidHJpbUxlZnRcIik7dmFyIEl1PXZuLmVuZCxUdT1PdShcInRyaW1FbmRcIiksa3U9VHU/ZnVuY3Rpb24oKXtyZXR1cm4gSXUodGhpcyl9OlwiXCIudHJpbUVuZDtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOlR1fSx7dHJpbUVuZDprdSx0cmltUmlnaHQ6a3V9KSxlZShcIlN0cmluZ1wiLFwidHJpbVJpZ2h0XCIpO3ZhciBMdT1EdChcIml0ZXJhdG9yXCIpLFV1PSFvKGZ1bmN0aW9uKCl7dmFyIHQ9bmV3IFVSTChcImI/YT0xJmI9MiZjPTNcIixcImh0dHA6Ly9hXCIpLGU9dC5zZWFyY2hQYXJhbXMscj1cIlwiO3JldHVybiB0LnBhdGhuYW1lPVwiYyUyMGRcIixlLmZvckVhY2goZnVuY3Rpb24odCxuKXtlLmRlbGV0ZShcImJcIikscis9bit0fSksIWUuc29ydHx8XCJodHRwOi8vYS9jJTIwZD9hPTEmYz0zXCIhPT10LmhyZWZ8fFwiM1wiIT09ZS5nZXQoXCJjXCIpfHxcImE9MVwiIT09U3RyaW5nKG5ldyBVUkxTZWFyY2hQYXJhbXMoXCI/YT0xXCIpKXx8IWVbTHVdfHxcImFcIiE9PW5ldyBVUkwoXCJodHRwczovL2FAYlwiKS51c2VybmFtZXx8XCJiXCIhPT1uZXcgVVJMU2VhcmNoUGFyYW1zKG5ldyBVUkxTZWFyY2hQYXJhbXMoXCJhPWJcIikpLmdldChcImFcIil8fFwieG4tLWUxYXliY1wiIT09bmV3IFVSTChcImh0dHA6Ly/RgtC10YHRglwiKS5ob3N0fHxcIiMlRDAlQjFcIiE9PW5ldyBVUkwoXCJodHRwOi8vYSPQsVwiKS5oYXNofHxcImExYzNcIiE9PXJ8fFwieFwiIT09bmV3IFVSTChcImh0dHA6Ly94XCIsdm9pZCAwKS5ob3N0fSksTXU9T2JqZWN0LmFzc2lnbixfdT1PYmplY3QuZGVmaW5lUHJvcGVydHksTnU9IU11fHxvKGZ1bmN0aW9uKCl7aWYoaSYmMSE9PU11KHtiOjF9LE11KF91KHt9LFwiYVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe191KHRoaXMsXCJiXCIse3ZhbHVlOjMsZW51bWVyYWJsZTohMX0pfX0pLHtiOjJ9KSkuYilyZXR1cm4hMDt2YXIgdD17fSxlPXt9LHI9U3ltYm9sKCksbj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbcl09NyxuLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7ZVt0XT10fSksNyE9TXUoe30sdClbcl18fHF0KE11KHt9LGUpKS5qb2luKFwiXCIpIT1ufSk/ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9THQodCksbj1hcmd1bWVudHMubGVuZ3RoLG89MSxhPXd0LmYsdT1zLmY7bj5vOylmb3IodmFyIGMsZj1wKGFyZ3VtZW50c1tvKytdKSxsPWE/cXQoZikuY29uY2F0KGEoZikpOnF0KGYpLGg9bC5sZW5ndGgsZD0wO2g+ZDspYz1sW2QrK10saSYmIXUuY2FsbChmLGMpfHwocltjXT1mW2NdKTtyZXR1cm4gcn06TXUsQ3U9MjE0NzQ4MzY0NyxGdT0vW15cXDAtXFx1MDA3RV0vLEJ1PS9bLlxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZyxEdT1cIk92ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzXCIscXU9TWF0aC5mbG9vcix6dT1TdHJpbmcuZnJvbUNoYXJDb2RlLFd1PWZ1bmN0aW9uKHQpe3JldHVybiB0KzIyKzc1Kih0PDI2KX0sS3U9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPTA7Zm9yKHQ9cj9xdSh0LzcwMCk6dD4+MSx0Kz1xdSh0L2UpO3Q+NDU1O24rPTM2KXQ9cXUodC8zNSk7cmV0dXJuIHF1KG4rMzYqdC8odCszOCkpfSxHdT1mdW5jdGlvbih0KXt2YXIgZSxyLG49W10sbz0odD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scj0wLG49dC5sZW5ndGg7cjxuOyl7dmFyIG89dC5jaGFyQ29kZUF0KHIrKyk7aWYobz49NTUyOTYmJm88PTU2MzE5JiZyPG4pe3ZhciBpPXQuY2hhckNvZGVBdChyKyspOzU2MzIwPT0oNjQ1MTImaSk/ZS5wdXNoKCgoMTAyMyZvKTw8MTApKygxMDIzJmkpKzY1NTM2KTooZS5wdXNoKG8pLHItLSl9ZWxzZSBlLnB1c2gobyl9cmV0dXJuIGV9KHQpKS5sZW5ndGgsaT0xMjgsYT0wLHU9NzI7Zm9yKGU9MDtlPHQubGVuZ3RoO2UrKykocj10W2VdKTwxMjgmJm4ucHVzaCh6dShyKSk7dmFyIHM9bi5sZW5ndGgsYz1zO2ZvcihzJiZuLnB1c2goXCItXCIpO2M8bzspe3ZhciBmPUN1O2ZvcihlPTA7ZTx0Lmxlbmd0aDtlKyspKHI9dFtlXSk+PWkmJnI8ZiYmKGY9cik7dmFyIGw9YysxO2lmKGYtaT5xdSgoQ3UtYSkvbCkpdGhyb3cgUmFuZ2VFcnJvcihEdSk7Zm9yKGErPShmLWkpKmwsaT1mLGU9MDtlPHQubGVuZ3RoO2UrKyl7aWYoKHI9dFtlXSk8aSYmKythPkN1KXRocm93IFJhbmdlRXJyb3IoRHUpO2lmKHI9PWkpe2Zvcih2YXIgaD1hLHA9MzY7O3ArPTM2KXt2YXIgZD1wPD11PzE6cD49dSsyNj8yNjpwLXU7aWYoaDxkKWJyZWFrO3ZhciB2PWgtZCxnPTM2LWQ7bi5wdXNoKHp1KFd1KGQrdiVnKSkpLGg9cXUodi9nKX1uLnB1c2goenUoV3UoaCkpKSx1PUt1KGEsbCxjPT1zKSxhPTAsKytjfX0rK2EsKytpfXJldHVybiBuLmpvaW4oXCJcIil9LCR1PW90KFwiZmV0Y2hcIiksVnU9b3QoXCJIZWFkZXJzXCIpLEh1PUR0KFwiaXRlcmF0b3JcIiksWHU9XCJVUkxTZWFyY2hQYXJhbXNcIixZdT1cIlVSTFNlYXJjaFBhcmFtc0l0ZXJhdG9yXCIsSnU9dHQuc2V0LFF1PXR0LmdldHRlckZvcihYdSksWnU9dHQuZ2V0dGVyRm9yKFl1KSx0cz0vXFwrL2csZXM9QXJyYXkoNCkscnM9ZnVuY3Rpb24odCl7cmV0dXJuIGVzW3QtMV18fChlc1t0LTFdPVJlZ0V4cChcIigoPzolW1xcXFxkYS1mXXsyfSl7XCIrdCtcIn0pXCIsXCJnaVwiKSl9LG5zPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHQpfWNhdGNoKGUpe3JldHVybiB0fX0sb3M9ZnVuY3Rpb24odCl7dmFyIGU9dC5yZXBsYWNlKHRzLFwiIFwiKSxyPTQ7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZSl9Y2F0Y2godCl7Zm9yKDtyOyllPWUucmVwbGFjZShycyhyLS0pLG5zKTtyZXR1cm4gZX19LGlzPS9bIScoKX5dfCUyMC9nLGFzPXtcIiFcIjpcIiUyMVwiLFwiJ1wiOlwiJTI3XCIsXCIoXCI6XCIlMjhcIixcIilcIjpcIiUyOVwiLFwiflwiOlwiJTdFXCIsXCIlMjBcIjpcIitcIn0sdXM9ZnVuY3Rpb24odCl7cmV0dXJuIGFzW3RdfSxzcz1mdW5jdGlvbih0KXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoaXMsdXMpfSxjcz1mdW5jdGlvbih0LGUpe2lmKGUpZm9yKHZhciByLG4sbz1lLnNwbGl0KFwiJlwiKSxpPTA7aTxvLmxlbmd0aDspKHI9b1tpKytdKS5sZW5ndGgmJihuPXIuc3BsaXQoXCI9XCIpLHQucHVzaCh7a2V5Om9zKG4uc2hpZnQoKSksdmFsdWU6b3Mobi5qb2luKFwiPVwiKSl9KSl9LGZzPWZ1bmN0aW9uKHQpe3RoaXMuZW50cmllcy5sZW5ndGg9MCxjcyh0aGlzLmVudHJpZXMsdCl9LGxzPWZ1bmN0aW9uKHQsZSl7aWYodDxlKXRocm93IFR5cGVFcnJvcihcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIpfSxocz1CZShmdW5jdGlvbih0LGUpe0p1KHRoaXMse3R5cGU6WXUsaXRlcmF0b3I6b24oUXUodCkuZW50cmllcyksa2luZDplfSl9LFwiSXRlcmF0b3JcIixmdW5jdGlvbigpe3ZhciB0PVp1KHRoaXMpLGU9dC5raW5kLHI9dC5pdGVyYXRvci5uZXh0KCksbj1yLnZhbHVlO3JldHVybiByLmRvbmV8fChyLnZhbHVlPVwia2V5c1wiPT09ZT9uLmtleTpcInZhbHVlc1wiPT09ZT9uLnZhbHVlOltuLmtleSxuLnZhbHVlXSkscn0pLHBzPWZ1bmN0aW9uKCl7X3IodGhpcyxwcyxYdSk7dmFyIHQsZSxyLG4sbyxpLGEsdSxzLGM9YXJndW1lbnRzLmxlbmd0aD4wP2FyZ3VtZW50c1swXTp2b2lkIDAsZj10aGlzLGw9W107aWYoSnUoZix7dHlwZTpYdSxlbnRyaWVzOmwsdXBkYXRlVVJMOmZ1bmN0aW9uKCl7fSx1cGRhdGVTZWFyY2hQYXJhbXM6ZnN9KSx2b2lkIDAhPT1jKWlmKGcoYykpaWYoXCJmdW5jdGlvblwiPT10eXBlb2YodD1scihjKSkpZm9yKHI9KGU9dC5jYWxsKGMpKS5uZXh0OyEobj1yLmNhbGwoZSkpLmRvbmU7KXtpZigoYT0oaT0obz1vbihSKG4udmFsdWUpKSkubmV4dCkuY2FsbChvKSkuZG9uZXx8KHU9aS5jYWxsKG8pKS5kb25lfHwhaS5jYWxsKG8pLmRvbmUpdGhyb3cgVHlwZUVycm9yKFwiRXhwZWN0ZWQgc2VxdWVuY2Ugd2l0aCBsZW5ndGggMlwiKTtsLnB1c2goe2tleTphLnZhbHVlK1wiXCIsdmFsdWU6dS52YWx1ZStcIlwifSl9ZWxzZSBmb3IocyBpbiBjKWIoYyxzKSYmbC5wdXNoKHtrZXk6cyx2YWx1ZTpjW3NdK1wiXCJ9KTtlbHNlIGNzKGwsXCJzdHJpbmdcIj09dHlwZW9mIGM/XCI/XCI9PT1jLmNoYXJBdCgwKT9jLnNsaWNlKDEpOmM6YytcIlwiKX0sZHM9cHMucHJvdG90eXBlO0ZyKGRzLHthcHBlbmQ6ZnVuY3Rpb24odCxlKXtscyhhcmd1bWVudHMubGVuZ3RoLDIpO3ZhciByPVF1KHRoaXMpO3IuZW50cmllcy5wdXNoKHtrZXk6dCtcIlwiLHZhbHVlOmUrXCJcIn0pLHIudXBkYXRlVVJMKCl9LGRlbGV0ZTpmdW5jdGlvbih0KXtscyhhcmd1bWVudHMubGVuZ3RoLDEpO2Zvcih2YXIgZT1RdSh0aGlzKSxyPWUuZW50cmllcyxuPXQrXCJcIixvPTA7bzxyLmxlbmd0aDspcltvXS5rZXk9PT1uP3Iuc3BsaWNlKG8sMSk6bysrO2UudXBkYXRlVVJMKCl9LGdldDpmdW5jdGlvbih0KXtscyhhcmd1bWVudHMubGVuZ3RoLDEpO2Zvcih2YXIgZT1RdSh0aGlzKS5lbnRyaWVzLHI9dCtcIlwiLG49MDtuPGUubGVuZ3RoO24rKylpZihlW25dLmtleT09PXIpcmV0dXJuIGVbbl0udmFsdWU7cmV0dXJuIG51bGx9LGdldEFsbDpmdW5jdGlvbih0KXtscyhhcmd1bWVudHMubGVuZ3RoLDEpO2Zvcih2YXIgZT1RdSh0aGlzKS5lbnRyaWVzLHI9dCtcIlwiLG49W10sbz0wO288ZS5sZW5ndGg7bysrKWVbb10ua2V5PT09ciYmbi5wdXNoKGVbb10udmFsdWUpO3JldHVybiBufSxoYXM6ZnVuY3Rpb24odCl7bHMoYXJndW1lbnRzLmxlbmd0aCwxKTtmb3IodmFyIGU9UXUodGhpcykuZW50cmllcyxyPXQrXCJcIixuPTA7bjxlLmxlbmd0aDspaWYoZVtuKytdLmtleT09PXIpcmV0dXJuITA7cmV0dXJuITF9LHNldDpmdW5jdGlvbih0LGUpe2xzKGFyZ3VtZW50cy5sZW5ndGgsMSk7Zm9yKHZhciByLG49UXUodGhpcyksbz1uLmVudHJpZXMsaT0hMSxhPXQrXCJcIix1PWUrXCJcIixzPTA7czxvLmxlbmd0aDtzKyspKHI9b1tzXSkua2V5PT09YSYmKGk/by5zcGxpY2Uocy0tLDEpOihpPSEwLHIudmFsdWU9dSkpO2l8fG8ucHVzaCh7a2V5OmEsdmFsdWU6dX0pLG4udXBkYXRlVVJMKCl9LHNvcnQ6ZnVuY3Rpb24oKXt2YXIgdCxlLHIsbj1RdSh0aGlzKSxvPW4uZW50cmllcyxpPW8uc2xpY2UoKTtmb3Ioby5sZW5ndGg9MCxyPTA7cjxpLmxlbmd0aDtyKyspe2Zvcih0PWlbcl0sZT0wO2U8cjtlKyspaWYob1tlXS5rZXk+dC5rZXkpe28uc3BsaWNlKGUsMCx0KTticmVha31lPT09ciYmby5wdXNoKHQpfW4udXBkYXRlVVJMKCl9LGZvckVhY2g6ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9UXUodGhpcykuZW50cmllcyxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyksbz0wO288ci5sZW5ndGg7KW4oKGU9cltvKytdKS52YWx1ZSxlLmtleSx0aGlzKX0sa2V5czpmdW5jdGlvbigpe3JldHVybiBuZXcgaHModGhpcyxcImtleXNcIil9LHZhbHVlczpmdW5jdGlvbigpe3JldHVybiBuZXcgaHModGhpcyxcInZhbHVlc1wiKX0sZW50cmllczpmdW5jdGlvbigpe3JldHVybiBuZXcgaHModGhpcyxcImVudHJpZXNcIil9fSx7ZW51bWVyYWJsZTohMH0pLGV0KGRzLEh1LGRzLmVudHJpZXMpLGV0KGRzLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe2Zvcih2YXIgdCxlPVF1KHRoaXMpLmVudHJpZXMscj1bXSxuPTA7bjxlLmxlbmd0aDspdD1lW24rK10sci5wdXNoKHNzKHQua2V5KStcIj1cIitzcyh0LnZhbHVlKSk7cmV0dXJuIHIuam9pbihcIiZcIil9LHtlbnVtZXJhYmxlOiEwfSksX2UocHMsWHUpLGt0KHtnbG9iYWw6ITAsZm9yY2VkOiFVdX0se1VSTFNlYXJjaFBhcmFtczpwc30pLFV1fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiAkdXx8XCJmdW5jdGlvblwiIT10eXBlb2YgVnV8fGt0KHtnbG9iYWw6ITAsZW51bWVyYWJsZTohMCxmb3JjZWQ6ITB9LHtmZXRjaDpmdW5jdGlvbih0KXt2YXIgZSxyLG4sbz1bdF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MSYmKGcoZT1hcmd1bWVudHNbMV0pJiZjcihyPWUuYm9keSk9PT1YdSYmKChuPWUuaGVhZGVycz9uZXcgVnUoZS5oZWFkZXJzKTpuZXcgVnUpLmhhcyhcImNvbnRlbnQtdHlwZVwiKXx8bi5zZXQoXCJjb250ZW50LXR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIpLGU9SHQoZSx7Ym9keTpjKDAsU3RyaW5nKHIpKSxoZWFkZXJzOmMoMCxuKX0pKSxvLnB1c2goZSkpLCR1LmFwcGx5KHRoaXMsbyl9fSk7dmFyIHZzLGdzPXtVUkxTZWFyY2hQYXJhbXM6cHMsZ2V0U3RhdGU6UXV9LHlzPU9lLmNvZGVBdCxtcz1uLlVSTCxicz1ncy5VUkxTZWFyY2hQYXJhbXMsd3M9Z3MuZ2V0U3RhdGUsU3M9dHQuc2V0LEVzPXR0LmdldHRlckZvcihcIlVSTFwiKSx4cz1NYXRoLmZsb29yLEFzPU1hdGgucG93LE9zPVwiSW52YWxpZCBzY2hlbWVcIixScz1cIkludmFsaWQgaG9zdFwiLGpzPVwiSW52YWxpZCBwb3J0XCIsUHM9L1tBLVphLXpdLyxJcz0vW1xcZCstLkEtWmEtel0vLFRzPS9cXGQvLGtzPS9eKDB4fDBYKS8sTHM9L15bMC03XSskLyxVcz0vXlxcZCskLyxNcz0vXltcXGRBLUZhLWZdKyQvLF9zPS9bXFx1MDAwMFxcdTAwMDlcXHUwMDBBXFx1MDAwRCAjJS86P0BbXFxcXF1dLyxOcz0vW1xcdTAwMDBcXHUwMDA5XFx1MDAwQVxcdTAwMEQgIy86P0BbXFxcXF1dLyxDcz0vXltcXHUwMDAwLVxcdTAwMUYgXSt8W1xcdTAwMDAtXFx1MDAxRiBdKyQvZyxGcz0vW1xcdTAwMDlcXHUwMDBBXFx1MDAwRF0vZyxCcz1mdW5jdGlvbih0LGUpe3ZhciByLG4sbztpZihcIltcIj09ZS5jaGFyQXQoMCkpe2lmKFwiXVwiIT1lLmNoYXJBdChlLmxlbmd0aC0xKSlyZXR1cm4gUnM7aWYoIShyPXFzKGUuc2xpY2UoMSwtMSkpKSlyZXR1cm4gUnM7dC5ob3N0PXJ9ZWxzZSBpZihYcyh0KSl7aWYoZT1mdW5jdGlvbih0KXt2YXIgZSxyLG49W10sbz10LnRvTG93ZXJDYXNlKCkucmVwbGFjZShCdSxcIi5cIikuc3BsaXQoXCIuXCIpO2ZvcihlPTA7ZTxvLmxlbmd0aDtlKyspbi5wdXNoKEZ1LnRlc3Qocj1vW2VdKT9cInhuLS1cIitHdShyKTpyKTtyZXR1cm4gbi5qb2luKFwiLlwiKX0oZSksX3MudGVzdChlKSlyZXR1cm4gUnM7aWYobnVsbD09PShyPURzKGUpKSlyZXR1cm4gUnM7dC5ob3N0PXJ9ZWxzZXtpZihOcy50ZXN0KGUpKXJldHVybiBScztmb3Iocj1cIlwiLG49aHIoZSksbz0wO288bi5sZW5ndGg7bysrKXIrPVZzKG5bb10sV3MpO3QuaG9zdD1yfX0sRHM9ZnVuY3Rpb24odCl7dmFyIGUscixuLG8saSxhLHUscz10LnNwbGl0KFwiLlwiKTtpZihzLmxlbmd0aCYmXCJcIj09c1tzLmxlbmd0aC0xXSYmcy5wb3AoKSwoZT1zLmxlbmd0aCk+NClyZXR1cm4gdDtmb3Iocj1bXSxuPTA7bjxlO24rKyl7aWYoXCJcIj09KG89c1tuXSkpcmV0dXJuIHQ7aWYoaT0xMCxvLmxlbmd0aD4xJiZcIjBcIj09by5jaGFyQXQoMCkmJihpPWtzLnRlc3Qobyk/MTY6OCxvPW8uc2xpY2UoOD09aT8xOjIpKSxcIlwiPT09bylhPTA7ZWxzZXtpZighKDEwPT1pP1VzOjg9PWk/THM6TXMpLnRlc3QobykpcmV0dXJuIHQ7YT1wYXJzZUludChvLGkpfXIucHVzaChhKX1mb3Iobj0wO248ZTtuKyspaWYoYT1yW25dLG49PWUtMSl7aWYoYT49QXMoMjU2LDUtZSkpcmV0dXJuIG51bGx9ZWxzZSBpZihhPjI1NSlyZXR1cm4gbnVsbDtmb3IodT1yLnBvcCgpLG49MDtuPHIubGVuZ3RoO24rKyl1Kz1yW25dKkFzKDI1NiwzLW4pO3JldHVybiB1fSxxcz1mdW5jdGlvbih0KXt2YXIgZSxyLG4sbyxpLGEsdSxzPVswLDAsMCwwLDAsMCwwLDBdLGM9MCxmPW51bGwsbD0wLGg9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jaGFyQXQobCl9O2lmKFwiOlwiPT1oKCkpe2lmKFwiOlwiIT10LmNoYXJBdCgxKSlyZXR1cm47bCs9MixmPSsrY31mb3IoO2goKTspe2lmKDg9PWMpcmV0dXJuO2lmKFwiOlwiIT1oKCkpe2ZvcihlPXI9MDtyPDQmJk1zLnRlc3QoaCgpKTspZT0xNiplK3BhcnNlSW50KGgoKSwxNiksbCsrLHIrKztpZihcIi5cIj09aCgpKXtpZigwPT1yKXJldHVybjtpZihsLT1yLGM+NilyZXR1cm47Zm9yKG49MDtoKCk7KXtpZihvPW51bGwsbj4wKXtpZighKFwiLlwiPT1oKCkmJm48NCkpcmV0dXJuO2wrK31pZighVHMudGVzdChoKCkpKXJldHVybjtmb3IoO1RzLnRlc3QoaCgpKTspe2lmKGk9cGFyc2VJbnQoaCgpLDEwKSxudWxsPT09bylvPWk7ZWxzZXtpZigwPT1vKXJldHVybjtvPTEwKm8raX1pZihvPjI1NSlyZXR1cm47bCsrfXNbY109MjU2KnNbY10rbywyIT0rK24mJjQhPW58fGMrK31pZig0IT1uKXJldHVybjticmVha31pZihcIjpcIj09aCgpKXtpZihsKyssIWgoKSlyZXR1cm59ZWxzZSBpZihoKCkpcmV0dXJuO3NbYysrXT1lfWVsc2V7aWYobnVsbCE9PWYpcmV0dXJuO2wrKyxmPSsrY319aWYobnVsbCE9PWYpZm9yKGE9Yy1mLGM9NzswIT1jJiZhPjA7KXU9c1tjXSxzW2MtLV09c1tmK2EtMV0sc1tmKy0tYV09dTtlbHNlIGlmKDghPWMpcmV0dXJuO3JldHVybiBzfSx6cz1mdW5jdGlvbih0KXt2YXIgZSxyLG4sbztpZihcIm51bWJlclwiPT10eXBlb2YgdCl7Zm9yKGU9W10scj0wO3I8NDtyKyspZS51bnNoaWZ0KHQlMjU2KSx0PXhzKHQvMjU2KTtyZXR1cm4gZS5qb2luKFwiLlwiKX1pZihcIm9iamVjdFwiPT10eXBlb2YgdCl7Zm9yKGU9XCJcIixuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1udWxsLHI9MSxuPW51bGwsbz0wLGk9MDtpPDg7aSsrKTAhPT10W2ldPyhvPnImJihlPW4scj1vKSxuPW51bGwsbz0wKToobnVsbD09PW4mJihuPWkpLCsrbyk7cmV0dXJuIG8+ciYmKGU9bixyPW8pLGV9KHQpLHI9MDtyPDg7cisrKW8mJjA9PT10W3JdfHwobyYmKG89ITEpLG49PT1yPyhlKz1yP1wiOlwiOlwiOjpcIixvPSEwKTooZSs9dFtyXS50b1N0cmluZygxNikscjw3JiYoZSs9XCI6XCIpKSk7cmV0dXJuXCJbXCIrZStcIl1cIn1yZXR1cm4gdH0sV3M9e30sS3M9TnUoe30sV3Mse1wiIFwiOjEsJ1wiJzoxLFwiPFwiOjEsXCI+XCI6MSxcImBcIjoxfSksR3M9TnUoe30sS3Mse1wiI1wiOjEsXCI/XCI6MSxcIntcIjoxLFwifVwiOjF9KSwkcz1OdSh7fSxHcyx7XCIvXCI6MSxcIjpcIjoxLFwiO1wiOjEsXCI9XCI6MSxcIkBcIjoxLFwiW1wiOjEsXCJcXFxcXCI6MSxcIl1cIjoxLFwiXlwiOjEsXCJ8XCI6MX0pLFZzPWZ1bmN0aW9uKHQsZSl7dmFyIHI9eXModCwwKTtyZXR1cm4gcj4zMiYmcjwxMjcmJiFiKGUsdCk/dDplbmNvZGVVUklDb21wb25lbnQodCl9LEhzPXtmdHA6MjEsZmlsZTpudWxsLGh0dHA6ODAsaHR0cHM6NDQzLHdzOjgwLHdzczo0NDN9LFhzPWZ1bmN0aW9uKHQpe3JldHVybiBiKEhzLHQuc2NoZW1lKX0sWXM9ZnVuY3Rpb24odCl7cmV0dXJuXCJcIiE9dC51c2VybmFtZXx8XCJcIiE9dC5wYXNzd29yZH0sSnM9ZnVuY3Rpb24odCl7cmV0dXJuIXQuaG9zdHx8dC5jYW5ub3RCZUFCYXNlVVJMfHxcImZpbGVcIj09dC5zY2hlbWV9LFFzPWZ1bmN0aW9uKHQsZSl7dmFyIHI7cmV0dXJuIDI9PXQubGVuZ3RoJiZQcy50ZXN0KHQuY2hhckF0KDApKSYmKFwiOlwiPT0ocj10LmNoYXJBdCgxKSl8fCFlJiZcInxcIj09cil9LFpzPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiB0Lmxlbmd0aD4xJiZRcyh0LnNsaWNlKDAsMikpJiYoMj09dC5sZW5ndGh8fFwiL1wiPT09KGU9dC5jaGFyQXQoMikpfHxcIlxcXFxcIj09PWV8fFwiP1wiPT09ZXx8XCIjXCI9PT1lKX0sdGM9ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXRoLHI9ZS5sZW5ndGg7IXJ8fFwiZmlsZVwiPT10LnNjaGVtZSYmMT09ciYmUXMoZVswXSwhMCl8fGUucG9wKCl9LGVjPWZ1bmN0aW9uKHQpe3JldHVyblwiLlwiPT09dHx8XCIlMmVcIj09PXQudG9Mb3dlckNhc2UoKX0scmM9e30sbmM9e30sb2M9e30saWM9e30sYWM9e30sdWM9e30sc2M9e30sY2M9e30sZmM9e30sbGM9e30saGM9e30scGM9e30sZGM9e30sdmM9e30sZ2M9e30seWM9e30sbWM9e30sYmM9e30sd2M9e30sU2M9e30sRWM9e30seGM9ZnVuY3Rpb24odCxlLHIsbil7dmFyIG8saSxhLHUscyxjPXJ8fHJjLGY9MCxsPVwiXCIsaD0hMSxwPSExLGQ9ITE7Zm9yKHJ8fCh0LnNjaGVtZT1cIlwiLHQudXNlcm5hbWU9XCJcIix0LnBhc3N3b3JkPVwiXCIsdC5ob3N0PW51bGwsdC5wb3J0PW51bGwsdC5wYXRoPVtdLHQucXVlcnk9bnVsbCx0LmZyYWdtZW50PW51bGwsdC5jYW5ub3RCZUFCYXNlVVJMPSExLGU9ZS5yZXBsYWNlKENzLFwiXCIpKSxlPWUucmVwbGFjZShGcyxcIlwiKSxvPWhyKGUpO2Y8PW8ubGVuZ3RoOyl7c3dpdGNoKGk9b1tmXSxjKXtjYXNlIHJjOmlmKCFpfHwhUHMudGVzdChpKSl7aWYocilyZXR1cm4gT3M7Yz1vYztjb250aW51ZX1sKz1pLnRvTG93ZXJDYXNlKCksYz1uYzticmVhaztjYXNlIG5jOmlmKGkmJihJcy50ZXN0KGkpfHxcIitcIj09aXx8XCItXCI9PWl8fFwiLlwiPT1pKSlsKz1pLnRvTG93ZXJDYXNlKCk7ZWxzZXtpZihcIjpcIiE9aSl7aWYocilyZXR1cm4gT3M7bD1cIlwiLGM9b2MsZj0wO2NvbnRpbnVlfWlmKHImJihYcyh0KSE9YihIcyxsKXx8XCJmaWxlXCI9PWwmJihZcyh0KXx8bnVsbCE9PXQucG9ydCl8fFwiZmlsZVwiPT10LnNjaGVtZSYmIXQuaG9zdCkpcmV0dXJuO2lmKHQuc2NoZW1lPWwscilyZXR1cm4gdm9pZChYcyh0KSYmSHNbdC5zY2hlbWVdPT10LnBvcnQmJih0LnBvcnQ9bnVsbCkpO2w9XCJcIixcImZpbGVcIj09dC5zY2hlbWU/Yz12YzpYcyh0KSYmbiYmbi5zY2hlbWU9PXQuc2NoZW1lP2M9aWM6WHModCk/Yz1jYzpcIi9cIj09b1tmKzFdPyhjPWFjLGYrKyk6KHQuY2Fubm90QmVBQmFzZVVSTD0hMCx0LnBhdGgucHVzaChcIlwiKSxjPXdjKX1icmVhaztjYXNlIG9jOmlmKCFufHxuLmNhbm5vdEJlQUJhc2VVUkwmJlwiI1wiIT1pKXJldHVybiBPcztpZihuLmNhbm5vdEJlQUJhc2VVUkwmJlwiI1wiPT1pKXt0LnNjaGVtZT1uLnNjaGVtZSx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdC5xdWVyeT1uLnF1ZXJ5LHQuZnJhZ21lbnQ9XCJcIix0LmNhbm5vdEJlQUJhc2VVUkw9ITAsYz1FYzticmVha31jPVwiZmlsZVwiPT1uLnNjaGVtZT92Yzp1Yztjb250aW51ZTtjYXNlIGljOmlmKFwiL1wiIT1pfHxcIi9cIiE9b1tmKzFdKXtjPXVjO2NvbnRpbnVlfWM9ZmMsZisrO2JyZWFrO2Nhc2UgYWM6aWYoXCIvXCI9PWkpe2M9bGM7YnJlYWt9Yz1iYztjb250aW51ZTtjYXNlIHVjOmlmKHQuc2NoZW1lPW4uc2NoZW1lLGk9PXZzKXQudXNlcm5hbWU9bi51c2VybmFtZSx0LnBhc3N3b3JkPW4ucGFzc3dvcmQsdC5ob3N0PW4uaG9zdCx0LnBvcnQ9bi5wb3J0LHQucGF0aD1uLnBhdGguc2xpY2UoKSx0LnF1ZXJ5PW4ucXVlcnk7ZWxzZSBpZihcIi9cIj09aXx8XCJcXFxcXCI9PWkmJlhzKHQpKWM9c2M7ZWxzZSBpZihcIj9cIj09aSl0LnVzZXJuYW1lPW4udXNlcm5hbWUsdC5wYXNzd29yZD1uLnBhc3N3b3JkLHQuaG9zdD1uLmhvc3QsdC5wb3J0PW4ucG9ydCx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdC5xdWVyeT1cIlwiLGM9U2M7ZWxzZXtpZihcIiNcIiE9aSl7dC51c2VybmFtZT1uLnVzZXJuYW1lLHQucGFzc3dvcmQ9bi5wYXNzd29yZCx0Lmhvc3Q9bi5ob3N0LHQucG9ydD1uLnBvcnQsdC5wYXRoPW4ucGF0aC5zbGljZSgpLHQucGF0aC5wb3AoKSxjPWJjO2NvbnRpbnVlfXQudXNlcm5hbWU9bi51c2VybmFtZSx0LnBhc3N3b3JkPW4ucGFzc3dvcmQsdC5ob3N0PW4uaG9zdCx0LnBvcnQ9bi5wb3J0LHQucGF0aD1uLnBhdGguc2xpY2UoKSx0LnF1ZXJ5PW4ucXVlcnksdC5mcmFnbWVudD1cIlwiLGM9RWN9YnJlYWs7Y2FzZSBzYzppZighWHModCl8fFwiL1wiIT1pJiZcIlxcXFxcIiE9aSl7aWYoXCIvXCIhPWkpe3QudXNlcm5hbWU9bi51c2VybmFtZSx0LnBhc3N3b3JkPW4ucGFzc3dvcmQsdC5ob3N0PW4uaG9zdCx0LnBvcnQ9bi5wb3J0LGM9YmM7Y29udGludWV9Yz1sY31lbHNlIGM9ZmM7YnJlYWs7Y2FzZSBjYzppZihjPWZjLFwiL1wiIT1pfHxcIi9cIiE9bC5jaGFyQXQoZisxKSljb250aW51ZTtmKys7YnJlYWs7Y2FzZSBmYzppZihcIi9cIiE9aSYmXCJcXFxcXCIhPWkpe2M9bGM7Y29udGludWV9YnJlYWs7Y2FzZSBsYzppZihcIkBcIj09aSl7aCYmKGw9XCIlNDBcIitsKSxoPSEwLGE9aHIobCk7Zm9yKHZhciB2PTA7djxhLmxlbmd0aDt2Kyspe3ZhciBnPWFbdl07aWYoXCI6XCIhPWd8fGQpe3ZhciB5PVZzKGcsJHMpO2Q/dC5wYXNzd29yZCs9eTp0LnVzZXJuYW1lKz15fWVsc2UgZD0hMH1sPVwiXCJ9ZWxzZSBpZihpPT12c3x8XCIvXCI9PWl8fFwiP1wiPT1pfHxcIiNcIj09aXx8XCJcXFxcXCI9PWkmJlhzKHQpKXtpZihoJiZcIlwiPT1sKXJldHVyblwiSW52YWxpZCBhdXRob3JpdHlcIjtmLT1ocihsKS5sZW5ndGgrMSxsPVwiXCIsYz1oY31lbHNlIGwrPWk7YnJlYWs7Y2FzZSBoYzpjYXNlIHBjOmlmKHImJlwiZmlsZVwiPT10LnNjaGVtZSl7Yz15Yztjb250aW51ZX1pZihcIjpcIiE9aXx8cCl7aWYoaT09dnN8fFwiL1wiPT1pfHxcIj9cIj09aXx8XCIjXCI9PWl8fFwiXFxcXFwiPT1pJiZYcyh0KSl7aWYoWHModCkmJlwiXCI9PWwpcmV0dXJuIFJzO2lmKHImJlwiXCI9PWwmJihZcyh0KXx8bnVsbCE9PXQucG9ydCkpcmV0dXJuO2lmKHU9QnModCxsKSlyZXR1cm4gdTtpZihsPVwiXCIsYz1tYyxyKXJldHVybjtjb250aW51ZX1cIltcIj09aT9wPSEwOlwiXVwiPT1pJiYocD0hMSksbCs9aX1lbHNle2lmKFwiXCI9PWwpcmV0dXJuIFJzO2lmKHU9QnModCxsKSlyZXR1cm4gdTtpZihsPVwiXCIsYz1kYyxyPT1wYylyZXR1cm59YnJlYWs7Y2FzZSBkYzppZighVHMudGVzdChpKSl7aWYoaT09dnN8fFwiL1wiPT1pfHxcIj9cIj09aXx8XCIjXCI9PWl8fFwiXFxcXFwiPT1pJiZYcyh0KXx8cil7aWYoXCJcIiE9bCl7dmFyIG09cGFyc2VJbnQobCwxMCk7aWYobT42NTUzNSlyZXR1cm4ganM7dC5wb3J0PVhzKHQpJiZtPT09SHNbdC5zY2hlbWVdP251bGw6bSxsPVwiXCJ9aWYocilyZXR1cm47Yz1tYztjb250aW51ZX1yZXR1cm4ganN9bCs9aTticmVhaztjYXNlIHZjOmlmKHQuc2NoZW1lPVwiZmlsZVwiLFwiL1wiPT1pfHxcIlxcXFxcIj09aSljPWdjO2Vsc2V7aWYoIW58fFwiZmlsZVwiIT1uLnNjaGVtZSl7Yz1iYztjb250aW51ZX1pZihpPT12cyl0Lmhvc3Q9bi5ob3N0LHQucGF0aD1uLnBhdGguc2xpY2UoKSx0LnF1ZXJ5PW4ucXVlcnk7ZWxzZSBpZihcIj9cIj09aSl0Lmhvc3Q9bi5ob3N0LHQucGF0aD1uLnBhdGguc2xpY2UoKSx0LnF1ZXJ5PVwiXCIsYz1TYztlbHNle2lmKFwiI1wiIT1pKXtacyhvLnNsaWNlKGYpLmpvaW4oXCJcIikpfHwodC5ob3N0PW4uaG9zdCx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdGModCkpLGM9YmM7Y29udGludWV9dC5ob3N0PW4uaG9zdCx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdC5xdWVyeT1uLnF1ZXJ5LHQuZnJhZ21lbnQ9XCJcIixjPUVjfX1icmVhaztjYXNlIGdjOmlmKFwiL1wiPT1pfHxcIlxcXFxcIj09aSl7Yz15YzticmVha31uJiZcImZpbGVcIj09bi5zY2hlbWUmJiFacyhvLnNsaWNlKGYpLmpvaW4oXCJcIikpJiYoUXMobi5wYXRoWzBdLCEwKT90LnBhdGgucHVzaChuLnBhdGhbMF0pOnQuaG9zdD1uLmhvc3QpLGM9YmM7Y29udGludWU7Y2FzZSB5YzppZihpPT12c3x8XCIvXCI9PWl8fFwiXFxcXFwiPT1pfHxcIj9cIj09aXx8XCIjXCI9PWkpe2lmKCFyJiZRcyhsKSljPWJjO2Vsc2UgaWYoXCJcIj09bCl7aWYodC5ob3N0PVwiXCIscilyZXR1cm47Yz1tY31lbHNle2lmKHU9QnModCxsKSlyZXR1cm4gdTtpZihcImxvY2FsaG9zdFwiPT10Lmhvc3QmJih0Lmhvc3Q9XCJcIikscilyZXR1cm47bD1cIlwiLGM9bWN9Y29udGludWV9bCs9aTticmVhaztjYXNlIG1jOmlmKFhzKHQpKXtpZihjPWJjLFwiL1wiIT1pJiZcIlxcXFxcIiE9aSljb250aW51ZX1lbHNlIGlmKHJ8fFwiP1wiIT1pKWlmKHJ8fFwiI1wiIT1pKXtpZihpIT12cyYmKGM9YmMsXCIvXCIhPWkpKWNvbnRpbnVlfWVsc2UgdC5mcmFnbWVudD1cIlwiLGM9RWM7ZWxzZSB0LnF1ZXJ5PVwiXCIsYz1TYzticmVhaztjYXNlIGJjOmlmKGk9PXZzfHxcIi9cIj09aXx8XCJcXFxcXCI9PWkmJlhzKHQpfHwhciYmKFwiP1wiPT1pfHxcIiNcIj09aSkpe2lmKFwiLi5cIj09PShzPShzPWwpLnRvTG93ZXJDYXNlKCkpfHxcIiUyZS5cIj09PXN8fFwiLiUyZVwiPT09c3x8XCIlMmUlMmVcIj09PXM/KHRjKHQpLFwiL1wiPT1pfHxcIlxcXFxcIj09aSYmWHModCl8fHQucGF0aC5wdXNoKFwiXCIpKTplYyhsKT9cIi9cIj09aXx8XCJcXFxcXCI9PWkmJlhzKHQpfHx0LnBhdGgucHVzaChcIlwiKTooXCJmaWxlXCI9PXQuc2NoZW1lJiYhdC5wYXRoLmxlbmd0aCYmUXMobCkmJih0Lmhvc3QmJih0Lmhvc3Q9XCJcIiksbD1sLmNoYXJBdCgwKStcIjpcIiksdC5wYXRoLnB1c2gobCkpLGw9XCJcIixcImZpbGVcIj09dC5zY2hlbWUmJihpPT12c3x8XCI/XCI9PWl8fFwiI1wiPT1pKSlmb3IoO3QucGF0aC5sZW5ndGg+MSYmXCJcIj09PXQucGF0aFswXTspdC5wYXRoLnNoaWZ0KCk7XCI/XCI9PWk/KHQucXVlcnk9XCJcIixjPVNjKTpcIiNcIj09aSYmKHQuZnJhZ21lbnQ9XCJcIixjPUVjKX1lbHNlIGwrPVZzKGksR3MpO2JyZWFrO2Nhc2Ugd2M6XCI/XCI9PWk/KHQucXVlcnk9XCJcIixjPVNjKTpcIiNcIj09aT8odC5mcmFnbWVudD1cIlwiLGM9RWMpOmkhPXZzJiYodC5wYXRoWzBdKz1WcyhpLFdzKSk7YnJlYWs7Y2FzZSBTYzpyfHxcIiNcIiE9aT9pIT12cyYmKFwiJ1wiPT1pJiZYcyh0KT90LnF1ZXJ5Kz1cIiUyN1wiOnQucXVlcnkrPVwiI1wiPT1pP1wiJTIzXCI6VnMoaSxXcykpOih0LmZyYWdtZW50PVwiXCIsYz1FYyk7YnJlYWs7Y2FzZSBFYzppIT12cyYmKHQuZnJhZ21lbnQrPVZzKGksS3MpKX1mKyt9fSxBYz1mdW5jdGlvbih0KXt2YXIgZSxyLG49X3IodGhpcyxBYyxcIlVSTFwiKSxvPWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLGE9U3RyaW5nKHQpLHU9U3Mobix7dHlwZTpcIlVSTFwifSk7aWYodm9pZCAwIT09bylpZihvIGluc3RhbmNlb2YgQWMpZT1FcyhvKTtlbHNlIGlmKHI9eGMoZT17fSxTdHJpbmcobykpKXRocm93IFR5cGVFcnJvcihyKTtpZihyPXhjKHUsYSxudWxsLGUpKXRocm93IFR5cGVFcnJvcihyKTt2YXIgcz11LnNlYXJjaFBhcmFtcz1uZXcgYnMsYz13cyhzKTtjLnVwZGF0ZVNlYXJjaFBhcmFtcyh1LnF1ZXJ5KSxjLnVwZGF0ZVVSTD1mdW5jdGlvbigpe3UucXVlcnk9U3RyaW5nKHMpfHxudWxsfSxpfHwobi5ocmVmPVJjLmNhbGwobiksbi5vcmlnaW49amMuY2FsbChuKSxuLnByb3RvY29sPVBjLmNhbGwobiksbi51c2VybmFtZT1JYy5jYWxsKG4pLG4ucGFzc3dvcmQ9VGMuY2FsbChuKSxuLmhvc3Q9a2MuY2FsbChuKSxuLmhvc3RuYW1lPUxjLmNhbGwobiksbi5wb3J0PVVjLmNhbGwobiksbi5wYXRobmFtZT1NYy5jYWxsKG4pLG4uc2VhcmNoPV9jLmNhbGwobiksbi5zZWFyY2hQYXJhbXM9TmMuY2FsbChuKSxuLmhhc2g9Q2MuY2FsbChuKSl9LE9jPUFjLnByb3RvdHlwZSxSYz1mdW5jdGlvbigpe3ZhciB0PUVzKHRoaXMpLGU9dC5zY2hlbWUscj10LnVzZXJuYW1lLG49dC5wYXNzd29yZCxvPXQuaG9zdCxpPXQucG9ydCxhPXQucGF0aCx1PXQucXVlcnkscz10LmZyYWdtZW50LGM9ZStcIjpcIjtyZXR1cm4gbnVsbCE9PW8/KGMrPVwiLy9cIixZcyh0KSYmKGMrPXIrKG4/XCI6XCIrbjpcIlwiKStcIkBcIiksYys9enMobyksbnVsbCE9PWkmJihjKz1cIjpcIitpKSk6XCJmaWxlXCI9PWUmJihjKz1cIi8vXCIpLGMrPXQuY2Fubm90QmVBQmFzZVVSTD9hWzBdOmEubGVuZ3RoP1wiL1wiK2Euam9pbihcIi9cIik6XCJcIixudWxsIT09dSYmKGMrPVwiP1wiK3UpLG51bGwhPT1zJiYoYys9XCIjXCIrcyksY30samM9ZnVuY3Rpb24oKXt2YXIgdD1Fcyh0aGlzKSxlPXQuc2NoZW1lLHI9dC5wb3J0O2lmKFwiYmxvYlwiPT1lKXRyeXtyZXR1cm4gbmV3IFVSTChlLnBhdGhbMF0pLm9yaWdpbn1jYXRjaCh0KXtyZXR1cm5cIm51bGxcIn1yZXR1cm5cImZpbGVcIiE9ZSYmWHModCk/ZStcIjovL1wiK3pzKHQuaG9zdCkrKG51bGwhPT1yP1wiOlwiK3I6XCJcIik6XCJudWxsXCJ9LFBjPWZ1bmN0aW9uKCl7cmV0dXJuIEVzKHRoaXMpLnNjaGVtZStcIjpcIn0sSWM9ZnVuY3Rpb24oKXtyZXR1cm4gRXModGhpcykudXNlcm5hbWV9LFRjPWZ1bmN0aW9uKCl7cmV0dXJuIEVzKHRoaXMpLnBhc3N3b3JkfSxrYz1mdW5jdGlvbigpe3ZhciB0PUVzKHRoaXMpLGU9dC5ob3N0LHI9dC5wb3J0O3JldHVybiBudWxsPT09ZT9cIlwiOm51bGw9PT1yP3pzKGUpOnpzKGUpK1wiOlwiK3J9LExjPWZ1bmN0aW9uKCl7dmFyIHQ9RXModGhpcykuaG9zdDtyZXR1cm4gbnVsbD09PXQ/XCJcIjp6cyh0KX0sVWM9ZnVuY3Rpb24oKXt2YXIgdD1Fcyh0aGlzKS5wb3J0O3JldHVybiBudWxsPT09dD9cIlwiOlN0cmluZyh0KX0sTWM9ZnVuY3Rpb24oKXt2YXIgdD1Fcyh0aGlzKSxlPXQucGF0aDtyZXR1cm4gdC5jYW5ub3RCZUFCYXNlVVJMP2VbMF06ZS5sZW5ndGg/XCIvXCIrZS5qb2luKFwiL1wiKTpcIlwifSxfYz1mdW5jdGlvbigpe3ZhciB0PUVzKHRoaXMpLnF1ZXJ5O3JldHVybiB0P1wiP1wiK3Q6XCJcIn0sTmM9ZnVuY3Rpb24oKXtyZXR1cm4gRXModGhpcykuc2VhcmNoUGFyYW1zfSxDYz1mdW5jdGlvbigpe3ZhciB0PUVzKHRoaXMpLmZyYWdtZW50O3JldHVybiB0P1wiI1wiK3Q6XCJcIn0sRmM9ZnVuY3Rpb24odCxlKXtyZXR1cm57Z2V0OnQsc2V0OmUsY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9fTtpZihpJiZ6dChPYyx7aHJlZjpGYyhSYyxmdW5jdGlvbih0KXt2YXIgZT1Fcyh0aGlzKSxyPVN0cmluZyh0KSxuPXhjKGUscik7aWYobil0aHJvdyBUeXBlRXJyb3Iobik7d3MoZS5zZWFyY2hQYXJhbXMpLnVwZGF0ZVNlYXJjaFBhcmFtcyhlLnF1ZXJ5KX0pLG9yaWdpbjpGYyhqYykscHJvdG9jb2w6RmMoUGMsZnVuY3Rpb24odCl7dmFyIGU9RXModGhpcyk7eGMoZSxTdHJpbmcodCkrXCI6XCIscmMpfSksdXNlcm5hbWU6RmMoSWMsZnVuY3Rpb24odCl7dmFyIGU9RXModGhpcykscj1ocihTdHJpbmcodCkpO2lmKCFKcyhlKSl7ZS51c2VybmFtZT1cIlwiO2Zvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKWUudXNlcm5hbWUrPVZzKHJbbl0sJHMpfX0pLHBhc3N3b3JkOkZjKFRjLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpLHI9aHIoU3RyaW5nKHQpKTtpZighSnMoZSkpe2UucGFzc3dvcmQ9XCJcIjtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyllLnBhc3N3b3JkKz1WcyhyW25dLCRzKX19KSxob3N0OkZjKGtjLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpO2UuY2Fubm90QmVBQmFzZVVSTHx8eGMoZSxTdHJpbmcodCksaGMpfSksaG9zdG5hbWU6RmMoTGMsZnVuY3Rpb24odCl7dmFyIGU9RXModGhpcyk7ZS5jYW5ub3RCZUFCYXNlVVJMfHx4YyhlLFN0cmluZyh0KSxwYyl9KSxwb3J0OkZjKFVjLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpO0pzKGUpfHwoXCJcIj09KHQ9U3RyaW5nKHQpKT9lLnBvcnQ9bnVsbDp4YyhlLHQsZGMpKX0pLHBhdGhuYW1lOkZjKE1jLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpO2UuY2Fubm90QmVBQmFzZVVSTHx8KGUucGF0aD1bXSx4YyhlLHQrXCJcIixtYykpfSksc2VhcmNoOkZjKF9jLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpO1wiXCI9PSh0PVN0cmluZyh0KSk/ZS5xdWVyeT1udWxsOihcIj9cIj09dC5jaGFyQXQoMCkmJih0PXQuc2xpY2UoMSkpLGUucXVlcnk9XCJcIix4YyhlLHQsU2MpKSx3cyhlLnNlYXJjaFBhcmFtcykudXBkYXRlU2VhcmNoUGFyYW1zKGUucXVlcnkpfSksc2VhcmNoUGFyYW1zOkZjKE5jKSxoYXNoOkZjKENjLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpO1wiXCIhPSh0PVN0cmluZyh0KSk/KFwiI1wiPT10LmNoYXJBdCgwKSYmKHQ9dC5zbGljZSgxKSksZS5mcmFnbWVudD1cIlwiLHhjKGUsdCxFYykpOmUuZnJhZ21lbnQ9bnVsbH0pfSksZXQoT2MsXCJ0b0pTT05cIixmdW5jdGlvbigpe3JldHVybiBSYy5jYWxsKHRoaXMpfSx7ZW51bWVyYWJsZTohMH0pLGV0KE9jLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiBSYy5jYWxsKHRoaXMpfSx7ZW51bWVyYWJsZTohMH0pLG1zKXt2YXIgQmM9bXMuY3JlYXRlT2JqZWN0VVJMLERjPW1zLnJldm9rZU9iamVjdFVSTDtCYyYmZXQoQWMsXCJjcmVhdGVPYmplY3RVUkxcIixmdW5jdGlvbih0KXtyZXR1cm4gQmMuYXBwbHkobXMsYXJndW1lbnRzKX0pLERjJiZldChBYyxcInJldm9rZU9iamVjdFVSTFwiLGZ1bmN0aW9uKHQpe3JldHVybiBEYy5hcHBseShtcyxhcmd1bWVudHMpfSl9X2UoQWMsXCJVUkxcIiksa3Qoe2dsb2JhbDohMCxmb3JjZWQ6IVV1LHNoYW06IWl9LHtVUkw6QWN9KSxrdCh7dGFyZ2V0OlwiVVJMXCIscHJvdG86ITAsZW51bWVyYWJsZTohMH0se3RvSlNPTjpmdW5jdGlvbigpe3JldHVybiBVUkwucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyl9fSksa3Qoe3RhcmdldDpcIldlYWtNYXBcIixzdGF0OiEwfSx7ZnJvbTplbn0pLGt0KHt0YXJnZXQ6XCJXZWFrTWFwXCIsc3RhdDohMH0se29mOnJufSksa3Qoe3RhcmdldDpcIldlYWtNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZGVsZXRlQWxsOmZ1bmN0aW9uKCl7cmV0dXJuIG5uLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSxrdCh7dGFyZ2V0OlwiV2Vha01hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHt1cHNlcnQ6Y259KSxDcihcIldlYWtTZXRcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdCh0aGlzLGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzBdOnZvaWQgMCl9fSxtbyksa3Qoe3RhcmdldDpcIldlYWtTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7YWRkQWxsOmZ1bmN0aW9uKCl7cmV0dXJuIEhpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSxrdCh7dGFyZ2V0OlwiV2Vha1NldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtkZWxldGVBbGw6ZnVuY3Rpb24oKXtyZXR1cm4gbm4uYXBwbHkodGhpcyxhcmd1bWVudHMpfX0pLGt0KHt0YXJnZXQ6XCJXZWFrU2V0XCIsc3RhdDohMH0se2Zyb206ZW59KSxrdCh7dGFyZ2V0OlwiV2Vha1NldFwiLHN0YXQ6ITB9LHtvZjpybn0pO3ZhciBxYyx6YyxXYyxLYz1uLlByb21pc2UsR2M9LyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KFFpKSwkYz1uLmxvY2F0aW9uLFZjPW4uc2V0SW1tZWRpYXRlLEhjPW4uY2xlYXJJbW1lZGlhdGUsWGM9bi5wcm9jZXNzLFljPW4uTWVzc2FnZUNoYW5uZWwsSmM9bi5EaXNwYXRjaCxRYz0wLFpjPXt9LHRmPWZ1bmN0aW9uKHQpe2lmKFpjLmhhc093blByb3BlcnR5KHQpKXt2YXIgZT1aY1t0XTtkZWxldGUgWmNbdF0sZSgpfX0sZWY9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGYodCl9fSxyZj1mdW5jdGlvbih0KXt0Zih0LmRhdGEpfSxuZj1mdW5jdGlvbih0KXtuLnBvc3RNZXNzYWdlKHQrXCJcIiwkYy5wcm90b2NvbCtcIi8vXCIrJGMuaG9zdCl9O1ZjJiZIY3x8KFZjPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxyPTE7YXJndW1lbnRzLmxlbmd0aD5yOyllLnB1c2goYXJndW1lbnRzW3IrK10pO3JldHVybiBaY1srK1FjXT1mdW5jdGlvbigpeyhcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6RnVuY3Rpb24odCkpLmFwcGx5KHZvaWQgMCxlKX0scWMoUWMpLFFjfSxIYz1mdW5jdGlvbih0KXtkZWxldGUgWmNbdF19LFwicHJvY2Vzc1wiPT1sKFhjKT9xYz1mdW5jdGlvbih0KXtYYy5uZXh0VGljayhlZih0KSl9OkpjJiZKYy5ub3c/cWM9ZnVuY3Rpb24odCl7SmMubm93KGVmKHQpKX06WWMmJiFHYz8oV2M9KHpjPW5ldyBZYykucG9ydDIsemMucG9ydDEub25tZXNzYWdlPXJmLHFjPVp0KFdjLnBvc3RNZXNzYWdlLFdjLDEpKTohbi5hZGRFdmVudExpc3RlbmVyfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBwb3N0TWVzc2FnZXx8bi5pbXBvcnRTY3JpcHRzfHxvKG5mKXx8XCJmaWxlOlwiPT09JGMucHJvdG9jb2w/cWM9XCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIEUoXCJzY3JpcHRcIik/ZnVuY3Rpb24odCl7V3QuYXBwZW5kQ2hpbGQoRShcInNjcmlwdFwiKSkub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7V3QucmVtb3ZlQ2hpbGQodGhpcyksdGYodCl9fTpmdW5jdGlvbih0KXtzZXRUaW1lb3V0KGVmKHQpLDApfToocWM9bmYsbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHJmLCExKSkpO3ZhciBvZixhZix1ZixzZixjZixmZixsZixoZixwZj17c2V0OlZjLGNsZWFyOkhjfSxkZj1PLmYsdmY9cGYuc2V0LGdmPW4uTXV0YXRpb25PYnNlcnZlcnx8bi5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLHlmPW4ucHJvY2VzcyxtZj1uLlByb21pc2UsYmY9XCJwcm9jZXNzXCI9PWwoeWYpLHdmPWRmKG4sXCJxdWV1ZU1pY3JvdGFza1wiKSxTZj13ZiYmd2YudmFsdWU7U2Z8fChvZj1mdW5jdGlvbigpe3ZhciB0LGU7Zm9yKGJmJiYodD15Zi5kb21haW4pJiZ0LmV4aXQoKTthZjspe2U9YWYuZm4sYWY9YWYubmV4dDt0cnl7ZSgpfWNhdGNoKHQpe3Rocm93IGFmP3NmKCk6dWY9dm9pZCAwLHR9fXVmPXZvaWQgMCx0JiZ0LmVudGVyKCl9LGJmP3NmPWZ1bmN0aW9uKCl7eWYubmV4dFRpY2sob2YpfTpnZiYmIUdjPyhjZj0hMCxmZj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSxuZXcgZ2Yob2YpLm9ic2VydmUoZmYse2NoYXJhY3RlckRhdGE6ITB9KSxzZj1mdW5jdGlvbigpe2ZmLmRhdGE9Y2Y9IWNmfSk6bWYmJm1mLnJlc29sdmU/KGxmPW1mLnJlc29sdmUodm9pZCAwKSxoZj1sZi50aGVuLHNmPWZ1bmN0aW9uKCl7aGYuY2FsbChsZixvZil9KTpzZj1mdW5jdGlvbigpe3ZmLmNhbGwobixvZil9KTt2YXIgRWYseGYsQWYsT2YsUmY9U2Z8fGZ1bmN0aW9uKHQpe3ZhciBlPXtmbjp0LG5leHQ6dm9pZCAwfTt1ZiYmKHVmLm5leHQ9ZSksYWZ8fChhZj1lLHNmKCkpLHVmPWV9LGpmPWZ1bmN0aW9uKHQpe3ZhciBlLHI7dGhpcy5wcm9taXNlPW5ldyB0KGZ1bmN0aW9uKHQsbil7aWYodm9pZCAwIT09ZXx8dm9pZCAwIT09cil0aHJvdyBUeXBlRXJyb3IoXCJCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvclwiKTtlPXQscj1ufSksdGhpcy5yZXNvbHZlPVF0KGUpLHRoaXMucmVqZWN0PVF0KHIpfSxQZj17ZjpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IGpmKHQpfX0sSWY9ZnVuY3Rpb24odCxlKXtpZihSKHQpLGcoZSkmJmUuY29uc3RydWN0b3I9PT10KXJldHVybiBlO3ZhciByPVBmLmYodCk7cmV0dXJuKDAsci5yZXNvbHZlKShlKSxyLnByb21pc2V9LFRmPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm57ZXJyb3I6ITEsdmFsdWU6dCgpfX1jYXRjaCh0KXtyZXR1cm57ZXJyb3I6ITAsdmFsdWU6dH19fSxrZj1wZi5zZXQsTGY9RHQoXCJzcGVjaWVzXCIpLFVmPVwiUHJvbWlzZVwiLE1mPXR0LmdldCxfZj10dC5zZXQsTmY9dHQuZ2V0dGVyRm9yKFVmKSxDZj1LYyxGZj1uLlR5cGVFcnJvcixCZj1uLmRvY3VtZW50LERmPW4ucHJvY2VzcyxxZj1vdChcImZldGNoXCIpLHpmPVBmLmYsV2Y9emYsS2Y9XCJwcm9jZXNzXCI9PWwoRGYpLEdmPSEhKEJmJiZCZi5jcmVhdGVFdmVudCYmbi5kaXNwYXRjaEV2ZW50KSwkZj1cInVuaGFuZGxlZHJlamVjdGlvblwiLFZmPUl0KFVmLGZ1bmN0aW9uKCl7aWYoQyhDZik9PT1TdHJpbmcoQ2YpKXtpZig2Nj09PXJhKXJldHVybiEwO2lmKCFLZiYmXCJmdW5jdGlvblwiIT10eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50KXJldHVybiEwfWlmKHJhPj01MSYmL25hdGl2ZSBjb2RlLy50ZXN0KENmKSlyZXR1cm4hMTt2YXIgdD1DZi5yZXNvbHZlKDEpLGU9ZnVuY3Rpb24odCl7dChmdW5jdGlvbigpe30sZnVuY3Rpb24oKXt9KX07cmV0dXJuKHQuY29uc3RydWN0b3I9e30pW0xmXT1lLCEodC50aGVuKGZ1bmN0aW9uKCl7fSlpbnN0YW5jZW9mIGUpfSksSGY9VmZ8fCF5cihmdW5jdGlvbih0KXtDZi5hbGwodCkuY2F0Y2goZnVuY3Rpb24oKXt9KX0pLFhmPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiEoIWcodCl8fFwiZnVuY3Rpb25cIiE9dHlwZW9mKGU9dC50aGVuKSkmJmV9LFlmPWZ1bmN0aW9uKHQsZSxyKXtpZighZS5ub3RpZmllZCl7ZS5ub3RpZmllZD0hMDt2YXIgbj1lLnJlYWN0aW9ucztSZihmdW5jdGlvbigpe2Zvcih2YXIgbz1lLnZhbHVlLGk9MT09ZS5zdGF0ZSxhPTA7bi5sZW5ndGg+YTspe3ZhciB1LHMsYyxmPW5bYSsrXSxsPWk/Zi5vazpmLmZhaWwsaD1mLnJlc29sdmUscD1mLnJlamVjdCxkPWYuZG9tYWluO3RyeXtsPyhpfHwoMj09PWUucmVqZWN0aW9uJiZ0bCh0LGUpLGUucmVqZWN0aW9uPTEpLCEwPT09bD91PW86KGQmJmQuZW50ZXIoKSx1PWwobyksZCYmKGQuZXhpdCgpLGM9ITApKSx1PT09Zi5wcm9taXNlP3AoRmYoXCJQcm9taXNlLWNoYWluIGN5Y2xlXCIpKToocz1YZih1KSk/cy5jYWxsKHUsaCxwKTpoKHUpKTpwKG8pfWNhdGNoKHQpe2QmJiFjJiZkLmV4aXQoKSxwKHQpfX1lLnJlYWN0aW9ucz1bXSxlLm5vdGlmaWVkPSExLHImJiFlLnJlamVjdGlvbiYmUWYodCxlKX0pfX0sSmY9ZnVuY3Rpb24odCxlLHIpe3ZhciBvLGk7R2Y/KChvPUJmLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikpLnByb21pc2U9ZSxvLnJlYXNvbj1yLG8uaW5pdEV2ZW50KHQsITEsITApLG4uZGlzcGF0Y2hFdmVudChvKSk6bz17cHJvbWlzZTplLHJlYXNvbjpyfSwoaT1uW1wib25cIit0XSk/aShvKTp0PT09JGYmJmZ1bmN0aW9uKHQsZSl7dmFyIHI9bi5jb25zb2xlO3ImJnIuZXJyb3ImJigxPT09YXJndW1lbnRzLmxlbmd0aD9yLmVycm9yKHQpOnIuZXJyb3IodCxlKSl9KFwiVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXCIscil9LFFmPWZ1bmN0aW9uKHQsZSl7a2YuY2FsbChuLGZ1bmN0aW9uKCl7dmFyIHIsbj1lLnZhbHVlO2lmKFpmKGUpJiYocj1UZihmdW5jdGlvbigpe0tmP0RmLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIixuLHQpOkpmKCRmLHQsbil9KSxlLnJlamVjdGlvbj1LZnx8WmYoZSk/MjoxLHIuZXJyb3IpKXRocm93IHIudmFsdWV9KX0sWmY9ZnVuY3Rpb24odCl7cmV0dXJuIDEhPT10LnJlamVjdGlvbiYmIXQucGFyZW50fSx0bD1mdW5jdGlvbih0LGUpe2tmLmNhbGwobixmdW5jdGlvbigpe0tmP0RmLmVtaXQoXCJyZWplY3Rpb25IYW5kbGVkXCIsdCk6SmYoXCJyZWplY3Rpb25oYW5kbGVkXCIsdCxlLnZhbHVlKX0pfSxlbD1mdW5jdGlvbih0LGUscixuKXtyZXR1cm4gZnVuY3Rpb24obyl7dChlLHIsbyxuKX19LHJsPWZ1bmN0aW9uKHQsZSxyLG4pe2UuZG9uZXx8KGUuZG9uZT0hMCxuJiYoZT1uKSxlLnZhbHVlPXIsZS5zdGF0ZT0yLFlmKHQsZSwhMCkpfSxubD1mdW5jdGlvbiB0KGUscixuLG8pe2lmKCFyLmRvbmUpe3IuZG9uZT0hMCxvJiYocj1vKTt0cnl7aWYoZT09PW4pdGhyb3cgRmYoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTt2YXIgaT1YZihuKTtpP1JmKGZ1bmN0aW9uKCl7dmFyIG89e2RvbmU6ITF9O3RyeXtpLmNhbGwobixlbCh0LGUsbyxyKSxlbChybCxlLG8scikpfWNhdGNoKHQpe3JsKGUsbyx0LHIpfX0pOihyLnZhbHVlPW4sci5zdGF0ZT0xLFlmKGUsciwhMSkpfWNhdGNoKHQpe3JsKGUse2RvbmU6ITF9LHQscil9fX07VmYmJihDZj1mdW5jdGlvbih0KXtfcih0aGlzLENmLFVmKSxRdCh0KSxFZi5jYWxsKHRoaXMpO3ZhciBlPU1mKHRoaXMpO3RyeXt0KGVsKG5sLHRoaXMsZSksZWwocmwsdGhpcyxlKSl9Y2F0Y2godCl7cmwodGhpcyxlLHQpfX0sKEVmPWZ1bmN0aW9uKHQpe19mKHRoaXMse3R5cGU6VWYsZG9uZTohMSxub3RpZmllZDohMSxwYXJlbnQ6ITEscmVhY3Rpb25zOltdLHJlamVjdGlvbjohMSxzdGF0ZTowLHZhbHVlOnZvaWQgMH0pfSkucHJvdG90eXBlPUZyKENmLnByb3RvdHlwZSx7dGhlbjpmdW5jdGlvbih0LGUpe3ZhciByPU5mKHRoaXMpLG49emYoc24odGhpcyxDZikpO3JldHVybiBuLm9rPVwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fHQsbi5mYWlsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsbi5kb21haW49S2Y/RGYuZG9tYWluOnZvaWQgMCxyLnBhcmVudD0hMCxyLnJlYWN0aW9ucy5wdXNoKG4pLDAhPXIuc3RhdGUmJllmKHRoaXMsciwhMSksbi5wcm9taXNlfSxjYXRjaDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCx0KX19KSx4Zj1mdW5jdGlvbigpe3ZhciB0PW5ldyBFZixlPU1mKHQpO3RoaXMucHJvbWlzZT10LHRoaXMucmVzb2x2ZT1lbChubCx0LGUpLHRoaXMucmVqZWN0PWVsKHJsLHQsZSl9LFBmLmY9emY9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1DZnx8dD09PUFmP25ldyB4Zih0KTpXZih0KX0sXCJmdW5jdGlvblwiPT10eXBlb2YgS2MmJihPZj1LYy5wcm90b3R5cGUudGhlbixldChLYy5wcm90b3R5cGUsXCJ0aGVuXCIsZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzO3JldHVybiBuZXcgQ2YoZnVuY3Rpb24odCxlKXtPZi5jYWxsKHIsdCxlKX0pLnRoZW4odCxlKX0se3Vuc2FmZTohMH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIHFmJiZrdCh7Z2xvYmFsOiEwLGVudW1lcmFibGU6ITAsZm9yY2VkOiEwfSx7ZmV0Y2g6ZnVuY3Rpb24odCl7cmV0dXJuIElmKENmLHFmLmFwcGx5KG4sYXJndW1lbnRzKSl9fSkpKSxrdCh7Z2xvYmFsOiEwLHdyYXA6ITAsZm9yY2VkOlZmfSx7UHJvbWlzZTpDZn0pLF9lKENmLFVmLCExKSxEcihVZiksQWY9b3QoVWYpLGt0KHt0YXJnZXQ6VWYsc3RhdDohMCxmb3JjZWQ6VmZ9LHtyZWplY3Q6ZnVuY3Rpb24odCl7dmFyIGU9emYodGhpcyk7cmV0dXJuIGUucmVqZWN0LmNhbGwodm9pZCAwLHQpLGUucHJvbWlzZX19KSxrdCh7dGFyZ2V0OlVmLHN0YXQ6ITAsZm9yY2VkOlZmfSx7cmVzb2x2ZTpmdW5jdGlvbih0KXtyZXR1cm4gSWYodGhpcyx0KX19KSxrdCh7dGFyZ2V0OlVmLHN0YXQ6ITAsZm9yY2VkOkhmfSx7YWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMscj16ZihlKSxuPXIucmVzb2x2ZSxvPXIucmVqZWN0LGk9VGYoZnVuY3Rpb24oKXt2YXIgcj1RdChlLnJlc29sdmUpLGk9W10sYT0wLHU9MTtNcih0LGZ1bmN0aW9uKHQpe3ZhciBzPWErKyxjPSExO2kucHVzaCh2b2lkIDApLHUrKyxyLmNhbGwoZSx0KS50aGVuKGZ1bmN0aW9uKHQpe2N8fChjPSEwLGlbc109dCwtLXV8fG4oaSkpfSxvKX0pLC0tdXx8bihpKX0pO3JldHVybiBpLmVycm9yJiZvKGkudmFsdWUpLHIucHJvbWlzZX0scmFjZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLHI9emYoZSksbj1yLnJlamVjdCxvPVRmKGZ1bmN0aW9uKCl7dmFyIG89UXQoZS5yZXNvbHZlKTtNcih0LGZ1bmN0aW9uKHQpe28uY2FsbChlLHQpLnRoZW4oci5yZXNvbHZlLG4pfSl9KTtyZXR1cm4gby5lcnJvciYmbihvLnZhbHVlKSxyLnByb21pc2V9fSksa3Qoe3RhcmdldDpcIlByb21pc2VcIixzdGF0OiEwfSx7YWxsU2V0dGxlZDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLHI9UGYuZihlKSxuPXIucmVzb2x2ZSxvPXIucmVqZWN0LGk9VGYoZnVuY3Rpb24oKXt2YXIgcj1RdChlLnJlc29sdmUpLG89W10saT0wLGE9MTtNcih0LGZ1bmN0aW9uKHQpe3ZhciB1PWkrKyxzPSExO28ucHVzaCh2b2lkIDApLGErKyxyLmNhbGwoZSx0KS50aGVuKGZ1bmN0aW9uKHQpe3N8fChzPSEwLG9bdV09e3N0YXR1czpcImZ1bGZpbGxlZFwiLHZhbHVlOnR9LC0tYXx8bihvKSl9LGZ1bmN0aW9uKHQpe3N8fChzPSEwLG9bdV09e3N0YXR1czpcInJlamVjdGVkXCIscmVhc29uOnR9LC0tYXx8bihvKSl9KX0pLC0tYXx8bihvKX0pO3JldHVybiBpLmVycm9yJiZvKGkudmFsdWUpLHIucHJvbWlzZX19KTt2YXIgb2w9ISFLYyYmbyhmdW5jdGlvbigpe0tjLnByb3RvdHlwZS5maW5hbGx5LmNhbGwoe3RoZW46ZnVuY3Rpb24oKXt9fSxmdW5jdGlvbigpe30pfSk7a3Qoe3RhcmdldDpcIlByb21pc2VcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpvbH0se2ZpbmFsbHk6ZnVuY3Rpb24odCl7dmFyIGU9c24odGhpcyxvdChcIlByb21pc2VcIikpLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdDtyZXR1cm4gdGhpcy50aGVuKHI/ZnVuY3Rpb24ocil7cmV0dXJuIElmKGUsdCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KX06dCxyP2Z1bmN0aW9uKHIpe3JldHVybiBJZihlLHQoKSkudGhlbihmdW5jdGlvbigpe3Rocm93IHJ9KX06dCl9fSksXCJmdW5jdGlvblwiIT10eXBlb2YgS2N8fEtjLnByb3RvdHlwZS5maW5hbGx5fHxldChLYy5wcm90b3R5cGUsXCJmaW5hbGx5XCIsb3QoXCJQcm9taXNlXCIpLnByb3RvdHlwZS5maW5hbGx5KTt2YXIgaWw9dHQuc2V0LGFsPXR0LmdldHRlckZvcihcIkFnZ3JlZ2F0ZUVycm9yXCIpLHVsPWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcztpZighKHIgaW5zdGFuY2VvZiB1bCkpcmV0dXJuIG5ldyB1bCh0LGUpO3FlJiYocj1xZShuZXcgRXJyb3IoZSksSWUocikpKTt2YXIgbj1bXTtyZXR1cm4gTXIodCxuLnB1c2gsbiksaT9pbChyLHtlcnJvcnM6bix0eXBlOlwiQWdncmVnYXRlRXJyb3JcIn0pOnIuZXJyb3JzPW4sdm9pZCAwIT09ZSYmSShyLFwibWVzc2FnZVwiLFN0cmluZyhlKSkscn07dWwucHJvdG90eXBlPUh0KEVycm9yLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6Yyg1LHVsKSxtZXNzYWdlOmMoNSxcIlwiKSxuYW1lOmMoNSxcIkFnZ3JlZ2F0ZUVycm9yXCIpfSksaSYmUC5mKHVsLnByb3RvdHlwZSxcImVycm9yc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYWwodGhpcykuZXJyb3JzfSxjb25maWd1cmFibGU6ITB9KSxrdCh7Z2xvYmFsOiEwfSx7QWdncmVnYXRlRXJyb3I6dWx9KSxrdCh7dGFyZ2V0OlwiUHJvbWlzZVwiLHN0YXQ6ITB9LHt0cnk6ZnVuY3Rpb24odCl7dmFyIGU9UGYuZih0aGlzKSxyPVRmKHQpO3JldHVybihyLmVycm9yP2UucmVqZWN0OmUucmVzb2x2ZSkoci52YWx1ZSksZS5wcm9taXNlfX0pO3ZhciBzbD1cIk5vIG9uZSBwcm9taXNlIHJlc29sdmVkXCI7a3Qoe3RhcmdldDpcIlByb21pc2VcIixzdGF0OiEwfSx7YW55OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMscj1QZi5mKGUpLG49ci5yZXNvbHZlLG89ci5yZWplY3QsaT1UZihmdW5jdGlvbigpe3ZhciByPVF0KGUucmVzb2x2ZSksaT1bXSxhPTAsdT0xLHM9ITE7TXIodCxmdW5jdGlvbih0KXt2YXIgYz1hKyssZj0hMTtpLnB1c2godm9pZCAwKSx1Kyssci5jYWxsKGUsdCkudGhlbihmdW5jdGlvbih0KXtmfHxzfHwocz0hMCxuKHQpKX0sZnVuY3Rpb24odCl7Znx8c3x8KGY9ITAsaVtjXT10LC0tdXx8byhuZXcob3QoXCJBZ2dyZWdhdGVFcnJvclwiKSkoaSxzbCkpKX0pfSksLS11fHxvKG5ldyhvdChcIkFnZ3JlZ2F0ZUVycm9yXCIpKShpLHNsKSl9KTtyZXR1cm4gaS5lcnJvciYmbyhpLnZhbHVlKSxyLnByb21pc2V9fSksZWUoXCJQcm9taXNlXCIsXCJmaW5hbGx5XCIpO3ZhciBjbD1cIlVSTFNlYXJjaFBhcmFtc1wiaW4gc2VsZixmbD1cIlN5bWJvbFwiaW4gc2VsZiYmXCJpdGVyYXRvclwiaW4gU3ltYm9sLGxsPVwiRmlsZVJlYWRlclwiaW4gc2VsZiYmXCJCbG9iXCJpbiBzZWxmJiZmdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEJsb2IsITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpLGhsPVwiRm9ybURhdGFcImluIHNlbGYscGw9XCJBcnJheUJ1ZmZlclwiaW4gc2VsZjtpZihwbCl2YXIgZGw9W1wiW29iamVjdCBJbnQ4QXJyYXldXCIsXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCIsXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiLFwiW29iamVjdCBJbnQxNkFycmF5XVwiLFwiW29iamVjdCBVaW50MTZBcnJheV1cIixcIltvYmplY3QgSW50MzJBcnJheV1cIixcIltvYmplY3QgVWludDMyQXJyYXldXCIsXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIixcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXSx2bD1BcnJheUJ1ZmZlci5pc1ZpZXd8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZkbC5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSk+LTF9O2Z1bmN0aW9uIGdsKHQpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0JiYodD1TdHJpbmcodCkpLC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH5dL2kudGVzdCh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWVcIik7cmV0dXJuIHQudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiB5bCh0KXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKHQ9U3RyaW5nKHQpKSx0fWZ1bmN0aW9uIG1sKHQpe3ZhciBlPXtuZXh0OmZ1bmN0aW9uKCl7dmFyIGU9dC5zaGlmdCgpO3JldHVybntkb25lOnZvaWQgMD09PWUsdmFsdWU6ZX19fTtyZXR1cm4gZmwmJihlW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gZX0pLGV9ZnVuY3Rpb24gYmwodCl7dGhpcy5tYXA9e30sdCBpbnN0YW5jZW9mIGJsP3QuZm9yRWFjaChmdW5jdGlvbih0LGUpe3RoaXMuYXBwZW5kKGUsdCl9LHRoaXMpOkFycmF5LmlzQXJyYXkodCk/dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3RoaXMuYXBwZW5kKHRbMF0sdFsxXSl9LHRoaXMpOnQmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLmZvckVhY2goZnVuY3Rpb24oZSl7dGhpcy5hcHBlbmQoZSx0W2VdKX0sdGhpcyl9ZnVuY3Rpb24gd2wodCl7aWYodC5ib2R5VXNlZClyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcIkFscmVhZHkgcmVhZFwiKSk7dC5ib2R5VXNlZD0hMH1mdW5jdGlvbiBTbCh0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxyKXt0Lm9ubG9hZD1mdW5jdGlvbigpe2UodC5yZXN1bHQpfSx0Lm9uZXJyb3I9ZnVuY3Rpb24oKXtyKHQuZXJyb3IpfX0pfWZ1bmN0aW9uIEVsKHQpe3ZhciBlPW5ldyBGaWxlUmVhZGVyLHI9U2woZSk7cmV0dXJuIGUucmVhZEFzQXJyYXlCdWZmZXIodCkscn1mdW5jdGlvbiB4bCh0KXtpZih0LnNsaWNlKXJldHVybiB0LnNsaWNlKDApO3ZhciBlPW5ldyBVaW50OEFycmF5KHQuYnl0ZUxlbmd0aCk7cmV0dXJuIGUuc2V0KG5ldyBVaW50OEFycmF5KHQpKSxlLmJ1ZmZlcn1mdW5jdGlvbiBBbCgpe3JldHVybiB0aGlzLmJvZHlVc2VkPSExLHRoaXMuX2luaXRCb2R5PWZ1bmN0aW9uKHQpe3ZhciBlO3RoaXMuX2JvZHlJbml0PXQsdD9cInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLl9ib2R5VGV4dD10OmxsJiZCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHQpP3RoaXMuX2JvZHlCbG9iPXQ6aGwmJkZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHQpP3RoaXMuX2JvZHlGb3JtRGF0YT10OmNsJiZVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCk/dGhpcy5fYm9keVRleHQ9dC50b1N0cmluZygpOnBsJiZsbCYmKGU9dCkmJkRhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGUpPyh0aGlzLl9ib2R5QXJyYXlCdWZmZXI9eGwodC5idWZmZXIpLHRoaXMuX2JvZHlJbml0PW5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSk6cGwmJihBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KXx8dmwodCkpP3RoaXMuX2JvZHlBcnJheUJ1ZmZlcj14bCh0KTp0aGlzLl9ib2R5VGV4dD10PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KTp0aGlzLl9ib2R5VGV4dD1cIlwiLHRoaXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIil8fChcInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLmhlYWRlcnMuc2V0KFwiY29udGVudC10eXBlXCIsXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik6dGhpcy5fYm9keUJsb2ImJnRoaXMuX2JvZHlCbG9iLnR5cGU/dGhpcy5oZWFkZXJzLnNldChcImNvbnRlbnQtdHlwZVwiLHRoaXMuX2JvZHlCbG9iLnR5cGUpOmNsJiZVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCkmJnRoaXMuaGVhZGVycy5zZXQoXCJjb250ZW50LXR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIpKX0sbGwmJih0aGlzLmJsb2I9ZnVuY3Rpb24oKXt2YXIgdD13bCh0aGlzKTtpZih0KXJldHVybiB0O2lmKHRoaXMuX2JvZHlCbG9iKXJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpO2lmKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSk7aWYodGhpcy5fYm9keUZvcm1EYXRhKXRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYlwiKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKX0sdGhpcy5hcnJheUJ1ZmZlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9ib2R5QXJyYXlCdWZmZXI/d2wodGhpcyl8fFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpOnRoaXMuYmxvYigpLnRoZW4oRWwpfSksdGhpcy50ZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9d2wodGhpcyk7aWYodClyZXR1cm4gdDtpZih0aGlzLl9ib2R5QmxvYilyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9bmV3IEZpbGVSZWFkZXIscj1TbChlKTtyZXR1cm4gZS5yZWFkQXNUZXh0KHQpLHJ9KHRoaXMuX2JvZHlCbG9iKTtpZih0aGlzLl9ib2R5QXJyYXlCdWZmZXIpcmV0dXJuIFByb21pc2UucmVzb2x2ZShmdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IFVpbnQ4QXJyYXkodCkscj1uZXcgQXJyYXkoZS5sZW5ndGgpLG49MDtuPGUubGVuZ3RoO24rKylyW25dPVN0cmluZy5mcm9tQ2hhckNvZGUoZVtuXSk7cmV0dXJuIHIuam9pbihcIlwiKX0odGhpcy5fYm9keUFycmF5QnVmZmVyKSk7aWYodGhpcy5fYm9keUZvcm1EYXRhKXRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dFwiKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KX0saGwmJih0aGlzLmZvcm1EYXRhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oamwpfSksdGhpcy5qc29uPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSl9LHRoaXN9YmwucHJvdG90eXBlLmFwcGVuZD1mdW5jdGlvbih0LGUpe3Q9Z2wodCksZT15bChlKTt2YXIgcj10aGlzLm1hcFt0XTt0aGlzLm1hcFt0XT1yP3IrXCIsIFwiK2U6ZX0sYmwucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtkZWxldGUgdGhpcy5tYXBbZ2wodCldfSxibC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0PWdsKHQpLHRoaXMuaGFzKHQpP3RoaXMubWFwW3RdOm51bGx9LGJsLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KGdsKHQpKX0sYmwucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3RoaXMubWFwW2dsKHQpXT15bChlKX0sYmwucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gdGhpcy5tYXApdGhpcy5tYXAuaGFzT3duUHJvcGVydHkocikmJnQuY2FsbChlLHRoaXMubWFwW3JdLHIsdGhpcyl9LGJsLnByb3RvdHlwZS5rZXlzPWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlLHIpe3QucHVzaChyKX0pLG1sKHQpfSxibC5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlKXt0LnB1c2goZSl9KSxtbCh0KX0sYmwucHJvdG90eXBlLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGUscil7dC5wdXNoKFtyLGVdKX0pLG1sKHQpfSxmbCYmKGJsLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWJsLnByb3RvdHlwZS5lbnRyaWVzKTt2YXIgT2w9W1wiREVMRVRFXCIsXCJHRVRcIixcIkhFQURcIixcIk9QVElPTlNcIixcIlBPU1RcIixcIlBVVFwiXTtmdW5jdGlvbiBSbCh0LGUpe3ZhciByLG4sbz0oZT1lfHx7fSkuYm9keTtpZih0IGluc3RhbmNlb2YgUmwpe2lmKHQuYm9keVVzZWQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFscmVhZHkgcmVhZFwiKTt0aGlzLnVybD10LnVybCx0aGlzLmNyZWRlbnRpYWxzPXQuY3JlZGVudGlhbHMsZS5oZWFkZXJzfHwodGhpcy5oZWFkZXJzPW5ldyBibCh0LmhlYWRlcnMpKSx0aGlzLm1ldGhvZD10Lm1ldGhvZCx0aGlzLm1vZGU9dC5tb2RlLHRoaXMuc2lnbmFsPXQuc2lnbmFsLG98fG51bGw9PXQuX2JvZHlJbml0fHwobz10Ll9ib2R5SW5pdCx0LmJvZHlVc2VkPSEwKX1lbHNlIHRoaXMudXJsPVN0cmluZyh0KTtpZih0aGlzLmNyZWRlbnRpYWxzPWUuY3JlZGVudGlhbHN8fHRoaXMuY3JlZGVudGlhbHN8fFwic2FtZS1vcmlnaW5cIiwhZS5oZWFkZXJzJiZ0aGlzLmhlYWRlcnN8fCh0aGlzLmhlYWRlcnM9bmV3IGJsKGUuaGVhZGVycykpLHRoaXMubWV0aG9kPShuPShyPWUubWV0aG9kfHx0aGlzLm1ldGhvZHx8XCJHRVRcIikudG9VcHBlckNhc2UoKSxPbC5pbmRleE9mKG4pPi0xP246ciksdGhpcy5tb2RlPWUubW9kZXx8dGhpcy5tb2RlfHxudWxsLHRoaXMuc2lnbmFsPWUuc2lnbmFsfHx0aGlzLnNpZ25hbCx0aGlzLnJlZmVycmVyPW51bGwsKFwiR0VUXCI9PT10aGlzLm1ldGhvZHx8XCJIRUFEXCI9PT10aGlzLm1ldGhvZCkmJm8pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzXCIpO3RoaXMuX2luaXRCb2R5KG8pfWZ1bmN0aW9uIGpsKHQpe3ZhciBlPW5ldyBGb3JtRGF0YTtyZXR1cm4gdC50cmltKCkuc3BsaXQoXCImXCIpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodCl7dmFyIHI9dC5zcGxpdChcIj1cIiksbj1yLnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csXCIgXCIpLG89ci5qb2luKFwiPVwiKS5yZXBsYWNlKC9cXCsvZyxcIiBcIik7ZS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG4pLGRlY29kZVVSSUNvbXBvbmVudChvKSl9fSksZX1mdW5jdGlvbiBQbCh0LGUpe2V8fChlPXt9KSx0aGlzLnR5cGU9XCJkZWZhdWx0XCIsdGhpcy5zdGF0dXM9dm9pZCAwPT09ZS5zdGF0dXM/MjAwOmUuc3RhdHVzLHRoaXMub2s9dGhpcy5zdGF0dXM+PTIwMCYmdGhpcy5zdGF0dXM8MzAwLHRoaXMuc3RhdHVzVGV4dD1cInN0YXR1c1RleHRcImluIGU/ZS5zdGF0dXNUZXh0OlwiT0tcIix0aGlzLmhlYWRlcnM9bmV3IGJsKGUuaGVhZGVycyksdGhpcy51cmw9ZS51cmx8fFwiXCIsdGhpcy5faW5pdEJvZHkodCl9UmwucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBSbCh0aGlzLHtib2R5OnRoaXMuX2JvZHlJbml0fSl9LEFsLmNhbGwoUmwucHJvdG90eXBlKSxBbC5jYWxsKFBsLnByb3RvdHlwZSksUGwucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBQbCh0aGlzLl9ib2R5SW5pdCx7c3RhdHVzOnRoaXMuc3RhdHVzLHN0YXR1c1RleHQ6dGhpcy5zdGF0dXNUZXh0LGhlYWRlcnM6bmV3IGJsKHRoaXMuaGVhZGVycyksdXJsOnRoaXMudXJsfSl9LFBsLmVycm9yPWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IFBsKG51bGwse3N0YXR1czowLHN0YXR1c1RleHQ6XCJcIn0pO3JldHVybiB0LnR5cGU9XCJlcnJvclwiLHR9O3ZhciBJbD1bMzAxLDMwMiwzMDMsMzA3LDMwOF07UGwucmVkaXJlY3Q9ZnVuY3Rpb24odCxlKXtpZigtMT09PUlsLmluZGV4T2YoZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHN0YXR1cyBjb2RlXCIpO3JldHVybiBuZXcgUGwobnVsbCx7c3RhdHVzOmUsaGVhZGVyczp7bG9jYXRpb246dH19KX07dmFyIFRsPXNlbGYuRE9NRXhjZXB0aW9uO3RyeXtuZXcgVGx9Y2F0Y2godCl7KFRsPWZ1bmN0aW9uKHQsZSl7dGhpcy5tZXNzYWdlPXQsdGhpcy5uYW1lPWU7dmFyIHI9RXJyb3IodCk7dGhpcy5zdGFjaz1yLnN0YWNrfSkucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKSxUbC5wcm90b3R5cGUuY29uc3RydWN0b3I9VGx9ZnVuY3Rpb24ga2wodCxlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocixuKXt2YXIgbz1uZXcgUmwodCxlKTtpZihvLnNpZ25hbCYmby5zaWduYWwuYWJvcnRlZClyZXR1cm4gbihuZXcgVGwoXCJBYm9ydGVkXCIsXCJBYm9ydEVycm9yXCIpKTt2YXIgaT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZnVuY3Rpb24gYSgpe2kuYWJvcnQoKX1pLm9ubG9hZD1mdW5jdGlvbigpe3ZhciB0LGUsbj17c3RhdHVzOmkuc3RhdHVzLHN0YXR1c1RleHQ6aS5zdGF0dXNUZXh0LGhlYWRlcnM6KHQ9aS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKXx8XCJcIixlPW5ldyBibCx0LnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csXCIgXCIpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgcj10LnNwbGl0KFwiOlwiKSxuPXIuc2hpZnQoKS50cmltKCk7aWYobil7dmFyIG89ci5qb2luKFwiOlwiKS50cmltKCk7ZS5hcHBlbmQobixvKX19KSxlKX07bi51cmw9XCJyZXNwb25zZVVSTFwiaW4gaT9pLnJlc3BvbnNlVVJMOm4uaGVhZGVycy5nZXQoXCJYLVJlcXVlc3QtVVJMXCIpLHIobmV3IFBsKFwicmVzcG9uc2VcImluIGk/aS5yZXNwb25zZTppLnJlc3BvbnNlVGV4dCxuKSl9LGkub25lcnJvcj1mdW5jdGlvbigpe24obmV3IFR5cGVFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWRcIikpfSxpLm9udGltZW91dD1mdW5jdGlvbigpe24obmV3IFR5cGVFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWRcIikpfSxpLm9uYWJvcnQ9ZnVuY3Rpb24oKXtuKG5ldyBUbChcIkFib3J0ZWRcIixcIkFib3J0RXJyb3JcIikpfSxpLm9wZW4oby5tZXRob2Qsby51cmwsITApLFwiaW5jbHVkZVwiPT09by5jcmVkZW50aWFscz9pLndpdGhDcmVkZW50aWFscz0hMDpcIm9taXRcIj09PW8uY3JlZGVudGlhbHMmJihpLndpdGhDcmVkZW50aWFscz0hMSksXCJyZXNwb25zZVR5cGVcImluIGkmJmxsJiYoaS5yZXNwb25zZVR5cGU9XCJibG9iXCIpLG8uaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7aS5zZXRSZXF1ZXN0SGVhZGVyKGUsdCl9KSxvLnNpZ25hbCYmKG8uc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLGEpLGkub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWkucmVhZHlTdGF0ZSYmby5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsYSl9KSxpLnNlbmQodm9pZCAwPT09by5fYm9keUluaXQ/bnVsbDpvLl9ib2R5SW5pdCl9KX1rbC5wb2x5ZmlsbD0hMCxzZWxmLmZldGNofHwoc2VsZi5mZXRjaD1rbCxzZWxmLkhlYWRlcnM9Ymwsc2VsZi5SZXF1ZXN0PVJsLHNlbGYuUmVzcG9uc2U9UGwpO3ZhciBMbD1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFVsPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksTWw9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtmdW5jdGlvbiBfbCh0KXtpZihudWxsPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gT2JqZWN0KHQpfXZhciBObD1mdW5jdGlvbigpe3RyeXtpZighT2JqZWN0LmFzc2lnbilyZXR1cm4hMTt2YXIgdD1uZXcgU3RyaW5nKFwiYWJjXCIpO2lmKHRbNV09XCJkZVwiLFwiNVwiPT09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModClbMF0pcmV0dXJuITE7Zm9yKHZhciBlPXt9LHI9MDtyPDEwO3IrKyllW1wiX1wiK1N0cmluZy5mcm9tQ2hhckNvZGUocildPXI7aWYoXCIwMTIzNDU2Nzg5XCIhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19KS5qb2luKFwiXCIpKXJldHVybiExO3ZhciBuPXt9O3JldHVyblwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdF09dH0pLFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIj09PU9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sbikpLmpvaW4oXCJcIil9Y2F0Y2godCl7cmV0dXJuITF9fSgpP09iamVjdC5hc3NpZ246ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIsbixvPV9sKHQpLGk9MTtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXtmb3IodmFyIGEgaW4gcj1PYmplY3QoYXJndW1lbnRzW2ldKSlVbC5jYWxsKHIsYSkmJihvW2FdPXJbYV0pO2lmKExsKXtuPUxsKHIpO2Zvcih2YXIgdT0wO3U8bi5sZW5ndGg7dSsrKU1sLmNhbGwocixuW3VdKSYmKG9bblt1XV09cltuW3VdXSl9fXJldHVybiBvfTtPYmplY3QuYXNzaWduPU5sfSgpO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjInO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IDB4ZWFjYztcbmV4cG9ydHMuUHJvZmlsZXIgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbmV4cG9ydHMuU3VzcGVuc2UgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBleHBvcnRzLlN0cmljdE1vZGUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIGV4cG9ydHMuUHJvZmlsZXIgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBleHBvcnRzLlN1c3BlbnNlID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiAwXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgZXhwb3J0cy5Qcm9maWxlcjpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBleHBvcnRzLlN0cmljdE1vZGU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIiApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cbiAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cblxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBkZWZhdWx0RXhwb3J0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQuX3Jlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmIChyZW5kZXIuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gZXhwb3J0cy5Qcm9maWxlciB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBleHBvcnRzLlN0cmljdE1vZGUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdXNwZW5zZSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAodHlwZS5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5cbiAgICBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3ICovXG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9