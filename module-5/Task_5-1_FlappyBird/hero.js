"Use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import {TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

//sound effects/music
const fnFood = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite {
  // trenger ikke #spriteHero1 pg av extends.
  #gravity;
  #speed;
  #wave;
  #sfFood;
  #sfHeroIsDead;
  #sfGameOver;
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 100, 20); //super henter fra TSprite. Arv er når man henter fra andre klasser. TSprite er en super klasse fordi den "gir tilgang til alle metoder og egenskaper i TSprite."-Copilot2026
    this.animationSpeed = 17;
    this.#gravity = 9.81 / 100;
    this.#speed = 0;
    this.debug = true;
    this.#wave = new TSineWave(1, 1);
    this.y += this.#wave.value;
    this.#sfFood = null;
    this.#sfHeroIsDead = null; 
    this.#sfGameOver = null;
  }

  eat() {
    if (this.#sfFood === null){
        this.#sfFood = new TSoundFile(fnFood);
    }else{
        this.#sfFood.stop();
    }
    this.#sfFood.play();
    }

  animate() {
    const hasGravity = EGameStatus.state === EGameStatus.gaming || EGameStatus.state === EGameStatus.heroIsDead || EGameStatus === EGameStatus.gameOver;
   
    if (hasGravity) {
      const groundY = 512 - 114;
      if (this.y < groundY - this.height) {
        this.#speed += this.#gravity; //increase speed due to gravity
        this.y += this.#speed; //update position basen on speed
        if (this.rotation < 90) {
          this.rotation = this.#speed * 20; //limit max rotation
        }
      } else {
        this.animationSpeed = 0;
      }
    }else if (EGameStatus.state = EGameStatus.idle){
      const time = Date.now() / 600;
      const amplitude = 80;
      this.y = thisbaseY + Math.sin(time) * amplitude;
    }//end of animate
    }

    dead(){
      if (this.#sfFood) this.#sfFood.stop();

      this.flap();
      this.animationSpeed = 0;

      if(!this.#sfHeroIsDead){
        this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
      }else{
        this.#sfHeroIsDead.stop();
    }
      this.#sfHeroIsDead.play();
  }
  flap() {
    this.#speed = -3.5;
    this.rotation = 0;
  }
  restart() {
    this.y = 100; // Reset to starting position
    this.x = 100; // Reset X position
    this.#speed = 0; // Reset speed
    this.rotation = 0; // Reset rotation
    this.animationSpeed = 20; // Reset animation speed

    // Stop any playing sounds
    if (this.#sfFood) this.#sfFood.stop();
    if (this.#sfHeroIsDead) this.#sfHeroIsDead.stop();
    if (this.#sfGameOver) this.#sfGameOver.stop();
  }
}