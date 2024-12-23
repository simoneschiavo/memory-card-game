import { PawPrint } from "lucide-react";

export default function Header({ score, record }) {
  return (
    <>
      <header className="navbar">
        <div className="title-container">
          <h1 className="title">MemoryDoggo</h1>
          <PawPrint className="paw-print" size={18} />
        </div>
        <div className="scores-container">
          <p className="score">Current score: {score}</p>
          <p className="record">Your record: {record}</p>
        </div>
      </header>
    </>
  );
}
