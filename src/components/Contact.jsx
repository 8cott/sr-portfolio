import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const honeypotRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (honeypotRef.current.value) {
      console.log('Honeypot field was filled. Possible bot detected.');
      return; 
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message');
        }
      );
  };

  return (
    <div className='py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        {/* Card in the back with a consistent aspect ratio and position */}
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-700 to-teal-600 shadow-lg transform skew-y-0 rotate-0 rounded-3xl sm:skew-y-0 sm:rotate-6 sm:rounded-3xl'></div>
        {/* Card in the front with a consistent aspect ratio and position */}
        <div className='relative px-4 py-10 bg-gradient-to-r from-teal-600 to-teal-500 shadow-lg rounded-3xl sm:rounded-3xl sm:p-20'>
          <div className='text-center pb-6'>
            <h1 className='text-3xl text-white'>Contact Scott</h1>
            <p className='text-gray-200'>
              Fill up the form below to send a message.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className='shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Name'
              name='from_name'
            />
            <input
              className='shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='Email'
              name='from_email'
            />
            <input
              className='shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Subject'
              name='subject'
            />
            <textarea
              className='shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Type your message here...'
              name='message'
              style={{ height: '121px' }}
            ></textarea>

            <input
              ref={honeypotRef}
              type="text"
              name="honeypot"
              style={{ display: 'none' }} 
              tabIndex="-1" 
            />

            <div className='flex justify-between'>
              <input
                className='shadow bg-purple-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
                value='Send ➤'
              />
              <input
                className='shadow bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='reset'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
