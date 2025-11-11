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

const coworkingImages = [
  '/assets/coworking3.png',
  '/assets/coworking2.png',
  '/assets/coworking4.png',
  '/assets/coworking1.png',
];

const faqs = [
  {
    question: "What is a co-working space?",
    answer: "A co-working space is a shared office environment where individuals from different companies or freelancers work together in a collaborative setting."
  },
  {
    question: "Who can use co-working spaces?",
    answer: "Freelancers, remote workers, entrepreneurs, startups, and small teams can all benefit from our flexible co-working options."
  },
  {
    question: "Are there any membership requirements?",
    answer: "No strict requirements—just choose a plan that fits your needs and sign up via our contact form."
  },
  {
    question: "Can I bring guests?",
    answer: "Yes, with prior notice and depending on availability."
  },
  
];

const CoworkingSpaces = () => {
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
          src="/assets/coworking1.png" 
          alt="Co-Working Spaces Hero" 
          className="w-full h-96 object-cover rounded-lg shadow-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Co-Working Spaces
          </motion.h1>
        </div>
      </section>

      
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12 p-6">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">What is a Co-Working Space?</h2>
          <p className="text-lg mb-4">
            Need a productive and professional environment to work from? Our co-working spaces provide the perfect setting for freelancers, remote workers, and entrepreneurs.
          </p>
          <p className="text-lg">
            At Willkonhub, co-working spaces are designed to foster collaboration, offering flexible desks in a vibrant community. Enjoy 24/7 power, ergonomic seating, and networking opportunities.
          </p>
        </div>
        <img 
          src="/assets/coworking4.png" 
          alt="Co-Working Detail" 
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
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Co-Working Spaces</h2>
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
          {coworkingImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Co-Working Image ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQ for Coworking */}
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

export default CoworkingSpaces;