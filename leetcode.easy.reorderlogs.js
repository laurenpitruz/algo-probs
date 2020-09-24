//completed 9/22
//note -> come back to this one to try other solutions.

var reorderLogFiles = function(logs) {
  let logTest = logs.map(log => log.split(' '))
  let digit = []
  let letter = []
  let test
  for (let i = 0; i < logTest.length; i++) {
      test = logTest[i][1].charCodeAt(0)
      if (test >= 97) {
          letter.push(logTest[i])
      } else {
          digit.push(logTest[i].join(' '))
      }
  }
  letter.sort((a, b) => {
      if (a.slice(1).join(' ') > b.slice(1).join(' ')) return 1
      if (a.slice(1).join(' ') < b.slice(1).join(' ')) return -1
      if (a[0] > b[0]) return 1
      if (a[0] < b[0]) return -1
      return 0
  })
  letter = letter.map(el => el.join(' '))
  return [...letter, ...digit]
};
