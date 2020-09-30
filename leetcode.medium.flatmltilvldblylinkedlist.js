var flatten = function(head) {
  //while you don't hit null or something is in the stack
  //tmp holder could be a stack, and we pop most recent off the stack
  //if no children, progress
  //if children => put nodeWChild.next on to the stack
  //change nodeWChild.next to be it's child. change the child.prev to nodeWChild

  if (!head) return null
  let top = new Node(0, null, head, null)
  let stack = []

  while (head.next || head.child || stack.length) {
      if (head.child) {
          if (head.next) stack.push(head.next)
          head.next = head.child
          head.child.prev = head
          head.child = null
      } else if (!head.next) {
          let nextNode = stack.pop()
          head.next = nextNode
          nextNode.prev = head
      }
      head = head.next
  }
  return top.next
};
