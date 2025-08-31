import Phaser from "phaser";
import { PhaserGame } from "./PhaserGame";
import { useRef, useState } from "react";

function App() {
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef();

  const changeScene = () => {
    const scene = phaserRef.current.scene;

    if (scene) {
      scene.changeScene();
    }
  };

  return (
    <div id="app">
      <PhaserGame ref={phaserRef} currentActiveScene={null} />
      <div>
        <button className="button" onClick={changeScene}>
          Change Scene
        </button>
      </div>
    </div>
  );
}

export default App;
