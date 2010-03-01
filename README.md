Generic Collections
===========

Generics typed collections for Mootools. 

If an image is found within the description, that becomes the screenshot of the plugin. Screenshots are optional but encouraged, given the plugin has some visual interaction. The screenshot can be of any size, but try to keep it of about 200x100.

![Screenshot](http://url_to_project_screenshot)

How to use
----------

We expect this section for every plugin. It just explains how to use your plugin.
Never should a plugin rely on a 3rd party link to explain its behavior or functionality. We need this to ensure that if a website is removed or becomes inaccessible, people can still enjoy your plugins' functionality.

It often includes code snippets, which are just indented pieces of text:

	var Pig = new Class({ Implements: Generics });
	var Cow = new Class({ Implements: Generics });

	var pigs = new Generics.Collection('Pig');
	pigs.add(new Pig());
	pigs.add(new Cow()); //Type exception: item of incorrect type. - Cow
