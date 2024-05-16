"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
const readline = __importStar(require("readline"));
const miscellaneous_1 = require("../utils/miscellaneous");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class TicTacToe {
    constructor(currPlayer, gridSize, winStreakLength) {
        this.printBoard = () => {
            console.clear();
            //to Find cell width, calculate the no of digits of largest number in the cell(gridSize*gridSize) possible in the grid
            const maxDigits = (0, miscellaneous_1.countDigits)(this.gridSize * this.gridSize);
            this.board.forEach(row => {
                let rowStr = ' ';
                row.forEach(cell => {
                    let color = cell === 'X' ? 33 : cell === 'O' ? 96 : 37;
                    rowStr += (0, miscellaneous_1.colouredText)(cell.toString(), color);
                    rowStr += ' '.repeat(maxDigits - cell.toString().length) + ' | ';
                });
                console.log(rowStr);
                // console.log(row.join(' | '));
                console.log('-'.repeat(this.gridSize * (maxDigits + 1) + this.gridSize * 2));
            });
        };
        this.checkWin = (row, col) => {
            const { board, currPlayer, gridSize, winStreakLength } = this;
            let count = 0;
            //horizontal
            count = 0;
            for (let i = row; i < gridSize && board[i][col] === currPlayer; i++) {
                count++;
            }
            for (let i = row - 1; i >= 0 && board[i][col] === currPlayer; i--) {
                count++;
            }
            if (count >= winStreakLength) {
                return true;
            }
            //vertical
            count = 0;
            for (let i = col; i < gridSize && board[row][i] === currPlayer; i++) {
                count++;
            }
            for (let i = col - 1; i >= 0 && board[row][i] === currPlayer; i--) {
                count++;
            }
            if (count >= winStreakLength) {
                return true;
            }
            //diagonal
            count = 0;
            for (let i = 0; row + i < gridSize && col + i < gridSize && board[row + i][col + i] === currPlayer; i++) {
                count++;
            }
            for (let i = 1; row - i >= 0 && col - i >= 0 && board[row - i][col - i] === currPlayer; i++) {
                count++;
            }
            if (count >= winStreakLength) {
                return true;
            }
            //anti-diagonal
            count = 0;
            for (let i = 0; row + i < gridSize && col - i >= 0 && board[row + i][col - i] === currPlayer; i++) {
                count++;
            }
            for (let i = 1; row - i >= 0 && col + i < gridSize && board[row - i][col + i] === currPlayer; i++) {
                count++;
            }
            if (count >= winStreakLength) {
                return true;
            }
            //default
            return false;
        };
        this.isBoardFull = () => {
            return this.board.every(row => row.every(cell => (cell === 'X' || cell === 'O')));
        };
        this.askMove = () => {
            rl.question(`Player ${this.currPlayer}'s turn: Enter cell number: `, input => {
                const { gridSize, board, currPlayer } = this;
                if (Number(input) > gridSize * gridSize) {
                    console.log((0, miscellaneous_1.colouredText)('Invalid input. Try again!!', 31));
                    this.askMove();
                    return;
                }
                const row = Math.floor((Number(input) - 1) / gridSize);
                const col = (Number(input) - 1) % gridSize;
                if (row >= 0 && row < gridSize && col >= 0 && col < gridSize && board[row][col] !== 'X' && board[row][col] !== 'O') {
                    this.board[row][col] = currPlayer;
                    if (this.checkWin(row, col)) {
                        this.printBoard();
                        console.log((0, miscellaneous_1.colouredText)(`Player ${currPlayer} wins !`, 32));
                        rl.close();
                    }
                    else if (this.isBoardFull()) {
                        this.printBoard();
                        console.log((0, miscellaneous_1.colouredText)(`It's a tie!`, 34));
                        rl.close();
                    }
                    else {
                        this.currPlayer = currPlayer === 'X' ? 'O' : 'X';
                        this.printBoard();
                        this.askMove();
                    }
                }
                else {
                    console.log((0, miscellaneous_1.colouredText)('Invalid input. Try again!!', 31));
                    this.askMove();
                    return;
                }
            });
        };
        this.playGame = () => {
            this.printBoard();
            this.askMove();
        };
        this.currPlayer = currPlayer;
        this.gridSize = gridSize;
        this.winStreakLength = winStreakLength;
        this.board = [];
        for (let i = 0; i < gridSize; i++) {
            this.board[i] = [];
            for (let j = 0; j < gridSize; j++) {
                this.board[i][j] = i * gridSize + j + 1;
            }
        }
    }
}
exports.TicTacToe = TicTacToe;
