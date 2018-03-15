function TraningDataGenerator ( canvasShedule ) {

    this.canvasShedule = canvasShedule;

    this.trainWidth = 50;
    this.trainHeight = 50;

}

TraningDataGenerator.prototype.makeTrainData = function ( image, type ) {

    // console.log(image);

    // console.log(this.trainWidth, this.trainHeight);

    this.canvasShedule.canvas.width = this.trainWidth;
    this.canvasShedule.canvas.height = this.trainHeight;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');
    this.canvasShedule.clearRect();

    this.canvasShedule.putData(image.imageSrc, 0, 0,  image.width,  image.height);

    // var imageBitmap = createImageBitmap(image.imageSrc);
    var image = new Image(this.trainWidth, this.trainHeight);

    image.src =  this.canvasShedule.canvas.toDataURL();

    this.canvasShedule.drawImage(image, image.width,  image.height);

    var imgPixels = this.canvasShedule.ctx.getImageData(0, 0, this.trainWidth, this.trainHeight);

    // console.log(imgPixels);// NEED add type of piece
    trainingData.push( { imageSrc:imgPixels, type: type} );

    this.canvasShedule.canvas.width = image.width;
    this.canvasShedule.canvas.height = image.height;
    this.canvasShedule.ctx = this.canvasShedule.canvas.getContext('2d');
    this.canvasShedule.clearRect();

}