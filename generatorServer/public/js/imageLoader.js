// script for load all images from figures-dataset. 
var figuresSet = [];

var greyScaleSet = [];

var shuffLedSet = [];

var trainingData = [];

// 1-2 black officer

function getType( index ) {

    switch(index) {

        // 1-5 black officer(bishop)
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return 'BO';
        // 6-10 black king
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return 'BKI';
        // 11-15 black knight
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            return 'BK';
        //  16 - 20 black pawn
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            return 'BP';
        // 21 - 25 black quen
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
            return 'BQ';
        // 26 - 30 black rock
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
            return 'BR';
        // 31 - 35 empy cell
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
            return 'EC';
        // 36 - 40 white officer
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
            return 'WO';
        // 41 - 45 white king
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
            return 'WKI';
        // 46 - 50 white knight
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
            return 'WK';
        //  51 - 55 white pawn
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
            return 'WP';
        // 56 - 60 white quen
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
            return 'WQ';
        // 61 - 65 white rock
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
            return 'WR';
        default:
            return 'NOT DATA SET DATA';
    }

}

// 39 size of original dataset
for( var i = 1; i <= 65; i++) { 

    var image = new Image();
    image.src = '';
    image.src = '../figures-dataset/' + i + '.png'; 

    figuresSet.push( { image:image, type: getType(i) } );

}

