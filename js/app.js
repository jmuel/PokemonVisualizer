var React = require('react');
var LineChart = require('./components/LineChart.jsx');


var data = {
    series: [{x: 0, y: 20}, {x: 1, y: 30}, {x: 2, y: 10}, {x: 3, y: 5}, {x: 4, y: 8}, {x: 5, y: 15}, {x: 6, y: 10}]
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
                <LineChart
                    data={this.state.data}/>
            </div>
        );
    }
});

React.render(<App/>, document.getElementById('root'));
