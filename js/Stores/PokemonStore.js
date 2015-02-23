var Marty = require('marty')
, Constants = require('../Constants')
, PokemonDataService = require('../Services/PokemonDataService')
, PokemonSource = require('../Sources/PokemonSource')
, _ = require('underscore');

var PokemonStore = Marty.createStore({
  displayName: 'Pokemon Store',
  handlers: {
    addPokemon: Constants.ADD_POKEMON,
    getPokemon: Constants.GET_POKEMON
  },
  addPokemon: function(pokemon, data) {
    this.state[pokemon] = data;
    this.hasChanged();
  
  },
  getPokemon: function(pokemon) {
    return this.fetch({
      id: pokemon,
      locally: function() {
        return this.state[pokemon]; 
      },
      remotely: function() {
        return PokemonSource.getPokemon(pokemon);   
      }
    }); 
  },
  getInitialState: function() {
    return {};
  }
});

module.exports = PokemonStore;
