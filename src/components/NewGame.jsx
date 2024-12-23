import { useEffect } from "react";

export default function NewGame({
  score,
  record,
  handleRecord,
  resetScore,
  handleIsOver,
}) {
  useEffect(() => {
    handleRecord(score);
  }, [score, handleRecord]);

  return (
    <section className="new-game">
      <h2>Good boy! 🐶</h2>
      <div className="scores-container">
        <p className="score">Your score: {score}</p>
        <p className="record">Your record: {record}</p>
      </div>
    </section>
  );
}
