
const {TicTacToe}=require('../build/src/components/tic-tac-toe')

xdescribe("Tic-Tac-Toe suite - 1", function(){
  beforeEach(function(){
    const initialPlayer='X';
    const gridSize=3;
    const winStreakLength=3;
    this.ticTacToeObj=new TicTacToe(initialPlayer,gridSize,winStreakLength);

    spyOn(this.ticTacToeObj,'printBoard').and.stub();
    spyOn(this.ticTacToeObj,'askMove').and.stub();

    this.ticTacToeObj.printBoard();
    expect(this.ticTacToeObj.printBoard).toHaveBeenCalled();
  })
  
  it("should check for instance", function(){
    expect(true).toEqual(this.ticTacToeObj instanceof TicTacToe);
  })

  it("should mark position", function(){

    expect(true).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(2,'O'));

    expect(true).toBe(this.ticTacToeObj.markPosition(9,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(8,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(false).toBe(this.ticTacToeObj.markPosition(2,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(2,'X'));
    expect(false).toBe(this.ticTacToeObj.markPosition(1,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(0,'X'));
    expect(false).toBe(this.ticTacToeObj.markPosition(10,'X'));

    expect(false).toBe(this.ticTacToeObj.markPosition(0,'O'));
    expect(false).toBe(this.ticTacToeObj.markPosition(10,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(0));
    expect(false).toBe(this.ticTacToeObj.markPosition(10));

    expect(false).toBe(this.ticTacToeObj.markPosition('X'));
    expect(false).toBe(this.ticTacToeObj.markPosition('O'));
  })

  it("should check for win", function(){
    
  })
  
  it("should be tie", function(){

    // [[1,1, 'x', ............].reduce();

    expect(true).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(2,'O'));
    expect(false).toBe(this.ticTacToeObj.markPosition(2,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(5,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(9,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(7,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(4,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(6,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(3,'O'));
    expect(false).toBe(this.ticTacToeObj.markPosition(4,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(8,'O'));
    // expect(position).toBe(true);
  })

  it("should 'X' win", function(){

    expect(true).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(6,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(5,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(9,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(7,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(4,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(3,'X'));
  })

  it("should 'O' win", function(){
    expect(true).toBe(this.ticTacToeObj.markPosition(6,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(5,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(4,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(3,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(7,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(1,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(9,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(2,'O'));
  })

  it("tracks all the arguments of its calls", function() {

    spyOn(this.ticTacToeObj,"markPosition");
    this.ticTacToeObj.markPosition(1,'X')
    expect(this.ticTacToeObj.markPosition).toHaveBeenCalledWith(1, 'X');
});
});

xdescribe("Tic-Tac-Toe suite - 2", function(){
  beforeEach(function(){
    const initialPlayer='X';
    const gridSize=5;
    const winStreakLength=4;
    this.ticTacToeObj=new TicTacToe(initialPlayer,gridSize,winStreakLength);
    spyOn(this.ticTacToeObj,'printBoard').and.stub();
    spyOn(this.ticTacToeObj,'askMove').and.stub();
  })

  it("should check for instance", function(){  
    expect(true).toEqual(this.ticTacToeObj instanceof TicTacToe);
  })

  it("should mark position", function(){

    expect(true).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(2,'O'));

    expect(true).toBe(this.ticTacToeObj.markPosition(24,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(25,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(false).toBe(this.ticTacToeObj.markPosition(2,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(2,'X'));
    expect(false).toBe(this.ticTacToeObj.markPosition(1,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(0,'X'));
    expect(false).toBe(this.ticTacToeObj.markPosition(26,'X'));

    expect(false).toBe(this.ticTacToeObj.markPosition(0,'O'));
    expect(false).toBe(this.ticTacToeObj.markPosition(26,'O'));

    expect(false).toBe(this.ticTacToeObj.markPosition(0));
    expect(false).toBe(this.ticTacToeObj.markPosition(10));

    expect(false).toBe(this.ticTacToeObj.markPosition('X'));
    expect(false).toBe(this.ticTacToeObj.markPosition('O'));
  })

  it("should be tie", function(){
    expect(true).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(2,'O'));
    expect(false).toBe(this.ticTacToeObj.markPosition(2,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(5,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(9,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(7,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(4,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(6,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(3,'O'));
    expect(false).toBe(this.ticTacToeObj.markPosition(4,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(8,'O'));
    // expect(position).toBe(true);
  })

  it("should 'X' win", function(){
    expect(true).toBe(this.ticTacToeObj.markPosition(1,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(6,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(5,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(9,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(7,'X'));
    expect(true).toBe(this.ticTacToeObj.markPosition(4,'O'));
    expect(true).toBe(this.ticTacToeObj.markPosition(3,'X'));
  })
})
