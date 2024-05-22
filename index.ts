import { Player,Board } from "./src/types/tictactoe";
import { TicTacToe } from "./src/components/tic-tac-toe";

//initial data
const initialPlayer:Player='X';
const gridSize:number=3;
const winStreakLength:number=3;

//instance of game1
const game1=new TicTacToe(3,3);
console.log(game1.setPosition(0,0,'X'));
console.log(game1.setPosition(0,1,'X'));
console.log(game1.setPosition(0,2,'X'));

// [[[1,1, 'X'], false] , [[2, 2, 'X'], false],[ [0, 0, 'X'], true]].forEach(item=>{
//     game1.setPosition(...item[0])
//     console.log(...item[0])
// })
// console.log(game1.board)
