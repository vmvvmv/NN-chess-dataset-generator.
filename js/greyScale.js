// change image color to grey scale

function GreyScale ( canvasShedule ) {

    this.canvasShedule = canvasShedule;

}

GreyScale.prototype.grey = function ( image, callback ) {

    this.canvasShedule.clearRect();

    console.log(callback);

    var width = image.width;
    var height = image.height;

    this.canvasShedule.canvas.width = width;
    this.canvasShedule.canvas.height = height;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');

    this.canvasShedule.drawImage(image, 0, 0);

    console.log( this.canvasShedule.width);

    var imgPixels = this.canvasShedule.ctx.getImageData(0, 0, width, height);

    for(var y = 0; y < height; y++) {

    for(var x = 0; x < width; x++) {

            var i = (y * 4) * width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg;
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
            
        }
    }

    this.canvasShedule.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

    var image = new Image();
    console.log('image onload start');
    var that = this;
    image.onload = function() {
        
        image.src = this.canvasShedule.canvas.toDataURL("image/png", 1);

        that.canvasShedule.canvas.width = 400;
        that.canvasShedule.canvas.height = 400;
        that.canvasShedule.ctx = that.canvasShedule.canvas.getContext('2d');
        that.canvasShedule.clearRect();
        
        console.log(callback, 'image callback');
        callback(image);

    };


}


