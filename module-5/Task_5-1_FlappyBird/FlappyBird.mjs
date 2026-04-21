"use strict";
// Import necessary modules
import { TSpriteCanvas } from "libSprite";
import { TBackground } from "./background.js";
import { THero } from "./hero.js";
import { TObstacle } from "./obstacle.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";

//--------------- Objects and Variables ----------------------------------//
export const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);

// prettier-ignore
const SpriteInfoList = {
  hero1:        { x: 0   , y: 545 , width: 34   , height: 24  , count: 4  },
  hero2:        { x: 0   , y: 569 , width: 34   , height: 24  , count: 4  },
  hero3:        { x: 0   , y: 593 , width: 34   , height: 24  , count: 4  },
  obstacle:     { x: 0   , y: 0   , width: 52   , height: 320 , count: 4  },
  background:   { x: 246 , y: 0   , width: 576  , height: 512 , count: 2  },
  flappyBird:   { x: 0   , y: 330 , width: 178  , height: 50  , count: 1  },
  ground:       { x: 246 , y: 512 , width: 1152 , height: 114 , count: 1  },
  numberSmall:  { x: 681 , y: 635 , width: 14   , height: 20  , count: 10 },
  numberBig:    { x: 422 , y: 635 , width: 24   , height: 36  , count: 10 },
  buttonPlay:   { x: 1183, y: 635 , width: 104  , height: 58  , count: 1  },
  gameOver:     { x: 0   , y: 384 , width: 226  , height: 114 , count: 1  },
  infoText:     { x: 0   , y: 630 , width: 200  , height: 55  , count: 2  },
  food:         { x: 0   , y: 696 , width: 70   , height: 65  , count: 34 },
  medal:        { x: 985 , y: 635 , width: 44   , height: 44  , count: 4  },
};

export const EGameStatus = { idle: 0, countDown: 1,  gaming: 2, heroIsDead: 3, gameOver: 4, state: 0 };
const background = new TBackground(spcvs, SpriteInfoList);
export const hero = new THero(spcvs, SpriteInfoList.hero3);
export const obstacles = [];
export const baits = [];
//export const menu = new TMenu(spcvs, SpriteInfoList);
let obstaclePassed = false;

//--------------- Functions ----------------------------------------------//

export function restartGame() {
  heroRestart();
  EGameStatus.state === EGameStatus.idle;
}

export function startGame(){
  EGameStatus.state = EGameStatus.gaming;
  menu.resetScore();
  menu.showScore();
    setTimeout(spawnObstacle, 1000);
    setTimeout(spawnBait, 1000); // etter 1 sek spawner en sommerfugl

}


function spawnBait() {
  if (EGameStatus.state === EGameStatus.gaming) {
    const bait = new TBait(spcvs, SpriteInfoList.food);
    baits.push(bait);
    const nextTime = Math.ceil(Math.random() * 3) + 1;
    setTimeout(spawnBait, nextTime * 1000);
  }
}

function spawnObstacle() {
  if (EGameStatus.state === EGameStatus.gaming) {
    const obstacle = new TObstacle(spcvs, SpriteInfoList.obstacle);
    obstacles.push(obstacle);
    const nextTime = Math.ceil(Math.random() * 3) + 1;
    console.log(`Next obstacle in ${nextTime} seconds`);
    setTimeout(spawnObstacle, nextTime * 1000);
  }
}

function isColliding(a, b){
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function animateGame() {
  hero.animate();
  if (EGameStatus.state !== EGameStatus.gaming) return;
  let eaten = -1; //i tabell kan det ikke være - tall, derfor har du spist -1 nå du ikke har spist noe ennå
  for (let i = 0; i < baits.length; i++) {
    const bait = baits[i];
    bait.animate();
    if (bait.distanceTo(hero.center) < 20) {
      eaten = i;
    }
  }
  if (eaten >= 0) {
    console.log("Eaten!");
    baits.splice(eaten, 1);
    hero.eat();
  }

  if (EGameStatus.state === EGameStatus.gaming) {
    background.animate();
    let deleteObstacle = false;
    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];
      obstacle.animate();

      if(!obstacle.passed && obstacle.x + obstacle.width < hero.x){
        obstacle.passed = true;
        menu.incGameScore(1);
      }

      if (isColliding(hero, obstacle.getUpSprite()) || isColliding(hero, obstacle.getDownSprite())) {
        onHeroDeath();
        return;
      }

      if (obstacle.x < -50) {
            obstacles.splice(i, 1);
        i--;
      }
    }

    if (hero.y + hero.height >= cvs.height - SpriteInfoList.ground.height) {
      onHeroDeath();
      return;
    }
  }
}

function onHeroDeath() {
  if (EGameStatus.state !== EGameStatus.gaming) return;

  EGameStatus.state = EGameStatus.heroIsDead;
  hero.dead();

  console.log("HERO DIED");

  setTimeout(() => {
    EGameStatus.state = EGameStatus.gameOver;
    menu.showGameOver();
  }, 1000);
}
        //deleteObstacle = true;
        //obstaclePassed = false;
      //}else if((obstacle.x + obstacle.width) < hero.x){
        //if(!obstaclePassed){
          //menu.incGameScore(1);
          //obstaclePassed = true;
        //}
      //}
    //}
    //if (deleteObstacle) {
      //obstacles.splice(0, 1);
    //}

function drawGame() {
  background.drawBackground();
  hero.draw();
  for (let i = 0; i < baits.length; i++) {
    const bait = baits[i];
    bait.draw();
  }
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    obstacle.draw();
  }
  background.drawGround();
  menu.draw(EGameStatus.state);
}

export let menu;

function loadGame(spriteImage) {
  console.log("Game Loaded");
  
  for(let key in SpriteInfoList){
    SpriteInfoList[key].img = spriteImage;
  }
  // Set canvas size to background size
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  menu = new TMenu(spcvs, SpriteInfoList);

  // Overload the spcvs draw function here!
  spcvs.onDraw = drawGame;

  EGameStatus.state = EGameStatus.idle;

  //start animate engine
  setInterval(animateGame, 10);

} // end of loadGame

function onKeyDown(aEvent) {
  switch (aEvent.code) {
    case "Space":
      console.log("Space key pressed, flap the hero!");
      if (EGameStatus.state !== EGameStatus.heroIsDead) {
        hero.flap();
      }
      break;
  }
} // end of onKeyDown

function setSoundOnOff() {
    const isMuted = chkMuteSound.checked;
    menu.setSoundMute(isMuted);
  //Mute or unmute the game sound based on checkbox
} // end of setSoundOnOff

function setDayNight(aEvent) {
  const isNight = aEvent.target.value == 0;
  background.setDayNight(isNight);

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].setDayNight(isNight);
  }
  // Set day or night mode based on radio buttons
  // Day mode is when value is 1, night mode is 0, you can use this as a boolean, 1=true, 0=false
  // e.g., isDayMode = (aEvent.target.value == 1);
  console.log(`Day/Night mode changed: ${aEvent.target.value}`);
} // end of setDayNight

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[1].addEventListener("change", setDayNight);

// Load the sprite sheet
spcvs.loadSpriteImage("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);
