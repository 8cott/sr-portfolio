import SRMemoji from '../assets/SRMemoji.png';

const ProfilePicture = () => (
  <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-6 mx-auto overflow-hidden md:w-72 md:h-72'>
    <img
      src={SRMemoji}
      alt='Description'
      className='absolute w-full h-full object-cover rounded-full'
    />
  </div>
);

export default ProfilePicture;
