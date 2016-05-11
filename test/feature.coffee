path = require 'path'
expect = require( 'chai' ).expect
tester = require 'gitbook-tester'

describe 'SVG Inline Gitbook plugin', ->
  it 'should load and generate basic content', ( done ) ->
    this.timeout 5000

    tester.builder()
    .withLocalPlugin path.join( __dirname, '..' )
    .withContent 'Hello World!'
    .create()
    .then ( result ) ->
      try
        expect( result[ 0 ].content ).to.equal '<p>Hello World!</p>'
        done()
      catch e
        done( e )
