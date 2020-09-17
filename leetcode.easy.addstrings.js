var addStrings = function(num1, num2) {
  let p1 = num1.length-1
  let p2 = num2.length-1
  let output = ""
  let carry = 0

  while(p1 >= 0 || p2 >= 0) {
      let num = 0
      if (p1 >= 0) {
          num += num1[p1]*1
      }
      if (p2 >= 0) {
          num += num2[p2]*1
      }
      num = num + carry
      let add = (num % 10)
      carry = Math.floor(num / 10)
      p1--
      p2--
      output = add + output
  }
  return carry ? carry + output : output
};
