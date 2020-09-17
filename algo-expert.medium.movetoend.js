function moveElementToEnd(array, toMove) {
  // Write your code here.
	let p1 = 0
	let p2 = array.length-1
	while (array[p2] === toMove) {
		p2--
	}

	while (p1 < p2) {
		if (array[p1] === toMove) {
			let tmp = array[p2]
			array[p2] = array[p1]
			array[p1] = tmp

		}
		p1++
		while (array[p2] === toMove) {
			p2--
		}
	}
	return array
}
