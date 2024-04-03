import{j as e}from"./react-Dtk7mQTN.js";import{I as m}from"./InputError-ha8dtlQb.js";import{I as l}from"./InputLabel-VOKMiLOZ.js";import{P as g}from"./PrimaryButton-i90cOBXK.js";import{S as c}from"./SecondaryButton-OkzlFpo1.js";import{T as x}from"./TextInput-B0DTd-WG.js";import{A as u}from"./AuthenticatedLayout-bya_W75r.js";import{q as f,W as b,a as h,d as j}from"./@inertiajs-CX0dcm31.js";import v from"./DeleteForm-BUxWopUn.js";import"./@react-three-DUMlRncB.js";import"./@babel-CiGj-Vf4.js";import"./three-Cvr0WNh9.js";import"./react-use-measure-DBJgQo-l.js";import"./debounce-CP8e5ohi.js";import"./its-fine-cf8y2AgC.js";import"./react-reconciler-Dp89xekU.js";import"./react-dom-B94yBsr_.js";import"./scheduler-CzFDRTuY.js";import"./maath-kMRfGsq0.js";import"./@react-spring-_370sSl3.js";import"./@use-gesture-Q2e-SvB-.js";import"./three-stdlib-BLCfz7WA.js";import"./zustand-BJ51jWr1.js";import"./suspend-react-BKIKQNXN.js";import"./ApplicationLogo-CcJLHfLW.js";import"./Dropdown-wqX8VL9e.js";import"./@headlessui-CjOZzf_3.js";import"./axios-Di5RpEPX.js";import"./deepmerge-nBgpbf7F.js";import"./qs-C0BR4mr2.js";import"./side-channel-D7s0t_Jh.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C9PhCdyB.js";import"./nprogress-Cs2HB-U4.js";import"./lodash.isequal-ThaQjV87.js";import"./Modal-CcE3QLNu.js";function ue({auth:d}){const r=f().props,{data:i,setData:o,post:p,processing:a,errors:s,reset:y}=b({id:r.blog_info.encrypted_id,title:r.blog_info.title,blog:r.blog_info.blog,image:"",categorize:""}),n=t=>{t.preventDefault(),console.log(i.image.name),p(route("blog.update",r.blog_info.encrypted_id))};return e.jsxs(u,{user:d.user,children:[e.jsx(h,{title:"Blog - Update"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:e.jsxs("form",{onSubmit:n,encType:"multipart/form-data",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"title",value:"Title"}),e.jsx(x,{id:"title",name:"title",value:i.title,className:"mt-1 block w-full",autoComplete:"title",isFocused:!0,onChange:t=>o("title",t.target.value)}),e.jsx(m,{message:s.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"blog",value:"Blog"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"blog",name:"blog",rows:5,value:i.blog,onChange:t=>o("blog",t.target.value),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:!0})}),e.jsx("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about your blog."}),e.jsx(m,{message:s.blog,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("input",{type:"file",className:"border rounded-md file:ox-4 file:py-2 border-gray-200 dark:border-gray-700 file:text-gray-700 file: dark:text-gray-400 file:border-0 file:bg-gray-100 file:dark:bg-gray-800 file:font-medium file:hover:bg-gray-200 file:dark:hover:bg-gray-700 file:hover:cursor-pointer file:mr-4",label:"File",name:"image",onChange:t=>o("image",t.target.files[0])}),e.jsx(m,{message:s.image,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(c,{className:"ms-4",disabled:a,children:e.jsx(j,{href:route("blog.index"),children:"Back"})}),e.jsx(g,{className:"ms-4",disabled:a,children:"Submit"})]})]})})})}),e.jsx("div",{className:"pb-2",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:e.jsx(v,{title:"Delete Blog",desc:"Blog will be deleted.",dataId:i.id})})})})]})}export{ue as default};
