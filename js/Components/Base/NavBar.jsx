var React = require('react')
, Title = require('./Title.jsx');


var NavBar = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="four columns">
          <h4>Pokemon Visualizer</h4>
        </div>
        <div id="nav" className="eight columns">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Usage</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
