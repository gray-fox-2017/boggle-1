'use strict'

class BoogleBoard {
  constructor() {

  }

	shake(number) {
		let board = [];

		for (let i = 0; i < number; i++) {
      board[i] = [];
      for (let j = 0; j < number; j++) {
        board[i].push(String.fromCodePoint(Math.floor(Math.random() * 26) + 65));
      }
		}

		console.log(board);
  }
}

let play = new BoogleBoard();

play.shake(6);
