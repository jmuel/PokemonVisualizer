var data = {
    Charizard: [{x: 0, y: 40}, {x: 1, y: 30}, {x: 2, y: 10}, {x: 3, y: 5}, {x: 4, y: 8}, {x: 5, y: 15}, {x: 6, y: 20}]
};

var Service = {
    getUsage: function(pokemon) {
        return data[pokemon];
    }
};
module.exports = Service;