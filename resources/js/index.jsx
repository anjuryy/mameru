import '../css/style.css'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import App from './Fiber/app'

import './bootstrap';
import '../css/app.css';

root.render(
  <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <Suspense fallback={null}>
        <App />
    </Suspense>
  </Canvas>
);
