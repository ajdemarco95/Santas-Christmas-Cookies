/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 /Users/ajdemarco/Documents/Github/fetch-game/public/models/cookies/ChristmasTreeCookie.glb 
*/

import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useControls } from "leva";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "./models/cookies/ChristmasTreeCookie.glb"
  );

  const options = useMemo(() => {
    return {
      x: { value: 0, min: -1, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: -1, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: -1, max: Math.PI * 2, step: 0.01 },
    };
  }, []);

  const colliderPos = useControls("collider", options);
  const colliderArgs = useControls("colliderArgs", options);

  const posArr = [-0.5, 0.73, 0.32];
  const argsArr = [0.76, 0.81, 0.63];

  console.log(colliderPos);
  return (
    <group
      position-x={2}
      position-z={5}
      position-y={.15}
      {...props}
      rotation-y={Math.PI}
      dispose={null}
    >
      <RigidBody type="kinematicPosition" colliders={false}>
        <CuboidCollider position={posArr} args={argsArr} />

        <mesh
          geometry={nodes.Christmas_tree_1.geometry}
          material={materials["Material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.02}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("./models/cookies/ChristmasTreeCookie.glb");
