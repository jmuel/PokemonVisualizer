var React = require('react');

var style = {
    fontSize: '2em',
    padding: 10
};

var Title = React.createClass({
    render: function() {
        return (
            <h1 style={style}> {this.props.children} </h1>
        );
    }
});

module.exports = Title;