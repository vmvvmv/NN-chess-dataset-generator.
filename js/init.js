window.onload = function() {

    initUI();

    var prevCanvasShedule = new canvasShedule('#set_item_change_preview' );; 
    var sqCanvasShedule = new canvasShedule('#sequance_canvas' );
    var hiddenCanvasShedule = new canvasShedule('#hiddenImportCanvas' );

    var greyScale = new GreyScale(hiddenCanvasShedule);
    var randomShuffled = new RandomShuffled(hiddenCanvasShedule);


    // prev canvas shedule TEST
    sqCanvasShedule.clearRect('#d3d3d3');
    prevCanvasShedule.clearRect();
    prevCanvasShedule.customDraw = drawSeq;

    var grayIM = greyScale.grey(figuresSet[6].image);
    var rIM = randomShuffled.shuffle(grayIM);

    var testState = makeDrawState(figuresSet[6].image, grayIM, rIM);
    prevCanvasShedule.customDraw(testState);

    // 
}