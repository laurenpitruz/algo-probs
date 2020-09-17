var romanToInt = function(s) {
  return s.split('').map(el => {
      if (el === 'I') return 1;
      if (el === 'V') return 5;
      if (el === 'X') return 10;
      if (el === 'L') return 50;
      if (el === 'C') return 100;
      if (el === 'D') return 500;
      if (el === 'M') return 1000;
  }).reduce((acc, el) =>{
      if (acc[acc.length-1] < el) {
          let sub = el - acc[acc.length-1]
          acc[acc.length-1] = sub
      } else {
          acc.push(el)
      }
      return acc
  }, []).reduce((acc, el) => acc+el)
};
