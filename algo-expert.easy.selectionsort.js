function selectionSort(array) {
  let currIdx = 0
	while (currIdx < array.length - 1) {
		let smallestIdx = currIdx
		for (let i = smallestIdx + 1; i < array.length; i++) {
			if (array[smallestIdx] > array[i]) smallestIdx = i
		}
		swap(array, currIdx, smallestIdx)
		currIdx++
	}
	return array
}

function swap(array, i, j) {
	let tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
