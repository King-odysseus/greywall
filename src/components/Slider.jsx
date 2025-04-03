import React, { useEffect, useState } from "react";
import "../styles/Slider.css";

const Slider = () => {
  // Array of images for the slider
  const images = [
    {
      src: "https://placeholder.pics/svg/1280x720/DEDEDE/555555/Image%201",
      alt: "Placeholder 1",
    },
    {
      src: "https://placeholder.pics/svg/1280x720/DEDEDE/555555/Image%202",
      alt: "Placeholder 2",
    },
    {
      src: "https://placeholder.pics/svg/1280x720/DEDEDE/555555/Image%203",
      alt: "Placeholder 3",
    },
  ];

  // State for tracking the current index of the image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider">
      <button onClick={prevImage}>⬅️ Prev</button>
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      <button onClick={nextImage}>Next ➡️</button>
    </div>
  );
};

export default Slider;
