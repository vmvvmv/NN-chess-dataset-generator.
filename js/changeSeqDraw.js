
function drawSeq ( drawState ) {

    this.clearRect();

    var offset = 20;

    var orWidth = drawState.original.width;
    this.drawImage( drawState.original, orWidth + offset, offset);

    var grWidth = drawState.grayscale.width + orWidth;
    this.drawImage( drawState.grayscale, grWidth + offset, offset);

    var rsWidth = drawState.randomShuffled.width + grWidth;
    this.drawImage( drawState.randomShuffled, rsWidth + offset, offset);

}

function makeDrawState ( original, grayscale, randomShuffled ) {

    return { original:original, grayscale:grayscale, randomShuffled: randomShuffled }; 

}