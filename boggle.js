"use strict"

class Boggle {
  constructor() {
  }

  shake(number) {
    let board = [];

    for(let i = 0; i < number; i++) {
      board[i] = [];
      for(let j = 0; j < number; j++) {
        board[i][j] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
    }
    return board;
  }
}

let boggle = new Boggle();

console.log(boggle.shake(4));
