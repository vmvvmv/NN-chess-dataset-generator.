window.onload = function() {


    window.prevCanvasShedule = new canvasShedule('#set_item_change_preview' );; 
    window.sqCanvasShedule = new canvasShedule('#sequance_canvas' );
    window.hiddenCanvasShedule = new canvasShedule('#hiddenImportCanvas' );

    window.sqCanvasShedule.customDraw = drawTrainingData;

    window.greyScale = new GreyScale(hiddenCanvasShedule);
    window.randomShuffled = new RandomShuffled(hiddenCanvasShedule);
    window.traningDataGenerator = new TraningDataGenerator(hiddenCanvasShedule); 

    // 
    generator.ready();
    generator.next();

    initUI();
}