var d={exports:{}},r={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=Symbol.for("react.element"),S=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),f=Symbol.for("react.context"),$=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function t(e){if(typeof e=="object"&&e!==null){var m=e.$$typeof;switch(m){case a:switch(e=e.type,e){case o:case c:case n:case i:case l:return e;default:switch(e=e&&e.$$typeof,e){case $:case f:case u:case p:case y:case s:return e;default:return m}}case S:return m}}}r.ContextConsumer=f;r.ContextProvider=s;r.Element=a;r.ForwardRef=u;r.Fragment=o;r.Lazy=p;r.Memo=y;r.Portal=S;r.Profiler=c;r.StrictMode=n;r.Suspense=i;r.SuspenseList=l;r.isAsyncMode=function(){return!1};r.isConcurrentMode=function(){return!1};r.isContextConsumer=function(e){return t(e)===f};r.isContextProvider=function(e){return t(e)===s};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===a};r.isForwardRef=function(e){return t(e)===u};r.isFragment=function(e){return t(e)===o};r.isLazy=function(e){return t(e)===p};r.isMemo=function(e){return t(e)===y};r.isPortal=function(e){return t(e)===S};r.isProfiler=function(e){return t(e)===c};r.isStrictMode=function(e){return t(e)===n};r.isSuspense=function(e){return t(e)===i};r.isSuspenseList=function(e){return t(e)===l};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===o||e===c||e===n||e===i||e===l||e===v||typeof e=="object"&&e!==null&&(e.$$typeof===p||e.$$typeof===y||e.$$typeof===s||e.$$typeof===f||e.$$typeof===u||e.$$typeof===b||e.getModuleId!==void 0)};r.typeOf=t;d.exports=r;var x=d.exports;export{x as r};
//# sourceMappingURL=react-is-DcfIKM1A.js.map
