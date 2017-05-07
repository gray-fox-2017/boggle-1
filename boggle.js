class BoggleBoard {
  constructor() {
    this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.arr = [];
  }

  shake(size, size2=4){
    for (var i = 0; i < size; i++) {
      this.arr.push([]);
    }
    for (var j = 0; j < size; j++) {
      for (var k = 0; k < size2; k++) {
        let index = Math.floor(Math.random() * this.alphabet.length);
        this.arr[j].push(this.alphabet[index]);
      }
    }
    return this.arr;
  }
}

var boggle = new BoggleBoard();
console.log(boggle.shake(4));
