var React = require('react')
,   Marty = require('marty')
,   Usage = require('./Components/Usage.jsx');

window.Marty = Marty;
window.React = React;

React.render(<Usage/>, document.getElementById('root'));
