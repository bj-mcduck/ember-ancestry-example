// Show Action
Relatives.RelativesShowController = Ember.ObjectController.extend({
  filteredSiblings: function(){
    var controller = this;
    return this.get('siblings').filter(function(relative){
      return relative.get('railsId') != controller.get('model.railsId');
    })
  }.property('siblings.@each.name')
});
