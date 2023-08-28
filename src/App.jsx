// src/App.js
import React from "react";
import "./App.css";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Task Tracker</h1>
      </header>
      <TaskList />
    </div>
  );
}

export default App;
