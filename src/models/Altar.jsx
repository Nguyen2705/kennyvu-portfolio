/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ruslan Malovsky (https://sketchfab.com/malovsky)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/sanctuary-ancient-altar-8ff8c9021f464fddb26cced63f9a3dd9
Title: Sanctuary, Ancient altar
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Altar = (props) => {
  const { nodes, materials } = useGLTF("/sanctuary_ancient_altar.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Altar_Trim_Sheet_0.geometry}
        material={materials.Trim_Sheet}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0.geometry}
        material={materials.Trim_Sheet_2}
        position={[0.616, 0.766, 5.293]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_1.geometry}
        material={materials.Trim_Sheet_2}
        position={[0.732, 0.796, 5.69]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_2.geometry}
        material={materials.Trim_Sheet_2}
        position={[3.681, 0.511, 5.272]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_3.geometry}
        material={materials.Trim_Sheet_2}
        position={[-4.354, 0.796, 2.583]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_4.geometry}
        material={materials.Trim_Sheet_2}
        position={[-4.818, 0.796, 2.771]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_5.geometry}
        material={materials.Trim_Sheet_2}
        position={[-6.68, 0.258, 2.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_6.geometry}
        material={materials.Trim_Sheet_2}
        position={[-4.092, 0.51, -4.978]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_7.geometry}
        material={materials.Trim_Sheet_2}
        position={[-1.559, 0.771, -5.328]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_8.geometry}
        material={materials.Trim_Sheet_2}
        position={[1.567, 0.796, -4.868]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_9.geometry}
        material={materials.Trim_Sheet_2}
        position={[1.723, 0.766, -4.371]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_10.geometry}
        material={materials.Trim_Sheet_2}
        position={[5.502, 0.796, -0.877]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_11.geometry}
        material={materials.Trim_Sheet_2}
        position={[5.708, 0.766, -0.397]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase_Trim_Sheet_2_0_12.geometry}
        material={materials.Trim_Sheet_2}
        position={[5.27, 0.796, -0.264]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/sanctuary_ancient_altar.glb");

export default Altar;
