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
  initializeColumnOne: function() {
    for (var index = 1; index === 3; index++) {
      Space.create(1, index);
    }
  },
  twoInRowVertically: function(spaceOne, spaceTwo) {
      if ((spaceOne.markedBy === spaceTwo.markedBy) &&
        (spaceOne.xCoordinate === spaceTwo.xCoordinate) &&
        (spaceOne.xCoordinate === spaceTwo.xCoordinate - 1 ||
          spaceOne.xCoordinate === spaceTwo.xCoordinate + 1)) {
        return true;
      } else {
        return false;
      }
  },
  initialize: function() {
    this.initializeColumnOne();
    return Space.spaces;
  }
};

