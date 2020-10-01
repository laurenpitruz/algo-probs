var mergeKLists = function(lists) {
  //while lists has a length > 1
  //merge first two lists, then next two, looping array with pointers
  //return to start if hit end of list
  if (!lists.length) return null
  if (lists.length === 1) return lists[0]

  let currList = lists[0]

  for (let i = 1; i < lists.length; i++) {
      currList = mergeTwoLists(currList, lists[i])
  }

  return currList
};

//iterative
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  let curr = new ListNode(null)
  let head = curr

  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          curr.next = l1
          l1 = l1.next
          curr = curr.next
      }else {
          curr.next = l2
          l2 = l2.next
          curr = curr.next
      }
  }

  if (l1 === null) curr.next = l2
  if (l2 === null) curr.next = l1

  return head.next
}

//recursive
// var mergeTwoLists = function(l1, l2) {
//     if (l1 === null) {
//         return l2
//     } else if (l2 === null){
//         return l1
//     } else {
//         if (l1.val <= l2.val) {
//             return new ListNode(l1.val, mergeTwoLists(l1.next, l2))
//         } else {
//             return new ListNode(l2.val, mergeTwoLists(l1, l2.next))
//         }
//     }
// };
