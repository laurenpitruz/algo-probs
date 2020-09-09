function isValidSubsequence(array, sequence) {
  let test = [...sequence]
  for (let i = 0; i < array.length; i++) {
    if (array[i] === test[0]) {
      test.shift()
    }
  }
  return !test.length
}
