path = require 'path'
chai = require 'chai'
expect = chai.expect
tester = require 'gitbook-tester'

describe 'SVG Inline Gitbook plugin', ->
  it 'should execute without hanging (wait, what?)', ( done ) ->
    @timeout 10000

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
