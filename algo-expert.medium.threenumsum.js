function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a-b)
  const triplets = []

	for (let i = 0; i < array.length; i++) {
		let hash = {}
		for (let j = i; j < array.length; j++) {
			if (i !== j) {
				let currentVal = targetSum - array[i] - array[j]
				if (hash[currentVal]) {
					triplets.push([array[i], currentVal, array[j]])
				}
				hash[array[j]] = true
			}
		}
	}
	return triplets.sort((a, b) => {
		if (a[0] > b[0]) return 1
		if (a[0] < b[0]) return -1
		if (a[0] === b[0]) {
			if (a[1] > b[1]) return 1
			if (a[1] < b[1]) return -1
			if (a[1] === b[1]) {
				if (a[2] > b[2]) return 1
				if (a[2] < b[2]) return -1
				if (a[2] === b[2]) return 0
			}
		}
	})
}
