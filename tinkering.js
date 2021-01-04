function multiply(a, b) {
  return a * b; 
}

const result = multiply(2, 4); 

const awesomeArray = ["Igloo", "Anaconda", "Mango", "Crazy", "Oranges", "Oocytes", "Lemur"];

function coolFunction() { 
  let statementOfTruth = "";
  for (i = 0; i < awesomeArray.length; i++) {
    statementOfTruth = statementOfTruth + awesomeArray[i][0];
  }
  console.log(statementOfTruth);
}

coolFunction();