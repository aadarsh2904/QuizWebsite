import React, { useState } from 'react';

const Carousel = () => {
  const photos = [
    {
      src: 'https://via.placeholder.com/400x200?text=First+Slide',
      alt: 'First slide',
      description: 'This is the first slide description',
    },
    {
      src: 'https://via.placeholder.com/400x200?text=Second+Slide',
      alt: 'Second slide',
      description: 'This is the second slide description',
    },
    {
      src: 'https://via.placeholder.com/400x200?text=Third+Slide',
      alt: 'Third slide',
      description: 'This is the third slide description',
    },
    {
      src: 'https://via.placeholder.com/400x200?text=Fourth+Slide',
      alt: 'Fourth slide',
      description: 'This is the fourth slide description',
    },
    {
      src: 'https://via.placeholder.com/400x200?text=Fifth+Slide',
      alt: 'Fifth slide',
      description: 'This is the fifth slide description',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Math.ceil(photos.length / 3) - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Math.ceil(photos.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden relative h-80">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 p-2">
              <img src={photo.src} alt={photo.alt} className="w-full h-40 object-cover" />
              <div className="p-2 text-center bg-gray-800 text-white">
                {photo.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4 flex flex-col">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 rounded-full mb-2"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
