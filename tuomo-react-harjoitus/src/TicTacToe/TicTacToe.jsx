import React from "react";
import './TicTacToe.css';
import { Board } from "./board";
import {useState} from "react";
import { useActionData } from "react-router-dom";

const intialBoard = ['','','','','','','','',''];

export const TicTacToe=()=>{
    const[gameState, setGameState] = useState(intialBoard);
    const[isXTurn, setIsXTurn] = useState(true);

    const onSquareClick = () =>{
        let strings = Array.form(gameState);
    }
    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board gameState={gameState}/>
        </div>
    )
}