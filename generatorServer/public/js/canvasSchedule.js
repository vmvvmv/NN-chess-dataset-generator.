
// simple API for select canvas and draw on

function canvasShedule ( id ) {

    this.canvas = $( id ).get(0); 
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // function for drawe on custom order
    this.customDraw;
}

canvasShedule.prototype.clearRect = function ( color ) {

    color = color || 'white'

    this.ctx.fillStyle=color;
    this.ctx.fillRect(0,0,this.width,this.height);

}

canvasShedule.prototype.drawImage = function ( img, x, y ) { 

    this.ctx.drawImage( img,x,y );

}

canvasShedule.prototype.putData = function ( imgSrc, x, y ) { 

    this.ctx.putImageData(imgSrc, x, y, 0, 0, imgPixels.width, imgPixels.height);


}

