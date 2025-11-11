
const galleryItems = [
  '/assets/book.jpg',
  '/assets/hero1.jpg',
  '/assets/event2.mp4',
  '/assets/event.mp4', 
  '/assets/corevalues.jpg',
  '/assets/corevalues2.jpg',
  '/assets/park.jpg',
  '/assets/services.jpg',
];

const Gallery = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              {item.endsWith('.mp4') ? (
                <video autoPlay loop muted className="w-full h-64 object-cover">
                  <source src={item} type="video/mp4" />
                </video>
              ) : (
                <img src={item} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/_willkonhub/"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[linear-gradient(120deg,#17283B,#0C3787)] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[linear-gradient(270deg,#17283B,#0C3787)] hover:shadow-xl active:scale-90 transition-all duration-200 hover:cursor-pointer "
          >
            Follow Us on Instagram 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;