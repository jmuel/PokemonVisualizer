var React = require('react');

var style = {
    backgroundColor: '#E8EAF6',
    width: '100%'
};

var Container = React.createClass({
    render: function() {
        return (
            <div style={style}>{this.props.children}</div>
        );
    }
});

module.exports = Container;