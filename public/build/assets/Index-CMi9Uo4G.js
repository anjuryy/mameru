import{j as t,r as c}from"./react-Dtk7mQTN.js";import{A as u}from"./Alert-uWPi189m.js";import{d as p,q as a,a as x}from"./@inertiajs-CX0dcm31.js";import{a as g}from"./@heroicons-DnG4G_nw.js";import{A as h}from"./AuthenticatedLayout-bya_W75r.js";import"./@react-three-DUMlRncB.js";import"./@babel-CiGj-Vf4.js";import"./three-Cvr0WNh9.js";import"./react-use-measure-DBJgQo-l.js";import"./debounce-CP8e5ohi.js";import"./its-fine-cf8y2AgC.js";import"./react-reconciler-Dp89xekU.js";import"./react-dom-B94yBsr_.js";import"./scheduler-CzFDRTuY.js";import"./maath-kMRfGsq0.js";import"./@react-spring-_370sSl3.js";import"./@use-gesture-Q2e-SvB-.js";import"./three-stdlib-BLCfz7WA.js";import"./zustand-BJ51jWr1.js";import"./suspend-react-BKIKQNXN.js";import"./axios-Di5RpEPX.js";import"./deepmerge-nBgpbf7F.js";import"./qs-C0BR4mr2.js";import"./side-channel-D7s0t_Jh.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C9PhCdyB.js";import"./nprogress-Cs2HB-U4.js";import"./lodash.isequal-ThaQjV87.js";import"./ApplicationLogo-CcJLHfLW.js";import"./Dropdown-wqX8VL9e.js";import"./@headlessui-CjOZzf_3.js";const j=({data:r,id:s,urlForEdit:m})=>{const[e,i]=c.useState(!1);var o=r.under_name?r.under_name+": ":"";const d=()=>{i(!0)},l=()=>{i(!1)};return t.jsx(p,{href:route(m,s),children:t.jsxs("div",{className:"bg-white p-2 text-center border rounded-lg border-gray-800",onMouseEnter:d,onMouseLeave:l,style:{transition:"background-color 0.3s ease",backgroundColor:e?"rgb(31 41 55)":"white",color:e?"white":"rgb(31 41 55)"},children:[e?"Edit":o+r.name," "]},r.id)})},f=({gridCount:r,title:s,urlForCreate:m,postData:e,urlForEdit:i})=>t.jsxs("div",{children:[t.jsxs("div",{className:"text-lg p-2 flex items-center",children:[s,t.jsx(p,{href:route(m),children:t.jsx(g,{className:"w-5 ml-1"})})]}),t.jsx("div",{className:"grid grid-cols-6 gap-3",children:e.map(o=>t.jsx(j,{data:o,id:o.id,urlForEdit:i},o.id))})]}),n=f;function at({auth:r,flash:s}){const{category:m}=a().props,{featured:e}=a().props,{section:i}=a().props,{sectionItem:o}=a().props;return t.jsxs(h,{user:r.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Shop Management"}),children:[t.jsx(x,{title:"Management"}),t.jsx(u,{flash:s}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsxs("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg p-6",children:[t.jsx(n,{gridCount:3,title:"Categories",urlForCreate:"category.create",postData:m,urlForEdit:"category.edit"}),t.jsx(n,{gridCount:3,title:"Features",urlForCreate:"featured.create",postData:e,urlForEdit:"featured.edit"}),t.jsx(n,{gridCount:3,title:"Sections",urlForCreate:"section.create",postData:i,urlForEdit:"section.edit"}),t.jsx(n,{gridCount:3,title:"Items",urlForCreate:"item.create",postData:o,urlForEdit:"item.edit"})]})})})]})}export{at as default};
//# sourceMappingURL=Index-CMi9Uo4G.js.map
