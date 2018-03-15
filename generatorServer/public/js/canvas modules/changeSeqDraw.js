
function drawSeq ( drawState ) {

    this.clearRect();

    console.log(drawState);

    var offset = 100;

    this.ctx.font = "17px Arial";
    this.ctx.fillStyle="black";

    // original
    var orWidth = drawState.original.width;
    this.drawImage( drawState.original, 0 + offset, offset);
    this.ctx.fillText("original",0 + offset, offset / 2 );

    // greyScale
    var grWidth = drawState.grayscale.width + orWidth + offset;
    this.putData( drawState.grayscale.imageSrc, grWidth , offset, drawState.grayscale.width, drawState.grayscale.height);
    this.ctx.fillText("grayscale", grWidth , offset / 2);

    // random Shuffled
    var rsWidth = drawState.grayscale.width + grWidth + offset;
    this.putData( drawState.randomShuffled.imageSrc, rsWidth, offset);
    this.ctx.fillText("random shuffled",rsWidth, offset / 2);

}

function makeDrawState ( original, grayscale, randomShuffled ) {

    console.log('----============MAKE DRAW STATE =============-----');
    console.log(' params: ');
    console.log(original);
    console.log(grayscale);
    console.log(randomShuffled);
    console.log('-------------------------------------------------');

    //console log detailed
    console.log('!!!-------------------- -= DRAW STATE =-   TOP STATUS CANVAS------------!!!');
    console.log('original --->', original, ' width: ', original.width, ' height: ', original.height);
    console.log();
    console.log('grayscale --->', grayscale, ' width: ', grayscale.width, ' height: ', grayscale.height);
    console.log();
    console.log( 'randomShuffled may be grayscle, weakest part of drawing on this moment');
    console.log();
    console.log('randomShuffled --->', randomShuffled, ' width: ', randomShuffled.width, ' height: ', randomShuffled.height);


    return { original:original, grayscale:grayscale, randomShuffled: randomShuffled }; 

}