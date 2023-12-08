import { OrbitControls, Environment, Sky, Stars } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Doggo } from "./Doggo";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Lighting from "./Lighting";
import Ground from "./Ground";
function Experience() {
  return (
    <>
      {/* <Environment preset="night" background blur={0.15} />
       */}

       <Lighting />
      <Doggo />
      <Ground />
      


      {/* <RigidBody type="fixed" position-y={-0.5}>
        <mesh receiveShadow>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial color={"black"} />
        </mesh>
      </RigidBody> */}
    </>
  );
}

export default Experience;
