var islandPerimeter = function(grid) {
  /*
      let perimeter = 0
      loop 2D grid
          if (grid[i][j] === 1) {
              let count = 4
              if (grid[i + 1][j] === 1) count--
              if (grid[i - 1][j] === 1) count--
              if (grid[i][j - 1] === 1) count--
              if (grid[i][j + 1] === 1) count--
              perimeter += count
          }
  */

  let perimeter = 0

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          let count = 4
          if (grid[i][j] === 1) {
              if (i < grid.length - 1 && grid[i + 1][j] === 1) count--
              if (i > 0 && grid[i - 1][j] === 1) count--
              if (j > 0 && grid[i][j - 1] === 1) count--
              if (j < grid[0].length - 1 && grid[i][j + 1] === 1) count--
              perimeter += count
          }
      }
  }

  return perimeter
};
