var update = function(key) {
    var bool = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    var oldGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            oldGrid[i][j] = grid[i][j];
        }
    }

    if (key === 37) {
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid.length; j++) {
                if (grid[i][j] != 0) {
                    var pos = j-1;
                    while (pos >= 0 && grid[i][pos] === 0) {
                        pos--;
                    }
                    if (pos === -1) {
                        var temp = grid[i][pos+1];
                        grid[i][pos+1] = grid[i][j];
                        grid[i][j] = temp;
                    } else if (grid[i][pos] === grid[i][j] && bool[i][pos] != 1) {
                        grid[i][pos] *= 2;
                        score += grid[i][pos];
                        bool[i][pos] = 1;
                        grid[i][j] = 0;
                    } else {
                        var temp = grid[i][pos+1];
                        grid[i][pos+1] = grid[i][j];
                        grid[i][j] = temp;
                    }
                }
            }
        }

    } else if (key === 39) {
        for (var i = grid.length-1; i >= 0; i--) {
            for (var j = grid.length-1; j >= 0; j--) {
                if (grid[i][j] != 0) {
                    var pos = j+1;
                    while (pos <= 3 && grid[i][pos] === 0) {
                        pos++;
                    }
                    if (pos === 4) {
                        var temp = grid[i][pos-1];
                        grid[i][pos-1] = grid[i][j];
                        grid[i][j] = temp;
                    } else if (grid[i][pos] === grid[i][j] && bool[i][pos] != 1) {
                        grid[i][pos] *= 2;
                        score += grid[i][pos];
                        bool[i][pos] = 1;
                        grid[i][j] = 0;
                    } else {
                        var temp = grid[i][pos-1];
                        grid[i][pos-1] = grid[i][j];
                        grid[i][j] = temp;
                    }
                }
            }
        }

    } else if (key === 38) {
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid.length; j++) {
                if (grid[j][i] != 0) {
                    var pos = j-1;
                    while (pos >= 0 && grid[pos][i] === 0) {
                        pos--;
                    }
                    if (pos === -1) {
                        var temp = grid[pos+1][i];
                        grid[pos+1][i] = grid[j][i];
                        grid[j][i] = temp;
                    } else if (grid[pos][i] === grid[j][i] && bool[pos][i] != 1) {
                        grid[pos][i] *= 2;
                        score += grid[pos][i];
                        bool[pos][i] = 1;
                        grid[j][i] = 0;
                    } else {
                        var temp = grid[pos+1][i];
                        grid[pos+1][i] = grid[j][i];
                        grid[j][i] = temp;
                    }
                }
            }
        }
    } else if (key === 40) {
        for (var i = grid.length-1; i >= 0; i--) {
            for (var j = grid.length-1; j >= 0; j--) {
                if (grid[j][i] != 0) {
                    var pos = j+1;
                    while (pos <= 3 && grid[pos][i] === 0) {
                        pos++;
                    }
                    if (pos === 4) {
                        var temp = grid[pos-1][i];
                        grid[pos-1][i] = grid[j][i];
                        grid[j][i] = temp;
                    } else if (grid[pos][i] === grid[j][i] && bool[pos][i] != 1) {
                        grid[pos][i] *= 2;
                        score += grid[pos][i];
                        bool[pos][i] = 1;
                        grid[j][i] = 0;
                    } else {
                        var temp = grid[pos-1][i];
                        grid[pos-1][i] = grid[j][i];
                        grid[j][i] = temp;
                    }
                }
            }
        }
    }

    var change_possible = false;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (0 < i && i < grid.length - 1) {
                if (grid[i-1][j] === grid[i][j] ||
                    grid[i+1][j] === grid[i][j] ||
                    grid[i-1][j] === 0 ||
                    grid[i+1][j] === 0) {
                        change_possible = true;
                    }
            }
            if (0 < j && j < grid[0].length - 1) {
                if (grid[i][j-1] === grid[i][j] ||
                    grid[i][j+1] === grid[i][j] ||
                    grid[i][j-1] === 0 ||
                    grid[i][j+1] === 0) {
                        change_possible = true;
                    }
            }
        }
    }
    if (!change_possible) {
        game_over = true;
        return;
    }

    var change = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (oldGrid[i][j] != grid[i][j]) {
                change++;
            }
        }
    }

    if (change != 0) {
        var randI = Math.floor(Math.random()*4);
        var randJ = Math.floor(Math.random()*4);
        while (grid[randI][randJ] != 0) {
            randI = Math.floor(Math.random()*4);
            randJ = Math.floor(Math.random()*4);
        }

        var randNum = Math.floor(Math.random()*4);
        if (randNum <= 2) {
            grid[randI][randJ] = 2;
        } else {
            grid[randI][randJ] = 4;
        }
    }
}
