const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;

  // round it to one decimal if needed
  celsius = Math.round((celsius + Number.EPSILON) * 10) / 10;

  return celsius;
}

const ctof = function(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;

  // round it to one decimal if needed
  fahrenheit = Math.round((fahrenheit + Number.EPSILON) * 10) / 10;

  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
