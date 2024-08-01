const removeFromArray = function() {
      let improvedArray = arguments[0];
      const args = Array.from(arguments);
      for (let i=1; i<args.length; i++) {
            for (let j=0; j<improvedArray.length; j++) {
                  if (improvedArray[j] === args[i]) {
                        improvedArray.splice(j, 1);
                        j--;
                  }
            }
      }
      return improvedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
