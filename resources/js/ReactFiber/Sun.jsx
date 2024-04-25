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
    const sunModel = useGLTF('./blender/sun2/sun2.glb');
    const sunTexture = useTexture('./blender/sun2/Sun2.jpg');
    sunTexture.flipY = false;

    return <>
        <mesh geometry={ sunModel.nodes.Sphere001.geometry } scale={[0.1, 0.17, 0.1]} position-x={3.4} position-y={0.5}>
            < meshBasicMaterial map={sunTexture} />
        </mesh>
    </>
}

export default Sun;
