const findTheOldest = function(people) {
      let oldestYears = 0;
      let oldestPerson = {};
      for (person of people) {
            let betweenYears = 0;
            if (person.yearOfDeath == undefined) {
                  const currentYear = new Date().getFullYear();
                  betweenYears = currentYear - person.yearOfBirth;
            }
            else {
                  betweenYears = person.yearOfDeath - person.yearOfBirth;
            }
            if (betweenYears > oldestYears) {
                  oldestYears = betweenYears;
                  oldestPerson = person;
            }
      }
      return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
