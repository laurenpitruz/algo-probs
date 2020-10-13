var numDecodings = function(s) {
  /*
      DP
      "02524"

          0   1   2   3   4   5
          1   0   1   1   3   6

      let dpArray = new Array(s.length - 1).fill(0)
      dpArray[0] = 1
      if (s[0] === 0) dpArray[1] = 0
      if (s[0] !== 0) dpArray[1] = 1

      for (let i = 2; i < s.length; i++) {
          if (Number(s.slice(i - 1, i)) !== 0) dpArray[i] += dpArray[i - 1]
          if (Number(s.slice(i -2, i)) <= 26) dpArray[i] += dpArray[i - 2]
      }

      return dpArray[s.length]
  */
  if (s[0] === "0") return 0

  let dpArray = new Array(s.length + 1).fill(0)

  dpArray[0] = 1
  dpArray[1] = 1

  for (let i = 2; i <= s.length; i++) {
      if (Number(s.slice(i - 1, i)) !== 0) dpArray[i] += dpArray[i - 1]
      if (Number(s.slice(i - 2, i)) <= 26 && s[i-2] !== '0') dpArray[i] += dpArray[i - 2]
  }

  return dpArray[s.length]

};
