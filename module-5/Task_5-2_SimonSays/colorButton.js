"use strict";

import { TSpriteButton } from "libSprite";
import {EOctave, ENoteName, Notes, TSoundWave } from "libSound";
import { testOfUserInput } from "./sequence.js";
import { EGameStatusType } from "./SimonSays.mjs";


export class TColorButton extends TSpriteButton {
    #dst; //lag privat variabel for å kunne bruke den lenger nede
    #gameBoardCenter;
    #sound;
  constructor(aSpcvs, aSPI, aGameBoardCenter) {
    super(aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y);
    this.#dst = aSPI.dst; //setter privat variabel lik aSPI
    this.#gameBoardCenter = aGameBoardCenter;
    this.#sound = null;
  }


  isMouseOver(aMousePos){ //finn ut om muse-tasten er over en knapp
    const isOver = super.isMouseOver(aMousePos);
    if(isOver){
        const dx = this.#gameBoardCenter.x - aMousePos.x; //spi (destination) sx = x destination of spi
        const dy = this.#gameBoardCenter.y - aMousePos.y; 
        let hyp = Math.pow(dx, 2) + Math.pow(dy, 2); //bruker pythagoras til å finne hypotenus
        hyp = Math.sqrt(hyp);
        let inside = hyp > this.#dst.r1 && hyp < this.#dst.r2;
        if(inside){
            return true;
        }else{
            return false;
        }
        }
    }

    onMouseDown(){ //no need to call on super
        this.index = 1; //change to pressed state
        if(this.#sound){
            this.#sound.play();
        }
    
    }

    onMouseLeave(aEvent){ //når du trykker men drar musa av klappen slutter den å trykke og spille lyd
        super.onMouseLeave(aEvent);
        this.index = 0;
        if(this.#sound){
            this.#sound.stop();
        }
}


    onMouseUp(){
        this.index = 0;
        if(this.#sound){
            this.#sound.stop();
        }
       if(EGameStatusType.state === EGameStatusType.PersonPlaying){
           testOfUserInput(this);
       }
    }

    createSound(aIndex){
        let note = ENoteName.C;
            switch(aIndex){
                case 1:
                    note = ENoteName.D;
                    break;
                case 2:
                    note = ENoteName.E;
                    break;
                case 3:
                    note = ENoteName.F;
                    break;
                case 4:
                    note = ENoteName.G;
                    break;
            }
            this.#sound = new TSoundWave(EOctave.Octave5, note);
        }
        //if i want a new sound per color button, i have to write 
    }
    //console.log viser når du printer ut hvor hitboxer er

     

  
