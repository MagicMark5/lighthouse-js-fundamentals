var num = 99;


while (num >= 0) {
  var numMinus = num - 1;
    if (num > 2) {
        console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + numMinus + ' bottles of juice on the wall!');
    } else if (num === 2) {
        console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + numMinus + ' bottle of juice on the wall!');
    } else if (num === 1) {
        console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around... ' + numMinus + ' bottles of juice on the wall!');
    }
    num--;
}

