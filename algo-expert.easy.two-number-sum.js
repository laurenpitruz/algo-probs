//this one returns the numbers that sum to the target

function twoNumberSum(array, targetSum) {
	let output = [];
	let dict = {};
  for (let i = 0; i < array.length; i++) {
		if (dict[array[i]]) {
			output.push(array[i]);
			output.push(dict[array[i]])
		} else {
			let num = targetSum - array[i];
			dict[num] = array[i];
		}
	}
	return output
}
