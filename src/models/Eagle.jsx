import React from 'react'

import eagleScene from '../assets/3d/eagle.glb'
import { useGLTF } from '@react-three/drei'

const Eagle = () => {
    const { scene, animations } = useGLTF(eagleScene);
  
    return (
        <mesh position= {[-5 , 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Eagle