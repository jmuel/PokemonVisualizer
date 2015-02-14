var React = require('react')
,   Marty = require('marty')
,   Router = require('director').http.Router()
,   Usage = require('./Components/Usage.jsx');

window.Marty = Marty;
window.React = React;

var routes = {

};



React.render(<Usage/>, document.getElementById('root'));
