import{j as e}from"./react-DGeDUS3L.js";import{I as a}from"./InputError-BDHAfpwJ.js";import{I as s}from"./InputLabel-Bt9XdrJX.js";import{P as h}from"./PrimaryButton-D87fGWlw.js";import{S as j}from"./SecondaryButton-w8on_r1v.js";import{T as n}from"./TextInput-V3I2nGuQ.js";import{A as f}from"./AuthenticatedLayout-DpJbdTi3.js";import{q as d,W as v,a as y,d as N}from"./@inertiajs-AuzDUVoY.js";import"./@react-three-BFRjeCcN.js";import"./@babel-CiGj-Vf4.js";import"./three-wFZZ4-aV.js";import"./react-use-measure-DO6L4M7M.js";import"./debounce-Bn9A2zky.js";import"./its-fine-fQHrmN5W.js";import"./react-reconciler-4d2z6Qt6.js";import"./react-dom-Bk3SHiAq.js";import"./scheduler-CzFDRTuY.js";import"./maath-CC4KLiXL.js";import"./three-stdlib-CSRvC8dv.js";import"./zustand-CwjNyJVO.js";import"./suspend-react-BKIKQNXN.js";import"./ApplicationLogo-hby-cl-L.js";import"./Dropdown-ByRnTpKt.js";import"./@headlessui-CPygwrpO.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D7I_G_I4.js";import"./qs-B99Nc6xW.js";import"./side-channel-Bz2OXirb.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CJc8fbqy.js";import"./nprogress-DLlf1OgQ.js";import"./lodash.isequal-BLzkQ0eW.js";function ce({auth:p}){const{featured:t}=d().props,{category:c}=d().props,{data:o,setData:i,put:u,processing:l,errors:m,reset:b}=v({category_id:t[0].category_id,name:t[0].name,url:t[0].url}),x=r=>{r.preventDefault(),u(route("featured.update",t[0].id))},g=()=>{window.history.back()};return e.jsxs(f,{user:p.user,children:[e.jsx(y,{title:"Featured - Update"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:e.jsxs("form",{onSubmit:x,encType:"multipart/form-data",children:[e.jsxs("div",{children:[e.jsx(s,{htmlFor:"category_id",value:"Categories"}),e.jsxs("select",{id:"category_id",name:"category_id",value:o.category_id,className:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",autoComplete:"category_id",onChange:r=>i("category_id",r.target.value),required:!0,children:[e.jsx("option",{children:" Select a category ..."}),c.map(r=>e.jsxs("option",{value:r.id,children:[" ",r.name," "]},r.id))]}),e.jsx(a,{message:m.category_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(s,{htmlFor:"name",value:"Name"}),e.jsx(n,{id:"name",name:"name",value:o.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:r=>i("name",r.target.value),required:!0}),e.jsx(a,{message:m.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(s,{htmlFor:"urlLink",value:"URL"}),e.jsx(n,{id:"urlLink",name:"url",value:o.urlLink,className:"mt-1 block w-full",autoComplete:"urlLink",isFocused:!0,onChange:r=>i("urlLink",r.target.value)}),e.jsx(a,{message:m.urlLink,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(N,{onClick:g,children:e.jsx(j,{className:"ms-4",disabled:l,children:"Back"})}),e.jsx(h,{className:"ms-4",disabled:l,children:"Submit"})]})]})})})})]})}export{ce as default};
//# sourceMappingURL=Edit-R1_18rqu.js.map
