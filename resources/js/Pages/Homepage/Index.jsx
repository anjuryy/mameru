import ReactDOM from 'react-dom/client'
import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
            shadows
            camera={ {
                fov: 45
            } }
        >
            <Sky sunPosition={[100, 100, -10]} />
            <Physics gravity={[0, -30, 0]} debug={ true }>
            {/* <Experience /> */}
                {/* <Lights />
                <Floor />
                <Player /> */}
            </Physics>
            <PointerLockControls />
        </Canvas>

)