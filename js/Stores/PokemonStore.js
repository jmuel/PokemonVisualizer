var Dispatcher = require('../Dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../Constants/PokemonConstants');
var _ = require('lodash');

var pokemonData = {
};

var format = {
	activeFormat: 'ou',
	activeGeneration: 1,
	generations: {}
}

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
		var pokedata = _.reduce(pokemonData, function(memo, data, pokemon) {
			var genData = data[format.activeGeneration];
			if(genData) {
				memo[pokemon] = genData;
			}
			return memo;

		}, {});

		return pokedata;
	},

	getFormat: function() {
		return format;
	}
});

PokemonStore.dispatchToken = Dispatcher.register(function(action) {
	switch(action.actionType) {
		case Constants.ADD_POKEMON_SUCCESS:
			addPokemon(action.pokemon, action.data);
			PokemonStore.emitChange();
			break;
		case Constants.CHANGE_GENERATION:
			format.activeGeneration = action.generation;
			PokemonStore.emitChange();
			break;
		case Constants.CHANGE_FORMAT:
			format.activeFormat = action.format;
			PokemonStore.emitChange();
			break;
		case Constants.LOAD_ALL_GENS_AND_FORMATS_SUCCESS:
			format.generations = action.data;
			PokemonStore.emitChange();
			break;
		default: //noop
	}
});

module.exports = PokemonStore;
