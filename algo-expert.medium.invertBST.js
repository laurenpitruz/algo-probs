function invertBinaryTree(tree) {
  if (!tree) return
	let tmp = tree.left
	tree.left = tree.right
	tree.right = tmp
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
