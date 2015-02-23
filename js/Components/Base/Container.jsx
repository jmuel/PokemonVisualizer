var React = require('react');

var style = {
  backgroundColor: 'WHITE',
  width: '100%',
  minHeight: '100%'
};

var Container = React.createClass({
  render: function() {
    return (
      <div style={style}>{this.props.children}</div>
    );
  }
});

module.exports = Container;
