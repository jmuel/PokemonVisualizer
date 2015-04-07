var React = require('react');
var LineChart = require('react-d3').LineChart;
var PokemonStore = require('../Stores/PokemonStore');
var _ = require('underscore');
var d3 = require('d3');

var getStateFromStores = function() {
  return {
    pokemon: PokemonStore.getActivePokemonData(),
    generation: PokemonStore.getActiveGeneration()
  };
};

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
};

var UsageChart = React.createClass({
  getInitialState: function() {
    return getStateFromStores()
  },

  componentDidMount: function() {
    PokemonStore.addChangeListener(this._onChange);
  },

  componentDidUnmount: function() {
    PokemonStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  render: function() {
    var data = _.reduce(this.state.pokemon, function(memo, pokemonData, pokemon) {
      memo.push({
        name: pokemon,
        values: buildValues(pokemonData["ou"]["0"])
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
        width={647}
        height={400}
      />
    );
  }
});

module.exports = UsageChart;
