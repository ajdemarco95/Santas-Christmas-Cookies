/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ./public/models/dog/doggo.glb 
*/
import { OrbitControls } from "@react-three/drei";

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

import useDog from "../store/useDog";
import useGame from "../store/useGame";

import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { CuboidCollider, RigidBody, vec3 } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import * as THREE from "three";

export function Doggo(props) {
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const start = useGame((state) => state.start)

  const dogActiveAnim = useDog((state) => state.dogActiveAnim);
  const run = useDog((state) => state.dogRun);
  const runLeft = useDog((state) => state.dogRunLeft);
  const runRight = useDog((state) => state.dogRunRight);
  const walkBack = useDog((state) => state.dogWalkBack);
  const idle = useDog((state) => state.dogIdle);
  const sit = useDog((state) => state.dogSit);

  // const updateDogPosition = useDog((state) => state.updateDogPosition)

  const group = useRef();
  const doggo = useRef();

  const { nodes, materials, animations } = useGLTF(
    "./models/dog/doggo_actions_all.glb"
  );
  const { actions, names } = useAnimations(animations, group);

  //Switch animations based on state updates
  useEffect(() => {
    actions[names[dogActiveAnim]].reset().fadeIn(0.5).play();

    return () => {
      if (actions[names[dogActiveAnim]]) {
        actions[names[dogActiveAnim]].fadeOut(0.5);
      }
    };
  }, [dogActiveAnim]);

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys();

    if (forward || backward || leftward || rightward) {
      run();
    } else {
      idle();
    }

    // let dogPos = new THREE.Vector3()
    // group.current.getWorldPosition(dogPos)
    // updateDogPosition(dogPos)
  });

  useEffect(() => {
    const unsubscribeAny = subscribeKeys(
      () =>
      {
          start()
      }
  )

  
    return () => {
      unsubscribeAny()
    }
  }, [])
  


  return (
    <>
      <Ecctrl
        name={"doggo"}
        ref={doggo}
        position={[-20, -7, 0]}
        floatHeight={0.03}
        maxVelLimit={15}
        sprintMult={1.5}
        camInitDis={-20}
        camInitDir={{ x: 0.4, y: Math.PI * -0.5, z: 0 }}
        characterInitDir={Math.PI * -0.5}
        onCollisionEnter={(e) => {console.log(e.other.rigidBodyObject.name)}}
      >
        <group
          position={[0, -0.65, 0]}
          scale={0.04}
          ref={group}
          {...props}
          dispose={null}
        >
          <group name="Scene">
            <group name="Arm_Labrador" >
              <primitive object={nodes.Root_bone} />
              <skinnedMesh
                castShadow
                name="Labardor"
                geometry={nodes.Labardor.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.Labardor.skeleton}
              />
            </group>
          </group>
        </group>
      </Ecctrl>
    </>
  );
}

useGLTF.preload("./models/dog/doggo_actions_all.glb");
