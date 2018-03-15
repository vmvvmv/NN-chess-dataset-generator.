
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

    console.log(' params ', original, grayscale, randomShuffled);

    console.log(' -= DRAW STATE =-   TOP STATUS CANVAS');

    console.log('original --->', original, ' width: ', original.width, ' height: ', original.height);
    console.log();
    console.log('grayscale --->', grayscale, ' width: ', grayscale.width, ' height: ', grayscale.height);
    console.log();
    console.log( 'randomShuffled may be grayscle, weakest part of drawing on this moment');
    console.log();
    console.log('randomShuffled --->', randomShuffled, ' width: ', randomShuffled.width, ' height: ', randomShuffled.height);

    console.log(' for grayscale and randomShuffled needed hidden canvas resize, sometimes resize to 0');
    console.log(' possible async when created imageDOM element');

    return { original:original, grayscale:grayscale, randomShuffled: randomShuffled }; 

}