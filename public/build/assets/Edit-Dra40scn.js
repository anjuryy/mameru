import{j as e}from"./react-DGeDUS3L.js";import{I as m}from"./InputError-BDHAfpwJ.js";import{I as l}from"./InputLabel-Bt9XdrJX.js";import{P as g}from"./PrimaryButton-D87fGWlw.js";import{S as c}from"./SecondaryButton-w8on_r1v.js";import{T as x}from"./TextInput-V3I2nGuQ.js";import{A as u}from"./AuthenticatedLayout-Cr2TctUa.js";import{q as f,W as b,a as h,d as j}from"./@inertiajs-AuzDUVoY.js";import v from"./DeleteForm-CN8mUd3Y.js";import"./@react-three-BFRjeCcN.js";import"./@babel-CiGj-Vf4.js";import"./three-wFZZ4-aV.js";import"./react-use-measure-DO6L4M7M.js";import"./debounce-Bn9A2zky.js";import"./its-fine-fQHrmN5W.js";import"./react-reconciler-4d2z6Qt6.js";import"./react-dom-Bk3SHiAq.js";import"./scheduler-CzFDRTuY.js";import"./maath-CC4KLiXL.js";import"./three-stdlib-CSRvC8dv.js";import"./zustand-CwjNyJVO.js";import"./suspend-react-BKIKQNXN.js";import"./ApplicationLogo-CjoUvzaF.js";import"./Dropdown-ByRnTpKt.js";import"./@headlessui-CPygwrpO.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D7I_G_I4.js";import"./qs-B99Nc6xW.js";import"./side-channel-Bz2OXirb.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CJc8fbqy.js";import"./nprogress-DLlf1OgQ.js";import"./lodash.isequal-BLzkQ0eW.js";import"./DangerButton-DPaa7DpI.js";import"./Modal-YWbM9aMy.js";function xe({auth:d}){const r=f().props,{data:i,setData:o,post:p,processing:a,errors:s,reset:y}=b({id:r.blog_info.encrypted_id,title:r.blog_info.title,blog:r.blog_info.blog,image:"",categorize:""}),n=t=>{t.preventDefault(),p(route("blog.update",r.blog_info.encrypted_id))};return e.jsxs(u,{user:d.user,children:[e.jsx(h,{title:"Blog - Update"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:e.jsxs("form",{onSubmit:n,encType:"multipart/form-data",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"title",value:"Title"}),e.jsx(x,{id:"title",name:"title",value:i.title,className:"mt-1 block w-full",autoComplete:"title",isFocused:!0,onChange:t=>o("title",t.target.value)}),e.jsx(m,{message:s.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"blog",value:"Blog"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"blog",name:"blog",rows:5,value:i.blog,onChange:t=>o("blog",t.target.value),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:!0})}),e.jsx("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about your blog."}),e.jsx(m,{message:s.blog,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("input",{type:"file",className:"border rounded-md file:ox-4 file:py-2 border-gray-200 dark:border-gray-700 file:text-gray-700 file: dark:text-gray-400 file:border-0 file:bg-gray-100 file:dark:bg-gray-800 file:font-medium file:hover:bg-gray-200 file:dark:hover:bg-gray-700 file:hover:cursor-pointer file:mr-4",label:"File",name:"image",onChange:t=>o("image",t.target.files[0])}),e.jsx(m,{message:s.image,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(c,{className:"ms-4",disabled:a,children:e.jsx(j,{href:route("blog.index"),children:"Back"})}),e.jsx(g,{className:"ms-4",disabled:a,children:"Submit"})]})]})})})}),e.jsx("div",{className:"pb-2",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:e.jsx(v,{title:"Delete Blog",desc:"Blog will be deleted.",dataId:i.id})})})})]})}export{xe as default};
//# sourceMappingURL=Edit-Dra40scn.js.map
