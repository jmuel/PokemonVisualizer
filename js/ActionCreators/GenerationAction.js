var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants/PokemonConstants');

var GenerationActions =  {
  changeGeneration: function(gen) {
    Dispatcher.dispatch({
      actionType: Constants.CHANGE_GENERATION,
      generation: gen
    });
  }

};

module.exports = GenerationActions;