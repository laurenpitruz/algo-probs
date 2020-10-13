var minRemoveToMakeValid = function(s) {
  /*
    stack => stack has [i, '('] index and val
    returnStringArray = s.split('')
    hasToGoArray = []

    do we need to count???
    countOpen = 0
    countClose = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push([i, s[i]])
            countOpen++
        }
        if (s[i] === ")") {
            countClose++
            if(!stack.length || stack[stack.length - 1][1] !== "(") {
                hasToGoArray.push([i, s[i]])
            } else {
                stack.pop()
            }
        }
     }

     for (let i = 0; i < hasToGoArray.length; i++) {
        returnStringArray.splice(hasToGoArray[i][0], 1)
        if (hasToGoArray[i][1] === "(") countOpen--
        if (hasToGoArray[i][1] === ")") countClose--
     }

     while(stack.length) {
        let [i, char] = stack.pop()
        returStringArray.splice(i, 1)
        if (char === "(") countOpen--
        if (char === ")") countClose--
     }

     if countOpen !== countClose
  */

    let returnStringArray = s.split('')
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push([i, s[i]])
        }
        if (s[i] === ")") {
            if(!stack.length || stack[stack.length - 1][1] !== "(") {
                stack.push([i, s[i]])
            } else {
                stack.pop()
            }
        }
     }

    while(stack.length) {
        let [i, char] = stack.pop()
        returnStringArray.splice(i, 1)
    }

    return returnStringArray.join('')
};
