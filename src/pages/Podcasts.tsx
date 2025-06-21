
import Header from '../components/Header';

const Podcasts = () => {
  const episodes = [
    {
      title: 'The Future of Software Development',
      description: 'Discussing emerging technologies and their impact on the development landscape.',
      duration: '45:32',
      date: '2024-01-20',
      spotify: '#',
      youtube: '#'
    },
    {
      title: 'Building Successful Startups',
      description: 'Insights from successful entrepreneurs on building and scaling tech companies.',
      duration: '52:18',
      date: '2024-01-13',
      spotify: '#',
      youtube: '#'
    },
    {
      title: 'Mobile App Monetization Strategies',
      description: 'Expert advice on different ways to monetize mobile applications effectively.',
      duration: '38:45',
      date: '2024-01-06',
      spotify: '#',
      youtube: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4">Podcasts</h1>
            <p className="text-gray-400 text-lg">
              Weekly discussions about technology, development, and entrepreneurship.
            </p>
          </div>
          
          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{episode.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>{episode.date}</span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 ml-6">
                    <a 
                      href={episode.spotify}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Spotify
                    </a>
                    <a 
                      href={episode.youtube}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Podcasts;
