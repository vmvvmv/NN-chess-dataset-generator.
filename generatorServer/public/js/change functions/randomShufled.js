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

    console.log();

    // this.canvasShedule.canvas.width = originalWidth;
    // this.canvasShedule.canvas.height = originalHeight;
    // this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');

    // this.canvasShedule.ctx.putImageData(imgPixels, 0, 0, 0, 0, originalWidth, originalHeight);

    // var image = new Image();
    // image.src = this.canvasShedule.canvas.toDataURL("image/png", 1);

    // this.canvasShedule.clearRect();
    
    // return image;

}
