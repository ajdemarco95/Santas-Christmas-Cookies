import { Doggo } from "./characters/Doggo";
import Lighting from "./Lighting";
import Collectibles from "./GameComponents/Collectibles";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

import World from "./World";
import IceFloor from "./WorldComponents/IceFloor";
import MerryChristmasText from "./MerryChristmasText";
import { useFrame } from "@react-three/fiber";
import useGame from "./store/useGame";
import MerryChristmasCane from './WorldComponents/MerryChristmasCane'


function Experience() {
  // useFrame(() => {
  //   console.log(useGame.getState())
    
  // });
  return (
    <>
      <World />
      <Doggo />
      {/* <MerryChristmasText /> */}
      <RigidBody type="fixed" colliders={false}>
      <CuboidCollider position={[15.5, -6.056, 61.5]} rotation={[1.579, 0, 2.455]} args={[8, 2, 2.3]} />
      <MerryChristmasCane/>
      </RigidBody>
      <RigidBody
        friction={0.5}
        name="ice"
        colliders="hull"
        type="fixed"
      >
        <CuboidCollider position={[3, -29, 0]} args={[1, 0.5, 1]} />
        <IceFloor />
      </RigidBody>
    </>
  );
}

export default Experience;
