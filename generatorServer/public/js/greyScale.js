// change image color to grey scale

function GreyScale ( canvasShedule ) {

    this.canvasShedule = canvasShedule;

    this.currentImage = new Image();

}



function cloneImg( sourceImage ) {

    return $( this.currentImage).clone();

}

GreyScale.prototype.grey = function ( image, callback ) {

    this.canvasShedule.clearRect();

    // console.log(callback);

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
    
        if(y === height - 1) {

            this.canvasShedule.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
            this.currentImage.src = this.canvasShedule.canvas.toDataURL("image/png", 1);

            var image = new Image();
            image.src =  this.currentImage.src;

            console.log(this.currentImage.src);


            this.canvasShedule.canvas.width = 400;
            this.canvasShedule.canvas.height = 400;
            this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');
            this.canvasShedule.clearRect();
        
            // possible return image data and call putData instead drawImage
            // console.log('clon here');
            // return cloneImg(this.currentImage); 

            return image;

        }
    }

}


