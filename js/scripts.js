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
    var symbol = "X";
    if(Space.spaces[0].markedBy === symbol && Space.spaces[1].markedBy === symbol && Space.spaces[2].markedBy === symbol) {
      return true;
    } else if(Space.spaces[3].markedBy === symbol && Space.spaces[4].markedBy === symbol && Space.spaces[5].markedBy === symbol) {
      return true;
    } else if(Space.spaces[6].markedBy === symbol && Space.spaces[7].markedBy === symbol && Space.spaces[8].markedBy === symbol) {
      return true;
    } else {
      return false;
    }
  },
  horizontalWinsForX: function() {
    var symbol = "X";
    if(Space.spaces[0].markedBy === symbol && Space.spaces[3].markedBy === symbol && Space.spaces[6].markedBy === symbol) {
      return true;
    } else if(Space.spaces[1].markedBy === symbol && Space.spaces[4].markedBy === symbol && Space.spaces[7].markedBy === symbol) {
      return true;
    } else if(Space.spaces[2].markedBy === symbol && Space.spaces[5].markedBy === symbol && Space.spaces[8].markedBy === symbol) {
      return true;
    } else {
      return false;
    }
  },
  diagonalWinsForX: function() {
   return true;
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

