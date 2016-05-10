console.log( 'Hello!!!' );

function* jsRocksIsAwesome() {
    yield 'JS Rocks is Awesome';
    yield 'JS Rocks says JavaScript Rocks';
    return 'because JavaScript really rocks';
}

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
            console.log( '% Init SVG helper library!' );

            const jsRocks = jsRocksIsAwesome();

            console.log( jsRocks.next() );
            console.log( jsRocks.next() );
            console.log( jsRocks.next() );
        },

        // After page has been converted to html
        page: function pageF( page ) { // after page has been converted to html

            console.log( `page: ${ page }` );

            for ( var section of page.sections ) {
                console.log( 'section:', section.type, section.content );
                section.content = '<h1>LA MOUCHE</h1>' + section.content;
            }

            return page;
        },

        // This is called after the book generation
        finish: function finish() {
            console.log( '% Finish!' );
        }
    }
};
