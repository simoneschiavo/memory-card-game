import React from "react";
import { useState } from "react";
import "./App.css";
import ButtonSelector from "./components/ButtonSelector";

function App() {
  const [level, setLevel] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleLevel = (e) => {
    setLevel(e.target.value.toLowerCase());
    setIsOpen(false);
  };

  return (
    <>
      <section className={isOpen ? "level-selector" : "level-selector close"}>
        <h1>Which level do you want to choose?</h1>
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
    </>
  );
}

export default App;
