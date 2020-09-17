var addTwoNumbers = function(l1, l2) {
  let num1 = ""
  let num2 = ""

  while (l1 != null) {
      num1 = l1.val + num1
      l1 = l1.next
  }

  while (l2 != null) {
      num2 = l2.val + num2
      l2 = l2.next
  }

  let numOut = ""
  let p1 = num1.length-1
  let p2 = num2.length-1
  let carry = 0

  while (p1 >= 0 || p2 >= 0) {
      let j = 0
      if (p1 >= 0) {
          j += num1[p1]*1
      }
      if (p2 >= 0) {
          j += num2[p2]*1
      }
      j += carry
      n = j % 10
      numOut = n + numOut
      carry = Math.floor(j / 10)
      p1--
      p2--
  }

  numOut = carry ? carry + numOut : numOut

  let p = numOut.length-1
  let output = new ListNode(0)
  let head = output

  while (p >= 0) {
      let node = new ListNode(numOut[p])
      output.next = node
      output = output.next
      p--
  }
  return head.next
};
