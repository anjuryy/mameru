import{r as w,j as s}from"./react-DGeDUS3L.js";import{G as f}from"./GuestLayout-DNQBPdZz.js";import{I as m}from"./InputError-BDHAfpwJ.js";import{I as e}from"./InputLabel-Bt9XdrJX.js";import{P as x}from"./PrimaryButton-D87fGWlw.js";import{T as i}from"./TextInput-V3I2nGuQ.js";import{W as j,a as v}from"./@inertiajs-AuzDUVoY.js";import"./@react-three-BFRjeCcN.js";import"./@babel-CiGj-Vf4.js";import"./three-wFZZ4-aV.js";import"./react-use-measure-DO6L4M7M.js";import"./debounce-Bn9A2zky.js";import"./its-fine-fQHrmN5W.js";import"./react-reconciler-4d2z6Qt6.js";import"./react-dom-Bk3SHiAq.js";import"./scheduler-CzFDRTuY.js";import"./maath-CC4KLiXL.js";import"./three-stdlib-CSRvC8dv.js";import"./zustand-CwjNyJVO.js";import"./suspend-react-BKIKQNXN.js";import"./ApplicationLogo-DP9CNk0r.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D7I_G_I4.js";import"./qs-B99Nc6xW.js";import"./side-channel-Bz2OXirb.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CJc8fbqy.js";import"./nprogress-DLlf1OgQ.js";import"./lodash.isequal-BLzkQ0eW.js";function ms({token:p,email:l}){const{data:o,setData:t,post:n,processing:d,errors:a,reset:c}=j({token:p,email:l,password:"",password_confirmation:""});w.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=r=>{r.preventDefault(),n(route("password.store"))};return s.jsxs(f,{children:[s.jsx(v,{title:"Reset Password"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(e,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:r=>t("email",r.target.value)}),s.jsx(m,{message:a.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(e,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(m,{message:a.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(e,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:r=>t("password_confirmation",r.target.value)}),s.jsx(m,{message:a.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:d,children:"Reset Password"})})]})]})}export{ms as default};
//# sourceMappingURL=ResetPassword-DlCSxPd6.js.map
