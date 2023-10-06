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
// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
// import { FaArrowRight} from "react-icons/fa";
// import Navbar from '../../componenets/Navbar/Navbar';
// const Home = () => {
//   const images = [https://i.ibb.co/gvwx0mz/rsz-106154e7085aef2fe630f54ccd135cd12-0f41a55479d95f1254ac87c3ae1c83be16831921002412.png
//     { id: 1, image: 'https://i.ibb.co/QfpHcjJ/Rectangle-1.png', title:"Cox bazar" },
//     { id: 2, image: 'https://i.ibb.co/cTsmB3N/Sreemongol.png',title:"sri mongol bazar" },
//     { id: 3, image: 'https://i.ibb.co/PTrbzPK/Sajek.png',title:"sri mongol bazar" }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(nextIndex);
//   };

//   const handlePrev = () => {
//     const prevIndex = (currentIndex - 1 + images.length) % images.length;
//     setCurrentIndex(prevIndex);
//   };

//   return (
//     <div>

//     <div className="h-screen flex flex-col   items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${images[currentIndex].image})` }}>
//   <div className=' h-20 mb-20'>  <Navbar ></Navbar></div>

//       <div className="flex mt-8 space-x-4">

//         <div className='w-96 text-white'>
//         <p className='text-6xl font-bold text-white'>Cox's bazar</p>
//         <p >Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
//         <button className='bg-amber-500 px-8 py-1 relative'>Booking <FaArrowRight className='text-black absolute right-2 top-3'> </FaArrowRight> </button>

//         </div>

//         {images.map((imageData, index,title) => (
//           <img
//             key={imageData.id}
//             src={imageData.image}
//             // alt={`Image ${imageData.id}`}
//             className={`w-40 h-40 cursor-pointer ${index === currentIndex ? 'border-2  border-blue-500' : ''}`}
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
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Slider = () => {
//   const data= useLoaderData()
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleCardClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${selectedItem ? selectedItem.image : ''})` }}>
//       <div className="flex space-x-4 absolute bottom-8">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className={`cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300 ${
//               selectedItem && selectedItem.id === item.id ? 'bg-gray-100' : ''
//             }`}
//             onClick={() => handleCardClick(item)}
//           >
//             <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg mb-2" />
//             <h2 className="text-sm font-semibold">{item.title}</h2>
//           </div>
//         ))}
//       </div>
//       {selectedItem && (
//         <div className="text-white absolute top-40 left-1 bg-black bg-opacity-20 w-80 rounded-lg">
//       <h2 className="text-xl font-semibold  mb-2">{selectedItem.title}</h2>
//           <p>{selectedItem.description}</p></div>

//       )}
//     </div>
//   );
// };

// export default Slider;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  FaArrowRight } from 'react-icons/fa';
import Navbar from '../../componenets/Navbar/Navbar';

const Home = () => {
  const data = useLoaderData();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handlePrevClick = () => {
    const currentIndex = data.indexOf(selectedItem);
    const newIndex = (currentIndex - 1 + data.length) % data.length;
    setSelectedItem(data[newIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = data.indexOf(selectedItem);
    const newIndex = (currentIndex + 1) % data.length;
    setSelectedItem(data[newIndex]);
  };

  return (
    <div className=''>
     
    <div className="  items-center justify-center h-screen bg-cover bg-center relative">
  <div className=' absolute mt-6 ml-8'> <Navbar></Navbar></div>
      <div className="absolute bottom-0 left-80 text-white transform -translate-y-1/2">
       
        {selectedItem && (
          <button onClick={handlePrevClick} className="cursor-pointer p-2 border border-red-900 bg-blue-500 rounded-lg hover:bg-orange-600">
            Previous
          </button>
        )}
      </div>
      <div className="absolute bottom-0 right-80  transform -translate-y-1/2">
        {selectedItem && (
          <button onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Next
          </button>
        )}
      </div>

      <div
        className="h-full flex items-center gap-4 justify-end"
        style={{
          backgroundImage: `url(${selectedItem ? selectedItem.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer p-2 border border-blue-300 rounded-lg hover:bg-red-300 transition duration-300 ${
              selectedItem && selectedItem.id === item.id ? 'border-blue-500' : ''
            }`}
            onClick={() => handleCardClick(item)}
          >
            <img src={item.image} alt={item.title} className="w-40 h-40  object-cover rounded-lg mb-2" />
            <h2 className="text-sm font-semibold text-white">{item.title}</h2>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="text-white absolute top-20 left-1  w-80 rounded-lg p-4">
          <h2 className="text-5xl font-bold  mb-2">{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <button className=' bg-amber-600 px-6 py-1 mt-2 relative'>booking
          
          <FaArrowRight className='text-black absolute right-2 top-3'> </FaArrowRight>
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Home;







