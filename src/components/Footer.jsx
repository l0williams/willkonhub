import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-6 text-xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
       <div>
        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/61578626831817/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700"><FaFacebook /></a>
            <a href="https://www.instagram.com/_willkonhub/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500"><FaInstagram /></a>
            <a href="https://twitter.com/willkonhub" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700"><FaTwitter /></a>
            <a href="https://linkedin.com/willkonhub" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700"><FaLinkedin /></a>
            <a href="https://tiktok.com/@willkonhub?_t=ZM-8x7c1XRhA9u&_r=1 " target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><FaTiktok /></a>
          </div>
          <p className="mt-4 underline hover:no-underline cursor-pointer text-gray-400 hover:text-white">Email: Willkonhub@gmail.com</p>
          <p className='underline hover:no-underline cursor-pointer text-gray-400 hover:text-white'>Phone: +234 708 452 0172</p>
        <p className='text-gray-400'><strong>Address:</strong> Stadium road, Ring Road 3, after Mbierebe Junction, Uyo, Akwa Ibom, Nigeria</p>
         </div>
          <div>
          <h3 className="text-lg font-bold mb-2">Willkonhub </h3>
          <p className='text-gray-400'>Providing innovative spaces in uyo.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-yellow-600 text-gray-400">Home</NavLink></li>
            <li><NavLink to="/about-us" className="hover:text-yellow-600 text-gray-400">About</NavLink></li>
            <li><NavLink to="/our-spaces" className="hover:text-yellow-600 text-gray-400">Our Spaces</NavLink></li>
            <li><NavLink to="/contact-us" className="hover:text-yellow-600 text-gray-400">Contact</NavLink></li>
          </ul>
        </div>
       
      </div>
       <hr />
        <div className='m-3'>
            <p className='text-gray-400'>&copy; 2025 Willkonhub. All rights reserved.</p>
          
        </div>
     
    </footer>
  );
};

export default Footer;