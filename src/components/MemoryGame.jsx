import { useState, useEffect } from "react";

export default function MemoryGame({ level }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let numberOfImages;

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
        const dogImages = data.message;
        setImages(dogImages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImages();
  }, [level]);

  return (
    <>
      {images.map((image) => (
        <img src={image}  />
      ))}
    </>
  );
}
