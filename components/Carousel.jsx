"use client";

import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const sliderRef = useRef(null); // Slider div için ref
  const [currentIndex, setCurrentIndex] = useState(0); // Geçerli slayt indexi
  const totalSlides = 3; // Toplam slayt sayısı

  // Slaytları gösteren fonksiyon
  const showSlide = (index) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  // Bir sonraki slayta geçiş
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
    showSlide(newIndex);
  };

  // Sayfa yüklendiğinde ve `currentIndex` değiştiğinde çalışır
  useEffect(() => {
    showSlide(currentIndex);

    // Otomatik geçiş için interval
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Temizleme
  }, [currentIndex]);

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Product Slider</title>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .slider {
              display: flex;
              transition: transform 0.5s ease-in-out;
            }
            .slider-item {
              min-width: 100%;
              box-sizing: border-box;
            }
            .hover-button:hover {
              background-color: #FFA500; /* Orange color */
              color: #000000; /* Black text */
            }
            .dot {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-color: white;
              cursor: pointer;
            }
            .dot.active {
              background-color: #1E40AF; /* Blue color */
            }
          `,
        }}
      />
      <div className="relative overflow-hidden">
        <div className="slider" ref={sliderRef}>
          <div className="slider-item relative">
            <img
              alt="Sneaker 1"
              className="w-full h-auto object-cover"
              src="https://placehold.co/1920x600?text=Sneaker+1"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start p-8 md:p-16 lg:p-24 text-center md:text-left">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                ATTACK AIR
                <br />
                MAX 720 SAGE LOW
              </h1>
              <p className="text-white text-lg md:text-xl mt-4">
                Limited items available at this price
              </p>
              <button className="hover-button mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded">
                Shop Now
              </button>
            </div>
          </div>
          <div className="slider-item relative">
            <img
              alt="Sneaker 2"
              className="w-full h-auto object-cover"
              src="https://placehold.co/1920x600?text=Sneaker+2"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start p-8 md:p-16 lg:p-24 text-center md:text-left">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                NEW ARRIVAL
                <br />
                MAX 720 SAGE LOW
              </h1>
              <p className="text-white text-lg md:text-xl mt-4">
                Get the latest styles now
              </p>
              <button className="hover-button mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded">
                Shop Now
              </button>
            </div>
          </div>
          <div className="slider-item relative">
            <img
              alt="Sneaker 3"
              className="w-full h-auto object-cover"
              src="https://placehold.co/1920x600?text=Sneaker+3"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start p-8 md:p-16 lg:p-24 text-center md:text-left">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                LIMITED EDITION
                <br />
                MAX 720 SAGE LOW
              </h1>
              <p className="text-white text-lg md:text-xl mt-4">
                Exclusive offers available
              </p>
              <button className="hover-button mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
