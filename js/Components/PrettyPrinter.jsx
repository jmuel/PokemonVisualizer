var React = require('react')
, Marty = require('marty')
, PokemonStore = require('../Stores/PokemonStore');

var PokemonState = Marty.createStateMixin({
  pokemon: PokemonStore
});

var PrettyPrinter = React.createClass({
  mixins:[PokemonState],
  render: function() {
    return (
      <div>{JSON.stringify(this.state.pokemon, null, 2)}</div> 
    );
  }
});

module.exports = PrettyPrinter;
