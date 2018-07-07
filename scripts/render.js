const background = new Image(512, 512);
const border = new Image(128, 128);

const two = new Image(128, 128);
const four = new Image(128, 128);
const eight = new Image(128, 128);
const sixteen = new Image(128, 128);
const thrityTwo = new Image(128, 128);
const sixtyFour = new Image(128, 128);
const oneTwentyEight = new Image(128, 128);
const twoFiftySix = new Image(128, 128);
const fiveTwelve = new Image(128, 128);
const oneThousandTwentyEight = new Image(128, 128);
const twoThousandFourtyEight = new Image(128, 128);

// Note: these paths are relative to index.html's location
background.src = "img/background.png";
border.src = "img/border.png";

two.src = "img/2.png";
four.src = "img/4.png";
eight.src = "img/8.png";
sixteen.src = "img/16.png";
thrityTwo.src = "img/32.png";
sixtyFour.src = "img/64.png";
oneTwentyEight.src = "img/128.png"
twoFiftySix.src = "img/256.png"
fiveTwelve.src = "img/512.png"
oneThousandTwentyEight.src = "img/1024.png"
twoThousandFourtyEight.src = "img/2048.png"

const images = {};
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

// Everything drawn is scaled by .6 to fit inside the
// 306 by 665 canvas.

var restart_click = function(event) {
    relativeX = event.clientX - canvas.offsetLeft;
    relativeY = event.clientY - canvas.getBoundingClientRect().top;

    if (0 < relativeX && relativeX < canvas.width &&
        450 < relativeY && relativeY < canvas.height) {
        document.location.reload();
    }
    //console.log("X: " + event.clientX + " Y: " + event.clientY);
}

// Step 1: Check for arrival at destination, remove from list accordingly,
//         and if necessary, add new block to list with same start and
//         destination (indicating that the block is grow/shrinking).

// CANCEL: Check for blocks at destinations, set them to half value.

// Step 3: Draw. If a sliding block is near its destination, fade it.
//         How do you know the progress of a grow/shrinking block?

var render = function(timeNow) {
    ctx.fillStyle = "#f6f0ff"
    ctx.font = "bold 150px Source Sans Pro";
    ctx.textAlign = "center";

    if (game_over) {
        ctx.filter = "blur(5px)";
    }
    ctx.drawImage(background, 0, 0);
    //textWidth = ctx.measureText("5624").width;
    //console.log(textWidth);
    //153 - (textWidth / 2)

    if (!game_over){
        ctx.fillText(score.toString(), 256, 215);
    }

    let x = 0;
    let y = 290;
    for (let i = 0; i < 4; i++) {
        x = 0;
        for (let j = 0; j < 4; j++) {
            let action = null;
            let animating_block;
            for (let k = 0; k < animating_blocks.length; k++) {
                if (
                    animating_blocks[k].end.row === i &&
                    animating_blocks[k].end.col === j 
                ) {
                    action = animating_blocks[k].action;
                    animating_block = animating_blocks[k];
                    break;
                }
            }

            if (action === "slide") { // This block is sliding, don't show it at its destination yet
            /*
                let d_row = i - animating_block.start.row;
                let d_col = j - animating_block.start.col;
                if (timeNow - animating_block.startTime > 48) {
                    ctx.drawImage(images[grid[i][j]], 128*i, 128*j + 290);
                } else { 
                    // (distance) * (elapsedTime / animationTime)
                    let x = (128 * d_col) * ((timeNow - animating_block.startTime) / 48);
                    let y = (128 * d_row) * ((timeNow - animating_block.startTime) / 48);
                    ctx.drawImage(images[grid[i][j]], x, y + 290); // bugged, could be using doubled value
                }*/
            } else if (action === "promote") {

            } else if (action === "spawn") {
                ctx.drawImage(images[grid[i][j].toString()], x, y);
            } else if (grid[i][j] != 0) {
                ctx.drawImage(images[grid[i][j].toString()], x, y);
            }
            ctx.drawImage(border, x, y);
            x += 128;
        }
        y += 128;
    }

    for (let i = 0; i < animating_blocks.length; i++) {
        if (animating_blocks[i].action === "slide") {
            endRow = animating_blocks[i].end.row;
            endCol = animating_blocks[i].end.col;
            startRow = animating_blocks[i].start.row
            startCol = animating_blocks[i].start.col
            let d_row = endRow - startRow;
            let d_col = endCol - startCol;
            let startTime = animating_blocks[i].startTime;

            // distance travelled = elapsedTime * animationSpeed
            // animationSpeed = distance / animationTime = (128 * 3) / animationTime
            // timeToDestination = distance / animationSpeed

            timeToDestination = (d_row ? d_row : d_col) * 1000 / 3

            if (timeNow - startTime > timeToDestination) {
                
            }

            if (timeNow - startTime > 1000) {
                ctx.drawImage(images[grid[endRow][endCol]], 128*endCol, 128*endRow + 290);
                animating_blocks[i].action = "none";
            } else {
                // (distance) * (elapsedTime / animationTime) + (128 * startLocation)

                let x = (128 * d_col) * ((timeNow - startTime) / 1000) + (128 * startCol);
                let y = (128 * d_row) * ((timeNow - startTime) / 1000) + (128 * startRow);
                ctx.drawImage(images[grid[endRow][endCol]], x, y + 290); // bugged, could be using doubled value
            }
        }
    }

    if (game_over) {
        ctx.filter = "none";
        ctx.fillText("GAME", 256, 215);
        ctx.fillText("OVER", 256, 365);
        ctx.fillText(score.toString(), 256, 600);
        ctx.font = "75px Source Sans Pro";
        ctx.fillText("measly points", 256, 700);
        ctx.font = "bold 125px Source Sans Pro";
        ctx.fillText("RESTART", 256, 950);
        addEventListener("click", restart_click, false);
    }
    requestAnimationFrame(render);
};
