/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  /*
      let letterDict = {}
      let partitions = [1]
      loop the array
          add / update last idx of letter in letterDict

      loop the array
          if i < partitions[partitions.length - 1] {
              partitions[partitions.length - 1] = letterDict[s[i]]
          } else {
              partitions.push(letterDict[s[i]])
          }
      return partitions
  */
  let letterDict = {}
  let partitions = [1]

  for (let i = 0; i < S.length; i++) {
      letterDict[S[i]] = i + 1
  }

  for (let i = 0; i < S.length; i++) {
      let currDistance = partitions[partitions.length -1]
      if (i < currDistance && letterDict[S[i]] > currDistance) {
          partitions[partitions.length -1] = letterDict[S[i]]
      } else if (i >= currDistance) {
          partitions.push(letterDict[S[i]])
      }
  }

  for (let i = partitions.length - 1; i > 0; i--) {
      partitions[i] -= partitions[i-1]
  }

  return partitions
};
