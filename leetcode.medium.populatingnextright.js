var connect = function(root) {
  /*
      create a queue
      while queue
          nextNode is queue.shift
          if nextNode is null, push null
          else
          nextNode.next = queue[0]
          push left node
          push right node


  */
  if(!root) return null

  let queue = [root]

  while (queue.length) {
      let n = queue.length
      for (let i = 0; i < n; i++) {
          let nextNode = queue.shift()
          if (i !== n - 1) {
              nextNode.next = queue[0]
          } else {
              nextNode.next = null
          }
          if (nextNode.left) queue.push(nextNode.left)
          if (nextNode.right) queue.push(nextNode.right)
      }
  }
  return root
};
