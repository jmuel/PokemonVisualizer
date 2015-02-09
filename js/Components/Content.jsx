var React = require('react');

var style = {
    padding: 10,
    paddingBottom: 80,
    height: '100%'
};

var Content = React.createClass({
    render: function() {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Content;