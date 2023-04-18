import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./BannerCarousel.module.css";

const BannerCarousel = () => {
  const slides = [
    ["/images/banner1.jpg", "/images/banner2.jpg", "/images/banner3.jpg"],
    ["/images/banner4.jpg", "/images/banner5.jpg", "/images/banner6.jpg"],
    ["/images/banner7.jpg", "/images/banner8.jpg"],
  ];

  return (
    <div className={styles.banner}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide.map((image, idx) => (
              <div key={idx} className="image-container">
                <img src={image} alt={`Banner ${index * 3 + idx + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
