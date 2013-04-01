(function($) {
    "use strict";

    $.fn.trueClick = function(options) {

        var settings = $.extend({
                            leftClick : function() {}
                        }, options);
                        
        settings.rightClick = settings.rightClick || settings.leftClick;
        settings.middleClick = settings.middleClick || settings.leftClick;

        return this.on('mousedown', function(event) {
            if (event.which === 2) {
                settings.middleClick();
            } else if (event.which === 1) {
                settings.leftClick();
            }
        }).on('contextmenu', settings.rightClick);
    };
})(jQuery);
