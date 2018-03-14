
function start () {

    state.isPlayed = true;
    console.log('start');


}

function stop () {

    state.isPlayed = false;
    console.log('stop');

}

function next () {

    console.log('next');

}

function initUI() {

    $( '#start' ).click(start);
    $( '#stop' ).click(stop);
    $( '#next' ).click(next);

}

// $( '#start' ).get(0).click(start);
// console.log($( '#start' ));