import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, useGLTF, useTexture } from '@react-three/drei';

function Sun() {
    return (
        <Canvas
            shadows
            camera={ {
                fov: 45
            } }
            className="h-40"
            // style={{ height: '15vh' }}
        >
            <OrbitControls />
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Sky />
            <SunModel />
        </Canvas>
    );
}

function SunModel() {
    const sunModel = useGLTF('./blender/sun.glb');
    const sunTexture = useTexture('./blender/Sun.jpg');
    sunTexture.flipY = false;

    // console.log(sunModel.nodes.Mball002.geometry);

    return (
        <mesh geometry={ sunModel.nodes.Mball002.geometry } scale={0.06} position-x={1.8}>
            <meshBasicMaterial map={sunTexture} />
        </mesh>
    );
}

export default Sun;
