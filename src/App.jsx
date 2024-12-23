import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonSelector from "./components/ButtonSelector";
import MemoryGame from "./components/MemoryGame";
import NewGame from "./components/NewGame";

function App() {
  const [level, setLevel] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const handleLevel = (e) => {
    setLevel(e.target.id);
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

  const handleIsOver = () => {
    setIsOver((prevIsOver) => !prevIsOver);
  };

  const handleLevelSection = () => {
    setIsOpen(true);
  };

  const resetLevel = () => {
    setLevel(null);
  }

  const resetIsOver = () => {
    setIsOver(false);
  }

  return (
    <>
      <Header score={score} record={record} />
      <section className={isOpen ? "level-selector" : "level-selector close"}>
        <h2>Which level do you want to choose?</h2>
        <div className="row-container levels">
          <ButtonSelector
            levelSelected="easy"
            handleLevel={handleLevel}
            resetIsOver={resetIsOver}
          />
          <ButtonSelector
            levelSelected="medium"
            handleLevel={handleLevel}
            resetIsOver={resetIsOver}
          />
          <ButtonSelector
            levelSelected="hard"
            handleLevel={handleLevel}
            resetIsOver={resetIsOver}
          />
          <ButtonSelector
            levelSelected="impossible"
            handleLevel={handleLevel}
            resetIsOver={resetIsOver}
          />
        </div>
      </section>
      {level && !isOver && (
        <MemoryGame
          level={level}
          increaseScore={increaseScore}
          handleIsOver={handleIsOver}
        />
      )}
      {level && isOver && (
        <NewGame
          score={score}
          record={record}
          handleRecord={handleRecord}
          resetScore={resetScore}
          handleIsOver={handleIsOver}
          handleLevelSection={handleLevelSection}
          resetLevel={resetLevel}
        />
      )}
    </>
  );
}

export default App;
