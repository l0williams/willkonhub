import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import Gallery from '../components/Gallery';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 md:h-[500px] mb-12">
        <img 
          src="/assets/conference.jpg" 
          alt="About Willkonhub Hero" 
          className="w-full h-full object-cover rounded-lg shadow-xl" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8">
        <img 
          src="/assets/event5.jpg" 
          alt="Nature" 
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" 
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            Willkon Hub aims to be Nigeria's leading multifunctional business and events hub, empowering innovation, collaboration, and memorable experiences. We envision expanding Willkon Hub's footprint across major Nigerian cities, offering premium spaces that inspire productivity, creativity, and community.            
          </p>
        </div>
      </section>

      {/* Section 2*/}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12 p-8">
        <img 
          src="/assets/flower.jpg" 
          alt="Modern" 
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" 
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Willkon Hub, our mission is to provide versatile, high-quality spaces--including event halls, conference venues, private offices, and coworking environments--that meet the evolving needs pf professionals, entrepreneurs, and organizations. We are committed to delivering exceptional service, fostering community engagement, and driving professional success. 
          </p>
        </div>
      </section>

      <FAQ/>
      <Gallery/>

     
    </div>
  );
};

export default About;

