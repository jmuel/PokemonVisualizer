var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants/PokemonConstants');
var ApiConstants = require('../Constants/ApiConstants');
var SuperAgent = require('superagent');

var FormatActions =  {
  changeFormat: function(format) {
    Dispatcher.dispatch({
      actionType: Constants.CHANGE_FORMAT,
      format: format
    });
  },

  changeGeneration: function(gen) {
    Dispatcher.dispatch({
      actionType: Constants.CHANGE_GENERATION,
      generation: parseInt(gen)
    });
  },

  getAllFormats: function() {
    Dispatcher.dispatch({
      actionType: Constants.LOAD_ALL_GENS_AND_FORMATS
    });
    SuperAgent
      .get(ApiConstants.baseUrl + ApiConstants.tiers)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if(res.ok) {
          Dispatcher.dispatch({
            actionType: Constants.LOAD_ALL_GENS_AND_FORMATS_SUCCESS,
            data: res.body
          });
        } else {
          Dispatcher.dispatch({
            actionType: Constants.LOAD_ALL_GENS_AND_FORMATS_FAIL
          });
        }

      });
  }

};

module.exports = FormatActions;