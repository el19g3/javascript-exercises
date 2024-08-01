const palindromes = function (strOne) {
      strOne = strOne.toLowerCase().replace(/[^a-z0-9]/g, '');     
      let strTwo = "";
      for (let i = strOne.length - 1; i >= 0; i--) {
            strTwo = strTwo.concat("", strOne[i]);
      }
      if (strOne === strTwo) return true;
      else return false;
};

// Do not edit below this line
module.exports = palindromes;
