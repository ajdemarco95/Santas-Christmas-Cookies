import {useRef, useEffect} from "react";
import { PositionalAudio } from "@react-three/drei";
import useDog from "./store/useDog";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'
function PositionAudio() {
    const alienZone = useRef();
    const { audioListener } = useThree();

    const dogPosition = useDog((state) => state.dogPosition)


    useFrame(() => {

        const meshPosition = new THREE.Vector3(25.983, -15.24, -27.303);
        const distance = dogPosition.distanceTo(meshPosition);
        const maxDistance = 35; // Define the maximum distance for volume control
        const volume = 1 - Math.min(distance / maxDistance, 1);
        if (alienZone.current) {
            alienZone.current.setVolume(volume * 10);
        }
    })
    

  return (
    <>

      <mesh position={[25.983, -15.24, -27.303]}>
      <PositionalAudio
        url="/audio/alien_zone.wav"
        distance={2}
        loop
        ref={alienZone}
        autoplay
      />

      </mesh>
    </>
  );
}

export default PositionAudio;
