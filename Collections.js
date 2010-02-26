/**
* @author NicBell - using Mootools 1.2.+
*/

/* Typed collections - Hash.findKey by http://mcarthurgfx.com/blog/article/get-class-of-an-instance */
Hash.implement({
    findKey: function(key) {
        var val = this.keyOf(key);
        if (val && val != 'constructor') return val;
        for (var prop in this) {
            if (this.hasOwnProperty(prop) && typeof this[prop] == 'object') {
                val = $H(this[prop]).findKey(key);
                if (val) return this.findKey(this[prop]) + '.' + val;
            }
        }
    }
});

var Generics = new Class({
    getType: function() { return $H(window).keyOf(this.constructor); }
});

Generics.Collection = function(type) {
    var Collection = Array;
    Collection.implement({

        type: type,

        add: function(item) {
            if ($chk(item.getType())) {
                if (item.getType() == this.type && !this.contains(item)) this.include(item);
                else alert('Type exception: item of incorrect type.- ' + item.getType());
            }
            else {
                alert('Type exception: item is not strongly typed.');
            }
        },

        remove: function(item) { if (this.contains(item)) this.erase(item); }
    });
    return new Collection();
};
/* Ends */


/* Usage */
var Pig = new Class({
    Implements: Generics
});

var Cow = new Class({ 
    Implements: Generics
});

var pigs = new Generics.Collection('Pig');
pigs.add(new Pig());
pigs.add(new Cow()); //Type exception: item of incorrect type. - Cow