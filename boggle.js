'use strict'

class boogleBoard{
  constructor(num){
    this.num = num;


  }

  shake(){
    let box = [];
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i=0; i<this.num; i++){
      box.push([]);
      for (let j=0; j<this.num; j++){
        box[i].push(huruf.charAt(Math.floor(Math.random()*26)));
      }
    }

    console.log(box)
  }
}

let board = new boogleBoard(5);

board.shake();
