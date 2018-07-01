var render = function() {
    var blank = new Image(128, 128);
    var two = new Image(128, 128);
    var four = new Image(128, 128);
    var eight = new Image(128, 128);
    var sixteen = new Image(128, 128);
    var thrityTwo = new Image(128, 128);
    var sixtyFour = new Image(128, 128);
    var oneTwentyEight = new Image(128, 128);
    var twoFiftySix = new Image(128, 128);
    blank.src = "./../img/blank.PNG";
    two.src = "./../img/two.PNG";
    four.src = "./../img/four.PNG";
    eight.src = "./../img/eight.PNG";
    sixteen.src = "./../img/sixteen.PNG";
    thrityTwo.src = "./../img/thritytwo.PNG";
    sixtyFour.src = "./../img/sixtyfour.PNG";
    oneTwentyEight.src = "./../img/onetwentyeight.PNG"
    twoFiftySix.src = "./../img/fivetwelve.PNG"

    var images = {};
    images['0'] = blank;
    images['2'] = two;
    images['4'] = four;
    images['8'] = eight;
    images['16'] = sixteen;
    images['32'] = thrityTwo;
    images['64'] = sixtyFour;
    images['128'] = oneTwentyEight;
    images['256'] = twoFiftySix;

    twoFiftySix.onload = function () {
        var x = 0;
        var y = 0;
        for (var i = 0; i < 4; i++) {
            x = 0;
            for (var j = 0; j <4; j++) {
                ctx.drawImage(images[grid[i][j].toString()], x, y);
                x += 128;
            }
            y += 128;
        }
    };
};
