function findClosestValueInBst(tree, target) {
  let root = tree
  let closest = 0
  let diff = Infinity

  while(root) {
    let diffRoot = Math.abs(root.value-target)
    if (diffRoot < diff) {
      closest = root.value
      diff = diffRoot
    }
    if (root.value === target) return root.value
    if (root.value < target) {
      root = root.right
    } else {
      root = root.left
    }
  }
  return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
