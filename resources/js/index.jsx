import '../css/style.css'
import ReactDOM from 'react-dom/client'
import { Box, Html, KeyboardControls, OrbitControls, PointerLockControls, Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Canvas } from '@react-three/fiber'
import Page from './Fiber/sample'
import { Suspense } from 'react'
import App from './Fiber/app'

// // import Overlay from './Fiber/overlay'

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// window.addEventListener('DOMContentLoaded', (event) => {
//     // Your code here
//     window.addEventListener('scroll', () => {
//         console.log('hello');
//     });
// });

// function overlay() {
//     return (
//       <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
//         <a href="https://pmnd.rs/" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
//           pmnd.rs
//           <br />
//           dev collective
//         </a>
//         <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>10/17/2021</div>
//       </div>
//     )
// }

  
// root.render(
//     // <Canvas
//     //     shadows
//     //     camera={ {
//     //         fov: 45,
//     //         near: 0.1,
//     //         far: 200,
//     //         position: [ 0, 0, 6 ]
//     //     } }
//     // >
//     //         {/* <OrbitControls /> */}
//     //         {/* <Sky sunPosition={[100, 100, -10]} /> */}
//     //         <Physics gravity={[0, -30, 0]} debug={ true }>
//     //         <Page />

//     //         {/* <Html transform scale={0.5}>
//     //             <div style={{ transform: 'scale(2)' }}>
//     //                 <input type="text"  value="text"/>
//     //             </div>
//     //         </Html> */}
//     //         </Physics>
//     //         {/* <PointerLockControls />
//     //          */}
//     //     </Canvas>
//     <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
//         <Suspense fallback={null}>
//             <App />
//         </Suspense>
//         {/* <Overlay /> */}
//         {/* <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} /> */}
//     </Canvas>

// )

import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Mameru';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//     setup({ el, App, props }) {
//         const root = createRoot(el);

root.render(
  <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <Suspense fallback={null}>
        <App />
    </Suspense>
    {/* <Overlay /> */}
    {/* <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} /> */}
  </Canvas>
);
    // },
    // progress: {
    //     color: '#4B5563',
    // },
// });
