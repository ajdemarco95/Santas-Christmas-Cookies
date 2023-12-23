/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 -k /Users/ajdemarco/Documents/Github/fetch-game/public/models/world/split/Collectibles.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ChristmasTreeCookie from '../items/ChristmasTreeCookie'

export default function Model(props) {
  const { nodes,  } = useGLTF('models/world/split/Collectibles.glb')
  return (
    <group {...props} dispose={null}>
      <ChristmasTreeCookie position={[92.778, -17.887, -36.945]} rotation={[0,0 ,0]} />
      <ChristmasTreeCookie position={[92.806, -17.887, 32.917]} rotation={[0,Math.PI * 1,0]}/>
      <ChristmasTreeCookie position={[-34.728, -3.805, 149.83]} rotation={[0,Math.PI * 1,0]} />
      <ChristmasTreeCookie position={[44.054, -18.49, -57.612]} rotation={[0,0,0]}/>
      <ChristmasTreeCookie position={[58.333, -3.275, 104.935]} rotation={[0,Math.PI,0]} />

      {/* <mesh name="collectible_1" geometry={nodes.collectible_1.geometry} material={materials['Material.003']} position={[10.298, -17.887, 104.126]} /> */}
       {/* <mesh name="collectible_1001" geometry={nodes.collectible_1001.geometry} material={materials['Material.005']} position={[-57.18, -17.887, 86.029]} />
      <mesh name="collectible_1002" geometry={nodes.collectible_1002.geometry} material={materials['Material.006']} position={[-81.854, -17.887, 91.397]} />
      <mesh name="collectible_1003" geometry={nodes.collectible_1003.geometry} material={materials['Material.007']} position={[42.898, -18.49, 62.432]} /> */}
      {/* <mesh name="collectible_1004" geometry={nodes.collectible_1004.geometry} material={materials['Material.009']} position={[-117.789, -3.275, 34.052]} /> */}
    </group>
  )
}

useGLTF.preload('models/world/split/Collectibles.glb')
