"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tic_tac_toe_1 = require("./src/components/tic-tac-toe");
//initial data
const initialPlayer = 'X';
const gridSize = 5;
const winStreakLength = 3;
//instance of game1
const game1 = new tic_tac_toe_1.TicTacToe(initialPlayer, gridSize, winStreakLength);
game1.playGame();
