import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Rules from './components/Rules';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden bg-cover bg-no-repeat h-screen bg-opacity-10"
      style={{
        backgroundImage: "linear-gradient(rgba(45, 5, 33, 0.7), rgba(45, 5, 33, 0.7)), url(assets/bg.png)"
      }}
      >
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
