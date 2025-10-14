//Exercise 1.
function prependToString(str1, str2) {
    return str2 + str1;
  }
  console.log(prependToString('awesome', 'very'))
//Exercise 2.
function stringIncludes(word, char) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === char) {
        return true;
      }
    }
    return false;
  }
  
  //Exercise 3.
  function stringLastIndexOf(word, char) {
    for (let i = word.length - 1; i >= 0; i--) {
      if (word[i] === char) {
        return i;
      }
    }
    return -1;
  }
  //Exercise 4.
  function removeFromString(str, start, count) {
    return str.slice(0, start) + str.slice(start + count);
  }
  