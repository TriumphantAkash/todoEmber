/*we don't need much functionality yet,
So, we have not changed this component(the .js one) file yet*/
import Ember from 'ember';

/*here we are defining an action 'editTodo' that
 we are using in app/components/todo-items.hbs
 This action simply set the isEditing property */
export default Ember.Component.extend({
	actions: {
        editTodo: function() {
            this.set('isEditing', true);
        },
        //
        acceptChanges: function() {
        	this.set('isEditing', false);
            this.sendAction('action', this.get("todo"));
            /*We are using sendAction method to send our
            acceptChanges method out of the component,
            we send the todo model along with the action.
            We need to replicate the name of the action
            on the template(app/templates/todos.hbs)
            */
        },

        deleteTodo: function(todo) {
            this.sendAction('deleteTodo', todo);
        }


    }
});
