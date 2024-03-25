// In your R3F component file (e.g., ThreeScene.js)
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, useGLTF } from '@react-three/drei';

function ThreeScene() {

    return (
        <Canvas>
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

        <Box position={[0, 0, 4]} />
        </Canvas>
    );
}

export default ThreeScene;
