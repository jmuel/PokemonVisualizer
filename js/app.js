var React = require('react')
,   UsageChart = require('./Components/UsageChart.jsx')
,   PokemonActionCreator = require('./ActionCreators/PokemonActionCreators')
,   Marty = require('marty')
,   PokemonAdder = require('./Components/PokemonAdder.jsx');

Window.Marty = Marty;
Window.React = React;


var App = React.createClass({
    render: function() {
        return (
            <div>
                <PokemonAdder />
                <UsageChart />
            </div>
        )
    }
});

React.render(<App/>, document.getElementById('root'));
