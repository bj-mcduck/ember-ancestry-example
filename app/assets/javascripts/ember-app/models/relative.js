Relatives.Relative = DS.Model.extend({
  name:           DS.attr('string'),
  railsId:        DS.attr('number'),
  ancestors:      DS.hasMany('relative', {
    inverse: 'kids',
    async: true
  }),
  kids:           DS.hasMany('relative', {
    inverse: 'parent',
    async: true
  }),
  parent:         DS.belongsTo('relative', {
    inverse: 'kids',
    async: true
  }),
  parentRailsId:  DS.attr('number'),
  siblings:       DS.hasMany('relative', {
    inverse: 'sibling',
    async: true
  }),
  sibling:        DS.belongsTo('relative', {
    inverse: 'siblings'
  })
});