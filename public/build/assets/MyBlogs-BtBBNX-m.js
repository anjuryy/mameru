import{r as m,j as t}from"./react-DGeDUS3L.js";import{C as a}from"./Card-BScwmHl5.js";import{P as p}from"./Pagination-DhLbfh12.js";import"./TextInput-V3I2nGuQ.js";import{A as l}from"./AuthenticatedLayout-AQrY-AGN.js";import{q as d,W as n,a as c,d as i}from"./@inertiajs-AuzDUVoY.js";import"./@react-three-BFRjeCcN.js";import"./@babel-CiGj-Vf4.js";import"./three-wFZZ4-aV.js";import"./react-use-measure-DO6L4M7M.js";import"./debounce-Bn9A2zky.js";import"./its-fine-fQHrmN5W.js";import"./react-reconciler-4d2z6Qt6.js";import"./react-dom-Bk3SHiAq.js";import"./scheduler-CzFDRTuY.js";import"./maath-CC4KLiXL.js";import"./three-stdlib-CSRvC8dv.js";import"./zustand-CwjNyJVO.js";import"./suspend-react-BKIKQNXN.js";import"./SecondaryButton-w8on_r1v.js";import"./@heroicons-E2fBEICg.js";import"./ApplicationLogo-DP9CNk0r.js";import"./Dropdown-ByRnTpKt.js";import"./@headlessui-CPygwrpO.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D7I_G_I4.js";import"./qs-B99Nc6xW.js";import"./side-channel-Bz2OXirb.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CJc8fbqy.js";import"./nprogress-DLlf1OgQ.js";import"./lodash.isequal-BLzkQ0eW.js";function at({auth:e}){const{blog_list:o}=d().props;console.log(o);const{data:x,setData:g,post:h,processing:u,errors:f,reset:s}=n({name:"",email:"",password:"",password_confirmation:""});return m.useEffect(()=>()=>{s("password","password_confirmation")},[]),t.jsxs(l,{user:e.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Blogs List"}),children:[t.jsx(c,{title:"My Blogs"}),t.jsx("div",{className:"py-6",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsxs("div",{className:" overflow-hidden shadow-sm sm:rounded-lg",children:[t.jsxs("div",{className:"flex justify-between",children:[t.jsx(i,{href:route("blog.index"),className:"bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center",children:"Blogs"}),t.jsx(i,{href:route("blog.create"),className:"bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:t.jsx("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"})})})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2",children:o.data.map(r=>t.jsx(a,{title:r.title,content:r.blog,imageUrl:r.image,id:r.encrypted_id,buttonValue:"Edit"},r.id))}),t.jsx(p,{getData:o.links,getLength:o})]})})})]})}export{at as default};
//# sourceMappingURL=MyBlogs-BtBBNX-m.js.map
