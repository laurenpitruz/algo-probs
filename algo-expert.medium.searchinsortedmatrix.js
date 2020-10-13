function searchInSortedMatrix(matrix, target) {
  let r = 0
	let c = matrix[0].length - 1

	while (r < matrix.length && c >= 0) {
		if (matrix[r][c] === target) return [r, c]
		if (matrix[r][c] > target) {
			c--
		} else if (matrix[r][c] < target) {
			r++
		}
	}

	return [-1, -1]
}
