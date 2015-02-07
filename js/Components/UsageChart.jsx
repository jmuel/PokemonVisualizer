var React = require('react')
,   LineChart = require('react-d3').LineChart
,   Marty = require('marty')
,   PokemonStore = require('../Stores/PokemonStore');



var PokemonState = Marty.createStateMixin({
    pokemon: PokemonStore
});

var UsageChart = React.createClass({
    mixins: [PokemonState],
    render: function() {
        return (
            <LineChart
                data={this.state.pokemon}
                legend={true}
                width={600}
                height={300}
                title="Pokemon Usage"
            />
        )
    }
});

module.exports = UsageChart;