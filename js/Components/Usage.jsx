var UsageChart = require('./UsageChart.jsx');
var NavBar = require('./Base/NavBar.jsx');
var FormatSelector = require('./FormatSelector.jsx');
var PokemonAdder = require('./PokemonAdder.jsx');
var React = require('react');
var PokemonStore = require('../Stores/PokemonStore');

var getStateFromStores = function() {
  return {
    pokemon: PokemonStore.getActivePokemonData(),
    format: PokemonStore.getFormat()
  };
};

var Usage = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
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
    return (
      <div className="container">
        <NavBar />
        <FormatSelector format={this.state.format}/>
        <PokemonAdder />
        <UsageChart pokemonData={this.state.pokemon} format={this.state.format}/>
      </div>
    );
  }
});

module.exports = Usage;
