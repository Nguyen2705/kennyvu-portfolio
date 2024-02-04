import { useRef, useEffect } from 'react'

import eagleScene from '../assets/3d/eagle.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Eagle = () => {
    const { scene, animations } = useGLTF(eagleScene);
    const eagleRef = useRef();
    const { actions } = useAnimations(animations, eagleRef);

    useEffect(() => {
      actions['CINEMA_4D_Principal'].play();
    }, []);

    useFrame(({ clock, camera }) => {
        eagleRef.current.position.y = Math.sin(clock.elapsedTime) *0.2 + 2;

        if(eagleRef.current.position.x > camera.position.x + 10) {
            eagleRef.current.rotation.y = Math.PI;
        } else if (eagleRef.current.position.x < camera.position.x -10) {
            eagleRef.current.rotation.y = 0;
        }

        if(eagleRef.current.rotation.y === 0) {
          eagleRef.current.position.x += 0.01;
          eagleRef.current.position.z -= 0.01;
        } else {
          eagleRef.current.position.x -= 0.01;
          eagleRef.current.position.z += 0.01;  
        }
    })

    return (
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