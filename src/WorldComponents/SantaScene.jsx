/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 /Users/ajdemarco/Documents/Github/fetch-game/public/models/world/split/SantaScene.glb -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/world/split/SantaScene.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Deer_1" position={[30.431, -6.279, 76.726]} rotation={[-Math.PI, 1.308, -Math.PI]}>
        <primitive object={nodes.Body} />
        <primitive object={nodes.IKBackLegL} />
        <primitive object={nodes.IKFrontLegL} />
        <primitive object={nodes.IKBackLegR} />
        <primitive object={nodes.IKFrontLegR} />
        <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.001']} skeleton={nodes.Cube.skeleton} />
        <skinnedMesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials['Material.002']} skeleton={nodes.Cube_1.skeleton} />
        <skinnedMesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials.tan} skeleton={nodes.Cube_2.skeleton} />
        <skinnedMesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials['Material.008']} skeleton={nodes.Cube_3.skeleton} />
        <skinnedMesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials['Material.002']} skeleton={nodes.Cube_4.skeleton} />
      </group>
      <group name="Deer_1001" position={[37.152, -6.539, 70.832]} rotation={[Math.PI, -0.491, Math.PI]}>
        <primitive object={nodes.Body_1} />
        <primitive object={nodes.IKBackLegL_1} />
        <primitive object={nodes.IKFrontLegL_1} />
        <primitive object={nodes.IKBackLegR_1} />
        <primitive object={nodes.IKFrontLegR_1} />
        <skinnedMesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.001']} skeleton={nodes.Cube004.skeleton} />
        <skinnedMesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials['Material.002']} skeleton={nodes.Cube004_1.skeleton} />
        <skinnedMesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials.tan} skeleton={nodes.Cube004_2.skeleton} />
        <skinnedMesh name="Cube004_3" geometry={nodes.Cube004_3.geometry} material={materials['Material.008']} skeleton={nodes.Cube004_3.skeleton} />
        <skinnedMesh name="Cube004_4" geometry={nodes.Cube004_4.geometry} material={materials['Material.002']} skeleton={nodes.Cube004_4.skeleton} />
      </group>
      <group name="Deer_1002" position={[18.88, -6.279, 64.121]} rotation={[0, -0.526, 0]}>
        <primitive object={nodes.Body_2} />
        <primitive object={nodes.IKBackLegL_2} />
        <primitive object={nodes.IKFrontLegL_2} />
        <primitive object={nodes.IKBackLegR_2} />
        <primitive object={nodes.IKFrontLegR_2} />
        <skinnedMesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.001']} skeleton={nodes.Cube006.skeleton} />
        <skinnedMesh name="Cube006_1" geometry={nodes.Cube006_1.geometry} material={materials['Material.002']} skeleton={nodes.Cube006_1.skeleton} />
        <skinnedMesh name="Cube006_2" geometry={nodes.Cube006_2.geometry} material={materials.tan} skeleton={nodes.Cube006_2.skeleton} />
        <skinnedMesh name="Cube006_3" geometry={nodes.Cube006_3.geometry} material={materials['Material.008']} skeleton={nodes.Cube006_3.skeleton} />
        <skinnedMesh name="Cube006_4" geometry={nodes.Cube006_4.geometry} material={materials['Material.002']} skeleton={nodes.Cube006_4.skeleton} />
      </group>
      <group name="Bonfire" position={[27.505, -5.822, 66.815]} rotation={[-Math.PI, 1.308, -Math.PI]} scale={9.855}>
        <mesh name="Cylinder035" geometry={nodes.Cylinder035.geometry} material={materials.Wood} />
        <mesh name="Cylinder035_1" geometry={nodes.Cylinder035_1.geometry} material={materials.Wood_Side} />
        <mesh name="Cylinder035_2" geometry={nodes.Cylinder035_2.geometry} material={materials.Stone_Light} />
        <mesh name="Cylinder035_3" geometry={nodes.Cylinder035_3.geometry} material={materials.Stone_Dark} />
      </group>
      <mesh name="sleigh" geometry={nodes.sleigh.geometry} material={materials.Material} position={[17.954, -6.719, 74.734]} rotation={[Math.PI / 2, 0, -2.731]} scale={0.032} />
    </group>
  )
}

useGLTF.preload('./models/world/split/SantaScene.glb')
