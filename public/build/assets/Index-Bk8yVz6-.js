import{r as a,j as t}from"./react-Dtk7mQTN.js";import{A as p}from"./Alert-uWPi189m.js";import{C as l}from"./Card-F8F6EQfS.js";import{P as d}from"./Pagination-DQOHFntp.js";import"./TextInput-B0DTd-WG.js";import{A as n}from"./AuthenticatedLayout-bya_W75r.js";import{q as c,W as x,a as g,d as i}from"./@inertiajs-CX0dcm31.js";import{P as u}from"./@heroicons-DnG4G_nw.js";import"./@react-three-DUMlRncB.js";import"./@babel-CiGj-Vf4.js";import"./three-Cvr0WNh9.js";import"./react-use-measure-DBJgQo-l.js";import"./debounce-CP8e5ohi.js";import"./its-fine-cf8y2AgC.js";import"./react-reconciler-Dp89xekU.js";import"./react-dom-B94yBsr_.js";import"./scheduler-CzFDRTuY.js";import"./maath-kMRfGsq0.js";import"./@react-spring-_370sSl3.js";import"./@use-gesture-Q2e-SvB-.js";import"./three-stdlib-BLCfz7WA.js";import"./zustand-BJ51jWr1.js";import"./suspend-react-BKIKQNXN.js";import"./SecondaryButton-OkzlFpo1.js";import"./ApplicationLogo-CcJLHfLW.js";import"./Dropdown-wqX8VL9e.js";import"./@headlessui-CjOZzf_3.js";import"./axios-Di5RpEPX.js";import"./deepmerge-nBgpbf7F.js";import"./qs-C0BR4mr2.js";import"./side-channel-D7s0t_Jh.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C9PhCdyB.js";import"./nprogress-Cs2HB-U4.js";import"./lodash.isequal-ThaQjV87.js";function xt({auth:e,flash:s}){const{blog_list:r}=c().props,{data:f,setData:h,post:j,processing:w,errors:b,reset:m}=x({name:"",email:"",password:"",password_confirmation:""});return a.useEffect(()=>()=>{m("password","password_confirmation")},[]),t.jsxs(n,{user:e.user,children:[t.jsx(p,{flash:s}),t.jsx(g,{title:"Blog"}),t.jsx("div",{className:"p-6",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsxs("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:[t.jsxs("div",{className:"flex justify-between",children:[r.data.length==0?t.jsx("div",{}):t.jsx(i,{href:route("blog.myblog"),className:"bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center",children:"My Blog"}),t.jsx(i,{href:route("blog.create"),className:"bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-sm focus:outline-none focus:shadow-outline flex items-center",children:t.jsx(u,{className:"w-5"})})]}),r.data.length==0?t.jsx("div",{className:"text-gray-300 h-96 flex items-center justify-center w-full text-3xl",children:"No Record Found"}):t.jsxs("div",{children:[t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mb-2",children:r.data.map(o=>t.jsx(l,{title:o.title,content:o.blog,imageUrl:o.image,id:o.encrypted_id,buttonValue:"View"},o.id))}),t.jsx(d,{getData:r.links,getLength:r})]})]})})})]})}export{xt as default};
