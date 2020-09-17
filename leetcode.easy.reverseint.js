var reverse = function(x) {
  let num = ''
  let neg = false
  let test = Math.pow(2, 31)
  if (x < 0) {
      neg = true
      x = Math.abs(x)
  }

  while (x >= 1) {
      num = num + (x % 10)
      x = Math.floor(x /10)
  }

  if (test< Number(num)) return 0;
  return neg ? -Number(num) : Number(num)
};
