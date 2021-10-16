import React from "react";
import "./Dice.css";
/** A game can be any number of Dies, all with random values. */
function Dice(props) {
  return (
    <section className="Dice">
      <h1>{props.title}</h1>
      <div>{props.numDice}</div>
      <button onClick={props.maxValue}>Roll</button>
    </section>
  );
}
//    default Properties
Dice.defaultproperties = {
  title: "Main Game",
  numDice: 6,
  maxValue: 20,
};

export default Dice;
