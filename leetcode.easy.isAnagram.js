/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  //all letters have to be the same, just in a different order
  //all letters from left string need to be accounted for in right
  //create a variable dictionary
  //loop the left string and store letters and amount of them in dictionary
  //loop the right string, removing letter count from dict as you hit letters
  //if you ever go below zero, return false
  //if dictionary has remaining letter counts at end return false
  //else return true

  let dict = {}
  for (let i = 0; i < s.length; i++) {
      if (dict[s[i]]) {
          dict[s[i]]++
      } else {
          dict[s[i]] = 1
      }
  }

  for (let i = 0; i < t.length; i++) {
      if (dict[t[i]]) {
          dict[t[i]]--
          if (dict[t[i]] < 0) {
              return false
          }
      } else {
          return false
      }
  }

  for (let key in dict) {
      if (dict[key] < 0 || dict[key] > 0) {
          return false
      }
  }

  return true
};
