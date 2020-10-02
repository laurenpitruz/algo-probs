function binarySearch(array, target) {
	//start w/ left as 0 and right as last idx, arr.length-1
	//while they are not the same do below
	// get middle which is Math.Floor (right - left / 2)
	//if array[middle] === target, return middle
	//else if array [middle] < target -> left = middle
	//if > target right = middle
	let left = 0
	let right = array.length - 1

	while ((right - left) > 1) {
		let middle = Math.floor((right-left) / 2) + left
		if (array[middle] === target) return middle
		if (array[middle] < target) {
			left = middle
		} else {
			right = middle
		}
	}

	if (array[left] === target) return left
	if (array[right] === target) return right
	return -1
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
