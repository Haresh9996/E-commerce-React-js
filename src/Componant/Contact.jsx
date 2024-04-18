import React from 'react';
import ButtonComp from './ButtonComp';

const Contact = () => {
  return (
    <div className="container p-8 m-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-left">Your Name</label>
              <input type="text" className="w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2" id="name" />
            </div>
            <div>
              <label htmlFor="number" className="block mb-1 text-left">Your Mobile Number</label>
              <input type="number" className="w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2" id="number" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-left">Your Email</label>
              <input type="email" className="w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2" id="email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-left">Message</label>
              <textarea className="w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2" id="message" rows="5"></textarea>
            </div>
            <ButtonComp background={'#5a1b9d'} color={'#fff'} content={'Submit'} />
          </form>
        </div>
        <div className="md:col-span-1 mt-8">
          <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392307.51066784846!2d-86.47934517069773!3d39.80917758142648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2sin!4v1711819134322!5m2!1sen!2sin" style={{border:0, width: '100%', height:'300px'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
