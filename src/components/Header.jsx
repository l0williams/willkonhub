import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpacesDropdownOpen, setIsSpacesDropdownOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent backdrop-blur-md text-black shadow-lg sticky top-0 z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold flex"><img src="/logo.jpg" alt="logo" className='h-8 w-10 mx-1' />WillkonHub</Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/about-us" className="hover:text-yellow-500">About Us</Link></li>
          <li 
            className="relative"
            onMouseEnter={() => setIsSpacesDropdownOpen(true)}
            onMouseLeave={() => setIsSpacesDropdownOpen(false)}
          >
            <button >
              <Link to="/our-spaces" className="flex items-center hover:text-yellow-500">
              Our Spaces <FaChevronDown className="ml-1" />
              </Link>
            </button>
            {isSpacesDropdownOpen && (
              <motion.ul 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bg-black text-white shadow-lg rounded-lg py-2 w-48"
              >
                <li><Link to="/coworkingspaces" className="block px-4 py-2 hover:underline">Co-Working Spaces</Link></li>
                <li><Link to="/privateoffices" className="block px-4 py-2 hover:underline">Private Offices</Link></li>
                <li><Link to="/eventhall" className="block px-4 py-2 hover:underline">Event Hall</Link></li>
                <li><Link to="/conferencehall" className="block px-4 py-2 hover:underline">Conference Hall</Link></li>
              </motion.ul>
            )}
          </li>
          <li><Link to="/contact-us" className="hover:text-yellow-500">Contact Us</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black text-white px-4 py-2"
        >
          <ul className="space-y-4">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li>
              <button 
                className="flex items-center w-full justify-between"
                onClick={() => setIsSpacesDropdownOpen(!isSpacesDropdownOpen)}
              >
                Our Spaces <FaChevronDown className={`transform ${isSpacesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSpacesDropdownOpen && (
                <ul className="pl-4 space-y-2">
                  <li><Link to="/coworkingspaces" onClick={() => setIsMobileMenuOpen(false)}>Co-Working Spaces</Link></li>
                  <li><Link to="/privateoffices" onClick={() => setIsMobileMenuOpen(false)}>Private Offices</Link></li>
                  <li><Link to="/eventhall" onClick={() => setIsMobileMenuOpen(false)}>Event Hall</Link></li>
                  <li><Link to="/conferencehall" onClick={() => setIsMobileMenuOpen(false)}>Conference Hall</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;