import{g as v}from"./get-intrinsic-B1Ut8WxJ.js";import{c}from"./call-bind-Aj7T_c8u.js";import{o as m}from"./object-inspect-C9PhCdyB.js";import{t as M}from"./es-errors-DzOT6E3C.js";var l=v,o=c,$=m,x=M,i=l("%WeakMap%",!0),f=l("%Map%",!0),d=o("WeakMap.prototype.get",!0),h=o("WeakMap.prototype.set",!0),w=o("WeakMap.prototype.has",!0),g=o("Map.prototype.get",!0),G=o("Map.prototype.set",!0),S=o("Map.prototype.has",!0),s=function(r,a){for(var n=r,e;(e=n.next)!==null;n=e)if(e.key===a)return n.next=e.next,e.next=r.next,r.next=e,e},W=function(r,a){var n=s(r,a);return n&&n.value},H=function(r,a,n){var e=s(r,a);e?e.value=n:r.next={key:a,next:r.next,value:n}},I=function(r,a){return!!s(r,a)},E=function(){var a,n,e,u={assert:function(t){if(!u.has(t))throw new x("Side channel does not contain "+$(t))},get:function(t){if(i&&t&&(typeof t=="object"||typeof t=="function")){if(a)return d(a,t)}else if(f){if(n)return g(n,t)}else if(e)return W(e,t)},has:function(t){if(i&&t&&(typeof t=="object"||typeof t=="function")){if(a)return w(a,t)}else if(f){if(n)return S(n,t)}else if(e)return I(e,t);return!1},set:function(t,p){i&&t&&(typeof t=="object"||typeof t=="function")?(a||(a=new i),h(a,t,p)):f?(n||(n=new f),G(n,t,p)):(e||(e={key:{},next:null}),H(e,t,p))}};return u};export{E as s};
