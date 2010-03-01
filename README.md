Generic Collections
===========

Generic typed collections for Mootools. 

![Screenshot](http://github.com/nicbell/MooCollections/raw/master/logo.png)

How to use
----------

All we need to do is create classes that implement 'Generics' then we create a new 'Collection' of a specific type. Great when working with different kinds of data.

JS:

	var Pig = new Class({ Implements: Generics });
	var Cow = new Class({ Implements: Generics });

	var pigs = new Generics.Collection('Pig');
	pigs.add(new Pig());
	pigs.add(new Cow()); //Type exception: item of incorrect type. - Cow
