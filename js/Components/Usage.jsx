var UsageChart = require('./UsageChart.jsx');
var NavBar = require('./Base/NavBar.jsx');
var FormatSelector = require('./Base/FormatSelector.jsx');
var PokemonAdder = require('./PokemonAdder.jsx');
var React = require('react');


var Usage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <NavBar />
        <FormatSelector />
        <PokemonAdder />
        <UsageChart/>
      </div>
    );
  }
});

module.exports = Usage;
