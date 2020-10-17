const palindromes = function(a) {
  let lowercaseInput = a.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g, '');
  if (lowercaseInput.split("").reverse().join("") == lowercaseInput) return true;
  return false;
}

module.exports = palindromes
