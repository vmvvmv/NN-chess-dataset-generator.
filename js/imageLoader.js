// script for load all images from figures-dataset. 
var figuresSet = [];

// 1-2 black officer

function getType( index ) {

    switch(index) {

        // 1-2 black officer
        case 1:
        case 2:
            return 'BO';
        // 3-4 black king
        case 3:
        case 4:
            return 'BKI';
        // 5-8 black knight
        case 5:
        case 6:
        case 7:
        case 8:
            return 'BK';
        //  9 - 13 black pawn
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
            return 'BP';
        // 14 - 15 black quen
        case 14:
        case 15:
            return 'BQ';
        // 16 - 19 black rock
        case 16:
        case 17:
        case 18:
        case 19:
            return 'BR';
        // 20 - 23 empy cell
        case 20:
        case 21:
        case 22:
        case 23:
            return 'EC';
        // 24 - 25 white officer
        case 24:
        case 25:
        // 26 - 27 white king
        case 26:
        case 27:
            return 'WKI';
        // 28 - 29 white knight
        case 28:
        case 29:
            return 'WK';
        //  30 - 33 white pawn
        case 30:
        case 31:
        case 32:
        case 33:
            return 'WP';
        // 34 - 35 white quen
        case 34:
        case 35:
            return 'WQ';
        // 36 - 39 white rock
        case 36:
        case 37:
        case 38:
        case 39:
            return 'WR';
        default:
            return 'NOT DATA SET DATA';
    }

}

// 39 size of original dataset
for( var i = 1; i < 39; i++) { 

    var image = new Image();
    image.src = '';
    image.src = 'figures-dataset/' + i + '.png'; 

    figuresSet.push( { image:image, type: getType(i) } );

}

console.log(figuresSet);

