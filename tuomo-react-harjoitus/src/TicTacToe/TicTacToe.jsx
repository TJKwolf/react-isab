import React from "react";
import './TicTacToe.css';
import { Board } from "./board";
export const TicTacToe=()=>{
    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board/>
        </div>
    )
}