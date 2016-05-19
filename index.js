const fs = require( 'fs' );
const path = require( 'path' );

const SvgInline = require( './src/svg-inline' );

module.exports = {
    // Extend ebook resources and html
    website: {
        assets: './book',
        js: [
            'test.js'
        ],
        css: [
            'test.css'
        ],
        html: {
            'html:start': function htmlStart() {
                return `<!-- Start book ${ this.options.title } -->`;
            },
            'html:end': function htmlEnd() {
                return `<!-- End of book ${ this.options.title } -->`;
            },

            'head:start': '<!-- head:start -->',
            'head:end': '<!-- head:end -->',

            'body:start': '<!-- body:start -->',
            'body:end': '<!-- body:end -->'
        }
    },

    // Extend templating blocks
    blocks: {
        // Author will be able to write "`{% myTag %}World{% endMyTag %}`"
        myTag: {
            process: function myTag( blk ) {
                return `Hello ${ blk.body }`;
            }
        }
    },

    // Extend templating filters
    filters: {
        // Author will be able to write "{{ 'test'|myFilter }}"
        myFilter: function myFilter( s ) {
            return `Hello ${ s }`;
        }
    },

    // Hook process during build
    hooks: {
        // For all the hooks, this represent the current generator

        // This is called before the book is generated
        init: function init() {
            console.log( 'info: init svg inline plugin' );

            this.svgInlinePlugin = new SvgInline( this );
        },

        // After page has been converted to html
        page: function pageF( page ) { // after page has been converted to html

            // console.log( `page: ${ page }` );

            // for ( var section of page.sections ) {
            //     // console.log( 'section:', section.type, section.content );
            //     section.content = '<h1>LA MOUCHE</h1>' + section.content;
            // }

            // let ref;
            //
            this.svgInlinePlugin.onPage( this, page, function ( result ) {
                // console.log( 'result', result );
                // ref = result;
            } );

            // for ( let i = 0; i <= page.sections.length; i++ ) {
            //     // console.log( 'section', page.sections[ i ] );
            //     if ( page.sections[ i ] ) {
            //         page.sections[ i ].content = '<h1>LA MOUCHE</h1>' + page.sections[ i ].content;
            //     }
            // }

            // page.content = '<h1><WHAT THE FUCK??</h1>' + page.content;
            // console.log( page );
            return page;
        },

        // This is called after the book generation
        finish: function finish() {
            console.log( 'info: svg inling plugin done' );

            console.log( 'info: patching style.css' );
            const _styleFilePath = path.join( process.cwd(), '_book/gitbook/style.css' );
            const _style = fs.readFileSync( _styleFilePath, 'utf8' );
            const _out = _style.replace( /font-size:inherit/, '' );
            // console.log( _out );

            fs.writeFileSync( _styleFilePath, _out );

        }
    }
};
