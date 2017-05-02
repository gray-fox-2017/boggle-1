"use strict"

class Boggle {
  constructor(number) {
    this.number = number;
  }

  shake() {
    let board = [];

    for(let i = 0; i < this.number; i++) {
      board[i] = [];
      for(let j = 0; j < this.number; j++) {
        board[i][j] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
    }
    return board;
  }
}

let boggle = new Boggle(4);

console.log(boggle.shake());
