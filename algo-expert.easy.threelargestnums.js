function findThreeLargestNumbers(array) {
	//start array of three null vals
  //loop the parameter array
	//test val against the null array in separate func
	//if that test shows it needs to be inserted, do a shift function
	//return the start array

	let outputArray = [null, null, null]

	for (let i = 0; i < array.length; i++) {
		testVal(outputArray, array[i])
	}

	return outputArray
}

function testVal(array, val) {
	if (array[2] === null || val > array[2]) {
		shiftArray(array, val, 2)
	} else if (array[1] === null || val > array[1]) {
		shiftArray(array, val, 1)
	} else if (array[0] === null || val > array[0]) {
		shiftArray(array, val, 0)
	}
}

function shiftArray(array, val, idx) {
	if (idx === 2) {
		array[0] = array[1]
		array[1] = array[2]
		array[2] = val
	}
	if (idx === 1) {
		array[0] = array[1]
		array[1] = val
	}
	if (idx === 0) {
		array[0] = val
	}
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
