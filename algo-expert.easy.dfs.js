class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
		array.push(this.name)
		if (this.children) {
			this.children.forEach(child => child.depthFirstSearch(array))
		}
		return array
  }
}
