let fingerX = 0;
let fingerY = 0;

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
                restartGame();
            }
        }
    }, false);

    addEventListener("touchstart", (event) => {
      if (event.touches) {
        fingerX = event.touches[0].pageX;
        fingerY = event.touches[0].pageY;
        event.preventDefault();
      }
    },  {passive: false});

    addEventListener("touchend", (event) => {
      if (event.touches) {
        event.preventDefault();
        const X = event.changedTouches[event.changedTouches.length-1].pageX - fingerX;
        const Y = event.changedTouches[event.changedTouches.length-1].pageY - fingerY;
        const absX = Math.abs(X);
        const absY = Math.abs(Y);
        if (absX > absY) {
          if (absX - canvas.width/5 + 7 > 0) {
            if (X > 0) {
              update(39);
            } else {
              update(37);
            }
          }
        }
        else {
          if (absY - canvas.height/5 + 7 > 0) {
            if (Y > 0) {
              update(40);
            } else {
              update(38);
            }
          }
        }
        if (game_over) {
            restartGame();
        }
      }
    }, {passive: false});
}
