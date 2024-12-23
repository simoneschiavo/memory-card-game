import { useEffect } from "react";

export default function NewGame({
  score,
  record,
  handleRecord,
  resetScore,
  handleIsOver,
  handleLevelSection,
  resetLevel,
}) {
  useEffect(() => {
    handleRecord(score);
  }, [score, handleRecord]);

  const handleNewGame = () => {
    resetScore();
    handleIsOver();
  };

  const handleChangeLevel = () => {
    resetScore();
    resetLevel();
    handleLevelSection();
  };

  return (
    <section className="new-game">
      <h2>Good boy! 🐶</h2>
      <div className="scores-container">
        <p className="score">Your score: {score}</p>
        <p className="record">Your record: {record}</p>
      </div>
      <button className="new-game" onClick={() => handleNewGame()}>
        New game
      </button>
      <button className="change-level" onClick={() => handleChangeLevel()}>
        Change difficulty
      </button>
    </section>
  );
}
