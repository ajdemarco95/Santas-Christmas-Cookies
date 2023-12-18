import { useMemo } from "react";
import { Doggo } from "./characters/Doggo";
import Lighting from "./Lighting";
import Collectibles from "./GameComponents/Collectibles";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

import { Text3D } from "@react-three/drei";
import { useControls } from "leva";

import World from "./World";
import IceCollider from "./WorldComponents/IceCollider";
import IceFloor from "./WorldComponents/IceFloor";

function Experience() {
  return (
    <>
      <Lighting />
      <Collectibles />
      <World />
      
      <Text3D
        scale={2}
        position={[-35, -2, 5.973]}
        rotation={[-Math.PI, 2, -Math.PI]}
        font={"./font/Bebas_Neue_Regular.json"}
      >
        Merry Christmas
        <meshBasicMaterial color={"black"} />
      </Text3D>

        <IceFloor />

      <Doggo />
    </>
  );
}

export default Experience;
