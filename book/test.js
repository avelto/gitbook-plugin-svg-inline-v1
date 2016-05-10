require( [ 'gitbook' ], function ( gitbook ) {
    gitbook.events.bind( 'page.change', () => {
        console.log( 'page.change' );
    } );

    gitbook.events.bind( 'exercise.submit', () => {
        console.log( 'exercise.submit' );
    } );
} );
