var React = require('react')
, PokemonActionCreators = require('../ActionCreators/PokemonActionCreators');

var PokemonAdder = React.createClass({
  getInitialState: function() {
    return {
      pokemon: ""
    };
  },
  handleChange: function(event) {
    this.setState({
      pokemon: event.target.value});
  },
  handleKeyDown: function(event) {
    if(event.keyCode == 13) {
      return this.addPokemon();
    }
  },
  addPokemon: function() {
    PokemonActionCreators.getPokemon(this.state.pokemon);
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.pokemon} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        <input type="button" onClick={this.addPokemon} value="Add"/>
      </div>
    );
  }
});

module.exports = PokemonAdder;
