import { useState, useEffect } from 'react';
import { Calendar, Sparkles } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-23T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e0014] via-[#380A2D] to-[#1e0014]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-[#B0903B]/30 text-6xl">♈</div>
        <div className="absolute top-40 right-20 text-[#B0903B]/30 text-5xl">♉</div>
        <div className="absolute bottom-40 left-20 text-[#B0903B]/30 text-7xl">♊</div>
        <div className="absolute bottom-20 right-10 text-[#B0903B]/30 text-6xl">♋</div>
        <div className="absolute top-1/2 left-1/4 text-[#B0903B]/30 text-5xl">♌</div>
        <div className="absolute top-1/3 right-1/3 text-[#B0903B]/30 text-6xl">♍</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fadeInUp">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-[#B0903B] mx-auto mb-4 animate-pulse" />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold text-[#B0903B] mb-6 tracking-wider drop-shadow-[0_0_30px_rgba(176,144,59,0.5)]">
          TALENT HUNT'26
        </h1>

        <p className="text-2xl md:text-3xl text-[#DEA193] mb-4 font-light tracking-widest">
          A Flagship Cultural Event
        </p>

        <p className="text-lg md:text-xl text-[#B0903B]/80 mb-8">
          Citizen Consumer Club (CCC), DG Vaishnav College, Chennai
        </p>

        <div className="border-t border-b border-[#B0903B]/30 py-8 my-12">
          <p className="text-3xl md:text-4xl text-[#DEA193] font-serif italic tracking-wide">
            TIME BROKE. TALENT DIDN'T.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-[#B0903B] text-xl mb-6 tracking-widest">The Multiverse Unfolds In...</p>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B] rounded-lg p-6 min-w-[100px] transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#DEA193] mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-[#B0903B] tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => scrollToSection('events')}
            className="px-8 py-4 bg-[#B0903B] text-[#1e0014] rounded-full font-bold text-lg hover:bg-[#DEA193] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#B0903B]/50"
          >
            Check Events
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="px-8 py-4 border-2 border-[#B0903B] text-[#B0903B] rounded-full font-bold text-lg hover:bg-[#B0903B] hover:text-[#1e0014] hover:scale-105 transition-all duration-300"
          >
            Register Now
          </button>
        </div>

        <div>
          <h3 className="text-2xl text-[#B0903B] mb-6 tracking-widest">PAST HIGHLIGHTS</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full md:w-64 h-48 bg-[#380A2D]/50 border-2 border-[#B0903B]/50 rounded-lg flex items-center justify-center hover:border-[#DEA193] hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-[#B0903B] mx-auto mb-2 group-hover:text-[#DEA193] transition-colors" />
                  <p className="text-[#B0903B] group-hover:text-[#DEA193] transition-colors">Memory Fragment {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e0014] to-transparent"></div>
    </section>
  );
}
