var findMedianSortedArrays = function(nums1, nums2) {
  let p1 = 0
  let p2 = 0

  if (!nums1.length) {
      if (nums2.length === 1) return nums2[0]
      let idx = Math.floor(nums2.length / 2)
      if (nums2.length % 2 === 0) {
          let sum = nums2[idx] + nums2[idx - 1]
          return sum === 0 ? sum : sum / 2
      } else {
          return nums2[idx]
      }
  }

  if (!nums2.length) {
      if (nums1.length === 1) return nums1[0]
      let idx = Math.floor(nums1.length / 2)
      if (nums1.length % 2 === 0) {
          let sum = nums1[idx] + nums1[idx - 1]
          return sum === 0 ? sum : sum / 2
      } else {
          return nums1[idx]
      }
  }


  let bool = (nums1.length + nums2.length) % 2 === 0
  let mid = Math.floor((nums1.length + nums2.length) / 2)

  let lastTwo = [null, null]
  let count = mid

  while (count >= 0) {
      let num
      if (nums1[p1] < nums2[p2]) {
          num = nums1[p1]
          p1++
      } else {
          if (nums2[p2] !== undefined) {
              num = nums2[p2]
              p2++
          } else {
              num = nums1[p1]
              p1++
          }
      }
      if (lastTwo[0] !== null && lastTwo[1] !== null) {
          lastTwo[0] = lastTwo[1]
          lastTwo[1] = num
      } else if (lastTwo[0] !== null) {
          lastTwo[1] = num
      } else {
          lastTwo[0] = num
      }
      count--
  }

  if (lastTwo[0] === 0 && lastTwo[1] === 0) return 0

  return bool ? ((lastTwo[0] + lastTwo[1]) / 2) : lastTwo[1]
};
