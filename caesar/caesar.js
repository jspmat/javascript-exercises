const caesar = function(text, shift) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let returnText = [];
  let realShift;
  let index;

  // in case the shift is negative, translate it to a positive shift
  if (shift < 0) {
    realShift = shift + 26;
  }
  else {
    realShift = shift;
  }

  // loop through the text and check if each character is a part of the alphabet arrays
  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i])) {
      index = (alphabet.indexOf(text[i]) + realShift) % 26;
      returnText.push(alphabet[index]);
    }
    else if (alphabetUpper.includes(text[i])) {
      index = (alphabetUpper.indexOf(text[i]) + realShift) % 26;
      returnText.push(alphabetUpper[index]);
    }
    else {
      returnText.push(text[i]);
    }
  }

  return returnText.join("");
}

module.exports = caesar
