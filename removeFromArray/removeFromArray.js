const removeFromArray = function() {
  let outputArray = [];
  for (let i = 0; i < arguments[0].length; i++)
  {
    // first add the element to the output array
    outputArray.push(arguments[0][i]);
    // loop through all the input arguments (except the array) and
    // remove the element if there is a match
    for (let j = 1; j < arguments.length; j++)
    {
      if (arguments[0][i] === arguments[j]) {
        outputArray.pop();
        break;
      }
    }    
  }
  return outputArray;
}

module.exports = removeFromArray
