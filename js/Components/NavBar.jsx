var React = require('react');

var style = {
    backgroundColor: '#3F51B5',
    width: '100%',
    height: 100
};

var NavBar = React.createClass({
    render: function() {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
});

module.exports = NavBar;