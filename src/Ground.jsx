import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

function Ground() {
  const snowTexture = useLoader(
    TextureLoader,
    "./textures/snow/snow_03_diff_1k.jpg"
  );
  snowTexture.wrapS = RepeatWrapping;
  snowTexture.wrapT = RepeatWrapping;
  snowTexture.repeat.set(15, 15);
  snowTexture.rotation = 96
  console.log(snowTexture)

  return (
    <>
      <RigidBody type="fixed" position-y={-0.5}>
        <mesh receiveShadow>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial
          // color="#898989"
            map={snowTexture}
          />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Ground;
