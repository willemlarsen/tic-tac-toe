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
    if (player.symbol === "X") {
     Board.spacesMarkedX.push(this);
    }
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
  spacesMarkedX = [];
  verticalWins: function() {
    if [Space.spaces[0], Space.spaces[1], Space.spaces[2] ]
  winsForX: function() {

  },
  initializeColumnOne: function() {
    for (var index = 1; index < 4; index++) {
      Space.create(1, index);
    }
  },
  initializeColumnTwo: function() {
    for (var index = 1; index < 4; index++) {
      Space.create(2, index);
    }
  },
  initializeColumnThree: function() {
    for (var index = 1; index < 4; index++) {
      Space.create(3, index);
    }
  },
  initialize: function() {
    this.initializeColumnOne();
    this.initializeColumnTwo();
    this.initializeColumnThree();
  }
};

