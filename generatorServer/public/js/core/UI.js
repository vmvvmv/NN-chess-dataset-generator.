
function start () {

    state.isPlayed = true;
    console.log('start');

    if ( state.mode === 0 ) {

        console.log( ' for sequance must be mode on ' );

    } else {

        generator.sequance();

    }

}

function stop () {

    state.isPlayed = false;
    console.log('stop');

}

function next () {

    generator.next();
    console.log('next');

}

function initUI() {

    $( '#start' ).click(start);
    $( '#stop' ).click(stop);
    $( '#next' ).click(next);

    $('input[type=range]').on('input', function ( ) {
        state.generedPerTitle = $(this).val();
        console.log('range value ->', state.generedPerTitle);
        $("#range").html(state.generedPerTitle);
    });

    $("#changeState").click(function(){

        state.mode = $("input[name='changeState']:checked").val();
        console.log( 'state mode ->', state.mode);

    });

    $('#json').click( downloadJSON );

}

