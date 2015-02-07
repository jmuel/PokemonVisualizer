var Marty = require('marty')
,   Constants = require('../Constants')
,   PokemonDataService = require('../Services/PokemonDataService')
,   _ = require('underscore');

var PokemonStore = Marty.createStore({
    displayName: 'Pokemon Store',
    handlers: {
        addPokemon: Constants.ADD_POKEMON
    },
    addPokemon: function(pokemon) {
        this.state[pokemon] = PokemonDataService.getUsage(pokemon);
        this.hasChanged();
    },
    getInitialState: function() {
        return {};
    }
});

module.exports = PokemonStore;