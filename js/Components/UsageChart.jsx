var React = require('react')
,   LineChart = require('react-d3').LineChart
,   Marty = require('marty')
,   PokemonStore = require('../Stores/PokemonStore')
,   _ = require('underscore')
,   d3 = require('d3');



var PokemonState = Marty.createStateMixin({
    pokemon: PokemonStore
});

var tickFormatter = function(d) {
    return d3.time.format('%m-Y')(new Date(d));
};

var UsageChart = React.createClass({
    mixins: [PokemonState],
    render: function() {
        var data = _.reduce(this.state.pokemon, function(memo, pokemonData, pokemon) {
            memo[pokemon] = pokemonData.usage.ou;
            return memo;
        }, {})

        return (
            <LineChart
                legend={true}
                data={data}
                width={900}
                height={600}
                xAxisTickFormat={tickFormatter}
            />
        )
    }
});

module.exports = UsageChart;