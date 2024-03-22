import { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [curImage, setCurImage] = useState(images[0]);

  useEffect(() => {
    setCurImage(images[currentIndex]);
  }, [currentIndex, images])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative w-screen overflow-hidden">
      <div className="z-10 w-full overflow-hidden">
        <div className="flex h-[480px] w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute flex max-h-[480px] w-full transform justify-center transition-transform duration-500 ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full"
              }`}
            >
              <img
                className="aspect-video h-[480px]"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 flex -translate-y-1/2 rotate-180 items-center justify-center"
      >
        <svg
          className=" flex h-12 w-12 text-blue-600"
          width="800"
          height="800"
          version="1.1"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 000-21.213z"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center"
      >
        <svg
          className=" flex h-12 w-12 text-blue-600"
          width="800"
          height="800"
          version="1.1"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 000-21.213z"
          ></path>
        </svg>
      </button>
      {images && (
        <div
          className={`absolute top-0 z-[-1] h-[480px] w-full blur-3xl brightness-150`}
        >
          <img className="h-[480px] w-full" height={480} src={curImage} />
        </div>
      )}
    </div>
  );
};

export default Carousel;
