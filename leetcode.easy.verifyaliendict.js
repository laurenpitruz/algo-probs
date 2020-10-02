var isAlienSorted = function(words, order) {
  //create a dictionary, loop through order and put letter and idx
  //loop through words and compare the words based on the dictionary
  // when looping words, set first chars to vars (firstCharLeft, firstCharRight)
  //set charIdx to 1
  //while they are equal, add the next char value and up charIdx
  //once while loop ends, see if left is < right, if not return false
  //return true at end of function

  let dict = {}

  for (let i = 0; i < order.length; i++) {
      dict[order[i]] = i + 1
  }

  if (words.length === 1) return true

  for (let i = 1; i < words.length; i++) {
      let charsLeft = dict[words[i-1][0]]
      let charsRight = dict[words[i][0]]
      let idx = 1
      let maxLength = words[i].length > words[i-1].length ? words[i].length : words[i-1].length

      while (charsLeft === charsRight && idx < maxLength) {
          if (words[i-1][idx]) charsLeft += dict[words[i-1][idx]]
          if (words[i][idx]) charsRight += dict[words[i][idx]]
          idx++
      }

      if (charsLeft > charsRight) return false
  }

  return true
};
