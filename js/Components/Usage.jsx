var Container = require('./Base/Container.jsx')
,   NavBar = require('./Base/NavBar.jsx')
,   Content = require('./Base/Content.jsx')
,   UsageChart = require('./UsageChart.jsx')
,   PokemonAdder = require('./PokemonAdder.jsx')
,   React = require('react');


var Usage = React.createClass({
    render: function() {
        return (
            <Container>
                <NavBar title="Pokemon Usage"/>
                <Content>
                    <UsageChart />
                    <PokemonAdder />
                </Content>
            </Container>
        )
    }
});

module.exports = Usage;