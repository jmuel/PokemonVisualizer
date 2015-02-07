var React = require('react')
,   UsageChart = require('./Components/UsageChart.jsx')
,   PokemonActionCreator = require('./ActionCreators/PokemonActionCreators')
,   Marty = require('marty');

Window.Marty = Marty;
Window.React = React;

PokemonActionCreator.addPokemon('Charizard');

React.render(<UsageChart/>, document.getElementById('root'));
