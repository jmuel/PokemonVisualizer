var UsageChart = require('./UsageChart.jsx')
, NavBar = require('./Base/NavBar.jsx')
, FormatSelector = require('./Base/FormatSelector.jsx')
, PrettyPrinter = require('./PrettyPrinter.jsx')
, PokemonAdder = require('./PokemonAdder.jsx')
, React = require('react');


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
