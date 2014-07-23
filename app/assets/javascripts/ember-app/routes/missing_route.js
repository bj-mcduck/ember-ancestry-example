Relatives.MissingRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('missing');
  }
});
