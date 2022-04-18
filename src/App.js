import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./Components/Die";

export default function App() {
  const diceValue = ["one", "two", "three", "four", "five", "six"];
  const [dice, setDice] = React.useState(diceGenerator());

  function diceGenerator() {
    const newDice = [];
    for (let i = 1; i <= 10; i++) {
      const randNum = Math.floor(Math.random() * 5);
      newDice.push({ id: nanoid(), value: diceValue[randNum], isHeld: false });
    }
    return newDice;
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        const randNum = Math.floor(Math.random() * 6);
        return !die.isHeld ? { ...die, value: diceValue[randNum] } : die;
      })
    );
  }

  function changeIsHeld(id) {
    return setDice((oldDice) => oldDice.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die)));
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} handleclick={() => changeIsHeld(die.id)} />
  ));

  return (
    <div className="app">
      <main className="inner-container">
        <div className="title">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="dice-container">{diceElements}</div>
        <button type="button" className="btn1" onClick={rollDice}>
          Roll
        </button>
      </main>
    </div>
  );
}
