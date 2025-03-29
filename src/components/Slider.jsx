import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/Slider.css";

const Slider = () => {
  //Array of images for the slider
  const images = [
    { src: "https://fakeimg.pl/600x400", alt: "Placeholder 1" },
    { src: "https://fakeimg.pl/600x400", alt: "Placeholder 2" },
    { src: "https://fakeimg.pl/600x400", alt: "Placeholder 3" },
  ];

  //   State is used for tracking the current index of the image being displayed
  const [currentIndex, setCurrentIncdex] = useState(0);

  // To move to the next image in the array, we use a function that increments the index and resets it to 0 if it exceeds the length of the array.
  const nextImage = () => {
    setCurrentIncdex(function (prevIndex) {
      var nextIndex = prevIndex + 1; //move to the next image
      if (nextIndex >= images.length) {
        return 0; //reset to the first image if it exceeds the length of the array
      }
      return nextIndex; //return the next index
    });
  };

  // Closing the Slider component
};

export default Slider;
