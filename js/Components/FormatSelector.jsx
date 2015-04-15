var React = require('react');
var FormatAction = require('../ActionCreators/FormatAction');
var _ = require('lodash');

var FormatSelector = React.createClass({
  _changeGeneration: function(event) {
    FormatAction.changeGeneration(event.target.value);
  },

  _changeFormat: function(event) {
    FormatAction.changeFormat(event.target.value);
  },

  render: function() {
    var formatList = this.props.format.generations;
    var generationOptions = _.map(formatList, function(formats, gen) {
      return <option key={gen} value={gen}>Generation {gen}</option>;
    });
    var formatOptions = _.map(formatList[this.props.format.activeGeneration], function(elos, format) {
      return <option key={format} value={format}>{format}</option>;
    });

    return (
      <div className="row">
        <select className="six columns" value={this.props.format.activeGeneration} onChange={this._changeGeneration}>
          {generationOptions}
        </select>
        <select className="six columns" value={this.props.format.activeFormat} onChange={this._changeFormat}>
          {formatOptions}
        </select>
      </div>
    );
  }
});

module.exports = FormatSelector;
