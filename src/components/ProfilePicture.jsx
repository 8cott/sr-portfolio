import React, { useState } from 'react';
// Import all the emoji images
import SRMemoji1 from '../assets/SRMemoji1.png';
import SRMemoji2 from '../assets/SRMemoji2.png';
import SRMemoji3 from '../assets/SRMemoji3.png';
import SRMemoji4 from '../assets/SRMemoji4.png';
import SRMemoji5 from '../assets/SRMemoji5.png';
import SRMemoji6 from '../assets/SRMemoji6.png';
import SRMemoji7 from '../assets/SRMemoji7.png';

const ProfilePicture = () => {
  // Array of Memojis
  const memojis = [SRMemoji1, SRMemoji2, SRMemoji3, SRMemoji4, SRMemoji5, SRMemoji6, SRMemoji7];

  // State to keep track of the current memoji index
  const [currentMemojiIndex, setCurrentMemojiIndex] = useState(0);

  // Click/Tap Handler
  const handleMemojiChange = () => {
    // Update state to next Memoji
    setCurrentMemojiIndex((prevIndex) => (prevIndex + 1) % memojis.length);
  };

  return (
    <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-6 mx-auto overflow-hidden md:w-72 md:h-72' onClick={handleMemojiChange}>
      <img
        src={memojis[currentMemojiIndex]} // Use the current memoji index to display the image
        alt='Scott Memoji'
        className='absolute w-full h-full object-cover rounded-full'
      />
    </div>
  );
};

export default ProfilePicture;
