function TraningDataGenerator ( canvasShedule ) {

    this.canvasShedule = canvasShedule;

    this.trainWidth = 25;
    this.trainHeight = 25;

}

TraningDataGenerator.prototype.makeTrainData = function ( image, type ) {


    this.canvasShedule.canvas.width = image.width;
    this.canvasShedule.canvas.height = image.height;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');
    this.canvasShedule.clearRect();
    this.canvasShedule.putData(image.imageSrc, 0, 0, image.width, image.height);
    // debugger;

    var fitImage = new Image();
    fitImage.src = this.canvasShedule.canvas.toDataURL();

    var that = this;
    fitImage.onload = function() {

        that.canvasShedule.clearRect();
        that.canvasShedule.ctx.drawImage( fitImage, 0, 0, that.trainWidth,  that.trainHeight );
    
        // debugger;
    
        var imgPixels = that.canvasShedule.ctx.getImageData(0, 0, that.trainWidth, that.trainHeight);
    
        // console.log(imgPixels);// NEED add type of piece
        trainingData.push( { imageSrc:imgPixels, type: type} );
    
        that.canvasShedule.canvas.width = image.width;
        that.canvasShedule.canvas.height = image.height;
        that.canvasShedule.ctx = that.canvasShedule.canvas.getContext('2d');
        that.canvasShedule.clearRect();

        sqCanvasShedule.clearRect('#d3d3d3');
        sqCanvasShedule.customDraw();

    };




}