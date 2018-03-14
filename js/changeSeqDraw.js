
function drawSeq ( drawState ) {

    this.clearRect();

    var offset = 100;

    this.ctx.font = "17px Arial";
    this.ctx.fillStyle="black";

    var orWidth = drawState.original.width;
    this.drawImage( drawState.original, 0 + offset, offset);
    this.ctx.fillText("original",0 + offset, offset / 2 );

    var grWidth = drawState.grayscale.width + orWidth;
    this.drawImage( drawState.grayscale, grWidth + offset , offset);
    this.ctx.fillText("grayscale", grWidth + offset , offset / 2);

    var rsWidth = drawState.randomShuffled.width + grWidth;
    this.drawImage( drawState.randomShuffled, rsWidth + offset * 2, offset);
    this.ctx.fillText("random shuffled",rsWidth + offset * 2, offset / 2);

}

function makeDrawState ( original, grayscale, randomShuffled ) {

    return { original:original, grayscale:grayscale, randomShuffled: randomShuffled }; 

}