# Gitbook For Documentation

The idea of using Gitbook for documentation came from [Dan Abramov](https://github.com/gaearon) on 
[Redux](http://redux.js.org/).

The [GitBook]() FAQ has an entry about _[Can I use GitBook to publish an API documentation?](https://help.gitbook.com/basics/for-api-documentation.html)_
but as the time of writting it is empty.  

 
[Gitbook](https://github.com/GitbookIO/gitbook) should be well suited for documenting modules and is
especially welcome in this case to documenting a plugin for GitBook. 

## Starting from scratch     

    $ gitbook init


This creates `README.md` and `SUMMARY.md` in the root.
 
From there on, this can be served with

    $ gitbook serve
    
## Structure 

All other documentation is kept under the `./docs` directory and reference as follow in the `SUMMARY.md`: 

```
    * [Gitbook for documentation](docs/Gitbook_For_Documentation.md)
    
```

## Plugins

* [Prism](http://prismjs.com/) syntax highlight [@](https://plugins.gitbook.com/plugin/prism) 