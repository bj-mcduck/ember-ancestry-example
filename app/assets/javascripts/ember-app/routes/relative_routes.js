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
    },

    save: function(model){
      var route = this;
      // TEMPORARY HACK:
      // As I can't access the response when it updates correctly,
      // I'm sending back an error status
      // so I can update the model with the new ID.
      model.save().then(function(){
        route.transitionTo( 'relatives.show', model );
      },function(response){
        var json = response['responseJSON'],
            newData = ( json ? json['relative'] : null );

        model.set('id', newData['id']);
        route.transitionTo( 'relatives.show', model );
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
          route = this;
      this.store.find('relative', params.id ).then(function(relative){
        relative.destroyRecord();
        relative.save();

        if (shouldTransition){
          route.transitionTo('relatives.index');
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