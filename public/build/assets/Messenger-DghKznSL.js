import{r as n,j as t}from"./react-DVM01ERP.js";import{A as y}from"./AuthenticatedLayout-BugnfXGD.js";import{d as N,a as S}from"./@inertiajs-B0U8ze2m.js";import{I as M}from"./react-infinite-scroll-component-Ccw2qodc.js";import{a as j}from"./axios-Di5RpEPX.js";import{S as b,D as w,L as f,A as u,I as E,E as I}from"./antd-CYpppCJY.js";import{T as P}from"./TextInput-DOS66sku.js";import{P as H}from"./pusher-js-CvWGBqAq.js";import{M as A,I as D}from"./@ant-design-C0Gbmny-.js";import"./@react-three-CUWIX_2K.js";import"./@babel-CiGj-Vf4.js";import"./three-CT44rtPH.js";import"./react-use-measure-Ct9Or_iS.js";import"./debounce-ByU2xFyg.js";import"./its-fine-BvlhO9uC.js";import"./react-reconciler-C8efrrNq.js";import"./react-dom-CfYs3vay.js";import"./scheduler-CzFDRTuY.js";import"./maath-DI14jEVk.js";import"./three-stdlib-CfCDiu8i.js";import"./zustand-EYJ_xzba.js";import"./suspend-react-BKIKQNXN.js";import"./ApplicationLogo-zuDSqy5b.js";import"./Dropdown-BsOCxxUS.js";import"./@headlessui-C8DaYiGQ.js";import"./@heroicons-Cw0Dg64V.js";import"./deepmerge-D2JkYKzz.js";import"./qs-Dg42YJCm.js";import"./side-channel-D9NP7caB.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C2f3yjQm.js";import"./nprogress-bhwNocYg.js";import"./lodash.isequal-DfSlhtKm.js";import"./rc-util-BChQAmOn.js";import"./react-is-DcfIKM1A.js";import"./classnames-BDS-9T0B.js";import"./rc-resize-observer-COukK9mp.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./rc-motion-7-oqKobm.js";import"./rc-tooltip-B0Cl2frF.js";import"./@rc-component-kg8twvO2.js";import"./rc-overflow-_toGt0dS.js";import"./rc-select-CbHDAHvY.js";import"./rc-virtual-list-D0yVq084.js";import"./rc-input-CfqWuEqB.js";import"./rc-textarea-x8im55Zd.js";import"./rc-field-form--8xPjGD7.js";import"./async-validator-DKvM95Vc.js";import"./@ctrl-DOFZgDuz.js";import"./rc-pagination-e6ZCrT3P.js";import"./rc-picker-BMndivzH.js";import"./throttle-debounce-CWhimLW_.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";const U=({user:s})=>{const[x,m]=n.useState(100),[a,c]=n.useState(!1);n.useState("/chat-users");const[o,r]=n.useState([]),[i,d]=n.useState(0),[g,e]=n.useState(!0),p=()=>{a||(c(!0),d(i+1),j.get(`/chat-users?page=${i}`).then(l=>{m(l.data.total),m(l.data.total),l.data.last_page<=i&&e(!1),r([...o,...l.data.data]),c(!1)}).catch(l=>{c(!1)}))},h=()=>{};return n.useEffect(()=>{p()},[]),t.jsx("div",{id:"scrollableDiv",style:{height:630,overflow:"auto",padding:"0px 0px"},children:t.jsx(M,{dataLength:o.length,next:p,hasMore:g,loader:o.length>0?null:t.jsx(b,{avatar:!0,paragraph:{rows:1},active:!0}),endMessage:t.jsx(w,{plain:!0,children:"It is all, nothing more 🤐"}),scrollableTarget:"scrollableDiv",children:o&&t.jsx(f,{dataSource:o,renderItem:(l,v)=>t.jsx(N,{href:route("chat.user",l.id),children:t.jsx(f.Item,{style:{padding:"10px",gap:"0px"},className:(s==null?void 0:s.id)==l.id?"selected":"",onClick:h,children:t.jsx(f.Item.Meta,{avatar:t.jsx(u,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyeylHD5tbJBruH48HgPdoKpmFsNJfBKXjhifVPO3gA&s"}),title:l==null?void 0:l.name,description:t.jsxs("div",{className:"mt-1 flex items-center gap-x-1.5 text-sm",children:[t.jsx("div",{className:"flex-none rounded-full bg-emerald-500/20 p-1",children:t.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"})}),t.jsx("p",{className:"text-xs leading-5 text-gray-500",children:"Online"})]})})},v)})})})})},C=({selected:s,setMessages:x})=>{const[m,a]=n.useState(""),c=o=>{(o.key==="Enter"||o.which===13)&&(m.trim(),j.post("/send/message",{message:m,receiver_id:s}).then(r=>{x(i=>[...i,r.data.message])}).catch(r=>{var i,d;console.log((d=(i=r==null?void 0:r.response)==null?void 0:i.data)==null?void 0:d.message)}),a(""))};return t.jsx("div",{children:t.jsx(P,{className:"w-full",disabled:!s,placeholder:"Type your message and hit enter....",value:m,onChange:o=>a(o.target.value),onKeyDown:c})})},R=({align:s,message:x,textAlign:m,datetime:a})=>{const c=new Date(a),o=c.getHours(),r=c.getMinutes(),i=o>=12?"PM":"AM",d=o%12||12,g=r<10?"0"+r:r,e=`${d}:${g} ${i}`;return t.jsx("div",{className:`flex ${s}`,children:t.jsxs("div",{className:`${x} ${m}`,children:[x,t.jsx("br",{}),t.jsx("p",{className:"date text-gray-500 text-xs",children:e})]})})},T="",$="mt1";new H(T,{cluster:$,encrypted:!0});const Gt=({auth:s,mustVerifyEmail:x,status:m,user:a,chats:c})=>{var g;const o=e=>{},r=n.useRef(null),[i,d]=n.useState([]);return(g=r.current)==null||g.scrollIntoView({behavior:"smooth"}),n.useEffect(()=>{d(c),window.Echo.private(`chat.${s.user.id}`).listen("MessageSent",e=>{r.current.scrollTop=0,console.log(e.message),d(p=>[...p,e.message])})},[]),n.useEffect(()=>{var e;(e=r.current)==null||e.scrollIntoView({behavior:"smooth"})},[i]),t.jsxs(y,{user:s.user,children:[t.jsx(S,{title:"Messenger"}),t.jsxs("div",{className:"chatContainer",children:[t.jsxs("div",{className:"chatUserList",children:[t.jsx(E,{placeholder:"Search User",allowClear:!0,onChange:o}),t.jsx(U,{user:a})]}),t.jsxs("div",{className:"chatBody",children:[t.jsxs("div",{className:"chatHeader",children:[t.jsx("div",{className:"chat-title",children:a?t.jsxs(t.Fragment,{children:[t.jsx(u,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyeylHD5tbJBruH48HgPdoKpmFsNJfBKXjhifVPO3gA&s"}),a==null?void 0:a.name]}):t.jsxs(t.Fragment,{children:[t.jsx(A,{}),"Messages"]})}),t.jsx(D,{})]}),t.jsxs("div",{className:"messages",children:[a?i==null?void 0:i.map(e=>{var p,h;return t.jsx(R,{align:(e==null?void 0:e.from)==((p=s==null?void 0:s.user)==null?void 0:p.id)?"justify-end":"justify-start",message:e==null?void 0:e.message,textAlign:(e==null?void 0:e.from)==((h=s==null?void 0:s.user)==null?void 0:h.id)?"text-right":"text-left",datetime:e==null?void 0:e.created_at},e==null?void 0:e.id)}):t.jsx("div",{className:"empty",children:t.jsx(I,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:t.jsxs("span",{children:["No user ",t.jsx("a",{href:"#API",children:"selected"})]})})}),t.jsx("div",{ref:r})]}),t.jsx("div",{className:"messageBox",children:t.jsx(C,{setMessages:d,selected:a==null?void 0:a.id})})]})]})]})};export{Gt as default};
//# sourceMappingURL=Messenger-DghKznSL.js.map
