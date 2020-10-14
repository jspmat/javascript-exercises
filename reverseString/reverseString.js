const reverseString = function(string) {
    let splitString = string.split("");
    let reversedArray = splitString.reverse();
    let reversedString = reversedArray.join("");
    return reversedString;
}

module.exports = reverseString
