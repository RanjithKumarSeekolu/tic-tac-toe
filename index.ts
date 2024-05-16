import { Player,Board } from "./src/types/tictactoe";
import { TicTacToe } from "./src/components/tic-tac-toe";

//initial data
const initialPlayer:Player='X';
const gridSize:number=5;
const winStreakLength:number=3;

//instance of game1
const game1=new TicTacToe(initialPlayer,gridSize,winStreakLength);
game1.playGame();
