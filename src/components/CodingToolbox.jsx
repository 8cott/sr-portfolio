const CodingToolbox = () => (
  <section>
    <div>
      <h3 className='text-3xl pt-10  dark:text-gray-200'>Coding Toolbox</h3>
      <p className='text-md pb-6 leading-8 text-gray-800 dark:text-gray-400'>
        These are the tools and technologies that fuel my passion for coding.
      </p>
      <div className='pb-10 flex flex-wrap justify-center items-center -mx-4'>
        {[
          { src: 'javascript.svg', alt: 'JavaScript' },
          { src: 'python.svg', alt: 'Python' },
          { src: 'html-5.svg', alt: 'HTML5' },
          { src: 'css-3.svg', alt: 'CSS 3' },
          { src: 'react.svg', alt: 'React' },
          { src: 'vitejs.svg', alt: 'Vite' },
          { src: 'typescript-icon.svg', alt: 'TypeScript' },
          { src: 'nodejs-icon.svg', alt: 'Node.js' },
          {
            src: 'express-original.svg',
            alt: 'Express',
            darkModeClass: 'dark:invert',
          },
          { src: 'django-icon.svg', alt: 'Django' },
          { src: 'flask.svg', alt: 'Flask', darkModeClass: 'dark:invert' },
          { src: 'swift.svg', alt: 'Swift' },
          { src: 'xcode.svg', alt: 'Xcode' },
          { src: 'mongodb-icon.svg', alt: 'MongoDB' },
          {
            src: 'openai-icon.svg',
            alt: 'OpenAI',
            darkModeClass: 'dark:invert',
          },
          { src: 'postgresql.svg', alt: 'PostgreSQL' },
          { src: 'redux.svg', alt: 'Redux' },
          { src: 'material-ui.svg', alt: 'Material-UI' },
          { src: 'tailwindcss-icon.svg', alt: 'Tailwind CSS' },
        ].map((item, index) => (
          <div key={index} className='px-5 mb-8 text-center'>
            <img
              className={`mx-auto h-20 transition duration-300 ease-in-out transform hover:scale-110 ${
                item.darkModeClass || ''
              }`}
              src={`/icons/${item.src}`}
              alt={item.alt}
            />
            <p className='text-md font-semibold dark:text-gray-300'>
              {item.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CodingToolbox;
