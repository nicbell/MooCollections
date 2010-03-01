Generic Collections
===========

Generic typed collections for Mootools. 

If an image is found within the description, that becomes the screenshot of the plugin. Screenshots are optional but encouraged, given the plugin has some visual interaction. The screenshot can be of any size, but try to keep it of about 200x100.

![Screenshot](http://url_to_project_screenshot)

How to use
----------

All we need to do is create classes that implement 'Generics' then we create a new 'Collection' of a specific type. Great when working with different kinds of data.

JS:

	var Pig = new Class({ Implements: Generics });
	var Cow = new Class({ Implements: Generics });

	var pigs = new Generics.Collection('Pig');
	pigs.add(new Pig());
	pigs.add(new Cow()); //Type exception: item of incorrect type. - Cow
