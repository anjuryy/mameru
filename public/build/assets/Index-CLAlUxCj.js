import{r as a,j as e}from"./react-DVM01ERP.js";import{A as o}from"./Alert-C4cu6gWN.js";import p from"./Filters-CLd1mQ0j.js";import{P as h}from"./Pagination-Cy_m53D7.js";import{A as g}from"./AuthenticatedLayout-BugnfXGD.js";import{q as f,a as j,d as r}from"./@inertiajs-B0U8ze2m.js";import{P as u}from"./@heroicons-Cw0Dg64V.js";import"./@react-three-CUWIX_2K.js";import"./@babel-CiGj-Vf4.js";import"./three-CT44rtPH.js";import"./react-use-measure-Ct9Or_iS.js";import"./debounce-ByU2xFyg.js";import"./its-fine-BvlhO9uC.js";import"./react-reconciler-C8efrrNq.js";import"./react-dom-CfYs3vay.js";import"./scheduler-CzFDRTuY.js";import"./maath-DI14jEVk.js";import"./three-stdlib-CfCDiu8i.js";import"./zustand-EYJ_xzba.js";import"./suspend-react-BKIKQNXN.js";import"./TextInput-DOS66sku.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D2JkYKzz.js";import"./qs-Dg42YJCm.js";import"./side-channel-D9NP7caB.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C2f3yjQm.js";import"./nprogress-bhwNocYg.js";import"./lodash.isequal-DfSlhtKm.js";import"./ApplicationLogo-zuDSqy5b.js";import"./Dropdown-BsOCxxUS.js";import"./@headlessui-C8DaYiGQ.js";function ne({auth:l,flash:d}){const{todolist:t}=f().props,[N,m]=a.useState([]),[i,n]=a.useState([]);return a.useEffect(()=>{(async()=>{const c=await(await fetch("https://anjurypatawaran.online/api/task/searchBar")).json();m(await c.results)})()},[]),e.jsxs(g,{user:l.user,children:[e.jsx(o,{flash:d}),e.jsx(j,{title:"Task"}),e.jsx("div",{className:"p-6",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[t.data.length==0?e.jsx("div",{}):e.jsx("div",{children:e.jsx(p,{allUsersData:t.data,setFilteredData:n})}),e.jsx(r,{href:route("todo.create"),className:"bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-sm focus:outline-none focus:shadow-outline flex items-center",children:e.jsx(u,{className:"w-5"})})]}),t.data.length==0?e.jsx("div",{className:"text-gray-300 h-96 flex items-center justify-center w-full text-3xl",children:"No Record Found"}):e.jsxs("div",{children:[e.jsx("ul",{role:"list",className:"divide-y divide-gray-100",children:i.length!==0&&e.jsx("div",{className:"",children:i.slice(0,15).map((s,x)=>e.jsxs("li",{className:"flex justify-between gap-x-6 py-5",children:[e.jsx("div",{className:"flex min-w-0 gap-x-4",children:e.jsxs("div",{className:"min-w-0 flex-auto",children:[e.jsxs("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:[" ",e.jsxs(r,{href:route("todo.edit",s.encrypted_id),children:[" ",s.name," "]},s.id)," "]}),e.jsx("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:s.task_desc})]})}),e.jsx("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:s.completed?e.jsxs("div",{className:"mt-1 flex items-center gap-x-1.5",children:[e.jsx("div",{className:"flex-none rounded-full bg-gray-500/20 p-1",children:e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-gray-500"})}),e.jsxs("p",{className:"text-xs leading-5 text-gray-500",children:["Dated: ",s.deadline]})]}):e.jsxs("div",{className:"mt-1 flex items-center gap-x-1.5",children:[e.jsx("div",{className:"flex-none rounded-full bg-emerald-500/20 p-1",children:e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"})}),e.jsxs("p",{className:"text-xs leading-5 text-gray-500",children:["Dated: ",s.deadline]})]})})]},s.name))})}),i.length===0?e.jsx("ul",{role:"list",className:"divide-y divide-gray-100",children:t.data.map(s=>e.jsxs("li",{className:"flex justify-between gap-x-6 py-5",children:[e.jsx("div",{className:"flex min-w-0 gap-x-4",children:e.jsxs("div",{className:"min-w-0 flex-auto",children:[e.jsxs("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:[" ",e.jsxs(r,{href:route("todo.edit",s.encrypted_id),children:[" ",s.name," "]},s.id)," "]}),e.jsx("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:s.task_desc})]})}),e.jsx("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:s.completed?e.jsxs("div",{className:"mt-1 flex items-center gap-x-1.5",children:[e.jsx("div",{className:"flex-none rounded-full bg-gray-500/20 p-1",children:e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-gray-500"})}),e.jsxs("p",{className:"text-xs leading-5 text-gray-500",children:["Dated: ",s.deadline]})]}):e.jsxs("div",{className:"mt-1 flex items-center gap-x-1.5 min-w-0",children:[e.jsx("div",{className:"flex-none rounded-full bg-emerald-500/20 p-1",children:e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"})}),e.jsx("div",{className:"min-w-0 flex-auto"}),e.jsxs("p",{className:"text-xs leading-5 text-gray-500",children:["Dated: ",s.deadline]})]})})]},s.name))}):null,e.jsx(h,{getData:t.links,getLength:t})]})]})})})]})}export{ne as default};
//# sourceMappingURL=Index-CLAlUxCj.js.map
