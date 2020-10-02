//iterative
var reverseList = function(head) {
    if (!head) return null

    let prev = null
    let curr = head

    while(curr !== null) {
        let tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    }

    return prev
};

//recursive
var reverseList = function(head, prev = null) {
  if (!head) return prev
  let nextHead = head.next
  head.next = prev
  return reverseList(nextHead, head)

};
