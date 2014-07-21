Relatives.Relative = DS.Model.extend({
  name:       DS.attr('string'),
  railsId:    DS.attr('number'),
  ancestors:  DS.hasMany('relative'),
  kids:       DS.hasMany('relative'),
  parent:     DS.belongsTo('relative', { inverse: 'children' }),
  parentRailsId:   DS.attr('number'),
  siblings:   DS.hasMany('relative')
});