var React = require('react');
var PokemonActionCreators = require('../ActionCreators/PokemonAction');

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
    PokemonActionCreators.addPokemon(this.state.pokemon);
  },
  render: function() {
    return (
      <div className="row">
        <input className="three columns" type="button" onClick={this.addPokemon} value="Add a Pokemon"/>
        <input className="nine columns" type="text" value={this.state.pokemon} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
      </div>
    );
  }
});

module.exports = PokemonAdder;
