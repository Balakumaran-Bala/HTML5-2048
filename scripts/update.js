var update = function(key) {
    if (key === 37) {
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

    } else if (key === 39) {
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

    } else if (key === 38) {
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

    } else if (key === 40) {
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

        int randI = Math.random()*4;
        int randJ = Math.random()*4;
        while (grid[randI][randJ] != 0) {
            randI = Math.random()*4;
            randJ = Math.random()*4;
        }
        int randNum = Math.random()*3;
        if (randNum <= 2) {
            grid[randI][randJ] = 2;
        } else {
            grid[randI][randJ] = 4;
        }
    }
}