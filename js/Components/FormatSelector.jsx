var React = require('react');
var GenerationAction = require('../ActionCreators/GenerationAction');

var FormatSelector = React.createClass({
  _changeGeneration: function(event) {
    console.log(event.target);
    GenerationAction.changeGeneration(event.target.value);

  },

  render: function() {
    return (
      <div className="row">
        <select className="six columns" value={this.props.generation} onChange={this._changeGeneration}>
          <option value="1">Generation 1</option>
          <option value="2">Generation 2</option>
          <option value="3">Generation 3</option>
          <option value="4">Generation 4</option>
          <option value="5">Generation 5</option>
          <option value="6">Generation 6</option>
        </select>
        <select className="six columns">
          <option>OverUsed</option>
        </select>
      </div>
    );
  }
});

module.exports = FormatSelector;
