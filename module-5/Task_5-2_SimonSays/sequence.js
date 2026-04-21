"use strict";

import {EGameStatusType, spawnColorButton, gameOver, updateRound} from "./SimonSays.mjs";


let colorButton = null;
let sequence = [];
let round = 0; //runder når du klarer å mimicke
let seqIndex = 0;


export function addRandomButton(aColorButtons){
const index = Math.floor(Math.random() * aColorButtons.length);
colorButton = aColorButtons[index]; //generer at en random knapp trykker
sequence.push(colorButton); //kan spawne flere og flere
//reset sekvens telleren vår for at index skal vise alle knappene om igjen 
seqIndex = 0;
colorButton = sequence[0];
setTimeout(setButtonDown, 500); //this is the wait time before seq. start
}

//test of user input
export function testOfUserInput(aColorButton){
    if(aColorButton === colorButton){ //acolorbutton = det du velger, colorbutton = det maskina velger?
        console.log("correct");
        seqIndex++;
        if(seqIndex < sequence.length){ //we have not reached the end og sequence
            colorButton = sequence[seqIndex];
        }else { //we have reached the end of sequence
            round++;
            updateRound(round);
            spawnColorButton();
        }
    }else{
        gameOver();
    }
}


export function resetSequence (){
sequence = [];
round = 0;
seqIndex = 0;
}


function setButtonDown(){
    colorButton.onMouseDown();
setTimeout(setButtonUp, 500);
}

function setButtonUp(){
    colorButton.onMouseUp(); 
    seqIndex++;
    if(seqIndex < sequence.length){
        colorButton = sequence[seqIndex];
        setTimeout(setButtonDown, 500);
    }else{
    EGameStatusType.state = EGameStatusType.PersonPlaying;
    seqIndex = 0;
    colorButton = sequence[0];
}
}

//what do i have to do to make computer wait for me to finish my sequence before he starts the next one
// I need to change the game state to PersonPlaying after the user has completed their sequence
//this i do in setButtonUp in sequence.js
//i write this where and how
// EGameStatusType.state = EGameStatusType.PersonPlaying;
// but i already have this sentence. why does it still not work?
// I need to ensure that the game state is only changed after the user has completed their sequence
