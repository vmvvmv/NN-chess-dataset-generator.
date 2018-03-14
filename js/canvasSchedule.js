

function canvasShedule ( id ) {

    this.canvas = $( id ).get(0); 
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;

}

canvasShedule.prototype.clearRect = function () {

    this.ctx.fillStyle="white";
    this.ctx.fillRect(0,0,this.width,this.height);

}

canvasShedule.prototype.drawImage = function ( img, x, y ) { 

    this.ctx.drawImage( img,x,y );

}