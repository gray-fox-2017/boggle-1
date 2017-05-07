class BoggleBoard {
  constructor() {
    this.init();
    this._line = '\n==============';
  }
  init() {
    this._words = [];
    this.shake();
  }
  shake() {

    for (let h = 0; h < 4; h++){
      let baris = [];
      for (let i = 0; i < 4; i++) {
        let num = Math.floor( (Math.random() * 26) +97);
        baris.push(String.fromCharCode(num))
      }
      this._words.push(baris);
    }
  }
  print_board() {
    let board = this._line;
    board += `\n Boggle Board`;
    board += `${this._line}`;
    this._words.forEach( (x) =>{
      board += `\n|${x.join(' |')} |`;
    });
    board += `${this._line}`;
    console.log(board);
  }

}


let bb = new BoggleBoard();
bb.print_board();
