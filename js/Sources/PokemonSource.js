var Marty = require('marty')
, PokemonActionCreator = require('../ActionCreators/PokemonActionCreators');

var PokemonSource = Marty.createStateSource({
  type: 'http',
  baseUrl: 'http://pokestat.org.uk/api',
  getPokemon: function(pokemon) {
    return this.get('/pokemon/' + pokemon).then(function(res) {
      PokemonActionCreator.addPokemon(pokemon, res.body); 
    });  
  }
});

module.exports = PokemonSource;
