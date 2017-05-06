  function createBoard() {
    let abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = [];
    for (let i = 0 ; i < 6; i++){
      let baris = [];
      for (let j = 0; j < 6; j++){
        baris.push(abjad[Math.floor(Math.random()*25)])
      }
      result.push(baris);
    }
    return result;
  }

console.log(createBoard());
