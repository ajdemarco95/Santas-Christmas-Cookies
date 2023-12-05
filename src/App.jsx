import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import "./App.css";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
      <color attach={"background"} args={["#ececec"]} />
      <Physics debug>
        <Experience />
      </Physics>
    </Canvas>
  );
}

export default App;
