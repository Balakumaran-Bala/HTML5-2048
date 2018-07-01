var grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 2],
    [2, 2, 2, 2],
    [2, 0, 0, 2]
];

var update = function(key) {
    if (key === 37) {
        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }
        // console.log();
        for (var i = 0; i < grid.length; i++) {
            var lastFilled = 0;
            for (var j = 0; j < grid.length; j++) {
                if (j != lastFilled && grid[i][j] != 0) {
                    if (grid[i][lastFilled] == grid[i][j]) {
                        grid[i][lastFilled] += grid[i][j];
                        grid[i][j] = 0;
                    } else {
                        if (grid[i][lastFilled] != 0) {
                            grid[i][++lastFilled] = grid[i][j];
                        } else {
                            grid[i][lastFilled] = grid[i][j];
                        }

                        grid[i][j] = 0;
                    }   
                }
            } 
        }

        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }
    } else if (key === 39) {
        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }
        // console.log();
        for (var i = grid.length-1; i >= 0; i--) {
            var lastFilled =grid.length-1;
            for (var j = grid.length-1; j >= 0; j--) {
                if (j != lastFilled && grid[i][j] != 0) {
                    if (grid[i][lastFilled] == grid[i][j]) {
                        grid[i][lastFilled] += grid[i][j];
                        grid[i][j] = 0;
                    } else {
                        if (grid[i][lastFilled] != 0) {
                            grid[i][--lastFilled] = grid[i][j];
                        } else {
                            grid[i][lastFilled] = grid[i][j];
                        }

                        grid[i][j] = 0;
                    }   
                }
            }
        }

        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }
    } else if (key === 38) {
        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }
        // console.log();
        for (var i = 0; i < grid.length; i++) {
            var lastFilled = 0;
            for (var j = 0; j < grid.length; j++) {
                if (j != lastFilled && grid[j][i] != 0) {
                    if (grid[lastFilled][i] == grid[j][i]) {
                        grid[lastFilled][i] += grid[j][i];
                        grid[j][i] = 0;
                    } else {
                        if (grid[lastFilled][i] != 0) {
                            grid[++lastFilled][i] = grid[j][i];
                        } else {
                            grid[lastFilled][i] = grid[j][i];
                        }

                        grid[j][i] = 0;
                    }   
                }
            }
        }

        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }

    } else if (key === 40) {
        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }
        console.log();
        for (var i = grid.length-1; i >= 0; i--) {
            var lastFilled = grid.length-1;
            for (var j = grid.length-1; j >= 0; j--) {
                if (j != lastFilled && grid[j][i] != 0) {
                    if (grid[lastFilled][i] == grid[j][i]) {
                        grid[lastFilled][i] += grid[j][i];
                        grid[j][i] = 0;
                    } else {
                        if (grid[lastFilled][i] != 0) {
                            grid[--lastFilled][i] = grid[j][i];
                        } else {
                            grid[lastFilled][i] = grid[j][i];
                        }

                        grid[j][i] = 0;
                    }   
                }
            }
        }

        // for (var i = 0; i < grid.length; i++) {
        //  var combined = "";
        //  for (var j = 0; j < grid.length; j++) {
        //      combined += grid[i][j] + " ";
        //  }
        //  console.log(combined);
        // }
    }
}

update(3);