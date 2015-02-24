var React = require('react')
, Marty = require('marty')
, _ = require('underscore')
, PokemonStore = require('../Stores/PokemonStore');

var PokemonState = Marty.createStateMixin({
  pokemon: PokemonStore
});

var PrettyPrinter = React.createClass({
  mixins:[PokemonState],
  render: function() {
    var data = _.reduce(this.state.pokemon, function(memo, pokemonData, pokemon) {
      memo.push({
        name: pokemon,
        value: pokemonData['1']['ou']['0']
      });  
      return memo;
    }, []);

    console.log(data);

    return (
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    );
  }
});

module.exports = PrettyPrinter;
