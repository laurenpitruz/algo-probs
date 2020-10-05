var findKthLargest = function(nums, k) {
  /*
      create an array, kArray, of length k with neg infinity as val
      loop through nums,
      if nums > kArray[0] do separtate function to shiftArr

      shiftArr func
      intakes kArray and val,
      kArray[0] set to val
      loop kArray start at 1, if karray[i] < karray[i-1] swap
      put val in the appropriate spot

      return kArray[0]
  */
  let kArray = new Array(k).fill(-Infinity)

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > kArray[0]) {
          shiftArray(kArray, nums[i])
      }
  }

  return kArray[0]
};

var shiftArray = function (array, num) {
  array[0] = num
  for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i-1]) {
          swap(array, i-1, i)
      } else {
          break
      }
  }
}

var swap = function (array, i, j) {
  let tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}
