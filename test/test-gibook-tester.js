const path = require ( 'path' );
const expect = require( 'chai' ).expect;

const tester = require( 'gitbook-tester' );

describe( 'Gitbook Tester (js)', () => {
    describe( 'as a node module', function () {

        it( 'should not be null', function () {
            expect( tester ).to.exist;
        } );

        it( 'should produce content', function ( done ) {
            this.timeout( 10000 );

            tester.builder()
                .withContent( 'Hello World!' )
                .create()
                .then( function ( result ) {
                    expect( result[ 0 ].content ).to.exist;
                    done();
                } );
        } );

    } );
} );

