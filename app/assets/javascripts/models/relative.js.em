# for more details see: http://emberjs.com/guides/models/defining-models/

class Relatives.Relative extends DS.Model
  name: DS.attr 'string'
  ancestry: DS.attr 'string'
