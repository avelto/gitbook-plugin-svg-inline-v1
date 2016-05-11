# Automated Testing

## Mocha with coffee
    npm install --save-dev mocha coffee-script
    mocha --compilers coffee:coffee-script/register

## Webstorm

Mocha tests can be run from Webstorm directly.   


## Travis CI

todo


## Gitbook Tester

[Gitbook Tester](https://github.com/todvora/gitbook-tester) will be used to faciliate tests of of 
the plugin.

    npm install --save-dev gitbook-tester

Warning, `path.join( __dirname, '..' )` and `catch/try` for the assetion must be used, otherwise the test will hang.

```coffeescript
    tester.builder()
    .withLocalPlugin path.join( __dirname, '..' )
    .withContent 'Hello World!'
    .create()
    .then ( result ) ->
    try 
        expect( result[ 0 ].content ).to.equal '<p>Hello World!</p>'
        done()
    catch e
        done e
```
