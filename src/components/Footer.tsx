import { MessageCircle, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e0014] via-[#380A2D] to-[#1e0014]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[#B0903B] text-6xl">♓</div>
        <div className="absolute bottom-10 right-10 text-[#B0903B] text-6xl">♈</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B0903B] mb-4 tracking-wider">
            REACH ACROSS TIME
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B0903B] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://chat.whatsapp.com/FbwrSn2tlza3SROzMkJuEY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-6 text-center hover:border-[#B0903B] hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle className="w-12 h-12 text-[#B0903B] mx-auto mb-4 group-hover:text-[#DEA193] transition-colors" />
            <p className="text-[#DEA193] font-bold mb-2">WhatsApp</p>
            <p className="text-[#B0903B] text-sm">Join Our Group</p>
          </a>

          <a
            href="https://instagram.com/ccc_dgvc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-6 text-center hover:border-[#B0903B] hover:scale-105 transition-all duration-300 group"
          >
            <Instagram className="w-12 h-12 text-[#B0903B] mx-auto mb-4 group-hover:text-[#DEA193] transition-colors" />
            <p className="text-[#DEA193] font-bold mb-2">Instagram</p>
            <p className="text-[#B0903B] text-sm">@ccc_dgvc</p>
          </a>

          <div className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-6 text-center">
            <Phone className="w-12 h-12 text-[#B0903B] mx-auto mb-4" />
            <p className="text-[#DEA193] font-bold mb-2">Contact Us</p>
            <p className="text-[#B0903B] text-sm">+91 73585 80086</p>
          </div>
        </div>

        <div className="border-t border-[#B0903B]/30 pt-8">
          <div className="text-center space-y-4">
            <p className="text-[#DEA193] text-lg font-bold">
              Citizen Consumer Club (CCC)
            </p>
            <p className="text-[#B0903B]">
              DG Vaishnav College, Chennai
            </p>
            <p className="text-[#B0903B]/70 text-sm italic">
              Where Time Breaks, Talent Doesn't
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#B0903B]/50 text-sm">
              © 2026 Talent Hunt. All eras reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
