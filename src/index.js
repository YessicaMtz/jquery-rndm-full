/**
 * jquery-rndm-full
 * @version 0.0.0-development
 * @author Yessi Mtz
 * @license Mit
 **/

(function($){
    $.fn.rndmFull = function(){
        $(this).css({
            width: '100%',
            height: '100vh',
            minHeight: '800px'
        });
        return $(this);
    };
})(jQuery);


