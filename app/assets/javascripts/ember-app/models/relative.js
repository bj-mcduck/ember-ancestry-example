var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongTo;

Relatives.Relative = DS.Model.extend({
  name:           attr('string'),
  railsId:        attr('number'),
  ancestors:      hasMany('relative'),
  kid:            belongsTo('relative', { inverse: 'kids' } ),
  kids:           hasMany('relative', { inverse: 'kid' } ),
  parent:         belongsTo('relative', { inverse: 'children' }),
  parentRailsId:  attr('number'),
  siblings:       hasMany('relative', { inverse: 'sibling' }),
  sibling:        belongsTo('relative', { inverse: 'siblings' })
});