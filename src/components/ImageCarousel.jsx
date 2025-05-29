import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const showPrev = () =>
    setIndex(index === 0 ? images.length - 1 : index - 1);
  const showNext = () =>
    setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
   <div className="flex items-center justify-center gap-10 my-6 ">
      <button
        onClick={showPrev}
        className="w-12 h-12 flex items-center justify-center 
                   rounded-full bg-green-500 text-white
                   hover:bg-green-600"
        aria-label="Previous image"
      >
        ‹
      </button>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="carousel-img w-full h-[30rem] max-w-2xl object-cover rounded-xl"
        />
      <button
        onClick={showNext}
        className="w-12 h-12 flex items-center justify-center
                   rounded-full bg-green-500 text-white
                   hover:bg-green-600"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}


