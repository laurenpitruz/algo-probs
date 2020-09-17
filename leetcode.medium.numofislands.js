var numIslands = function(grid) {
  let islands = 0
  const test = [...grid]
  for (let i = 0; i < test.length; i++) {
      for (let j = 0; j < test[0].length; j++) {
          if (test[i][j] === "1") {
              (dfs(i, j, test))
              islands += 1
          }
      }
  }
  return islands
};

var dfs = function(i, j, test) {
  if (i < 0 || j < 0 || i >= test.length || j >= test[0].length) return 0;
  if (test[i][j] === "0") return 0;
  test[i][j] = "0";
  return dfs(i+1, j, test) + dfs(i-1, j, test) + dfs(i, j+1, test) + dfs(i, j-1, test);
}
