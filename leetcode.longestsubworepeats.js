var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length

  let arr = s.split('')

  let hash = {}

  let longest = 0
  let curr = 0
  let p = 0
  let b = 0

  while(p !== arr.length && s !== arr.length) {
      if (hash[arr[p]]) {
          if (curr > longest) longest = curr
          p = hash[arr[p]]
          hash = {}
          curr = 0
      } else {
          curr ++
          hash[arr[p]] = p + 1
          p++
      }
  }

  return curr > longest ? curr : longest
};
