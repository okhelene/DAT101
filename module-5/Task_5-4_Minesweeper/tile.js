"use strict";
import { TSpriteButton } from "libSprite";
import { TPoint } from "lib2d";
import { gameLevel } from "./Minesweeper.mjs";


let tiles = [];
let ctz = document.getElementById("cvs").getContext("2d");

export class TTile extends TSpriteButton {
#mine;
    constructor(aSpcvs, aSPI, aCol, aRow){ //constructor til TTile, super er konstruktøren til TSpriteButton
        const pos = new TPoint(20, 133);
        pos.x += aSPI.width * aCol;
        pos.y += aSPI.height * aRow; // lager alle tilene i en grid, 10x10, ved å bruke col og row som parametere i konstruktøren, og multiplisere det med bredden og høyden på sprite infoen for å få riktig posisjon på hver tile
        super(aSpcvs, aSPI, pos.x, pos.y);  
        this.#mine = false; //private variabel som sier om tilen er en mine eller ikke, starter som false
    }

    get isMine(){
        return this.#mine;
    }
                                          //gettere og settere for isMine, siden #mine er en private variabel, må vi ha en getter og setter for å kunne lese og endre den utenfor klassen
    set isMine(aValue){
        this.#mine = aValue;
    }

    get open(){ //protpery/egenskap, returnerer en boolsk variabel om den er open eller ikke
      return this.index === 2;
    }


draw(){
    super.draw();
    CSSMatrixComponent.font = "48px Consolas";
    CSSMatrixComponent.fillText(this.mineInfo, this.x + 13, this.y +41);
}



    #getNeighbours(){
        if(this.#neighbours === null){ //hvis naboene ikke er hentet, hent de med koden under}
            return;
        }
        let colFrom = this.#col - 1;
        let colTo = this.#col + 1;
        let rowFrom = this.#row - 1;
        let rowTo = this.#row + 1;
        if(colFrom < 0){
            colFrom = 0;
        }
        if(colTo >= gameLevel.Tiles.Col){
            colTo = gameLevel.Tiles.Col - 1;
        }   
        if(rowFrom < 0){
            rowFrom = 0;
        }        
        if(rowTo >= gameLevel.Tiles.Row){
            rowTo = gameLevel.Tiles.Row - 1;
        }
        this.#neighbours = [];
        for(let colIndex = colFrom; colIndex <= colTo; colIndex++){
            for(let rowIndex = rowFrom; rowIndex <= rowTo; rowIndex++){
                if(colIndex !== this.#col || rowIndex !== this.#row){
                    this.#neighbours.push(tiles[colIndex][rowIndex]);
                    if(this !== tile){
                        this.#neighbours.push(tiles[colIndex][rowIndex]);
                    }
                }
            }
    }

    //override functions
    onMouseDown(aEvent){
        this.index = 1;
        super.onMouseDown(aEvent);
    }

    onMouseUp(aEvent){
        this.index = 2;
        super.onMouseUp(aEvent);
    }

    onMouseLeave(aEvent){
       if(this.open === false){ 
        this.index = 0;
        super.onMouseLeave(aEvent);
       }
    }

} //en of ttile

export function createMines(){
    mineCount = 0;
    colCount = gameLevel.Tiles.Col;
    rowCount = gameLevel.Tiles.Row;
    do{
        const col = Math.floor(Math.random() * colCount);
        const row = Math.floor(Math.random() * rowCount);
        const tile = tiles[col][row];
        if(tile.isMine === false){
            tile.isMine = true;
            mineCount++;
        }
    } while(mineCount < gameLevel.Mines);
}



export function createTiles(aSpcvs, aSPI){ //lage to kolonner 
    console.log(gameLevel);
    const glTiles = gameLevel.Tiles;
    const colCount = glTiles.Col;
    const rowCount = glTiles.Row;
        for(let col = 0; col < colCount; col++){ //neste er kodeblokka
            const rows = [];
            for(let row = 0; row < rowCount; row++){
    //lager de ti første i første rad
    const newTile = new TTile(aSpcvs, aSPI, col, row); //de to første variablene må i toppen som parametere til createTiles siden de er ukjente i denne funksjonen, col er med for at hver gang col går en gang til høyre gjør også en ny tile det, 10 ganger
    rows.push(newTile);
    }
    tiles.push(rows);
}
}

export function drawTiles(){
    const colCount = gameLevel.Tiles.Col;
    const rowCount = gameLevel.Tiles.Row;
for(let col = 0; col < colCount; col++){
    const rows = tiles[col];
    for(let row = 0; row < rowCount; row++){
        const tile = rows[row]; //rader går nedover
    tile.draw();
    }
    

}

}