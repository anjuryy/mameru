import{j as e}from"./react-BQWWVmFX.js";import{I as o}from"./InputError-xW7vE3II.js";import{I as s}from"./InputLabel-D2hlgper.js";import{P as h}from"./PrimaryButton-DG19KKGI.js";import{T as n}from"./TextInput-Bx7mnX4H.js";import{q as j,W as v,d as g}from"./@inertiajs-DgTH4HPv.js";import{q as y}from"./@headlessui-CStl0mCv.js";import"./@react-three-Lu4PhzKs.js";import"./@babel-CiGj-Vf4.js";import"./three-DPTIurfh.js";import"./react-use-measure-CItih8FL.js";import"./debounce-SbLX0B7I.js";import"./its-fine-Cj9KCxhE.js";import"./react-reconciler-CTGvMkf5.js";import"./react-dom-BYk3QVVJ.js";import"./scheduler-CzFDRTuY.js";import"./maath-D_42bLYV.js";import"./three-stdlib-CNW_F6FS.js";import"./zustand-ZOt2ZkLF.js";import"./suspend-react-BKIKQNXN.js";import"./axios-Di5RpEPX.js";import"./deepmerge-DWXj7tTm.js";import"./qs-Buzh4mrw.js";import"./side-channel-Dxn6EU3U.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-DWoJJ4dO.js";import"./nprogress-BPhEN2Vg.js";import"./lodash.isequal-BYoXz8NH.js";function oe({mustVerifyEmail:l,status:p,className:c=""}){const r=j().props.auth.user,{data:i,setData:a,patch:d,errors:m,processing:u,recentlySuccessful:x}=v({name:r.name,email:r.email}),f=t=>{t.preventDefault(),d(route("profile.update"))};return e.jsxs("section",{className:c,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:f,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(s,{htmlFor:"name",value:"Name"}),e.jsx(n,{id:"name",className:"mt-1 block w-full",value:i.name,onChange:t=>a("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(o,{className:"mt-2",message:m.name})]}),e.jsxs("div",{children:[e.jsx(s,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",className:"mt-1 block w-full",value:i.email,onChange:t=>a("email",t.target.value),required:!0,autoComplete:"username"}),e.jsx(o,{className:"mt-2",message:m.email})]}),l&&r.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(g,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),p==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(h,{disabled:u,children:"Save"}),e.jsx(y,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{oe as default};
//# sourceMappingURL=UpdateProfileInformationForm-DWEu7PqN.js.map
