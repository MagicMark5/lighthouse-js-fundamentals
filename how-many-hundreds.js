const howManyHundreds = function(num) {
  const hundreds = Math.floor(num / 100);
  return hundreds;
}

// Alternative solution using % below 

/* 
  const howManyHundreds = function(num) {
  const hundreds = (num - (num % 100)) / 100;
  return hundreds;
}
*/
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));