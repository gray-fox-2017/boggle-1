function shake(dimension){
  let alphabetArray = [];
  for(let i='a'.charCodeAt(0), j='z'.charCodeAt(0);i<=j;i++){
    alphabetArray.push(String.fromCharCode(i))
  }
  //console.log(alphabetArray);
  let randomizedArray = []
  for(let i=0;i<Math.pow(dimension,2);i++){
    let randomizer = Math.floor(Math.random()*26)
    randomizedArray.push(alphabetArray[randomizer])
  }
  //console.log(randomizedArray);
  let boggleArray = []
  for(let i=0;i<randomizedArray.length;i+=dimension){
    boggleArray.push(randomizedArray.slice(i,i+dimension))
  }
  console.log(boggleArray);
}

shake(10)