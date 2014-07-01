var Player = {
  create: function(name) {
    var newPlayer = Object.create(Player);
    this.name = name;
    return newPlayer;
  },
  initialize: function (symbol) {
    this.symbol = symbol;
  }
};

var Space = {
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  }
};

