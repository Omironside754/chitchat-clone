import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function App() {

  return (
    <div className="App">

      <div className="app__body">
        <Router>
          
            <Sidebar />
            <Chat />
            <Routes>
              {/*  */}
              <Route></Route>
            </Routes>
        </Router>
      </div>
 
    </div>
  );
}


export default App;
