var addTwoNumbers = function(l1, l2) {
  /*
      let reversedL1 = reverseListCopy(l1)
      let reversedL2 = reverseListCopy(l2)
      return buildSingleList(reversedL1, reversedL2)

      reverseListCopy (head, prev = null)
          if (!head) return prev
          let nextHead = head.next
          let curr = new ListNode(head.val, prev)
          return reverseList (nextHead, prev)

      buildSingleList(l1,l2, prev = null, carry = 0)
          if (!l1 && !l2) return prev
          if (!l1) {
              let nextL2 = l2.next
              l2.next = prev
              return buildSingleList(l1, nextL2, l2)
          }
          if (!l2) {
              let nextL1 = l1.next
              l1.next = prev
              return buildSingleList(nextL1, l2, l1)
           }
           let nextL1 = l1.next
           let nextL2 = l2.next
           let nextCarry = 0
           let nextVal = l1.val + l2.val + carry
           if (nextVal > 9) {
              nextCarry = Math.floor(nextVal / 10)
              nextVal = nextVal % 10
           }
           let curr = new ListNode(nextVal, prev)
           curr.next = prev
           return buildSingleList(nextL1, nextL2, curr, nextCarry)
  */

      let reversedL1 = reverseListCopy(l1)
      let reversedL2 = reverseListCopy(l2)
      return buildSingleList(reversedL1, reversedL2)
};

var reverseListCopy = function(head, prev = null) {
      if (!head) return prev
      let nextHead = head.next
      let curr = new ListNode(head.val, prev)
      return reverseListCopy (nextHead, curr)
}

var buildSingleList = function(l1, l2, prev = null, carry = 0) {
      if (!l1 && !l2) {
          if (carry > 0) {
              let top = new ListNode(carry, prev)
              return top
          } else {
              return prev
          }
      }
      if (!l1) {
          let nextL2 = l2.next
          let nextVal = l2.val + carry
          let nextCarry = 0
          if (nextVal > 9) {
              nextCarry = Math.floor(nextVal / 10)
              nextVal = nextVal % 10
          }
          let curr = new ListNode(nextVal, prev)
          return buildSingleList(l1, nextL2, curr, nextCarry)
      }
      if (!l2) {
          let nextL1 = l1.next
          let nextVal = l1.val + carry
          let nextCarry = 0
          if (nextVal > 9) {
              nextCarry = Math.floor(nextVal / 10)
              nextVal = nextVal % 10
          }
          let curr = new ListNode(nextVal, prev)
          return buildSingleList(nextL1, l2, curr, nextCarry)
       }
       let nextL1 = l1.next
       let nextL2 = l2.next
       let nextCarry = 0
       let nextVal = l1.val + l2.val + carry
       if (nextVal > 9) {
          nextCarry = Math.floor(nextVal / 10)
          nextVal = nextVal % 10
       }
       let curr = new ListNode(nextVal, prev)
       curr.next = prev
       return buildSingleList(nextL1, nextL2, curr, nextCarry)
}
