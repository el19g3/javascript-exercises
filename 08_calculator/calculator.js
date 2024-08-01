const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	let sumAll = 0;
  for (let i = 0; i < args.length; i++) {
    sumAll += args[i];
  }
  return sumAll;
};

const multiply = function(args) {
  let mutAll = 1;
  for (let i = 0; i < args.length; i++) {
    mutAll *= args[i];
  }
  return mutAll;
};

const power = function(a, b) {
	let powAll = 1;
  for (let i = 0; i < b; i++) {
    powAll *= a;
  }
  return powAll;
};

const factorial = function(a) {
	if (a === 0) return 1;
  let facAll = 1;
  for (let i = 1; i <= a; i++) {
    facAll *= i;
  }
  return facAll;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};