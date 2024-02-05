import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import warriorScene from '../assets/3d/warrior.glb';

const Warrior = ({ isRotating, warriorScale, warriorPosition, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(warriorScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['run'].play();
      actions['iddle'].stop();
    } else {
      actions['run'].stop();
      actions['iddle'].play();
    }
  }, [actions, isRotating]);
  
  return (
    <mesh {...props} ref={ref} scale={warriorScale} position={warriorPosition}>
        <primitive object={scene} />
    </mesh>
  );
};

export default Warrior