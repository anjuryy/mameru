import{r as o}from"./react-DGeDUS3L.js";var v=Object.defineProperty,O=Object.defineProperties,P=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))y.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))b.call(r,t)&&c(e,t,r[t]);return e},h=(e,r)=>O(e,P(r));function f(e,r,t){if(!e)return;if(t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){const i=f(n,r,t);if(i)return i;n=r?null:n.sibling}}function d(e){try{return Object.defineProperties(e,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return e}}const a=d(o.createContext(null));class w extends o.Component{render(){return o.createElement(a.Provider,{value:this._reactInternals},this.props.children)}}const{ReactCurrentOwner:p,ReactCurrentDispatcher:_}=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(){const e=o.useContext(a);if(e===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const r=o.useId();return o.useMemo(()=>{for(const n of[p==null?void 0:p.current,e,e==null?void 0:e.alternate]){if(!n)continue;const i=f(n,!1,m=>{let u=m.memoizedState;for(;u;){if(u.memoizedState===r)return!0;u=u.next}});if(i)return i}},[e,r])}function x(){var e;const r=E(),[t]=o.useState(()=>new Map);t.clear();let n=r;for(;n;){if(n.type&&typeof n.type=="object"){const i="Provider"in n.type?n.type:n.type._context;i&&i!==a&&!t.has(i)&&t.set(i,(e=_==null?void 0:_.current)==null?void 0:e.readContext(d(i)))}n=n.return}return t}function F(){const e=x();return o.useMemo(()=>Array.from(e.keys()).reduce((r,t)=>n=>o.createElement(r,null,o.createElement(t.Provider,h(l({},n),{value:e.get(t)}))),r=>o.createElement(w,l({},r))),[e])}export{w as F,F as u};
//# sourceMappingURL=its-fine-fQHrmN5W.js.map
