//this one returns indexes
//can be in any order

var twoSum = function(nums, target) {
  let dict = {}
  for (let i = 0; i < nums.length; i++) {
      let test = target-nums[i]
      if (dict[test]) {
          return [dict[test] - 1, i]
      }
      dict[nums[i]] = i + 1
  }
};
