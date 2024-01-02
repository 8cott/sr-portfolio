import GPTFitness from '../assets/GPTFitness.png';
import Listings from '../assets/Listings.png';
import CCCalc from '../assets/CCCalc.png';
import QuizGame from '../assets/QuizGame.png';
import ScottRubinRE from '../assets/ScottRubinRE.png';

const Portfolio = () => (
  <section>
    <div className='pt-10'>
      <h3 className='text-3xl pt-10 dark:text-gray-200'>Portfolio</h3>
      <p className='text-md pb-6 leading-8 text-gray-800 dark:text-gray-400'>
        Here are some my favorite projects I built from scratch.
      </p>
    </div>
    {/* Portfolio */}
    <div className='pb-10 flex flex-wrap -mx-4 justify-center'>
      {/* Card 1 */}
      <div className='w-full md:w-1/2 px-4 mb-8'>
        <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
          <img className='w-full' src={GPTFitness} alt='Portfolio image' />
          <div className='p-4 flex-grow'>
            <h5 className='text-gray-900 font-bold text-xl mb-2'>
              <a
                href='https://www.gptfitnessapp.com/'
                className='hover:text-teal-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                GPT Fitness
              </a>
            </h5>
            <p className='text-gray-700 text-base'>
              Full Stack App using AI to generate custom diet and fitness plans
              from OpenAI's GPT API. Logged in users can save plans too.
            </p>
            <div className='pt-4'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #python
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #flask
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #javascript
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #react
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #ai
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className='w-full md:w-1/2 px-4 mb-8'>
        <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
          <img className='w-full' src={Listings} alt='Portfolio image' />
          <div className='p-4 flex-grow'>
            <h5 className='text-gray-900 font-bold text-xl mb-2 hover:text-teal-500'>
              <a
                href='https://listings-app-client.vercel.app/'
                className='hover:text-teal-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                Real Estate Listings
              </a>
            </h5>
            <p className='text-gray-700 text-base'>
              Full Stack App allowing authorized users to create, read, update,
              and delete real estate listings using clean responsive design.
            </p>
            <div className='pt-4'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #node
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #express
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #react
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #mongodb
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className='w-full md:w-1/2 px-4 mb-8'>
        <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
          <img className='w-full' src={CCCalc} alt='Portfolio image' />
          <div className='p-4 flex-grow'>
            <h5 className='text-gray-900 font-bold text-xl mb-2'>
              <a
                href='https://cccalc.vercel.app/'
                className='hover:text-teal-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                Closing Costs Calculator
              </a>
            </h5>
            <p className='text-gray-700 text-base'>
              App that helps buyers and sellers estimate closing costs for new
              york city real estate sales of co-ops, condos, and townhouses.
            </p>
            <div className='pt-4'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #javascript
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #react
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #html
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #css
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className='w-full md:w-1/2 px-4 mb-8'>
        <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
          <img className='w-full' src={QuizGame} alt='Portfolio image' />
          <div className='p-4 flex-grow'>
            <h5 className='text-gray-900 font-bold text-xl mb-2'>
              <a
                href='https://8cott.github.io/quiz-game/'
                className='hover:text-teal-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                Quiz Game
              </a>
            </h5>
            <p className='text-gray-700 text-base'>
              Engaging quiz game that challenges users on various topics,
              featuring a dynamic question pool and interactive user interface.
            </p>
            <div className='pt-4'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #javascript
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #html
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #css
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #api
              </span>
            </div>
          </div>
        </div>
      </div>
            {/* Card 5 */}
            <div className='w-full md:w-1/2 px-4 mb-8'>
        <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full'>
          <img className='w-full' src={ScottRubinRE} alt='Portfolio image' />
          <div className='p-4 flex-grow'>
            <h5 className='text-gray-900 font-bold text-xl mb-2'>
              <a
                href='https://scottrubin.com/'
                className='hover:text-teal-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                Scott Rubin - Real Estate Broker
              </a>
            </h5>
            <p className='text-gray-700 text-base'>
              Real Estate branding and marketing website.
            </p>
            <div className='pt-4'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #wordpress
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #elementor
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #html
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-teal-500'>
                #ux/ui
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
