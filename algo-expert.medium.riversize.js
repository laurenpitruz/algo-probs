function riverSizes(matrix) {
  let sizes = []
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				sizes.push(riverRun(matrix, i, j))
			}
		}
	}
	return sizes
}

function riverRun(matrix, i, j) {
	if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[i].length) {
		return 0
	}
	if (matrix[i][j] === 0) return 0
	matrix[i][j] = 0
	return 1 + riverRun(matrix, i + 1, j) + riverRun(matrix, i - 1, j) + riverRun(matrix, i, j + 1) + riverRun(matrix, i , j - 1)
}
