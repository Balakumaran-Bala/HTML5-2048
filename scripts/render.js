var render = function() {
    var background = new Image(512, 512);
    var two = new Image(128, 128);
    var four = new Image(128, 128);
    var eight = new Image(128, 128);
    var sixteen = new Image(128, 128);
    var thrityTwo = new Image(128, 128);
    var sixtyFour = new Image(128, 128);
    var oneTwentyEight = new Image(128, 128);
    var twoFiftySix = new Image(128, 128);
    var fiveTwelve = new Image(128, 128);
    var oneThousandTwentyEight = new Image(128, 128);
    var twoThousandFourtyEight = new Image(128, 128);

    two.src = "./img/2.png";
    four.src = "../HTML5-2048/img/4.png";
    eight.src = "../HTML5-2048/img/8.png";
    sixteen.src = "../HTML5-2048/img/16.png";
    thrityTwo.src = "../HTML5-2048/img/32.png";
    sixtyFour.src = "../HTML5-2048/img/64.png";
    oneTwentyEight.src = "../HTML5-2048/img/128.png"
    twoFiftySix.src = "../HTML5-2048/img/256.png"
    fiveTwelve.src = "../HTML5-2048/img/512.png"
    oneThousandTwentyEight.src = "../HTML5-2048/img/1024.png"
    twoThousandFourtyEight.src = "../HTML5-2048/img/2048.png"
    background.src = "./img/background.png";

    var images = {};
    // images['0'] = blank;
    images['2'] = two;
    images['4'] = four;
    images['8'] = eight;
    images['16'] = sixteen;
    images['32'] = thrityTwo;
    images['64'] = sixtyFour;
    images['128'] = oneTwentyEight;
    images['256'] = twoFiftySix;
    images['512'] = fiveTwelve;
    images['1024'] = oneThousandTwentyEight;
    images['2048'] = twoThousandFourtyEight;

    background.onload = function () {
        ctx.drawImage(background, 0, 0);

        var x = 0;
        var y = 0;
        for (var i = 0; i < 4; i++) {
            x = 0;
            for (var j = 0; j <4; j++) {
                if (grid[i][j] != 0) {
                    ctx.drawImage(images[grid[i][j].toString()], x, y);
                }
                x += 128;
            }
            y += 128;
        }
    };
};
