var React = require('react');

var SVG = React.createClass({
    render: function() {
        return (
            <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
        );
    }
});

module.exports = SVG;