//this could be done better -> come back and do w/o morphing array and w O(1) space

function maxSubsetSumNoAdjacent(array) {
	/*
		similar to maxSubset but can't take left
		max 75 is 75
		max 105 is 105
		120 becomes 195
		75 takes n-2 or n-3 max, becomes 180
		90 is 105 or 195, becomes 285
		135 is 180 or 195, becomes 330

		case array has no length, return 0
		case array length is 1 return array[0]
		track maxSum as you iterate
		if length is 2, you've set maxSum to max
		if length 3, you add array[0] to array[2], set maxSum to max
		for > 3 loop and change in place
		compare curr val to maxSum, make maxSum math.max
		return maxSum
	*/

	if (!array.length) return 0
	if (array.length === 1) return array[0]
	let maxSum = Math.max(array[0], array[1])

	if (array[2]) {
		array[2] += array[0]
		maxSum = Math.max(array[2], maxSum)
	}

	for (let i = 3; i < array.length; i++) {
		array[i] += Math.max(array[i-3], array[i-2])
		maxSum = Math.max(array[i], maxSum)
	}

	return maxSum
}
