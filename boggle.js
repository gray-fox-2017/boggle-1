'use strict'

class BoggleBoard {
  constructor() {
  }

  shake(n) {
    let board = [];
    for (let i=0; i<n; i++) {
      board [i] = [];
      for (let j=0; j<n; j++) {
        board[i][j] = String.fromCharCode(Math.floor(Math.random()*26+65));
      }
    }
    let finalBoard = this.board(board);
    return finalBoard;
  }

  board(board) {
    let printBoard = "";
    let dashLine = "-".repeat(board.length*4+1)
    printBoard += dashLine+"\n";
    for (let i=0; i<board.length;i++){
      printBoard += "| ";
      printBoard += board[i].join(" | ") + " |" + "\n";
      printBoard += dashLine + "\n";
    }
    return printBoard;
  }
}

let boggle = new BoggleBoard();
console.log(boggle.shake(4));
