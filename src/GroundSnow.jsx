import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

function GroundSnow() {

    const snowTexture = useLoader(
        TextureLoader,
        "./textures/Snow_03/Snow_03_1K-JPG_Color.jpg"
      );
      snowTexture.wrapS = RepeatWrapping;
      snowTexture.wrapT = RepeatWrapping;
      snowTexture.repeat.set(15, 15);
    //   snowTexture.rotation = 96

    //   const colorMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03-1k-JPG_');
      const displacementMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03_1K-JPG_Displacement.jpg');
      const normalMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03_1K-JPG_NormalGL.jpg');
      const roughnessMap = useLoader(TextureLoader, './textures/Snow_03/Snow_03_1K-JPG_Displacement.jpg');
     

      console.log(snowTexture)

  return (
    <>
    <RigidBody type="fixed" position-y={-0.5}>
      <mesh receiveShadow>
        <boxGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial
        // color="#898989"
          map={snowTexture}
          displacementMap={displacementMap}
          displacementScale={.2} // Adjust based on your needs
          normalMap={normalMap}
          metalness={.14}
          roughnessMap={roughnessMap}    
        />
      </mesh>
    </RigidBody>
  </>
  )
}

export default GroundSnow