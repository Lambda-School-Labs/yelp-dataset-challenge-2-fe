var ItemSelect;
var mapObject;

$('input[id="var-select"]').autoComplete({
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    },
    onSelect: function(e, term, item){
        function doit() {
            console.log("doit() is running..."); 
            function replace(new_str) {
                for (var key in mapObject) {
                    if (!mapObject.hasOwnProperty(key)) {
                        continue;
                    }
                    
                    if (new_str.length === key.length) {
                    new_str = new_str.replace(key, mapObject[key]);
                    }
                    else {
                        continue;
                    }
                }
                return new_str
            }
            // get instance of input
            title = item.data('val');
            ItemSelect = replace(title);
            console.log(JSON.stringify(ItemSelect));
            }
              
            if (e.type === "keydown") {
            console.log("the keydown event was captured");
            doit();
            }
            else {
            doit(); 
            console.log("the keydown event was not captured");
            }
    }
});