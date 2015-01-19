var React = require('react');
var d3Chart = require('../d3Components/d3chart');

var Chart = React.createClass({
    propTypes: {
        data: React.PropTypes.array,
        domain: React.PropTypes.object
    },

    handleResize: function() {
        var el = this.getDOMNode();
        d3Chart.update(el, this.getChartState());
    },

    componentDidMount: function() {
        var el = this.getDOMNode();
        d3Chart.create(el, {
            width: '100%',
            height: '300px'
        }, this.getChartState());
        window.addEventListener('resize', this.handleResize);
    },

    componentDidUpdate: function() {
        var el = this.getDOMNode();
        d3Chart.update(el, this.getChartState());
    },

    getChartState: function() {
        return {
            data: this.props.data,
            domain: this.props.domain
        };
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
        var el = this.getDOMNode();
        d3Chart.destroy(el);

    },

    render: function () {
        return (
            <div className="Chart" />
        );
    }
});

module.exports = Chart;