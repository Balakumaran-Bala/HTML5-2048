var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.scale(.6, .6);

var score = 0;

var grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var game_over = false;

let randI = Math.floor(Math.random()*4);
let randJ = Math.floor(Math.random()*4);

grid[randI][randJ] = 2;
randI = Math.floor(Math.random()*4);
randJ = Math.floor(Math.random()*4);
grid[randI][randJ] = 2;

background.onload = function() {
    render(); // why can't this be assigned to onload alone?
    keyboardInit(); // start the game
};
