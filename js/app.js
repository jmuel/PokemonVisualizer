var React = require('react');
var Chart = require('./components/chart.jsx');

var sampleData = [
    {id: '5fbmzmtc', x: 7, y: 41, z: 6},
    {id: 's4f8phwm', x: 11, y: 45, z: 9},
    {id: '532dfvma', x:13, y: 33, z: 12}
];

var App = React.createClass({
    getInitialState: function() {
        return {
            data: sampleData,
            domain: {x: [0, 30], y: [0, 100]}
        };
    },

    render: function() {
        return (
            <div className="App">
                <Chart
                    data={this.state.data}
                    domain={this.state.domain} />
            </div>
        );
    }
});

React.render(<App/>, document.getElementById('root'));
