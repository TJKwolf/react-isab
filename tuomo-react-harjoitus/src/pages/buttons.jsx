import React from "react";
import {useState} from "react";

export const Buttons = () => {
    const[count, setCount] = useState(0);
    const[count2, setCoun2t] = useState(0);
    function countClicks(){
        setCount(count +1);
    }
    function countClicks2(){
        setCoun2t(count2 +1);
    }
    function clearCount(){
        setCount(0);
        setCoun2t(0);
    }
    return(
        <div>
            <button onClick={countClicks}>sauda: {count} times!</button>
            <br></br>
            <button onClick={clearCount}>reset:</button>
            <button onClick={countClicks2}>sauda: {count2} times!</button>
        </div>
    );
}