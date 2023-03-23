import React from "react";
import { useState } from "react";

export const List=()=>{
    const[content, setContent] = useState ([]);
    const [ inputValue, setInputValue ] = useState('');
    return(
        <div>
             <div>
                <form>
                    <input type="Text" placeholder="type here..." required/>
                    <input type="submit" value="Samo"/>
                </form>
            </div>
        </div>
    );
 }