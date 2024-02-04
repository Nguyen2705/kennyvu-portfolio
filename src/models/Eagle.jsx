import { useRef, useEffect } from 'react'

import eagleScene from '../assets/3d/eagle.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Eagle = () => {
    const eagleRef = useRef();

    // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(eagleScene);

    // Get access to the animations for the Eagle
    const { actions } = useAnimations(animations, eagleRef);

    useEffect(() => {
      actions['CINEMA_4D_Principal'].play();
    }, []);

    useFrame(({ clock, camera }) => {

        // Update the Y position to simulate eagle-like motion using a sine wave
        eagleRef.current.position.y = Math.sin(clock.elapsedTime) *0.2 + 2;

        // Check if the Eagle reached a certain endpoint relative to the camera
        if(eagleRef.current.position.x > camera.position.x + 10) {

            // Change direction to backward and rotate the Eagle 180 degrees on the y-axis
            eagleRef.current.rotation.y = Math.PI;
        } else if (eagleRef.current.position.x < camera.position.x -10) {

            // Change direction to forward and reset the Eagle's rotation
            eagleRef.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction of the Eagle
        if(eagleRef.current.rotation.y === 0) {
          
            // Moving forward
          eagleRef.current.position.x += 0.01;
          eagleRef.current.position.z -= 0.01;
        } else {

            // Moving backward
          eagleRef.current.position.x -= 0.01;
          eagleRef.current.position.z += 0.01;  
        }
    })

    return (
        // Create and display 3D objects
        <mesh 
            position= {[-5 , 2, 1]} 
            scale={[0.009, 0.009, 0.009]} 
            ref = {eagleRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Eagle