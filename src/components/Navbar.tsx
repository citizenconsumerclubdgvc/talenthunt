import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed bg-[#1f0115] top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-[#B0903B] hover:text-[#DEA193] transition-colors duration-300"
          >
            TALENT HUNT'26
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Events", "Team", "Rules", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[#B0903B] hover:text-[#DEA193] transition-all duration-300 font-medium tracking-wide hover:scale-110"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
