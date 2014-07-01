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
  spaces: [],
  find: function(x, y) {
    var length = Space.spaces.length;
    for (var index = 0; index < length; index++) {
      if(Space.spaces[index].xCoordinate === x && Space.spaces[index].yCoordinate === y) {
        return Space.spaces[index].markedBy;
      }
    }
  },
  markBy: function (player) {
    this.markedBy = player.symbol;
  },
  create: function(x, y) {
    var newSpace = Object.create(Space);
    newSpace.initialize(x, y);
    return newSpace;
  },
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    Space.spaces.push(this);
  },
};

var Board = {
  spaces: Space.spaces,
  initialize: function() {
    var firstSpace = Space.create(1, 1);
    var secondSpace = Space.create(1, 2);
    var thirdSpace = Space.create(1, 3);
    var fourthSpace = Space.create(2, 1);
    var fiveSpace = Space.create(2, 2);
    var sixSpace = Space.create(2, 3);
    var seventhSpace = Space.create(3, 1);
    var eighthSpace = Space.create(3, 2);
    var ninthSpace = Space.create(3, 3);
  }
};

