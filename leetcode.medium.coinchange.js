var coinChange = function(coins, amount) {
  /*
     if (amount === 0) return 0

       0  1   2   3   4   5   6   7   8   9   10  11
     1 0  1   2   3   4   5   6   7   8   9   10  11
     2 0  0   1   0   2   0   3   0   4   0   5   0
     5 0  0   0   0   0   1   0   0   0   0   2   0

     if i === denom, dpArray[i] = 1
     if(dpArray[i] > denom, 1 dpArray[i - denom]
     Math.min of dpArray[i], 1 + dpArray[i - denom]
  */

  if (amount === 0) return 0

  let dpArray = new Array(amount + 1).fill(Infinity)

  for (let coin of coins) {
      for (let i = 0; i < dpArray.length; i++) {
          if (i === coin) dpArray[i] = 1
          if (i > coin) dpArray[i] = Math.min(dpArray[i], 1 + dpArray[i - coin])
      }
  }

  return dpArray[amount] !== Infinity ? dpArray[amount] : -1
}
