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
      <div className="titles-container">
        <h2 className="section-title">Game over!</h2>
        <p className="subtitle">But you're still a good boy 🐶</p>
      </div>
      <div className="scores-container">
        <p className="score">Your score: {score}</p>
        <p className="record">Your record: {record}</p>
      </div>
      <div className="buttons-container">
        <button
          className="change-level-button"
          onClick={() => handleChangeLevel()}
        >
          Change difficulty
        </button>
        <button className="new-game-button" onClick={() => handleNewGame()}>
          Play again
        </button>
      </div>
    </section>
  );
}
