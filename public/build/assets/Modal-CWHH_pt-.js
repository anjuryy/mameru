import{j as e,r as o}from"./react-DGeDUS3L.js";import{q as n,_ as i}from"./@headlessui-CPygwrpO.js";function u({className:t="",disabled:a,children:s,...r}){return e.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${a&&"opacity-25"} `+t,disabled:a,children:s})}function p({children:t,show:a=!1,maxWidth:s="2xl",closeable:r=!0,onClose:l=()=>{}}){const m=()=>{r&&l()},c={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[s];return e.jsx(n,{show:a,as:o.Fragment,leave:"duration-200",children:e.jsxs(i,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:m,children:[e.jsx(n.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),e.jsx(n.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsx(i.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${c}`,children:t})})]})})}export{u as D,p as M};
//# sourceMappingURL=Modal-CWHH_pt-.js.map
