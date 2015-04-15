var React = require('react');
var Usage = require('./Components/Usage.jsx');
var FormatAction = require('./ActionCreators/FormatAction');

window.React = React;

FormatAction.getAllFormats();

React.render(<Usage />, document.getElementById('root'));
