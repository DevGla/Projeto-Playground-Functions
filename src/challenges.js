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
console.log(footballPoints(0, 0));
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
