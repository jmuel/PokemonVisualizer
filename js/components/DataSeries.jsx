var React = require('react')
,   Line = require('./Line.jsx')
,   d3 = require('d3');


var DataSeries = React.createClass({
    getDefaultProps: function() {
        return {
            data: [],
            interpolate: 'linear',
            xScale: d3.scale.linear(),
            yScale: d3.scale.linear()
        };
    },

    render: function() {
        var yScale = this.props.yScale
        ,   xScale = this.props.xScale;

        var path = d3.svg.line()
            .x(function(d) { return xScale(d.x)})
            .y(function(d) { return yScale(d.y)})
            .interpolate(this.props.interpolate);

        return (
            <Line path={path(this.props.data)} color={this.props.color} />
        );
    }
});

module.exports = DataSeries;