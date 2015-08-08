import Ember from 'ember';

export default Ember.Route.extend({

	/*we tell our route what data to load 
	inside the model part, which is called
	the model hook. Now route will look for
	a model called 'todo'*/
	model: function() {
        return this.store.find('todo');
    },

    actions: {
        createTodo: function(newTitle) {
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: newTitle,	//initialize the title variable wirh input value
                isCompleted: false
            });
            
            // Clear the "New Todo" text field
            this.controllerFor('todos').set('newTitle', '');
            /*The input field text is temporary state, 
            so it makes sense that in order to clear it
            we need to use our controller. 
            What is cool is that ember has created a
            controller for us, as we've not done so
            ourselves, that has a property, newTitle
            from the input box, and in this lne we are
            clearing it.*/
 
            // Save the new model
            todo.save();
        },

        //handling the action acceptChanges which is passed from component to template
        acceptChanges: function(todo) {
            if (Ember.isEmpty(todo.get('title'))) {
                this.send('deleteTodo', todo);
            } else {
                todo.save();
            }
        },
        deleteTodo: function(todo) {
            todo.deleteRecord();
        }

    }

});
