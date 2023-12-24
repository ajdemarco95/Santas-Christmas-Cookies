import { Doggo } from "./characters/Doggo";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

import World from "./World";
import IceFloor from "./WorldComponents/IceFloor";
import BebasText from "./BebasText";

function Experience() {
  return (
    <>
      <World />
      <Doggo />
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider
          position={[15.5, -6.056, 61.5]}
          rotation={[1.579, 0, 2.455]}
          args={[8, 2, 2.3]}
        />
        <BebasText
          text={"<- ???"}
          color={"black"}
          rotation={[0, 0.2, 0]}
          position={[40.066, -15.982, -19.056]}
        />
      </RigidBody>
      <RigidBody friction={0.5} name="ice" colliders="hull" type="fixed">
        <CuboidCollider position={[3, -29, 0]} args={[1, 0.5, 1]} />
        <IceFloor />
      </RigidBody>
    </>
  );
}

export default Experience;
