var React = require('react');
var LineChart = require('react-d3').LineChart;
var _ = require('underscore');
var d3 = require('d3');

var xFormatter = function(d) {
  var formatter = d3.time.format('%m/%Y').parse;
  return formatter(d.x);
};

var yFormatter = function(d) {
  return d.y;
};

var buildValues = function(monthData) {
  return _.reduce(monthData, function(memo, data, date) {
    var d = {
      x: date,
      y: data['usage']
    };
    memo.push(d);
    return memo;
  }, []);
};

var UsageChart = React.createClass({

  render: function() {
    var data = _.reduce(this.props.pokemonData, (memo, pokemonData, pokemon) => {
      memo.push({
        name: pokemon,
        values: buildValues(pokemonData[this.props.format.activeFormat]["0"])
      });
      return memo;
    }, []);

    return (
      <LineChart
        legend={true}
        data={data}
        xAccessor={xFormatter}
        yAccessor={yFormatter}
        xAxisTickInterval={{unit:'year', interval: 1}}
        width={900}
        height={559}
      />
    );
  }
});

module.exports = UsageChart;
