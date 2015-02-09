var React = require('react')
,   UsageChart = require('./Components/UsageChart.jsx')
,   PokemonActionCreator = require('./ActionCreators/PokemonActionCreators')
,   Marty = require('marty')
,   PokemonAdder = require('./Components/PokemonAdder.jsx')
,   NavBar = require('./Components/NavBar.jsx')
,   Container = require('./Components/Container.jsx')
,   Content = require('./Components/Content.jsx')
,   Footer = require('./Components/Footer.jsx');

window.Marty = Marty;
window.React = React;


var App = React.createClass({
    render: function() {
        return (
            <Container>
                <NavBar title="Pokemon Usage"/>
                <Content>
                    <UsageChart />
                    <PokemonAdder />
                </Content>
                <Footer />
            </Container>
        )
    }
});

React.render(<App/>, document.getElementById('root'));
