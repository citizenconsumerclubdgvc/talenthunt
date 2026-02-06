import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#1e0014]/95 backdrop-blur-md shadow-lg shadow-[#380A2D]/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-[#B0903B] hover:text-[#DEA193] transition-colors duration-300"
          >
            TALENT HUNT'26
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Events', 'Team', 'Rules', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#B0903B] hover:text-[#DEA193] transition-all duration-300 font-medium tracking-wide hover:scale-110"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#380A2D]/50 border border-[#B0903B]/30 rounded-full px-4 py-2 pl-10 text-[#DEA193] placeholder-[#B0903B]/50 focus:outline-none focus:border-[#B0903B] transition-all duration-300 w-40 focus:w-60"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0903B]" />
          </div>
        </div>
      </div>
    </nav>
  );
}
