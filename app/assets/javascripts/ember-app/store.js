Relatives.ApplicationStore = DS.Store.extend();

// Enable this to use the site with FIXTURES
//Relatives.ApplicationAdapter = DS.FixtureAdapter.extend();

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
Relatives.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api'
});