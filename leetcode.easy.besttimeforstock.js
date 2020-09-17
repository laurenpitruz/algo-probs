var maxProfit = function(prices) {
  let spread = 0
  let j = 0
  for (let i = 0; i < prices.length; i++) {
      j = i > 0 ? i-1 : 0
      while (j > -1) {
          if (prices[i] - prices[j] > spread) {
              spread = prices[i] - prices[j]
          }
          j--
      }
  }
  return spread
};
