import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Sky, OrbitControls } from '@react-three/drei'
import Items from './Items'

export const App = () => (
    <>
      <div>
          <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }} style={{ height: '100vh' }}>
              <color attach="background" args={['#FFFFFF']} />
              <directionalLight
                castShadow
                position={ [ - 2, 2, 1 ] }
                intensity={ 2 }
                shadow-mapSize={ [ 1024, 1024 ] }
                shadow-camera-near={ -2 }
                shadow-camera-far={ 15 }
                shadow-camera-top={ 15 }
                shadow-camera-right={ 10 }
                shadow-camera-bottom={ - 10 }
                shadow-camera-left={ - 10 }
            />
              <ambientLight intensity={ 1.5 }/>
              <OrbitControls minDistance={ 5 } maxDistance={ 10 } />
              <Sparkles count={150} color={'#a3dbff'} size={ 12 } scale={14} position-z={- 14} position-x={2}/>
              {/* <OrbitControls minDistance={ 5 } maxDistance={ 10 } minPolarAngle={ 1 } maxPolarAngle={1.8} rotation={[0, -Math.PI / 4, 0]} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4}/> */}
              {/*<PresentationControls snap global={false} zoom={0.8} rotation={[0, -Math.PI / 4, 0]} azimuth={[-Math.PI / 4, Math.PI / 4]}>*/}
                <group position={[1.4, 1.5, - 13]} rotation={[0, 2.7, 0]} dispose={null}>
                  <Sky />

                  <Items />
                </group>
              {/*</PresentationControls>*/}
          </Canvas>
      </div>
    </>

)
