

function shake(num) {
  if (num < 4) {
    return 'Error'
  }
  var barisan = []
  var jumlah = num * num;
  var alphabet = "SENINSELASARABUKAMISJUMATSABTUMINGGUAIUEOABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i<jumlah;i++) {
    barisan.push(alphabet.charAt(Math.floor(Math.random()* alphabet.length)))
  }
  var papan = [];
  for (let i=0;i<jumlah;i+=num) {
    papan.push(barisan.slice(i,num+i));
  }
  return papan.map(x=> x.join(' ')).join('\n')

}

console.log(shake(4));