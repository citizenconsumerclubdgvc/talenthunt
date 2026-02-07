import { useState } from "react";
import { X, Crown, Users as UsersIcon } from "lucide-react";

interface TeamMember {
  role: string;
  name: string;
  bio: string;
  zodiac: string;
  picture: string;
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const coreTeam: TeamMember[] = [
    {
      role: "President",
      name: "Meenakshi Perumal",
      zodiac: "♌",
      picture: "assets/core-team/1.png",
      bio: "Meenakshi Perumal is the current President of the Citizen Consumer Club, DG Vaishnav College. She stepped into this role at a time when leadership was not easy and expectations were high. Over the year, she has handled the club's work closely, from planning programs to making sure execution happens on ground. Under her presidency, CCC has completed 14 successful initiatives, driven by the belief that responsibility cannot be waited for or spoon-fed it has to be taken. She leads with seriousness, effort, and the mindset that CCC's name must always be carried with value.",
    },
    {
      role: "Vice President",
      name: "Sanjeev",
      zodiac: "♏",
      picture: "assets/core-team/2.png",
      bio: "Sanjeev looks like the most chill person you could meet, and that is exactly the trap. Behind the smiles is the strictest voice of CCC, the one who keeps everyone in line when things get too comfortable. Fun is allowed, but only after the work is done.",
    },
    {
      role: "Secretary",
      name: "D N Naveen",
      zodiac: "♈",
      picture: "assets/core-team/3.png",
      bio: "Naveen is the pulse of the club. Loud in motivation, fast in action, and always the first to push the team forward. If CCC ever feels like it is running on extra energy, it is probably because Naveen decided standing still was illegal.",
    },
    {
      role: "Organizing Secretary",
      name: "B Kotteeswari",
      zodiac: "♍",
      picture: "assets/core-team/4.png",
      bio: "Kotteeswari may not start the fire, but once the work is handed to her, it gets done flawlessly. She is the definition of delegated perfection, quiet in initiative, sharp in execution, and a major reason why CCC stays structured.",
    },
    {
      role: "Joint Secretary",
      name: "Lidia Jenniffer",
      zodiac: "♊",
      picture: "assets/core-team/5.png",
      bio: "Lidia is CCC's official public appearance. Work in the field is optional, but posting about the field is not. She keeps the club visible, aesthetic, and remembered, because every empire needs someone to handle the spotlight while others handle the chaos.",
    },
    {
      role: "Treasurer",
      name: "Thanu Shree R P",
      zodiac: "♎",
      picture: "assets/core-team/6.png",
      bio: "Thanu Shree holds the Treasurer title with grace and good vibes. She may not be the one calculating the universe of finances, but she is always present as the club's tiny constant. Moral support counts as accounting, right?",
    },
    {
      role: "Deputy Treasurer",
      name: "E Kiran Kumar",
      zodiac: "♑",
      picture: "assets/core-team/7.png",
      bio: "Kiran Kumar is the MVP of CCC, no debate. He does everything, finance, fieldwork, execution, support, last minute saves, all of it. The club's pookie and powerhouse combined, the one person CCC can count on in every possible way.",
    },
  ];

  const coordinators: TeamMember[] = [
    {
      name: "Arshad Ahamed",
      picture: "assets/coordinators/1.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Adhvaitha",
      picture: "assets/coordinators/2.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Fyshel Ahamed Sherif",
      picture: "assets/coordinators/3.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Jeevan",
      picture: "assets/coordinators/4.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Jishnu",
      picture: "assets/coordinators/5.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Kiruthick",
      picture: "assets/coordinators/6.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Mantira",
      picture: "assets/coordinators/7.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Pavithra",
      picture: "assets/coordinators/8.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Sagar Jharbade",
      picture: "assets/coordinators/9.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Sakthivel Rao",
      picture: "assets/coordinators/10.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Sankaran",
      picture: "assets/coordinators/11.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Tamil Arasu",
      picture: "assets/coordinators/12.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Mukund",
      picture: "assets/coordinators/13.png",
      role: "",
      zodiac: "",
      bio: "",
    },
    {
      name: "Renishwar",
      picture: "assets/coordinators/14.png",
      role: "",
      zodiac: "",
      bio: "",
    },
  ];

  const rookies = [
    "Anshul Singh",
    "Carol Vamshika",
    "Harini",
    "Haritha",
    "Rohith Kumbhat",
    "Sandhiya",
  ];

  const faculty = {
    secretary: "Shri Ashok Mundra",
    principal: "Dr. S. Santhosh Baboo",
    convener: "Dr. S. Seshadrinathan",
    programOfficer: "Dr. K. B. Manikandan",
    coordinators: [
      "Dr. A. G. Vijayanarayanan",
      "Dr. V Minar",
      "Mr. C Avanish",
      "Dr. V Sathish Kumar",
      "Dr. S Madhu Sudan",
    ],
  };

  return (
    <section
      id="team"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e0014] via-[#380A2D]/90 to-[#1e0014]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[#B0903B] text-8xl">
          ♓
        </div>
        <div className="absolute top-1/3 right-10 text-[#B0903B] text-7xl">
          ♑
        </div>
        <div className="absolute bottom-20 left-1/4 text-[#B0903B] text-6xl">
          ♊
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Crown className="w-16 h-16 text-[#B0903B] mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-bold text-[#B0903B] mb-4 tracking-wider">
            TAROT COUNCIL
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B0903B] to-transparent mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#DEA193] text-center mb-8 tracking-wide">
            Core Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreTeam.map((member, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMember(member)}
                className="relative bg-gradient-to-b from-[#380A2D] to-[#1e0014] border-4 border-[#B0903B] rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-[#B0903B]/50 group"
              >
                <div className="absolute top-2 right-2 text-4xl text-[#B0903B]/30 group-hover:text-[#B0903B]/60 transition-all">
                  {member.zodiac}
                </div>

                <div className="h-32 flex items-center justify-center mb-4">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center group-hover:border-[#DEA193] transition-colors">
                    <img src={member.picture} alt={`${member.name}'s picture`} />
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-[#B0903B] uppercase tracking-widest mb-2">
                    {member.role}
                  </p>
                  <h4 className="text-xl font-bold text-[#DEA193] group-hover:text-[#B0903B] transition-colors">
                    {member.name}
                  </h4>
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-xs text-[#B0903B] opacity-0 group-hover:opacity-100 transition-opacity">
                    Tap to reveal destiny
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#DEA193] text-center mb-8 tracking-wide">
            Coordinators
          </h3>
          <div className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {coordinators.map(({name, picture}, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-10 p-3 bg-[#1e0014]/50 rounded border border-[#B0903B]/30 hover:border-[#B0903B] hover:bg-[#380A2D]/50 transition-all duration-300"
                >
                  <div className="w-24 h-24">
                    <img src={picture} alt={`${name}'s picture`} />
                  </div>
                  <div className="text-[#DEA193] text-sm">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#DEA193] text-center mb-8 tracking-wide">
            Rookie Members
          </h3>
          <div className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {rookies.map((name, idx) => (
                <div
                  key={idx}
                  className="text-center p-3 bg-[#1e0014]/50 rounded border border-[#B0903B]/30 hover:border-[#B0903B] hover:bg-[#380A2D]/50 transition-all duration-300"
                >
                  <p className="text-[#DEA193] text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#DEA193] text-center mb-8 tracking-wide">
            Faculty Support
          </h3>
          <div className="bg-[#380A2D]/50 backdrop-blur-sm border-2 border-[#B0903B]/50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border-l-4 border-[#B0903B] pl-4">
                <p className="text-[#B0903B] text-sm uppercase tracking-wider mb-1">
                  College Secretary
                </p>
                <p className="text-[#DEA193] font-bold">{faculty.secretary}</p>
              </div>
              <div className="border-l-4 border-[#B0903B] pl-4">
                <p className="text-[#B0903B] text-sm uppercase tracking-wider mb-1">
                  Principal
                </p>
                <p className="text-[#DEA193] font-bold">{faculty.principal}</p>
              </div>
              <div className="border-l-4 border-[#B0903B] pl-4">
                <p className="text-[#B0903B] text-sm uppercase tracking-wider mb-1">
                  Convener
                </p>
                <p className="text-[#DEA193] font-bold">{faculty.convener}</p>
              </div>
              <div className="border-l-4 border-[#B0903B] pl-4">
                <p className="text-[#B0903B] text-sm uppercase tracking-wider mb-1">
                  Program Officer
                </p>
                <p className="text-[#DEA193] font-bold">
                  {faculty.programOfficer}
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0903B]/30 pt-6">
              <p className="text-[#B0903B] text-sm uppercase tracking-wider mb-4">
                Faculty Coordinators
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {faculty.coordinators.map((name, idx) => (
                  <p key={idx} className="text-[#DEA193]">
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-gradient-to-b from-[#380A2D] to-[#1e0014] border-4 border-[#B0903B] rounded-lg max-w-2xl w-full p-8 relative animate-scaleIn shadow-2xl shadow-[#B0903B]/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-[#B0903B] hover:text-[#DEA193] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="text-center mb-6">
              <div className="text-7xl text-[#B0903B]/30 mb-4">
                {selectedMember.zodiac}
              </div>
              <p className="text-sm text-[#B0903B] uppercase tracking-widest mb-2">
                {selectedMember.role}
              </p>
              <h2 className="text-4xl font-bold text-[#DEA193] mb-6">
                {selectedMember.name}
              </h2>
            </div>

            <div className="border-t border-b border-[#B0903B]/30 py-6">
              <p className="text-[#DEA193]/90 leading-relaxed text-center">
                {selectedMember.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
