/*
---
description:  Generics.Collection extends array to only accept items of a specific type.

license: MIT-style

authors:
- Nic Bell
- Kevin Chapelier

requires:
core/1.2.4:
- Class
- Array

provides: [Generics.Collection]

...
*/

var Generics = {

    Collection: new Class({
        Extends: Array,
        initialize: function(type) {
            this.type = type;
        },
        push: function(item) {
            if ($type(item) == 'object') {
                if (item instanceof this.type) this.parent(item);
                else alert('Type exception: item of incorrect type.');
            }
            else {
                alert('Type exception: item is not an object.');
            }
        },
        /* for compatiblity with 0.5 and because every other language uses add & remove on collections */
        add: function(item) { this.push(item); },
        remove: function(item) { this.erase(item); }
    }),

    FakeCollection: function(type) {
        var Collection = Array;
        Collection.implement({
            type: type,
            add: function(item) {
                if ($type(item) == 'object') {
                    if (item instanceof this.type)
                        this.push(item);
                    else
                        alert('Type exception: item of incorrect type.');
                }
                else {
                    alert('Type exception: item is not an object.');
                }
            },
            /* for compatiblity with 0.5 and because every other language uses add & remove on collections */
            remove: function(item) { this.erase(item); }
        });
        return new Collection();
    }
}
/* Ends */


