var Marty = require('marty')
, Constants = require('../Constants');

var PokemonActionCreators = Marty.createActionCreators({
  displayName: 'Pokemon',
  getPokemon: Constants.GET_POKEMON(function(pokemon) {
    this.dispatch(pokemon);  
  }),
  addPokemon: Constants.ADD_POKEMON(function(pokemon, data) {
    this.dispatch(pokemon, data);
  })
});

module.exports = PokemonActionCreators;
