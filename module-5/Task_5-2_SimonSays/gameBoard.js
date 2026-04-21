"use strict";
import { TPoint, TCircle } from "lib2d";
import { TSprite, TSpriteButton, TSpriteNumber, ESpriteNumberJustifyType } from "libSprite";
import { TColorButton } from "./colorButton.js";
import {activateAudioContext} from "libSound";
import { spawnColorButton, resetGame} from "./SimonSays.mjs";

export class TGameBoard extends TSprite {
  #colorButtons; //private
  #gameInfo;
  #isSoundEnabled;
  #spFinalScore;
  
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI.Background, 0, 0);
    const center = new TPoint(aSPI.Background.width / 2, aSPI.Background.height / 2);

    this.#colorButtons = [
      //public
      new TColorButton(aSpcvs, aSPI.ButtonRed, center),
      new TColorButton(aSpcvs, aSPI.ButtonGreen, center),
      new TColorButton(aSpcvs, aSPI.ButtonBlue, center),
      new TColorButton(aSpcvs, aSPI.ButtonYellow, center)
    ];
    let posX = center.x - aSPI.ButtonStartEnd.width / 2;
    let posY = center.y - aSPI.ButtonStartEnd.height / 2;
    this.#gameInfo = new TSpriteButton(aSpcvs, aSPI.ButtonStartEnd, posX, posY, TCircle);
    this.#gameInfo.onClick = this.#gameInfoClicked.bind(this);
    this.#disableColorButtons(true);
    this.#isSoundEnabled = false;
    this.spRound = new TSpriteNumber(aSpcvs, aSPI.number, 400, 385);
    this.spRound.visible = false;
    this.spRound.justify = ESpriteNumberJustifyType.Right;
    this.spRound.value = 0;
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.number, 400, 440);
    this.#spFinalScore.justify = ESpriteNumberJustifyType.center;
    this.#spFinalScore.visible = false;

  }


  get colorButtons (){//dette er en get-er, den henter info, lager ikke info så trenger ikke parametere
        return this.#colorButtons;
    }

gameOver(){
    this.#disableColorButtons(true);
    this.spRound.visible = false;
    this.#gameInfo.index = 1;
    this.#gameInfo.hidden = false;
    this.#gameInfo.disabled = false;
    this.#spFinalScore.value = this.spRound.value;
    this.#spFinalScore.visible = true; 
    
}


  draw() {
    super.draw();
    for (let i = 0; i < this.#colorButtons.length; i++) {
      const colorButton = this.#colorButtons[i];
      colorButton.draw();
    }
    this.#gameInfo.draw();
    this.spRound.draw();
    this.#spFinalScore.draw();
  }
  #disableColorButtons(aDisable) {
    for (let i = 0; i < this.#colorButtons.length; i++) {
      const colorButton = this.#colorButtons[i];
      colorButton.disabled = aDisable;
    }
  }
  #gameInfoClicked() {
    this.spRound.visible = true;
    this.#gameInfo.disabled = true;
    this.#gameInfo.hidden = true;
    this.#disableColorButtons(false);
    if(this.#isSoundEnabled === false){
        activateAudioContext();
        this.#isSoundEnabled = true;
        for (let i = 0; i < this.#colorButtons.length; i++) {
            const colorButton = this.#colorButtons[i];
            colorButton.createSound(i);
    }
  }
  this.#spFinalScore.visible = false;
  resetGame();
  spawnColorButton();
}
}


//computer start pressing buttons after i click the first one every time instead of waiting for me to finish the sequence because the game is not properly tracking the player's input and the computer's turn. i can fix this by 