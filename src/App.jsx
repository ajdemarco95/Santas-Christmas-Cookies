import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <>
    <KeyboardControls     map={ [
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
    ] }
>
      <Canvas shadows camera={{ position: [4, 2, 4], fov: 42 }}>
        <Physics debug>
          <Experience />
        </Physics>
      </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
