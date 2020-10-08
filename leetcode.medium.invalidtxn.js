var invalidTransactions = function(transactions) {
  /*
      create outputArr = []
      create hash of names
      loop transactions
          split the string of current idx at ,
          if (val > 1000) add to outputArr
          loop names hash
              if timestamp +- 60 from curr && cities are diff
                  add new one to invalid
                  check if the prev in outputArr and add if not
          add transaction to name hash
      return outputArr
  */

  let outputArr = []
  let namesHash = {}

  for (let i = 0; i < transactions.length; i++) {
      let txnArray = transactions[i].split(',')
      let currName = txnArray[0]
      let currTime = txnArray[1]
      let currAmt = txnArray[2]
      let currCity = txnArray[3]
      let bool = false

      if (Number(currAmt) > 1000) {
          bool = true
      }

      if (namesHash[currName]) {
          let currNameArray = namesHash[currName]
          for (let j = 0; j < currNameArray.length; j++) {
              let testTxn = currNameArray[j].split(",")
              let testTimestamp = testTxn[1]
              let testCity = testTxn[3]
              if (Math.abs(Number(currTime) - Number(testTimestamp)) <= 60 && testCity !== currCity) {
                  bool = true
                  let testOutput = outputSearch(outputArr, currNameArray[j])
                  if (!testOutput) {
                      outputArr.push(currNameArray[j])
                  }
              }
          }
          namesHash[currName].push(transactions[i])
      } else {
          namesHash[currName] = [transactions[i]]
      }

      if (bool) outputArr.push(transactions[i])
  }

  return outputArr
};

var outputSearch = function(array, value) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return true
  }
  return false
}
