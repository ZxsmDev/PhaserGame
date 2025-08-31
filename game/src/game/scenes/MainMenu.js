import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class MainMenu extends Scene {
  logoTween;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, "background").setScale(2);

    this.logo = this.add
      .image(window.innerWidth / 2, window.innerHeight / 2, "logo")
      .setDepth(100);

    this.add
      .text(window.innerWidth / 2, window.innerHeight / 2 + 75, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setDepth(100)
      .setOrigin(0.5);

    EventBus.emit("current-scene-ready", this);
  }

  changeScene() {
    if (this.logoTween) {
      this.logoTween.stop();
      this.logoTween = null;
    }

    this.scene.start("Game");
  }
}
