var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.scale(.6, .6);
ctx.fillStyle = "#f6f0ff"
ctx.font = "bold 150px Source Sans Pro";
ctx.textAlign = "center";

var grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var randI = Math.floor(Math.random()*4);
var randJ = Math.floor(Math.random()*4);

grid[randI][randJ] = 2;
randI = Math.floor(Math.random()*4);
randJ = Math.floor(Math.random()*4);
grid[randI][randJ] = 2;

background.onload = function() {
    render(); // why can't this be assigned to onload alone?
    keyboardInit(); // start the game
};

/* var main = function() {
    requestAnimationFrame(main);
} */
