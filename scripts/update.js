var grid = [
    [8, 4, 8, 4],
    [2, 0, 0, 0],
    [2, 0, 0, 0],
    [4, 2, 0, 0]
];

var update = function(key) {
    var bool = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (var i = 0; i < grid.length; i++) {
        var combined = "";
        for (var j = 0; j < grid.length; j++) {
            combined += grid[i][j] + " ";
        }
        console.log(combined);
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
    console.log();
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
    
    for (var i = 0; i < grid.length; i++) {
        var combined = "";
        for (var j = 0; j < grid.length; j++) {
            combined += grid[i][j] + " ";
        }
        console.log(combined);
    }
}

update(40);