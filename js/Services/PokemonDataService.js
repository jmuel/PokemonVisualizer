var d3 = require('d3')
, Marty = require('marty');

var format = function(d) {
  return d3.time.format('%y-%b').parse(d);
};

var data = {
  Charizard: {
    usage: {
      ou: [
        {x: '14-JAN', y: 0.40},
        {x: '14-FEB', y: 0.30},
        {x: '14-MAR', y: 0.10},
        {x: '14-APR', y: 0.5},
        {x: '14-MAY', y: 0.8},
        {x: '14-JUN', y: 0.15},
        {x: '14-JUL', y: 0.20}
      ]
    }
  }
  ,
  Bulbasaur: {
    usage: {
      ou: [
        {x: '14-JAN', y: 0.30},
        {x: '14-FEB', y: 0.80},
        {x: '14-MAR', y: 0.20},
        {x: '14-APR', y: 0.99},
        {x: '14-MAY', y: 0.80},
        {x: '14-JUN', y: 0.42},
        {x: '14-JUL', y: 0.10}
      ]
    }
  }
};

var Service = Marty.createStateSource({
  getUsage: function(pokemon) {
    return data[pokemon];
  }
});

module.exports = Service;
