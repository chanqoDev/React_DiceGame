import React from "react";
import "./App.css";
import Dice from "./Dice";
// simple game with dice
function App() {
  return (
    <div className="App">
      <Dice />
      <Dice numDice={4} title="Mini Dice" maxValue={20} />
    </div>
  );
}

export default App;
