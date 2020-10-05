var maxSubArray = function(nums) {
  /*
      if nums.length === 1 return nums[0]
      testarr is copy of nums
      max is nums[0]
      for let i = 1; i < testArr.length; i++
          if (testArr[i-1] > 0) testArr[i] += testArr[i-1]
          max = math.max(testArr[i], max)
      return max
  */

  if (nums.length === 1) return nums[0]
  let max = nums[0]
  let testArr = nums.slice()
  testArr[0] = nums[0]

  for (let i = 1; i < testArr.length; i++) {
      if (testArr[i-1] > 0) testArr[i] += testArr[i-1]
      max = Math.max(testArr[i], max)
  }

  return max
};
