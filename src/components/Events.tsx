import { useState } from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';

interface Event {
  name: string;
  codename: string;
  era: string;
  zodiac: string;
  tagline: string;
  registerUrl: string;
}

export default function Events() {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2' | 'online'>('day1');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const rulebookUrl = 'https://drive.google.com/file/d/1IcDURaRdILlNZiI6DlATGXRUCrwZKvza/view?usp=drive_link';

  const day1Events: Event[] = [
    { name: 'Minutes to Fame', codename: 'KŌKAKU', era: '2021', zodiac: '♍', tagline: 'Precision under pressure', registerUrl: 'https://forms.gle/kG4JX9DUwWHVx5g26' },
    { name: 'Adzap', codename: 'VENDITA', era: '2004', zodiac: '♐', tagline: 'Convince before time runs out.', registerUrl: 'https://forms.gle/Svr9VFg85zcnDWdg6' },
    { name: 'Battle of Bands', codename: 'SONORÉ', era: '1956', zodiac: '♐', tagline: 'Sound that refuses silence', registerUrl: 'https://forms.gle/Hn2rdMSQWadddd9n6' },
    { name: 'Shipwreck', codename: 'NAUFRAGIUM', era: '2007', zodiac: '♏', tagline: 'Only the resilient remain.', registerUrl: 'https://forms.gle/zpDUNAzdKDwxjhB4A' },
    { name: 'Mime', codename: 'SIGĒ', era: '1724', zodiac: '♍', tagline: 'Silence that speaks.', registerUrl: 'https://forms.gle/6fX6KA3y7joRdt9t9' },
    { name: 'Channel Surfing', codename: 'ZAPPING', era: '1983', zodiac: '♊', tagline: 'Change is the challenge.', registerUrl: 'https://forms.gle/XpxkjcPg5uNjhrdX8' },
    { name: 'Stress Interview', codename: 'PROBATIO', era: '1998', zodiac: '♑', tagline: 'Pressure reveals power.', registerUrl: 'https://forms.gle/kcjwXmJeU42jdfDS6' },
    { name: 'Anime Quiz', codename: 'GENKAI', era: '2001', zodiac: '♓', tagline: 'Beyond reality.', registerUrl: 'https://forms.gle/fkNyi7rSyKKw6t4W8' },
    { name: 'Green Screen', codename: 'VIRTUA', era: '2023', zodiac: '♒', tagline: 'Reality is optional.', registerUrl: 'https://forms.gle/5L5NMRs9smdtC8Dc6' },
    { name: 'Potpourri', codename: 'VARIUS', era: '1964', zodiac: '♌', tagline: 'All talent. One stage.', registerUrl: 'https://forms.gle/fywWqN3U9DUr1i2q6' },
    { name: 'Film Critic', codename: 'SPECTĀRE', era: '1927', zodiac: '♒', tagline: 'See beyond the screen.', registerUrl: 'https://forms.gle/gdpBoiGvD6Necqmj6' },
    { name: 'Face Painting', codename: 'VÉRA', era: '2020', zodiac: '♈', tagline: 'Wear who you are.', registerUrl: 'https://forms.gle/vtwytuWJcy2SsL2d9' },
    { name: 'Canvas Painting', codename: 'AUREA', era: '1769', zodiac: '♌', tagline: 'Revive the timeless.', registerUrl: 'https://forms.gle/oyc8kZXm6RskcZpo8' },
    { name: 'Cooking Without Fire', codename: 'AMĀRA', era: '1988', zodiac: '♋', tagline: 'Care without flame.', registerUrl: 'https://forms.gle/dSKq3CnJKksKzLev5' },
  ];

  const day2Events: Event[] = [
    { name: 'Group Dance', codename: 'PYRRHÍCHIOS', era: '1760s', zodiac: '♈', tagline: 'Movement before language', registerUrl: 'https://forms.gle/7SFGP5TFkQyM2WBn9' },
    { name: 'Title Event', codename: 'SYZYGIA', era: 'Timeless Axis', zodiac: '♈–♓', tagline: 'When all eras align, only one reigns.', registerUrl: 'https://forms.gle/S3K7pLMcBqXprxRb8' },
    { name: 'Debate', codename: 'DIALECTICA', era: '1861', zodiac: '♎', tagline: 'Where logic rules.', registerUrl: 'https://forms.gle/eUxD4uJUDnadbmKN7' },
    { name: 'Business Plan', codename: 'ORDO', era: '2013', zodiac: '♑', tagline: 'Build with intent.', registerUrl: 'https://forms.gle/LVNVEjExrGJNsgPG6' },
    { name: 'Brainstorm', codename: 'NOESIS', era: '2017', zodiac: '♒', tagline: 'Ideas in motion.', registerUrl: 'https://forms.gle/ACyRFaqVU6tL8bdV8' },
    { name: 'Creative Writing', codename: 'SCRIPTUM', era: '1738', zodiac: '♊', tagline: 'Words outlive time.', registerUrl: 'https://forms.gle/oN7sbjPSZuCLHVUt9' },
    { name: 'Poetry', codename: 'RASA', era: '1781', zodiac: '♓', tagline: 'Feel, not read.', registerUrl: 'https://forms.gle/gWcGwdAgRBgxNCCa7' },
    { name: 'Football Transfer Window', codename: 'AGON', era: '1932', zodiac: '♈', tagline: 'Rivalry becomes ritual.', registerUrl: 'https://forms.gle/DxktJnTQDJ9JNVCPA' },
    { name: 'Best Manager', codename: 'RECTOR', era: '1836', zodiac: '♑', tagline: 'Authority earned.', registerUrl: 'https://forms.gle/gTzV5hzmvEdZxfM36' },
    { name: 'ILP Auction', codename: 'MERX', era: '1994', zodiac: '♐', tagline: 'Risk decides reward.', registerUrl: 'https://forms.gle/VGRLCqkpgrj44zk67' },
    { name: 'Murder Mystery', codename: 'ARCĀNUM', era: '1893', zodiac: '♏', tagline: 'Every secret leaves a trace.', registerUrl: 'https://forms.gle/eARzg5iPneTXz5n46' },
    { name: 'Photography', codename: 'LUMEN', era: '1854', zodiac: '♍', tagline: 'Freeze what fades.', registerUrl: 'https://forms.gle/RXVjiNmg3a61s4do7' },
    { name: 'Art From Waste', codename: 'ALCHEMIA', era: '2015', zodiac: '♉', tagline: 'Nothing is worthless.', registerUrl: 'https://forms.gle/RAFTXXLg2xMtf4Xj8' },
  ];

  const onlineEvents: Event[] = [
    { name: 'Meme Creation', codename: 'IRŌNIA', era: '2022', zodiac: '♊', tagline: 'Humor with intent.', registerUrl: 'https://forms.gle/VyGWAbzAydSRBgTCA' },
    { name: 'Logo Designing', codename: 'SIGILLUM', era: '2010', zodiac: '♍', tagline: 'Identity, distilled.', registerUrl: 'https://forms.gle/HvW1myMhFjoGHGTU9' },
    { name: 'Poster Making', codename: 'FORMA', era: '2011', zodiac: '♎', tagline: 'Design that demands attention.', registerUrl: 'https://forms.gle/ZKFGmN3Z6LowR4Nw8' },
    { name: 'Short Film', codename: 'CADRE', era: '1946', zodiac: '♌', tagline: 'Stories within borders.', registerUrl: 'https://forms.gle/jTAo1yC6Ag1hPdGq6' },
    { name: 'Reel Making', codename: 'ICTUS', era: '2024', zodiac: '♌', tagline: 'One moment. Full impact.', registerUrl: 'https://forms.gle/Eaiipf6e5ae2D1SBA' },
    { name: 'Script Writing', codename: 'KATHARSIS', era: '1738', zodiac: '♊', tagline: 'Words outlive time.', registerUrl: 'https://forms.gle/xitdak4BeAxbqCccA' },
  ];

  const eventsMap = {
    day1: day1Events,
    day2: day2Events,
    online: onlineEvents,
  };

  const currentEvents = eventsMap[activeTab];

  return (
    <section id="events" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e0014] via-[#380A2D] to-[#1e0014]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-[#B0903B] text-9xl">♓</div>
        <div className="absolute bottom-20 right-20 text-[#B0903B] text-8xl">♈</div>
        <div className="absolute top-1/2 right-1/4 text-[#B0903B] text-7xl">♊</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-[#B0903B] mb-4 tracking-wider">
            TIMELINE PORTALS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B0903B] to-transparent mx-auto mb-8"></div>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { key: 'day1', label: 'Day 1' },
            { key: 'day2', label: 'Day 2' },
            { key: 'online', label: 'Online' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as 'day1' | 'day2' | 'online')}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-[#B0903B] text-[#1e0014] shadow-lg shadow-[#B0903B]/50 scale-110'
                  : 'bg-[#380A2D]/50 text-[#B0903B] border-2 border-[#B0903B]/50 hover:border-[#B0903B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedEvent(event)}
              className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-[#DEA193] hover:shadow-2xl hover:shadow-[#B0903B]/30 group relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 text-5xl text-[#B0903B]/20 group-hover:text-[#B0903B]/40 transition-all">
                {event.zodiac}
              </div>

              <h3 className="text-2xl font-bold text-[#DEA193] mb-2 group-hover:text-[#B0903B] transition-colors">
                {event.name}
              </h3>

              <p className="text-[#B0903B] font-mono text-sm mb-2">{event.codename}</p>

              <div className="flex items-center gap-2 text-sm text-[#B0903B]/70 mb-3">
                <span>🕰️ {event.era}</span>
                <span>•</span>
                <span>{event.zodiac}</span>
              </div>

              <p className="text-[#DEA193]/80 italic text-sm">{event.tagline}</p>

              <div className="mt-4 text-[#B0903B] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Click to reveal details
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-[#380A2D] border-4 border-[#B0903B] rounded-lg max-w-2xl w-full p-8 relative animate-scaleIn shadow-2xl shadow-[#B0903B]/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-[#B0903B] hover:text-[#DEA193] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="text-center mb-6">
              <div className="text-7xl text-[#B0903B]/30 mb-4">{selectedEvent.zodiac}</div>
              <h2 className="text-4xl font-bold text-[#DEA193] mb-2">{selectedEvent.name}</h2>
              <p className="text-2xl text-[#B0903B] font-mono mb-2">{selectedEvent.codename}</p>
              <p className="text-[#B0903B]/70">Era: {selectedEvent.era}</p>
            </div>

            <div className="border-t border-b border-[#B0903B]/30 py-6 mb-6">
              <p className="text-xl text-[#DEA193] italic text-center">{selectedEvent.tagline}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={selectedEvent.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#B0903B] text-[#1e0014] rounded-full font-bold text-lg hover:bg-[#DEA193] transition-all duration-300 shadow-lg shadow-[#B0903B]/50"
              >
                <ExternalLink className="w-5 h-5" />
                Register Now
              </a>
              <a
                href={rulebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#B0903B] text-[#B0903B] rounded-full font-bold text-lg hover:bg-[#B0903B] hover:text-[#1e0014] transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Check Rules
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
