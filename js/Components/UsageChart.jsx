var React = require('react')
, LineChart = require('react-d3').LineChart
, Marty = require('marty')
, PokemonStore = require('../Stores/PokemonStore')
, _ = require('underscore')
, d3 = require('d3');



var PokemonState = Marty.createStateMixin({
  pokemon: PokemonStore
});

var xFormatter = function(d) {
  var formatter = d3.time.format('%m/%Y').parse;
  return formatter(d.x);
};

var yFormatter = function(d) {
  return d.y;
};

var buildValues = function(monthData) {
  return _.reduce(monthData, function(memo, data, date) {
    var d = {
      x: date,
      y: data['usage']
    };
    memo.push(d);
    return memo;
  }, []);
}

var UsageChart = React.createClass({
  mixins: [PokemonState],
  render: function() {
    var data = _.reduce(this.state.pokemon, function(memo, pokemonData, pokemon) {
      memo.push({
        name: pokemon,
        values: buildValues(pokemonData["1"]["ou"]["0"])
      });
      return memo;
    }, []);

    return (
      <LineChart
        legend={false}
        data={data}
        xAccessor={xFormatter}
        yAccessor={yFormatter}
        xAxisTickInterval={{unit:'year', interval: 1}}
        width={960}
        height={500}
      />
    );
  }
});

module.exports = UsageChart;
