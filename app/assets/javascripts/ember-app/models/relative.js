Relatives.Relative = DS.Model.extend({
  name:           DS.attr('string'),
  railsId:        DS.attr('number'),
  ancestors:      DS.hasMany('relative'),
  kids:           DS.hasMany('relative', { inverse: 'parent' }),
  parent:         DS.belongsTo('relative', { inverse: 'kids' }),
  parentRailsId:  DS.attr('number'),
  siblings:       DS.hasMany('relative', { inverse: 'sibling' }),
  sibling:        DS.belongsTo('relative', { inverse: 'siblings' })
});