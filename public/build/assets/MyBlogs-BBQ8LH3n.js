import{r as m,j as t}from"./react-BQWWVmFX.js";import{C as a}from"./Card-DdALbhfC.js";import{P as p}from"./Pagination-CsBVwxPp.js";import"./TextInput-Bx7mnX4H.js";import{A as l}from"./AuthenticatedLayout-DAW9oBGY.js";import{q as d,W as n,a as c,d as i}from"./@inertiajs-DgTH4HPv.js";import"./@react-three-Lu4PhzKs.js";import"./@babel-CiGj-Vf4.js";import"./three-DPTIurfh.js";import"./react-use-measure-CItih8FL.js";import"./debounce-SbLX0B7I.js";import"./its-fine-Cj9KCxhE.js";import"./react-reconciler-CTGvMkf5.js";import"./react-dom-BYk3QVVJ.js";import"./scheduler-CzFDRTuY.js";import"./maath-D_42bLYV.js";import"./three-stdlib-CNW_F6FS.js";import"./zustand-ZOt2ZkLF.js";import"./suspend-react-BKIKQNXN.js";import"./SecondaryButton-au45DiIu.js";import"./@heroicons-DDVRNQfr.js";import"./ApplicationLogo-D7Ae66s5.js";import"./Dropdown-9Ty2lfCN.js";import"./@headlessui-CStl0mCv.js";import"./axios-Di5RpEPX.js";import"./deepmerge-DWXj7tTm.js";import"./qs-Buzh4mrw.js";import"./side-channel-Dxn6EU3U.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-DWoJJ4dO.js";import"./nprogress-BPhEN2Vg.js";import"./lodash.isequal-BYoXz8NH.js";function at({auth:e}){const{blog_list:o}=d().props;console.log(o);const{data:x,setData:g,post:h,processing:u,errors:f,reset:s}=n({name:"",email:"",password:"",password_confirmation:""});return m.useEffect(()=>()=>{s("password","password_confirmation")},[]),t.jsxs(l,{user:e.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Blogs List"}),children:[t.jsx(c,{title:"My Blogs"}),t.jsx("div",{className:"py-6",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsxs("div",{className:" overflow-hidden shadow-sm sm:rounded-lg",children:[t.jsxs("div",{className:"flex justify-between",children:[t.jsx(i,{href:route("blog.index"),className:"bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center",children:"Blogs"}),t.jsx(i,{href:route("blog.create"),className:"bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:t.jsx("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"})})})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2",children:o.data.map(r=>t.jsx(a,{title:r.title,content:r.blog,imageUrl:r.image,id:r.encrypted_id,buttonValue:"Edit"},r.id))}),t.jsx(p,{getData:o.links,getLength:o})]})})})]})}export{at as default};
//# sourceMappingURL=MyBlogs-BBQ8LH3n.js.map
