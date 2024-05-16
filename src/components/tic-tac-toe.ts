import * as readline from 'readline';
import { Player,Board } from '../types/tictactoe';
import { countDigits, colouredText } from '../utils/miscellaneous';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class TicTacToe{
    currPlayer:Player;
    board:Board;
    gridSize:number;
    winStreakLength:number;   

    constructor(currPlayer:Player, gridSize:number,winStreakLength:number){
        this.currPlayer=currPlayer;
        this.gridSize=gridSize;
        this.winStreakLength=winStreakLength;

        this.board=[];
        for(let i=0;i<gridSize;i++){
            this.board[i]=[];
            for(let j=0;j<gridSize;j++){
                this.board[i][j]=i*gridSize+j+1;
            }
        }

    }

    printBoard=()=>{
        console.clear();

        //to Find cell width, calculate the no of digits of largest number in the cell(gridSize*gridSize) possible in the grid
        const maxDigits=countDigits(this.gridSize*this.gridSize);
        this.board.forEach(row=>{
            let rowStr=' '
            row.forEach(cell=>{
                let color:number=cell==='X'?33:cell==='O'?96:37;
                rowStr+=colouredText(cell.toString(),color);
                rowStr+=' '.repeat(maxDigits-cell.toString().length)+' | ';
            })
            console.log(rowStr)
            // console.log(row.join(' | '));
            console.log('-'.repeat(this.gridSize * (maxDigits+1) + this.gridSize*2));
        })
    }

    checkWin=(row:number,col:number):boolean=>{
        const {
            board, currPlayer,gridSize,winStreakLength
        } = this

        let count=0;
        //horizontal
        count=0;
        for(let i=row;i<gridSize && board[i][col]===currPlayer;i++){
            count++;
        }
        for(let i=row-1;i>=0 && board[i][col]===currPlayer;i--){
            count++;
        }
        if(count>=winStreakLength){
            return true;
        }

        //vertical
        count=0;
        for(let i=col;i<gridSize && board[row][i]===currPlayer;i++){
            count++;
        }
        for(let i=col-1;i>=0 && board[row][i]===currPlayer;i--){
            count++;
        }
        if(count>=winStreakLength){
            return true;
        }

        //diagonal
        count=0;
        for(let i=0;row+i<gridSize && col+i<gridSize && board[row+i][col+i]===currPlayer;i++){
            count++;
        }
        for(let i=1;row-i>=0 && col-i>=0 && board[row-i][col-i]===currPlayer;i++){
            count++;
        }
        if(count>=winStreakLength){
            return true;
        }

        //anti-diagonal
        count=0;
        for(let i=0;row+i<gridSize && col-i>=0 && board[row+i][col-i]===currPlayer;i++){
            count++;
        }
        for(let i=1;row-i>=0 && col+i<gridSize && board[row-i][col+i]===currPlayer;i++){
            count++;
        }
        if(count>=winStreakLength){
            return true;
        }

        //default
        return false;
    }

    isBoardFull=():boolean=>{
        return this.board.every(row=>row.every(cell=>(cell==='X' || cell==='O')));
    }

    askMove=()=>{
        rl.question(`Player ${this.currPlayer}'s turn: Enter cell number: `, input => {
            const {gridSize,board,currPlayer}=this;
            if(Number(input)>gridSize*gridSize){
                console.log(colouredText('Invalid input. Try again!!',31));
                this.askMove();
                return;
            }
            const row:number=Math.floor((Number(input)-1)/gridSize);
            const col:number=(Number(input)-1)%gridSize;

            if(row>=0 && row<gridSize && col>=0 && col<gridSize && board[row][col]!=='X' && board[row][col]!=='O'){
                this.board[row][col]=currPlayer;

                if(this.checkWin(row,col)){
                    this.printBoard();
                    console.log(colouredText(`Player ${currPlayer} wins !`,32));
                    rl.close();
                } else if(this.isBoardFull()){
                    this.printBoard();
                    console.log(colouredText(`It's a tie!`,34));
                    rl.close();
                }else{
                    this.currPlayer=currPlayer==='X'?'O':'X';
                    this.printBoard();
                    this.askMove();
                }
            }else{
                console.log(colouredText('Invalid input. Try again!!',31));
                this.askMove();
                return;
            }
        });
    }

    playGame=()=>{
        this.printBoard();
        this.askMove();
    }
}