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
    
        var grayIM = greyScale.grey(figuresSet[generator.position].image);
        // var rIM = randomShuffled.shuffle(grayIM);
    
        var testState = makeDrawState(figuresSet[generator.position].image, grayIM, grayIM);
        prevCanvasShedule.customDraw(testState);

        if( generator.position < figuresSet.length - 1 )
            generator.position++;
        else 
            console.log('set is over');

}

generator.sequance = function () {

    for ( var i = generator.position; i < figuresSet.length - 1; i++ ) {

        if(state.mode === 0 )
        return;



        generator.next();

    }

}

