import React from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Box, Torus } from "@react-three/drei";

function IceCollider() {
  return (
    <group position={[-40, 0, 0]} dispose={null}>
      <RigidBody colliders={"hull"} restitution={2}>
        <CuboidCollider
          onCollisionEnter={(e) => {
            if (e.other.rigidBodyObject.name === "doggo")
              console.log("collision!");
            // increaseScore();
            // setIsCollected(true);
          }}
          args={[10, 10, 10]}
        />
      </RigidBody>
      {/* <mesh>
        <boxGeometry args={[10, 10, 10]} />
        <meshBasicMaterial color={"red"} />
      </mesh> */}
    </group>
  );
}

export default IceCollider;
