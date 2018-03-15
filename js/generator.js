var generator = {};

generator.ready = function ready() {

    console.log('ready');
    console.log(state);
    console.log(figuresSet);

}

generator.position = 0;

generator.next = function () {

        // prev canvas shedule TEST
        sqCanvasShedule.clearRect('#d3d3d3');
        prevCanvasShedule.clearRect();
        prevCanvasShedule.customDraw = drawSeq;

        var grayIM;

        var callback = function( image ) {

            grayIM = image;
            console.log( 'grayIM in callback seqDraw', grayIM );

            var testState = makeDrawState(figuresSet[generator.position].image, grayIM, grayIM);
            prevCanvasShedule.customDraw(testState);
    
            if( generator.position < figuresSet.length - 1 )
                generator.position++;
            else 
                console.log('set is over');
            
        }

        greyScale.grey(figuresSet[generator.position].image, callback);
        // var rIM = randomShuffled.shuffle(grayIM);
    
}

generator.sequance = function () {

    for ( var i = generator.position; i < figuresSet.length - 1; i++ ) {

        if(state.mode === 0 )
        return;



        generator.next();

    }

}

