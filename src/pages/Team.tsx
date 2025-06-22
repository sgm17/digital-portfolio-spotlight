import Footer from "@/components/Footer";
import Header from "../components/Header";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Software Developer",
      bio: "Full-stack developer with 8+ years of experience building scalable applications.",
      image: "/placeholder-avatar.jpg",
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Creative designer passionate about creating beautiful and functional user experiences.",
      image: "/placeholder-avatar.jpg",
    },
    {
      name: "Michael Johnson",
      role: "Product Manager",
      bio: "Strategic thinker focused on delivering products that solve real-world problems.",
      image: "/placeholder-avatar.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto py-16">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the talented individuals behind Invelex's innovative software
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 bg-gray-600 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
