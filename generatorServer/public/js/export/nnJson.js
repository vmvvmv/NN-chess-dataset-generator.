
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
