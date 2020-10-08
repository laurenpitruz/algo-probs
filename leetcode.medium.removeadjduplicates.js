var removeDuplicates = function(s, k) {
  /*
      s > 1
      k > 2
      make a stack

      loop the string
          push s[i] to the stack
          create pointer p that is stack.length - 1
          counter = 0
          while loop stack from the back
          while (stack[p] === s[i] && p >= 0)
              counter ++
              p--
          if (counter >= k)
              while (counter > 0) {
                  stack.pop()
                  counter--
              }
      return stack.join('')
  */

  let stack = []

  for (let i = 0; i < s.length; i++) {
      stack.push(s[i])
      let p = stack.length - 1
      let counter = 0
      while (stack[p] === s[i] && p >= 0) {
          counter ++
          p--
      }
      if (counter >= k) {
          while (counter > 0) {
              stack.pop()
              counter--
          }
      }
  }
  return stack.join('')
};
