import { useState, useEffect } from "react";
import { PawPrint } from "lucide-react";

export default function MemoryGame({ level, increaseScore, handleIsOver }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const doggoKey =
    "live_17jblJFV37twFNXZmM4VqKauHrgM9uN6XWeFCF7XDjWya9KtWFJFvSVbxALG9gYQ";
  let numberOfImages = 6;

  if (level === "easy") {
    numberOfImages = 6;
  } else if (level === "medium") {
    numberOfImages = 12;
  } else if (level === "hard") {
    numberOfImages = 24;
  } else {
    numberOfImages = 48;
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.thedogapi.com/v1/images/search?limit=${numberOfImages}&api_key=${doggoKey}`
        );
        const data = await response.json();
        const formattedImages = data.map((item) => ({
          id: item.id,
          url: item.url,
        }));
        setImages(formattedImages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImages();
  }, []);

  const shuffleCards = (cards) => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
    return shuffled;
  };

  const handleShuffle = () => {
    const shuffledImages = shuffleCards(images);
    setImages(shuffledImages); // This way triggers re-render
  };

  return (
    <section className="memory-game">
      {error && <p>Error: {error}</p>}
      {images.length === numberOfImages ? (
        <div className="cards-container">
          {images.map((image) => (
            <Card
              key={image.id}
              imageId={image.id}
              imageUrl={image.url}
              increaseScore={increaseScore}
              handleIsOver={handleIsOver}
              handleShuffle={handleShuffle}
            />
          ))}
        </div>
      ) : (
        <section className="loading-state">
          <PawPrint className="paw-print" size={48} />
          <p>Whoof! Whoof! Loading...</p>
        </section>
      )}
    </section>
  );
}

function Card({
  imageId,
  imageUrl,
  increaseScore,
  handleIsOver,
  handleShuffle,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleScore = () => {
    setIsSelected(true);
    increaseScore();
    handleShuffle();
  };

  const handleClick = () => {
    !isSelected ? handleScore() : handleIsOver();
  };

  return (
    <button key={imageId} className="card" onClick={() => handleClick()}>
      <img src={imageUrl} alt="Dog" />
    </button>
  );
}
