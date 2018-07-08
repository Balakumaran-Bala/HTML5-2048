var keyboardInit = function() {
    addEventListener("keydown", function(e) {
        if ([37, 38, 39, 40].includes(e.keyCode)) {
            update(e.keyCode);
        }
    }, false);
}
