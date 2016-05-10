require 'coffee-script/register'

chai = require 'chai'
should = chai.should()

describe 'Automated testing', ->
  describe 'with coffeescript test files', ->
    it 'should work', ->
      ( true ).should.equal true
