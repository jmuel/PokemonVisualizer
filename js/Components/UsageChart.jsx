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
  console.log(d);
  var formatter = d3.time.format('%b/%Y').parse;
  return formatter(d.x['usage']);
};

var UsageChart = React.createClass({
  mixins: [PokemonState],
  render: function() {
    var data = _.reduce(this.state.pokemon, function(memo, pokemonData, pokemon) {
      console.log(pokemonData["1"]["ou"]["0"]);
      memo.push({
        name: pokemon,
        //it goes pokemon, gen, format (ou), elo, month and then data
        values: pokemonData["1"]["ou"]["0"]
      });
      return memo;
    }, []);

    console.log(data);
    
    return (
      <LineChart
        legend={true}
        data={data}
        xAccessor={xFormatter}
        yAccessor={function(d) {return d.y; } }
        xAxisTickInterval={{unit:'year', interval: 1}}
        width={900}
        height={600}
      />
    );
  }
});

module.exports = UsageChart;
