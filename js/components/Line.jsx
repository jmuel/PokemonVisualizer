var React = require('react');

var Line = React.createClass({
    getDefaultProps: function() {
        return {
            path: '',
            color: 'blue',
            width: 2
        }
    },

    render: function() {
        return (
            <path d={this.props.path} stroke={this.props.color} stroke-width={this.props.width} fill="none"/>
        );
    }
});

module.exports = Line;