'use strict'

class BoogleBoard{
  constructor(){

  }
shake(){
  var box = [];
  let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let random = huruf.charAt(Math.floor(Math.random() * 26))
for (let i = 0; i < 4; i++){
  box.push([])
  for (let j = 0; j < 4; j++){
  box[i].push(huruf.charAt(Math.floor(Math.random() * 26)))
} }

console.log(box);
  }
}
let test = new BoogleBoard();

test.shake();
