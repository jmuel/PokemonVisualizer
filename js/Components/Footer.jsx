var React = require('react');

var style = {
    backgroundColor: '#7986CB',
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0
}

var Footer = React.createClass({
    render: function() {
        return (
            <div style={style} />
        );
    }
});

module.exports = Footer;