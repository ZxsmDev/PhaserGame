import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.image("smoke", "assets/smoke0.png");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    // this.add
    //   .image(window.innerWidth / 2, window.innerHeight / 2, "background")
    //   .setScale(2);

    const emitter = this.add.particles(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "smoke",
      {
        alpha: { start: 1, end: 0 },
        speed: { min: 100, max: 200 },
        lifespan: 3000,
        quantity: 1,
      }
    );

    // Add a threshold filter to the emitter.
    // emitter.enableFilters().focusFiltersOverride(640, 360, 1280, 720);
    // emitter.filters.internal.addThreshold(0.5);

    EventBus.emit("current-scene-ready", this);
  }

  changeScene() {
    this.scene.start("GameOver");
  }
}