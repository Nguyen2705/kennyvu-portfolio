import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/sky.glb';

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if(isRotating) {
      skyRef.current.rotation.y -= 0.45 * delta
    }
  })

  return (
    <mesh ref={skyRef} scale={[100, 100, 100]} position={[0, -180 ,-351]}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky