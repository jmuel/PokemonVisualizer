var React = require('react')
,   Title = require('./Base/Title.jsx');

var style = {
    backgroundColor: '#3F51B5',
    width: '100%',
    height: '100%'
};

var NavBar = React.createClass({
    render: function() {
        return (
            <div style={style}>
                <Title>{this.props.title}</Title>
            </div>
        )
    }
});

module.exports = NavBar;