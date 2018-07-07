var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.scale(.6, .6);

var score = 0;

var game_over = false;

// Current position of each block is on the grid
// Action: "spawn", "slide", "promote", or "none"
class Block {
    constructor(startTime,
                action,
                value){
        this.nextPos = {
            "row": null,
            "col": null
        };
        this.startTime = startTime;
        this.action = action;
        this.value = value;
    }
}

var grid = [];

let timeNow = performance.now();
for (let i = 0; i < 4; i++) {
    grid.push([]);
    for (let j = 0; j < 4; j++) {
        let block = new Block(timeNow, "none", 0);
        grid[i].push(block);
    }
}

let randI = Math.floor(Math.random()*4);
let randJ = Math.floor(Math.random()*4);
let block = new Block(timeNow, "spawn", 2);
grid[randI][randJ] = block;

randI = Math.floor(Math.random()*4);
randJ = Math.floor(Math.random()*4);
block = new Block(timeNow, "spawn", 2);

grid[randI][randJ] = block;

/*
background.onload = function() {
    render(); // why can't this be assigned to onload alone?
    keyboardInit(); // start the game
};*/

/* var main = function() {
    requestAnimationFrame(main);
} */
