import { OrbitControls, Cylinder, Environment } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Doggo } from "./Doggo";
import { useControls } from "leva";

function Experience() {
  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" background />
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={7}
        castShadow
        color={"white"}
      />
      {/* STAGE */}
      <Doggo/>
      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <mesh>
          <boxGeometry args={[1, 1, 5]} />
          <meshStandardMaterial color={"pink"} />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Experience;
