import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaPlus, FaMinus } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const conferenceImages = [
  '/assets/conference.jpg',
  '/assets/conference2.jpg',
  '/assets/conference3.jpg',
  '/assets/conferenceflyer.jpg',
  
];

const faqs = [
  {
    question: "What is a conference hall?",
    answer: "A conference hall is a dedicated space designed primarily for hosting formal gatherings such as business meetings, conferences, seminars, presentations, workshops, and collaborative sessions."
  },
  {
    question: "What is the capacity of the hall?",
    answer: "Our conference hall can host 60 to 100 people."
  },
  {
    question: "Are there any membership requirements?",
    answer: "No strict requirements—just send a message through our contact form."
  },
  {
    question: "How does a conference hall differ from a meeting room?",
    answer: "Conference halls are typically larger and more formal, suited for bigger groups or structured events, while meeting rooms are smaller and ideal for informal discussions or quick team huddles."
  },
  
];

const ConferenceHall = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const form = useRef();
   const recaptchaRef = useRef();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    
      <section className="relative mb-12">
        <img 
          src="/assets/conference.jpg" 
          alt="Spaces Hero" 
          className="w-full h-96 object-cover rounded-lg shadow-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Conference Hall
          </motion.h1>
        </div>
      </section>

      
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12 p-6">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Details</h2>
          <p className="text-lg mb-4">
            Need a productive and professional conference hall? Our 60 to 100 capacity conference hall provides the perfect setting for all formal gatherings.
          </p>
          <p className="text-lg">
            At Willkonhub, our conference hall is designed to boost productivity, encourage innovation through group dynamics, and provide professional settings for client interactions or training.
          </p>
        </div>
        <img 
          src="/assets/conferenceflyer.jpg" 
          alt="Detail" 
          className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
        />
        <div className="w-full md:w-1/3 bg-zinc-700 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center text-white">Quick Inquiry</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="user_name" placeholder="Name" className="w-full p-2 border rounded" required />
            <input type="email" name="recipient_email" placeholder="Email" className="w-full p-2 border rounded" required />
            <textarea name="message" placeholder="Message" className="w-full p-2 border rounded h-20" required />
            <button type="submit" className="w-full bg-[linear-gradient(120deg,#17283B,#0C3787)] text-white p-2 rounded hover:shadow-xl hover:bg-[linear-gradient(270deg,#17283B,#0C3787)] active:scale-90 transition-all duration-200 hover:cursor-pointer">Send</button>
             <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          />
          </form>
        </div>
      </section>

      {/* Carousel */}
      <section className="mb-12 p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Conference Hall</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {conferenceImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Image ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQ */}
      <section className="mb-12 bg-[linear-gradient(180deg,#D7DADE,#EBEBEB)] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className="mb-4 border-b border-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <button 
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pb-4 text-gray-600">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </section>

    </div>
  );
};

export default ConferenceHall;