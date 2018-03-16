var generator = {};

generator.ready = function ready() {

    console.log('ready');
    console.log(state);
    console.log(figuresSet);

    console.log('===================READY IS FINISHED ====================');

    $("#status").html('dataset is loaded <br> length:' + figuresSet.length + '<br>'
        + ' for start generate click > <br>' + 'or change mode to <br> <b>sequance </b> and click START' 
        + '<br> set up <b>range</b>(optional)');


}

generator.position = -1;
generator.setIsOver = false;

generator.next = function () {

    //-------------------------set is over code -------------------
    if( generator.setIsOver ) {

        
        console.log('generated items: ', trainingData.length );
        console.log('grey set', greyScaleSet);
        console.log('random shuffled state', shuffLedSet);
        console.log('train data', trainingData);
        console.log('---------------------------------------------')
        console.log('set is over')
        console.log('for new generation reload page')
        return;

    }
    if( generator.position < figuresSet.length - 1 ) {

        generator.position++;

        if( generator.position  ===  figuresSet.length - 1) {

            generator.setIsOver = true;
            console.log('set is over');
            // console.log('');

            $("#status").html('For download data click download zip');

        }

    }

    // ------------ If set is not over - prev canvas shedule TEST
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
        var type = getType(generator.position + 1);
        traningDataGenerator.makeTrainData( newRim, type );

    }

}

generator.sequance = function () {

    if( !generator.setIsOver ) { 

            for ( var i = generator.position; i < figuresSet.length - 1; i++ ) {

                if(state.mode === 0 )
                return;

                generator.next();

        }
    }

    else {

        console.log( 'set is over' );

    }

}

