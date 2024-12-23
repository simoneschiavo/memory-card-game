export default function Header({ score, record }) {
  return (
    <>
      <header className="navbar">
        <h1 className="title">MemoryDoggo</h1>
        <div className="scores-container">
          <p className="score">Current score: {score}</p>
          <p className="record">Your record: {record}</p>
        </div>
      </header>
    </>
  );
}
