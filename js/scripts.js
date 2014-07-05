var onSpaceClicked = function(turn, spaceNumber) {
  Space.spaces[spaceNumber].markBy(turn);
  if(Board.wins(turn)) {
    $('.win').show();
    $('.winner').text(turn);
  } else if (turn === "X") {
    turn = "O";
    $('.open-message-x').hide();
    $('p#turns').text("Now " + turn + " it's your turn. Click on a square.");
  } else if (turn === "O") {
    turn = "X";
    $('.open-message-x').hide();
    $('p#turns').text("Now " + turn + " it's your turn. Click on a square.");
  } return turn;
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
  wins: function(turn) {
    if (Board.verticalWins(turn) || Board .horizontalWins(turn) || Board .diagonalWins(turn)) {
      return true;
    } else {
      return false;
    }
  },
  verticalWins: function(turn) {
    var symbol = turn;
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
  horizontalWins: function(turn) {
    var symbol = turn;
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
  diagonalWins: function(turn) {
   var symbol = turn;
    if(Space.spaces[0].markedBy === symbol && Space.spaces[4].markedBy === symbol && Space.spaces[8].markedBy === symbol) {
      return true;
    } else if(Space.spaces[2].markedBy === symbol && Space.spaces[4].markedBy === symbol && Space.spaces[6].markedBy === symbol) {
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

var turn = "X";

$(document).ready(function() {
  var newBoard = Object.create(Board);
  newBoard.initialize();

  $('#0').click(function() {
    $('#0-marked').text(turn);
    turn = onSpaceClicked(turn, 0);
  });
  $('#1').click(function() {
    $('#1-marked').text(turn);
    turn = onSpaceClicked(turn, 1);
  });
  $('#2').click(function() {
    $('#2-marked').text(turn);
    turn = onSpaceClicked(turn, 2);
  });
  $('#3').click(function() {
    $('#3-marked').text(turn);
    turn = onSpaceClicked(turn, 3);
  });
  $('#4').click(function() {
    $('#4-marked').text(turn);
    turn = onSpaceClicked(turn, 4);
  });
  $('#5').click(function() {
    $('#5-marked').text(turn);
    turn = onSpaceClicked(turn, 5);
  });
  $('#6').click(function() {
    $('#6-marked').text(turn);
    turn = onSpaceClicked(turn, 6);
  });
  $('#7').click(function() {
    $('#7-marked').text(turn);
    turn = onSpaceClicked(turn, 7);
  });
  $('#8').click(function() {
    $('#8-marked').text(turn);
    turn = onSpaceClicked(turn, 8);
  });
});

