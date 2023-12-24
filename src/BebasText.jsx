import { Text3D } from "@react-three/drei";
function BebasText(props) {
  return (
    <Text3D
      scale={2}
      position={props.position}
      rotation={props.rotation}
      font={"./font/Bebas_Neue_Regular.json"}
    >
      {props.text}
      <meshBasicMaterial color={props.color} />
    </Text3D>
  );
}

export default BebasText;
