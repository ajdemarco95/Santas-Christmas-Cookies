import Floor from "./WorldComponents/Floor";
import AlienCave from "./WorldComponents/AlienCave";
import Bridge from "./WorldComponents/Bridge";
import Church from "./WorldComponents/Church";
import Cliffs from "./WorldComponents/Cliffs";
import LowerLevel from "./WorldComponents/LowerLevel";
import Santa from "./WorldComponents/Santa";
import SantaScene from "./WorldComponents/SantaScene";
import Start from "./WorldComponents/Start";
import Village from "./WorldComponents/Village";

import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function Model() {
  return (
    <>
      <RigidBody type="fixed" colliders="hull">
      <CuboidCollider position={[3, -2, 0]} args={[1, 0.5, 1]} />
        <Start />
        <AlienCave />
        <Church />
        <Cliffs />
        <LowerLevel />
        <Santa />
        <SantaScene />
        <Village />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <CuboidCollider position={[3, -2, 0]} args={[1, 0.5, 1]} />
        <Floor />
        <Bridge />
      </RigidBody>
    </>
  );
}