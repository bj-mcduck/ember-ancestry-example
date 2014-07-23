// For more information see: http://emberjs.com/guides/routing/
Relatives.Router.reopen({
  location: 'history'
});

Relatives.Router.map(function(){
  this.resource('relatives', { path: '/' }, function(){
    this.route('new', { path: 'new' });
    this.route('edit', { path: '*id/edit' });
    this.route('show', { path: '*id' });
  });

  this.route('missing', { path: '*:' });
});
