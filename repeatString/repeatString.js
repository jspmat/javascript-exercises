const repeatString = function(string, numberOfTimes) {
    if (numberOfTimes < 0) {
        return "ERROR";
    }
    
    let repeatedString = "";
    for (i = 0; i < numberOfTimes; i++) {
        repeatedString += string;
      }
    return repeatedString;
}

module.exports = repeatString
