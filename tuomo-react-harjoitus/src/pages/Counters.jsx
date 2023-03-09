import React from "react";
import {useState, useEffect} from "react";

export const Counters =()=>{

    const[count, setCount] = useState(0);
    useEffect(( )=>{
        setTimeout(function (){
            setCount(count +1);
        },1000);
        
    },[])
    const[count2, setCoun2t] = useState(0);
    useEffect(( )=>{
        setTimeout(function (){
            setCoun2t(count2 +1);
        },1000);
    })
    
    return(
        <div>
            <h1>i've renderd {count} times!</h1>
            <h2>i've renderd {count2} times!</h2>
        </div>
    );
}