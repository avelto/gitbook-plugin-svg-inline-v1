# NPM Package

## package.json

    npm init
    
## Use of the plugin itself within the documentation of this very plugin

To use this plugin to generate the documentation for itself: 
In `book.json`:
```json
{
    "plugins": [
        "svg-inline"
    ]
}
```

For `gitbook` to find it, we need to

Generic approach:
```bash
npm link
npm link gitbook-plugin-svg-inline
```

Or for this case, just:
```bash
cd node_modules
ln -s .. gitbook-plugin-svg-inline
```


We should end up with
    
    lrwxr-xr-x    1 jpa  staff     2B May 10 10:54 gitbook-plugin-svg-inline -> ..
    