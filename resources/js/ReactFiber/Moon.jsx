import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Sparkles, useGLTF, useTexture } from '@react-three/drei';

function Moon() {
    return (
        <Canvas
            shadows
            camera={ {
                fov: 45
            } }
            className="h-40"
            style={{ background: 'url(./watercolour_night_sky_background_2607.jpg) no-repeat center fixed', backgroundSize: 'cover' }}
        >
            <OrbitControls />
            <ambientLight intensity={10} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            {/* <Sky /> */}
            {/* <color args={ [ '#030202' ] } attach="background" /> */}
            <Sparkles
                size={ 3 }
                scale={ [ 7.5, 2, 4 ] }
                position-y={ 0 }
                speed={ 0.5 }
                count={ 60 }
                color={'#3390d2'}
            />
            <MoonModel />
        </Canvas>
    );
}

function MoonModel() {
    const moonModel = useGLTF('./blender/moon.glb');
    const moonTexture = useTexture('./blender/Moon.jpg');
    moonTexture.flipY = false;

    // console.log(moonModel.nodes.Mball002.geometry);

    return (
        <mesh geometry={ moonModel.nodes.Mball002.geometry } scale={0.06} position-x={1.8}>
            <meshBasicMaterial map={moonTexture} />
        </mesh>
    );
}

export default Moon;
