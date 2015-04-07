var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants/PokemonConstants');
var superAgent = require('superagent');

var baseUrl = 'http://pokestat.org.uk/api/';

var PokemonActions = {
	addPokemon: function(pokemonName, generation) {
		Dispatcher.dispatch({
			actionType: Constants.ADD_POKEMON
		});
		superAgent
			.get(baseUrl + 'pokemon/' + pokemonName)
			.set('Accept', 'application/json')
			.end(function(err, res) {
				if(res.ok) {
					Dispatcher.dispatch({
						actionType: Constants.ADD_POKEMON_SUCCESS,
						pokemon: pokemonName,
						data: res.body
					});
				} else {
					Dispatcher.dispatch({
						actionType: Constants.ADD_POKEMON_FAIL
					});
				}
			});

	}
};

module.exports = PokemonActions;
