// import { useState } from 'react';
// import { BsFillMoonStarsFill } from 'react-icons/bs';
// import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// import SRMemoji from '../src/assets/SRMemoji.png';
// import GPTFitness from '../src/assets/GPTFitness.png';
// import Listings from '../src/assets/Listings.png';
// import CCCalc from '../src/assets/CCCalc.png';
// import QuizGame from '../src/assets/QuizGame.png';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
//         <section className='min-h-screen'>
//           <nav className='py-10 mb-2 flex justify-between'>
//             <div className='text-3xl flex justify-center gap-6 text-gray-600'>
//               <a
//                 href='https://www.linkedin.com/in/srubin/'
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 <AiFillLinkedin />
//               </a>
//               <a
//                 href='https://github.com/8cott/'
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 <AiFillGithub />
//               </a>
//             </div>
//             <ul className='flex items-center'>
//               <li>
//                 <BsFillMoonStarsFill
//                   onClick={() => setDarkMode(!darkMode)}
//                   className='cursor-pointer text-2xl text-gray-600'
//                 />
//               </li>
//               <li>
//                 <a
//                   className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
//                   href='#'
//                 >
//                   Resume
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className='text-center'>
//             <h2 className='text-5xl text-teal-600 font-medium md:text-6xl dark:text-teal-300'>
//               Scott Rubin
//             </h2>
//             <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>
//               Software Developer
//             </h3>
//             <p className='text-md py-4 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
//               Full Stack Software Engineer with Extensive Entreprenaurial Sales
//               Background
//             </p>
//           </div>

//           <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-6 mx-auto overflow-hidden md:w-72 md:h-72'>
//             <img
//               src={SRMemoji}
//               alt='Description'
//               className='absolute w-full h-full object-cover rounded-full'
//             />
//           </div>
//         </section>
//         <section>
//           <div>
//             <h3 className='text-3xl pt-10 dark:text-gray-200'>Portfolio</h3>
//             <p className='text-md pb-5 leading-8 text-gray-800 dark:text-gray-400'>
//               Here are some my favorite projects I built from scratch.
//             </p>
//           </div>
//           {/* Portfolio */}
//           <div className='flex flex-wrap -mx-4'>
//             {/* Card 1 */}
//             <div className='w-full md:w-1/2 px-4 mb-8'>
//               <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
//                 <img
//                   className='w-full'
//                   src={GPTFitness}
//                   alt='Portfolio image'
//                 />
//                 <div className='p-4 flex-grow'>
//                   <h5 className='text-gray-900 font-bold text-xl mb-2'>
//                     <a
//                       href='https://www.gptfitnessapp.com/'
//                       className='hover:text-teal-500'
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       GPT Fitness
//                     </a>
//                   </h5>
//                   <p className='text-gray-700 text-base'>
//                     Full Stack App using AI to generate custom diet and fitness
//                     plans from OpenAI's GPT API. Logged in users can save plans
//                     too.
//                   </p>
//                   <div className='pt-4'>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #python
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #flask
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #javascript
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #react
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #ai
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Card 2 */}
//             <div className='w-full md:w-1/2 px-4 mb-8'>
//               <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
//                 <img className='w-full' src={Listings} alt='Portfolio image' />
//                 <div className='p-4 flex-grow'>
//                   <h5 className='text-gray-900 font-bold text-xl mb-2 hover:text-teal-500'>
//                     <a
//                       href='https://listings-app-client.vercel.app/'
//                       className='hover:text-teal-500'
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       Real Estate Listings
//                     </a>
//                   </h5>
//                   <p className='text-gray-700 text-base'>
//                     Full Stack App allowing authorized users to create, read,
//                     update, and delete real estate listings using clean
//                     responsive design.
//                   </p>
//                   <div className='pt-4'>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #node
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #express
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #react
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #mongodb
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Card 3 */}
//             <div className='w-full md:w-1/2 px-4 mb-8'>
//               <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
//                 <img className='w-full' src={CCCalc} alt='Portfolio image' />
//                 <div className='p-4 flex-grow'>
//                   <h5 className='text-gray-900 font-bold text-xl mb-2'>
//                     <a
//                       href='https://cccalc.vercel.app/'
//                       className='hover:text-teal-500'
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       Closing Costs Calculator
//                     </a>
//                   </h5>
//                   <p className='text-gray-700 text-base'>
//                     App that helps buyers and sellers estimate closing costs for
//                     new york city real estate sales of co-ops, condos, and
//                     townhouses.
//                   </p>
//                   <div className='pt-4'>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #javascript
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #react
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #html
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #css
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Card 4 */}
//             <div className='w-full md:w-1/2 px-4 mb-8'>
//               <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
//                 <img className='w-full' src={QuizGame} alt='Portfolio image' />
//                 <div className='p-4 flex-grow'>
//                   <h5 className='text-gray-900 font-bold text-xl mb-2'>
//                     <a
//                       href='https://8cott.github.io/quiz-game/'
//                       className='hover:text-teal-500'
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       Quiz Game
//                     </a>
//                   </h5>
//                   <p className='text-gray-700 text-base'>
//                     Engaging quiz game that challenges users on various topics,
//                     featuring a dynamic question pool and interactive user
//                     interface.
//                   </p>
//                   <div className='pt-4'>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #javascript
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #html
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #css
//                     </span>
//                     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
//                       #api
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section>
//           <div>
//             <h3 className='text-3xl pt-10 dark:text-gray-200'>
//               Coding Toolbox
//             </h3>
//             <p className='text-md pb-5 leading-8 text-gray-800 dark:text-gray-400'>
//               These are the tools and technologies that fuel my passion for
//               coding.
//             </p>
//             <div className='flex flex-wrap justify-center items-center -mx-4'>
//               {/* List of Icons */}
//               {[
//                 { src: 'javascript.svg', alt: 'JavaScript' },
//                 { src: 'python.svg', alt: 'Python' },
//                 { src: 'html-5.svg', alt: 'HTML5' },
//                 { src: 'css-3.svg', alt: 'CSS 3' },
//                 { src: 'react.svg', alt: 'React' },
//                 { src: 'vitejs.svg', alt: 'Vite' },
//                 { src: 'typescript-icon.svg', alt: 'TypeScript' },
//                 { src: 'nodejs-icon.svg', alt: 'Node.js' },
//                 { src: 'express-original.svg', alt: 'Express' },
//                 { src: 'django-icon.svg', alt: 'Django' },
//                 { src: 'flask.svg', alt: 'Flask' },
//                 { src: 'swift.svg', alt: 'Swift' },
//                 { src: 'xcode.svg', alt: 'Xcode' },
//                 { src: 'mongodb-icon.svg', alt: 'MongoDB' },
//                 { src: 'openai-icon.svg', alt: 'OpenAI' },
//                 { src: 'postgresql.svg', alt: 'PostgreSQL' },
//                 { src: 'redux.svg', alt: 'Redux' },
//                 { src: 'material-ui.svg', alt: 'Material-UI' },
//                 { src: 'tailwindcss-icon.svg', alt: 'Tailwind CSS' },
//               ].map((item, index) => (
//                 <div key={index} className='px-4 mb-8 text-center'>
//                   <img
//                     className='mx-auto h-20'
//                     src={`/icons/${item.src}`}
//                     alt={item.alt}
//                   />
//                   <p className='text-md font-semibold dark:text-gray-300'>
//                     {item.alt}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;
