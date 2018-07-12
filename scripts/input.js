var inputInit = function() {
    addEventListener("keydown", function(e) {
        if ([37, 38, 39, 40].includes(e.keyCode)) {
            e.preventDefault();
            update(e.keyCode);
        }
    }, false);

    addEventListener("mousemove", function(event) {
        let relativeX = event.clientX - canvas.offsetLeft;
        let relativeY = event.clientY - canvas.getBoundingClientRect().top;

        if (game_over) {
            if (0 < relativeX && relativeX < canvas.width &&
                500 < relativeY && relativeY < 590) {
                restartMouseOver = true;
            } else {
                restartMouseOver = false;
            }
        }
    }, false);

    addEventListener("click", function(event) {
        let relativeX = event.clientX - canvas.offsetLeft;
        let relativeY = event.clientY - canvas.getBoundingClientRect().top;
    
        if (game_over) {
            if (0 < relativeX && relativeX < canvas.width &&
                500 < relativeY && relativeY < 590) {
                score = 0;
                grid = [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ];
                game_over = false;

                let randI = Math.floor(Math.random()*4);
                let randJ = Math.floor(Math.random()*4);

                grid[randI][randJ] = 2;
                randI = Math.floor(Math.random()*4);
                randJ = Math.floor(Math.random()*4);
                grid[randI][randJ] = 2;
            }
        }
    }, false);
}
