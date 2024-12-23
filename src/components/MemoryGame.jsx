import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function MemoryGame({ level, increaseScore, handleIsOver }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  let numberOfImages = 6;

  useEffect(() => {
    if (level === "easy") {
      numberOfImages = 6;
    } else if (level === "medium") {
      numberOfImages = 12;
    } else if (level === "hard") {
      numberOfImages = 24;
    } else {
      numberOfImages = 48;
    }

    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breeds/image/random/${numberOfImages}`
        );
        const data = await response.json();
        const dogImagesWithIds = data.message.map((url) => ({
          id: uuidv4(),
          url,
        }));
        setImages(dogImagesWithIds);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImages();
  }, [level]);

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
    <>
      {error && <p>Error: {error}</p>}
      {images.length === numberOfImages ? (
        images.map((image) => (
          <Card
            key={image.id}
            imageId={image.id}
            imageUrl={image.url}
            increaseScore={increaseScore}
            handleIsOver={handleIsOver}
            handleShuffle={handleShuffle}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
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
