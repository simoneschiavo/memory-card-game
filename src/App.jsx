import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonSelector from "./components/ButtonSelector";

function App() {
  const [level, setLevel] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  const handleLevel = (e) => {
    setLevel(e.target.value.toLowerCase());
    setIsOpen(false);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const handleRecord = (newScore) => {
    if (newScore > record) {
      setRecord(newScore);
    }
  };

  return (
    <>
      <Header
        score={score}
        record={record}
      />
      <section className={isOpen ? "level-selector" : "level-selector close"}>
        <h2>Which level do you want to choose?</h2>
        <div className="row-container levels">
          <ButtonSelector levelSelected="easy" handleLevel={handleLevel} />
          <ButtonSelector levelSelected="medium" handleLevel={handleLevel} />
          <ButtonSelector levelSelected="hard" handleLevel={handleLevel} />
          <ButtonSelector
            levelSelected="impossible"
            handleLevel={handleLevel}
          />
        </div>
      </section>
      {level === "easy" && <MemoryGame />}
    </>
  );
}

export default App;
