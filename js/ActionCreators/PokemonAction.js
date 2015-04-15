var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants/PokemonConstants');
var SuperAgent = require('superagent');
var ApiConstants = require('../Constants/ApiConstants');

var PokemonActions = {
	addPokemon: function(pokemonName, generation) {
		Dispatcher.dispatch({
			actionType: Constants.ADD_POKEMON
		});
		SuperAgent
			.get(ApiConstants.baseUrl + ApiConstants.individualPokemon + pokemonName)
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
