import React from "react";

export const Item=(props)=>{
    return(
        <div>
            <p>title:{props.title}</p>
            <img src={props.img}/>
        </div>
    );
}