import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

function Ground() {
  const snowTexture = useLoader(
    TextureLoader,
    "./textures/snow/snow_01_diff_1k.jpg"
  );

  
  const repeatNum = 1

  snowTexture.wrapS = RepeatWrapping;
  snowTexture.wrapT = RepeatWrapping;
  snowTexture.repeat.set(repeatNum, repeatNum);
  // snowTexture.rotation = 96


  const displacementMap = useLoader(TextureLoader, './textures/snow/snow_01_disp_1k.png');
  // const normalMap = useLoader(TextureLoader, './textures/snow/snow_01_nor_gl_1k.exr');
  // const roughnessMap = useLoader(TextureLoader, './textures/snow/snow_01_rough_1k.exr');
 
  displacementMap.wrapS = RepeatWrapping;
  displacementMap.wrapT = RepeatWrapping;
  displacementMap.repeat.set(repeatNum, repeatNum);

  // normalMap.wrapS = RepeatWrapping;
  // normalMap.wrapT = RepeatWrapping;
  // normalMap.repeat.set(repeatNum, repeatNum);
  
  // roughnessMap.wrapS = RepeatWrapping;
  // roughnessMap.wrapT = RepeatWrapping;
  // roughnessMap.repeat.set(repeatNum, repeatNum);

  return (
    <>
      <RigidBody type="fixed" colliders="trimesh" position-y={-0.5}>
        <mesh receiveShadow>
          <boxGeometry args={[50, 0.1, 50, 100, 1, 100]}   />
          <meshStandardMaterial
          // color="#898989"
            map={snowTexture}
            displacementMap={displacementMap}
            displacementScale={.2}
          />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Ground;
