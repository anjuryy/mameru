import{r as s,j as t}from"./react-Dtk7mQTN.js";import{D as i,M as h}from"./Modal-CcE3QLNu.js";import{S as j}from"./SecondaryButton-OkzlFpo1.js";import"./TextInput-B0DTd-WG.js";import{W as y}from"./@inertiajs-CX0dcm31.js";import"./@react-three-DUMlRncB.js";import"./@babel-CiGj-Vf4.js";import"./three-Cvr0WNh9.js";import"./react-use-measure-DBJgQo-l.js";import"./debounce-CP8e5ohi.js";import"./its-fine-cf8y2AgC.js";import"./react-reconciler-Dp89xekU.js";import"./react-dom-B94yBsr_.js";import"./scheduler-CzFDRTuY.js";import"./maath-kMRfGsq0.js";import"./@react-spring-_370sSl3.js";import"./@use-gesture-Q2e-SvB-.js";import"./three-stdlib-BLCfz7WA.js";import"./zustand-BJ51jWr1.js";import"./suspend-react-BKIKQNXN.js";import"./@headlessui-CjOZzf_3.js";import"./axios-Di5RpEPX.js";import"./deepmerge-nBgpbf7F.js";import"./qs-C0BR4mr2.js";import"./side-channel-D7s0t_Jh.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C9PhCdyB.js";import"./nprogress-Cs2HB-U4.js";import"./lodash.isequal-ThaQjV87.js";function at({className:m="",title:r,desc:p,dataId:a}){const[n,e]=s.useState(!1);s.useRef();const{data:g,setData:D,delete:l,processing:c,reset:d,errors:N}=y({password:""}),x=()=>{e(!0)},u=f=>{f.preventDefault(),l(route("todo.destroy",a),{preserveScroll:!0})},o=()=>{e(!1),d()};return t.jsxs("section",{className:`space-y-6 ${m}`,children:[t.jsxs("header",{children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:r}),t.jsx("p",{className:"mt-1 text-sm text-gray-600",children:p})]}),t.jsx(i,{onClick:x,children:r}),t.jsx(h,{show:n,onClose:o,children:t.jsxs("form",{onSubmit:u,className:"p-6",children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your task?"}),t.jsxs("div",{className:"mt-6 flex justify-end",children:[t.jsx(j,{onClick:o,children:"Cancel"}),t.jsx(i,{className:"ms-3",disabled:c,children:"Delete Task"})]})]})})]})}export{at as default};
