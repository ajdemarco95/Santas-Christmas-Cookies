import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, Stars, Sky, Environment } from "@react-three/drei";
import "./App.css";
import { Perf } from 'r3f-perf'


function App() {
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas
          shadows
          camera={{ position: [4, 2, 4], fov: 45, near: 0.1, far: 200 }}
        >
  <Perf />
          <Environment files={"./hdri/night-sky.hdr"} background/>
          {/* <Sky
            turbidity={0}
            rayleigh={0.005}
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={1}
            azimuth={1}
          /> */}

          <fog attach="fog" color="black" near={3} far={25} />

          <Physics>
            <Experience />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
