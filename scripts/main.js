var canvas = document.getElementById("2048");
var ctx = canvas.getContext("2d");

var grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
    [0, 0, 0, 2]
]

render();
keyboardInit();
while (true) {};
