import { Calendar, FileText, CheckCircle } from 'lucide-react';

export default function Rules() {
  const rulebookUrl = 'https://drive.google.com/file/d/1hY0RfE-WnQQRd9O5SK0_CyXYSOe5mCGN/view?usp=drivesdk';

  return (
    <section id="rules" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e0014] via-[#380A2D] to-[#1e0014]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 text-[#B0903B] text-8xl">♎</div>
        <div className="absolute bottom-20 left-20 text-[#B0903B] text-7xl">♑</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <FileText className="w-16 h-16 text-[#B0903B] mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-bold text-[#B0903B] mb-4 tracking-wider">
            THE DECREE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B0903B] to-transparent mx-auto"></div>
        </div>

        <div className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-8 mb-8">
          <h3 className="text-3xl font-bold text-[#DEA193] mb-6 text-center">Event Timeline</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1e0014]/50 border border-[#B0903B] rounded-lg p-6 text-center">
              <Calendar className="w-12 h-12 text-[#B0903B] mx-auto mb-4" />
              <p className="text-[#B0903B] text-sm uppercase tracking-widest mb-2">Inauguration</p>
              <p className="text-3xl font-bold text-[#DEA193]">23rd February</p>
              <p className="text-[#B0903B] text-sm mt-2">The Multiverse Opens</p>
            </div>

            <div className="bg-[#1e0014]/50 border border-[#B0903B] rounded-lg p-6 text-center">
              <Calendar className="w-12 h-12 text-[#B0903B] mx-auto mb-4" />
              <p className="text-[#B0903B] text-sm uppercase tracking-widest mb-2">Valedictory</p>
              <p className="text-3xl font-bold text-[#DEA193]">24th February</p>
              <p className="text-[#B0903B] text-sm mt-2">The Era Concludes</p>
            </div>
          </div>

          <div className="border-t border-[#B0903B]/30 pt-8">
            <h4 className="text-2xl font-bold text-[#DEA193] mb-6">General Rules</h4>
            <div className="space-y-4">
              {[
                'College ID mandatory for all participants',
                'Participants must report on time',
                'Judges\' decision is final and binding',
              ].map((rule, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#B0903B] flex-shrink-0 mt-1" />
                  <p className="text-[#DEA193] text-lg">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={rulebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#B0903B] text-[#1e0014] rounded-full font-bold text-lg hover:bg-[#DEA193] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#B0903B]/50"
          >
            <FileText className="w-6 h-6" />
            View Complete Rulebook
          </a>
        </div>
      </div>
    </section>
  );
}
