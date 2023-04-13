import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useState } from "react";


export const List=()=>{
    const[content, setContent] = useState ([]);
    const [ inputValue, setInputValue ] = useState('');

    const removeHandler = (removeIndex) =>{
        const removeItem = content.filter((item,index)=>{
            return removeIndex !== index;

    });
    setContent(removeItem);
}
    function clearList(){
        setContent([]);
    }
    return(
        <div>
             <div>
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    const temp =[inputValue,...content];
                    setContent(temp);
                    setInputValue('');
                }}>
                    <input type="Text" placeholder="type here..." value={inputValue}onChange={e=>setInputValue(e.target.value)} required/>
                    <input type="submit" value="Samo"/>
                    {
                        content.map((item,index)=>(
                            <ul>
                                <li>
                                    <h2 key={index}> {item} </h2>
                                    <button
                                    onClick={()=>removeHandler(index)}
                                    >Remove</button>
                                </li>
                            </ul>
                        ))
                    }
                </form>
                <button onClick={clearList}>clear</button>
            </div>
        </div>
    );
 }