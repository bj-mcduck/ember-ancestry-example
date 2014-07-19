Relatives.Relative = DS.Model.extend({
  name:       DS.attr('string'),
  railsId:    DS.attr('number'),
  ancestors:  DS.hasMany('relative'),
  kids:       DS.hasMany('relative'),
  parent:     DS.hasMany('relative'),
  siblings:   DS.hasMany('relative')
});