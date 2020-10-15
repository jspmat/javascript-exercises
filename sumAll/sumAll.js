const sumAll = function(firstNumber, secondNumber) {
  let sum = 0;
  
  if (!Number.isInteger(firstNumber) || 
      !Number.isInteger(secondNumber) ||
      firstNumber < 0 ||
      secondNumber < 0) {
        return "ERROR";
      }

  if (firstNumber > secondNumber)
  {
    // switch the numbers
    let tempNumber = firstNumber;
    firstNumber = secondNumber;
    secondNumber = tempNumber;
  }

  for (let i = firstNumber; i <= secondNumber; i++)
  {
    sum += i;
  }

  return sum;
}

module.exports = sumAll
