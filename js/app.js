var React = require('react');
var LineChart = require('react-d3').LineChart;
var PokemonDataService = require('./services/PokemonDataService');

var data = {
    Charizard: PokemonDataService.getUsage('Charizard')
};

Window.data = data;

React.render(<LineChart
        data={data}
        legend={true}
        width={600}
        height={300}
        title="Pokemon Usage"
    /> , document.getElementById('root'));
