import{r as c,j as e}from"./react-DVM01ERP.js";import{a as l,b as u}from"./react-icons-BBQmb-Wp.js";import"./@react-three-CUWIX_2K.js";import"./@babel-CiGj-Vf4.js";import"./three-CT44rtPH.js";import"./react-use-measure-Ct9Or_iS.js";import"./debounce-ByU2xFyg.js";import"./its-fine-BvlhO9uC.js";import"./react-reconciler-C8efrrNq.js";import"./react-dom-CfYs3vay.js";import"./scheduler-CzFDRTuY.js";import"./maath-DI14jEVk.js";import"./three-stdlib-CfCDiu8i.js";import"./zustand-EYJ_xzba.js";import"./suspend-react-BKIKQNXN.js";const T=({setCards:o})=>{const[a,r]=c.useState(!1),n=t=>{t.preventDefault(),r(!0)},s=()=>{r(!1)},i=t=>{const d=t.dataTransfer.getData("cardId");o(m=>m.filter(p=>p.id!==d)),r(!1)};return e.jsx("div",{onDrop:i,onDragOver:n,onDragLeave:s,className:`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${a?"border-red-800 bg-red-800/20 text-red-500":"border-neutral-500 bg-neutral-500/20 text-neutral-500"}`,children:a?e.jsx(l,{className:"animate-bounce"}):e.jsx(u,{})})};export{T as default};
//# sourceMappingURL=BurnBarrel-vjR0Bc0y.js.map
