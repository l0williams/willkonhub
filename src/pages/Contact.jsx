import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MdLocationOn, MdPhone, MdEmail, } from 'react-icons/md';
import { FiUser, FiMail, FiPhone, FiPenTool } from 'react-icons/fi';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      );
      console.log('Email sent!', result.text);
      alert('Message sent!');
      form.current.reset();
      recaptchaRef.current.reset();
    } catch (error) {
      console.error('Failed:', error.text);
      alert('Failed to send. Please try again.');
    }
  };

  return (
    <div>

       <section className="relative h-96 md:h-[500px] mb-12 ">
              <img 
                src="/assets/conference2.jpg" 
                alt="Contact Willkonhub Hero" 
                className="w-full h-full object-cover rounded-lg shadow-xl" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold text-center"
                >
                  Contact Us
                </motion.h1>
              </div>
            </section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
    <div>
      <h2 className="text-3xl mb-4 font-bold">Do you Have Questions? Reach Us!</h2>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <div className='flex gap-1 p-2'>
            <MdLocationOn className='text-2xl max-md:text-6xl text-yellow-700'/>
            <p className='text-xl'>Stadium road, Ring Road 3, after Mbierebe Junction, Uyo, Akwa Ibom, Nigeria</p>
          </div>
          <div className='flex gap-1 p-2'>
            <MdPhone className='text-2xl text-yellow-700 '/>
            <p className='font-bold text-xl cursor-pointer'>+234 708 452 0172</p>
          </div>
          <div className='flex gap-1 p-2'>
            <MdEmail className='text-2xl text-yellow-700'/>
            <p className='text-xl hover:underline hover:text-gray-600 cursor-pointer'>Willkonhub@gmail.com</p>
          </div>

        </div>

    <div>

      <p>Fill your details and send a message and our team will contact you.</p>
      <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
        <div className='flex items-center border-b border-dashed border-black focus-within:border-solid transition duration-200'>
          <FiUser className='text-2xl'/>
        <input type="text" name="user_name" placeholder="Name" className="w-full p-3 outline-none " required />
        </div>
        <div  className='flex items-center border-b border-dashed border-black focus-within:border-solid transition duration-200'>
          <FiMail className='text-2xl'/>
        <input type="email" name="recipient_email" placeholder="Email Address" className="w-full p-3 outline-none " required />
        </div>
        <div  className='flex items-center border-b border-dashed border-black focus-within:border-solid transition duration-200'>
          <FiPhone className='text-2xl'/>
        <input type="tel" name="user_phone" placeholder="Phone" className="w-full p-3 outline-none " />
        </div>
        <div  className='flex items-center border-b border-dashed border-black focus-within:border-solid transition duration-200'>
          <FiPenTool className='text-2xl'/>
        <textarea name="message" placeholder="Send us a Message" className="w-full p-3 outline-none h-32" required />
        </div>
        <button type="submit" className="bg-gradient-to-r from-yellow-950 to-yellow-700 hover:bg-[linear-gradient(270deg,#17283B,#0C3787)] text-white px-6 py-3 rounded-lg shadow-md">Send Message</button>

        <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        
      />
      </form>

      </div>

    </div> 

      <div>

      <p className='pt-8 px-6 text-gray-700'><strong>FIND US USING THE MAP</strong></p>
      { /* Google Map Embed */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070603.745001303!2d2.313200389248791!3d8.997479885712337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067f9002b24b909%3A0xb801f781acf117!2sWillkon%20Hub!5e0!3m2!1sen!2sng!4v1756743544591!5m2!1sen!2sng"
        width="100%" 
        height="450" 
        className="mt-4 border-0" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Willkonhub Location"
      ></iframe>
      </div>
    </div>
  );
};

export default Contact;