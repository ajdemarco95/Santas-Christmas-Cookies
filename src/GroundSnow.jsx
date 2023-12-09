import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

function GroundSnow() {

    const snowTexture = useLoader(
        TextureLoader,
        "./textures/Snow_03/Snow_03_1K-JPG_Color.jpg"
      );

      const repeatNum = 2

      snowTexture.wrapS = RepeatWrapping;
      snowTexture.wrapT = RepeatWrapping;
      snowTexture.repeat.set(repeatNum, repeatNum);
    //   snowTexture.rotation = 96

    //   const colorMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03-1k-JPG_');
      const displacementMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03_1K-JPG_Displacement.jpg');
      const normalMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03_1K-JPG_NormalGL.jpg');
      const roughnessMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03_1K-JPG_Displacement.jpg');
     
      displacementMap.wrapS = RepeatWrapping;
      displacementMap.wrapT = RepeatWrapping;
      displacementMap.repeat.set(repeatNum, repeatNum);

      normalMap.wrapS = RepeatWrapping;
      normalMap.wrapT = RepeatWrapping;
      normalMap.repeat.set(repeatNum, repeatNum);
      
      roughnessMap.wrapS = RepeatWrapping;
      roughnessMap.wrapT = RepeatWrapping;
      roughnessMap.repeat.set(repeatNum, repeatNum);


  return (
    <>
    <RigidBody type="fixed" position-y={-0.5}>
      <mesh receiveShadow>
        <boxGeometry args={[50, 0.1, 50, 100, 1, 100]}  />
        <meshStandardMaterial
        // color="#898989"
          map={snowTexture}
          displacementMap={displacementMap}
          displacementScale={.1} // Adjust based on your needs
          normalMap={normalMap}
          normalScale={2.52}
          metalness={.14}
          roughnessMap={roughnessMap}    
          roughness={2}
        />
      </mesh>
    </RigidBody>
  </>
  )
}

export default GroundSnow