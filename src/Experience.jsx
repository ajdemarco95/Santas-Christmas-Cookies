import { OrbitControls, Environment } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Doggo } from "./Doggo";

function Experience() {
  return (
    <>
      <OrbitControls />
      <Environment preset="park" background />
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={4}
        castShadow
        color={"white"}
      />
      {/* STAGE */}
      <Doggo/>
      <RigidBody colliders={false} type="fixed" position-y={-.1}>
        <mesh receiveShadow>
          <boxGeometry args={[10,.2, 10]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Experience;
