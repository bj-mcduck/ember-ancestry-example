Relatives.RelativeFormComponent = Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  relative: null,

  actions: {
    cancelAction: function(){
      this.sendAction('cancelAction');
    },
    deleteAction: function(){
      this.sendAction('deleteAction');
    },
    saveAction: function(){
      this.sendAction('saveAction');
    }
  }
});