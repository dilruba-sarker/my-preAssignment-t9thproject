
// import React, { useState } from 'react';

// const Slider = () => {
//   const images = [
//     { id: 1, image: 'https://i.ibb.co/c8h9zTx/Rectangle-28.png' },
//     { id: 2, image: 'https://i.ibb.co/cTsmB3N/Sreemongol.png' },
//     { id: 3, image: 'https://i.ibb.co/PTrbzPK/Sajek.png' }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const[backgroundImage,setBackgroundImage]=useState(0)
//   const handleImageClick = (imageUrl, index) => {
//     setCurrentIndex(index);
//     setBackgroundImage(`url(${imageUrl})`);
//   };

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(nextIndex);
//     setBackgroundImage(`url(${images[nextIndex].image})`);
//   };

//   const handlePrev = () => {
//     const prevIndex = (currentIndex - 1 + images.length) % images.length;
//     setCurrentIndex(prevIndex);
//     setBackgroundImage(`url(${images[prevIndex].image})`);
//   };

//   const backgroundImageStyle = {
//     backgroundImage: `url(${images[currentIndex].image})`
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-cover bg-center" style={backgroundImageStyle}>
//       <div className="flex mt-8 space-x-4">
//         {images.map((imageData, index) => (
//           <img
//             key={imageData.id}
//             src={imageData.image}
//             alt={`Image ${imageData.id}`}
//             className={`w-16 h-16 cursor-pointer ${index === currentIndex ? 'border-2 border-blue-500' : ''}`}
//             onClick={() => handleImageClick(imageData.image, index)}
//           />
//         ))}
//       </div>
//       <div className="mt-4 ">
//         <button className=" -ml-8 bg-gray-400 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handlePrev}>
//         ❮
//         </button>
//         <button className=" bg-gray-400 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNext}>
//         ❯
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { FaArrowRight} from "react-icons/fa";
const Slider = () => {
  const images = [
    { id: 1, image: 'https://i.ibb.co/c8h9zTx/Rectangle-28.png' },
    { id: 2, image: 'https://i.ibb.co/cTsmB3N/Sreemongol.png' },
    { id: 3, image: 'https://i.ibb.co/PTrbzPK/Sajek.png' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="h-screen flex flex-col   items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${images[currentIndex].image})` }}>
      <div className="flex mt-8 space-x-4">
        <div className='w-96 text-white'>
        <p className='text-6xl font-bold text-white'>Cox's bazar</p>
        <p >Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
        <button className='bg-amber-500 px-8 py-1 relative'>Booking <FaArrowRight className='text-black absolute right-2 top-3'> </FaArrowRight> </button>
       

        </div>
        

        {images.map((imageData, index) => (
          <img
            key={imageData.id}
            src={imageData.image}
            // alt={`Image ${imageData.id}`}
            className={`w-40 h-40 cursor-pointer ${index === currentIndex ? 'border-2  border-blue-500' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="mt-4 absolute bottom-8 flex justify-center w-full">
        <button
          className="bg-gray-400 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="bg-gray-400 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
// import React, { useState, useEffect } from 'react';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// const Slider = () => {
//   const images = [
//     { id: 1, image: 'https://i.ibb.co/c8h9zTx/Rectangle-28.png' },
//     { id: 2, image: 'https://i.ibb.co/cTsmB3N/Sreemongol.png' },
//     { id: 3, image: 'https://i.ibb.co/PTrbzPK/Sajek.png' }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [autoScroll, setAutoScroll] = useState(true);
//   const intervalTime = 3000; // Interval time in milliseconds (3 seconds)

//   useEffect(() => {
//     let interval;

//     if (autoScroll) {
//       interval = setInterval(handleNext, intervalTime);
//     } else {
//       clearInterval(interval);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex, autoScroll]);

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(nextIndex);
//   };

//   const handlePrev = () => {
//     const prevIndex = (currentIndex - 1 + images.length) % images.length;
//     setCurrentIndex(prevIndex);
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${images[currentIndex].image})` }}>
//       <div className="flex mt-8 space-x-4">
//         {images.map((imageData, index) => (
//           <img
//             key={imageData.id}
//             src={imageData.image}
//             className={`w-40 h-40 cursor-pointer ${index === currentIndex ? 'border-2 border-blue-500' : ''}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//       <div className="mt-4 absolute bottom-8 flex justify-center w-full">
//         <button
//           className="bg-gray-400 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//           onClick={handlePrev}
//         >
//           ❮
//         </button>
//         <button
//           className="bg-gray-400 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleNext}
//         >
//           ❯
//         </button>
//         <button
//           className={`mt-2 ${autoScroll ? 'bg-blue-500' : 'bg-gray-400'} rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//           onClick={() => setAutoScroll(!autoScroll)}
//         >
//           {autoScroll ? 'Pause' : 'Play'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

   