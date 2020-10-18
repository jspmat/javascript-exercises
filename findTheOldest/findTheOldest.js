let findTheOldest = function(people) {
  let oldestPerson = people.reduce(function (oldest, person) {
    // initialize the output with the first person
    if (Object.keys(oldest).length === 0 && oldest.constructor === Object) {
      oldest = person;
    }
    
    // set the year of death to current year if the person is still living
    let personYearOfDeath = person.yearOfDeath || new Date().getFullYear();
    let oldestYearOfDeath = oldest.yearOfDeath || new Date().getFullYear();
    let personAge = personYearOfDeath - person.yearOfBirth;
    let oldestAge = oldestYearOfDeath - oldest.yearOfBirth;
    
    if (personAge > oldestAge) {
      oldest = person;
    }
    return oldest;
  }, {})
  return oldestPerson;
}

module.exports = findTheOldest
