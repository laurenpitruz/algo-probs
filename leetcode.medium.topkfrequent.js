var topKFrequent = function(nums, k) {
  /*
      time complexity better than nlogn (so can't sort)

      use a hashmap
      iterate through nums and store number of times each num appears

      create an array of size k, fill with null
      for each key in hashmap
          if (hashmap[key] > than what is in the array, or array is                   null) shift items and insert

      return outputarray
  */

  let numsHashMap = {}
  for (let i = 0; i < nums.length; i++) {
      if (numsHashMap[nums[i]]) {
          numsHashMap[nums[i]]++
      } else {
          numsHashMap[nums[i]] = 1
      }
  }

  let outputArray = new Array(k).fill(null)

  for (let key in numsHashMap) {
      for (let i = outputArray.length - 1; i >= 0; i--) {
          if (numsHashMap[key] > numsHashMap[outputArray[i]] || outputArray[i] === null) {
              shiftAndInsert(key, i, outputArray)
              break
          }
      }
  }

  return outputArray
};

var shiftAndInsert = function(key, i, outputArray) {
  let count = 0
  while (count < i) {
      outputArray[count] = outputArray[count + 1]
      count++
  }
  outputArray[i] = key
}
