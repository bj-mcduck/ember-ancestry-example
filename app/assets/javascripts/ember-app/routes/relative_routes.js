// Index
Relatives.RelativesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('relative');
  },

  actions: {
    edit: function(params){
      return this.transitionTo('relatives.edit', params.id);
    },

    new: function(){
      return this.transitionTo('relatives.new');
    }
  }
});

// Show
Relatives.RelativesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('relative', params.id);
  },

  actions: {
    edit: function(){
      return this.transitionTo('relatives.edit', this.currentModel);
    },

    new: function(params){
      var referer = this.currentModel.get('id'),
          parent_id = this.currentModel.get('railsId');
//          parent_id = (params ? params.id : null);
      this.transitionTo('relatives.new').then(function(newRoute){
        newRoute.controller.set('previous', referer);
        newRoute.currentModel.set('parentRailsId', parent_id);
      });
    },
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