import { useMemo } from "react";
import { Doggo } from "./characters/Doggo";
import Lighting from "./Lighting";
import Collectibles from './GameComponents/Collectibles'

import { Box } from "@react-three/drei";
import { useControls } from "leva";

import World from './World'

function Experience() {
  const options = useMemo(() => {
    return {
      x: { value: 0, step: 0.01 },
      y: { value: 0, step: 0.01 },
      z: { value: 0, step: 0.01 },
    };
  }, []);

  // const boxPosition = useControls("box position", options);
  // const pos = {x: boxPosition.x, y: boxPosition.y, z: boxPosition.z}
  // const pos = [boxPosition.x, boxPosition.y, boxPosition.z]
  const pos = [59.2, 5.08, 44.79];

  return (
    <>
      <Lighting />
      <Collectibles />
      <World />
      {/* <Box position={pos} /> */}
      <Doggo />
    </>
  );
}

export default Experience;
