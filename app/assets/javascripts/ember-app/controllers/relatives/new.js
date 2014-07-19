// New Action
Relatives.RelativesNewController = Ember.ObjectController.extend({
  value: null,
  previous: null,

  parents: function(){
    var controller = this,
      symbols = this.store.all('relative' ).filter(function(relative){
        return relative.get('railsId') != controller.get('model.railsId');
      }),
      sorted = Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
        sortProperties: ['name'],
        content: symbols
      });
    return sorted.map(function(relative){
      return {
        id: relative.get('railsId'),
        name: relative.get('name')
      }
    });
  }.property('relative.@each.name'),

  actions: {
    cancel: function(){
      this.get('model').deleteRecord();
      if (this.get('previous') == null){
        this.transitionToRoute('relatives.index');
      }else{
        this.transitionToRoute('relatives.show', this.get('previous') );
      }
    },
    save: function(){
      console.log('ran save');
      var route = this;
      this.get('model' ).save().then(function(relative){
        route.transitionToRoute('relatives.show', relative);
      });
    }
  }
});
