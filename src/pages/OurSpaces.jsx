import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Co-Working Spaces',
    desc: 'Our spaces provide the perfect setting for freelancers, remote workers, and entrepreneurs.',
    img: '/assets/coworking2.png',
    link: '/coworkingspaces'
  },
  {
    title: 'Private Offices',
    desc: 'Looking for a space to call your own? Our private offices offer the privacy and professionalism you need to focus on your goals.',
    img: '/assets/office4.png',
    link: '/privateoffices'
  },
  {
    title: 'Event Hall',
    desc: 'Our event hall is the perfect space to host all types of events, designed to be flexible to different types of events and needs.',
    img: '/assets/hero1.jpg',
    link: '/eventhall'
  },
  {
    title: 'Conference Hall',
    desc: 'We have a spacious conference hall that can host up to 100 people. It can be used to conduct formal gatherings.',
    img: '/assets/conference2.jpg',
    link: '/conferencehall'
  },
];

const OurSpaces = () => {
  return (
    <div className='p-8'>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Our Spaces
      </motion.h1>
      <p className="text-center mb-12 text-lg">Looking for an event hall, conference hall or modern work and meeting spaces that meet your personal and business needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer"
          >
            < img src={service.img} alt={service.title} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Link to={service.link} className="bg-[linear-gradient(120deg,#17283B,#0C3787)] text-white px-4 py-2 rounded-lg hover:[linear-gradient(270deg,#17283B,#0C3787)] hover:shadow-xl active:scale-90 transition-all duration-300 hover:scale-110  cursor-pointer">Learn More</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurSpaces;