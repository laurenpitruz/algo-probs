var productExceptSelf = function(nums) {
  let output = []
  let i = 0
  while(i < nums.length) {
      output.push(nums.reduce((accum, el, index) => {
          if (index != i) {
              accum *= el
          }
          return accum
      }, 1))
      i++
  }
  return output
};
