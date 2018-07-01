var keyDown = false;

var keyboardInit = function() {
    addEventListener("keydown", function(e) {
         // only call update once
        if (!keyDown && [37, 38, 39, 40].includes(e.keyCode)) {
            keyDown = true;
            update(e.keyCode);
            render();
        }
    }, false);

    addEventListener("keyup", function(e) {
        if ([37, 38, 39, 40].includes(e.keyCode)) {
            keyDown = false;
        }
    })
}
