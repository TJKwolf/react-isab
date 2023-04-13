import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Router = () =>{
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Buttons">Sauda</Link>
                    </li>
                    <li>
                    <Link to="/Counters">isad</Link>
                    </li>
                    <li>
                    <Link to="/Items">Bomd</Link>
                    </li>
                    <li>
                    <Link to="/List">List</Link>
                    </li>

                    <li>
                    <Link to="/TicTacToe">TicTacToe</Link>
                    </li>

                </ul>
            </div>
            <Outlet/>
        </>

    );
}

