import{j as e}from"./react-DVM01ERP.js";import{B as t}from"./Box-CcyGwu31.js";import{d as m}from"./@inertiajs-B0U8ze2m.js";import"./@react-three-CUWIX_2K.js";import"./@babel-CiGj-Vf4.js";import"./three-CT44rtPH.js";import"./react-use-measure-Ct9Or_iS.js";import"./debounce-ByU2xFyg.js";import"./its-fine-BvlhO9uC.js";import"./react-reconciler-C8efrrNq.js";import"./react-dom-CfYs3vay.js";import"./scheduler-CzFDRTuY.js";import"./maath-DI14jEVk.js";import"./three-stdlib-CfCDiu8i.js";import"./zustand-EYJ_xzba.js";import"./suspend-react-BKIKQNXN.js";import"./axios-Di5RpEPX.js";import"./deepmerge-D2JkYKzz.js";import"./qs-Dg42YJCm.js";import"./side-channel-D9NP7caB.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-C2f3yjQm.js";import"./nprogress-bhwNocYg.js";import"./lodash.isequal-DfSlhtKm.js";function T({productLists:r,userCurrencySetting:i,filteredData:l}){return console.log(i[0].currency_converters.value),e.jsxs("div",{className:"bg-white",children:[r.length==0?e.jsx("div",{className:"text-gray-300 h-96 flex items-center justify-center w-full text-3xl",children:"No Record Found"}):"",e.jsx("div",{className:"mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8",children:e.jsxs("div",{className:"grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:[l.length!==0&&l.slice(0,15).map((s,a)=>e.jsx(t,{className:"bg-white",children:e.jsxs("div",{children:[e.jsx("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",children:e.jsx(m,{href:route("product.show",s.id),children:s.images.length>0?e.jsx("img",{src:s.images[0].filename?"../images/"+s.images[0].filename:"images/"+s.images[0].filename,className:"h-full w-full object-cover object-center lg:h-full lg:w-full"}):e.jsx("img",{src:"../images/profilePic.jpeg",className:"h-full w-full object-cover object-center lg:h-full lg:w-full"})})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm text-gray-700",children:[e.jsx("span",{"aria-hidden":"true",className:"inset-0"}),s.name]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.description})]}),Math.floor(parseInt(s.price)),e.jsxs("p",{className:"text-sm font-medium text-gray-900",children:[i[0].currency_converters.symbol,Math.floor(parseInt(product.price)*i[0].currency_converters.value)]})]})]})},s.id)),l.length===0?r.map(s=>e.jsx(t,{className:"bg-white",children:e.jsxs("div",{children:[e.jsx("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",children:e.jsx(m,{href:route("product.show",s.id),children:s.images.length>0?e.jsx("img",{src:s.images[0].filename?"../images/"+s.images[0].filename:"images/"+s.images[0].filename,className:"h-full w-full object-cover object-center lg:h-full lg:w-full"}):e.jsx("img",{src:"../images/profilePic.jpeg",className:"h-full w-full object-cover object-center lg:h-full lg:w-full"})})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm text-gray-700",children:[e.jsx("span",{"aria-hidden":"true",className:"inset-0"}),s.name]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.description})]}),e.jsxs("p",{className:"text-sm font-medium text-gray-900",children:[i[0].currency_converters.symbol,Math.floor(parseInt(s.price)*i[0].currency_converters.value)]})]})]})},s.id)):null]})})]})}export{T as default};
//# sourceMappingURL=ProductList-PFMjAWWx.js.map
