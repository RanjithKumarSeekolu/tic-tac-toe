const {TicTacToe}=require('../build/src/components/tic-tac-toe')

describe("Test suite for 3X3 grid",function(){

    beforeEach(function(){
        this.board=new TicTacToe(3,3);
    })

    it("should check for instance", function(){
        expect(true).toEqual(this.board instanceof TicTacToe);
    });

    it("should set position", function(){
        [[0,0,'X'],[1,1,'O'],[2,2,'O'],[2,1,'O'],[0,0,'X'],[1,1,'O'],[-1,-1,'X'],[-1,1,'O'],[10,-1,'X'],[10,1,'O'],[0,'O'],['X'],['O']].forEach(item=>{
            expect(false).toBe(this.board.setPosition(...item))
        });
    });

    it("should 'X' win",function(){
        [[[0,0, 'X'], false] , [[0, 1, 'X'], false],[ [0, 2, 'X'], true]].forEach(item => {
            expect(item[1]).toBe(this.board.setPosition(...item[0]));
        })
    })

    it("should 'O' win", function(){
        [[[1,1, 'O'], false] , [[1, 2, 'O'], false],[ [1, 0, 'O'], true]].forEach(item => {
            expect(item[1]).toBe(this.board.setPosition(...item[0]));
        })
    })

    it("should be tie", function(){
        [[[0,0, 'X'], true] , [[0, 1, 'O'], true],[ [1, 0, 'X'], true],[ [2, 0, 'O'], true],[ [2, 2, 'X'], true],[ [1, 2, 'O'], true],[ [2, 1, 'X'], true],[ [1, 1, 'O'], true],[ [0, 2, 'X'], false]].forEach(item=>{
            this.board.setPosition(...item[0]);
            expect(item[1]).toBe(this.board.canPlay());
        })
    })

})