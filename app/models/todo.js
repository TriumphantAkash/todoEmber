/*Model is like a blueprint for your data.
Each todo item in our list will be an instance
of our Todo model*/

import DS from 'ember-data';

export default DS.Model.extend({
/*each instance of our todo model will 
have a 'title' and an 'isCompleted' field
'title' field will be a string and the
'isComplete' field will be a boolean*/
	title:	DS.attr('string'),
	isCompleted:	DS.attr('boolean')
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			title:	"Complete Ember.js Tutorial",
			isCompleted:	false
		},
		{
			id: 2,
			title:	"Solve some more ember stuff",
			isCompleted:	true
		},
		{
			id: 3,
			title:	"Solve World Hunger with Ember",
			isCompleted:	false
		}
	]
});
