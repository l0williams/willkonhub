import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurSpaces from './pages/OurSpaces';
import CoworkingSpaces from './pages/CoworkingSpaces';
import PrivateOffices from './pages/PrivateOffices';
import EventHall from './pages/EventHall';
import ConferenceHall from './pages/ConferenceHall';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-spaces" element={<OurSpaces />} />
            <Route path="/coworkingspaces" element={<CoworkingSpaces />} />
            <Route path="/privateoffices" element={<PrivateOffices />} />
            <Route path="/eventhall" element={<EventHall />} />
            <Route path="/conferencehall" element={<ConferenceHall />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
