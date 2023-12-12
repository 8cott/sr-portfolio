import { useState, useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import Portfolio from './components/Portfolio';
import CodingToolbox from './components/CodingToolbox';
import Contact from './components/Contact';
import Footer from './components/Footer'


function App() {
  // Check for system preference for dark mode
  const [darkMode, setDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Update darkMode based on system preference change
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Return JSX for rendering
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Header />
          <ProfilePicture />
          <Portfolio />
          <CodingToolbox />
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
