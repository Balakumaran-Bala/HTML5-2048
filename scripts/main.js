var canvas = document.getElementById("2048");
var ctx = canvas.getContext("2d");

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

render();
keyboardInit();

var main = function() {
    requestAnimationFrame(main);
}
