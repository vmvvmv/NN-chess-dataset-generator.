window.onload = function() {

    initUI();

    // prev canvas shedule
    var prevCanvasShedule; 
    prevCanvasShedule = new canvasShedule('#set_item_change_preview' );
    prevCanvasShedule.clearRect();
    prevCanvasShedule.customDraw = drawSeq;

    // hidden canvas shedule
    var hiddenCanvasShedule = new canvasShedule('#hiddenImportCanvas' );

    // grey scale
    var greyScale = new GreyScale(hiddenCanvasShedule);

    // random shuffle

    var randomShuffled = new RandomShuffled(hiddenCanvasShedule);

    // sequance_canvas shedule

    var sqCanvasShedule = new canvasShedule('#sequance_canvas' );
    sqCanvasShedule.clearRect('#d3d3d3');
    
    // prev panel state test

    var grayIM = greyScale.grey(figuresSet[6].image);
    var rIM = randomShuffled.shuffle(grayIM);

    var testState = makeDrawState(figuresSet[6].image, grayIM, rIM);
    prevCanvasShedule.customDraw(testState);

    // 
}