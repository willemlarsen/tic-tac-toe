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
  verticalWinsForX: function() {
    if(Space.spaces[0].markedBy === "X" && Space.spaces[1].markedBy === "X" && Space.spaces[2].markedBy === "X") {
      return true;
    } else if(Space.spaces[3].markedBy === "X" && Space.spaces[4].markedBy === "X" && Space.spaces[5].markedBy === "X") {
      return true;
    } else if(Space.spaces[6].markedBy === "X" && Space.spaces[7].markedBy === "X" && Space.spaces[8].markedBy === "X") {
      return true;
    } else {
      return false;
    }
  },
  horizontalWinsForX: function() {
    if(Space.spaces[0].markedBy === "X" && Space.spaces[3].markedBy === "X" && Space.spaces[6].markedBy === "X") {
      return true;
    } else if(Space.spaces[1].markedBy === "X" && Space.spaces[4].markedBy === "X" && Space.spaces[7].markedBy === "X") {
      return true;
    } else if(Space.spaces[2].markedBy === "X" && Space.spaces[5].markedBy === "X" && Space.spaces[8].markedBy === "X") {
      return true;
    } else {
      return false;
    }
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

