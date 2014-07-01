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
  describe("initialize", function() {
    it("creates 9 spaces for a new board on a 3 x 3 grid", function(){
      var newBoard = Object.create(Board);
      newBoard.initialize();
     Space.spaces.length.should.eql(9);
    });
  });
  describe("threeInRowVertically", function() {
    it("returns a win if a player occupies three spaces in a row vertically", function() {
      var testPlayer = Player.create("X");
      var newBoard = Object.create(Board);
      newBoard.initialize();
      firstSpace.markBy(testPlayer);
      secondSpace.markBy(testPlayer);
      thirdSpace.markBy(testPlayer);
      threeInRowVertically(testPlayer).should.equal(true);
    });
  });
});