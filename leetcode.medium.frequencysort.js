var frequencySort = function(s) {
  /*
      hashmap of the string letters
      for each key in dict, push to an output array the letter and frequency
      sort output array by frequency
      loop output and push to string the num of chars
  */

  let lettersDict = {}
  let outputArray = []
  let outputString = ""

  for (let i = 0; i < s.length; i++) {
      if (lettersDict[s[i]]) {
          lettersDict[s[i]]++
      } else {
          lettersDict[s[i]] = 1
      }
  }

  for (let key in lettersDict) {
      outputArray.push([key, lettersDict[key]])
  }

  outputArray.sort((a, b) => {
      if (a[1] < b[1]) return 1
      if (a[1] > b[1]) return -1
      return 0
  })

  for (let i = 0; i < outputArray.length; i++) {
      outputString += outputArray[i][0].repeat(outputArray[i][1])
  }

  return outputString
};
