var Marty = require('marty')
,   Constants = require('../Constants');

var PokemonActionCreators = Marty.createActionCreators({
    displayName: 'Pokemon',
    addPokemon: Constants.ADD_POKEMON(function(pokemon) {
        this.dispatch(pokemon);
    })
});

module.exports = PokemonActionCreators;