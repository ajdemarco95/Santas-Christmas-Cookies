import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import "./App.css";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 4], fov: 42 }}>
        <Physics debug>
          <Experience />
        </Physics>
      </Canvas>

    </>
  );
}

export default App;
