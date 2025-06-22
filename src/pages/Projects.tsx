import Footer from "@/components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "socialice-1",
      name: "SOCIALICE",
      users: "1M",
      revenue: "0$",
      image: "/lovable-uploads/logo.png",
      description: "Social networking platform connecting people worldwide",
    },
    {
      id: "socialice-2",
      name: "SOCIALICE Pro",
      users: "500K",
      revenue: "15K$",
      image: "/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png",
      description: "Premium version with advanced features and analytics",
    },
    {
      id: "taskmaster",
      name: "TaskMaster",
      users: "250K",
      revenue: "8K$",
      image: "/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png",
      description: "Professional task management and productivity tool",
    },
    {
      id: "chatwave",
      name: "ChatWave",
      users: "2M",
      revenue: "25K$",
      image: "/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png",
      description: "Real-time messaging platform for teams and communities",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-gray-400 text-lg">
              Innovative applications solving real-world problems through
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
