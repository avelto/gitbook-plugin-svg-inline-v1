# ES6 and ES7

## Currently supported by node

Current node version is `5.10.1` and some features are already available for for the need of this
module, we might want to use async/await and use Babel transpiling... 

The ES2015 support overview can be checked at [node.green](http://node.green/).
      

## In case transpiling is needed...

### Setting up Babel for transpiling with Babel

```bash
    npm install --save-dev babel-cli
    npm install --save-dev babel-preset-es2015
    # to support generators: 
    npm install --save-dev babel-polyfill
```

### Manual transpiling

    babel src -d lib
     
### Webstorm
 
[Setup](http://mcculloughwebservices.com/2015/12/10/webstorm-babel-6-plugin/)
    
## ES6 highlights

### Generators to loop over an array with asynchronous calls
 
