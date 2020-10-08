/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  /*
      loop string and make hashtable of letters w num of letters
      loop string and first letter where hash table value is 1, return idx
      return -1 if nothing
  */

  let lettersHash = buildHash(s)
  return getUniqueChar(s, lettersHash)
};

var buildHash = function(s) {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
      if (hash[s[i]]) {
          hash[s[i]] ++
      } else {
          hash[s[i]] = 1
      }
  }
  return hash
}

var getUniqueChar = function(s, hash) {
  for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] === 1) return i
  }
  return -1
}
