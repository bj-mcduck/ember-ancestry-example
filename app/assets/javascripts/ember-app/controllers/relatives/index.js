// Index Action
Relatives.RelativesIndexController = Ember.ObjectController.extend({
  grandParents: function(){
    var symbols = this.store.all('relative').filter(function(relative){
        return relative.get('parentRailsId') == null && relative.get('name') != null;
      });
    return symbols;
  }.property('relative.@each.parent')
});
