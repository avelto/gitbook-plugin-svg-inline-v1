path = require 'path'
expect = require( 'chai' ).expect
tester = require 'gitbook-tester'


describe 'The module should load ', ->
  describe 'as a nodejs module', ->

    plugin = require '..'

    it 'should load', () ->
      expect( plugin ).to.exist

    it 'and should have basic gitbook plugin declarations', () ->
      expect( plugin.website ).to.exist
      expect( plugin.blocks ).to.exist
      expect( plugin.filters ).to.exist
      expect( plugin.hooks ).to.exist
