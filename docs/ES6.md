# ES6

## Currently supported by node

Current node version is `5.10.1`.

The ES2015 support overview can be checked at [node.green](http://node.green/).
   
For the foreseen use of this module, it seems the transpiling is not necessary.  

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