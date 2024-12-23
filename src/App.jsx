import { useState } from "react";
import "./App.css";

function App() {
  const [level, setLevel] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleLevel = (e) => {
    setLevel(e.target.value.toLowerCase());
  };

  return (
    <>
      <section>
        <h1>Which level do you want to choose?</h1>
        <div className="row-container levels">
          <button className="easy">Easy</button>
          <button className="medium">Medium</button>
          <button className="hard">Hard</button>
          <button className="impossible">Impossible</button>
        </div>
      </section>
    </>
  );
}

export default App;
