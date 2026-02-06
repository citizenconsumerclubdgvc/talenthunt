import { useState } from 'react';
import { ChevronDown, Award, Users, Building2, Trophy } from 'lucide-react';

interface AboutCard {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: string[];
  zodiac: string;
}

export default function About() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const aboutCards: AboutCard[] = [
    {
      id: 1,
      title: 'About Talent Hunt (Since 2020)',
      icon: <Trophy className="w-8 h-8" />,
      zodiac: '♌',
      content: [
        'Talent Hunt is the flagship cultural phenomenon of CCC, created to uncover brilliance across eras and provide a podium where talent transcends boundaries.',
        'This event has become a cornerstone of creative expression, bringing together diverse talents from across time and space in a celebration of human potential.',
      ],
    },
    {
      id: 2,
      title: 'About CCC',
      icon: <Users className="w-8 h-8" />,
      zodiac: '♎',
      content: [
        'Citizen Consumer Club of DG Vaishnav College, in association with the Civil Supplies and Consumer Protection Department, Government of Tamil Nadu, began on 18.08.2008 to create consumer awareness through impactful initiatives.',
        'The club has been instrumental in shaping informed citizens who understand their rights and responsibilities in the consumer ecosystem.',
      ],
    },
    {
      id: 3,
      title: 'Achievements',
      icon: <Award className="w-8 h-8" />,
      zodiac: '♈',
      content: [
        '11 District Awards and 3 State Awards for Best Club',
        'Recognised by ministers and media for outstanding awareness efforts',
        '14 successful programs completed under President Meenakshi Perumal (2025–26)',
        'Consistent excellence in consumer awareness campaigns and cultural initiatives',
      ],
    },
    {
      id: 4,
      title: 'About DG Vaishnav College',
      icon: <Building2 className="w-8 h-8" />,
      zodiac: '♐',
      content: [
        'Autonomous, NAAC A++ Grade institution',
        'Affiliated to University of Madras, Chennai',
        'A prestigious institution fostering academic excellence and holistic development',
        'Home to vibrant student clubs and cultural activities that shape future leaders',
      ],
    },
  ];

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e0014] via-[#380A2D]/90 to-[#1e0014]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-[#B0903B] text-8xl">♎</div>
        <div className="absolute bottom-10 left-10 text-[#B0903B] text-7xl">♈</div>
        <div className="absolute top-1/2 left-1/3 text-[#B0903B] text-6xl">♌</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#B0903B] mb-4 tracking-wider">
            THE CHRONICLES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B0903B] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className={`bg-[#380A2D]/50 backdrop-blur-sm border-2 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                expandedCard === card.id
                  ? 'border-[#DEA193] shadow-2xl shadow-[#DEA193]/30'
                  : 'border-[#B0903B]/50 hover:border-[#B0903B]'
              }`}
              onClick={() => toggleCard(card.id)}
            >
              <div className="p-6 relative">
                <div className="absolute top-4 right-4 text-4xl text-[#B0903B]/30">{card.zodiac}</div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#B0903B]">{card.icon}</div>
                  <h3 className="text-xl font-bold text-[#DEA193]">{card.title}</h3>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    expandedCard === card.id ? 'max-h-[500px] opacity-100' : 'max-h-[60px] opacity-70'
                  }`}
                >
                  {card.content.map((paragraph, idx) => (
                    <p key={idx} className="text-[#B0903B]/90 mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex justify-center mt-4">
                  <ChevronDown
                    className={`w-6 h-6 text-[#B0903B] transition-transform duration-300 ${
                      expandedCard === card.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
