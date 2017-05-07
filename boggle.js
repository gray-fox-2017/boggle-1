class Boggle{
  constructor(matriks){
    this._matriks = matriks;
  }

  acak(){

        let board=[];
        let random=[];
        let huruf=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        for(let i=0; i<Math.pow(this._matriks,2);i++)
            {
              let index=Math.floor(Math.random()*huruf.length);
              random.push(huruf[index]);
            }
        for(let i=0; i<this._matriks;i++)
        board.push(random.slice(i,i+this._matriks));

        return board;
        }
}

let game = new Boggle(3);
console.log(game.acak());
