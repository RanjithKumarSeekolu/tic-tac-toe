const {TicTacToe}=require('../src/components/tic-tac-toe')

describe("A suite", function() {
  it("contains spec with an expectation", function() {
      expect(true).toBe(true);
  });
});

describe("A Tic-Tac-Toe suite", function(){
  it("should create a new instance",function(){
    const initialPlayer='X';
    const gridSize=3;
    const winStreakLength=3;
    const ticTacToeObj=new TicTacToe(initialPlayer,gridSize,winStreakLength);
    // expect(ticTacToeObj).toEqual(instanceof TicTacToe)
  });
  it("should check for tie", function(){
    
  })
})
