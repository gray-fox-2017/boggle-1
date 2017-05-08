class Board {
  constructor(input) {
    this.input = input;
  }

  generate() {
    let defaultBoard = [];
    let alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < this.input; i++) {
      defaultBoard.push([]);
      for (var j = 0; j < this.input; j++) {
        defaultBoard[i].push(alphabeth.charAt(Math.floor(Math.random()*26)))
      }
    }
    return defaultBoard;
  }
}

let board = new Board(7);

console.log(board.generate());