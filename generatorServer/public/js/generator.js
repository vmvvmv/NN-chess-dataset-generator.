var generator = {};

generator.ready = function ready() {

    console.log('ready');
    console.log(state);
    console.log(figuresSet);

    console.log('===================READY IS FINISHED ====================');

}

generator.position = 0;

generator.next = function () {

        // prev canvas shedule TEST
        sqCanvasShedule.clearRect('#d3d3d3');
        prevCanvasShedule.clearRect();
        prevCanvasShedule.customDraw = drawSeq;


        // console.log(greyScaleSet);
        greyScale.grey(figuresSet[generator.position].image);
        var grayIM = greyScaleSet[generator.position];

        randomShuffled.shuffle(grayIM);
        var rIM = shuffLedSet[generator.position];

        var testState = makeDrawState(figuresSet[generator.position].image, grayIM, rIM);
        prevCanvasShedule.customDraw(testState);

        //-------------------------set is over code -------------------
        if( generator.position < figuresSet.length - 1 )
            generator.position++;
        else 
            console.log('set is over')
    
}

generator.sequance = function () {

    for ( var i = generator.position; i < figuresSet.length - 1; i++ ) {

        console.log( i );

        if(state.mode === 0 )
        return;

        generator.next();

    }

}

