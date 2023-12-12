import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const NavBar = ({ darkMode, setDarkMode }) => (
  <nav className='py-10 mb-2 flex justify-between'>
    <div className='text-3xl flex justify-center gap-6 text-gray-600'>
      <a
        href='https://www.linkedin.com/in/srubin/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillLinkedin className='dark:text-gray-400' />
      </a>
      <a
        href='https://github.com/8cott/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillGithub className='dark:text-gray-400' />
      </a>
    </div>
    <ul className='flex items-center'>
      <li
        onClick={() => setDarkMode(!darkMode)}
        className='cursor-pointer text-2xl text-gray-600'
      >
        {darkMode ? (
          <BsFillSunFill className='text-gray-400' />
        ) : (
          <BsFillMoonStarsFill />
        )}
      </li>
      <li>
        <a
          className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
          href='scottrubin_resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
