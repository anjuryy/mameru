import{r,j as t}from"./react-DVM01ERP.js";import{A as d}from"./Alert-C4cu6gWN.js";import c from"./Filters-CLd1mQ0j.js";import{P as x}from"./Pagination-Cy_m53D7.js";import{A as h}from"./AuthenticatedLayout-BugnfXGD.js";import{q as j,a as g}from"./@inertiajs-B0U8ze2m.js";import"./@react-three-CUWIX_2K.js";import"./@babel-CiGj-Vf4.js";import"./three-CT44rtPH.js";import"./react-use-measure-Ct9Or_iS.js";import"./debounce-ByU2xFyg.js";import"./its-fine-BvlhO9uC.js";import"./react-reconciler-C8efrrNq.js";import"./react-dom-CfYs3vay.js";import"./scheduler-CzFDRTuY.js";import"./maath-DI14jEVk.js";import"./three-stdlib-CfCDiu8i.js";import"./zustand-EYJ_xzba.js";import"./suspend-react-BKIKQNXN.js";import"./@heroicons-Cw0Dg64V.js";import"./TextInput-DOS66sku.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D2JkYKzz.js";import"./qs-Dg42YJCm.js";import"./side-channel-D9NP7caB.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C2f3yjQm.js";import"./nprogress-bhwNocYg.js";import"./lodash.isequal-DfSlhtKm.js";import"./ApplicationLogo-zuDSqy5b.js";import"./Dropdown-BsOCxxUS.js";import"./@headlessui-C8DaYiGQ.js";function mt({auth:a,flash:l}){const{user_lists:s}=j().props,[u,m]=r.useState([]),[i,o]=r.useState([]);return r.useEffect(()=>{(async()=>{const p=await(await fetch("http://127.0.0.1:8000/api/user/searchBar")).json();m(await p.results)})()},[]),t.jsxs(h,{user:a.user,children:[t.jsx(d,{flash:l}),t.jsx(g,{title:"User"}),t.jsx("div",{className:"p-6",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsxs("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:[t.jsx("div",{className:"flex justify-between items-center",children:s.data.length==0?t.jsx("div",{}):t.jsx("div",{children:t.jsx(c,{allUsersData:s.data,setFilteredData:o})})}),s.data.length==0?t.jsx("div",{className:"text-gray-300 h-96 flex items-center justify-center w-full text-3xl",children:"No Record Found"}):t.jsxs("div",{children:[t.jsx("ul",{role:"list",className:"divide-y divide-gray-100",children:i.length!==0&&t.jsx("div",{className:"",children:i.slice(0,15).map((e,n)=>t.jsx("li",{className:"flex justify-between gap-x-6 py-5",children:t.jsx("div",{className:"flex min-w-0 gap-x-4",children:t.jsxs("div",{className:"min-w-0 flex-auto",children:[t.jsxs("p",{className:"text-sm font-semibold leading-6 text-gray-900 capitalize",children:[" ",e.name," "]}),t.jsx("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:e.email})]})})},e.name))})}),i.length===0?t.jsx("ul",{role:"list",className:"divide-y divide-gray-100",children:s.data.map(e=>t.jsx("li",{className:"flex justify-between gap-x-6 py-5",children:t.jsx("div",{className:"flex min-w-0 gap-x-4",children:t.jsxs("div",{className:"min-w-0 flex-auto",children:[t.jsxs("p",{className:"text-sm font-semibold leading-6 text-gray-900 capitalize",children:[" ",e.name," "]}),t.jsx("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:e.email})]})})},e.name))}):null,t.jsx(x,{getData:s.links,getLength:s})]})]})})})]})}export{mt as default};
//# sourceMappingURL=Index-COeaj6bU.js.map
