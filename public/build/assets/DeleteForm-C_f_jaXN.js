import{r as s,j as t}from"./react-DGeDUS3L.js";import{D as i}from"./DangerButton-DPaa7DpI.js";import{M as h}from"./Modal-YWbM9aMy.js";import{S as j}from"./SecondaryButton-w8on_r1v.js";import{W as y}from"./@inertiajs-AuzDUVoY.js";import"./@react-three-BFRjeCcN.js";import"./@babel-CiGj-Vf4.js";import"./three-wFZZ4-aV.js";import"./react-use-measure-DO6L4M7M.js";import"./debounce-Bn9A2zky.js";import"./its-fine-fQHrmN5W.js";import"./react-reconciler-4d2z6Qt6.js";import"./react-dom-Bk3SHiAq.js";import"./scheduler-CzFDRTuY.js";import"./maath-CC4KLiXL.js";import"./three-stdlib-CSRvC8dv.js";import"./zustand-CwjNyJVO.js";import"./suspend-react-BKIKQNXN.js";import"./@headlessui-CPygwrpO.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D7I_G_I4.js";import"./qs-B99Nc6xW.js";import"./side-channel-Bz2OXirb.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CJc8fbqy.js";import"./nprogress-DLlf1OgQ.js";import"./lodash.isequal-BLzkQ0eW.js";function mt({className:m="",title:r,desc:p,dataId:a}){const[n,e]=s.useState(!1);s.useRef();const{data:g,setData:D,delete:l,processing:c,reset:d,errors:N}=y({password:""}),x=()=>{e(!0)},u=f=>{f.preventDefault(),l(route("report.destroy",a),{preserveScroll:!0})},o=()=>{e(!1),d()};return t.jsxs("section",{className:`space-y-6 ${m}`,children:[t.jsxs("header",{children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:r}),t.jsx("p",{className:"mt-1 text-sm text-gray-600",children:p})]}),t.jsx(i,{onClick:x,children:r}),t.jsx(h,{show:n,onClose:o,children:t.jsxs("form",{onSubmit:u,className:"p-6",children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your report?"}),t.jsxs("div",{className:"mt-6 flex justify-end",children:[t.jsx(j,{onClick:o,children:"Cancel"}),t.jsx(i,{className:"ms-3",disabled:c,children:"Delete Report"})]})]})})]})}export{mt as default};
//# sourceMappingURL=DeleteForm-C_f_jaXN.js.map
