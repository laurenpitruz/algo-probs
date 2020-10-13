var subsets = function(nums) {
  /*
      [1,2,3]
      [[], [1], [2], [1,2], [3], [1, 3], [2, 3], [1,2,3]]

      let output = [[]]

      for (let i = 0; i < nums.length; i++) {
          let innerArray = [...output]
          innerArray.forEach(el => outputArray.push([...el, nums[i]]))

      return outputArray
      }
  */

  let output = [[]]

  for (let i = 0; i < nums.length; i++) {
      let innerArray = [...output]
      innerArray.forEach(el => output.push([...el, nums[i]]))
  }
  return output
};
