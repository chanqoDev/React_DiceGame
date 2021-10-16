import React from "react";
import "./App.css";
import Dice from "./Dice";
// simple game with dice
function App() {
  return (
    <div className="App">
      <Dice numDice={4} title="first Dice" maxValue={20} />
      <Dice numDice={5} title="Mini Dice" maxValue={20} />
    </div>
  );
}

export default App;
