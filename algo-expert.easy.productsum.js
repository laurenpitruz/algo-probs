function productSum(array, val = 1) {
  return array.reduce((acc, el) => {
		if (!Array.isArray(el)) {
			return acc + el
		} else {
			return acc + ((val+1) * productSum(el, val+1))
		}
	}, 0)
}
