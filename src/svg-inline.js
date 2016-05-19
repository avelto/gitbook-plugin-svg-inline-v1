const fs = require( 'fs' );
const path = require( 'path' );
const async = require( 'async' );
const cheerio = require( 'cheerio' );

const GitbookSvg = function GitbookSvg( ref ) {
    this.gitbook = ref;
    // console.log( '% Init GitbookSvg' );
};

GitbookSvg.prototype.onPage = function ( gitbook, page, cb ) {
    const sections = page.sections.filter( function ( section ) {
        return section.type === 'normal';
    } );

    // sections.forEach( ( section ) => {
    async.each( sections, function ( section, nextSection ) {
        // console.log( 'section', section );
        const $section = cheerio.load( section.content );
        const imgs = $section( 'img' ).get();

        async.each( imgs, function ( el, nextImg ) {
            const file = $section( el ).attr( 'src' );
            let imgAlt = $section( el ).attr( 'alt' );
            const exec = /\s*\|\s*(\d*)\s*x\s*(\d*)\s*$/.exec( imgAlt );
            if ( exec && exec[ 0 ] ) imgAlt = imgAlt.replace( exec[ 0 ], '' );
            const imgWidth = ( exec && exec[ 1 ] ) ? exec[ 1 ] : undefined;
            const imgHeight = ( exec && exec[ 2 ] ) ? exec[ 2 ] : undefined;

            // console.log( 'img:', file, imgAlt, imgWidth, imgHeight );

            // Only process .svg files.
            if ( file.search( '.svg$' ) !== -1 ) {

                // Read the whole file and convert to dom
                const filePath = path.join( path.dirname( page.rawPath ), file );

                // console.log( file, dir );
                const fileContent = fs.readFileSync( filePath, 'utf8' );
                // fs.writeFileSync( '/Users/jpa/Dev/Docs/gitbook-plugin-svg-inline/out.txt', _file, 'utf8' );
                // const _file = fs.readFileSync( '/Users/jpa/Dev/Docs/gitbook-plugin-svg-inline/docs/resources/simple.svg', 'utf8' );

                const $svgContent = cheerio.load( fileContent, { xmlMode: true } );

                // Manipulate the svg to make it responsive.

                const width = $svgContent( 'svg' ).attr( 'width' );
                const height = $svgContent( 'svg' ).attr( 'height' );

                if ( imgWidth && imgHeight ) {
                    $svgContent( 'svg' ).attr( 'width', imgWidth );
                    $svgContent( 'svg' ).attr( 'height', imgHeight );

                    $svgContent( 'svg' ).removeAttr( 'width' );
                    $svgContent( 'svg' ).removeAttr( 'height' );
                    $svgContent( 'svg' ).attr( 'viewBox', '0 0 ' + width + ' ' + height + '' );
                    $svgContent( 'svg' ).attr( 'style', 'max-width: ' + imgWidth + 'px' );
                    $svgContent( 'svg' ).attr( 'preserveAspectRatio', 'xMinYMin meet' );
                } else {
                    $svgContent( 'svg' ).removeAttr( 'width' );
                    $svgContent( 'svg' ).removeAttr( 'height' );
                    $svgContent( 'svg' ).attr( 'viewBox', '0 0 ' + width + ' ' + height + '' );
                    $svgContent( 'svg' ).attr( 'style', 'max-width: ' + width + 'px' );
                    $svgContent( 'svg' ).attr( 'preserveAspectRatio', 'xMinYMin meet' );
                }

                // Highlight the selected element as specified by the anchor in the md.
                const links = $svgContent( 'a' ).get();
                // ##### Synchronously loop over each a tag within the SVG.
                async.each( links, function ( link, linksCB ) {
                    const anchor = link.attribs[ 'xlink:href' ];
                    // console.log( 'anchor:', imgAlt, '==', anchor );

                    if ( imgAlt === anchor ) {
                        $svgContent( link ).attr( 'style', 'stroke-width: 5; stroke: red;' );
                        return linksCB( null );
                    } else return linksCB( null );

                }, function ( error ) {
                    // Get a string reference of the current img element and replace it.
                    // Would have been nice to replace with cheerio but if the SVG get converted,
                    // it does not render anymore (despite the .xml())... Good enough for now.
                    const textElem = $section.html( el );
                    section.content = section.content.replace( textElem, $svgContent.xml() );
                    // section.content = '<h1>La mouche</h1>';

                    return nextImg( null );
                } );


                // const textElem = $section.html( el );
                // console.log( '% replacing:', textElem );
                // section.content = section.content.replace( textElem, $svgContent.xml() );
                // nextImg( null );
            } else nextImg( null );

        }, function ( error ) {
            // console.log( '% End loop over imgs' );
            // section.content = '<h1>La mouche</h1>';
            return nextSection( null );
        } );

    }, ( error ) => {
        // console.log( '% End loop over sections' );
        
        cb( page );
    } );

};

module.exports = GitbookSvg;
