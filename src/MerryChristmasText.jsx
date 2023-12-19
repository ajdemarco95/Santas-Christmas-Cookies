import { Text3D } from "@react-three/drei";

function MerryChristmasText() {
  return (
    <Text3D
        scale={2}
        position={[-35, -2, 5.973]}
        rotation={[-Math.PI, 2, -Math.PI]}
        font={"./font/Bebas_Neue_Regular.json"}
      >
        Merry Christmas
        <meshBasicMaterial color={"black"} />
      </Text3D>
  )
}

export default MerryChristmasText