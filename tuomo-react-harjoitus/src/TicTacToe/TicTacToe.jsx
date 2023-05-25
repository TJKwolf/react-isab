import React from "react";
import './TicTacToe.css';
import { Board } from "./board";
import { Scoreboard } from "./scoreboard";
import {useState} from "react";
import { useEffect } from "react";

const intialBoard = ['','','','','','','','',''];

export const TicTacToe=()=>{
    const[gameState, setGameState] = useState(intialBoard);
    const[isXTurn, setIsXTurn] = useState(true);
    const[status, setStatus] = useState('');
    const[scores, setScores ] = useState({xScore: 0, oScore: 0});

    useEffect( ()=>{
        const winner = checkWinner();
        if(winner){
            setStatus(`winner: ${winner}`);
        }else if(!gameState.includes(''))
     {
        setStatus(" you suck. Suck my d!ck. You both lost");
     }else{
        setStatus(`${isXTurn ? 'X' : 'O'}'s turn`);
     }

    },[gameState])

    useEffect(()=>{
        const winner = checkWinner();
        if(winner === null){
            return;
        }

        if(winner === "X"){
            setScores({xScore: scores.xScore +1, oScore: scores.oScore})
        }else{
            setScores({xScore: scores.xScore , oScore: scores.oScore +1})
        }
    },[status])
    const onSquareClick = (index) =>{
        let strings = Array.from(gameState);

        if(status.includes("winner")){
            return;
        }

        if(strings[index] !== '')
        {
            return;
        }
        strings[index] = isXTurn ? 'X' : 'O';
        setGameState(strings);
        setIsXTurn(!isXTurn);
    }

    const checkWinner = () =>{
        const Lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i = 0; i < Lines.length; i++){
            const [a,b,c] = Lines[i];
            if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
                return gameState[a];
            }
        }
        return null;
    }

    function clearScoreboard(){
        setScores({xScore : 0, oScore : 0});
        setGameState(intialBoard);
        setIsXTurn(true);
    }

    return(
        <div>
                <div className="gamer">
                    <h1>Tic-Tac-Toe</h1>
                    <Scoreboard scores={scores}/>
                    <button onClick={clearScoreboard}>Clear scoreboard</button>
                    <Board gameState={gameState} onSquareClick={onSquareClick}/>

                    {!status.includes("winner") && (
                    <>

                    <span>{status}</span> 
                    <button onClick={()=>{
                        setGameState(intialBoard);
                        setIsXTurn(true);
                    }}>Clear button</button>
                    </>
                        
                    )}

                    {status.includes("winner") && (
                        <>

                        <span style={{color:"blue"}}>{status}</span> 
                        <button style={{background: "lightgreen"}} onClick={()=>{
                            setGameState(intialBoard);
                            setIsXTurn(true);
                        }}>Play again please</button>
                        </>
                        
                    )}
                    
                </div>
        </div>
    )
}