var expect= require('expect.js');
var jsdom= require('jsdom');

var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');
var $ = global.jQuery = require('jquery')(dom.window);

require('../src');

describe ('jquery-rndm-full', function(){
    it('should have a width of 100%', function(){
        $('section').rndmFull();
        expect($('section').css('width')).to.be('100%');
    });
});
