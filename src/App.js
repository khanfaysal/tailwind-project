import './App.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../src/components/Home/Home";
import CountDown from './components/countDown/CountDown';

export const context = createContext();


function App() {

  const preStore = localStorage.getItem('dark-mode') || "false";
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(preStore));

  useEffect(()=>{
    window.document.body.className = (isDarkMode?"dark-mode":"light-mode");
  }, [isDarkMode])

  return (
    <context.Provider value={{isDarkMode, setIsDarkMode}}>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route exact path = '/count'>
            <CountDown />
          </Route>
        </Switch>
      </Router>
    </context.Provider>
  );
}

export default App;
