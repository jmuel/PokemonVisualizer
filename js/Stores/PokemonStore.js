var Dispatcher = require('../Dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../Constants/PokemonConstants');
var _ = require('lodash');

var pokemonData = {
};

var activeGeneration = 1;
var activeFormat = 'ou';

var addPokemon = function(pokemon, data) {
	pokemonData[pokemon] = data;
};



var CHANGE_EVENT = 'change';

var PokemonStore = _.assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	//we're just giving back the data for the current generation
	getActivePokemonData: function() {
		return _.reduce(pokemonData, function(memo, data, pokemon) {
			var genData = data[activeGeneration];
			if(genData) {
				memo[pokemon] = genData;
			}
			return memo;

		}, {});
	},

	getActiveGeneration: function() {
		return activeGeneration;
	},

	getActiveFormat: function() {
		return activeFormat;
	}
});

PokemonStore.dispatchToken = Dispatcher.register(function(action) {
	switch(action.actionType) {
		case Constants.ADD_POKEMON_SUCCESS:
			addPokemon(action.pokemon, action.data);
			PokemonStore.emitChange();
			break;
		case Constants.CHANGE_GENERATION:
			activeGeneration = action.generation; 
			PokemonStore.emitChange();
			break;
		default: //noop
	}
});

module.exports = PokemonStore;
