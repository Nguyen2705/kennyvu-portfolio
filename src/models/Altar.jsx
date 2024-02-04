import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"
import { a } from '@react-spring/three'

import altarScene from '../assets/3d/altar.glb';

const Altar = ({ isRotating, setIsRotating, setCurrentStage, ...props}) => {
  const altarRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(altarScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches 
      ? e.touches[0].clientX 
      : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {
      const clientX = e.touches 
      ? e.touches[0].clientX 
      : e.clientX;

    const delta = (clientX - lastX.current) / viewport.width;

    altarRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setIsRotating(true);
      altarRef.current.rotation.y += 0.01 * Math.PI;
    } else if(e.key === 'ArrowRight') {
      if(!isRotating) setIsRotating(true);
      altarRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      altarRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = altarRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={altarRef} {...props}>
      <mesh
        geometry={nodes.Altar_Trim_Sheet_0.geometry}
        material={materials.Trim_Sheet}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0.geometry}
        material={materials.Trim_Sheet_2}
        position={[0.616, 0.766, 5.293]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_1.geometry}
        material={materials.Trim_Sheet_2}
        position={[0.732, 0.796, 5.69]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_2.geometry}
        material={materials.Trim_Sheet_2}
        position={[3.681, 0.511, 5.272]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_3.geometry}
        material={materials.Trim_Sheet_2}
        position={[-4.354, 0.796, 2.583]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_4.geometry}
        material={materials.Trim_Sheet_2}
        position={[-4.818, 0.796, 2.771]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_5.geometry}
        material={materials.Trim_Sheet_2}
        position={[-6.68, 0.258, 2.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_6.geometry}
        material={materials.Trim_Sheet_2}
        position={[-4.092, 0.51, -4.978]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_7.geometry}
        material={materials.Trim_Sheet_2}
        position={[-1.559, 0.771, -5.328]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_8.geometry}
        material={materials.Trim_Sheet_2}
        position={[1.567, 0.796, -4.868]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh 
        geometry={nodes.Vase_Trim_Sheet_2_0_9.geometry}
        material={materials.Trim_Sheet_2}
        position={[1.723, 0.766, -4.371]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_10.geometry}
        material={materials.Trim_Sheet_2}
        position={[5.502, 0.796, -0.877]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_11.geometry}
        material={materials.Trim_Sheet_2}
        position={[5.708, 0.766, -0.397]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase_Trim_Sheet_2_0_12.geometry}
        material={materials.Trim_Sheet_2}
        position={[5.27, 0.796, -0.264]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
}

export default Altar;
