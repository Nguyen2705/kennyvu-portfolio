import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import warriorScene from '../assets/3d/warrior.glb';

const Warrior = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(warriorScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if(isRotating) {
        actions['run'].play();
    } else {
        actions['run'].stop();
    }
  }, [actions, isRotating])
  
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Warrior