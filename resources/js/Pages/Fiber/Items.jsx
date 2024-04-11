import { useGLTF, Box, useTexture } from "@react-three/drei"
import * as THREE from 'three'

export default function Items()
{
    const model = useGLTF('./blender/Machine2.glb');
    const machineTexture = useTexture('./blender/Machine.jpg');
    machineTexture.flipY = false;

    console.log(model);
    return <>
        <mesh geometry={ model.nodes.Circle007.geometry }>
            <meshBasicMaterial map={machineTexture} side={THREE.DoubleSide}/>
        </mesh>
        {/* <primitive
            object={ model.scene }
            scale={0.5}
            rotation={[0, 9, 0]}
            position={[-1.3, - 0.8, - 1]}
        /> */}
    </>
}
