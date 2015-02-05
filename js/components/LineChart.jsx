var React = require('react')
,   _     = require('underscore')
,   SVG   = require('./SVG.jsx')
,   DataSeries = require('./DataSeries.jsx');

var LineChart = React.createClass({
    getDefaultProps: function() {
        return {
            height: 300,
            width: 600
        };
    },

    render: function() {
        var data = this.props.data
        ,   size = { width: this.props.width, height: this.props.height}
        ,   max = _.chain(data.series)
            .zip()
            .map(function(values) {
                    return _.reduce(values, function(memo, value) { return Math.max(memo, value.y); }, 0);
                })
            .max()
            .value()
        ,   xScale = d3.scale.linear().domain([0, 6]).range([0, this.props.width])
        ,   yScale = d3.scale.linear().domain([0, max]).range([this.props.height, 0]);

        return (
            <SVG width={this.props.width} height={this.props.height}>
                <DataSeries data={data.series} size={size} xScale={xScale} yScale={yScale} ref="Series" color="red" />
            </SVG>
        );

    }
});

module.exports =  LineChart;