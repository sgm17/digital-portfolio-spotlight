
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      id: 'socialice-1',
      name: 'SOCIALICE',
      users: '1M',
      revenue: '0$',
      image: '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
      description: 'Social networking platform connecting people worldwide'
    },
    {
      id: 'socialice-2',
      name: 'SOCIALICE',
      users: '1M',
      revenue: '0$',
      image: '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
      description: 'Enhanced social features and community building'
    },
    {
      id: 'socialice-3',
      name: 'SOCIALICE',
      users: '1M',
      revenue: '0$',
      image: '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
      description: 'Advanced social analytics and insights'
    },
    {
      id: 'socialice-4',
      name: 'SOCIALICE',
      users: '1M',
      revenue: '0$',
      image: '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
      description: 'Premium social networking experience'
    },
    {
      id: 'socialice-5',
      name: 'SOCIALICE',
      users: '1M',
      revenue: '0$',
      image: '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
      description: 'Mobile-first social platform'
    },
    {
      id: 'socialice-6',
      name: 'SOCIALICE',
      users: '1M',
      revenue: '0$',
      image: '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
      description: 'Enterprise social solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Solving real-world problems with
                <br />
                innovative software solutions
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gray-400">Latest</span>
                <span className="text-blue-400">invelex/Start A New Flutter Project</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                Since I was a kid, I have realized how powerful software is. Immersed in the technological age, everything around us is aimed at solving real-world problems. That's the goal of Invelex. Invelex is a holding company of applications whose objective is to address real-world issues through software. Additionally, it contributes to the developer community through its blog and podcasts.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>

          {/* Team Section Preview */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-12">Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-semibold mb-2">Name</h3>
                  <p className="text-gray-400">Software Developer</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-gray-400 text-sm">© Invelex 2024</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Spotify</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
