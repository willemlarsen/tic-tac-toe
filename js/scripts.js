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
    this.markedBy = player;
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
  winsForX: function() {
    if (this.verticalWinsForX() || this.horizontalWinsForX() || this.diagonalWinsForX()) {
      return true;
    } else {
      return false;
    }
  },
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
   var symbol = "X";
    if (Space.spaces[0].markedBy === symbol && Space.spaces[4].markedBy === symbol && Space.spaces[8].markedBy === symbol) {
      return true;
    } else if (Space.spaces[2].markedBy === symbol && Space.spaces[4].markedBy === symbol && Space.spaces[6].markedBy === symbol) {
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

$(document).ready(function() {
  var newBoard = Object.create(Board);
  newBoard.initialize();

  $('#0').click(function() {
    $('#0-marked').text("X");
    Space.spaces[0].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#1').click(function() {
    $('#1-marked').text("X");
    Space.spaces[1].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#2').click(function() {
    $('#2-marked').text("X");
    Space.spaces[2].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#3').click(function() {
    $('#3-marked').text("X");
    Space.spaces[3].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#4').click(function() {
    $('#4-marked').text("X");
    Space.spaces[4].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#5').click(function() {
    $('#5-marked').text("X");
    Space.spaces[5].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#6').click(function() {
    $('#6-marked').text("X");
    Space.spaces[6].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#7').click(function() {
    $('#7-marked').text("X");
    Space.spaces[7].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
  $('#8').click(function() {
    $('#8-marked').text("X");
    Space.spaces[8].markBy("X");
    if(Board.winsForX()) {
      $('.win').show();
      $('.winner').text("X");
    }
  });
});

