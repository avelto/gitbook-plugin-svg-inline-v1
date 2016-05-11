#require( 'source-map-support' ).install()
#require 'coffee-script/register'

expect = require( 'chai' ).expect
tester = require 'gitbook-tester'

describe 'Gitbook Tester', ->
  describe 'module', ->
    it 'should exist', () ->
      expect( tester ).to.exist

    it 'should generate basic content', ( done ) ->
      this.timeout 3000
      tester.builder()
      .withContent 'Hello World!'
      .create()
      .then ( result ) ->
        expect( result[ 0 ].content ).to.equal '<p>Hello World!</p>'
        done()
