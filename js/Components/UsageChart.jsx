var React = require('react')
,   LineChart = require('react-d3').LineChart
,   Marty = require('marty')
,   PokemonStore = require('../Stores/PokemonStore')
,   _ = require('underscore')
,   d3 = require('d3');



var PokemonState = Marty.createStateMixin({
    pokemon: PokemonStore
});

var xFormatter = function(d) {
    var formatter = d3.time.format('%y-%b').parse;
    return formatter(d.x);
};

var UsageChart = React.createClass({
    mixins: [PokemonState],
    render: function() {
        var data = _.reduce(this.state.pokemon, function(memo, pokemonData, pokemon) {
            memo.push({
                name: pokemon,
                values: pokemonData.usage.ou
            });
            return memo;
        }, []);

        return (
            <LineChart
                legend={true}
                data={data}
                xAccessor={xFormatter}
                yAccessor={function(d) {return d.y; } }
                xAxisTickInterval={{unit:'year', interval: 1}}
                width={900}
                height={600}
            />
        );
    }
});

module.exports = UsageChart;