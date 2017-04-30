'use strict'

class Boggle{

  constructor(num, alphabet) {
    this.length = num;
    this.content = this.shake(alphabet);
  }

  shake(str) {
    let board = [];
    for (let i = 0; i < this.length ; i++){
      let arr = [];
      board.push(arr);
      for(let j = 0 ; j < this.length ; j++) {
        let random = Math.floor(Math.random()*str.length)
        board[i].push(str[random]);
      }
    }
    return board;
  }

  board() {
      let str = "+++++++++++++++\n";
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (j == 3) {
            str += this.content[i][j] + " + ";
          } else if (j == 0 || j == 1 || j == 2) {
            str += this.content[i][j] + " | ";
          } else {
            str += this.content[i][j] + " ";
          }
        }

        if (i == 0 | i == 1 | i == 2 | i == 3) {
          str += "\n+++++++++++++++\n";
        } 
      }
      return str;
    }

}

let boggle = new Boggle(4, 'ABCDEFGHIJKLMNOPQRSTUPWXYZ');

// boggle.shake();
console.log(boggle.board());
// console.log(boggle.content);
