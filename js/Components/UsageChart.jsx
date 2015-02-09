var React = require('react')
,   LineChart = require('react-d3').LineChart
,   Marty = require('marty')
,   PokemonStore = require('../Stores/PokemonStore')
,   _ = require('underscore');



var PokemonState = Marty.createStateMixin({
    pokemon: PokemonStore
});

var UsageChart = React.createClass({
    mixins: [PokemonState],
    render: function() {
        var data = _.reduce(this.state.pokemon, function(memo, pokemonData, pokemon) {
            memo[pokemon] = pokemonData.usage.ou;
            return memo;
        }, {})

        return (
            <LineChart
                data={data}
                legend={true}
                width={900}
                height={600}
            />
        )
    }
});

module.exports = UsageChart;