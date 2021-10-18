// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base , height) {
  return (base*height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName() {  

}


// Desafio 5
function footballPoints(wins , ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let pontos = vitoria + empate;
  return pontos;
}

// Desafio 6
function highestCount(arrayNumbers) {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  let distanceRG1 = Math.abs(cat1 - mouse);
  let distanceRG2 = Math.abs(cat2 - mouse);
  if (distanceRG1 > distanceRG2 ){
    return 'cat2'
  } else if (distanceRG1 < distanceRG2){
    return 'cat1'
  } else if (distanceRG1 == distanceRG2) {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(numbers) { 
  let array = [];  
  for (let i in numbers){ 
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      array.push('fizzBuzz')
    } else if (numbers[i] % 5 === 0 ){
      array.push('buzz')
    } else if (numbers[i] % 3 === 0){
      array.push('fizz')
    } else {
      array.push('bug!')
    }  
  }
  return array; 
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));





// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
