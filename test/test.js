const expect = require( 'chai' ).expect;

describe( 'Automated testing (js)', () => {
    describe( 'with mocha', () => {
        it( 'should be there', () => {
            expect( true ).to.equal( true );
        } );

        it( 'should do something', () => {
            expect( false ).to.equal( false );
        } );
    } );
} );
