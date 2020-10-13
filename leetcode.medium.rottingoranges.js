var orangesRotting = function(grid, countMins = 0) {
  /*
      let rottedOranges = false
      let freshOrangePresent = false

      rotOranges fxn
          loop the 2D grid
          if (grid[r][c] === 1) {
              if (checkRotten)
                  grid[r][c] = -1
                  rottedOranges = true
              else
                  freshOrangePresent = true
          }
          loop again
              change -1 to 2

      checkRotten (grid, r, c) {
          if (grid[r - 1][c] && grid[r - 1][c] === 2) return true
          if (grid[r + 1][c] && grid[r + 1][c] === 2) return true
          if (grid[r][c - 1] && grid[r][c - 1] === 2) return true
          if (grid[r][c + 1] && grid[r][c + 1] === 2) return true
          return false
      }

      rotOranges
      if (!rottedOranges && !freshOrangePresent) return countMins
      if (!rottedOranges) return -1
      return orangesRotting(grid, countMins + 1)
  */

      let rottedOranges = false
      let freshOrangePresent = false

      const rotOranges = (grid) => {
          for (let r = 0; r < grid.length; r++) {
              for (let c = 0; c < grid[0].length; c++) {
                  if (grid[r][c] === 1) {
                      if (checkRotten(grid, r, c)) {
                          grid[r][c] = -1
                          rottedOranges = true
                      } else {
                          freshOrangePresent = true
                      }
                  }
              }
          }
          if (rottedOranges) {
              for (let r = 0; r < grid.length; r++) {
                  for (let c = 0; c < grid[0].length; c++) {
                      if (grid[r][c] === -1) {
                          grid[r][c] = 2
                      }
                  }
              }
          }
      }



      const checkRotten = (grid, r, c) => {
          if (grid[r - 1] && grid[r - 1][c] === 2) return true
          if (grid[r + 1] && grid[r + 1][c] === 2) return true
          if (grid[r][c - 1] && grid[r][c - 1] === 2) return true
          if (grid[r][c + 1] && grid[r][c + 1] === 2) return true
          return false
      }

      rotOranges(grid)
      if (!rottedOranges && !freshOrangePresent) return countMins
      if (!rottedOranges) return -1
      return orangesRotting(grid, countMins + 1)
};
