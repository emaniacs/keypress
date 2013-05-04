Keypress
=======

jQuery plugin to easy configuration handling for keypress.
Support to multiple handler for keypress and detect for shift, control, alt and meta key.


Method
------

- **Keypress(selector)**

    Init keypress on _selector_
    
    Documentation about selector http://api.jquery.com/category/selectors/

    _Return:_ Keypress object



- **Keypress(conf).on(keycode, callback)**

    Setup callback based on keycode was given.
    
    For multiple keycode using a _space_ as separator.
    
    You can use Control, Alt, Shift and Meta which combination with Character or Enter.
    
    
Example
-------
```
<script type="text/javascript" src="Keypress.js">
    // initialize object on textarea tags
    var textarea = Keypress('textarea');

    // set handling for 'b' pressing
    textarea.on('b', function(event) {
        $('.info').html('You pressing "b" on textarea');
    });
    
    // set another handling for multiple keycode and combination with ctrl
    textarea.on('ctrl+p alt+g alt+h', function(event) {
        $('.info').html('Okay, know you pressing for Control+b or Alt+g or Alt+h');
    });
</script>
```
