var decodeString = function(s) {
  /*
      create a stack for the string
      while not ] add to the stack
      when you hit ], clear the stack until [ and make that an innerstring
      when you have [, then look for num
      set innerstring to repeat based on num
      add repeat to stack
      at end, process stack and build string
      return string
  */

  let stack = []

  for (let i = 0; i < s.length; i++) {
      if (s[i] !== ']') {
          stack.push(s[i])
      } else {
          let innerString = ""
          let innerNum = ""
          while (stack[stack.length-1] !== "[") {
              innerString = stack.pop() + innerString
          }
          stack.pop()
          while(Number(stack[stack.length-1]) < 10) {
              innerNum = stack.pop() + innerNum
          }
          innerString = innerString.repeat(Number(innerNum))
          stack.push(innerString)
      }
  }
  return stack.join('')
};
