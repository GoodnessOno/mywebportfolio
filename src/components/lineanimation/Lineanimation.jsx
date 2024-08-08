import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'

const Lineanimation = (props) => {
    // This reference give us direct access to the THREE.Mesh objects
    const ref = useRef();
    //Hold state for hovered and clicked events
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));
    // return the view, these are regular threejs elements expressed in jsx format
    return (
        <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => setClicked(!clicked)}
        onPointerOver={(event) => setHovered(true)}
        onPointerOut={(event) => setHovered(false)}
        >
            <torusGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
            wireframe={props.wireframe}
            color={hovered? 'red' : 'lightblue'} />
        </mesh>
    )
};

export default Lineanimation;