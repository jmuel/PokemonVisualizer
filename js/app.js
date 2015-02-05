var React = require('react');
var LineChart = require('./components/LineChart.jsx');
var PokemonDataService = require('./services/PokemonDataService');

var data = {
    series: PokemonDataService.getUsage('Charizard')
}

var App = React.createClass({
    getInitialState: function() {
        return {
            data: data
        };
    },

    render: function() {
        return (
            <div className="App">
                <LineChart data={this.state.data}/>
            </div>
        );
    }
});

React.render(<App/>, document.getElementById('root'));
