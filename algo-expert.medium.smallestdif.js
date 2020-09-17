function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	let lowestPair = []
	let diff = Infinity
	for (let i = 0; i < arrayOne.length; i++) {
		for (let j = 0; j < arrayTwo.length; j++) {
			if (Math.abs(arrayOne[i] - arrayTwo[j]) < diff) {
				lowestPair = [arrayOne[i], arrayTwo[j]]
				diff = Math.abs(arrayOne[i] - arrayTwo[j])
			}
		}
	}
	return lowestPair
}
