;(function(w, d, $){
    var R = /^(?:(shift|ctrl|alt|meta)\+)?(\w{1}|enter)$/;
    
    var Keypress = function(el) {
        return new init(el);
    };
    
    var init = function(el) {
        var el = el || d;
        
        return new keypress(el);
    };
    
    var parse = function(chars) {
        return R.exec(chars);
    };
    
    var charMatch = function(c, k) {
        return c.toUpperCase().charCodeAt() == k;
    }
    
    var keypress = function(el){
        this.el = el;
    };
    keypress.p = keypress.prototype;
    keypress.p.el = null;
    keypress.p.on = function (chars, callback) {
        var charsList = chars.split(' ').map(parse);
        var that = this;
        
        $.each (charsList, function (index, object) {
            if (object != null) {
                // because event.target is always true.
                var specialKey = undefined==object[1] ? 'target' : object[1]+'Key';
               
                $(that.el).on('keydown', function(event) {
                    if(event[specialKey] && charMatch(object[2], event.keyCode)) {
                        return callback.call(this, event);
                    }
                    return true;
                });
           }
        });
        return this;
    };
    
    
    window.Keypress = Keypress;
})(window, document, $);
