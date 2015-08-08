import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  /*adding a 'todos' resource in my app 
  (remember a resource contains several
  routes and each route represents actions
  for different pages in the app)*/
  // this.route('todos');
  this.resource('todos', {path: '/'});
  /* Now we have todos resource and ember
  will look for a todos.hbs template at
  '/' route */;

  this.route('todos', function() {
    this.route('active');
    this.route('complete');
  });
});

export default Router;
