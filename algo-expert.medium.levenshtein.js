function levenshteinDistance(str1, str2) {
  /*
			y a b d
		a 1 1 2 3
		b 2 2 1 2
		c 3 3 2 2

	*/
	if (!str1.length) return str2.length
	if (!str2.length) return str1.length
	let editArr = []

	//get whether 0,0 in array is 0 or 1
	let firstNum = str1[0] === str2[0] ? 0 : 1

	//build the first row
	let row1 = []
	row1.push(firstNum)
	for (let i = 1; i < str2.length; i++) {
		if (str2[i] === str1[0]) {
			row1.push(row1[i-1])
		} else {
			row1.push(1 + row1[i-1])
		}
	}
	editArr.push(row1)

	//build next rows
	for (let i = 1; i < str1.length; i++) {
		let row = new Array(str2.length).fill(0)
		let num = str1[i] === str2[0] ? 0 : 1
		row[0] = firstNum + num
		firstNum = firstNum + num
		editArr.push(row)
	}

	for (let i = 1; i < editArr.length; i++) {
		for (let j = 1; j < editArr[i].length; j++) {
			if (str1[i] === str2[j]) {
				editArr[i][j] = editArr[i-1][j-1]
			} else {
				editArr[i][j] = 1 + Math.min(editArr[i-1][j-1], editArr[i-1][j], editArr[i][j-1])
			}
		}
	}
	return editArr[str1.length - 1][str2.length - 1]
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
