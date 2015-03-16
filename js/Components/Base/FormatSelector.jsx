var React = require('react');

var FormatSelector = React.createClass({
  render: function() {
    return (
      <div className="row">
        <select className="six columns">
          <option>Generation 1</option>
        </select>
        <select className="six columns">
          <option>OverUsed</option>
        </select>
      </div>
    );
  }
});

module.exports = FormatSelector;
