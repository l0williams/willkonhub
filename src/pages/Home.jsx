import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaPlus, FaMinus } from 'react-icons/fa';
import FAQ from '../components/FAQ';

const sliderImages = [
  '/assets/hero1.jpg',
  '/assets/hero2.jpg',
  '/assets/park.jpg',
];

const spaces = [
  { title: 'Co-Working Spaces', desc: 'Perfect for freelancers and teams.', img: '/assets/coworking2.png', link: '/coworkingspaces' },
  { title: 'Private Offices', desc: 'Privacy for focused work.', img: '/assets/office2.png', link: '/privateoffices' },
  { title: 'Event Hall', desc: 'Perfect hall for all types of events.', img: '/assets/event8.jpg', link: '/eventhall' },
  { title: 'Conference Hall', desc: 'Host up to 60 to 100 people.', img: '/assets/conferenceflyer.jpg', link: '/conferencehall' },
];

const amenities = [
  {
    short: '24/7 Power Supply',
    full: 'Enjoy our standby diesel generator to ensure there is always power supply for your events and office use.'
  },
  {
    short: 'Air conditioning in all halls and offices',
    full: 'Our air conditioning maintains comfortable temperatures, ensuring guest comfort all year-round.'
  },
  {
    short: 'Comfortable and ample Parking Spaces',
    full: 'Willkon hub provides ample parking space for guests.'
  },
  {
    short: 'Comfortable, Ergonomic Workspaces',
    full: 'Work in a well-designed space with modern furniture, ample lighting, and a professional ambiance.'
  },
  {
    short: 'Professional Waiting Room',
    full: 'We provide a professional waiting room with comfortable seating to greet guests and encourage breaks, informal meetings and relaxation. '
  },
  {
    short: 'Flexible Seating and Tables',
    full: 'We provide flexible arrangements of chairs and tables to accommodate various group sizes, including round banquet tables with a hall capacity of 300.'
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Slider Hero */}
      <section className="relative h-screen">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" z-10 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Versatile Event Center and Spaces in the Core of Uyo</h1>
            <p className="text-xl mb-6">Discover Uyo’s premier destination. Inspiring spaces for events, innovators and teams.</p>
            <button className="bg-transparent border-[2px] border-solid border-white text-white font-semibold px-6 py-3 rounded-lg  hover:bg-gradient-to-r from-yellow-950 to-yellow-700 hover:border-none active:scale-90 transition-all duration-200 cursor-pointer">Check our Spaces and Contact us</button>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-12 bg-[linear-gradient(180deg,#D7DADE,#EBEBEB)] ">
        <div className="container mx-auto px-16 flex flex-col md:flex-row items-center gap-8">
          <img src="/assets/event4.jpg" alt="About Willkonhub" className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-full" />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-500">Willkonhub is your go-to destination for versatile, modern, and fully-equipped spaces in Nigeria.</p>
            <p className="mt-4 text-lg text-gray-500">Whether you're hosting an event, organizing a conference, or in need of a private office or coworking space, we offer a range of services tailored to meet your business and personal needs.
              Our flexible spaces are designed to foster productivity, creativity, collaboration, and create lasting memories making Willkon Hub the perfect place for individuals and organizations to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Spaces Carousel */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-semibold text-center text-xl mb-8">Our Spaces</h2>
          <p className="text-center text-3xl mb-6 font-bold">Check all our flexible spaces</p>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation
          >
            {spaces.map((space, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md overflow-hidden">
                  <img src={space.img} alt={space.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{space.title}</h3>
                    <p className="text-gray-600 mb-4">{space.desc}</p>
                    <Link to={space.link} className="bg-gradient-to-r from-yellow-950 to-yellow-700 text-black px-4 py-2 rounded-lg hover:bg-[linear-gradient(270deg,#17283B,#0C3787)] hover:text-white active:scale-90 transition-all duration-200 hover:cursor-pointer">Explore</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

            {/* Reviews Section */}
      <section className="py-12 text-center bg-[linear-gradient(180deg,#D7DADE,#EBEBEB)]">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-lg mb-6">Join the community of satisfied professionals at Willkonhub. Read our reviews and see why we're Uyo's top choice.</p>
          <a 
            href="https://www.google.com/maps/place/Willkon+Hub/@4.9993883,7.8984005,17z/data=!4m15!1m8!3m7!1s0x1067f9002b24b909:0xb801f781acf117!2sWillkon+Hub!8m2!3d4.9994428!4d7.8984427!10e5!16s%2Fg%2F11xghqpssn!3m5!1s0x1067f9002b24b909:0xb801f781acf117!8m2!3d4.9994428!4d7.8984427!16s%2Fg%2F11xghqpssn?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-950 to-yellow-700 text-black px-6 py-3 rounded-lg shadow-2xl hover:bg-[linear-gradient(270deg,#17283B,#0C3787)] hover:text-white hover:shadow-lg active:scale-90 transition-all duration-200 hover:cursor-pointer"
          >
            View Reviews on Google
          </a>
        </div>
      </section>

      {/* Modern Spaces*/}
      <section className="py-12">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-8">
          <img src="/assets/hero3.jpg" alt="Modern Offices" className="w-full md:w-1/2 rounded-lg shadow-md object-cover md:h-[100vh]" />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Modern Spaces</h2>
            {amenities.map((amenity, index) => (
              <div key={index} className="mb-4 border-b border-gray-300">
                <button 
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold"
                >
                  {amenity.short}
                  {openIndex === index ? <FaMinus className='text-yellow-400' /> : <FaPlus className='text-yellow-500' />}
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: openIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-gray-600">{amenity.full}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Home;