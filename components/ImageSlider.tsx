import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const handleAction = useCallback((action: string) => {
    if (action === "Home") setCurrentSlideIndex(0);
    else if (action === "End") setCurrentSlideIndex(images.length - 1);
    else if (action === "ArrowRight" || action === "next")
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    else if (action === "ArrowLeft" || action === "prev")
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => handleAction(event.key);
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleAction]);

  useEffect(() => {
    if (thumbnailsRef.current) {
      const selectedThumb = thumbnailsRef.current.children[
        currentSlideIndex
      ] as HTMLElement;
      selectedThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentSlideIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Main Image */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlideIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images[currentSlideIndex]}
              alt={`Slide ${currentSlideIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {["prev", "next"].map((direction) => (
          <button
            key={direction}
            className={`absolute top-1/2 ${
              direction === "prev" ? "left-2" : "right-2"
            } transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 z-10`}
            onClick={() => handleAction(direction)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>
        ))}

        {/* Thumbnail Navigation */}
        <div
          ref={thumbnailsRef}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto py-3 px-4 bg-black/50 backdrop-blur-sm rounded-full max-w-[95%]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-20 h-12 rounded-md overflow-hidden transition-all duration-300 ${
                index === currentSlideIndex
                  ? "ring-2 ring-white scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => setCurrentSlideIndex(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={48}
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
