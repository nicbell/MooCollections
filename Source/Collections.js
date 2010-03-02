/*
---
description:  Generics.Collection implements functions into array to only accept items of a specific type, would have prefered to simply extend Array but Array does not like being extended in IE6.

license: MIT-style

authors:
- Nic Bell

requires:
core/1.2.4:
- Class
- Array

provides: [Generics.Collection]

...
*/

var Generics = {

    Collection: function(type) {
        //Would have prefered to extend Array but IE6 does not like this
        var Collection = Array;
        Collection.implement({
            type: type,
            add: function(item) {
                if ($type(item) == 'object') {
                    if (item instanceof this.type) this.include(item);
                    else alert('Type exception: item of incorrect type. - Collection.js:ln30');
                }
                else {
                    alert('Type exception: item is not an object. - Collection.js:ln33');
                }
                return this;
            },
            remove: function(item) { this.erase(item); return this; }
        });
        return new Collection();
    }
}
/* Ends */


