// random change image by resize

function RandomShuffled ( canvasShedule ) {

    this.canvasShedule = canvasShedule;

}

RandomShuffled.prototype.shuffle = function ( image ) {


    var originalWidth = image.width;
    var originalHeight = image.height;


    // RANDOM RESIZING
    var randomResizeWidth = Math.random() * 2000 + 100;
    var randomResizeHeight = Math.random() * 2000 + 100;

    // // range for resizing
    this.canvasShedule.canvas.width = randomResizeWidth;
    this.canvasShedule.canvas.height = randomResizeHeight;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');
    this.canvasShedule.clearRect();

    this.canvasShedule.putData(image.imageSrc, 0, 0, randomResizeWidth, randomResizeHeight);
    var imgPixels = this.canvasShedule.ctx.getImageData(0, 0, randomResizeWidth, randomResizeHeight);

    // console.log(' start Random shuffled');
    // console.log('------------------------------------------------------');

    // console.log(imgPixels);

    this.canvasShedule.canvas.width = originalWidth;
    this.canvasShedule.canvas.height = originalHeight;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');
    // this.canvasShedule.clearRect();
    this.canvasShedule.ctx.putImageData(imgPixels, 0, 0, 0, 0, randomResizeWidth, randomResizeHeight);

    var shuffledSrc = this.canvasShedule.ctx.getImageData(0, 0, originalWidth, originalHeight);
    this.canvasShedule.clearRect();

    // console.log(shuffledSrc);

    shuffLedSet.push( { imageSrc: shuffledSrc, width:originalWidth, height: originalHeight  } );

    // console.log(shuffLedSet);

    // console.log('------------------------------------------------------');


}
