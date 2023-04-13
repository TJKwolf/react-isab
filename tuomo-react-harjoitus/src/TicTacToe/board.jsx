import React from "react";
import { Square } from "./square";

export const Board  = () =>{
    return(
    <div>
        <div className="row">
              <Square className="b-bottom-r"/>
              <Square className="b-bottom-r"/>
               <Square className="b-bottom"/>
            </div>
        <div className="row">
         <Square/>
         <Square/>
         <Square/>
        </div>
            <div className="row">
              <Square/>
             <Square/>
              <Square/>
            </div>
    </div>
    );
}