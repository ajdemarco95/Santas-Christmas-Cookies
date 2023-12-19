import Floor from "./WorldComponents/Floor";
import AlienCave from "./WorldComponents/AlienCave";
import Bridge from "./WorldComponents/Bridge";
import Church from "./WorldComponents/Church";
import Cliffs from "./WorldComponents/Cliffs";
import LowerLevel from "./WorldComponents/LowerLevel";
import Santa from "./characters/Santa";
import SantaScene from "./WorldComponents/SantaScene";
import Start from "./WorldComponents/Start";
import Village from "./WorldComponents/Village";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import Lighting from "./Lighting";
import Collectibles from './GameComponents/Collectibles'
import { useRef, useEffect } from "react";

export default function Model() {
  const groundRef = useRef()

  return (
    <>
    <Lighting />
    <Collectibles />
      <RigidBody name="world item" type="fixed" colliders="hull">
        <CuboidCollider position={[3, -29, 0]} args={[1, 0.5, 1]} />
        <Start />
        <AlienCave />
        <Church />
        <Cliffs />
        <LowerLevel />
        <Santa />
        <SantaScene />
        <Village />
      </RigidBody>
      <RigidBody ref={groundRef} friction={.1} name="ground" type="fixed" colliders="trimesh">
        <CuboidCollider position={[3, -20, 0]} args={[1, 0.5, 1]} />
        <Floor />
        <Bridge />
      </RigidBody>
    </>
  );
}
