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
      <ChristmasTreeCookie position={[6.293, -18.97, -32.976]} rotation={[0,Math.PI * 0.5,0]}/>
      <ChristmasTreeCookie position={[58.333, -3.275, 104.935]} rotation={[0,Math.PI * 1.2,0]} />
    </group>
  )
}

useGLTF.preload('models/world/split/Collectibles.glb')
