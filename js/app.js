var React = require('react')
,   UsageChart = require('./Components/UsageChart.jsx')
,   PokemonActionCreator = require('./ActionCreators/PokemonActionCreators')
,   Marty = require('marty')
,   PokemonAdder = require('./Components/PokemonAdder.jsx')
,   NavBar = require('./Components/NavBar.jsx')
,   Container = require('./Components/Container.jsx');

window.Marty = Marty;
window.React = React;


var App = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar>
                    <h1>Pokemon Thing</h1>
                </NavBar>
                <Container>
                    <UsageChart />
                    <PokemonAdder />
                </Container>

            </div>
        )
    }
});

React.render(<App/>, document.getElementById('root'));
