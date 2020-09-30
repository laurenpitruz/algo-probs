var trap = function(height) {
  let water = 0
  let leftStack = []
  let rightStack = []
  for (let i = 0; i < height.length; i++) {
      if (!leftStack.length) {
          leftStack.push(i)
      } else if (height[leftStack[leftStack.length -1]] <= height[i]) {
          let x = leftStack.pop()
          let arr = height.slice(x+1, i)
          let lowerHeight = height[x] > height[i] ? height[i] : height[x]
          water += calcWater(lowerHeight, arr)
          leftStack.push(i)
      }
  }

  for (let i = height.length-1; i >= 0; i--) {
      if (!rightStack.length) {
          rightStack.push(i)
      } else if (height[rightStack[rightStack.length-1]] < height[i]) {
          let x = rightStack.pop()
          let arr = height.slice(i+1, x)
          let lowerHeight = height[x] > height[i] ? height[i] : height[x]
          water+= calcWater(lowerHeight, arr)
          rightStack.push(i)
      }
  }
  return water
};

var calcWater = function(lowerHeight, arr) {
  if (!arr.length) return 0
  let removeInnerHeights = arr.reduce((acc, el) => acc + el)
  return (lowerHeight * arr.length) - removeInnerHeights
}
