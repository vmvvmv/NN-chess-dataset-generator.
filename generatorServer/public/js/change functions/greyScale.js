// change image color to grey scale

function GreyScale ( canvasShedule ) {

    this.canvasShedule = canvasShedule;

}



function cloneImg( sourceImage ) {

    return $( this.currentImage).clone();

}

GreyScale.prototype.grey = function ( image, callback ) {

    this.canvasShedule.clearRect();

    var width = image.width;
    var height = image.height;

    this.canvasShedule.canvas.width = width;
    this.canvasShedule.canvas.height = height;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');

    this.canvasShedule.drawImage(image, 0, 0);

    console.log( this.canvasShedule.width);

    var imgPixels = this.canvasShedule.ctx.getImageData(0, 0, width, height);

    console.log(imgPixels);

    for(var y = 0; y < height; y++) {

    for(var x = 0; x < width; x++) {

            var i = (y * 4) * width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg;
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
            
        }
    

    }

    // this.canvasShedule.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        
    greyScaleSet.push( { imageSrc:imgPixels } );

    console.log(greyScaleSet);
    

    // RESET CANVAS FOR NEW DRAWING
    this.canvasShedule.canvas.width = 400;
    this.canvasShedule.canvas.height = 400;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');
    this.canvasShedule.clearRect();

}


