var expect= require('expect.js');
var jsdom= require('jsdom');
require('dotenv').config();

var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');
var $ = global.jQuery = require('jquery')(dom.window);

require('jsdom-global')();
require('../src');

describe ('jquery-rndm-full', function(){
    var $section;
    var CLIENT_ID = process.env.CLIENT_ID;
    beforeEach(function(){
        window.rndmFull.setup('123');
        $section = $('section');
        $section.rndmFull();
    });

    it('should set claient id attr', function(){
        expect(window.rndmFull.clientId).to.be('123');
    });

    it('should have defined values', function(){
        $section.rndmFull({
            minHeight: '600px',
            backgroundSize: 'contain',
            backgroundPosition: 'top center',
            backgroundColor: 'red',
        });
        expect($section.css('minHeight')).to.be('600px');
        expect($section.css('backgroundSize')).to.be('contain');
        expect($section.css('backgroundPosition')).to.be('top center');
        expect($section.css('backgroundColor')).to.be('red');
    });

    it('should have default value', function(){
        expect($section.css('width')).to.be('100%');
        expect($section.css('minHeight')).to.be('800px');
        expect($section.css('backgroundSize')).to.be('cover');
        expect($section.css('backgroundPosition')).to.be('center');
        expect($section.css('backgroundColor')).to.be('black');
    });



    it('should set a random image from unsplash', function(){
        window.rndmFull.setup(CLIENT_ID);
        return $section.rndmFull({
            backgroundImage: 'path/imagen.jpg',
        })
            .then(function($this){
                expect($this.css('backgroundImage')).not.to.contain('path/imagen.jpg');
            })
            .catch(function($this){
                expect($this.css('backgroundImage')).to.contain('path/imagen.jpg');
            });
    });

    /* it('should set a random image from unsplash', function(){
        window.rndmFull.setup('123');
        return $section.rndmFull({
            backgroundImage: 'path/imagen.jpg',
        })
            .catch(function($this){
                expect($this.css('backgroundImage')).to.contain('path/imagen.jpg');
            });
    }); */
});


