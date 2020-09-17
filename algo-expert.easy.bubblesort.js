function bubbleSort(array) {
  // Write your code here.
	let n = array.length;
	while (n) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i+1]) {
				let tmp = array[i]
				array[i] = array[i+1]
				array[i+1] = tmp
			}
		}
		n--
	}
	return array
}
