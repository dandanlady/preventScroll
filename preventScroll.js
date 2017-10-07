
/**
 * Created by ldd on 2017/03/7.
 */
(function($){
    $.fn.preventScroll = function(){
        var _this = this.get(0);
        if (navigator.userAgent.indexOf("Firefox") > -1){
            _this.addEventListener('DOMMouseScroll',function(e){
                _this.scrollTop += e.detail > 0 ? 10 : -10;
                e.preventDefault();
            },false);
        }else{
            _this.onmousewheel = function(e){
                e = e || window.event;
                _this.scrollTop+= e.wheelDelta > 0 ? -10 : 10;
                if(e.returnValue){
                    e.returnValue = false
                }else{
                    return false;
                }

            };
        }
        return this;
    };
})(jQuery);