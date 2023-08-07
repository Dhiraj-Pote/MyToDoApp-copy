import React, { useState, useEffect } from "react";
import "./BackgroundSlideshow.css"; // Import the CSS file for styling

interface BackgroundSlideshowProps {
  images: string[]; // Array of image URLs for the slideshow
}

const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the currentImageIndex to change the background image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 10 seconds interval

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images]);

  return (
    <div
      className="slideshow-container"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        opacity: 0.2,
      }}
    />
  );
};

export default BackgroundSlideshow;
