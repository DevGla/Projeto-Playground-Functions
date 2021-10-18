function highestCount(array) {
  let maior = 0;
  let repeat = 0;
  for (let i = 0; i < array.length ; i++) {
   if ( array[i] > maior ) {
      maior = array[i];
    }
  }
  for (let index = 0 ; index < array.length ; index =+ 1){
    if (array[index] === maior){
      repeat += 1;
    }  
  }
  return repeat;
} 

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));