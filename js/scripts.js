var Player = {
  create: function(symbol) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(symbol);
    return newPlayer;
  },
  initialize: function (symbol) {
    this.symbol = symbol;
  }
};

var Space = {
  markBy: function (player) {
    this.markedBy = player.symbol;
  },
  create: function() {
    var newSpace = Object.create(Space);
    return newSpace;
  },
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  }
};

