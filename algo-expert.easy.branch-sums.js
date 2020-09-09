class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let arr = []
  calcSums(root, 0, arr)
  return arr
}

const calcSums = (root, sum, arr) => {
  if (!root) return
	sum += root.value
	if (!root.right && !root.left) {
		arr.push(sum)
	}
  calcSums(root.left, sum, arr)
  calcSums(root.right, sum, arr)
}
