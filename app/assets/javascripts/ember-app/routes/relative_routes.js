// Index
Relatives.RelativesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('relative');
  },

  actions: {
    edit: function(params){
      return this.transitionTo('relatives.edit', params.id);
    },

    new: function(model){
      var referer = this.currentModel.get('id'),
        parentId = ( model ? model.get('railsId') : null );
      this.transitionTo('relatives.new').then(function(newRoute){
        newRoute.controller.set('previous', referer);
        newRoute.currentModel.set('parentRailsId', parentId);
      });
    }
  }
});

// Show
Relatives.RelativesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('relative', params.id);
  },

  actions: {
    delete: function(params){
      var shouldTransition = (this.currentModel.get('id') == params.id),
          controller = this;
      this.store.find('relative', params.id ).then(function(relative){
        relative.destroyRecord();
        relative.save();

        if (shouldTransition){
          controller.transitionTo('relatives.index');
        }
      });
    },
    reload: function(){
      console.log('ran reload');
      this.currentModel.reload().then(function(){
        console.log('finished reload');
      });
    }
  }
});

// New
Relatives.RelativesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('relative');
  }
});

// Edit
Relatives.RelativesEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('relative', params.id);
  }
});