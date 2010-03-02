Generic Collections
===========

Generic typed collections for Mootools. 

![Screenshot](http://github.com/nicbell/MooCollections/raw/master/logo.png)

How to use
----------

All we need to do is create a new 'Collection' of a specific type. Great when working with different kinds of data.
Use Generics.Collection.add(item) to add and use Generics.Collection.remove(item) to remove.

JS:

	var Pig = new Class();
    var Piglet = new Class({ Extends: Pig });
    var Cow = new Class();

    var pigs = new Generics.Collection(Pig); //pass class

    pigs.add(new Pig());
    pigs.add(new Piglet());
    pigs.add(1); //Type exception: item is not an object.
    pigs.add(new Cow()); //Type exception: item of incorrect type.

    alert(pigs.length); //2