import { OrbitControls, Environment, Sky, Box } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Doggo } from "./Doggo";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

function Experience() {
  return (
    <>
      <Environment preset="park" background blur={0.15} />
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={4}
        castShadow
        color={"white"}
      />

      <Ecctrl maxVelLimit={7} floatHeight={.03} camInitDis={-8} camInitDir={{x: .4, y: 0, z: 0}}>
      {/* <CuboidCollider args={[1.5,0.3,1]} mass={0}/> */}

        <Doggo />
      </Ecctrl>


      {/* Obstacles */}

      <RigidBody type="fixed"  >
        <mesh position={[0, .1, 0]} receiveShadow>
          <boxGeometry args={[2, 1, 10]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </RigidBody>


      {/* STAGE */}

      <RigidBody type="fixed"  position-y={-0.5}>
        <mesh receiveShadow>
          <boxGeometry args={[20, 0.2, 10]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Experience;
