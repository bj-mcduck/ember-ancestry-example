// Edit Action
Relatives.RelativesEditController = Ember.ObjectController.extend({
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
      var model = this.get('model');
      model.rollback();
      this.transitionToRoute('relatives.show', model);
    },
    save: function(){
      var model = this.get('model');
      model.save();
      this.transitionToRoute('relatives.show', model);
    },
    delete: function(){
      var model = this.get('model' ),
          controller = this,
          parent = model.get('parent');
      model.destroyRecord();
      model.save();
      if (parent) {
        controller.transitionTo( 'relatives.show', parent );
      }else{
        controller.transitionTo( 'relatives.index' );
      }
    }
  }
});
