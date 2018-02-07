/**
 * jquery-rndm-full
 * @version 1.0.1
 * @author Yessi Mtz
 * @license Mit
 **/

(function(global, $){
    function RndmFull(){

    }

    RndmFull.prototype.setup = function(clientId){
        this.clientId = clientId;

    };

    $.fn.rndmFull = function(options){
        options = options || {};

        $(this).css({
            width: '100%',
            height: '100vh',
            minHeight: options.minHeight || '800px',
            backgroundSize: options.backgroundSize || 'cover',
            backgroundPosition: options.backgroundPosition || 'center',
            backgroundColor: options.backgroundColor || 'black',
        });

        var def= $.Deferred();
        var $self = $(this);

        $.ajax({
            url: 'https://api.unsplash.com/photos/random?client_id='+ global.rndmFull.clientId,
            success: function(photo){
                $self.css('backgroundImage', 'url('+ photo.urls.regular + ')');
                return def.resolve($self);
            },
            error: function(){
                $self.css('backgroundImage','url('+ options.backgroundImage + ')');
                return def.reject($self);
            }
        });

        return def.promise();
    };
    global.rndmFull = new RndmFull();

})(window, jQuery);
