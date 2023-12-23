import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense, useState, useEffect } from "react";
import { Physics } from "@react-three/rapier";
import {
  KeyboardControls,
  Stars,
  Sky,
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import UI from "./UI";
import Menu from './Menu'
import useGame from "./store/useGame";
import useSound from 'use-sound'

function App() {
  const [appState, setAppState] = useState("menu");

  const restart = useGame((state) => state.restart)

  const [loopBg, loopBgOpt] = useSound('./audio/wind.mp3', {loop: true, volume: 0.05})


  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      restart()
      setAppState("menu")
    }
  };


  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [])

  useEffect(() => {
    loopBgOpt.stop()

  }, [appState])
  
  

  if (appState === "running") {
    return (
      <>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "backward", keys: ["ArrowDown", "KeyS"] },
            { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
            { name: "rightward", keys: ["ArrowRight", "KeyD"] },
            { name: "jump", keys: ["Space"] },
            { name: "run", keys: ["Shift"] },
          ]}
        >
          <UI loopBg={loopBg} setAppState={setAppState}/>
          <Canvas
            shadows
            camera={{ position: [4, 2, 4], fov: 45, near: 0.1, far: 200 }}
          >
            {/* <Perf /> */}
            <Environment files={"./hdri/night-sky.hdr"} background />
            <OrbitControls />
            <Sky />
            <fog attach="fog" color="white" near={10} far={90} />
            <Suspense>
              <Physics >
                <Experience />
                <Preload all />
              </Physics>
            </Suspense>
          </Canvas>
        </KeyboardControls>
      </>
    );
  }  else {
    // loopBgOpt.pause();
    return (<Menu appState={appState} setAppState={setAppState}/>)
  }

}

export default App;
