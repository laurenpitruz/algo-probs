function minNumberOfCoinsForChange(n, denoms) {
  /*
		 0  1  2  3  4  5  6  7  8  9  10
	1  0	1  2  3  4  5  6  7  8  9  10
	5  0  1  2  3  4  1  2  3  4  5  2
	10 0  1  2  3  4  1  2  3  4  5  1


	if (n === 0) return 0

	set a new Array with length n+1

	loop denoms
	loop n
	if val === denom, set to 1
	if val is > denom -> do math.min of curr 1 + array[n-denom]


	return the array[n]
	return -1 when not possible to make change
	*/

	if (n === 0) return 0

	let minCoins = new Array(n+1).fill(Infinity)

	for (let denom of denoms) {
		for (let amount = 1; amount < n+1; amount++) {
			if (amount === denom) minCoins[amount] = 1
			if (amount > denom) minCoins[amount] = Math.min(minCoins[amount], minCoins[amount - denom] + 1)
		}
	}
	return minCoins[n] === Infinity ? -1 : minCoins[n]
}
