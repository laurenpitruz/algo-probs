function maxSumIncreasingSubsequence(array) {
	/*
				 110   80  30  100  110  110  110  170
		[10,  100,  70,  30,  20,  50,  11,  30,  60]
		[10], [10, 100], [10, 70],

		array of the max that includes that val
		array of sums

		let output = [maxVal, maxArr]
		^^initialize with array[0]
		initialize to [-Infinity, []]

		loop the array, then loop the reverse of it
		if that the curr val is greater, then currMax is max at that val + val
		if currMax > innerMax, reset
		after that reset output if needed

		if val < most recent element then set idx and get idx of next lowest num
	*/
	if (array.length < 2) return [array[0], array]

	let output = [array[0], [array[0]]]
	let maxArrs = new Array(array.length).fill([])
	let maxSums = new Array(array.length)
	maxArrs[0].push(array[0])
	maxSums[0] = array[0]

	for (let i = 1; i < array.length; i++) {
		let innerMax = array[i]
		let innerArr = [array[i]]
		for (let j = i-1; j >= 0; j--) {
			if (array[j] < array[i]) {
				let currMax = maxSums[j] + array[i]
				if (currMax > innerMax) {
					innerMax = currMax
					innerArr = [...maxArrs[j], array[i]]
				}
			}
		}
		maxSums[i] = innerMax
		maxArrs[i] = innerArr
		if (innerMax > output[0]) {
			output[0] = innerMax
			output[1] = innerArr
		}
	}
	return output
}``
