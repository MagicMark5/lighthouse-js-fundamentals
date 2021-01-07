const moves = ['south', 'south', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'east') {
      x++;
    } else if (moves[i] === 'west') {
      x--;
    } else if (moves[i] === 'north') {
      y++;
    } else if (moves[i] === 'south') {
      y--;
    }
  }
  const finalArray = [x, y];
  return finalArray;
}

console.log(finalPosition(moves));

// Below the commented code gets the same result but using for...in loop instead

/*

const moves = ['south', 'south', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  
  for (let move in moves) {
    if (moves[move] === 'east') {
      x++;
    } else if (moves[move] === 'west') {
      x--;
    } else if (moves[move] === 'north') {
      y++;
    } else if (moves[move] === 'south') {
      y--;
    } 
  }
  const finalArray = [x, y];
  return finalArray;
}

console.log(finalPosition(moves));

*/