import { Text3D } from "@react-three/drei";

function MerryChristmasText() {
  return (
    <Text3D
      scale={2}
      position={[0, -2, 50]}
      rotation={[0, Math.PI, 0]}
      font={"./font/Bebas_Neue_Regular.json"}
    >
      Merry Christmas
      <meshBasicMaterial color={"black"} />
    </Text3D>
  );
}

export default MerryChristmasText;
