import{j as e}from"./react-BQWWVmFX.js";import{I as f}from"./InputError-xW7vE3II.js";import{P as y}from"./PrimaryButton-DG19KKGI.js";import"./TextInput-Bx7mnX4H.js";import{q as t,W as g,d as j}from"./@inertiajs-DgTH4HPv.js";import{q as v}from"./@headlessui-CStl0mCv.js";import"./@react-three-Lu4PhzKs.js";import"./@babel-CiGj-Vf4.js";import"./three-DPTIurfh.js";import"./react-use-measure-CItih8FL.js";import"./debounce-SbLX0B7I.js";import"./its-fine-Cj9KCxhE.js";import"./react-reconciler-CTGvMkf5.js";import"./react-dom-BYk3QVVJ.js";import"./scheduler-CzFDRTuY.js";import"./maath-D_42bLYV.js";import"./three-stdlib-CNW_F6FS.js";import"./zustand-ZOt2ZkLF.js";import"./suspend-react-BKIKQNXN.js";import"./axios-Di5RpEPX.js";import"./deepmerge-DWXj7tTm.js";import"./qs-Buzh4mrw.js";import"./side-channel-Dxn6EU3U.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-DWoJJ4dO.js";import"./nprogress-BPhEN2Vg.js";import"./lodash.isequal-BYoXz8NH.js";function se({mustVerifyEmail:i,status:o,className:s=""}){const n=t().props.auth.user,{currency:m}=t().props,{currency_lists:c}=t().props,{data:a,setData:d,patch:p,errors:l,processing:u,recentlySuccessful:x}=g({currency_id:m[0].currency_id}),h=r=>{r.preventDefault(),p(route("profile.update_currency"))};return e.jsxs("section",{className:s,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Currency Settings"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Select the currency you want to shop with."})]}),e.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsxs("select",{id:"currency_id",className:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:a.currency_id,onChange:r=>d("currency_id",r.target.value),required:!0,autoComplete:"currency_id",children:[e.jsx("option",{children:"Select a currency..."}),c.map(r=>e.jsxs("option",{value:r.id,children:[" ",r.symbol," - ",r.code," - ",r.name," "]},r.id))]}),e.jsx(f,{className:"mt-2",message:l.currency_id})]}),i&&n.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(j,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),o==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(y,{disabled:u,children:"Save"}),e.jsx(v,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{se as default};
//# sourceMappingURL=UpdateCurrency-CpJFetxF.js.map
