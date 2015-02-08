var React = require('react');
var PokemonActionCreators = require('../ActionCreators/PokemonActionCreators');

var PokemonAdder = React.createClass({
    getInitialState: function() {
        return {
            pokemon: ""
        };
    },
    handleChange: function(event) {
        this.setState({
            pokemon: event.target.value});
    },
    addPokemon: function() {
        PokemonActionCreators.addPokemon(this.state.pokemon);
    },
    render: function() {
        return (
            <div>
                <input type="text" value={this.state.pokemon} onChange={this.handleChange}/>
                <input type="button" onClick={this.addPokemon} value="Add"/>
            </div>
        );
    }
});

module.exports = PokemonAdder;