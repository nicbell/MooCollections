/*
---
description:  Generics.Collection and Generics Mixin for Classes.

license: MIT-style

authors:
- Nic Bell
- Kevin Chapelier

requires:
 core/1.2.4:
  - Class
  - Array

provides: [Generics, Generics.Collection]

...
*/

var Generics = {
	Collection: new Class({
		Extends: Array,
		initialize: function(type) {
			this.type = type;
		},
		push: function(item) {
			if($type(item) == 'object') {
				if (item instanceof this.type) {
					if(!this.contains(item)) {
						this.parent(item);
					}
				}
				else {
					alert('Type exception: item of incorrect type.');
				}
			}
			else {
				alert('Type exception: item is not an object.');
			}
		},
		/* for compatiblity with 0.5 */
		add: function(item) { this.push(item); },
		remove: function(item) { this.erase(item); }
	})
}
/* Ends */


