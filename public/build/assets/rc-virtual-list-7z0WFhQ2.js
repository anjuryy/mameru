import{e as Y,b as C,g as Qe,c as H,_ as bt,a as pt,d as Pe,h as Mt}from"./@babel-CiGj-Vf4.js";import{r as t}from"./react-Dtk7mQTN.js";import{r as Ae}from"./react-dom-B94yBsr_.js";import{c as pe}from"./classnames-DDy2KJim.js";import{R as et}from"./rc-resize-observer-CSmw4Zs0.js";import{l as B,D as yt,a as Re,i as Ge}from"./rc-util-B_UpKPJg.js";import"./react-is-DcfIKM1A.js";var tt=t.forwardRef(function(e,l){var r=e.height,u=e.offsetY,d=e.offsetX,a=e.children,c=e.prefixCls,S=e.onInnerResize,m=e.innerProps,p=e.rtl,R=e.extra,n={},s={display:"flex",flexDirection:"column"};return u!==void 0&&(n={height:r,position:"relative",overflow:"hidden"},s=Y(Y({},s),{},C(C(C(C(C({transform:"translateY(".concat(u,"px)")},p?"marginRight":"marginLeft",-d),"position","absolute"),"left",0),"right",0),"top",0))),t.createElement("div",{style:n},t.createElement(et,{onResize:function(g){var h=g.offsetHeight;h&&S&&S()}},t.createElement("div",Qe({style:s,className:pe(C({},"".concat(c,"-holder-inner"),c)),ref:l},m),a,R)))});tt.displayName="Filler";function Ue(e,l){var r="touches"in e?e.touches[0]:e;return r[l?"pageX":"pageY"]}var Ze=t.forwardRef(function(e,l){var r=e.prefixCls,u=e.rtl,d=e.scrollOffset,a=e.scrollRange,c=e.onStartMove,S=e.onStopMove,m=e.onScroll,p=e.horizontal,R=e.spinSize,n=e.containerSize,s=e.style,v=e.thumbStyle,g=t.useState(!1),h=H(g,2),f=h[0],M=h[1],y=t.useState(null),D=H(y,2),_=D[0],W=D[1],X=t.useState(null),x=H(X,2),j=x[0],P=x[1],I=!u,k=t.useRef(),Q=t.useRef(),E=t.useState(!1),$=H(E,2),ee=$[0],te=$[1],G=t.useRef(),T=function(){clearTimeout(G.current),te(!0),G.current=setTimeout(function(){te(!1)},3e3)},U=a-n||0,oe=n-R||0,Z=t.useMemo(function(){if(d===0||U===0)return 0;var w=d/U;return w*oe},[d,U,oe]),re=function(L){L.stopPropagation(),L.preventDefault()},q=t.useRef({top:Z,dragging:f,pageY:_,startTop:j});q.current={top:Z,dragging:f,pageY:_,startTop:j};var le=function(L){M(!0),W(Ue(L,p)),P(q.current.top),c(),L.stopPropagation(),L.preventDefault()};t.useEffect(function(){var w=function(se){se.preventDefault()},L=k.current,N=Q.current;return L.addEventListener("touchstart",w),N.addEventListener("touchstart",le),function(){L.removeEventListener("touchstart",w),N.removeEventListener("touchstart",le)}},[]);var ue=t.useRef();ue.current=U;var be=t.useRef();be.current=oe,t.useEffect(function(){if(f){var w,L=function(se){var fe=q.current,Me=fe.dragging,ye=fe.pageY,xe=fe.startTop;if(B.cancel(w),Me){var ne=Ue(se,p)-ye,ve=xe;!I&&p?ve-=ne:ve+=ne;var de=ue.current,ae=be.current,Ee=ae?ve/ae:0,V=Math.ceil(Ee*de);V=Math.max(V,0),V=Math.min(V,de),w=B(function(){m(V,p)})}},N=function(){M(!1),S()};return window.addEventListener("mousemove",L),window.addEventListener("touchmove",L),window.addEventListener("mouseup",N),window.addEventListener("touchend",N),function(){window.removeEventListener("mousemove",L),window.removeEventListener("touchmove",L),window.removeEventListener("mouseup",N),window.removeEventListener("touchend",N),B.cancel(w)}}},[f]),t.useEffect(function(){T()},[d]),t.useImperativeHandle(l,function(){return{delayHidden:T}});var K="".concat(r,"-scrollbar"),O={position:"absolute",visibility:ee?null:"hidden"},F={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return p?(O.height=8,O.left=0,O.right=0,O.bottom=0,F.height="100%",F.width=R,I?F.left=Z:F.right=Z):(O.width=8,O.top=0,O.bottom=0,I?O.right=0:O.left=0,F.width="100%",F.height=R,F.top=Z),t.createElement("div",{ref:k,className:pe(K,C(C(C({},"".concat(K,"-horizontal"),p),"".concat(K,"-vertical"),!p),"".concat(K,"-visible"),ee)),style:Y(Y({},O),s),onMouseDown:re,onMouseMove:T},t.createElement("div",{ref:Q,className:pe("".concat(K,"-thumb"),C({},"".concat(K,"-thumb-moving"),f)),style:Y(Y({},F),v),onMouseDown:le}))});function xt(e){var l=e.children,r=e.setRef,u=t.useCallback(function(d){r(d)},[]);return t.cloneElement(l,{ref:u})}function Et(e,l,r,u,d,a,c){var S=c.getKey;return e.slice(l,r+1).map(function(m,p){var R=l+p,n=a(m,R,{style:{width:u}}),s=S(m);return t.createElement(xt,{key:s,setRef:function(g){return d(m,g)}},n)})}var wt=function(){function e(){pt(this,e),C(this,"maps",void 0),C(this,"id",0),this.maps=Object.create(null)}return bt(e,[{key:"set",value:function(r,u){this.maps[r]=u,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}();function zt(e,l,r){var u=t.useState(0),d=H(u,2),a=d[0],c=d[1],S=t.useRef(new Map),m=t.useRef(new wt),p=t.useRef();function R(){B.cancel(p.current)}function n(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;R();var g=function(){S.current.forEach(function(f,M){if(f&&f.offsetParent){var y=yt(f),D=y.offsetHeight;m.current.get(M)!==D&&m.current.set(M,y.offsetHeight)}}),c(function(f){return f+1})};v?g():p.current=B(g)}function s(v,g){var h=e(v),f=S.current.get(h);g?(S.current.set(h,g),n()):S.current.delete(h),!f!=!g&&(g?l==null||l(v):r==null||r(v))}return t.useEffect(function(){return R},[]),[s,n,m.current,a]}var _t=10;function Lt(e,l,r,u,d,a,c,S){var m=t.useRef(),p=t.useState(null),R=H(p,2),n=R[0],s=R[1];return Re(function(){if(n&&n.times<_t){if(!e.current){s(function(U){return Y({},U)});return}a();var v=n.targetAlign,g=n.originAlign,h=n.index,f=n.offset,M=e.current.clientHeight,y=!1,D=v,_=null;if(M){for(var W=v||g,X=0,x=0,j=0,P=Math.min(l.length-1,h),I=0;I<=P;I+=1){var k=d(l[I]);x=X;var Q=r.get(k);j=x+(Q===void 0?u:Q),X=j}for(var E=W==="top"?f:M-f,$=P;$>=0;$-=1){var ee=d(l[$]),te=r.get(ee);if(te===void 0){y=!0;break}if(E-=te,E<=0)break}switch(W){case"top":_=x-f;break;case"bottom":_=j-M+f;break;default:{var G=e.current.scrollTop,T=G+M;x<G?D="top":j>T&&(D="bottom")}}_!==null&&c(_),_!==n.lastTop&&(y=!0)}y&&s(Y(Y({},n),{},{times:n.times+1,targetAlign:D,lastTop:_}))}},[n,e.current]),function(v){if(v==null){S();return}if(B.cancel(m.current),typeof v=="number")c(v);else if(v&&Pe(v)==="object"){var g,h=v.align;"index"in v?g=v.index:g=l.findIndex(function(y){return d(y)===v.key});var f=v.offset,M=f===void 0?0:f;s({times:0,index:g,offset:M,originAlign:h})}}}function Ht(e,l,r){var u=e.length,d=l.length,a,c;if(u===0&&d===0)return null;u<d?(a=e,c=l):(a=l,c=e);var S={__EMPTY_ITEM__:!0};function m(g){return g!==void 0?r(g):S}for(var p=null,R=Math.abs(u-d)!==1,n=0;n<c.length;n+=1){var s=m(a[n]),v=m(c[n]);if(s!==v){p=n,R=R||s!==m(c[n+1]);break}}return p===null?null:{index:p,multiple:R}}function Dt(e,l,r){var u=t.useState(e),d=H(u,2),a=d[0],c=d[1],S=t.useState(null),m=H(S,2),p=m[0],R=m[1];return t.useEffect(function(){var n=Ht(a||[],e||[],l);(n==null?void 0:n.index)!==void 0&&(r==null||r(n.index),R(e[n.index])),c(e)},[e]),[p]}var qe=(typeof navigator>"u"?"undefined":Pe(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const rt=function(e,l){var r=t.useRef(!1),u=t.useRef(null);function d(){clearTimeout(u.current),r.current=!0,u.current=setTimeout(function(){r.current=!1},50)}var a=t.useRef({top:e,bottom:l});return a.current.top=e,a.current.bottom=l,function(c){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=c<0&&a.current.top||c>0&&a.current.bottom;return S&&m?(clearTimeout(u.current),r.current=!1):(!m||r.current)&&d(),!r.current&&m}};function Tt(e,l,r,u,d){var a=t.useRef(0),c=t.useRef(null),S=t.useRef(null),m=t.useRef(!1),p=rt(l,r);function R(f,M){B.cancel(c.current),a.current+=M,S.current=M,!p(M)&&(qe||f.preventDefault(),c.current=B(function(){var y=m.current?10:1;d(a.current*y),a.current=0}))}function n(f,M){d(M,!0),qe||f.preventDefault()}var s=t.useRef(null),v=t.useRef(null);function g(f){if(e){B.cancel(v.current),v.current=B(function(){s.current=null},2);var M=f.deltaX,y=f.deltaY,D=f.shiftKey,_=M,W=y;(s.current==="sx"||!s.current&&D&&y&&!M)&&(_=y,W=0,s.current="sx");var X=Math.abs(_),x=Math.abs(W);s.current===null&&(s.current=u&&X>x?"x":"y"),s.current==="y"?R(f,W):n(f,_)}}function h(f){e&&(m.current=f.detail===S.current)}return[g,h]}var Ct=14/15;function Pt(e,l,r){var u=t.useRef(!1),d=t.useRef(0),a=t.useRef(null),c=t.useRef(null),S,m=function(s){if(u.current){var v=Math.ceil(s.touches[0].pageY),g=d.current-v;d.current=v,r(g)&&s.preventDefault(),clearInterval(c.current),c.current=setInterval(function(){g*=Ct,(!r(g,!0)||Math.abs(g)<=.1)&&clearInterval(c.current)},16)}},p=function(){u.current=!1,S()},R=function(s){S(),s.touches.length===1&&!u.current&&(u.current=!0,d.current=Math.ceil(s.touches[0].pageY),a.current=s.target,a.current.addEventListener("touchmove",m),a.current.addEventListener("touchend",p))};S=function(){a.current&&(a.current.removeEventListener("touchmove",m),a.current.removeEventListener("touchend",p))},Re(function(){return e&&l.current.addEventListener("touchstart",R),function(){var n;(n=l.current)===null||n===void 0||n.removeEventListener("touchstart",R),S(),clearInterval(c.current)}},[e])}var It=20;function Je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/l*e;return isNaN(r)&&(r=0),r=Math.max(r,It),Math.floor(r)}function kt(e,l,r,u){var d=t.useMemo(function(){return[new Map,[]]},[e,r.id,u]),a=H(d,2),c=a[0],S=a[1],m=function(R){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R,s=c.get(R),v=c.get(n);if(s===void 0||v===void 0)for(var g=e.length,h=S.length;h<g;h+=1){var f,M=e[h],y=l(M);c.set(y,h);var D=(f=r.get(y))!==null&&f!==void 0?f:u;if(S[h]=(S[h-1]||0)+D,y===R&&(s=h),y===n&&(v=h),s!==void 0&&v!==void 0)break}return{top:S[s-1]||0,bottom:S[v]}};return m}var Ot=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],$t=[],Nt={overflowY:"auto",overflowAnchor:"none"};function Yt(e,l){var r=e.prefixCls,u=r===void 0?"rc-virtual-list":r,d=e.className,a=e.height,c=e.itemHeight,S=e.fullHeight,m=S===void 0?!0:S,p=e.style,R=e.data,n=e.children,s=e.itemKey,v=e.virtual,g=e.direction,h=e.scrollWidth,f=e.component,M=f===void 0?"div":f,y=e.onScroll,D=e.onVirtualScroll,_=e.onVisibleChange,W=e.innerProps,X=e.extraRender,x=e.styles,j=Mt(e,Ot),P=!!(v!==!1&&a&&c),I=P&&R&&(c*R.length>a||!!h),k=g==="rtl",Q=pe(u,C({},"".concat(u,"-rtl"),k),d),E=R||$t,$=t.useRef(),ee=t.useRef(),te=t.useState(0),G=H(te,2),T=G[0],U=G[1],oe=t.useState(0),Z=H(oe,2),re=Z[0],q=Z[1],le=t.useState(!1),ue=H(le,2),be=ue[0],K=ue[1],O=function(){K(!0)},F=function(){K(!1)},w=t.useCallback(function(i){return typeof s=="function"?s(i):i==null?void 0:i[s]},[s]),L={getKey:w};function N(i){U(function(o){var b;typeof i=="function"?b=i(o):b=i;var z=ut(b);return $.current.scrollTop=z,z})}var ce=t.useRef({start:0,end:E.length}),se=t.useRef(),fe=Dt(E,w),Me=H(fe,1),ye=Me[0];se.current=ye;var xe=zt(w,null,null),ne=H(xe,4),ve=ne[0],de=ne[1],ae=ne[2],Ee=ne[3],V=t.useMemo(function(){if(!P)return{scrollHeight:void 0,start:0,end:E.length-1,offset:void 0};if(!I){var i;return{scrollHeight:((i=ee.current)===null||i===void 0?void 0:i.offsetHeight)||0,start:0,end:E.length-1,offset:void 0}}for(var o=0,b,z,J,mt=E.length,ge=0;ge<mt;ge+=1){var gt=E[ge],Rt=w(gt),Ke=ae.get(Rt),Ce=o+(Ke===void 0?c:Ke);Ce>=T&&b===void 0&&(b=ge,z=o),Ce>T+a&&J===void 0&&(J=ge),o=Ce}return b===void 0&&(b=0,z=0,J=Math.ceil(a/c)),J===void 0&&(J=E.length-1),J=Math.min(J+1,E.length-1),{scrollHeight:o,start:b,end:J,offset:z}},[I,P,T,E,Ee,a]),ie=V.scrollHeight,he=V.start,Se=V.end,Ie=V.offset;ce.current.start=he,ce.current.end=Se;var nt=t.useState({width:0,height:a}),ke=H(nt,2),A=ke[0],at=ke[1],it=function(o){at({width:o.width||o.offsetWidth,height:o.height||o.offsetHeight})},Oe=t.useRef(),$e=t.useRef(),ot=t.useMemo(function(){return Je(A.width,h)},[A.width,h]),lt=t.useMemo(function(){return Je(A.height,ie)},[A.height,ie]),we=ie-a,ze=t.useRef(we);ze.current=we;function ut(i){var o=i;return Number.isNaN(ze.current)||(o=Math.min(o,ze.current)),o=Math.max(o,0),o}var Ne=T<=0,Ye=T>=we,ct=rt(Ne,Ye),_e=function(){return{x:k?-re:re,y:T}},Le=t.useRef(_e()),He=Ge(function(){if(D){var i=_e();(Le.current.x!==i.x||Le.current.y!==i.y)&&(D(i),Le.current=i)}});function Fe(i,o){var b=i;o?(Ae.flushSync(function(){q(b)}),He()):N(b)}function st(i){var o=i.currentTarget.scrollTop;o!==T&&N(o),y==null||y(i),He()}var De=function(o){var b=o,z=h-A.width;return b=Math.max(b,0),b=Math.min(b,z),b},ft=Ge(function(i,o){o?(Ae.flushSync(function(){q(function(b){var z=b+(k?-i:i);return De(z)})}),He()):N(function(b){var z=b+i;return z})}),vt=Tt(P,Ne,Ye,!!h,ft),We=H(vt,2),Te=We[0],Xe=We[1];Pt(P,$,function(i,o){return ct(i,o)?!1:(Te({preventDefault:function(){},deltaY:i}),!0)}),Re(function(){function i(b){P&&b.preventDefault()}var o=$.current;return o.addEventListener("wheel",Te),o.addEventListener("DOMMouseScroll",Xe),o.addEventListener("MozMousePixelScroll",i),function(){o.removeEventListener("wheel",Te),o.removeEventListener("DOMMouseScroll",Xe),o.removeEventListener("MozMousePixelScroll",i)}},[P]),Re(function(){h&&q(function(i){return De(i)})},[A.width,h]);var Ve=function(){var o,b;(o=Oe.current)===null||o===void 0||o.delayHidden(),(b=$e.current)===null||b===void 0||b.delayHidden()},Be=Lt($,E,ae,c,w,function(){return de(!0)},N,Ve);t.useImperativeHandle(l,function(){return{getScrollInfo:_e,scrollTo:function(o){function b(z){return z&&Pe(z)==="object"&&("left"in z||"top"in z)}b(o)?(o.left!==void 0&&q(De(o.left)),Be(o.top)):Be(o)}}}),Re(function(){if(_){var i=E.slice(he,Se+1);_(i,E)}},[he,Se,E]);var dt=kt(E,w,ae,c),ht=X==null?void 0:X({start:he,end:Se,virtual:I,offsetX:re,offsetY:Ie,rtl:k,getSize:dt}),St=Et(E,he,Se,h,ve,n,L),me=null;a&&(me=Y(C({},m?"height":"maxHeight",a),Nt),P&&(me.overflowY="hidden",h&&(me.overflowX="hidden"),be&&(me.pointerEvents="none")));var je={};return k&&(je.dir="rtl"),t.createElement("div",Qe({style:Y(Y({},p),{},{position:"relative"}),className:Q},je,j),t.createElement(et,{onResize:it},t.createElement(M,{className:"".concat(u,"-holder"),style:me,ref:$,onScroll:st,onMouseEnter:Ve},t.createElement(tt,{prefixCls:u,height:ie,offsetX:re,offsetY:Ie,scrollWidth:h,onInnerResize:de,ref:ee,innerProps:W,rtl:k,extra:ht},St))),I&&ie>a&&t.createElement(Ze,{ref:Oe,prefixCls:u,scrollOffset:T,scrollRange:ie,rtl:k,onScroll:Fe,onStartMove:O,onStopMove:F,spinSize:lt,containerSize:A.height,style:x==null?void 0:x.verticalScrollBar,thumbStyle:x==null?void 0:x.verticalScrollBarThumb}),I&&h>A.width&&t.createElement(Ze,{ref:$e,prefixCls:u,scrollOffset:re,scrollRange:h,rtl:k,onScroll:Fe,onStartMove:O,onStopMove:F,spinSize:ot,containerSize:A.width,horizontal:!0,style:x==null?void 0:x.horizontalScrollBar,thumbStyle:x==null?void 0:x.horizontalScrollBarThumb}))}var Ft=t.forwardRef(Yt);Ft.displayName="List";export{Ft as L};
//# sourceMappingURL=rc-virtual-list-7z0WFhQ2.js.map
