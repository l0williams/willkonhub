import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is Willkonhub?",
    answer: "Willkonhub is a dynamic and modern center for events, coworking space, private offices and conference hall."
  },
  {
    question: "What amenities do you offer?",
    answer: "24/7 Power supply, ample parking space, seating/tables, air conditioning, stage, restrooms, ergonomic workspaces, and more."
  },
  {
    question: "How can I book a space?",
    answer: "You can book by contacting us via email, phone, our website contact page or through our social media."
  },
  {
    question: "Is the space responsive to different needs?",
    answer: "Yes, we offer flexible plans for everyone."
  },
  {
    question: 'What are the hours of operation?',
    answer: 'We are open from 8am to 6pm, from monday to saturday'
    },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-[linear-gradient(180deg,#D7DADE,#EBEBEB)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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
              <FaChevronDown className={`text-yellow-500 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
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
      </div>
    </section>
  );
};

export default FAQ;