var merge = function(nums1, m, nums2, n) {
  /*
      pointers at m-1 and n-1
      largest to back
      go in reverse until you have nums1 sorted and merged
  */

  if (m === 0) {
      for (let i = 0; i < n; i++) {
          nums1[i] = nums2[i]
      }
      return m
  }
  if (n === 0) return m
  let p = nums1.length - 1
  let i = m-1
  let j = n-1
  while (p >= 0) {
      if (i < 0) {
          nums1[p] = nums2[j]
          j--
      } else if (j < 0) {
          nums1[p] = nums1[i]
          i--
      } else if (nums1[i] < nums2[j]) {
          nums1[p] = nums2[j]
          j--
      } else {
          nums1[p] = nums1[i]
          i--
      }
      p--
  }

  return nums1
};
