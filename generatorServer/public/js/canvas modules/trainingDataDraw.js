// in future may be change canvas to DOM Images creator. This allow save training data sepparatly from 
// context menu in browser

drawTrainingData = function () {

    // console.log(sqCanvasShedule);

    // train data is trSize x trSize 

    var trSize = 50;

    sqCanvasShedule.ctx.font = "17px Arial";
    sqCanvasShedule.ctx.fillStyle="black";

    for ( var i = 0; i < sqCanvasShedule.height; i+= trSize) {

        for ( var j = 0; j < sqCanvasShedule.width; j+= trSize) {

            var index = i + ( j  / trSize );

            // console.log(index);

            if( index < trainingData.length - 1 ) {

                // console.log( trainingData[index]);
                // console.log(j, i);
                sqCanvasShedule.ctx.fillStyle="black";
                sqCanvasShedule.ctx.fillText( index  ,trSize + j + j, trSize + i * 2.5 );
                sqCanvasShedule.ctx.fillStyle="red";
                sqCanvasShedule.ctx.fillText( trainingData[index].type ,trSize + j + j, trSize+15 + i * 2.5  );

                sqCanvasShedule.putData( trainingData[index].imageSrc, trSize + j + j, trSize+17 + i * 2.5 , trSize, trSize);

            }
            else { 

                return;

            }

        }

    }

}

