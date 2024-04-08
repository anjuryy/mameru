import{j as e}from"./react-DGeDUS3L.js";import{I as a}from"./InputError-BDHAfpwJ.js";import{I as m}from"./InputLabel-Bt9XdrJX.js";import{P as u}from"./PrimaryButton-D87fGWlw.js";import{S as x}from"./SecondaryButton-w8on_r1v.js";import{T as o}from"./TextInput-V3I2nGuQ.js";import{A as h}from"./AuthenticatedLayout-DpJbdTi3.js";import{q as j,W as g,a as v,d as y}from"./@inertiajs-AuzDUVoY.js";import"./@react-three-BFRjeCcN.js";import"./@babel-CiGj-Vf4.js";import"./three-wFZZ4-aV.js";import"./react-use-measure-DO6L4M7M.js";import"./debounce-Bn9A2zky.js";import"./its-fine-fQHrmN5W.js";import"./react-reconciler-4d2z6Qt6.js";import"./react-dom-Bk3SHiAq.js";import"./scheduler-CzFDRTuY.js";import"./maath-CC4KLiXL.js";import"./three-stdlib-CSRvC8dv.js";import"./zustand-CwjNyJVO.js";import"./suspend-react-BKIKQNXN.js";import"./ApplicationLogo-hby-cl-L.js";import"./Dropdown-ByRnTpKt.js";import"./@headlessui-CPygwrpO.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D7I_G_I4.js";import"./qs-B99Nc6xW.js";import"./side-channel-Bz2OXirb.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CJc8fbqy.js";import"./nprogress-DLlf1OgQ.js";import"./lodash.isequal-BLzkQ0eW.js";function ce({auth:l}){const{sectionItems:c}=j().props,{data:r,setData:s,post:p,processing:n,errors:i,reset:f}=g({name:"",description:"",quantity:"",price:"",category:"",urlLink:""}),d=t=>{t.preventDefault(),p(route("myshop.store"))};return e.jsxs(h,{user:l.user,children:[e.jsx(v,{title:"Add Product"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:e.jsxs("form",{onSubmit:d,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mt-2",children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",onChange:t=>s("name",t.target.value),required:!0}),e.jsx(a,{message:i.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(m,{htmlFor:"shortDescription",value:"Short Description"}),e.jsx(o,{id:"shortDescription",name:"description",value:r.description,className:"mt-1 block w-full",autoComplete:"description",onChange:t=>s("description",t.target.value),required:!0}),e.jsx(a,{message:i.description,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"category",value:"Sections"}),e.jsxs("select",{id:"category",name:"category",value:r.category,type:"text",className:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",autoComplete:"category",onChange:t=>s("category",t.target.value),required:!0,children:[e.jsx("option",{children:" Select a item section ..."}),c.map(t=>e.jsxs("option",{value:t.id,children:[t.under_name,": ",t.name," "]},t.id))]}),e.jsx(a,{message:i.category,className:"mt-2"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"mt-2",children:[e.jsx(m,{htmlFor:"quantity",value:"Quantity"}),e.jsx(o,{id:"quantity",name:"quantity",type:"number",max:"999",value:r.quantity,className:"mt-1 block w-full",autoComplete:"quantity",onChange:t=>s("quantity",t.target.value),required:!0}),e.jsx(a,{message:i.quantity,className:"mt-2"})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(m,{htmlFor:"price",value:"Price"}),e.jsx(o,{id:"price",name:"price",type:"number",value:r.price,className:"mt-1 block w-full",autoComplete:"price",onChange:t=>s("price",t.target.value),required:!0}),e.jsx(a,{message:i.price,className:"mt-2"})]})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(y,{href:route("management.index"),children:e.jsx(x,{className:"ms-4",disabled:n,children:"Back"})}),e.jsx(u,{className:"ms-4",disabled:n,children:"Submit"})]})]})})})})]})}export{ce as default};
//# sourceMappingURL=Create-B61nIprp.js.map
