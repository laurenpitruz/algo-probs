var rightSideView = function(root) {
  if (root === null) return []
  if (!root.left && !root.right) return [root.val]

  let solution = []
  let queue1 = [root]
  let queue2 = []

  while(queue1.length || queue2.length) {
      if (queue1.length) {
          while(queue1.length > 1) {
              let next = queue1.shift()
              if (next.left) queue2.push(next.left)
              if (next.right) queue2.push(next.right)
          }
          let next = queue1.shift()
          if (next.left) queue2.push(next.left)
          if (next.right) queue2.push(next.right)
          solution.push(next.val)
      }
      else {
          while(queue2.length > 1) {
              let next = queue2.shift()
              if (next.left) queue1.push(next.left)
              if (next.right) queue1.push(next.right)
          }
          let next = queue2.shift()
          if (next.left) queue1.push(next.left)
          if (next.right) queue1.push(next.right)
          solution.push(next.val)
      }
  }

  return solution
};
