import { Box } from "@react-three/drei";

function sample()
{

    window.addEventListener('DOMContentLoaded', (event) => {
        // Your code here
        window.addEventListener('scroll', () => {
            console.log('hello');
        });
    });

    return(
        <>
            <Box args={[1, 1, 1]}/>
        </>
    )

}

export default sample