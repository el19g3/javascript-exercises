const fibonacci = function(numOfNums) {
      numOfNums = Number(numOfNums);
      if (numOfNums < 0) return "OOPS";
      let fib_array = [0, 0, 1];
      for (let i = 1; i <= numOfNums - 1; i++) {
            fib_array[i+2] = fib_array[i+1] + fib_array[i];
      }
      return fib_array[numOfNums + 1];
};

// Do not edit below this line
module.exports = fibonacci;
