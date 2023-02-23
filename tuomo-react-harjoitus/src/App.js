import React from "react";
import { Message } from "./pages/message";
import { Buttons } from "./pages/buttons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./pages/router";

function App() {
  return (
    <BrowserRouter>
      <div >
          <Routes> 
          <Route path='/'element={<Router/>}>
          <Route index element={<Message/>}/>
          <Route path='Buttons' element={<Buttons/>}/>
        </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
