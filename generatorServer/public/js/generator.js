var generator = {};

generator.ready = function ready() {

    console.log('ready');
    console.log(state);
    console.log(figuresSet);

    console.log('===================READY IS FINISHED ====================');

}

generator.position = -1;
generator.setIsOver = false;

generator.next = function () {

        // console.log('grey set', greyScaleSet);
        // console.log('random shuffled state', shuffLedSet);
        // console.log('train data', trainingData);
        //-------------------------set is over code -------------------
        if( generator.setIsOver ) {

            console.log('set is over')
            return;

        }

        if( generator.position < figuresSet.length - 1 ){
            generator.position++;
        }
        else { 

            generator.setIsOver = true;
            console.log('set is over')
            return;
            
        }

// ------------- If set is not over - prev canvas shedule TEST
        
        prevCanvasShedule.clearRect();
        prevCanvasShedule.customDraw = drawSeq;


        // console.log(greyScaleSet);
        greyScale.grey(figuresSet[generator.position].image);
        var grayIM = greyScaleSet[generator.position];

        randomShuffled.shuffle(grayIM);
        var rIM = shuffLedSet[generator.position];

        var testState = makeDrawState(figuresSet[generator.position].image, grayIM, rIM);
        prevCanvasShedule.customDraw(testState);

        //---------------PART FOR TRAINING DATA GENERATOR -------------------------------


        for ( var i = 0; i < state.generedPerTitle; i++ ) {

            // console.log('train image generated');
            var newRim = shuffLedSet[generator.position];
            traningDataGenerator.makeTrainData( newRim );

        }

        sqCanvasShedule.clearRect('#d3d3d3');
        sqCanvasShedule.customDraw();


        //-------------------------------------------------------------------------------
    
}

generator.sequance = function () {

    if( !generator.setIsOver ) { 

            for ( var i = generator.position; i < figuresSet.length - 1; i++ ) {

                console.log( i );
                
                // this part must by async
                console.log(state.mode);
                if(state.mode === 0 )
                return;

                generator.next();

        }
    }

    else {

        console.log( 'set is over' );

    }

}

