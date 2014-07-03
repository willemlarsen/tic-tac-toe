beforeEach(function() {
  Space.spaces = [];
});
describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
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
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 1);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal("X");
    });
  });
  describe("spaces", function() {
    it("creates an array for all Space objects", function() {
      var testSpace = Space.create(1, 1);
      Space.spaces.should.eql([testSpace]);
    });
  });
  describe("find", function() {
    it("reveals whether a space is marked by an X or an O", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 1);
      testSpace.markBy(testPlayer);
      Space.find(1, 1).should.equal("X");
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
  describe('winsForX', function() {
    it('analyzes the board after every X move and returns true if a win condition has been reached', function() {
      var testBoard = Object.create(Board);
      var testPlayer = Player.create("X");
      testBoard.initialize();
      Space.spaces[0].markBy(testPlayer);
      Space.spaces[1].markBy(testPlayer);
      Space.spaces[2].markBy(testPlayer);
      winsForX().should.equal(true);
    });
  });

});