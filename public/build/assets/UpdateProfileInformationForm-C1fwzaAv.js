import{j as e}from"./react-Dtk7mQTN.js";import{I as a}from"./InputError-ha8dtlQb.js";import{I as s}from"./InputLabel-VOKMiLOZ.js";import{P as h}from"./PrimaryButton-i90cOBXK.js";import{T as n}from"./TextInput-B0DTd-WG.js";import{q as j,W as v,d as g}from"./@inertiajs-CX0dcm31.js";import{q as y}from"./@headlessui-CjOZzf_3.js";import"./@react-three-DUMlRncB.js";import"./@babel-CiGj-Vf4.js";import"./three-Cvr0WNh9.js";import"./react-use-measure-DBJgQo-l.js";import"./debounce-CP8e5ohi.js";import"./its-fine-cf8y2AgC.js";import"./react-reconciler-Dp89xekU.js";import"./react-dom-B94yBsr_.js";import"./scheduler-CzFDRTuY.js";import"./maath-kMRfGsq0.js";import"./@react-spring-_370sSl3.js";import"./@use-gesture-Q2e-SvB-.js";import"./three-stdlib-BLCfz7WA.js";import"./zustand-BJ51jWr1.js";import"./suspend-react-BKIKQNXN.js";import"./axios-Di5RpEPX.js";import"./deepmerge-nBgpbf7F.js";import"./qs-C0BR4mr2.js";import"./side-channel-D7s0t_Jh.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C9PhCdyB.js";import"./nprogress-Cs2HB-U4.js";import"./lodash.isequal-ThaQjV87.js";function ne({mustVerifyEmail:l,status:p,className:c=""}){const r=j().props.auth.user,{data:i,setData:m,patch:d,errors:o,processing:u,recentlySuccessful:x}=v({name:r.name,email:r.email}),f=t=>{t.preventDefault(),d(route("profile.update"))};return e.jsxs("section",{className:c,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:f,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(s,{htmlFor:"name",value:"Name"}),e.jsx(n,{id:"name",className:"mt-1 block w-full",value:i.name,onChange:t=>m("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(a,{className:"mt-2",message:o.name})]}),e.jsxs("div",{children:[e.jsx(s,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",className:"mt-1 block w-full",value:i.email,onChange:t=>m("email",t.target.value),required:!0,autoComplete:"username"}),e.jsx(a,{className:"mt-2",message:o.email})]}),l&&r.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(g,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),p==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(h,{disabled:u,children:"Save"}),e.jsx(y,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{ne as default};
//# sourceMappingURL=UpdateProfileInformationForm-C1fwzaAv.js.map
