
console.log('NN');

//  output issue might be if same piece but different color | first set all labels
//  output [ BO, BKI, BK, BP, BQ, BR, EC, WKI, WK, WP, WQ, WR  ]
//  input [ (gray pixel) to 0-1, ..... ] to all images current 25x25 - > 625 input layer
//  output if BO [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0  ]

var exportTrainingSet = [];

var outputLabels =  [ 'BO', 'BKI', 'BK', 'BP', 'BQ', 'BR', 'EC', 'WKI', 'WK', 'WP', 'WQ', 'WR' ];

function generateOutput ( type ) {

    var output = [0,0,0,0,0,0,0,0,0,0,0,0];

    var correctAnswer = outputLabels.indexOf( type );

    output[correctAnswer] = 1;

    return output;

}

function generateInput ( dataArr ) {

    
    var normalArray = Array.from(dataArr);
    // console.log(normalArray);

    var input = [];

    // 625

    for ( var i = 0; i < normalArray.length - 3; i+=4 ) {

        var pixelRGBsumm = normalArray[i] + normalArray[i + 1] + normalArray[i + 2];

        input.push( pixelRGBsumm / 255);

    }

    return input;

}

function createExportJson() {

    for ( var tr of trainingData ) {

        var input = generateInput( tr.imageSrc.data );
        var output = generateOutput(tr.type);

        exportTrainingSet.push( { input:input, output: output } );

    }

}


downloadJSON = function () {

    createExportJson();

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportTrainingSet));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "chess-nn.json");
    dlAnchorElem.click();

    console.log( 'Browser may block large JSON',exportTrainingSet );
    exportTrainingSet = [];

}

