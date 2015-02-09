var d3 = require('d3')
,   Marty = require('marty');

var format = d3.time.format('%y-%b').parse;

var data = {
    Charizard: {
        usage: {
            ou: [
                {x: format('14-JAN'), y: .40},
                {x: format('14-FEB'), y: .30},
                {x: format('14-MAR'), y: .10},
                {x: format('14-APR'), y: .5},
                {x: format('14-MAY'), y: .8},
                {x: format('14-JUN'), y: .15},
                {x: format('14-JUL'), y: .20}
            ]
        }

    },
    Bulbasaur: {
        usage: {
            ou: [
                {x: format('14-JAN'), y: .30},
                {x: format('14-FEB'), y: .80},
                {x: format('14-MAR'), y: .20},
                {x: format('14-APR'), y: .99},
                {x: format('14-MAY'), y: .80},
                {x: format('14-JUN'), y: .42},
                {x: format('14-JUL'), y: .10}
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