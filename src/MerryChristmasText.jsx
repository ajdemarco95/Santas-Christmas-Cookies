import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
function MerryChristmasText() {
  return (
    <RigidBody colliders="hull">
    <Text3D
      scale={2}
      position={[10, -8.9, 20]}
      rotation={[0, Math.PI * .9, 0]}
      font={"./font/Bebas_Neue_Regular.json"}
    >
      Merry Christmas!
      <meshBasicMaterial color={"black"} />
    </Text3D>

     </RigidBody>
  );
}

export default MerryChristmasText;
