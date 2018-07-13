fingerX;
fingerY;

var inputInit = function() {
    addEventListener("keydown", function(event) {
        if ([37, 38, 39, 40].includes(event.keyCode)) {
            event.preventDefault();
            update(event.keyCode);
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

    addEventListener("touchstart", (event) => {
      if (event.touches) {
        fingerX = event.touches[0].pageX;
        fingerY = event.touches[0].pageY;
        event.preventDefault();
      }
    }, false);

    addEventListener("touchend", (event) => {
      if (event.touches) {
        event.preventDefault();
        const X = event.changedTouches[event.changedTouches.length-1].pageX - fingerX;
        const Y = event.changedTouches[event.changedTouches.length-1].pageY - fingerY;
        const absX = Math.abs(X);
        const absY = Math.abs(Y);
        if (absX > absY) {
          if (absX - canvas.width/4 + 5 > 0) {
            if (X > 0) {
              update(39);
            } else {
              update(37);
            }
          }
        }
        else {
          if (absY - canvas.height/4 + 5 > 0) {
            if (Y > 0) {
              update(38);
            } else {
              update(40);
            }
          }
        }
      }
    }, false);
}
