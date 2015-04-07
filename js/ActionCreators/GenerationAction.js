var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants/PokemonConstants');

var GenerationActions =  {
  changeGeneration: function(gen) {
    Dispatcher.dispatch({
      actionType: Constants.CHANGE_GENERATION,
      generaton: gen
    });
  }

};

module.exports = GenerationActions;