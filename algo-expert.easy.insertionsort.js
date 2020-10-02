function insertionSort(array) {
  //for loop of array beginning at 1
	//let idx = i
	//while array[idx] < array [idx - 1] && idx > 0 swap
	//idx --
	for (let i = 1; i < array.length; i++) {
		let idx = i
		while (array[idx] < array[idx-1] && idx > 0) {
			swap(array, idx-1, idx)
			idx--
		}
	}
	return array
}

function swap(array, i, j) {
	let tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
}
