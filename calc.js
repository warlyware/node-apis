function calculateInput(calcUrl) {
  var reForNumbers = /[^a-zA-Z0-9]/;
  var reForOperator = /[\+\*\-\÷]/g;
  var numbersArr = calcUrl.split(reForNumbers);
  var operator = calcUrl.match(reForOperator);
  if (operator == '+') {
    return (parseInt(numbersArr[0]) + parseInt(numbersArr[1]));
  } else if (operator == '-') {
    return (parseInt(numbersArr[0]) - parseInt(numbersArr[1]));    
  } else if (operator == '÷') {
    return (parseInt(numbersArr[0]) / parseInt(numbersArr[1]));    
  } else if (operator == '*') {
    return (parseInt(numbersArr[0]) * parseInt(numbersArr[1]));
  }
}

module.exports = calculateInput;