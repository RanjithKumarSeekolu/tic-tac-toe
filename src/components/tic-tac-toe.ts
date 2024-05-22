import { Player,Board } from '../types/tictactoe';

export class TicTacToe {
    
    board:Board = [];
    filledCells:number=0;

    constructor(private size:number = 3, private winLength = 3){
        this.size=size;
        this.winLength=winLength;
        this.createBoard();
    }

    private createBoard() {
        for(var i = 0; i < this.size; i++) {
            this.board[i]=[];
            for (var j = 0; j < this.size; j++) {
                this.board[i][j]=i*this.size+j+1;
            }
        }
    }

    private checkForWin(player: Player, inputArr: Player[]):boolean {
        let count=0;
        inputArr.forEach(p=>{
            if(p===player) count++
            else count=0;
          
            if(count>=this.winLength) return;
        });
        return count>=this.winLength;
    }

    public canPlay() {
        return this.filledCells<this.size*this.size;
    }

    public setPosition(row: number, col: number, player: Player):boolean {
        // occupy position
        // get horizontal, vertical, diagonal, opp diagnol
        if(row === undefined || col === undefined || !player || row<0 || row>=this.size || col<0 || col>=this.size || this.board[row][col]==='X' || this.board[row][col]==='O'){
           return false;
        }

        this.board[row][col]=player;
        this.filledCells++;
        const hor = this.board[row];
        const ver = this.board.map(r => r[col]);
        const diag= this.board.map(r=>r[(col-row)+this.board.indexOf(r)]);
        const antiDiag=this.board.map(r=>r[(col+row)-this.board.indexOf(r)]);

        return !![hor, ver, diag, antiDiag].some(a => this.checkForWin(player, a));
    }
}
