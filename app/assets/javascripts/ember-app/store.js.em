class Relatives.ApplicationStore extends DS.Store

# Override the default adapter with the `DS.ActiveModelAdapter` which
# is built to work nicely with the ActiveModel::Serializers gem.

# Enable this to use the site with FIXTURES
#class Relatives.ApplicationAdapter extends DS.FixtureAdapter

# Enable this to use the site with the Rails DB
#class Relatives.ApplicationAdapter extends DS.ActiveModelAdapter

Relatives.ApplicationAdapter = DS.ActiveModelAdapter.extend(
  namespace: 'api'
)