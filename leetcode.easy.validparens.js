var isValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
      if (["(", "[", "{"].includes(s[i])) {
          stack.push(s[i])
      } else  {
          if (s[i] === ")" && stack[stack.length-1] === "(") {
              stack.pop()
          } else if (s[i] === "]" && stack[stack.length-1] === "[") {
              stack.pop()
          } else if (s[i] === "}" && stack[stack.length-1] === "{") {
              stack.pop()
          } else {
              return false
          }
      }
  }
  return !stack.length
};
