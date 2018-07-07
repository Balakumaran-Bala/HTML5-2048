var update = function(direction) {
  // direction 0: left
  // direction 1: up
  // direction 2: right
  // direction 3: down

  let condition;
  if (direction === 0) { // LEFT
    condition = (i, j) => grid[i][j] !== 0;
    condition1 = (i, j, offset) => offset < j && grid[i][j-offset] === 0;
  } else if (direction === 1) { // UP

  } else if (direction === 2) { // RIGHT
    condition = (i, j) => grid[i][grid[0].length-1-j] !== 0;
    condition1 = (i, j, offset) => offset < (grid[0].length - 1) && grid[i][j] === 0;
  } else if (direction === 3) { // DOWN

  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (condition(i, j)) {
        let offset = 0;
        while (condition1(i, j, offset)) {
          offset++;
        }
        if (condition2(i, j, offset)) {

        }
      }
    }
  }

  function updateLeft(i, j) {
    if (grid[i][j] !== 0) {
      let offset = 0;
      while (offset < j && grid[i][j-offset].value === 0) { // look leftward
        offset++;
      }
      if (offset !== 0) {
        grid[i][j].action = "slide";
        grid[i][j].nextPos.row = i;
        if (
          grid[i][j-offset].value == grid[i][j].value &&
          grid[i][j-offset].action !== "promote"
        ) {
          grid[i][j-offset].action = "promote";
          grid[i][j].nextPos.col = j - offset;
        } else {
          grid[i][j].nextPos.row = i;
          grid[i][j].nextPos.col = j - offset + 1;
        }
      }
    }
  }

  function updateUp(i, j) {
    if (grid[i]){}
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      switch (direction) {
        case 0:
          updateLeft(i, j);
          break;
        case 1:
          updateUp(i, j);
          break;
        case 2:
          updateRight(i, j);
          break;
        case 3:
          updateDown(i, j);
          break;
      }
    }
  }
}