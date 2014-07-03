beforeEach(function() {
  Space.spaces = [];
});
  
describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("creates a new Space object", function() {
      var testSpace = Space.create();
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("markBy", function() {
    it("marks a space by a player, whether X or O", function() {
      var testSpace = Space.create(1, 1);
      testSpace.markBy("X");
      testSpace.markedBy.should.equal("X");
    });
  });
  describe("spaces", function() {
    it("creates an array for all Space objects", function() {
      var testSpace = Space.create(1, 1);
      Space.spaces.should.eql([testSpace]);
    });
  });
});

describe("Board", function() {
  describe("initializeColumnOne", function() {
    it("creates 3 spaces for column one", function() {
      var testBoard = Object.create(Board);
      testBoard.initializeColumnOne();
      Space.spaces.length.should.equal(3);
    });
  });
  describe("intializeColumnTwo", function() {
    it("creates 3 spaces for column two", function() {
      var testBoard = Object.create(Board);
      testBoard.initializeColumnTwo();
      Space.spaces.length.should.equal(3);
    });
  });
  describe('intializeColumnThree', function() {
    it('creates 3 spaces for column three', function() {
      var testBoard = Object.create(Board);
      testBoard.initializeColumnThree();
      Space.spaces.length.should.equal(3);
    });
  });
  describe('initialize', function() {
    it('initializes columns one, two, and three into a 3 x 3 grid', function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      Space.spaces.length.should.equal(9);
    });
  });
  describe('verticalWins', function() {
    it('analyzes the board and returns true if a vertical win condition has been reached', function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      Space.spaces[0].markBy("X");
      Space.spaces[1].markBy("X");
      Space.spaces[2].markBy("X");
      testBoard.verticalWins().should.equal(true);
    });
  });
  describe('horizontalWins', function() {
    it('analyzes the board and returns true if a horizontal win condition has been reached', function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      Space.spaces[0].markBy("X");
      Space.spaces[3].markBy("X");
      Space.spaces[6].markBy("X");
      testBoard.horizontalWins().should.equal(true);
    });
  });
  describe('diagonalWins', function() {
    it('analyzes the board and returns true if a diagonal win condition has been reached', function(done) {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      Space.spaces[2].markBy("X");
      Space.spaces[4].markBy("X");
      Space.spaces[6].markBy("X");
      testBoard.diagonalWins().should.equal(true);
      done();
    });
  });
  describe('wins', function() {
    it('analyzes the board and returns true if any win condition for X has been reached', function(done) {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      Space.spaces[8].markBy("X");
      Space.spaces[4].markBy("X");
      Space.spaces[0].markBy("X");
      testBoard.wins().should.equal(true);
      done();
    });
    it('analyzes the board and returns false if no win condition for X has been reached', function(done) {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      Space.spaces[8].markBy("X");
      Space.spaces[5].markBy("X");
      Space.spaces[0].markBy("X");
      testBoard.wins().should.equal(false);
      done();
    });
  });
});


