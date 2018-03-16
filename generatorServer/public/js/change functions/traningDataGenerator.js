function TraningDataGenerator ( canvasShedule ) {

    this.canvasShedule = canvasShedule;

    this.trainWidth = 25;
    this.trainHeight = 25;

    //deegre
    this.maxRotaionAngle = 7;

}

function deegreToRadians (degrees) {

    return degrees * Math.PI / 180;

};

TraningDataGenerator.prototype.getRandomRotaion = function () {

    var random = Math.random();
    var randomAngle = this.maxRotaionAngle * random;

    var random2 = Math.random();

    random2 > 0.5 ? randomAngle*= -1: randomAngle;

    console.log(randomAngle);

    return deegreToRadians(randomAngle);

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

        that.canvasShedule.clearRect('#d3d3d3');
        //------------------RANDOM ROTAION ---------------------------

        // console.log(that.getRandomRotaion());

        var randomRotation = that.getRandomRotaion();
        //-----------------------------------------------------------

        var x = that.canvasShedule.canvas.width / 2;
        var y = that.canvasShedule.canvas.height / 2;
        var width =  that.trainWidth;
        var height = that.trainHeight;

        that.canvasShedule.ctx.translate(x, y);
        that.canvasShedule.ctx.rotate(randomRotation);
        that.canvasShedule.ctx.drawImage(fitImage, -width / 2, -height / 2, width, height);
        that.canvasShedule.ctx.rotate(-randomRotation);
        that.canvasShedule.ctx.translate(-x, -y);

        // debugger;


        // that.canvasShedule.ctx.drawImage( fitImage, 0, 0, that.trainWidth,  that.trainHeight );
    
        // debugger;
    
        var imgPixels = that.canvasShedule.ctx.getImageData(0, 0, that.trainWidth, that.trainHeight);
    
        // console.log(imgPixels);// NEED add type of piece
        trainingData.push( { imageSrc:imgPixels, type: type} );
    

        sqCanvasShedule.clearRect('#d3d3d3');
        sqCanvasShedule.customDraw();

    };




}