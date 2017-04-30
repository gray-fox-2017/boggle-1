class BoggleBoard {
  constructor() {

  }
  shake(number) {

    let arrBoard = [];
    let huruf = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y" ,"Z"];
    for (let i=0; i<number; i++) {
      arrBoard.push([]);
      for (let j=0;j<number;j++) {
        arrBoard[i].push(huruf[ Math.floor(Math.random() * huruf.length)]);
      }
    }
    return arrBoard;
  }
}

let boggle = new BoggleBoard();
let bogglenew = boggle.shake(4);
console.log(bogglenew);
