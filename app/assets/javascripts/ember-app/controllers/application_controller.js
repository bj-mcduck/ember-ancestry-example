Relatives.ApplicationRoute = Ember.Route.extend({
  actions: {
    error: function(error, transition){
//      You Could handle other errors by trying something like:
//      http://discuss.emberjs.com/t/how-to-deal-with-route-when-model-gets-a-404/5283/3
        this.transitionTo('fourohfour');
    }
  }
});