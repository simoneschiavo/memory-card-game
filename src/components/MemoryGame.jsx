import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function MemoryGame({ level }) {
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

  return (
    <>
      {error && <p>Error: {error}</p>}
      {images.length === numberOfImages ? (
        images.map((image) => (
          <button key={image.id} className="card">
            <img src={image.url} />
          </button>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
