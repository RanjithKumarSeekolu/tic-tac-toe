import { Player,Board } from '../../types/tictactoe';
import { countDigits, colouredText } from '../../utils/miscellaneous';

export class TicTacToe {
    
    borad:Board = [];

    constructor(private size = 3, private winLength = 3){
        
    }

    private createBoard() {
        for(var i = 0; i < this.size; i++) {
            this.borad[i]=[];
            for (var j = 0; j < this.size; j++) {
                this.borad[i][j]=i*this.size+j+1;
            }
        }
    }

    private checkForWin(player: string, inputArr: Player[]) {
        return false;
    }

    public setPosition(row: number, col: number, player: string) {
        // occupy position
        // get horizontal, vertical, diagonal, opp diagnol
        const hor = this.borad[row];
        const ver = this.borad.map(r => r[col]);

        return !![hor, ver].find(a => this.checkForWin(player, a));
    }   
}