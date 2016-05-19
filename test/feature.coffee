fs = require 'fs'
path = require 'path'
path = require 'path'
expect = require( 'chai' ).expect
tester = require 'gitbook-tester'

describe 'SVG Inline Gitbook plugin', ->
  this.timeout 5000

  it 'should load and generate basic content', ( done ) ->
    tester.builder()
    .withLocalPlugin path.join( __dirname, '..' )
    .withContent 'Hello World!'
    .create()
    .then ( result ) ->
      try
        expect( result[ 0 ].content ).to.equal '<p>Hello World!</p>'
        done()
      catch done

  it 'should process external content and compare it against the output', ( done ) ->
    input = fs.readFileSync( path.join( __dirname, 'input.md' ), 'utf-8' ).trim()
    output = fs.readFileSync( path.join( __dirname, 'output.html' ), 'utf-8' ).trim()

    tester.builder()
    .withLocalPlugin path.join( __dirname, '..' )
    .withContent input
    .create()
    .then ( result ) ->
      try
        expect( result[ 0 ].content ).to.equal output
        done()
      catch done

  it 'should process external content with svgs and compare it against the expected output', ( done ) ->
    input = fs.readFileSync( path.join( __dirname, 'input_with_svg.md' ), 'utf-8' ).trim()
    svg = fs.readFileSync( path.join( __dirname, 'simple.svg' ), 'utf-8' ).trim()
    output = fs.readFileSync( path.join( __dirname, 'output_with_svg.html' ), 'utf-8' ).trim()


    tester.builder()
    .withLocalPlugin path.join( __dirname, '..' )
    .withContent input
    .withFile 'simple.svg', svg
    .create()
    .then ( result ) ->
      try
        content = result[ 0 ].content
        #console.log content
        expect( content ).to.equal output
        done()
      catch e
        #console.log 'error', e
        done( e )
