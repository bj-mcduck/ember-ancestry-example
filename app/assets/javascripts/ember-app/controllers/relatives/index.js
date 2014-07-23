// Index Action
Relatives.RelativesIndexController = Ember.ObjectController.extend({
  grandParents: function(){
    var symbols = this.store.all('relative').filter(function(relative){
        return relative.get('ancestors.length') == 0;
      });
    return symbols;
  }.property('relative.@each.parent')
});
