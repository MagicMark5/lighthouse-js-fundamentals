const isEven = function (num) {
  return num % 2 === 0; 
}

console.log(isEven(10));
console.log(isEven(11));

// console.log is itself a function
// only it's pre-defined by JavaScript and we can use it without having to declare it ourselves
// we can pass the result returned by isEven directly to console.log, which takes that value and outputs it to Terminal.