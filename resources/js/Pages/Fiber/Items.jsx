import { useGLTF, Box } from "@react-three/drei"

export default function Items()
{
    const model = useGLTF('./blender/machine.glb');

    console.log(model);
    return <>
        <primitive 
            object={ model.scene }
            scale={0.5}
            rotation={[0, 9.6 ,0]}
            position={[-2.0, - 0.8, - 1]}
        />
    </>
}