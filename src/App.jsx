import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, Stars, Sky, Environment } from "@react-three/drei";
import "./App.css";
import { Perf } from "r3f-perf";

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
          <Environment files={"./hdri/night-sky.hdr"} background />
          <fog attach="fog" color="black" near={3} far={25} />
          <Physics debug>
            <Experience />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
