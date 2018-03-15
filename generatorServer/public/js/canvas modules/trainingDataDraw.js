// in future may be change canvas to DOM Images creator. This allow save training data sepparatly from 
// context menu in browser

drawTrainingData = function () {

    // console.log(sqCanvasShedule);

    // train data is 25 x 25 

    sqCanvasShedule.ctx.font = "17px Arial";
    sqCanvasShedule.ctx.fillStyle="black";

    for ( var i = 0; i < sqCanvasShedule.height; i+= 25) {

        for ( var j = 0; j < sqCanvasShedule.width; j+= 25) {

            var index = i + ( j  / 25 );

            // console.log(index);

            if( index < trainingData.length - 1 ) {

                // console.log( trainingData[index]);
                // console.log(j, i);
                sqCanvasShedule.ctx.fillText(index ,25 + j + j, 25 + i + 25*(i/25) );
                sqCanvasShedule.putData( trainingData[index].imageSrc, 25 + j + j, 25 + i + 25*(i/25), 25, 25);

            }
            else { 

                return;

            }

        }

    }

}

