function nodeDepths(root) {
	if (root === null) return 0
	let queue = [[root, 0]]
	let output = 0
	while (queue.length) {
		let next = queue.shift()
		let nextNode = next[0]
		let curr = next[1]
		if (nextNode.left) queue.push([nextNode.left, curr + 1])
		if (nextNode.right) queue.push([nextNode.right, curr + 1])
		output += curr
	}
	return output
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
