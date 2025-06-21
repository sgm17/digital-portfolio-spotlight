
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const projectData = {
    'socialice-1': {
      name: 'SOCIALICE',
      description: 'A revolutionary social networking platform that connects people worldwide through innovative features and seamless user experience. Built with modern technologies to ensure scalability and performance.',
      metrics: {
        totalDownloads: '2.5M',
        revenuePerMonth: '$0',
        activeUsers: '1M',
        monetization: 'ADS'
      },
      screenshots: [
        '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
        '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
        '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png',
        '/lovable-uploads/439867e8-04ef-4f1d-b56d-5ee882b446df.png'
      ],
      testimonials: [
        {
          user: 'Sarah Johnson',
          rating: 5,
          comment: 'Amazing app! The user interface is so intuitive and the features are exactly what I needed.'
        },
        {
          user: 'Mike Chen',
          rating: 5,
          comment: 'Best social platform I have used. Great for connecting with like-minded people.'
        },
        {
          user: 'Emily Rodriguez',
          rating: 4,
          comment: 'Fantastic app with regular updates. Love the community features!'
        }
      ]
    }
  };

  const project = projectData[id as keyof typeof projectData] || projectData['socialice-1'];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto py-16">
          {/* Project Header */}
          <section className="mb-16">
            <h1 className="text-5xl font-bold mb-6">{project.name}</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </section>

          {/* Core Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Total Downloads</h3>
                <p className="text-3xl font-bold text-blue-400">{project.metrics.totalDownloads}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Revenue/Month</h3>
                <p className="text-3xl font-bold text-green-400">{project.metrics.revenuePerMonth}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Active Users</h3>
                <p className="text-3xl font-bold text-purple-400">{project.metrics.activeUsers}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Monetization</h3>
                <p className="text-3xl font-bold text-orange-400">{project.metrics.monetization}</p>
              </div>
            </div>
          </section>

          {/* Screenshots */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="aspect-video bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img 
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="text-3xl font-bold mb-8">User Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.user}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.comment}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
