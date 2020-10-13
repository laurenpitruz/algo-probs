const mergeSort = (array) => {
  if (array.length < 2) return array
	let half = Math.floor(array.length / 2)
	let l1 = mergeSort(array.slice(0, half))
	let l2 = mergeSort(array.slice(half, array.length))
	return merge(l1, l2)
}

const merge = (arr1, arr2) => {
	let output = []
	let p1 = 0
	let p2 = 0
	while (p1 < arr1.length && p2 < arr2.length) {
		if (arr1[p1] < arr2[p2]) {
			output.push(arr1[p1])
			p1++
		} else {
			output.push(arr2[p2])
			p2++
		}
	}
	while (p1 < arr1.length) {
		output.push(arr1[p1])
		p1++
	}
	while (p2 < arr2.length) {
		output.push(arr2[p2])
		p2++
	}
	return output
}
// Do not edit the line below.
exports.mergeSort = mergeSort;
