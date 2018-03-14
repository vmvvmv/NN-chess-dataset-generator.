window.onload = function() {

    // prev canvas shedule
    var prevCanvasShedule; 
    prevCanvasShedule = new canvasShedule('#set_item_change_preview' );
    prevCanvasShedule.clearRect();
    prevCanvasShedule.customDraw = drawSeq;

    // hidden canvas shedule
    var hiddenCanvasShedule = new canvasShedule('#hiddenImportCanvas' );

    // grey scale
    var greyScale = new GreyScale(hiddenCanvasShedule);
    var grayIM = greyScale.grey(figuresSet[6].image);

    // random shuffle

    var randomShuffled = new RandomShuffled(hiddenCanvasShedule);
    var rIM = randomShuffled.shuffle(grayIM);
    rIM = randomShuffled.shuffle(rIM);
    rIM = randomShuffled.shuffle(rIM);
    rIM = randomShuffled.shuffle(rIM);
    
    // prev panel state
    var testState = makeDrawState(figuresSet[6].image, grayIM, rIM);
    prevCanvasShedule.customDraw(testState);

    // sequance_canvas shedule

    var sqCanvasShedule = new canvasShedule('#sequance_canvas' );
    sqCanvasShedule.clearRect('#d3d3d3');


}