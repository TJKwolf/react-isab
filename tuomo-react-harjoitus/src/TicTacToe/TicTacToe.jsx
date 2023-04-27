import React from "react";
import './TicTacToe.css';
import { Board } from "./board";
import {useState} from "react";
import { useActionData } from "react-router-dom";

const intialBoard = ['','','','','','','','',''];

export const TicTacToe=()=>{
    const[gameState, setGameState] = useState(intialBoard);
    const[isXTurn, setIsXTurn] = useState(true);

    const onSquareClick = (index) =>{
        let strings = Array.from(gameState);
        if(strings[index] !== '')
        {
            return;
        }
        strings[index] = isXTurn ? 'X' : 'O';
        setGameState(strings);
        setIsXTurn(!isXTurn);
    }
    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board gameState={gameState} onSquareClick={onSquareClick}/>
        </div>
    )
}