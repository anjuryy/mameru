// // In your R3F component file (e.g., ThreeScene.js)
// import '../../../css/style.css';
// // import ReactDOM from 'react-dom/client'
// import { Canvas } from '@react-three/fiber'
// import Experience from './Experience';

// function Index() {

//     return (
//         <Canvas
//             style={{ height: '100vh' }}
//             shadows
//             camera={ {
//                 fov: 45,
//                 near: 0.1,
//                 far: 200,
//                 position: [ 2.5, 4, 6 ]
//             } }
//             id='root'
//         >

//             <Experience />
//         </Canvas>
//     );
// }

// export default Index;


import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
// import { Logo } from '@pmndrs/branding'
import '../../../css/style.css'
import { App } from './App'
import ApplicationLogo from '@/Components/ApplicationLogo'

function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          pmnd.rs
          <br />
          dev collective
        </a>
        <div className="flex justify-between items-center h-20 text-4xl p-6">
            <div>
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
            </div>
            <div>
                <div className="flex justify-between items-center h-20 text-xl">
                    <div className='mr-4'>
                        <a href="#login">Login</a>
                        
                    </div>
                    <div>
                        Register
                    </div>
                </div>
            </div>
        </div>
        {/* <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>bad —</div>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>10/17/2021</div> */}
      </div>
    )
  }

// createRoot(document.getElementById('root')).render(
  
// )

function Index() {

    return (
        <>
    <Suspense fallback={null}>
      <App />
      <div id="login"></div>
    </Suspense>
    
    <Overlay />
    {/* <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} /> */}
  </>
    );
}

export default Index;