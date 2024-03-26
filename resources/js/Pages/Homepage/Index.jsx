import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Sky, Physics, PointerLockControls } from '@react-three/drei';

const App = () => {
    return (
        <Canvas
            shadows
            camera={ {
                fov: 45
            } }
        >
            <Sky sunPosition={[100, 100, -10]} />
            <Physics gravity={[0, -30, 0]} debug={ true }>
                {/* Your 3D components */}
            </Physics>
            {/* <PointerLockControls /> */}

            {/* Input tag */}
            <input type="text" placeholder="Enter something..." />
        </Canvas>
    );
}

export default App;
