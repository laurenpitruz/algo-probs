var mergeTwoLists = function(l1, l2) {

  if (l1 === null) {
      return l2
  } else if (l2 === null){
      return l1
  } else {
      if (l1.val <= l2.val) {
          return new ListNode(l1.val, mergeTwoLists(l1.next, l2))
      } else {
          return new ListNode(l2.val, mergeTwoLists(l1, l2.next))
      }
  }
};
